"use client";

import React from "react";
import { Sword } from "lucide-react";
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
            congruentBuilds={{
                raid: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                mythicPlus: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
            }}
            rotation={{
                opener: [
                    "Pré-pot : Potion de puissance élémentaire.",
                    "Activez <strong>Invocation de Xuen, le Tigre blanc</strong>.",
                    "Appliquez <strong>Paume du tigre</strong> pour générer 2 Chi.",
                    "Utilisez *Coup de pied du soleil levant*.",
                    "Utilisez *Poings de Fureur* (Fist of Fury)."
                ],
                priority: [
                    "Maintenez <strong>Frappes combatives</strong> (Maîtrise) : Ne répétez JAMAIS la même compétence d&apos;affilée.",
                    "Utilisez <strong>Poings de fureur</strong> dès que disponible.",
                    "Utilisez <strong>Coup de pied du soleil levant</strong> pour burst.",
                    "Générez du Chi avec <strong>Paume du tigre</strong> (max 4-5 Chi).",
                    "Dépensez l&apos;excès de Chi avec <strong>Coup du voile noir</strong>.",
                    "En AoE (3+ cibles) : Spammez <strong>Coup tournoyant de la grue</strong> avec le buff *Marque de la Grue*."
                ]
            }}
            topPlayers={{
                period: "Saison 1 - Fév 2026",
                players: [
                    { name: "Babylonius", score: "4200", region: "NA" },
                    { name: "Dhaubee", score: "4150", region: "EU" },
                    { name: "Counterpoints", score: "3920", region: "NA" },
                    { name: "Wisk", score: "3890", region: "Asia" },
                    { name: "Raiku", score: "3840", region: "EU" }
                ]
            }}
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/windwalker/overview-pve-dps",
                icyveins: "https://www.icy-veins.com/wow/windwalker-monk-pve-dps-guide",
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">État du Marche-Vent (Février 2026)</h2>
                    <p>
                        Le Marche-Vent continue d&apos;être un DPS incroyablement fun en 2026. La refonte de talents (Patch 11.x) a simplifié la génération de Chi mais a augmenté l&apos;importance de la <strong>Maîtrise : Frappes combatives</strong>.
                        Vous êtes le roi de l&apos;<em>AoE Burst</em>. Personne ne nettoie un pack de M+ aussi vite qu&apos;un moine sous <em>Tempête, Terre et Feu</em>.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Rotation de Base (AoE et ST)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Ne répétez jamais une technique (sauf si nécessaire pour refresh un debuff urgent).</li>
                        <li>Maintenez <strong>Coup du voile noir</strong> et <strong>Paume du tigre</strong> pour gérer le Chi.</li>
                        <li>Utilisez <strong>Poings de fureur</strong> dès que possible (grosse AoE + canalisation).</li>
                        <li><strong>Coup de pied du soleil levant</strong> est votre plus gros coup monocible.</li>
                        <li>En AoE, spammez <strong>Coup tournoyant de la grue</strong> avec des marques de grue actives (appliquées par Paume du tigre / Coup du voile noir selon talents).</li>
                    </ul>

                    <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 mt-6">
                        <h4 className="font-bold text-sky-400 mb-2 flex items-center gap-2">
                            <Sword size={18} />
                            Le Conseil du Temple
                        </h4>
                        <p className="text-sm">
                            Votre survie est votre mobilité. Ne restez jamais dans une zone. Utilisez <strong>Toucher du karma</strong> offensivement si vous connaissez bien les dégâts entrants, sinon gardez-le comme CD défensif.
                            En M+, n&apos;oubliez jamais votre utilitaire : <strong>Anneau de paix</strong> pour repousser les mobs sanguinaires ou interrompre un cast.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
