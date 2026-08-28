# Materiale restante, clasa a VIII-a

## Recapitulare inițială

Ambele lecții sunt activități administrative de start de an, fără pagină de
manual — la fel ca la clasa a VII-a, rămân intenționat fără material, nu
sunt restanțe reale.

## Unitatea I: Unde găsim frumusețea? (26 lecții, 22 cu material)

Gata, integrate în cod: fișele lecțiilor 2, 3, 4, 6, 7, 9, 10, 11, 20, 21, 22,
23; jocurile-quiz ale lecțiilor 13, 24, 25; **schemele lecțiilor 14, 15, 17, 18
și infograficul lecției 12 (pasul dedicat)**; plus schema lecției 16 și jocul
lecției 19, deja existente.

Rămân: prezentările lecțiilor 1, 5, 8 (NotebookLM) și testul lecției 26
(Google Forms).

## Unitatea II: Cum sunt ceilalți? (23 lecții, 21 cu material)

Gata, integrate în cod: fișele lecțiilor 2, 3, 4, 5, 6, 16, 17, 18, 19;
jocurile-quiz ale lecțiilor 8, 21, 22; **schemele lecțiilor 9, 10, 11, 12, 13,
14 și infograficul lecției 7 (pasul dedicat)**; plus schema lecției 15 și jocul
lecției 20, deja existente.

Rămân: prezentarea lecției 1 (NotebookLM) și testul lecției 23 (Google Forms).

## Unitatea III: Cum descoperim lumea? (25 lecții, 19 cu material)

Gata, integrate în cod: fișele lecțiilor 1, 2, 3, 4, 5, 6, 8, 9, 10, 15, 17,
19, 20, 21 (`scripts/build_clasa8_fise.py`); jocurile-quiz ale lecțiilor 11
(textul argumentativ), 22 și 24 (recapitulare); plus schema lecției 12 și
jocul lecției 23, deja existente.

Rămân:

| Lecție | Titlu | Tip orientativ |
|---|---|---|
| lectia-7 | Conexiuni de lectură. Lumea Sofiei de Jostein Gaarder | prezentare |
| lectia-13 | Atributiva | schemă (pas dedicat) |
| lectia-14 | Complementul direct | schemă (pas dedicat) |
| lectia-16 | Complementul indirect | schemă (pas dedicat) |
| lectia-18 | Complementul prepozițional | schemă (pas dedicat) |
| lectia-25 | Evaluare | test (Google Forms) |

## Unitatea IV: Unde găsim adevărul? (20 lecții, 13 cu material)

Gata, integrate în cod: fișele lecțiilor 1, 3, 4, 5, 6, 7, 8, 16, 17
(`scripts/build_clasa8_fise.py`); jocurile-quiz ale lecțiilor 9 (comportamente
nonverbale și paraverbale) și 18 (recapitulare); plus schema lecției 13 și
jocul lecției 19, deja existente.

Rămân:

| Lecție | Titlu | Tip orientativ |
|---|---|---|
| lectia-2 | Textul epic. Iapa lui Vodă de Mihail Sadoveanu | prezentare |
| lectia-10 | Circumstanțialul de loc | schemă (pas dedicat) |
| lectia-11 | Circumstanțiala de loc | schemă (pas dedicat) |
| lectia-12 | Circumstanțialul de timp | schemă (pas dedicat) |
| lectia-14 | Circumstanțialul de mod | schemă (pas dedicat) |
| lectia-15 | Circumstanțiala de mod | schemă (pas dedicat) |
| lectia-20 | Evaluare | test (Google Forms) |

## Unitatea V: Încotro se îndreaptă lumea? (23 lecții, 13 cu material)

Gata, integrate în cod: fișele lecțiilor 3, 4, 5, 6, 7, 17, 18
(`scripts/build_clasa8_fise.py`); jocurile-quiz ale lecțiilor 9 și 10
(argumentare și persuasiune), 19 și 21 (recapitulare); plus schema lecției 15
și jocul lecției 20, deja existente.

Rămân:

| Lecție | Titlu | Tip orientativ |
|---|---|---|
| lectia-1 | Textul epic. Fahrenheit 451 de Ray Bradbury | prezentare |
| lectia-2 | Textul epic de mare întindere | prezentare |
| lectia-8 | Modele comportamentale în textele literaturii universale | infografic (pas dedicat) |
| lectia-11 | Circumstanțialul de cauză | schemă (pas dedicat) |
| lectia-12 | Circumstanțiala de cauză | schemă (pas dedicat) |
| lectia-13 | Circumstanțialul de scop | schemă (pas dedicat) |
| lectia-14 | Circumstanțiala de scop | schemă (pas dedicat) |
| lectia-16 | Construcții condiționale | schemă (pas dedicat) |
| lectia-22 | Evaluare (partea 1/2) | test (Google Forms) |
| lectia-23 | Evaluare (partea 2/2) | test (Google Forms) |

## Total

**119 lecții** construite structural (recapitulare inițială + 5 unități), sursate din 8. Ghid.pdf — Planificare calendaristică orientativă 2025-2026 și Proiectarea unităților de învățare (ediția Art Klett 2025, aceeași cu manualul din folder).

**10 au material** (schemă sau joc, câte una din fiecare pe unitate, verificate live pe server). **107 sunt restanțe reale**, listate mai sus, tip orientativ, de completat într-o sesiune dedicată — plus cele 2 din recapitularea inițială, intenționat fără material, nu sunt restanțe. Aceeași convenție ca la clasele a V-a, a VI-a și a VII-a: schemă/infografic/joc/fișă pot fi generate direct în cod, prezentare și test au nevoie de o unealtă externă (NotebookLM/Canva, respectiv Google Forms).

Clasa a VIII-a rămâne neînregistrată în `clase.js` — `src/data/clasa-8/index.js` are `unitati` gol, deși `clase.js` importă deja acest fișier (spre deosebire de clasele a VI-a și a VII-a, absente complet din `clase.js`).
