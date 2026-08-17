---
name: oraro-dev
description: "Dezvoltare pe proiectul OraRO, curs online personal pentru predare, învățare și evaluare la clasă, limba și literatura română, gimnaziu (clasele V-VIII), prof. Antoanela Pohoață. Folosește acest skill ori de câte ori lucrezi pe OraRO: structura de date pe lecție, materiale de predare, învățare, evaluare, integrare surse din manual, ghid și planificare, flux de lucru pe unitate de învățare. Diferit de LimbaRo, care e exersare independentă a elevului. Se activează și dacă utilizatoarea spune doar lucrăm la ora sau unitatea următoare, fără să numească proiectul explicit. Impune fluxul de aprobare pe unitate, interdicția de a inventa conținut și folosirea NotebookLM ca instrument de producție pentru prezentări, infografice, video, quizuri și chestionare."
---

# Dezvoltare OraRO

Lucrezi la OraRO, curs online personal și privat de limba și literatura română, gimnaziu, pentru predare, învățare și evaluare la clasă, realizat de prof. Antoanela Pohoață. Nu este LimbaRo. LimbaRo rămâne instrumentul de exersare independentă a elevului. OraRO este instrumentul de lucru al profesoarei, folosit înainte și în timpul orei.

## Domeniu de aplicare, anul acesta

- Clasa a V-a, prioritate, se duce până la capăt prima.
- Clasa a VIII-a, a doua prioritate, după ce clasa a V-a e completă.
- Clasele a VI-a și a VII-a rămân pentru anul următor. Nu le atingi acum.
- Nu presupui că LimbaRo acoperă deja lecțiile la clasa a V-a. Verifici înainte de orice presupunere și semnalezi contradicții între conținutul din LimbaRo și sursele noi.

## Arhitectură tehnică

Vite și React. Fără librărie de gestiune a stării. Conținutul stă separat de interfață, în fișiere de date, nu bătut direct în componente.

```
src/
  data/clasa-5/unitatea-1.js, clasa-8/unitatea-1.js, ...
  components/Prezentare.jsx, Test.jsx, Fisa.jsx, Joc/, Infografic.jsx, Schema.jsx
  pages/ClasaPage.jsx, UnitatePage.jsx, LectiePage.jsx
  App.jsx            (rutare: /clasa-5/unitatea-1/lectia-3)
```

Forma de date pentru o lecție, fixă, indiferent de clasă:

```js
{
  id, titlu, obiective,
  sursaManual, rezolvareGhid,
  materiale: {
    prezentare: {...} | null,
    video: {...} | null,
    test: { linkGoogleForms } | null,
    fisa: {...} | null,
    joc: {...} | null,
    infografic: {...} | null,
    schema: {...} | null,
    altele: []
  }
}
```

Un material lipsă rămâne `null`. Nu completezi de umplutură.

## Reguli obligatorii de conținut

1. Nu inventezi niciodată conținut didactic. Orice text real vine din manual, din ghidul profesorului sau din alte surse indicate explicit de Antoanela. Fiecare item real poartă sursa lui (`sursaManual`, `rezolvareGhid`).
2. Acolo unde sursa nu e clară, marchezi și întrebi. Nu completezi din memorie sau din presupuneri.
3. NotebookLM e instrument de bază în procesul de producție, folosit pentru prezentări, infografice, unele video-uri, quizuri și chestionare. Rămâne un instrument de punere în formă, nu o sursă de conținut, materialul generat pornește tot din manual, ghid sau alte surse indicate, la fel ca orice alt draft, trece prin aprobare explicită înainte de integrare. Sursa NotebookLM rămâne o notă internă, editorială, nu apare ca etichetă pe site.
4. Producția pe tip de material:

| Material | Cine îl produce | Verificare |
|---|---|---|
| Prezentare | NotebookLM, pornind de la manual și ghid, sau draft prin tine | Aprobare explicită înainte de integrare |
| Quiz | NotebookLM | Aprobare explicită înainte de integrare |
| Test, chestionar | Antoanela îl construiește în Google Forms, tu sau NotebookLM propuneți itemii de plecare | Ea decide punctajul și forma finală |
| Fișă de lucru | Draft prin tine, strict din sursele indicate | Aprobare explicită |
| Joc, escape room | Tu scrii logica, conținutul vine din manual, cu sursă atașată | Testare înainte de publicare |
| Video | NotebookLM sau materiale aduse de Antoanela | Vizionare obligatorie înainte de a lega linkul |
| Infografic, schemă | NotebookLM sau Canva, ori draft prin tine ca punct de plecare | Finalizare vizuală de către ea |

5. Orice material pe care îl produci este draft. Nu intră în cod până nu primești aprobare explicită.

## Surse

Sursele stau în Google Drive, într-un folder central pe clasă, nu duplicat per proiect. Cuprind planificarea, manualul, ghidul profesorului și orice alte surse indicate explicit, fără limitare la manual și ghid. Folosești doar sursele indicate explicit pentru o lecție sau o unitate. Dacă un document e scanat ca imagine, semnalezi înainte de a cita pagini exacte, ar putea fi nevoie de OCR. Manualul Art Klett de clasa a V-a a fost deja verificat, text selectabil, fără nevoie de OCR.

## Flux de lucru, pe unitate de învățare

Unitățile au până la douăzeci de lecții. Lucrezi o unitate completă înainte de a trece la următoarea.

1. Antoanela indică clasa, unitatea, paginile din planificare, manual, ghid și orice alte surse relevante.
2. Arăți un tabel cu lecțiile unității și materialele propuse pentru fiecare, nu toate tipurile pentru toate lecțiile. Aștepți aprobare explicită înainte de a continua.
3. Lucrezi lecție cu lecție, în ordine: draft, verificare, aprobare, abia apoi lecția următoare.
4. După aprobarea întregii unități, integrezi conținutul în codul React, ca fișier nou de date.
5. Testați local navigarea și afișarea, apoi faceți deploy.

Nu treci la unitatea următoare fără confirmarea explicită că cea curentă e gata.

## Găzduire și acces

Site static, rezultat din build-ul React, găzduit gratuit pe GitHub Pages sau pe Netlify.

Zona elevilor, fișe de lucru, jocuri, escape room, se publică, cu link dat lor direct. Zona Antoanelei, bareme, răspunsuri, notițe despre clase, nu se publică deloc, rămâne separată, local sau într-un folder Drive privat. Dacă se pune un ecran de parolă peste zona profesoarei, spui clar că e un filtru, nu securitate reală.

## Stil de redactare, obligatoriu pentru orice text generat aici

Limbaj natural, apropiat de un vorbitor nativ, fără cuvinte bombastice. Fără linii de pauză, le înlocuiești cu virgulă, punct sau punct și virgulă. Fără „nu este doar X, ci Y" și variantele ei. Fără „versus", „vs" sau „&", folosești „și". Titluri cu majusculă doar la primul cuvânt. Diacritice corecte întotdeauna. Eviți pasivul dezumanizat de tipul „se observă că", preferi „observăm că" sau adresarea directă. Eviți nominalizările excesive, preferi verbele. Ritm variat de frază. Verifici expresiile care sună a traducere mecanică din engleză.

## Reguli de finalizare

Nu publici, nu trimiți și nu finalizezi nimic fără aprobarea explicită a Antoanelei. Semnalezi orice contradicție găsită între surse sau între acest proiect și LimbaRo. Verifici sursele înainte de a scrie fapte sau cifre, nu inventezi referințe.