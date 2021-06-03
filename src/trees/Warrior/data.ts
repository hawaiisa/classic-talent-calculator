import { areReqPointsMet, TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/warrior"),
);
const icons = requireAll(require.context("../../assets/icons/warrior"));

export const data: TalentData = {
  Arms: {
    name: "Arms",
    background: backgrounds["arms"],
    icon: icons["ability_rogue_eviscerate"],
    talents: {
      "Improved Heroic Strike": {
        name: "Improved Heroic Strike",
        pos: "a1",
        icon: icons["ability_rogue_ambush"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the critical strike chance of your Heroic Strike ability by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Tactical Mastery": {
        name: "Tactical Mastery",
        pos: "a2",
        icon: icons["spell_nature_enchantarmor"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`You retain up to ${[
          15,
          25,
          35,
        ]} of your rage points when you change stances.`,
      },
      "Deflection": {
        name: "Deflection",
        pos: "a3",
        icon: icons["ability_parry"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases your Parry chance by ${[
          3,
          6,
        ]}%.`,
      },
      "Improved Charge": {
        name: "Improved Charge",
        pos: "b1",
        icon: icons["ability_warrior_charge"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the amount of rage generated by your Charge by ${[
          5,
          10,
          15,
        ]}. In addition, increases the range of your Charge by ${[
          3,
          5,
          7,
        ]} yards.`,
      },
      "Duelist": {
        name: "Duelist",
        pos: "b3",
        icon: icons["ability_warrior_challange"],
        maxRank: 2,
        reqPoints: 5,
        prereq: "Deflection",
        arrows: [{ dir: "down", from: "a3", to: "b3" }],
        description: talentText`Increases the critical strike chance of your Overpower and Revenge abilities by ${[
          25,
          50,
        ]}% and reduces the cooldown of your Retalitation ability by ${[
          25,
          50,
        ]}%.`,
      },
      "Improved Thunder Clap": {
        name: "Improved Thunder Clap",
        pos: "b4",
        icon: icons["ability_thunderclap"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increase the Slow effect and damage of your Thunder Clap ability by ${[
          50,
          100,
          150,
        ]}%.`,
      },
      "Improved Hamstring": {
        name: "Improved Hamstring",
        pos: "c1",
        icon: icons["ability_shockwave"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the duration of your Hamstring by ${[
          1,
          2,
          3,
        ]} seconds and reduces the target's speed by an additional ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Anger Management": {
        name: "Anger Management",
        pos: "c2",
        icon: icons["spell_holy_blessingofstamina"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Tactical Mastery",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`Increases the time required for your rage to decay while out of combat by 30%.`,
      },
      "Impale": {
        name: "Impale",
        pos: "c3",
        icon: icons["ability_searingarrow"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the critical strike damage bonus of your abilities in Battle, Defensive and Berserker stance by ${[
          10,
          20,
        ]}%.`,
      },
      "Deep Wounds": {
        name: "Deep Wounds",
        pos: "c4",
        icon: icons["ability_backstab"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Impale",
        arrows: [{ dir: "right", from: "c3", to: "c4"}],
        description: talentText`Your critical strikes cause the opponent to bleed, dealing ${[
          10,
          20,
          30,
        ]}% of your melee weapon's average damage over 12 sec. Stacks up to 5 times.`,
      },
      "Poleaxe Specialization": {
        name: "Poleaxe Specialization",
        pos: "d1",
        icon: icons["inv_weapon_halbard_01"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your chance to get a critical strike with Axes and Polearms by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Mace Specialization": {
        name: "Mace Specialization",
        pos: "d2",
        icon: icons["inv_mace_01"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Causes your attacks with maces to ignore up to ${[
          120,
          240,
          360,
          480,
          600,
        ]} of your target's armor (Scales with your level).`,
      },
      "Sword Specialization": {
        name: "Sword Specialization",
        pos: "d3",
        icon: icons["inv_sword_27"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance yo get an extra attack on the same target after dealing damage with your Sword.`,
      },
      "Sweeping Strikes": {
        name: "Sweeping Strikes",
        pos: "e2",
        icon: icons["ability_rogue_slicedice"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Your attacks strike an additional nearby opponent. Lasts 20 sec.`,
      },
      "Two-Handed Weapong Specialization": {
        name: "Two-Handed Weapon Specialization",
        pos: "e3",
        icon: icons["inv_axe_09"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Indreases the damage you deal with two-handed melee weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Maim": {
        name: "Maim",
        pos: "e4",
        icon: icons["ability_creature_cursed_02"],
        maxRank: 3,
        reqPoints: 20,
        prereq: "Deep Wounds",
        arrows: [{ dir: "down", from: "c4", to: "e4" }],
        description: talentText`Your auto attacks have a 10% chance to injure the target, increasing physical damage taken by 5% for ${[
          10,
          20,
          30,
        ]} sec.`,
      },
      "Para Bellum": {
        name: "Para Bellum",
        pos: "f1",
        icon: icons["spell_holy_prayerofhealing"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Reduces the cooldown of your abilities by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Dog of War": {
        name: "Improved Hamstring",
        pos: "f3",
        icon: icons["inv_banner_03"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Reduces the cost of your abilities by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Mortal Strike": {
        name: "Mortal Strike",
        pos: "g2",
        icon: icons["ability_warrior_savageblow"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Sweeping Strikes",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`A vicious strike that deals weapon damage plus 100 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec.`,
      },
      "Improved Mortal Strike": {
        name: "Improved Mortal Strike",
        pos: "g3",
        icon: icons["ability_warrior_savageblow"],
        maxRank: 2,
        reqPoints: 30,
        prereq: "Mortal Strike",
        arrows: [{ dir: "right", from: "g2", to: "g3" }],
        description: talentText`Reduces the cooldown of your Mortal Strike ability by ${[
          0.5,
          1,
        ]} sec.`,
      },
    },
  },
  Fury: {
    name: "Fury",
    background: backgrounds["fury"],
    icon: icons["ability_warrior_innerrage"],
    talents: {
      "Combat Endurance": {
        name: "Combat Endurance",
        pos: "a1",
        icon: icons["racial_orc_berserkerstrength"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Allows ${[
          5,
          10,
          15,
        ]}% of your Health regeneration to continue while in combat.`
      },
      "Booming Voice": {
        name: "Booming Voice",
        pos: "a2",
        icon: icons["spell_nature_purge"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the area of effect and duration of all your shouts by ${[
          30,
          50,
        ]}%.`,
      },
      Cruelty: {
        name: "Cruelty",
        pos: "a3",
        icon: icons["ability_rogue_eviscerate"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to get a critical strike with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Demoralizing Shout": {
        name: "Improved Demoralizing Shout",
        pos: "b1",
        icon: icons["ability_warrior_warcry"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the melee attack power and spell damage reduction of your Demoralizing Shout by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Unbridled Wrath": {
        name: "Unbridled Wrath",
        pos: "b3",
        icon: icons["spell_nature_stoneclawtotem"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          5,
          10,
          15,
          20,
          25,
        ]}% chance to generate an 5 Rage points when you deal melee damage with a weapon.`,
      },
      "Improved Cleave": {
        name: "Improved Cleave",
        pos: "c1",
        icon: icons["ability_warrior_cleave"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the number of targets your Cleave hit by ${[
          1,
          2,
        ]}.`,
      },
      "Piercing Howl": {
        name: "Piercing Howl",
        pos: "c2",
        icon: icons["spell_shadow_deathscream"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Booming Voice",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`Causes all enemies near the warrior to be dazed, reducing movement speed by 50% for 6 sec.`,
      },
      "Blood Craze": {
        name: "Blood Craze",
        pos: "c3",
        icon: icons["spell_shadow_summonimp"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Regenerates ${[
          3,
          6,
          9,
        ]}% of your total Health over 9 sec after being the victim of a critical strike.`,
      },
      "Improved Battle Shout": {
        name: "Improved Battle Shout",
        pos: "c4",
        icon: icons["ability_warrior_battleshout"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the melee attack power bonus of your Battle Shout by ${[
          10,
          20,
        ]}%.`,
      },
      "Precision": {
        name: "Precision",
        pos: "d1",
        icon: icons["ability_marksmanship"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your chance to hit with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Execute": {
        name: "Improved Execute",
        pos: "d2",
        icon: icons["inv_sword_48"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of your Execute ability by ${[
          40,
          80,
        ]}%.`,
      },
      "Enrage": {
        name: "Enrage",
        pos: "d3",
        icon: icons["spell_shadow_unholyfrenzy"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% melee damage bonus for 30 sec after being the victim of a critical strike. Stacks up to 10 times.`,
      },
      "Improved Slam": {
        name: "Improved Slam",
        pos: "d4",
        icon: icons["ability_warrior_decisivestrike"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Decreases the casting time of your Slam ability by ${[
          0.5,
          1,
          1.5,
        ]} sec${[
          ".",
          ".",
          ", but now has a 10 sec cooldown.",
        ]}`,
      },
      "Inner Rage": {
        name: "Inner Rage",
        pos: "e1",
        icon: icons["ability_warrior_innerrage"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the cooldown of your Bloodrage, Berserker Rage and Recklessness by ${[
          25,
          50,
        ]}%.`,
      },
      "Death Wish": {
        name: "Death Wish",
        pos: "e2",
        icon: icons["spell_shadow_deathpact"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, increases your physical damage by 20% and makes you immune to Fear effects, but lowers your armor and all resistances by 50%. Lasts 30 sec.`,
      },
      "Interceptor": {
        name: "Interceptor",
        pos: "e4",
        icon: icons["ability_rogue_sprint"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the Rage cost of your Intercept and Pummel abilities by ${[
          50,
          100,
        ]}% and reduces the cooldown of your Intercept abiilty by ${[
          5,
          10,
        ]} sec.`,
      },
      "Flurry": {
        name: "Flurry",
        pos: "f1",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases your attack speed by ${[
          10,
          15,
          20,
          25,
          30,
        ]}% for your next 2 swings after dealing a melee critical strike.`,
      },
      "Berserker's Blood": {
        name: "Berserker's Blood",
        pos: "f3",
        icon: icons["zerkerblood"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Enrage",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Increases your attack speed, chance to resist hostile spells and healing taken by 1% to 30%. At full health the bonus is 1% with a greater effect up to 30% if you are badly hurt. Max bonus health threshold: ${[
          1,
          10,
          20,
          30,
          40,
        ]}%.`,
      },
      "Bloodthirst": {
        name: "Bloodthirst",
        pos: "g2",
        icon: icons["spell_nature_bloodlust"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Death Wish",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Attack the target causing damage equal to 50% of your attack power. In addition, your successful melee attacks have a 25% chance to drain 50 life from target enemy. This effect lasts 3 charges or 15 sec.`,
      },
      "Improved Bloodthirst": {
        name: "Improved Bloodthirst",
        pos: "g3",
        icon: icons["spell_nature_bloodlust"],
        maxRank: 2,
        reqPoints: 30,
        prereq: "Bloodthirst",
        arrows: [{ dir: "right", from: "g2", to: "g3"}],
        description: talentText`Reduces the cost of your Bloodthirst ability by ${[
          5,
          10,
        ]} Rage.`,
      },
    },
  },
  Protection: {
    name: "Protection",
    background: backgrounds["protection"],
    icon: icons["inv_shield_06"],
    talents: {
      "Improved Bloodrage": {
        name: "Improved Bloodrage",
        pos: "a1",
        icon: icons["ability_racial_bloodrage"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the instant Rage generated by your Bloodrage ability by ${[
          5,
          10,
        ]} and reduces its cost by ${[
          25,
          50,
        ]}%.`,
      },
      "Toughness": {
        name: "Toughness",
        pos: "a2",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your armor value from items by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Anticipation": {
        name: "Anticipation",
        pos: "a3",
        icon: icons["spell_nature_mirrorimage"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases your Defense skill by ${[
          5,
          10,
          15,
        ]}.`,
      },
      "Shield Specialization": {
        name: "Shield Specialization",
        pos: "b2",
        icon: icons["inv_shield_06"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your chance to block attacks with a shield by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and has a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to restore 1% of your health when a block occurs.`,
      },
      "Improved Shield Bash": {
        name: "Improved Shield Bash",
        pos: "b3",
        icon: icons["ability_warrior_shieldbash"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Gives your Shield Bash ability a ${[
          50,
          100,
        ]}% chance to silence the target for 6 sec.`,
      },
      "Improved Revenge": {
        name: "Improved Revenge",
        pos: "b4",
        icon: icons["ability_warrior_revenge"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives your Revenge ability a ${[
          15,
          30,
          45,
        ]}% chance to stun the target for 3 sec.`,
      },
      "Last Stand": {
        name: "Last Stand",
        pos: "c1",
        icon: icons["spell_holy_ashestoashes"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Heals yourself for 30% of your maximum health, and increases your maximum health by 30% for 20 sec.`,
      },
      "Shield Mastery": {
        name: "Shield Mastery",
        pos: "c2",
        icon: icons["ability_defend"],
        maxRank: 3,
        reqPoints: 10,
        prereq: "Shield Specialization",
        arrows: [{ dir: "down", from: "b2", to: "c2"}],
        description: talentText`Allows your Shield Block and Shield Reflection abilities to block/reflect and additional attack/spell and reduces their cooldowns by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Blade Mail": {
        name: "Blade Mail",
        pos: "c3",
        icon: icons["inv_shoulder_11"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`When struck in combat inflicts up to ${[
          12,
          24,
          36,
        ]}damage to the attacker. Damage scales with your level.`,
      },
      "Concussion Blow": {
        name: "Concussion Blow",
        pos: "c4",
        icon: icons["ability_thunderbolt"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Improved Revenge",
        arrows: [{ dir: "down", from: "b4", to: "c4" }],
        description: talentText`A brutal strike that deals weapon damage and stuns the opponent for 4 sec. This ability causes a high amount of threat.`,
      },
      "Mocker": {
        name: "Mocker",
        pos: "d1",
        icon: icons["spell_nature_reincarnation"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Improves your chance to hit with Taunt, Challenging Shout and Mocking Blow abilities by ${[
          3,
          6,
        ]}%.`,
      },
      "Iron Will": {
        name: "Iron Will",
        pos: "d2",
        icon: icons["spell_magic_magearmor"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases your chance to resist Stun, Fear and Charm effects by an additional ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "One-Handed Weapon Specialization": {
        name: "One-Handed Weapon Specialization",
        pos: "d3",
        icon: icons["inv_sword_20"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the damage you deal with One-Handed Melee weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Defiance": {
        name: "Defiance",
        pos: "d4",
        icon: icons["ability_bullrush"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the threat generated by your attacks by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% while in Defensive Stance.`,
      },
      
      "Shield Toss": {
        name: "Shield Toss",
        pos: "e1",
        icon: icons["ability_upgrademoonglaive"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Hurls a shield at the enemy, causing 69 to 79 damage, increased by Attack Power and knocks down target for 2 sec. This ability causes a high amount of threat.`,
      },
      "Training and Discipline": {
        name: "Training and Discipline",
        pos: "e2",
        icon: icons["spell_holy_eyeforaneye"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Reduces the cost of all your abilities by ${[
          1,
          2,
          3,
        ]} rage point${["","s","s"]}.`,
      },
      "Improved Shield Wall": {
        name: "Improved Shield Wall",
        pos: "e4",
        icon: icons["ability_warrior_shieldwall"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the effect duration of your Shield Wall ability by ${[
          5,
          10,
        ]} secs and reduces its cooldown by ${[
          25,
          50,
        ]}%.`,
      },      
      "Vitality": {
        name: "Vitality",
        pos: "f1",
        icon: icons["spell_nature_undyingstrength"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases your total health by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and increases healing taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%`,
      },
      "Butterfly Style": {
        name: "Butterfly Style",
        pos: "f3",
        icon: icons["spell_nature_windfury"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "One-Handed Weapon Specialization",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Increases your chances to dodge by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%. Also, your critical hits generate ${[
          2,
          4,
          6,
          8,
          10,
        ]}% more threat.`,
      },
                  
      "Constitution": {
        name: "Constitution",
        pos: "g2",
        icon: icons["ability_warrior_intensifyrage"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Training and Discipline",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Increases your Strength by up to 1% of your current Health. Also if you have more than 50% of your Health you become immune to Diseases and if more than 90% to Poisons.`,
      },
    },
  },
};
