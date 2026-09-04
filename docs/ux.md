# UX OraRO 2.0

## 1. Fluxul ideal

Acesta e „happy path"-ul principal al aplicației.

```
INTRU ÎN ORARO → DASHBOARD → ORA DE AZI → LECȚIA → START ORĂ → COCKPIT
  → CAPTAREA ATENȚIEI → ACTIVARE → DESCOPERIRE → APLICARE → ACTIVITATE
  → JOC → EVALUARE → EXIT TICKET
→ ÎNCHIDE ORA → REFLECȚIE → LECȚIA E MARCATĂ CA PARCURSĂ
→ URMĂTOAREA ORĂ APARE ÎN DASHBOARD
```

Orice funcționalitate nouă se evaluează prin întrebarea: îl ajută pe profesor să
pregătească, să conducă sau să evalueze ora? Dacă nu, se justifică înainte de
implementare.

## 2. Navigația profesorului

Sidebar-ul principal:

**ACASĂ** — Dashboard, Ora de azi

**PLANIFICARE** — Planificarea anuală, Unități de învățare, Calendar, Progresul
programei

**LECȚII** — Toate lecțiile, Clasa a V-a, Clasa a VI-a, Clasa a VII-a, Clasa a
VIII-a, Creează lecție

**RESURSE** — Fișe de lucru, Texte, Prezentări, Videoclipuri, Imagini, Jocuri,
Quizuri

**ACTIVITĂȚI** — Activități rapide, Generator de activități, Jocuri, Provocări,
Dezbateri, Escape room

**EVALUARE** — Evaluare rapidă, Exit ticket, Teste, Baremuri, Rezultate

**ELEVII MEI** — Clase, Grupe, Activități distribuite, Rezultate

**BIBLIOTECA MEA** — Favorite, Folosite recent, Materialele mele

**INSTRUMENTE** — Cronometru, Roată aleatorie, Generator echipe, Zar, Selector
elev, Numărătoare inversă

**Zona inferioară** — Profil, Setări, Administrare

Nu transforma sidebar-ul într-o listă excesiv de lungă pe ecrane mici. Poate
deveni collapsible.

**Notă de implementare.** Sidebar-ul complet corespunde platformei terminate.
Nu-l construi integral în ETAPA 1, altfel majoritatea intrărilor duc în pagini
goale, ceea ce încalcă regula de finalizare. Adaugă secțiunile pe măsură ce
funcțiile devin reale.

## 3. Dashboardul profesorului

Primul ecran după autentificare. Nu afișa toate funcțiile simultan. Prioritatea e
ora curentă.

```
Bună dimineața, [nume profesor].
Ce facem astăzi?

┌─ ORA DE AZI ──────────────────┐
│ Clasa: VII B                  │
│ Tema: Textul argumentativ     │
│ Durata: 50 min                │
│ Unitatea: Comunicarea         │
│      [ DESCHIDE ORA ]         │
└───────────────────────────────┘

URMĂTOARELE ORE
  VII B, Textul argumentativ
  VIII A, Caracterizarea personajului
  V A, Substantivul
  VI B, Naratorul

ACȚIUNI RAPIDE
  ÎNCEPE O ORĂ   CAUTĂ O RESURSĂ
  CREEAZĂ O ACTIVITATE   NU ȘTIU CE SĂ FAC AZI
```

„Nu știu ce să fac azi" duce spre un flux de recomandare, niciodată spre o pagină
goală.

Dashboardul poate afișa progresul programei, calculat din lecțiile marcate ca
parcurse:

```
Limba română   ███████░░░ 72%
Literatură     ██████░░░░ 64%
Comunicare     ████████░░ 81%
```

## 4. Ora de azi

Funcția cu cea mai mare prioritate. Profesorul deschide ora programată fără să
navigheze prin biblioteca de materiale.

La deschidere se afișează: titlul lecției, clasa, durata, unitatea, competențele,
obiectivele, conținuturile, activitățile, resursele, evaluarea.

Buton: **START ORĂ**

## 5. Cockpitul orei

După START ORĂ interfața intră într-un mod special care elimină elementele care
distrag atenția.

Elemente obligatorii: titlul lecției, etapa curentă, timpul, cronometru,
activitatea curentă, planul orei, navigare înainte și înapoi.

```
TEXTUL ARGUMENTATIV
Pasul 1/7, Provocarea
05:00

„Convinge-mă în 60 de secunde că telefonul
 ar trebui permis la școală."

[ PORNEȘTE CRONOMETRUL ]   [ URMĂTORUL PAS ]

lateral:
PLANUL OREI
✓ Captarea atenției
○ Activarea cunoștințelor
○ Descoperirea
○ Aplicarea
○ Joc
○ Evaluare
○ Exit ticket
```

Cockpitul trebuie să funcționeze bine și pe un ecran proiectat în clasă.

## 6. Schimbă activitatea

În timpul lecției, profesorul poate înlocui rapid activitatea curentă.

Buton: **SCHIMBĂ ACTIVITATEA**

Filtrare după timp, clasă, domeniu, obiectiv, tip de activitate.

| Timp | Alternative |
|---|---|
| 5 minute | joc rapid, întrebare provocatoare, Think-Pair-Share, mini-quiz |
| 10 minute | dezbatere, lucru în perechi, analiză, provocare |
| 15 minute | activitate pe grupe, investigație, joc, redactare |

