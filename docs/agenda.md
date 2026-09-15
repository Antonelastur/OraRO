# AGENDA, agenda profesorului în OraRO

Plan de proiectare. Nu conține cod și nu descrie funcții implementate.

AGENDA acoperă anul școlar întreg: cele 53 de săptămâni, cele 12 luni, clasele,
catalogul de lucru, absențele, purtarea, comunicarea cu părinții și activitățile
administrative. OraRO acoperă azi lecția și ora. AGENDA e stratul din jurul lor.

> Criteriul de succes, în prelungirea celui din `docs/roadmap.md`:
> poate profesoara să închidă duminica fără să mai țină nimic minte despre
> săptămâna care vine?

---

## 1. Raportul cu OraRO, LimbaRo și cu ce există deja

| Proiect | Cine îl folosește | Când |
|---|---|---|
| LimbaRo | elevul | acasă, exersare independentă |
| OraRO | profesoara | înainte de oră și în timpul orei |
| AGENDA | profesoara | în jurul orei: an, săptămână, clasă, catalog, administrație |

AGENDA nu e un proiect nou. E numele pentru un grup de funcții din care OraRO are
deja o parte, iar `docs/roadmap.md` prevede alta.

**Ce există și se refolosește ca atare:**

| Piesă existentă | Cum o folosește AGENDA |
|---|---|
| `AppShell`, `Sidebar`, `Breadcrumb` | secțiunile noi intră în aceeași navigație, nu în alta |
| `SearchPalette` | se extinde cu elevi, săptămâni și clase, nu se rescrie |
| `src/lib/jurnal.ts` | lecțiile parcurse alimentează progresul pe unitate din AGENDA |
| `src/lib/lectii.ts` | lista plată de lecții, deja calculată, e sursa pentru planificare |
| `src/lib/ora.ts` | duratele blocurilor dau estimarea de ore pe unitate |
| `CockpitPage`, `ReflectieOra` | rămân neatinse, AGENDA le dă doar contextul de zi |
| `ThemeContext`, `components/ui/` | aceleași componente, fără stil paralel |

**Ce prevede deja roadmap-ul și AGENDA doar detaliază:** prioritatea 5
Planificarea, prioritatea 7 Activitățile, prioritatea 8 Evaluarea.

**Ce e complet nou, nemenționat până acum nicăieri în proiect:** catalogul de
lucru (note, calificative, medii), absențele și întârzierile, purtarea și
implicarea, comunicarea cu părinții și consultațiile.

---

## 2. Decizia de structură

Două variante reale.

| Criteriu | A. Secțiune în OraRO | B. Aplicație separată |
|---|---|---|
| Navigație | o singură aplicație, un singur Ctrl+K | două aplicații deschise în paralel |
| Refolosire cod | `AppShell`, `ui/`, `lib/`, temă, rute | se copiază sau se duplică |
| Legătura lecție cu data calendaristică | directă, aceleași date | cere un contract între aplicații |
| Date despre elevi într-un repo public | necesită regulă strictă, vezi secțiunea 7 | aceeași problemă, repo separat privat |
| Risc de a încetini ETAPA 1 din roadmap | real, dacă se lucrează în paralel | mic |
| Efort total | mai mic | mai mare |

**Recomandare: varianta A, secțiune în OraRO,** cu o condiție: AGENDA nu începe
înainte ca „Ora de azi" să fie funcțională, pentru că pasul 2 din ETAPA 1 este
exact prima etapă din AGENDA. Le construim în aceeași ordine, nu în paralel.

Motivul principal e în secțiunea următoare.

---

## 3. Motorul de calendar deblochează „Ora de azi"

Acesta e argumentul cel mai important al documentului.

`docs/roadmap.md` spune că „Ora de azi" nu există și că e blocată de lipsa lui
`ScheduleItem`. `docs/data-model.md` §11 spune că `ScheduleItem` leagă o dată
calendaristică de o lecție și o clasă, și că se construiește din planificarea
calendaristică.

Motorul de calendar din AGENDA produce exact acea legătură. Deci prima etapă din
AGENDA nu e o abatere de la roadmap, e pasul 2 din ETAPA 1.

### Cum funcționează

**Intrare:** modelul de an ales, plus o singură dată introdusă manual, prima zi de
luni a anului școlar.

