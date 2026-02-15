"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Search, User, Globe, Server, PlayCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { REGIONS, REALMS } from "@/lib/constants/realms"

export function BuildModule() {
    const router = useRouter()
    const [charName, setCharName] = useState("")
    const [realm, setRealm] = useState("Hyjal")
    const [region, setRegion] = useState("eu")
    const [isLoading, setIsLoading] = useState(false)

    const handleImportFromRio = async () => {
        if (!charName.trim()) return
        setIsLoading(true)

        if (charName.includes("warcraftlogs.com")) {
            router.push(`/analyze?code=${encodeURIComponent(charName)}`)
            return
        }

        router.push(`/analyze?region=${region}&realm=${realm}&name=${encodeURIComponent(charName)}`)
    }

    const loadDemo = () => {
        setRegion("eu")
        setRealm("Tarren Mill")
        setCharName("Naowh")
    }

    return (
        <div className="w-full">
            <Card className="bg-black/60 border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl relative">
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-monk-500 to-transparent opacity-50" />

                <CardHeader className="text-center pb-2 pt-8">
                    <CardTitle className="flex flex-col items-center gap-2 text-white text-2xl font-black uppercase tracking-tight">
                        <div className="p-3 rounded-full bg-monk-500/10 border border-monk-500/20 mb-2">
                            <User className="text-monk-500" size={24} />
                        </div>
                        Analyser un Personnage
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-base max-w-md mx-auto">
                        Renseigne ton pseudo pour récupérer tes talents via Raider.io ou colle un lien WarcraftLogs.
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-8">
                    <div className="space-y-6">
                        {/* Region & Realm Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2 relative">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 flex items-center gap-1">
                                    <Globe size={12} /> Région
                                </label>
                                <div className="relative">
                                    <select
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                        className="w-full bg-white/5 border-white/10 h-12 px-4 appearance-none text-white focus:border-monk-500/50 focus:ring-monk-500/20 transition-all rounded-xl cursor-pointer"
                                    >
                                        {REGIONS.map((r) => (
                                            <option key={r.value} value={r.value} className="bg-slate-900 text-white">
                                                {r.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                        ▼
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 flex items-center gap-1">
                                    <Server size={12} /> Serveur
                                </label>
                                <Input
                                    list="realms-list"
                                    value={realm}
                                    onChange={(e) => setRealm(e.target.value)}
                                    placeholder="Rechercher un serveur..."
                                    className="bg-white/5 border-white/10 h-12 text-white focus:border-monk-500/50 focus:ring-monk-500/20 transition-all rounded-xl"
                                />
                                <datalist id="realms-list">
                                    {(REALMS[region as keyof typeof REALMS] || REALMS.eu).map((r) => (
                                        <option key={r} value={r} />
                                    ))}
                                </datalist>
                            </div>
                        </div>

                        {/* Character Name Input */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Personnage ou Lien WCL</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-monk-400 transition-colors">
                                    <Search size={20} />
                                </div>
                                <Input
                                    value={charName}
                                    onChange={(e) => setCharName(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleImportFromRio()}
                                    placeholder="Nom du perso (ex: Sylvanas) ou URL..."
                                    className="bg-white/5 border-white/10 h-14 pl-12 text-lg font-medium text-white placeholder:text-slate-600 focus:border-monk-500/50 focus:ring-monk-500/20 transition-all rounded-xl"
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                            <Button
                                onClick={handleImportFromRio}
                                className="w-full h-14 text-lg uppercase font-black tracking-widest bg-gradient-to-r from-monk-600 to-monk-500 hover:from-monk-500 hover:to-monk-400 text-black shadow-[0_0_20px_rgba(0,255,150,0.3)] hover:shadow-[0_0_30px_rgba(0,255,150,0.5)] transition-all transform hover:-translate-y-0.5 rounded-xl border-none"
                                disabled={isLoading || !charName.trim()}
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" size={20} /> Analyse en cours...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Sparkles className="fill-black/20" size={20} />
                                        Lancer l&apos;Analyse
                                    </span>
                                )}
                            </Button>

                            <Button
                                variant="ghost"
                                onClick={loadDemo}
                                className="w-full text-xs uppercase tracking-widest text-slate-500 hover:text-monk-400 hover:bg-white/5"
                            >
                                <PlayCircle size={14} className="mr-2" />
                                Essayer avec une démo (Naowh - Tarren Mill)
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