Înlocuirea unei activități nu distruge activitatea originală.

## 7. Pentru elevi

Fiecare lecție are o secțiune **PENTRU ELEVI**, unde apar resursele pregătite
pentru distribuire: fișă, prezentare, quiz, joc, video, text.

Buton: **PUBLICĂ PENTRU ELEVI**

Profesorul poate retrage ulterior accesul. Publicarea unei resurse nu modifică
fișierul original.

## 8. Biblioteca inteligentă

Căutare universală, un singur câmp: **Ce cauți?**

Pentru „caracterizarea personajului", rezultatele se grupează:

```
LECȚII      Caracterizarea personajului, VII
FIȘE        Fișă de lucru, caracterizare
JOCURI      Detectivul personajului
ACTIVITĂȚI  Procesul personajului
EVALUĂRI    Quiz, personaje
TEXTE       texte potrivite
```

Căutarea poate combina: text, clasă, domeniu, tip, competență, unitate,
dificultate, durată.

## 9. Planificarea anuală

Vizuală. Structura: an → luni → săptămâni → lecții. Fiecare lecție apare ca un
card.

Acțiuni pe card: Deschide, Editează, Duplică, Mută, Atașează materiale,
Marchează ca parcursă.

Mutarea unei lecții actualizează planificarea fără să distrugă resursele
asociate.

## 10. Laboratorul de lecții

Spațiul pentru construirea unei lecții.

```
PENTRU CINE?   V / VI / VII / VIII
CE PREDĂM?     Literatură / Limbă / Comunicare / Redactare
CÂT TIMP?      20 / 30 / 45 / 50 min
CUM VREAU ORA? Clasică / Interactivă / Gamificată / Colaborativă /
               Investigație / Dezbatere / Recapitulare / Evaluare

[ CONSTRUIEȘTE LECȚIA ]
```

Rezultatul trebuie să fie o structură executabilă. **Nu genera un eseu despre cum
ar putea arăta ora.** Generează componente concrete: etapă, durată, instrucțiuni,
activitate, resursă, evaluare.

## 11. Ora rapidă

Pe dashboard. Profesorul introduce clasa, domeniul, conținutul și durata, iar
platforma generează o structură:

```
0–5    Provocare
5–10   Detectiv gramatical
10–20  Descoperirea regulii
20–30  Joc
30–40  Aplicare
40–45  Exit ticket
```

Fiecare etapă trebuie să fie accesibilă și editabilă.

## 12. Nu știu ce să fac azi

Funcție orientată spre rezolvarea unei probleme reale, nu un chatbot generic.

Profesorul indică: clasa, domeniul, conținutul, timpul disponibil, energia
clasei (dacă funcția e implementată), scopul orei.

Rezultatul e o propunere de lecție, care poate fi acceptată, editată, regenerată,
salvată sau transformată în lecție.

## 13. Exit ticket

Ultimele minute ale lecției au un ecran dedicat.

```
ASTĂZI AM ÎNȚELES CĂ...
ÎNCĂ NU ÎNȚELEG...
UN EXEMPLU PE CARE ÎL POT DA ESTE...

[ TRIMITE ]
```

Răspunsurile se asociază cu lecția și data. Profesorul le poate consulta
ulterior.

## 14. După oră

După **ÎNCHIDE ORA** se afișează reflecția profesorului.

```
CUM A MERS ORA?
  Excelent / Bine / Acceptabil / Trebuie schimbat

NOTIȚELE MELE
CÂND VOI REFOLOSI LECȚIA?
CE VREAU SĂ PĂSTREZ?
CE VREAU SĂ SCHIMB?
```

Informațiile se asociază lecției respective.

## 15. Spațiul elevului

Interfață radical mai simplă.

```
OraRO
Bun venit!

LECȚIA DE AZI
Textul argumentativ
[ INTRĂ ÎN LECȚIE ]

AI PRIMIT
  Fișă de lucru
  Quiz
  Provocare

RECAPITULARE
  Subiectul
  Predicatul
  Textul narativ
```

Nu afișa elevului meniul profesorului. Nu afișa date administrative inutile.

## 16. Design

Coerent, modern și calm.

| Cine | Are nevoie de |
|---|---|
| Profesor | Informație clară, butoane mari pentru acțiunile principale, contrast bun, navigare rapidă, feedback vizual, stare clară a lecției |
| Cockpit | Minimum de elemente, text lizibil de la distanță, timer vizibil, etapă curentă foarte clară, navigare simplă |
| Elev | Instrucțiuni scurte, componente vizuale, feedback imediat, puține opțiuni simultan |

Nu sacrifica funcționalitatea pentru efecte vizuale. Animațiile susțin orientarea
și feedbackul, nu distrag atenția.

## 17. Responsive

Aplicația funcționează pe desktop, laptop, tabletă și telefon.

- Prioritate pentru profesor: desktop și laptop → tabletă → telefon.
- Prioritate pentru elev: tabletă și telefon → laptop.
- Cockpitul se optimizează pentru proiectare pe ecran mare.

## 18. Accesibilitate

Contrast suficient. Text lizibil. Focus vizibil. Navigare cu tastatura. Etichete
clare pentru controale. Text alternativ pentru imaginile relevante. Informația nu
se transmite exclusiv prin culoare. Zone de click suficient de mari. Mesaje de
eroare clare.
