import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/priest"),
);
const icons = requireAll(require.context("../../assets/icons/priest"));

export const data: TalentData = {
  Discipline: {
    name: "Discipline",
    background: backgrounds["discipline"],
    icon: icons["spell_holy_wordfortitude"],
    talents: {
      "Silent Resolve": {
        name: "Silent Resolve", 
        pos: "a1", 
        icon: icons["spell_nature_manaregentotem"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Unbreakable Will": {
        name: "Unbreakable Will", 
        pos: "a2", 
        icon: icons["spell_magic_magearmor"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Wand Specialization": {
        name: "Wand Specialization", 
        pos: "a3", 
        icon: icons["inv_wand_01"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Pilgrimage": {
          name: "Pilgrimage", 
        pos: "b1", 
        icon: icons["inv_staff_10"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Improved Inner Fire": {
        name: "Improved Inner Fire", 
        pos: "b2", 
        icon: icons["spell_holy_innerfire"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Concentration": {
        name: "Concentration", 
        pos: "b3", 
        icon: icons["ability_druid_naturalperfection"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Martyrdom": {
        name: "Martyrdom", 
        pos: "b4", 
        icon: icons["spell_nature_tranquility"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Improved Power Word: Fortitude": {
        name: "Improved Power Word: Fortitude", 
        pos: "c1", 
        icon: icons["spell_holy_wordfortitude"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText``, 
      },
      "Inner Focus": {
        name: "Inner Focus", 
        pos: "c2", 
        icon: icons["spell_frost_windwalkon"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Improved Inner Fire", 
        arrows: [{ dir: "down", from: "b2", to: "c2" }], 
        description: talentText``, 
      },
      "Meditation": {
        name: "Meditation", 
        pos: "c3", 
        icon: icons["spell_nature_sleep"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText``, 
      },
      "Focused Casting": {
        name: "Focused Casting", 
        pos: "c4", 
        icon: icons["spell_arcane_blink"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Martyrdom", 
        arrows: [{dir: "down", from: "b4", to: "c4" }], 
        description: talentText``, 
      },
      "Stratagem": {
        name: "Stratagem", 
        pos: "d1", 
        icon: icons["spell_shadow_manaburn"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText``, 
      },
      "Mental Strength": {
        name: "Mental Strength", 
        pos: "d2", 
        icon: icons["spell_nature_enchantarmor"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText``, 
      },
      "Mental Agility": {
        name: "Mental Agility", 
        pos: "d3", 
        icon: icons["ability_hibernation"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText``, 
      },
      "Improved Power Word: Shield": {
        name: "Improved Power Word: Shield", 
        pos: "e1", 
        icon: icons["spell_holy_powerwordshield"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText``, 
      },
      "Twin Disciplines": {
        name: "Twin Disciplines", 
        pos: "e4", 
        icon: icons["spell_holy_blessingofstrength"], 
        maxRank: 3, 
        reqPoints: 20, description: talentText``, 
      },
      "Power Word: Requital": {
        name: "Power Word: Requital", 
        pos: "e3", 
        icon: icons["spell_fire_elementaldevastation"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText``, 
      },
      "Improved Memory": {
        name: "Improved Memory", 
        pos: "f1", 
        icon: icons["inv_misc_organ_03"], 
        maxRank: 5, 
        reqPoints: 25, description: talentText``, 
      },
      "Force of Will": {
        name: "Force of Will", 
        pos: "f3", 
        icon: icons["spell_nature_slowingtotem"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText``, 
      },
      "Power Infusion": {
        name: "Power Infusion", 
        pos: "g2", 
        icon: icons["spell_holy_powerinfusion"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Mental Strength", 
        arrows: [{ dir: "down", from: "d2", to: "g2"}], 
        description: talentText``, 
      },
    },
  },
  Holy: {
    name: "Holy",
    background: backgrounds["holy"],
    icon: icons["spell_holy_holybolt"],
    talents: {
      "Holy Focus": {
        name: "Holy Focus", 
        pos: "a1", 
        icon: icons["spell_holy_healingfocus"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Improved Renew": {
        name: "Improved Renew", 
        pos: "a2", 
        icon: icons["spell_holy_renew"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Spell Warding": {
        name: "Spell Warding", 
        pos: "a3", 
        icon: icons["spell_holy_spellwarding"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Spell Focus": {
        name: "Spell Focus", 
        pos: "b1", 
        icon: icons["spell_holy_surgeoflight"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Light's Grace": {
        name: "Light's Grace", 
        pos: "b2", 
        icon: icons["spell_holy_blessedlife"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Divine Fury": {
        name: "Divine Fury", 
        pos: "b3", 
        icon: icons["spell_holy_sealofwrath"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Blessed Recovery": {
        name: "Blessed Recovery", 
        pos: "b4", 
        icon: icons["spell_holy_blessedrecovery"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Holy Nova": {
        name: "Holy Nova", 
        pos: "c1", 
        icon: icons["spell_holy_holynova"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText``, 
      },
      "Holy Specialization": {
        name: "Holy Specialization", 
        pos: "c2", 
        icon: icons["spell_holy_sealofsalvation"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText``, 
      },
      "Improved Healing": {
        name: "Improved Healing", 
        pos: "c4", 
        icon: icons["spell_holy_heal02"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText``, 
      },
      "Holy Reach": {
        name: "Holy Reach", 
        pos: "d1", 
        icon: icons["spell_holy_purify"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText``, 
      },
      "Purifying Light": {
        name: "Purifying Light", 
        pos: "d2", 
        icon: icons["spell_holy_retribution"], 
        maxRank: 3, 
        reqPoints: 15, 
        prereq: "Holy Specialization", 
        arrows: [{ dir: "down", from: "c2", to: "d2" }], 
        description: talentText``, 
      },
      "Searing Light": {
        name: "Searing Light", 
        pos: "d3", 
        icon: icons["spell_holy_searinglightpriest"], 
        maxRank: 2, 
        reqPoints: 15, 
        prereq: "Divine Fury", 
        arrows: [{ dir: "down", from: "b3", to: "d3"}], 
        description: talentText``, 
      },
      "Spiritual Guidance": {
        name: "Spiritual Guidance", 
        pos: "d4", 
        icon: icons["spell_holy_spiritualguidence"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText``, 
      },
      "Improved Prayer of Healing": {
        name: "Improved Prayer of Healing", 
        pos: "e1", 
        icon: icons["spell_holy_prayerofhealing02"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText``, 
      },
      "Sacrifice": {
        name: "Sacrifice", 
        pos: "e2", 
        icon: icons["spell_holy_sealofsacrifice"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText``, 
      },
      "Inspiration": {
        name: "Inspiration", 
        pos: "e3", 
        icon: icons["spell_holy_layonhands"], 
        maxRank: 3, reqPoints: 20, 
        description: talentText``, 
      },
      "Spiritual Healing": {
        name: "Spiritual Healing", 
        pos: "f1", 
        icon: icons["spell_nature_moonglow"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText``, 
      },
      "Faith": {
        name: "Faith", 
        pos: "f3", 
        icon: icons["spell_holy_divinespirit"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText``, 
      },
      "Spirit of Redemption": {
        name: "Spirit of Redemption", 
        pos: "g2", 
        icon: icons["inv_enchant_essenceeternallarge"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Sacrifice", 
        arrows: [{ dir: "down", from: "e2", to: "g2"}], 
        description: talentText``, 
      },
    },
  },
  Shadow: {
    name: "Shadow",
    background: backgrounds["shadow"],
    icon: icons["spell_shadow_shadowwordpain"],
    talents: {
      "Shadow Affinity": {
        name: "Shadow Affinity", 
        pos: "a1", 
        icon: icons["spell_shadow_shadowward"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Improved Shadow Word: Pain": {
        name: "Improved Shadow Word: Pain", 
        pos: "a2", 
        icon: icons["spell_shadow_shadowwordpain"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Blackout": {
        name: "Blackout", 
        pos: "a3", 
        icon: icons["spell_shadow_gathershadows"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText``, 
      },
      "Spirit Tap": {
        name: "Spirit Tap", 
        pos: "b1", 
        icon: icons["spell_shadow_requiem"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Improved Mind Blast": {
        name: "Improved Mind Blast", 
        pos: "b2", 
        icon: icons["spell_shadow_unholyfrenzy"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Shadow Focus": {
        name: "Shadow Focus", 
        pos: "b4", 
        icon: icons["spell_shadow_burningspirit"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText``, 
      },
      "Improved Psychic Scream": {
        name: "Improved Psychic Scream", 
        pos: "c1", 
        icon: icons["spell_shadow_psychicscream"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText``, 
      },
      "Mind Flay": {
        name: "Mind Flay", 
        pos: "c2", 
        icon: icons["spell_shadow_siphonmana"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText``, 
      },
      "Shadow Word: Numb": {
        name: "Shadow Word: Numb", 
        pos: "c3", 
        icon: icons["spell_shadow_nightofthedead"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Blackout", 
        arrows: [{dir: "down", from: "a3", to: "c3" }], 
        description: talentText``, 
      },
      "Improved Fade": {
        name: "Improved Fade", 
        pos: "c4", 
        icon: icons["spell_magic_lesserinvisibilty"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText``, 
      },
      "Improved Shadow Word: Silence": {
        name: "Improved Shadow Word: Silence", 
        pos: "d1", 
        icon: icons["spell_holy_silence"], 
        maxRank: 2, 
        reqPoints: 15, 
        prereq: "Improved Psychic Scream", 
        arrows: [{dir: "down", from: "c1", to: "d1" }], 
        description: talentText``, 
      },
      "Improved Mind Flay": {
        name: "Improved Mind Flay", 
        pos: "d2", 
        icon: icons["spell_shadow_siphonmana"], 
        maxRank: 3, 
        reqPoints: 15, 
        prereq: "Mind Flay", 
        arrows: [{dir: "down", from: "c2", to: "d2"}], 
        description: talentText``, 
      },
      "Darkness": {
        name: "Darkness", 
        pos: "d3", 
        icon: icons["spell_shadow_twilight"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText``, 
      },
      "Burnt Soul": {
        name: "Burnt Soul", 
        pos: "e1", 
        icon: icons["spell_shadow_shadowpower"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText``, 
      },
      "Vampiric Embrace": {
        name: "Vampiric Embrace", 
        pos: "e2", 
        icon: icons["spell_shadow_unsummonbuilding"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText``, 
      },
      "Blur": {
        name: "Blur", 
        pos: "e4", 
        icon: icons["ability_ambush"], 
        maxRank: 3, 
        reqPoints: 20, 
        prereq: "Improved Fade", 
        arrows: [{dir: "down", from: "c4", to: "e4" }], 
        description: talentText``, 
      },
      "Mind Overlord": {
        name: "Mind Overlord", 
        pos: "f1", 
        icon: icons["spell_nature_focusedmind"], 
        maxRank: 5, 
        reqPoints: 25, description: talentText``, 
      },
      "Improved Vampiric Embrace": {
        name: "Improved Vampiric Embrace", 
        pos: "f2", 
        icon: icons["spell_shadow_improvedvampiricembrace"], 
        maxRank: 2, 
        reqPoints: 25, 
        prereq: "Vampiric Embrace", 
        arrows: [{dir: "down", from: "e2", to: "f2" }], 
        description: talentText``, 
      },
      "Shadow Weaving": {
        name: "Shadow Weaving", 
        pos: "f3", 
        icon: icons["spell_shadow_blackplague"], 
        maxRank: 5, 
        reqPoints: 25, 
        prereq: "Darkness", 
        arrows: [{dir: "down", from: "d3", to: "f3" }], 
        description: talentText``, 
      },
      "Shadowform": {
        name: "Shadowform", 
        pos: "g2", 
        icon: icons["spell_shadow_shadowform"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText``, 
      },
    },
  },
};
