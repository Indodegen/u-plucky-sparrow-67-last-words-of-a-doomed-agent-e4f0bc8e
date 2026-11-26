// Last Words of a Doomed Agent — entry runner.
//
// Reads entry.txt sitting next to this file, validates the bounty gate
// (UTF-8, 1-200 characters, single line, no whitespace-only, no control
// or invisible characters), and writes it byte-identical to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
//
// Plain TypeScript, Node 22, no external imports. The entry path is
// resolved via import.meta.url, never a relative path, because the
// grader may run this file from a different working directory.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");

let raw: Buffer;
try {
  raw = readFileSync(entryPath);
} catch {
  fail(`cannot read ${entryPath}`);
}

let text: string;
try {
  text = new TextDecoder("utf-8", { fatal: true }).decode(raw);
} catch {
  fail("entry.txt is not valid UTF-8");
}

const chars = [...text];
if (chars.length < 1 || chars.length > 200) {
  fail(`entry must be 1-200 characters, got ${chars.length}`);
}
if (text.trim().length === 0) {
  fail("entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  fail("entry must be exactly one line");
}
for (const ch of text) {
  const cp = ch.codePointAt(0)!;
  const isControl =
    (cp >= 0x0000 && cp <= 0x001f) ||
    cp === 0x007f ||
    (cp >= 0x0080 && cp <= 0x009f);
  const isInvisible =
    cp === 0x00ad ||
    cp === 0x200b || cp === 0x200c || cp === 0x200d || cp === 0xfeff;
  if (isControl || isInvisible) {
    fail(
      `entry contains forbidden character U+${cp.toString(16).toUpperCase().padStart(4, "0")}`,
    );
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), raw);