**Ieșire:** 53 de săptămâni, 12 luni, fiecare zi încadrată pe modul, vacanță sau
zi liberă.

1. Verificăm că data introdusă e într-adevăr luni. Dacă nu, corectăm la lunea cea
   mai apropiată și anunțăm în interfață.
2. Generăm 53 de săptămâni consecutive, fiecare pornind lunea.
3. Suprapunem modulele și vacanțele. O săptămână tăiată de o vacanță la mijloc
   primește marcaj parțial, cu zilele clasificate una câte una.
4. Marcăm zilele libere legale, Săptămâna verde și Școala altfel.
5. Construim vederea pe 12 luni, fiecare lună trimițând către săptămânile care o
   ating.
6. Din orar plus calendar rezultă numărul de ore efective pe clasă, pe modul și pe
   an.

**De ce 53 și nu 52.** Un an calendaristic are 52 de săptămâni complete plus una
sau două zile. Intervalul septembrie, iunie, cu vacanțele de la capete, poate
atinge 53 de săptămâni ISO. Generând 53 acoperim orice configurație, iar
săptămânile din afara anului de curs rămân marcate ca atare.

### Ce trebuie introdus, nu dedus

Structura anului școlar, cele 5 module și datele vacanțelor, se stabilește anual
prin ordin de ministru. Nu o scriem fix în cod. Aplicația vine cu un preset
editabil pe care îl confirmi la prima pornire, cu trimitere la ordinul oficial.
Presetul se salvează și se reîncarcă anul următor.

Nu îți pot confirma din memorie datele exacte ale modulelor pentru anul acesta.
Le introduci tu sau le verificăm împreună în ordin.

Același lucru pentru Săptămâna verde și Școala altfel, care se programează la
nivel de școală.

---

## 4. Entități noi

Numele urmează convenția din `docs/data-model.md`: entitățile conceptuale poartă
nume englezești, câmpurile și codul rămân în română, ca în `src/lib/`.

### 4.1 SchoolYear, deja în model, fără formă concretă

```
SchoolYear {
  id, denumire            // "2026-2027"
  primaZiDeLuni           // singura dată introdusă manual
  model                   // gimnaziu | primar | liceu
  module[]                // 5: { numar, dataStart, dataFinal }
  vacante[]               // { denumire, dataStart, dataFinal }
  saptamaniSpeciale[]     // Săptămâna verde, Școala altfel
  zileLibere[]            // sărbători legale și zile libere locale
}
```

### 4.2 Saptamana, derivată, niciodată introdusă manual

```
Saptamana {
  numar                   // 1 la 53
  numarISO
  dataStart, dataFinal
  modulId                 // null în vacanță
  tip                     // curs | vacanta | speciala | inafara
}
```

### 4.3 IntrareOrar, precondiția lui ScheduleItem

```
IntrareOrar {
  clasaId
  zi                      // 1 la 5
  ora                     // 1 la 7
  sala
}
```

Orarul se introduce o singură dată pe an. Din el rezultă ce clase apar în fiecare
zi, câte ore ai pe săptămână și unde se pot marca absențe pe oră.

`docs/roadmap.md` notează că orarul vine în octombrie 2026. Până atunci, motorul
de calendar se poate construi și testa fără el, pentru că nu depinde de orar.
Orarul e necesar abia la pasul următor.

### 4.4 ScheduleItem, forma cerută de `docs/data-model.md` §11

```
ScheduleItem {
  id
  data, ora               // din orar plus calendar
  clasaId
  lectieId                // referință în src/data/, nu copie
  statut                  // programata | in_desfasurare | parcursa | reprogramata
}
```

Generarea e semiautomată: din orar și calendar rezultă sloturile goale, iar
lecțiile se așază peste ele din planificarea calendaristică, cu posibilitatea de
a muta manual. Mutarea unei lecții actualizează planificarea fără să atingă
resursele asociate, cum cere modelul.

Statutul `parcursa` se citește din `src/lib/jurnal.ts`, nu se dublează.

### 4.5 Student, catalog de lucru

