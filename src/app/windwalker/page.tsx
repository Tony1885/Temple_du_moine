"use client";

import React from "react";
import { Wind } from "lucide-react";
import { SpecGuide } from "@/components/modules/SpecGuide";

export default function WindwalkerPage() {
    return (
        <SpecGuide
            specName="Marche-Vent"
            specIcon={<Wind size={32} className="text-sky-400" />}
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
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/windwalker/overview-pve-dps",
                icyveins: "https://www.icy-veins.com/wow/windwalker-monk-pve-dps-guide",
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">Introduction</h2>
                    <p>
                        Le Marche-Vent est reconnu pour sa mécanique unique de <strong>Frappes combatives</strong> : ne jamais utiliser deux fois la même compétence d&apos;affilée pour maximiser les dégâts (Maîtrise).
                        Vous êtes un DPS mobile avec de forts dégâts de zone (AoE) via <strong>Coup tournoyant de la grue</strong>.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Rotation de Base (AoE et ST)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Ne répétez jamais une technique (sauf si nécessaire pour refresh un debuff urgent).</li>
                        <li>Maintenez <strong>Coup du voile noir</strong> et <strong>Paume du tigre</strong> pour gérer le Chi.</li>
                        <li>Utilisez <strong>Poings de fureur</strong> dès que possible (grosse AoE + canalisation).</li>
                        <li><strong>Coup de pied du soleil levant</strong> est votre plus gros coup monocible.</li>
                        <li>En AoE, spammez <strong>Coup tournoyant de la grue</strong> avec des marques de grue actives (appliquées par Paume du tigre / Coup du voile noir selon talents).</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mt-8">Phase de Burst</h3>
                    <p>
                        Votre burst repose souvent sur <strong>Xuen, le Tigre blanc</strong> et <strong>Tempête, Terre et Feu</strong>.
                        Activez vos images miroirs, invoquez Xuen, et enchaînez vos techniques les plus puissantes sans jamais faillir à votre Maîtrise.
                    </p>
                </div>
            }
        />
    );
}
