"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, ShieldCheck, Trophy, Sword, Target, Loader2, RefreshCw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { fetchRaiderIOProfile, RaiderIOProfile } from "@/lib/raiderio-api"
import { AnalysisResult, AnalysisData } from "@/components/modules/AnalysisResult"

function AnalyzeContent() {
    const searchParams = useSearchParams()
    const router = useRouter()

    // Params
    const name = searchParams.get("name")
    const realm = searchParams.get("realm")
    const region = searchParams.get("region")
    const manualCode = searchParams.get("code")

    // State
    const [profile, setProfile] = useState<RaiderIOProfile | null>(null)
    const [analysis, setAnalysis] = useState<string>("")
    const [loadingProfile, setLoadingProfile] = useState(false)
    const [loadingAnalysis, setLoadingAnalysis] = useState(false)
    const [error, setError] = useState<string | null>(null)

    // Effect: Load Data
    useEffect(() => {
        const load = async () => {
            if (manualCode) {
                // If manual code, skip profile fetch and go straight to analysis
                analyzeTalents(manualCode)
                return
            }

            if (name && realm && region) {
                setLoadingProfile(true)
                setError(null)

                try {
                    const data = await fetchRaiderIOProfile(region, realm, name)
                    if (!data) throw new Error("Impossible de trouver ce personnage sur Raider.io. Vérifie le pseudo/serveur.")

                    setProfile(data)

                    // If talents are present, send them. If not, send Class/Spec context.
                    if (data.talents) {
                        analyzeTalents(data.talents)
                    } else {
                        // Fallback: Send Context
                        const context = `Je n'ai pas le code exact des talents, mais voici le profil : Classe ${data.class}, Spécialisation ${data.active_spec_name} (${data.active_spec_role}). Donne-moi une rotation META optimale pour cette spécialisation en Raid et M+.`;
                        analyzeTalents(context)
                    }
                } catch (err: any) {
                    setError(err.message || "Erreur lors du chargement du profil.")
                } finally {
                    setLoadingProfile(false)
                }
            }
        }
        load()
    }, [name, realm, region, manualCode])

    // AI Analysis Function
    const analyzeTalents = async (code: string) => {
        setLoadingAnalysis(true)
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                body: JSON.stringify({
                    message: `Identifie la classe, la spécialisation et si c'est un build Raid ou M+. Analyse ensuite les synergies et donne la rotation optimale pour ce build : ${code}`,
                    mode: "build"
                }),
                headers: { "Content-Type": "application/json" }
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.details || data.error || "Erreur API")
            setAnalysis(data.text)
        } catch (err: any) {
            setAnalysis(`Erreur d'analyse : ${err.message}`)
        } finally {
            setLoadingAnalysis(false)
        }
    }

    // Helper: Colors for Score
    const getScoreColor = (score: number) => {
        if (score >= 3000) return "text-orange-400"
        if (score >= 2500) return "text-purple-400"
        if (score >= 2000) return "text-blue-400"
        return "text-green-400"
    }

    // Helper: Banner Image
    const getBannerUrl = (banner: string | undefined) => {
        if (banner && banner.startsWith("http")) return `url(${banner})`;
        return "url(https://render.worldofwarcraft.com/eu/zones/zone-32.jpg)"; // Default fallback
    }

    // Helper: Parse Analysis
    const renderAnalysisContent = () => {
        try {
            // Check if analysis string starts with { and ends with } to be a candidate for JSON
            const trimmed = analysis.trim();
            if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
                const parsed = JSON.parse(trimmed) as AnalysisData;
                // Simple check to ensure it has the expected structure
                if (parsed.talents && parsed.gear && parsed.rotation) {
                    return <AnalysisResult data={parsed} />;
                }
            }
        } catch (e) {
            // Not valid JSON, fall back to text
        }

        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Card className="bg-slate-900/40 border-amber-500/20">
                    <CardHeader>
                        <CardTitle className="text-amber-500 uppercase tracking-widest flex items-center gap-2">
                            <Sparkles size={18} />
                            Analyse Optimale du Build
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-invert prose-amber max-w-none text-gray-300">
                        <div className="whitespace-pre-wrap leading-relaxed">
                            {analysis}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020617] pt-24 pb-12 px-4">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header / Navigation */}
                <Button variant="ghost" onClick={() => router.push("/")} className="text-slate-400 hover:text-white">
                    <ArrowLeft className="mr-2" size={18} /> Retour à la recherche
                </Button>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-center">
                        {error}
                    </div>
                )}

                {/* Loading State for Profile */}
                {!manualCode && loadingProfile && (
                    <div className="flex flex-col items-center justify-center p-12 bg-white/5 rounded-xl animate-pulse">
                        <Loader2 className="animate-spin mb-4 text-violet-500" size={32} />
                        <p className="text-slate-400">Récupération des données Raider.io...</p>
                    </div>
                )}

                {/* Profile Data Display (Only if not manual code) */}
                {!manualCode && profile && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Card className="bg-slate-900/50 border-white/10 backdrop-blur-xl overflow-hidden relative">
                            {/* Banner Background */}
                            <div
                                className="absolute top-0 left-0 w-full h-48 bg-cover bg-center opacity-30 mask-bottom"
                                style={{ backgroundImage: getBannerUrl(profile.profile_banner) }}
                            />
                            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-slate-900/90" />

                            <CardContent className="relative pt-12 md:pt-16 pb-8 px-6 md:px-10">
                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
                                    {/* Thumbnail */}
                                    <div className="relative shrink-0">
                                        <div className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl bg-slate-800">
                                            <img src={profile.thumbnail_url} alt={profile.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-slate-900 p-1.5 rounded-full border border-white/10">
                                            {profile.region.toUpperCase()}
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 space-y-2 mb-2">
                                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight flex items-center gap-3">
                                            {profile.name}
                                            <a href={profile.profile_url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                                <ExternalLink size={20} />
                                            </a>
                                        </h1>
                                        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base text-slate-300">
                                            <span className="font-bold text-amber-400">{profile.active_spec_name} {profile.class}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                            <span>{profile.race}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                                            <span>{profile.realm} ({profile.region.toUpperCase()})</span>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto mt-6 md:mt-0">
                                        <div className="bg-slate-800/50 p-3 rounded-lg border border-white/5 text-center">
                                            <div className="text-xs text-slate-500 uppercase font-bold mb-1">Score M+</div>
                                            <div className={`text-xl md:text-2xl font-black ${getScoreColor(profile.mythic_plus_scores_by_season?.[0]?.scores.all || 0)}`}>
                                                {profile.mythic_plus_scores_by_season?.[0]?.scores.all || 0}
                                            </div>
                                        </div>
                                        <div className="bg-slate-800/50 p-3 rounded-lg border border-white/5 text-center">
                                            <div className="text-xs text-slate-500 uppercase font-bold mb-1">H. Kills</div>
                                            <div className="text-xl md:text-2xl font-bold text-white">
                                                {(profile.honorable_kills || 0).toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {/* Analysis Section */}
                <div className="space-y-6">
                    {loadingAnalysis ? (
                        <Card className="bg-slate-900/30 border-amber-500/20 min-h-[300px] flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="h-16 w-16 mx-auto rounded-full border-t-2 border-b-2 border-amber-500 animate-spin" />
                                <p className="text-amber-400 font-medium animate-pulse">L&apos;IA analyse les données...</p>
                            </div>
                        </Card>
                    ) : (
                        analysis && renderAnalysisContent()
                    )}
                </div>
            </div>
        </div>
    )
}

export default function AnalyzePage() {
    return (
        <React.Suspense fallback={
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <Loader2 className="animate-spin text-white mb-4" size={32} />
            </div>
        }>
            <AnalyzeContent />
        </React.Suspense>
    )
}
