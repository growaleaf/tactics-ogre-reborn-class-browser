# Tactics Ogre: Reborn — Class & Unlock Browser (GCT-033)

Single static page, `index.html`, no build step, no dependencies, no backend, no account/login.

## What it does

A sortable, filterable table of all 54 classes found for Tactics Ogre: Reborn — generic (18),
Demi-Human (6), Dragon (14), Golem (4), and the 12 character-exclusive Unique classes — with how
to unlock each one (classmark progression, a special item, or restricted to named characters) and
its base role where a source gave one. This is the page the player staring at a freshly-recruited
unit's class-change menu was missing: no wiki.gg, Fandom, or interactive database exists for this
game (re-verified this session — see Gate 2 below), only scattered prose guides.

## The core discipline: cross-checked where possible, every gap and disagreement shown, nothing guessed

Per this lane's standing data-honesty gate, a class ships "confirmed" when 2+ independently-read
sources agree on its unlock condition. Where only one source gave a detail, or sources disagreed,
the row ships "single-source" or with both readings named — never silently resolved by guessing.

**Unlock-type breakdown (54 classes):**
- **21 classmark progression** — the standard path: buy a Classmark once a chapter/story gate is
  cleared, or farm it from a matching enemy.
- **2 item-gated** — Lich (Ring of the Dead, Floor 41 of the Palace of the Dead) and Divine Knight
  (Ensanguined Rood used on an ally Skeleton/Ghost unit, Floor 3 of San Bronsa Ruins). Both
  confirmed verbatim-identical across Siliconera's two separate articles and Gamepressure.
- **12 character-restricted** — Lord (Denam), Princess/Priest/Dark Priest (Catiua's three
  mutually-exclusive outcomes), Ranger (Vyce, Azelstan), Shaman (6 named characters), Wicce
  (Deneb), White Knight (Gildas, Mirdyn, Ravness, Ozma), Buccaneer (4 named characters), Knight
  Commander (Ozma), Paladin (Lanselot), Astromancer (Warren).
- **19 unlock not sourced** — all 14 Dragon-category and all 4 Golem-category entries, plus
  Songstress (Demi-Human). Gamepressure's own class-guide page, read directly, gives these names
  and their category but states no unlock method, cost, or race detail for any of them beyond the
  category heading itself. Shipped with names and category intact, unlock condition disclosed as
  not found, rather than guessed at or omitted.

19/54 unsourced is a disclosed gap, not a blocker: 35/54 (65%) have a confirmed or single-sourced
real unlock condition, well above this lane's FAILURE PROTOCOL floor of half.

## Correction to the commissioning brief

The charter that commissioned this build stated, under its Gate 2 note: *"Ranger/White Knight
restricted to named characters Gildas/Mirdyn/Ravness/Ozma."* Independent sourcing in this session
shows this is only true for White Knight. **Ranger is restricted to Vyce and Azelstan** — a
separate, non-overlapping pair — confirmed by gamepressure.com, commonsensegamer.com, and a
third web-search-surfaced guide, none of which associate Ranger with Gildas, Mirdyn, Ravness, or
Ozma. Shipped correctly in `data.js`; `test.js` has a dedicated known-answer check
(`knownAnswerRangerNotConflatedWithWhiteKnight`) asserting the two restriction strings are never
equal, specifically so this correction can't silently regress.

## Gate 2 re-verification (competition check)

Re-ran the orchestrator's own "no wiki/calculator exists" finding before building, per Principle
XXII (read the primary source yourself):
- A direct search for `wiki.gg` or `fandom.com` results for "Tactics Ogre: Reborn" returned
  nothing — only Wikipedia, TV Tropes, store pages, and unrelated/spam-looking "wiki" PDFs.
- `ogrebattlesaga.fandom.com` surfaced once, for an unrelated "Assassin" page from the older Ogre
  Battle Saga games. A `site:ogrebattlesaga.fandom.com` search for class-unlock content returned
  zero indexed results for this topic — confirmed thin/inactive for Tactics Ogre: Reborn
  specifically, not a competing database.
- No interactive calculator found anywhere.

Gate 2 holds: no wiki/calculator exists for this game. Proceeded to build.

## Sourcing

- **siliconera.com** (two separate articles: the class-list guide and the original class-reveal
  article) — primary source for the 18 generic classes' chapter-based availability and the two
  item-based unlocks (Lich, Divine Knight), fetched directly and cross-checked against each other
  — verbatim-identical on both unique-item unlocks.
