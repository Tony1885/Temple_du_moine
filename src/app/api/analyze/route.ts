// ============================================================
// API Route: /api/analyze
// Handles combat log upload and AI analysis
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { parseCombatLog, summarizeForAI, validateCombatLog, anonymizeNames } from "@/lib/log-parser";
import { SYSTEM_PROMPT, buildAnalysisPrompt } from "@/lib/ai-prompts";
import { generateMockAnalysis } from "@/lib/mock-data";

export const maxDuration = 60; // seconds

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("logFile") as File | null;
        const anonymize = formData.get("anonymize") === "true";
        const playerClass = formData.get("playerClass") as string | null;
        const playerSpec = formData.get("playerSpec") as string | null;
        const demoMode = formData.get("demo") === "true";

        // Demo mode - return mock data
        if (demoMode) {
            // Simulate processing delay for UX
            await new Promise((resolve) => setTimeout(resolve, 3000));
            return NextResponse.json({
                success: true,
                data: generateMockAnalysis(),
                demo: true,
            });
        }

        if (!file) {
            return NextResponse.json(
                { success: false, error: "Aucun fichier fourni." },
                { status: 400 }
            );
        }

        // Validate file type
        if (!file.name.endsWith(".txt") && !file.name.endsWith(".log")) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Format de fichier non supporté. Utilisez un fichier .txt ou .log.",
                },
                { status: 400 }
            );
        }

        // Read file content
        const content = await file.text();

        // Validate combat log format
        const validation = validateCombatLog(content);
        if (!validation.valid) {
            return NextResponse.json(
                { success: false, error: validation.error },
                { status: 400 }
            );
        }

        // Parse combat log
        let events = parseCombatLog(content);

        // Anonymize if requested
        if (anonymize) {
            events = anonymizeNames(events);
        }

        // Summarize for AI (token optimization)
        const logSummary = summarizeForAI(events);

        // Check if AI API key is configured
        const openaiKey = process.env.OPENAI_API_KEY;
        const anthropicKey = process.env.ANTHROPIC_API_KEY;

        if (!openaiKey && !anthropicKey) {
            // Fallback to mock when no AI configured
            console.log("No AI API key configured, returning mock analysis");
            return NextResponse.json({
                success: true,
                data: generateMockAnalysis(),
                demo: true,
                notice: "Mode démo : Aucune clé API IA configurée. Les résultats sont simulés.",
            });
        }

        // Call AI API
        let aiResponse: string;

        if (openaiKey) {
            aiResponse = await callOpenAI(openaiKey, logSummary, playerClass, playerSpec);
        } else {
            aiResponse = await callAnthropic(anthropicKey!, logSummary, playerClass, playerSpec);
        }

        // Parse AI response
        const aiInsight = JSON.parse(aiResponse);

        // Build full analysis result
        const result = {
            ...generateMockAnalysis(), // Use structure from mock
            aiInsight, // Override with real AI insights
            metadata: {
                analyzedAt: new Date().toISOString(),
                logVersion: "11.0.7",
                eventsProcessed: events.length,
                anonymized: anonymize,
            },
        };

        return NextResponse.json({
            success: true,
            data: result,
        });
    } catch (error) {
        console.error("Analysis error:", error);
        return NextResponse.json(
            {
                success: false,
                error: "Une erreur est survenue lors de l'analyse. Veuillez réessayer.",
            },
            { status: 500 }
        );
    }
}

async function callOpenAI(
    apiKey: string,
    logSummary: string,
    playerClass?: string | null,
    playerSpec?: string | null
): Promise<string> {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                {
                    role: "user",
                    content: buildAnalysisPrompt(
                        logSummary,
                        playerClass || undefined,
                        playerSpec || undefined
                    ),
                },
            ],
            temperature: 0.3,
            max_tokens: 4000,
            response_format: { type: "json_object" },
        }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

async function callAnthropic(
    apiKey: string,
    logSummary: string,
    playerClass?: string | null,
    playerSpec?: string | null
): Promise<string> {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 4000,
            system: SYSTEM_PROMPT,
            messages: [
                {
                    role: "user",
                    content: buildAnalysisPrompt(
                        logSummary,
                        playerClass || undefined,
                        playerSpec || undefined
                    ),
                },
            ],
        }),
    });

    const data = await response.json();
    return data.content[0].text;
}
