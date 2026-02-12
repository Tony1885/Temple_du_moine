"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ClipboardList, Sparkles, Loader2, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BuildModule() {
    const [code, setCode] = useState("")
    const [charName, setCharName] = useState("")
    const [realm, setRealm] = useState("Hyjal")
    const [region, setRegion] = useState("eu")
    const [analysis, setAnalysis] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isFetching, setIsFetching] = useState(false)

    const handleAnalyze = async (manualCode?: string) => {
        const talentCode = manualCode || code
        if (!talentCode.trim() || isLoading) return

        setIsLoading(true)
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                body: JSON.stringify({
                    message: `Identifie la classe, la spécialisation et si c'est un build Raid ou M+. Analyse ensuite les synergies et donne la rotation optimale pour ce build : ${talentCode}`,
                    mode: "build"
                }),
                headers: { "Content-Type": "application/json" }
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.details || data.error || "Erreur API")
            setAnalysis(data.text)
        } catch (error: any) {
            setAnalysis(`Erreur technique : ${error.message}`);
        } finally {
            setIsLoading(false)
        }
    }

    const handleImportFromRio = async () => {
        if (!charName.trim() || isFetching) return

        setIsFetching(true)
        setAnalysis("")
        try {
            const url = `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${encodeURIComponent(charName)}&fields=talents`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Personnage introuvable ou erreur Raider.io");
            }

            const data = await response.json();

            if (data.talents) {
                setCode(data.talents);
                // Auto-analyze after import
                handleAnalyze(data.talents);
            } else {
                throw new Error("Aucun talent trouvé pour ce personnage.");
            }
        } catch (error: any) {
            setAnalysis(`Erreur Raider.io : ${error.message}`);
        } finally {
            setIsFetching(false)
        }
    }

    return (
        <div className="grid lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-start">
            <Card className="bg-slate-950/50 border-white/10 backdrop-blur-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-violet-500" />
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-400">
                        <ClipboardList size={20} />
                        Source des Talents
                    </CardTitle>
                    <CardDescription>
                        Importe ton personnage ou colle ton code Blizzard directement.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="rio" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-900/50 border border-white/5">
                            <TabsTrigger value="rio" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">Raider.io</TabsTrigger>
                            <TabsTrigger value="manual" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">Code Manuel</TabsTrigger>
                        </TabsList>

                        <TabsContent value="rio" className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">Région</label>
                                    <Input
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                        placeholder="eu, us..."
                                        className="bg-slate-900/50 border-white/5 h-11"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">Serveur</label>
                                    <Input
                                        value={realm}
                                        onChange={(e) => setRealm(e.target.value)}
                                        placeholder="Hyjal, Draenor..."
                                        className="bg-slate-900/50 border-white/5 h-11"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">Nom du personnage</label>
                                <div className="relative">
                                    <Input
                                        value={charName}
                                        onChange={(e) => setCharName(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleImportFromRio()}
                                        placeholder="Ton pseudo..."
                                        className="bg-slate-900/50 border-white/5 h-11 pl-10"
                                    />
                                    <User className="absolute left-3 top-3.5 text-slate-500" size={16} />
                                </div>
                            </div>
                            <Button
                                onClick={handleImportFromRio}
                                className="w-full h-12 mt-2"
                                variant="gold"
                                disabled={isFetching || !charName.trim() || isLoading}
                            >
                                {isFetching ? <Loader2 className="mr-2 animate-spin" size={18} /> : <Search className="mr-2" size={18} />}
                                Récupérer & Analyser
                            </Button>
                        </TabsContent>

                        <TabsContent value="manual" className="space-y-4">
                            <Textarea
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Colle ta chaîne de talents Blizzard (commence souvent par B4E...)"
                                className="min-h-[180px] font-mono text-xs bg-slate-900/50 border-white/5 resize-none"
                            />
                            <Button
                                onClick={() => handleAnalyze()}
                                className="w-full h-12"
                                variant="gold"
                                disabled={isLoading || !code.trim() || isFetching}
                            >
                                {isLoading ? <Loader2 className="mr-2 animate-spin" size={18} /> : <Sparkles className="mr-2" size={18} />}
                                Lancer l&apos;Analyse
                            </Button>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <AnimatePresence mode="wait">
                    {analysis || isLoading || isFetching ? (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <Card className="bg-slate-900/40 border-white/5 backdrop-blur-md relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <BrainIcon size={80} className="text-white" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-amber-500 flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                                        Rapport de l&apos;IA
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm leading-relaxed text-gray-200 whitespace-pre-wrap font-medium min-h-[300px]">
                                    {isLoading || isFetching ? (
                                        <div className="flex flex-col items-center justify-center h-[300px] gap-4">
                                            <div className="relative">
                                                <div className="h-12 w-12 rounded-full border-t-2 border-amber-500 animate-spin" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <BrainIcon size={20} className="text-amber-500" />
                                                </div>
                                            </div>
                                            <p className="text-amber-400 font-bold animate-pulse">L&apos;IA analyse Azeroth...</p>
                                        </div>
                                    ) : (
                                        analysis
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center h-full min-h-[450px] text-center p-12 border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.01]"
                        >
                            <div className="h-24 w-24 rounded-full bg-slate-900/80 flex items-center justify-center mb-6 shadow-2xl">
                                <Search className="text-slate-700" size={40} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-400 mb-2">Aucune donnée chargée</h3>
                            <p className="text-slate-500 max-w-xs">
                                Utilise l&apos;import Raider.io ou colle un code manuel pour commencer l&apos;analyse.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

function BrainIcon({ size = 20, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.48Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.48Z" />
        </svg>
    )
}
