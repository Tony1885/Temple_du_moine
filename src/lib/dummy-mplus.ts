// ============================================================
// WoW IA Analyzer - Dummy M+ Data for Testing
// ============================================================

export const DUMMY_MPLUS_REPORTS = [
    {
        code: "MOCK_REPORT_SIEGE_10",
        startTime: Date.now() - 3600000,
        title: "Siège de Boralus +10 (Timer Battu)",
        zone: { name: "Siège de Boralus" },
        keystoneLevel: 10,
        onTime: true,
        stats: {
            dps: 1250000,
            hps: 45000,
            interrupts: 12,
            avoidableDamageTaken: 2500000,
            deaths: 0
        }
    },
    {
        code: "MOCK_REPORT_DAWN_12",
        startTime: Date.now() - 86400000,
        title: "The Dawnbreaker +12 (Hors Délai)",
        zone: { name: "The Dawnbreaker" },
        keystoneLevel: 12,
        onTime: false,
        stats: {
            dps: 1100000,
            hps: 55000,
            interrupts: 4,
            avoidableDamageTaken: 8500000,
            deaths: 3
        }
    }
];

export const DUMMY_MPLUS_ANALYSIS = {
    performance: {
        playerName: "Moussman",
        playerClass: "Warrior",
        playerSpec: "Fury",
        role: "DPS",
        totalDamage: 1800000000,
        totalHealing: 15000000,
        dps: 1250000,
        hps: 12000,
        fightDuration: 1440,
        percentile: 85,
        avoidableDamageTaken: [
            {
                abilityName: "Onde de choc de l'Orc",
                hitCount: 2,
                totalDamage: 1200000,
                suggestion: "Éloigne-toi du cône frontal quand l'animation commence.",
                severity: "warning"
            }
        ],
        buffUptime: [
            { buffName: "Enrage", uptime: 92, expectedUptime: 95 },
            { buffName: "Avatar", uptime: 25, expectedUptime: 25 }
        ],
        cooldownUsage: [
            { cooldownName: "Recklessness", usageCount: 8, optimalCount: 9, efficiency: 88 }
        ],
        timeline: []
    },
    encounter: {
        bossName: "Donjon complet",
        difficulty: "Mythic+",
        keystoneLevel: 10,
        dungeonOrRaid: "Siège de Boralus",
        duration: 24, // minutes
        wipeOrKill: "Kill"
    },
    aiInsight: {
        summary: "Excellente performance globale, mais quelques lacunes critiques en utilitaire.",
        strengths: [
            "DPS très solide pour une +10",
            "Zéro mort sur l'ensemble du donjon",
            "Bonne gestion des CDs offensifs"
        ],
        improvements: [
            {
                area: "Interrupts",
                description: "Seulement 4 kicks sur les Arcanistes. En haut niveau, cela peut causer un wipe.",
                impact: "high",
                priority: 1
            },
            {
                area: "Dégâts évitables",
                description: "Tu as pris 2 ondes de choc qui auraient pu être évitées.",
                impact: "medium",
                priority: 2
            }
        ],
        actionPlan: [
            {
                title: "Focus Kicks",
                description: "Utilise une macro focus pour kicker les cibles prioritaires (Arcanistes).",
                priority: 1,
                category: "mechanics"
            }
        ],
        overallGrade: "A-",
        detailedAnalysis: "Tu as produit un DPS de 1.25M, ce qui est très bon. Cependant, tu as raté 4 kicks cruciaux sur les Arcanistes. En M+, mourir sur une mécanique de pack est souvent plus grave que de perdre 5% de DPS. Ton positionnement était globalement bon, mais reste vigilant sur les sorts frontaux."
    },
    metadata: {
        analyzedAt: new Date().toISOString(),
        logVersion: "10.2.7",
        eventsProcessed: 150000,
        anonymized: false
    }
};
