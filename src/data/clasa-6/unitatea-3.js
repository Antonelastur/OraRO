// Unitatea III: Dincolo de ferestre — clasa a VI-a
// Sursă: manual Art Klett 2023, cuprins pp. 6, 8-9 (numerotare proprie L1-L16);
// proiectarea pe unități 2023-2024; planificarea calendaristică.
//
// Aceeași convenție ca la Unitățile I-II: 25 de lecții din proiectarea pe
// unități (o resursă pe oră de curs), nu 16 după numerotarea manualului.
// Paginile au fost verificate direct în Art 6.pdf. Unde o lecție de manual
// (L1 Iarna, L3 Epitetul, L7 Bradul, L8 Ascultare activă, L16 Descrierea unui
// peisaj, Recapitularea) e predată în 2 ore și apare aici ca 2 lecții de
// site, sursaManual notează „partea 1/2” și „partea 2/2”. Fiecare schemă
// arată doar conceptul predat în ora respectivă, nu conceptul din ora
// următoare (vezi corecția de la Unitatea II, lecțiile 18-19).
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.
//
// Materiale: schema pentru lecțiile 3, 4, 14-20 (descrierea în versuri,
// epitetul, substantivul, cele cinci cazuri). Joc pentru 12, 23, 24. Restul
// rămân null, listate în materiale-restante.md.

