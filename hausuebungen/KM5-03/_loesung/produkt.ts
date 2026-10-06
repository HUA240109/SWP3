// HUE KM5-03 — Loesung.

// Vertrag 1: vergleichbar. Er sagt nur, DASS verglichen wird, nicht wie.
export interface Comparable<T> {
  compareTo(other: T): number; // < 0: kleiner · 0: gleich · > 0: groesser
}

// Vertrag 2: versendbar — unabhaengig von Comparable.
export interface Versendbar {
  readonly id: string;
  versende(an: string): void;
}

export class Produkt implements Comparable<Produkt>, Versendbar {
  readonly id: string;
  preis: number;
  rabatt?: number; // optional: nicht jedes Produkt hat einen
  private _status = "offen";

  constructor(id: string, preis: number, rabatt?: number) {
    this.id = id;
    this.preis = preis;
    this.rabatt = rabatt;
  }

  get status(): string {
    return this._status;
  }

  compareTo(other: Produkt): number {
    // Die Umsetzung ist Privatsache des Produkts — der Vertrag bleibt gleich.
    return this.preis - other.preis;
  }

  versende(an: string): void {
    if (this._status !== "offen") {
      throw new Error(`${this.id} ist bereits versendet an ${this._status}`);
    }

    this._status = `versendet an ${an}`;
  }

  istVerfuegbar(): boolean {
    return this.rabatt === undefined || this.rabatt < this.preis;
  }

  toString(): string {
    return `${this.id} (${this.preis} EUR, ${this._status})`;
  }
}

// Die Funktion kennt nur den Vertrag — nicht die Klasse Produkt.
export function groesstes<T extends Comparable<T>>(
  liste: T[],
): T | undefined {
  if (liste.length === 0) return undefined;

  let bestes = liste[0];
  for (const kandidat of liste) {
    if (kandidat.compareTo(bestes) > 0) bestes = kandidat;
  }

  return bestes;
}