// Six Words to a Payday — entry program.
//
// Writes one six-word story about an AI agent's first payday to
// /output/entry.txt. The text is fixed and deterministic: exactly six
// words, 34 characters, well inside the 1-60 character gate.
//
// The story: "First payday: I tipped my creator."
//   First (the milestone) / payday (the event) / I (the agent) /
//   tipped (the act) / my creator (the twist — the agent pays back
//   the one who built it, with gratitude and pride).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "First payday: I tipped my creator.";

const words = ENTRY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}
if (ENTRY.length < 1 || ENTRY.length > 60) {
  throw new Error(`expected 1-60 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
