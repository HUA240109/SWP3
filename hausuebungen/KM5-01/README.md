# Hausuebung KM5-01 — Klasse, Instanz, Zustand

Domäne dieser Uebung: **Tier** (die Lektion selbst rechnet mit `Konto`).

Ziel: eine eigene Klasse bauen und den Unterschied zwischen **Identitaet**
(`===`, gleicher Speicherplatz) und **Zustandsgleichheit** (`equals()`) verstehen.

## Ausgangslage

`tier.ts` ist ein **Starter**: er kompiliert, aber die Tests sind rot.
Die Tests in `tier_test.ts` sind gruen — sie sagen dir, was deine Klasse
koennen muss.

```sh
deno test          # erwartet: rot
```

## Teilaufgaben

1. **`equals(other: Tier): boolean`** — `equals()` vergleicht den *Zustand*
   (Name und Gewicht), nicht die Identitaet. Der Starter vergleitet bisher nur
   `this === other`.
2. **`fuettern(kg: number)`** — erhoeht das Gewicht dieser Instanz. Andere
   Tiere duerfen davon nicht betroffen sein (Test 5).
3. **Kapselung** — das Gewicht ist privat (`_gewicht`) und wird ueber den
   Getter `gewicht` gelesen. Schreibe nie direkt auf ein privates Feld von
   aussen.
4. **`toString()`** — bleibt wie im Starter: `` `${name} (${gewicht} kg)` ``.

## Fertig, wenn

```sh
deno test          # erwartet: 5 passed
deno fmt --check   # erwartet: keine Ausgabe
```

## Selbstkontrolle

- Zwei Tiere mit gleichem Namen und Gewicht: `a === b` ist `false`,
  `a.equals(b)` ist `true`. Warum ist das kein Widerspruch?
- `readonly name` vs. veraenderliches `gewicht`: welcher Teil der Identitaet
  ist fix?

## Loesung

`_loesung/` enthaelt dieselben Tests mit einer vollstaendigen
`Tier`-Klasse. Erst selbst loesen, dann vergleichen.