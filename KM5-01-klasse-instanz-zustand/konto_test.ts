import { assertEquals, assertNotStrictEquals } from "jsr:@std/assert";
import { Konto } from "./konto.ts";

Deno.test("gleiche IBAN, verschiedener Stand → equals() ist true", () => {
  const k1 = new Konto("AT1", 500);
  const k2 = new Konto("AT1", 500);
  k1.einzahlen(100);

  assertEquals(k1.equals(k2), true);
});

Deno.test("verschiedene IBAN, gleicher Stand → equals() ist false", () => {
  const k1 = new Konto("AT1", 500);
  const k2 = new Konto("AT2", 500);

  assertEquals(k1.equals(k2), false);
});

Deno.test("a === b für zwei new Konto(…) ist false (Identität ≠ Zustand)", () => {
  const a = new Konto("AT1", 500);
  const b = new Konto("AT1", 500);

  assertNotStrictEquals(a, b);
});
