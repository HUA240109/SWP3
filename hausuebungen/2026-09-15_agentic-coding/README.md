# HUE 2026-09-15 - Agentic Coding mit opencode

Nachweis fuer die X-Gruppe (HUE aus der UE
`2026-09-15_agentic-coding-einstieg`).

## Checkpoints

- **opencode installiert:** `opencode --version` gibt `1.19.3` aus.
- **Freier Provider verbunden:** `opencode models` listet die freien Modelle, u.
  a. `opencode/big-pickle`; die Session lief mit diesem Modell.
- **`/init` im eigenen Repo:** erzeugte `AGENTS.md` im Repo-Root. Die Datei
  wurde danach gelesen, angepasst (Workflow, Scope, Formatierungs-Fallen) und
  mit diesem Commit versioniert.

## Was steuert `AGENTS.md`?

`AGENTS.md` ist die Projektanweisung fuer den Coding-Agenten. Sie beschreibt,
dass dieses Repo eine Sammlung eigenstaendiger Deno/TypeScript-Hausuebungen ist
und dass die Befehle pro Uebungsordner ausgefuehrt werden muessen. Ausserdem
haelt sie den Unterschied zwischen Starter und `_loesung/` fest, nennt die
erwarteten Testzahlen und warnt vor den bereits vorhandenen Formatierungsfehlern
sowie den defekten Dateien in `2026-10-06_km5-konto-vertrage`. Damit bekommt der
Agent vor dem ersten Zugriff den noetigen Kontext und klare Grenzen, statt das
Repo neu zu erraten. Die Datei steuert also den Arbeitsablauf und die
Konventionen des Agenten, nicht den ausfuehrbaren Code selbst.
