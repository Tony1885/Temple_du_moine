"use client";

import React from "react";
import { SpecGuide } from "@/components/modules/SpecGuide";

export default function MistweaverPage() {
    return (
        <SpecGuide
            specName="Tisse-Brume"
            specIcon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_mistweaver_spec.jpg"
            specColor="text-teal-400"
            description="Le soigneur mobile qui mélange arts martiaux et magie spirituelle pour protéger ses alliés."
            statsPriority={[
                "Intellect",
                "Hâte (Cap ~30%)",
                "Coup Critique (Cap ~30%)",
                "Polyvalence",
                "Maîtrise (Faible prio en MM+)",
            ]}
            consumables={{
                weapon: "Dévotion sophique / Rune hurlante",
                phial: "Phiole de rage corruptrice",
                food: "Festin de Yusa (Grande Tablée)",
                potion: "Potion de puissance élémentaire",
            }}
            bis={[
                { slot: "Tête", item: "Couronne de la Grue Jade", source: "Raid: Boss 8" },
                { slot: "Cou", item: "Chaîne d'Harmonie Spirituelle", source: "Donjon: Temple of Jade Serpent" },
                { slot: "Épaules", item: "Mantelet des Brumes Mobiles", source: "Raid: The Great Vault" },
                { slot: "Torse", item: "Robe du Lotus Blanc", source: "Raid: Boss 2" },
                { slot: "Mains", item: "Gants de Tissage de Vie", source: "M+: Ruby Life Pools" },
                { slot: "Jambes", item: "Chausses du Dragon Céleste", source: "Raid: Boss 6" },
                { slot: "Bijou 1", item: "Miroir de la Réflexion", source: "Raid: Boss 1" },
                { slot: "Bijou 2", item: "Prisme d'Ambre", source: "Donjon: Vault of the Wardens" },
            ]}
            builds={[
                {
                    name: "Fistweaving Raid (Meta)",
                    code: "B4QA////////////////////////////////AAQAAQKgIiIjIiSIiIgmIgmE+QgkmoRJBAAAAIpJJJFAKAAAA",
                    type: "Raid",
                    playerRef: "Megaset"
                },
                {
                    name: "Fistweaving M+ (Dégâts)",
                    code: "B4QA////////////////////////////////AAQAAJEQiISEiIkiIiIJyIJhPkIJJqESQAAAAikkkkUAoAAAA",
                    type: "M+",
                    playerRef: "Swuiz"
                },
                {
                    name: "Castweaving Legacy (Distance)",
                    code: "B4QA////////////////////////////////AAQAAQKgIiIjIiSIiIgmIgmE+QgkmoRJBAAAAIpJJJFAKAAAA",
                    type: "Autre",
                    playerRef: "Yummy"
                }
            ]}
            rotation={{
                notes: "Le talent 'Anciens Enseignements' (Ancient Teachings) dure désormais 20 sec (Prepatch 12.0). Maintenez-le actif à tout prix.",
                st: {
                    opener: [
                        "Pré-cast : <strong>Brume de rénovation</strong> (x2) sur les tanks.",
                        "Potion au pull.",
                        "<strong>Paume du tigre</strong> (x2) pour charger les stacks.",
                        "<strong>Coup de pied du soleil levant</strong> pour activer <em>Anciens Enseignements</em>.",
                        "<strong>Invocation de Chi-Ji</strong> pour le burst initial."
                    ],
                    priority: [
                        "Maintenez <strong>Brume de rénovation</strong> au CD.",
                        "<strong>Coup de pied du soleil levant</strong> (RSK) dès que dispo.",
                        "<strong>Frappe du voile noir</strong> pour reset RSK (avec talent).",
                        "<strong>Vivifier</strong> (Instant) avec les procs.",
                        "<strong>Brume enveloppante</strong> sur le tank si grosse claque."
                    ]
                },
                aoe: {
                    opener: [
                        "Pré-cast : <strong>Brume de rénovation</strong> partout.",
                        "<strong>Piétinement de ligne faë</strong> (Faeline Stomp) au sol.",
                        "<strong>Coup tournoyant de la grue</strong> dans la ligne faë pour soigner tout le groupe.",
                        "<strong>Invocation de Chi-Ji</strong> + <strong>Thé de manne</strong>."
                    ],
                    priority: [
                        "Restez dans votre <strong>Ligne Faë</strong>.",
                        "<strong>Coup tournoyant de la grue</strong> (Spinning Crane Kick) pour soigner via Chi-Ji/Enseignements.",
                        "<strong>Réceptacle d'essence</strong> (Essence Font) si gros dégâts de raid (si talent pris).",
                        "<strong>Regain</strong> (Sheilun) pour dispell de masse ou burst heal.",
                        "<strong>Cocon de vie</strong> en préventif sur la cible la plus basse."
                    ]
                }
            }}
            topPlayers={{
                period: "Prepatch 12.0 - Fév 2026",
                players: [
                    { name: "Megaset", score: "4350", region: "NA", realm: "Illidan" },
                    { name: "Swuiz", score: "4310", region: "EU", realm: "Twisting Nether" },
                    { name: "Veyloris", score: "4220", region: "NA", realm: "Sargeras" },
                    { name: "Jdotb", score: "4150", region: "NA", realm: "Area 52" },
                    { name: "Zmok", score: "4100", region: "EU", realm: "Silvermoon" }
                ]
            }}
            talentTree={
                <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-black">
                    <div className="aspect-video w-full bg-[#111] flex items-center justify-center relative">
                        {/* Placeholder for Talent Tree Image */}
                        <div className="absolute inset-0 bg-[url('https://wow.zamimg.com/uploads/guide/images/25680.jpg')] bg-cover bg-center opacity-50" />
                        <div className="relative z-10 text-center space-y-4 p-6 bg-black/60 backdrop-blur-sm rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-white">Calculateur de Talents 12.0</h3>
                            <p className="text-slate-300 max-w-md">
                                Découvrez les nouveaux talents Héroïques : <strong>Conduit des Astres</strong> et <strong>Maître de l'Harmonie</strong>.
                            </p>
                            <a
                                href="https://www.wowhead.com/talent-calc/monk/mistweaver"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold transition-all transform hover:scale-105"
                            >
                                Ouvrir sur WoWHead
                            </a>
                        </div>
                    </div>
                </div>
            }
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/mistweaver/overview-pve-healer",
                lorrgs: "https://lorrgs.io/spec_ranking/monk/mistweaver"
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">État du Tisse-Brume (Prepatch 12.0)</h2>
                    <p>
                        Le <strong>Tisse-Brume</strong> est dans une position dominante grâce à son profil de soigneur "Melee" (Fistweaving) qui apporte des dégâts considérables tout en maintenant le groupe en vie.
                        L'ajout des <strong>Hero Talents</strong> renforce deux styles de jeu distincts :
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20">
                            <h4 className="font-bold text-teal-400 mb-2">Conduit des Astres (Conduit of the Celestials)</h4>
                            <p className="text-sm">
                                Focalisé sur un burst AoE massif toutes les 90s. Idéal pour les Raids et les grosses clés Fortifiées où le groupe prend des dégâts constants.
                            </p>
                        </div>
                        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                            <h4 className="font-bold text-blue-400 mb-2">Maître de l'Harmonie (Master of Harmony)</h4>
                            <p className="text-sm">
                                Un style plus lissé, stockant de la "Vitalité" pour la libérer via le <em>Thé de concentration</em>. Offre une flexibilité incroyable en Soins ou Dégâts.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8">Conseils pour le Prepatch</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Anciens Enseignements</strong> est votre source principale de soin en donjon. Si vous n&apos;êtes pas au corps-à-corps, vous ne soignez pas !</li>
                        <li>Le cap <strong>Hâte (30%)</strong> est crucial pour réduire le CD de vos coups de pieds et fluidifier la rotation.</li>
                    </ul>
                </div>
            }
        />
    );
}
