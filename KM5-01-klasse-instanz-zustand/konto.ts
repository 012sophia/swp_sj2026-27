export class Konto {
  private kontostand: number;   // Zustand — gehört nur dieser Instanz
  readonly iban: string;        // Identität — nach dem Konstruktor unveränderlich

  constructor(iban: string, startBetrag: number) {
    this.iban = iban;
    this.kontostand = startBetrag;
  }

  einzahlen(betrag: number): void {
    this.kontostand += betrag;  // ändert den Zustand DIESER Instanz
  }

  equals(other: Konto): boolean {
    return this.iban === other.iban;
  }
}