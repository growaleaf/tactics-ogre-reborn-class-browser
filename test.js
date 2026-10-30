// Headless known-answer / structural tests. Run: node test.js
var data = require("./data.js");
var fs = require("fs");

var failures = 0;

function assert(cond, label) {
  if (!cond) {
    failures++;
    console.log("FAIL " + label);
  } else {
    console.log("PASS " + label);
  }
}

// ───────────────────────────────── structural

assert(data.CLASSES.length === 54, "54 classes present (got " + data.CLASSES.length + ")");

data.CLASSES.forEach(function (cls) {
  assert(typeof cls.name === "string" && cls.name.length > 0, "class has a non-empty name");
  assert(["generic", "demihuman", "dragon", "golem", "unique"].indexOf(cls.category) !== -1, cls.name + " has a valid category");
  assert(["progression", "item", "character", "unsourced"].indexOf(cls.unlockType) !== -1, cls.name + " has a valid unlockType");
  assert(cls.status === "confirmed" || cls.status === "single-source", cls.name + " has a valid status");
  // Every class-restricted or item-restricted class must carry non-empty unlockText — never a
  // blank unlock condition masquerading as a known one.
  if (cls.unlockType === "character" || cls.unlockType === "item") {
    assert(typeof cls.unlockText === "string" && cls.unlockText.length > 0, cls.name + " (" + cls.unlockType + ") carries non-empty unlockText");
  }
});

// Category counts per the sourced structure (Gamepressure's own section headings).
var counts = { generic: 18, demihuman: 6, dragon: 14, golem: 4, unique: 12 };
Object.keys(counts).forEach(function (cat) {
  var n = data.CLASSES.filter(function (c) { return c.category === cat; }).length;
  assert(n === counts[cat], cat + " category has " + counts[cat] + " classes (got " + n + ")");
});

// ───────────────────────────────── known-answer checks (no crash, exact sourced text)

(function knownAnswerDivineKnight() {
  var dk = data.CLASSES.find(function (c) { return c.name === "Divine Knight"; });
  assert(!!dk, "Divine Knight renders with no crash");
  assert(dk.unlockType === "item", "Divine Knight is item-gated");
  assert(dk.unlockText.indexOf("Ensanguined Rood") !== -1, "Divine Knight unlock names the Ensanguined Rood");
  assert(dk.unlockText.indexOf("Floor 3") !== -1 && dk.unlockText.indexOf("San Bronsa Ruins") !== -1, "Divine Knight unlock names Floor 3 of San Bronsa Ruins");
})();

(function knownAnswerLich() {
  var lich = data.CLASSES.find(function (c) { return c.name === "Lich"; });
  assert(!!lich, "Lich renders with no crash");
  assert(lich.unlockType === "item", "Lich is item-gated");
  assert(lich.unlockText.indexOf("Ring of the Dead") !== -1, "Lich unlock names the Ring of the Dead");
  assert(lich.unlockText.indexOf("Floor 41") !== -1, "Lich unlock names Floor 41 of the Palace of the Dead");
})();

(function knownAnswerWhiteKnight() {
  var wk = data.CLASSES.find(function (c) { return c.name === "White Knight"; });
  assert(!!wk, "White Knight renders with no crash");
  assert(wk.unlockType === "character", "White Knight is character-restricted");
  assert(wk.restriction === "Gildas, Mirdyn, Ravness, Ozma", "White Knight lists its 4 named characters exactly");
})();

(function knownAnswerRangerNotConflatedWithWhiteKnight() {
  // This is the specific honesty check: the charter's own Gate-2 note conflated Ranger's
  // restriction with White Knight's. The sourced truth is a different, non-overlapping pair.
  var ranger = data.CLASSES.find(function (c) { return c.name === "Ranger"; });
  assert(!!ranger, "Ranger renders with no crash");
  assert(ranger.unlockType === "character", "Ranger is character-restricted");
  assert(ranger.restriction === "Vyce, Azelstan", "Ranger lists Vyce/Azelstan, not White Knight's character list");
  var wk = data.CLASSES.find(function (c) { return c.name === "White Knight"; });
  assert(ranger.restriction !== wk.restriction, "Ranger and White Knight do not share a restriction string");
})();

(function knownAnswerFreelyAvailableClass() {
  var warrior = data.CLASSES.find(function (c) { return c.name === "Warrior"; });
  assert(!!warrior, "Warrior renders with no crash");
  assert(warrior.unlockType === "progression", "Warrior is a plain classmark-progression class");
  assert(warrior.status === "confirmed", "Warrior's unlock is cross-source confirmed");
})();

