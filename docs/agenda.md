# AGENDA, agenda profesorului în OraRO

Plan de proiectare. Nu conține cod și nu descrie funcții implementate.

AGENDA acoperă anul școlar întreg: cele 53 de săptămâni, cele 12 luni, orarul,
planificarea, comunicarea cu părinții, activitățile administrative și notițele.
OraRO acoperă azi lecția și ora. AGENDA e stratul din jurul lor.

> Criteriul de succes, în prelungirea celui din `docs/roadmap.md`:
> poate profesoara să închidă duminica fără să mai țină nimic minte despre
> săptămâna care vine?

**Catalogul rămâne în afara proiectului.** Notele, absențele, mediile și purtarea
se țin în catalogul electronic oficial al școlii. AGENDA nu le duplică, nu le
calculează și nu le stochează. Vezi secțiunea 9.

---

## 1. Raportul cu OraRO, LimbaRo și cu ce există deja

| Proiect | Cine îl folosește | Când |
|---|---|---|
| LimbaRo | elevul | acasă, exersare independentă |
| OraRO | profesoara | înainte de oră și în timpul orei |
| AGENDA | profesoara | în jurul orei: an, săptămână, planificare, administrație |

AGENDA nu e un proiect nou. E numele pentru un grup de funcții din care OraRO are
deja o parte, iar `docs/roadmap.md` prevede alta.

**Ce există și se refolosește ca atare:**

| Piesă existentă | Cum o folosește AGENDA |
|---|---|
| `AppShell`, `Sidebar`, `Breadcrumb` | secțiunile noi intră în aceeași navigație, nu în alta |
| `SearchPalette` | se extinde cu săptămâni, clase și activități, nu se rescrie |
| `src/lib/jurnal.ts` | lecțiile parcurse alimentează progresul pe unitate din AGENDA |
| `src/lib/lectii.ts` | lista plată de lecții, deja calculată, e sursa pentru planificare |
| `src/lib/ora.ts` | duratele blocurilor dau estimarea de ore pe unitate |
| `CockpitPage`, `ReflectieOra` | rămân neatinse, AGENDA le dă doar contextul de zi |
| `ThemeContext`, `components/ui/` | aceleași componente, fără stil paralel |

**Ce prevede deja roadmap-ul și AGENDA doar detaliază:** prioritatea 5
Planificarea și prioritatea 7 Activitățile.

**Ce e nou, nemenționat până acum în proiect:** comunicarea cu părinții și
consultațiile, plus evidența activităților administrative.

---

## 2. Decizia de structură

Două variante reale.

| Criteriu | A. Secțiune în OraRO | B. Aplicație separată |
|---|---|---|
| Navigație | o singură aplicație, un singur Ctrl+K | două aplicații deschise în paralel |
| Refolosire cod | `AppShell`, `ui/`, `lib/`, temă, rute | se copiază sau se duplică |
| Legătura lecție cu data calendaristică | directă, aceleași date | cere un contract între aplicații |
| Risc de a încetini ETAPA 1 din roadmap | real, dacă se lucrează în paralel | mic |
| Efort total | mai mic | mai mare |

**Recomandare: varianta A, secțiune în OraRO.** Fără catalog, AGENDA e în cea mai
mare parte planificare, adică exact ce îi lipsește lui OraRO ca să funcționeze.
Separarea ar rupe în două lucruri care se citesc unul pe altul.

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
zi și câte ore ai pe săptămână.

`docs/roadmap.md` notează că orarul vine în octombrie 2026. Până atunci, motorul
de calendar se poate construi și testa fără el, pentru că nu depinde de orar.

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

### 4.5 Activitate și Notita

```
Activitate {
  id, data
  tip                     // suplinire | lucrare | sedinta | consiliu |
                          // serviciu | formare | erasmus | altele
  titlu, descriere, clasaId, status, documentAsociat
}

Notita {
  id, data, categorie, titlu, continut, fixata
}
```

### 4.6 Comunicare, singurul loc cu date despre elevi

```
Comunicare {
  id
  data, canal             // consultatie | telefon | email | sedinta | mesaj
  elev                    // nume sau inițiale, text liber, fără listă de elevi
  clasaId
  subiect, rezumat, urmare, rezolvat
}
```

Fără catalog, nu mai avem nevoie de o listă de elevi ca entitate. Nu importăm
clasa, nu ținem date de contact structurate. Elevul apare ca text, în contextul
unei discuții, iar restul rămâne în catalogul oficial. Vezi secțiunea 9.

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
| Progresul pe unitate | derivat din jurnal, cum cere `data-model.md` §3 |
| Lecțiile | rămân în `src/data/`, AGENDA le referă, nu le copiază |
| `SchoolYear`, orar, planificare, comunicare, activități, notițe | se stochează |

Nimic derivat nu se scrie în stocare.

---

## 6. Rute și ecrane

Se adaugă la rutele existente din `App.jsx`, în același `AppShell`.

```
/an                      cele 12 luni, structura anului, modulele
/an/saptamana/:numar     fișa săptămânii, una din 53
/an/luna/:numar          vederea lunară
/orar                    orarul, introdus o dată pe an
/planificare/:clasa      planificare calendaristică și unități de învățare
/parinti                 comunicare și consultații
/activitati              supliniri, lucrări, ședințe, formare, Erasmus
/notite                  informații importante
/export                  planificare în PDF, backup
```

Rutele existente rămân neschimbate.

**Navigația.** `SearchPalette` se extinde cu săptămâni după număr, clase și
activități. Breadcrumb-ul capătă contextul de an: An, Modul 2, Săptămâna 14,
marți, clasa a V-a A. Săgețile stânga și dreapta mută între săptămâni. Maximum
două clicuri sau o combinație de taste către orice secțiune.

