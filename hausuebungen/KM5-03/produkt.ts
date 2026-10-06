// HUE KM5-03 — Starter (rot). TODO-Markierungen sind die Teilaufgaben.

// TODO 1 bleibt: der Vertrag sagt nur, DASS verglichen wird, nicht wie.
export interface Comparable<T> {
  compareTo(other: T): number; // < 0: kleiner · 0: gleich · > 0: groesser
}

// Der zweite, unabhaengige Vertrag: Produkt ist vergleichbar UND versendbar.
export interface Versendbar {
  readonly id: string;
  versende(an: string): void;
}

export class Produkt implements Comparable<Produkt>, Versendbar {
  readonly id: string;
  preis: number;
  rabatt?: number;
  private _status = "offen";

  constructor(id: string, preis: number, rabatt?: number) {
    this.id = id;
    this.preis = preis;
    this.rabatt = rabatt;
  }

  get status(): string {
    return this._status;
  }

  // TODO 1: nach Preis vergleichen (< 0 billiger, 0 gleich, > 0 teurer).
  compareTo(other: Produkt): number {
    return 0;
  }

  // TODO 2: Status auf `versendet an ${an}` setzen und ein zweites
  // Versenden mit throw ablehnen.
  versende(an: string): void {
    this._status = an;
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
