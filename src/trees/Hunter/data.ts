import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/hunter"),
);
const icons = requireAll(require.context("../../assets/icons/hunter"));

export const data: TalentData = {
  "Beast Mastery": {
    name: "Beast Mastery",
    background: backgrounds["beast-mastery"],
    icon: icons["ability_hunter_beasttaming"],
    talents: {
      "Improved Aspect of the Monkey": {
        name: "Improved Aspect of the Monkey", 
        pos: "a1", 
        icon: icons["ability_hunter_aspectofthemonkey"], 
        maxRank: 3, 
        reqPoints: 0,
        description: talentText``, 
      },
      "Improved Aspect of the Hawk": {
        name: "Improved Aspect of the Hawk", 
        pos: "a2", 
        icon: icons["spell_nature_ravenform"], 
        maxRank: 5, 
        reqPoints: 0,
        description: talentText``, 
      },
      "Endurance Training": {
        name: "Endurance Training", 
        pos: "a3", 
        icon: icons["spell_nature_reincarnation"], 
        maxRank: 2, 
        reqPoints: 0,
        description: talentText``, 
      },
      "Thick Hide": {
        name: "Thick Hide", 
        pos: "b1", 
        icon: icons["inv_misc_pelt_bear_03"], 
        maxRank: 3, 
        reqPoints: 5,
        description: talentText``, 
    },
      "Improved Mend Pet": {
        name: "Improved Mend Pet", 
        pos: "b2", 
        icon: icons["ability_hunter_mendpet"], 
        maxRank: 2, 
        reqPoints: 5,
        description: talentText``, 
      },
      "Aspect Mastery": {
        name: "Aspect Mastery", 
        pos: "b3", 
        icon: icons["ability_hunter_aspectmastery"], 
        maxRank: 2, 
        reqPoints: 5,
        description: talentText``, 
      },
      "Improved Revive Pet": {
        name: "Improved Revive Pet", 
        pos: "b4", 
        icon: icons["ability_hunter_beastsoothe"], 
        maxRank: 2, 
        reqPoints: 5,
        description: talentText``, 
      },
      "Intimidation": {
        name: "Intimidation", 
        pos: "c2", 
        icon: icons["ability_devour"], 
        maxRank: 1, 
        reqPoints: 10,
        description: talentText``, 
      },
      "Unleashed Fury": {
        name: "Unleashed Fury", 
        pos: "c3", 
        icon: icons["ability_bullrush"], 
        maxRank: 5, 
        reqPoints: 10,
        description: talentText``, 
      },
      "Bestial Swiftness": {
        name: "Bestial Swiftness", 
        pos: "c4", 
        icon: icons["ability_druid_dash"], 
        maxRank: 3, 
        reqPoints: 10,
        description: talentText``, 
      },
      "Survival Instincts": {
        name: "Survival Instincts", 
        pos: "d1", 
        icon: icons["survival_instincts"], 
        maxRank: 3, 
        reqPoints: 15,
        prereq: "Thick Hide", 
        arrows: [{ dir: "down", from: "b1", to: "d1" }], 
        description: talentText``, 
      },
      "Bestial Discipline": {
        name: "Bestial Discipline", 
        pos: "d2", 
        icon: icons["spell_nature_abolishmagic"], 
        maxRank: 2, 
        reqPoints: 15,
        description: talentText``, 
      },
      "Ferocity": {
        name: "Ferocity", 
        pos: "d3", 
        icon: icons["inv_misc_monsterclaw_04"], 
        maxRank: 5, 
        reqPoints: 15,
        description: talentText``, 
      },
      "Team Play": {
        name: "Team Play", 
        pos: "e1", 
        icon: icons["ability_hunter_beastwithin"], 
        maxRank: 2, 
        reqPoints: 20,
        description: talentText``, 
      },
      "Bestial Wrath": {
        name: "Bestial Wrath", 
        pos: "e2", 
        icon: icons["ability_druid_ferociousbite"], 
        maxRank: 1, 
        reqPoints: 20,
        description: talentText``, 
      },
      "Savage Flurry": {
        name: "Savage Flurry", 
        pos: "e4", 
        icon: icons["ability_druid_swipe"], 
        maxRank: 3, 
        reqPoints: 20,
        description: talentText``, },
      "Spirit Bond": {
        name: "Spirit Bond", 
        pos: "f1", 
        icon: icons["ability_hunter_separationanxiety"], 
        maxRank: 5, 
        reqPoints: 25, 
        prereq: "Team Play", 
        arrows: [{dir: "down", from: "e1", to: "f1" }], 
        description: talentText``, 
      },
      "Frenzy": {
        name: "Frenzy", 
        pos: "f3", 
        icon: icons["inv_misc_monsterclaw_03"], 
        maxRank: 5, 
        reqPoints: 25, 
        prereq: "Ferocity", 
        arrows: [{dir: "down", from: "d3", to: "f3" }], 
        description: talentText``, },
      "Kill Command": {
        name: "Kill Command", 
        pos: "g2", 
        icon: icons["ability_hunter_killcommand"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Bestial Wrath", 
        arrows: [{ dir: "down", from: "e2", to: "g2"}], 
        description: talentText``, 
      },
      "Terrifying Roar": {
        name: "Terrifying Roar", 
        pos: "g3", 
        icon: icons["stampede"], 
        maxRank: 1, 
        reqPoints: 30,
        description: talentText``, 
      },
    },
  },
  Marksmanship: {
    name: "Marksmanship",
    background: backgrounds["marksmanship"],
    icon: icons["ability_marksmanship"],
    talents: {
      "Improved Hunter's Mark": {name: "Improved Hunter's Mark", pos: "a1", icon: icons["ability_hunter_snipershot"], maxRank: 2, reqPoints: 0,description: talentText``, },
      "Improved Arcane Shot": {name: "Improved Arcane Shot", pos: "b2", icon: icons["ability_impalingbolt"], maxRank: 3, reqPoints: 5,description: talentText``, },
      "Efficiency": {name: "Efficiency", pos: "a3", icon: icons["spell_frost_wizardmark"], maxRank: 5, reqPoints: 0,description: talentText``, },
      "Stalking": {name: "Stalking", pos: "b1", icon: icons["ability_druid_predatoryinstincts"], maxRank: 2, reqPoints: 5, prereq: "Improved Hunter's Mark", arrows: [{dir: "down", from: "a1", to: "b1"}], description: talentText``, },
      "Improved Concussive Shot": {name: "Improved Concussive Shot", pos: "c2", icon: icons["spell_frost_stun"], maxRank: 3, reqPoints: 10,description: talentText``, },
      "Lethal Shots": {name: "Lethal Shots", pos: "b3", icon: icons["ability_searingarrow"], maxRank: 5, reqPoints: 5,description: talentText``, },
      "Aimed Shot": {name: "Aimed Shot", pos: "c1", icon: icons["inv_spear_07"], maxRank: 1, reqPoints: 10,description: talentText``, },
      "Improved Stings": {name: "Improved Stings", pos: "a2", icon: icons["ability_hunter_quickshot"], maxRank: 3, reqPoints: 0,description: talentText``, },
      "Mortal Shots": {name: "Mortal Shots", pos: "c3", icon: icons["ability_piercedamage"], maxRank: 5, reqPoints: 10, prereq: "Lethal Shots", arrows: [{ dir: "down", from: "b3", to: "c3" }], description: talentText``, },
      "Hawk Eye": {name: "Hawk Eye", pos: "c4", icon: icons["ability_townwatch"], maxRank: 2, reqPoints: 10,description: talentText``, },
      "Crossbow Specialization": {name: "Crossbow Specialization", pos: "d2", icon: icons["inv_weapon_crossbow_01"], maxRank: 5, reqPoints: 15,description: talentText``, },
      "Bow Specialization": {name: "Bow Specialization", pos: "d3", icon: icons["inv_weapon_bow_12"], maxRank: 5, reqPoints: 15,description: talentText``, },
      "Gun Specialization": {name: "Gun Specialization", pos: "d4", icon: icons["inv_musket_03"], maxRank: 5, reqPoints: 15,description: talentText``, },
      "Snapshot": {name: "Snapshot", pos: "e1", icon: icons["ability_marksmanship"], maxRank: 5, reqPoints: 20, prereq: "Aimed Shot", arrows: [{dir: "down", from: "c1", to: "e1" }], description: talentText``, },
      "Barrage": {name: "Barrage", pos: "e2", icon: icons["ability_upgrademoonglaive"], maxRank: 3, reqPoints: 20,description: talentText``, },
      "Scatter Shot": {name: "Scatter Shot", pos: "e3", icon: icons["ability_golemstormbolt"], maxRank: 1, reqPoints: 20,description: talentText``, },
      "Deadeye": {name: "Deadeye", pos: "e4", icon: icons["ability_warrior_revenge"], maxRank: 1, reqPoints: 20,description: talentText``, },
      "Reconnaissance": {name: "Reconnaissance", pos: "f1", icon: icons["ability_hunter_pathfinding"], maxRank: 5, reqPoints: 25,description: talentText``, },
      "Ranged Weapon Specialization": {name: "Ranged Weapon Specialization", pos: "f3", icon: icons["inv_weapon_rifle_06"], maxRank: 5, reqPoints: 25,description: talentText``, },
      "Trueshot Aura": {name: "Trueshot Aura", pos: "g2", icon: icons["ability_trueshot"], maxRank: 1, reqPoints: 30, prereq: "Barrage", arrows: [{ dir: "down", from: "e2", to: "g2" }], description: talentText``, },
    },
  },
  Survival: {
    name: "Survival",
    background: backgrounds["survival"],
    icon: icons["ability_hunter_swiftstrike"],
    talents: {
      "Deflection": {name: "Deflection", pos: "a1", icon: icons["ability_parry"], maxRank: 4, reqPoints: 0,description: talentText``, },
      "Deterrence": {name: "Deterrence", pos: "a2", icon: icons["ability_whirlwind"], maxRank: 1, reqPoints: 0, prereq: "Deflection", arrows: [{ dir: "right", from: "a1", to: "a2"}], description: talentText``, },
      "Brutality": {name: "Brutality", pos: "a3", icon: icons["ability_criticalstrike"], maxRank: 5, reqPoints: 0,description: talentText``, },
      "Clever Traps": {name: "Clever Traps", pos: "b1", icon: icons["spell_nature_timestop"], maxRank: 2, reqPoints: 5,description: talentText``, },
      "Improved Tracking": {name: "Improved Tracking", pos: "b2", icon: icons["ability_tracking"], maxRank: 5, reqPoints: 5,description: talentText``, },
      "Improved Wing Clip": {name: "Improved Wing Clip", pos: "b3", icon: icons["ability_rogue_trip"], maxRank: 3, reqPoints: 5,description: talentText``, },
      "Improved Raptor Strike": {name: "Improved Raptor Strike", pos: "b4", icon: icons["ability_meleedamage"], maxRank: 5, reqPoints: 5, prereq: "Brutality", arrows: [{ dir: "right-down", from: "a3", to: "a4"}, {dir: "right-down-down", from: "a4", to: "b4" }], description: talentText``, },
      "Dual Wield Specialization": {name: "Dual Wield Specialization", pos: "c1", icon: icons["ability_dualwield"], maxRank: 4, reqPoints: 10, prereq: "Melee Specialization", arrows: [{ dir: "left", from: "c1", to: "c2"}], description: talentText``, },
      "Melee Specialization": {name: "Melee Specialization", pos: "c2", icon: icons["inv_axe_02"], maxRank: 1, reqPoints: 10,description: talentText``, },
      "Two-Handed Weapon Specialization": {name: "Two-Handed Weapon Specialization", pos: "c3", icon: icons["inv_weapon_halberd_03"], maxRank: 4, reqPoints: 10, prereq: "Melee Specialization", arrows: [{ dir: "right", from: "c2", to: "c3"}], description: talentText``, },
      "Survivalist": {name: "Survivalist", pos: "c4", icon: icons["spell_shadow_twilight"], maxRank: 5, reqPoints: 10,description: talentText``, },
      "Trapper": {name: "Trapper", pos: "d1", icon: icons["ability_ensnare"], maxRank: 2, reqPoints: 15,description: talentText``, },
      "Killer Instinct": {name: "Killer Instinct", pos: "d3", icon: icons["spell_holy_blessingofstamina"], maxRank: 3, reqPoints: 15,description: talentText``, },
      "Thrill of the Hunt": {name: "Thrill of the Hunt", pos: "d4", icon: icons["ability_hunter_thrillofthehunt"], maxRank: 3, reqPoints: 15,description: talentText``, },
      "Deep Freeze": {name: "Deep Freeze", pos: "e1", icon: icons["spell_frost_frozendecay"], maxRank: 3, reqPoints: 20,description: talentText``, },
      "Savage Blow": {name: "Savage Blow", pos: "e2", icon: icons["amulet_of_wild"], maxRank: 1, reqPoints: 20, prereq: "Melee Specialization", arrows: [{ dir: "down", from: "c2", to: "e2" }], description: talentText``, },
      "Wyvern Sting": {name: "Wyvern Sting", pos: "e3", icon: icons["inv_spear_02"], maxRank: 1, reqPoints: 20, prereq: "Killer Instinct", arrows: [{ dir: "down", from: "d3", to: "e3"}], description: talentText``, },
      "Find Weakness": {name: "Find Weakness", pos: "f2", icon: icons["ability_rogue_findweakness"], maxRank: 5, reqPoints: 25,description: talentText``, },
      "Lightning Reflexes": {name: "Lightning Reflexes", pos: "f3", icon: icons["spell_nature_invisibilty"], maxRank: 5, reqPoints: 25,description: talentText``, },
      "Whirling Axe": {name: "Whirling Axe", pos: "g2", icon: icons["inv_axe_08"], maxRank: 1, reqPoints: 30,description: talentText``, },
    },
  },
};