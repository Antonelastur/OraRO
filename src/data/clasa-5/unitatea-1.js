// Unitatea I: Despre mine. Selfie — clasa a V-a
// Sursă: Limba și literatura română, manual Art Klett (Sâmihăian, Dobra, Halaszi,
// Davidoiu-Roman), Ghidul profesorului (aceiași autori), proiectarea pe unități
// de învățare 2022-2023, planificarea calendaristică. 19 ore, lecțiile 1-14 au
// câte o oră fiecare, exact cum le numerotează manualul însuși („Lecția 1"
// până la „Lecția 15"), Recapitulare și Evaluare încheie unitatea.
//
// Lecțiile 15-16 (Etapele scrierii, pp. 36-37) și 17-18 (Recapitulare,
// pp. 38-39) sunt un singur bloc de 2 ore fiecare, atât în planificare, cât
// și în ghid, care nu le desparte în două scenarii separate. Despărțirea pe
// cele două ore de mai jos e o organizare proprie, făcută după conținutul
// real al fiecărei pagini, nu o segmentare dată de sursă, marcată explicit
// la fiecare dintre cele patru lecții.
//
// Lecția 5, textul nonliterar despre selfie: baremul de minitest găsit în
// ghid (Anexa 33) pare să aparțină tematic altui text („Povestitorul intră
// în clasa a V-a"), nu istoriei selfie-ului. Nu l-am asociat lecției, rămâne
// de verificat direct în varianta digitală a manualului.
//
// rezolvareGhid rămâne null aici intenționat, document intern, nu se publică;
// conținutul real e în notite-profesor/clasa-5/unitatea-1.md (needatat în git).
// planLectie conține o schiță de plan în 6 pași (momentele lecției), afișată
// pe site sub eticheta discretă „Doar profesor” din PlanProfesor.tsx.
// Planurile ERR mai vechi din notite-profesor/ rămân neatinse, sunt altă formă.