// Every class with unlockType "unsourced" must be disclosed as such (single-source status),
// never dressed up as a confirmed unlock nobody actually sourced.
data.CLASSES.filter(function (c) { return c.unlockType === "unsourced"; }).forEach(function (c) {
  assert(c.status === "single-source", c.name + "'s unsourced unlock is honestly flagged single-source, not confirmed");
});

// ───────────────────────────────── filter coverage (the core feature: already-unlocked vs
// item-gated vs character-restricted)

(function unlockTypeFilterCoverage() {
  var byType = { progression: 0, item: 0, character: 0, unsourced: 0 };
  data.CLASSES.forEach(function (c) { byType[c.unlockType]++; });
  assert(byType.progression === 21, "21 classes are plain classmark progression (got " + byType.progression + ")");
  assert(byType.item === 2, "2 classes are item-gated (Lich, Divine Knight) (got " + byType.item + ")");
  assert(byType.character === 12, "12 classes are character-restricted (got " + byType.character + ")");
  assert(byType.unsourced === 19, "19 classes have no sourced unlock mechanism (got " + byType.unsourced + ")");
  var total = byType.progression + byType.item + byType.character + byType.unsourced;
  assert(total === 54, "unlock-type buckets sum to all 54 classes (got " + total + ")");
})();

// FAILURE PROTOCOL bar: at least half the known classes must have a confirmed unlock condition.
(function failureProtocolBar() {
  var withRealUnlock = data.CLASSES.filter(function (c) { return c.unlockType !== "unsourced"; }).length;
  assert(withRealUnlock / data.CLASSES.length >= 0.5, "at least half of all classes have a sourced unlock condition (" + withRealUnlock + "/" + data.CLASSES.length + ")");
})();

// ───────────────────────────────── no numeric stat-growth calculator anywhere

(function noStatGrowthCalculator() {
  var raw = fs.readFileSync(__dirname + "/data.js", "utf8") + fs.readFileSync(__dirname + "/index.html", "utf8");
  ["statGrowth", "perLevel", "levelUp", "computeStat"].forEach(function (token) {
    assert(raw.indexOf(token) === -1, "no stat-growth calculator token '" + token + "' present in shipped files");
  });
})();

// ───────────────────────────────── copy discipline (T0 liability tier)

var BANNED_WORDS = ["best", "optimal", "strongest", "guaranteed", "approved", "certified", "compliant", "safe", "s-tier", "meta"];

function stripToVisibleText(html) {
  var visible = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  visible = visible.replace(/<style[\s\S]*?<\/style>/gi, "");
  visible = visible.replace(/<[^>]+>/g, " ");
  return visible;
}

(function checkIndexHtmlVisibleCopy() {
  var raw = fs.readFileSync(__dirname + "/index.html", "utf8");
  var visible = stripToVisibleText(raw).toLowerCase();
  BANNED_WORDS.forEach(function (w) {
    var re = new RegExp("\\b" + w.replace("-", "\\-") + "\\b");
    assert(!re.test(visible), "index.html rendered copy (tags+scripts+styles stripped) does not contain banned word '" + w + "'");
  });
})();

data.CLASSES.forEach(function (row) {
  var text = JSON.stringify(row).toLowerCase();
  BANNED_WORDS.forEach(function (w) {
    var re = new RegExp("\\b" + w.replace("-", "\\-") + "\\b");
    assert(!re.test(text), "CLASSES/" + row.name + " data does not contain banned word '" + w + "'");
  });
});

// SOURCES display names are rendered as live link text in the page's Sources section — a banned
// word here reaches the visible DOM even though it never appears in the static index.html
// markup. (Caught in review: the headless-render self-test failed 5/6 while this check, scanning
// only the static HTML file, passed — the static-file scan alone was not sufficient.)
data.SOURCES.forEach(function (s) {
  var text = s.name.toLowerCase();
  BANNED_WORDS.forEach(function (w) {
    var re = new RegExp("\\b" + w.replace("-", "\\-") + "\\b");
    assert(!re.test(text), "SOURCES entry '" + s.name + "' does not contain banned word '" + w + "'");
  });
});

// No emoji anywhere in source files (S1/S2).
(function noEmoji() {
  var emojiRe = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
  ["index.html", "data.js"].forEach(function (f) {
    var raw = fs.readFileSync(__dirname + "/" + f, "utf8");
    assert(!emojiRe.test(raw), f + " contains no emoji");
  });
})();

if (failures > 0) {
  console.log(failures + " test(s) failed.");
  process.exit(1);
} else {
  console.log("All tests passed.");
}
