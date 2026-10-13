import { assertEquals } from "jsr:@std/assert";
import { Brief, Paket, schicke, Versendbar } from "./vertrag.ts";

Deno.test("beide Klassen erfüllen den Vertrag (Funktion akzeptiert beide)", () => {
  const paket: Versendbar = new Paket("P1", 1.5);
  const brief: Versendbar = new Brief("B1", "Österreichische Post");

  assertEquals(schicke(paket), undefined);
  assertEquals(schicke(brief), undefined);
  assertEquals(typeof paket.id, "string");
  assertEquals(typeof brief.id, "string");
});

Deno.test("structural typing: Objekt ohne implements wird akzeptiert", () => {
  const obj = {
    id: "X1",
    versende: (_an: string) => {},
  };
  schicke(obj);
  assertEquals(obj.id, "X1");
});
