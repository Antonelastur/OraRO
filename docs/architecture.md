# Arhitectura OraRO 2.0

Document de referință. Regulile scurte stau în `CLAUDE.md`, aici sunt detaliile.

## 1. Starea reală a codului, la 2026-09-04

**Nu presupune că arhitectura descrisă în acest document e deja implementată.**
Inspectează codul înainte de orice modificare majoră. Starea de acum:

**Stivă tehnică.** Vite și React, site static, fără backend, găzduit gratuit pe
GitHub Pages (`.github/workflows/deploy.yml`, deploy la fiecare push pe
`master`, `base: '/OraRO/'`). Tailwind CSS v4 cu token-uri de temă în
`src/index.css`. TypeScript pornit treptat, fișierele noi sunt `.tsx`/`.ts`, cele
vechi simple rămân `.jsx`, coexistă. Componente în stil shadcn/ui în
`src/components/ui/`, cod propriu, nu rulăm CLI-ul. Iconografie Lucide, animații
cu `motion`. Fără librărie de gestiune a stării.

**Ce există.**

```
src/
  App.jsx                 rute: /, /clase, /biblioteca, /setari,
                          /:clasa, /:clasa/:unitate, /:clasa/:unitate/:lectie
  pages/                  DashboardPage, ClasePage, BibliotecaPage, SetariPage,
                          ClasaPage, UnitatePage, LectiePage
  components/             AppShell, Sidebar, SearchPalette, Breadcrumb,
                          MaterialCard, MaterialChips, MotivUnitate, ProgresBara,
                          PlanProfesor, Prezentare, Video, Test, Fisa, Joc/,
                          Infografic, Schema, materialMeta, ui/
  contexts/ThemeContext   comutator light/dark, persistat local
  lib/lectii.ts           calcule pe date, completitudine, listă flat de lecții
  data/clasa-{5,6,7,8}/   4 clase, ~480 de lecții
  types.ts                Materiale, PlanLectie, EtapaLectie, Lectie, Unitate, Clasa
```

**Forma actuală a datelor**, fixă pentru toate clasele:

```js
{ id, titlu, obiective, sursaManual, rezolvareGhid, planLectie, materiale }
// materiale: { prezentare, video, test, fisa, joc, infografic, schema, altele }
// planLectie: { titlu, data, tipOra, durata, obiective, resurse,
//               desfasurare: EtapaLectie[], evaluare } | null
// EtapaLectie: { etapa, timp, activitate }
```

**Distanța față de OraRO 2.0.** Aplicația de acum e, structural, o bibliotecă de
resurse organizată pe clasă, unitate și lecție. Din ETAPA 1 nu există aproape
nimic: lipsesc Ora de azi, cockpitul, timerul, planificarea, marcarea lecției ca
parcursă, reflecția. Biblioteca, care e în ETAPA 2, e deja construită, un element
făcut în afara ordinii.

## 2. Decizia de arhitectură: strat de derivare, nu migrare

Modelul țintă cere `Lecție → Bloc → Activitate → Resursă → Evaluare`. Datele
actuale au `Lecție → Materiale`.

**Nu migra cele ~480 de lecții într-o structură nouă.** Ar însemna 13 fișiere de
conținut rescrise, risc mare, câștig zero pe termen scurt.

În schimb, fișierele de date rămân sursă de adevăr și se adaugă un strat subțire
de derivare în `src/lib/` care proiectează forma actuală în modelul nou:

- `LessonBlock[]` derivat din `planLectie.desfasurare`
- `Resource[]` rezolvat din `materiale`
- `Activity` derivată din `EtapaLectie.activitate` plus materialul referit

Motivul: toată ETAPA 1 are nevoie doar să **citească** blocuri, plus puțin state
local pentru pasul curent, cronometru și notițele de reflecție. Nimic din ETAPA 1
nu cere blocuri editabile. Dacă modelul se dovedește greșit, se schimbă un
fișier, nu 480. Promovarea blocurilor la entități editabile se face în ETAPA 2,
când apare nevoia reală (lecția modulară cu adăugare, reordonare, salvare).

**Ce e deja acoperit cu date reale.** Clasa a V-a are `planLectie` populat pe
toate cele 120 de lecții, cu 6 blocuri fiecare, adică 720 de blocuri reale cu
titlu, durată și descriere. Cockpitul și timerul pornesc de aici, nu de la zero.
Clasele a VI-a, a VII-a și a VIII-a au `planLectie: null` și au nevoie de
generare, la fel cum s-a procedat pentru clasa a V-a
(`scripts/planuri/`, `scripts/inject-plan-lectie.mjs`).

**Ce lipsește complet și cere date noi.** Maparea dată calendaristică → lecție,
fără de care „Ora de azi" nu are ce afișa. Se construiește din planificarea
calendaristică existentă în folderul de surse, ca fișier de date nou
(`ScheduleItem`).

## 3. Cele două spații ale platformei

### Spațiul profesor

Profesorul poate: vedea orele planificate, deschide ora curentă, crea și edita
lecții, organiza unități de învățare, administra clase, atașa resurse, construi
activități, distribui materiale elevilor, crea evaluări, vedea rezultate, urmări
progresul programei, salva lecții personalizate, păstra observații pedagogice.

### Spațiul elev

Elevul vede exclusiv conținutul publicat pentru el. Elevul nu are acces la:
planificarea profesorului, notițele profesorului, baremuri înainte de momentul
stabilit, materiale private, alte clase, datele altor elevi, structura internă a
platformei.

## 4. Permisiuni

Sistemul se proiectează cu separarea clară a rolurilor.

| Rol | Poate |
|---|---|
| PROFESOR | Creează, editează, publică, retrage și organizează propriul conținut |
| ELEV | Accesează numai ce i-a fost distribuit |
| ADMIN | Administrează infrastructura și conținutul global |

