"use client";

import React from "react";
import { Heart } from "lucide-react";
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
            congruentBuilds={{
                raid: "B4QA////////////////////////////////AAQAAQKgIiIjIiSIiIgmIgmE+QgkmoRJBAAAAIpJJJFAKAAAA",
                mythicPlus: "B4QA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
            }}
            rotation={{
                opener: [
                    "Pré-cast : Brume de rénovation (x2) sur les tanks ou soigneurs.",
                    "Activez <strong>Invocation de Chi-Ji, la Grue rouge</strong> juste avant le pull.",
                    "Appliquez <strong>Palme du tigre</strong> (Teachings of the Monastery).",
                    "Spammez <strong>Frappe du voile noir</strong> pour le <em>Fistweaving</em>."
                ],
                priority: [
                    "Maintenez <strong>Brume enveloppante</strong> sur les tanks en cas de gros dégâts.",
                    "Utilisez <strong>Vivifier</strong> en cas d&apos;urgence monocible.",
                    "Fistweaving : <strong>Palme du tigre</strong> (x3) -> <strong>Frappe du voile noir</strong>.",
                    "Coup de pied du soleil levant pour prolonger les brumes.",
                    "Utilisez <strong>Cocon de vie</strong> préventivement sur des cibles fragiles.",
                    "<strong>Regain</strong> ou <strong>Sheilun</strong> en cas de burst dégâts raid."
                ]
            }}
            topPlayers={{
                period: "Saison 1 - Fév 2026",
                players: [
                    { name: "Megaset", score: "3920", region: "NA" },
                    { name: "Swuiz", score: "3890", region: "EU" },
                    { name: "Drainer", score: "3740", region: "EU" },
                    { name: "Yummy", score: "3860", region: "NA" },
                    { name: "Zmok", score: "3810", region: "EU" }
                ]
            }}
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/mistweaver/overview-pve-healer",
                icyveins: "https://www.icy-veins.com/wow/mistweaver-monk-pve-healing-guide",
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">État du Tisse-Brume (Février 2026)</h2>
                    <p>
                        Le Tisse-Brume est dans une position unique en 2026. La distinction entre <strong>Fistweaving</strong> (Corps à corps) et <strong>Castweaving</strong> (Distance) s&apos;est estompée avec les derniers patchs, favorisant un style hybride très dynamique.
                        Vos <em>Brumes de rénovation</em> sont le moteur de votre gameplay. Plus vous en avez actives, plus votre Vivifier est puissant (Cleave Healing).
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

                    <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 mt-6">
                        <h4 className="font-bold text-teal-400 mb-2 flex items-center gap-2">
                            <Heart size={18} />
                            Le Conseil du Temple
                        </h4>
                        <p className="text-sm">
                            Le CD le plus sous-estimé est le <strong>Cocon de vie</strong>. Ne le gardez pas pour &quot;quand c&apos;est trop tard&quot;. Utilisez-le dès qu&apos;un joueur prend un DoT dangereux ou va subir une mécanique inévitable.
                            En M+, le <strong>Balayement de jambe</strong> et l&apos;<strong>Anneau de paix</strong> sauvent plus de vies que vos soins directs.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
