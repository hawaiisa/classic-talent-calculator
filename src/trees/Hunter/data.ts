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
        description: talentText`Increases the dodge and melee crit bonuses of Aspect of the Monkey by ${[
          1,
          2,
          3,
        ]}%.`, 
      },
      "Improved Aspect of the Hawk": {
        name: "Improved Aspect of the Hawk", 
        pos: "a2", 
        icon: icons["spell_nature_ravenform"], 
        maxRank: 5, 
        reqPoints: 0,
        description: talentText`While Aspect of the Hawk is active, gives you a ${[
          10,
          20,
          30,
          40,
          50,
        ]}% chance of increasing ranged attack speed by 30% for 8 seconds after dealing a critical strike with a ranged attack.`, 
      },
      "Endurance Training": {
        name: "Endurance Training", 
        pos: "a3", 
        icon: icons["spell_nature_reincarnation"], 
        maxRank: 2, 
        reqPoints: 0,
        description: talentText`Increases the Health of your pets by ${[
          10,
          20,
        ]}%.`, 
      },
      "Thick Hide": {
        name: "Thick Hide", 
        pos: "b1", 
        icon: icons["inv_misc_pelt_bear_03"], 
        maxRank: 3, 
        reqPoints: 5,
        description: talentText`Increases the Armor rating of your pets by ${[
          15,
          30,
          45,
        ]}%.`, 
    },
      "Improved Mend Pet": {
        name: "Improved Mend Pet", 
        pos: "b2", 
        icon: icons["ability_hunter_mendpet"], 
        maxRank: 2, 
        reqPoints: 5,
        description: talentText`Gives the Mend Pet spell a ${[
          15,
          30,
        ]}% chance of restoring 50 Focus and removing 1 Curse, Disease, Magic, Poison, or Fear effect from the pet each tick.`, 
      },
      "Aspect Mastery": {
        name: "Aspect Mastery", 
        pos: "b3", 
        icon: icons["ability_hunter_aspectmastery"], 
        maxRank: 2, 
        reqPoints: 5,
        description: talentText`Increases the effectiveness of your Aspect of the Beast, Cheetah, Pack, and Wild by ${[
          25,
          50,
        ]}% and reduces the Mana cost of all your Aspects by ${[
          50,
          100,
        ]}%.`, 
      },
      "Improved Revive Pet": {
        name: "Improved Revive Pet", 
        pos: "b4", 
        icon: icons["ability_hunter_beastsoothe"], 
        maxRank: 2, 
        reqPoints: 5,
        description: talentText`Revive Pets casting time is reduced by ${[
          3,
          6,
        ]} sec, Mana cost is reduces by ${[
          50,
          100,
        ]}% and increases the health your pet returns with by an additional ${[
          15,
          30,
        ]}%.`, 
      },
      "Intimidation": {
        name: "Intimidation", 
        pos: "c2", 
        icon: icons["ability_devour"], 
        maxRank: 1, 
        reqPoints: 10,
        description: talentText`Command your pet to intimidate the target on the next successful melee attack, causing a high amount of threat and stunning the target for 4 seconds.`, 
      },
      "Unleashed Fury": {
        name: "Unleashed Fury", 
        pos: "c3", 
        icon: icons["ability_bullrush"], 
        maxRank: 5, 
        reqPoints: 10,
        description: talentText`Increase the damage done by your pets by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Bestial Swiftness": {
        name: "Bestial Swiftness", 
        pos: "c4", 
        icon: icons["ability_druid_dash"], 
        maxRank: 3, 
        reqPoints: 10,
        description: talentText`Increases the movement speed of your pets by ${[
          10,
          20,
          30,
        ]}% and their dodge chance by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Survival Instincts": {
        name: "Survival Instincts", 
        pos: "d1", 
        icon: icons["survival_instincts"], 
        maxRank: 3, 
        reqPoints: 15,
        prereq: "Thick Hide", 
        arrows: [{ dir: "down", from: "b1", to: "d1" }], 
        description: talentText`Reduces the chance your pets are critically hit by melee attacks by ${[
          2,
          4,
          6,
        ]}% and increases the chance your pets avoid area of effect spells by an additional ${[
          30,
          60,
          90,
        ]}%.`, 
      },
      "Bestial Discipline": {
        name: "Bestial Discipline", 
        pos: "d2", 
        icon: icons["spell_nature_abolishmagic"], 
        maxRank: 2, 
        reqPoints: 15,
        description: talentText`Increases the Focus regeneration of your pets by ${[
          50,
          100,
        ]}%.`, 
      },
      "Ferocity": {
        name: "Ferocity", 
        pos: "d3", 
        icon: icons["inv_misc_monsterclaw_04"], 
        maxRank: 5, 
        reqPoints: 15,
        description: talentText`Increases the critical strike chance of your pets by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Team Play": {
        name: "Team Play", 
        pos: "e1", 
        icon: icons["ability_hunter_beastwithin"], 
        maxRank: 2, 
        reqPoints: 20,
        description: talentText`Your attacks have a ${[
          5,
          10
        ]}% chance to invigorate your pet, instantly granting them 50 focus and freeing them from 1 Poison, Disease, Magic, Curse, or Fear effect. Your pet attacks have a chance to inspire you, reducing Mana cost of your next spell or ability by 100% for 5 sec. ${["","More effective than Team Play (Rank 1)."]}`, 
      },
      "Bestial Wrath": {
        name: "Bestial Wrath", 
        pos: "e2", 
        icon: icons["ability_druid_ferociousbite"], 
        maxRank: 1, 
        reqPoints: 20,
        description: talentText`Send your pet into a rage causing 20% additional damage for 30 seconds. While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.`, 
      },
      "Savage Flurry": {
        name: "Savage Flurry", 
        pos: "e4", 
        icon: icons["ability_druid_swipe"], 
        maxRank: 3, 
        reqPoints: 20,
        description: talentText`Increases your and your pet's attack speed by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Spirit Bond": {
        name: "Spirit Bond", 
        pos: "f1", 
        icon: icons["ability_hunter_separationanxiety"], 
        maxRank: 5, 
        reqPoints: 25, 
        prereq: "Team Play", 
        arrows: [{dir: "down", from: "e1", to: "f1" }], 
        description: talentText`Your pet gets Attack Power, bonus to Critical strike chance and Stamina equal to ${[
          6,
          12,
          18,
          24,
          30,
        ]}% of your Attack Power, Critical strike chance and Stamina.\n\nWhile your pet is active, you will regenerate ${[
          1,
          2,
          3,
          4,
          5,
        ]} of your total health every 5 sec.`, 
      },
      "Frenzy": {
        name: "Frenzy", 
        pos: "f3", 
        icon: icons["inv_misc_monsterclaw_03"], 
        maxRank: 5, 
        reqPoints: 25, 
        prereq: "Ferocity", 
        arrows: [{dir: "down", from: "d3", to: "f3" }], 
        description: talentText`Gives your pet a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain a 30% attack speed increase for the next 5 attacks or for 15 seconds after dealing a critical strike.`, 
      },
      "Kill Command": {
        name: "Kill Command", 
        pos: "g2", 
        icon: icons["ability_hunter_killcommand"], 
        maxRank: 1, 
        reqPoints: 30,
        prereq: "Bestial Wrath", 
        arrows: [{ dir: "down", from: "e2", to: "g2"}], 
        description: talentText`Give the command to kill, increasing the damage done by yout pet by 50% for 5 seconds. Only usable against enemies that have 20% or less health.`, 
      },
      "Terrifying Roar": {
        name: "Terrifying Roar", 
        pos: "g3", 
        icon: icons["stampede"], 
        maxRank: 1, 
        reqPoints: 30,
        description: talentText`Roars at an enemy, paralyzing it with terror for 5 seconds. In addition, up to 5 total nearby enemies will flee in fear for 10 seconds.`, 
      },
    },
  },
  Marksmanship: {
    name: "Marksmanship",
    background: backgrounds["marksmanship"],
    icon: icons["ability_marksmanship"],
    talents: {
      "Improved Hunter's Mark": {
        name: "Improved Hunter's Mark", 
        pos: "a1", 
        icon: icons["ability_hunter_snipershot"], 
        maxRank: 2, 
        reqPoints: 0,
        description: talentText`Increases the attack power bonus of your Hunter's Mark by ${[
          20,
          40,
        ]}%, increases its duration by ${[
          1,
          2,
        ]} min, and reduces its mana cost by ${[
          50,
          100,
        ]}%`, 
      },
      "Improved Arcane Shot": {
        name: "Improved Arcane Shot", 
        pos: "b2", 
        icon: icons["ability_impalingbolt"], 
        maxRank: 3, 
        reqPoints: 5,
        description: talentText`Increases the critical strike chance of your Arcane Shot by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Efficiency": {
        name: "Efficiency", 
        pos: "a3", 
        icon: icons["spell_frost_wizardmark"], 
        maxRank: 5, 
        reqPoints: 0,
        description: talentText`Reduces the Mana cost of your Shots and Stings by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Stalking": {
        name: "Stalking", 
        pos: "b1", 
        icon: icons["ability_druid_predatoryinstincts"], 
        maxRank: 2, 
        reqPoints: 5, 
        prereq: "Improved Hunter's Mark", 
        arrows: [{dir: "down", from: "a1", to: "b1"}], 
        description: talentText`After killing an opponent that yields experience or honor, your critical strike chance is increased by ${[
          5,
          10,
        ]}% and the amount of threat generated is reduced by 90% for 20 seconds. In addition, reduces the cooldown of your Rapid Fire and Rapid Strikes by ${[
          1,
          2,
        ]} min.`, 
      },
      "Improved Concussive Shot": {
        name: "Improved Concussive Shot", 
        pos: "c2", 
        icon: icons["spell_frost_stun"], 
        maxRank: 3, 
        reqPoints: 10,
        description: talentText`Gives your Concussive Shot a ${[
          10,
          20,
          30,
        ]}% chance to stun the target for 3 seconds.`, 
      },
      "Lethal Shots": {
        name: "Lethal Shots", 
        pos: "b3", 
        icon: icons["ability_searingarrow"], 
        maxRank: 5, 
        reqPoints: 5,
        description: talentText`Increases your critical strike chance with ranged weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Aimed Shot": {
        name: "Aimed Shot", 
        pos: "c1", 
        icon: icons["inv_spear_07"], 
        maxRank: 1, 
        reqPoints: 10,
        description: talentText`An aimed shot that increases ranged attack damage by 70.`, 
      },
      "Improved Stings": {
        name: "Improved Stings", 
        pos: "a2", 
        icon: icons["ability_hunter_quickshot"], 
        maxRank: 3, 
        reqPoints: 0,
        description: talentText`Increases the damage done by your Serpent Sting and Wyvern Sting by ${[
          10,
          20,
          30,
        ]}% and the Mana drained by your Viper Sting by ${[
          10,
          20,
          30,
        ]}%. In addition, reduces the Stamina and Intellect of targets affected by your Scorpid Sting by ${[
          10,
          30,
          50,
        ]}% of the amount of Strength reduced.`, 
      },
      "Mortal Shots": {
        name: "Mortal Shots", 
        pos: "c3", 
        icon: icons["ability_piercedamage"], 
        maxRank: 3, 
        reqPoints: 10, 
        prereq: "Lethal Shots", 
        arrows: [{ dir: "down", from: "b3", to: "c3" }], 
        description: talentText`Increases your ranged weapon critical strike damage bonus by ${[
          10,
          20,
          30
        ]}%.`,
      },
      "Hawk Eye": {
        name: "Hawk Eye", 
        pos: "c4", 
        icon: icons["ability_townwatch"], 
        maxRank: 2, 
        reqPoints: 10,
        description: talentText`Increases the range of your ranged weapons by ${[
          3,
          6,
        ]} yards.`, 
      },
      "Crossbow Specialization": {
        name: "Crossbow Specialization", 
        pos: "d2", 
        icon: icons["inv_weapon_crossbow_01"], 
        maxRank: 5, 
        reqPoints: 15,
        description: talentText`Increases your chance to get a critical strike with Crossbows by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Bow Specialization": {
        name: "Bow Specialization", 
        pos: "d3", 
        icon: icons["inv_weapon_bow_12"], 
        maxRank: 5, 
        reqPoints: 15,
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance to launch an extra arrow to the same target after dealing damage with your Bow.`, 
      },
      "Gun Specialization": {
        name: "Gun Specialization", 
        pos: "d4", 
        icon: icons["inv_musket_03"], 
        maxRank: 5, 
        reqPoints: 15,
        description: talentText`Causes your shots to ignore up to ${[
          120,
          240,
          360,
          480,
          600,
        ]} (scales with your level) of your target's Armor when carrying a Gun.`, 
      },
      "Snapshot": {
        name: "Snapshot", 
        pos: "e1", 
        icon: icons["ability_marksmanship"], 
        maxRank: 5, 
        reqPoints: 20, 
        prereq: "Aimed Shot", 
        arrows: [{dir: "down", from: "c1", to: "e1" }], 
        description: talentText`Reduces the shot time of your Aimed Shot and Multi-Shot by ${[
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} sec.`, 
      },
      "Barrage": {
        name: "Barrage", 
        pos: "e2", 
        icon: icons["ability_upgrademoonglaive"], 
        maxRank: 3, 
        reqPoints: 20,
        description: talentText`Increases the damage done by your Multi-Shot and Volley spells by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Scatter Shot": {
        name: "Scatter Shot", 
        pos: "e3", 
        icon: icons["ability_golemstormbolt"], 
        maxRank: 1, 
        reqPoints: 20,
        description: talentText`A short-range shot that deals damage and disorients the raget for 5 seconds. Any damage caused will remove the effect. Turns off your attack when used.`, 
      },
      "Deadeye": {
        name: "Deadeye", 
        pos: "e4", 
        icon: icons["ability_warrior_revenge"], 
        maxRank: 1, 
        reqPoints: 20,
        description: talentText`When activated, increases the critical strike chance of your next Aimed Shot, Multi-Shot or Arcane Shot by 100%.`, 
      },
      "Reconnaissance": {
        name: "Reconnaissance", 
        pos: "f1", 
        icon: icons["ability_hunter_pathfinding"], 
        maxRank: 5, 
        reqPoints: 25,
        description: talentText`Increases your damage by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% if youe've been standing still for ~10 seconds.`, 
      },
      "Ranged Weapon Specialization": {
        name: "Ranged Weapon Specialization", 
        pos: "f3", 
        icon: icons["inv_weapon_rifle_06"], 
        maxRank: 5, 
        reqPoints: 25,
        description: talentText`Increases the damage you deal with ranged weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Trueshot Aura": {
        name: "Trueshot Aura", 
        pos: "g2", 
        icon: icons["ability_trueshot"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Barrage", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`Increases the ranged attack power of party member withing 30 yards by 100 and melee attack power by 50.`, 
      },
    },
  },
  Survival: {
    name: "Survival",
    background: backgrounds["survival"],
    icon: icons["ability_hunter_swiftstrike"],
    talents: {
      "Deflection": {
        name: "Deflection", 
        pos: "a1", 
        icon: icons["ability_parry"], 
        maxRank: 4, 
        reqPoints: 0,
        description: talentText`Increases you Parry chance by ${[
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Deterrence": {
        name: "Deterrence", 
        pos: "a2", 
        icon: icons["ability_whirlwind"], 
        maxRank: 1, 
        reqPoints: 0, 
        prereq: "Deflection", 
        arrows: [{ dir: "right", from: "a1", to: "a2"}], 
        description: talentText`Increases your chance to Dodge and Parry by 25% and reflects the next spell cast on you. Lasts 10 seconds.`, 
      },
      "Brutality": {
        name: "Brutality", 
        pos: "a3", 
        icon: icons["ability_criticalstrike"], 
        maxRank: 5, 
        reqPoints: 0,
        description: talentText`Increase your and your pet's chance to get a critical strike in melee by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%. Also increases the critical strike chance of Raptor Strike and Mongoose Bite by an additional ${[
          2,
          4,
          6,
          8,
          10,
        ]}%-`, 
      },
      "Clever Traps": {
        name: "Clever Traps", 
        pos: "b1", 
        icon: icons["spell_nature_timestop"], 
        maxRank: 2, 
        reqPoints: 5,
        description: talentText`Increases the duration of Freezing and Frost trap effects by ${[
          15,
          30,
        ]}% and the damage of Immolation and Explosive trap effects by ${[
          15,
          30,
        ]}%.`, 
      },
      "Survivalist": {
        name: "Survivalist", 
        pos: "b2", 
        icon: icons["spell_shadow_twilight"], 
        maxRank: 5, 
        reqPoints: 5,
        description: talentText`Decreases damage taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%. In addition, cures 1 Poison effect on you every ${[
          60,
          45,
          30,
          20,
          10,
        ]}`, 
      },
      "Improved Wing Clip": {
        name: "Improved Wing Clip", 
        pos: "b3", 
        icon: icons["ability_rogue_trip"], 
        maxRank: 3, 
        reqPoints: 5,
        description: talentText`Gives your Wing Clip ability a ${[
          5,
          10,
          15,
        ]}% chance to immobilize the target for 5 seconds.`, 
      },
      "Improved Raptor Strike": {
        name: "Improved Raptor Strike", 
        pos: "b4", 
        icon: icons["ability_meleedamage"], 
        maxRank: 5, 
        reqPoints: 5, 
        prereq: "Brutality", 
        arrows: [
          { dir: "right-down", from: "a3", to: "a4"}, 
          {dir: "right-down-down", from: "a4", to: "b4" }
        ], 
        description: talentText`Reduces the cooldown of your Raptor Strike by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec.`, 
      },
      "Dual Wield Specialization": {
        name: "Dual Wield Specialization", 
        pos: "c1", 
        icon: icons["ability_dualwield"], 
        maxRank: 4, 
        reqPoints: 10, 
        prereq: "Melee Specialization", 
        arrows: [{ dir: "left", from: "c1", to: "c2"}], 
        description: talentText`Increases the damage done by you offhand weapon by ${[
          20,
          30,
          40,
          50,
        ]}%.`, 
      },
      "Melee Specialization": {
        name: "Melee Specialization", 
        pos: "c2", 
        icon: icons["inv_axe_02"], 
        maxRank: 1, 
        reqPoints: 10,
        description: talentText`Increases your melee attack speed by 20%, but reduces your ranged attack speed by 20% and increases the shot time of your Aimed Shot and Multi-Shot by 1 sec.`, 
      },
      "Two-Handed Weapon Specialization": {
        name: "Two-Handed Weapon Specialization", 
        pos: "c3", 
        icon: icons["inv_weapon_halberd_03"], 
        maxRank: 4, 
        reqPoints: 10, 
        prereq: "Melee Specialization", 
        arrows: [{ dir: "right", from: "c2", to: "c3"}], 
        description: talentText`Increases the damage you deal with two-handed melee weapons by ${[
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Improved Tracking": {
        name: "Improved Tracking", 
        pos: "c4", 
        icon: icons["ability_tracking"], 
        maxRank: 5, 
        reqPoints: 10,
        description: talentText`While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, and Undead, all damage done and critical damage caused to those types by the Hunter is increased by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%. Also increases the effectiveness of Track Hidden.`, 
      },
      "Trapper": {
        name: "Trapper", 
        pos: "d1", 
        icon: icons["ability_ensnare"], 
        maxRank: 2, 
        reqPoints: 15,
        description: talentText`Gives your traps a ${[
          10,
          20,
        ]}% chance to entrap the target, preventing them from moving for 5 seconds. In addition, decreases the chance enemies will resist Feign Death and trap effects by ${[
          5,
          10,
        ]}%.`, 
      },
      "Killer Instinct": {
        name: "Killer Instinct", 
        pos: "d3", 
        icon: icons["spell_holy_blessingofstamina"], 
        maxRank: 3, 
        reqPoints: 15,description: talentText`Increases hit and crit chance by ${[
          1,
          2,
          3,
        ]}% for both you and your pet.`, 
      },
      "Thrill of the Hunt": {
        name: "Thrill of the Hunt", 
        pos: "d4", 
        icon: icons["ability_hunter_thrillofthehunt"], 
        maxRank: 3, 
        reqPoints: 15,
        description: talentText`Your melee and ranged attacks have a ${[
          10,
          20,
          30,
        ]}% chance to restore 120 mana.`, 
      },
      "Deep Freeze": {
        name: "Deep Freeze", 
        pos: "e1", 
        icon: icons["spell_frost_frozendecay"], 
        maxRank: 3, 
        reqPoints: 20,
        description: talentText`Physical attacks against the target, affected by your Freezing Trap, have an additional ${[
          10,
          20,
          30,
        ]}% chance to be critical. In addition, increases the movement speed reduction of your Frost Trap by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Savage Blow": {
        name: "Savage Blow", 
        pos: "e2", 
        icon: icons["amulet_of_wild"], 
        maxRank: 1, 
        reqPoints: 20, 
        prereq: "Melee Specialization", 
        arrows: [{ dir: "down", from: "c2", to: "e2" }], 
        description: talentText`Wild strike with both weapons that grants bonus effects dependent on your active Aspect.\n\nAspect of the Beast:\nSavage Blow hits additional enemies near the target.\n\nAspect of the Cheetah:\nMakes you immune to movement impairing effects for 5 seconds.\n\nAspect of the Hawk:\nIncreases the range of Savage Blow by 5 yards.\n\nAspect of the Monkey:\nAllows you to use Mongoose Bite.\n\nAspect of the Pack:\nReduces the cost of all spells and abilities of all nearby party members by 10% for 20 seconds.\n\nAspect of the Wild:\nRegenerate 5% of your total Health over 25 seconds. Stacks up to 5 times.`, 
      },
      "Wyvern Sting": {
        name: "Wyvern Sting", 
        pos: "e3", 
        icon: icons["inv_spear_02"], 
        maxRank: 1, 
        reqPoints: 20, 
        prereq: "Killer Instinct", 
        arrows: [{ dir: "down", from: "d3", to: "e3"}], 
        description: talentText`A stinging shot that puts the target to sleep for up to 1 min. Any damage will cancel the effect. When the target wakes up, the Sting slows movement speed by 30% and causes 200 Nature damage over 10 seconds. Only usable out of combat. Only one Sting per hunter can be active on the target at a time.`, 
      },
      "Find Weakness": {
        name: "Find Weakness", 
        pos: "f2", 
        icon: icons["ability_rogue_findweakness"], 
        maxRank: 5, 
        reqPoints: 25,
        description: talentText`Your ranged critical strikes have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to reveal a flaw in your target's defenses, increasing the critical strike chance of attacks made against that target by an additional 3% for 30 seconds.`, 
      },
      "Lightning Reflexes": {
        name: "Lightning Reflexes", 
        pos: "f3", 
        icon: icons["spell_nature_invisibilty"], 
        maxRank: 5, 
        reqPoints: 25,
        description: talentText`Increases your attack speed and Agility by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Whirling Axe": {
        name: "Whirling Axe", 
        pos: "g2", 
        icon: icons["inv_axe_08"], 
        maxRank: 1, 
        reqPoints: 30,
        description: talentText`Hurls an axe at a target, causing damage equal to 10% of your melee attack power and slowing the target's movement speed by 50% for 8 seconds. This attack always crits. It also interrupts spellcasting and prevents any spell in that school from being cast for 4 seconds.`, 
      },
    },
  },
};