Nu expune în frontend date care trebuie să rămână confidențiale. Ascunderea unui
element de interfață nu e control de acces.

## 5. Protecția conținutului privat

**Regulă strictă.** Nu implementa parole pentru conținut privat exclusiv prin
JavaScript în frontend. Aplicația e un frontend static, deci orice informație
trimisă către browser se consideră potențial accesibilă utilizatorului.

Pentru planuri personale, baremuri, notițe, date despre elevi și materiale
private e nevoie de un backend sau API cu autentificare și autorizare reale.
Frontendul poate rămâne separat de backend. Arhitectura trebuie să permită
această migrare fără rescrierea întregii aplicații.

### Ce e conform astăzi

- `rezolvareGhid` e `null` în tot codul. Conținutul real stă în
  `notite-profesor/`, folder gitignored, neimportat din `src/`.
- Baremurile și rezolvările din ghid nu intră niciodată în bundle.
- Sursele brute (manual, ghid, planificare) stau în foldere gitignored.

### Decizie explicită despre planurile de lecție, 2026-08

Cele 120 de schițe de plan în 6 pași ale clasei a V-a **sunt publicate** în
bundle, vizibile pe pagina lecției sub eticheta discretă „Doar profesor". Decizie
asumată de Antoanela: structura de bază a unui plan de lecție e un model didactic
standard, nu conținut sensibil, deci nu are nevoie de protecție.

Distincția care rămâne valabilă: planurile generice se publică; notițele
personale despre clase, reflecțiile după oră, baremurile și datele elevilor nu se
publică niciodată din bundle.

### Ce e blocat de lipsa backendului

Următoarele nu se pot implementa sigur pe infrastructura actuală și aparțin
ETAPEI 3: autentificare reală, permisiuni, spațiul elevului, rezultatele
elevilor, exit ticket cu răspunsuri colectate, distribuirea controlată către
elevi, generarea cu AI (cere cheie API ascunsă de un server).

**Limitare de marcat, `localStorage`.** Reflecția profesorului, marcarea lecției
ca parcursă și lecțiile personalizate se pot salva doar în `localStorage` cât
timp nu există backend. Consecința: datele trăiesc într-un singur browser, pe un
singur calculator. Dacă profesoara pregătește ora acasă și predă de pe
calculatorul din clasă, personalizarea nu o urmează. Acceptabil pentru ETAPA 1,
dispare doar cu backend. Nu prezenta această soluție ca sincronizare.

### Istoric, ca să nu se relitigheze

În 2026 s-a decis explicit că OraRO rămâne fără backend, iar portofoliul digital
al elevului și copilotul AI live s-au amânat. Cererea reapare acum, deliberat, ca
ETAPA 3 din acest document. Nu e o scăpare, e o reluare conștientă. Vezi
`docs/roadmap.md`.

## 6. Resursele

Resursele se separă conceptual de lecții. Tipuri: fișă, text, prezentare,
videoclip, imagine, joc, quiz, document, alt material didactic.

O resursă poate fi asociată cu mai multe lecții. Nu duplica aceeași resursă în
fiecare lecție, folosește referințe.

Fiecare resursă are un statut de vizibilitate:

| Statut | Înseamnă |
|---|---|
| `PRIVATE` | Doar profesorul |
| `PUBLIC` | Accesibilă conform regulilor platformei |
| `CLASS_ONLY` | Doar elevii clasei căreia profesorul a distribuit-o |

Publicarea unei resurse nu modifică fișierul original. Profesorul poate retrage
ulterior accesul.

**Notă de implementare.** `CLASS_ONLY` presupune identitatea elevului, deci cere
backend. Până atunci, statutul se poate modela în date și reflecta în interfața
profesorului, fără să pretindă că aplică vreo restricție reală.

## 7. Reguli pentru cod

Înainte de modificarea codului:

1. Inspectează structura proiectului.
2. Identifică framework-ul și dependențele existente.
3. Identifică punctele de intrare.
4. Identifică componentele reutilizabile.
5. Identifică modul actual de gestionare a datelor.
6. Identifică funcționalitățile deja implementate.
7. Nu presupune că arhitectura actuală e cea descrisă în acest document.
8. Nu șterge funcționalități existente fără motiv.
9. Nu introduce dependențe inutile.
10. Păstrează codul modular.

Înainte de implementarea unei funcții noi, verifică dacă există deja o componentă
sau o funcție care poate fi reutilizată.

**Excluse din arhitectură**, decizie confirmată: Next.js, React Query, orice
librărie de gestiune a stării atâta timp cât complexitatea nu o justifică.

## 8. Regula „nu inventa"

Nu inventa API-uri, endpoint-uri, structuri de bază de date existente,
autentificare existentă, date curriculare, resurse, rezultate ale elevilor sau
funcționalități despre care codul nu oferă dovezi.

Dacă o funcționalitate cere o infrastructură care nu există, marchează clar
necesitatea ei și construiește o interfață pregătită pentru integrare, dacă e
posibil.

## 9. Regula pentru AI

AI-ul e o funcție a platformei, nu platforma însăși. OraRO trebuie să fie util și
fără AI.

AI-ul ajută profesorul să construiască lecții, să adapteze activități, să genereze
variante, să găsească activități potrivite, să propună recapitulări, să formuleze
evaluări și să adapteze dificultatea.

AI-ul nu înlocuiește arhitectura pedagogică a aplicației. O lecție generată de AI
se transformă în entități reale ale platformei:

```
Lesson → LessonBlock → Activity → Resource → Assessment
```

Nu salva o lecție AI doar ca text lung. Nu prezenta date generate drept date
reale.
