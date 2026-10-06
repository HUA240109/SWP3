import { assertEquals, assertThrows } from "jsr:@std/assert";
import { groesstes, Produkt, type Versendbar } from "./produkt.ts";

Deno.test("compareTo vergleicht nach Preis", () => {
  const billig = new Produkt("P1", 10);
  const teuer = new Produkt("P2", 25);
  const gleich = new Produkt("P3", 25);

  assertEquals(billig.compareTo(teuer) < 0, true);
  assertEquals(teuer.compareTo(billig) > 0, true);
  assertEquals(teuer.compareTo(gleich), 0);
});

Deno.test("groesstes liefert das teuerste Produkt", () => {
  const liste = [
    new Produkt("P1", 10),
    new Produkt("P2", 99),
    new Produkt("P3", 42),
  ];

  assertEquals(groesstes(liste)?.id, "P2");
});

Deno.test("groesstes ist bei leerer Liste undefined", () => {
  assertEquals(groesstes([]), undefined);
});

Deno.test("versende setzt den Status und blockiert das zweite Versenden", () => {
  const paket = new Produkt("P1", 10);
  paket.versende("Wien");
  assertEquals(paket.status, "versendet an Wien");
  assertThrows(() => paket.versende("Graz"), Error, "versendet");
  assertEquals(paket.status, "versendet an Wien"); // unveraendert nach dem Fehler
});

Deno.test("structural typing: Form statt Abstammung", () => {
  // kein `implements`, kein Produkt — aber die Form passt
  const alsVertrag: Versendbar = {
    id: "M1",
    versende: () => {},
  };
  assertEquals(alsVertrag.id, "M1");

  // auch ohne jede Deklaration: die Form reicht
  const preisListe = [
    { preis: 3, compareTo: (o: { preis: number }) => 3 - o.preis },
    { preis: 30, compareTo: (o: { preis: number }) => 30 - o.preis },
  ];

  assertEquals(groesstes(preisListe)?.preis, 30);
});