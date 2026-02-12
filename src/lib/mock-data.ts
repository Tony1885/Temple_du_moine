// ============================================================
// Mock Data for Demo & Development
// ============================================================

import { AnalysisResult } from "./types";

export function generateMockAnalysis(): AnalysisResult {
    return {
        performance: {
            playerName: "Shadowmeld",
            playerClass: "Mage",
            playerSpec: "Fire",
            role: "DPS",
            totalDamage: 487_235_120,
            totalHealing: 2_150_300,
            dps: 98_423,
            hps: 435,
            fightDuration: 312,
            percentile: 87,
            avoidableDamageTaken: [
                {
                    abilityName: "Éruption d'ombre",
                    hitCount: 3,
                    totalDamage: 1_250_000,
                    suggestion:
                        "Déplacez-vous immédiatement quand le débuff apparaît. Utilisez Transposition ou Bouclier de givre pour réduire les dégâts.",
                    severity: "critical",
                },
                {
                    abilityName: "Onde de choc",
                    hitCount: 1,
                    totalDamage: 450_000,
                    suggestion:
                        "Cette mécanique nécessite un spread rapide. Anticipez le timer pour ne pas être pris au dépourvu.",
                    severity: "warning",
                },
                {
                    abilityName: "Souffle infernal",
                    hitCount: 2,
                    totalDamage: 320_000,
                    suggestion:
                        "Restez en arrière du boss pendant cette phase. Mineur mais évitable.",
                    severity: "minor",
                },
            ],
            buffUptime: [
                {
                    buffName: "Potion de puissance",
                    uptime: 92.3,
                    expectedUptime: 95,
                },
                {
                    buffName: "Combustion",
                    uptime: 88.7,
                    expectedUptime: 90,
                },
                {
                    buffName: "Présence ardente",
                    uptime: 78.4,
                    expectedUptime: 85,
                },
                {
                    buffName: "Enchantement arme",
                    uptime: 100,
                    expectedUptime: 100,
                },
                {
                    buffName: "Flask éternel",
                    uptime: 100,
                    expectedUptime: 100,
                },
            ],
            cooldownUsage: [
                {
                    cooldownName: "Combustion",
                    usageCount: 4,
                    optimalCount: 5,
                    efficiency: 80,
                },
                {
                    cooldownName: "Pouvoir arcanique",
                    usageCount: 3,
                    optimalCount: 3,
                    efficiency: 100,
                },
                {
                    cooldownName: "Transposition",
                    usageCount: 2,
                    optimalCount: 4,
                    efficiency: 50,
                },
            ],
            timeline: generateTimeline(312),
        },
        aiInsight: {
            summary:
                "Ton cycle d'ouverture était quasi parfait avec une bonne séquence Combustion + Présence ardente. Cependant, tu as perdu environ 15% d'uptime DPS sur le boss suite à une mauvaise gestion du débuff 'Éruption d'ombre' en phase 2. Ta rotation hors Combustion est solide mais pourrait bénéficier d'un meilleur pooling de charges de Boule de feu avant chaque fenêtre de burst.",
            strengths: [
                "Excellente gestion de l'opener avec Combustion parfaitement timée",
                "Temps de cast très faible (< 2% dead GCD)",
                "Bonne utilisation des potions et consommables",
                "Placement DPS au-dessus du 85e percentile",
            ],
            improvements: [
                {
                    area: "Gestion des mécaniques",
                    description:
                        "3 hits évitables par Éruption d'ombre ont causé 1.2M de dégâts et forcé des mouvements non planifiés",
                    impact: "high",
                    priority: 1,
                },
                {
                    area: "Utilisation des CDs",
                    description:
                        "Combustion n'a été utilisée que 4 fois sur 5 utilisations optimales. La dernière fenêtre (sub-20%) a été manquée.",
                    impact: "high",
                    priority: 2,
                },
                {
                    area: "Uptime de buffs",
                    description:
                        "Présence ardente à 78.4% d'uptime au lieu de 85% optimal. Re-appliquez immédiatement après un mouvement.",
                    impact: "medium",
                    priority: 3,
                },
            ],
            actionPlan: [
                {
                    title: "Maîtriser le timing d'Éruption d'ombre",
                    description:
                        "Étudiez le timer de cette mécanique (toutes les 45s). Pré-positionnez-vous 3s avant pour éviter tout mouvement de panique. Utilisez un WeakAura dédié.",
                    priority: 1,
                    category: "mechanics",
                },
                {
                    title: "Optimiser les fenêtres de Combustion",
                    description:
                        "Planifiez vos 5 Combustions : Pull, à 4:00, à 6:30, à 8:15 (Bloodlust), et sub-20%. Gardez toujours 3 charges de Boule de feu avant d'activer.",
                    priority: 2,
                    category: "cooldowns",
                },
                {
                    title: "Améliorer l'uptime de Présence ardente",
                    description:
                        "Créez un rappel visuel pour re-buff immédiatement après un mouvement forcé. Visez 85%+ d'uptime pour gagner ~5% de DPS global.",
                    priority: 3,
                    category: "rotation",
                },
            ],
            overallGrade: "A",
            detailedAnalysis:
                "Analyse complète de 312 secondes de combat. 487M de dégâts totaux infligés. Performance globale solide se situant dans le 87e percentile pour un Mage Feu sur cette rencontre en difficulté Héroïque. Les axes d'amélioration identifiés pourraient augmenter votre DPS d'environ 12-15% si correctement appliqués.",
        },
        encounter: {
            bossName: "Reine Ansurek",
            difficulty: "Heroic",
            dungeonOrRaid: "Palais de Nerub-ar",
            duration: 312,
            wipeOrKill: "Kill",
        },
        metadata: {
            analyzedAt: new Date().toISOString(),
            logVersion: "11.0.7",
            eventsProcessed: 145_872,
            anonymized: false,
        },
    };
}

function generateTimeline(duration: number) {
    const timeline = [];
    const baselineDps = 95000;
    const burstWindows = [
        { start: 0, end: 15 },
        { start: 120, end: 135 },
        { start: 195, end: 210 },
        { start: 250, end: 265 },
    ];

    for (let t = 0; t <= duration; t += 3) {
        let dps = baselineDps + (Math.random() - 0.5) * 15000;

        // Burst windows
        for (const w of burstWindows) {
            if (t >= w.start && t <= w.end) {
                dps *= 1.8 + Math.random() * 0.4;
            }
        }

        // Mechanic dips
        if ((t >= 80 && t <= 85) || (t >= 175 && t <= 180)) {
            dps *= 0.3 + Math.random() * 0.2;
        }

        timeline.push({
            timestamp: t,
            dps: Math.round(dps),
        });
    }

    return timeline;
}
