# Modelul de date OraRO 2.0

Model conceptual. Pentru forma actuală a datelor din cod și pentru decizia de a
deriva în loc de a migra, vezi `docs/architecture.md`, secțiunile 1 și 2.

## 1. Entități

```
Teacher            Lesson             Assessment
Class              LessonBlock        Question
Student            Activity           Assignment
Group              Resource           StudentResponse
SchoolYear                            ExitTicket
CurriculumDomain                      LessonReflection
Competency                            ScheduleItem
Content
LearningUnit
```

## 2. Relații

```
Teacher       → Classes
Class         → Students
LearningUnit  → Lessons
Lesson        → LessonBlocks
LessonBlock   → Activity
Lesson        → Resources
Lesson        → Assessments
Assessment    → Questions
Assignment    → Class / Students
Student       → Responses
Lesson        → Reflection
```

**Regulă.** Nu duplica aceeași resursă în fiecare lecție. Folosește relații și
referințe.

## 3. Ierarhia curriculară

```
CLASĂ → DOMENIU → COMPETENȚĂ → CONȚINUT → UNITATE DE ÎNVĂȚARE
      → LECȚIE → ACTIVITĂȚI → EVALUARE
```

Datele curriculare se păstrează într-o structură actualizabilă, nu hardcodate în
componentele de interfață.

Progresul programei se calculează din lecțiile marcate ca parcurse, niciodată
introdus manual în interfață.

## 4. Lesson, identitatea lecției

O lecție conține cel puțin:

`id`, `titlu`, `clasă`, `domeniu`, `unitate`, `conținut`, `competențe`,
`obiective`, `durată`, `blocuri`, `resurse`, `activități`, `evaluare`, `statut`,
`autor`, `createdAt`, `updatedAt`.

**Statuturi:** `DRAFT`, `READY`, `SCHEDULED`, `IN_PROGRESS`, `COMPLETED`,
`ARCHIVED`.

## 5. LessonBlock, lecția modulară

O lecție e compusă din blocuri. Blocurile standard:

1. Captarea atenției
2. Activarea cunoștințelor
3. Predare, descoperire
4. Exercițiu
5. Activitate colaborativă
6. Joc
7. Evaluare
8. Exit ticket

Profesorul poate adăuga, elimina, reordona și duplica blocuri, modifica durata și
instrucțiunile, atașa resurse, schimba activitatea și salva lecția modificată.

**O lecție modificată se salvează ca variantă personală**, de exemplu „Textul
argumentativ" devine „Textul argumentativ, varianta mea". **Nu modifica
originalul când profesorul personalizează lecția.**

### Maparea de la datele actuale

`planLectie.desfasurare` e deja o secvență de blocuri. `EtapaLectie` are
`{ etapa, timp, activitate }`, adică titlu, durată și instrucțiune.

Clasa a V-a are 120 de lecții cu câte 6 blocuri, în modelul momentelor lecției:

| Bloc actual | Corespondent standard |
|---|---|
| Moment organizatoric | (specific OraRO, nu are corespondent în lista standard) |
| Captarea atenției | 1. Captarea atenției |
| Enunțarea subiectului și a obiectivelor | (specific) |
| Reactualizarea cunoștințelor anterioare | 2. Activarea cunoștințelor |
| Dirijarea învățării | 3. Predare, descoperire |
| Obținerea performanței | 4. Exercițiu sau 7. Evaluare, după caz |

Cele două seturi nu se suprapun perfect. Lista standard de 8 blocuri e modelul
țintă pentru lecțiile construite în platformă; cele 6 momente sunt modelul
didactic pe care Antoanela îl folosește la clasă. **Nu converti automat unele în
altele**, ambele sunt secvențe valide de blocuri. Tipul `LessonBlock` trebuie să
accepte orice titlu de bloc, nu o enumerare închisă.

Clasele a VI-a, a VII-a și a VIII-a au `planLectie: null`, deci zero blocuri.
Trebuie generate, vezi `docs/continut-si-stil.md`.

## 6. Activity

Activitatea e o entitate independentă și reutilizabilă. O activitate poate
aparține mai multor lecții.

**Câmpuri:** titlu, instrucțiuni, durată, clasă recomandată, domeniu,
dificultate, materiale necesare, răspunsuri (dacă există), criterii de evaluare,
resurse atașate.

