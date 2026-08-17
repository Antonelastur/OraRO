# OraRO

Curs online personal și privat de limba și literatura română, gimnaziu, pentru predare, învățare și evaluare la clasă. Instrument de lucru al profesoarei, nu instrument de exersare independentă a elevului (acela e LimbaRo).

Detalii despre proiect, arhitectură și fluxul de lucru, în [CLAUDE.md](./CLAUDE.md).

## Dezvoltare locală

```bash
npm install
npm run dev
```

## Structură

- `src/data/` — conținutul lecțiilor, pe clasă și unitate, adăugat abia după aprobare explicită.
- `src/components/` — un component per tip de material (Prezentare, Video, Test, Fișă, Joc, Infografic, Schemă).
- `src/pages/` — paginile de clasă, unitate și lecție.
- `public/materiale/` — fișierele finale (PDF, imagini) exportate din Canva sau NotebookLM.
- `notite-profesor/` — rezolvareGhid, bareme, notițe. Local, nepublicat, ignorat de git.
