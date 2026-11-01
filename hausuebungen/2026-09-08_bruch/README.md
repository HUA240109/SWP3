# Hausuebung 2026-09-08 - Bruch-Klasse

Loesung zur HUE aus der UE `2026-09-08__intro` (OOP in TypeScript).

Die Klasse haelt ihre Invariante bereits im Konstruktor ein:

- **Immer gekuerzt:** `ggt` nach Euklid teilt Zaehler und Nenner vor dem
  Speichern.
- **Vorzeichen im Zaehler:** ein negativer Nenner wird umgedreht (`1/-2` wird zu
  `-1/2`).
- **Nenner 0:** `new Bruch(1, 0)` wirft
  `Error("Der Nenner darf nicht 0 sein.")`.
- **Gemischte Form:** `toString()` liefert `"3 1/8"`, `"3/4"` oder bei ganzen
  Zahlen `"4"`.

Testen mit:

```sh
deno test
```
