import { assertEquals } from "jsr:@std/assert";
import { Tier } from "./tier.ts";

Deno.test("equals vergleicht Zustand, nicht Identitaet", () => {
  const a = new Tier("Bello", 12);
  const b = new Tier("Bello", 12);
  assertEquals(a === b, false);
  assertEquals(a.equals(b), true);
});

Deno.test("equals: anderer Name ist ein anderes Tier", () => {
  assertEquals(new Tier("Bello", 12).equals(new Tier("Minka", 12)), false);
});

Deno.test("equals: anderes Gewicht ist ein anderes Tier", () => {
  assertEquals(new Tier("Bello", 12).equals(new Tier("Bello", 13)), false);
});

Deno.test("fuettern erhoeht das Gewicht", () => {
  const hund = new Tier("Bello", 12);
  hund.fuettern(2);
  assertEquals(hund.gewicht, 14);
  assertEquals(hund.toString(), "Bello (14 kg)");
});

Deno.test("Instanzen haben getrennten Zustand", () => {
  const a = new Tier("Bello", 12);
  const b = new Tier("Minka", 12);
  b.fuettern(5);
  assertEquals(a.gewicht, 12);
  assertEquals(b.gewicht, 17);
});