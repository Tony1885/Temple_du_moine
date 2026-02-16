"use client";

import React from "react";
import { SpecGuide } from "@/components/modules/SpecGuide";

export default function BrewmasterPage() {
    return (
        <SpecGuide
            specName="Maître Brasseur"
            specIcon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_brewmaster_spec.jpg"
            specColor="text-monk-500"
            description="Le tank qui rit du danger. Esquivez, reportez les dégâts et purifiez-les avec vos breuvages célestes."
            statsPriority={[
                "Agilité",
                "Polyvalence",
                "Coup Critique",
                "Maîtrise",
                "Hâte (à éviter)",
            ]}
            consumables={{
                weapon: "Dévotion sophique / Rune hurlante",
                phial: "Phiole de polyvalence tiède",
                food: "Gâteau de la chance déviant (Crit/Vers)",
                potion: "Potion de puissance élémentaire",
            }}
            bis={[
                { slot: "Tête", item: "Capuche de l'Esprit Céleste", source: "Raid: The Great Vault" },
                { slot: "Cou", item: "Amulette de la Flamme Éternelle", source: "Donjon: Halls of Valor" },
                { slot: "Épaules", item: "Espauliers du Tigre Blanc", source: "Raid: Boss 3" },
                { slot: "Torse", item: "Harnois du Maître Brasseur", source: "Raid: Boss 7" },
                { slot: "Mains", item: "Poignes de Fer", source: "M+: Mists of Tirna Scithe" },
                { slot: "Jambes", item: "Jambiêres de la Grue Rouge", source: "Raid: Boss 5" },
                { slot: "Bijou 1", item: "Pierre d'Alchimie Céleste", source: "Craft" },
                { slot: "Bijou 2", item: "Totem de Vaudou", source: "Donjon: De Other Side" },
            ]}
            builds={[
                {
                    name: "Build Survie Ultime (Raid)",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "Raid",
                    playerRef: "Equinox"
                },
                {
                    name: "Build Dégâts M+ (Charred Passions)",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "M+",
                    playerRef: "Andybrew"
                },
                {
                    name: "Build Hybride (PvP/Solo)",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "Autre",
                    playerRef: "Trill"
                }

            ]}
            rotation={{
                notes: "Attention, depuis le prépatch 12.0, le Fracas génère plus d'aggro initial mais nécessite une gestion plus fine du Chi.",
                st: {
                    opener: [
                        "Pré-pot : Potion de puissance élémentaire.",
                        "<strong>Invocation de Niuzao</strong> 2 sec avant le pull.",
                        "<strong>Fracas de tonneaux</strong> (Keg Smash) au contact.",
                        "<strong>Souffle de feu</strong> immédiat pour le buff de réduction dégâts.",
                        "<strong>Armes de l&apos;Ordre</strong> (Kyrian) pour le burst aggro.",
                        "<strong>Paume du tigre</strong> pour dump l'excès d'énergie."
                    ],
                    priority: [
                        "<strong>Fracas de tonneaux</strong> dès que dispo (Génère Chi & Aggro).",
                        "<strong>Breuvage purificateur</strong> si Barre rouge ou > 60% stagger.",
                        "<strong>Frappe du voile noir</strong> pour le buff d&apos;esquive.",
                        "<strong>Souffle de feu</strong> pour refresh le DoT.",
                        "<strong>Paume du tigre</strong> pour vider l&apos;énergie et réduire le CD des breuvages (via talent)."
                    ]
                },
                aoe: {
                    opener: [
                        "Pré-pot : Potion de puissance élémentaire.",
                        "<strong>Invocation de Niuzao</strong>.",
                        "<strong>Fracas de tonneaux</strong> sur le groupe.",
                        "<strong>Souffle de feu</strong> pour appliquer le DoT sur tout le monde.",
                        "<strong>Vent impétueux de jade</strong> si talent.",
                        "Spam <strong>Coup tournoyant de la grue</strong>."
                    ],
                    priority: [
                        "<strong>Fracas de tonneaux</strong> (Reset CD via Hâte).",
                        "<strong>Coup tournoyant de la grue</strong> dès que vous avez 3+ stacks de Mark.",
                        "<strong>Souffle de feu</strong> en cooldown.",
                        "<strong>Explosion de Chi</strong> (si talent) à 3+ Chi.",
                        "<strong>Breuvage céleste</strong> pour absorber les grosses claques."
                    ]
                }
            }}
            topPlayers={{
                period: "Prepatch 12.0 - Fév 2026",
                players: [
                    { name: "Equinox", score: "4280", region: "NA", realm: "Tichondrius" },
                    { name: "Andybrew", score: "4215", region: "NA", realm: "Illidan" },
                    { name: "Trill", score: "4150", region: "NA", realm: "Illidan" },
                    { name: "Kastel", score: "4105", region: "EU", realm: "Hyjal" },
                    { name: "Lorkean", score: "4050", region: "EU", realm: "Kazzak" }
                ]
            }}
            talentTree={
                <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-black">
                    <div className="aspect-video w-full bg-[#111] flex items-center justify-center relative">
                        {/* Placeholder for Talent Tree Image - In a real app, this would be a dynamic screenshot or interactive component */}
                        <div className="absolute inset-0 bg-[url('https://wow.zamimg.com/uploads/guide/images/25679.jpg')] bg-cover bg-center opacity-50" />
                        <div className="relative z-10 text-center space-y-4 p-6 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-white">Calculateur de Talents 12.0</h3>
                            <p className="text-slate-300 max-w-md">
                                Visualisez et modifiez l&apos;arbre de talents optimisé pour le patch 12.0.
                            </p>
                            <a
                                href="https://www.wowhead.com/talent-calc/monk/brewmaster"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-monk-600 hover:bg-monk-500 text-white font-bold transition-all transform hover:scale-105"
                            >
                                Ouvrir sur WoWHead
                            </a>
                        </div>
                    </div>
                </div>
            }
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/brewmaster/overview-pve-tank",
                lorrgs: "https://lorrgs.io/spec_ranking/monk/brewmaster"
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">État du Maître Brasseur (Prepatch 12.0)</h2>
                    <p>
                        Le <strong>Maître Brasseur</strong> reste un tank extrêmement solide, capable de lisser les dégâts les plus violents grâce à son mécanisme unique de <strong>Report (Stagger)</strong>.
                        Avec le prepatch, l&apos;accent est mis sur la <strong>Polyvalence</strong> et le <strong>Critique</strong> pour maximiser les soins reçus (Fortune Céleste) et la réduction de dégâts brute.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                            <h4 className="font-bold text-green-400 mb-2">Points Forts</h4>
                            <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Lissage des dégâts inégalé (Report)</li>
                                <li>Mobilité exceptionnelle (Roulade, Transcendance)</li>
                                <li>Gros burst dégâts en AoE</li>
                                <li>Contribution significative au contrôle des foules (Anneau de Paix)</li>
                            </ul>
                        </div>
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                            <h4 className="font-bold text-red-400 mb-2">Points Faibles</h4>
                            <ul className="list-disc pl-4 space-y-1 text-sm">
                                <li>Vulnérable aux dégâts magiques continus</li>
                                <li>Nécessite beaucoup de bouton (Keybind heavy)</li>
                                <li>Dépendance aux soigneurs pour remonter la barre rouge</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8">Note sur le Gameplay 12.0</h3>
                    <p>
                        La gestion des breuvages reste au cœur du gameplay. <strong>Breuvage purificateur</strong> doit être utilisé proactivement pour gérer le niveau de Report, tandis que
                        <strong> Breuvage céleste</strong> est votre &quot;Panic Button&quot; préventif pour absorber les grosses attaques tank buster.
                    </p>
                </div>
            }
        />
    );
}
