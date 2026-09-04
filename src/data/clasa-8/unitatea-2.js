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
            activitate: 'Îi întreb pe elevi dacă au prieteni foarte diferiți de ei și ce anume îi ține totuși împreună.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că deschidem unitatea despre ceilalți cu un fragment din comedia Take, Ianke și Cadâr de Victor Ion Popa.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ce știu din clasele anterioare despre textul dramatic și despre spectacolul de teatru.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citim fragmentul pe roluri, clarific cuvintele de epocă și regionalismele și urmărim relația dintre cei trei negustori de etnii diferite, cu exemplele de la pp. 52-57.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează două impresii de lectură și un detaliu care i-a plăcut, apoi câțiva le citesc.',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii pe roluri; verificarea impresiilor de lectură.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-2/fisa.pdf)',
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
            activitate: 'Le arăt o replică însoțită de indicație scenică și îi întreb pe elevi cui se adresează fiecare parte, actorului sau publicului.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vedem cum e construit un text dramatic: actul, scena, replica, indicațiile scenice.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm impresiile de lectură de ora trecută și deosebirea dintre textul dramatic, cel epic și cel liric.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției identificăm actele, scenele, lista personajelor, replicile și indicațiile scenice și discutăm rolul fiecăreia, cu exemplele de la pp. 58-59.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev marchează într-un fragment dat replicile și indicațiile scenice și explică ce aduce în plus fiecare indicație.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea marcării structurilor textuale.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-2/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-3/fisa.pdf)',
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
            activitate: 'Le cer elevilor să descrie într-un cuvânt pe fiecare dintre cei trei negustori, așa cum și-i amintesc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi așezăm acțiunea în timp și spațiu și caracterizăm personajele după fapte și vorbe.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm structurile textului dramatic din lecția precedentă și noțiunea de trăsătură morală, din clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției completăm schema evenimențială a fragmentului și identificăm trăsăturile morale ale personajelor, cu dovezi din replici, cu exemplele de la pp. 60-61.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează o fișă de caracterizare pentru un personaj, cu două trăsături și replica ce o dovedește.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea schemei evenimențiale și a fișei de caracterizare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-3/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-4/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi dacă cearta dintre cei trei e una adevărată sau un fel de a-și arăta apropierea.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm ce ne spune piesa despre convieţuirea unor oameni foarte diferiți și ne formulăm o părere.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm trăsăturile personajelor stabilite ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Cu ajutorul fișei lecției ghidez discuția despre prietenia dintre etnii diferite și despre umorul care ascunde afecțiune, cerând argumente din text, cu exemplele de la pp. 63-64.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev scrie o opinie de câteva rânduri despre mesajul piesei, sprijinită pe o replică anume.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea opiniei scrise și a argumentului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-4/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-5/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce citesc înainte să aleagă un film și dacă părerile altora le schimbă decizia.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi citim o cronică de spectacol și vedem cui se adresează, ce urmărește și cum e construită.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm deosebirea dintre textul literar și cel nonliterar și ce știm despre piesa comentată în cronică.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției identificăm scopul, destinatarul și părțile cronicii, prezentarea, analiza, opinia argumentată, și observăm gradul mare de subiectivitate, cu exemplele de la pp. 65-67.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev extrage din cronică o afirmație obiectivă și una subiectivă și explică deosebirea dintre ele.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea distincției obiectiv, subiectiv.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-5/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-6/fisa.pdf)',
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
            activitate: 'Le propun o situație: un tată are un singur inel de preț și trei fii pe care îi iubește la fel. Ce ar face fiecare dintre voi?',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim parabola celor trei inele din Nathan Înțeleptul și ne formulăm un punct de vedere argumentat.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ideea de convieţuire între oameni diferiți, discutată la piesa lui Victor Ion Popa.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Citim parabola, clarific termenii, apoi discutăm semnificația celor trei inele și pledoaria pentru toleranță, cu ajutorul fișei lecției și al exemplelor de la pp. 68-69.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev scrie un punct de vedere argumentat despre întrebarea parabolei: se poate ști care inel e cel adevărat?',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea punctului de vedere argumentat.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-6/fisa.pdf' },
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
          'Infograficul „Relații culturale constructive. Noi și ceilalți” (/materiale/clasa-8/unitatea-2/lectia-7/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi ce obiceiuri din alte culturi au întâlnit în orașul lor sau în călătorii.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi deosebim comunitatea multiculturală de cea interculturală și vedem ce înseamnă o relație culturală constructivă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm parabola celor trei inele și convieţuirea celor trei negustori, ca exemple literare de toleranță.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul infograficului separăm multicultural de intercultural, discutăm prejudecata și stereotipul și ce face o relație constructivă, cu exemplele de la pp. 70-71.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev notează un stereotip pe care l-a auzit și formulează o întrebare care l-ar putea pune la îndoială.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului despre stereotipuri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Quizul „Atitudini comunicative” (materialul de joc al lecției)',
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
            activitate: 'Le dau o situație, un coleg îți ia lucrurile fără să întrebe, și cer trei reacții diferite: tăcere, țipăt, vorbă calmă și fermă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm ce e comunicarea asertivă și o exersăm prin joc de rol.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm strategiile de ascultare activă din Unitatea I și rolurile în comunicare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu exemplele de la pp. 72-73 delimităm asertivitatea de pasivitate, agresivitate, pasivitate agresivă și manipulare, apoi elevii primesc bilețele cu situații și construiesc, în perechi, replica asertivă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Câteva perechi joacă situația în fața clasei, apoi elevii rezolvă quizul „Atitudini comunicative" și discutăm răspunsurile.',
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
          'Schema „Construcțiile active și pasive” (/materiale/clasa-8/unitatea-2/lectia-9/schema.svg)',
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
            activitate: 'Scriu pe tablă „Elevii au citit piesa" și „Piesa a fost citită de elevi" și îi întreb pe elevi ce s-a schimbat.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm construcțiile active și pasive și trecerea de la una la alta.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm subiectul, predicatul și complementul direct, noțiuni din clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției arăt cum se formează pasivul cu verbul a fi și participiul, cine devine complement de agent și cum se schimbă subiectul, cu exemplele de la pp. 74-75.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev transformă cinci enunțuri din activ în pasiv și trei din pasiv în activ, apoi verificăm împreună.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea transformărilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-9/schema.svg', titlu: 'Construcțiile active și pasive' },
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
          'Schema „Predicatul” (/materiale/clasa-8/unitatea-2/lectia-10/schema.svg)',
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
            activitate: 'Scriu „Take vinde" și „Take este negustor" și îi întreb pe elevi de ce al doilea predicat are două cuvinte.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm și adâncim predicatul verbal și predicatul nominal.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm ce este predicatul și verbele copulative învățate în clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției delimităm predicatul verbal de cel nominal, discutăm verbul copulativ și numele predicativ și capcanele lui a fi, cu exemplele de la pp. 76-77.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev identifică predicatele dintr-un fragment din piesă și precizează felul fiecăruia.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea identificării predicatelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-10/schema.svg', titlu: 'Predicatul' },
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
          'Schema „Construcțiile cu pronume reflexive” (/materiale/clasa-8/unitatea-2/lectia-11/schema.svg)',
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
            activitate: 'Scriu „se spală" și „îl spală" și îi întreb pe elevi cine face și cine primește acțiunea în fiecare caz.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm pronumele reflexiv și funcțiile sintactice ale construcțiilor cu el.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm pronumele personal și formele lui neaccentuate, din clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției identificăm formele pronumelui reflexiv, deosebim reflexivul de pronumele personal omonim și stabilim funcțiile sintactice, cu exemplele de la pp. 78-79.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev analizează cinci construcții cu pronume reflexiv, precizând cazul și funcția sintactică.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea analizei sintactice.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Construcțiile impersonale” (/materiale/clasa-8/unitatea-2/lectia-12/schema.svg)',
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
            activitate: 'Le dau enunțul „Plouă" și îi întreb pe elevi cine face acțiunea.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm verbele impersonale și construcțiile fără subiect.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm subiectul și construcțiile pasive din lecțiile anterioare ale unității.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției discutăm verbele impersonale propriu-zise și cele devenite impersonale, plus construcțiile cu se, cu exemplele de la pp. 80-81.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev transformă patru enunțuri personale în construcții impersonale și explică ce se pierde din informație.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea transformărilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Subiectul” (/materiale/clasa-8/unitatea-2/lectia-13/schema.svg)',
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
            activitate: 'Le dau trei enunțuri în care subiectul e substantiv, pronume și verb la infinitiv și îi întreb pe elevi ce au în comun.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm subiectul și vedem prin ce părți de vorbire se poate exprima.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm subiectul simplu, multiplu și acordul cu predicatul, noțiuni cunoscute.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției parcurgem felurile subiectului și părțile de vorbire prin care se exprimă, inclusiv subiectul neexprimat, cu exemplele de la pp. 82-83.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev identifică subiectele dintr-un fragment dat și precizează prin ce parte de vorbire se exprimă fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea identificării subiectelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
        schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-13/schema.svg', titlu: 'Subiectul' },
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
          'Schema „Construcțiile incidente” (/materiale/clasa-8/unitatea-2/lectia-14/schema.svg)',
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
            activitate: 'Le citesc un enunț cu o paranteză a vorbitorului, „cred că, sincer vorbind, greșești", și îi întreb ce se întâmplă dacă scot partea din mijloc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm construcțiile incidente și semnele de punctuație care le izolează.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm indicațiile scenice din textul dramatic, care funcționează asemănător, ca intervenție din afara replicii.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definim construcția incidentă, arătăm că nu are funcție sintactică și discutăm virgula, linia de pauză și parantezele, cu exemplele de la pp. 84-85.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev pune corect semnele de punctuație în cinci enunțuri cu construcții incidente și explică alegerea la două dintre ele.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea punctuației.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Fraza. Coordonarea” (/materiale/clasa-8/unitatea-2/lectia-15/schema.svg)',
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
            activitate: 'Le dau două propoziții scurte și le cer să le lege în cât mai multe feluri, apoi comparăm variantele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi analizăm fraza și relația de coordonare dintre propoziții.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm propoziția și predicatul, ca să numărăm corect propozițiile dintr-o frază.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definim fraza, delimităm propozițiile după predicate și discutăm coordonarea prin joncțiune și prin juxtapunere, cu felurile ei, cu exemplele de la pp. 86-87.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev delimitează propozițiile din trei fraze date și precizează felul coordonării.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea delimitării propozițiilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-16/fisa.pdf)',
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
            activitate: 'Le dau o frază și îi întreb pe elevi care propoziție se ține pe picioarele ei și care nu se înțelege singură.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm subordonarea, elementul regent și cuvintele care leagă subordonata de regentă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm coordonarea din lecția precedentă și delimitarea propozițiilor după predicate.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul fișei lecției definim propoziția principală și secundară, elementul regent, și inventariem conjuncțiile, locuțiunile conjuncționale și pronumele relative subordonatoare, cu exemplele de la pp. 88-89.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev analizează trei fraze, marcând principala, secundara și elementul de legătură.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea analizei frazei.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-16/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-17/fisa.pdf)',
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
            activitate: 'Le dau schimbul „Unde mergi? La școală." și îi întreb pe elevi ce lipsește din al doilea enunț și de ce se înțelege totuși.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm enunțurile eliptice și semnele de punctuație care marchează omiterea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm predicatul și subiectul, părțile care lipsesc cel mai des din enunțurile eliptice.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul fișei lecției identificăm tipurile de elipsă, verbală și nominală, în dialog și în textul scris, și discutăm virgula și linia de pauză, cu exemplele de la pp. 90-91.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev completează elipsele din patru enunțuri date și pune corect punctuația în alte trei.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiilor de elipsă și punctuație.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-17/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-18/fisa.pdf)',
          'Un scurtmetraj potrivit vârstei, ales de profesor',
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
            activitate: 'Îi întreb pe elevi ce film au recomandat ultima dată cuiva și cum l-au convins să îl vadă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că vizionăm un scurtmetraj și pregătim, pe fișă, materialul pentru o cronică de film.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm structura cronicii de spectacol, învățată mai devreme în unitate.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Vizionăm scurtmetrajul, apoi, cu fișa lecției, notăm împreună reperele cronicii: subiect fără deznodământ, joc actoricesc, imagine, sunet, impresie proprie, cu reperele de la pp. 92-93.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev completează fișa de pregătire cu observațiile proprii și formulează teza cronicii, în două rânduri.',
          },
        ],
        evaluare: 'Observarea sistematică a vizionării; verificarea fișei de pregătire.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-18/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-19/fisa.pdf)',
          'Fișa de pregătire de la ora anterioară',
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
            activitate: 'Le cer elevilor să recitească teza notată ora trecută și să spună cu ce frază ar începe cronica.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi scriem cronica, o revizuim și discutăm ce înseamnă etica redactării.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm etapele scrierii și integrarea feedbackului, învățate în Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '19 min',
            activitate: 'Cu ajutorul fișei arăt deosebirea dintre redactarea de mână și cea computerizată și insist pe etica redactării: originalitate, ghilimele și sursă pentru opiniile preluate, cu exemplele de la pp. 92-93.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Fiecare elev redactează cronica, o revizuiește în pereche și verifică pe listă respectarea eticii redactării.',
          },
        ],
        evaluare: 'Grila de evaluare din fișă; verificarea cronicii și a respectării eticii redactării.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-2/lectia-19/fisa.pdf' },
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
          'Quizul „Recapitulare, lectură” (materialul de joc al lecției)',
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
            activitate: 'Îi rog pe elevi să spună pe rând câte o noțiune de lectură învățată în unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm textul dramatic, cronica de spectacol și parabola din textul auxiliar.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm structurile textului dramatic, schema evenimențială, trăsăturile personajelor și părțile cronicii de spectacol.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Rezolvăm ghidat exercițiile de lectură de la pp. 94-95.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, lectură", apoi discutăm răspunsurile greșite.',
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
          'Quizul „Recapitulare, limbă română” (materialul de joc al lecției)',
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
            activitate: 'Le dau o frază la tablă și le cer să numere propozițiile, contra cronometru.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm construcțiile active, pasive, reflexive și impersonale, predicatul, subiectul și fraza.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple la tablă, transformarea activ, pasiv, felurile predicatului și ale subiectului, coordonarea și subordonarea.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile de limbă română de la pp. 94-95.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, limbă română", apoi cei care termină analizează încă o frază la alegere.',
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
          'Quizul „Recapitulare, comunicare orală și redactare” (materialul de joc al lecției)',
          'Cronicile de film redactate',
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
            activitate: 'Le cer elevilor să spună o replică asertivă pentru o situație pe care le-o dau pe loc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm atitudinile comunicative, cronica de film și etica redactării.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm asertivitatea și atitudinile opuse ei, structura cronicii și regulile de etică a redactării.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile de comunicare orală și redactare de la pp. 94-95.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul, apoi câțiva își prezintă oral cronica de film, iar colegii dau feedback asertiv.',
          },
        ],
        evaluare: 'Observarea sistematică a prezentărilor și a feedbackului; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
            activitate: 'Anunț că se dă proba scrisă a Unității II, care verifică lectura textului dramatic, limba română și redactarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc pe scurt structura probei și repartizarea timpului între exerciții și redactare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele de la p. 96, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
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
