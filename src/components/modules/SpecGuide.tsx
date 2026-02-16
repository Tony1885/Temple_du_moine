"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Zap, Info, RotateCw, Trophy, Sword, Globe, MousePointer2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const TopPlayerRow = ({ rank, name, score, region, realm, profileUrl }: PlayerRankProps) => {
    // Slugify helpers
    const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
    const cleanRealm = realm ? slugify(realm) : 'any';
    const cleanName = slugify(name);
    const cleanRegion = region.toLowerCase();

    // Construct dynamic URL if not provided
    const dynamicUrl = `https://raider.io/characters/${cleanRegion}/${cleanRealm}/${cleanName}`;

    return (
        <a
            href={profileUrl || dynamicUrl}
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
};

export interface BuildOption {
    name: string;
    code: string;
    type: "Raid" | "M+" | "PvP" | "Autre";
    playerRef?: string;
}

export interface BisItem {
    slot: string;
    item: string;
    source: string;
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
    builds: BuildOption[];
    rotation: {
        st: { opener: string[]; priority: string[] };
        aoe: { opener: string[]; priority: string[] };
        notes?: string;
    };
    bis: BisItem[];
    topPlayers: {
        period: string;
        players: Array<Omit<PlayerRankProps, 'rank'>>;
    };
    externalLinks: {
        wowhead: string;
        lorrgs?: string;
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
    bis,
    topPlayers,
    externalLinks,
    content,
}: SpecGuideProps) {
    const isImageUrl = (icon: React.ReactNode): icon is string => typeof icon === 'string';
    const [activeTab, setActiveTab] = useState("st");

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

                        {/* Top Builds Section - Reimagined per User Request */}
                        <GuideSection title="Arbre de Talents & Builds Meta" icon={<Zap size={20} />}>
                            <p className="mb-4">
                                Sélectionnez le build adapté à votre contenu. Ces arbres sont optimisés par les meilleurs joueurs mondiaux.
                            </p>

                            {/* Builds Grid */}
                            <div className="grid gap-6">
                                {builds.map((build, index) => (
                                    <div key={index} className="relative group rounded-xl overflow-hidden border border-white/5 bg-slate-900/50 hover:border-monk-500/30 transition-all">
                                        {/* Header of Build Card */}
                                        <div className="p-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-2 h-2 rounded-full ${build.type === 'Raid' ? 'bg-orange-500' : build.type === 'M+' ? 'bg-green-500' : 'bg-blue-500'}`} />
                                                <h4 className="font-bold text-white">{build.name}</h4>
                                            </div>
                                            {build.playerRef && (
                                                <span className="text-xs text-slate-500 bg-black/40 px-2 py-1 rounded border border-white/5">
                                                    Joué par {build.playerRef}
                                                </span>
                                            )}
                                        </div>

                                        {/* Build Content - Visual Mockup of "Key Talents" - Simplified for now to just code + intent */}
                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center justify-between text-sm text-slate-400">
                                                <span>Type de contenu : <strong className="text-white">{build.type}</strong></span>
                                                <span className="text-xs text-slate-500">Patch 12.0</span>
                                            </div>

                                            {/* Import String Area */}
                                            <div className="bg-black/80 rounded-lg p-3 relative group/code">
                                                <code className="text-xs text-monk-400 break-all line-clamp-2 hover:line-clamp-none transition-all">
                                                    {build.code}
                                                </code>
                                                <div className="absolute top-2 right-2 opacity-0 group-hover/code:opacity-100 transition-opacity">
                                                    <span className="text-[10px] bg-white text-black px-2 py-1 rounded font-bold">COPIER</span>
                                                </div>
                                            </div>

                                            <Button className="w-full bg-white/5 hover:bg-monk-500/20 hover:text-monk-400 text-slate-300 border border-white/10" size="sm">
                                                Copier le String d'Import
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GuideSection>

                        {/* Rotation Section - Updated with Tabs */}
                        <GuideSection title="Rotation & Gameplay" icon={<RotateCw size={20} />}>
                            {rotation.notes && (
                                <div className="p-3 mb-6 bg-yellow-500/10 border border-yellow-500/20 rounded text-sm text-yellow-200">
                                    ⚠️ Note Importante : {rotation.notes}
                                </div>
                            )}

                            <Tabs defaultValue="st" className="w-full" onValueChange={setActiveTab}>
                                <TabsList className="grid w-full grid-cols-2 bg-slate-900/50">
                                    <TabsTrigger value="st">Monocible (Single Target)</TabsTrigger>
                                    <TabsTrigger value="aoe">Multicible (AoE)</TabsTrigger>
                                </TabsList>

                                {/* SINGLE TARGET */}
                                <TabsContent value="st" className="space-y-6 mt-6 animate-in fade-in-50">
                                    <div>
                                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-monk-500" />
                                            Ouverture (Opener) - Monocible
                                        </h4>
                                        <ol className="list-decimal pl-5 space-y-2 marker:text-monk-500 text-sm md:text-base">
                                            {rotation.st.opener.map((step, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                                            ))}
                                        </ol>
                                    </div>
                                    <div className="h-px bg-white/5" />
                                    <div>
                                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-monk-500" />
                                            Priorité - Monocible
                                        </h4>
                                        <ol className="list-decimal pl-5 space-y-2 marker:text-monk-500 text-sm md:text-base">
                                            {rotation.st.priority.map((step, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                                            ))}
                                        </ol>
                                    </div>
                                </TabsContent>

                                {/* AOE */}
                                <TabsContent value="aoe" className="space-y-6 mt-6 animate-in fade-in-50">
                                    <div>
                                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-monk-500" />
                                            Ouverture (Opener) - Multicible
                                        </h4>
                                        <ol className="list-decimal pl-5 space-y-2 marker:text-monk-500 text-sm md:text-base">
                                            {rotation.aoe.opener.map((step, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                                            ))}
                                        </ol>
                                    </div>
                                    <div className="h-px bg-white/5" />
                                    <div>
                                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-monk-500" />
                                            Priorité - Multicible
                                        </h4>
                                        <ol className="list-decimal pl-5 space-y-2 marker:text-monk-500 text-sm md:text-base">
                                            {rotation.aoe.priority.map((step, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
                                            ))}
                                        </ol>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </GuideSection>

                        {/* BiS List - NEW */}
                        <GuideSection title="Best in Slot (BiS)" icon={<Trophy size={20} />}>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-slate-500 uppercase bg-white/5">
                                        <tr>
                                            <th className="px-4 py-3 rounded-l-lg">Slot</th>
                                            <th className="px-4 py-3">Item</th>
                                            <th className="px-4 py-3 rounded-r-lg">Source</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {bis.map((item, i) => (
                                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                                <td className="px-4 py-3 font-medium text-monk-400">{item.slot}</td>
                                                <td className="px-4 py-3 font-bold text-purple-400">{item.item}</td>
                                                <td className="px-4 py-3 text-slate-400">{item.source}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </GuideSection>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-8">
                        {/* Top Players - Corrected Links */}
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
