# Hausuebung KM5-03 — Interfaces als Vertrag

Domäne dieser Uebung: **Produkt** (die Lektion selbst rechnet mit `Konto`).

Ziel: `interface` beschreibt **was**, nicht **wie**. `Produkt` unterschreibt
zwei unabhaengige Vertraege (`Comparable<Produkt>` und `Versendbar`), und eine
Funktion (`groesstes`) kennt ausschliesslich den Vertrag — nicht die Klasse.

## Ausgangslage

`produkt.ts` ist ein **Starter**: er kompiliert, aber die Tests sind rot.

```sh
deno test          # erwartet: rot
```

## Teilaufgaben

1. **`compareTo(other: Produkt): number`** — der Vertrag sagt: `< 0` = dieses
   ist billiger, `0` = gleich teuer, `> 0` = teurer. Vergleiche den **Preis**.
   Achtung: die Sortierung in `groesstes` erwartet, dass der _groesste_ Wert
   gewinnt.
2. **`versende(an: string): void`** — setzt den Versandstatus auf
   `` `versendet an ${an}` ``. Ein zweiter Aufruf darf den Status **nicht**
   ueberschreiben (Fail-Fast: `throw`, Meldung enthaelt `versendet`).
3. **`groesstes<T extends Comparable<T>>`** — funktioniert fuer **jede** Liste
   von Vertragserfuellern, ohne `Produkt` zu kennen. Leere Liste → `undefined`.
4. **Structural typing** — die Funktion akzeptiert auch ein reines Objekt ohne
   `implements`, solange die Form passt (Test 5).

## Fertig, wenn

```sh
deno test          # erwartet: 5 passed
deno fmt --check   # erwartet: keine Ausgabe
```

## Selbstkontrolle

- Wodurch unterscheidet sich `implements Versendbar` von `extends Versendbar`?
- Was behauptet der Vertrag — und was behauptet er ausdruecklich **nicht**?
  (Tipp: `compareTo` sagt nichts darueber, _wie_ verglichen wird. Ein `Produkt`
  vergleicht nach Preis, ein anderes Objekt nach etwas ganz anderem.)
- Warum ist `readonly id` im Interface und nicht `id`?

## Loesung

`_loesung/` enthaelt dieselben Tests mit der vollstaendigen `produkt.ts`. Erst
selbst loesen, dann vergleichen.
