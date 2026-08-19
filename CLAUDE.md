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

Vite și React, site static, fără backend, găzduit gratuit. Fără librărie de gestiune a stării, complexitatea proiectului nu o justifică. Conținutul stă separat de interfață, în fișiere de date, nu bătut direct în componente.

De la redesignul „aplicație premium", din 2026, se adaugă: Tailwind CSS (v4, token-uri de temă în `src/index.css`), TypeScript pornit treptat (fișierele noi sunt `.tsx`/`.ts`, cele vechi simple rămân `.jsx`, coexistă), componente în stil shadcn/ui în `src/components/ui/` (Radix + Tailwind, cod propriu, nu rulăm CLI-ul), iconografie Lucide, animații cu `motion` (Motion.dev). Rămân excluse din arhitectură: Next.js, React Query, orice backend sau bază de date, cont de utilizator.

```
src/
  data/
    clasa-5/unitatea-1.js
    clasa-8/unitatea-1.js
  components/
    ui/              (button, switch, tooltip, command, sheet — stil shadcn)
    AppShell.tsx     (sidebar + topbar + tranziții de pagină)
    Sidebar.tsx
    SearchPalette.tsx (căutare instant, Ctrl/Cmd+K)
    Prezentare.jsx
    Test.jsx         (linkuri Google Forms, opțional niveluri de dificultate și rubrică)
    Fisa.jsx
    Joc/             (motor reutilizabil pentru exerciții și escape room)
    Infografic.jsx
    Schema.jsx
  contexts/
    ThemeContext.tsx (comutator light/dark, persistat local)
  lib/
    lectii.ts        (calcule pe date: completitudine lecție, listă flat de lecții)
    utils.ts
  pages/
    DashboardPage.tsx
    ClasePage.tsx
    BibliotecaPage.tsx (toate materialele, filtrabile pe tip)
    SetariPage.tsx
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

Un material lipsă rămâne `null`. Nu completezi de umplutură, doar fiindcă structura are câmpul.

## Reguli obligatorii de conținut

1. Conținutul se împarte în două categorii, cu reguli diferite de sursă.
   - Conținut de bază: definiții, reguli gramaticale, informații despre autori și opere, texte literare studiate la clasă. Acesta vine mereu din manual, din ghidul profesorului sau din altă sursă indicată explicit de Antoanela, cu sursa atașată. Nu inventezi niciodată acest tip de conținut.
   - Materiale de sprijin: enunțuri de exerciții, texte pentru teste sau fișe, context și poveste pentru jocuri sau escape room, întrebări de discuție, prezentări originale. Acestea pot fi originale, scrise de tine sau de Antoanela, fără să fie legate strict de un pasaj din manual. Condiția, să fie corecte gramatical, potrivite vârstei și nivelului clasei și să servească exact obiectivul lecției. Nu ai nevoie de sursă exactă pentru ele și **nu mai aștepți aprobare explicită pas cu pas înainte să intre în cod**: le generezi și le integrezi direct, ea le vede publicate și corectează sau cere modificări dacă e cazul. Asta nu se aplică conținutului de bază, care rămâne mereu din surse verificate, indiferent cât de mult cere cineva generare automată.

   Scopul general al materialelor de sprijin, să fie cât mai vizuale, gamificate, atractive și interactive, ca să placă elevilor, fără să sacrifice rigoarea, elevii tot trebuie să învețe serios materia din spatele jocului sau al fișei.
2. Acolo unde sursa conținutului de bază nu e clară, marchezi și întrebi. Nu completezi din memorie sau din presupuneri.
3. NotebookLM e instrument de bază în procesul de producție, folosit pentru prezentări, infografice, unele video-uri, quizuri și chestionare. Rămâne un instrument de punere în formă, nu o sursă de conținut, materialul generat pornește tot din manual, ghid sau alte surse indicate, la fel ca orice alt draft, trece prin aprobare explicită înainte de integrare. Sursa NotebookLM rămâne o notă internă, editorială, nu apare ca etichetă pe site.
4. Producția pe tip de material:

| Material | Cine îl produce | Verificare |
|---|---|---|
| Prezentare | NotebookLM, pornind de la manual și ghid, sau draft original prin tine | Dacă vine din NotebookLM sau conține conținut de bază, aprobare explicită; dacă e original, integrare directă |
| Quiz | NotebookLM | Aprobare explicită înainte de integrare |
| Test, chestionar | Antoanela îl construiește în Google Forms, tu sau NotebookLM propuneți itemii de plecare | Ea decide punctajul și forma finală; itemii originali intră direct |
| Fișă de lucru | Draft prin tine, conținutul de bază din surse indicate, enunțurile pot fi originale | Integrare directă, fără aprobare pas cu pas |
| Joc, escape room | Tu scrii logica, conținutul de bază din manual, povestea sau contextul jocului pot fi originale | Integrare directă; testare tot obligatorie înainte de publicare |
| Video | NotebookLM sau materiale aduse de Antoanela | Vizionare obligatorie înainte de a lega linkul |
| Infografic, schemă | NotebookLM sau Canva, ori draft prin tine ca punct de plecare | Finalizare vizuală de către ea |
| Plan de lecție | Draft prin tine, pornind de la ghid, planificare și obiectivele lecției, obligatoriu pentru fiecare lecție | Aprobare explicită, document intern, nu se publică niciodată |

5. Materialele de sprijin (fișe, jocuri, teste, prezentări originale) intră direct în cod, fără aprobare explicită pas cu pas, conform deciziei din 2026. Planul de lecție rămâne document intern cu aprobare explicită, ca înainte. Conținutul de bază rămâne mereu din surse verificate, cu sursă atașată, indiferent de acest punct.
6. Pe slide-urile de prezentare apar întotdeauna două lucruri, distinct marcate, etapa lecției, de exemplu deschidere, dirijarea învățării, joc, temă, și conținutul pe care elevii trebuie să îl scrie în caiete. Nu amesteci cele două fără să le separi vizual.

## Surse

Sursele stau local, în rădăcina proiectului, în folderul `Clasa a V-a/`, și mai târziu în `Clasa a VIII-a/`. Amândouă sunt în `.gitignore`, nu intră niciodată în git, conțin manualul, ghidul profesorului, planificarea, proiectarea pe unități și orice alt draft de lecție pus acolo de Antoanela. Înainte de a lucra o lecție, cauți direct în acest folder, cu instrumentele de fișiere, și selectezi ce e relevant pentru conținutul cerut, fără să aștepți să fii îndrumat exact la fișier. Dacă nu găsești acolo o sursă de care ai nevoie, cauți suplimentar și în Google Drive, la care ai acces direct prin instrumentele conectate, sau întrebi pe Antoanela. Folosești doar sursele care chiar corespund lecției sau unității în lucru, fără să presupui legături care nu ți-au fost date, și verifici ediția, un manual vechi poate avea altă paginație decât cel curent. Dacă un manual e scanat ca imagine, nu text selectabil, semnalezi înainte de a cita pagini exacte, ar putea fi nevoie de OCR.

## Flux de lucru, pe unitate de învățare

Unitățile au până la douăzeci de lecții. Lucrezi o unitate completă înainte de a trece la următoarea.

1. Antoanela indică clasa, unitatea, paginile din planificare, manual, ghid și orice alte surse relevante.
2. Arăți un tabel cu lecțiile unității și materialele propuse pentru fiecare, nu toate tipurile pentru toate lecțiile. Aștepți aprobare explicită înainte de a continua.
3. Lucrezi lecție cu lecție, în ordine: draft, verificare, aprobare, abia apoi lecția următoare.
4. După aprobarea întregii unități, integrezi conținutul în codul React, ca fișier nou de date.
5. Testați local navigarea și afișarea, apoi faceți deploy.

Nu treci la unitatea următoare fără confirmarea explicită că cea curentă e gata.

## Direcție respinsă sau amânată, 2026

Antoanela a cerut la un moment dat o platformă completă, gen Notion, Canva și Google Classroom, cu backend, cont de elev, gamification, AI Assistant live și, separat, un portofoliu digital al elevului pe tot ciclul gimnazial și un copilot AI live în timpul orei. A confirmat explicit, prin întrebări directe, că:

- OraRO rămâne fără backend, site static, instrument personal, cel puțin deocamdată. Portofoliul digital al elevului (date reale ale unor minori, pe mai mulți ani, cer bază de date și măsuri serioase de confidențialitate) și copilotul AI live (cere o cheie API ascunsă de un server) rămân idei de viitor, nu se construiesc fără backend.
- „Asistentul editorial pentru revista școlii" ține de alt proiect, Site-Principele-Carol, nu de OraRO.
- Constructor de lecții, asistent de evaluare și centru multimedia s-au construit ca variante fezabile fără backend: indicator de completitudine pe lecție, teste cu niveluri de dificultate opționale, modulul Bibliotecă.

Dacă apare din nou cererea de backend, cont de elev sau AI live, verifici mai întâi acest istoric, nu presupui că discuția pornește de la zero.

## Găzduire și acces

Site static, rezultat din build-ul React, găzduit gratuit pe GitHub Pages sau pe Netlify.

Zona elevilor, fișe de lucru, jocuri, escape room, se publică, cu link dat lor direct. Zona Antoanelei, bareme, răspunsuri, notițe despre clase, planuri de lecție, nu se publică deloc, rămâne separată, local sau într-un folder Drive privat. Dacă la un moment dat se pune un ecran de parolă peste zona profesoarei, spui clar că e un filtru, nu securitate reală, un elev priceput la browser poate vedea codul sursă.

## Stil de redactare, obligatoriu pentru orice text generat aici

Limbaj natural, apropiat de un vorbitor nativ, fără cuvinte bombastice. Fără linii de pauză, le înlocuiești cu virgulă, punct sau punct și virgulă. Fără „nu este doar X, ci Y" și variantele ei. Fără „versus", „vs" sau „&", folosești „și". Titluri cu majusculă doar la primul cuvânt. Diacritice corecte întotdeauna, ă, â, î, ș, ț. Eviți pasivul dezumanizat de tipul „se observă că", preferi „observăm că" sau adresarea directă. Eviți nominalizările excesive, preferi verbele. Ritm variat de frază, nu propoziții toate de aceeași lungime. Verifici expresiile care sună a traducere mecanică din engleză și le reformulezi natural.

## Reguli de finalizare

Nu publici, nu trimiți și nu finalizezi nimic fără aprobarea explicită a Antoanelei. Semnalezi orice contradicție găsită între surse sau între acest proiect și LimbaRo. Verifici sursele înainte de a scrie fapte sau cifre, nu inventezi referințe.