**Exemple de tipuri:** întrebare provocatoare, Think-Pair-Share, dezbatere,
analiză de text, joc, quiz, provocare, activitate pe grupe, redactare,
investigație, escape room.

### Maparea de la datele actuale

`materiale.joc` e deja o activitate completă și funcțională, cu două forme:

```js
MaterialJocQuiz  = { tip: 'quiz' | 'escape-room', titlu, pasi: JocPas[] }
JocPas           = { intrebare, variante, indiciu, sursa }
JocVarianta      = { text, corect, explicatie }
MaterialJocFisier = { titlu, fisier }
```

Motorul `src/components/Joc/` e cea mai avansată implementare de activitate din
proiect și se refolosește ca atare.

Restul activităților există doar ca text liber în `EtapaLectie.activitate`.
Structurarea lor cere muncă manuală sau semiautomată, nu se poate deduce complet
din proză. Durata se poate prelua din `EtapaLectie.timp`, iar resursa din
materialul referit în text.

## 7. Resource

Tipuri: fișă, text, prezentare, videoclip, imagine, joc, quiz, document, alt
material didactic.

Vizibilitate: `PRIVATE`, `PUBLIC`, `CLASS_ONLY`. Vezi `docs/architecture.md`,
secțiunea 6.

### Maparea de la datele actuale

`materiale` mapează direct pe `Resource`:

| Câmp actual | Tip resursă | Formă |
|---|---|---|
| `prezentare` | prezentare | `{ fisier }`, PDF în `public/materiale/` |
| `video` | videoclip | `{ link }` |
| `fisa` | fișă | `{ fisier }`, PDF |
| `infografic` | imagine | `{ fisier, titlu }`, SVG |
| `schema` | imagine | `{ fisier, titlu }`, SVG |
| `joc` | joc sau quiz | vezi secțiunea 6 |
| `test` | quiz sau test | `{ linkGoogleForms, niveluri, rubrica, fisierPrintabil }` |
| `altele` | alt material | listă liberă |

**Schimbarea necesară.** Azi resursa e imbricată în lecție, deci deținută de ea.
Modelul cere un registru de resurse cu ID-uri, iar lecțiile să refere resursele.
`BibliotecaPage.tsx` face deja aplatizarea tuturor materialelor într-o singură
listă, tiparul există.

## 8. Assessment

Evaluarea e integrată în lecție. Tipuri: evaluare rapidă, quiz, test, exit
ticket, răspuns scurt, întrebare deschisă, autoevaluare.

Profesorul vede rezultatele într-o formă simplă:

```
24 elevi
19 au răspuns
15 au demonstrat înțelegerea
4 necesită reluare
```

Platforma poate genera recomandarea „ce merită reluat data viitoare?".
**Recomandarea se bazează pe datele reale disponibile, nu se inventează.**

### Maparea de la datele actuale

`materiale.test` acoperă definiția evaluării: link Google Forms, niveluri
opționale de dificultate, rubrică, fișier printabil. `planLectie.evaluare` e text
liber cu metoda de evaluare.

**Rezultatele nu există și nu pot exista** fără backend. `StudentResponse`,
`ExitTicket` colectat și `Assignment` aparțin ETAPEI 3.

## 9. ExitTicket

Răspunsurile se asociază cu lecția și cu data. Profesorul le poate consulta
ulterior.

Structura ecranului, vezi `docs/ux.md`.

## 10. LessonReflection

După închiderea orei se salvează: cum a mers ora (Excelent, Bine, Acceptabil,
Trebuie schimbat), notițele profesorului, când va refolosi lecția, ce vrea să
păstreze, ce vrea să schimbe.

Informațiile se asociază lecției respective.

**Date private.** Nu intră niciodată în bundle. Până la backend trăiesc în
`localStorage`, cu limitarea de dispozitiv din `docs/architecture.md`.

## 11. ScheduleItem

Leagă o dată calendaristică de o lecție și o clasă. **Nu există încă și e
blocantul funcției „Ora de azi".**

Se construiește din planificarea calendaristică aflată în folderul de surse. Are
nevoie cel puțin de: dată, oră din program, clasă, lecție referită, statut
(programată, în desfășurare, parcursă).

Mutarea unei lecții în planificare actualizează planificarea fără să distrugă
resursele asociate.
