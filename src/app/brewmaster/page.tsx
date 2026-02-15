"use client";

import React from "react";
import { Anchor } from "lucide-react";
import { SpecGuide } from "@/components/modules/SpecGuide";

export default function BrewmasterPage() {
    return (
        <SpecGuide
            specName="Maître Brasseur"
            specIcon={<Anchor size={32} className="text-monk-500" />}
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
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/brewmaster/overview-pve-tank",
                icyveins: "https://www.icy-veins.com/wow/brewmaster-monk-pve-tank-guide",
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">Introduction</h2>
                    <p>
                        Le Maître Brasseur est un tank unique qui ne bloque pas les coups, mais les <strong>reporte</strong>.
                        Une partie des dégâts subis est étalée sur 10 secondes (Mécanique de Report / Stagger).
                        Votre but est de gérer ce Report avec vos Breuvages Purificateurs tout en maintenant vos capacités défensives.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Rotation de Base</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Maintenez <strong>Fracas de tonneaux</strong> au cooldown (génère de l'aggro et réduit le CD des breuvages).</li>
                        <li>Utilisez <strong>Souffle de feu</strong> pour appliquer le debuff sur les ennemis.</li>
                        <li>Consommez vos charges de <strong>Breuvage purificateur</strong> quand votre Report est Rouge ou Jaune élevé.</li>
                        <li>Ne laissez jamais votre énergie caper à 100%, dépensez-la avec <strong>Paume du tigre</strong> (si Talent) ou <strong>Frappe du voile noir</strong>.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mt-8">Cooldowns Défensifs</h3>
                    <p>
                        <strong>Boisson fortifiante</strong> est votre CD majeur pour la survie (Santé + Réduction dégâts). A utiliser proactivement sur les grosses claques (Tank Busters).
                        <br />
                        <strong>Méditation Zen</strong> peut absorber une quantité massive de dégâts magiques ou une attaque physique si vous ne bougez pas/tapez pas.
                    </p>
                </div>
            }
        />
    );
}
