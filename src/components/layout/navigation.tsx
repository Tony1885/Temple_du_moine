"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Github, Twitter, Anchor, Heart, Wind, ScrollText, Wrench } from "lucide-react";

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
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-monk-600 to-teal-600 shadow-glow transition-shadow group-hover:shadow-[0_0_30px_rgba(0,255,150,0.5)]">
                        <Zap className="h-5 w-5 text-white" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-monk-500 to-teal-500 opacity-0 transition-opacity group-hover:opacity-100" />
                        <Zap className="relative h-5 w-5 text-white" />
                    </div>
                    <span className="font-display text-xl font-bold tracking-tight">
                        <span className="text-white">Temple</span>
                        <span className="text-gradient-monk">DuMoine</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-6 md:flex">
                    <Link
                        href="/brewmaster"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-monk-400 group"
                    >
                        <Anchor className="h-4 w-4 group-hover:text-monk-500" />
                        Maître Brasseur
                    </Link>
                    <Link
                        href="/mistweaver"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-monk-400 group"
                    >
                        <Heart className="h-4 w-4 group-hover:text-monk-500" />
                        Tisse-Brume
                    </Link>
                    <Link
                        href="/windwalker"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-monk-400 group"
                    >
                        <Wind className="h-4 w-4 group-hover:text-monk-500" />
                        Marche-Vent
                    </Link>

                    <div className="h-4 w-[1px] bg-white/10" />

                    <Link
                        href="/news"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-yellow-400 group"
                    >
                        <ScrollText className="h-4 w-4 group-hover:text-yellow-500" />
                        Actualités
                    </Link>
                    <Link
                        href="/utilities"
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-blue-400 group"
                    >
                        <Wrench className="h-4 w-4 group-hover:text-blue-500" />
                        Utilitaires
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-void-900/50 backdrop-blur-xl mt-20">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-monk-600 to-teal-600">
                                <Zap className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-display text-lg font-bold">
                                <span className="text-white">Temple</span>
                                <span className="text-gradient-monk">DuMoine</span>
                            </span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-500">
                            Le guide ultime pour les Moines World of Warcraft francophones.
                            Maîtrisez le Chi, l&apos;Énergie et la Brume.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Spécialisations
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/brewmaster"
                                    className="text-sm text-gray-500 transition-colors hover:text-monk-400"
                                >
                                    Maître Brasseur (Tank)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/mistweaver"
                                    className="text-sm text-gray-500 transition-colors hover:text-monk-400"
                                >
                                    Tisse-Brume (Heal)
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/windwalker"
                                    className="text-sm text-gray-500 transition-colors hover:text-monk-400"
                                >
                                    Marche-Vent (DPS)
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Ressources
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/analyze" className="text-sm text-gray-500 transition-colors hover:text-monk-400">
                                    Analyse de Logs
                                </Link>
                            </li>
                            <li>
                                <span className="text-sm text-gray-600">
                                    Simulations (bientôt)
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} TempleDuMoine. Non affilié à Blizzard Entertainment.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="text-gray-600 transition-colors hover:text-monk-400"
                        >
                            <Github className="h-4 w-4" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition-colors hover:text-monk-400"
                        >
                            <Twitter className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
