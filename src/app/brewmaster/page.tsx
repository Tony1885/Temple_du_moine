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
            builds={[
                {
                    name: "Build Survie Ultime",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "Raid",
                    playerRef: "Equinox"
                },
                {
                    name: "Build Dégâts M+",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "M+",
                    playerRef: "Andybrew"
                },
                {
                    name: "Build Hybride Prepatch",
                    code: "BwQA////////////////////////////////AAQAAQKJiIhIyiEiISIJiIJhvkIJJiESSSSKSSBAAAAA",
                    type: "Autre",
                    playerRef: "Trill"
                }

            ]}
            rotation={{
                notes: "Attention, depuis le prépatch 12.0, le Fracas génère plus d'aggro initial mais nécessite une gestion plus fine du Chi.",
                opener: [
                    "Pré-pot : Potion de puissance élémentaire.",
                    "<strong>Invocation de Niuzao</strong> 2 sec avant le pull.",
                    "<strong>Fracas de tonneaux</strong> (Keg Smash) au contact.",
                    "<strong>Souffle de feu</strong> immédiat pour le buff de réduction dégâts.",
                    "<strong>Armes de l&apos;Ordre</strong> (Kyrian) pour le burst aggro.",
                    "Spam <strong>Coup tournoyant de la grue</strong> pour monter les stack de Breuvage."
                ],
                priority: [
                    "<strong>Fracas de tonneaux</strong> dès que dispo. C'est la VIE.",
                    "<strong>Breuvage purificateur</strong> si Barre rouge ou > 60% stagger.",
                    "<strong>Frappe du voile noir</strong> pour le buff d'esquive.",
                    "<strong>Souffle de feu</strong> pour refresh le DoT.",
                    "<strong>Explosion de Chi</strong> (si talent) à 3+ Chi.",
                    "<strong>Paume du tigre</strong> pour vider l'énergie et réduire le CD des breuvages."
                ]
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
                        Avec l'arrivée imminente de la nouvelle extension, le <strong>Maître Brasseur</strong> a reçu quelques ajustements majeurs sur son arbre de talents.
                        Le <strong>Report (Stagger)</strong> est plus efficace contre les dégâts magiques grâce au nouveau talent capstone <em>&quot;Harmonie Céleste&quot;</em>.
                    </p>
                    <p>
                        Les meilleurs joueurs comme <strong>Andybrew</strong> et <strong>Equinox</strong> privilégient désormais un gameplay beaucoup plus agressif, utilisant les procs de <em>Cadeau du Buffle</em> offensivement.
                    </p>

                    <h3 className="text-xl font-bold text-white mt-8">Changements Clés du Prepatch</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Le <strong>Tier Set S1-2026</strong> favorise l'utilisation de <em>Coup tournoyant de la grue</em> même en monocible.</li>
                        <li><em>Invocation de Niuzao</em> scal sur votre Versatilité dynamique.</li>
                        <li>Le build &quot;Charred Passions&quot; est de retour en force pour le M+.</li>
                    </ul>
                </div>
            }
        />
    );
}
