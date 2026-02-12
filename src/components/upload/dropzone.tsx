"use client";

import React, { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, AlertCircle, X, Shield, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropzoneProps {
    onFileAccepted: (file: File, anonymize: boolean) => void;
    isProcessing: boolean;
}

export function Dropzone({ onFileAccepted, isProcessing }: DropzoneProps) {
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [anonymize, setAnonymize] = useState(false);

    const validateFile = useCallback((file: File): boolean => {
        if (!file.name.endsWith(".txt") && !file.name.endsWith(".log")) {
            setError("Format non supporté. Utilisez un fichier .txt ou .log");
            return false;
        }
        if (file.size > 100 * 1024 * 1024) {
            setError("Le fichier est trop volumineux (max 100 Mo)");
            return false;
        }
        setError(null);
        return true;
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragOver(false);

            const file = e.dataTransfer.files[0];
            if (file && validateFile(file)) {
                setSelectedFile(file);
            }
        },
        [validateFile]
    );

    const handleFileInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file && validateFile(file)) {
                setSelectedFile(file);
            }
        },
        [validateFile]
    );

    const handleSubmit = useCallback(() => {
        if (selectedFile) {
            onFileAccepted(selectedFile, anonymize);
        }
    }, [selectedFile, anonymize, onFileAccepted]);

    const clearFile = useCallback(() => {
        setSelectedFile(null);
        setError(null);
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Dropzone Area */}
            <motion.div
                layout
                className={cn(
                    "relative rounded-2xl border-2 border-dashed transition-all duration-300",
                    isDragOver
                        ? "border-epic-500 bg-epic-500/10 scale-[1.02]"
                        : selectedFile
                            ? "border-epic-500/30 bg-epic-500/5"
                            : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]",
                    isProcessing && "pointer-events-none opacity-60"
                )}
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
            >
                {/* Background glow when dragging */}
                <AnimatePresence>
                    {isDragOver && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="pointer-events-none absolute inset-0 rounded-2xl"
                            style={{
                                background:
                                    "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
                            }}
                        />
                    )}
                </AnimatePresence>

                <div className="relative flex flex-col items-center gap-6 p-12">
                    <AnimatePresence mode="wait">
                        {selectedFile ? (
                            <motion.div
                                key="file-selected"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center gap-4"
                            >
                                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-epic-500/10 ring-1 ring-epic-500/20">
                                    <FileText className="h-10 w-10 text-epic-400" />
                                    <button
                                        onClick={clearFile}
                                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-void-700 text-gray-400 ring-1 ring-white/10 transition-colors hover:bg-danger-600 hover:text-white"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </div>
                                <div className="text-center">
                                    <p className="font-medium text-white">{selectedFile.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} Mo
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="no-file"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center gap-4"
                            >
                                <motion.div
                                    animate={{ y: isDragOver ? -5 : 0 }}
                                    className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-epic-500/10 to-mana-500/10 ring-1 ring-white/10"
                                >
                                    <Upload className="h-10 w-10 text-epic-400" />
                                </motion.div>
                                <div className="text-center">
                                    <p className="text-lg font-medium text-white">
                                        Glissez votre log de combat ici
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        ou{" "}
                                        <label className="cursor-pointer text-epic-400 underline decoration-epic-400/30 underline-offset-4 transition-colors hover:text-epic-300">
                                            parcourez vos fichiers
                                            <input
                                                type="file"
                                                accept=".txt,.log"
                                                onChange={handleFileInput}
                                                className="hidden"
                                            />
                                        </label>
                                    </p>
                                    <p className="mt-3 text-xs text-gray-600">
                                        Fichiers .txt & .log acceptés · Max 100 Mo
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Error */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-4 flex items-center gap-3 rounded-xl bg-danger-500/10 px-4 py-3 ring-1 ring-danger-500/20"
                    >
                        <AlertCircle className="h-4 w-4 shrink-0 text-danger-400" />
                        <p className="text-sm text-danger-400">{error}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Options & Submit */}
            <AnimatePresence>
                {selectedFile && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="mt-6 space-y-4"
                    >
                        {/* Anonymize toggle */}
                        <button
                            onClick={() => setAnonymize(!anonymize)}
                            className="flex w-full items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/5 transition-all hover:bg-white/[0.05] hover:ring-white/10"
                        >
                            <Shield className="h-4 w-4 text-mana-400" />
                            <span className="flex-1 text-left text-sm text-gray-300">
                                Anonymiser les noms des joueurs
                            </span>
                            {anonymize ? (
                                <EyeOff className="h-4 w-4 text-epic-400" />
                            ) : (
                                <Eye className="h-4 w-4 text-gray-600" />
                            )}
                        </button>

                        {/* Submit button */}
                        <button
                            onClick={handleSubmit}
                            disabled={isProcessing}
                            className="btn-legendary w-full text-center text-lg"
                        >
                            {isProcessing ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg
                                        className="h-5 w-5 animate-spin"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Analyse en cours...
                                </span>
                            ) : (
                                "🚀 Lancer l'analyse IA"
                            )}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
