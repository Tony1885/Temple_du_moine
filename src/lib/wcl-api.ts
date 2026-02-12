// ============================================================
// Warcraft Logs API v2 Fetcher
// Handles OAuth and GraphQL queries to fetch parse and rank data
// ============================================================

export interface WCLRankingData {
    encounterId: number;
    encounterName: string;
    rank: number;
    outOf: number;
    percentile: number;
    amount: number;
    spec: string;
}

/**
 * Fetches ranking data from Warcraft Logs for a specific character
 */
export async function fetchWCLRankings(
    characterName: string,
    serverSlug: string,
    region: string
): Promise<WCLRankingData[] | null> {
    const access_token = await getWCLAccessToken();

    if (!access_token) {
        // Fallback or warning
        return null;
    }

    try {
        // Query Rankings via GraphQL (v2 API)
        const query = `
            query {
                characterData {
                    character(name: "${characterName}", serverSlug: "${serverSlug}", serverRegion: "${region}") {
                        zoneRankings
                    }
                }
            }
        `;

        const apiRes = await fetch("https://www.warcraftlogs.com/api/v2/client", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`,
            },
            body: JSON.stringify({ query }),
        });

        if (!apiRes.ok) throw new Error("WCL API request failed");
        const data = await apiRes.json();

        if (data.errors) {
            console.error("[WCL] GraphQL Errors:", data.errors);
            return null;
        }

        const zoneRankings = data.data?.characterData?.character?.zoneRankings;
        if (!zoneRankings || !zoneRankings.rankings) return [];

        // Map WCL v2 rankings to our interface
        return zoneRankings.rankings.map((r: any) => ({
            encounterId: r.encounter?.id,
            encounterName: r.encounter?.name,
            rank: r.rank,
            outOf: r.outOf,
            percentile: r.rankPercent,
            amount: r.amount,
            spec: r.spec
        }));
    } catch (error) {
        console.error("[WCL] Error fetching rankings:", error);
        return null;
    }
}

/**
 * Gets an OAuth2 access token from Warcraft Logs (API v2)
 */
async function getWCLAccessToken(): Promise<string | null> {
    const clientId = process.env.WCL_CLIENT_ID;
    const clientSecret = process.env.WCL_CLIENT_SECRET || process.env.KEY_WACRAFTLOGS;

    if (!clientId || !clientSecret) return null;

    try {
        const res = await fetch("https://www.warcraftlogs.com/oauth/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
        });
        if (!res.ok) return null;
        const { access_token } = await res.json();
        return access_token;
    } catch {
        return null;
    }
}

/**
 * Fetches recent reports for a character (Try v2 then v1 fallback)
 */
export async function fetchCharacterReports(
    name: string,
    serverSlug: string,
    region: string
): Promise<any[]> {
    const token = await getWCLAccessToken();

    // --- Method 1: API v2 (GraphQL) ---
    if (token) {
        const query = `
            query {
                characterData {
                    character(name: "${name}", serverSlug: "${serverSlug}", serverRegion: "${region}") {
                        recentReports(limit: 10) {
                            data {
                                code
                                startTime
                                title
                                zone { name }
                            }
                        }
                    }
                }
            }
        `;

        try {
            const res = await fetch("https://www.warcraftlogs.com/api/v2/client", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({ query }),
            });
            const data = await res.json();
            const reports = data.data?.characterData?.character?.recentReports?.data;
            if (reports) return reports;
        } catch (e) {
            console.error("[WCL] v2 Error:", e);
        }
    }

    // --- Method 2: API v1 Fallback (For single API Key users) ---
    const apiKey = process.env.KEY_WACRAFTLOGS || process.env.WCL_CLIENT_SECRET;
    if (apiKey) {
        try {
            const url = `https://www.warcraftlogs.com:443/v1/reports/character/${encodeURIComponent(name)}/${encodeURIComponent(serverSlug)}/${encodeURIComponent(region)}?api_key=${apiKey}`;
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                return data.map((r: any) => ({
                    code: r.id,
                    startTime: r.start,
                    title: r.title,
                    zone: { name: r.zoneName || "Inconnu" }
                })).slice(0, 10);
            }
        } catch (e) {
            console.error("[WCL] v1 Fallback Error:", e);
        }
    }

    return [];
}

/**
 * Slugifies server names for WCL API (e.g. "Chamber of Aspects" -> "chamber-of-aspects")
 */
export function slugifyServer(server: string): string {
    return server
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/\s+/g, "-")            // Spaces to hyphens
        .replace(/[^\w-]/g, "");         // Remove non-alphanumeric
}
