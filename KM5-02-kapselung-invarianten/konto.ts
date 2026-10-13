export class Konto {
  readonly iban: string;
  private kontostand: number;

  constructor(iban: string, startBetrag: number) {
    if (startBetrag < 0) {
      throw new Error(
        `Startbetrag darf nicht negativ sein (war ${startBetrag})`,
      );
    }
    this.iban = iban;
    this.kontostand = startBetrag;
  }

  get saldo(): number {
    return this.kontostand;
  }

  einzahlen(betrag: number): void {
    if (betrag <= 0) {
      throw new Error(`Betrag muss positiv sein (war ${betrag})`);
    }
    this.kontostand += betrag;
  }

  abheben(betrag: number): void {
    if (betrag <= 0) {
      throw new Error(`Betrag muss positiv sein (war ${betrag})`);
    }
    if (betrag > this.kontostand) {
      throw new Error(
        `Konto ist überzogen (Saldo ${this.kontostand}, angefordert ${betrag})`,
      );
    }
    this.kontostand -= betrag;
  }

  ueberweisen(auf: Konto, betrag: number): void {
    if (betrag <= 0) {
      throw new Error(`Betrag muss positiv sein (war ${betrag})`);
    }
    if (betrag > this.kontostand) {
      throw new Error(
        `Konto ist überzogen (Saldo ${this.kontostand}, angefordert ${betrag})`,
      );
    }
    this.kontostand -= betrag;
    auf.kontostand += betrag;
  }
}
