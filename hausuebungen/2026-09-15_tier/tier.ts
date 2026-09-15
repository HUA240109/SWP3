export class Tier {
  readonly name: string;
  private gewicht: number;

  constructor(name: string, gewicht: number) {
    this.name = name;
    this.gewicht = gewicht;
  }

  equals(other: Tier): boolean {
    return this.name === other.name && this.gewicht === other.gewicht;
  }

  fuettern(kg: number): void {
    this.gewicht += kg;
  }

  toString(): string {
    return `${this.name} (${this.gewicht} kg)`;
  }
}
