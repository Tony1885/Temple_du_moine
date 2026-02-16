"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Zap, Info, RotateCw, Trophy, Sword, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GuideSectionProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const GuideSection = ({ title, icon, children }: GuideSectionProps) => (
    <Card className="glass-card overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-monk-500 to-teal-500" />
        <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-xl font-bold text-white">
                <span className="p-2 rounded-lg bg-white/5 text-monk-400">
                    {icon}
                </span>
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-300 leading-relaxed space-y-4">
            {children}
        </CardContent>
    </Card>
);

interface PlayerRankProps {
    rank: number;
    name: string;
    score: string;
    region: string;
    realm?: string;
    profileUrl?: string;
}

const TopPlayerRow = ({ rank, name, score, region, realm, profileUrl }: PlayerRankProps) => (
    <a
        href={profileUrl || `https://raider.io/characters/${region}/${realm || 'any'}/${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
    >
        <div className="flex items-center gap-3">
            <span className={`flex items-center justify-center w-6 h-6 rounded font-bold text-sm ${rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : rank === 2 ? 'bg-slate-400/20 text-slate-400' : rank === 3 ? 'bg-amber-700/20 text-amber-700' : 'bg-slate-800 text-slate-500'}`}>
                {rank}
            </span>
            <div className="flex flex-col">
                <span className="font-bold text-slate-200 group-hover:text-white transition-colors flex items-center gap-1">
                    {name}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-50" />
                </span>
                {realm && <span className="text-[10px] text-slate-500">{realm}</span>}
            </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
            <span className="text-monk-400 font-mono">{score}</span>
            <span className="text-xs uppercase text-slate-500 font-bold">{region}</span>
        </div>
    </a>
);

export interface BuildOption {
    name: string;
    code: string;
    type: "Raid" | "M+" | "PvP" | "Autre";
    playerRef?: string;
}

interface SpecGuideProps {
    specName: string;
    specIcon: React.ReactNode;
    specColor: string;
    description: string;
    statsPriority: string[];
    consumables: {
        phial: string;
        food: string;
        weapon: string;
        potion: string;
    };
    builds: BuildOption[]; // Changed from congruentBuilds
    rotation: {
        opener: string[];
        priority: string[];
        notes?: string;
    };
    topPlayers: {
        period: string;
        players: Array<Omit<PlayerRankProps, 'rank'>>;
    };
    externalLinks: {
        wowhead: string;
        lorrgs?: string;
        // icyveins removed
    };
    content: React.ReactNode;
}

export function SpecGuide({
    specName,
    specIcon,
    specColor,
    description,
    statsPriority,
    consumables,
    builds,
    rotation,
    topPlayers,
    externalLinks,
    content,
}: SpecGuideProps) {
    const isImageUrl = (icon: React.ReactNode): icon is string => typeof icon === 'string';

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-12 px-4 md:px-8 selection:bg-monk-500/30">
            {/* Background elements */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-monk-900/20 blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-monk-400 transition-colors"
                    >
                        <ArrowLeft size={16} /> Retour au Temple
                    </Link>

                    <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="flex items-center gap-4"
                            >
                                <div className={`p-4 rounded-2xl bg-white/5 ${specColor} ring-1 ring-white/10`}>
                                    {isImageUrl(specIcon) ? (
                                        <Image src={specIcon} alt={specName} width={32} height={32} className="rounded" unoptimized />
                                    ) : (
                                        specIcon
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">
                                    {specName}
                                </h1>
                            </motion.div>
                            <p className="text-xl text-slate-400 max-w-2xl">
                                {description}
                            </p>
                        </div>

                        {/* Quick External Links */}
                        <div className="flex gap-4 flex-wrap">
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/10 hover:bg-white/5 hover:text-monk-400 hover:border-monk-500/50"
                            >
                                <a href={externalLinks.wowhead} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink size={16} className="mr-2" />
                                    WoWHead
                                </a>
                            </Button>
                            {externalLinks.lorrgs && (
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/10 hover:bg-white/5 hover:text-purple-400 hover:border-purple-500/50"
                                >
                                    <a href={externalLinks.lorrgs} target="_blank" rel="noopener noreferrer">
                                        <Globe size={16} className="mr-2" />
                                        Lorrgs
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Custom Content */}
                        {content}

                        {/* Rotation Section - NEW */}
                        <GuideSection title="Rotation & Gameplay (Prepatch 12.0)" icon={<RotateCw size={20} />}>
                            <div className="space-y-6">
                                {rotation.notes && (
                                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-sm text-yellow-200">
                                        ⚠️ Note: {rotation.notes}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-monk-500" />
                                        Ouverture (Opener)
                                    </h4>
                                    <ol className="list-decimal pl-5 space-y-2 marker:text-monk-500">
                                        {rotation.opener.map((step, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                                        ))}
                                    </ol>
                                </div>

                                <div className="h-px bg-white/5" />

                                <div>
                                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-monk-500" />
                                        Priorité Standard
                                    </h4>
                                    <ol className="list-decimal pl-5 space-y-2 marker:text-monk-500">
                                        {rotation.priority.map((step, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </GuideSection>

                        {/* Builds */}
                        <GuideSection title="Top Builds (Meta)" icon={<Zap size={20} />}>
                            <p>
                                Voici les builds utilisés par les meilleurs joueurs du monde sur ce patch. Sélectionnez celui qui correspond à votre activité.
                            </p>
                            <div className="grid gap-4 mt-4">
                                {builds.map((build, index) => (
                                    <div key={index} className="p-4 rounded-xl bg-black/40 border border-white/5">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-bold text-white">{build.name}</h4>
                                            {build.playerRef && (
                                                <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded">
                                                    Joué par {build.playerRef}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${build.type === 'Raid' ? 'bg-orange-500/20 text-orange-400' :
                                                build.type === 'M+' ? 'bg-green-500/20 text-green-400' :
                                                    'bg-slate-500/20 text-slate-400'
                                                }`}>
                                                {build.type}
                                            </span>
                                        </div>
                                        <code className="block mt-3 text-xs text-slate-500 bg-black/50 p-3 rounded truncate cursor-pointer hover:text-white transition-colors border border-white/5 hover:border-monk-500/30" title="Cliquer pour copier">
                                            {build.code}
                                        </code>
                                    </div>
                                ))}
                            </div>
                        </GuideSection>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-8">
                        {/* Top Players - NEW */}
                        <Card className="glass-card">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Trophy size={18} className="text-yellow-500" />
                                    Top Joueurs
                                </CardTitle>
                                <CardDescription className="text-xs font-mono text-monk-400">
                                    {topPlayers.period}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {topPlayers.players.map((player, i) => (
                                    <TopPlayerRow key={i} rank={i + 1} {...player} />
                                ))}
                            </CardContent>
                        </Card>

                        {/* Stats Priority */}
                        <Card className="glass-card">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Info size={18} className="text-monk-400" />
                                    Priorité des Stats
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ol className="space-y-2">
                                    {statsPriority.map((stat, index) => (
                                        <li key={stat} className="flex items-center gap-3">
                                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-xs font-bold text-slate-500">
                                                {index + 1}
                                            </span>
                                            <span className="font-medium text-slate-200">{stat}</span>
                                        </li>
                                    ))}
                                </ol>
                            </CardContent>
                        </Card>

                        {/* Consumables */}
                        <Card className="glass-card">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Sword size={18} className="text-orange-400" />
                                    Consommables
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm">
                                <div>
                                    <span className="block text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Arme</span>
                                    <span className="text-white">{consumables.weapon}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Phiole</span>
                                    <span className="text-white">{consumables.phial}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Nourriture</span>
                                    <span className="text-white">{consumables.food}</span>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Potion</span>
                                    <span className="text-white">{consumables.potion}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