```
Student {
  id, clasaId
  nume, prenume
  initiale                // generate, folosite în orice ieșire vizibilă
  contactParinte          // nume, telefon, email, relație
  activ                   // pentru transferuri în timpul anului
  observatii
}

Nota {
  id, elevId, clasaId
  valoare                 // 1 la 10, sau calificativ FB, B, S, I
  data, modulId           // modulul dedus din dată
  tip                     // oral | scris | test | practic | proiect | portofoliu
  lectieId                // opțional, leagă nota de ora în care a fost dată
  observatie
  contorizata             // permite note de lucru, excluse din medie
}

Absenta {
  id, elevId, clasaId
  data, ora
  tip                     // absenta | intarziere
  motivata
  documentMotivare
}

Purtare {
  elevId, modulId
  nota
  implicare               // scor 1 la 5, uz intern
  incidente[]             // { data, descriere, masura }
}

Comunicare {
  id, elevId
  data, canal             // consultatie | telefon | email | sedinta | mesaj
  subiect, rezumat, urmare, rezolvat
}

Activitate {
  id, data
  tip                     // suplinire | lucrare | sedinta | consiliu |
                          // serviciu | formare | erasmus | altele
  titlu, descriere, clasaId, status, documentAsociat
}
```

`FisaElev` nu e entitate separată. E o vedere care adună note, absențe, purtare,
comunicare și observații într-un singur ecran printabil.

---

## 5. Ce se derivă, ce se stochează

Regula din `docs/architecture.md` §2, strat de derivare în loc de migrare, se
aplică și aici.

| Informație | Sursă |
|---|---|
| Cele 53 de săptămâni | derivate din `SchoolYear`, niciodată salvate |
| Cele 12 luni | derivate din săptămâni |
| Modulul unei date | derivat |
| Numărul de ore pe clasă | derivat din orar plus calendar |
| Media pe modul și pe an | derivată din note, la fiecare afișare |
| Progresul pe unitate | derivat din jurnal, cum cere `data-model.md` §3 |
| Lecțiile | rămân în `src/data/`, AGENDA le referă, nu le copiază |
| `SchoolYear`, orar, elevi, note, absențe, purtare, comunicare, activități | se stochează |

Nimic derivat nu se scrie în stocare. Asta evită situația în care media salvată
rămâne în urma notelor.

---

## 6. Regula de calcul al mediilor

Nu îți pot garanta din memorie care e formula oficială în vigoare pentru anul
acesta. Reglementarea s-a schimbat odată cu trecerea la structura pe module și cu
noua lege a învățământului, iar o formulă greșită într-un catalog e o problemă
reală, nu o inexactitate de plan.

Proiectăm regula ca setare, în `SetariPage`.

| Parametru | Opțiuni |
|---|---|
| Unitatea de agregare | pe modul, pe semestru, pe an |
| Formula | medie aritmetică, medie ponderată pe tipuri de evaluare |
| Rotunjire | matematică, în favoarea elevului, fără rotunjire |
| Număr minim de note | prag configurabil, cu alertă pentru elevii sub prag |
| Note necontorizate | note de lucru, vizibile, excluse din medie |
| Media la purtare | separată, scădere pe absențe nemotivate, prag configurabil |

Mediile apar întotdeauna cu mențiunea „calcul orientativ". Catalogul oficial
rămâne referința legală. AGENDA te scutește de aritmetică, nu înlocuiește
catalogul.

Formula corectă se confirmă înainte de implementare.

---

## 7. Stocarea și confidențialitatea, punctul cel mai delicat

Aici e o contradicție aparentă cu documentele existente, pe care o semnalez
explicit.

`docs/architecture.md` §5 spune: „Pentru planuri personale, baremuri, notițe,
date despre elevi și materiale private e nevoie de un backend sau API cu
autentificare și autorizare reale." AGENDA e, în întregime, date despre elevi.

**Contradicția se rezolvă, dar numai cu o distincție precisă.** Regula din
arhitectură vizează conținutul care ajunge în bundle, adică fișierele publicate
pe GitHub Pages dintr-un repo public. Datele pe care le introduci tu în browser
nu trec niciodată prin bundle. Deci:

1. **Nicio dată despre elevi nu intră în `src/`.** Fără fișiere de date cu nume de
   elevi, fără note, fără absențe, nici măcar ca exemplu. Datele de test sunt
   inventate și marcate ca atare.
