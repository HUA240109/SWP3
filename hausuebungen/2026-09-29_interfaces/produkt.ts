// HUE 2026-09-29 - Interface als Vertrag am Produkt (Shop).
// Ziel: Produkt implementiert beide Vertraege, bis produkt_test.ts gruen ist.
export interface Comparable<T> {
  compareTo(other: T): number; // <0: dieses kleiner, 0: gleich, >0: groesser
}

export interface Versendbar {
  versandkosten(): number; // in Cent
}

export class Produkt implements Comparable<Produkt>, Versendbar {
  readonly name: string;
  private preisCent: number;
  private gewichtKg: number;

  constructor(name: string, preisCent: number, gewichtKg: number) {
    if (preisCent < 0) {
      throw new Error(`Preis darf nicht negativ sein (war ${preisCent})`);
    }
    if (gewichtKg < 0) {
      throw new Error(`Gewicht darf nicht negativ sein (war ${gewichtKg})`);
    }
    this.name = name;
    this.preisCent = preisCent;
    this.gewichtKg = gewichtKg;
  }

  get preis(): number {
    return this.preisCent;
  }

  // Vertrag 1: Vergleich nach preisCent.
  compareTo(other: Produkt): number {
    return this.preisCent - other.preisCent;
  }

  // Vertrag 2: 400 Cent Grundgebuehr + 200 Cent je kg.
  versandkosten(): number {
    return 400 + 200 * this.gewichtKg;
  }

  toString(): string {
    return `${this.name} (${
      (this.preisCent / 100).toFixed(2)
    } EUR, ${this.gewichtKg} kg)`;
  }
}

// Structural typing: Diese Funktion verlangt nur die FORM von Versendbar.
// Warum kompiliert `akzeptiereVersendbar({ versandkosten: () => 0 })` ohne
// `implements` und ohne `class`? TypeScript prueft Typen strukturell: Entscheidend
// ist, ob die Form passt, nicht ob ein Name deklariert wurde. Das Objekt-Literal
// besitzt eine parameterlose Methode `versandkosten`, die `number` liefert, und
// ist damit zuweisungskompatibel zu `Versendbar`. `implements` und `class` sind
// nur Deklarationen und erzeugen keine zusaetzliche Laufzeitpruefung; die
// Pruefung passiert allein beim Kompilieren anhand der Struktur.
export function akzeptiereVersendbar(v: Versendbar): number {
  return v.versandkosten();
}
