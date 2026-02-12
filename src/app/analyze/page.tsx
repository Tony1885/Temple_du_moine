"use client";

import React, { useState, useCallback, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RotateCcw } from "lucide-react";

import { Navbar } from "@/components/layout/navigation";
import { Dropzone } from "@/components/upload/dropzone";
import { ProcessingOverlay } from "@/components/upload/processing-overlay";
import { AIInsightCard } from "@/components/dashboard/ai-insight-card";
import {
    PerformanceMetrics,
    AvoidableDamageList,
    BuffUptimeList,
} from "@/components/dashboard/performance-metrics";
import { DpsTimelineChart } from "@/components/dashboard/dps-timeline-chart";
import { ActionPlan } from "@/components/dashboard/action-plan";
import { EncounterHeader } from "@/components/dashboard/encounter-header";
import { AnalysisResult, AnalysisState, UploadProgress } from "@/lib/types";

export default function AnalyzePage() {
    return (
        <Suspense fallback={
            <>
                <Navbar />
                <main className="min-h-screen pt-24 pb-16">
                    <div className="mx-auto max-w-7xl px-6 py-16 text-center">
                        <div className="h-8 w-64 mx-auto rounded-lg bg-white/5 animate-pulse" />
                        <div className="mt-4 h-4 w-96 mx-auto rounded bg-white/5 animate-pulse" />
                    </div>
                </main>
            </>
        }>
            <AnalyzeContent />
        </Suspense>
    );
}

