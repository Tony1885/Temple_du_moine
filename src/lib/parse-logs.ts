/**
 * Parsing intelligent des logs pour Gemini 1.5 Flash
 */

export function parseLogsForGemini(rawLog: string): string {
    const cleanContent = rawLog.startsWith("\uFEFF") ? rawLog.slice(1) : rawLog;
    // Fast split without large intermediate arrays
    const lines = cleanContent.split("\n");

    const MAX_LINES = 8000; // Slightly reduced to be safer with token limits
    const result: string[] = [];

    // 1. Find key points (Encounters and Challenge Modes)
    const encounterRanges: [number, number][] = [];
    let currentStart = -1;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes("CHALLENGE_MODE_START") || line.includes("CHALLENGE_MODE_END")) {
            result.push(line);
        }
        if (line.includes("ENCOUNTER_START")) {
            currentStart = i;
        } else if (line.includes("ENCOUNTER_END") && currentStart !== -1) {
            encounterRanges.push([currentStart, i]);
            currentStart = -1;
        }
    }

    // 2. Add Encounter lines (Bosses)
    for (const [start, end] of encounterRanges) {
        if (result.length >= MAX_LINES) break;
        // Limit each individual encounter size if it's massive
        const encounterSize = end - start;
        if (encounterSize > 5000) {
            result.push(...lines.slice(start, start + 2500));
            result.push("... [COMBAT TRUNCATED] ...");
            result.push(...lines.slice(end - 2500, end + 1));
        } else {
            result.push(...lines.slice(start, end + 1));
        }
    }

    // 3. Add high-value context if we have space
    if (result.length < MAX_LINES) {
        const remaining = MAX_LINES - result.length;
        // Take some context from the very end of the file
        const endBuffer = lines.slice(-remaining * 2);
        for (const line of endBuffer) {
            if (result.length >= MAX_LINES) break;
            if (!line.includes("ENCOUNTER_") && line.trim().length > 0) {
                result.push(line);
            }
        }
    }

    return result.join("\n");
}
