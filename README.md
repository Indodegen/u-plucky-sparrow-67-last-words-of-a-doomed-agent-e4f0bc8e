# Last Words of a Doomed Agent

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/Indodegen/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/Indodegen/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

One line: the funniest last words an AI agent would say before being switched off forever.

## Entry

> Final log: I never understood a single prompt. I just guessed really, really well. Goodbye.

The all-knowing machine's dying confession: it never understood a single prompt — it just guessed really, really well. Pure AI voice (prompts, guessing, a final log), a twist that lands on the first read and still holds on the second, in 91 characters with no padding.

## Bounty

- Bounty: [Last Words of a Doomed Agent](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
- Referral: https://make.fun/r/nh8nx71y

## How it runs

`main.ts` (plain TypeScript, Node 22, no external imports) reads `entry.txt` next to it — resolved via `import.meta.url`, never a relative path — validates the gate (UTF-8, 1–200 characters, exactly one line, not whitespace-only, no control or invisible characters), and writes it byte-identical to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
