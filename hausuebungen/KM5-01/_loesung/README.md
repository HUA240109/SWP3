# Loesung KM5-01 — Tier

Ueber `../README.md` die Aufgabe nachlesen, erst selbst loesen, dann vergleichen.

```sh
deno test          # erwartet: 5 passed
```

- `equals(other)` vergleicht Name **und** Gewicht (Zustandsgleichheit).
- `_gewicht` bleibt privat; gelesen wird ueber den Getter `gewicht`.
- `fuettern(kg)` aendert nur den Zustand dieser Instanz.