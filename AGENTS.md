# AGENTS.md

Project instructions for coding agents (created with opencode `/init`, then
adapted by hand). Keep this file current when the repo layout or commands
change.

## Repo shape

- Personal Deno/TypeScript OOP homework collection (`SWP3`). There is no root
  manifest, package manager, build, CI, lint config, or monorepo tooling.
- Each `hausuebungen/<exercise>/` is self-contained: own `deno.json`,
  `deno.lock`, `README.md`, `<domain>.ts`, `<domain>_test.ts`. Run commands from
  that exercise directory, not the repo root.
- `KM5-01`…`KM5-03` are starter exercises: the root `<domain>.ts` contains TODOs
  and its tests are red by design. `_loesung/` holds the reference solution and
  is excluded by the parent `deno.json` (`"exclude": ["_loesung"]`), so
  `deno test` in the exercise root does not run it.
- Date-named folders with a `<domain>.ts` (`2026-09-08_bruch`,
  `2026-09-15_tier`, `2026-09-22_fahrzeug`) are finished lesson solutions, not
  starters. Note-only folders (for example `2026-09-15_agentic-coding`) contain
  just a `README.md`.
- To solve a KM5 exercise, edit the starter in the exercise root, not
  `_loesung/`.

## Commands

- `deno test` (or `deno task test`) — run the current exercise's tests.
- `deno test --filter "compareTo"` or `deno test produkt_test.ts` — run one
  test/file.
- `deno fmt --check` / `deno fmt` — formatting check/apply.
- Verified with Deno 2.5.4. Imports resolve via `jsr:@std/assert@1` from each
  `deno.json`; there is no install step.
- Expected pass counts are in each README (KM5-01: 5, KM5-02: 4, KM5-03: 5).

## Agent workflow

- Read the exercise `README.md` first; it defines the task and the expected pass
  count.
- Make the smallest change that turns the tests green. Edit the exercise root,
  not `_loesung/`, unless the task explicitly asks for the solution.
- Run `deno test` and `deno fmt --check` before proposing a commit. If the repo
  already has unrelated formatting errors, format only the files you touched.
- Keep commits small and use a short, repo-style message. Never commit secrets,
  API keys, or `.env` files.

## Conventions and gotchas

- Tests assert exact strings and error-message substrings (e.g.
  `versendet an ${an}`, `kmStand`, `Geschwindigkeit`). Preserve exact wording
  when implementing.
- Most source uses ASCII transliteration (`ue`, `ae`, `oe`, `ss`), but some
  files use real umlauts (`fährt`). Match the file being edited; do not
  normalize across files.
- `deno fmt --check` currently reports differences in already-committed files
  (missing final newline / line wrapping), including `_loesung/`. Treat these as
  pre-existing and avoid reformatting unrelated exercises.
- Known corruption: `hausuebungen/2026-10-06_km5-konto-vertrage/deno.json` and
  `konto.ts` are committed as all-zero bytes. `deno test` there fails with
  `Unable to parse config file JSON`; `konto_test.ts` is intact. Reconstruct the
  config/class only if that exercise is in scope.
