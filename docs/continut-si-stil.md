# Conținut și stil

Regulile de conținut și de redactare, păstrate din CLAUDE.md-ul anterior. Sunt în
vigoare indiferent de etapa de dezvoltare a platformei.

## 1. Domeniu de aplicare

- Clasele a V-a și a VIII-a sunt prioritare în acest an școlar, fiindcă Antoanela
  predă la ele.
- Clasa a V-a se duce până la capăt prima. Clasa a VIII-a e a doua prioritate.
- Clasele a VI-a și a VII-a nu sunt interzise, doar amânate ca ordine: a VI-a
  vine la anul, a VII-a peste doi ani. Aproape toată materia clasei a V-a se reia
  și la a VI-a și a VII-a, cu ceva în plus, deci se poate lucra la ele oricând
  apare ocazia, mai ales unde o lecție se reia aproape identic.
- Nu presupune că LimbaRo acoperă deja toate lecțiile la clasa a V-a. Verifică
  înainte de orice presupunere și semnalează contradicțiile între conținutul din
  LimbaRo și sursele noi.

## 2. Convenția de numerotare a lecțiilor

**Decizie asumată, nu inconsecvență. Nu o „repara".**

- **Clasa a V-a** urmează numerotarea proprie a manualului: o lecție de site
  corespunde unei „Lecția N" din manual, cu granularitatea dată de manual.
- **Clasele a VI-a, a VII-a și a VIII-a**, decizie confirmată separat pentru
  fiecare, se împart pe ore de curs din proiectarea pe unități, o resursă de site
  per oră. Unde o singură lecție de manual se predă în 2 sau 3 ore, apare ca 2
  sau 3 lecții de site, cu `sursaManual` notând „partea 1/2", „partea 2/2", ca să
  nu pară eroare de citare.

Rezultatul: aceste clase au semnificativ mai multe lecții de site decât numărul
propriu de lecții al manualului.

Dacă reiei vreodată clasele a VI-a, a VII-a sau a VIII-a de la zero, alege din
nou explicit una dintre cele două convenții, nu presupune automat una.

## 3. Ediția manualului la clasa a VIII-a

Discrepanță reală, descoperită și rezolvată cu Antoanela.

Sursele locale `8_proiectare pe unitati.doc` și `8_planificare calendaristica.doc`
sunt scrise pentru anul școlar 2022-2023 și au o structură de 5 unități complet
diferită de manualul din folder (`Manual Art 8.pdf`, generat 2025) și de
`8. Ghid.pdf`: alte titluri, altă ordine, iar unitatea „Ce înseamnă prietenia?"
cu Platanos de Doina Ruști nu există deloc în ediția 2025.

**S-a ales manualul nou și ghidul ca autoritate.** Ghidul conține propria
planificare calendaristică orientativă 2025-2026 și proiectarea unităților de
învățare, actualizate pentru ediția curentă. Documentele `.doc` vechi rămân
nefolosite.

Dacă apar surse noi pentru clasa a VIII-a, verifică mai întâi dacă țin de aceeași
ediție 2025.

## 4. Cele două categorii de conținut

### Conținut de bază

Definiții, reguli gramaticale, informații despre autori și opere, texte literare
studiate la clasă.

Vine **mereu** din manual, din ghidul profesorului sau din altă sursă indicată
explicit de Antoanela, cu sursa atașată. **Nu inventa niciodată acest tip de
conținut**, indiferent cât de mult cere cineva generare automată.

Acolo unde sursa nu e clară, marchează și întreabă. Nu completa din memorie sau
din presupuneri.

### Materiale de sprijin

Enunțuri de exerciții, texte pentru teste sau fișe, context și poveste pentru
jocuri sau escape room, întrebări de discuție, prezentări originale.

Pot fi originale, scrise de tine sau de Antoanela, fără să fie legate strict de un
pasaj din manual. Condiția: corecte gramatical, potrivite vârstei și nivelului
clasei, și să servească exact obiectivul lecției.

**Nu aștepta aprobare pas cu pas.** Le generezi și le integrezi direct, ea le
vede publicate și corectează dacă e cazul. Decizie din 2026.

Scopul general al materialelor de sprijin: cât mai vizuale, gamificate,
atractive și interactive, fără să sacrifice rigoarea. Elevii tot trebuie să învețe
serios materia din spatele jocului sau al fișei.

## 5. Producția pe tip de material

| Material | Cine îl produce | Verificare |
|---|---|---|
| Prezentare | NotebookLM din manual și ghid, sau draft original | Aprobare explicită dacă vine din NotebookLM sau conține conținut de bază; integrare directă dacă e original |
| Quiz | NotebookLM | Aprobare explicită înainte de integrare |
| Test, chestionar | Antoanela în Google Forms, itemii de plecare de la tine sau NotebookLM | Ea decide punctajul și forma finală; itemii originali intră direct |
| Fișă de lucru | Draft prin tine, conținutul de bază din surse | Integrare directă |
| Joc, escape room | Tu scrii logica, povestea poate fi originală | Integrare directă, testare obligatorie înainte de publicare |
| Video | NotebookLM sau materiale aduse de Antoanela | Vizionare obligatorie înainte de a lega linkul |
| Infografic, schemă | NotebookLM, Canva, sau draft prin tine | Finalizare vizuală de către ea |
| Plan de lecție | Draft prin tine, din ghid, planificare și obiective | Vezi secțiunea 6 |

