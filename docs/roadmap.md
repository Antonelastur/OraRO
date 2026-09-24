# Roadmap OraRO 2.0

Ordinea e obligatorie. Nu o inversa fiindcă o funcție pare mai spectaculoasă.

## Criteriul de succes

> Poate un profesor să intre în OraRO cu două minute înainte de oră și să înceapă
> lecția fără să caute prin foldere, PDF-uri și linkuri?

Dacă răspunsul e da, arhitectura funcționează. Succesul nu se măsoară prin
numărul de pagini sau de componente create.

## Prioritatea produsului

1. Ora de azi
2. Cockpitul orei
3. Lecția modulară
4. Dashboardul
5. Planificarea
6. Resursele
7. Activitățile
8. Evaluarea
9. Spațiul elevului
10. AI

OraRO trebuie să fie util fără AI. AI-ul face OraRO mai bun, nu ascunde lipsa
unei arhitecturi funcționale.

Prioritățile 5 și 7 sunt proiectate în `docs/agenda.md`, agenda profesorului.
Catalogul, adică notele, absențele și purtarea, rămâne în afara proiectului, în
catalogul electronic oficial al școlii.

## ETAPA 1, nucleul OraRO

Prioritate maximă.

| Funcție | Stare | Note |
|---|---|---|
| Dashboard | Există, dar nu în forma cerută | Trebuie rescris în jurul cardului „Ora de azi" |
| Ora de azi | **Nu există** | Nu mai e blocată: `ScheduleItem` există în `src/lib/program.ts`. Rămâne ecranul |
| Planificare | **Nu există** | Sursa e planificarea calendaristică din folderul de surse, proiectare în `docs/agenda.md` |
| Unități de învățare | Există | `UnitatePage`, cu lecțiile parcurse marcate |
| Lecții | Există | `LectiePage`, `ClasaPage`, cu jurnalul orei pe pagina lecției |
| Lecții modulare | **Nu există** | Blocurile există ca date la toate clasele, editarea nu |
| Cockpitul orei | Există | `CockpitPage`, pornește din `planLectie.desfasurare` |
| Timer | Există | Cronometru pe fiecare etapă, cu depășire marcată |
| Navigarea între blocuri | Există | Butoane, săgeți, lista etapelor din lateral |
| Marcarea lecției ca parcursă | Există | Din cockpit („Închide ora”, „Încheie ora”) sau din pagina lecției; `localStorage`, un singur browser |
| Reflecția după oră | Există | Câmpurile din `docs/ux.md` §14, `src/lib/jurnal.ts`; `localStorage`, date private |

**Rezultat așteptat:** profesorul intră în OraRO și conduce o oră completă.

**Ordinea de lucru propusă în ETAPA 1**, fiecare pas cu verificare înainte de
următorul:

1. Stratul de derivare în `src/lib/`, care proiectează datele actuale în
   `Lesson → LessonBlock → Resource`. Fără interfață, doar date și teste.
2. `ScheduleItem`, fișier de date construit din planificarea calendaristică.
   Fără el nu există „Ora de azi". Motorul de calendar care îl produce e
   proiectat în `docs/agenda.md`.
3. Ora de azi, ecranul de deschidere a orei.
4. Cockpitul orei, cu timer și navigare între blocuri.
5. Închiderea orei, marcarea ca parcursă, reflecția.
6. Dashboardul rescris în jurul cardului „Ora de azi".

**Stare la 2026-09-24:** pașii 1, 2, 4 și 5 sunt făcuți. Orarul a venit mai
devreme decât ne așteptam, iar pasul 2 s-a închis cu `src/lib/program.ts`. Mai
rămâne pasul 3, ecranul „Ora de azi", iar pasul 6 vine după el.

Nu trece la funcții complexe înainte ca acest flux să fie stabil.

## ETAPA 2, resurse și evaluare

| Funcție | Stare |
|---|---|
| Biblioteca inteligentă | Există parțial, `BibliotecaPage` |
| Resurse | Există ca materiale imbricate, cer registru cu ID-uri |
| Căutare | Există parțial, `SearchPalette` |
| Favorite | Nu există |
| Materiale recente | Nu există |
| Distribuire către elevi | Nu există, cere backend pentru `CLASS_ONLY` real |
| Activități | Există doar motorul de joc și quiz |
| Jocuri | Există, `src/components/Joc/` |
| Quizuri | Există |
| Evaluări | Există ca definiție, `materiale.test` |
| Exit ticket | Nu există |
| Rezultate | Nu există, cere backend |

**Rezultat așteptat:** OraRO devine un instrument complet pentru desfășurarea și
evaluarea orei.

Biblioteca și căutarea sunt deja construite, în afara ordinii. Nu le rescrie fără
motiv, adaptează-le.

## ETAPA 3, inteligență și spațiul elevului

Spațiul elevului, autentificare reală, permisiuni, conținut privat, Laboratorul
de lecții, Ora rapidă, „Nu știu ce să fac azi", Generator de activități,
Recomandări AI, Adaptarea lecțiilor, Analiza progresului.

**Rezultat așteptat:** OraRO devine un sistem personalizat de management al
lecțiilor.

### Blocaj de infrastructură, de citit înainte de a începe ETAPA 3

Aplicația e un site static pe GitHub Pages, fără backend. Următoarele **nu se pot
implementa sigur** pe infrastructura actuală:

- autentificare și permisiuni reale;
- spațiul elevului cu date proprii;
- rezultatele elevilor, exit ticket colectat, `StudentResponse`;
- distribuirea controlată `CLASS_ONLY`;
- generarea cu AI, care cere o cheie API ascunsă de un server;
- personalizarea lecțiilor sincronizată între dispozitive.

ETAPA 3 cere, ca precondiție, o decizie despre backend. Vezi
`docs/architecture.md`, secțiunea 5.

**Istoric.** În 2026 s-a decis explicit că OraRO rămâne fără backend, iar
portofoliul digital al elevului și copilotul AI live s-au amânat. Cererea reapare
acum, deliberat, ca ETAPA 3. Nu e o scăpare, e o reluare conștientă a unei
decizii anterioare.

## Conținut, în paralel cu dezvoltarea

Nu face parte din etapele de produs, dar condiționează ETAPA 1 pentru celelalte
clase.

| Clasă | Lecții | `planLectie` | Prioritate |
|---|---|---|---|
| a V-a | 120 | 120 din 120 | Gata |
| a VIII-a | 119 | 119 din 119 | Gata, se predă anul acesta |
| a VI-a | 122 | 122 din 122 | Gata, se predă la anul |
| a VII-a | 119 | 119 din 119 | Gata, se predă peste doi ani |

Toate lecțiile au blocuri, deci cockpitul poate conduce orice oră. Metoda de
redactare e în `docs/continut-si-stil.md` și `scripts/planuri/`.

**Materiale, stare la 2026-09-11.** A V-a și a VIII-a au quizuri și scheme
unde se pot face fără NotebookLM; lipsesc prezentările și video-urile din
briefurile din `docs/materiale-de-generat/`. A VI-a și a VII-a au fișe, câteva
quizuri și scheme, dar zeci de lecții fără material de exersare sau de predare.
Toate cele 218 scheme au fost refăcute ca notițe complete ale lecției, cele pe
care elevii le scriu în caiet și din care învață acasă (V 70, VIII 75, VI 38,
VII 32; generator `scripts/scheme_notite.py`, specificații în `scripts/scheme/`).
Urmează fișele de exerciții pe lecție, cu tipuri de exerciții asemănătoare celor
din manual, pentru lucrul în clasă.