export const unitatea3 = {
  id: 'unitatea-3',
  titlu: 'Unitatea III: Dincolo de ferestre',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul descriptiv literar în versuri. Iarna de Vasile Alecsandri (I), prima lectură',
      obiective: [
        'Identifică trăsăturile textului descriptiv literar în versuri, pe baza poeziei Iarna de Vasile Alecsandri.',
      ],
      sursaManual: 'Manual, Lecția 1, pp. 84-85, partea 1/2 (Iarna de Vasile Alecsandri)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul descriptiv literar în versuri. Iarna de Vasile Alecsandri (I), prima lectură',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile textului descriptiv literar în versuri, pe baza poeziei Iarna de Vasile Alecsandri.',
        ],
        resurse: [
          'Manual Art 6, pp. 84-85',
          'Coli pentru câmpurile lexicale',
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
            activitate: 'Jocul „Sunetele iernii”: trei grupe imită pe rând vântul, pașii pe zăpadă și lemnele care ard, apoi toate odată.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că deschidem unitatea cu un pastel de Vasile Alecsandri și descoperim cum se descrie în versuri.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Patru grupe notează pe coli cuvinte din câte un câmp lexical al iernii: vegetație și faună, fenomene meteorologice, activități ale oamenilor, simboluri.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Îl prezint pe Vasile Alecsandri, „bardul de la Mircești”, autorul Pastelurilor, și citesc model poezia. Clarificăm cuvintele din subsol, zbor, dalb, zale, a se prevedea, albiu, apoi numărăm strofele, împărțim textul după felul în care se arată iarna și stabilim ce fel de text este.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Harta subiectivă a lecturii: fiecare elev desenează peisajul din primele trei strofe și spune ce element din text i se pare cel mai important.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri pe desenele elevilor.',
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
      titlu: 'Iarna de Vasile Alecsandri (II), prozodie și recitare',
      obiective: [
        'Recunoaște strofa și versul ca elemente de prozodie și recită expresiv un fragment din poezia Iarna.',
      ],
      sursaManual: 'Manual, Lecția 1, pp. 84-85, partea 2/2 (Iarna, elemente de prozodie)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Iarna de Vasile Alecsandri (II), prozodie și recitare',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște strofa și versul ca elemente de prozodie și recită expresiv un fragment din poezia Iarna.',
        ],
        resurse: [
          'Manual Art 6, pp. 84-85',
          'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-2/fisa.pdf)',
          'Grila de recitare de la p. 85',
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
            activitate: 'Îi întreb pe elevi ce imagine au reținut din poezie și cu ce alte texte au asociat-o.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că observăm forma poeziei, strofa și versul, și că încheiem cu un concurs de recitare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Recunoaștem strofele și versurile poeziei și citim Reperele de la p. 85: descrierea în versuri se organizează după formă și după conținut.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '15 min',
            activitate: 'Căutăm versurile care arată abundența ninsorii, cu repetiția din „Ziua ninge, noaptea ninge, dimineața ninge iară!”. Citesc expresiv o strofă și discutăm grila de recitare: intonația, ritmul rostirii, gestica și mimica.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '20 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi câțiva voluntari recită câte o strofă, iar colegii acordă fețe zâmbitoare pe grila de la p. 85. Memorarea întregii poezii rămâne temă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; interevaluarea recitărilor pe grilă.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-3/lectia-2/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Descrierea în versuri. Textul descriptiv literar',
      obiective: [
        'Identifică indicii spațiali și temporali ai descrierii și particularitățile textului descriptiv literar în versuri.',
      ],
      sursaManual: 'Manual, Lecția 2, pp. 86-87',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea în versuri. Textul descriptiv literar',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică indicii spațiali și temporali ai descrierii și particularitățile textului descriptiv literar în versuri.',
        ],
        resurse: [
          'Manual Art 6, pp. 86-87',
          'Schema „Descrierea în versuri” (/materiale/clasa-6/unitatea-3/lectia-3/schema.svg)',
          'O hartă fizică a României și doi fulgi de hârtie',
          'Coli pentru planșe',
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
            activitate: 'Doi elevi lipesc pe harta fizică a României un fulg mare unde vine mai întâi iarna și unul mic unde vine cel mai târziu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că urmărim cum e construit peisajul de iarnă din poezie: unde privim, ce vedem, când.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim elementele descrierii din Unitatea I: obiectul descris, elementele componente, proprietățile.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Identificăm formele de relief și imaginea panoramică, stabilim unde se află cel care descrie și urmărim în perechi traiectoria privirii între planul terestru și cel ceresc. Căutăm indicii de timp și rolul repetițiilor, apoi, cu ajutorul schemei, definim tabloul și pastelul și comparăm cele două tablouri, iarna aspră și iarna veselă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Grupe de 3-4 elevi realizează planșa cu elementele componente și proprietățile peisajului din strofa a treia, după modelul de la p. 86, și o prezintă prin turul galeriei.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; interevaluare prin turul galeriei.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-3/schema.svg', titlu: 'Descrierea în versuri' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Epitetul. Versificația (I), limbaj figurat',
      obiective: [
        'Identifică epitetul, comparația și personificarea într-un text descriptiv literar și explică rolul lor.',
      ],
      sursaManual: 'Manual, Lecția 3, p. 88, partea 1/2 (Rolul figurilor de stil. Epitetul)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Epitetul. Versificația (I), limbaj figurat',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică epitetul, comparația și personificarea într-un text descriptiv literar și explică rolul lor.',
        ],
        resurse: [
          'Manual Art 6, pp. 88-89',
          'Schema „Epitetul și alte figuri de stil” (/materiale/clasa-6/unitatea-3/lectia-4/schema.svg)',
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
            activitate: 'În perechi, elevii stabilesc sensul cuvântului fulg în cele patru enunțuri de sub ilustrațiile de la p. 88: fulg de lebădă, de porumb, de fată, de zăpadă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim o figură de stil nouă, epitetul, și rolul figurilor de stil într-o descriere.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintim comparația și personificarea și explicăm sensul figurat al cuvintelor cerne, plutesc, fiori, umeri din prima strofă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Găsim personificările din primele două strofe, apoi, pe grupe, completăm tabelul comparațiilor, începând cu „plopii ca fantasme”. Cu ajutorul schemei definesc epitetul, pe exemplele din poezie: „soarele rotund și palid”, „sanie ușoară”, „voios răsună”, „umeri dalbi”, „mândra țară”, și felurile lui, cromatic, personificator, simplu, dublu, triplu.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii identifică epitetele din prima strofă și le explică sensul, apoi construiesc câte un enunț cu un epitet personificator pentru fulg și pentru plop.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri pe enunțurile construite.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-4/schema.svg', titlu: 'Epitetul și alte figuri de stil' },
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Epitetul. Versificația (II), rimă, măsură, ritm',
      obiective: [
        'Identifică, intuitiv, rima, măsura și ritmul unui text poetic.',
      ],
      sursaManual: 'Manual, Lecția 3, p. 89, partea 2/2 (Versificația)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Epitetul. Versificația (II), rimă, măsură, ritm',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică, intuitiv, rima, măsura și ritmul unui text poetic.',
        ],
        resurse: [
          'Manual Art 6, pp. 89-90',
          'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-5/fisa.pdf)',
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
            activitate: 'Citesc versurile din Cartea cu Apolodor de Gellu Naum, „zor, călător, Apolodor, Labrador”, și îi întreb ce au în comun sfârșiturile de vers.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm regulile după care se construiește o poezie: versul, măsura, strofa, rima, ritmul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim despărțirea în silabe din Unitatea I și numărăm împreună silabele primului vers din Iarna.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Pe Reperele de la p. 90 explic versul, măsura, strofa, catrenul, rima împerecheată, încrucișată, îmbrățișată și monorima, ritmul și versurile albe. Exemplificăm pe fragmentele de Coșbuc și Șt. O. Iosif și marcăm silabele accentuate într-un vers din Iarna.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi, în perechi, stabilesc rima și măsura în strofa lui Ion Pillat de la p. 90. Ca temă, scriu poezia „Adunare neobișnuită”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-3/lectia-5/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează o opinie argumentată despre semnificația poeziei Iarna de Vasile Alecsandri.',
      ],
      sursaManual: 'Manual, Lecția 4, p. 91',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie argumentată despre semnificația poeziei Iarna de Vasile Alecsandri.',
        ],
        resurse: [
          'Manual Art 6, p. 91',
          'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-6/fisa.pdf)',
          'Coli pentru planșe',
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
            activitate: 'Îi întreb pe elevi care e tema poeziei și de ce crede că autorul a folosit timpul prezent.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că discutăm ce sentimente transmite poezia și ce înseamnă construcția ei.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm cele două tablouri și cele două planuri, terestru și ceresc.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Discutăm cum se schimbă peisajul și dacă tabloul e real sau imaginar, apoi construcția simetrică, cu privirea spre văzduh la început și la sfârșit. Investigația de la p. 91: în perechi, imaginea țării ca un cavaler în zale și epitetul „mândra țară”; apoi două perechi unite schițează cele două planuri, cu mișcarea fulgilor și a fumurilor, sunetele și stările privitorului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi discutăm fragmentul din Exuvii de la Provocări: ce cred ei despre citirea poeziei.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; aprecieri pe planșe.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-3/lectia-6/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Textul nonliterar. Buletinul meteorologic. Știrea',
      obiective: [
        'Recunoaște trăsăturile unui buletin meteorologic și ale unei știri, ca texte nonliterare multimodale.',
      ],
      sursaManual: 'Manual, Lecția 5, pp. 92-94',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul nonliterar. Buletinul meteorologic. Știrea',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Recunoaște trăsăturile unui buletin meteorologic și ale unei știri, ca texte nonliterare multimodale.',
        ],
        resurse: [
          'Manual Art 6, pp. 92-94',
          'Infograficul „Buletinul meteorologic și știrea” (/materiale/clasa-6/unitatea-3/lectia-7/infografic.svg)',
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
            activitate: 'Elevii scriu pe tablă continuări pentru „Previziunile meteorologice sunt consultate frecvent de…”.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim două texte nonliterare, un buletin meteorologic și o știre, și vedem cum sunt construite.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim diferența dintre textul literar și cel nonliterar și textele continue și discontinue din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citim prognoza ANM de la p. 92, cu harta și vinietele, stabilim de ce e un text multimodal simplu și de ce folosește viitorul, apoi aflăm vremea de Crăciun la Arad. Citim știrea despre zăpada toxică de la p. 93: cine, ce, unde, când, de ce, titlul nominal, supratitlul, începutul, cuprinsul și încheierea. Fixăm totul cu infograficul.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Elevii transformă titlurile verbale de la p. 94 în titluri nominale, apoi completează autoevaluarea pentru lecțiile 1-5. Ca temă, redactează o știre despre un eveniment din școală.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea achizițiilor din lecțiile 1-5; știrea redactată ca temă.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-6/unitatea-3/lectia-7/infografic.svg', titlu: 'Buletinul meteorologic și știrea' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Text auxiliar. Greutatea omătului de Ana Blandiana',
      obiective: [
        'Interpretează, prin exerciții de postlectură, semnificațiile textului auxiliar Greutatea omătului de Ana Blandiana.',
      ],
      sursaManual: 'Manual, Lecția 6, „Noi pagini, alte idei”, p. 95 (Greutatea omătului de Ana Blandiana)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Greutatea omătului de Ana Blandiana',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Interpretează, prin exerciții de postlectură, semnificațiile textului auxiliar Greutatea omătului de Ana Blandiana.',
        ],
        resurse: [
          'Manual Art 6, p. 95',
          'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-8/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi dacă au văzut copaci rupți de zăpadă și ce au simțit atunci.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim o poezie de Ana Blandiana și o comparăm cu pastelul lui Alecsandri.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Citim textul de prezentare de la p. 95: poeții de la Alecsandri la Goga descriu natura, iar cei din secolul al XX-lea își proiectează trăirile asupra ei.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citim poezia și discutăm întrebările de la p. 95: anotimpul, lipsa indicilor de spațiu, rolul întrebării, epitetele personificatoare ale arborilor, norii ca haine croite pe măsură, „aparatul de cântărire a norilor”. Stabilim dacă e o descriere sau o stare interioară și dacă fericirea poate avea urmări negative.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi prezint volumele de la Biblioteci deschise, de G. Topîrceanu și Ion Pillat.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; aprecieri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-3/lectia-8/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Bradul în cultura populară românească (I), tradiție și simboluri',
      obiective: [
        'Identifică semnificația bradului de Crăciun și a simbolurilor asociate lui în riturile de trecere românești.',
      ],
      sursaManual: 'Manual, Lecția 7, pp. 96-97, partea 1/2 (Bradul în cultura populară românească)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Bradul în cultura populară românească (I), tradiție și simboluri',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Identifică semnificația bradului de Crăciun și a simbolurilor asociate lui în riturile de trecere românești.',
        ],
        resurse: [
          'Manual Art 6, pp. 96-97',
          'Infograficul „Bradul: tradiție și simboluri” (/materiale/clasa-6/unitatea-3/lectia-9/infografic.svg)',
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
            activitate: 'Câțiva elevi povestesc unde au văzut cel mai frumos brad de Crăciun și cine se adună în jurul bradului la ei acasă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că aflăm ce înseamnă bradul în tradiția românească, dincolo de Crăciun.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Citim de la p. 96 cum s-a răspândit obiceiul bradului împodobit, de la sașii din Transilvania la curtea regelui Carol I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Discutăm ce simbolizează un arbore veșnic verde, apoi citim despre bradul din riturile de trecere: la naștere, la nuntă, cu orația bradului, și la moartea unui tânăr necăsătorit. Cu infograficul fixăm Reperele: bradul care leagă lumea de sub pământ, pământul și cerul, și crengile de brad puse la casele noi sau la căruțe.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii aleg ce simbolizează bradul în fiecare ceremonial, dintre variantele de la p. 96, și numesc alt obicei de iarnă în care apar crengi de brad.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-6/unitatea-3/lectia-9/infografic.svg', titlu: 'Bradul: tradiție și simboluri' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Bradul în cultura populară românească (II), artă și design contemporan',
      obiective: [
        'Recunoaște elemente tradiționale (bradul) reluate în arta modernă și în designul vestimentar contemporan.',
      ],
      sursaManual: 'Manual, Lecția 7, pp. 96-97, partea 2/2 (Bradul, în artă și design contemporan)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Bradul în cultura populară românească (II), artă și design contemporan',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Recunoaște elemente tradiționale (bradul) reluate în arta modernă și în designul vestimentar contemporan.',
        ],
        resurse: [
          'Manual Art 6, p. 97',
          'Infograficul „Bradul în arta contemporană” (/materiale/clasa-6/unitatea-3/lectia-10/infografic.svg)',
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
            activitate: 'Le arăt tabloul La Blouse roumaine (Ia românească) de Henri Matisse, de la p. 97, și îi întreb ce văd.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că urmărim cum a ajuns bradul, stilizat pe ie, în pictură și în moda de azi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm simbolurile bradului de ora trecută și locurile unde apare stilizat: covoare, ștergare, ii, lăzi.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Căutăm în tabloul lui Matisse elementele grafice legate de brad, apoi citim despre Regina Maria fotografiată în ie și despre colecția lui Yves Saint-Laurent din 1981. Cu infograficul legăm tradiția de arta și designul contemporan.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'În perechi, elevii argumentează dacă ia poate fi purtată azi, apoi câțiva își prezintă argumentele. Propun, pentru cine are acasă o ie sau o cămașă tradițională, o prezentare la o oră viitoare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri pe argumentele formulate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-6/unitatea-3/lectia-10/infografic.svg', titlu: 'Bradul în arta contemporană' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Proiect individual. Obiceiuri specifice sărbătorilor de iarnă',
      obiective: [
        'Se familiarizează cu tema, modalitățile de documentare și criteriile de evaluare ale proiectului individual despre obiceiurile de iarnă.',
      ],
      sursaManual: 'Manual, Proiect individual, pp. 98-99 (Obiceiuri specifice sărbătorilor de iarnă)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect individual. Obiceiuri specifice sărbătorilor de iarnă',
        data: null,
        tipOra: 'Proiect, anunțare',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, modalitățile de documentare și criteriile de evaluare ale proiectului individual despre obiceiurile de iarnă.',
        ],
        resurse: [
          'Manual Art 6, pp. 98-99',
          'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-11/fisa.pdf)',
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
            activitate: 'Elevii numesc obiceiuri de iarnă pe care le cunosc, de Moș Nicolae, de Crăciun, de Anul Nou, de Bobotează sau din alte tradiții religioase.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț proiectul individual: fiecare prezintă, în patru săptămâni, un obicei de iarnă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Îi întreb ce știu despre plugușor, obiceiul pe care îl luăm ca model.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Parcurgem modelul de la pp. 98-99: fișa Știu, Vreau să știu, Am aflat, cu buhaiul, talanga, biciul, bradul de pe plug și originea în saturnalii. Discutăm cine îi poate ajuta, de unde se informează, unde pot vedea obiceiul, ce produs final aleg și cum își fac planul pe patru săptămâni.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Fiecare elev își alege obiceiul și completează pe fișa lecției rubricile Știu și Vreau să știu. Citim criteriile de evaluare: dosarul proiectului și o prezentare originală, clară, relevantă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției. Proiectul se evaluează la prezentare, în portofoliu.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-3/lectia-11/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Strategii de ascultare activă',
      obiective: [
        'Aplică strategii de ascultare activă (atenție, întrebări de clarificare) într-un exercițiu de comunicare pe perechi.',
      ],
      sursaManual: 'Manual, Lecția 8, p. 100, partea 1/2 (Strategii de ascultare activă)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Strategii de ascultare activă',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Aplică strategii de ascultare activă (atenție, întrebări de clarificare) într-un exercițiu de comunicare pe perechi.',
        ],
        resurse: [
          'Manual Art 6, pp. 100-101',
          'Quizul „Strategii de ascultare activă” (materialul de joc al lecției)',
          'Foi și creioane pentru desen, stickere',
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
            activitate: 'Explicăm expresiile de la p. 100: a fi numai urechi, a-i ajunge cuiva la ureche, a-i intra pe-o ureche și a-i ieși pe alta.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm ce înseamnă să asculți cu adevărat.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintim contextul de comunicare din Unitatea I și rolul ascultătorului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Jocul de la p. 100: perechi așezate spate în spate, unul descrie o imagine, celălalt o desenează doar după indicații și pune întrebări. Afișăm desenele, facem turul galeriei, discutăm cine a avut rolul cel mai important și fixăm Reperele: atenție, semnale nonverbale, întrebări de clarificare, reformulare, reflectarea sentimentelor.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Două-trei perechi exersează în fața clasei, pe o temă de la p. 101, iar colegii le evaluează pe grilă. Toți rezolvă apoi quizul „Strategii de ascultare activă”.',
          },
        ],
        evaluare: 'Turul galeriei; evaluare reciprocă pe grila de la p. 101; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Strategii de ascultare activă',
          pasi: [
            {
              intrebare: 'Ce înseamnă ascultarea activă, într-o conversație?',
              variante: [
                { text: 'Să fii atent la ce spune vorbitorul și să pui întrebări de clarificare', corect: true, explicatie: 'Ascultarea activă înseamnă implicare reală, nu doar tăcere în timp ce vorbește celălalt.' },
                { text: 'Să vorbești tot timpul, ca să nu se instaleze tăcerea', corect: false, explicatie: 'Ascultarea activă înseamnă tocmai să-i lași loc vorbitorului, nu să vorbești tu tot timpul.' },
                { text: 'Să repeți exact cuvintele vorbitorului', corect: false, explicatie: 'Repetarea mecanică nu e ascultare activă, ci doar imitare.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 100',
            },
            {
              intrebare: 'Într-un exercițiu în care un elev descrie o imagine, iar altul o desenează doar după indicații orale, de ce contează întrebările de clarificare?',
              variante: [
                { text: 'Ajută desenatorul să înțeleagă exact ce a vrut să spună vorbitorul', corect: true, explicatie: 'Fără întrebări, informația incompletă duce la un desen departe de original.' },
                { text: 'Fac exercițiul mai lung, fără alt rol', corect: false, explicatie: 'Întrebările au rol funcțional, nu doar de a prelungi activitatea.' },
                { text: 'Sunt obligatorii doar dacă desenul iese greșit', corect: false, explicatie: 'Întrebările ajută chiar în timpul desenării, nu doar după.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 100',
            },
            {
              intrebare: 'Care dintre atitudini arată implicare într-o activitate de grup?',
              variante: [
                { text: 'Interesul, curiozitatea și cooperarea cu ceilalți', corect: true, explicatie: 'Sunt exact atitudinile comunicative vizate de lecție.' },
                { text: 'Dezinteresul față de părerile colegilor', corect: false, explicatie: 'Dezinteresul e opusul implicării într-un grup.' },
                { text: 'Dorința de a termina cât mai repede', corect: false, explicatie: 'Graba nu înseamnă cooperare sau implicare reală.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 100',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Atitudini comunicative',
      obiective: [
        'Reflectează, prin autoevaluare, asupra propriilor atitudini comunicative: interes, curiozitate, implicare, cooperare.',
      ],
      sursaManual: 'Manual, Lecția 8, p. 101, partea 2/2 (Atitudini comunicative)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Atitudini comunicative',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Reflectează, prin autoevaluare, asupra propriilor atitudini comunicative: interes, curiozitate, implicare, cooperare.',
        ],
        resurse: [
          'Manual Art 6, pp. 100-101',
          'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-13/fisa.pdf)',
          'Coli mari, carioci albastre și roșii',
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
            activitate: 'Jocul „Termometrul emoțiilor”: fiecare elev desenează un termometru cu cifrele 1-5 și plasează pe el enunțurile a-h de la p. 100.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reflectăm la felul în care comunicăm și lucrăm în grup.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim tehnicile ascultării active de ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '15 min',
            activitate: 'Discutăm ce le-a arătat termometrul despre ei înșiși, fixăm atitudinile din Repere, interes, atenție, implicare, cooperare, și dăm exemple pentru figura ascultării active. Alegem împreună un criteriu original de grupare, luna nașterii sau culoarea preferată, și formăm grupele.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '20 min',
            activitate: 'Grupe de 4-6 elevi desenează o siluetă: în interior scriu cu albastru ce face un bun membru al echipei, în afară, cu roșu, ce nu trebuie să facă. Raportorii prezintă, apoi fiecare își completează autoevaluarea pe fișa lecției.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluare pe fișa lecției.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-3/lectia-13/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Substantivul (actualizare). Colective și defective',
      obiective: [
        'Reactualizează felul, genul și numărul substantivului și recunoaște substantivele colective și defective.',
      ],
      sursaManual: 'Manual, Lecția 9, pp. 102-104',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Substantivul (actualizare). Colective și defective',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează felul, genul și numărul substantivului și recunoaște substantivele colective și defective.',
        ],
        resurse: [
          'Manual Art 6, pp. 102-104',
          'Schema „Substantivul (actualizare)” (/materiale/clasa-6/unitatea-3/lectia-14/schema.svg)',
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
            activitate: 'Joc pe grupe: în două minute, cât mai multe substantive care numesc ființe, obiecte și fenomene din imaginea de iarnă de la p. 102.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm substantivul și descoperim substantivele colective și cele care au un singur număr.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Pe textul despre Predeal reluăm felul, genul, numărul și articolul substantivelor, apoi formăm pluralul unor substantive și observăm cazurile speciale: ardei, arici, nume, bandă, colț.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Cu ajutorul schemei explic substantivele colective și acordul lor cu predicatul: „Juriul a acordat”, „O mulțime de copii a sau au mers”. Deosebim substantivele numărabile de cele nonnumărabile, defective de plural, oțet, și de singular, ochelari, și numele de materii, făină și făinuri.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii grupează substantivele de la p. 104 în defective de plural și de singular și găsesc substantivele colective din textul despre puștimea din cartier.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-14/schema.svg', titlu: 'Substantivul (actualizare)' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Cazul nominativ',
      obiective: [
        'Identifică substantivele în cazul nominativ și funcțiile lor sintactice, de subiect sau de nume predicativ.',
      ],
      sursaManual: 'Manual, Lecția 10, p. 105',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cazul nominativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică substantivele în cazul nominativ și funcțiile lor sintactice, de subiect sau de nume predicativ.',
        ],
        resurse: [
          'Manual Art 6, p. 105',
          'Schema „Cazul nominativ” (/materiale/clasa-6/unitatea-3/lectia-15/schema.svg)',
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
            activitate: 'În perechi, elevii stabilesc funcția substantivului sanie în cele patru enunțuri de la p. 105 și grupează formele asemănătoare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim cazul, prima categorie nouă a substantivului, și începem cu nominativul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim subiectul și numele predicativ din Unitatea II, pe textele despre fete și despre vecina patinatoare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Pornind de la formele lui sanie, definim cazul. Cu ajutorul schemei explic nominativul: substantivul subiect sau nume predicativ, articulat hotărât, nehotărât sau nearticulat, ca în „Tata este avocat.”.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii stabilesc care substantive din enunțurile despre vânt și zăpadă sunt subiecte și care nume predicative, apoi analizează substantivele din textul „Iarna s-a înăsprit.”, după model.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-15/schema.svg', titlu: 'Cazul nominativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Cazul acuzativ. Complementul direct și prepozițional',
      obiective: [
        'Diferențiază complementul direct de complementul prepozițional, ambele în cazul acuzativ.',
      ],
      sursaManual: 'Manual, Lecția 11, pp. 106-108',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cazul acuzativ. Complementul direct și prepozițional',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Diferențiază complementul direct de complementul prepozițional, ambele în cazul acuzativ.',
        ],
        resurse: [
          'Manual Art 6, pp. 106-108',
          'Schema „Cazul acuzativ. Complementul direct și prepozițional” (/materiale/clasa-6/unitatea-3/lectia-16/schema.svg)',
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
            activitate: 'În grupe, elevii stabilesc funcția substantivelor din textul despre Daniel și sania de la p. 106.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm cazul acuzativ și două complemente: directul și prepozițional.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim complementul din Unitatea II și întrebările lui.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei explic acuzativul și complementul direct, pe cine? ce?, „O zăresc pe Maria.”, apoi complementul prepozițional, la ce se gândește? de ce nu se plictisește? Deosebim „Îl ascult pe Dan.” de „Contez pe prieteni.” prin dublarea cu pronume. Închei cu ortografia: copiii, poeziile.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii indică substantivele în acuzativ și funcția lor în enunțurile de la p. 108, apoi trec la plural articulat codrul, fiul, fluviul, camionagiul.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-16/schema.svg', titlu: 'Cazul acuzativ. Complementul direct și prepozițional' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Cazul acuzativ. Circumstanțialele. Atributul',
      obiective: [
        'Identifică circumstanțialul de loc și de timp și atributul substantival în acuzativ, diferențiindu-le după ce parte de vorbire determină.',
      ],
      sursaManual: 'Manual, Lecția 12, pp. 109-111',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cazul acuzativ. Circumstanțialele. Atributul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică circumstanțialul de loc și de timp și atributul substantival în acuzativ, diferențiindu-le după ce parte de vorbire determină.',
        ],
        resurse: [
          'Manual Art 6, pp. 109-111',
          'Schema „Circumstanțialele. Atributul” (/materiale/clasa-6/unitatea-3/lectia-17/schema.svg)',
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
            activitate: 'Pe textul „A nins la București în noaptea trecută…” de la p. 109, îi întreb ce parte de propoziție se poate scoate fără ca mesajul să se piardă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm circumstanțialele de loc, de timp și de mod și atributul, toate în acuzativ.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim complementele direct și prepozițional și introducem ideea de complinire obligatorie și facultativă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei explic circumstanțialul de loc, unde? încotro?, obligatoriu uneori, „locuiește în București”, circumstanțialul de timp, când? până când?, și cel de mod, cum? Discutăm virgula la circumstanțiale, apoi atributul substantival prepozițional, „cutia de creioane”, „arțarul de lângă bloc”, care determină un substantiv, nu un verb.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii completează tabelul cu circumstanțialele din textul despre Ana, apoi stabilesc funcția cuvântului iarnă în cele șase enunțuri de la p. 111. Ca temă, scriu o știre despre un concurs de schi, cu toate circumstanțialele învățate.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri; știrea de la Provocări, ca temă.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-17/schema.svg', titlu: 'Circumstanțialele. Atributul' },
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Cazul dativ. Complementul indirect',
      obiective: [
        'Identifică complementul indirect, exprimat prin substantiv în cazul dativ.',
      ],
      sursaManual: 'Manual, Lecția 13, p. 112',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cazul dativ. Complementul indirect',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică complementul indirect, exprimat prin substantiv în cazul dativ.',
        ],
        resurse: [
          'Manual Art 6, p. 112',
          'Schema „Cazul dativ” (/materiale/clasa-6/unitatea-3/lectia-18/schema.svg)',
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
            activitate: 'Citim „Zăpada îi dădea copacului o înfățișare ciudată.” și îi întreb cui îi dădea zăpada această înfățișare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm cazul dativ și complementul indirect.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim acuzativul și complementele lui, ca să vedem ce e diferit la întrebarea cui?.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic dativul și complementul indirect, beneficiarul acțiunii, „Îi dau copilului un măr.”. Insist pe scrierea numelor proprii: lui Carmen, lui Petru, Mariei, Robertei, Olgăi, Ericăi.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii găsesc substantivele în dativ din enunțurile de la p. 112 și analizează complementele indirecte din textul despre vrăbiuțe, după model. Ca temă, scriu narațiunea cu Călin, Delia, Catrinel și Lili.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri; narațiunea de la Provocări, ca temă.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-18/schema.svg', titlu: 'Cazul dativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Cazul genitiv. Articolul genitival. Posibilități combinatorii ale substantivului',
      obiective: [
        'Identifică atributul substantival genitival și explică rolul articolului genitival.',
      ],
      sursaManual: 'Manual, Lecția 14, pp. 113-114',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cazul genitiv. Articolul genitival. Posibilități combinatorii ale substantivului',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică atributul substantival genitival și explică rolul articolului genitival.',
        ],
        resurse: [
          'Manual Art 6, pp. 113-114',
          'Schema „Cazul genitiv. Articolul genitival” (/materiale/clasa-6/unitatea-3/lectia-19/schema.svg)',
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
            activitate: 'Citim textul despre fratele Roxanei, care desenează pe el cu cariocile surorii, și răspundem la întrebările al cui frate? ale cui carioci?',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm cazul genitiv, atributul genitival și articolul genitival.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim cazurile învățate și comparăm „unei flori” din „Îi pun apă unei flori.” și din „Petalele unei flori s-au uscat.”.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei explic genitivul, al, a, ai, ale cui?, atributul substantival genitival și articolul genitival, care se acordă cu substantivul determinat și se reia în enumerare. Discutăm „al lui Dan”, apoi substantivul ca centru al unui grup nominal sau ca adjunct într-un grup verbal.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii completează articolele genitivale de la p. 114, apoi corectează enunțurile preluate din emisiuni de radio și televiziune.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-19/schema.svg', titlu: 'Cazul genitiv. Articolul genitival' },
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Cazul vocativ',
      obiective: [
        'Identifică substantivele în cazul vocativ și punctuația specifică acestora.',
      ],
      sursaManual: 'Manual, Lecția 15, p. 115',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cazul vocativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică substantivele în cazul vocativ și punctuația specifică acestora.',
        ],
        resurse: [
          'Manual Art 6, p. 115',
          'Schema „Cazul vocativ” (/materiale/clasa-6/unitatea-3/lectia-20/schema.svg)',
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
            activitate: 'Citim replicile de la masa de familie de la p. 115, „bunico”, „băiete”, „Dane”, „nepotule drag”, „dragilor”, și îi întreb ce arată cuvintele colorate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm ultimul caz, vocativul, și cum îl despărțim prin punctuație.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim cele patru cazuri învățate și întrebările lor.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Grupăm vocativele cu formă proprie, -e, -ule, -o, -lor, și pe cele cu formă de nominativ. Cu ajutorul schemei explic faptul că vocativul nu are funcție sintactică și că se desparte prin virgulă, uneori cu semnul exclamării, inclusiv când are determinanți: „Dragi colegi de clasă, vă felicit!”.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii identifică vocativele de la p. 115 și corectează punctuația enunțurilor, apoi completează autoevaluarea pentru lecțiile 9-15.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea achizițiilor din lecțiile 9-15. Temă de portofoliu: schema posibilităților combinatorii ale substantivului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-3/lectia-20/schema.svg', titlu: 'Cazul vocativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Descrierea unui peisaj (I), pregătirea redactării',
      obiective: [
        'Analizează un text-stimul descriptiv (peisaj hibernal), identificând planurile descrierii și limbajul figurat.',
      ],
      sursaManual: 'Manual, Lecția 16, pp. 116-117, partea 1/2 (Descrierea unui peisaj, pregătire)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea unui peisaj (I), pregătirea redactării',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Analizează un text-stimul descriptiv (peisaj hibernal), identificând planurile descrierii și limbajul figurat.',
        ],
        resurse: [
          'Manual Art 6, pp. 116-117',
          'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-21/fisa.pdf)',
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
            activitate: 'Jocul de la p. 116, „Ghicește fenomenul hibernal!”, apoi elevii numesc patru elemente ale peisajului pe care îl văd iarna de la fereastra clasei.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că ne pregătim să descriem un peisaj: învățăm de la un tablou și de la un text.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim planurile, traiectoria privirii și figurile de stil din lecțiile despre Iarna.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Privim tabloul lui Pieter Bruegel cel Bătrân, Peisaj de iarnă cu patinatori și capcană pentru păsări, și stabilim ce e în dreapta și în stânga, în prim-plan, în plan secund și în fundal. Citim fragmentul din Darul lui Moș Crăciun de T.O. Bobe, găsim cuvintele care arată privirea de sus și direcția ei, apoi fixăm Reperele de la p. 116 despre descrierea unui peisaj.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Elevii rezolvă fișa lecției, pregătind materialul pentru descrierea de ora următoare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-3/lectia-21/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Descrierea unui peisaj (II), redactarea',
      obiective: [
        'Redactează o compunere descriptivă cu obiect un peisaj, respectând etapele scrierii.',
      ],
      sursaManual: 'Manual, Lecția 16, pp. 116-117, partea 2/2 (Descrierea unui peisaj, redactare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea unui peisaj (II), redactarea',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o compunere descriptivă cu obiect un peisaj, respectând etapele scrierii.',
        ],
        resurse: [
          'Manual Art 6, p. 117, etapele scrierii și grila de autoevaluare',
          'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-22/fisa.pdf)',
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
            activitate: 'Le cer elevilor să-și amintească prima ninsoare din această iarnă: unde erau, ce au văzut, ce au simțit.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare descrie prima ninsoare, trecând prin toate etapele scrierii.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim cele cinci etape ale scrierii de la p. 117: pregătirea, ciorna, revizuirea, editarea, publicarea.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '10 min',
            activitate: 'Pe fișa lecției, elevii stabilesc pentru cine și de ce scriu, aleg patru elemente ale peisajului, adaugă epitete, o comparație și o personificare, locul de unde privesc, ce văd, aud și simt, direcția privirii și planul.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '27 min',
            activitate: 'Elevii scriu ciorna, cu verbe la imperfect, persoana I, își aleg un titlu, revizuiesc după lista de verificare și transcriu, apoi se autoevaluează pe grilă. Câțiva își citesc lucrarea din „scaunul autorului”.',
          },
        ],
        evaluare: 'Autoevaluare pe grila de la p. 117; aprecieri. Temă: ordonarea lucrărilor din portofoliu, unitățile I-III, cu un text de 4-5 rânduri despre propria evoluție.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-3/lectia-22/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-23',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea III: descrierea în versuri, figuri de stil, ascultare activă.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 118-119, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea III: descrierea în versuri, figuri de stil, ascultare activă.',
        ],
        resurse: [
          'Manual Art 6, pp. 118-119',
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
            activitate: 'Îi rog pe elevi să spună pe rând câte o noțiune de lectură sau de comunicare învățată în unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm lectura și comunicarea orală pe o poezie nouă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm textul descriptiv în versuri, tabloul și pastelul, epitetul, versificația, buletinul meteorologic și știrea, ascultarea activă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Citim fragmentul din Început de an de Nicolae Labiș, de la p. 118, și rezolvăm ghidat cerințele de lectură: anotimpul și momentul zilei, solii noului an, elementele tabloului, mișcarea, sunetele, epitetele, măsura și rima, un titlu de știre. Două perechi fac jocul de rol despre noaptea de Anul Nou, evaluat pe grila ascultării active.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, lectură și comunicare”, apoi discutăm răspunsurile greșite.',
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
              intrebare: 'Ce figură de stil dă însușiri omenești unor lucruri sau fenomene ale naturii?',
              variante: [
                { text: 'personificarea', corect: true, explicatie: 'Personificarea atribuie trăsături umane unor elemente nonumane, ca „iarna cerne norii”.' },
                { text: 'epitetul', corect: false, explicatie: 'Epitetul arată o însușire deosebită, dar nu neapărat una umană.' },
                { text: 'comparația', corect: false, explicatie: 'Comparația apropie două elemente printr-un cuvânt de legătură, ca „ca” sau „precum”.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 3, p. 88',
            },
            {
              intrebare: 'Cum se numește descrierea organizată pe strofe și versuri, nu pe paragrafe?',
              variante: [
                { text: 'descrierea în versuri', corect: true, explicatie: 'Descrierea în versuri urmează structura poeziei, pe strofe și versuri.' },
                { text: 'descrierea în proză', corect: false, explicatie: 'Descrierea în proză e organizată în propoziții și paragrafe.' },
                { text: 'textul argumentativ', corect: false, explicatie: 'Textul argumentativ nu e o descriere, prezintă argumente pentru o idee.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 2, pp. 86-87',
            },
            {
              intrebare: 'Ce presupune ascultarea activă într-o conversație?',
              variante: [
                { text: 'Atenție la vorbitor și întrebări de clarificare', corect: true, explicatie: 'Ascultarea activă e o implicare reală, nu doar prezența tăcută în conversație.' },
                { text: 'Vorbitul continuu, fără pauze', corect: false, explicatie: 'Ascultarea activă presupune să-i lași spațiu vorbitorului, nu să vorbești tu tot timpul.' },
                { text: 'Ignorarea răspunsurilor primite', corect: false, explicatie: 'Dimpotrivă, ascultarea activă înseamnă să ții cont de ce spune celălalt.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 100',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-24',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea III: substantivul și cele cinci cazuri.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 118-119, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea III: substantivul și cele cinci cazuri.',
        ],
        resurse: [
          'Manual Art 6, pp. 118-119',
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
            activitate: 'Scriu pe tablă versul „Iar brazii, Doamne, brazii din cer furară stele” și îi rog pe elevi să găsească substantivul în vocativ.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm substantivul, cazurile și descrierea unui peisaj.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm substantivele colective și defective, cele cinci cazuri cu întrebările și funcțiile lor, articolul genitival, punctuația vocativului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat cerințele de limbă de la p. 119: nominativele din prima strofă, substantivele de pe etichete, colectivele și defectivele din textul despre colindători, cazul și funcția substantivelor marcate, articolele genitivale, varianta corectă de la cerința 23.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi discutăm greșelile. Ca temă, scriu compunerea descriptivă despre centrul localității în sărbătorile de iarnă, cerința 24.',
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
              intrebare: 'În propoziția Vântul bate destul de tare, ce funcție sintactică are vântul?',
              variante: [
                { text: 'subiect, cazul nominativ', corect: true, explicatie: 'Vântul arată cine face acțiunea, deci e subiect, la cazul nominativ.' },
                { text: 'complement direct, cazul acuzativ', corect: false, explicatie: 'Complementul direct răspunde la pe cine?/ce?, nu e cazul aici.' },
                { text: 'atribut, cazul genitiv', corect: false, explicatie: 'Atributul genitival determină un substantiv, nu un verb.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 10, p. 105',
            },
            {
              intrebare: 'Care e diferența dintre complementul direct și cel prepozițional?',
              variante: [
                { text: 'Complementul direct nu are prepoziție înainte, cel prepozițional are', corect: true, explicatie: 'Ambele sunt în acuzativ, dar se deosebesc prin prezența sau absența prepoziției.' },
                { text: 'Complementul direct răspunde la cui?, cel prepozițional la ce?', corect: false, explicatie: 'Cui? e întrebarea complementului indirect, nu a celui direct.' },
                { text: 'Sunt exact același lucru, doar denumiri diferite', corect: false, explicatie: 'Sunt tipuri diferite de complement, deosebite prin prezența prepoziției.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 11, pp. 106-108',
            },
            {
              intrebare: 'Ce întrebare descoperă complementul indirect?',
              variante: [
                { text: 'cui?', corect: true, explicatie: 'Complementul indirect, în cazul dativ, răspunde la întrebarea cui?' },
                { text: 'pe cine?', corect: false, explicatie: 'Pe cine? e întrebarea complementului direct, în acuzativ.' },
                { text: 'al cui?', corect: false, explicatie: 'Al cui? e întrebarea atributului genitival, nu a complementului indirect.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 13, p. 112',
            },
            {
              intrebare: 'Articolul genitival (al, a, ai, ale) preia genul și numărul de la...',
              variante: [
                { text: 'substantivul determinat, nu de la substantivul în genitiv', corect: true, explicatie: 'Ex.: „pisoii violeți ai bunicii” — ai preia genul și numărul lui pisoii, nu al bunicii.' },
                { text: 'substantivul în genitiv', corect: false, explicatie: 'De fapt, articolul genitival preia genul și numărul substantivului determinat.' },
                { text: 'verbul din propoziție', corect: false, explicatie: 'Articolul genitival nu are legătură cu verbul.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 14, pp. 113-114',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-25',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea III.',
      ],
      sursaManual: 'Manual, Evaluare, p. 120',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea III.',
        ],
        resurse: [
          'Testul, Manual Art 6, p. 120',
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
            activitate: 'Le spun elevilor că proba păstrează structura celor de până acum și îi liniștesc în privința timpului de lucru.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se dă proba scrisă a Unității III, pe poezia Ianuarie de Otilia Cazimir, cu o parte de limbă și lectură și o compunere descriptivă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc structura probei, 60 de puncte la partea A, 30 la compunere, 10 din oficiu, și cum își împart timpul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '35 min',
            activitate: 'Elevii rezolvă individual proba pe o foaie separată; supraveghez discret, gestionez timpul și strâng lucrările, împreună cu portofoliile unităților I-III.',
          },
        ],
        evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului; portofoliile unităților I-III se evaluează separat.',
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