export const unitatea1 = {
  id: 'unitatea-1',
  titlu: 'Unitatea I: Despre mine. Selfie',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul literar. „Prietenul meu” de Ioana Pârvulescu',
      obiective: [
        'Identifică informații esențiale din textul literar „Prietenul meu” de Ioana Pârvulescu.',
      ],
      sursaManual: 'Art 5, pp. 10-12 (corectat din 11-12); Ghid, pp. 39, 69-70',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul literar. „Prietenul meu” de Ioana Pârvulescu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul literar „Prietenul meu” de Ioana Pârvulescu.',
        ],
        resurse: [
          'Manual Art 5, pp. 10-12',
          'Prezentarea lecției (/materiale/clasa-5/unitatea-1/lectia-1/prezentare.pdf)',
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
            activitate: 'Deschid o discuție despre ce înseamnă prietenia pentru elevi, pornind de la prima diapozitivă a prezentării.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim textul „Prietenul meu” de Ioana Pârvulescu și că la final elevii vor putea desprinde informațiile esențiale din text.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintesc, prin întrebări, ce este un text și cum recunoaștem ideile importante, pornind de la lecturile din clasa a IV-a.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc textul cu voce tare împreună cu elevii, folosind prezentarea, clarific cuvintele necunoscute, de exemplu „rigolă”, și discutăm despre ce se întâmplă în text.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Cer fiecărui elev să noteze în caiet trei informații esențiale din text și să le citească pe rând.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea celor trei informații esențiale notate în caiet.',
      },
      materiale: {
        prezentare: { fisier: '/materiale/clasa-5/unitatea-1/lectia-1/prezentare.pdf' },
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Ce am reținut din „Prietenul meu”',
          pasi: [
            {
              intrebare: 'Cine povestește întâmplarea din textul „Prietenul meu”?',
              variante: [
                {
                  text: 'O fetiță, care spune ce i s-a întâmplat ei',
                  corect: true,
                  explicatie: 'Textul e povestit la persoana I, de fetița care trăiește întâmplarea.',
                },
                {
                  text: 'Un povestitor din afară, care nu apare în text',
                  corect: false,
                  explicatie: 'Dacă ar fi așa, am citi „ea a spus”, nu „am spus”.',
                },
                {
                  text: 'Prietenul fetiței',
                  corect: false,
                  explicatie: 'Prietenul e personaj, dar nu el ține firul povestirii.',
                },
              ],
              indiciu: 'Uită-te la formele verbelor: sunt la persoana I sau a III-a?',
              sursa: 'Manual Art 5, pp. 10-12',
            },
            {
              intrebare: 'Ce înseamnă cuvântul „rigolă”, întâlnit în text?',
              variante: [
                {
                  text: 'Un șanț îngust pe marginea drumului, pentru scurgerea apei',
                  corect: true,
                  explicatie: 'E un cuvânt pe care îl clarificăm din context și din dicționar.',
                },
                {
                  text: 'Un fel de fereastră mică',
                  corect: false,
                  explicatie: 'Nu are legătură cu ferestrele; cuvântul ține de stradă.',
                },
                {
                  text: 'O jucărie de lemn',
                  corect: false,
                  explicatie: 'Contextul din text arată clar că e ceva de pe stradă, nu o jucărie.',
                },
              ],
              indiciu: 'Recitește propoziția în care apare și vezi despre ce loc e vorba.',
              sursa: 'Manual Art 5, pp. 10-12',
            },
            {
              intrebare: 'Care dintre acestea este o informație esențială din text, nu un amănunt?',
              variante: [
                {
                  text: 'Fetița își face un prieten neașteptat',
                  corect: true,
                  explicatie: 'Informația esențială e cea fără de care povestea nu se mai înțelege.',
                },
                {
                  text: 'Culoarea exactă a unui obiect descris în treacăt',
                  corect: false,
                  explicatie: 'Un amănunt de decor; textul se înțelege și fără el.',
                },
                {
                  text: 'Numărul de rânduri al textului',
                  corect: false,
                  explicatie: 'Nu e o informație din text, ci despre felul cum e tipărit.',
                },
              ],
              indiciu: 'Întreabă-te: dacă scot această informație, mai înțeleg povestea?',
              sursa: 'Manual Art 5, pp. 10-12',
            },
            {
              intrebare: 'Ce faci corect când desprinzi informațiile esențiale dintr-un text?',
              variante: [
                {
                  text: 'Reții cine, unde, când și ce se întâmplă',
                  corect: true,
                  explicatie: 'Cele patru repere dau scheletul oricărei întâmplări.',
                },
                {
                  text: 'Reții toate cuvintele necunoscute, în ordine',
                  corect: false,
                  explicatie: 'Cuvintele necunoscute se clarifică, dar nu ele sunt informația esențială.',
                },
                {
                  text: 'Reții doar ultima propoziție',
                  corect: false,
                  explicatie: 'Finalul e important, dar singur nu spune despre ce e textul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 10-12',
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
      titlu: 'Trăsături ale textului literar',
      obiective: [
        'Identifică trăsăturile textului literar: lumea imaginară, emoțiile, limbajul expresiv.',
        'Formulează inferențe simple despre personaje și relațiile dintre ele.',
      ],
      sursaManual: 'Art 5, pp. 13-14; Ghid, pp. 39, 70-72',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Trăsături ale textului literar',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile textului literar: lumea imaginară, emoțiile, limbajul expresiv.',
          'Formulează inferențe simple despre personaje și relațiile dintre ele.',
        ],
        resurse: [
          'Manual Art 5, pp. 13-14',
          'Prezentarea lecției (/materiale/clasa-5/unitatea-1/lectia-2/prezentare.pdf)',
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
            activitate: 'Le citesc două fraze scurte, una dintr-un anunț și una din textul literar, și îi întreb prin ce se deosebesc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi descoperim trăsăturile textului literar și învățăm să tragem concluzii despre personaje.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Recapitulăm pe scurt textul „Prietenul meu” și informațiile esențiale desprinse ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Prezint, cu prezentarea lecției și exemple din text, lumea imaginară, emoțiile și limbajul expresiv, apoi construim împreună o hartă a relațiilor dintre personaje.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev formulează în scris o inferență simplă despre relația dintre două personaje și o argumentează cu un detaliu din text.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea inferenței scrise.',
      },
      materiale: {
        prezentare: { fisier: '/materiale/clasa-5/unitatea-1/lectia-2/prezentare.pdf' },
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Trăsăturile textului literar',
          pasi: [
            {
              intrebare: 'Care dintre aceste trei trăsături aparțin textului literar?',
              variante: [
                {
                  text: 'Lumea imaginară, emoțiile, limbajul expresiv',
                  corect: true,
                  explicatie: 'Sunt cele trei trăsături discutate în lecție.',
                },
                {
                  text: 'Datele exacte, cifrele, sursele verificabile',
                  corect: false,
                  explicatie: 'Acestea sunt trăsături ale textului nonliterar.',
                },
                {
                  text: 'Titlul, autorul, editura',
                  corect: false,
                  explicatie: 'Sunt informații despre carte, nu trăsături ale textului literar.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 13-14',
            },
            {
              intrebare: 'Ce înseamnă că un text literar are o „lume imaginară”?',
              variante: [
                {
                  text: 'Autorul construiește o lume pornind de la realitate, dar nu identică cu ea',
                  corect: true,
                  explicatie: 'Lumea din text poate semăna cu a noastră, însă rămâne inventată de autor.',
                },
                {
                  text: 'Tot ce se povestește s-a întâmplat cu adevărat',
                  corect: false,
                  explicatie: 'Asta ar fi o relatare, nu o lume imaginară.',
                },
                {
                  text: 'În text apar obligatoriu zâne și balauri',
                  corect: false,
                  explicatie: 'Lumea imaginară nu înseamnă neapărat fantastic; poate fi foarte apropiată de viața de zi cu zi.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 13-14',
            },
            {
              intrebare: 'În care dintre variante se folosește un limbaj expresiv?',
              variante: [
                {
                  text: 'Ploaia bătea în geam ca niște degete grăbite.',
                  corect: true,
                  explicatie: 'Comparația creează o imagine, deci limbajul e expresiv.',
                },
                {
                  text: 'Astăzi au căzut 12 litri de apă pe metru pătrat.',
                  corect: false,
                  explicatie: 'E o informație exactă, specifică textului nonliterar.',
                },
                {
                  text: 'Ploaia a început la ora 15:40.',
                  corect: false,
                  explicatie: 'Tot o informație precisă, fără intenție artistică.',
                },
              ],
              indiciu: 'Caută varianta care te face să vezi sau să auzi ceva.',
              sursa: 'Manual Art 5, pp. 13-14',
            },
            {
              intrebare: 'Ce este o inferență simplă despre un personaj?',
              variante: [
                {
                  text: 'O concluzie pe care o tragi din faptele lui, chiar dacă textul nu o spune direct',
                  corect: true,
                  explicatie: 'Textul arată fapte, cititorul deduce trăsătura din ele.',
                },
                {
                  text: 'Copierea unei propoziții din text',
                  corect: false,
                  explicatie: 'Copierea nu presupune nicio deducție.',
                },
                {
                  text: 'O părere fără nicio legătură cu textul',
                  corect: false,
                  explicatie: 'O inferență se sprijină întotdeauna pe ceva din text.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 13-14',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Cuvântul-cheie. Tema. Planul simplu de idei',
      obiective: [
        'Identifică cuvântul-cheie și ideea principală dintr-un fragment de text.',
        'Stabilește tema unui text și redactează planul simplu de idei.',
      ],
      sursaManual: 'Art 5, p. 15; Ghid, pp. 39, 72-73',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cuvântul-cheie. Tema. Planul simplu de idei',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică cuvântul-cheie și ideea principală dintr-un fragment de text.',
          'Stabilește tema unui text și redactează planul simplu de idei.',
        ],
        resurse: [
          'Manual Art 5, p. 15',
          'Schema lecției „De la cuvântul-cheie la planul de idei” (/materiale/clasa-5/unitatea-1/lectia-3/schema.svg)',
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
            activitate: 'Le cer elevilor să spună într-un singur cuvânt despre ce este vorba în textul „Prietenul meu” și notez variantele pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să găsim cuvântul-cheie și tema unui text și să alcătuim un plan simplu de idei.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm ce este ideea principală a unui fragment, pornind de la exemple simple din lecturile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei lecției, delimităm textul în fragmente, identificăm cuvântul-cheie și ideea principală a fiecăruia și stabilim tema, apoi redactăm împreună planul simplu de idei.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '8 min',
            activitate: 'Fiecare elev redactează singur planul simplu de idei pentru un fragment dat și îl compară cu al colegului de bancă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea planului simplu de idei redactat individual.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Cuvântul-cheie, tema și planul de idei',
          pasi: [
            {
              intrebare: 'Ce este cuvântul-cheie al unui fragment?',
              variante: [
                {
                  text: 'Cuvântul fără de care fragmentul nu se mai înțelege',
                  corect: true,
                  explicatie: 'El poartă înțelesul central al fragmentului.',
                },
                {
                  text: 'Cel mai lung cuvânt din fragment',
                  corect: false,
                  explicatie: 'Lungimea nu are nicio legătură cu importanța unui cuvânt.',
                },
                {
                  text: 'Primul cuvânt al fragmentului',
                  corect: false,
                  explicatie: 'Poziția în text nu decide care e cuvântul-cheie.',
                },
              ],
              indiciu: 'Încearcă să povestești fragmentul fără acel cuvânt. Merge?',
              sursa: 'Manual Art 5, p. 15',
            },
            {
              intrebare: 'Prin ce se deosebește tema unui text de ideea principală a unui fragment?',
              variante: [
                {
                  text: 'Tema e despre ce e vorba în tot textul, ideea principală e despre un singur fragment',
                  corect: true,
                  explicatie: 'Tema acoperă întregul, ideea principală acoperă o parte.',
                },
                {
                  text: 'Sunt exact același lucru',
                  corect: false,
                  explicatie: 'Un text are o temă, dar mai multe idei principale.',
                },
                {
                  text: 'Tema se scrie mereu cu majusculă',
                  corect: false,
                  explicatie: 'Scrierea nu are legătură cu deosebirea dintre ele.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 15',
            },
            {
              intrebare: 'Unde delimitezi, de obicei, un fragment nou într-un text narativ?',
              variante: [
                {
                  text: 'Acolo unde se schimbă locul, timpul sau personajele',
                  corect: true,
                  explicatie: 'Aceste trei schimbări marchează, cel mai des, un fragment nou.',
                },
                {
                  text: 'La fiecare cinci rânduri, indiferent de conținut',
                  corect: false,
                  explicatie: 'Delimitarea ține de conținut, nu de numărul de rânduri.',
                },
                {
                  text: 'Doar la sfârșitul paginii',
                  corect: false,
                  explicatie: 'Pagina e o convenție de tipar, nu o graniță a sensului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 15',
            },
            {
              intrebare: 'Cum arată, corect alcătuit, un plan simplu de idei?',
              variante: [
                {
                  text: 'O listă cu ideea principală a fiecărui fragment, în ordinea din text',
                  corect: true,
                  explicatie: 'Ideile principale, puse cap la cap și în ordine, dau planul simplu.',
                },
                {
                  text: 'Un rezumat de o singură propoziție',
                  corect: false,
                  explicatie: 'Un rezumat scurt nu arată împărțirea pe fragmente.',
                },
                {
                  text: 'Lista tuturor personajelor',
                  corect: false,
                  explicatie: 'Personajele sunt altceva decât ideile principale.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 15',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-3/schema.svg', titlu: 'De la cuvântul-cheie la planul de idei' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Interpretează semnificațiile textului „Prietenul meu”, răspuns afectiv și discutarea mesajului.',
      ],
      sursaManual: 'Art 5, p. 16; Ghid, pp. 39, 73-74',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Interpretează semnificațiile textului „Prietenul meu”, răspuns afectiv și discutarea mesajului.',
        ],
        resurse: [
          'Manual Art 5, p. 16',
          'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-4/fisa.pdf)',
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
            activitate: 'Recitesc cu elevii un pasaj-cheie din text și îi întreb ce simt când îl aud.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm ce vrea să ne transmită textul dincolo de întâmplări și ne exprimăm părerea despre mesaj.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm tema și planul simplu de idei stabilite ora trecută, ca bază pentru interpretare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Ghidez discuția de interpretare pe baza fișei lecției și a exercițiilor de la p. 16, cerând elevilor argumente din text pentru fiecare părere.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev scrie un răspuns afectiv scurt despre mesajul textului, folosind formula „Textul mă face să...”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea răspunsului afectiv scris.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-1/lectia-4/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-1/lectia-4/schema.svg',
          titlu: 'De la întâmplare la semnificație',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Textul nonliterar, scurtă istorie a selfie-ului',
      obiective: [
        'Identifică scopul și informațiile unui text nonliterar.',
      ],
      sursaManual: 'Art 5, p. 17; Ghid, pp. 40, 74-75',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul nonliterar, scurtă istorie a selfie-ului',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică scopul și informațiile unui text nonliterar.',
        ],
        resurse: [
          'Manual Art 5, p. 17',
          'Infograficul „Scurtă istorie a selfie-ului” (/materiale/clasa-5/unitatea-1/lectia-5/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi de când cred că oamenii fac selfie-uri și de ce le fac.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un text nonliterar despre istoria selfie-ului și învățăm să recunoaștem scopul și informațiile unui astfel de text.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm, prin comparație, trăsăturile textului literar învățate în lecțiile anterioare, ca să pregătim contrastul cu textul nonliterar.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Citim textul, apoi cu ajutorul infograficului identificăm scopul lui informativ, cuvintele-cheie și ideile principale, cu exemplele de la p. 17.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează două informații noi aflate din text și formulează în scris care este scopul acestuia.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea celor două informații și a formulării scopului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Textul nonliterar',
          pasi: [
            {
              intrebare: 'Care este scopul principal al unui text nonliterar, ca cel despre istoria selfie-ului?',
              variante: [
                {
                  text: 'Să informeze cititorul despre ceva real',
                  corect: true,
                  explicatie: 'Textul nonliterar transmite informații verificabile.',
                },
                {
                  text: 'Să emoționeze cititorul printr-o poveste inventată',
                  corect: false,
                  explicatie: 'Acesta e scopul textului literar.',
                },
                {
                  text: 'Să distreze prin rime și jocuri de cuvinte',
                  corect: false,
                  explicatie: 'Nu e scopul unui text informativ.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 17',
            },
            {
              intrebare: 'Ce fel de limbaj folosește, de obicei, un text nonliterar?',
              variante: [
                {
                  text: 'Un limbaj clar și precis, cu date exacte',
                  corect: true,
                  explicatie: 'Claritatea e mai importantă decât frumusețea exprimării.',
                },
                {
                  text: 'Un limbaj plin de comparații și metafore',
                  corect: false,
                  explicatie: 'Limbajul expresiv e specific textului literar.',
                },
                {
                  text: 'Un limbaj greu de înțeles, ca să pară serios',
                  corect: false,
                  explicatie: 'Un text informativ bun e ușor de urmărit, nu complicat inutil.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 17',
            },
            {
              intrebare: 'Într-un text nonliterar despre istoria unui obiect, ce te aștepți să găsești?',
              variante: [
                {
                  text: 'Ani, nume, invenții, în ordine cronologică',
                  corect: true,
                  explicatie: 'Textele informative despre istorie se sprijină pe repere de timp.',
                },
                {
                  text: 'Un personaj principal cu trăsături morale',
                  corect: false,
                  explicatie: 'Personajele aparțin textului literar.',
                },
                {
                  text: 'O încheiere cu o morală',
                  corect: false,
                  explicatie: 'Morala e specifică textelor literare, mai ales fabulei.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 17',
            },
            {
              intrebare: 'Cum îți dai seama repede dacă un text e literar sau nonliterar?',
              variante: [
                {
                  text: 'Mă întreb dacă lumea din text e inventată sau reală și dacă limbajul e expresiv sau precis',
                  corect: true,
                  explicatie: 'Cele două întrebări, împreună, decid aproape întotdeauna.',
                },
                {
                  text: 'Mă uit doar la lungimea textului',
                  corect: false,
                  explicatie: 'Și textele literare, și cele nonliterare pot fi scurte sau lungi.',
                },
                {
                  text: 'Mă uit dacă are titlu',
                  corect: false,
                  explicatie: 'Ambele tipuri de text au titlu.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 17',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-1/lectia-5/infografic.svg', titlu: 'Scurtă istorie a selfie-ului' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Text auxiliar, „Hronicul și cântecul vârstelor” de Lucian Blaga',
      obiective: [
        'Formulează inferențe simple și compară texte pe tema prieteniei și a descoperirii de sine.',
      ],
      sursaManual: 'Art 5, pp. 18-19; Ghid, pp. 40, 75-76',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar, „Hronicul și cântecul vârstelor” de Lucian Blaga',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Formulează inferențe simple și compară texte pe tema prieteniei și a descoperirii de sine.',
        ],
        resurse: [
          'Manual Art 5, pp. 18-19',
          'Quizul „Descoperirea lui Lulu” (materialul de joc al lecției)',
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
            activitate: 'Îi întreb pe elevi dacă au avut vreodată o descoperire copilărească pe care au ținut-o secretă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un fragment din Lucian Blaga și îl comparăm cu textele despre prietenie de până acum.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Recapitulăm tema și mesajul textului „Prietenul meu”, ca termen de comparație.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc fragmentul din „Hronicul și cântecul vârstelor”, clarific termenii mai puțin cunoscuți și ghidez, cu exemplele de la pp. 18-19, o comparație între cele două texte pe tema descoperirii de sine.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Descoperirea lui Lulu”, care verifică înțelegerea întâmplării povestite de Blaga, apoi discutăm răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quizul „Descoperirea lui Lulu”.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Descoperirea lui Lulu',
          pasi: [
            {
              intrebare: 'Unde se petrece întâmplarea povestită de Lucian Blaga?',
              variante: [
                { text: 'În satul copilăriei autorului', corect: true, explicatie: 'Acțiunea are loc în satul natal, dimineața, când prietenii îl strigau pe nume, „Lulu Popii”.' },
                { text: 'La școală, în timpul unei lecții', corect: false, explicatie: 'Textul nu se petrece la școală, ci în satul copilăriei, într-un cadru liber de joacă.' },
                { text: 'Într-un oraș mare, la teatru', corect: false, explicatie: 'Fragmentul evocă o amintire din satul natal, nu un oraș.' },
              ],
              indiciu: 'Gândește-te la locul unde copiii se jucau dimineața, chemându-se unii pe alții.',
              sursa: 'Manual Art 5, pp. 18-19',
            },
            {
              intrebare: 'Ce descoperire face povestitorul (Lulu)?',
              variante: [
                { text: 'Că cerul îl urmărește oriunde s-ar duce', corect: true, explicatie: 'Lulu observă că, indiferent unde merge, are impresia că cerul rămâne mereu deasupra lui, ca și cum l-ar urmări.' },
                { text: 'Că poate zbura', corect: false, explicatie: 'Textul nu vorbește despre zbor, ci despre senzația că cerul îl urmărește.' },
                { text: 'Că prietenul lui se mută din sat', corect: false, explicatie: 'Nu apare nicio mutare a vreunui prieten în fragment.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 18-19',
            },
            {
              intrebare: 'Cui îi mărturisește Lulu descoperirea sa?',
              variante: [
                { text: 'Lui Adam al Vicii', corect: true, explicatie: 'Lulu ține secretul o vreme, apoi i-l dezvăluie prietenului său, Adam al Vicii.' },
                { text: 'Părinților săi', corect: false, explicatie: 'Descoperirea rămâne un secret între copii, nu ajunge la părinți în fragmentul dat.' },
                { text: 'Învățătoarei', corect: false, explicatie: 'Nu apare nicio învățătoare în această întâmplare.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 18-19',
            },
            {
              intrebare: 'Ce se întâmplă atunci când cei doi copii pun la încercare descoperirea, verificând dacă cerul „se despică”?',
              variante: [
                { text: 'Rămân dezolați și nedumeriți, pentru că cerul nu s-a despicat', corect: true, explicatie: 'Testarea nu confirmă vizibil descoperirea, iar copiii rămân cu o nedumerire, fără un răspuns clar.' },
                { text: 'Se bucură, pentru că descoperirea li se confirmă imediat', corect: false, explicatie: 'Fragmentul arată mai degrabă nedumerire decât o confirmare clară și veselă.' },
                { text: 'Fug speriați spre casă', corect: false, explicatie: 'Reacția lor e nedumerirea, nu frica sau fuga.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 18-19',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-1/lectia-6/schema.svg',
          titlu: 'Două texte, aceeași descoperire',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Identitatea personală. Emoțiile',
      obiective: [
        'Asociază experiențe proprii de viață cu cele din filmul „Întors pe dos”, identitate personală și emoții.',
      ],
      sursaManual: 'Art 5, pp. 20-22; Ghid, pp. 76-77',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Identitatea personală. Emoțiile',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Asociază experiențe proprii de viață cu cele din filmul „Întors pe dos”, identitate personală și emoții.',
        ],
        resurse: [
          'Manual Art 5, pp. 20-22',
          'Infograficul „Cele cinci emoții din «Întors pe dos»” (/materiale/clasa-5/unitatea-1/lectia-7/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi ce emoții își amintesc din filmul „Întors pe dos” și le notez pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vorbim despre identitatea personală și despre felul în care emoțiile ne definesc, pornind de la film.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ce am discutat despre emoții la textele din lecțiile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul infograficului prezint cele cinci emoții din film și fac legătura cu identitatea personală, folosind exemplele de la pp. 20-22.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev asociază în scris o experiență proprie cu una dintre cele cinci emoții și explică pe scurt legătura.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea asocierii scrise.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Identitatea personală și emoțiile',
          pasi: [
            {
              intrebare: 'Ce înseamnă identitatea personală?',
              variante: [
                {
                  text: 'Tot ce mă face să fiu eu: numele, pasiunile, felul de a fi, amintirile',
                  corect: true,
                  explicatie: 'Identitatea personală adună trăsăturile care mă deosebesc de ceilalți.',
                },
                {
                  text: 'Doar numele și prenumele scrise în acte',
                  corect: false,
                  explicatie: 'Actele arată datele oficiale, dar identitatea înseamnă mai mult.',
                },
                {
                  text: 'Părerea colegilor despre mine',
                  corect: false,
                  explicatie: 'Părerea altora contează, dar nu ține locul identității proprii.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 20-22',
            },
            {
              intrebare: 'De ce ne ajută să ne recunoaștem emoțiile?',
              variante: [
                {
                  text: 'Pentru că, dacă știu ce simt, pot să explic altora și pot să reacționez mai potrivit',
                  corect: true,
                  explicatie: 'Recunoașterea emoției e primul pas spre exprimarea ei adecvată.',
                },
                {
                  text: 'Pentru că astfel putem scăpa de emoțiile neplăcute pentru totdeauna',
                  corect: false,
                  explicatie: 'Emoțiile neplăcute fac parte din viață; scopul nu e să dispară.',
                },
                {
                  text: 'Pentru că doar bucuria e o emoție folositoare',
                  corect: false,
                  explicatie: 'Toate emoțiile au un rol, inclusiv tristețea sau frica.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 20-22',
            },
            {
              intrebare: 'Un coleg pierde un concurs pentru care s-a pregătit mult. Ce emoție e cel mai probabil să simtă?',
              variante: [
                {
                  text: 'Tristețe, poate și dezamăgire',
                  corect: true,
                  explicatie: 'Tristețea apare când pierdem ceva la care țineam.',
                },
                {
                  text: 'Doar bucurie',
                  corect: false,
                  explicatie: 'Bucuria nu se potrivește cu pierderea unui lucru dorit.',
                },
                {
                  text: 'Nicio emoție, dacă e un elev serios',
                  corect: false,
                  explicatie: 'A simți emoții nu are legătură cu a fi serios sau nu.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 20-22',
            },
            {
              intrebare: 'Ce arată filmul „Întors pe dos” despre rolul emoțiilor?',
              variante: [
                {
                  text: 'Că avem nevoie de toate emoțiile, nu doar de cele plăcute',
                  corect: true,
                  explicatie: 'Filmul arată că și tristețea are un rol important în viața personajului.',
                },
                {
                  text: 'Că trebuie să fim mereu veseli',
                  corect: false,
                  explicatie: 'Filmul spune tocmai contrariul.',
                },
                {
                  text: 'Că emoțiile nu se pot schimba niciodată',
                  corect: false,
                  explicatie: 'Emoțiile se schimbă tot timpul, în funcție de ce trăim.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 20-22',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-1/lectia-7/infografic.svg', titlu: 'Cele cinci emoții din „Întors pe dos”' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Exprimarea adecvată a emoțiilor. Roluri în comunicare',
      obiective: [
        'Exprimă adecvat emoțiile și identifică rolurile de vorbitor și ascultător în comunicare.',
      ],
      sursaManual: 'Art 5, pp. 22-23; Ghid, pp. 77-78',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Exprimarea adecvată a emoțiilor. Roluri în comunicare',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Exprimă adecvat emoțiile și identifică rolurile de vorbitor și ascultător în comunicare.',
        ],
        resurse: [
          'Manual Art 5, pp. 22-23',
          'Schema „Comunicare verbală, nonverbală, paraverbală” (/materiale/clasa-5/unitatea-1/lectia-8/schema.svg)',
          'Quizul cu același titlu (materialul de joc al lecției)',
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
            activitate: 'Le cer elevilor să exprime o emoție doar prin gesturi și mimică, iar colegii ghicesc emoția.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm cum ne exprimăm potrivit emoțiile și ce înseamnă rolurile de vorbitor și de ascultător.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm discuția despre emoții din lecția precedentă și legătura lor cu felul în care comunicăm.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definesc comunicarea verbală, nonverbală și paraverbală și rolurile de vorbitor și ascultător, cu exemplele de la pp. 22-23, apoi facem un scurt joc de perechi cu bilețele.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Comunicare verbală, nonverbală, paraverbală”, apoi discutăm răspunsurile greșite.',
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
          titlu: 'Comunicare verbală, nonverbală, paraverbală',
          pasi: [
            {
              intrebare: 'Când zâmbești, dai din cap sau te încrunți fără să spui niciun cuvânt, ce tip de comunicare folosești?',
              variante: [
                { text: 'Comunicare nonverbală', corect: true, explicatie: 'Comunicarea nonverbală se realizează prin mimică, poziția corpului, gesturi, contact vizual, fără cuvinte.' },
                { text: 'Comunicare verbală', corect: false, explicatie: 'Comunicarea verbală presupune folosirea unei limbi, prin cuvinte rostite sau scrise.' },
                { text: 'Comunicare paraverbală', corect: false, explicatie: 'Paraverbală înseamnă felul cum vorbești, nu gesturile fără cuvinte.' },
              ],
              indiciu: 'Gândește-te dacă ai nevoie de cuvinte pentru gestul descris.',
              sursa: 'Manual Art 5, p. 22 (Repere)',
            },
            {
              intrebare: 'Vorbești foarte tare și foarte repede pentru că ești entuziasmat. Ce arată acest lucru despre comunicarea ta?',
              variante: [
                { text: 'Comunicarea ta paraverbală', corect: true, explicatie: 'Intonația, intensitatea vocii și ritmul vorbirii țin de comunicarea paraverbală.' },
                { text: 'Comunicarea ta nonverbală', corect: false, explicatie: 'Nonverbal înseamnă mimică și gesturi, nu felul în care sună vocea.' },
                { text: 'Rolul tău de ascultător', corect: false, explicatie: 'Când vorbești, ai rolul de vorbitor, nu de ascultător.' },
              ],
              indiciu: 'E vorba despre cum sună vocea, nu despre ce cuvinte alegi.',
              sursa: 'Manual Art 5, p. 22 (Repere)',
            },
            {
              intrebare: 'Într-o discuție, cine ascultă cu atenție și așteaptă rândul lui ca să răspundă?',
              variante: [
                { text: 'Ascultătorul', corect: true, explicatie: 'Participanții la o comunicare orală pot avea rolul de vorbitor sau de ascultător.' },
                { text: 'Vorbitorul', corect: false, explicatie: 'Vorbitorul este cel care transmite mesajul, nu cel care ascultă.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 22 (Repere)',
            },
            {
              intrebare: 'Comunicarea realizată prin intermediul unei limbi cunoscute, prin cuvinte rostite sau scrise, se numește...',
              variante: [
                { text: 'Comunicare verbală', corect: true, explicatie: 'Comunicarea verbală poate fi orală sau scrisă și se realizează prin cuvinte.' },
                { text: 'Comunicare nonverbală', corect: false, explicatie: 'Nonverbală înseamnă fără cuvinte, prin gesturi și mimică.' },
                { text: 'Comunicare paraverbală', corect: false, explicatie: 'Paraverbală ține de intonație și ritm, nu de cuvinte în sine.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 22 (Repere)',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-8/schema.svg', titlu: 'Comunicare verbală, nonverbală, paraverbală' },
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Propoziția. Tipuri de propoziții',
      obiective: [
        'Definește propoziția și clasifică propozițiile după alcătuire și după aspectul predicatului.',
      ],
      sursaManual: 'Art 5, pp. 24-25; Ghid, pp. 78-79',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Propoziția. Tipuri de propoziții',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Definește propoziția și clasifică propozițiile după alcătuire și după aspectul predicatului.',
        ],
        resurse: [
          'Manual Art 5, pp. 24-25',
          'Schema „Tipurile de propoziție” (/materiale/clasa-5/unitatea-1/lectia-9/schema.svg)',
          'Quizul „Subiectul și predicatul” (materialul de joc al lecției)',
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
            activitate: 'Le cer elevilor un exemplu de propoziție scurtă din propria experiență și o scriu pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că definim propoziția și învățăm să o clasificăm după alcătuire și după predicat.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reactualizez, cu exemple, ce sunt subiectul și predicatul, noțiuni din clasa a IV-a.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic propoziția simplă și dezvoltată, afirmativă și negativă, cu exemplele de la pp. 24-25, și rezolvăm împreună primele exerciții de aplicație.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Subiectul și predicatul”, apoi verificăm și corectăm împreună.',
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
          titlu: 'Subiectul și predicatul',
          pasi: [
            {
              intrebare: 'Care este predicatul din propoziția „Mihai desenează un peisaj.”?',
              variante: [
                { text: 'desenează', corect: true, explicatie: 'Predicatul este partea principală de propoziție care arată ce face subiectul.' },
                { text: 'Mihai', corect: false, explicatie: 'Mihai este subiectul, arată cine face acțiunea.' },
                { text: 'peisaj', corect: false, explicatie: 'Peisaj este parte secundară de propoziție, nu predicat.' },
              ],
              indiciu: 'Predicatul arată ce face subiectul.',
              sursa: 'Manual Art 5, pp. 24-25 (Repere)',
            },
            {
              intrebare: 'Propoziția „Ana citește o carte interesantă.” este simplă sau dezvoltată?',
              variante: [
                { text: 'Dezvoltată', corect: true, explicatie: 'Conține și părți secundare de propoziție, nu doar subiect și predicat.' },
                { text: 'Simplă', corect: false, explicatie: 'Propoziția simplă e alcătuită doar din subiect și predicat.' },
              ],
              indiciu: 'Numără dacă propoziția are și alte cuvinte în afară de subiect și predicat.',
              sursa: 'Manual Art 5, pp. 24-25 (Repere)',
            },
            {
              intrebare: 'Care este varianta corectă, negativă, a propoziției „Copiii aleargă în parc.”?',
              variante: [
                { text: 'Copiii nu aleargă în parc.', corect: true, explicatie: 'Propoziția negativă are verbul cu rol de predicat la forma negativă.' },
                { text: 'Copiii nu au alergat parc.', corect: false, explicatie: 'Forma verbului nu respectă negația corectă a predicatului.' },
                { text: 'Copiii aleargă nu în parc.', corect: false, explicatie: 'Negația trebuie să însoțească verbul cu rol de predicat, nu alt cuvânt.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 24-25 (Repere)',
            },
            {
              intrebare: 'Ce parte de propoziție arată cine face acțiunea exprimată de predicat?',
              variante: [
                { text: 'Subiectul', corect: true, explicatie: 'Subiectul este partea principală de propoziție care arată cine face acțiunea.' },
                { text: 'Predicatul', corect: false, explicatie: 'Predicatul arată ce face subiectul, nu cine face acțiunea.' },
                { text: 'O parte secundară', corect: false, explicatie: 'Părțile secundare doar îmbogățesc sensul propoziției.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 24-25 (Repere)',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-9/schema.svg', titlu: 'Tipurile de propoziție' },
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Cuvântul și dicționarul',
      obiective: [
        'Explică rolul dicționarului și structura unui articol de dicționar, ordonarea alfabetică a cuvintelor.',
      ],
      sursaManual: 'Art 5, pp. 26-27; Ghid, pp. 79-80',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cuvântul și dicționarul',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Explică rolul dicționarului și structura unui articol de dicționar, ordonarea alfabetică a cuvintelor.',
        ],
        resurse: [
          'Manual Art 5, pp. 26-27',
          'Schema „Cuvântul și dicționarul” (/materiale/clasa-5/unitatea-1/lectia-10/schema.svg)',
          'Quizul cu același titlu (materialul de joc al lecției)',
          'Un dicționar tipărit',
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
            activitate: 'Le arăt elevilor un dicționar tipărit și îi întreb când l-au folosit ultima dată și pentru ce.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm cum e alcătuit un articol de dicționar și cum se caută repede un cuvânt.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm ordinea alfabetică și facem un scurt exercițiu de ordonare a unor cuvinte care încep cu aceeași literă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic structura articolului de dicționar, sensul și forma cuvântului, cu exemplele de la pp. 26-27, apoi căutăm împreună câteva cuvinte în dicționar.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Cuvântul și dicționarul”, apoi discutăm răspunsurile.',
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
          titlu: 'Cuvântul și dicționarul',
          pasi: [
            {
              intrebare: 'Care dintre aceste cuvinte vine primul în ordine alfabetică: prieten, penar, planetă, pauză?',
              variante: [
                { text: 'pauză', corect: true, explicatie: 'La cuvinte care încep la fel cu „p”, ordinea se stabilește după prima literă interioară diferită: pa- vine înaintea lui pe-, pl-, pr-.' },
                { text: 'penar', corect: false, explicatie: 'pe- vine după pa-, deci penar nu e primul.' },
                { text: 'prieten', corect: false, explicatie: 'pr- vine ultimul dintre cele patru, alfabetic.' },
              ],
              indiciu: 'Compară litera de după „p” la fiecare cuvânt.',
              sursa: 'Manual Art 5, pp. 26-27 (Repere)',
            },
            {
              intrebare: 'Cum se numește lucrarea de referință în care sunt explicate sensurile cuvintelor din limba română, prescurtată DEX?',
              variante: [
                { text: 'Dicționarul explicativ al limbii române', corect: true, explicatie: 'DEX este prescurtarea de la Dicționarul explicativ al limbii române.' },
                { text: 'Dicționarul ortografic, ortoepic și morfologic', corect: false, explicatie: 'Acesta e DOOM, arată pronunția și scrierea corectă, nu explică sensurile.' },
                { text: 'Dicționarul de sinonime', corect: false, explicatie: 'Un dicționar de sinonime oferă alt tip de informație, nu definiții complete.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 26-27 (Repere)',
            },
            {
              intrebare: 'Un cuvânt are sens sau înțeles, reprezentând conținutul, și...?',
              variante: [
                { text: 'sunete, reprezentând forma', corect: true, explicatie: 'Cuvântul are sens (conținut) și sunete sau înveliș sonor (formă).' },
                { text: 'un articol de dicționar propriu', corect: false, explicatie: 'Articolul de dicționar descrie cuvântul, nu face parte din structura lui.' },
                { text: 'o singură silabă, mereu', corect: false, explicatie: 'Cuvintele pot avea una, două sau mai multe silabe.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 26-27 (Repere)',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-10/schema.svg', titlu: 'Cuvântul și dicționarul' },
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Sinonimele. Antonimele',
      obiective: [
        'Identifică sinonime și antonime și le folosește adecvat contextului.',
      ],
      sursaManual: 'Art 5, pp. 28-29; Ghid, pp. 80-81',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Sinonimele. Antonimele',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Identifică sinonime și antonime și le folosește adecvat contextului.',
        ],
        resurse: [
          'Manual Art 5, pp. 28-29',
          'Schema „Sinonimele. Antonimele” (/materiale/clasa-5/unitatea-1/lectia-11/schema.svg)',
          'Quizul „Sinonime și antonime” (materialul de joc al lecției)',
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
            activitate: 'Spun un cuvânt și cer în lanț, de la fiecare elev, un sinonim sau un antonim pentru el.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm ce sunt sinonimele și antonimele și cum le alegem potrivit contextului.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm noțiunea de sens al cuvântului, discutată la lecția despre dicționar.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definesc sinonimele și antonimele, cu exemplele de la pp. 28-29, și lucrăm împreună primele exerciții, insistând pe alegerea potrivită contextului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Sinonime și antonime”, apoi corectăm împreună.',
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
          titlu: 'Sinonime și antonime',
          pasi: [
            {
              intrebare: 'Care este sinonimul cuvântului „vesel”?',
              variante: [
                { text: 'bucuros', corect: true, explicatie: 'Sinonimele sunt cuvinte cu formă diferită și sens asemănător sau identic.' },
                { text: 'trist', corect: false, explicatie: 'Trist e antonimul, nu sinonimul lui vesel.' },
                { text: 'obosit', corect: false, explicatie: 'Obosit nu are legătură de sens cu vesel.' },
              ],
              indiciu: 'Caută un cuvânt cu sens asemănător, nu opus.',
              sursa: 'Manual Art 5, pp. 28-29 (Repere)',
            },
            {
              intrebare: 'Care este antonimul cuvântului „harnic”?',
              variante: [
                { text: 'leneș', corect: true, explicatie: 'Antonimele sunt cuvinte cu formă diferită și sens opus.' },
                { text: 'priceput', corect: false, explicatie: 'Priceput nu e opus lui harnic, poate fi chiar apropiat ca sens.' },
                { text: 'silitor', corect: false, explicatie: 'Silitor e mai degrabă sinonim, nu antonim, cu harnic.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 28-29 (Repere)',
            },
            {
              intrebare: 'Pentru ca două cuvinte să fie sinonime, ele trebuie să fie...',
              variante: [
                { text: 'aceeași parte de vorbire', corect: true, explicatie: 'Sinonimele trebuie să fie aceeași parte de vorbire, chiar dacă au formă diferită.' },
                { text: 'formate din același număr de silabe', corect: false, explicatie: 'Numărul de silabe nu contează pentru sinonimie.' },
                { text: 'scrise cu aceeași literă inițială', corect: false, explicatie: 'Litera inițială nu are legătură cu sensul cuvintelor.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 28-29 (Repere)',
            },
            {
              intrebare: 'Cuvintele „a coborî” și „a urca” sunt...',
              variante: [
                { text: 'antonime', corect: true, explicatie: 'Au formă diferită și sens complet opus, deci sunt antonime.' },
                { text: 'sinonime', corect: false, explicatie: 'Sinonimele au sens asemănător, nu opus.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 28-29 (Repere)',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-11/schema.svg', titlu: 'Sinonimele. Antonimele' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Câmpul lexical',
      obiective: [
        'Definește câmpul lexical și grupează termeni după trăsături de sens comune.',
      ],
      sursaManual: 'Art 5, pp. 30-31; Ghid, p. 82',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Câmpul lexical',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Definește câmpul lexical și grupează termeni după trăsături de sens comune.',
        ],
        resurse: [
          'Manual Art 5, pp. 30-31',
          'Schema „Câmpul lexical, exemplu” (/materiale/clasa-5/unitatea-1/lectia-12/schema.svg)',
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
            activitate: 'Le cer elevilor să spună cât mai multe cuvinte legate de un subiect dat, de exemplu școala, și le grupez pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm ce este câmpul lexical și cum grupăm cuvintele după sens.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm sinonimele și legăturile de sens dintre cuvinte, discutate ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției definesc câmpul lexical, cu exemplele de la pp. 30-31, și construim împreună câmpul lexical al unui cuvânt propus de elevi.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev grupează în caiet o listă de cuvinte date pe două sau trei câmpuri lexicale și le denumește.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea grupării pe câmpuri lexicale.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Câmpul lexical',
          pasi: [
            {
              intrebare: 'Ce este un câmp lexical?',
              variante: [
                {
                  text: 'Un grup de cuvinte legate între ele prin aceeași idee sau prin trăsături de sens comune',
                  corect: true,
                  explicatie: 'Cuvintele câmpului lexical trimit toate spre același domeniu.',
                },
                {
                  text: 'Un grup de cuvinte care încep cu aceeași literă',
                  corect: false,
                  explicatie: 'Litera inițială nu are nicio legătură cu sensul.',
                },
                {
                  text: 'Un grup de cuvinte cu același număr de silabe',
                  corect: false,
                  explicatie: 'Numărul de silabe ține de formă, nu de sens.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 30-31',
            },
            {
              intrebare: 'Care cuvânt NU face parte din câmpul lexical al școlii?',
              variante: [
                {
                  text: 'ancoră',
                  corect: true,
                  explicatie: 'Ancora ține de câmpul lexical al navigației, nu al școlii.',
                },
                {
                  text: 'catalog',
                  corect: false,
                  explicatie: 'Catalogul aparține clar câmpului lexical al școlii.',
                },
                {
                  text: 'recreație',
                  corect: false,
                  explicatie: 'Recreația e un termen din viața școlară.',
                },
              ],
              indiciu: 'Caută cuvântul care te duce cu gândul în alt loc.',
              sursa: 'Manual Art 5, pp. 30-31',
            },
            {
              intrebare: 'Cuvintele „ploaie, nor, fulger, ninsoare, vânt” alcătuiesc câmpul lexical al...',
              variante: [
                {
                  text: 'fenomenelor naturii',
                  corect: true,
                  explicatie: 'Toate cinci numesc fenomene ale vremii, deci aceeași idee comună.',
                },
                {
                  text: 'relațiilor de rudenie',
                  corect: false,
                  explicatie: 'Relațiile de rudenie ar fi mamă, tată, bunic.',
                },
                {
                  text: 'obiectelor de scris',
                  corect: false,
                  explicatie: 'Obiectele de scris ar fi creion, stilou, caiet.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 30-31',
            },
            {
              intrebare: 'Poate un cuvânt să facă parte din două câmpuri lexicale diferite?',
              variante: [
                {
                  text: 'Da, dacă are mai multe sensuri sau dacă se potrivește în două domenii',
                  corect: true,
                  explicatie: 'De exemplu, „broască” intră și în câmpul animalelor, și în cel al obiectelor de la ușă.',
                },
                {
                  text: 'Nu, fiecare cuvânt aparține unui singur câmp lexical',
                  corect: false,
                  explicatie: 'Multe cuvinte se potrivesc în mai multe câmpuri, după sens și context.',
                },
                {
                  text: 'Doar dacă e substantiv propriu',
                  corect: false,
                  explicatie: 'Nu are legătură cu felul substantivului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 30-31',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-12/schema.svg', titlu: 'Câmpul lexical, exemplu' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Tipurile de sunete',
      obiective: [
        'Diferențiază vocalele, consoanele și semivocalele, corespondența sunet-literă.',
      ],
      sursaManual: 'Art 5, pp. 32-33; Ghid, pp. 82-84',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Tipurile de sunete',
        data: null,
        tipOra: 'Predare, fonetică',
        durata: 50,
        obiective: [
          'Diferențiază vocalele, consoanele și semivocalele, corespondența sunet-literă.',
        ],
        resurse: [
          'Manual Art 5, pp. 32-33',
          'Schema „Vocale, consoane, semivocale” (/materiale/clasa-5/unitatea-1/lectia-13/schema.svg)',
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
            activitate: 'Le cer elevilor să pronunțe rar câteva cuvinte și să observe ce sunete se aud și cum se formează.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să deosebim vocalele, consoanele și semivocalele și legătura dintre sunet și literă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintesc vocalele și consoanele învățate în ciclul primar și alfabetul limbii române.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției definesc vocalele, consoanele și semivocalele, discut corespondența sunet-literă și excepțiile, cu exemplele de la pp. 32-33.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev clasifică în caiet sunetele din trei cuvinte date, marcând vocalele, consoanele și semivocalele.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea clasificării sunetelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Vocale, consoane, semivocale',
          pasi: [
            {
              intrebare: 'Ce este o vocală?',
              variante: [
                {
                  text: 'Un sunet care se poate rosti singur și poate forma singur o silabă',
                  corect: true,
                  explicatie: 'În limba română, vocalele sunt a, ă, â, e, i, î, o, u.',
                },
                {
                  text: 'Un sunet care are nevoie de alt sunet ca să fie rostit',
                  corect: false,
                  explicatie: 'Aceasta e definiția consoanei.',
                },
                {
                  text: 'Orice literă scrisă cu majusculă',
                  corect: false,
                  explicatie: 'Majuscula ține de scriere, nu de felul sunetului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 32-33',
            },
            {
              intrebare: 'Câte vocale are limba română?',
              variante: [
                {
                  text: 'Șapte: a, ă, â, e, i, î, o, u, dintre care â și î notează același sunet',
                  corect: true,
                  explicatie: 'Sunt opt litere, dar â și î redau același sunet, deci șapte vocale.',
                },
                {
                  text: 'Cinci, ca în alte limbi',
                  corect: false,
                  explicatie: 'Cinci vocale au alte limbi, nu româna.',
                },
                {
                  text: 'Zece',
                  corect: false,
                  explicatie: 'Zece e prea mult; se confundă probabil cu numărul de litere-vocale plus semivocale.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 32-33',
            },
            {
              intrebare: 'Ce este o semivocală?',
              variante: [
                {
                  text: 'Un sunet care seamănă cu o vocală, dar nu poate forma singur o silabă',
                  corect: true,
                  explicatie: 'Semivocalele stau alături de o vocală, în aceeași silabă.',
                },
                {
                  text: 'O vocală rostită pe jumătate de timp',
                  corect: false,
                  explicatie: 'Nu e vorba de durată, ci de rolul în silabă.',
                },
                {
                  text: 'O consoană scrisă cu două litere',
                  corect: false,
                  explicatie: 'Nu are legătură cu felul cum se scrie.',
                },
              ],
              indiciu: 'Gândește-te la „i” din „iarnă”: se aude, dar nu ține singur o silabă.',
              sursa: 'Manual Art 5, pp. 32-33',
            },
            {
              intrebare: 'În cuvântul „carte”, ce fel de sunete sunt c, r, t?',
              variante: [
                {
                  text: 'consoane',
                  corect: true,
                  explicatie: 'Consoanele nu pot fi rostite singure, au nevoie de o vocală alături.',
                },
                {
                  text: 'vocale',
                  corect: false,
                  explicatie: 'Vocalele din „carte” sunt a și e.',
                },
                {
                  text: 'semivocale',
                  corect: false,
                  explicatie: 'În „carte” nu apare nicio semivocală.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 32-33',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-13/schema.svg', titlu: 'Vocale, consoane, semivocale' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Silaba. Accentul',
      obiective: [
        'Desparte cuvintele în silabe și identifică accentul corect, conform DOOM3.',
      ],
      sursaManual: 'Art 5, pp. 34-35; Ghid, pp. 42, 84-85',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Silaba. Accentul',
        data: null,
        tipOra: 'Predare, fonetică',
        durata: 50,
        obiective: [
          'Desparte cuvintele în silabe și identifică accentul corect, conform DOOM3.',
        ],
        resurse: [
          'Manual Art 5, pp. 34-35',
          'Schema „Silaba. Accentul” (/materiale/clasa-5/unitatea-1/lectia-14/schema.svg)',
          'Quizul „Silaba și accentul” (materialul de joc al lecției)',
          'DOOM3',
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
            activitate: 'Le cer elevilor să bată din palme silabele numelor lor și ale unor cuvinte date.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să despărțim corect cuvintele în silabe și să recunoaștem silaba accentuată, folosind DOOM3.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm tipurile de sunete din lecția precedentă, fiindcă despărțirea în silabe pornește de la vocale.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic regula silabei și rolul accentului, arăt cum se folosește DOOM3, cu exemplele de la pp. 34-35, și rezolvăm împreună primele aplicații.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Silaba și accentul”, apoi corectăm împreună răspunsurile.',
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
          titlu: 'Silaba și accentul',
          pasi: [
            {
              intrebare: 'În câte silabe se desparte cuvântul „compunere”?',
              variante: [
                { text: '4 silabe: com-pu-ne-re', corect: true, explicatie: 'Fiecare silabă conține o singură vocală: com, pu, ne, re.' },
                { text: '3 silabe: com-pune-re', corect: false, explicatie: 'Silaba „pune” ar conține două vocale, ceea ce nu e corect.' },
                { text: '5 silabe: co-m-pu-ne-re', corect: false, explicatie: 'Consoana „m” nu poate forma singură o silabă.' },
              ],
              indiciu: 'O silabă conține o singură vocală.',
              sursa: 'Manual Art 5, pp. 34-35 (Repere)',
            },
            {
              intrebare: 'Ce reprezintă accentul într-un cuvânt?',
              variante: [
                { text: 'Pronunțarea mai intensă a unei silabe', corect: true, explicatie: 'Accentul reprezintă pronunțarea mai intensă a unei silabe dintr-un cuvânt.' },
                { text: 'Numărul de litere dintr-un cuvânt', corect: false, explicatie: 'Numărul de litere nu are legătură cu accentul.' },
                { text: 'Despărțirea cuvântului la capăt de rând', corect: false, explicatie: 'Aceea e despărțirea în silabe, nu accentul.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 34 (Repere)',
            },
            {
              intrebare: 'Cuvintele „ácele” (obiecte de cusut) și „acéle” (acele fete) au sens diferit din cauza...',
              variante: [
                { text: 'poziției accentului', corect: true, explicatie: 'Accentul poate diferenția sensul cuvintelor scrise la fel, ca în exemplul ácele și acéle.' },
                { text: 'numărului de silabe', corect: false, explicatie: 'Ambele cuvinte au același număr de silabe.' },
                { text: 'unei litere diferite', corect: false, explicatie: 'Cuvintele sunt scrise identic, doar accentul diferă.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 34 (Repere)',
            },
            {
              intrebare: 'Cum se numește lucrarea normativă care arată accentuarea corectă a cuvintelor din limba română?',
              variante: [
                { text: 'DOOM3', corect: true, explicatie: 'DOOM3, ediția a treia a Dicționarului ortografic, ortoepic și morfologic, apărută în 2021, marchează accentul corect.' },
                { text: 'DEX', corect: false, explicatie: 'DEX explică sensurile cuvintelor, nu accentuarea lor.' },
                { text: 'Ghidul profesorului', corect: false, explicatie: 'Ghidul profesorului nu e o lucrare normativă pentru limba română.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 35 (Repere)',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-14/schema.svg', titlu: 'Silaba. Accentul' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Etapele scrierii, pregătirea pentru redactare',
      obiective: [
        'Cunoaște și aplică primele etape ale scrierii unui text, pregătirea pentru redactare.',
      ],
      sursaManual: 'Art 5, p. 36; Ghid, pp. 42, 86-88. Ghidul tratează „Etapele scrierii” ca un bloc unic de 2 ore, fără să-l despartă pe pagini; împărțirea de aici, ora 1 = p. 36, e organizare proprie, după conținutul real al paginii.',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Etapele scrierii, pregătirea pentru redactare',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Cunoaște și aplică primele etape ale scrierii unui text, pregătirea pentru redactare.',
        ],
        resurse: [
          'Manual Art 5, p. 36',
          'Infograficul „Cele cinci etape ale scrierii” (/materiale/clasa-5/unitatea-1/lectia-15/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi ce fac ei de obicei înainte să înceapă o compunere și notez pașii pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm etapele scrierii unui text și exersăm pregătirea pentru redactare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm planul simplu de idei învățat la începutul unității, fiindcă e un instrument de pregătire a textului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul infograficului prezint cele cinci etape ale scrierii, apoi ne oprim asupra pregătirii: alegerea subiectului, publicul, cele șase întrebări, planul compunerii, cu exemplele de la p. 36.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Fiecare elev alege un subiect pentru tema viitoare și notează planul de pregătire: subiect, public, trei idei de pornire.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea planului de pregătire a redactării.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Etapele scrierii',
          pasi: [
            {
              intrebare: 'Care este ordinea corectă a etapelor scrierii?',
              variante: [
                {
                  text: 'Pregătirea, ciorna, revizuirea, editarea, publicarea',
                  corect: true,
                  explicatie: 'Fiecare etapă pregătește terenul pentru următoarea.',
                },
                {
                  text: 'Publicarea, ciorna, pregătirea, revizuirea',
                  corect: false,
                  explicatie: 'Publicarea e ultima etapă, nu prima.',
                },
                {
                  text: 'Editarea, revizuirea, pregătirea, ciorna',
                  corect: false,
                  explicatie: 'Ordinea e răsturnată; pregătirea vine întotdeauna prima.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 36',
            },
            {
              intrebare: 'Ce faci în etapa de pregătire, înainte să scrii primul rând?',
              variante: [
                {
                  text: 'Aleg subiectul, mă gândesc cui scriu și îmi fac un plan',
                  corect: true,
                  explicatie: 'Pregătirea înseamnă tot ce se întâmplă înainte de prima frază.',
                },
                {
                  text: 'Corectez greșelile de ortografie',
                  corect: false,
                  explicatie: 'Corectarea vine la editare, la finalul procesului.',
                },
                {
                  text: 'Citesc textul în fața clasei',
                  corect: false,
                  explicatie: 'Aceea e publicarea, ultima etapă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 36',
            },
            {
              intrebare: 'De ce se numește „ciornă” prima variantă a textului?',
              variante: [
                {
                  text: 'Pentru că e o variantă de lucru, pe care am voie să o schimb oricât',
                  corect: true,
                  explicatie: 'Ciorna nu trebuie să fie perfectă; tocmai de aceea urmează revizuirea.',
                },
                {
                  text: 'Pentru că trebuie scrisă neîngrijit',
                  corect: false,
                  explicatie: 'Ciorna poate fi îngrijită; important e că se poate modifica.',
                },
                {
                  text: 'Pentru că se aruncă imediat',
                  corect: false,
                  explicatie: 'Ciorna se păstrează, e baza variantei finale.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 36',
            },
            {
              intrebare: 'La ce ajută cele șase întrebări, cine, ce, unde, când, cum, de ce, în etapa de pregătire?',
              variante: [
                {
                  text: 'Mă ajută să adun ideile și să nu uit nimic important din întâmplare',
                  corect: true,
                  explicatie: 'Răspunsurile la ele devin scheletul textului.',
                },
                {
                  text: 'Mă ajută să număr cuvintele',
                  corect: false,
                  explicatie: 'Nu au legătură cu lungimea textului.',
                },
                {
                  text: 'Mă ajută să aleg culoarea copertei',
                  corect: false,
                  explicatie: 'Nu privesc aspectul, ci conținutul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 36',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-1/lectia-15/infografic.svg', titlu: 'Cele cinci etape ale scrierii' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Redactarea și revizuirea textului',
      obiective: [
        'Redactează și revizuiește un text de relatare a unei experiențe personale, respectând structura introducere-cuprins-încheiere.',
      ],
      sursaManual: 'Art 5, p. 37; Ghid, pp. 42, 86-88. Aceeași notă ca la lecția 15, ora 2 = p. 37, organizare proprie, nu segmentare din ghid.',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Redactarea și revizuirea textului',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează și revizuiește un text de relatare a unei experiențe personale, respectând structura introducere-cuprins-încheiere.',
        ],
        resurse: [
          'Manual Art 5, p. 37',
          'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-16/fisa.pdf)',
          'Planul realizat la ora anterioară',
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
            activitate: 'Le cer elevilor să recitească planul notat ora trecută și să spună de la ce idee vor porni.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi scriem textul de relatare a unei experiențe personale și învățăm să îl revizuim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm etapele scrierii și structura introducere-cuprins-încheiere, discutate ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '19 min',
            activitate: 'Cu ajutorul fișei lecției și a exemplelor de la p. 37, arăt cum se construiește fiecare parte a textului și ce urmărim la revizuire.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '18 min',
            activitate: 'Fiecare elev redactează textul pe baza planului, apoi îl schimbă cu colegul de bancă pentru o revizuire reciprocă după lista de control din fișă.',
          },
        ],
        evaluare: 'Grilă de autoevaluare din fișă; observarea sistematică a redactării și a revizuirii reciproce.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-1/lectia-16/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-1/lectia-16/schema.svg',
          titlu: 'Scriu, apoi îmi recitesc textul',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Recapitulare, citire și comprehensiune',
      obiective: [
        'Recapitulează strategii de citire și comprehensiune pe un text narativ nou: delimitare în fragmente, temă, idei principale.',
      ],
      sursaManual: 'Art 5, pp. 38-39, ex. 1-9; Ghid, pp. 42, 88-89. Ghidul tratează Recapitularea ca un bloc unic de 2 ore, cu un singur barem pentru toate exercițiile 1-20; împărțirea de aici, ora 1 = citire și comprehensiune, e organizare proprie, după conținut, nu după pagină (pagina 38 are un singur exercițiu, restul comprehensiunii e pe p. 39).',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, citire și comprehensiune',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează strategii de citire și comprehensiune pe un text narativ nou: delimitare în fragmente, temă, idei principale.',
        ],
        resurse: [
          'Manual Art 5, pp. 38-39, ex. 1-9',
          'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-17/fisa.pdf)',
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
            activitate: 'Anunț că ora e o recapitulare pe un text nou și îi întreb pe elevi ce pași fac de obicei când citesc un text necunoscut.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm delimitarea textului în fragmente, tema și ideile principale, lucrând pe un text narativ nou.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, prin întrebări, cuvântul-cheie, ideea principală, tema și planul simplu de idei, noțiuni din prima parte a unității.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Citim textul-suport, îl delimităm împreună în fragmente și rezolvăm ghidat exercițiile 1-9 din fișa lecției, pp. 38-39.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Fiecare elev formulează în scris tema textului și două idei principale, apoi verificăm împreună.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea temei și a ideilor principale formulate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-1/lectia-17/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-1/lectia-17/schema.svg',
          titlu: 'Cinci pași pentru un text citit prima dată',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Recapitulare, gramatică, vocabular și redactare',
      obiective: [
        'Recapitulează noțiuni de gramatică și vocabular din unitate și redactează un text integrator, respectând etapele scrierii.',
      ],
      sursaManual: 'Art 5, p. 39, ex. 10-20; Ghid, pp. 42, 88-89. Aceeași notă ca la lecția 17, ora 2 = gramatică, vocabular, redactare, organizare proprie, nu segmentare din ghid.',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică, vocabular și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează noțiuni de gramatică și vocabular din unitate și redactează un text integrator, respectând etapele scrierii.',
        ],
        resurse: [
          'Manual Art 5, p. 39, ex. 10-20',
          'Quizul „Recapitulare, gramatică și vocabular” (materialul de joc al lecției)',
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
            activitate: 'Le propun elevilor să enumere pe rând toate noțiunile de limbă învățate în unitate, câte una de fiecare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm gramatica și vocabularul unității și scriem un text scurt care le folosește pe toate.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple la tablă, propoziția și tipurile ei, sinonimele, antonimele, câmpul lexical, sunetele și silaba.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile 10-20 de la p. 39 și stabilim împreună cerințele textului integrator.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și vocabular”, apoi cei care termină încep redactarea textului integrator, respectând etapele scrierii.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz; textul integrator, evaluat la ora următoare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și vocabular',
          pasi: [
            {
              intrebare: 'Care este predicatul din propoziția „Copiii au desenat un peisaj frumos.”?',
              variante: [
                { text: 'au desenat', corect: true, explicatie: 'Predicatul e partea principală de propoziție care arată ce face subiectul.' },
                { text: 'Copiii', corect: false, explicatie: 'Copiii e subiectul, arată cine face acțiunea.' },
                { text: 'peisaj', corect: false, explicatie: 'Peisaj e parte secundară de propoziție, nu predicat.' },
              ],
              indiciu: 'Caută cuvântul care arată ce fac copiii.',
              sursa: 'Manual Art 5, pp. 24-25 (Repere)',
            },
            {
              intrebare: 'Ce sunt cuvintele „vesel” și „trist” unul față de celălalt?',
              variante: [
                { text: 'Antonime', corect: true, explicatie: 'Au formă diferită și sens complet opus, deci sunt antonime.' },
                { text: 'Sinonime', corect: false, explicatie: 'Sinonimele au sens asemănător, nu opus.' },
                { text: 'Din același câmp lexical, dar fără legătură de sens', corect: false, explicatie: 'Fac parte din câmpul lexical al emoțiilor, dar mai exact sunt antonime, nu doar cuvinte fără legătură.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 28-29 (Repere)',
            },
            {
              intrebare: 'Cuvintele mamă, tată, bunic, frate, soră fac parte din câmpul lexical al...',
              variante: [
                { text: 'relațiilor de rudenie', corect: true, explicatie: 'Toate aceste cuvinte se raportează la aceeași idee, familia, deci aparțin câmpului lexical al relațiilor de rudenie.' },
                { text: 'emoțiilor', corect: false, explicatie: 'Aceste cuvinte numesc persoane din familie, nu emoții.' },
                { text: 'școlii', corect: false, explicatie: 'Cuvintele nu au legătură cu școala, ci cu familia.' },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 30-31 (Repere)',
            },
            {
              intrebare: 'Câte silabe are cuvântul „emoție”?',
              variante: [
                { text: '4: e-mo-ți-e', corect: true, explicatie: 'Fiecare silabă conține o singură vocală: e, mo, ți, e.' },
                { text: '3: e-moți-e', corect: false, explicatie: 'Silaba „moți” ar conține două vocale, ceea ce nu e corect.' },
                { text: '5: e-mo-ți-i-e', corect: false, explicatie: 'Cuvântul nu are atât de multe silabe.' },
              ],
              indiciu: 'O silabă conține o singură vocală.',
              sursa: 'Manual Art 5, pp. 34-35 (Repere)',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-1/lectia-18/schema.svg',
          titlu: 'Tot ce am învățat despre limbă în Unitatea I',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Demonstrează, într-o probă scrisă, competențele dobândite în unitate: vocabular, gramatică, comprehensiune, redactare.',
      ],
      sursaManual: 'Art 5, p. 40; Ghid, pp. 42, 89 (barem complet)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Demonstrează, într-o probă scrisă, competențele dobândite în unitate: vocabular, gramatică, comprehensiune, redactare.',
        ],
        resurse: [
          'Testul tipărit, Manual Art 5, p. 40',
          'Barem de corectare, Ghid, p. 89',
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
            activitate: 'Anunț că se dă proba scrisă a unității, care verifică vocabularul, gramatica, comprehensiunea și redactarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc pe scurt structura probei și cum se gestionează timpul între partea de comprehensiune și cea de redactare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele de la p. 40, citesc cerințele cu voce tare, explic punctajul, 60 de puncte partea A, 30 partea B, 10 din oficiu, și răspund la întrebările de clarificare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '35 min',
            activitate: 'Elevii rezolvă individual proba scrisă; supraveghez discret, gestionez timpul și strâng lucrările la final.',
          },
        ],
        evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghid, p. 89.',
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
