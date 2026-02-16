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
                "Hâte",
                "Coup Critique",
                "Polyvalence",
                "Maîtrise",
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
                    { name: "Megaset", score: "4210", region: "NA", realm: "Illidan" },
                    { name: "Swuiz", score: "4190", region: "EU", realm: "Twisting Nether" },
                    { name: "Drainer", score: "4050", region: "EU", realm: "Twisting Nether" },
                    { name: "Yummy", score: "4015", region: "NA", realm: "Sargeras" },
                    { name: "Zmok", score: "3980", region: "EU", realm: "Silvermoon" }
                ]
            }}
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/mistweaver/overview-pve-healer",
                lorrgs: "https://lorrgs.io/spec_ranking/monk/mistweaver"
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">État du Tisse-Brume (Février 2026 - Prepatch)</h2>
                    <p>
                        Le <strong>Fistweaving</strong> domine complètement la méta, porté par des joueurs comme <strong>Megaset</strong> et <strong>Swuiz</strong>.
                        Le <strong>Castweaving</strong> (style à distance) reste viable pour certains raids, mais perd en efficacité brute comparé aux dégâts que peut apporter un Mistweaver au corps à corps.
                    </p>
                    <p>
                        Le changement majeur de ce prepatch est le rework de <strong>Chi-Ji</strong> qui devient un véritable CD de burst healing, rivalisant avec les meilleurs CDs des Prêtres.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Conseils des Pro-Players</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Megaset</strong> insiste sur l&apos;importance de maintenir <em>Enseignements Ancestraux</em> actif à 100% du temps en combat.</li>
                        <li><strong>Swuiz</strong> utilise le <em>Thé de concentration foudroyante</em> offensivement pour reset le CD de <em>Coup de pied du soleil levant</em>.</li>
                    </ul>
                </div>
            }
        />
    );
}