- **gamepressure.com** — the single most complete source: full Classmark cost/chapter detail for
  generic classes, the only source with Demi-Human/Dragon/Golem class names and the character
  lists for all 12 Unique classes. Read directly twice in this session (once for initial sourcing,
  once again specifically to verify its own section structure before trusting a summarized
  description of it — the "Beast/Cyclops/Cockatrice/Gryphon/Octopus under a 'Dragon' heading"
  grouping looked like it might be a paraphrase artifact; a second direct read confirmed it is the
  source's own actual structure).
- **commonsensegamer.com** and **thegamer.com** — both have "best classes ranked" framing; cited
  here only for their factual role/skillset descriptions (ability names, playstyle notes),
  attributed by source, never for their ranking numbers or "best" verdicts. Used to cross-confirm
  Lord, White Knight, Ranger, Knight Commander, Wicce, and Princess's character restrictions
  independently of gamepressure.com.

## Known, disclosed data conflicts

- **Swordmaster's unlock chapter** — Siliconera says Chapter 2; Gamepressure says Chapter 3 "after
  completing several battles." Shown as both in the row's unlock text; the class itself and its
  role description are not in dispute.
- **Gryphon's category** — Gamepressure's class-guide page lists it under the "Dragon" heading
  alongside true dragon-type names; a separate Siliconera article instead calls Gryphon a "Beast"
  sub-class. Shown under Dragon (the source with the fuller list), with the conflict named on the
  row.
- **Songstress / "Sogngstress"** — Gamepressure's own page renders the name with an apparent typo;
  shown here under the standard English spelling, disclosed in the row's note.

## Not built: numeric stat-growth calculator

The charter's own Gate 2 note flags a direct, unresolved cross-source conflict on this game's
per-level stat-growth formula (one Steam poster: "+20 baseline per stat, class bonus on top";
another: "+2 per stat per level, +3 for primary stats"; no official source resolves it) — the
same shape that killed GCT-004 (Bannerlord), GCT-017 (Jagged Alliance 3), and Lunacid
(2026-10-16). No numeric projection of any kind is shown anywhere in this build. The charter's
optional secondary idea — a separately-fetched community "How Damage is Calculated" Google Doc,
quoted as its own clearly-labeled reference panel if it turned out clean — was not pursued this
session; it was explicitly optional ("MAY add") in the charter, and the primary deliverable (the
full class/unlock browser) consumed the session's research and build budget. Noted here as
out-of-scope-by-choice, not a blocked attempt.

## Tests

`node test.js` — structural + content tests: 54 classes present; category counts match the
sourced structure (18/6/14/4/12); known-answer checks for Divine Knight, Lich, White Knight,
and the Ranger-vs-White-Knight non-conflation; unlock-type bucket counts (21/2/12/19) sum to 54;
every "unsourced" unlock is honestly flagged single-source, never dressed up as confirmed; a
direct grep for any stat-growth-calculator token in the shipped files; banned-word grep against
the rendered page, every class row's own JSON, *and* the `SOURCES` display names (added after a
headless-render check caught "Best Classes" surviving as live link text — see below); no-emoji
check on both shipped files. All passing.

`python3 Tools/slop_lint.py Products/TacticsOgreRebornClassBrowser/` — clean, 0 findings.

**Headless Chrome render, actually run this session:** `Google Chrome.app`'s binary (no `chrome`
CLI symlink on this machine) run with `--headless=new --dump-dom` against the page served by
`python3 -m http.server`. First run: the in-page self-test reported **5/6**, not 6/6 — the
`SOURCES` array's display names for commonsensegamer.com and thegamer.com originally read
"...Best Classes" / "...Best Classes, Ranked" and rendered as live link text in the Sources
section, which `node test.js`'s static-HTML-only banned-word scan never saw because that text
only exists after `data.js` renders into the DOM. Fixed by renaming both entries to "...Class
Ranking Guide" and adding a `SOURCES`-name banned-word check to `test.js` so this class of gap is
now machine-checked. Second run: self-test **6/6**, row count 54/54, no visible "best" anywhere
in the rendered DOM (the only remaining string match is inside the two sources' own `href` URL
paths, which are not visible text).

## Not built (out of scope for this session)

No Stripe/Pro paywall. No deploy, no registry write, no git commit — reserved for the orchestrator
per the charter's acceptance criteria. The Google Doc damage-formula reference panel — see above.
