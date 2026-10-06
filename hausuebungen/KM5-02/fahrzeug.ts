// HUE KM5-02 — Starter (rot). TODO-Markierungen sind die Teilaufgaben.
export class Fahrzeug {
  readonly marke: string;
  readonly maxGeschwindigkeit: number;

  // TODO 1: privat kapseln (_kmStand, _geschwindigkeit) + Getter anlegen.
  kmStand: number;
  geschwindigkeit: number;

  constructor(
    marke: string,
    kmStand: number,
    maxGeschwindigkeit: number,
  ) {
    // TODO 2: Fail-Fast. kmStand < 0 und maxGeschwindigkeit < 0 ablehnen.
    this.marke = marke;
    this.kmStand = kmStand;
    this.maxGeschwindigkeit = maxGeschwindigkeit;
    this.geschwindigkeit = 0; // TODO 5: neu geboren steht still
  }

  // TODO 3: nur 0 <= v <= maxGeschwindigkeit zulassen, sonst throw.
  setGeschwindigkeit(v: number): void {
    this.geschwindigkeit = v;
  }

  // TODO 4: negative Stunden ablehnen; kmStand steigt nur ueber diese Methode.
  fahre(stunden: number): void {
    this.kmStand += this.geschwindigkeit * stunden;
  }

  toString(): string {
    return `${this.marke} (${this.kmStand} km, faehrt ${this.geschwindigkeit}/${this.maxGeschwindigkeit} km/h)`;
  }
}