**Cardul „Ora de azi"**, prevăzut în roadmap ca pasul 3 și 6 din ETAPA 1, câștigă
din AGENDA: ce zi din structura anului e azi, ce clase urmează, ce e planificat,
ce a rămas nefăcut din săptămâna trecută.

---

## 7. Etape, așezate peste roadmap-ul existent

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

A1 și A2 se pot face imediat. Nu depind de orar și nu mai depind de nimic altceva.

### După ETAPA 1, ca prioritatea 5 din roadmap

| Pas | Conținut | Estimare |
|---|---|---|
| A6 | Cele 53 de fișe săptămânale, cu datele completate automat | 3 la 4 zile |
| A7 | Vederea pe 12 luni și pe modul | 2 zile |
| A8 | Planificarea calendaristică și unitățile, legate de săptămâni, cu progres din jurnal | 4 la 5 zile |
| A9 | Export PDF al planificării, în formatul cerut la dosar | 2 zile |

### Restul agendei, ca prioritatea 7 din roadmap

| Pas | Conținut | Estimare |
|---|---|---|
| A10 | Activități: supliniri, lucrări, ședințe, formare, Erasmus | 2 zile |
| A11 | Comunicare cu părinții și consultații | 1 la 2 zile |
| A12 | Notițe și informații importante | 1 zi |
| A13 | Backup și restaurare | 1 zi |

Estimările presupun lucru pe seară și în weekend. A1 și A2 sunt cele care contează
acum, pentru că deblochează funcția de prioritate 1 din roadmap.

---

## 8. Stocarea

Fără catalog, volumul de date scade de la mii de înregistrări la zeci. Un an
întreg de planificare, comunicare, activități și notițe încape confortabil în
`localStorage`, care e deja folosit pentru jurnal și temă.

**Nu adăugăm IndexedDB și nu adăugăm nicio dependență.** Ar fi fost justificat
pentru un catalog cu note și absențe, nu pentru atât. Dacă volumul crește
neașteptat, trecem la IndexedDB atunci, cu un wrapper propriu în `src/lib/`.

Limitarea documentată în `docs/architecture.md` §5 rămâne valabilă și trebuie
spusă în interfață: datele trăiesc într-un singur browser, pe un singur
calculator. Dacă pregătești săptămâna acasă și deschizi OraRO de pe calculatorul
din clasă, planificarea nu te urmează. Nu numim asta sincronizare.

De aici, backup-ul: fișier JSON descărcat, buton de backup manual, restaurare cu
previzualizare a ce se suprascrie, plus un avertisment vizibil că ștergerea
datelor de navigare din browser șterge și agenda.

---

## 9. Ce nu face AGENDA

- **nu ține catalog.** Notele, calificativele, mediile, absențele, întârzierile și
  purtarea rămân exclusiv în catalogul electronic oficial al școlii. AGENDA nu le
  introduce, nu le calculează, nu le importă și nu le afișează.
- nu ține o listă de elevi. Elevul apare doar ca nume în rezumatul unei discuții
  cu părinții.
- nu completează conținut didactic, planificarea și competențele le scrii tu
- nu redactează comunicarea cu părinții
- nu trimite nimic nimănui, fără email, fără mesaje automate

**Consecința pentru confidențialitate.** Renunțarea la catalog scoate din proiect
aproape toate datele personale ale minorilor. Rămâne un singur loc sensibil,
rezumatele discuțiilor cu părinții. Regulile care se aplică acolo:

1. **Nicio dată reală despre elevi în `src/`.** Fără fișiere de date cu nume, nici
   măcar ca exemplu. Datele de test sunt inventate și marcate ca atare.
2. **Inițiale în orice ieșire vizibilă.** Un raport destinat afișării sau
   partajării nu poartă nume complete.
3. **Niciun ecran de parolă prezentat drept securitate.** Regula din
   `docs/architecture.md` §5 rămâne: ascunderea unui element de interfață nu e
   control de acces.

Tensiunea cu `docs/architecture.md` §5, care cere backend pentru datele despre
elevi, se închide astfel: regula vizează conținutul care ajunge în bundle, iar ce
scrii tu în browser nu trece prin bundle.

---

## 10. Riscuri

| Risc | Tratament |
|---|---|
| AGENDA încetinește ETAPA 1 din roadmap | primul pas din AGENDA e chiar pasul 2 din ETAPA 1, nu o deviere |
| Structura anului școlar se schimbă prin ordin nou | nimic fix în cod, totul editabil |
| Muncă dublă cu catalogul oficial | AGENDA nu atinge notele și absențele, deci nu există suprapunere |
| Pierderea datelor din browser | backup, avertisment vizibil, restaurare cu previzualizare |
| Date despre elevi ajung în repo public | regulile din secțiunea 9, verificare înainte de commit |
| Proiectul se întinde și rămâne neterminat | A1 și A2 produc singure ceva utilizabil în sub o săptămână |

---

## 11. Ce așteaptă confirmarea Antoanelei

1. Varianta de structură: secțiune în OraRO, recomandat, sau aplicație separată.
2. Datele structurii anului școlar curent: cele 5 module, vacanțele, Săptămâna
   verde, Școala altfel. Singurul lucru care lipsește ca să înceapă A1.
3. Lista completă a claselor predate anul acesta, cu numărul de ore. OraRO are
   conținut pentru patru clase, dar orarul real poate cuprinde mai multe.
4. Dacă ești diriginte, pentru că asta schimbă cât cântărește secțiunea de
   comunicare cu părinții și ședințele.
5. Formatul cerut de școală pentru planificarea calendaristică, ca exportul PDF să
   iasă direct bun de pus la dosar.

Punctele 3, 4 și 5 nu blochează startul. Punctul 2 da.
