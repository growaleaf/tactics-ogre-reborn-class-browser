// Tactics Ogre: Reborn — Class & Unlock Browser data.
//
// Every class below was read directly from at least one named source. "confirmed" means 2+
// independently-read sources agree on the unlock condition (character list, item, or chapter
// gate). "single-source" means only one source gave the detail — disclosed, not hidden. Classes
// with no sourced unlock mechanism at all (most of the Dragon and Golem categories) ship with
// unlockType "unsourced" and an honest unlockText rather than a guess.
//
// IMPORTANT CORRECTION TO THE ORCHESTRATOR'S OWN CHARTER: the charter's Gate-2 note said "Ranger/
// White Knight restricted to named characters Gildas/Mirdyn/Ravness/Ozma." Independent sourcing in
// this session (gamepressure.com, commonsensegamer.com, and a separate web-search-confirmed guide)
// shows this is only true for White Knight. Ranger is restricted to Vyce and Azelstan — a
// different, non-overlapping character pair. Shipped correctly below; see README.md/CHANGELOG.md
// for the full citation trail.
//
// Stat-growth / per-level numeric projections are deliberately NOT included anywhere in this file.
// The charter names a direct, unresolved cross-source conflict on Tactics Ogre: Reborn's per-level
// stat formula (no official source resolves it) — the same unsourceable-constant shape that killed
// GCT-004 (Bannerlord), GCT-017 (Jagged Alliance 3), and Lunacid (2026-10-16). This file documents
// roster, unlock conditions, and base role/skillset text only.

