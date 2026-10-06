import { assertEquals, assertThrows } from "jsr:@std/assert";
import { Fahrzeug } from "./fahrzeug.ts";

Deno.test("Fahrzeug wird nie mit ungueltigem Zustand geboren", () => {
  assertThrows(
    () => new Fahrzeug("Steyr", -1, 180),
    Error,
    "kmStand",
  );
  assertThrows(
    () => new Fahrzeug("Steyr", 0, -1),
    Error,
    "maxGeschwindigkeit",
  );
});

Deno.test("setGeschwindigkeit haelt die Invariante 0 <= v <= max", () => {
  const auto = new Fahrzeug("Steyr", 1000, 180);
  auto.setGeschwindigkeit(180);
  assertEquals(auto.geschwindigkeit, 180);
  assertThrows(
    () => auto.setGeschwindigkeit(181),
    Error,
    "Geschwindigkeit",
  );
  assertThrows(
    () => auto.setGeschwindigkeit(-5),
    Error,
    "Geschwindigkeit",
  );
});

Deno.test("neues Fahrzeug steht still: v = 0, kmStand unveraendert", () => {
  const auto = new Fahrzeug("Steyr", 1000, 180);
  assertEquals(auto.geschwindigkeit, 0);
  assertEquals(auto.kmStand, 1000);
});

Deno.test("fahre erhoeht kmStand, verlangsamt wird nie", () => {
  const auto = new Fahrzeug("Steyr", 1000, 180);
  auto.setGeschwindigkeit(100);
  auto.fahre(2);
  assertEquals(auto.kmStand, 1200);
  assertThrows(() => auto.fahre(-1), Error, "stunden");
  assertEquals(auto.kmStand, 1200); // nach dem Fehler unveraendert
});