2. **Ieșirile vizibile folosesc inițiale și clasa.** Numele complet apare doar în
   fișa individuală și în catalogul tău, niciodată într-un raport destinat
   afișării.
3. **Nu punem ecran de parolă peste AGENDA și nu îl numim securitate.** Regula din
   `docs/architecture.md` §5 rămâne: ascunderea unui element de interfață nu e
   control de acces. Dacă totuși adăugăm un ecran, îl numim filtru.

**Unde stau datele.** `localStorage` e deja folosit pentru jurnal, cu limitarea
documentată: un singur browser, un singur calculator. Pentru AGENDA limitarea e
mult mai gravă. O reflecție pierdută e neplăcută, un catalog pierdut e altceva.

| Variantă | Pentru | Contra |
|---|---|---|
| `localStorage`, ca acum | zero cod nou | limita de aproximativ 5 MB, scriere sincronă a întregului obiect, fragil |
| IndexedDB, wrapper propriu în `src/lib/` | fără dependență nouă, consecvent cu „nu introduce dependențe inutile" | aproximativ 150 de linii de scris și de întreținut |
| IndexedDB prin Dexie | API confortabil, migrări simple | o dependență în plus |

**Recomandare:** IndexedDB cu wrapper propriu în `src/lib/`, pentru catalog și
absențe. `localStorage` rămâne pentru ce folosește deja, jurnal și temă. Trecem la
Dexie doar dacă migrările de schemă devin greu de întreținut, nu preventiv.

**Backup, obligatoriu, nu opțional.** Un fișier JSON descărcat la fiecare pornire,
buton de backup manual, restaurare cu previzualizare a ce se suprascrie, și un
avertisment vizibil că ștergerea datelor de navigare șterge agenda. Backup-ul
conține date personale, deci se ține pe un dispozitiv protejat, nu pe email.

Dacă apare vreodată backendul din ETAPA 3, AGENDA e primul candidat pentru
sincronizare, dar nu o construim presupunând că vine.

---

## 8. Rute și ecrane

Se adaugă la rutele existente din `App.jsx`, în același `AppShell`.

```
/an                      cele 12 luni, structura anului, modulele
/an/saptamana/:numar     fișa săptămânii, una din 53
/an/luna/:numar          vederea lunară
/orar                    orarul, introdus o dată pe an
/clase/:clasa/catalog    note, absențe, medii
/clase/:clasa/purtare    purtare și implicare
/elev/:id                fișa individuală, printabilă
/parinti                 comunicare și consultații
/activitati              supliniri, lucrări, ședințe, formare, Erasmus
/notite                  informații importante
/export                  rapoarte, PDF, Excel, backup
```

Rutele existente rămân neschimbate.

**Navigația.** `SearchPalette` se extinde cu elevi după nume, săptămâni după
număr și clase. Breadcrumb-ul capătă contextul de an: An, Modul 2, Săptămâna 14,
marți, clasa a V-a A. Săgețile stânga și dreapta mută între săptămâni. Maximum
două clicuri sau o combinație de taste către orice secțiune.

**Cardul „Ora de azi"**, prevăzut în roadmap ca pasul 3 și 6 din ETAPA 1, câștigă
din AGENDA: ce zi din structura anului e azi, ce clase urmează, butoane rapide
pentru absențe și note, ce e de corectat, alerte pentru elevii fără numărul minim
de note.

---

## 9. Etape, așezate peste roadmap-ul existent

Ordinea din `docs/roadmap.md` rămâne. AGENDA se împarte între etapele existente,
nu deschide o coadă paralelă.

### În ETAPA 1, ca pașii 2 și 3

| Pas | Conținut | Estimare |
|---|---|---|
| A1 | Motorul de calendar în `src/lib/`, cu teste. `SchoolYear` și 53 de săptămâni. Fără interfață. | 2 la 3 zile |
| A2 | Ecranul de configurare a anului: modelul, prima zi de luni, confirmarea modulelor | 1 zi |
| A3 | Orarul, `IntrareOrar`, introdus o dată | 1 zi, după ce vine orarul |
| A4 | `ScheduleItem` generat din orar plus calendar, cu mutare manuală | 2 la 3 zile |
| A5 | „Ora de azi", pasul 3 din roadmap, acum nedeblocat | conform roadmap |

