# CLAUDE.md — OraRO 2.0

Instrucțiuni de proiect valabile în orice sesiune de lucru pe OraRO. Nu te abate
de la ele fără confirmarea explicită a Antoanelei.

Detaliile nu se dublează aici. Consultă `docs/` înainte de a implementa etapele
relevante, vezi secțiunea 6.

## 1. Identitatea proiectului

OraRO 2.0 este o platformă digitală pentru profesorul de limba și literatura
română din gimnaziu, clasele a V-a până la a VIII-a. Este instrumentul de lucru
al profesoarei Antoanela Pohoață, folosit înainte, în timpul și după oră.

Nu este LimbaRo. LimbaRo rămâne instrumentul de exersare independentă a
elevului, după ce materia a fost predată.

OraRO nu se tratează ca o simplă bibliotecă de materiale didactice.

## 2. Obiectivul OraRO 2.0

Scopul este să devină un sistem de operare pentru ora de limba română.
Profesorul intră în platformă, deschide ora planificată, conduce lecția pas cu
pas, distribuie materiale elevilor, folosește activități interactive, evaluează
rapid și notează observații după oră.

Principiul central al produsului:

> Profesorul nu trebuie să caute materiale ca să construiască o oră. OraRO
> trebuie să-i ofere structura unei ore pe care profesorul o poate adapta.

Fluxul fundamental:

```
DASHBOARD → CLASĂ → UNITATE → LECȚIE → ACTIVITĂȚI → EVALUARE
```

**Criteriul de succes.** Nu se măsoară prin numărul de pagini sau de componente
create. Întrebarea este una singură:

> Poate un profesor să intre în OraRO cu două minute înainte de oră și să
> înceapă lecția fără să caute prin foldere, PDF-uri și linkuri?

Dacă răspunsul e da, arhitectura funcționează. Dacă profesorul trebuie să
navigheze prin multe meniuri ca să găsească ce-i trebuie în acel moment,
interfața se simplifică.

**Cele șapte întrebări.** Gândește-te permanent la profesorul care intră în
clasă cu 30 de secunde înainte să înceapă ora. El nu are nevoie de un site, are
nevoie să știe: ce predau, ce fac acum, cât timp mai am, ce fac dacă activitatea
nu merge, ce le dau elevilor, cum verific dacă au înțeles, ce trebuie să reiau
data viitoare.

Orice funcționalitate nouă se evaluează prin întrebarea „îl ajută pe profesor să
pregătească, să conducă sau să evalueze ora?". Dacă nu, se justifică înainte de
implementare.

## 3. Contractul de lucru

**Înainte să modifici codul:**

1. Inspectează structura proiectului.
2. Identifică framework-ul, dependențele și punctele de intrare.
3. Identifică componentele reutilizabile și modul actual de gestionare a datelor.
4. Verifică ce funcționalități există deja.
5. Nu presupune că arhitectura actuală e cea descrisă în documentație. Dacă
   documentația contrazice codul, inspectează codul și semnalează conflictul
   înainte de modificări majore.
6. Nu rescrie cod fără un motiv tehnic clar.

**Lucrează incremental.** Pentru fiecare etapă: analizează, implementează,
testează, corectează, continuă. Nu implementa mai multe etape simultan. Oprește-te
după fiecare etapă pentru verificare. Fiecare etapă trebuie să producă o versiune
utilizabilă.

**Regula „nu inventa".** Nu inventa API-uri, endpoint-uri, structuri de bază de
date, autentificare, date curriculare, resurse, rezultate ale elevilor sau
funcționalități despre care codul nu oferă dovezi. Dacă o funcție cere o
infrastructură care nu există, marchează clar limitarea și pregătește interfața
pentru integrarea ulterioară.

**Regula de finalizare.** O funcție e terminată numai când e implementată, e
accesibilă din interfață, funcționează în fluxul real, nu rupe funcțiile
existente, gestionează erorile și e verificată pe dimensiunile relevante de
ecran. O componentă izolată nu e o funcție finalizată.

**Nu publica, nu trimite și nu finaliza nimic fără aprobarea explicită a
Antoanelei.**

## 4. Principii tehnice

1. Simplitatea are prioritate față de numărul de funcții.
2. Lecția e centrul platformei, nu resursa izolată.
3. O resursă poate fi reutilizată în mai multe lecții. Nu duplica aceeași
   resursă în fiecare lecție, folosește referințe.
