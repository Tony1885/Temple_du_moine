"use client";

import React from "react";
import { Heart } from "lucide-react";
import { SpecGuide } from "@/components/modules/SpecGuide";

export default function MistweaverPage() {
    return (
        <SpecGuide
            specName="Tisse-Brume"
            specIcon={<Heart size={32} className="text-teal-400" />}
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
            congruentBuilds={{
                raid: "B4QA////////////////////////////////AAQAAQKgIiIjIiSIiIgmIgmE+QgkmoRJBAAAAIpJJJFAKAAAA",
                mythicPlus: "B4QA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
            }}
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/mistweaver/overview-pve-healer",
                icyveins: "https://www.icy-veins.com/wow/mistweaver-monk-pve-healing-guide",
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">Introduction</h2>
                    <p>
                        Le Tisse-Brume est un soigneur polyvalent capable de soigner à distance (Caster) ou au corps à corps (Fistweaving).
                        Votre force réside dans vos <strong>Brumes de Rénovation</strong> qui sautent d&apos;allié en allié et votre capacité à burst heal avec <strong>Vivifier</strong> et <strong>Cocon de vie</strong>.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Styles de Jeu</h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                            <h4 className="font-bold text-teal-300 mb-2">Fistweaving (Melee)</h4>
                            <p className="text-sm">
                                Utilise <strong>Enseignements ancestraux</strong> pour convertir les dégâts en soins.
                                Vous êtes au contact, frappez avec <strong>Paume du tigre</strong>, <strong>Frappe du voile noir</strong> et <strong>Coupo d&apos;pied du soleil levant</strong>.
                                Très fort en Mythique+ et Raid pour le DPS passif.
                            </p>
                        </div>
                        <div className="p-4 rounded-xl border border-white/5 bg-white/5">
                            <h4 className="font-bold text-teal-300 mb-2">Castweaving (Distance)</h4>
                            <p className="text-sm">
                                Se concentre sur la gestion des HoTs (Brume apaisante, Brume enveloppante) et les canalisations.
                                Plus traditionnel, permet de rester à distance et d&apos;avoir une grosse réactivité sur les dégâts ciblés.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-8">Astuces Clés</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Utilisez <strong>Thé de mana</strong> dès que possible pour récupérer du mana (si talent pris).</li>
                        <li><strong>Cocon de vie</strong> est un CD défensif externe massif, n&apos;hésitez pas à l&apos;utiliser préventivement.</li>
                        <li>En Raid, synchronisez votre <strong>Regain</strong> (ou Sheilun) avec les gros dégâts de zone.</li>
                    </ul>
                </div>
            }
        />
    );
}
