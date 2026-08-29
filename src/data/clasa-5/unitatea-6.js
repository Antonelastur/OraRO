// Unitatea VI: Din carte spre departe — clasa a V-a
// Sursă: manual Art Klett (cuprins pp. 6, 8-9, numerotare proprie L1-L9),
// proiectarea pe unități 2022-2023, planificarea calendaristică. Aceeași
// convenție ca la Unitățile I-V: o lecție de site per lecție de manual, cu
// excepția: lecției 5 (Carte românească de învățătură, 2 activități diferite
// pe aceeași pagină de manual), lecției 8 (Enunțul / Tipuri de enunț, tratate
// separat și în proiectare), lecției 9 (Prezentarea textului, 2 ore) și a
// recapitulării — toate despărțite în câte 2 lecții de site.
//
// Ultima unitate din clasa a V-a construită structural. Materiale-restante.md
// conține acum lista completă, cumulativă, pentru toate cele 6 unități.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx. Planurile ERR mai
// vechi din notite-profesor/ rămân neatinse, sunt altă formă.
//
// Materiale: schema pentru lecția 12 (Tipuri de enunț). Joc pentru 9 (Acte de
// limbaj: a explica, a recomanda, a afirma), 15 și 16 (recapitulare). Restul
// rămân null, listate în materiale-restante.md.

