// Unitatea III: Pe strada mea — clasa a V-a
// Sursă: manual Art Klett (cuprins pp. 6, 8-9, numerotare proprie L1-L12),
// proiectarea pe unități 2022-2023, planificarea calendaristică. Aceeași
// convenție ca la Unitățile I-II: o lecție de site per lecție de manual,
// cu excepția redactării și recapitulării (2 ore fiecare, despărțite în
// câte 2 lecții de site, organizare proprie) și a lecției 10 (Posibilități
// combinatorii ale substantivului. Prepoziția), care are 2 ore explicit în
// proiectare.
//
// Proiectul de grup „În așteptarea Crăciunului” a fost anunțat administrativ
// la finalul proiectării Unității II, dar se execută integral aici (Unitatea
// III), unde manualul îl plasează la secțiunea Interculturalitate — de aceea
// anunțarea apare ca prima lecție a acestei unități, nu ca ultima a Unității II.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx. Planurile ERR mai
// vechi din notite-profesor/ rămân neatinse, sunt altă formă.
//
// Materiale: schema pentru lecțiile 10 (Substantivul) și 11 (Articolul). Joc
// pentru 9 (Ascultarea activă), 17 și 18 (recapitulare). Restul rămân null,
// listate în materiale-restante.md.

export const unitatea3 = {
  id: 'unitatea-3',
  titlu: 'Unitatea III: Pe strada mea',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Proiect de grup. În așteptarea Crăciunului (anunțare)',
      obiective: [
        'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup În așteptarea Crăciunului.',
      ],
      sursaManual: 'Art 5, Proiect de grup, p. 91 (anunțat administrativ la finalul Unității II, executat aici)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect de grup. În așteptarea Crăciunului (anunțare)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup În așteptarea Crăciunului.',
        ],
        resurse: [
          'Manual Art 5, p. 91',
          'Fișa proiectului (/materiale/clasa-5/unitatea-3/lectia-1/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce obiceiuri de dinainte de Crăciun au în familiile lor și notez pe tablă ideile.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț tema proiectului de grup În așteptarea Crăciunului și faptul că azi înțelegem ce are de făcut fiecare grupă, până când și cum se notează.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reluăm ce am învățat la proiectul individual din Unitatea II despre etape, calendar și criterii.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Prezint pas cu pas fișa proiectului: produsele cerute, împărțirea pe grupe și roluri, calendarul și criteriile de evaluare, cu exemplele de la p. 91.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Grupele se formează, își aleg tema și rolurile și notează în fișă primii doi pași și cine răspunde de fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a organizării grupelor; verificarea fișei de pornire a proiectului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-1/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Textul descriptiv literar. O stradă cu sentimente de Ana Blandiana',
      obiective: [
        'Identifică informații esențiale din textul descriptiv literar O stradă cu sentimente de Ana Blandiana.',
      ],
      sursaManual: 'Art 5, Lecția 1, p. 80 (O stradă cu sentimente de Ana Blandiana)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul descriptiv literar. O stradă cu sentimente de Ana Blandiana',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul descriptiv literar O stradă cu sentimente de Ana Blandiana.',
        ],
        resurse: [
          'Manual Art 5, p. 80',
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
            activitate: 'Le cer elevilor să descrie în două vorbe strada pe care locuiesc și cum se simt când o parcurg.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim textul descriptiv O stradă cu sentimente de Ana Blandiana și desprindem informațiile esențiale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintesc, de la textele narative din unitățile anterioare, ce înseamnă informație esențială într-un text.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc textul cu voce tare împreună cu elevii, clarific cuvintele necunoscute și discutăm ce se descrie și cum, cu exemplele de la p. 80.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează în caiet trei informații esențiale din text și un detaliu de descriere care i-a plăcut.',
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
      id: 'lectia-3',
      titlu: 'Textul descriptiv literar. Personificarea',
      obiective: [
        'Identifică particularitățile textului descriptiv literar și personificările din text, comentând rolul lor.',
      ],
      sursaManual: 'Art 5, Lecția 2, pp. 82-83',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul descriptiv literar. Personificarea',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică particularitățile textului descriptiv literar și personificările din text, comentând rolul lor.',
        ],
        resurse: [
          'Manual Art 5, pp. 82-83',
          'Schema „Personificarea” (/materiale/clasa-5/unitatea-3/lectia-3/schema.svg)',
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
            activitate: 'Le citesc un vers în care strada „își amintește” și îi întreb dacă o stradă poate face asta cu adevărat.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi descoperim trăsăturile textului descriptiv literar și învățăm ce este personificarea și ce rol are.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm informațiile esențiale din textul citit ora trecută și limbajul expresiv discutat în Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției definim personificarea, o căutăm în text și comentăm ce sentimente transmite, cu exemplele de la pp. 82-83.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev alege două personificări din text și explică în scris ce anume sugerează fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea comentariului la personificări.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-3/schema.svg', titlu: 'Personificarea' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează un răspuns personal despre semnificația textului O stradă cu sentimente, folosind teoria inteligențelor multiple.',
      ],
      sursaManual: 'Art 5, Lecția 3, p. 84',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează un răspuns personal despre semnificația textului O stradă cu sentimente, folosind teoria inteligențelor multiple.',
        ],
        resurse: [
          'Manual Art 5, p. 84',
          'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-4/fisa.pdf)',
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
            activitate: 'Recitesc cu elevii finalul textului și îi întreb ce loc din copilăria lor le trezește sentimente asemănătoare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi ne formulăm un răspuns personal despre ce înseamnă textul pentru fiecare, alegând un mod de exprimare care ni se potrivește.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm personificările și trăsăturile textului descriptiv discutate ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Cu ajutorul fișei lecției prezint sarcinile pe tipuri de inteligență, desen, text, hartă, scenetă, și discutăm împreună semnificația textului, cu exemplele de la p. 84.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev alege una dintre sarcini și începe să lucreze un răspuns personal despre semnificația textului.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea răspunsului personal.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-4/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Text auxiliar. O pisică de Tudor Arghezi (fragment)',
      obiective: [
        'Identifică trăsăturile personajului descris în textul auxiliar O pisică de Tudor Arghezi.',
      ],
      sursaManual: 'Art 5, Lecția 4, „Noi pagini, alte idei”, pp. 85-86 (O pisică de Tudor Arghezi)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. O pisică de Tudor Arghezi (fragment)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile personajului descris în textul auxiliar O pisică de Tudor Arghezi.',
        ],
        resurse: [
          'Manual Art 5, pp. 85-86',
          'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-5/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi cum ar descrie un animal drag lor, ca să-l recunoască cineva care nu l-a văzut niciodată.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un fragment din O pisică de Tudor Arghezi și desprindem trăsăturile pisicii descrise.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ce înseamnă trăsătură fizică și trăsătură morală, noțiuni din Unitatea II.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citesc fragmentul, clarific cuvintele mai puțin cunoscute și identificăm împreună, cu fișa lecției, trăsăturile pisicii și cuvintele care le sugerează, cu exemplele de la pp. 85-86.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează o fișă cu trei trăsături ale pisicii și citatul din text care o dovedește pe fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea fișei de trăsături.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-5/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Textul descriptiv nonliterar. Persana — un ghem pufos cu o personalitate încântătoare',
      obiective: [
        'Identifică trăsăturile textului descriptiv nonliterar și compară descrierea literară cu cea nonliterară.',
      ],
      sursaManual: 'Art 5, Lecția 5, pp. 87-89',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul descriptiv nonliterar. Persana — un ghem pufos cu o personalitate încântătoare',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică trăsăturile textului descriptiv nonliterar și compară descrierea literară cu cea nonliterară.',
        ],
        resurse: [
          'Manual Art 5, pp. 87-89',
          'Infograficul „Textul descriptiv literar și nonliterar” (/materiale/clasa-5/unitatea-3/lectia-6/infografic.svg)',
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
            activitate: 'Le arăt un text de enciclopedie despre pisici și fragmentul lui Arghezi și îi întreb prin ce se deosebesc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi recunoaștem trăsăturile textului descriptiv nonliterar și îl comparăm cu descrierea literară.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm, de la textul despre selfie din Unitatea I, ce deosebește un text nonliterar de unul literar.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Citim textul despre pisica persană, apoi cu infograficul comparăm descrierea literară și cea nonliterară, scop, limbaj, precizie, cu exemplele de la pp. 87-89.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează un tabel cu două coloane, literar și nonliterar, cu câte trei deosebiri.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea tabelului comparativ.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-5/unitatea-3/lectia-6/infografic.svg', titlu: 'Textul descriptiv literar și nonliterar' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Tradiții: sărbătorile de iarnă',
      obiective: [
        'Identifică similitudini privind sărbătorile de iarnă între culturi diferite, pe baza unor exemple din literatură, arte plastice și muzică.',
      ],
      sursaManual: 'Art 5, Lecția 6, p. 90',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Tradiții: sărbătorile de iarnă',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Identifică similitudini privind sărbătorile de iarnă între culturi diferite, pe baza unor exemple din literatură, arte plastice și muzică.',
        ],
        resurse: [
          'Manual Art 5, p. 90',
          'Infograficul „Tradiții: sărbătorile de iarnă” (/materiale/clasa-5/unitatea-3/lectia-7/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi ce obiceiuri de iarnă cunosc din alte țări, din filme sau din familie.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi căutăm ce au în comun sărbătorile de iarnă la popoare diferite, pornind de la literatură, pictură și muzică.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm ce am discutat despre jocuri ca punte între culturi, în Unitatea II.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul infograficului comparăm obiceiurile de iarnă din exemplele de la p. 90, lumina, darul, masa în familie, colindul, și notăm asemănările.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev notează două asemănări între o sărbătoare de iarnă din altă cultură și cele de acasă și le explică pe scurt.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea notării comparative.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-5/unitatea-3/lectia-7/infografic.svg', titlu: 'Tradiții: sărbătorile de iarnă' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Prezentarea proiectului de grup În așteptarea Crăciunului',
      obiective: [
        'Prezintă și evaluează, pe grupe, proiectul În așteptarea Crăciunului, conform criteriilor stabilite.',
      ],
      sursaManual: 'Art 5, Proiect de grup, p. 91 (prezentare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului de grup În așteptarea Crăciunului',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Prezintă și evaluează, pe grupe, proiectul În așteptarea Crăciunului, conform criteriilor stabilite.',
        ],
        resurse: [
          'Manual Art 5, p. 91',
          'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-3/lectia-8/fisa.pdf)',
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
            activitate: 'Recapitulăm criteriile de evaluare și regulile de ascultare activă, pentru discuția de după fiecare prezentare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '8 min',
            activitate: 'Amintesc structura unei prezentări bune și cât timp are fiecare grupă, apoi stabilim ordinea grupelor.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '31 min',
            activitate: 'Grupele prezintă pe rând, colegii pun câte o întrebare, iar eu completez fișa de evaluare pentru fiecare grupă, după criterii.',
          },
        ],
        evaluare: 'Evaluarea proiectului pe grupe după criteriile din fișă; observarea prezentării și a feedbackului între colegi.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-8/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Ascultarea activă',
      obiective: [
        'Exersează strategii de ascultare activă într-o situație de comunicare orală.',
      ],
      sursaManual: 'Art 5, Lecția 7, pp. 92-93',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Ascultarea activă',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Exersează strategii de ascultare activă într-o situație de comunicare orală.',
        ],
        resurse: [
          'Manual Art 5, pp. 92-93',
          'Quizul „Ascultarea activă” (materialul de joc al lecției)',
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
            activitate: 'Le cer doi elevi să povestească ceva în același timp, celorlalți, și apoi întreb ce au reținut din fiecare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi exersăm ascultarea activă, adică felul de a asculta care arată celuilalt că l-am înțeles.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm rolurile de vorbitor și ascultător și regulile de acces la cuvânt, din Unitățile I și II.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Prezint strategiile de ascultare activă, contact vizual, reformulare, întrebări de clarificare, cu exemplele de la pp. 92-93, apoi elevii le exersează în perechi, unul povestește, celălalt ascultă activ.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Câțiva ascultători reformulează în fața clasei ce au auzit, apoi elevii rezolvă quizul „Ascultarea activă” și discutăm răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a exercițiilor în perechi; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Ascultarea activă',
          pasi: [
            {
              intrebare: 'Ce înseamnă ascultarea activă, într-o discuție?',
              variante: [
                { text: 'Să fii atent la ce spune vorbitorul și să răspunzi la ce ai auzit cu adevărat', corect: true, explicatie: 'Ascultarea activă presupune atenție reală la mesajul celuilalt, nu doar prezența tăcută.' },
                { text: 'Să taci tot timpul, fără nicio reacție', corect: false, explicatie: 'Ascultarea activă permite reacții, întrebări de clarificare, nu tăcere totală.' },
                { text: 'Să vorbești în același timp cu celălalt', corect: false, explicatie: 'Vorbitul simultan e opusul unei ascultări atente.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 92',
            },
            {
              intrebare: 'Ce arată faptul că cineva te ascultă cu adevărat, într-o conversație?',
              variante: [
                { text: 'Îți pune întrebări legate de ce ai spus și reacționează la conținut', corect: true, explicatie: 'Reacția și întrebările relevante arată că mesajul a fost înțeles, nu doar auzit.' },
                { text: 'Se uită în altă parte tot timpul', corect: false, explicatie: 'Aceasta e mai degrabă un semn de lipsă de atenție.' },
                { text: 'Repetă exact cuvintele tale, fără nicio reacție proprie', corect: false, explicatie: 'Repetarea mecanică nu dovedește neapărat înțelegere reală.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 92',
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
      titlu: 'Substantivul',
      obiective: [
        'Reactualizează categoriile gramaticale ale substantivului: fel, gen, număr.',
      ],
      sursaManual: 'Art 5, Lecția 8, pp. 94-95',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Substantivul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează categoriile gramaticale ale substantivului: fel, gen, număr.',
        ],
        resurse: [
          'Manual Art 5, pp. 94-95',
          'Schema „Substantivul” (/materiale/clasa-5/unitatea-3/lectia-10/schema.svg)',
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
            activitate: 'Le cer elevilor cât mai multe substantive legate de o stradă și le grupez pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm ce știm despre substantiv: felul, genul și numărul lui.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm, cu exemple, substantivul comun și propriu, genul și numărul, noțiuni din ciclul primar.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției reactualizez felul, genul și numărul substantivului, cu exemplele de la pp. 94-95, și rezolvăm împreună primele aplicații.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev analizează cinci substantive dintr-un text dat, precizând felul, genul și numărul fiecăruia.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea analizei substantivelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-10/schema.svg', titlu: 'Substantivul' },
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Articolul',
      obiective: [
        'Identifică articolul hotărât și nehotărât și ortografia formelor substantivale articulate hotărât.',
      ],
      sursaManual: 'Art 5, Lecția 9, pp. 96-97',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Articolul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică articolul hotărât și nehotărât și ortografia formelor substantivale articulate hotărât.',
        ],
        resurse: [
          'Manual Art 5, pp. 96-97',
          'Schema „Articolul” (/materiale/clasa-5/unitatea-3/lectia-11/schema.svg)',
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
            activitate: 'Le scriu pe tablă „o stradă” și „strada” și îi întreb pe elevi ce diferență de sens simt între cele două.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm articolul hotărât și nehotărât și cum se scriu corect substantivele articulate hotărât.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm felul, genul și numărul substantivului din lecția precedentă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic articolul hotărât și nehotărât și insist pe ortografia formelor articulate hotărât, de exemplu „copiii”, „ochii”, cu exemplele de la pp. 96-97.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev articulează hotărât și nehotărât cinci substantive date și corectează trei forme scrise greșit.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de articulare și ortografie.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-11/schema.svg', titlu: 'Articolul' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Posibilități combinatorii ale substantivului. Prepoziția (I)',
      obiective: [
        'Descoperă părțile secundare de propoziție care determină un substantiv și recunoaște prepoziția simplă.',
      ],
      sursaManual: 'Art 5, Lecția 10, p. 98, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Posibilități combinatorii ale substantivului. Prepoziția (I)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă părțile secundare de propoziție care determină un substantiv și recunoaște prepoziția simplă.',
        ],
        resurse: [
          'Manual Art 5, p. 98',
          'Schema „Posibilități combinatorii ale substantivului (I)” (/materiale/clasa-5/unitatea-3/lectia-12/schema.svg)',
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
            activitate: 'Scriu „casa” pe tablă și le cer elevilor să adauge cuvinte care spun mai multe despre ea: casa bunicii, casa de la țară, casa aceea.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vedem ce cuvinte pot însoți un substantiv și învățăm ce este prepoziția simplă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm părțile principale și secundare de propoziție, noțiuni din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției descoperim părțile secundare care determină un substantiv și definim prepoziția simplă și rolul ei de legătură, cu exemplele de la p. 98.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev subliniază prepozițiile simple dintr-un text dat și marchează substantivul pe care îl leagă fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de identificare a prepoziției simple.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-12/schema.svg', titlu: 'Posibilități combinatorii ale substantivului (I)' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Posibilități combinatorii ale substantivului. Prepoziția (II)',
      obiective: [
        'Recunoaște prepoziția compusă și identifică atributul substantival prepozițional.',
      ],
      sursaManual: 'Art 5, Lecția 10, p. 99, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Posibilități combinatorii ale substantivului. Prepoziția (II)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște prepoziția compusă și identifică atributul substantival prepozițional.',
        ],
        resurse: [
          'Manual Art 5, p. 99',
          'Schema „Posibilități combinatorii ale substantivului (II)” (/materiale/clasa-5/unitatea-3/lectia-13/schema.svg)',
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
            activitate: 'Le dau exemple ca „din cauza”, „în fața”, „de lângă” și îi întreb din câte cuvinte e făcută fiecare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm prepoziția compusă și atributul substantival prepozițional.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm prepoziția simplă și părțile secundare care determină substantivul, din lecția precedentă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definim prepoziția compusă și arătăm cum un substantiv cu prepoziție devine atribut substantival prepozițional, cu exemplele de la p. 99.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev identifică într-un text prepozițiile compuse și trei atribute substantivale prepoziționale.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de identificare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-13/schema.svg', titlu: 'Posibilități combinatorii ale substantivului (II)' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Substantivul subiect. Acordul predicatului cu subiectul',
      obiective: [
        'Identifică subiectul simplu și multiplu, exprimat prin substantiv, și verifică acordul predicatului cu subiectul.',
      ],
      sursaManual: 'Art 5, Lecția 11, pp. 100-101',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Substantivul subiect. Acordul predicatului cu subiectul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică subiectul simplu și multiplu, exprimat prin substantiv, și verifică acordul predicatului cu subiectul.',
        ],
        resurse: [
          'Manual Art 5, pp. 100-101',
          'Schema „Substantivul subiect. Acordul cu predicatul” (/materiale/clasa-5/unitatea-3/lectia-14/schema.svg)',
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
            activitate: 'Scriu „Copiii aleargă” și „Copilul și câinele aleargă” și îi întreb pe elevi de ce predicatul e la fel la amândouă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi recunoaștem subiectul simplu și multiplu exprimat prin substantiv și verificăm acordul lui cu predicatul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm subiectul și predicatul din Unitatea I și numărul substantivului din această unitate.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic subiectul simplu și multiplu și regula acordului predicatului cu subiectul în număr și persoană, cu exemplele de la pp. 100-101.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev corectează acordul greșit în cinci propoziții date și construiește două propoziții cu subiect multiplu.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de acord.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-14/schema.svg', titlu: 'Substantivul subiect. Acordul cu predicatul' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Descrierea unui obiect (I), pregătire',
      obiective: [
        'Identifică cuvinte din câmpul lexical al casei și ordonează informația pe baza unui organizator grafic, pregătind descrierea unui obiect.',
      ],
      sursaManual: 'Art 5, Lecția 12, p. 102, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea unui obiect (I), pregătire',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Identifică cuvinte din câmpul lexical al casei și ordonează informația pe baza unui organizator grafic, pregătind descrierea unui obiect.',
        ],
        resurse: [
          'Manual Art 5, p. 102',
          'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-15/fisa.pdf)',
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
            activitate: 'Le cer elevilor să se gândească la un obiect drag din casa lor și să spună un singur cuvânt care îl descrie.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi pregătim descrierea unui obiect: adunăm cuvinte potrivite și ordonăm ce vrem să spunem.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm trăsăturile textului descriptiv literar și câmpul lexical, învățat în Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției construim câmpul lexical al casei și al obiectelor, apoi ordonăm informația într-un organizator grafic, de la general la detaliu, cu reperele de la p. 102.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev alege obiectul pe care îl va descrie, notează opt cuvinte potrivite și completează organizatorul grafic.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea organizatorului grafic completat.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-15/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Descrierea unui obiect (II), redactare',
      obiective: [
        'Redactează o compunere descriptivă despre un obiect, cu respectarea etapelor scrierii.',
      ],
      sursaManual: 'Art 5, Lecția 12, p. 103, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea unui obiect (II), redactare',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o compunere descriptivă despre un obiect, cu respectarea etapelor scrierii.',
        ],
        resurse: [
          'Manual Art 5, p. 103',
          'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-16/fisa.pdf)',
          'Organizatorul grafic realizat la ora anterioară',
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
            activitate: 'Le cer elevilor să recitească organizatorul grafic și să spună de la ce detaliu vor porni descrierea.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi scriem compunerea descriptivă despre obiectul ales și o revizuim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm etapele scrierii și structura introducere-cuprins-încheiere din unitățile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '19 min',
            activitate: 'Cu ajutorul fișei lecției arăt cum se folosesc personificarea și epitetul într-o descriere și ce urmărim la revizuire, cu exemplele de la p. 103.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Fiecare elev redactează compunerea descriptivă pe baza organizatorului grafic, apoi o schimbă cu colegul pentru o revizuire reciprocă după lista de control din fișă.',
          },
        ],
        evaluare: 'Grilă de autoevaluare din fișă; observarea sistematică a redactării și a revizuirii reciproce.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-16/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea III: descrierea literară, personificarea, ascultarea activă.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 104-105, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea III: descrierea literară, personificarea, ascultarea activă.',
        ],
        resurse: [
          'Manual Art 5, pp. 104-105',
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
            activitate: 'Anunț că recapitulăm textul descriptiv literar, personificarea și ascultarea activă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple din O stradă cu sentimente, trăsăturile descrierii literare, rolul personificării și strategiile de ascultare activă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Rezolvăm ghidat exercițiile de lectură și comunicare de la pp. 104-105.',
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
              intrebare: 'Ce figură de stil dă însușiri omenești unor obiecte sau fenomene, ca strada din textul lui Ana Blandiana?',
              variante: [
                { text: 'personificarea', corect: true, explicatie: 'Personificarea atribuie trăsături și sentimente umane unor lucruri sau fenomene ale naturii.' },
                { text: 'comparația', corect: false, explicatie: 'Comparația apropie două elemente printr-un cuvânt de legătură, nu atribuie însușiri umane.' },
                { text: 'enumerația', corect: false, explicatie: 'Enumerația înșiră termeni de același fel, nu are legătură cu atribuirea de trăsături umane.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 2, p. 82',
            },
            {
              intrebare: 'Ce presupune ascultarea activă într-o discuție?',
              variante: [
                { text: 'Atenție reală la mesajul vorbitorului și reacții relevante la ce a spus', corect: true, explicatie: 'Ascultarea activă e mai mult decât tăcerea, presupune înțelegere reală.' },
                { text: 'Tăcerea completă, fără nicio reacție', corect: false, explicatie: 'Reacțiile relevante sunt parte din ascultarea activă, nu contrazic tăcerea respectuoasă.' },
                { text: 'Vorbitul continuu, ca să umpli tăcerea', corect: false, explicatie: 'Ascultarea activă presupune să-i lași loc vorbitorului.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 92',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea III: substantivul, articolul, prepoziția, acordul subiect-predicat.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 104-105, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea III: substantivul, articolul, prepoziția, acordul subiect-predicat.',
        ],
        resurse: [
          'Manual Art 5, pp. 104-105',
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
            activitate: 'Le cer elevilor să numească pe rând o noțiune de gramatică învățată în unitate și un exemplu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm substantivul, articolul, prepoziția și acordul predicatului cu subiectul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple la tablă, categoriile substantivului, articolul hotărât și nehotărât, prepoziția simplă și compusă, acordul subiect-predicat.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile de gramatică și redactare de la pp. 104-105.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '16 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi cei care termină exersează articularea și acordul într-un scurt text.',
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
              intrebare: 'Ce arată articolul hotărât, atașat la sfârșitul cuvântului strada?',
              variante: [
                { text: 'Că strada e cunoscută, precisă, nu una oarecare', corect: true, explicatie: 'Articolul hotărât precizează un obiect anume, cunoscut.' },
                { text: 'Că e vorba despre mai multe străzi', corect: false, explicatie: 'Numărul (singular/plural) e altă categorie, nu ține de articolul hotărât.' },
                { text: 'Că strada e un substantiv propriu', corect: false, explicatie: 'Strada rămâne substantiv comun, chiar și articulat hotărât.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 9, p. 96',
            },
            {
              intrebare: 'Pentru ca predicatul să fie corect acordat cu un subiect multiplu (Ana și Maria), predicatul trebuie să fie...',
              variante: [
                { text: 'la plural', corect: true, explicatie: 'Un subiect multiplu (mai mulți termeni) cere predicat la plural.' },
                { text: 'la singular, mereu', corect: false, explicatie: 'Subiectul multiplu cere acord la plural, nu la singular.' },
                { text: 'la orice formă, nu contează', corect: false, explicatie: 'Acordul predicatului cu subiectul e obligatoriu, nu opțional.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 11, p. 100',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea III.',
      ],
      sursaManual: 'Art 5, Evaluare, p. 106',
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
          'Testul tipărit, Manual Art 5, p. 106',
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
            activitate: 'Anunț că se dă proba scrisă a Unității III, care verifică lectura textului descriptiv, gramatica și redactarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc pe scurt structura probei și repartizarea timpului între exerciții și redactare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele de la p. 106, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
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