(function (root) {
  "use strict";

  var SOURCES = [
    { name: "Siliconera — Guide: List of Available Classes in Tactics Ogre: Reborn", url: "https://www.siliconera.com/guide-list-of-available-classes-in-tactics-ogre-reborn/" },
    { name: "Siliconera — Tactics Ogre: Reborn Class List", url: "https://siliconera.com/?p=939692" },
    { name: "Gamepressure — Tactics Ogre: Reborn Class Guide; All Classes", url: "https://www.gamepressure.com/newsroom/tactics-ogre-reborn-class-guide-all-classes/za4cab" },
    { name: "Common Sense Gamer — Tactics Ogre: Reborn Class Ranking Guide", url: "https://commonsensegamer.com/tactics-ogre-reborn-best-classes/" },
    { name: "TheGamer — Tactics Ogre: Reborn Class Ranking Guide", url: "https://www.thegamer.com/tactics-ogre-reborn-best-classes-ranked/" }
  ];
  var FETCHED = "2026-10-30";

  function c(fields) {
    return {
      name: fields[0],
      category: fields[1],          // "generic" | "demihuman" | "dragon" | "golem" | "unique"
      restriction: fields[2] || "", // race note or character list, as text
      unlockType: fields[3],        // "progression" | "item" | "character" | "unsourced"
      unlockText: fields[4] || "",
      role: fields[5] || "",
      status: fields[6],            // "confirmed" | "single-source"
      note: fields[7] || ""
    };
  }

  var CLASSES = [
    // ───────────────────────────── generic (18) — confirmed via Siliconera + Gamepressure
    c(["Warrior", "generic", "", "progression", "Classmark, 250 Goth. Available from Chapter 1.", "", "confirmed"]),
    c(["Archer", "generic", "", "progression", "Classmark, 250 Goth. Available from Chapter 1.", "Strong ranged class on large maps; agile.", "confirmed"]),
    c(["Cleric", "generic", "", "progression", "Classmark, 250 Goth. Available from Chapter 1.", "Core healing support, though healing items reduce how essential it feels.", "confirmed"]),
    c(["Wizard/Enchantress", "generic", "", "progression", "Classmark, 250 Goth. Available from Chapter 1.", "", "confirmed"]),
    c(["Rune Fencer/Valkyrie", "generic", "", "progression", "Classmark, 250 Goth. Available from Chapter 1.", "One of the most versatile early-game classes: healing support, solid damage and movement, magic/elemental damage; can equip swords, crossbows, and spears.", "confirmed", "Rune Fencer and Valkyrie are the male/female name variant of one class, the same pairing convention as Wizard/Enchantress and Warlock/Witch below."]),
    c(["Berserker", "generic", "", "progression", "Classmark, 250 Goth, after clearing Xeod Moors in Chapter 2.", "", "confirmed"]),
    c(["Beast Tamer", "generic", "Human, Winged, Fearie", "progression", "Classmark, 500 Goth, after clearing Xeod Moors in Chapter 2.", "Recruits and trains beasts and dragons; flying units matter on maps where enemies hold higher ground.", "confirmed"]),
    c(["Terror Knight", "generic", "", "progression", "Classmark, 250 Goth, after clearing Xeod Moors in Chapter 2.", "", "confirmed"]),
    c(["Knight", "generic", "", "progression", "Classmark, 250 Goth, after clearing Xeod Moors in Chapter 2.", "Described in one source as \"a hardy lot.\"", "confirmed"]),
    c(["Swordmaster", "generic", "", "progression", "Classmark, 500 Goth. Siliconera lists it available from Chapter 2; Gamepressure says it unlocks after completing several battles in Chapter 3. Shown as both — genuine cross-source disagreement on timing, not on the class itself.", "Flashy two-handed katana-wielder that can also support the squad: Lion Dance (ally buffs), Shriving Dance (removes debuffs), Bellows Dance (defense boost); Preempt is passive, countering physical attacks reliably.", "confirmed", "Chapter timing disputed between sources (see unlockText); class existence and role are not."]),
    c(["Dragoon", "generic", "", "progression", "Classmark, 500 Goth, after completing several battles in Chapter 3.", "Tank with high defense and high HP.", "confirmed"]),
    c(["Ninja/Kunoichi", "generic", "", "progression", "Classmark, 500 Goth. Siliconera: Chapter 2 on the Neutral/Chaos routes, Chapter 3 on the Law route. Gamepressure: Chapter 3, after completing several battles (consistent with the Law-route reading).", "Can attack twice; Steelstance offsets its fragility; Ninjutsu brings area-of-effect spells and buffs (Nimble, Waterwalk, Nullify), plus Stun-Bringer and Envenom. Versatile with daggers, katanas, or bows.", "confirmed"]),
    c(["Rogue", "generic", "", "progression", "Classmark, 250 Goth. Available from Chapter 4.", "", "confirmed"]),
    c(["Fusilier", "generic", "", "progression", "Classmark, purchasable after recruiting Lindl in Chapter 4.", "", "confirmed"]),
    c(["Warlock/Witch", "generic", "", "progression", "Classmark, available from Chapter 4; also drops from enemy Warlocks and Witches.", "", "confirmed"]),
    c(["Necromancer", "generic", "", "progression", "Classmark, available from Chapter 4; also possible after recruiting Cressida.", "", "confirmed"]),
    c(["Lich", "generic", "", "item", "Use the Ring of the Dead on Floor 41 of the Palace of the Dead — transforms a Human unit into a Lich. The Ring of the Dead is obtained by defeating enemies on that floor.", "", "confirmed"]),
    c(["Divine Knight", "generic", "", "item", "Use the \"Ensanguined Rood\" item on an ally Skeleton or Ghost unit on Floor 3 of San Bronsa Ruins — converts it into a Divine Knight. The Ensanguined Rood can drop from opponents there.", "", "confirmed"]),

    // ───────────────────────────── demi-human (6) — confirmed via Gamepressure, race-gated classmarks
    c(["Vartan", "demihuman", "Winged", "progression", "Classmark dropped by enemy Winged units.", "Versatile: shortbows/crossbows in one hand, a sturdy axe in the other, for both ranged and melee damage; missile-style spells including Deadshot II; can fly.", "confirmed"]),
    c(["Songstress", "demihuman", "Pumpkinheads/Luria", "unsourced", "No unlock method given beyond the race note. (Gamepressure's own page renders the name as \"Sogngstress\" — almost certainly a source-side typo; shown here as the standard English name.)", "", "single-source"]),
    c(["Hoplite", "demihuman", "Lizardman, Lamia, Orc", "progression", "Classmark dropped by matching enemies.", "", "confirmed"]),
    c(["Juggernaut", "demihuman", "Lizardman, Lamia, Orc", "progression", "Classmark dropped by matching enemies.", "", "confirmed"]),
    c(["Patriarch/Matriarch", "demihuman", "Lizardman, Lamia, Orc", "progression", "Classmark dropped by matching enemies.", "", "confirmed"]),
    c(["Familiar", "demihuman", "Fearie, Gremlin", "progression", "Classmark dropped by enemy Familiars.", "", "confirmed"]),

    // ───────────────────────────── dragon (14) — names confirmed, no unlock mechanism sourced
    c(["Cloud Dragon", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Earth Dragon", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Thunder Dragon", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Flood Dragon", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Frame Dragon", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Frost Dragon", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Arc Dragon", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Dark Dragon", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Hydra", "dragon", "", "unsourced", "No unlock, cost, or race detail given beyond appearing in this category.", "", "single-source"]),
    c(["Beast", "dragon", "", "unsourced", "Listed under the source's \"Dragon\" heading alongside the named dragon types, not as its own category. No unlock detail given.", "", "single-source"]),
    c(["Cyclops", "dragon", "", "unsourced", "Listed under the source's \"Dragon\" heading. No unlock detail given.", "", "single-source"]),
    c(["Cockatrice", "dragon", "", "unsourced", "Listed under the source's \"Dragon\" heading. No unlock detail given.", "", "single-source"]),
    c(["Gryphon", "dragon", "", "unsourced", "Listed under the source's \"Dragon\" heading. No unlock detail given. A separate Siliconera article instead calls Gryphon a \"Beast\" sub-class — the two sources disagree on which category this belongs to, not just on unlock detail.", "", "single-source", "Category itself is disputed between sources; shown under \"Dragon\" per the source with the fuller class list."]),
    c(["Octopus", "dragon", "", "unsourced", "Listed under the source's \"Dragon\" heading. No unlock detail given.", "", "single-source"]),

    // ───────────────────────────── golem (4) — names confirmed, no unlock mechanism sourced
    c(["Clay Golem", "golem", "", "unsourced", "No unlock, cost, or role detail given beyond appearing in this category.", "", "single-source"]),
    c(["Stone Golem", "golem", "", "unsourced", "No unlock, cost, or role detail given beyond appearing in this category.", "", "single-source"]),
    c(["Iron Golem", "golem", "", "unsourced", "No unlock, cost, or role detail given beyond appearing in this category.", "", "single-source"]),
    c(["Baldur Golem", "golem", "", "unsourced", "No unlock, cost, or role detail given beyond appearing in this category.", "", "single-source"]),

    // ───────────────────────────── unique / character-restricted (12)
    c(["Lord", "unique", "Denam", "character", "Exclusive to Denam.", "The most versatile late-game class; inherits the skills of Denam's earlier classes (Knight, Rune Fencer, Ninja, Warrior). Very high endurance and high damage — a tank that can also deal damage.", "confirmed"]),
    c(["Princess", "unique", "Catiua", "character", "Exclusive to Catiua — one of three mutually exclusive classes she can end up with (with Priest and Dark Priest), depending on in-game choices.", "Combines Cleric-style utility with high damage output, decent defense, sword-wielding, and elemental magic.", "confirmed"]),
    c(["Priest", "unique", "Catiua", "character", "Exclusive to Catiua — one of three mutually exclusive classes she can end up with (with Princess and Dark Priest).", "", "confirmed"]),
    c(["Dark Priest", "unique", "Catiua", "character", "Exclusive to Catiua — one of three mutually exclusive classes she can end up with (with Princess and Priest).", "", "confirmed"]),
    c(["Ranger", "unique", "Vyce, Azelstan", "character", "Exclusive to Vyce and Azelstan.", "Main asset is rapid movement combined with the ability to double-attack; pairing it with the Dirk weapon can silence enemy casters.", "confirmed", "CORRECTION to the orchestrator's charter, which named this class's restriction as Gildas/Mirdyn/Ravness/Ozma — that list is actually White Knight's. Ranger's own restriction (Vyce/Azelstan) is confirmed independently by gamepressure.com and commonsensegamer.com."]),
    c(["Shaman", "unique", "Cerya, Cistina, Sherii, Olivya, Luria, Deneb", "character", "Exclusive to the six named characters.", "", "single-source", "Sherii's membership in this list is independently corroborated by commonsensegamer.com's Sherii recruitment guide; the remaining five names are sourced to gamepressure.com alone."]),
    c(["Wicce", "unique", "Deneb", "character", "Exclusive to Deneb; recruiting her without meeting the class's conditions yields a plain Witch instead.", "Entirely a souped-up Witch (and by extension a souped-up Enchantress).", "confirmed"]),
    c(["White Knight", "unique", "Gildas, Mirdyn, Ravness, Ozma", "character", "Exclusive to the four named characters.", "A souped-up Knight: faster, with a better overall skill arsenal including Paralysis Blade (Stun-Bringer) and Velocity Shift, and access to supportive white magic — but lacks Phalanx, making it more fragile than a Knight.", "confirmed"]),
    c(["Buccaneer", "unique", "Azelstan, Canopus, Denam, Vyce", "character", "Exclusive to the four named characters.", "", "single-source"]),
    c(["Knight Commander", "unique", "Ozma", "character", "Exclusive to Ozma.", "Combines rapid attacks and movement with the Double Attack skill; most of the Lord's versatility with even greater burst potential.", "confirmed"]),
    c(["Paladin", "unique", "Lanselot", "character", "Exclusive to Lanselot.", "", "single-source"]),
    c(["Astromancer", "unique", "Warren", "character", "Exclusive to Warren.", "", "single-source"])
  ];

  var api = {
    SOURCES: SOURCES,
    FETCHED: FETCHED,
    CLASSES: CLASSES
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.TOR_CLASS_DATA = api;
  }
})(typeof window !== "undefined" ? window : this);
