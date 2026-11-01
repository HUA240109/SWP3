# Hausuebung 2026-09-29 - Interfaces als Vertrag

Loesung zur HUE aus der UE `2026-09-29__interfaces` (Produkt im Shop).

## Aufgaben

1. `compareTo(other)` vergleicht nach `preisCent` (`<0`, `0`, `>0`).
2. `versandkosten()` berechnet `400` Cent Grundgebuehr plus `200` Cent je kg.
3. Structural typing ist als Kommentar ueber `akzeptiereVersendbar` erklaert:
   TypeScript prueft die Form eines Objekts, nicht seine Deklaration. Deshalb
   erfuellt `{ versandkosten: () => 0 }` den Vertrag `Versendbar` auch ohne
   `implements` und ohne `class`.
4. Git-Disziplin: Je ein Commit fuer `compareTo` und `versandkosten`, nicht
   alles in einem Commit.

## Testen

```sh
deno test
```
