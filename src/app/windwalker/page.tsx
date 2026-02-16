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
            builds={[
                {
                    name: "Build AoE Babylonius",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "M+",
                    playerRef: "Babylonius"
                },
                {
                    name: "Build ST Counterpoints",
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
                notes: "Nouveau système de 'Chi Harmony' sur le prepatch. Ne jamais gaspiller de Chi.",
                opener: [
                    "Pré-pot : Potion de puissance élémentaire.",
                    "Activez <strong>Invocation de Xuen, le Tigre blanc</strong> (-3 sec).",
                    "Charge avec <strong>Coup du serpent volant</strong>.",
                    "<strong>Paume du tigre</strong> (2 Chi).",
                    "<strong>Coup de pied du soleil levant</strong> (mettez-le en CD direct).",
                    "<strong>Poings de Fureur</strong> (Fist of Fury) sous proc gratuit si dispo.",
                    "Burst : <strong>Sérénité</strong> ou <strong>Tempête, Terre et Feu</strong>."
                ],
                priority: [
                    "Maintenez <strong>Frappes combatives</strong> (Maîtrise) : JAMAIS 2 fois le même sort.",
                    "Utilisez <strong>Toucher mortel</strong> dès que possible sur cible < 15% HP.",
                    "<strong>Poings de fureur</strong> est votre priorité #1 en dégâts.",
                    "<strong>Coup de pied du soleil levant</strong> pour réduire le CD de Poings de Fureur.",
                    "<strong>Coup du dragon volant</strong> (Whirling Dragon Punch) UNIQUEMENT quand Fists et RSK sont en CD.",
                    "Générez du Chi avec <strong>Paume du tigre</strong> sans overcaper."
                ]
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
                        L'AoE Burst sous <em>Tempête, Terre et Feu</em> reste inégalé, permettant de delete des packs entiers en M+25 et plus.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Optimisation Prepatch</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Le <strong>Set Bonus S1-2026</strong> force à jouer avec <em>Frappe du voile noir</em> améliorée.</li>
                        <li>Ne jouez PAS avec <em>Invocation de Xuen</em> en pur monocible si vous n'avez pas au moins 30% de Hâte (stat prioritaire #2 maintenant).</li>
                        <li>La gestion du Chi est devenue plus punitive : overcaper = perte massive de DPS.</li>
                    </ul>
                </div>
            }
        />
    );
}
