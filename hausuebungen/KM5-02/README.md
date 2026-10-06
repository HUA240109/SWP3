# Hausuebung KM5-02 — Kapselung und Invarianten

Domäne dieser Uebung: **Fahrzeug** (die Lektion selbst rechnet mit `Konto`).

Ziel: Zustand schützen. Ein `Fahrzeug` darf nie mit negativem `kmStand` und nie
mit einer Geschwindigkeit ausserhalb von `0 … maxGeschwindigkeit` existieren —
und von aussen soll niemand direkt in den Zustand schreiben koennen.

## Ausgangslage

`fahrzeug.ts` ist ein **Starter**: er kompiliert, aber die Tests sind rot.

```sh
deno test          # erwartet: rot
```

## Teilaufgaben

1. **Kapselung** — `kmStand` und `geschwindigkeit` werden privat
   (`_kmStand`, `_geschwindigkeit`) und ueber Getter gelesen. Von aussen gibt
   es **keinen** Setter fuer `kmStand`: nur `fahre()` darf ihn erhoehen.
2. **Fail-Fast im Konstruktor** — ein negativer `kmStand` oder eine
   `maxGeschwindigkeit` kleiner als `0` werden sofort mit `throw` abgelehnt,
   mit einer Meldung, die `kmStand` bzw. `maxGeschwindigkeit` nennt.
3. **Fail-Fast in `setGeschwindigkeit(v)`** — nur `0 <= v <= maxGeschwindigkeit`;
   die Meldung nennt `Geschwindigkeit`.
4. **Fail-Fast in `fahre(stunden)`** — negative Stunden sind verboten (ein
   Fahrzeug faehrt nicht rueckwaerts).
5. **Neu geboren heisst steht still** — `geschwindigkeit` startet bei `0`.

## Fertig, wenn

```sh
deno test          # erwartet: 4 passed
deno fmt --check   # erwartet: keine Ausgabe
```

## Selbstkontrolle

- Warum prueft die Klasse ihre Regeln selbst und nicht der Aufrufer?
- Was ist der Unterschied zwischen einem Getter (Lesen) und einem Setter
  (Schreiben)? Wofuer gibt es hier nur einen Getter?
- `assertThrows(() => ..., Error, "kmStand")` prueft auch die **Meldung** —
  warum ist das in einer HUE nuetzlich?

## Loesung

`_loesung/` enthaelt dieselben Tests mit der vollstaendigen `Fahrzeug`-Klasse.
Erst selbst loesen, dann vergleichen.