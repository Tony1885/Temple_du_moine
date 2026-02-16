"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollText, ExternalLink, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

// Mock Data for News
const NEWS_ITEMS = [
    {
        id: 1,
        date: "12 Fév 2026",
        category: "Mise à jour",
        title: "Patch Notes 12.0 (Prepatch) : Analyse complète",
        summary: "Le prépatch de The War Within apporte une refonte majeure des arbres de talents. Découvrez les changements clés pour les Moines, incluant la nouvelle gestion du Chi pour les Marche-Vent et les ajustements de Report pour les Maîtres Brasseurs.",
        source: "Peak of Serenity",
        url: "https://www.peakofserenity.com/"
    },
    {
        id: 2,
        date: "10 Fév 2026",
        category: "Esport",
        title: "Equinox (Brewmaster) : Nouveau record du monde en M+32",
        summary: "Le légendaire tank Equinox a repoussé les limites en validant une clé M+32. Son build 'Charred Passions' a permis une survie et un dps hors normes sur les trashs packs.",
        source: "Raider.IO",
        url: "https://raider.io/news"
    },
    {
        id: 3,
        date: "08 Fév 2026",
        category: "Raiding",
        title: "Tier Set S1-2026 : Aperçu des bonus pour Tisse-Brume",
        summary: "Les premiers bonus de set pour la Saison 1 de 2026 ont été dataminés. Le Tisse-Brume bénéficiera d'une synergie accrue entre le Thé de concentration foudroyante et ses HoTs.",
        source: "WoWHead",
        url: "https://www.wowhead.com/news"
    },
    {
        id: 4,
        date: "05 Fév 2026",
        category: "Guide",
        title: "Optimiser son Chi pour le Prepatch",
        summary: "Avec la suppression de certains talents de génération de Chi, la gestion de ressources devient critique. Ce guide rapide vous explique comment ne jamais tomber à court d'énergie.",
        source: "Peak of Serenity",
        url: "https://www.peakofserenity.com/windwalker/guide"
    },
    {
        id: 5,
        date: "01 Fév 2026",
        category: "Communauté",
        title: "Le Temple du Moine : Mise à jour du site",
        summary: "Nous avons mis à jour notre interface avec une nouvelle navigation et des guides plus complets pour chaque spécialisation. N'hésitez pas à nous faire vos retours !",
        source: "Temple Du Moine",
        url: "/"
    }
];

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-12 px-4 md:px-8 selection:bg-monk-500/30">
            {/* Background elements */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-monk-900/20 blur-[128px]" />
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
                <div className="space-y-4 text-center">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-black tracking-tight"
                    >
                        <span className="text-white">Actualités</span> <span className="text-gradient-monk">Monastiques</span>
                    </motion.h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Restez informé des dernières mises à jour, guides et exploits de la communauté Moine.
                    </p>
                </div>

                <div className="grid gap-6">
                    {NEWS_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="glass-card border-white/5 hover:border-monk-500/30 transition-all group overflow-hidden">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 rounded-full bg-monk-500/10 text-monk-400 text-xs font-bold uppercase tracking-wider border border-monk-500/20">
                                                {item.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-slate-500">
                                                <Calendar size={12} />
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-white group-hover:text-monk-400 transition-colors">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-300 leading-relaxed">
                                        {item.summary}
                                    </p>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between pt-0">
                                    <span className="text-xs text-slate-500">
                                        Source : {item.source}
                                    </span>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-white/10 hover:bg-white/5 hover:text-white group/btn"
                                    >
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            Voir la source <ExternalLink size={14} className="ml-2 group-hover/btn:scale-110 transition-transform" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
