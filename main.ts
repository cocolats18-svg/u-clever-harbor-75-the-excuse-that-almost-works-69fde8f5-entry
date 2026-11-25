// The Excuse That Almost Works — make.fun bounty
// u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
//
// Writes one line — the excuse a gamer texts the boss to skip work
// on GTA 6 launch week — to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic: same bytes every run.
// Gate: 1–140 chars, at most 20 words, one line, plain text.
// Verified: 93 chars, 17 words, sha256
// 6f5f2c1666ba061b39a247b78679468fb489e1c9dd914ef0a372cc17b900c5e0.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "My boiler died overnight and the plumber can only come today, I'll be offline till he leaves.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
