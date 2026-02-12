/**
 * Raider.io API Helper
 * Fetches character profile and talents
 */

export interface RaiderIOCharacter {
    name: string;
    race: string;
    class: string;
    active_spec_name: string;
    active_spec_role: string;
    gender: string;
    faction: string;
    achievement_points: number;
    honorable_kills: number;
    thumbnail_url: string;
    region: string;
    realm: string;
    last_crawled_at: string;
    profile_url: string;
    profile_banner: string;
    talents?: string; // This will hold the Blizzard talent string if fields=talents is used
}

export async function fetchCharacterTalents(region: string, realm: string, name: string): Promise<string | null> {
    try {
        const url = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${encodeURIComponent(name)}&fields=talents`;
        const response = await fetch(url);

        if (!response.ok) {
            console.error(`[Raider.io] Error: ${response.status} ${response.statusText}`);
            return null;
        }

        const data = await response.json();

        // Raider.io returns the "active_spec_talents" in the response when fields=talents is requested
        // The Blizzard Talent String is usually under 'talents' or similar depending on the specific API version
        // However, based on the URL provided, let's check the structure.

        if (data.talents) {
            return data.talents;
        }

        return null;
    } catch (error) {
        console.error("[Raider.io] Fetch failed:", error);
        return null;
    }
}
