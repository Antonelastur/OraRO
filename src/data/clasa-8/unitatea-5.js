// Unitatea V: Încotro se îndreaptă lumea? — clasa a VIII-a
// Sursă: manual Art Klett 2025, 8. Ghid.pdf — Planificare calendaristică
// orientativă 2025-2026 și Proiectarea unităților de învățare, Unitatea V
// (pp. 43, 72-77 din ghid).
//
// Convenție de numerotare: ore de curs din proiectarea ghidului, ca la
// unitățile anterioare. Rândurile de 2 ore („Argumentare și persuasiune”,
// „Modalități de exprimare a preferințelor”, „Evaluare”) sunt despărțite în
// câte 2 lecții, iar recapitularea de 3 ore în 3 lecții.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx.

export const unitatea5 = {
  id: 'unitatea-5',
  titlu: 'Unitatea V: Încotro se îndreaptă lumea?',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul epic. Fahrenheit 451 de Ray Bradbury',
      obiective: [
        'Citește un fragment din Fahrenheit 451 de Ray Bradbury și formulează primele impresii de lectură.',
      ],
      sursaManual: 'Art 8, pp. 164-169',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul epic. Fahrenheit 451 de Ray Bradbury',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Citește un fragment din Fahrenheit 451 de Ray Bradbury și formulează primele impresii de lectură.',
        ],
        resurse: [
          'Manual Art 8, pp. 164-169',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-1/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'O lume fără cărți',
            timp: '6 min',
            activitate: '– Îi întreb pe elevi ce s-ar schimba în viața lor dacă, de mâine, cărțile ar fi interzise; notăm trei idei pe tablă.',
          },
          {
            etapa: 'Autorul și romanul',
            timp: '4 min',
            activitate: '– Caseta despre Ray Bradbury și Fahrenheit 451 (pp. 164-165): titlul indică temperatura la care arde hârtia; contextul distopic al romanului.',
          },
          {
            etapa: 'Lectura model',
            timp: '18 min',
            activitate: '– Citesc fragmentul (pp. 164-169); lămurim termenii noi (pompierul care aprinde, nu stinge, focul; salamandra; Phoenix) pe măsură ce apar.\n– Ne oprim la scena-cheie: Montag descoperă că vecina lui ascunde cărți și e trădată.',
          },
          {
            etapa: 'Rubrica „Pentru început” și Explorare',
            timp: '8 min',
            activitate: '– Rezolvăm ghidat 2-3 întrebări din Explorare: ce simte Montag văzând cărțile arse; ce rol au „Câinii mecanici” în lumea romanului.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (impresii pe cadrane) și ex. 2 (întrebări pe un fragment creat pentru fișă, ca exercițiu suplimentar de înțelegere), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: restul întrebărilor din Explorare; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-1/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Fahrenheit 451',
          pasi: [
            {
              intrebare: 'Ce face Guy Montag, ca pompier, în lumea din Fahrenheit 451?',
              variante: [
                {
                  text: 'Arde cărți, fiindcă sunt interzise',
                  corect: true,
                  explicatie: 'Casele nu mai iau foc, așa că pompierii au primit o nouă misiune: să ardă cărțile.',
                },
                {
                  text: 'Stinge incendii',
                  corect: false,
                  explicatie: 'Asta făceau pompierii pe vremuri; Clarisse abia a auzit de așa ceva.',
                },
                {
                  text: 'Construiește case neinflamabile',
                  corect: false,
                  explicatie: 'Casele erau deja neinflamabile, de mult.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 164-168',
            },
            {
              intrebare: 'Ce înseamnă titlul Fahrenheit 451?',
              variante: [
                {
                  text: 'Temperatura la care ia foc și arde hârtia din care sunt făcute cărțile',
                  corect: true,
                  explicatie: 'Cifra 451 apare și pe casca și pe mâneca lui Montag.',
                },
                {
                  text: 'Anul în care se petrece acțiunea',
                  corect: false,
                  explicatie: 'Nu e un an, ci o temperatură.',
                },
                {
                  text: 'Numărul casei lui Montag',
                  corect: false,
                  explicatie: 'Cifra ține de meseria lui, nu de adresă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 164',
            },
            {
              intrebare: 'Ce întrebare a Clarissei îl tulbură pe Montag?',
              variante: [
                {
                  text: '„Ești fericit?”',
                  corect: true,
                  explicatie: 'La început râde, dar întrebarea nu-i mai iese din minte.',
                },
                {
                  text: '„Unde locuiești?”',
                  corect: false,
                  explicatie: 'Știe deja: sunt vecini.',
                },
                {
                  text: '„Câți ani ai?”',
                  corect: false,
                  explicatie: 'Pe aceasta i-o pune el ei.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 167',
            },
            {
              intrebare: 'De ce spune Beatty că trebuie arse cărțile?',
              variante: [
                {
                  text: 'Ca oamenii să rămână liniștiți și „fericiți”, fără gânduri care îi neliniștesc',
                  corect: true,
                  explicatie: 'Beatty numește pompierii „apărători ai liniștii noastre sufletești”.',
                },
                {
                  text: 'Pentru că ocupă prea mult loc în case',
                  corect: false,
                  explicatie: 'Nu spațiul îl îngrijorează, ci gândurile pe care le trezesc cărțile.',
                },
                {
                  text: 'Pentru că hârtia e scumpă',
                  corect: false,
                  explicatie: 'Nicăieri nu e vorba de bani.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 167-168',
            },
            {
              intrebare: 'Cum păstrează oamenii-cărți înțelepciunea cărților arse?',
              variante: [
                {
                  text: 'Le învață pe de rost, fiecare devenind o carte',
                  corect: true,
                  explicatie: 'Montag devine Ecleziastul.',
                },
                {
                  text: 'Le ascund în peșteri',
                  corect: false,
                  explicatie: 'Au renunțat chiar și la microfilmele îngropate.',
                },
                {
                  text: 'Le copiază pe computere',
                  corect: false,
                  explicatie: 'Păstrează totul „în capetele astea ale noastre”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 168-169',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Textul epic de mare întindere',
      obiective: [
        'Identifică trăsăturile distopiei și rolul decupajului în părți și capitole al unui text epic de mare întindere.',
      ],
      sursaManual: 'Art 8, pp. 170-171',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul epic de mare întindere',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile distopiei și rolul decupajului în părți și capitole al unui text epic de mare întindere.',
        ],
        resurse: [
          'Manual Art 8, pp. 170-171',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-2/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Lumi ale viitorului',
            timp: '5 min',
            activitate: '– Îi întreb pe elevi ce filme sau cărți știu despre un viitor în care lucrurile merg prost și ce au ele în comun.',
          },
          {
            etapa: 'Romanul și speciile lui',
            timp: '8 min',
            activitate: '– Explic decupajul unui text epic amplu în părți, capitole, blancuri și rolul blancurilor: reper de lectură, delimitează un episod, întreține suspansul.\n– Definesc romanul: personaje numeroase, acțiune complexă, mai multe fire narative; temele frecvente (social, istoric, aventuri, SF).',
          },
          {
            etapa: 'Utopie și distopie',
            timp: '8 min',
            activitate: '– Comparăm utopia (societate ideală, imaginară) cu distopia (societate a viitorului dezumanizată de un control politic, tehnologic sau religios), cu exemple din Fahrenheit 451.',
          },
          {
            etapa: 'SF, fantastic, fantasy',
            timp: '7 min',
            activitate: '– Deosebim SF-ul (ipoteze științifice), fantasticul (dimensiunea inexplicabilă) și fantasy-ul (magia), cu câte un exemplu propus de elevi.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (utopie sau distopie) și ex. 2 (SF, fantastic sau fantasy), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '10 min',
            activitate: '– Rezolvăm ghidat un exercițiu din manual despre temele SF-ului actual (inteligența artificială, ecologia).\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-2/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Romanul, distopia și SF-ul',
          pasi: [
            {
              intrebare: 'Ce este romanul?',
              variante: [
                {
                  text: 'În general, cel mai amplu text epic, cu personaje numeroase și o acțiune complexă, cu mai multe fire narative',
                  corect: true,
                  explicatie: 'Există și romane scurte; e specia cea mai puțin supusă constrângerilor.',
                },
                {
                  text: 'Un text liric în versuri',
                  corect: false,
                  explicatie: 'Romanul e un text epic, în proză.',
                },
                {
                  text: 'Un text epic scurt, cu un singur episod',
                  corect: false,
                  explicatie: 'Romanul îmbină, de regulă, mai multe fire narative.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 170',
            },
            {
              intrebare: 'Ce rol poate avea un blanc, un spațiu alb, într-un text epic?',
              variante: [
                {
                  text: 'Delimitează un episod, oferă un reper de lectură și întreține suspansul',
                  corect: true,
                  explicatie: 'Decupajul acțiunii te face să vrei să citești mai departe.',
                },
                {
                  text: 'E o greșeală de tipar',
                  corect: false,
                  explicatie: 'E pus acolo cu intenție.',
                },
                {
                  text: 'Marchează sfârșitul cărții',
                  corect: false,
                  explicatie: 'Blancurile apar și în interiorul textului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 170',
            },
            {
              intrebare: 'Ce este distopia?',
              variante: [
                {
                  text: 'Imaginea unei societăți a viitorului, dezumanizată de un control politic, tehnologic sau religios',
                  corect: true,
                  explicatie: 'E opusul utopiei.',
                },
                {
                  text: 'Imaginea unei societăți ideale',
                  corect: false,
                  explicatie: 'Aceea e utopia, adică „loc care nu există”.',
                },
                {
                  text: 'O poveste cu zâne și magie',
                  corect: false,
                  explicatie: 'Magia ține de fantasy.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 170',
            },
            {
              intrebare: 'Prin ce se deosebește SF-ul de fantasy?',
              variante: [
                {
                  text: 'SF-ul pornește de la ipoteze științifice și cunoștințe tehnice; în fantasy intervine magia',
                  corect: true,
                  explicatie: 'Iar fantasticul are o dimensiune inexplicabilă a evenimentelor.',
                },
                {
                  text: 'SF-ul are mereu extratereștri',
                  corect: false,
                  explicatie: 'Invazia extraterestră e doar una dintre temele posibile.',
                },
                {
                  text: 'Nu se deosebesc',
                  corect: false,
                  explicatie: 'Manualul le desparte clar, după ce anume face posibile întâmplările.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 171',
            },
            {
              intrebare: 'Fragmentul din Rabelais, cu thelemiții care trăiesc după regula „Fă ce-ți place!”, aparține unei utopii sau unei distopii?',
              variante: [
                {
                  text: 'Unei utopii: descrie o societate ideală, a învățăturii și a bucuriei',
                  corect: true,
                  explicatie: 'Thelemiții nu lenevesc, învață limbi, cântă și se bucură că trăiesc.',
                },
                {
                  text: 'Unei distopii',
                  corect: false,
                  explicatie: 'Nicio formă de control nu îi apasă pe thelemiți.',
                },
                {
                  text: 'Nici uneia',
                  corect: false,
                  explicatie: 'E o construcție imaginară a unei societăți ideale, deci o utopie.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 171',
            },
            {
              intrebare: 'Ce tip de roman este Fahrenheit 451, după temă?',
              variante: [
                {
                  text: 'De anticipație (SF), cu o viziune distopică',
                  corect: true,
                  explicatie: 'Imaginează un viitor în care cărțile sunt interzise.',
                },
                {
                  text: 'Istoric',
                  corect: false,
                  explicatie: 'Nu reconstituie un trecut real.',
                },
                {
                  text: 'Polițist',
                  corect: false,
                  explicatie: 'Deși Montag e urmărit, tema nu e ancheta unei crime.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 164, 170-171',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-2/schema.svg',
          titlu: 'Romanul și lumile posibile',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Structuri textuale',
      obiective: [
        'Identifică modul în care se îmbină structurile textuale în fragmentul studiat.',
      ],
      sursaManual: 'Art 8, pp. 172-173',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Structuri textuale',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică modul în care se îmbină structurile textuale în fragmentul studiat.',
        ],
        resurse: [
          'Manual Art 8, pp. 172-173',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-3/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Trei pasaje',
            timp: '5 min',
            activitate: '– Le arăt elevilor trei pasaje scurte din fragmentul studiat și îi întreb ce face fiecare: povestește, descrie sau dă replici.',
          },
          {
            etapa: 'Cele cinci structuri',
            timp: '8 min',
            activitate: '– Recapitulăm structura dialogată (adresare la persoana a II-a, replici), narativă (acțiune cu personaje), descriptivă (trăsături, cadru), explicativă (cauze, funcționare), argumentativă (susține un punct de vedere).',
          },
          {
            etapa: 'Cum se îmbină structurile',
            timp: '10 min',
            activitate: '– Prezint cele trei moduri: succesiune (A→B), alternanță (A→B→A→B), inserție (A[B]A), cu exemplul din manual: descriptivă–(narativă)–descriptivă, structura narativă inserată în cea descriptivă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (structurile textuale ale unui text creat pentru fișă) și ex. 2 (cum se îmbină), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicație pe manual',
            timp: '11 min',
            activitate: '– Rezolvăm ghidat un pasaj din manual (pp. 172-173) și identificăm structurile și modul lor de îmbinare, împreună.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; restul exercițiilor din manual.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-5/lectia-3/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-5/lectia-3/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-3/schema.svg',
          titlu: 'Cum se îmbină structurile textuale',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Personajele. Conflictul',
      obiective: [
        'Identifică tipurile de personaje și sursele conflictuale din roman.',
      ],
      sursaManual: 'Art 8, pp. 174-175',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Personajele. Conflictul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică tipurile de personaje și sursele conflictuale din roman.',
        ],
        resurse: [
          'Manual Art 8, pp. 174-175',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-4/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Cu cine se luptă Montag?',
            timp: '5 min',
            activitate: '– Îi întreb pe elevi cu cine se luptă de fapt Montag: cu o persoană, cu o instituție sau cu el însuși.',
          },
          {
            etapa: 'Clasificarea personajelor',
            timp: '8 min',
            activitate: '– Prezint criteriile: importanța (principal/secundar), rolul în conflict (protagonist/antagonist), numărul (individual/colectiv), evoluția.\n– Amintesc perechile antitetice de personaje, legate de antiteza din Unitatea IV.',
          },
          {
            etapa: 'Conflictul exterior și interior',
            timp: '9 min',
            activitate: '– Inventariem sursele conflictului: cu altă persoană, cu societatea, cu natura, cu tehnologia, cu sine însuși, cu soarta, cu exemple din Fahrenheit 451.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (tipuri de personaje) și ex. 2 (tipul de conflict), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Blazonul personajului',
            timp: '9 min',
            activitate: '– Fiecare elev completează, pe fișă, blazonul lui Montag: eveniment important, calitate, defect, personaj asemănător, o vietate potrivită.',
          },
          {
            etapa: 'Temă',
            timp: '7 min',
            activitate: '– Rezolvăm ghidat un exercițiu din manual (pp. 174-175) despre conflictul dintre Montag și societate.\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; blazonul personajului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-5/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-5/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-4/schema.svg',
          titlu: 'Personajele și tipurile de conflict',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Discută semnificația simbolurilor din roman și a titlurilor celor trei părți ale acestuia.',
      ],
      sursaManual: 'Art 8, pp. 176-177',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Discută semnificația simbolurilor din roman și a titlurilor celor trei părți ale acestuia.',
        ],
        resurse: [
          'Manual Art 8, pp. 176-177',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-5/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Titlurile celor trei părți',
            timp: '5 min',
            activitate: '– Le spun titlurile celor trei părți ale romanului (după manual) și îi întreb ce anticipează fiecare.',
          },
          {
            etapa: 'Simbolurile duble',
            timp: '12 min',
            activitate: '– Discutăm dubla valoare a focului: distrugere (arde cărțile) și renaștere (căldura, pasărea Phoenix care renaște din propria cenușă).\n– Discutăm cartea ca simbol al memoriei și al gândirii libere.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (simboluri duble) și ex. 2 (titluri de părți), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Interpretare pe manual',
            timp: '13 min',
            activitate: '– Rezolvăm ghidat 3-4 întrebări de interpretare din manual despre semnificația titlurilor părților romanului și despre simbolurile identificate.',
          },
          {
            etapa: 'Temă',
            timp: '8 min',
            activitate: '– Comparăm simbolurile din Fahrenheit 451 cu antiteza din Iapa lui Vodă, din Unitatea IV.\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-5/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-5/lectia-5/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Textul nonliterar. Textul de opinie. Când vei fi adult, e posibil să nu ai un loc de muncă de Yuval Noah Harari',
      obiective: [
        'Recunoaște trăsăturile textului de opinie și strategiile de argumentare folosite de autor.',
      ],
      sursaManual: 'Art 8, pp. 178-180',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul nonliterar. Textul de opinie. Când vei fi adult, e posibil să nu ai un loc de muncă de Yuval Noah Harari',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Recunoaște trăsăturile textului de opinie și strategiile de argumentare folosite de autor.',
        ],
        resurse: [
          'Manual Art 8, pp. 178-180',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-6/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Meseria mea, peste 20 de ani',
            timp: '5 min',
            activitate: '– Îi întreb pe elevi ce meserie își doresc și dacă cred că va mai exista peste douăzeci de ani.',
          },
          {
            etapa: 'Textul de opinie',
            timp: '5 min',
            activitate: '– Definesc textul de opinie: un text nonliterar în care autorul își expune opiniile ca să convingă cititorii; deosebim argumentele raționale de cele emoționale.',
          },
          {
            etapa: 'Lectura fragmentului',
            timp: '10 min',
            activitate: '– Citim fragmentul din textul lui Yuval Noah Harari (pp. 178-180); notăm teza autorului despre viitorul muncii.',
          },
          {
            etapa: 'Strategiile de argumentare',
            timp: '8 min',
            activitate: '– Prezint strategiile: obiecția (respinge o idee opusă), concesia (o acceptă parțial), analogia, examenul critic, confruntarea (pro versus contra), cu câte un exemplu identificat în text.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (textul despre meseriile de mâine, creat pentru fișă) și ex. 2 (strategiile din text), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '10 min',
            activitate: '– Rezolvăm ghidat conectorii de ierarhizare, adaos, opoziție din text (pp. 178-180).\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-5/lectia-6/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-5/lectia-6/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-6/schema.svg',
          titlu: 'Cum e construit un text de opinie',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Text auxiliar. Prima lecție de geometrie de Ov. S. Crohmălniceanu',
      obiective: [
        'Citește fragmentul Prima lecție de geometrie și formulează puncte de vedere argumentate despre el.',
      ],
      sursaManual: 'Art 8, pp. 181-182',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Prima lecție de geometrie de Ov. S. Crohmălniceanu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Citește fragmentul Prima lecție de geometrie și formulează puncte de vedere argumentate despre el.',
        ],
        resurse: [
          'Manual Art 8, pp. 181-182',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-7/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'O lecție care rămâne',
            timp: '6 min',
            activitate: '– Îi întreb pe elevi ce lecție de școală le-a rămas în minte mult după ce s-a terminat ora, și de ce.',
          },
          {
            etapa: 'Lectura fragmentului',
            timp: '12 min',
            activitate: '– Citesc fragmentul Prima lecție de geometrie (pp. 181-182); discutăm relația dintre profesor și elevi.',
          },
          {
            etapa: 'Ce face o lecție memorabilă',
            timp: '10 min',
            activitate: '– Rezolvăm ghidat 2-3 întrebări din manual despre metoda profesorului și despre felul în care se schimbă înțelegerea elevului.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (textul „Lecția cu umbre”, creat pentru fișă) și ex. 2 (lecția memorabilă a fiecăruia), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '10 min',
            activitate: '– Discutăm legătura dintre tema unității (încotro se îndreaptă lumea) și rolul cunoașterii, cu exemple de la elevi.\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-5/lectia-7/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-5/lectia-7/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Modele comportamentale în textele literaturii universale',
      obiective: [
        'Discută semnificația mitului lui Prometeu, pe baza fragmentului din Prometeu înlănțuit de Eschil.',
      ],
      sursaManual: 'Art 8, pp. 184-185',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modele comportamentale în textele literaturii universale',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Discută semnificația mitului lui Prometeu, pe baza fragmentului din Prometeu înlănțuit de Eschil.',
        ],
        resurse: [
          'Manual Art 8, pp. 184-185',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-8/fisa-exercitii.pdf)',
          'Infograficul „Modele comportamentale în literatura universală” (/materiale/clasa-8/unitatea-5/lectia-8/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Merită să înfrunți o autoritate?',
            timp: '6 min',
            activitate: '– Îi întreb pe elevi dacă merită să înfrunți o autoritate ca să faci un bine altora și ce preț ar fi dispuși să plătească.',
          },
          {
            etapa: 'Mitul lui Prometeu',
            timp: '12 min',
            activitate: '– Povestesc mitul: Prometeu fură focul de la zei și îl dă oamenilor, sfidând autoritatea lui Zeus, și e pedepsit pentru asta, înlănțuit pe o stâncă.\n– Discutăm dubla valoare a focului: cunoaștere, putere, dar și risc.',
          },
          {
            etapa: 'Fragmentul din Eschil',
            timp: '12 min',
            activitate: '– Citim fragmentul din Prometeu înlănțuit (pp. 184-185) și comentăm atitudinea lui Prometeu față de suferință.\n– Rezolvăm ghidat 1-2 întrebări din manual despre curajul de a înfrunta o autoritate.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (mitul lui Prometeu) și ex. 2 (modelul eroului, comparat cu alte personaje din unitate), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Infograficul',
            timp: '4 min',
            activitate: '– Privim infograficul „Modele comportamentale în literatura universală” și situăm Prometeu printre eroii care sfidează o autoritate pentru binele altora.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-8/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Prometeu',
          pasi: [
            {
              intrebare: 'Care sunt cele două gesturi prin care Prometeu îl înșală pe Zeus?',
              variante: [
                {
                  text: 'Împarte nedrept taurul sacrificat la Mekone și fură focul divin pentru oameni',
                  corect: true,
                  explicatie: 'Amândouă sunt făcute din iubire pentru oameni.',
                },
                {
                  text: 'Fură fulgerele și cutia Pandorei',
                  corect: false,
                  explicatie: 'Cutia Pandorei e răzbunarea lui Zeus, nu fapta lui Prometeu.',
                },
                {
                  text: 'Refuză să-l ajute pe Zeus să ia puterea',
                  corect: false,
                  explicatie: 'Dimpotrivă, l-a ajutat să preia puterea în Olimp.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 183',
            },
            {
              intrebare: 'De ce se revoltă Prometeu împotriva lui Zeus?',
              variante: [
                {
                  text: 'Din iubire pentru oameni',
                  corect: true,
                  explicatie: 'E cunoscut ca binefăcătorul oamenilor.',
                },
                {
                  text: 'Ca să ia locul lui Zeus',
                  corect: false,
                  explicatie: 'Nu urmărește puterea pentru el.',
                },
                {
                  text: 'Din dorință de bogăție',
                  corect: false,
                  explicatie: 'Nu câștigă nimic; plătește cu chinuri eterne.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 183',
            },
            {
              intrebare: 'Cum este pedepsit Prometeu?',
              variante: [
                {
                  text: 'E înlănțuit de o stâncă din Caucaz, iar un vultur îi mănâncă zilnic ficatul, care crește la loc noaptea',
                  corect: true,
                  explicatie: 'Chinul e fără sfârșit, fiindcă ficatul se reface.',
                },
                {
                  text: 'E alungat pe Pământ, printre oameni',
                  corect: false,
                  explicatie: 'Pedeapsa e mult mai crudă.',
                },
                {
                  text: 'E transformat în stea',
                  corect: false,
                  explicatie: 'Nu apare nicio metamorfoză în mit.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 183',
            },
            {
              intrebare: 'Ce fel de erou este Prometeu?',
              variante: [
                {
                  text: 'Un erou civilizator, simbol al progresului și al revoltei împotriva tiraniei',
                  corect: true,
                  explicatie: 'Cu focul, oamenii au putut dezvolta meșteșugurile, științele și artele.',
                },
                {
                  text: 'Un personaj negativ, care aduce doar rău',
                  corect: false,
                  explicatie: 'Gesturile lui au și urmări negative, dar le aduc oamenilor civilizația.',
                },
                {
                  text: 'Un zeu al războiului',
                  corect: false,
                  explicatie: 'E titan, iar darurile lui sunt ale păcii: meșteșuguri, leacuri, litere.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 184',
            },
            {
              intrebare: 'Ce înseamnă expresia „cutia Pandorei”, folosită și azi?',
              variante: [
                {
                  text: 'Un lucru din care ies multe necazuri',
                  corect: true,
                  explicatie: 'Zeus le-a trimis oamenilor toate nenorocirile, ascunse în cutia dăruită Pandorei.',
                },
                {
                  text: 'O cutie cu comori',
                  corect: false,
                  explicatie: 'În cutie erau nenorociri, nu comori.',
                },
                {
                  text: 'Un dar care aduce noroc',
                  corect: false,
                  explicatie: 'Darul era chiar pedeapsa lui Zeus.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 183',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-8/unitatea-5/lectia-8/infografic.svg', titlu: 'Modele comportamentale în literatura universală' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Argumentare și persuasiune (partea 1/2)',
      obiective: [
        'Identifică erorile logice în argumentare și forța persuasivă a diferitelor tipuri de argumente.',
      ],
      sursaManual: 'Art 8, pp. 186-187 (partea 1/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Argumentare și persuasiune (partea 1/2)',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Identifică erorile logice în argumentare și forța persuasivă a diferitelor tipuri de argumente.',
        ],
        resurse: [
          'Manual Art 8, pp. 186-187',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-9/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Un argument evident greșit',
            timp: '5 min',
            activitate: '– Le dau un argument greșit, „toți fac așa, deci e corect”, și îi întreb pe elevi ce nu funcționează în el.',
          },
          {
            etapa: 'Logos, patos, etos',
            timp: '10 min',
            activitate: '– Definesc cele trei apeluri: logos (corectitudinea logică), patos (implicarea emoțională), etos (credibilitatea vorbitorului), cu exemple.',
          },
          {
            etapa: 'Forța unui argument',
            timp: '8 min',
            activitate: '– Explic cei doi factori: premisele juste și legătura corectă cu concluzia; analizăm raționamentul greșit din manual, „Gulliver merge la școala din Laputa, deci Gulliver este elev al acestei școli”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (logos, patos sau etos) și ex. 2 (raționamente corecte sau greșite), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Erori logice, în perechi',
            timp: '11 min',
            activitate: '– În perechi: fiecare inventează un raționament greșit și îl dă colegului să identifice eroarea.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-9/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Argumentare și persuasiune',
          pasi: [
            {
              intrebare: 'Care sunt cele trei elemente la care apelează orice argumentare convingătoare?',
              variante: [
                { text: 'corectitudinea logică a argumentelor (logos), implicarea emoțională a auditoriului (patos), credibilitatea vorbitorului (etos)', corect: true, explicatie: 'Calitatea unei argumentări se măsoară prin puterea ei de persuasiune.' },
                { text: 'lungimea discursului, volumul vocii, numărul de exemple', corect: false, explicatie: 'Acestea nu sunt cele trei elemente ale argumentării persuasive.' },
                { text: 'introducerea, cuprinsul, încheierea', corect: false, explicatie: 'Acelea sunt părțile unui text, nu elementele persuasiunii.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 186-187',
            },
            {
              intrebare: 'De ce factori depinde forța persuasivă a unui argument?',
              variante: [
                { text: 'de justețea premiselor (fapte, dovezi adevărate sau credibile) și de relația corectă dintre argument și concluzie', corect: true, explicatie: 'O deducție greșită slăbește argumentul chiar dacă premisele sunt adevărate.' },
                { text: 'doar de tonul vocii vorbitorului', corect: false, explicatie: 'Tonul ajută, dar nu ține locul unui argument bine construit.' },
                { text: 'de numărul de conectori folosiți', corect: false, explicatie: 'Conectorii organizează argumentarea, dar nu îi dau forța.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 186-187',
            },
            {
              intrebare: 'De ce este receptorul un factor esențial în structurarea unui discurs argumentativ?',
              variante: [
                { text: 'pentru că impactul argumentelor depinde de ce știe receptorul despre temă, de convingerile și de ideile lui preconcepute', corect: true, explicatie: 'Emițătorul vrea să-i modifice receptorului convingerile sau acțiunile.' },
                { text: 'pentru că receptorul scrie discursul', corect: false, explicatie: 'Discursul îl construiește emițătorul, ținând cont de receptor.' },
                { text: 'pentru că receptorul stabilește durata discursului', corect: false, explicatie: 'Durata ține de vorbitor și de context, nu e motivul pentru care receptorul contează.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 186-187',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-9/schema.svg',
          titlu: 'Logos, patos, etos: cum convingi',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Argumentare și persuasiune (partea 2/2)',
      obiective: [
        'Concepe o argumentare orală pe tema Școala viitorului, alegând strategii potrivite de persuasiune.',
      ],
      sursaManual: 'Art 8, pp. 186-187 (partea 2/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Argumentare și persuasiune (partea 2/2)',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Concepe o argumentare orală pe tema Școala viitorului, alegând strategii potrivite de persuasiune.',
        ],
        resurse: [
          'Manual Art 8, pp. 186-187',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-10/fisa-exercitii.pdf)',
          'Grilă de evaluare a argumentării orale',
        ],
        desfasurare: [
          {
            etapa: 'Școala mea ideală',
            timp: '4 min',
            activitate: '– Le cer elevilor să spună, într-o frază, cum ar arăta școala lor ideală peste douăzeci de ani.',
          },
          {
            etapa: 'Tipurile de argumente',
            timp: '7 min',
            activitate: '– Recapitulăm logos, patos, etos, aplicate temei „Școala viitorului”: dovezi, emoții, valori.',
          },
          {
            etapa: 'Pașii unei discuții argumentate',
            timp: '6 min',
            activitate: '– Prezint pașii: notăm ideile, alegem 2-3 aspecte prin vot, căutăm strategii de persuasiune în grupe, prezentăm și evaluăm.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (tipuri de argumente) și ex. 2 (planul discuției), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Discuția argumentată',
            timp: '17 min',
            activitate: '– Grupe mici discută 2-3 aspecte ale „Școlii viitorului” și pregătesc un argument, cu strategia aleasă.\n– Câțiva reprezentanți prezintă; colegii evaluează după grila de la p. 187 (idee clară, logică, exemple, valori, emoții, stil).',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Grila de evaluare a argumentării orale; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-10/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Argumentare și persuasiune, aplicații',
          pasi: [
            {
              intrebare: 'Un argument bazat pe „empatia și grija profesorilor nu pot fi înlocuite de IA” apelează la:',
              variante: [
                { text: 'valori morale și implicare emoțională', corect: true, explicatie: 'Argumentele pot fi raționale, emoționale sau morale; acesta ține de valori umane.' },
                { text: 'o statistică verificabilă', corect: false, explicatie: 'Nu invocă date sau cifre, ci o valoare.' },
                { text: 'o deducție logică formală', corect: false, explicatie: 'Nu construiește un raționament pas cu pas, ci se sprijină pe o valoare.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 186-187',
            },
            {
              intrebare: 'Ce rol au conectorii „fiindcă”, „mai mult”, „chiar dacă” într-o argumentare?',
              variante: [
                { text: 'leagă ideile și marchează relația dintre ele: cauză, adaos, concesie', corect: true, explicatie: 'Ei fac argumentarea logică și ușor de urmărit.' },
                { text: 'înlocuiesc exemplele', corect: false, explicatie: 'Exemplele rămân necesare pentru fiecare argument.' },
                { text: 'schimbă teza discursului', corect: false, explicatie: 'Teza rămâne aceeași; conectorii doar organizează argumentele.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 186-187',
            },
            {
              intrebare: 'Ce face o argumentare mai convingătoare, pe lângă argumentele logice?',
              variante: [
                { text: 'sprijinirea pe exemple relevante (fapte, statistici, cercetări) și un stil atractiv', corect: true, explicatie: 'Grila de evaluare cere argumente logice, exemple relevante și un stil atractiv.' },
                { text: 'evitarea oricărui exemplu, ca să nu lungească discursul', corect: false, explicatie: 'Fără exemple, argumentele rămân simple afirmații.' },
                { text: 'ridicarea tonului la fiecare idee', corect: false, explicatie: 'Tonul agresiv scade credibilitatea vorbitorului.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 186-187',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-9/schema.svg',
          titlu: 'Logos, patos, etos: cum convingi',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Circumstanțialul de cauză',
      obiective: [
        'Identifică circumstanțialul de cauză și diferența semantică dintre din cauza și datorită.',
      ],
      sursaManual: 'Art 8, p. 188',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Circumstanțialul de cauză',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică circumstanțialul de cauză și diferența semantică dintre din cauza și datorită.',
        ],
        resurse: [
          'Manual Art 8, p. 188',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-11/fisa-exercitii.pdf)',
          'Schema „Circumstanțialul de cauză” (/materiale/clasa-8/unitatea-5/lectia-11/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Din cauza sau datorită?',
            timp: '5 min',
            activitate: '– Scriu „a întârziat din cauza ploii” și „a reușit datorită efortului” și îi întreb pe elevi de ce nu putem inversa prepozițiile.',
          },
          {
            etapa: 'Ce este circumstanțialul de cauză',
            timp: '8 min',
            activitate: '– Definesc: arată cauza sau motivul, obligatoriu anterioară acțiunii; întrebările „din ce cauză? din ce motiv?”; regenții: verb, locuțiune, adjectiv.',
          },
          {
            etapa: 'Prin ce se exprimă',
            timp: '9 min',
            activitate: '– Cu ajutorul schemei lecției, inventariem părțile de vorbire: substantiv/pronume/numeral cu de, din, pentru, din cauza; adjectiv; adverb; gerunziu, infinitiv.',
          },
          {
            etapa: 'Din cauza, din pricina, datorită',
            timp: '5 min',
            activitate: '– „Din cauza”/„din pricina” — efect nefavorabil; „datorită” — efect pozitiv; corectăm oral trei enunțuri greșite.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (circumstanțialul și partea de vorbire) și ex. 2 (din cauza sau datorită), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '11 min',
            activitate: '– Rezolvăm ghidat exercițiile din manual (p. 188), cu model de analiză.\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-11/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Circumstanțialul de cauză',
          pasi: [
            {
              intrebare: 'La ce întrebări răspunde circumstanțialul de cauză?',
              variante: [
                {
                  text: 'din ce cauză?, din ce pricină?, din ce motiv?',
                  corect: true,
                  explicatie: 'Toate cer motivul acțiunii.',
                },
                {
                  text: 'cu ce scop?',
                  corect: false,
                  explicatie: 'Aceea e întrebarea circumstanțialului de scop.',
                },
                {
                  text: 'cu ce condiție?',
                  corect: false,
                  explicatie: 'Aceea e întrebarea construcției condiționale.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 188',
            },
            {
              intrebare: 'Care e circumstanțialul de cauză în „Era roșu de furie”?',
              variante: [
                {
                  text: 'de furie, care determină adjectivul roșu',
                  corect: true,
                  explicatie: 'Circumstanțialul de cauză se poate subordona și unui adjectiv.',
                },
                {
                  text: 'roșu',
                  corect: false,
                  explicatie: '„Roșu” e regentul, nu cauza.',
                },
                {
                  text: 'era',
                  corect: false,
                  explicatie: 'E verbul copulativ al predicatului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 188',
            },
            {
              intrebare: 'Când se petrece acțiunea exprimată de circumstanțialul de cauză, față de cea a regentului?',
              variante: [
                {
                  text: 'Obligatoriu înainte',
                  corect: true,
                  explicatie: 'Cauza vine întotdeauna înaintea efectului.',
                },
                {
                  text: 'După',
                  corect: false,
                  explicatie: 'Ce vine după e scopul, nu cauza.',
                },
                {
                  text: 'Oricând, nu contează',
                  corect: false,
                  explicatie: 'Manualul spune explicit că e obligatoriu anterioară.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 188',
            },
            {
              intrebare: 'Care variantă e corectă?',
              variante: [
                {
                  text: 'Avionul nu a putut ateriza din cauza vântului.',
                  corect: true,
                  explicatie: '„Din cauza” se folosește pentru un efect nefavorabil.',
                },
                {
                  text: 'Avionul nu a putut ateriza datorită vântului.',
                  corect: false,
                  explicatie: '„Datorită” se folosește doar pentru un efect pozitiv.',
                },
                {
                  text: 'Mara a reușit din cauza perseverenței.',
                  corect: false,
                  explicatie: 'Efectul e pozitiv, deci: datorită perseverenței.',
                },
              ],
              indiciu: 'Efectul e bun sau rău?',
              sursa: 'Manual Art 8, p. 188',
            },
            {
              intrebare: 'Prin ce se exprimă circumstanțialul de cauză din „Lăudându-l prea mult, s-a obrăznicit”?',
              variante: [
                {
                  text: 'Printr-un verb la gerunziu',
                  corect: true,
                  explicatie: 'Lăudându-l e forma de gerunziu a verbului a lăuda.',
                },
                {
                  text: 'Printr-un substantiv',
                  corect: false,
                  explicatie: 'Nu apare niciun substantiv cu rol de cauză.',
                },
                {
                  text: 'Printr-un adjectiv',
                  corect: false,
                  explicatie: 'Lăudându-l nu arată o însușire.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 188',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-5/lectia-11/schema.svg', titlu: 'Circumstanțialul de cauză' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Circumstanțiala de cauză',
      obiective: [
        'Identifică propoziția circumstanțială de cauză, termenii regenți și elementele de relație ale acesteia.',
      ],
      sursaManual: 'Art 8, pp. 189-190',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Circumstanțiala de cauză',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică propoziția circumstanțială de cauză, termenii regenți și elementele de relație ale acesteia.',
        ],
        resurse: [
          'Manual Art 8, pp. 189-190',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-12/fisa-exercitii.pdf)',
          'Schema „Circumstanțiala de cauză” (/materiale/clasa-8/unitatea-5/lectia-12/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'De la circumstanțial la propoziție',
            timp: '6 min',
            activitate: '– Le dau „A plecat din cauza frigului” și le cer să înlocuiască partea subliniată cu o propoziție întreagă.',
          },
          {
            etapa: 'Regentul și elementele de relație',
            timp: '10 min',
            activitate: '– Cu ajutorul schemei lecției: regentul poate fi verb, locuțiune, adjectiv, adverb, interjecție predicativă; elementele de relație: fiindcă, deoarece, întrucât, că, cum, când, unde cu sens cauzal; locuțiuni: pentru că, din cauză că, de vreme ce, odată ce.',
          },
          {
            etapa: 'Corelative, topică, virgulă',
            timp: '8 min',
            activitate: '– Corelative în regentă: de aceea, atunci; regula topicii (cu „cum”, mereu înainte; cu „că, căci”, mereu după); regula virgulei.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (subordonata și elementul de relație) și ex. 2 (corelativul și virgula), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Analiza pe manual',
            timp: '10 min',
            activitate: '– Rezolvăm ghidat exercițiile din manual (pp. 189-190), cu analiza subordonatelor cauzale.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-12/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Circumstanțiala de cauză',
          pasi: [
            {
              intrebare: 'Ce este circumstanțiala de cauză?',
              variante: [
                {
                  text: 'Propoziția subordonată care îndeplinește în frază rolul circumstanțialului de cauză',
                  corect: true,
                  explicatie: 'E realizarea propozițională a circumstanțialului de cauză.',
                },
                {
                  text: 'Propoziția principală a frazei',
                  corect: false,
                  explicatie: 'E o subordonată, depinde de o regentă.',
                },
                {
                  text: 'O parte de propoziție',
                  corect: false,
                  explicatie: 'Partea de propoziție e circumstanțialul, nu circumstanțiala.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 189',
            },
            {
              intrebare: 'Care e elementul de relație din „Am coaja groasă, din cauză că sunt foarte bătrân”?',
              variante: [
                {
                  text: 'locuțiunea conjuncțională din cauză că',
                  corect: true,
                  explicatie: 'Cele trei cuvinte funcționează împreună, ca o singură conjuncție.',
                },
                {
                  text: 'conjuncția că',
                  corect: false,
                  explicatie: 'Aici „că” face parte din locuțiune, nu stă singur.',
                },
                {
                  text: 'prepoziția din',
                  corect: false,
                  explicatie: 'Și „din” face parte din locuțiune.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 189',
            },
            {
              intrebare: 'În „Cum a întârziat, nu l-am mai așteptat”, ce este cuvântul cum?',
              variante: [
                {
                  text: 'O conjuncție subordonatoare cu sens cauzal, care poate fi înlocuită cu „fiindcă”',
                  corect: true,
                  explicatie: 'Fiindcă a întârziat, nu l-am mai așteptat: sensul rămâne.',
                },
                {
                  text: 'Un adverb de mod',
                  corect: false,
                  explicatie: 'Nu arată felul în care a întârziat, ci de ce nu l-am așteptat.',
                },
                {
                  text: 'Un pronume relativ',
                  corect: false,
                  explicatie: '„Cum” nu înlocuiește aici niciun substantiv.',
                },
              ],
              indiciu: 'Încearcă să pui „fiindcă” în locul lui.',
              sursa: 'Manual Art 8, p. 189',
            },
            {
              intrebare: 'Unde stă circumstanțiala de cauză introdusă prin „că” sau „căci”?',
              variante: [
                {
                  text: 'Întotdeauna după regentă',
                  corect: true,
                  explicatie: 'Nu mai vin azi, că sunt ocupat.',
                },
                {
                  text: 'Întotdeauna înaintea regentei',
                  corect: false,
                  explicatie: 'Așa se întâmplă cu cele introduse prin „cum”.',
                },
                {
                  text: 'Oriunde',
                  corect: false,
                  explicatie: 'Doar cele introduse prin alte elemente au topică liberă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 190',
            },
            {
              intrebare: 'Care e diferența dintre „Știu că mi-a trimis un mesaj” și „Știu, că mi-a trimis un mesaj”?',
              variante: [
                {
                  text: 'În a doua, virgula arată că „că” introduce o circumstanțială de cauză: știu, fiindcă mi-a trimis',
                  corect: true,
                  explicatie: 'Fără virgulă, subordonata spune ce știu, deci e completivă directă.',
                },
                {
                  text: 'Nu e nicio diferență',
                  corect: false,
                  explicatie: 'Virgula schimbă felul subordonatei.',
                },
                {
                  text: 'Prima e greșită',
                  corect: false,
                  explicatie: 'Amândouă sunt corecte, dar spun lucruri diferite.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 190',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-5/lectia-12/schema.svg', titlu: 'Circumstanțiala de cauză' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Circumstanțialul de scop',
      obiective: [
        'Identifică circumstanțialul de scop și părțile de vorbire prin care este exprimat.',
      ],
      sursaManual: 'Art 8, p. 191',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Circumstanțialul de scop',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică circumstanțialul de scop și părțile de vorbire prin care este exprimat.',
        ],
        resurse: [
          'Manual Art 8, p. 191',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-13/fisa-exercitii.pdf)',
          'Schema „Circumstanțialul de scop” (/materiale/clasa-8/unitatea-5/lectia-13/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Din ce cauză sau cu ce scop?',
            timp: '5 min',
            activitate: '– Le dau „A venit pentru carte” și îi întreb pe elevi ce răspunde partea a doua: din ce cauză sau cu ce scop?',
          },
          {
            etapa: 'Ce este circumstanțialul de scop',
            timp: '8 min',
            activitate: '– Definesc: arată scopul, întrebările „cu ce scop? în ce scop?”; deosebirea de cauză: cauza e înainte de acțiune, scopul e urmărit de ea.',
          },
          {
            etapa: 'Regentul și părțile de vorbire',
            timp: '9 min',
            activitate: '– Cu schema lecției: regenții (verb, interjecție predicativă, adjectiv, adverb); exprimarea prin substantiv/pronume/numeral cu pentru, spre, în vederea; infinitiv, supin.',
          },
          {
            etapa: 'Cauză sau scop?',
            timp: '5 min',
            activitate: '– Exersăm oral pe perechi de enunțuri asemănătoare: „a plecat de frică” / „a plecat pentru cumpărături”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (circumstanțialul și partea de vorbire) și ex. 2 (cauză sau scop), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '11 min',
            activitate: '– Rezolvăm ghidat exercițiile din manual (p. 191), cu model de analiză.\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-13/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Circumstanțialul de scop',
          pasi: [
            {
              intrebare: 'La ce întrebări răspunde circumstanțialul de scop?',
              variante: [
                {
                  text: 'cu ce scop?, în ce scop?',
                  corect: true,
                  explicatie: 'Arată pentru ce se face acțiunea.',
                },
                {
                  text: 'din ce cauză?',
                  corect: false,
                  explicatie: 'Aceea e întrebarea circumstanțialului de cauză.',
                },
                {
                  text: 'în ciuda cărui fapt?',
                  corect: false,
                  explicatie: 'Aceea e întrebarea construcției concesive.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 191',
            },
            {
              intrebare: 'Care e circumstanțialul de scop în „Ogorul a fost pregătit pentru semănat”?',
              variante: [
                {
                  text: 'pentru semănat, verb la supin',
                  corect: true,
                  explicatie: 'Cu ce scop a fost pregătit? Pentru semănat.',
                },
                {
                  text: 'ogorul',
                  corect: false,
                  explicatie: 'E subiectul.',
                },
                {
                  text: 'a fost pregătit',
                  corect: false,
                  explicatie: 'E predicatul, regentul circumstanțialului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 191',
            },
            {
              intrebare: 'Prin ce se exprimă circumstanțialul de scop din „Spre a se convinge, a venit el însuși”?',
              variante: [
                {
                  text: 'Printr-un verb la infinitiv, cu prepoziția spre',
                  corect: true,
                  explicatie: 'A se convinge e forma de infinitiv.',
                },
                {
                  text: 'Printr-un substantiv',
                  corect: false,
                  explicatie: 'Nu apare niciun substantiv cu rol de scop.',
                },
                {
                  text: 'Printr-un verb la gerunziu',
                  corect: false,
                  explicatie: 'Gerunziul ar fi „convingându-se”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 191',
            },
            {
              intrebare: 'În care enunț există un circumstanțial de scop?',
              variante: [
                {
                  text: 'Mergem la cumpărături.',
                  corect: true,
                  explicatie: 'Cu ce scop mergem? La cumpărături.',
                },
                {
                  text: 'Am înghețat de frig.',
                  corect: false,
                  explicatie: '„De frig” arată cauza.',
                },
                {
                  text: 'Cu toată vremea urâtă, am ieșit în oraș.',
                  corect: false,
                  explicatie: 'E o construcție concesivă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 188, 191, 195',
            },
            {
              intrebare: 'În „Hai la plimbare!”, cui se subordonează circumstanțialul de scop?',
              variante: [
                {
                  text: 'Interjecției predicative hai',
                  corect: true,
                  explicatie: 'Circumstanțialul de scop se poate subordona și unei interjecții predicative.',
                },
                {
                  text: 'Unui verb nescris',
                  corect: false,
                  explicatie: 'Nu e nevoie de un verb: interjecția e chiar predicatul.',
                },
                {
                  text: 'Unui substantiv',
                  corect: false,
                  explicatie: '„Plimbare” e chiar circumstanțialul, nu regentul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 191',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-5/lectia-13/schema.svg', titlu: 'Circumstanțialul de scop' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Circumstanțiala de scop',
      obiective: [
        'Identifică propoziția circumstanțială de scop și o diferențiază de alte subordonate introduse prin să.',
      ],
      sursaManual: 'Art 8, pp. 192-193',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Circumstanțiala de scop',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică propoziția circumstanțială de scop și o diferențiază de alte subordonate introduse prin să.',
        ],
        resurse: [
          'Manual Art 8, pp. 192-193',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-14/fisa-exercitii.pdf)',
          'Schema „Circumstanțiala de scop” (/materiale/clasa-8/unitatea-5/lectia-14/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Două fraze cu „să”',
            timp: '5 min',
            activitate: '– Le dau două fraze care încep amândouă cu „să” și îi întreb pe elevi cum deosebim ce fel de subordonată e fiecare.',
          },
          {
            etapa: 'Regentul și elementele de relație',
            timp: '9 min',
            activitate: '– Cu schema lecției: regenții (verb, locuțiune, adjectiv, interjecție predicativă); elementele de relație: ca să, ca ... să, să, de; locuțiunea pentru ca ... să.',
          },
          {
            etapa: 'Deosebirea de completivă',
            timp: '7 min',
            activitate: '– Arăt că întrebarea se pune de la regent: „Vreau să câștig” (completivă directă) vs. „A venit să câștige” (circumstanțială de scop).',
          },
          {
            etapa: 'Corelative, topică, virgulă',
            timp: '6 min',
            activitate: '– Corelative: de aceea, anume, înadins; reguli de topică și virgulă, după introducerea prin să/de sau prin ca să.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (subordonata și elementul de relație) și ex. 2 (completivă sau circumstanțială), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '11 min',
            activitate: '– Rezolvăm ghidat exercițiile din manual (pp. 192-193).\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-14/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Circumstanțiala de scop',
          pasi: [
            {
              intrebare: 'Prin ce elemente de relație se introduce circumstanțiala de scop?',
              variante: [
                {
                  text: 'ca să, să, de, pentru ca … să',
                  corect: true,
                  explicatie: 'Și prin pronume relative cu prepoziții: pentru ce avea de realizat.',
                },
                {
                  text: 'fiindcă, deoarece',
                  corect: false,
                  explicatie: 'Acestea introduc circumstanțiala de cauză.',
                },
                {
                  text: 'deși, cu toate că',
                  corect: false,
                  explicatie: 'Acestea introduc construcția concesivă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 192',
            },
            {
              intrebare: 'Care e circumstanțiala de scop în „Oamenii au programat roboți Wall-E ca să curețe planeta”?',
              variante: [
                {
                  text: 'ca să curețe planeta',
                  corect: true,
                  explicatie: 'Cu ce scop au programat? Ca să curețe planeta.',
                },
                {
                  text: 'au programat roboți',
                  corect: false,
                  explicatie: 'Aceasta e regenta.',
                },
                {
                  text: 'Wall-E',
                  corect: false,
                  explicatie: 'E un nume, parte a regentei.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 192',
            },
            {
              intrebare: 'Care formulare e corectă?',
              variante: [
                {
                  text: 'Au venit la mine ca să mă vadă.',
                  corect: true,
                  explicatie: 'Elementul de relație e „ca să”.',
                },
                {
                  text: 'Au venit la mine că să mă vadă.',
                  corect: false,
                  explicatie: '„Că” în loc de „ca” e o greșeală frecventă.',
                },
                {
                  text: 'Au venit la mine pentru ca să mă vadă.',
                  corect: false,
                  explicatie: 'E o formă pleonastică; corect: ca să mă vadă sau pentru a mă vedea.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 193',
            },
            {
              intrebare: 'Când se desparte întotdeauna prin virgulă circumstanțiala de scop?',
              variante: [
                {
                  text: 'Când are un corelativ în regentă: De aceea stă la umbră, ca să nu se bronzeze.',
                  corect: true,
                  explicatie: 'Virgula e obligatorie, oriunde ar sta subordonata.',
                },
                {
                  text: 'Când e introdusă prin să sau de',
                  corect: false,
                  explicatie: 'Acestea nu se despart prin virgulă de regentă.',
                },
                {
                  text: 'Niciodată',
                  corect: false,
                  explicatie: 'Cu un corelativ în regentă, virgula e obligatorie.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 193',
            },
            {
              intrebare: 'Ce fel de subordonată introduce „să” în „EVE a venit să caute un semn al naturii renăscute”?',
              variante: [
                {
                  text: 'O circumstanțială de scop: cu ce scop a venit?',
                  corect: true,
                  explicatie: 'Căutarea e scopul venirii.',
                },
                {
                  text: 'O circumstanțială de cauză',
                  corect: false,
                  explicatie: 'Căutarea vine după venire; cauza ar trebui să fie înainte.',
                },
                {
                  text: 'O atributivă',
                  corect: false,
                  explicatie: 'Subordonata nu determină un substantiv.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 193',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-5/lectia-14/schema.svg', titlu: 'Circumstanțiala de scop' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Construcții concesive',
      obiective: [
        'Identifică construcțiile concesive la nivel de propoziție și de frază.',
      ],
      sursaManual: 'Art 8, pp. 194-195',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Construcții concesive',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică construcțiile concesive la nivel de propoziție și de frază.',
        ],
        resurse: [
          'Manual Art 8, pp. 194-195',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-15/fisa-exercitii.pdf)',
          'Schema „Construcții concesive” (/materiale/clasa-8/unitatea-5/lectia-15/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Deși ploua...',
            timp: '5 min',
            activitate: '– Le dau „Deși ploua, am plecat” și îi întreb pe elevi ce ne-am fi așteptat să se întâmple și ce s-a întâmplat de fapt.',
          },
          {
            etapa: 'Ce sunt construcțiile concesive',
            timp: '9 min',
            activitate: '– Definesc: arată o împrejurare care ar putea împiedica acțiunea, dar n-o împiedică; întrebarea „în ciuda cărui fapt?”.',
          },
          {
            etapa: 'La nivel de propoziție și de frază',
            timp: '10 min',
            activitate: '– Cu schema lecției: circumstanțialul concesiv (cu tot, în ciuda, în pofida, chiar și) și circumstanțiala concesivă (deși, cu toate că, chiar dacă, măcar că, oricât, oricine).',
          },
          {
            etapa: 'Virgula',
            timp: '4 min',
            activitate: '– Regulă simplă: construcțiile concesive se despart întotdeauna prin virgulă, indiferent de poziție.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (construcția concesivă și felul ei) și ex. 2 (completare), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '10 min',
            activitate: '– Rezolvăm ghidat exercițiile din manual (pp. 194-195).\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-15/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Construcții concesive',
          pasi: [
            {
              intrebare: 'Ce exprimă o construcție concesivă?',
              variante: [
                {
                  text: 'O împrejurare care ar putea împiedica acțiunea, dar nu o împiedică',
                  corect: true,
                  explicatie: 'Deși ploua, a ieșit: ploaia nu l-a oprit.',
                },
                {
                  text: 'Cauza acțiunii',
                  corect: false,
                  explicatie: 'Cauza produce acțiunea; concesiva e un obstacol depășit.',
                },
                {
                  text: 'Scopul acțiunii',
                  corect: false,
                  explicatie: 'Scopul arată pentru ce se face acțiunea.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 194',
            },
            {
              intrebare: 'La ce întrebări răspunde construcția concesivă?',
              variante: [
                {
                  text: 'în ciuda cărui fapt?, în pofida cărui fapt?',
                  corect: true,
                  explicatie: 'Întrebarea conține chiar ideea de obstacol.',
                },
                {
                  text: 'cu ce condiție?',
                  corect: false,
                  explicatie: 'Aceea e întrebarea construcției condiționale.',
                },
                {
                  text: 'din ce cauză?',
                  corect: false,
                  explicatie: 'Aceea e întrebarea circumstanțialului de cauză.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 194',
            },
            {
              intrebare: 'În care enunț „tot” are sens concesiv?',
              variante: [
                {
                  text: 'Chiar adormit fiind, tot a auzit soneria.',
                  corect: true,
                  explicatie: 'Somnul ar fi putut să-l împiedice, dar n-a reușit.',
                },
                {
                  text: 'A tot cântat, până a răgușit.',
                  corect: false,
                  explicatie: 'Aici „tot” arată repetarea.',
                },
                {
                  text: 'Venea tot mai des în vizită la noi.',
                  corect: false,
                  explicatie: 'Aici „tot” arată creșterea treptată.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 194',
            },
            {
              intrebare: 'Cum se desparte construcția concesivă de regent?',
              variante: [
                {
                  text: 'Întotdeauna prin virgulă, fie că stă înainte, fie că stă după',
                  corect: true,
                  explicatie: 'E una dintre puținele reguli fără excepții din unitate.',
                },
                {
                  text: 'Niciodată prin virgulă',
                  corect: false,
                  explicatie: 'Dimpotrivă, virgula e obligatorie.',
                },
                {
                  text: 'Doar când stă la începutul frazei',
                  corect: false,
                  explicatie: 'Virgula apare și când stă după regent.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 195',
            },
            {
              intrebare: 'Care enunț conține o construcție concesivă la nivel de propoziție, nu de frază?',
              variante: [
                {
                  text: 'În ciuda părerii tale, e un profesionist.',
                  corect: true,
                  explicatie: '„În ciuda părerii tale” e un grup prepozițional, nu o propoziție.',
                },
                {
                  text: 'Deși ploua, a ieșit la plimbare.',
                  corect: false,
                  explicatie: '„Deși ploua” are predicat, deci e o propoziție subordonată.',
                },
                {
                  text: 'Dacă plouă, rămânem acasă.',
                  corect: false,
                  explicatie: 'E o construcție condițională, nu concesivă.',
                },
              ],
              indiciu: 'Caută construcția fără verb.',
              sursa: 'Manual Art 8, p. 195',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-5/lectia-15/schema.svg', titlu: 'Construcții concesive' },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Construcții condiționale',
      obiective: [
        'Identifică construcțiile condiționale la nivel de propoziție și de frază.',
      ],
      sursaManual: 'Art 8, pp. 196-197',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Construcții condiționale',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică construcțiile condiționale la nivel de propoziție și de frază.',
        ],
        resurse: [
          'Manual Art 8, pp. 196-197',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-16/fisa-exercitii.pdf)',
          'Schema „Construcții condiționale” (/materiale/clasa-8/unitatea-5/lectia-16/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Dacă ar dispărea cărțile...',
            timp: '5 min',
            activitate: '– Le dau „Dacă ar dispărea cărțile...” și le cer să completeze, fiecare cum crede.',
          },
          {
            etapa: 'Ce sunt construcțiile condiționale',
            timp: '9 min',
            activitate: '– Definesc: arată o ipoteză sau o condiție de care depinde acțiunea; întrebarea „cu ce condiție?”.',
          },
          {
            etapa: 'La nivel de propoziție și de frază',
            timp: '10 min',
            activitate: '– Cu schema lecției: circumstanțialul condițional (cu condiția, în caz de, gerunziu) și circumstanțiala condițională (dacă, de, să, în caz că, când cu sens condițional).',
          },
          {
            etapa: 'Concesivă sau condițională?',
            timp: '4 min',
            activitate: '– Exersăm oral distincția: „Dacă vii, te aștept” (condițională) vs. „Deși vii, plec oricum” (concesivă).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (construcția condițională și felul ei) și ex. 2 (concesivă sau condițională), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '10 min',
            activitate: '– Rezolvăm ghidat exercițiile din manual (pp. 196-197).\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-16/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Construcții condiționale',
          pasi: [
            {
              intrebare: 'Ce exprimă construcțiile condiționale?',
              variante: [
                {
                  text: 'O ipoteză sau o condiție de care depinde realizarea acțiunii',
                  corect: true,
                  explicatie: 'Dacă are timp, va veni: venirea depinde de timp.',
                },
                {
                  text: 'Un obstacol care nu împiedică acțiunea',
                  corect: false,
                  explicatie: 'Aceea e construcția concesivă.',
                },
                {
                  text: 'Scopul acțiunii',
                  corect: false,
                  explicatie: 'Scopul arată pentru ce se face acțiunea.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 196',
            },
            {
              intrebare: 'Care e construcția condițională din „Ascultând cu atenție, vei înțelege”?',
              variante: [
                {
                  text: 'Ascultând cu atenție, cu verbul la gerunziu',
                  corect: true,
                  explicatie: 'Cu ce condiție vei înțelege? Ascultând cu atenție.',
                },
                {
                  text: 'vei înțelege',
                  corect: false,
                  explicatie: 'E regentul, acțiunea care depinde de condiție.',
                },
                {
                  text: 'cu atenție',
                  corect: false,
                  explicatie: 'E doar o parte a construcției; condiția e toată ascultarea.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 197',
            },
            {
              intrebare: 'Ce fel de subordonată e „dacă avem încredere în noi” din „Ne-a întrebat dacă avem încredere în noi”?',
              variante: [
                {
                  text: 'Completivă directă: ne-a întrebat ce?',
                  corect: true,
                  explicatie: 'Nu orice „dacă” introduce o condițională.',
                },
                {
                  text: 'Condițională',
                  corect: false,
                  explicatie: 'Nu e o condiție: întrebarea s-a pus oricum.',
                },
                {
                  text: 'Concesivă',
                  corect: false,
                  explicatie: 'Nu e niciun obstacol depășit.',
                },
              ],
              indiciu: 'Pune întrebarea de la verbul „a întrebat”.',
              sursa: 'Manual Art 8, p. 197',
            },
            {
              intrebare: 'În „Ai carte, ai parte!”, cum e marcată subordonarea?',
              variante: [
                {
                  text: 'Prin juxtapunere, fără element de relație: dacă ai carte, ai parte',
                  corect: true,
                  explicatie: 'Condiționala poate fi juxtapusă regentei.',
                },
                {
                  text: 'Prin conjuncția „și”',
                  corect: false,
                  explicatie: 'În proverb nu apare nicio conjuncție.',
                },
                {
                  text: 'Nu există subordonare',
                  corect: false,
                  explicatie: 'Prima propoziție e condiția celei de-a doua.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 196-197',
            },
            {
              intrebare: 'Care enunț conține o construcție condițională la nivel de propoziție?',
              variante: [
                {
                  text: 'În caz de furtună, adăpostește-te!',
                  corect: true,
                  explicatie: '„În caz de furtună” e un grup prepozițional, fără predicat.',
                },
                {
                  text: 'Dacă are timp, va veni.',
                  corect: false,
                  explicatie: '„Dacă are timp” e o propoziție subordonată.',
                },
                {
                  text: 'Deși are timp, nu vine.',
                  corect: false,
                  explicatie: 'E o construcție concesivă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 197',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-5/lectia-16/schema.svg', titlu: 'Construcții condiționale' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Modalități de exprimare a preferințelor și a opiniilor (partea 1/2)',
      obiective: [
        'Recunoaște mijloacele verbale prin care se exprimă preferințele, certitudinea și probabilitatea.',
      ],
      sursaManual: 'Art 8, pp. 198-199 (partea 1/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modalități de exprimare a preferințelor și a opiniilor (partea 1/2)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Recunoaște mijloacele verbale prin care se exprimă preferințele, certitudinea și probabilitatea.',
        ],
        resurse: [
          'Manual Art 8, pp. 198-199',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-17/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Cât de mult te cred?',
            timp: '5 min',
            activitate: '– Spun aceeași idee cu „știu sigur că”, „poate că” și „probabil” și îi întreb pe elevi cât de mult mă cred de fiecare dată.',
          },
          {
            etapa: 'Atitudinea subiectivă',
            timp: '6 min',
            activitate: '– Explic: exprim atitudinea subiectivă față de o temă prin verbe de opinie, adverbe, adjective, locuțiuni.',
          },
          {
            etapa: 'Valorile și mijloacele',
            timp: '12 min',
            activitate: '– Prezint tabelul: certitudine (știu că, firește), incertitudine (bănuiesc că), probabilitate (s-ar putea să, probabil), necesitate (trebuie să), apreciere pozitivă/negativă (merită să / din păcate).',
          },
          {
            etapa: 'Atitudine sigură sau prudentă',
            timp: '4 min',
            activitate: '– Deosebim atitudinea sigură (certitudine, necesitate) de cea prudentă (incertitudine, probabilitate).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce exprimă fiecare enunț) și ex. 2 (grade diferite de certitudine), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '11 min',
            activitate: '– Rezolvăm ghidat exercițiile din manual (pp. 198-199).\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-5/lectia-17/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-5/lectia-17/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-17/schema.svg',
          titlu: 'Cuvintele care arată ce cred',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Modalități de exprimare a preferințelor și a opiniilor (partea 2/2)',
      obiective: [
        'Redactează un text de opinie cu titlul Încotro se îndreaptă lumea?, respectând etapele scrierii.',
      ],
      sursaManual: 'Art 8, pp. 198-199 (partea 2/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modalități de exprimare a preferințelor și a opiniilor (partea 2/2)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează un text de opinie cu titlul Încotro se îndreaptă lumea?, respectând etapele scrierii.',
        ],
        resurse: [
          'Manual Art 8, pp. 198-199',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-18/fisa-exercitii.pdf)',
          'Notițele de la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Într-o frază',
            timp: '4 min',
            activitate: '– Le cer elevilor să spună, într-o singură frază, ce cred despre direcția în care merge lumea.',
          },
          {
            etapa: 'Etapele redactării',
            timp: '6 min',
            activitate: '– Recapitulăm cei șapte pași: adun idei, aleg punctul de vedere, mă documentez, fac planul, recitesc, verific conectorii și mijloacele de exprimare a opiniei, scriu forma finală.',
          },
          {
            etapa: 'Planul textului',
            timp: '8 min',
            activitate: '– Prezint planul: introducerea (captează atenția, formulează opinia), cuprinsul (două argumente diferite, cu exemple), încheierea (concluzia care reafirmă poziția).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (textul model, creat pentru fișă) și ex. 2 (planul pe baza lui), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Redactarea',
            timp: '18 min',
            activitate: '– Fiecare elev redactează textul de opinie cu titlul „Încotro se îndreaptă lumea?”, apoi îl schimbă cu colegul pentru revizuire, după grila de la p. 199.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: forma finală a textului, curățată după revizuire; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Grila de evaluare de la p. 199; fișa de exerciții, ex. 1-2; verificarea textului de opinie.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-5/lectia-18/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-5/lectia-18/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-18/schema.svg',
          titlu: 'Cum scriu un text de opinie',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Recapitulare (partea 1/3)',
      obiective: [
        'Recapitulează conținuturile de lectură din unitate.',
      ],
      sursaManual: 'Art 8, pp. 200-201 (partea 1/3, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare (partea 1/3)',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează conținuturile de lectură din unitate.',
        ],
        resurse: [
          'Manual Art 8, pp. 200-201',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-19/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Noțiuni pe rând',
            timp: '4 min',
            activitate: '– Îi rog pe elevi să spună pe rând câte o noțiune de lectură învățată în unitate.',
          },
          {
            etapa: 'Recapitulare: romanul și distopia',
            timp: '8 min',
            activitate: '– Reluăm: romanul (personaje numeroase, acțiune complexă), utopia și distopia, SF versus fantastic și fantasy.',
          },
          {
            etapa: 'Recapitulare: structuri, personaje, conflict',
            timp: '9 min',
            activitate: '– Reluăm cele cinci structuri textuale și cele trei moduri de îmbinare; tipurile de personaje și sursele conflictului exterior și interior.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (textul „Orașul tăcut”) și ex. 2 (utopie, distopie, structuri), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul „Recapitulare, lectură”',
            timp: '11 min',
            activitate: '– Elevii rezolvă quizul; lămurim întrebările la care au greșit cei mai mulți.',
          },
          {
            etapa: 'Temă',
            timp: '6 min',
            activitate: '– Rezolvăm ghidat un exercițiu din manual (pp. 200-201).\n– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-19/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, lectură',
          pasi: [
            {
              intrebare: 'Cum se numește procedeul prin care o structură textuală apare în interiorul alteia?',
              variante: [
                { text: 'inserția', corect: true, explicatie: 'Celelalte moduri de îmbinare sunt succesiunea și alternanța.' },
                { text: 'succesiunea', corect: false, explicatie: 'La succesiune, o structură urmează alteia, nu e cuprinsă în ea.' },
                { text: 'alternanța', corect: false, explicatie: 'La alternanță, structurile apar în grupaje care se repetă rând pe rând.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 172-173',
            },
            {
              intrebare: 'Ce tip de conflict apare când un personaj încalcă normele sociale, politice sau morale ale comunității sale?',
              variante: [
                { text: 'conflictul om – societate', corect: true, explicatie: 'În Fahrenheit 451, Montag intră în conflict cu o societate care interzice cărțile.' },
                { text: 'conflictul om – natură', corect: false, explicatie: 'Acela apare când personajul înfruntă forțele naturii.' },
                { text: 'conflictul om – soartă', corect: false, explicatie: 'Acela ține de forțele supranaturale sau de destin.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 174-175',
            },
            {
              intrebare: 'Ce este textul de opinie?',
              variante: [
                { text: 'un text nonliterar în care autorul își expune opiniile despre o temă, ca să convingă cititorii', corect: true, explicatie: 'Predomină structurile argumentative și explicative.' },
                { text: 'o relatare exactă a unor evenimente, fără poziție personală', corect: false, explicatie: 'Aceea ar fi un text informativ, nu de opinie.' },
                { text: 'un tabel cu date verificabile', corect: false, explicatie: 'Acela e un text discontinuu, nu de opinie.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 178-180',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-19/schema.svg',
          titlu: 'Lectura unității, tot la un loc',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Recapitulare (partea 2/3)',
      obiective: [
        'Recapitulează circumstanțialele și construcțiile concesive și condiționale învățate în unitate.',
      ],
      sursaManual: 'Art 8, pp. 200-201 (partea 2/3, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare (partea 2/3)',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează circumstanțialele și construcțiile concesive și condiționale învățate în unitate.',
        ],
        resurse: [
          'Manual Art 8, pp. 200-201',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-20/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, circumstanțiale și construcții” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ce raport logic e?',
            timp: '4 min',
            activitate: '– Scriu o frază la tablă și le cer elevilor să spună repede ce raport logic exprimă: cauză, scop, concesie sau condiție.',
          },
          {
            etapa: 'Cele patru circumstanțiale',
            timp: '10 min',
            activitate: '– Recapitulăm, cu tabelul: întrebarea, partea de propoziție și elementele de relație pentru cauză, scop, concesie, condiție.',
          },
          {
            etapa: 'Virgula și sensul',
            timp: '7 min',
            activitate: '– Reluăm regulile de virgulă pentru fiecare și atenționările: „din cauza”/„datorită”; cauza înaintea acțiunii, scopul urmărit de ea.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1-2 (felul și elementul de relație, în patru fraze), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul „Recapitulare, circumstanțiale și construcții”',
            timp: '13 min',
            activitate: '– Elevii rezolvă quizul; cei care termină analizează o frază complexă cu mai multe subordonate.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-20/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, circumstanțiale și construcții',
          pasi: [
            {
              intrebare: 'Ce circumstanțial răspunde la întrebarea „din ce cauză?”?',
              variante: [
                { text: 'Circumstanțialul de cauză', corect: true, explicatie: 'Circumstanțialul de cauză arată motivul pentru care se produce o acțiune.' },
                { text: 'Circumstanțialul de scop', corect: false, explicatie: 'Circumstanțialul de scop răspunde la întrebarea „cu ce scop?”.' },
                { text: 'Circumstanțialul de mod', corect: false, explicatie: 'Circumstanțialul de mod arată felul în care se petrece acțiunea, nu cauza ei.' },
              ],
              indiciu: null,
              sursa: 'Art 8, pp. 188-190',
            },
            {
              intrebare: 'Ce exprimă o construcție concesivă?',
              variante: [
                { text: 'O împrejurare care ar fi putut împiedica acțiunea, dar nu a împiedicat-o', corect: true, explicatie: 'Concesiva arată un obstacol depășit, de obicei introdusă prin deși, cu toate că.' },
                { text: 'O condiție necesară pentru ca acțiunea să aibă loc', corect: false, explicatie: 'Aceasta e construcția condițională, nu cea concesivă.' },
                { text: 'Scopul pentru care se face o acțiune', corect: false, explicatie: 'Scopul e exprimat de circumstanțialul sau circumstanțiala de scop.' },
              ],
              indiciu: null,
              sursa: 'Art 8, pp. 194-195',
            },
            {
              intrebare: 'Ce exprimă o construcție condițională?',
              variante: [
                { text: 'O condiție de care depinde realizarea acțiunii', corect: true, explicatie: 'Condiționala arată împrejurarea necesară pentru ca acțiunea principală să se realizeze.' },
                { text: 'Un obstacol depășit', corect: false, explicatie: 'Acesta e rolul construcției concesive, nu al celei condiționale.' },
                { text: 'Locul unde se petrece acțiunea', corect: false, explicatie: 'Locul e exprimat de circumstanțialul sau circumstanțiala de loc.' },
              ],
              indiciu: null,
              sursa: 'Art 8, pp. 196-197',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-20/schema.svg',
          titlu: 'Circumstanțialele, tot la un loc',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Recapitulare (partea 3/3)',
      obiective: [
        'Recapitulează conținuturile de comunicare orală și redactare din unitate.',
      ],
      sursaManual: 'Art 8, pp. 200-201 (partea 3/3, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare (partea 3/3)',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează conținuturile de comunicare orală și redactare din unitate.',
        ],
        resurse: [
          'Manual Art 8, pp. 200-201',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-21/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, comunicare orală și redactare” (materialul de joc al lecției)',
          'Textele de opinie redactate',
        ],
        desfasurare: [
          {
            etapa: 'Certitudine și probabilitate',
            timp: '4 min',
            activitate: '– Le cer elevilor un enunț care exprimă certitudine și unul care exprimă probabilitate, pe aceeași temă.',
          },
          {
            etapa: 'Recapitulare: strategiile textului de opinie',
            timp: '10 min',
            activitate: '– Reluăm obiecția, concesia, analogia, examenul critic, confruntarea, cu exemple din textul lui Harari.',
          },
          {
            etapa: 'Recapitulare: logos, patos, etos',
            timp: '9 min',
            activitate: '– Reluăm cele trei apeluri și mijloacele de exprimare a opiniei: certitudine, probabilitate, necesitate, apreciere.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1-3 (strategia potrivită, logos/patos/etos), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul de recapitulare',
            timp: '10 min',
            activitate: '– Elevii rezolvă quizul; lămurim greșelile frecvente înainte de evaluare.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: fișa de exerciții, pagina 2 (planul unui text de opinie); recitirea notițelor pentru evaluare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-5/lectia-21/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, comunicare orală și redactare',
          pasi: [
            {
              intrebare: 'Ce exprimă formulele „s-ar putea să…”, „poate”, „probabil”, „pesemne”?',
              variante: [
                { text: 'probabilitatea', corect: true, explicatie: 'Sunt mijloace lingvistice de exprimare a atitudinii subiective a vorbitorului.' },
                { text: 'certitudinea', corect: false, explicatie: 'Certitudinea se exprimă prin „știu că”, „e limpede că”, „firește”.' },
                { text: 'necesitatea', corect: false, explicatie: 'Necesitatea se exprimă prin „trebuie să”, „e nevoie să”, „neapărat”.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 198-199',
            },
            {
              intrebare: 'La ce elemente apelează o argumentare pentru a fi persuasivă?',
              variante: [
                { text: 'logos (corectitudinea logică), patos (implicarea emoțională), etos (credibilitatea vorbitorului)', corect: true, explicatie: 'Toate trei împreună dau putere de convingere discursului.' },
                { text: 'doar la volumul vocii și la gesturi', corect: false, explicatie: 'Comportamentul paraverbal ajută, dar nu ține locul argumentelor.' },
                { text: 'doar la numărul de exemple', corect: false, explicatie: 'Exemplele contează, dar nu sunt singurul element.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 186-187',
            },
            {
              intrebare: 'Ce strategii poate folosi autorul unui text de opinie?',
              variante: [
                { text: 'obiecția, concesia, analogia, examenul critic, confruntarea', corect: true, explicatie: 'Sunt modalități de a-ți întări opinia raportând-o la ideile opuse.' },
                { text: 'copierea unui text existent', corect: false, explicatie: 'Preluarea fără atribuire încalcă etica redactării.' },
                { text: 'evitarea oricărei păreri', corect: false, explicatie: 'Un text de opinie tocmai o părere susține.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 178-180',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-5/lectia-21/schema.svg',
          titlu: 'Cum convingi, oral și în scris',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Evaluare (partea 1/2)',
      obiective: [
        'Susține testul de evaluare sumativă pentru unitate.',
      ],
      sursaManual: 'Art 8, p. 202 (partea 1/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Susține testul de evaluare sumativă pentru unitate.',
        ],
        resurse: [
          'Testul tipărit, Manual Art 8, p. 202',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; distribui testul de la p. 202.\n– Anunț structura probei (cerințe de limbă și lectură, redactare) și punctajul; explic repartizarea orientativă a timpului.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual; supraveghez și răspund doar la întrebări despre formularea cerințelor.\n– La jumătatea timpului anunț trecerea la partea de redactare; cu 5 minute înainte de final le cer să-și recitească lucrarea.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.',
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
    {
      id: 'lectia-23',
      titlu: 'Evaluare (partea 2/2)',
      obiective: [
        'Discută rezultatele testului și evaluează portofoliul realizat pe parcursul anului.',
      ],
      sursaManual: 'Art 8, p. 202 (partea 2/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Analiză și evaluarea portofoliului',
        data: null,
        tipOra: 'Analiză și evaluarea portofoliului',
        durata: 50,
        obiective: [
          'Discută rezultatele testului și evaluează portofoliul realizat pe parcursul anului.',
        ],
        resurse: [
          'Lucrările corectate de la proba anterioară',
          'Portofoliile elevilor',
          'Grila de evaluare a portofoliului',
        ],
        desfasurare: [
          {
            etapa: 'Ce a mers cel mai bine',
            timp: '5 min',
            activitate: '– Prezint, centralizat și fără nume, ce a mers cel mai bine la ultima probă și îi întreb pe elevi la ce cred că au progresat cel mai mult anul acesta.',
          },
          {
            etapa: 'Anunțarea temei orei',
            timp: '3 min',
            activitate: '– Anunț că azi discutăm rezultatele probei și evaluăm portofoliul de an, ultima oră a clasei a VIII-a.',
          },
          {
            etapa: 'Recapitularea anului',
            timp: '9 min',
            activitate: '– Reluăm criteriile portofoliului și parcursul celor cinci unități, de la frumusețe la direcția în care merge lumea.',
          },
          {
            etapa: 'Discutarea greșelilor și înmânarea lucrărilor',
            timp: '20 min',
            activitate: '– Discut pe rând greșelile tipice din probă și arăt cum se corectează.\n– Înmânez lucrările și trec pe la fiecare elev cu o observație scurtă și concretă.',
          },
          {
            etapa: 'Prezentarea portofoliului',
            timp: '13 min',
            activitate: '– Fiecare elev își prezintă portofoliul, alege piesa de care e cel mai mândru și explică de ce.\n– Completez grila de evaluare a portofoliului.',
          },
        ],
        evaluare: 'Evaluarea portofoliului după grilă; discutarea rezultatelor probei, fără notare suplimentară.',
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
