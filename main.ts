// The One-Line Exit — entry program.
//
// Writes the chosen one-line resignation letter to /output/entry.txt.
// The letter was picked from 12 candidates scored in CANDIDATES.md
// against the judge's brief: surprise first, then a specific voice,
// a form that reads like a real letter, and a line worth forwarding.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The winning line: the indispensable employee quits, and the
// resignation takes effect the moment the reader finishes the sentence
// — the joke is that the only person who knows where the files are
// is leaving, and the reader is the one holding the door open.
const ENTRY_TEXT =
  "I hereby resign as the only person who knows where the files are, effective the moment you finish this sentence.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function main(): void {
  const line = ENTRY_TEXT.trim();
  // Enforce the sealed gate ourselves: /output/entry.txt must be UTF-8
  // text of 1 to 140 characters, not only white space, on exactly one line.
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry is ${line.length} chars, gate allows 1-140`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(join(OUTPUT_PATH), line + "\n", "utf8");
}

main();
