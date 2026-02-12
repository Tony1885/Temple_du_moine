"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ClipboardList, Sparkles, Loader2, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BuildModule() {
    const router = useRouter()
    const [code, setCode] = useState("")
    const [charName, setCharName] = useState("")
    const [realm, setRealm] = useState("Hyjal")
    const [region, setRegion] = useState("eu")
    const [isLoading, setIsLoading] = useState(false)

    const handleAnalyze = async () => {
        if (!code.trim()) return
        setIsLoading(true)
        // Redirection vers la page d'analyse avec le code en paramètre
        router.push(`/analyze?code=${encodeURIComponent(code)}`)
    }

    const handleImportFromRio = async () => {
        if (!charName.trim()) return
        setIsLoading(true)
        // Redirection vers la page d'analyse avec les infos Raider.io
        router.push(`/analyze?region=${region}&realm=${realm}&name=${encodeURIComponent(charName)}`)
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            <Card className="bg-slate-950/50 border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-violet-500" />
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-500 text-xl font-black uppercase tracking-tight">
                        <User className="text-amber-500" size={24} />
                        Analyser un Personnage
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-base">
                        Renseigne ton pseudo pour récupérer tes talents via Raider.io ou colle ton code directement.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="rio" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-900/50 border border-white/5 p-1 h-auto rounded-xl">
                            <TabsTrigger
                                value="rio"
                                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-amber-500 data-[state=active]:text-black font-bold py-3 rounded-lg transition-all"
                            >
                                Import Raider.io
                            </TabsTrigger>
                            <TabsTrigger
                                value="manual"
                                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-violet-500 data-[state=active]:text-white font-bold py-3 rounded-lg transition-all"
                            >
                                Code Manuel
                            </TabsTrigger>
                        </TabsList>

                        {/* --- RAIDER.IO TAB --- */}
                        <TabsContent value="rio" className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-slate-500 ml-1 tracking-widest">Région</label>
                                    <Input
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                        placeholder="eu"
                                        className="bg-slate-900/50 border-white/10 h-12 text-lg font-mono focus:border-amber-500/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-slate-500 ml-1 tracking-widest">Serveur</label>
                                    <Input
                                        value={realm}
                                        onChange={(e) => setRealm(e.target.value)}
                                        placeholder="Hyjal"
                                        className="bg-slate-900/50 border-white/10 h-12 text-lg focus:border-amber-500/50 transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-slate-500 ml-1 tracking-widest">Nom du personnage</label>
                                <div className="relative group">
                                    <Input
                                        value={charName}
                                        onChange={(e) => setCharName(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleImportFromRio()}
                                        placeholder="Ex: Sylvanas..."
                                        className="bg-slate-900/50 border-white/10 h-14 pl-12 text-xl font-bold text-white focus:border-amber-500/50 transition-colors placeholder:text-slate-600"
                                    />
                                    <User className="absolute left-4 top-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" size={24} />
                                </div>
                            </div>
                            <Button
                                onClick={handleImportFromRio}
                                className="w-full h-14 text-lg uppercase font-black tracking-widest shadow-lg shadow-amber-900/20 hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                                variant="gold"
                                disabled={isLoading || !charName.trim()}
                            >
                                {isLoading ? <Loader2 className="mr-3 animate-spin" size={24} /> : <Search className="mr-3" size={24} />}
                                Récupérer & Analyser
                            </Button>
                        </TabsContent>

                        {/* --- MANUAL CODE TAB --- */}
                        <TabsContent value="manual" className="space-y-6">
                            <Textarea
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                placeholder="Colle ta chaîne de talents Blizzard ici (commence par B4E...)"
                                className="min-h-[220px] font-mono text-xs bg-slate-900/50 border-white/10 resize-none p-6 leading-relaxed focus:border-violet-500/50 transition-colors"
                            />
                            <Button
                                onClick={() => handleAnalyze()}
                                className="w-full h-14 text-lg uppercase font-black tracking-widest shadow-lg shadow-violet-900/20 hover:shadow-violet-500/20 transition-all transform hover:-translate-y-0.5"
                                variant="violet"
                                disabled={isLoading || !code.trim()}
                            >
                                {isLoading ? <Loader2 className="mr-3 animate-spin" size={24} /> : <Sparkles className="mr-3" size={24} />}
                                Lancer l&apos;Analyse
                            </Button>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}
