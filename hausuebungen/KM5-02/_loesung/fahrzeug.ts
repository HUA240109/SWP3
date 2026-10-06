// HUE KM5-02 — Loesung.
export class Fahrzeug {
  readonly marke: string;
  readonly maxGeschwindigkeit: number;

  // Zustand: privat, nur ueber Methoden aenderbar.
  private _kmStand: number;
  private _geschwindigkeit: number;

  constructor(
    marke: string,
    kmStand: number,
    maxGeschwindigkeit: number,
  ) {
    // Invariante beim Entstehen sichern (Fail-Fast).
    if (kmStand < 0) {
      throw new Error("kmStand darf nicht negativ sein.");
    }

    if (maxGeschwindigkeit < 0) {
      throw new Error("maxGeschwindigkeit darf nicht negativ sein.");
    }

    this.marke = marke;
    this._kmStand = kmStand;
    this.maxGeschwindigkeit = maxGeschwindigkeit;
    this._geschwindigkeit = 0;
  }

  // Lesen ist unproblematisch: Zugriff, keine Aenderung.
  get kmStand(): number {
    return this._kmStand;
  }

  get geschwindigkeit(): number {
    return this._geschwindigkeit;
  }

  setGeschwindigkeit(v: number): void {
    if (v < 0 || v > this.maxGeschwindigkeit) {
      throw new Error(
        "Geschwindigkeit muss zwischen 0 und maxGeschwindigkeit liegen.",
      );
    }

    this._geschwindigkeit = v;
  }

  // Einzige Tuer, die den kmStand erhoeht.
  fahre(stunden: number): void {
    if (stunden < 0) {
      throw new Error("stunden darf nicht negativ sein.");
    }

    this._kmStand += this._geschwindigkeit * stunden;
  }

  toString(): string {
    return `${this.marke} (${this._kmStand} km, faehrt ${this._geschwindigkeit}/${this.maxGeschwindigkeit} km/h)`;
  }
}