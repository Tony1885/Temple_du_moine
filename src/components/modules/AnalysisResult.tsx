import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, AlertTriangle, XCircle, Shield, Sword, RotateCcw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface AnalysisStatus {
    status: "success" | "warning" | "error";
    title: string;
    content: string;
}

export interface AnalysisData {
    talents: AnalysisStatus;
    gear: AnalysisStatus;
    rotation: AnalysisStatus;
    summary: string;
}

const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
        case "success": return <CheckCircle className="text-monk-500" size={24} />;
        case "warning": return <AlertTriangle className="text-amber-500" size={24} />;
        case "error": return <XCircle className="text-red-500" size={24} />;
        default: return <CheckCircle className="text-slate-500" size={24} />;
    }
}

const StatusBadge = ({ status }: { status: string }) => {
    switch (status) {
        case "success": return <Badge className="bg-monk-500/20 text-monk-400 hover:bg-monk-500/30 border-monk-500/50">Optimisé</Badge>;
        case "warning": return <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 border-amber-500/50">Améliorable</Badge>;
        case "error": return <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border-red-500/50">Critique</Badge>;
        default: return null;
    }
}

export function AnalysisResult({ data }: { data: AnalysisData }) {
    if (!data) return null;

    const sections = [
        { key: 'talents', icon: Shield, label: "Talents" },
        { key: 'gear', icon: Sword, label: "Équipement (Trinkets/Gemmes)" },
        { key: 'rotation', icon: RotateCcw, label: "Rotation & Cooldowns" }
    ];

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert max-w-none text-slate-300 bg-slate-900/40 p-6 rounded-xl border border-white/5"
            >
                <div dangerouslySetInnerHTML={{ __html: data.summary }} />
            </motion.div>

            <div className="grid gap-6 md:grid-cols-1">
                {sections.map((section, idx) => {
                    const item = data[section.key as keyof AnalysisData] as AnalysisStatus;
                    return (
                        <motion.div
                            key={section.key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="bg-slate-900/50 border-white/10 overflow-hidden">
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-slate-800 rounded-lg">
                                            <section.icon className="text-slate-400" size={20} />
                                        </div>
                                        <CardTitle className="text-lg font-bold text-slate-200">
                                            {section.label}
                                        </CardTitle>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <StatusBadge status={item.status} />
                                        <StatusIcon status={item.status} />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.content}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    )
}
