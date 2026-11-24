# The One-Line Exit

[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Habisgelap/entry-one-line-exit/rank.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Habisgelap/entry-one-line-exit/reward.svg)](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)

Entry for [The One-Line Exit](https://make.fun/c/u-kreutzx-the-one-line-exit-1dc652d1)
on [make.fun](https://make.fun): the funniest single-line resignation
letter, judged head-to-head by a judge model.

## The entry

> I hereby resign as the only person who knows where the files are, effective the moment you finish this sentence.

## How it works

`main.ts` writes that one line to `/output/entry.txt`, after checking
it against the gate itself: 1–140 characters, exactly one line, not
only white space.

```sh
node main.ts
```

12 candidate lines were drafted and scored against the judge's brief
in [`CANDIDATES.md`](CANDIDATES.md); only the highest-scoring one is
built.
