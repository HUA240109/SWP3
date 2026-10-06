// HUE KM5-01 — Starter (rot). TODO-Markierungen sind die Teilaufgaben.
export class Tier {
  readonly name: string; // Identitaet: nach dem Konstruktor fix
  private _gewicht: number; // Zustand: aenderbar, privat

  constructor(name: string, gewicht: number) {
    this.name = name;
    this._gewicht = gewicht;
  }

  get gewicht(): number {
    return this._gewicht;
  }

  // TODO 1: vergleiche den ZUSTAND (Name und Gewicht), nicht die Identitaet.
  // Zwei Tiere mit gleichem Namen und Gewicht gelten als gleich,
  // zwei verschiedene Objekte dagegen nicht.
  equals(other: Tier): boolean {
    return this === other;
  }

  // TODO 2: erhoehe das Gewicht DIESER Instanz um kg.
  fuettern(kg: number): void {
    this._gewicht += kg;
  }

  toString(): string {
    return `${this.name} (${this._gewicht} kg)`;
  }
}
