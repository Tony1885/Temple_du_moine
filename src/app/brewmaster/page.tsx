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
            bis={[
                { slot: "Tête", item: "Capuche de l'Esprit Céleste", source: "Raid: The Great Vault" },
                { slot: "Cou", item: "Amulette de la Flamme Éternelle", source: "Donjon: Halls of Valor" },
                { slot: "Épaules", item: "Espauliers du Tigre Blanc", source: "Raid: Boss 3" },
                { slot: "Torse", item: "Harnois du Maître Brasseur", source: "Raid: Boss 7" },
                { slot: "Mains", item: "Poignes de Fer", source: "M+: Mists of Tirna Scithe" },
                { slot: "Jambes", item: "Jambiêres de la Grue Rouge", source: "Raid: Boss 5" },
                { slot: "Bijou 1", item: "Pierre d'Alchimie Céleste", source: "Craft" },
                { slot: "Bijou 2", item: "Totem de Vaudou", source: "Donjon: De Other Side" },
            ]}
            builds={[
                {
                    name: "Build Survie Ultime (Raid)",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "Raid",
                    playerRef: "Equinox"
                },
                {
                    name: "Build Dégâts M+ (Charred Passions)",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "M+",
                    playerRef: "Andybrew"
                },
                {
                    name: "Build Hybride (PvP/Solo)",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "Autre",
                    playerRef: "Trill"
                }

            ]}
            rotation={{
                notes: "Attention, depuis le prépatch 12.0, le Fracas génère plus d'aggro initial mais nécessite une gestion plus fine du Chi.",
                st: {
                    opener: [
                        "Pré-pot : Potion de puissance élémentaire.",
                        "<strong>Invocation de Niuzao</strong> 2 sec avant le pull.",
                        "<strong>Fracas de tonneaux</strong> (Keg Smash) au contact.",
                        "<strong>Souffle de feu</strong> immédiat pour le buff de réduction dégâts.",
                        "<strong>Armes de l&apos;Ordre</strong> (Kyrian) pour le burst aggro.",
                        "<strong>Paume du tigre</strong> pour dump l'excès d'énergie."
                    ],
                    priority: [
                        "<strong>Fracas de tonneaux</strong> dès que dispo (Génère Chi & Aggro).",
                        "<strong>Breuvage purificateur</strong> si Barre rouge ou > 60% stagger.",
                        "<strong>Frappe du voile noir</strong> pour le buff d&apos;esquive.",
                        "<strong>Souffle de feu</strong> pour refresh le DoT.",
                        "<strong>Paume du tigre</strong> pour vider l&apos;énergie et réduire le CD des breuvages (via talent)."
                    ]
                },
                aoe: {
                    opener: [
                        "Pré-pot : Potion de puissance élémentaire.",
                        "<strong>Invocation de Niuzao</strong>.",
                        "<strong>Fracas de tonneaux</strong> sur le groupe.",
                        "<strong>Souffle de feu</strong> pour appliquer le DoT sur tout le monde.",
                        "<strong>Vent impétueux de jade</strong> si talent.",
                        "Spam <strong>Coup tournoyant de la grue</strong>."
                    ],
                    priority: [
                        "<strong>Fracas de tonneaux</strong> (Reset CD via Hâte).",
                        "<strong>Coup tournoyant de la grue</strong> dès que vous avez 3+ stacks de Mark.",
                        "<strong>Souffle de feu</strong> en cooldown.",
                        "<strong>Explosion de Chi</strong> (si talent) à 3+ Chi.",
                        "<strong>Breuvage céleste</strong> pour absorber les grosses claques."
                    ]
                }
            }}
            topPlayers={{
                period: "Prepatch 12.0 - Fév 2026",
                players: [
                    { name: "Equinox", score: "4150", region: "NA", realm: "Tichondrius" },
                    { name: "Andybrew", score: "4125", region: "NA", realm: "Illidan" },
                    { name: "Trill", score: "4080", region: "NA", realm: "Illidan" },
                    { name: "Kastel", score: "3990", region: "EU", realm: "Hyjal" },
                    { name: "Onez", score: "3950", region: "KR", realm: "Azshara" }
                ]
            }}
            externalLinks={{
                wowhead: "https://www.wowhead.com/guide/classes/monk/brewmaster/overview-pve-tank",
                lorrgs: "https://lorrgs.io/spec_ranking/monk/brewmaster"
            }}
            content={
                <div className="space-y-6 text-slate-300">
                    <h2 className="text-2xl font-bold text-white">État du Maître Brasseur (Février 2026 - Prepatch)</h2>
                    <p>
                        Avec l&apos;arrivée imminente de la nouvelle extension, le <strong>Maître Brasseur</strong> a reçu quelques ajustements majeurs sur son arbre de talents.
                        Le <strong>Report (Stagger)</strong> est plus efficace contre les dégâts magiques grâce au nouveau talent capstone <em>&quot;Harmonie Céleste&quot;</em>.
                    </p>
                    <p>
                        Les meilleurs joueurs comme <strong>Andybrew</strong> et <strong>Equinox</strong> privilégient désormais un gameplay beaucoup plus agressif, utilisant les procs de <em>Cadeau du Buffle</em> offensivement.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Changements Clés du Prepatch</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Le <strong>Tier Set S1-2026</strong> favorise l&apos;utilisation de <em>Coup tournoyant de la grue</em> même en monocible.</li>
                        <li><em>Invocation de Niuzao</em> scal sur votre Versatilité dynamique.</li>
                        <li>Le build &quot;Charred Passions&quot; est de retour en force pour le M+.</li>
                    </ul>
                </div>
            }
        />
    );
}
