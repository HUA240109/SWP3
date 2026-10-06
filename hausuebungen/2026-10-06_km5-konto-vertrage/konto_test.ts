import { assert, assertEquals, assertFalse } from "@std/assert";
import { Konto } from "./konto.ts";

Deno.test("equals vergleicht die IBAN, nicht den Kontostand", () => {
  const a = new Konto("AT00 1111", 500);
  const b = new Konto("AT00 1111", 900);
  assert(a.equals(b), "gleiche IBAN -> equals() true trotz Variousstaenden");
  assertEquals(b.kontostand, 900);
});

Deno.test("verschiedene IBAN bei gleichem Stand -> equals() false", () => {
  const a = new Konto("AT00 1111", 500);
  const b = new Konto("AT00 2222", 500);
  assertFalse(a.equals(b), "verschiedene IBAN -> equals() false");
});

Deno.test("Identitaet ist nicht Zustand: a === b ist false", () => {
  const a = new Konto("AT00 1111", 500);
  const b = new Konto("AT00 1111", 500);
  assertFalse(a === b, "zwei new Konto(...) sind verschiedene Objekte");
});

Deno.test("const c = a ist eine zweite Variable auf dasselbe Objekt", () => {
  const a = new Konto("AT00 1111", 500);
  const c = a;
  assert(c === a, "c und a zeigen auf dieselbe Instanz");

  a.einzahlen(100);
  assertEquals(c.kontostand, 600, "beide Variablen sehen den neuen Zustand");
});

Deno.test("toString zeigt IBAN und Stand", () => {
  const k = new Konto("AT00 1111", 500);
  assertEquals(k.toString(), "Konto AT00 1111 (500 EUR)");
});
