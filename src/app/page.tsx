"use client"

import React from "react"
import { motion } from "framer-motion"
import { Sparkles, Anchor, Heart, Wind, ArrowRight } from "lucide-react"
import Link from "next/link"
import { BuildModule } from "@/components/modules/BuildModule"

export default function HomePage() {
  return (
    <div className="relative min-h-screen pt-24 pb-12 px-4 md:px-8 overflow-hidden bg-[#020617] text-white selection:bg-monk-500/30">

      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Monk Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-monk-600/20 blur-[128px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-600/20 blur-[128px] animate-pulse delay-700" />
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] rounded-full bg-emerald-500/10 blur-[96px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">

        {/* --- HERO SECTION --- */}
        <div className="text-center space-y-8 pt-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-monk-500/30 bg-monk-500/10 text-monk-300 text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_-5px_rgba(0,255,150,0.5)] backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            Le Guide Francophone
          </motion.div>

          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]"
          >
            <span className="block text-white drop-shadow-2xl">TEMPLE DU</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-monk-400 via-teal-200 to-monk-500 drop-shadow-[0_0_30px_rgba(0,255,150,0.4)]">
              MOINE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Le guide de référence pour maîtriser les arts du <span className="text-monk-400">Maître Brasseur</span>, du <span className="text-teal-400">Tisse-Brume</span> et du <span className="text-sky-400">Marche-Vent</span>.
          </motion.p>
        </div>

        {/* --- SPECS CARDS --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* BREWMASTER */}
          <Link href="/brewmaster" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-monk-500/50 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(0,255,150,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-between space-y-20">
              <div className="p-4 rounded-2xl bg-monk-500/20 w-fit text-monk-400 ring-1 ring-monk-500/50 group-hover:scale-110 transition-transform duration-500">
                <Anchor size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-monk-400 transition-colors">Maître Brasseur</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Encaissez les coups les plus lourds avec votre Report et protégez vos alliés avec vos breuvages.
                </p>
                <div className="flex items-center gap-2 text-monk-400 font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
                  Voir le guide <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>

          {/* MISTWEAVER */}
          <Link href="/mistweaver" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-teal-500/50 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(20,184,166,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-between space-y-20">
              <div className="p-4 rounded-2xl bg-teal-500/20 w-fit text-teal-400 ring-1 ring-teal-500/50 group-hover:scale-110 transition-transform duration-500">
                <Heart size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">Tisse-Brume</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Soignez vos alliés avec les brumes ancestrales et l&apos;art du Serpent de Jade.
                </p>
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
                  Voir le guide <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>

          {/* WINDWALKER */}
          <Link href="/windwalker" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-sky-500/50 hover:bg-white/10 hover:shadow-[0_0_50px_rgba(14,165,233,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full justify-between space-y-20">
              <div className="p-4 rounded-2xl bg-sky-500/20 w-fit text-sky-400 ring-1 ring-sky-500/50 group-hover:scale-110 transition-transform duration-500">
                <Wind size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">Marche-Vent</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Déchaînez la fureur des arts martiaux avec des combos dévastateurs.
                </p>
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm uppercase tracking-wide group-hover:gap-4 transition-all">
                  Voir le guide <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* --- ANALYZER SECTION --- */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Analyseur de Performance</h2>
            <p className="text-slate-400">Optimisez votre cycle et votre équipement avec notre IA.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="w-full max-w-3xl mx-auto relative"
          >
            {/* Glowing Border Layout */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-monk-500 via-teal-500 to-monk-500 opacity-30 blur-xl animate-gradient-xy" />
            <div className="relative">
              <BuildModule />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
