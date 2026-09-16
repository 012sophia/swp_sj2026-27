// Unterrichts-Domäne für die HÜ 1: Klasse/Instanz/Zustand.
// Dein Job: equals() und fuettern() ergänzen, bis tier_test.ts grün ist.
export class Tier {
  readonly name: string;
  private gewicht: number;

  constructor(name: string, gewicht: number) {
    this.name = name;
    this.gewicht = gewicht;
  }

  // TODO HÜ: vergleicht Zustand (Name + Gewicht), nicht Identität.
  equals(other: Tier): boolean {
    return this.gewicht === other.gewicht && this.name=== other.name;
  }

  // TODO HÜ: erhöht das Gewicht um kg.
  fuettern(kg: number): void {
    if (kg < 0) {
      throw new Error("Gewicht darf nicht negativ sein");
    }
    this.gewicht += kg;
  }

  toString(): string {
    return `${this.name} (${this.gewicht} kg)`;
  }
}
