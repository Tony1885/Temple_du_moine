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
            builds={[
                {
                    name: "Fistweaving Raid",
                    code: "B4QA////////////////////////////////AAQAAQKgIiIjIiSIiIgmIgmE+QgkmoRJBAAAAIpJJJFAKAAAA",
                    type: "Raid",
                    playerRef: "Megaset"
                },
                {
                    name: "Fistweaving M+",
                    code: "B4QA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "M+",
                    playerRef: "Swuiz"
                },
                {
                    name: "Castweaving Legacy",
                    code: "B4QA////////////////////////////////AAQAAQKgIiIjIiSIiIgmIgmE+QgkmoRJBAAAAIpJJJFAKAAAA",
                    type: "Autre",
                    playerRef: "Yummy"
                }

            ]}
            rotation={{
                notes: "Le talent 'Anciens Enseignements' dure désormais 20 sec (Prepatch 12.0) au lieu de 15 sec.",
                opener: [
                    "Pré-cast : <strong>Brume de rénovation</strong> (x2) sur les tanks ou soigneurs.",
                    "Activez <strong>Invocation de Chi-Ji, la Grue rouge</strong> juste avant le pull.",
                    "Appliquez <strong>Palme du tigre</strong> (Teachings of the Monastery).",
                    "Spammez <strong>Frappe du voile noir</strong> pour le <em>Fistweaving</em>."
                ],
                priority: [
                    "Maintenez <strong>Brume enveloppante</strong> sur les tanks en cas de gros dégâts.",
                    "Utilisez <strong>Vivifier</strong> en cas d&apos;urgence monocible.",
                    "Fistweaving : <strong>Paume du tigre</strong> (x3) -> <strong>Frappe du voile noir</strong>.",
                    "Coup de pied du soleil levant pour prolonger les brumes.",
                    "Utilisez <strong>Cocon de vie</strong> préventivement sur des cibles fragiles.",
                    "<strong>Regain</strong> ou <strong>Sheilun</strong> en cas de burst dégâts raid."
                ]
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
                        <li><strong>Megaset</strong> insiste sur l'importance de maintenir <em>Enseignements Ancestraux</em> actif à 100% du temps en combat.</li>
                        <li><strong>Swuiz</strong> utilise le <em>Thé de concentration foudroyante</em> offensivement pour reset le CD de <em>Coup de pied du soleil levant</em>.</li>
                    </ul>
                </div>
            }
        />
    );
}
