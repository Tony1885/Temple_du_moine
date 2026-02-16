"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Terminal, Download, Copy, ExternalLink, Zap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UTILITIES = [
    {
        title: "WeakAuras Monk Essentials",
        description: "Le pack complet pour suivre vos cooldowns, buffs et ressources. Indispensable pour toutes les spécialisations.",
        type: "WeakAura",
        icon: <Zap className="text-yellow-400" />,
        link: "https://wago.io/monk-essentials",
        code: "wago.io/monk-essentials"
    },
    {
        title: "Macro : Statue du Buffle Noire",
        description: "Pose la statue à l'emplacement du curseur sans valider le cercle au sol, ou sur vous si vous appuyez sur ALT.",
        type: "Macro",
        icon: <Terminal className="text-monk-400" />,
        link: null,
        code: "#showtooltip Summon Black Ox Statue\n/cast [@cursor,nomod] Summon Black Ox Statue\n/cast [@player,mod:alt] Summon Black Ox Statue"
    },
    {
        title: "Macro : Vivify Mouseover",
        description: "Lance Vivifier sur la cible sous votre souris. Si pas de cible, lance sur vous-même.",
        type: "Macro",
        icon: <Terminal className="text-teal-400" />,
        link: null,
        code: "#showtooltip Vivify\n/cast [@mouseover,help,nodead] [] Vivify"
    },
    {
        title: "Addon : Peak of Serenity",
        description: "L'addon compagnon du site référence. Affiche des conseils en temps réel.",
        type: "Addon",
        icon: <Download className="text-blue-400" />,
        link: "https://www.curseforge.com/",
        code: null
    }
];

export default function UtilitiesPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-12 px-4 md:px-8 selection:bg-monk-500/30">
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-900/20 blur-[128px]" />
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
                <div className="space-y-4 text-center">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-black tracking-tight"
                    >
                        <span className="text-white">Boîte à</span> <span className="text-gradient-monk">Outils</span>
                    </motion.h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Macros, WeakAuras et Addons pour optimiser votre interface et votre gameplay.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {UTILITIES.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="glass-card h-full border-white/5 hover:border-monk-500/30 transition-all">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded bg-white/5 border border-white/10">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                                            <CardDescription className="text-slate-500">{item.type}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>

                                    {item.code && (
                                        <div className="relative group/code">
                                            <div className="bg-slate-950/80 rounded-lg p-3 font-mono text-xs text-monk-300 border border-white/10 whitespace-pre-wrap">
                                                {item.code}
                                            </div>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover/code:opacity-100 transition-opacity bg-white/10 hover:bg-white/20"
                                            >
                                                <Copy size={12} />
                                            </Button>
                                        </div>
                                    )}

                                    {item.link && (
                                        <Button asChild className="w-full bg-monk-600 hover:bg-monk-500 text-white">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={16} className="mr-2" />
                                                Voir / Télécharger
                                            </a>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
