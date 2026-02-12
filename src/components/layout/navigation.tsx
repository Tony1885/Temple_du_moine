"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Github, Twitter } from "lucide-react";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-void-900/80 backdrop-blur-xl"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-epic-600 to-mana-600 shadow-glow transition-shadow group-hover:shadow-glow-lg">
                        <Zap className="h-5 w-5 text-white" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-epic-500 to-mana-500 opacity-0 transition-opacity group-hover:opacity-100" />
                        <Zap className="relative h-5 w-5 text-white" />
                    </div>
                    <span className="font-display text-xl font-bold tracking-tight">
                        <span className="text-white">WoW</span>
                        <span className="text-gradient-epic">Analyzer</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/#features"
                        className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                    >
                        Fonctionnalités
                    </Link>
                    <Link
                        href="/#how-it-works"
                        className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
                    >
                        Comment ça marche
                    </Link>
                    <Link
                        href="/analyze"
                        className="btn-glow !px-6 !py-2.5 text-sm"
                    >
                        Analyser mes logs
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-void-900/50 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-epic-600 to-mana-600">
                                <Zap className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-display text-lg font-bold">
                                <span className="text-white">WoW</span>
                                <span className="text-gradient-epic">Analyzer</span>
                            </span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
                            L&apos;intelligence artificielle au service de ta performance
                            WoW. Analyse tes logs, comprends tes erreurs, domine les
                            classements.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Produit
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/analyze"
                                    className="text-sm text-gray-500 transition-colors hover:text-epic-400"
                                >
                                    Analyser un log
                                </Link>
                            </li>
                            <li>
                                <span className="text-sm text-gray-600">
                                    Documentation (bientôt)
                                </span>
                            </li>
                            <li>
                                <span className="text-sm text-gray-600">
                                    API (bientôt)
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Légal
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <span className="text-sm text-gray-500">
                                    Confidentialité RGPD
                                </span>
                            </li>
                            <li>
                                <span className="text-sm text-gray-500">
                                    Pas de stockage de données
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} WoWAnalyzer. Non affilié à Blizzard Entertainment.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-gray-600 transition-colors hover:text-epic-400"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors hover:text-epic-400"
                        >
                            <Twitter className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
