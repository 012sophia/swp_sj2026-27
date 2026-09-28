// HÜ-Domäne UE 2: Kapselung & Invarianten am Fahrzeug.
// Dein Job: die Invarianten fail-fast sichern, bis fahrzeug_test.ts grün ist.
export class Fahrzeug {
  readonly marke: string;
  private _kmStand: number;
  private _geschwindigkeit: number;
  readonly maxGeschwindigkeit: number;

  constructor(
    marke: string,
    kmStand: number,
    maxGeschwindigkeit: number,
  ) {
    if (kmStand < 0) {
      throw new Error(
        `kmStand darf nicht negativ sein (war ${kmStand})`,
      );
    }
    this.marke = marke;
    this._kmStand = kmStand;
    this.maxGeschwindigkeit = maxGeschwindigkeit;
    this._geschwindigkeit = 0;
  }

  // Lesen ja, schreiben nie: nur getter, keine setter für kmStand/geschwindigkeit.
  get kmStand(): number {
    return this._kmStand;
  }

  get geschwindigkeit(): number {
    return this._geschwindigkeit;
  }

  // Wirft, wenn v < 0 oder v > maxGeschwindigkeit.
  setGeschwindigkeit(v: number): void {
    if (v < 0 || v > this.maxGeschwindigkeit) {
      throw new Error(
        `Geschwindigkeit muss zwischen 0 und ${this.maxGeschwindigkeit} liegen (war ${v})`,
      );
    }
    this._geschwindigkeit = v;
  }

  // TODO HÜ: erhöht kmStand um geschwindigkeit * stunden.
  fahre(stunden: number): void {}

  toString(): string {
    return `${this.marke} (${this._kmStand} km, fährt ${this._geschwindigkeit}/${this.maxGeschwindigkeit} km/h)`;
  }
}
