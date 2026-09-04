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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-3/lectia-1/schema.svg',
          titlu: 'Proiectul În așteptarea Crăciunului, pas cu pas',
        },
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
        joc: {
          tip: 'quiz',
          titlu: 'O stradă cu sentimente de Ana Blandiana',
          pasi: [
            {
              intrebare: 'Ce anume descrie textul?',
              variante: [
                {
                  text: 'O stradă din copilăria autoarei, cu tot ce a însemnat ea pentru cei care au locuit acolo',
                  corect: true,
                  explicatie: 'Nu e o descriere de ghid turistic, ci una încărcată de amintire.',
                },
                {
                  text: 'Un oraș întreg, văzut de sus',
                  corect: false,
                  explicatie: 'Privirea rămâne pe o singură stradă.',
                },
                {
                  text: 'O casă, camera cu cameră',
                  corect: false,
                  explicatie: 'Textul nu intră în interiorul unei case.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 80',
            },
            {
              intrebare: 'Ce înseamnă că strada are „sentimente”?',
              variante: [
                {
                  text: 'Autoarea îi dă strada însușiri omenești, ca să arate ce a însemnat ea pentru oameni',
                  corect: true,
                  explicatie: 'O stradă nu simte nimic; simțim noi, prin ea.',
                },
                {
                  text: 'Că pe strada aceea locuiau oameni foarte sensibili',
                  corect: false,
                  explicatie: 'Sentimentele sunt atribuite străzii, nu locuitorilor.',
                },
                {
                  text: 'Că strada a fost construită de artiști',
                  corect: false,
                  explicatie: 'Textul nu spune nimic despre cine a construit-o.',
                },
              ],
              indiciu: 'Poate o stradă să simtă cu adevărat? Atunci de ce spune autoarea asta?',
              sursa: 'Manual Art 5, p. 80',
            },
            {
              intrebare: 'Prin ce se deosebește un text descriptiv de unul narativ?',
              variante: [
                {
                  text: 'Descriptivul arată cum arată ceva; narativul povestește ce se întâmplă',
                  corect: true,
                  explicatie: 'În descriere timpul stă pe loc, în narațiune înaintează.',
                },
                {
                  text: 'Descriptivul e mai scurt',
                  corect: false,
                  explicatie: 'Lungimea nu deosebește cele două tipuri.',
                },
                {
                  text: 'Descriptivul nu are autor',
                  corect: false,
                  explicatie: 'Orice text are autor.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 80',
            },
            {
              intrebare: 'Ce informație esențială desprinzi dintr-un text descriptiv?',
              variante: [
                {
                  text: 'Ce se descrie, ce trăsături are și ce impresie lasă asupra celui care privește',
                  corect: true,
                  explicatie: 'Impresia contează la fel de mult ca trăsăturile, într-o descriere literară.',
                },
                {
                  text: 'Cine face acțiunea și în ce ordine',
                  corect: false,
                  explicatie: 'Acelea sunt informațiile dintr-un text narativ.',
                },
                {
                  text: 'Concluzia și morala',
                  corect: false,
                  explicatie: 'Descrierea nu are morală, ca fabula.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 80',
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
        joc: {
          tip: 'quiz',
          titlu: 'Personificarea',
          pasi: [
            {
              intrebare: 'Ce este personificarea?',
              variante: [
                {
                  text: 'Figura de stil prin care dăm însușiri omenești unui lucru, unui animal sau unui fenomen',
                  corect: true,
                  explicatie: 'Strada își amintește, vântul șoptește, copacii dansează.',
                },
                {
                  text: 'Compararea a două lucruri printr-un cuvânt de legătură',
                  corect: false,
                  explicatie: 'Aceea e comparația.',
                },
                {
                  text: 'Repetarea aceluiași sunet în cuvinte apropiate',
                  corect: false,
                  explicatie: 'Aceea e aliterația, învățată mai târziu.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 82-83',
            },
            {
              intrebare: 'Care dintre acestea este o personificare?',
              variante: [
                {
                  text: 'Casele bătrâne se uitau la noi cu ferestrele lor obosite.',
                  corect: true,
                  explicatie: 'Casele se uită și obosesc, lucruri pe care le fac doar oamenii.',
                },
                {
                  text: 'Casele erau vechi și avuseseră mulți proprietari.',
                  corect: false,
                  explicatie: 'E o constatare simplă, fără însușiri omenești.',
                },
                {
                  text: 'Casele erau înalte ca niște turnuri.',
                  corect: false,
                  explicatie: 'E o comparație, nu o personificare.',
                },
              ],
              indiciu: 'Caută varianta în care un lucru face ceva ce poate face numai un om.',
              sursa: 'Manual Art 5, pp. 82-83',
            },
            {
              intrebare: 'La ce folosește personificarea într-o descriere?',
              variante: [
                {
                  text: 'Apropie cititorul de lucrul descris și îi transmite o stare, nu doar o informație',
                  corect: true,
                  explicatie: 'O casă obosită ne face să simțim ceva; o casă veche doar ne informează.',
                },
                {
                  text: 'Face textul mai lung',
                  corect: false,
                  explicatie: 'Lungimea nu e un scop.',
                },
                {
                  text: 'Ascunde despre ce e vorba',
                  corect: false,
                  explicatie: 'Dimpotrivă, face imaginea mai clară.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 82-83',
            },
            {
              intrebare: 'Construiește o personificare pentru „ploaia”. Care variantă e corectă?',
              variante: [
                {
                  text: 'Ploaia bătea răbdătoare în geam, așteptând să-i deschidem.',
                  corect: true,
                  explicatie: 'Răbdarea și așteptarea sunt însușiri omenești.',
                },
                {
                  text: 'Ploaia era deasă și rece.',
                  corect: false,
                  explicatie: 'Sunt însușiri obișnuite ale ploii, nu omenești.',
                },
                {
                  text: 'Ploaia cădea ca din găleată.',
                  corect: false,
                  explicatie: 'E o comparație, chiar dacă una expresivă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 82-83',
            },
          ],
        },
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
        joc: {
          tip: 'quiz',
          titlu: 'Descrierea literară față de cea nonliterară',
          pasi: [
            {
              intrebare: 'Care e scopul unui text descriptiv nonliterar, ca cel despre pisica persană?',
              variante: [
                {
                  text: 'Să informeze exact, ca cititorul să recunoască rasa și să știe cum se îngrijește',
                  corect: true,
                  explicatie: 'Precizia contează mai mult decât frumusețea exprimării.',
                },
                {
                  text: 'Să emoționeze cititorul',
                  corect: false,
                  explicatie: 'Acela e scopul descrierii literare.',
                },
                {
                  text: 'Să povestească o întâmplare cu o pisică',
                  corect: false,
                  explicatie: 'Ar fi un text narativ.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 87-89',
            },
            {
              intrebare: 'Ce fel de detalii găsești într-o descriere nonliterară?',
              variante: [
                {
                  text: 'Măsuri, greutăți, culori exacte, trăsături verificabile',
                  corect: true,
                  explicatie: 'Sunt informații pe care oricine le poate verifica.',
                },
                {
                  text: 'Comparații și personificări',
                  corect: false,
                  explicatie: 'Acelea aparțin descrierii literare.',
                },
                {
                  text: 'Amintiri și impresii personale',
                  corect: false,
                  explicatie: 'Descrierea nonliterară evită impresiile subiective.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 87-89',
            },
            {
              intrebare: 'Cum ai descrie aceeași pisică, literar față de nonliterar?',
              variante: [
                {
                  text: 'Literar: un ghem de blană care toarce ca un motor mic. Nonliterar: blană lungă, de 5-8 cm, cap rotund.',
                  corect: true,
                  explicatie: 'Primul creează o imagine, al doilea dă o informație verificabilă.',
                },
                {
                  text: 'Literar și nonliterar înseamnă exact același lucru',
                  corect: false,
                  explicatie: 'Diferă scopul și, din cauza asta, limbajul.',
                },
                {
                  text: 'Nonliterar înseamnă că textul e mai scurt',
                  corect: false,
                  explicatie: 'Un text informativ poate fi foarte lung.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 87-89',
            },
          ],
        },
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
        joc: {
          tip: 'quiz',
          titlu: 'Sărbătorile de iarnă, la noi și la alții',
          pasi: [
            {
              intrebare: 'Ce au în comun sărbătorile de iarnă din culturi foarte diferite?',
              variante: [
                {
                  text: 'Lumina, darul, masa în familie și o formă de cântec sau urare',
                  corect: true,
                  explicatie: 'Formele diferă, nevoile din spate sunt aceleași.',
                },
                {
                  text: 'Se sărbătoresc în aceeași zi peste tot',
                  corect: false,
                  explicatie: 'Datele diferă mult de la o cultură la alta.',
                },
                {
                  text: 'Au exact aceleași obiceiuri',
                  corect: false,
                  explicatie: 'Obiceiurile diferă; se aseamănă doar temele de fond.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 90',
            },
            {
              intrebare: 'De ce apare lumina în aproape toate sărbătorile de iarnă?',
              variante: [
                {
                  text: 'Pentru că iarna zilele sunt cele mai scurte, iar lumina devine un semn de speranță',
                  corect: true,
                  explicatie: 'Lumânarea, focul, beculețele: toate răspund aceleiași nopți lungi.',
                },
                {
                  text: 'Pentru că oamenii nu aveau electricitate',
                  corect: false,
                  explicatie: 'Obiceiul a rămas și după ce a apărut electricitatea.',
                },
                {
                  text: 'Din întâmplare, fără niciun motiv',
                  corect: false,
                  explicatie: 'Coincidența la atâtea culturi nu e întâmplătoare.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 90',
            },
            {
              intrebare: 'Ce înseamnă să privești cu respect un obicei dintr-o altă cultură?',
              variante: [
                {
                  text: 'Să încerci să înțelegi ce nevoie sau ce valoare stă în spatele lui, înainte să îl judeci',
                  corect: true,
                  explicatie: 'Curiozitatea vine înaintea părerii.',
                },
                {
                  text: 'Să spui că e mai frumos decât al tău',
                  corect: false,
                  explicatie: 'Nu e vorba de ierarhii între culturi.',
                },
                {
                  text: 'Să nu vorbești niciodată despre el',
                  corect: false,
                  explicatie: 'Evitarea nu e respect, e indiferență.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 90',
            },
          ],
        },
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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-3/lectia-9/schema.svg',
          titlu: 'Cum ascult cu adevărat',
        },
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
        joc: {
          tip: 'quiz',
          titlu: 'Substantivul',
          pasi: [
            {
              intrebare: 'Ce denumește substantivul?',
              variante: [
                {
                  text: 'Ființe, lucruri, fenomene ale naturii, sentimente, acțiuni privite ca lucruri',
                  corect: true,
                  explicatie: 'Nu doar obiecte: bucuria și alergarea sunt tot substantive.',
                },
                {
                  text: 'Numai obiecte pe care le putem atinge',
                  corect: false,
                  explicatie: 'Ar exclude cuvinte ca „bucurie” sau „vânt”.',
                },
                {
                  text: 'Numai numele de persoane',
                  corect: false,
                  explicatie: 'Acelea sunt doar substantivele proprii care denumesc oameni.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 94-95',
            },
            {
              intrebare: 'Care e deosebirea dintre substantivul comun și cel propriu?',
              variante: [
                {
                  text: 'Comunul denumește o categorie întreagă, propriul denumește un anume exemplar și se scrie cu majusculă',
                  corect: true,
                  explicatie: 'Stradă e comun, Strada Zorilor e propriu.',
                },
                {
                  text: 'Propriul e mai lung',
                  corect: false,
                  explicatie: 'Lungimea nu are legătură.',
                },
                {
                  text: 'Comunul nu are plural',
                  corect: false,
                  explicatie: 'Substantivele comune au, de regulă, și singular, și plural.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 94-95',
            },
            {
              intrebare: 'Ce gen are substantivul „nume”?',
              variante: [
                {
                  text: 'Neutru: un nume, două nume',
                  corect: true,
                  explicatie: 'Proba genului: numeri cu „un” la singular și „două” la plural.',
                },
                {
                  text: 'Masculin',
                  corect: false,
                  explicatie: 'Masculinul ar da „doi nume”, ceea ce nu se spune.',
                },
                {
                  text: 'Feminin',
                  corect: false,
                  explicatie: 'Femininul ar da „o nume”, ceea ce nu se spune.',
                },
              ],
              indiciu: 'Încearcă: un..., doi... sau două...? Ce sună corect?',
              sursa: 'Manual Art 5, pp. 94-95',
            },
            {
              intrebare: 'Cum afli genul unui substantiv, sigur?',
              variante: [
                {
                  text: 'Îl numeri: un, doi pentru masculin; o, două pentru feminin; un, două pentru neutru',
                  corect: true,
                  explicatie: 'Proba numărării e singura care nu dă greș.',
                },
                {
                  text: 'Te uiți la ultima literă',
                  corect: false,
                  explicatie: 'Ultima literă înșală des: „tata” se termină în -a, dar e masculin.',
                },
                {
                  text: 'Te uiți dacă denumește ceva viu sau neviu',
                  corect: false,
                  explicatie: 'Genul gramatical nu urmează realitatea: „masă” e feminin, deși e obiect.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 94-95',
            },
          ],
        },
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
        joc: {
          tip: 'quiz',
          titlu: 'Articolul hotărât și nehotărât',
          pasi: [
            {
              intrebare: 'Ce arată articolul hotărât?',
              variante: [
                {
                  text: 'Că obiectul e cunoscut, precis, nu unul oarecare: strada, cartea',
                  corect: true,
                  explicatie: 'Articolul hotărât se lipește la sfârșitul substantivului.',
                },
                {
                  text: 'Că e vorba de mai multe obiecte',
                  corect: false,
                  explicatie: 'Numărul e altă categorie, nu ține de articol.',
                },
                {
                  text: 'Că substantivul e propriu',
                  corect: false,
                  explicatie: 'Și substantivele comune se articulează hotărât.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 96-97',
            },
            {
              intrebare: 'Care e forma corect scrisă?',
              variante: [
                {
                  text: 'copiii se joacă în curte',
                  corect: true,
                  explicatie: 'Copil, copii la plural, copiii articulat hotărât: trei de i.',
                },
                {
                  text: 'copii se joacă în curte, cu sens de „acei copii”',
                  corect: false,
                  explicatie: 'Cu doi i e plural nearticulat, deci nu are sensul precis.',
                },
                {
                  text: 'copiiii se joacă în curte',
                  corect: false,
                  explicatie: 'Patru de i nu există în nicio formă.',
                },
              ],
              indiciu: 'Numără: rădăcina, pluralul, articolul. Câți i ies?',
              sursa: 'Manual Art 5, pp. 96-97',
            },
            {
              intrebare: 'Care variantă e corectă?',
              variante: [
                {
                  text: 'Ochii lui erau albaștri.',
                  corect: true,
                  explicatie: 'Ochi la plural, ochii articulat hotărât.',
                },
                {
                  text: 'Ochi lui erau albaștri.',
                  corect: false,
                  explicatie: 'Lipsește articolul hotărât, deși sensul îl cere.',
                },
                {
                  text: 'Ochiii lui erau albaștri.',
                  corect: false,
                  explicatie: 'Trei de i sunt prea mulți la acest cuvânt.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 96-97',
            },
            {
              intrebare: 'Ce arată articolul nehotărât?',
              variante: [
                {
                  text: 'Că obiectul e unul oarecare, neprecizat: o stradă, un copil',
                  corect: true,
                  explicatie: 'Articolul nehotărât stă înaintea substantivului.',
                },
                {
                  text: 'Că obiectul e cunoscut de toți',
                  corect: false,
                  explicatie: 'Aceea e treaba articolului hotărât.',
                },
                {
                  text: 'Că substantivul e la plural',
                  corect: false,
                  explicatie: 'Există și „niște”, articol nehotărât de plural, dar nu asta îl definește.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 96-97',
            },
          ],
        },
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
        joc: {
          tip: 'quiz',
          titlu: 'Prepoziția simplă',
          pasi: [
            {
              intrebare: 'Ce face o prepoziție într-o propoziție?',
              variante: [
                {
                  text: 'Leagă un cuvânt de altul și arată ce relație e între ele: casa de la țară',
                  corect: true,
                  explicatie: 'Prepoziția singură nu are înțeles deplin; capătă sens doar legând.',
                },
                {
                  text: 'Arată acțiunea făcută de subiect',
                  corect: false,
                  explicatie: 'Aceea e treaba verbului.',
                },
                {
                  text: 'Denumește o ființă sau un lucru',
                  corect: false,
                  explicatie: 'Aceea e treaba substantivului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 98',
            },
            {
              intrebare: 'Care dintre acestea sunt prepoziții simple?',
              variante: [
                {
                  text: 'la, pe, în, cu, de, spre',
                  corect: true,
                  explicatie: 'Sunt formate dintr-un singur cuvânt.',
                },
                {
                  text: 'din cauza, în fața, de lângă',
                  corect: false,
                  explicatie: 'Acelea sunt prepoziții compuse, din mai multe cuvinte.',
                },
                {
                  text: 'și, dar, sau',
                  corect: false,
                  explicatie: 'Acelea sunt conjuncții, leagă altfel.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 98',
            },
            {
              intrebare: 'În „cartea de povești”, ce spune „de povești” despre carte?',
              variante: [
                {
                  text: 'Ce fel de carte este, deci o determină, o precizează',
                  corect: true,
                  explicatie: 'E o parte secundară care lămurește substantivul „cartea”.',
                },
                {
                  text: 'Cine face acțiunea',
                  corect: false,
                  explicatie: 'Nu e nicio acțiune în această structură.',
                },
                {
                  text: 'Când se întâmplă ceva',
                  corect: false,
                  explicatie: 'Nu e nicio informație de timp.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 98',
            },
          ],
        },
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
        joc: {
          tip: 'quiz',
          titlu: 'Prepoziția compusă și atributul',
          pasi: [
            {
              intrebare: 'Care e o prepoziție compusă?',
              variante: [
                {
                  text: 'de lângă',
                  corect: true,
                  explicatie: 'E formată din două prepoziții simple, alăturate.',
                },
                {
                  text: 'lângă',
                  corect: false,
                  explicatie: 'E o prepoziție simplă, un singur cuvânt.',
                },
                {
                  text: 'pentru că',
                  corect: false,
                  explicatie: 'E o locuțiune conjuncțională, leagă propoziții, nu cuvinte.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 99',
            },
            {
              intrebare: 'Ce este un atribut?',
              variante: [
                {
                  text: 'O parte secundară de propoziție care spune ceva despre un substantiv',
                  corect: true,
                  explicatie: 'Răspunde la întrebări ca „ce fel de?”, „al cui?”, „care?”.',
                },
                {
                  text: 'O parte principală de propoziție',
                  corect: false,
                  explicatie: 'Părțile principale sunt subiectul și predicatul.',
                },
                {
                  text: 'Un fel de verb',
                  corect: false,
                  explicatie: 'Atributul e o funcție sintactică, nu o parte de vorbire.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 99',
            },
            {
              intrebare: 'În „casa de la marginea străzii”, care e atributul substantival prepozițional?',
              variante: [
                {
                  text: 'de la marginea străzii',
                  corect: true,
                  explicatie: 'E un substantiv cu prepoziție, care spune despre ce casă e vorba.',
                },
                {
                  text: 'casa',
                  corect: false,
                  explicatie: 'Casa e cuvântul determinat, nu atributul.',
                },
                {
                  text: 'străzii',
                  corect: false,
                  explicatie: 'Străzii e atribut, dar al lui „marginea”, nu al lui „casa”.',
                },
              ],
              indiciu: 'Întreabă de la „casa”: care casă?',
              sursa: 'Manual Art 5, p. 99',
            },
            {
              intrebare: 'Cum recunoști sigur un atribut substantival prepozițional?',
              variante: [
                {
                  text: 'E un substantiv, are prepoziție înainte, și răspunde la o întrebare pusă de la alt substantiv',
                  corect: true,
                  explicatie: 'Toate trei condițiile trebuie îndeplinite.',
                },
                {
                  text: 'E orice cuvânt care are prepoziție înainte',
                  corect: false,
                  explicatie: 'Prepoziția poate introduce și un complement, care depinde de verb.',
                },
                {
                  text: 'E ultimul cuvânt din propoziție',
                  corect: false,
                  explicatie: 'Poziția nu decide funcția sintactică.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 99',
            },
          ],
        },
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
        joc: {
          tip: 'quiz',
          titlu: 'Subiectul și acordul cu predicatul',
          pasi: [
            {
              intrebare: 'Ce este subiectul multiplu?',
              variante: [
                {
                  text: 'Subiectul format din doi sau mai mulți termeni: Ana și Maria au venit',
                  corect: true,
                  explicatie: 'Toți termenii fac împreună aceeași acțiune.',
                },
                {
                  text: 'Subiectul care apare de mai multe ori în text',
                  corect: false,
                  explicatie: 'Repetarea în text nu are legătură.',
                },
                {
                  text: 'Subiectul care lipsește',
                  corect: false,
                  explicatie: 'Acela e subiectul neexprimat.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 100-101',
            },
            {
              intrebare: 'Care variantă e corect acordată?',
              variante: [
                {
                  text: 'Ana și Maria au plecat acasă.',
                  corect: true,
                  explicatie: 'Subiect multiplu, deci predicat la plural.',
                },
                {
                  text: 'Ana și Maria a plecat acasă.',
                  corect: false,
                  explicatie: 'Predicatul e la singular, deși subiectul e multiplu.',
                },
                {
                  text: 'Ana și Maria ai plecat acasă.',
                  corect: false,
                  explicatie: 'Forma e de persoana a II-a, nu a III-a.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 100-101',
            },
            {
              intrebare: 'În „Pe stradă se aud copiii”, care e subiectul?',
              variante: [
                {
                  text: 'copiii',
                  corect: true,
                  explicatie: 'Întrebarea „cine se aude?” duce la „copiii”, chiar dacă stă la sfârșit.',
                },
                {
                  text: 'pe stradă',
                  corect: false,
                  explicatie: 'Arată locul, e parte secundară.',
                },
                {
                  text: 'se aud',
                  corect: false,
                  explicatie: 'E predicatul.',
                },
              ],
              indiciu: 'Subiectul nu stă întotdeauna la începutul propoziției. Pune întrebarea de la predicat.',
              sursa: 'Manual Art 5, pp. 100-101',
            },
            {
              intrebare: 'De ce greșim acordul cel mai des?',
              variante: [
                {
                  text: 'Când între subiect și predicat se strecoară alte cuvinte și pierdem legătura',
                  corect: true,
                  explicatie: 'Cutia cu jucăriile copiilor era, nu erau: subiectul e „cutia”, nu „jucăriile”.',
                },
                {
                  text: 'Când propoziția e prea scurtă',
                  corect: false,
                  explicatie: 'În propozițiile scurte acordul e cel mai ușor de văzut.',
                },
                {
                  text: 'Când subiectul e la începutul propoziției',
                  corect: false,
                  explicatie: 'Aceea e poziția cea mai clară.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 100-101',
            },
          ],
        },
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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-3/lectia-15/schema.svg',
          titlu: 'Cum descriu un obiect',
        },
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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-3/lectia-17/schema.svg',
          titlu: 'Ce am învățat despre descriere',
        },
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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-3/lectia-18/schema.svg',
          titlu: 'Substantivul, tot ce trebuie să știu',
        },
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