function AnalyzeContent() {
    const searchParams = useSearchParams();
    const isDemo = searchParams.get("demo") === "true";

    const [analysisState, setAnalysisState] = useState<AnalysisState>("idle");
    const [progress, setProgress] = useState<UploadProgress>({
        state: "idle",
        progress: 0,
        message: "",
    });
    const [result, setResult] = useState<AnalysisResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Auto-start demo mode
    useEffect(() => {
        if (isDemo && analysisState === "idle") {
            handleDemo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDemo]);

    const simulateProgress = useCallback(
        async (
            stages: Array<{
                state: AnalysisState;
                message: string;
                subMessage?: string;
                targetProgress: number;
                duration: number;
            }>
        ) => {
            for (const stage of stages) {
                setAnalysisState(stage.state);
                setProgress({
                    state: stage.state,
                    progress: stage.targetProgress - 20,
                    message: stage.message,
                    subMessage: stage.subMessage,
                });

                // Animate progress
                const steps = 20;
                const stepDuration = stage.duration / steps;
                for (let i = 0; i < steps; i++) {
                    await new Promise((r) => setTimeout(r, stepDuration));
                    setProgress((prev) => ({
                        ...prev,
                        progress: Math.min(
                            stage.targetProgress,
                            prev.progress + (20 / steps)
                        ),
                    }));
                }
            }
        },
        []
    );

    const handleFileAccepted = useCallback(
        async (file: File, anonymize: boolean) => {
            try {
                setError(null);

                // Stage 1: Upload
                await simulateProgress([
                    {
                        state: "uploading",
                        message: "Upload du log en cours...",
                        subMessage: file.name,
                        targetProgress: 30,
                        duration: 1500,
                    },
                ]);

                // Stage 2: Parsing
                await simulateProgress([
                    {
                        state: "parsing",
                        message: "Parsing des événements de combat...",
                        subMessage: "Extraction des données pertinentes",
                        targetProgress: 55,
                        duration: 2000,
                    },
                ]);

                // Stage 3: AI Analysis
                setAnalysisState("analyzing");
                setProgress({
                    state: "analyzing",
                    progress: 60,
                    message: "L'IA analyse tes performances...",
                    subMessage: "GPT-4o en action 🧠",
                });

                // Send to API
                const formData = new FormData();
                formData.append("logFile", file);
                formData.append("anonymize", anonymize.toString());

                const response = await fetch("/api/analyze", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || "Erreur serveur");
                }

                // Animate last progress steps
                await simulateProgress([
                    {
                        state: "analyzing",
                        message: "Finalisation de l'analyse...",
                        subMessage: "Génération du plan d'action",
                        targetProgress: 95,
                        duration: 1500,
                    },
                ]);

                const data = await response.json();
                setResult(data.data);

                // Complete
                setAnalysisState("complete");
                setProgress({
                    state: "complete",
                    progress: 100,
                    message: "Analyse terminée !",
                    subMessage: "Tes résultats sont prêts",
                });

                // Small delay before showing results
                await new Promise((r) => setTimeout(r, 800));
            } catch (err) {
                setAnalysisState("error");
                setError(
                    err instanceof Error ? err.message : "Une erreur inattendue est survenue"
                );
            }
        },
        [simulateProgress]
    );

    const handleDemo = useCallback(async () => {
        try {
            setError(null);

            await simulateProgress([
                {
                    state: "uploading",
                    message: "Chargement du log de démonstration...",
                    subMessage: "WoWCombatLog_Demo.txt",
                    targetProgress: 30,
                    duration: 1000,
                },
                {
                    state: "parsing",
                    message: "Parsing des événements...",
                    subMessage: "145 872 événements détectés",
                    targetProgress: 55,
                    duration: 1500,
                },
                {
                    state: "analyzing",
                    message: "L'IA analyse le combat...",
                    subMessage: "Reine Ansurek — Héroïque",
                    targetProgress: 90,
                    duration: 2000,
                },
            ]);

            // Get demo data
            const response = await fetch("/api/analyze", {
                method: "POST",
                body: (() => {
                    const fd = new FormData();
                    fd.append("demo", "true");
                    return fd;
                })(),
            });

            const data = await response.json();
            setResult(data.data);

            setAnalysisState("complete");
            setProgress({
                state: "complete",
                progress: 100,
                message: "Analyse terminée !",
            });

            await new Promise((r) => setTimeout(r, 600));
        } catch (err) {
            setAnalysisState("error");
            setError("Erreur lors du chargement de la démo");
        }
    }, [simulateProgress]);

    const handleReset = useCallback(() => {
        setAnalysisState("idle");
        setResult(null);
        setError(null);
        setProgress({ state: "idle", progress: 0, message: "" });
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16">
                <div className="mx-auto max-w-7xl px-6">
                    <AnimatePresence mode="wait">
                        {/* ===================== IDLE STATE ===================== */}
                        {analysisState === "idle" && !result && (
                            <motion.div
                                key="upload"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="py-16"
                            >
                                <div className="text-center">
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="font-display text-4xl font-bold text-white sm:text-5xl"
                                    >
                                        Analyse ton{" "}
                                        <span className="text-gradient-epic">combat log</span>
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="mt-4 text-lg text-gray-400"
                                    >
                                        Upload ton fichier WoWCombatLog.txt pour obtenir tes
                                        conseils IA personnalisés.
                                    </motion.p>
                                </div>

                                <div className="mt-12">
                                    <Dropzone
                                        onFileAccepted={handleFileAccepted}
                                        isProcessing={false}
                                    />
                                </div>

                                {/* Demo mode shortcut */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8 text-center"
                                >
                                    <button
                                        onClick={handleDemo}
                                        className="text-sm text-gray-500 underline decoration-gray-700 underline-offset-4 transition-colors hover:text-epic-400"
                                    >
                                        Pas de log sous la main ? Essayer avec un log de démo →
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}

                        {/* ===================== PROCESSING STATE ===================== */}
                        {(analysisState === "uploading" ||
                            analysisState === "parsing" ||
                            analysisState === "analyzing") &&
                            !result && (
                                <motion.div
                                    key="processing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex min-h-[60vh] items-center justify-center py-16"
                                >
                                    <ProcessingOverlay
                                        state={progress.state}
                                        progress={progress.progress}
                                        message={progress.message}
                                        subMessage={progress.subMessage}
                                    />
                                </motion.div>
                            )}

                        {/* ===================== ERROR STATE ===================== */}
                        {analysisState === "error" && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex min-h-[60vh] flex-col items-center justify-center py-16"
                            >
                                <div className="glass-card max-w-md p-8 text-center">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-danger-500/10 ring-1 ring-danger-500/20">
                                        <span className="text-3xl">⚠️</span>
                                    </div>
                                    <h3 className="mt-5 font-display text-xl font-bold text-white">
                                        Erreur d&apos;analyse
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-400">{error}</p>
                                    <button
                                        onClick={handleReset}
                                        className="btn-glow mt-6 !px-6 !py-3 text-sm"
                                    >
                                        <RotateCcw className="mr-2 inline h-4 w-4" />
                                        Réessayer
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* ===================== RESULTS STATE ===================== */}
                        {result && analysisState === "complete" && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-6 py-8"
                            >
                                {/* Top bar */}
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={handleReset}
                                        className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Nouvelle analyse
                                    </button>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs text-gray-600">
                                            {result.metadata.eventsProcessed.toLocaleString()}{" "}
                                            événements analysés
                                        </span>
                                    </div>
                                </div>

                                {/* Encounter Header */}
                                <EncounterHeader
                                    encounter={result.encounter}
                                    performance={result.performance}
                                />

                                {/* Performance Metrics */}
                                <PerformanceMetrics performance={result.performance} />

                                {/* AI Insight + Timeline row */}
                                <div className="grid gap-6 lg:grid-cols-2">
                                    <AIInsightCard insight={result.aiInsight} />
                                    <DpsTimelineChart
                                        timeline={result.performance.timeline}
                                        averageDps={result.performance.dps}
                                    />
                                </div>

                                {/* Avoidable Damage + Buff Uptime */}
                                <div className="grid gap-6 lg:grid-cols-2">
                                    <AvoidableDamageList
                                        damages={result.performance.avoidableDamageTaken}
                                    />
                                    <BuffUptimeList
                                        buffs={result.performance.buffUptime}
                                    />
                                </div>

                                {/* Action Plan */}
                                <ActionPlan actions={result.aiInsight.actionPlan} />

                                {/* Bottom actions */}
                                <div className="flex justify-center gap-4 pt-8">
                                    <button
                                        onClick={handleReset}
                                        className="btn-glow flex items-center gap-2 text-sm"
                                    >
                                        <RotateCcw className="h-4 w-4" />
                                        Analyser un autre log
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </>
    );
}
