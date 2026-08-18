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
  planLectie: {...} | null,   // document intern, nu se publică, vezi Găzduire și acces
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

1. Conținutul se împarte în două categorii, cu reguli diferite de sursă.
   - Conținut de bază: definiții, reguli gramaticale, informații despre autori și opere, texte literare studiate la clasă. Acesta vine mereu din manual, din ghidul profesorului sau din altă sursă indicată explicit de Antoanela, cu sursa atașată (`sursaManual`, `rezolvareGhid`). Nu inventezi niciodată acest tip de conținut.
   - Materiale de sprijin: enunțuri de exerciții, texte pentru teste sau fișe, context și poveste pentru jocuri sau escape room, întrebări de discuție. Acestea pot fi originale, scrise de tine sau de Antoanela, fără să fie legate strict de un pasaj din manual. Condiția, să fie corecte gramatical, potrivite vârstei și nivelului clasei și să servească exact obiectivul lecției. Nu ai nevoie de sursă exactă pentru ele, dar trec tot prin aprobare explicită, ca orice alt material, înainte să intre în cod.

   Scopul general al materialelor de sprijin, să fie cât mai vizuale, gamificate, atractive și interactive, ca să placă elevilor, fără să sacrifice rigoarea, elevii tot trebuie să învețe serios materia din spatele jocului sau al fișei.
2. Acolo unde sursa conținutului de bază nu e clară, marchezi și întrebi. Nu completezi din memorie sau din presupuneri.
3. NotebookLM e instrument de bază în procesul de producție, folosit pentru prezentări, infografice, unele video-uri, quizuri și chestionare. Rămâne un instrument de punere în formă, nu o sursă de conținut, materialul generat pornește tot din manual, ghid sau alte surse indicate, la fel ca orice alt draft, trece prin aprobare explicită înainte de integrare. Sursa NotebookLM rămâne o notă internă, editorială, nu apare ca etichetă pe site.
4. Producția pe tip de material:

| Material | Cine îl produce | Verificare |
|---|---|---|
| Prezentare | NotebookLM, pornind de la manual și ghid, sau draft prin tine | Aprobare explicită înainte de integrare |
| Quiz | NotebookLM | Aprobare explicită înainte de integrare |
| Test, chestionar | Antoanela îl construiește în Google Forms, tu sau NotebookLM propuneți itemii de plecare | Ea decide punctajul și forma finală |
| Fișă de lucru | Draft prin tine, conținutul de bază din surse indicate, enunțurile pot fi originale | Aprobare explicită |
| Joc, escape room | Tu scrii logica, conținutul de bază din manual, povestea sau contextul jocului pot fi originale | Testare înainte de publicare |
| Video | NotebookLM sau materiale aduse de Antoanela | Vizionare obligatorie înainte de a lega linkul |
| Infografic, schemă | NotebookLM sau Canva, ori draft prin tine ca punct de plecare | Finalizare vizuală de către ea |
| Plan de lecție | Draft prin tine, pornind de la ghid, planificare și obiectivele lecției, obligatoriu pentru fiecare lecție | Aprobare explicită, document intern, nu se publică niciodată |

5. Orice material pe care îl produci este draft. Nu intră în cod până nu primești aprobare explicită.

## Surse

Sursele stau local, în rădăcina proiectului, în folderul `Clasa a V-a/`, și mai târziu în `Clasa a VIII-a/`. Amândouă sunt în `.gitignore`, nu intră niciodată în git, conțin manualul, ghidul profesorului, planificarea, proiectarea pe unități și orice alt draft de lecție pus acolo de Antoanela. Înainte de a lucra o lecție, cauți direct în acest folder, cu instrumentele de fișiere, fără să aștepți să fii îndrumat exact la fișier. Dacă nu găsești acolo o sursă de care ai nevoie, cauți suplimentar și în Google Drive, la care ai acces direct prin instrumentele conectate, sau întrebi pe Antoanela. Folosești doar sursele care chiar corespund lecției sau unității în lucru, fără să presupui legături care nu ți-au fost date, și verifici ediția, un manual vechi poate avea altă paginație decât cel curent. Dacă un manual e scanat ca imagine, nu text selectabil, semnalezi înainte de a cita pagini exacte, ar putea fi nevoie de OCR.

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

Zona elevilor, fișe de lucru, jocuri, escape room, se publică, cu link dat lor direct. Zona Antoanelei, bareme, răspunsuri, notițe despre clase, planuri de lecție, nu se publică deloc, rămâne separată, local sau într-un folder Drive privat. Dacă se pune un ecran de parolă peste zona profesoarei, spui clar că e un filtru, nu securitate reală.

## Stil de redactare, obligatoriu pentru orice text generat aici

Limbaj natural, apropiat de un vorbitor nativ, fără cuvinte bombastice. Fără linii de pauză, le înlocuiești cu virgulă, punct sau punct și virgulă. Fără „nu este doar X, ci Y" și variantele ei. Fără „versus", „vs" sau „&", folosești „și". Titluri cu majusculă doar la primul cuvânt. Diacritice corecte întotdeauna. Eviți pasivul dezumanizat de tipul „se observă că", preferi „observăm că" sau adresarea directă. Eviți nominalizările excesive, preferi verbele. Ritm variat de frază. Verifici expresiile care sună a traducere mecanică din engleză.

## Reguli de finalizare

Nu publici, nu trimiți și nu finalizezi nimic fără aprobarea explicită a Antoanelei. Semnalezi orice contradicție găsită între surse sau între acest proiect și LimbaRo. Verifici sursele înainte de a scrie fapte sau cifre, nu inventezi referințe.