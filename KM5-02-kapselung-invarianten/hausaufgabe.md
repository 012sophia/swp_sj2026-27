# Aufgabe KM5-02 — Kapselung &amp; Invarianten

Name: _____________   Abgabe: _____________

**Lektüre:** [TypeScript Handbook: Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)
(`private`/`protected`/`readonly`, Accessors) · [MDN: Private properties](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Classes/Private_properties).

---

## 1. Vorhersagen (erst hinschreiben, dann prüfen)

**a)** Bei welchem Feld schlägt `deno check` auf `k.kontostand = -1` fehl:
`public` oder `private`? Was passiert jeweils zur **Laufzeit**?

Bei `private` schlägt `deno check` fehl — TypeScript meldet einen
Kompilierfehler, weil private Felder nur innerhalb der Klasse zugreifbar
sind. `public` kompiliert ohne Fehler. Zur **Laufzeit** macht `private` (TS)
**keinen** Unterschied: Die Sperre existiert nur zur Kompiliierzeit, das Feld
bleibt über die Instanz erreichbar und schreibt -1 durch. Erst `#feld` (echtes
JS-private) würde es auch zur Laufzeit blockieren.

**b)** Der Konstruktor wirft bei negativem Startwert. Wie viele Objekte
existieren nach `new Konto(-5)` — null oder ein halbfertiges?

**Null** Objekte. Der Konstruktor wirft bevor das Objekt zurückgegeben wird,
es existiert also kein „halbfertiges" Objekt. Der Aufrufer bekommt keine
Referenz, die Exception bricht den `new`-Ausdruck ab.

---

## 2. Umsetzung

1. Wähle eine kleine Klasse mit mindestens einem veränderlichen Feld.
2. Formuliere **zwei** Invarianten (z. B. „Betrag ≥ 0", „gedeckt").
3. Sichere beide mit `throw` im Konstruktor **und** in jeder mutierenden
   Methode.
4. Kein setter, der die Prüfung umgeht; Lesen über getter.

## 3. Tests (rot → grün)

Je Invariante ein Test, der beweist, dass die Verletzung wirklich wirft —
plus ein grüner Pfad, der einen gültigen Übergang durchführt.
