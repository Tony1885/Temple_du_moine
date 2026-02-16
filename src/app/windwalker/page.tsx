"use client";

import React from "react";
import { SpecGuide } from "@/components/modules/SpecGuide";

export default function WindwalkerPage() {
    return (
        <SpecGuide
            specName="Marche-Vent"
            specIcon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_windwalker_spec.jpg"
            specColor="text-sky-400"
            description="L'expert en arts martiaux qui déchaîne des coups rapides et dévastateurs. Maîtrisez la maîtrise des combinaisons."
            statsPriority={[
                "Agilité",
                "Polyvalence",
                "Maîtrise",
                "Coup Critique",
                "Hâte",
            ]}
            consumables={{
                weapon: "Dévotion tremblante",
                phial: "Phiole de rage corruptrice",
                food: "Festin de Yusa (Grande Tablée)",
                potion: "Potion de puissance élémentaire",
            }}
            bis={[
                { slot: "Tête", item: "Coiffe du Tigre Blanc", source: "Raid: Boss 9 (Sarkareth)" },
                { slot: "Cou", item: "Pendentif de la Tempête", source: "Donjon: The Nokhud Offensive" },
                { slot: "Épaules", item: "Espauliers de la Grue Céleste", source: "Raid: Boss 4" },
                { slot: "Torse", item: "Tunique du Maître", source: "Raid: Boss 1" },
                { slot: "Mains", item: "Poignes de destruction", source: "M+: Court of Stars" },
                { slot: "Jambes", item: "Chausses de la Fureur", source: "Raid: Boss 8" },
                { slot: "Bijou 1", item: "Icône de l'Incarnation", source: "Raid: The Great Vault" },
                { slot: "Bijou 2", item: "Corne de Valeur", source: "Donjon: Halls of Valor" },
            ]}
            builds={[
                {
                    name: "Build AoE (Babylonius M+)",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "M+",
                    playerRef: "Babylonius"
                },
                {
                    name: "Build ST (Raid Pure)",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "Raid",
                    playerRef: "Counterpoints"
                },
                {
                    name: "Build PvP Prepatch",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "PvP",
                    playerRef: "Trill"
                }
            ]}
            rotation={{
                notes: "Nouveau système de 'Chi Harmony' sur le prepatch. Ne JAMAIS gaspiller de Chi. Ne jamais répéter la même compétence deux fois de suite (Maîtrise).",
                st: {
                    opener: [
                        "Pré-pot : Potion de puissance élémentaire.",
                        "<strong>Invocation de Xuen</strong> 3 sec avant le pull.",
                        "<strong>Paume du tigre</strong> (Build Chi + Buff).",
                        "<strong>Coup de pied du soleil levant</strong> (RSK) pour appliquer le debuff.",
                        "<strong>Poings de Fureur</strong> (Fist of Fury) en entier.",
                        "Burst : <strong>Sérénité</strong> ou <strong>Tempête, Terre et Feu</strong>."
                    ],
                    priority: [
                        "Respectez la Maîtrise : JAMAIS 2 fois le même sort.",
                        "<strong>Toucher mortel</strong> (Touch of Death) dès que possible (execute).",
                        "<strong>Coup de pied du soleil levant</strong> (RSK) en cooldown.",
                        "<strong>Poings de fureur</strong> (FoF) dès que dispo.",
                        "<strong>Coup du dragon volant</strong> (WDP) si RSK et FoF sont en recharge.",
                        "<strong>Frappe du voile noir</strong> pour dépenser le Chi excédentaire."
                    ]
                },
                aoe: {
                    opener: [
                        "Pré-pot.",
                        "<strong>Invocation de Xuen</strong>.",
                        "<strong>Tempête, Terre et Feu</strong> (SEF) charge 1.",
                        "<strong>Coup tournoyant de la grue</strong> (SCK) pour appliquer le Mark of the Crane.",
                        "<strong>Poings de Fureur</strong> pour le burst AoE.",
                        "Spam <strong>Coup tournoyant de la grue</strong> avec les procs."
                    ],
                    priority: [
                        "Maintenez le buff de <strong>Coup tournoyant de la grue</strong> (Mark of the Crane).",
                        "<strong>Poings de fureur</strong> en priorité absolue sur 3+ cibles.",
                        "<strong>Coup tournoyant de la grue</strong> (SCK) est votre principal dépenseur de Chi en AoE (3+ cibles).",
                        "Utilisez <strong>Coup du dragon volant</strong> en CD.",
                        "<strong>Frappe du voile noir</strong> pour activer les procs de SCK."
                    ]
                }
            }}
            topPlayers={{
                period: "Prepatch 12.0 - Fév 2026",
                players: [
                    { name: "Babylonius", score: "4280", region: "NA", realm: "Area 52" },
                    { name: "Dhaubee", score: "4220", region: "EU", realm: "Draenor" },
                    { name: "Counterpoints", score: "4050", region: "NA", realm: "Illidan" },
                    { name: "Wisk", score: "4010", region: "Asia", realm: "Hyjal" },
                    { name: "Raiku", score: "3995", region: "EU", realm: "Ravencrest" }
                ]
            }}
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/windwalker/overview-pve-dps",
                lorrgs: "https://lorrgs.io/spec_ranking/monk/windwalker"
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">État du Marche-Vent (Février 2026 - Prepatch)</h2>
                    <p>
                        Le <strong>Marche-Vent</strong> est une des classes les plus technique mais les plus gratifiantes du jeu.
                        <strong>Babylonius</strong> et les theorycrafters du Peak of Serenity ont démontré que le nouveau scaling de la Maîtrise rend la spé extrêmement forte en Cleave constant.
                    </p>
                    <p>
                        L&apos;AoE Burst sous <em>Tempête, Terre et Feu</em> reste inégalé, permettant de delete des packs entiers en M+25 et plus.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Optimisation Prepatch</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Le <strong>Set Bonus S1-2026</strong> force à jouer avec <em>Frappe du voile noir</em> améliorée.</li>
                        <li>Ne jouez PAS avec <em>Invocation de Xuen</em> en pur monocible si vous n&apos;avez pas au moins 30% de Hâte (stat prioritaire #2 maintenant).</li>
                        <li>La gestion du Chi est devenue plus punitive : overcaper = perte massive de DPS.</li>
                    </ul>
                </div>
            }
        />
    );
}
