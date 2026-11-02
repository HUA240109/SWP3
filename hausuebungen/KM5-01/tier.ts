// HUE KM5-01 - Loesung.
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

  equals(other: Tier): boolean {
    // Zustandsgleichheit: Name UND Gewicht muessen uebereinstimmen.
    return this.name === other.name && this._gewicht === other._gewicht;
  }

  fuettern(kg: number): void {
    this._gewicht += kg; // wirkt nur auf diese Instanz
  }

  toString(): string {
    return `${this.name} (${this._gewicht} kg)`;
  }
}