**NotebookLM** e instrument de punere în formă, nu sursă de conținut. Materialul
generat pornește tot din manual, ghid sau alte surse indicate. Sursa NotebookLM
rămâne notă internă, editorială, nu apare ca etichetă pe site.

**Pe slide-urile de prezentare** apar întotdeauna două lucruri, distinct marcate:
etapa lecției (deschidere, dirijarea învățării, joc, temă) și conținutul pe care
elevii trebuie să-l scrie în caiete. Nu le amesteca fără să le separi vizual.

## 6. Planurile de lecție

**Modelul curent: 6 pași, momentele lecției**, titluri fixe, total 50 de minute.

1. **Moment organizatoric**, exact aceste două cuvinte
2. Captarea atenției
3. Enunțarea subiectului și a obiectivelor
4. Reactualizarea cunoștințelor anterioare
5. Dirijarea învățării, referă direct materialul existent al lecției
6. Obținerea performanței, referă quizul sau fișa, dacă există

Fiecare pas se populează cu conținut relevant pentru lecția respectivă, derivat
din datele existente în `src/data/`: obiectivele lecției, sursa din manual,
materialele deja create. **Nu genera titluri goale.**

Repartiția minutelor variază după tipul orei:

| Tip oră | Org. | Captare | Obiective | Reactualizare | Dirijare | Performanță |
|---|---|---|---|---|---|---|
| Predare normală | 3 | 5-7 | 2 | 6-7 | 22-25 | 9-12 |
| Cu quiz la final | 3 | 5 | 2 | 6 | 22 | 12 |
| Redactare, partea a 2-a | 3 | 4 | 2 | 5 | 19 | 17 |
| Recapitulare | 3 | 4 | 2 | 8 | 16-18 | 15-16 |
| Proiect, anunțare | 3 | 6 | 2 | 4 | 23 | 12 |
| Proiect, prezentare | 3 | 3 | 2 | 3 | 8 | 31 |
| Evaluare, probă scrisă | 3 | 2 | 2 | 3 | 5 | 35 |

**Fluxul de generare**, stabilit și verificat pe clasa a V-a: un fișier de
autorat per unitate în `scripts/planuri/`, apoi
`node scripts/inject-plan-lectie.mjs <fisier-date> <fisier-planuri>` injectează
`planLectie` lecție cu lecție fără să atingă restul fișierului. Build cu
`npm run build`. Commit și push separat după fiecare unitate, cu raport: câte
schițe, minute pe etapă, lecții unde datele nu au fost suficiente.

**Publicare.** Schițele de plan în 6 pași se publică pe site, sub eticheta
discretă „Doar profesor" din `PlanProfesor.tsx`. Decizie asumată de Antoanela:
structura de bază a unui plan e un model didactic standard, nu conținut sensibil.

**Planurile ERR mai vechi**, 258 de planuri în format Evocare, Constituirea
sensului, Reflecție, stau în `notite-profesor/`, gitignored. Sunt altă formă și
**rămân neatinse**. Nu le șterge, nu le rescrie, nu le converti.

## 7. Surse

Sursele stau local, în rădăcina proiectului, în folderele `Clasa a V-a/` până la
`Clasa a VIII-a/`. Toate sunt în `.gitignore`, nu intră niciodată în git. Conțin
manualul, ghidul profesorului, planificarea, proiectarea pe unități și orice alt
draft pus acolo de Antoanela.

Înainte de a lucra o lecție, caută direct în aceste foldere și selectează ce e
relevant, fără să aștepți să fii îndrumat exact la fișier. Dacă nu găsești o
sursă, caută în Google Drive sau întreab-o pe Antoanela.

Folosește doar sursele care corespund lecției sau unității în lucru, fără să
presupui legături care nu ți-au fost date. **Verifică ediția**, un manual vechi
poate avea altă paginație. Dacă un manual e scanat ca imagine, nu text
selectabil, semnalează înainte de a cita pagini exacte, ar putea fi nevoie de
OCR.

`notite-profesor/` conține rezolvările din ghid, baremurile și notițele de clasă.
E gitignored și **nu se importă niciodată din `src/`**.

## 8. Stil de redactare, obligatoriu pentru orice text generat aici

- Limbaj natural, apropiat de un vorbitor nativ, fără cuvinte bombastice.
- **Fără linii de pauză.** Se înlocuiesc cu virgulă, punct sau punct și virgulă.
- Fără „nu este doar X, ci Y" și variantele ei.
- Fără „versus", „vs" sau „&". Folosește „și".
- Titluri cu majusculă doar la primul cuvânt.
- Diacritice corecte întotdeauna: ă, â, î, ș, ț.
- Evită pasivul dezumanizat de tipul „se observă că", preferă „observăm că" sau
  adresarea directă.
- Evită nominalizările excesive, preferă verbele.
- Ritm variat de frază, nu propoziții toate de aceeași lungime.
- Verifică expresiile care sună a traducere mecanică din engleză și
  reformulează-le natural.

Se aplică și textelor din interfață, nu doar conținutului didactic.

## 9. Finalizare

Nu publica, nu trimite și nu finaliza nimic fără aprobarea explicită a
Antoanelei. Semnalează orice contradicție găsită între surse sau între acest
proiect și LimbaRo. Verifică sursele înainte de a scrie fapte sau cifre, nu
inventa referințe.