export const unitatea6 = {
  id: 'unitatea-6',
  titlu: 'Unitatea VI: Din carte spre departe',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ nonliterar. Jurnal de călătorie',
      obiective: [
        'Identifică informații esențiale dintr-un jurnal de călătorie, text narativ nonliterar.',
      ],
      sursaManual: 'Art 5, Lecția 1, pp. 168-170 (Jurnal de călătorie)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ nonliterar. Jurnal de călătorie',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică informații esențiale dintr-un jurnal de călătorie, text narativ nonliterar.',
        ],
        resurse: [
          'Manual Art 5, pp. 168-170',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: 'Îi întreb pe elevi ce călătorie le-a plăcut cel mai mult și ce ar nota într-un jurnal despre ea.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un jurnal de călătorie, text narativ nonliterar, și desprindem informațiile esențiale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ce deosebește un text nonliterar de unul literar, din Unitățile I și III.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc jurnalul cu voce tare împreună cu elevii, clarific termenii geografici și urmărim itinerarul și impresiile autorului, cu exemplele de la pp. 168-170.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează în caiet unde, când și ce a văzut autorul și un detaliu care i-a atras atenția.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea informațiilor esențiale notate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Trăsături ale textului narativ nonliterar',
      obiective: [
        'Identifică reperele de timp și de spațiu și trăsăturile care fac dintr-un jurnal de călătorie un text nonliterar.',
      ],
      sursaManual: 'Art 5, Lecția 2, p. 171',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Trăsături ale textului narativ nonliterar',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică reperele de timp și de spațiu și trăsăturile care fac dintr-un jurnal de călătorie un text nonliterar.',
        ],
        resurse: [
          'Manual Art 5, p. 171',
          'Schema „Trăsături ale textului narativ nonliterar” (/materiale/clasa-5/unitatea-6/lectia-2/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Le citesc un rând din jurnal și un rând dintr-o poveste de aventuri și îi întreb pe elevi care pare adevărat și de ce.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi identificăm reperele de timp și de spațiu ale jurnalului și trăsăturile lui nonliterare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm reperele de timp și de spațiu și informațiile esențiale desprinse ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției stabilim trăsăturile textului narativ nonliterar, fapte reale, date precise, absența ficțiunii, marca persoanei întâi, cu exemplele de la p. 171.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează trei trăsături nonliterare identificate în jurnal, cu câte un exemplu din text.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea listei de trăsături cu exemple.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-6/lectia-2/schema.svg', titlu: 'Trăsături ale textului narativ nonliterar' },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Discută semnificația textului literar și realizează un scurt exercițiu de scriere creativă, pe o temă de cultură națională.',
      ],
      sursaManual: 'Art 5, Lecția 3, pp. 172-173',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Discută semnificația textului literar și realizează un scurt exercițiu de scriere creativă, pe o temă de cultură națională.',
        ],
        resurse: [
          'Manual Art 5, pp. 172-173',
          'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-3/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Îi întreb pe elevi ce loc din România ar arăta unui prieten din altă țară și de ce.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm semnificația textului și scriem un scurt text creativ despre un loc sau un obicei românesc.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm cum formulăm o semnificație și o opinie sprijinită pe text, din unitățile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției discutăm semnificația textului și pregătim, cu un plan scurt, exercițiul de scriere creativă pe o temă de cultură națională, cu reperele de la pp. 172-173.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev începe un text creativ de câteva rânduri despre un loc sau un obicei românesc drag lui.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea începutului de text creativ.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-3/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Text auxiliar. Scrisoarea III de Mihai Eminescu (fragment)',
      obiective: [
        'Identifică tema textului și formulează ideile principale dintr-un fragment din Scrisoarea III de Mihai Eminescu.',
      ],
      sursaManual: 'Art 5, Lecția 4, „Noi pagini, alte idei”, pp. 174-175 (Scrisoarea III de Mihai Eminescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Scrisoarea III de Mihai Eminescu (fragment)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică tema textului și formulează ideile principale dintr-un fragment din Scrisoarea III de Mihai Eminescu.',
        ],
        resurse: [
          'Manual Art 5, pp. 174-175',
          'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Le spun pe scurt despre ce este Scrisoarea III și îi întreb pe elevi ce știu despre bătălia de la Rovine și despre Mircea cel Bătrân.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un fragment din Scrisoarea III de Mihai Eminescu, îi stabilim tema și formulăm ideile principale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ce este tema unui text și cum formulăm o idee principală, din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citesc fragmentul, clarific arhaismele și figurile de stil, apoi stabilim împreună tema și ideile principale, cu ajutorul fișei lecției și al exemplelor de la pp. 174-175.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev scrie tema fragmentului și două idei principale, cu cuvintele lui.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea temei și a ideilor principale formulate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-4/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Carte românească de învățătură (I), de la prima carte tipărită la cartea digitală',
      obiective: [
        'Identifică tema unui text nonliterar despre istoria cărții tipărite românești.',
      ],
      sursaManual: 'Art 5, Lecția 5, p. 176, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Carte românească de învățătură (I), de la prima carte tipărită la cartea digitală',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică tema unui text nonliterar despre istoria cărții tipărite românești.',
        ],
        resurse: [
          'Manual Art 5, p. 176',
          'Infograficul „Carte românească de învățătură (I)” (/materiale/clasa-5/unitatea-6/lectia-5/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Îi întreb pe elevi cum citesc mai des, pe hârtie sau pe ecran, și cum cred că se citea acum câteva sute de ani.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi citim un text despre istoria cărții tipărite românești și îi stabilim tema.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm trăsăturile textului nonliterar și cum identificăm tema unui text.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul infograficului parcurgem drumul de la primele cărți tipărite la cartea digitală și desprindem tema textului, cu exemplele de la p. 176.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev formulează tema textului și notează trei momente din istoria cărții tipărite.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea temei și a celor trei momente notate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-5/unitatea-6/lectia-5/infografic.svg', titlu: 'Carte românească de învățătură (I)' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Carte românească de învățătură (II), documentare online',
      obiective: [
        'Se documentează pe baza unui articol online despre cartea tipărită de-a lungul timpului și formulează o opinie.',
      ],
      sursaManual: 'Art 5, Lecția 5, p. 177, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Carte românească de învățătură (II), documentare online',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Se documentează pe baza unui articol online despre cartea tipărită de-a lungul timpului și formulează o opinie.',
        ],
        resurse: [
          'Manual Art 5, p. 177',
          'Infograficul „Carte românească de învățătură (II)” (/materiale/clasa-5/unitatea-6/lectia-6/infografic.svg)',
          'Un articol online despre istoria cărții, pregătit de profesor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Îi întreb pe elevi cum verifică dacă o informație găsită pe internet e de încredere.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi ne documentăm pe un articol online despre cartea tipărită și ne formulăm o opinie proprie.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ce am aflat ora trecută despre istoria cărții tipărite și cum formulăm o opinie sprijinită pe informații.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citim ghidat articolul online, notăm sursa și informațiile utile, comparăm cu infograficul și discutăm ce e de încredere, cu reperele de la p. 177.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev scrie o opinie de câteva rânduri despre rolul cărții tipărite, cu o informație din articol ca sprijin.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea opiniei documentate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-5/unitatea-6/lectia-6/infografic.svg', titlu: 'Carte românească de învățătură (II)' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Identitate națională',
      obiective: [
        'Înțelege aspecte privind identitatea națională, pe baza unor simboluri precum sigiliul și stema României.',
      ],
      sursaManual: 'Art 5, Lecția 6, pp. 178-179',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Identitate națională',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Înțelege aspecte privind identitatea națională, pe baza unor simboluri precum sigiliul și stema României.',
        ],
        resurse: [
          'Manual Art 5, pp. 178-179',
          'Infograficul „Identitate națională” (/materiale/clasa-5/unitatea-6/lectia-7/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: 'Le arăt stema României și îi întreb pe elevi ce elemente recunosc și ce cred că înseamnă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vorbim despre identitatea națională, pornind de la simboluri ca sigiliul și stema.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm ce am discutat despre identitatea personală, în Unitatea I, ca punct de plecare pentru identitatea unei comunități.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul infograficului citim elementele stemei și ale sigiliului și discutăm ce spun despre istoria și valorile țării, cu exemplele de la pp. 178-179.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev alege un simbol național și explică în scris ce reprezintă și de ce e important.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea explicației despre un simbol național.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-5/unitatea-6/lectia-7/infografic.svg', titlu: 'Identitate națională' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Proiect de grup. Imagini ale domnitorului (anunțare)',
      obiective: [
        'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup Imagini ale domnitorului.',
      ],
      sursaManual: 'Art 5, Proiect de grup, p. 180 (anunțare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect de grup. Imagini ale domnitorului (anunțare)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup Imagini ale domnitorului.',
        ],
        resurse: [
          'Manual Art 5, p. 180',
          'Fișa proiectului (/materiale/clasa-5/unitatea-6/lectia-8/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: 'Le arăt două portrete diferite ale aceluiași domnitor și îi întreb pe elevi de ce cred că nu seamănă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț tema proiectului de grup Imagini ale domnitorului și faptul că azi înțelegem ce are de făcut fiecare grupă, până când și cum se notează.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reluăm ce am învățat la proiectele de grup din unitățile anterioare despre roluri, calendar și criterii.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Prezint pas cu pas fișa proiectului: produsele cerute, sursele istorice și literare, împărțirea pe grupe și roluri, calendarul și criteriile de evaluare, cu exemplele de la p. 180.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Grupele se formează, își aleg domnitorul și rolurile și notează în fișă primii doi pași și cine răspunde de fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a organizării grupelor; verificarea fișei de pornire a proiectului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-8/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Acte de limbaj: a explica, a recomanda, a afirma',
      obiective: [
        'Identifică și performează actele de limbaj a explica, a recomanda, a afirma.',
      ],
      sursaManual: 'Art 5, Lecția 7, pp. 183-184',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Acte de limbaj: a explica, a recomanda, a afirma',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Identifică și performează actele de limbaj a explica, a recomanda, a afirma.',
        ],
        resurse: [
          'Manual Art 5, pp. 183-184',
          'Quizul „Acte de limbaj: a explica, a recomanda, a afirma” (materialul de joc al lecției)',
          'Bilețele cu situații de comunicare',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Le spun trei enunțuri, unul care explică, unul care recomandă și unul care afirmă, și îi întreb pe elevi ce fac de fapt cu fiecare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi recunoaștem și exersăm actele de limbaj a explica, a recomanda și a afirma.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm actele de limbaj învățate în unitățile anterioare, a întreba, a solicita, a felicita, a promite, a declara.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu exemplele de la pp. 183-184 arăt formule potrivite pentru fiecare act de limbaj, apoi elevii extrag bilețele cu situații și formulează, în perechi, enunțul potrivit.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Câteva perechi joacă situația în fața clasei, apoi elevii rezolvă quizul „Acte de limbaj: a explica, a recomanda, a afirma” și discutăm răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a jocurilor de rol; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Acte de limbaj: a explica, a recomanda, a afirma',
          pasi: [
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Îți recomand să citești și alte poezii de Eminescu”?',
              variante: [
                { text: 'o recomandare', corect: true, explicatie: 'Verbul „recomand” marchează explicit acest act de limbaj.' },
                { text: 'o explicație', corect: false, explicatie: 'O explicație ar clarifica de ce sau cum se întâmplă ceva, nu ar sugera o acțiune.' },
                { text: 'o afirmație', corect: false, explicatie: 'O afirmație simplă ar constata un fapt, nu ar sugera o acțiune viitoare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 183',
            },
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Cartea a fost tipărită pentru prima dată în secolul al XVI-lea”?',
              variante: [
                { text: 'o afirmație', corect: true, explicatie: 'Enunțul constată un fapt, fără să ceară sau să recomande ceva.' },
                { text: 'o recomandare', corect: false, explicatie: 'Nu sugerezi nicio acțiune, doar constați un fapt istoric.' },
                { text: 'o promisiune', corect: false, explicatie: 'Nu te angajezi la nimic, doar afirmi o informație.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 183',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Prezentarea proiectului de grup Imagini ale domnitorului',
      obiective: [
        'Prezintă și evaluează, pe grupe, proiectul Imagini ale domnitorului, conform criteriilor stabilite.',
      ],
      sursaManual: 'Art 5, Proiect de grup, p. 180 (prezentare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului de grup Imagini ale domnitorului',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Prezintă și evaluează, pe grupe, proiectul Imagini ale domnitorului, conform criteriilor stabilite.',
        ],
        resurse: [
          'Manual Art 5, p. 180',
          'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-6/lectia-10/fisa.pdf)',
          'Produsele proiectelor pe grupe',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: 'Le amintesc grupelor că azi își arată munca și că ascultăm fiecare prezentare cu atenție și respect.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se prezintă proiectele pe grupe și că fiecare se evaluează după criteriile din fișă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Recapitulăm criteriile de evaluare și elementele unei prezentări orale bune, verbale, paraverbale, nonverbale.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '8 min',
            activitate: 'Amintesc structura unei prezentări bune și cât timp are fiecare grupă, apoi stabilim ordinea grupelor.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '31 min',
            activitate: 'Grupele prezintă pe rând imaginile domnitorului adunate și interpretarea lor, colegii pun câte o întrebare, iar eu completez fișa de evaluare pentru fiecare grupă.',
          },
        ],
        evaluare: 'Evaluarea proiectului pe grupe după criteriile din fișă; observarea prezentării și a feedbackului între colegi.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-10/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Enunțul',
      obiective: [
        'Identifică structurile sintactice de bază și alcătuiește enunțuri simple și complexe.',
      ],
      sursaManual: 'Art 5, Lecția 8, p. 185, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Enunțul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică structurile sintactice de bază și alcătuiește enunțuri simple și complexe.',
        ],
        resurse: [
          'Manual Art 5, p. 185',
          'Schema „Enunțul” (/materiale/clasa-5/unitatea-6/lectia-11/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Scriu pe tablă un cuvânt singur și o propoziție întreagă și îi întreb pe elevi care dintre ele transmite un gând complet.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm ce este enunțul și cum alcătuim enunțuri simple și complexe.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm propoziția simplă și dezvoltată și părțile de propoziție, din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definim enunțul, structurile sintactice de bază și diferența dintre enunțul simplu, cu o singură predicație, și cel complex, cu exemplele de la p. 185.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev alcătuiește trei enunțuri simple și trei complexe pe tema călătoriei și subliniază predicatele.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea enunțurilor alcătuite.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-6/lectia-11/schema.svg', titlu: 'Enunțul' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Tipuri de enunț',
      obiective: [
        'Recunoaște enunțurile asertive, interogative, imperative și exclamative și folosește corect semnele de punctuație.',
      ],
      sursaManual: 'Art 5, Lecția 8, p. 186, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Tipuri de enunț',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște enunțurile asertive, interogative, imperative și exclamative și folosește corect semnele de punctuație.',
        ],
        resurse: [
          'Manual Art 5, p. 186',
          'Schema „Tipuri de enunț” (/materiale/clasa-5/unitatea-6/lectia-12/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Spun aceeași idee în patru feluri, constatare, întrebare, îndemn, exclamație, și îi întreb pe elevi ce s-a schimbat de fiecare dată.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi recunoaștem cele patru tipuri de enunț și punem semnul de punctuație potrivit fiecăruia.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm enunțul învățat ora trecută și modul imperativ, din Unitatea II.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definim enunțul asertiv, interogativ, imperativ și exclamativ și semnele lor de punctuație, cu exemplele de la p. 186.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev transformă un enunț asertiv dat în celelalte trei tipuri, cu punctuația corectă, și clasifică cinci enunțuri după tip.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de transformare și clasificare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-6/lectia-12/schema.svg', titlu: 'Tipuri de enunț' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Prezentarea textului (I), inserarea unor desene, grafice, fotografii, scheme',
      obiective: [
        'Analizează, prin lectura ghidată a imaginii, rolul desenelor, graficelor și schemelor într-un text.',
      ],
      sursaManual: 'Art 5, Lecția 9, p. 187, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea textului (I), inserarea unor desene, grafice, fotografii, scheme',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Analizează, prin lectura ghidată a imaginii, rolul desenelor, graficelor și schemelor într-un text.',
        ],
        resurse: [
          'Manual Art 5, p. 187',
          'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-13/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: 'Le arăt aceeași informație scrisă în text și pusă într-o schemă și îi întreb pe elevi care se înțelege mai repede.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vedem ce rol au desenele, graficele, fotografiile și schemele într-un text și cum le citim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm textul multimodal din Unitatea IV și lectura ghidată a imaginii, exersată în mai multe unități.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției analizăm exemple de text însoțit de grafice și scheme, discutăm ce adaugă fiecare imagine și cum se leagă de text, cu reperele de la p. 187.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev alege un fragment de text și notează ce fel de imagine i s-ar potrivi și ce ar arăta ea.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea propunerii de material grafic pentru un text.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-13/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Prezentarea textului (II), conceperea unui material grafic',
      obiective: [
        'Redactează o compunere cu integrarea unui material grafic propriu, cu respectarea etapelor scrierii.',
      ],
      sursaManual: 'Art 5, Lecția 9, p. 188, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea textului (II), conceperea unui material grafic',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o compunere cu integrarea unui material grafic propriu, cu respectarea etapelor scrierii.',
        ],
        resurse: [
          'Manual Art 5, p. 188',
          'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-14/fisa.pdf)',
          'Propunerea de material grafic de la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: 'Le cer elevilor să recitească propunerea de material grafic notată ora trecută și să spună ce vor scrie în jurul ei.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi scriem o compunere scurtă în care integrăm un material grafic propriu și o revizuim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm etapele scrierii și rolul imaginii într-un text, discutat ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '19 min',
            activitate: 'Cu ajutorul fișei lecției arăt cum se leagă textul de schema sau graficul propriu, cu titlu și legendă, și ce urmărim la revizuire, cu exemplele de la p. 188.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Fiecare elev redactează compunerea și desenează materialul grafic însoțitor, apoi le schimbă cu colegul pentru o revizuire reciprocă după lista de control.',
          },
        ],
        evaluare: 'Grilă de autoevaluare din fișă; observarea sistematică a redactării și a materialului grafic.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-14/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea VI: jurnalul de călătorie, actele de limbaj, identitatea națională.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 189-190, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea VI: jurnalul de călătorie, actele de limbaj, identitatea națională.',
        ],
        resurse: [
          'Manual Art 5, pp. 189-190',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: 'Îi rog pe elevi să spună pe rând câte o noțiune de lectură sau de comunicare din unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm jurnalul de călătorie și trăsăturile lui, actele de limbaj și identitatea națională.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple, trăsăturile textului narativ nonliterar, actele de limbaj a explica, a recomanda, a afirma, și simbolurile identității naționale.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Rezolvăm ghidat exercițiile de lectură și comunicare de la pp. 189-190.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, lectură și comunicare”, apoi discutăm răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce deosebește un jurnal de călătorie de un text narativ literar?',
              variante: [
                { text: 'Jurnalul de călătorie relatează fapte reale, trăite de autor, nu o ficțiune', corect: true, explicatie: 'Caracterul nonliterar al jurnalului vine tocmai din legătura cu fapte reale, nu inventate.' },
                { text: 'Jurnalul de călătorie nu are niciun autor', corect: false, explicatie: 'Jurnalul are un autor, la fel ca orice text, doar că relatează experiențe reale.' },
                { text: 'Nu există nicio deosebire', corect: false, explicatie: 'Deosebirea esențială e caracterul real, nonliterar, al jurnalului.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 2, p. 171',
            },
            {
              intrebare: 'Ce act de limbaj realizezi când explici cuiva cum funcționează ceva?',
              variante: [
                { text: 'o explicație', corect: true, explicatie: 'Explicația clarifică o cauză sau un mecanism, un motiv sau un fel de a face ceva.' },
                { text: 'o recomandare', corect: false, explicatie: 'Recomandarea ar sugera o acțiune, nu ar clarifica un mecanism.' },
                { text: 'o promisiune', corect: false, explicatie: 'Promisiunea presupune un angajament pentru viitor, nu o clarificare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 183',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea VI: enunțul și tipurile de enunț.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 189-190, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea VI: enunțul și tipurile de enunț.',
        ],
        resurse: [
          'Manual Art 5, pp. 189-190',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: 'Le dictez un enunț și le cer să spună repede ce tip este și ce semn de punctuație cere.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm enunțul, enunțurile simple și complexe și cele patru tipuri de enunț.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple la tablă, enunțul simplu și complex și enunțurile asertive, interogative, imperative și exclamative.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile de gramatică și redactare de la pp. 189-190.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '16 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi cei care termină scriu un scurt dialog cu toate cele patru tipuri de enunț.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Ce semn de punctuație marchează, de obicei, un enunț interogativ?',
              variante: [
                { text: 'semnul întrebării', corect: true, explicatie: 'Enunțul interogativ pune o întrebare, marcată prin semnul întrebării.' },
                { text: 'punctul', corect: false, explicatie: 'Punctul marchează, de obicei, un enunț asertiv.' },
                { text: 'semnul exclamării', corect: false, explicatie: 'Semnul exclamării marchează emoția puternică a unui enunț exclamativ.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 186',
            },
            {
              intrebare: 'Ce tip de enunț este Urcă în tren, te rog!?',
              variante: [
                { text: 'imperativ', corect: true, explicatie: 'Enunțul dă un îndemn, o rugăminte adresată direct interlocutorului.' },
                { text: 'asertiv', corect: false, explicatie: 'Asertivul ar constata un fapt, nu ar da un îndemn.' },
                { text: 'interogativ', corect: false, explicatie: 'Enunțul nu pune nicio întrebare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 186',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea VI.',
      ],
      sursaManual: 'Art 5, Evaluare, p. 191',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea VI.',
        ],
        resurse: [
          'Testul tipărit, Manual Art 5, p. 191',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '2 min',
            activitate: 'Le spun elevilor că proba de azi arată tot ce au învățat în unitate și îi liniștesc în privința timpului de lucru.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se dă proba scrisă a Unității VI, care verifică lectura, gramatica și redactarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc pe scurt structura probei și repartizarea timpului între exerciții și redactare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele de la p. 191, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '35 min',
            activitate: 'Elevii rezolvă individual proba scrisă; supraveghez discret, gestionez timpul și strâng lucrările la final.',
          },
        ],
        evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
  ],
}
