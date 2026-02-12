"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Shield, Sparkles, Search, FileCheck, Loader2 } from "lucide-react";
import { AnalysisState } from "@/lib/types";

interface ProcessingOverlayProps {
    state: AnalysisState;
    progress: number;
    message: string;
    subMessage?: string;
}

const stateConfig: Record<
    string,
    { icon: React.ReactNode; color: string; glowColor: string }
> = {
    uploading: {
        icon: <Loader2 className="h-8 w-8 animate-spin" />,
        color: "text-mana-400",
        glowColor: "rgba(59, 130, 246, 0.3)",
    },
    parsing: {
        icon: <Search className="h-8 w-8" />,
        color: "text-epic-400",
        glowColor: "rgba(139, 92, 246, 0.3)",
    },
    analyzing: {
        icon: <Brain className="h-8 w-8" />,
        color: "text-legendary-400",
        glowColor: "rgba(251, 191, 36, 0.3)",
    },
    complete: {
        icon: <Sparkles className="h-8 w-8" />,
        color: "text-healing-400",
        glowColor: "rgba(34, 197, 94, 0.3)",
    },
    error: {
        icon: <Shield className="h-8 w-8" />,
        color: "text-danger-400",
        glowColor: "rgba(239, 68, 68, 0.3)",
    },
};

const stageLabels = [
    { key: "uploading", label: "Upload" },
    { key: "parsing", label: "Parsing" },
    { key: "analyzing", label: "IA Analysis" },
    { key: "complete", label: "Terminé" },
];

export function ProcessingOverlay({
    state,
    progress,
    message,
    subMessage,
}: ProcessingOverlayProps) {
    const config = stateConfig[state] || stateConfig.uploading;
    const currentStageIndex = stageLabels.findIndex((s) => s.key === state);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[400px] flex-col items-center justify-center"
        >
            {/* Central icon with glow */}
            <motion.div
                animate={{
                    boxShadow: [
                        `0 0 20px ${config.glowColor}`,
                        `0 0 60px ${config.glowColor}`,
                        `0 0 20px ${config.glowColor}`,
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-void-800 ring-1 ring-white/10"
            >
                <div className={config.color}>{config.icon}</div>

                {/* Scanning effect */}
                {state === "analyzing" && (
                    <motion.div
                        className="absolute inset-0 overflow-hidden rounded-3xl"
                        initial={false}
                    >
                        <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="h-full w-full"
                            style={{
                                background:
                                    "linear-gradient(0deg, transparent 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%)",
                            }}
                        />
                    </motion.div>
                )}

                {/* Progress ring */}
                <svg
                    className="absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)]"
                    viewBox="0 0 120 120"
                >
                    <circle
                        cx="60"
                        cy="60"
                        r="56"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="2"
                    />
                    <motion.circle
                        cx="60"
                        cy="60"
                        r="56"
                        fill="none"
                        stroke="url(#progressGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                        animate={{
                            strokeDashoffset:
                                2 * Math.PI * 56 * (1 - progress / 100),
                        }}
                        transition={{ duration: 0.5 }}
                        transform="rotate(-90 60 60)"
                    />
                    <defs>
                        <linearGradient
                            id="progressGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Message */}
            <motion.div
                key={message}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
            >
                <p className="text-lg font-semibold text-white">{message}</p>
                {subMessage && (
                    <p className="mt-2 text-sm text-gray-500">{subMessage}</p>
                )}
                <p className="mt-3 font-mono text-sm text-epic-400">{progress}%</p>
            </motion.div>

            {/* Stage indicators */}
            <div className="mt-10 flex items-center gap-2">
                {stageLabels.map((stage, i) => (
                    <React.Fragment key={stage.key}>
                        <div className="flex flex-col items-center gap-2">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-500 ${i <= currentStageIndex
                                        ? "bg-epic-500 text-white shadow-glow"
                                        : "bg-void-700 text-gray-600 ring-1 ring-white/5"
                                    }`}
                            >
                                {i < currentStageIndex ? (
                                    <FileCheck className="h-4 w-4" />
                                ) : (
                                    i + 1
                                )}
                            </div>
                            <span
                                className={`text-[10px] font-medium ${i <= currentStageIndex ? "text-gray-300" : "text-gray-700"
                                    }`}
                            >
                                {stage.label}
                            </span>
                        </div>
                        {i < stageLabels.length - 1 && (
                            <div
                                className={`mb-5 h-0.5 w-8 rounded transition-all duration-500 ${i < currentStageIndex ? "bg-epic-500" : "bg-void-700"
                                    }`}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </motion.div>
    );
}
