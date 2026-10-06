# Loesung KM5-02 — Fahrzeug

Ueber `../README.md` die Aufgabe nachlesen, erst selbst loesen, dann vergleichen.

```sh
deno test          # erwartet: 4 passed
```

- `_kmStand` / `_geschwindigkeit` sind privat, gelesen wird ueber Getter.
- Der Konstruktor sichert beide Invarianten **beim Entstehen** (Fail-Fast).
- `setGeschwindigkeit` und `fahre` sichern sie **beim Wachsen**; nach einem
  `throw` ist der Zustand unveraendert.