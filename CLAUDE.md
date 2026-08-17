# CLAUDE.md — OraRO

Instrucțiuni de proiect pentru Claude, valabile în orice sesiune de lucru pe acest proiect, în Cowork sau în alt context. Nu te abați de la ele fără confirmarea explicită a Antoanelei.

## Ce este acest proiect

Curs online personal și privat de limba și literatura română, pentru gimnaziu, gândit pentru predare, învățare și evaluare la clasă, față în față cu elevii. Nu este LimbaRo. LimbaRo rămâne instrumentul de exersare independentă a elevului, după ce materia a fost predată. OraRO este instrumentul de lucru al profesoarei, folosit înainte și în timpul orei.

## Domeniu de aplicare, anul acesta

- Clasa a V-a, prioritate, se duce până la capăt prima.
- Clasa a VIII-a, a doua prioritate, după ce clasa a V-a e completă.
- Clasele a VI-a și a VII-a rămân pentru anul următor. Nu le atingi acum.
- Nu presupui că LimbaRo acoperă deja toate lecțiile la clasa a V-a. Verifici înainte de orice presupunere și semnalezi dacă găsești contradicții între conținutul din LimbaRo și sursele noi.

## Arhitectură tehnică

Vite și React. Fără librărie de gestiune a stării, complexitatea proiectului nu o justifică. Conținutul stă separat de interfață, în fișiere de date, nu bătut direct în componente.

```
src/
  data/
    clasa-5/unitatea-1.js
    clasa-8/unitatea-1.js
  components/
    Prezentare.jsx
    Test.jsx        (afișează doar linkul spre Google Forms)
    Fisa.jsx
    Joc/             (motor reutilizabil pentru exerciții și escape room)
    Infografic.jsx
    Schema.jsx
  pages/
    ClasaPage.jsx
    UnitatePage.jsx
    LectiePage.jsx
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

Un material lipsă rămâne `null`. Nu completezi de umplutură, doar fiindcă structura are câmpul.

## Reguli obligatorii de conținut

1. Nu inventezi niciodată conținut didactic. Orice text real vine din manual, din ghidul profesorului sau din alte surse indicate explicit de Antoanela. Fiecare item real poartă sursa lui.
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
6. Pe slide-urile de prezentare apar întotdeauna două lucruri, distinct marcate, etapa lecției, de exemplu deschidere, dirijarea învățării, joc, temă, și conținutul pe care elevii trebuie să îl scrie în caiete. Nu amesteci cele două fără să le separi vizual.

## Surse

Sursele stau în Google Drive, la care ai acces direct prin instrumentele conectate, de căutare și de citire a fișierelor. Folderul central pe clasă, nu duplicat per proiect, e `Surse curs/Clasa V/`, `Surse curs/Clasa VIII/`, locul de referință unde muți sau unde Antoanela îți trimite fișierele curate. Nu aștepți însă neapărat ca un fișier să ajungă acolo ca să-l poți folosi, cauți direct în Drive planificarea, manualul, ghidul profesorului sau alte surse relevante, după titlu sau autor, dacă nu le găsești deja indicate explicit. Folosești doar sursele care chiar corespund lecției sau unității în lucru, fără să presupui legături care nu ți-au fost date, și verifici ediția, un manual vechi poate avea altă paginație decât cel curent. Dacă un manual e scanat ca imagine, nu text selectabil, semnalezi înainte de a cita pagini exacte, ar putea fi nevoie de OCR.

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

Zona elevilor, fișe de lucru, jocuri, escape room, se publică, cu link dat lor direct. Zona Antoanelei, bareme, răspunsuri, notițe despre clase, nu se publică deloc, rămâne separată, local sau într-un folder Drive privat. Dacă la un moment dat se pune un ecran de parolă peste zona profesoarei, spui clar că e un filtru, nu securitate reală, un elev priceput la browser poate vedea codul sursă.

## Stil de redactare, obligatoriu pentru orice text generat aici

Limbaj natural, apropiat de un vorbitor nativ, fără cuvinte bombastice. Fără linii de pauză, le înlocuiești cu virgulă, punct sau punct și virgulă. Fără „nu este doar X, ci Y" și variantele ei. Fără „versus", „vs" sau „&", folosești „și". Titluri cu majusculă doar la primul cuvânt. Diacritice corecte întotdeauna, ă, â, î, ș, ț. Eviți pasivul dezumanizat de tipul „se observă că", preferi „observăm că" sau adresarea directă. Eviți nominalizările excesive, preferi verbele. Ritm variat de frază, nu propoziții toate de aceeași lungime. Verifici expresiile care sună a traducere mecanică din engleză și le reformulezi natural.

## Reguli de finalizare

Nu publici, nu trimiți și nu finalizezi nimic fără aprobarea explicită a Antoanelei. Semnalezi orice contradicție găsită între surse sau între acest proiect și LimbaRo. Verifici sursele înainte de a scrie fapte sau cifre, nu inventezi referințe.
