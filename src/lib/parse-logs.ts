/**
 * Parsing intelligent des logs pour Gemini 1.5 Flash
 */

export function parseLogsForGemini(rawLog: string): string {
    const cleanContent = rawLog.startsWith("\uFEFF") ? rawLog.slice(1) : rawLog;
    const lines = cleanContent.split("\n").filter(line => line.trim().length > 0);

    // 1. Extract Boss Encounters (The most important parts)
    const encounterLines: string[] = [];
    let inEncounter = false;
    let currentEncounter: string[] = [];

    lines.forEach(line => {
        if (line.includes("ENCOUNTER_START")) {
            inEncounter = true;
            currentEncounter = [line];
        } else if (line.includes("ENCOUNTER_END")) {
            currentEncounter.push(line);
            encounterLines.push(...currentEncounter);
            inEncounter = false;
        } else if (inEncounter) {
            currentEncounter.push(line);
        }
    });

    // 2. Extract Mythic+ start/end
    const dungeonMetas = lines.filter(l => l.includes("CHALLENGE_MODE_START") || l.includes("CHALLENGE_MODE_END"));

    // 3. Selection of the most relevant events to fit in context
    // We prioritize encounters, then fill with the last events
    const MAX_LINES = 10000; // Increased for Gemini 1.5 Flash

    let result = [...dungeonMetas, ...encounterLines];

    if (result.length < MAX_LINES) {
        // Add some "trash" combat from the end if we have space
        const remaining = MAX_LINES - result.length;
        const lastEvents = lines.filter(l => !l.includes("ENCOUNTER_") && !l.includes("CHALLENGE_")).slice(-remaining);
        result.push(...lastEvents);
    } else if (result.length > MAX_LINES) {
        // If still too big, take only the most recent encounters
        result = result.slice(-MAX_LINES);
    }

    return result.join("\n");
}
