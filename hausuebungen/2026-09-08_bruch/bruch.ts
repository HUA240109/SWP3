// HUE 2026-09-08 - Bruch-Klasse (OOP in TypeScript).
// Invariante: Der Bruch ist immer gekuerzt und der Nenner ist positiv.
export class Bruch {
  private zaehler: number;
  private nenner: number;

  constructor(zaehler: number, nenner: number) {
    if (nenner === 0) {
      throw new Error("Der Nenner darf nicht 0 sein.");
    }

    // Vorzeichen immer im Zaehler halten: 1/-2 wird zu -1/2.
    if (nenner < 0) {
      zaehler = -zaehler;
      nenner = -nenner;
    }

    // Euklidischer Algorithmus; gcd(0, n) = n, damit 0/n zu 0/1 wird.
    const teiler = Bruch.ggt(Math.abs(zaehler), nenner);

    this.zaehler = zaehler / teiler;
    this.nenner = nenner / teiler;
  }

  private static ggt(a: number, b: number): number {
    while (b !== 0) {
      const rest = a % b;
      a = b;
      b = rest;
    }

    return a;
  }

  addiere(other: Bruch): Bruch {
    return new Bruch(
      this.zaehler * other.nenner + other.zaehler * this.nenner,
      this.nenner * other.nenner,
    );
  }

  toString(): string {
    if (this.nenner === 1) {
      return `${this.zaehler}`;
    }

    const vorzeichen = this.zaehler < 0 ? "-" : "";
    const betrag = Math.abs(this.zaehler);
    const ganz = Math.trunc(betrag / this.nenner);
    const rest = betrag % this.nenner;

    if (ganz === 0) {
      return `${this.zaehler}/${this.nenner}`;
    }

    if (rest === 0) {
      return `${vorzeichen}${ganz}`;
    }

    return `${vorzeichen}${ganz} ${rest}/${this.nenner}`;
  }
}
