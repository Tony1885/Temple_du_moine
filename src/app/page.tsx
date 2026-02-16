"use client"

import React from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, ScrollText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function NewsItem({ date, title, tag, url }: { date: string, title: string, tag: string, url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group h-full">
        <div className="flex flex-col items-center justify-center h-12 w-12 rounded bg-monk-500/20 text-monk-400 font-bold text-xs shrink-0">
          <span className="leading-none">{date.split(' ')[0]}</span>
          <span className="leading-none text-[10px] uppercase opacity-70">{date.split(' ')[1]}</span>
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 block group-hover:text-monk-400 transition-colors">{tag}</span>
          <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors text-sm leading-snug">{title}</h4>
        </div>
      </div>
    </a>
  )
}

export default function HomePage() {
  const news = [
    {
      date: "12 Fév",
      title: "Patch Notes 12.0 (Prepatch) : Analyse complète des changements Monk",
      tag: "Mise à jour",
      url: "https://www.peakofserenity.com/"
    },
    {
      date: "10 Fév",
      title: "Equinox (Brewmaster) : Nouveau record du monde en M+32",
      tag: "Esport",
      url: "https://raider.io/news"
    },
    {
      date: "08 Fév",
      title: "Tier Set S1-2026 : Aperçu des bonus pour Tisse-Brume",
      tag: "Raiding",
      url: "https://www.wowhead.com/news"
    },
    {
      date: "05 Fév",
      title: "Guide : Optimiser son Chi pour le Prepatch",
      tag: "Guide",
      url: "https://www.peakofserenity.com/windwalker/guide"
    },
  ]

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
            Le Guide Francophone • Prepatch 12.0
          </motion.div>

          {/* NEWS HIGHLIGHT WITHIN HERO OR RIGHT BELOW - Per User Request */}
          {/* User asked for "news in a special category news at the top" */}

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

        {/* --- NEWS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                <ScrollText size={18} className="text-monk-400" />
                Dernières Actualités
              </h3>
              <span className="text-xs font-mono text-slate-500">Mise à jour : 12 Février 2026</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {news.map((item, i) => (
                <NewsItem key={i} {...item} />
              ))}
            </div>
          </div>
        </motion.div>

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
              <div className="p-2 rounded-2xl bg-monk-500/20 w-fit ring-1 ring-monk-500/50 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_monk_brewmaster_spec.jpg"
                  alt="Brewmaster"
                  width={48}
                  height={48}
                  className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  unoptimized // Using external URL
                />
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
              <div className="p-2 rounded-2xl bg-teal-500/20 w-fit ring-1 ring-teal-500/50 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_monk_mistweaver_spec.jpg"
                  alt="Mistweaver"
                  width={48}
                  height={48}
                  className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  unoptimized
                />
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
              <div className="p-2 rounded-2xl bg-sky-500/20 w-fit ring-1 ring-sky-500/50 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="https://wow.zamimg.com/images/wow/icons/large/spell_monk_windwalker_spec.jpg"
                  alt="Windwalker"
                  width={48}
                  height={48}
                  className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  unoptimized
                />
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

        {/* --- REMOVED ANALYZER SECTION AS REQUESTED --- */}
        <div className="text-center opacity-50 pb-12">
          <p className="text-sm text-slate-500">Mise à jour des analyses IA en cours pour le Patch 12.0...</p>
        </div>

      </div>
    </div>
  )
}