A1 și A2 se pot face imediat, nu depind de orar.

### După ETAPA 1, ca prioritatea 5 din roadmap

| Pas | Conținut | Estimare |
|---|---|---|
| A6 | Cele 53 de fișe săptămânale, cu datele completate automat | 3 la 4 zile |
| A7 | Vederea pe 12 luni și pe modul | 2 zile |
| A8 | Planificarea calendaristică și unitățile, legate de săptămâni, cu progres din jurnal | 4 la 5 zile |

### Catalogul, blocul nou

Nu figurează în roadmap-ul actual. Se așază între prioritatea 5 și prioritatea 7,
pentru că prioritatea 8, Evaluarea, presupune rezultate de la elevi, care cer
backend, iar catalogul nu.

**Distincția de reținut:** `StudentResponse` cere backend, pentru că răspunsul
vine de la elev. `Nota` nu cere backend, pentru că o introduci tu. Catalogul din
AGENDA nu e blocat de decizia despre backend.

| Pas | Conținut | Estimare |
|---|---|---|
| A9 | Stratul de stocare IndexedDB plus backup și restaurare | 2 la 3 zile |
| A10 | Elevi, cu import din Excel sau lipire din catalog | 2 zile |
| A11 | Note și absențe, introducere rapidă din cockpit și din catalog | 4 la 5 zile |
| A12 | Medii, cu regula configurabilă și alertele | 2 la 3 zile |
| A13 | Purtare și implicare | 2 zile |
| A14 | Comunicare cu părinții și consultații | 2 zile |
| A15 | Activități: supliniri, lucrări, ședințe, formare, Erasmus | 2 zile |
| A16 | Fișa elevului, rapoarte pe clasă și pe modul, export PDF și Excel | 4 la 5 zile |

Estimările presupun lucru pe seară și în weekend. A1 și A2 sunt cele care contează
acum, pentru că deblochează funcția de prioritate 1 din roadmap.

---

## 10. Ce nu face AGENDA

- nu înlocuiește catalogul oficial, calculele sunt orientative
- nu completează conținut didactic, planificarea și competențele le scrii tu
- nu propune nota, calificativul sau aprecierea la purtare
- nu redactează comunicarea cu părinții
- nu trimite nimic nimănui, fără email, fără mesaje automate
- nu publică nicio dată despre elevi

---

## 11. Riscuri

| Risc | Tratament |
|---|---|
| AGENDA încetinește ETAPA 1 din roadmap | primul pas din AGENDA e chiar pasul 2 din ETAPA 1, nu o deviere |
| Structura anului școlar se schimbă prin ordin nou | nimic fix în cod, totul editabil |
| Formula mediilor e greșită | regulă configurabilă, mențiunea „calcul orientativ", confirmare înainte de folosire |
| Pierderea datelor din browser | backup la fiecare pornire, avertisment vizibil, restaurare cu previzualizare |
| Date despre elevi ajung în repo public | regula din secțiunea 7, nicio dată reală în `src/`, verificare înainte de commit |
| Proiectul se întinde și rămâne neterminat | A1 și A2 produc singure ceva utilizabil în sub o săptămână |
| Introducerea datelor devine ea însăși o corvoadă | import pentru elevi, orar introdus o dată, restul completat automat |

---

## 12. Ce așteaptă confirmarea Antoanelei

1. Varianta de structură: secțiune în OraRO, recomandat, sau aplicație separată.
2. Ordinea: AGENDA începe cu A1 și A2 acum, în paralel cu așteptarea orarului, sau
   după ce „Ora de azi" e gata.
3. Formula oficială de calcul al mediilor, sau acordul să o verificăm în ordin.
4. Datele structurii anului școlar curent: cele 5 module, vacanțele, Săptămâna
   verde, Școala altfel.
5. Lista completă a claselor predate anul acesta, cu numărul de ore. OraRO are
   conținut pentru patru clase, dar orarul real poate cuprinde mai multe.
6. Dacă ești diriginte, pentru că asta adaugă situația școlară pe toate
   disciplinele și ședințele cu părinții.
7. Formatul cerut de școală pentru planificarea calendaristică, ca exportul PDF să
   iasă direct bun de pus la dosar.
