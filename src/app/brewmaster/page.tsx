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
                "Coup Critique",
                "Polyvalence",
                "Maîtrise",
                "Hâte",
            ]}
            consumables={{
                weapon: "Dévotion sophique / Rune hurlante",
                phial: "Phiole de polyvalence tiède",
                food: "Gâteau de la chance déviant (Crit/Vers)",
                potion: "Potion de puissance élémentaire",
            }}
            congruentBuilds={{
                raid: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                mythicPlus: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
            }}
            rotation={{
                opener: [
                    "Pré-pot : Potion de puissance élémentaire.",
                    "Utilisez <strong>Fracas de tonneaux</strong> à l&apos;engagement pour générer de l&apos;aggro instantanée.",
                    "Activez <strong>Invocation de Niuzao, le Buffle noir</strong>.",
                    "Lancez <strong>Armes de l&apos;ordre</strong> pour booster votre Maîtrise.",
                    "Utilisez <strong>Souffle de feu</strong> pour appliquer le DoT."
                ],
                priority: [
                    "Maintenez <strong>Fracas de tonneaux</strong> au cooldown (Génère 3 Chi / Réduit CD Breuvages).",
                    "<strong>Frappe du voile noir</strong> si vous avez besoin de dégâts ou pour activer <em>Enseignements du monastère</em>.",
                    "<strong>Souffle de feu</strong> si le debuff va expirer.",
                    "<strong>Paume du tigre</strong> pour ne pas caper l&apos;énergie (au-dessus de 70%).",
                    "<strong>Coup tournoyant de la grue</strong> en multi-cibles (3+ ennemis).",
                    "<strong>Breuvage purificateur</strong> si le Report (Stagger) est rouge ou jaune élevé.",
                    "<strong>Breuvage céleste</strong> pour absorber une grosse frappe (Tank Buster)."
                ]
            }}
            topPlayers={{
                period: "Saison 1 - Fév 2026",
                players: [
                    { name: "Equinox", score: "3850", region: "NA" },
                    { name: "Trill", score: "3820", region: "NA" },
                    { name: "Andybrew", score: "3795", region: "NA" },
                    { name: "Kastel", score: "3750", region: "EU" },
                    { name: "Onez", score: "3710", region: "KR" }
                ]
            }}
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/brewmaster/overview-pve-tank",
                icyveins: "https://www.icy-veins.com/wow/brewmaster-monk-pve-tank-guide",
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">État du Maître Brasseur (Février 2026)</h2>
                    <p>
                        En ce début d&apos;année 2026, le Maître Brasseur reste un <strong>monstre de mitigation active</strong>.
                        Contrairement aux autres tanks qui comptent sur l&apos;armure ou le blocage, vous lissez les dégâts via le <strong>Report (Stagger)</strong>.
                        Les changements récents (Patch 11.x) ont renforcé la synergie entre <em>Armes de l&apos;Ordre</em> et vos capacités défensives.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Pourquoi jouer Brewmaster ?</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Lissage de Dégâts inégalé :</strong> Impossible de se faire &quot;One-Shot&quot; grâce au Report.</li>
                        <li><strong>Mobilité :</strong> Roulade, Transcendance et Torpille de Chi vous permettent de kited n&apos;importe quoi.</li>
                        <li><strong>Dégâts :</strong> Toujours l&apos;un des tanks avec le plus gros DPS en AoE grâce au Combo Fracas + Souffle + Grue.</li>
                    </ul>

                    <div className="p-4 rounded-xl bg-monk-500/10 border border-monk-500/20 mt-6">
                        <h4 className="font-bold text-monk-400 mb-2 flex items-center gap-2">
                            <Shield size={18} />
                            Le Conseil du Temple
                        </h4>
                        <p className="text-sm">
                            Ne paniquez pas si votre barre de vie descend. Regardez votre barre de Report. Si elle est rouge, purifiez. Sinon, faites confiance à vos soigneurs et à vos orbes de soins passifs.
                            Le Maître Brasseur est un tank de rythme. Trouvez votre flow entre attaques et boissons.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
