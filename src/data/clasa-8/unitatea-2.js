// Unitatea II: Cum sunt ceilalți? — clasa a VIII-a
// Sursă: manual Art Klett 2025, 8. Ghid.pdf — Planificare calendaristică
// orientativă 2025-2026 și Proiectarea unităților de învățare, Unitatea II
// (pp. 39-40, 52-56 din ghid).
//
// Convenție de numerotare: ore de curs din proiectarea ghidului, ca la
// Unitatea I — vezi nota din CLAUDE.md. Rândul de 2 ore („Cronica de film”)
// e despărțit în 2 lecții de site, „partea 1/2” / „partea 2/2”. Rândul de
// 3 ore („Recapitulare”) e despărțit în 3 lecții.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx.

export const unitatea2 = {
  id: 'unitatea-2',
  titlu: 'Unitatea II: Cum sunt ceilalți?',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul dramatic. Take, Ianke și Cadâr de Victor Ion Popa',
      obiective: [
        'Citește un fragment din comedia Take, Ianke și Cadâr de Victor Ion Popa și formulează impresii de lectură.',
      ],
      sursaManual: 'Art 8, pp. 52-57',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul dramatic. Take, Ianke și Cadâr de Victor Ion Popa',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Citește un fragment din comedia Take, Ianke și Cadâr de Victor Ion Popa și formulează impresii de lectură.',
        ],
        resurse: [
          'Manual Art 8, pp. 52-57',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-1/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Steaua mea, „Pentru început”, ex. 1-3',
            timp: '6 min',
            activitate: '– Fiecare desenează steaua cu cinci colțuri și notează câte o informație despre sine; câțiva o prezintă și căutăm asemănări și diferențe.\n– Cele două imagini de la p. 52: ce reprezintă și care le place mai mult.',
          },
          {
            etapa: 'Autorul',
            timp: '3 min',
            activitate: '– Caseta despre Victor Ion Popa (p. 52); premiera piesei, în 1932.',
          },
          {
            etapa: 'Lectura model, ex. 4',
            timp: '14 min',
            activitate: '– Citesc fragmentele din cele trei acte, cu rezumatele dintre paranteze drepte; elevii urmăresc și indicațiile scenice.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '5 min',
            activitate: '– Cadranele de la p. 57, în caiete; trei elevi citesc un cadran.',
          },
          {
            etapa: 'Scena 1, pe roluri',
            timp: '5 min',
            activitate: '– Trei elevi citesc scena 1 din actul I, respectând indicațiile scenice.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (informațiile esențiale) și ex. 2 (adevărat sau fals), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Cuvinte de altădată',
            timp: '3 min',
            activitate: '– Notele de subsol: prăvălie, coloniale, vipie, flașnetă; de ce le păstrează autorul.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; recitirea fragmentului din actul al II-lea.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-1/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Take, Ianke și Cadâr de Victor Ion Popa',
          pasi: [
            {
              intrebare: 'Cine sunt cei trei negustori din titlu?',
              variante: [
                {
                  text: 'Un român, un evreu și un turc, prăvăliași vecini într-un târg',
                  corect: true,
                  explicatie: 'Tocmai diferența de etnie și de credință dă sens prieteniei lor.',
                },
                {
                  text: 'Trei frați din aceeași familie',
                  corect: false,
                  explicatie: 'Nu sunt rude; sunt vecini de prăvălie.',
                },
                {
                  text: 'Trei elevi de la aceeași școală',
                  corect: false,
                  explicatie: 'Sunt oameni maturi, cu afaceri proprii.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 52-57',
            },
            {
              intrebare: 'Ce fel de operă literară este textul?',
              variante: [
                {
                  text: 'O comedie, text dramatic scris pentru a fi jucat pe scenă',
                  corect: true,
                  explicatie: 'Structura pe replici și indicații scenice arată destinația scenică.',
                },
                {
                  text: 'Un roman',
                  corect: false,
                  explicatie: 'Romanul e text epic, cu narator, nu cu replici de scenă.',
                },
                {
                  text: 'O poezie lirică',
                  corect: false,
                  explicatie: 'Nu are nici vers, nici eu liric.',
                },
              ],
              indiciu: 'Uită-te cum e așezat textul în pagină. Ce vezi înaintea fiecărei replici?',
              sursa: 'Manual Art 8, pp. 52-57',
            },
            {
              intrebare: 'Cum se manifestă, de obicei, prietenia dintre cei trei?',
              variante: [
                {
                  text: 'Prin ceartă și tachinare permanentă, sub care se ascunde afecțiune reală',
                  corect: true,
                  explicatie: 'Umorul piesei vine tocmai din contrastul dintre vorbe și fapte.',
                },
                {
                  text: 'Prin vorbe frumoase și complimente reciproce',
                  corect: false,
                  explicatie: 'Dimpotrivă, se ceartă aproape tot timpul.',
                },
                {
                  text: 'Prin evitare, fiecare stând în prăvălia lui',
                  corect: false,
                  explicatie: 'Sunt tot timpul împreună, asta e miezul piesei.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 52-57',
            },
            {
              intrebare: 'Ce e o indicație scenică?',
              variante: [
                {
                  text: 'Textul autorului, de obicei între paranteze, care spune cum se joacă replica sau ce se întâmplă pe scenă',
                  corect: true,
                  explicatie: 'Nu se rostește; e adresată actorilor și regizorului.',
                },
                {
                  text: 'Replica cea mai importantă a unui personaj',
                  corect: false,
                  explicatie: 'Indicația scenică nu e replică deloc.',
                },
                {
                  text: 'Titlul fiecărei scene',
                  corect: false,
                  explicatie: 'Titlurile de scenă sunt altceva.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 58-59',
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
      titlu: 'Textul dramatic. Structuri textuale',
      obiective: [
        'Identifică aspectele caracteristice textului dramatic, indicațiile scenice și structurile textuale din fragment.',
      ],
      sursaManual: 'Art 8, pp. 58-59',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul dramatic. Structuri textuale',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică aspectele caracteristice textului dramatic, indicațiile scenice și structurile textuale din fragment.',
        ],
        resurse: [
          'Manual Art 8, pp. 58-59',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-2/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-2/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Câmpul lexical al teatrului, Explorare, ex. 1',
            timp: '4 min',
            activitate: '– Grupăm termenii în cei legați de textul literar și cei legați de spectacol.',
          },
          {
            etapa: 'Acte și scene, ex. 2-4',
            timp: '5 min',
            activitate: '– Câte acte are piesa; cum se delimitează scenele; particularitățile grafice ale indicațiilor și ale numerotării.',
          },
          {
            etapa: 'Indicațiile, ex. 5-7',
            timp: '6 min',
            activitate: '– Indicațiile externe și interne; un verb pentru „comedie”; informațiile și ordinea din lista personajelor.',
          },
          {
            etapa: 'Cititorul specializat și cel obișnuit, ex. 8',
            timp: '6 min',
            activitate: '– Grupe de șase: trei citesc decorul actului I ca regizori sau scenografi, trei ca cititori obișnuiți; aleg varianta potrivită și o prezintă.',
          },
          {
            etapa: 'Notițe: textul dramatic și structurile textuale',
            timp: '6 min',
            activitate: '– În caiete, după Repere (pp. 58-59): actul și scena, indicațiile scenice externe și interne, dialogul și monologul, comedia și mijloacele comicului.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (indicațiile scenice) și ex. 2 (structura textuală), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Scena 1, jucată, ex. 9',
            timp: '6 min',
            activitate: '– Grupele cu număr par citesc scena 1 pe roluri, cele cu număr impar o joacă, respectând indicațiile.',
          },
          {
            etapa: 'Structuri și comunicare, ex. 10-11',
            timp: '3 min',
            activitate: '– Structura din decorul actului I; comunicarea monologată și dialogată din scenele 8 și 17.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1-3 și 6-7; fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (nota de jurnal).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-2/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-2/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-2/schema.svg',
          titlu: 'Cum e construit un text dramatic',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Timpul, spațiul, acțiunea, personajele',
      obiective: [
        'Completează schema evenimențială a piesei și identifică trăsăturile morale ale personajelor.',
      ],
      sursaManual: 'Art 8, pp. 60-61',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Timpul, spațiul, acțiunea, personajele',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Completează schema evenimențială a piesei și identifică trăsăturile morale ale personajelor.',
        ],
        resurse: [
          'Manual Art 8, pp. 60-61',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-3/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-3/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Durata și momentul, Explorare, ex. 1-3',
            timp: '5 min',
            activitate: '– Cât ar dura reprezentația; când se petrec întâmplările și pe ce perioadă.',
          },
          {
            etapa: 'Spațiul, ex. 4-5',
            timp: '4 min',
            activitate: '– Unde e plasată acțiunea; ce observăm în indicațiile de decor ale celor trei acte.',
          },
          {
            etapa: 'Schema evenimentelor, ex. 6-7',
            timp: '6 min',
            activitate: '– Completăm schema de la p. 60 între cele două situații; ce a generat neînțelegerile.',
          },
          {
            etapa: 'Personajele, Explorare, ex. 1-4',
            timp: '5 min',
            activitate: '– Numărul personajelor; afișul spectacolului și personajele care lipsesc; relațiile dintre ele.',
          },
          {
            etapa: 'Notițe',
            timp: '6 min',
            activitate: '– În caiete, după Repere (pp. 60-61): timpul și spațiul teatral, acțiunea, conflictul, personajul dramatic și mijloacele de caracterizare.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (cele trei acte) și ex. 2 (relațiile), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Fișele de identitate, Aplicații, ex. 3',
            timp: '8 min',
            activitate: '– Cinci grupe trag la sorți câte un personaj și completează fișa (nume, stare civilă, profesie, naționalitate, religie, replică); prezintă pe scurt.',
          },
          {
            etapa: 'Limbajul lui Cadâr, ex. 5',
            timp: '2 min',
            activitate: '– Particularitățile fonetice și gramaticale și de ce vorbește astfel.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 6, 7 și 9; fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (personajul preferat).',
          },
        ],
        evaluare: 'Aprecieri pe fișele de identitate; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-3/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-3/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-3/schema.svg',
          titlu: 'Timpul, spațiul, acțiunea, personajele',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează opinii despre semnificațiile textului și despre atitudinile personajelor.',
      ],
      sursaManual: 'Art 8, pp. 63-64',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează opinii despre semnificațiile textului și despre atitudinile personajelor.',
        ],
        resurse: [
          'Manual Art 8, pp. 63-64',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Titlul și lista, Interpretare, ex. 1',
            timp: '3 min',
            activitate: '– De ce ordinea din titlu diferă de cea din lista personajelor.',
          },
          {
            etapa: 'Așteptarea, ex. 2',
            timp: '4 min',
            activitate: '– Take și Ianke în prima și în ultima scenă: ce așteaptă, ce îi tensionează, contrastul cu Cadâr.',
          },
          {
            etapa: 'Oglinda, ex. 3',
            timp: '5 min',
            activitate: '– Asemănările dintre Take și Ianke: casele, mărfurile, copiii, replicile, destinul Anei și al lui Ionel.',
          },
          {
            etapa: 'Cadâr, ex. 4-5',
            timp: '6 min',
            activitate: '– Ce îl deosebește de prietenii lui; semnificația numelui „La Ierusalim”.',
          },
          {
            etapa: 'De ce se opun, ex. 6-7',
            timp: '4 min',
            activitate: '– Alt motiv decât religia; de ce Cadâr îi ocrotește pe tineri (variantele a-d).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (simboluri) și ex. 2 (în oglindă), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Trenul și finalul, ex. 9-10',
            timp: '5 min',
            activitate: '– Cum se schimbă privirea lui Ianke asupra trenului; scena finală.',
          },
          {
            etapa: 'Dezbaterea, ex. 14',
            timp: '9 min',
            activitate: '– Grupe de șase dezbat 5 minute ideea că e important să trăiești împreună cu ceilalți, nu doar alături; raportorii prezintă concluziile.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: ex. 11-13 și 15; fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Aprecieri pe raportările grupelor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Textul nonliterar. Cronica de spectacol. Omenescul personajelor de Ștefan Popa',
      obiective: [
        'Recunoaște scopul și destinatarul unei cronici de spectacol și investighează structura textului.',
      ],
      sursaManual: 'Art 8, pp. 65-67',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul nonliterar. Cronica de spectacol. Omenescul personajelor de Ștefan Popa',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Recunoaște scopul și destinatarul unei cronici de spectacol și investighează structura textului.',
        ],
        resurse: [
          'Manual Art 8, pp. 65-67',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-5/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-5/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”, ex. 1-2',
            timp: '4 min',
            activitate: '– Au citit elevii articole despre spectacole, filme, albume? Despre ce ar fi un text numit „Omenescul personajelor”?',
          },
          {
            etapa: 'Autorul și lectura, ex. 3',
            timp: '9 min',
            activitate: '– Caseta despre Ștefan Aug. Doinaș (Ștefan Popa); citesc cronica, cu notele de subsol.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '3 min',
            activitate: '– Cadranele de la p. 66, oral.',
          },
          {
            etapa: 'Destinatarul și scopul, Explorare, ex. 1-2',
            timp: '3 min',
            activitate: '– Cui se adresează textul și cu ce scop a fost scris.',
          },
          {
            etapa: 'Investigația, ex. 3-4',
            timp: '10 min',
            activitate: '– Grupe de șase, cu rolurile lingvistul, arheologul, redactorul, detectivul, analistul, evaluatorul; completează fișa grupei și o compară cu celelalte.',
          },
          {
            etapa: 'Notițe: cronica de spectacol',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 67): textul nonliterar, cronica de spectacol, aspectele comentate, subiectivitatea.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (fapt sau opinie?) și ex. 2 (structura cronicii), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '3 min',
            activitate: '– Elementul din introducere; ce nu dezvăluie rezumatul; rolul parantezelor.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 4-6; fișa lecției; fișa de exerciții, pagina 2; opțional, Portofoliu.',
          },
        ],
        evaluare: 'Fișele grupelor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-5/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-5/schema.svg',
          titlu: 'Cum e construită o cronică de spectacol',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Text auxiliar. Nathan Înțeleptul de Gotthold Ephraim Lessing',
      obiective: [
        'Citește parabola celor trei inele din Nathan Înțeleptul și formulează un punct de vedere argumentat.',
      ],
      sursaManual: 'Art 8, pp. 68-69',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Nathan Înțeleptul de Gotthold Ephraim Lessing',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Citește parabola celor trei inele din Nathan Înțeleptul și formulează un punct de vedere argumentat.',
        ],
        resurse: [
          'Manual Art 8, pp. 68-69',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-6/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-6/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Legătura cu comedia',
            timp: '4 min',
            activitate: '– Citim introducerea de la p. 68: piesa lui Lessing, Ierusalimul, întrebarea lui Saladin.',
          },
          {
            etapa: 'Lectura pe roluri',
            timp: '6 min',
            activitate: '– Doi elevi citesc replicile lui Nathan și Saladin; un al treilea, indicațiile.',
          },
          {
            etapa: 'Locul, Discutarea textului, ex. 1-2',
            timp: '3 min',
            activitate: '– De ce Ierusalimul; punctul cardinal din parabolă.',
          },
          {
            etapa: 'Rezumatul oral, ex. 3',
            timp: '4 min',
            activitate: '– Doi elevi rezumă parabola.',
          },
          {
            etapa: 'Inelul, ex. 4-7',
            timp: '7 min',
            activitate: '– Efectul inelului; trăsătura primului proprietar; cui îi e destinat inelul; de ce tatăl cu trei fii nu respectă tradiția.',
          },
          {
            etapa: 'Saladin, ex. 8',
            timp: '2 min',
            activitate: '– Ce trăsătură dezvăluie replica și indicația.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (parabola, pas cu pas) și ex. 2 (ce simbolizează), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Interpretările, ex. 9, oral',
            timp: '6 min',
            activitate: '– Discutăm cele două interpretări ale elevilor de clasa a VIII-a; fiecare alege una.',
          },
          {
            etapa: 'Biblioteci deschise',
            timp: '3 min',
            activitate: '– Prezint „Romeo și Julieta” și „Țara lui Gufi”, recomandate la p. 69.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: ex. 9 (postarea pe blog); fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-6/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-6/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Relații culturale constructive. Noi și ceilalți',
      obiective: [
        'Discută despre comunitățile interculturale și multiculturale și despre relațiile culturale constructive.',
      ],
      sursaManual: 'Art 8, pp. 70-71',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Relații culturale constructive. Noi și ceilalți',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Discută despre comunitățile interculturale și multiculturale și despre relațiile culturale constructive.',
        ],
        resurse: [
          'Manual Art 8, pp. 70-71',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-7/fisa-exercitii.pdf)',
          'Infograficul „Relații culturale constructive. Noi și ceilalți” (/materiale/clasa-8/unitatea-2/lectia-7/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Împreună sau alături, „Pentru început”',
            timp: '4 min',
            activitate: '– Imaginea de la p. 70: îi corespunde „împreună” sau „alături”? Dezbatere scurtă.',
          },
          {
            etapa: 'Slavici și Bartók, Explorare',
            timp: '12 min',
            activitate: '– Grupe de șase citesc fragmentul din memoriile lui Slavici și textul despre Béla Bartók și rezolvă cerințele a-f (harta vecinilor, comunitatea din Șiria, revelația lui Slavici, Bartók și muzica românească).',
          },
          {
            etapa: 'Prezentarea grupelor',
            timp: '5 min',
            activitate: '– Fiecare grupă prezintă câte o cerință.',
          },
          {
            etapa: 'Notițe',
            timp: '5 min',
            activitate: '– Proiectez infograficul; în caiete, după Repere (p. 71): comunități multiculturale și interculturale, schimbul între culturi, relațiile culturale constructive, stereotipurile.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (multicultural sau intercultural?) și ex. 2 (Slavici și Bartók), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-4',
            timp: '6 min',
            activitate: '– „Împreună” și „alături” asociate comunităților; tipul comunității din Șiria; afirmația lui Slavici; viziunea copilului și a mamei.',
          },
          {
            etapa: 'Aplicații, ex. 5 și 7',
            timp: '4 min',
            activitate: '– Bartók și relațiile culturale constructive; în ce fel de comunitate trăiesc elevii.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 6; fișa de exerciții, pagina 2; opțional, Provocări (una dintre afirmațiile lui Doinaș).',
          },
        ],
        evaluare: 'Aprecieri pe prezentările grupelor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-7/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Noi și ceilalți',
          pasi: [
            {
              intrebare: 'Care e deosebirea dintre o comunitate multiculturală și una interculturală?',
              variante: [
                {
                  text: 'În cea multiculturală, grupurile trăiesc alături; în cea interculturală, se cunosc și schimbă lucruri între ele',
                  corect: true,
                  explicatie: 'Multiculturalul e coexistență, interculturalul e dialog.',
                },
                {
                  text: 'Sunt exact același lucru, doar denumiri diferite',
                  corect: false,
                  explicatie: 'Diferența e tocmai gradul de interacțiune.',
                },
                {
                  text: 'Cea interculturală are un singur grup etnic',
                  corect: false,
                  explicatie: 'Ar fi opusul definiției.',
                },
              ],
              indiciu: 'Uită-te la prefixe: multi înseamnă mai multe, inter înseamnă între.',
              sursa: 'Manual Art 8, pp. 70-71',
            },
            {
              intrebare: 'Ce este un stereotip?',
              variante: [
                {
                  text: 'O idee simplificată și generalizată despre un grup, aplicată tuturor membrilor lui',
                  corect: true,
                  explicatie: 'Stereotipul poate fi și pozitiv, dar rămâne o generalizare care ignoră persoana.',
                },
                {
                  text: 'O opinie personală despre cineva pe care îl cunoști bine',
                  corect: false,
                  explicatie: 'Stereotipul se aplică unui grup, nu unei persoane cunoscute.',
                },
                {
                  text: 'Un adevăr verificat statistic',
                  corect: false,
                  explicatie: 'Tocmai lipsa verificării îl face stereotip.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 70-71',
            },
            {
              intrebare: 'Ce face o relație culturală să fie constructivă?',
              variante: [
                {
                  text: 'Curiozitatea reală față de celălalt și disponibilitatea de a-ți pune la îndoială propriile idei preconcepute',
                  corect: true,
                  explicatie: 'Fără punerea la îndoială, rămâne doar politețe de suprafață.',
                },
                {
                  text: 'Renunțarea completă la propria cultură',
                  corect: false,
                  explicatie: 'Dialogul intercultural nu cere să te lepezi de ce ești.',
                },
                {
                  text: 'Evitarea oricărei discuții despre diferențe',
                  corect: false,
                  explicatie: 'Ocolirea subiectului nu construiește nimic.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 70-71',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-8/unitatea-2/lectia-7/infografic.svg', titlu: 'Relații culturale constructive. Noi și ceilalți' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Atitudini comunicative',
      obiective: [
        'Simulează situații de comunicare asertivă printr-un joc de rol.',
      ],
      sursaManual: 'Art 8, pp. 72-73',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Atitudini comunicative',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Simulează situații de comunicare asertivă printr-un joc de rol.',
        ],
        resurse: [
          'Manual Art 8, pp. 72-73',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-8/fisa-exercitii.pdf)',
          'Quizul „Atitudini comunicative” (materialul de joc al lecției)',
          'Bilețele cu situații de comunicare',
        ],
        desfasurare: [
          {
            etapa: 'Prietenul care întârzie, „Pentru început”',
            timp: '4 min',
            activitate: '– Elevii aleg reacția a-d și o argumentează.',
          },
          {
            etapa: 'Take și Ionel, Explorare',
            timp: '8 min',
            activitate: '– Grupe de trei citesc pe roluri fragmentul din scena 5 și răspund la cerințele a-f; grupele prezintă.',
          },
          {
            etapa: 'Notițe',
            timp: '6 min',
            activitate: '– În caiete, după Repere (pp. 72-73): flexibilitatea, asertivitatea, disponibilitatea pentru negociere; pasivitatea, agresivitatea, pasivitatea agresivă, manipularea.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (ce atitudine?) și ex. 2 (rescrie asertiv), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Căștile, Aplicații, ex. 1',
            timp: '6 min',
            activitate: '– Doi reprezentanți joacă situația câte un minut, apoi schimbă rolurile; clasa răspunde la cele trei întrebări.',
          },
          {
            etapa: 'Comunicare asertivă, ex. 2',
            timp: '4 min',
            activitate: '– Cum ar comunica asertiv elevii în situațiile a-c.',
          },
          {
            etapa: 'Joc de rol, ex. 3',
            timp: '6 min',
            activitate: '– Perechi și grupe trag bilețelele cu situațiile a-b și le joacă; colegii evaluează pe grila de la p. 73.',
          },
          {
            etapa: 'Quizul',
            timp: '2 min',
            activitate: '– Câteva întrebări din quizul „Atitudini comunicative”.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Provocări, ex. 1-2; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Evaluarea jocurilor de rol pe grilă; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-8/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Atitudini comunicative',
          pasi: [
            {
              intrebare: 'Ce este comunicarea asertivă?',
              variante: [
                { text: 'exprimarea clară și fermă a dorințelor, emoțiilor și părerilor, fără a-i deranja pe ceilalți și fără a deveni agresiv', corect: true, explicatie: 'Asertivitatea pornește de la convingerea că toate persoanele sunt egale.' },
                { text: 'atitudinea excesiv de amabilă în orice situație, ca să eviți conflictul', corect: false, explicatie: 'Aceea este pasivitatea, o atitudine opusă asertivității.' },
                { text: 'folosirea unui ton autoritar și ostil pentru a-ți impune dorințele', corect: false, explicatie: 'Aceea este agresivitatea.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 72-73',
            },
            {
              intrebare: 'Ce înseamnă flexibilitatea, ca atitudine comunicativă?',
              variante: [
                { text: 'capacitatea vorbitorului de a se adapta contextului: subiectului, interlocutorilor, momentului', corect: true, explicatie: 'Flexibilitatea, asertivitatea și disponibilitatea pentru negociere favorizează comunicarea eficientă.' },
                { text: 'renunțarea la orice punct de vedere propriu', corect: false, explicatie: 'Aceea ar fi pasivitate; flexibilitatea nu înseamnă lipsă de poziție.' },
                { text: 'schimbarea temei ori de câte ori discuția devine incomodă', corect: false, explicatie: 'Evitarea temei ține de pasivitatea agresivă sau de manipulare.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 72-73',
            },
            {
              intrebare: 'Cum se realizează manipularea, ca atitudine opusă asertivității?',
              variante: [
                { text: 'prin evitarea exprimării punctului de vedere și prin a-i face pe ceilalți să simtă compasiune sau vinovăție', corect: true, explicatie: 'Manipulatorul nu spune direct ce vrea, ci îi determină pe ceilalți să acționeze în interesul lui.' },
                { text: 'prin exprimarea deschisă a nemulțumirii', corect: false, explicatie: 'Exprimarea deschisă e specifică asertivității, nu manipulării.' },
                { text: 'prin dialog susținut pentru a găsi o soluție reciproc acceptabilă', corect: false, explicatie: 'Aceea este negocierea.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 72-73',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-8/schema.svg',
          titlu: 'Patru feluri de a reacționa, unul singur asertiv',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Construcțiile active. Construcțiile pasive cu verbul a fi',
      obiective: [
        'Transformă construcțiile active în construcții pasive cu verbul a fi și invers.',
      ],
      sursaManual: 'Art 8, pp. 74-75',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Construcțiile active. Construcțiile pasive cu verbul a fi',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Transformă construcțiile active în construcții pasive cu verbul a fi și invers.',
        ],
        resurse: [
          'Manual Art 8, pp. 74-75',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-9/fisa-exercitii.pdf)',
          'Schema „Construcții active. Construcții pasive cu verbul a fi” (/materiale/clasa-8/unitatea-2/lectia-9/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Activ și pasiv, „Pentru început”, ex. 1-2',
            timp: '4 min',
            activitate: '– Care adjectiv se potrivește asertivității; încălțămintea din imagini, asociată cu un comportament activ sau pasiv.',
          },
          {
            etapa: 'Scenograful și decorurile, Explorare, ex. 1-3',
            timp: '7 min',
            activitate: '– Subiectele celor două propoziții; în perechi, variantele A-E; diferența de formă a verbului „a proiecta”.',
          },
          {
            etapa: 'Notițe: construcția activă și cea pasivă',
            timp: '7 min',
            activitate: '– Proiectez schema; în caiete, după Repere (p. 74): construcția activă, construcția pasivă, forma verbală pasivă, acordul participiului, complementul de agent.',
          },
          {
            etapa: 'Transformări, Explorare, ex. 1-2',
            timp: '6 min',
            activitate: '– Ce verbe pot apărea în construcții pasive; în grupe de patru, „Ionel așteaptă trenul” și varianta pasivă, cu cerințele a-e.',
          },
          {
            etapa: 'Notițe: transformarea',
            timp: '3 min',
            activitate: '– Regulile trecerii de la activ la pasiv și invers (Repere, p. 75).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (activ sau pasiv?) și ex. 2 (transformă), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Transformăm oral construcțiile active în pasive și invers.',
          },
          {
            etapa: 'Construcții pasive, ex. 3',
            timp: '3 min',
            activitate: '– Enunțurile a-g care conțin construcții pasive, cu justificare.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 4-5; Portofoliu (trei reguli pentru actori, cu construcții pasive); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-9/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Construcții active și pasive',
          pasi: [
            {
              intrebare: 'Cum se transformă „Elevii au citit piesa” în construcție pasivă?',
              variante: [
                {
                  text: 'Piesa a fost citită de elevi.',
                  corect: true,
                  explicatie: 'Complementul direct devine subiect, iar vechiul subiect devine complement de agent.',
                },
                {
                  text: 'Piesa au citit elevii.',
                  corect: false,
                  explicatie: 'S-a schimbat doar topica; construcția rămâne activă.',
                },
                {
                  text: 'Elevii s-au citit piesa.',
                  corect: false,
                  explicatie: 'E o construcție reflexivă, nu pasivă.',
                },
              ],
              indiciu: 'Cine primea acțiunea în propoziția activă? El devine subiect.',
              sursa: 'Manual Art 8, pp. 74-75',
            },
            {
              intrebare: 'Cum se formează diateza pasivă în limba română?',
              variante: [
                {
                  text: 'Cu verbul a fi și participiul verbului de bază, acordat cu subiectul',
                  corect: true,
                  explicatie: 'Cartea a fost citită, cărțile au fost citite: participiul se acordă.',
                },
                {
                  text: 'Cu verbul a avea și participiul',
                  corect: false,
                  explicatie: 'Aceea e formarea perfectului compus, nu a pasivului.',
                },
                {
                  text: 'Cu pronumele reflexiv se, întotdeauna',
                  corect: false,
                  explicatie: 'Există și pasiv cu se, dar nu e singura formă și nu e cea din lecție.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 74-75',
            },
            {
              intrebare: 'Ce funcție sintactică are „de elevi” în „Piesa a fost citită de elevi”?',
              variante: [
                {
                  text: 'complement de agent',
                  corect: true,
                  explicatie: 'Arată cine face de fapt acțiunea, într-o construcție pasivă.',
                },
                {
                  text: 'complement direct',
                  corect: false,
                  explicatie: 'Complementul direct nu apare într-o construcție pasivă cu verbul a fi.',
                },
                {
                  text: 'subiect',
                  corect: false,
                  explicatie: 'Subiectul e „piesa”, cea care primește acțiunea.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 74-75',
            },
            {
              intrebare: 'De ce alege un autor construcția pasivă?',
              variante: [
                {
                  text: 'Ca să pună în prim-plan cine sau ce primește acțiunea, nu cine o face',
                  corect: true,
                  explicatie: 'Uneori autorul acțiunii nici nu contează, sau e necunoscut.',
                },
                {
                  text: 'Ca să scurteze propoziția',
                  corect: false,
                  explicatie: 'Pasivul e de obicei mai lung decât activul.',
                },
                {
                  text: 'Pentru că activul e greșit gramatical',
                  corect: false,
                  explicatie: 'Ambele sunt corecte; diferă accentul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 74-75',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-9/schema.svg', titlu: 'Construcții active. Construcții pasive cu verbul a fi' },
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Predicatul (actualizare)',
      obiective: [
        'Actualizează cunoștințele despre predicatul verbal și predicatul nominal.',
      ],
      sursaManual: 'Art 8, pp. 76-77',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Predicatul (actualizare)',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Actualizează cunoștințele despre predicatul verbal și predicatul nominal.',
        ],
        resurse: [
          'Manual Art 8, pp. 76-77',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-10/fisa-exercitii.pdf)',
          'Schema „Predicatul (actualizare)” (/materiale/clasa-8/unitatea-2/lectia-10/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Predicatele din comedie, Explorare, ex. 1-2',
            timp: '6 min',
            activitate: '– Predicatele verbale din fragmentele a-b și partea de vorbire prin care se exprimă.',
          },
          {
            etapa: 'Verbul „a fi”, ex. 3',
            timp: '4 min',
            activitate: '– În care enunț despre cozonac „a fi” e predicat verbal și de ce.',
          },
          {
            etapa: 'Predicatele nominale, ex. 4',
            timp: '6 min',
            activitate: '– În perechi, predicatele nominale din textul despre Cristian și partea de vorbire a numelui predicativ.',
          },
          {
            etapa: 'Notițe',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 76-77): predicatul verbal, predicatul nominal, verbele copulative, numele predicativ simplu și multiplu, tabelul părților de vorbire, confuzia dintre pasiv și predicatul nominal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (verbal sau nominal?) și ex. 2 (numele predicativ), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '7 min',
            activitate: '– Felul predicatelor din textul lui Ion Zamfirescu; în perechi, tabelul pasive / predicate nominale.',
          },
          {
            etapa: 'Aplicații, ex. 3, oral',
            timp: '4 min',
            activitate: '– Enunțuri cu „a fi”, „a ajunge”, „a rămâne”, „a însemna”, predicative și copulative.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 4; fișa de exerciții, pagina 2; opțional, Provocări.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-10/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Predicatul verbal și predicatul nominal',
          pasi: [
            {
              intrebare: 'Ce fel de predicat are propoziția „Take este negustor”?',
              variante: [
                {
                  text: 'Predicat nominal, format din verbul copulativ „este” și numele predicativ „negustor”',
                  corect: true,
                  explicatie: 'Verbul copulativ singur nu are înțeles deplin; are nevoie de numele predicativ.',
                },
                {
                  text: 'Predicat verbal',
                  corect: false,
                  explicatie: 'Predicatul verbal arată o acțiune; „este” aici doar leagă.',
                },
                {
                  text: 'Nu are predicat',
                  corect: false,
                  explicatie: 'Orice propoziție are un predicat.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 76-77',
            },
            {
              intrebare: 'În care propoziție verbul „a fi” NU este copulativ?',
              variante: [
                {
                  text: 'Ianke este în prăvălie.',
                  corect: true,
                  explicatie: 'Aici „este” înseamnă „se află”, are înțeles deplin, deci e predicat verbal.',
                },
                {
                  text: 'Ianke este vesel.',
                  corect: false,
                  explicatie: 'Aici „este” leagă subiectul de numele predicativ „vesel”.',
                },
                {
                  text: 'Ianke este prietenul lui Take.',
                  corect: false,
                  explicatie: 'Tot copulativ, cu numele predicativ „prietenul”.',
                },
              ],
              indiciu: 'Încearcă să înlocuiești „este” cu „se află”. Dacă merge, nu e copulativ.',
              sursa: 'Manual Art 8, pp. 76-77',
            },
            {
              intrebare: 'Prin ce se poate exprima numele predicativ?',
              variante: [
                {
                  text: 'Prin substantiv, adjectiv, pronume, numeral sau verb la infinitiv',
                  corect: true,
                  explicatie: 'E o clasă largă; nu doar substantive și adjective.',
                },
                {
                  text: 'Doar prin substantiv',
                  corect: false,
                  explicatie: 'Adjectivul e la fel de frecvent: „este vesel”.',
                },
                {
                  text: 'Doar prin adjectiv',
                  corect: false,
                  explicatie: 'Substantivul apare la fel de des.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 76-77',
            },
            {
              intrebare: 'Câte cuvinte formează predicatul în „Cadâr a fost mulțumit”?',
              variante: [
                {
                  text: 'Trei: a fost mulțumit, un predicat nominal cu verb copulativ la perfect compus',
                  corect: true,
                  explicatie: 'Verbul copulativ poate fi la orice timp; numele predicativ rămâne parte din predicat.',
                },
                {
                  text: 'Două: a fost',
                  corect: false,
                  explicatie: 'Fără „mulțumit”, predicatul e incomplet.',
                },
                {
                  text: 'Unul: mulțumit',
                  corect: false,
                  explicatie: 'Numele predicativ singur nu formează predicatul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 76-77',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-10/schema.svg', titlu: 'Predicatul (actualizare)' },
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Construcțiile cu pronume reflexive',
      obiective: [
        'Identifică pronumele reflexive și funcțiile sintactice ale construcțiilor cu pronume reflexive.',
      ],
      sursaManual: 'Art 8, pp. 78-79',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Construcțiile cu pronume reflexive',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică pronumele reflexive și funcțiile sintactice ale construcțiilor cu pronume reflexive.',
        ],
        resurse: [
          'Manual Art 8, pp. 78-79',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-11/fisa-exercitii.pdf)',
          'Schema „Construcțiile cu pronume reflexive” (/materiale/clasa-8/unitatea-2/lectia-11/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Echipa de teatru, Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Pronumele reflexive din text, cazul lor și partea de vorbire pe care o însoțesc.',
          },
          {
            etapa: 'Reflexivul și substantivul, ex. 3-4',
            timp: '4 min',
            activitate: '– „Actorii își repetă rolurile”; „viața-mi”.',
          },
          {
            etapa: 'Locuțiunile, ex. 5',
            timp: '2 min',
            activitate: '– Din ce locuțiuni fac parte reflexivele din enunțurile a-b.',
          },
          {
            etapa: 'Proba înlocuirii, ex. 6',
            timp: '6 min',
            activitate: '– În perechi, reluăm reflexivul prin forma accentuată și îl înlocuim cu un pronume personal; ce funcție are.',
          },
          {
            etapa: 'Reciprocitatea și posesia, ex. 7-8',
            timp: '4 min',
            activitate: '– Asocierea enunțurilor cu grupurile pronominale; „Ana își calcă rochia”.',
          },
          {
            etapa: 'Fără funcție și pasiv-reflexiv, ex. 9-10',
            timp: '4 min',
            activitate: '– Enunțurile în care proba nu merge; funcția substantivului din „Rolurile se distribuie de către regizor”.',
          },
          {
            etapa: 'Notițe',
            timp: '7 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 78-79): reflexivul fără funcție și cu funcție (complement direct, indirect, posesiv, atribut în dativ), probele, construcția pasiv-reflexivă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (are funcție sau nu?) și ex. 2 (pasiv-reflexivă?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '4 min',
            activitate: '– În perechi, construcțiile reflexive din enunțuri și din fragmentul cronicii, cu sau fără funcție.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 2-3; Portofoliu, ex. 1; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-11/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Construcțiile cu pronume reflexive',
          pasi: [
            {
              intrebare: 'Cum recunoști un pronume reflexiv?',
              variante: [
                {
                  text: 'Trimite la aceeași persoană cu subiectul: se spală înseamnă că el se spală pe el însuși',
                  corect: true,
                  explicatie: 'Reflexivul întoarce acțiunea asupra celui care o face.',
                },
                {
                  text: 'Apare întotdeauna la începutul propoziției',
                  corect: false,
                  explicatie: 'Poziția nu are legătură.',
                },
                {
                  text: 'Se scrie mereu cu cratimă',
                  corect: false,
                  explicatie: 'Cratima apare doar în anumite forme, nu întotdeauna.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 78-79',
            },
            {
              intrebare: 'În „Ei își spun adevărul”, ce funcție sintactică are „își”?',
              variante: [
                {
                  text: 'complement indirect, în dativ',
                  corect: true,
                  explicatie: 'Răspunde la întrebarea „cui?”: își spun lor înșiși.',
                },
                {
                  text: 'complement direct',
                  corect: false,
                  explicatie: 'Complementul direct e „adevărul”, răspunde la „ce?”.',
                },
                {
                  text: 'subiect',
                  corect: false,
                  explicatie: 'Subiectul e „ei”.',
                },
              ],
              indiciu: 'Pune întrebarea de la verb: spun ce? spun cui?',
              sursa: 'Manual Art 8, pp. 78-79',
            },
            {
              intrebare: 'Cum deosebești pronumele reflexiv de pronumele personal cu aceeași formă?',
              variante: [
                {
                  text: 'Verifici dacă trimite la aceeași persoană cu subiectul. Dacă da, e reflexiv.',
                  corect: true,
                  explicatie: 'În „îl spală” e altă persoană; în „se spală” e aceeași.',
                },
                {
                  text: 'Verifici dacă e la singular sau la plural',
                  corect: false,
                  explicatie: 'Numărul nu deosebește cele două.',
                },
                {
                  text: 'Verifici dacă apare înainte sau după verb',
                  corect: false,
                  explicatie: 'Poziția variază la amândouă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 78-79',
            },
            {
              intrebare: 'În „Take se gândește la prieteni”, pronumele „se”...',
              variante: [
                {
                  text: 'nu are funcție sintactică, face parte din forma verbului',
                  corect: true,
                  explicatie: 'Unele verbe sunt reflexive prin natura lor; „se” nu se poate scoate și nu răspunde la nicio întrebare.',
                },
                {
                  text: 'este complement direct',
                  corect: false,
                  explicatie: 'Nu răspunde la „pe cine?”; nu se poate separa de verb.',
                },
                {
                  text: 'este subiect',
                  corect: false,
                  explicatie: 'Subiectul e „Take”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 78-79',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-11/schema.svg', titlu: 'Construcțiile cu pronume reflexive' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Construcțiile impersonale',
      obiective: [
        'Identifică verbele impersonale și transformă construcțiile personale în construcții impersonale.',
      ],
      sursaManual: 'Art 8, pp. 80-81',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Construcțiile impersonale',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică verbele impersonale și transformă construcțiile personale în construcții impersonale.',
        ],
        resurse: [
          'Manual Art 8, pp. 80-81',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-12/fisa-exercitii.pdf)',
          'Schema „Construcțiile impersonale” (/materiale/clasa-8/unitatea-2/lectia-12/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Semnele meteo, Explorare, ex. 1-2',
            timp: '4 min',
            activitate: '– Verbele asociate semnelor meteorologice; pot avea subiect?',
          },
          {
            etapa: 'Referirea la persoană, ex. 3-4',
            timp: '4 min',
            activitate: '– Există subiect în cele patru enunțuri? Cuvintele care se referă la persoană și funcția lor.',
          },
          {
            etapa: 'Stările, ex. 5',
            timp: '5 min',
            activitate: '– În perechi, propozițiile cu „a fi” (noapte, frig, foame, dor): subiectul, locul lui, predicatul, funcția pronumelor.',
          },
          {
            etapa: 'Subiecte și transformări, ex. 6-10',
            timp: '7 min',
            activitate: '– Subiectul nonuman; predicatele și subiectele din lista de la ex. 7; complementul de agent; transformarea după model.',
          },
          {
            etapa: 'Notițe',
            timp: '7 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 80-81): construcții mereu impersonale (fără subiect, cu subiect) și construcții care devin impersonale prin „se” sau „a fi”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (cu subiect sau fără?) și ex. 2 (în construcție impersonală), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Transformările după model; primele opt enunțuri din lista de la ex. 2.',
          },
          {
            etapa: 'Furtuna, ex. 3',
            timp: '3 min',
            activitate: '– Construcțiile impersonale din indicațiile scenice ale lui Shakespeare.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 2 (restul enunțurilor); fișa de exerciții, pagina 2; opțional, Provocări (rețeta).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-12/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Construcțiile impersonale',
          pasi: [
            {
              intrebare: 'Ce este un verb impersonal?',
              variante: [
                {
                  text: 'Un verb care nu are subiect, fiindcă acțiunea nu e făcută de cineva anume: plouă, ninge, tună',
                  corect: true,
                  explicatie: 'Sunt mai ales verbe care denumesc fenomene ale naturii.',
                },
                {
                  text: 'Un verb care se folosește doar la persoana I',
                  corect: false,
                  explicatie: 'Impersonalul apare, de regulă, doar la persoana a III-a.',
                },
                {
                  text: 'Un verb fără predicat',
                  corect: false,
                  explicatie: 'Verbul impersonal chiar e predicatul propoziției.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 80-81',
            },
            {
              intrebare: 'În „Se spune că vremea se schimbă”, construcția „se spune” este...',
              variante: [
                {
                  text: 'impersonală: nu știm și nu ne interesează cine spune',
                  corect: true,
                  explicatie: 'Construcția cu „se” ascunde intenționat autorul acțiunii.',
                },
                {
                  text: 'reflexivă: cineva se spune pe sine',
                  corect: false,
                  explicatie: 'Nu are sens ca cineva să se spună pe sine.',
                },
                {
                  text: 'pasivă cu verbul a fi',
                  corect: false,
                  explicatie: 'Nu apare verbul a fi; e o construcție cu „se”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 80-81',
            },
            {
              intrebare: 'De ce apar des construcțiile impersonale în textele oficiale și în presă?',
              variante: [
                {
                  text: 'Pentru că ascund cine e responsabil de afirmație sau de acțiune',
                  corect: true,
                  explicatie: '„Se consideră că...” nu spune cine consideră, deci nimeni nu răspunde de afirmație.',
                },
                {
                  text: 'Pentru că sunt mai scurte',
                  corect: false,
                  explicatie: 'Nu sunt neapărat mai scurte.',
                },
                {
                  text: 'Pentru că sunt mai corecte gramatical',
                  corect: false,
                  explicatie: 'Ambele variante sunt corecte.',
                },
              ],
              indiciu: 'Gândește-te cine răspunde de o afirmație de tipul „se spune că”.',
              sursa: 'Manual Art 8, pp. 80-81',
            },
            {
              intrebare: 'Care propoziție are un verb personal devenit impersonal?',
              variante: [
                {
                  text: 'Îmi trebuie o carte.',
                  corect: true,
                  explicatie: 'A trebui e folosit impersonal; „o carte” e subiectul, nu persoana care are nevoie.',
                },
                {
                  text: 'Eu citesc o carte.',
                  corect: false,
                  explicatie: 'Verb personal obișnuit, cu subiect clar.',
                },
                {
                  text: 'Ninge afară.',
                  corect: false,
                  explicatie: 'A ninge e impersonal prin natura lui, nu devenit impersonal.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 80-81',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-12/schema.svg', titlu: 'Construcțiile impersonale' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Subiectul (actualizare)',
      obiective: [
        'Actualizează cunoștințele despre subiect, identificând subiectele și părțile de vorbire prin care se exprimă.',
      ],
      sursaManual: 'Art 8, pp. 82-83',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Subiectul (actualizare)',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Actualizează cunoștințele despre subiect, identificând subiectele și părțile de vorbire prin care se exprimă.',
        ],
        resurse: [
          'Manual Art 8, pp. 82-83',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-13/fisa-exercitii.pdf)',
          'Schema „Subiectul (actualizare)” (/materiale/clasa-8/unitatea-2/lectia-13/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Fragmentele din comedie, Explorare, ex. 1',
            timp: '7 min',
            activitate: '– În perechi: subiectele exprimate, simple sau multiple; subiectele neexprimate și felul lor; ultimul predicat poate avea subiect?',
          },
          {
            etapa: 'Partea de vorbire și locul, ex. 2-3',
            timp: '7 min',
            activitate: '– Partea de vorbire prin care se exprimă subiectul în cele paisprezece enunțuri; poziția față de predicat.',
          },
          {
            etapa: 'Notițe',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 82-83): subiectul exprimat (simplu, multiplu) și neexprimat (subînțeles, inclus), tabelul părților de vorbire, locul și virgula.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (subiectul) și ex. 2 (partea de vorbire), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '6 min',
            activitate: '– Felul subiectelor; subiectele așezate după predicat; subiectele din enunțurile a-h.',
          },
          {
            etapa: 'Completarea, ex. 5',
            timp: '4 min',
            activitate: '– Subiectele cerute, frontal.',
          },
          {
            etapa: 'Enunțurile mele, ex. 4, oral',
            timp: '3 min',
            activitate: '– Câte un enunț cu subiectul exprimat prin fiecare parte de vorbire cerută.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 6; fișa de exerciții, pagina 2; opțional, Provocări.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-13/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Subiectul',
          pasi: [
            {
              intrebare: 'Prin ce părți de vorbire se poate exprima subiectul?',
              variante: [
                {
                  text: 'Substantiv, pronume, numeral, verb la infinitiv sau supin, adjectiv substantivizat',
                  corect: true,
                  explicatie: 'E o clasă largă; nu doar substantivul poate fi subiect.',
                },
                {
                  text: 'Numai prin substantiv',
                  corect: false,
                  explicatie: 'Pronumele e la fel de frecvent ca subiect.',
                },
                {
                  text: 'Numai prin substantiv și pronume',
                  corect: false,
                  explicatie: '„A citi e util” are ca subiect un verb la infinitiv.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 82-83',
            },
            {
              intrebare: 'Ce este subiectul neexprimat?',
              variante: [
                {
                  text: 'Subiectul care nu apare în propoziție, dar se deduce din forma verbului sau din context',
                  corect: true,
                  explicatie: 'În „Citesc o carte”, subiectul „eu” se deduce din terminația verbului.',
                },
                {
                  text: 'Un subiect greșit formulat',
                  corect: false,
                  explicatie: 'Nu e o greșeală; e o construcție firească în română.',
                },
                {
                  text: 'Un subiect care lipsește complet, ca la verbele impersonale',
                  corect: false,
                  explicatie: 'La impersonale subiectul chiar nu există; aici doar nu e rostit.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 82-83',
            },
            {
              intrebare: 'În „Ne trebuie mai mult timp”, care e subiectul?',
              variante: [
                {
                  text: 'mai mult timp',
                  corect: true,
                  explicatie: 'Verbul a trebui e impersonal: lucrul de care e nevoie devine subiect, nu persoana.',
                },
                {
                  text: 'ne',
                  corect: false,
                  explicatie: '„Ne” e complement indirect: cui îi trebuie.',
                },
                {
                  text: 'nu are subiect',
                  corect: false,
                  explicatie: 'Are: „mai mult timp”.',
                },
              ],
              indiciu: 'Întreabă: cine sau ce trebuie?',
              sursa: 'Manual Art 8, pp. 82-83',
            },
            {
              intrebare: 'Cum verifici acordul predicatului cu un subiect multiplu?',
              variante: [
                {
                  text: 'Predicatul se pune la plural, chiar dacă fiecare termen al subiectului e la singular',
                  corect: true,
                  explicatie: 'Take și Ianke discută, nu discută.',
                },
                {
                  text: 'Predicatul se acordă cu ultimul termen al subiectului',
                  corect: false,
                  explicatie: 'Ar fi greșit; subiectul multiplu cere plural.',
                },
                {
                  text: 'Predicatul rămâne mereu la singular',
                  corect: false,
                  explicatie: 'Exact greșeala pe care o sancționează regula acordului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 82-83',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-13/schema.svg', titlu: 'Subiectul (actualizare)' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Construcțiile incidente',
      obiective: [
        'Identifică construcțiile incidente și explică punctuația și rolul lor în enunț.',
      ],
      sursaManual: 'Art 8, pp. 84-85',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Construcțiile incidente',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică construcțiile incidente și explică punctuația și rolul lor în enunț.',
        ],
        resurse: [
          'Manual Art 8, pp. 84-85',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-14/fisa-exercitii.pdf)',
          'Schema „Construcțiile incidente” (/materiale/clasa-8/unitatea-2/lectia-14/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Conversația prietenelor, Explorare, ex. 1',
            timp: '7 min',
            activitate: '– În perechi: sunt structurile colorate legate sintactic de comunicare? Din ce sunt alcătuite și cum sunt despărțite?',
          },
          {
            etapa: 'Ce folosim noi, ex. 2',
            timp: '3 min',
            activitate: '– Ce construcții incidente folosesc elevii.',
          },
          {
            etapa: 'În comedie, ex. 3-5',
            timp: '5 min',
            activitate: '– Construcțiile incidente din replicile a-c, de ce le folosește autorul, propoziția „mi-a spus”.',
          },
          {
            etapa: 'Notițe',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 84-85): definiția, alcătuirea, categoriile (adresări, verbe de declarație, probabilitate, stări, automatisme), intonația, punctuația.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (găsește incidenta) și ex. 2 (ce exprimă?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '7 min',
            activitate: '– Construcțiile incidente din enunțurile a-g, alcătuirea și punctuația lor.',
          },
          {
            etapa: 'Cehov, ex. 3',
            timp: '5 min',
            activitate: '– Construcțiile incidente din fragmentele din „Pescărușul” și din articol; de ce apar.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Provocări, ex. 1-2 (topul construcțiilor incidente, automatismele verbale); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-14/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Construcțiile incidente',
          pasi: [
            {
              intrebare: 'Ce este o construcție incidentă?',
              variante: [
                {
                  text: 'O intervenție a vorbitorului, introdusă în enunț, fără legătură sintactică cu restul',
                  corect: true,
                  explicatie: 'Se poate scoate fără ca propoziția să devină incorectă.',
                },
                {
                  text: 'Complementul direct al propoziției',
                  corect: false,
                  explicatie: 'Complementul are funcție sintactică; incidenta nu are.',
                },
                {
                  text: 'O propoziție subordonată',
                  corect: false,
                  explicatie: 'Subordonata e legată sintactic de regentă; incidenta nu e.',
                },
              ],
              indiciu: 'Încearcă să scoți partea din enunț. Dacă restul stă în picioare, e incidentă.',
              sursa: 'Manual Art 8, pp. 84-85',
            },
            {
              intrebare: 'Cum se marchează, în scris, o construcție incidentă?',
              variante: [
                {
                  text: 'Prin virgule, linii de pauză sau paranteze, de o parte și de alta',
                  corect: true,
                  explicatie: 'Semnul trebuie pus la ambele capete, nu doar la unul.',
                },
                {
                  text: 'Prin ghilimele',
                  corect: false,
                  explicatie: 'Ghilimelele marchează un citat sau vorbirea directă.',
                },
                {
                  text: 'Prin două puncte',
                  corect: false,
                  explicatie: 'Două puncte anunță o enumerare sau o explicație.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 84-85',
            },
            {
              intrebare: 'Care variantă e corect punctuată?',
              variante: [
                {
                  text: 'Take, după cum știți, ține prăvălia din colț.',
                  corect: true,
                  explicatie: 'Incidenta e izolată prin virgule la ambele capete.',
                },
                {
                  text: 'Take după cum știți, ține prăvălia din colț.',
                  corect: false,
                  explicatie: 'Lipsește virgula de la începutul incidentei.',
                },
                {
                  text: 'Take, după cum știți ține prăvălia din colț.',
                  corect: false,
                  explicatie: 'Lipsește virgula de la sfârșitul incidentei.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 84-85',
            },
            {
              intrebare: 'Ce rol are, de obicei, o construcție incidentă?',
              variante: [
                {
                  text: 'Arată atitudinea vorbitorului sau adaugă o precizare: cred, din păcate, după cum știți',
                  corect: true,
                  explicatie: 'E vocea celui care vorbește, strecurată în enunț.',
                },
                {
                  text: 'Leagă două propoziții într-o frază',
                  corect: false,
                  explicatie: 'Acela e rolul elementelor de relație.',
                },
                {
                  text: 'Înlocuiește un substantiv repetat',
                  corect: false,
                  explicatie: 'Aceea e anafora.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 84-85',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-14/schema.svg', titlu: 'Construcțiile incidente' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Fraza. Coordonarea',
      obiective: [
        'Analizează fraza prin relația de coordonare dintre propoziții.',
      ],
      sursaManual: 'Art 8, pp. 86-87',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Fraza. Coordonarea',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Analizează fraza prin relația de coordonare dintre propoziții.',
        ],
        resurse: [
          'Manual Art 8, pp. 86-87',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-15/fisa-exercitii.pdf)',
          'Schema „Fraza. Coordonarea” (/materiale/clasa-8/unitatea-2/lectia-15/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Fraza, Explorare, ex. 1-3',
            timp: '7 min',
            activitate: '– Subliniem predicatele și despărțim fraza în propoziții; frazele cu predicate subînțelese.',
          },
          {
            etapa: 'Coordonarea, Explorare, ex. 1-4',
            timp: '8 min',
            activitate: '– Mijloacele coordonării în textul despre planul de lectură; părțile de vorbire care o realizează; virgula în frazele a-d; locuțiunile.',
          },
          {
            etapa: 'Notițe',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 86-87): fraza, predicatul subînțeles, juxtapunerea, joncțiunea, tabelul conjuncțiilor coordonatoare și al virgulei, locuțiunile conjuncționale.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (propoziții și coordonare) și ex. 2 (felul conjuncției), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '8 min',
            activitate: '– Despărțim frazele a-f în propoziții; modalitățile de coordonare și felul conjuncțiilor.',
          },
          {
            etapa: 'Frazele din liste, ex. 3',
            timp: '4 min',
            activitate: '– Asociem propozițiile din listele A și B, cu virgulele necesare.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Portofoliu (enunțurile a-b, alegerea argumentată); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-15/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Fraza. Coordonarea',
          pasi: [
            {
              intrebare: 'Cum afli câte propoziții are o frază?',
              variante: [
                {
                  text: 'Numeri predicatele: câte predicate, atâtea propoziții',
                  corect: true,
                  explicatie: 'E regula sigură, valabilă și când propozițiile sunt lungi sau amestecate.',
                },
                {
                  text: 'Numeri virgulele',
                  corect: false,
                  explicatie: 'Virgulele nu corespund întotdeauna graniței dintre propoziții.',
                },
                {
                  text: 'Numeri subiectele',
                  corect: false,
                  explicatie: 'Subiectul poate fi neexprimat, deci numărătoarea ar da greș.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 86-87',
            },
            {
              intrebare: 'Ce este coordonarea prin juxtapunere?',
              variante: [
                {
                  text: 'Legarea a două propoziții doar prin virgulă, fără cuvânt de legătură',
                  corect: true,
                  explicatie: 'A venit, a văzut, a învins: trei propoziții juxtapuse.',
                },
                {
                  text: 'Legarea prin conjuncția „și”',
                  corect: false,
                  explicatie: 'Aceea e coordonare prin joncțiune.',
                },
                {
                  text: 'Legarea printr-un pronume relativ',
                  corect: false,
                  explicatie: 'Pronumele relativ introduce o subordonată.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 86-87',
            },
            {
              intrebare: 'Care conjuncții realizează coordonare adversativă?',
              variante: [
                {
                  text: 'dar, iar, însă, ci',
                  corect: true,
                  explicatie: 'Adversativul opune ideea a doua celei dintâi.',
                },
                {
                  text: 'și, nici',
                  corect: false,
                  explicatie: 'Acelea sunt copulative, adaugă.',
                },
                {
                  text: 'sau, ori, fie',
                  corect: false,
                  explicatie: 'Acelea sunt disjunctive, dau de ales.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 86-87',
            },
            {
              intrebare: 'Între ce fel de propoziții se poate stabili coordonarea?',
              variante: [
                {
                  text: 'Între propoziții de același fel: două principale sau două subordonate',
                  corect: true,
                  explicatie: 'Coordonarea presupune egalitate; subordonarea presupune dependență.',
                },
                {
                  text: 'Doar între o principală și o secundară',
                  corect: false,
                  explicatie: 'Aceea e subordonare, nu coordonare.',
                },
                {
                  text: 'Doar între două principale',
                  corect: false,
                  explicatie: 'Și două subordonate de același fel se pot coordona între ele.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 86-87',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-15/schema.svg', titlu: 'Fraza. Coordonarea' },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Fraza. Subordonarea',
      obiective: [
        'Analizează fraza prin relația de subordonare, identificând conjuncțiile și locuțiunile conjuncționale folosite.',
      ],
      sursaManual: 'Art 8, pp. 88-89',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Fraza. Subordonarea',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Analizează fraza prin relația de subordonare, identificând conjuncțiile și locuțiunile conjuncționale folosite.',
        ],
        resurse: [
          'Manual Art 8, pp. 88-89',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-16/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-16/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Principale și secundare, Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Propozițiile cu sens de sine stătător și cele care depind de un cuvânt; coordonarea din frazele a-c.',
          },
          {
            etapa: 'Subordonarea prin conjuncții, Explorare, ex. 1-3',
            timp: '7 min',
            activitate: '– Transcriem frazele, subliniem predicatele, încercuim elementele de relație, despărțim în propoziții; înlocuim locuțiunile cu conjuncții.',
          },
          {
            etapa: 'Notițe: subordonarea',
            timp: '7 min',
            activitate: '– În caiete, după Repere (p. 88): propoziția principală și cea secundară, elementul regent și propoziția regentă, conjuncțiile și locuțiunile conjuncționale subordonatoare.',
          },
          {
            etapa: 'Alte elemente de relație, Explorare, ex. 1-3',
            timp: '6 min',
            activitate: '– Pronumele și adjectivele relative și nehotărâte; adverbele relative din replicile comediei; funcția lor în subordonată.',
          },
          {
            etapa: 'Notițe: elementele de relație',
            timp: '3 min',
            activitate: '– Repere (p. 89): pronume, adjective și adverbe relative și nehotărâte, cu funcție în propoziția pe care o introduc.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (propoziția secundară) și ex. 2 (conjuncție sau locuțiune?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Analiza replicii lui Ion (G.M. Zamfirescu); completăm frazele cu conjuncții.',
          },
          {
            etapa: 'Locuțiunile, ex. 3',
            timp: '3 min',
            activitate: '– Asociem propozițiile din seriile A și B și numim locuțiunile conjuncționale.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 4-5; fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-16/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-16/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-16/schema.svg',
          titlu: 'Coordonare și subordonare, față în față',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Enunțuri eliptice. Norme de punctuație',
      obiective: [
        'Identifică tipurile de elipsă din diverse situații de comunicare, orală și scrisă.',
      ],
      sursaManual: 'Art 8, pp. 90-91',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Enunțuri eliptice. Norme de punctuație',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică tipurile de elipsă din diverse situații de comunicare, orală și scrisă.',
        ],
        resurse: [
          'Manual Art 8, pp. 90-91',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-17/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-17/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ce citim, Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Secvențele omise din dialog, după exemplul dat; verbe sau substantive.',
          },
          {
            etapa: 'Propozițiile fragmentare, ex. 3-4',
            timp: '5 min',
            activitate: '– Propozițiile cu secvențe omise din al doilea dialog și gruparea lor pe categoriile a-c.',
          },
          {
            etapa: 'Câte propoziții? ex. 5',
            timp: '3 min',
            activitate: '– Numărul de propoziții din cele două fraze, cu argument.',
          },
          {
            etapa: 'Notițe: elipsa',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 90): elipsa verbală, elipsa nominală, propozițiile fragmentare (în coordonare, în răspunsuri, prin adverbe).',
          },
          {
            etapa: 'Punctuația, Explorare, ex. 1-2',
            timp: '4 min',
            activitate: '– Virgula și linia de pauză în enunțurile a-b; cum marcăm elipsa în vorbire (Repere, p. 91).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (ce s-a omis?) și ex. 2 (câte propoziții?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '7 min',
            activitate: '– Replicile copiilor din imagine; tipul de elipsă; enunțurile eliptice din replicile comediei.',
          },
          {
            etapa: 'Fraza lui Decebal, ex. 4',
            timp: '3 min',
            activitate: '– Împărțim fraza din replica lui Tudor Mușatescu în propoziții.',
          },
          {
            etapa: 'Autoevaluare L9-L17',
            timp: '3 min',
            activitate: '– Cele trei enunțuri de la p. 91, în caiete.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 5 (analiza după model); fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea L9-L17.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-17/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-17/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-17/schema.svg',
          titlu: 'Elipsa și semnul care o marchează',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Cronica de film. Redactarea de mână și computerizată. Etica redactării (partea 1/2)',
      obiective: [
        'Vizionează un scurtmetraj și pregătește redactarea unei cronici de film.',
      ],
      sursaManual: 'Art 8, pp. 92-93 (partea 1/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cronica de film. Redactarea de mână și computerizată. Etica redactării (partea 1/2)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Vizionează un scurtmetraj și pregătește redactarea unei cronici de film.',
        ],
        resurse: [
          'Manual Art 8, pp. 92-93',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-18/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-18/fisa.pdf)',
          'Un scurtmetraj potrivit vârstei, ales de profesor',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”, ex. 1-2',
            timp: '4 min',
            activitate: '– Ce vrem să aflăm despre un film înainte să-l vedem; patru informații dintr-o cronică.',
          },
          {
            etapa: 'Cronica „Micului Prinț”, Explorare, ex. 1-5',
            timp: '10 min',
            activitate: '– Citim cronica de la p. 92; paragrafele și informațiile lor; ce nu dezvăluie și de ce; semnificația filmului; ce ne stârnește interesul.',
          },
          {
            etapa: 'Notițe: cronica de film',
            timp: '5 min',
            activitate: '– În caiete, după Repere (pp. 92-93): cronica de film, ce nu dezvăluie, întrebările Ce?, Când și unde?, Cine?, Cum?, etica redactării.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '9 min',
            activitate: '– Pagina 1: ex. 1 (cele cinci paragrafe) și ex. 2 (voie sau nu?), individual, 6 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Vizionarea, Aplicații, ex. 1',
            timp: '10 min',
            activitate: '– Vizionăm scurtmetrajul propus de manual (Snack Attack) sau altul ales de mine; elevii notează răspunsurile la întrebări.',
          },
          {
            etapa: 'Genericul și notițele, ex. 2',
            timp: '6 min',
            activitate: '– Revedem genericul și completăm fișa de exerciții, ex. 3.',
          },
          {
            etapa: 'Primul paragraf, ex. 3',
            timp: '4 min',
            activitate: '– Elevii scriu paragraful cu informațiile generale, pe fișa lecției.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: paragrafele 2 și 3 ale cronicii, pe ciornă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; notițele de vizionare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-18/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-18/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-18/schema.svg',
          titlu: 'Cronica de film, ce conține și ce nu',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Cronica de film. Redactarea de mână și computerizată. Etica redactării (partea 2/2)',
      obiective: [
        'Redactează, revizuiește și prezintă cronica de film, respectând originalitatea și etica redactării.',
      ],
      sursaManual: 'Art 8, pp. 92-93 (partea 2/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cronica de film. Redactarea de mână și computerizată. Etica redactării (partea 2/2)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează, revizuiește și prezintă cronica de film, respectând originalitatea și etica redactării.',
        ],
        resurse: [
          'Manual Art 8, pp. 92-93',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-19/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-19/fisa.pdf)',
          'Fișa de pregătire de la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Etica redactării, fișa de exerciții, ex. 1',
            timp: '6 min',
            activitate: '– Corect sau plagiat, individual, apoi verificare; cum citez și cum notez sursa.',
          },
          {
            etapa: 'Redactarea, Aplicații, ex. 3-4',
            timp: '15 min',
            activitate: '– Elevii scriu paragrafele 4 și 5 și revizuiesc paragrafele de acasă, recitind după fiecare; trec printre bănci.',
          },
          {
            etapa: 'Titlul, ex. 6',
            timp: '3 min',
            activitate: '– Un titlu care să conțină titlul filmului.',
          },
          {
            etapa: 'Verificarea, ex. 5 și 8',
            timp: '7 min',
            activitate: '– Fișa de exerciții, ex. 2, și grila de la p. 93: ghilimelele, sursa, finalul nedezvăluit, ortografia.',
          },
          {
            etapa: 'Varianta pentru publicare, ex. 7',
            timp: '10 min',
            activitate: '– Rescrierea cronicii de mână, lizibil, sau la calculator, cu regulile de tehnoredactare.',
          },
          {
            etapa: 'Două lecturi',
            timp: '6 min',
            activitate: '– Doi elevi își citesc cronicile; colegii spun dacă i-ar convinge să vadă filmul.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: cronica finalizată, pentru afișare sau blogul clasei; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Cronicile de film, strânse pentru apreciere; autoevaluarea pe grila de la p. 93.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-19/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-2/lectia-19/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Recapitulare (partea 1/2)',
      obiective: [
        'Recapitulează conținuturile de lectură din unitate.',
      ],
      sursaManual: 'Art 8, pp. 94-95 (partea 1/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare (partea 1/2)',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează conținuturile de lectură din unitate.',
        ],
        resurse: [
          'Manual Art 8, pp. 94-95',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-20/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ciorchinele unității',
            timp: '3 min',
            activitate: '– Pe tablă, „Cum sunt ceilalți?”; elevii spun câte o noțiune de lectură sau de comunicare din unitate.',
          },
          {
            etapa: 'Lectura pe roluri',
            timp: '6 min',
            activitate: '– Doi elevi citesc fragmentul din „Citadela sfărâmată” de Horia Lovinescu (p. 94), un al treilea citește indicațiile scenice.',
          },
          {
            etapa: 'Indicațiile scenice, cerințele 1-2',
            timp: '6 min',
            activitate: '– În perechi, rolul indicației inițiale, prim-planul, secvența dominantă, informația despre Irina; exemple pentru gesturi, ton, ritm, atitudine.',
          },
          {
            etapa: 'Fișa comparativă, cerința 3',
            timp: '8 min',
            activitate: '– Grupe de șase compară personajele Irina și Petru (statut, preferințe, idealuri).',
          },
          {
            etapa: 'Cerințele 4, 6, 7, 9, 10',
            timp: '7 min',
            activitate: '– Evenimentul din spatele numelui „domnul Petru Dragomirescu”; romanul care inspiră jocul; de ce Petru oprește jocul; unde caută libertatea; replica Irinei.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (fragmentul „Seara, în curte”, scris pentru fișă, și noțiunile recapitulate), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, lectură”, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: cerința 11 (cel puțin 80 de cuvinte); cerințele 5 și 8; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Fișele comparative ale grupelor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-20/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură',
          pasi: [
            {
              intrebare: 'Ce este un text dramatic?',
              variante: [
                { text: 'Un text scris pentru a fi reprezentat pe scenă, cu indicații scenice și replici', corect: true, explicatie: 'Textul dramatic e construit din replici și indicații scenice, destinat spectacolului.' },
                { text: 'Un text scris exclusiv la persoana I, ca un jurnal', corect: false, explicatie: 'Persoana gramaticală nu definește textul dramatic; ceea ce contează e structura pe replici și indicații scenice.' },
                { text: 'Un text care nu are personaje', corect: false, explicatie: 'Textul dramatic se bazează tocmai pe personaje și pe interacțiunea dintre ele.' },
              ],
              indiciu: null,
              sursa: 'Art 8, pp. 58-59',
            },
            {
              intrebare: 'Ce este o cronică de spectacol?',
              variante: [
                { text: 'Un text nonliterar care prezintă și evaluează un spectacol de teatru', corect: true, explicatie: 'Cronica de spectacol informează și oferă un punct de vedere argumentat despre o reprezentație.' },
                { text: 'Textul piesei de teatru, așa cum a fost scris de autor', corect: false, explicatie: 'Textul piesei e opera dramatică; cronica e un text separat, scris despre spectacol.' },
                { text: 'Un rezumat obiectiv, fără nicio opinie', corect: false, explicatie: 'Cronica include de regulă un punct de vedere, nu doar fapte neutre.' },
              ],
              indiciu: null,
              sursa: 'Art 8, pp. 65-67',
            },
            {
              intrebare: 'Ce ilustrează parabola celor trei inele din Nathan Înțeleptul?',
              variante: [
                { text: 'Ideea că mai multe credințe pot avea, fiecare, valoare și adevăr', corect: true, explicatie: 'Parabola pledează pentru toleranță și respect între credințe diferite.' },
                { text: 'Superioritatea absolută a unei singure credințe', corect: false, explicatie: 'Parabola respinge tocmai ideea unei ierarhii clare între credințe.' },
                { text: 'Faptul că inelele nu au nicio valoare simbolică', corect: false, explicatie: 'Inelele sunt tocmai simbolul central al parabolei.' },
              ],
              indiciu: null,
              sursa: 'Art 8, pp. 68-69',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-20/schema.svg',
          titlu: 'Ce am învățat despre lectură în Unitatea II',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Recapitulare (partea 2/2)',
      obiective: [
        'Recapitulează conținuturile de limbă română din unitate.',
      ],
      sursaManual: 'Art 8, pp. 94-95 (partea 2/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare (partea 2/2)',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează conținuturile de limbă română din unitate.',
        ],
        resurse: [
          'Manual Art 8, pp. 94-95',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-21/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, limbă română” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'O replică pe tablă',
            timp: '3 min',
            activitate: '– Scriu „E așteptat.” din replica lui Petru: ce fel de construcție e?',
          },
          {
            etapa: 'Pasivul, cerințele 13-14',
            timp: '5 min',
            activitate: '– Transformăm „Am văzut un tablou de Grigorescu.” în pasiv; complementul de agent pentru „E așteptat”.',
          },
          {
            etapa: 'Reflexive și impersonale, cerințele 15-16',
            timp: '5 min',
            activitate: '– Construcțiile reflexive și funcția pronumelui; verbul impersonal și funcția cuvântului colorat.',
          },
          {
            etapa: 'Predicate și subiecte, cerința 17',
            timp: '6 min',
            activitate: '– Analizăm predicatele și subiectele din replica lui Petru, la tablă.',
          },
          {
            etapa: 'Incidente și fraze, cerințele 18-19',
            timp: '7 min',
            activitate: '– Două construcții incidente; despărțim frazele a-c în propoziții, cu felul și relațiile lor.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (cinci enunțuri și cerințele lor), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Transformări, fișa, ex. 3',
            timp: '4 min',
            activitate: '– Rezolvăm frontal cele trei transformări.',
          },
          {
            etapa: 'Quizul',
            timp: '6 min',
            activitate: '– Quizul „Recapitulare, limbă română”, frontal; la greșeli, revenim la notițe.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, ex. 4; cerința 19, frazele rămase.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-21/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, limbă română',
          pasi: [
            {
              intrebare: 'Cum recunoști o propoziție subordonată într-o frază?',
              variante: [
                { text: 'depinde ca sens de un cuvânt dintr-o altă propoziție, numit element regent', corect: true, explicatie: 'Propoziția principală are sens de sine stătător; o frază are cel puțin o principală.' },
                { text: 'este întotdeauna prima propoziție din frază', corect: false, explicatie: 'Poziția în frază nu decide felul propoziției.' },
                { text: 'nu are predicat', corect: false, explicatie: 'Și subordonata are un predicat; altfel n-ar fi propoziție.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 88-89',
            },
            {
              intrebare: 'Ce este elipsa verbală?',
              variante: [
                { text: 'omiterea totală sau parțială a predicatului exprimat anterior, recuperabil din context', corect: true, explicatie: 'Se marchează în scris prin virgulă sau linie de pauză: „Eu am fost în parc și tu, la film.”' },
                { text: 'repetarea predicatului în fiecare propoziție', corect: false, explicatie: 'Elipsa înseamnă omitere, nu repetare.' },
                { text: 'înlocuirea unui substantiv cu un pronume', corect: false, explicatie: 'Aceea este anafora.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 90-91',
            },
            {
              intrebare: 'Prin ce se pot lega, în frază, două propoziții aflate în relație de coordonare?',
              variante: [
                { text: 'prin conjuncții coordonatoare sau prin juxtapunere (virgulă)', corect: true, explicatie: 'Coordonarea se stabilește între propoziții de același fel, principale sau subordonate.' },
                { text: 'doar printr-un pronume relativ', corect: false, explicatie: 'Pronumele relativ introduce o subordonată, deci realizează subordonare.' },
                { text: 'doar printr-o locuțiune conjuncțională subordonatoare', corect: false, explicatie: 'Locuțiunile subordonatoare leagă o secundară de regenta ei, deci subordonează.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 88-89',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-2/lectia-21/schema.svg',
          titlu: 'Toate construcțiile din unitate, la un loc',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Recapitulare (partea 3/3, comunicare orală și redactare)',
      obiective: [
        'Recapitulează conținuturile de comunicare orală și redactare din unitate.',
      ],
      sursaManual: 'Art 8, pp. 94-95 (partea 3/3, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare (partea 3/3, comunicare orală și redactare)',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează conținuturile de comunicare orală și redactare din unitate.',
        ],
        resurse: [
          'Manual Art 8, pp. 94-95',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-22/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, comunicare orală și redactare” (materialul de joc al lecției)',
          'Cronicile de film redactate',
        ],
        desfasurare: [
          {
            etapa: 'Atitudinea comunicativă, cerința 12',
            timp: '4 min',
            activitate: '– Ce atitudini au Petru și Irina în cele două replici.',
          },
          {
            etapa: 'Jocul de rol',
            timp: '8 min',
            activitate: '– Perechi rejoacă dialogul dintre Irina și Petru, înlocuind replicile agresive cu replici asertive; două perechi prezintă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (ce atitudine?) și ex. 2 (planul cronicii), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Cronicile de acasă, cerința 20',
            timp: '9 min',
            activitate: '– Trei elevi își citesc cronicile; colegii le apreciază pe grila de pe fișă (ex. 3).',
          },
          {
            etapa: 'Quizul',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, comunicare orală și redactare”, frontal.',
          },
          {
            etapa: 'Pregătirea evaluării',
            timp: '5 min',
            activitate: '– Anunț proba de ora viitoare: un fragment dramatic nou, zece cerințe de limbă și lectură (partea A) și cronica unui film, de cel puțin 200 de cuvinte (partea B).\n– Ce recitesc acasă: notițele despre textul dramatic, construcțiile verbale, subiect, predicat, frază, cronica de film.',
          },
          {
            etapa: 'Autoevaluarea cronicii',
            timp: '4 min',
            activitate: '– Fiecare își verifică propria cronică pe grila de la p. 93.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: cronica revizuită; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Interevaluare pe grila cronicii; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-2/lectia-22/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, comunicare orală și redactare',
          pasi: [
            {
              intrebare: 'Ce este cronica de spectacol?',
              variante: [
                { text: 'un comentariu de specialitate, scris imediat după premieră, care poate lua în discuție orice element al spectacolului și se încheie de obicei cu un punct de vedere despre valoarea lui', corect: true, explicatie: 'E un text de opinie, cu grad mare de subiectivitate.' },
                { text: 'rezumatul complet al piesei, cu tot cu final', corect: false, explicatie: 'Cronica nu dezvăluie tot, ca să încurajeze publicul să vadă spectacolul.' },
                { text: 'lista personajelor și a actorilor', corect: false, explicatie: 'Aceea ar fi doar o parte a programului de sală, nu o cronică.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 65-67',
            },
            {
              intrebare: 'Ce cere etica redactării unei cronici de film?',
              variante: [
                { text: 'textul să fie original; opiniile preluate de la alții se pun între ghilimele, cu sursa precizată', corect: true, explicatie: 'Preluarea fără atribuire încalcă normele de etică a redactării.' },
                { text: 'să copiezi cât mai mult din alte cronici, ca să pară documentat', corect: false, explicatie: 'Copierea fără atribuire e tocmai ce interzice etica redactării.' },
                { text: 'să dezvălui punctul culminant și finalul', corect: false, explicatie: 'Rezumatul nu trebuie să divulge punctul culminant sau deznodământul.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 92-93',
            },
            {
              intrebare: 'Ce comportamente favorizează o comunicare eficientă?',
              variante: [
                { text: 'flexibilitatea, asertivitatea și disponibilitatea pentru negociere', corect: true, explicatie: 'Sunt atitudinile opuse pasivității, agresivității, pasivității agresive și manipulării.' },
                { text: 'întreruperea interlocutorului și tonul autoritar', corect: false, explicatie: 'Sunt semne de agresivitate.' },
                { text: 'evitarea oricărei păreri, ca să nu superi pe nimeni', corect: false, explicatie: 'Aceea e pasivitate.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 72-73',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-23',
      titlu: 'Evaluare',
      obiective: [
        'Susține testul de evaluare sumativă pentru unitate.',
      ],
      sursaManual: 'Art 8, p. 96',
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
          'Testul tipărit, Manual Art 8, p. 96',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; distribui testul (fragmentul din „Idolul și Ion Anapoda” de G.M. Zamfirescu, p. 96).\n– Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (cronica filmului preferat sau a ultimului film văzut, cel puțin 200 de cuvinte), 10 puncte din oficiu.\n– Timpul orientativ: 5 minute pentru citirea textului, 20 pentru partea A, 15 pentru cronică; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.\n– Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să verifice titlul cronicii și să nu dezvăluie finalul filmului.',
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
  ],
}
