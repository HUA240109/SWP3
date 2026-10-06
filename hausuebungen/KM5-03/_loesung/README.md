# Loesung KM5-03 — Interfaces als Vertrag

Ueber `../README.md` die Aufgabe nachlesen, erst selbst loesen, dann vergleichen.

```sh
deno test          # erwartet: 5 passed
```

- `compareTo` vergleicht nach Preis (`this.preis - other.preis`).
- `versende` setzt `versendet an ${an}` und lehnt ein zweites Versenden ab
  (Fail-Fast, Zustand bleibt unveraendert).
- `groesstes<T extends Comparable<T>>` kennt nur den Vertrag — deshalb
  funktioniert sie auch fuer Objekte ohne `implements` (structural typing).