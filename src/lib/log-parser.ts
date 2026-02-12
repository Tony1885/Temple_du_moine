// ============================================================
// Combat Log Parser - Extracts relevant events from WoW logs
// ============================================================

import { CombatLogEvent } from "./types";

// Relevant event types for analysis
const RELEVANT_EVENTS = new Set([
    "SPELL_DAMAGE",
    "SPELL_PERIODIC_DAMAGE",
    "SWING_DAMAGE",
    "RANGE_DAMAGE",
    "SPELL_HEAL",
    "SPELL_PERIODIC_HEAL",
    "SPELL_AURA_APPLIED",
    "SPELL_AURA_REMOVED",
    "SPELL_AURA_REFRESH",
    "SPELL_CAST_SUCCESS",
    "SPELL_CAST_START",
    "SPELL_MISSED",
    "UNIT_DIED",
    "ENCOUNTER_START",
    "ENCOUNTER_END",
    "SPELL_SUMMON",
    "ENVIRONMENTAL_DAMAGE",
]);

/**
 * Parse a raw WoW combat log into structured events.
 * Filters out irrelevant events to optimize token usage for AI analysis.
 */
export function parseCombatLog(rawLog: string): CombatLogEvent[] {
    const lines = rawLog.split("\n").filter((line) => line.trim().length > 0);
    const events: CombatLogEvent[] = [];

    for (const line of lines) {
        try {
            const event = parseLine(line);
            if (event && RELEVANT_EVENTS.has(event.eventType)) {
                events.push(event);
            }
        } catch {
            // Skip malformed lines
            continue;
        }
    }

    return events;
}

function parseLine(line: string): CombatLogEvent | null {
    // WoW combat log format: "timestamp  eventType,sourceGUID,sourceName,sourceFlags,destGUID,destName,destFlags,..."
    const timestampMatch = line.match(/^(\d+\/\d+\s+[\d:\.]+)\s{2}/);
    if (!timestampMatch) return null;

    const timestamp = timestampMatch[1];
    const dataStr = line.substring(timestampMatch[0].length);
    const parts = splitCSVLine(dataStr);

    if (parts.length < 8) return null;

    return {
        timestamp,
        eventType: parts[0],
        sourceGUID: parts[1],
        sourceName: parts[2],
        sourceFlags: parts[3],
        destGUID: parts[4] || "",
        destName: parts[5] || "",
        destFlags: parts[6] || "",
        rawData: parts.slice(7),
    };
}

function splitCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
            result.push(current.trim());
            current = "";
        } else {
            current += char;
        }
    }

    if (current) {
        result.push(current.trim());
    }

    return result;
}

/**
 * Extract a summary of the combat log for AI processing.
 * Reduces token usage by aggregating data.
 */
export function summarizeForAI(events: CombatLogEvent[]): string {
    const damageBySource: Record<string, number> = {};
    const healingBySource: Record<string, number> = {};
    const auraEvents: string[] = [];
    const deaths: string[] = [];
    let encounterInfo = "";

    for (const event of events) {
        switch (event.eventType) {
            case "SPELL_DAMAGE":
            case "SPELL_PERIODIC_DAMAGE":
            case "SWING_DAMAGE":
            case "RANGE_DAMAGE": {
                const key = `${event.sourceName}`;
                const amount = parseInt(event.rawData[0] || "0", 10);
                damageBySource[key] = (damageBySource[key] || 0) + amount;
                break;
            }
            case "SPELL_HEAL":
            case "SPELL_PERIODIC_HEAL": {
                const key = `${event.sourceName}`;
                const amount = parseInt(event.rawData[0] || "0", 10);
                healingBySource[key] = (healingBySource[key] || 0) + amount;
                break;
            }
            case "UNIT_DIED":
                deaths.push(`${event.destName} died at ${event.timestamp}`);
                break;
            case "ENCOUNTER_START":
                encounterInfo = `Encounter: ${event.rawData.join(",")}`;
                break;
            case "SPELL_AURA_APPLIED":
            case "SPELL_AURA_REMOVED":
                if (auraEvents.length < 500) {
                    auraEvents.push(
                        `${event.timestamp}: ${event.eventType} - ${event.sourceName} -> ${event.destName}: ${event.rawData[0] || "unknown"}`
                    );
                }
                break;
        }
    }

    const summary = [
        `=== COMBAT LOG SUMMARY ===`,
        encounterInfo,
        `\n--- TOTAL DAMAGE BY SOURCE ---`,
        ...Object.entries(damageBySource)
            .sort(([, a], [, b]) => b - a)
            .map(([name, dmg]) => `${name}: ${dmg.toLocaleString()}`),
        `\n--- TOTAL HEALING BY SOURCE ---`,
        ...Object.entries(healingBySource)
            .sort(([, a], [, b]) => b - a)
            .map(([name, heal]) => `${name}: ${heal.toLocaleString()}`),
        `\n--- DEATHS ---`,
        ...deaths,
        `\n--- KEY AURA EVENTS (sample) ---`,
        ...auraEvents.slice(0, 100),
        `\n--- STATS ---`,
        `Total events processed: ${events.length}`,
    ].join("\n");

    return summary;
}

/**
 * Anonymize player names in the log data
 */
export function anonymizeNames(
    events: CombatLogEvent[]
): CombatLogEvent[] {
    const nameMap = new Map<string, string>();
    let counter = 1;

    const getAnonymized = (name: string): string => {
        if (!nameMap.has(name)) {
            nameMap.set(name, `Player${counter++}`);
        }
        return nameMap.get(name)!;
    };

    return events.map((event) => ({
        ...event,
        sourceName: getAnonymized(event.sourceName),
        destName: event.destName ? getAnonymized(event.destName) : "",
    }));
}

/**
 * Validate that a file looks like a WoW combat log
 */
export function validateCombatLog(content: string): {
    valid: boolean;
    error?: string;
} {
    if (!content || content.trim().length === 0) {
        return { valid: false, error: "Le fichier est vide." };
    }

    const lines = content.split("\n").filter((l) => l.trim().length > 0);
    if (lines.length < 10) {
        return {
            valid: false,
            error: "Le fichier est trop court pour être un log de combat valide.",
        };
    }

    // Check if first few lines match WoW combat log format
    const timestampPattern = /^\d+\/\d+\s+[\d:\.]+\s{2}/;
    let matchCount = 0;
    for (let i = 0; i < Math.min(10, lines.length); i++) {
        if (timestampPattern.test(lines[i])) {
            matchCount++;
        }
    }

    if (matchCount < 3) {
        return {
            valid: false,
            error:
                "Le format du fichier ne correspond pas à un log de combat WoW. Assurez-vous d'utiliser un fichier WoWCombatLog.txt.",
        };
    }

    return { valid: true };
}