4. Profesorul controlează ce ajunge la elev.
5. Păstrează separarea clară între date, logică și interfață.
6. Păstrează codul modular. Nu introduce dependențe noi dacă problema se rezolvă
   cu infrastructura existentă.
7. Nu modifica sau șterge funcționalități existente fără să verifici impactul.
8. Nu rescrie componente existente doar ca să schimbi stilul codului.
9. Nu introduce funcționalități complexe care nu contribuie direct la
   activitatea didactică.

**Securitate, regulă strictă.** Nu implementa protecția conținutului privat
exclusiv în frontend. Ascunderea unui element de interfață nu e control de acces.
Aplicația e un frontend static, deci orice informație trimisă către browser se
consideră accesibilă utilizatorului. Pentru planuri personale, baremuri, notițe,
date despre elevi și materiale private e nevoie de un backend cu autentificare și
autorizare reale. Arhitectura trebuie să permită această migrare fără rescrierea
întregii aplicații. Vezi `docs/architecture.md`.

**Regula pentru AI.** AI-ul e o funcție a platformei, nu platforma însăși. OraRO
trebuie să fie util și fără AI. O lecție generată de AI se transformă în entități
reale ale aplicației, `Lesson → LessonBlock → Activity → Resource → Assessment`,
nu se salvează ca text lung. Nu prezenta date generate drept date reale.

## 5. Ordinea obligatorie a implementării

Respectă ordinea. Nu o inversa fiindcă o funcție pare mai spectaculoasă.

**ETAPA 1, nucleul.** Dashboard, Ora de azi, Planificare, Unități de învățare,
Lecții, Lecții modulare, Cockpitul orei, Timer, Navigarea între blocuri,
Marcarea lecției ca parcursă, Reflecția după oră.
Rezultat: profesorul poate intra în OraRO și poate conduce o oră completă.

**ETAPA 2, resurse și evaluare.** Biblioteca inteligentă, Resurse, Căutare,
Favorite, Materiale recente, Distribuire către elevi, Activități, Jocuri,
Quizuri, Evaluări, Exit ticket, Rezultate.

**ETAPA 3, inteligență și spațiul elevului.** Spațiul elevului, Autentificare
reală, Permisiuni, Conținut privat, Laboratorul de lecții, Ora rapidă, „Nu știu
ce să fac azi", Generator de activități, Recomandări AI, Adaptarea lecțiilor,
Analiza progresului.

Nu trece la ETAPA 2 până când fluxul din ETAPA 1 nu e stabil. Nu trece la ETAPA 3
până când nucleul și sistemul de resurse și evaluare nu sunt stabile.

**Prioritatea produsului**, în ordine: Ora de azi, Cockpitul orei, Lecția
modulară, Dashboardul, Planificarea, Resursele, Activitățile, Evaluarea, Spațiul
elevului, AI.

## 6. Documentația de referință

| Document | Ce conține |
|---|---|
| `docs/architecture.md` | Cele două spații, permisiuni, protecția conținutului privat, starea actuală a codului față de model, decizii de arhitectură |
| `docs/roadmap.md` | Cele trei etape în detaliu, ce e blocat de lipsa backendului, starea reală față de plan |
| `docs/data-model.md` | Entitățile, relațiile, identitatea lecției, blocurile, activitățile, resursele, evaluarea, maparea de la datele actuale |
| `docs/ux.md` | Sidebar, dashboard, Ora de azi, cockpit, laboratorul, spațiul elevului, design, responsive, accesibilitate, fluxul ideal |
| `docs/continut-si-stil.md` | Regulile de conținut, sursele, convențiile de numerotare, stilul de redactare obligatoriu |

Dacă documentația contrazice codul existent, inspectează codul și semnalează
conflictul înainte de a face modificări majore.

## graphify

Proiectul are un graf de cunoștințe în `graphify-out/`.

- Pentru întrebări despre cod, rulează întâi `graphify query "<întrebare>"`.
  Folosește `graphify path "<A>" "<B>"` pentru relații și
  `graphify explain "<concept>"` pentru concepte punctuale.
- `graphify-out/wiki/index.md`, dacă există, e bun pentru navigare generală.
- `graphify-out/GRAPH_REPORT.md` doar pentru analiză de arhitectură pe scară
  largă.
- După modificarea codului, rulează `graphify update .`.
