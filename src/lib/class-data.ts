// ============================================================
// WoW Class Metadata - Colors, Icons, and Specs
// ============================================================

import { WowClass } from "./types";

export interface ClassInfo {
    name: WowClass;
    color: string;
    colorHex: string;
    specs: string[];
    icon: string;
}

export const CLASS_DATA: Record<WowClass, ClassInfo> = {
    "Death Knight": {
        name: "Death Knight",
        color: "text-[#C41E3A]",
        colorHex: "#C41E3A",
        specs: ["Blood", "Frost", "Unholy"],
        icon: "⚔️",
    },
    "Demon Hunter": {
        name: "Demon Hunter",
        color: "text-[#A330C9]",
        colorHex: "#A330C9",
        specs: ["Havoc", "Vengeance"],
        icon: "👁️",
    },
    Druid: {
        name: "Druid",
        color: "text-[#FF7C0A]",
        colorHex: "#FF7C0A",
        specs: ["Balance", "Feral", "Guardian", "Restoration"],
        icon: "🐻",
    },
    Evoker: {
        name: "Evoker",
        color: "text-[#33937F]",
        colorHex: "#33937F",
        specs: ["Devastation", "Preservation", "Augmentation"],
        icon: "🐉",
    },
    Hunter: {
        name: "Hunter",
        color: "text-[#AAD372]",
        colorHex: "#AAD372",
        specs: ["Beast Mastery", "Marksmanship", "Survival"],
        icon: "🏹",
    },
    Mage: {
        name: "Mage",
        color: "text-[#3FC7EB]",
        colorHex: "#3FC7EB",
        specs: ["Arcane", "Fire", "Frost"],
        icon: "✨",
    },
    Monk: {
        name: "Monk",
        color: "text-[#00FF98]",
        colorHex: "#00FF98",
        specs: ["Brewmaster", "Mistweaver", "Windwalker"],
        icon: "🥋",
    },
    Paladin: {
        name: "Paladin",
        color: "text-[#F48CBA]",
        colorHex: "#F48CBA",
        specs: ["Holy", "Protection", "Retribution"],
        icon: "⚜️",
    },
    Priest: {
        name: "Priest",
        color: "text-[#FFFFFF]",
        colorHex: "#FFFFFF",
        specs: ["Discipline", "Holy", "Shadow"],
        icon: "✝️",
    },
    Rogue: {
        name: "Rogue",
        color: "text-[#FFF468]",
        colorHex: "#FFF468",
        specs: ["Assassination", "Outlaw", "Subtlety"],
        icon: "🗡️",
    },
    Shaman: {
        name: "Shaman",
        color: "text-[#0070DD]",
        colorHex: "#0070DD",
        specs: ["Elemental", "Enhancement", "Restoration"],
        icon: "⚡",
    },
    Warlock: {
        name: "Warlock",
        color: "text-[#8788EE]",
        colorHex: "#8788EE",
        specs: ["Affliction", "Demonology", "Destruction"],
        icon: "🔥",
    },
    Warrior: {
        name: "Warrior",
        color: "text-[#C69B6D]",
        colorHex: "#C69B6D",
        specs: ["Arms", "Fury", "Protection"],
        icon: "🛡️",
    },
};
