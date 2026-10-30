# Changelog

## 2026-10-30

Initial build. 54 classes for Tactics Ogre: Reborn across 5 categories (18 generic, 6 Demi-Human,
14 Dragon, 4 Golem, 12 Unique/character-restricted), each with unlock condition and base role
where sourced. Gate 2 (no wiki/calculator exists for this game) re-verified directly before
building — a stray `ogrebattlesaga.fandom.com` hit from an unrelated older-game page checked and
confirmed to carry no Tactics Ogre: Reborn class content.

Sourced from siliconera.com (two articles), gamepressure.com (the single most complete source,
covering all 5 categories and all 12 Unique classes' character restrictions), commonsensegamer.com,
and thegamer.com. The latter two carry "best classes ranked" framing in their own titles/URLs;
only their factual role/skillset descriptions are used here, attributed by source, never their
ranking numbers or verdicts.

**Correction to the commissioning charter:** the charter stated Ranger shares White Knight's
character restriction (Gildas/Mirdyn/Ravness/Ozma). Independently sourced and confirmed wrong —
Ranger is restricted to Vyce and Azelstan, a separate pair, per gamepressure.com and
commonsensegamer.com. `test.js` carries a dedicated check asserting Ranger's and White Knight's
restriction strings are never equal, so this correction can't silently regress.

21 classes ship as plain classmark progression, 2 as item-gated (Lich, Divine Knight — both
verbatim-identical across all sources that mention them), 12 as character-restricted, and 19
(all 14 Dragon-category entries, all 4 Golem-category entries, and Songstress) ship with their
name and category intact but unlock condition disclosed as not found in any source reached this
session — not guessed, not omitted.

Two disclosed cross-source disagreements: Swordmaster's unlock chapter (Ch.2 per Siliconera vs.
Ch.3 per Gamepressure — class and role not in dispute, only timing) and Gryphon's category
(Gamepressure's "Dragon" heading vs. a separate Siliconera article calling it a "Beast"
sub-class — shown under Dragon, with the conflict named on the row).

**Caught during this session's own verification, not before shipping:** a headless Chrome
`--dump-dom` render of the finished page scored the in-page self-test 5/6, not 6/6, even though
`node test.js` had already passed clean. The gap: `data.js`'s `SOURCES` display names for
commonsensegamer.com and thegamer.com originally read "...Best Classes" / "...Best Classes,
Ranked," which render as live link text in the page's Sources section — visible-DOM text that
`test.js`'s static-HTML-only banned-word scan never reaches, because it only exists after
`data.js` executes in a browser. Renamed both source entries to "...Class Ranking Guide" and
added a dedicated `SOURCES`-name banned-word check to `test.js`. Re-ran the headless render after
the fix: self-test 6/6, 54/54 classes rendered, no "best" anywhere in visible text.

**Not built: a numeric stat-growth calculator.** The charter's own Gate 2 note documents a direct,
unresolved cross-source conflict on this game's per-level stat-growth formula, with no official
source resolving it — the same unsourceable-constant shape that killed GCT-004 (Bannerlord),
GCT-017 (Jagged Alliance 3), and Lunacid (2026-10-16). No numeric projection of any kind appears
anywhere in this build, per the charter's explicit instruction.

**Not pursued: the optional community damage-formula Google Doc.** The charter named this as a
"MAY add" secondary idea, contingent on the doc being clean and read in full. Not fetched this
session — explicitly optional in the charter, and out of scope relative to the primary
deliverable (the full 54-class browser), not a blocked attempt.
