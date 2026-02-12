/**
 * Raider.io API Helper
 * Fetches character profile, scores, progression and talents
 */

export interface RaiderIOProfile {
    name: string;
    race: string;
    class: string;
    active_spec_name: string;
    active_spec_role: string;
    gender: string;
    faction: string;
    thumbnail_url: string;
    region: string;
    realm: string;
    profile_url: string;
    profile_banner: string;
    mythic_plus_scores_by_season: {
        season: string;
        scores: {
            all: number;
            dps: number;
            healer: number;
            tank: number;
        };
    }[];
    raid_progression: {
        [raidSlug: string]: {
            summary: string;
            total_bosses: number;
            normal_bosses_killed: number;
            heroic_bosses_killed: number;
            mythic_bosses_killed: number;
        };
    };
    talents?: string; // Blizzard Talent String
}

export async function fetchRaiderIOProfile(region: string, realm: string, name: string): Promise<RaiderIOProfile | null> {
    try {
        const fields = [
            "talents",
            "mythic_plus_scores_by_season:current",
            "raid_progression"
        ].join(",");

        const url = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${encodeURIComponent(name)}&fields=${fields}`;

        console.log(`[Raider.io] Fetching: ${url}`);
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`[Raider.io] Error: ${response.status} ${response.statusText}`);
            return null;
        }

        const data = await response.json();
        return data as RaiderIOProfile;
    } catch (error) {
        console.error("[Raider.io] Fetch failed:", error);
        return null;
    }
}
