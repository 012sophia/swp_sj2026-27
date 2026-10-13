export interface Versendbar {
  readonly id: string;
  versende(an: string): void;
}

export class Paket implements Versendbar {
  readonly id: string;
  private gewichtKg: number;

  constructor(id: string, gewichtKg: number) {
    if (gewichtKg <= 0) {
      throw new Error(`Gewicht muss positiv sein (war ${gewichtKg})`);
    }
    this.id = id;
    this.gewichtKg = gewichtKg;
  }

  versende(an: string): void {
    console.log(`Paket ${this.id} (${this.gewichtKg} kg) → ${an}`);
  }
}

export class Brief implements Versendbar {
  readonly id: string;
  private traeger: string;

  constructor(id: string, traeger: string) {
    this.id = id;
    this.traeger = traeger;
  }

  versende(an: string): void {
    console.log(`Brief ${this.id} via ${this.traeger} → ${an}`);
  }
}

export function schicke(v: Versendbar): void {
  v.versende("Poststelle");
}
