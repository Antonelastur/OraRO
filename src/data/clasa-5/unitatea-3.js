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
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Ce faceți în familie în zilele dinaintea Crăciunului?” Notez pe tablă obiceiurile spuse de elevi.',
          },
          {
            etapa: 'Prezentarea proiectului',
            timp: '12 min',
            activitate: '– Sarcina (p. 91): grupe de 4-5 elevi, un proiect despre Crăciun; temele propuse în manual: sceneta Nașterii, colindele preferate, Crăciunul în lume, o carte despre Crăciun, povestea lui Moș Crăciun, tradiții din comunitate, decorațiuni, scrisoarea către Moș Crăciun (sau o temă propusă de grupă).\n– Calendarul, două săptămâni: I – alegerea temei și documentarea; II – produsul, împărțirea sarcinilor, repetiția. Prezentarea (3-5 minute) are loc în ultima oră de română dinaintea vacanței.\n– Împart fișa proiectului.',
          },
          {
            etapa: 'Documentarea',
            timp: '8 min',
            activitate: '– „Sugestii pentru etapa documentării”: ce surse putem folosi (cărți, reviste, internet); fiecare membru consultă cel puțin o sursă și notează de unde a luat informația.\n– Arăt cum se notează o sursă: titlul, autorul sau site-ul.',
          },
          {
            etapa: 'Criteriile de evaluare',
            timp: '7 min',
            activitate: '– Citim lista de autoevaluare de la p. 91 (sursele, raportarea la temă, colaborarea, produsul, claritatea, atractivitatea) și criteriile din fișă; pentru fiecare, un exemplu concret.',
          },
          {
            etapa: 'Formarea grupelor',
            timp: '15 min',
            activitate: '– Grupele se formează, își aleg tema și produsul (scenetă, colinde cântate, poster, prezentare, decorațiuni, rețetă...).\n– Fiecare grupă își împarte rolurile (cine se documentează, cine lucrează produsul, cine prezintă) și le notează în fișă.\n– Trec pe la fiecare grupă și verific să nu se repete temele.',
          },
          {
            etapa: 'Încheiere',
            timp: '3 min',
            activitate: '– Anunț data prezentărilor și verificarea de la sfârșitul primei săptămâni.',
          },
        ],
        evaluare: 'Fișa de pornire a proiectului; observarea organizării grupelor.',
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
          'Manual Art 5, pp. 80-81',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-2/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– „Pentru început”, p. 80, ex. 1: fiecare notează o culoare și o emoție pe care le leagă de strada lui; schimbă caietul cu colegul și compară.\n– Ex. 2: cei trei copaci din imagine: ce emoție ar avea fiecare, dacă ar avea suflet?',
          },
          {
            etapa: 'Despre autoare',
            timp: '3 min',
            activitate: '– Prezentarea de la p. 80: Ana Blandiana este pseudonimul Otiliei Valeria Coman; poetă, prozatoare; motanul Arpagic; poezia deschide volumul „Întâmplări de pe strada mea”.',
          },
          {
            etapa: 'Lectura model',
            timp: '10 min',
            activitate: '– Ex. 3: citesc poezia cu voce tare (sau pornesc înregistrarea din manualul digital); elevii urmăresc în manual.\n– Lămurim cuvintele din subsol (țuguiat, dibaci, impertinent, horbotă, perfid, infim) și alte cuvinte necunoscute.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '8 min',
            activitate: '– P. 81, ex. 1-2: ce ți-a atras atenția? La ce te-ai gândit citind poezia? Câțiva elevi răspund și își motivează alegerea.\n– Discuție scurtă: ce vă place la strada voastră?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (fiecare casă, cu felul ei), ex. 2 (detaliile străzii) și ex. 3 (cuvintele din subsol), individual, 10 minute.\n– Verificare, 5 minute.',
          },
          {
            etapa: 'Temă',
            timp: '7 min',
            activitate: '– Ex. 3 de la „Impresii după prima lectură”: fiecare notează o întrebare pentru autoare (o citim ora viitoare).\n– Tema: prezentarea autoarei (p. 80), recitită; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-2/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-3/fisa-exercitii.pdf)',
          'Schema „Textul descriptiv literar. Personificarea” (/materiale/clasa-5/unitatea-3/lectia-3/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Câțiva elevi citesc întrebările pentru autoare; conduc discuția spre ideea că poeta a ales să prezinte strada într-un fel neobișnuit.',
          },
          {
            etapa: 'Dirijarea învățării: textul descriptiv literar',
            timp: '10 min',
            activitate: '– „Explorare”, p. 82, ex. 1: lectură în lanț, câte o strofă, expresiv.\n– Ex. 2: după ce recunoaștem o poezie (versuri, strofe, rimă).\n– Ex. 3, individual, apoi în perechi: cele trei părți ale poeziei (introducerea, casele, încheierea) și un titlu pentru fiecare.\n– Ex. 4: strofa preferată: ce se descrie și cu ce trăsături.',
          },
          {
            etapa: 'Notițe: textul descriptiv',
            timp: '3 min',
            activitate: '– În caiete, după Repere și schema lecției: textul descriptiv (obiect, ființă, cadru, fenomen; părți componente și trăsături); textul descriptiv literar (impresii subiective, limbaj creativ).',
          },
          {
            etapa: 'Dirijarea învățării: personificarea',
            timp: '10 min',
            activitate: '– „Explorare – Personificarea”, ex. 1: șapte grupe, fiecare cu o strofă din partea a doua: desenează casa cu o culoare dominantă, îi dă un nume, îi găsește trăsătura.\n– Ex. 2: comportamentele omenești ale casei și partea de vorbire prin care sunt exprimate; raportorii prezintă pe scurt.',
          },
          {
            etapa: 'Notițe: personificarea',
            timp: '3 min',
            activitate: '– În caiete, după Repere: figura de stil; personificarea (însușiri omenești date unor ființe necuvântătoare, obiecte, fenomene), cu două exemple din poezie.',
          },
          {
            etapa: 'Aplicații: inventarul personificărilor',
            timp: '5 min',
            activitate: '– „Aplicații”, p. 83, ex. 1, în perechi: tabelul cu personificările din partea a doua (acțiune omenească / însușire omenească); completăm frontal primele rânduri.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (personificare sau nu?) și ex. 2 (felinarul de pe strada mea), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Bilet de ieșire și temă',
            timp: '3 min',
            activitate: '– Bilet de ieșire: două idei reținute și o întrebare. Le citesc acasă și lămuresc întrebările ora viitoare.\n– Tema: „Aplicații” de la p. 82, ex. 2, 4 și 6; „Aplicații” de la p. 83, ex. 2-5; „Portofoliu” (un catren cu personificare); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Produsele grupelor; biletele de ieșire; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-3/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-3/schema.svg', titlu: 'Textul descriptiv literar. Personificarea' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Lămuresc întrebările din biletele de ieșire.\n– „Interpretare”, p. 84, ex. 1: care e, pentru voi, imaginea sau ideea cea mai importantă a poeziei? Primesc orice răspuns motivat.',
          },
          {
            etapa: 'Interpretare, ex. 2-5',
            timp: '10 min',
            activitate: '– Ex. 2: tema (strada, casa, sentimentele, maidanezii); îi conduc spre ideea că sentimentele sunt miezul poeziei.\n– Ex. 3-4: prin ce e deosebită poezia? De ce vede autoarea strada altfel?\n– Ex. 5: ce ați fi spus voi despre strada voastră?\n– Feedback constructiv la fiecare răspuns.',
          },
          {
            etapa: 'Inteligențele multiple',
            timp: '15 min',
            activitate: '– Ex. 6: fiecare elev alege sarcina care i se potrivește (lingvistică, logico-matematică, spațial-vizuală, muzicală, corporal-chinestezică, naturalistă, interpersonală, intrapersonală) și lucrează 8 minute.\n– Prezentări scurte, 7 minute: câte un elev pentru câteva dintre tipurile de sarcini (un desen, o grupare a caselor, un joc de rol, o muzică potrivită...).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (oamenii din spatele caselor), ex. 2 (de acord sau nu?) și ex. 3 (alt titlu), individual, 9 minute.\n– Verificare, 4 minute. Variantă: fișa de lucru a lecției.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '7 min',
            activitate: '– „Portofoliu”, ex. 1: toate străzile ar putea avea sentimente, sau noi le dăm viață prin imaginație? Discuție scurtă; fiecare notează concluzia.\n– Tema: „Portofoliu”, ex. 2 (strada ta, descrisă cu cel puțin o personificare); „Provocări”, ex. 2 (inteligențele tale dominante); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Produsele sarcinilor pe inteligențe; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-3/lectia-4/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-5/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-5/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „V-ați întâlnit vreodată cu un animal pe care ați fi vrut să-l luați acasă?” Doi-trei elevi îl descriu în câteva cuvinte.',
          },
          {
            etapa: 'Contextul',
            timp: '2 min',
            activitate: '– Textul face parte din volumul „Cartea cu jucării” (1931) de Tudor Arghezi; în casă apar copiii Baruțu și Mițura.',
          },
          {
            etapa: 'Lectura',
            timp: '10 min',
            activitate: '– Citesc fragmentul (sau pornesc înregistrarea din manualul digital).\n– Lămurim cuvintele din subsol: sălaș, lunatic, sofa, doniță, lutră, a tălmăci, opintire, idol, inefabil, moaște, dom, boit.',
          },
          {
            etapa: 'Portretul pisicii',
            timp: '5 min',
            activitate: '– Elevii recitesc și transcriu în caiet pasajele în care e descrisă pisica (cerința de la p. 85).',
          },
          {
            etapa: 'Discutarea textului',
            timp: '10 min',
            activitate: '– P. 86, ex. 1-2: sunt fericiți stăpânii de venirea pisicii (cu exemple)? Tu ai reacționa ca Baruțu sau ca Mițura?\n– Ex. 3, frontal: potrivim elementele (căutătură, ochi, gură, blană, siluetă...) cu determinările lor.\n– Ex. 4-6: trăsăturile care reies din „liniștea aristocratică”, „stilul suav”; e pisica personificată?; e o descriere literară? (argumente).\n– Feedback pozitiv, constructiv.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (cum e primită pisica?), ex. 2 (literar sau nonliterar?) și ex. 3 (comparațiile tale), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– Bilet de ieșire: cum te simți la sfârșitul lecției? Un emoticon și un „de ce”.\n– Recomand „Biblioteci deschise”: „Întoarcerea lui Arpagic” de Ana Blandiana și „Pânza Charlottei” de E.B. White.\n– Tema: ex. 7 (desenul pisicii, după ex. 3-5); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Pasajele transcrise; biletele de ieșire; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-3/lectia-5/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-6/fisa-exercitii.pdf)',
          'Infograficul „Textul descriptiv literar și nonliterar” (/materiale/clasa-5/unitatea-3/lectia-6/infografic.svg)',
          'Fotografii cu pisici, pentru anunțuri',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Anunțul pentru pisica pierdută',
            timp: '10 min',
            activitate: '– „Pentru început”, ex. 1: grupe de 3-4 elevi; fiecare grupă primește fotografia unei pisici și scrie un anunț cu descrierea ei, 5 minute.\n– Afișez toate fotografiile; grupele citesc anunțurile, iar celelalte ghicesc pisica.\n– Ex. 2: în textele nonliterare, ființele primesc trăsături omenești? (accentul cade pe exactitatea detaliilor).',
          },
          {
            etapa: 'Lectura cu metoda SINELG',
            timp: '10 min',
            activitate: '– Explic semnele (✓ știam, – altfel decât știam, + nou, ? neclar) și citim articolul în gând, cu creionul în mână.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '5 min',
            activitate: '– P. 88, ex. 1-4: ce semn a predominat; ce s-a confirmat; ce contrazice ce știați; lămurim pasajele cu semnul întrebării.',
          },
          {
            etapa: 'Explorare și Repere',
            timp: '10 min',
            activitate: '– „Explorare”, ex. 1-5: ce ați aflat nou; tema și elementele care o arată (titlul, cuvintele îngroșate, sursa); unde a apărut textul; ce fel de text este; ce ne ajută să vedem aspectele importante (cuvintele îngroșate de la începutul paragrafelor).\n– În caiete, după Repere și infografic: textul descriptiv nonliterar (informații concrete, ton neutru, limbaj precis) față de cel literar.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (aspectul și detaliile) și ex. 2 (neutru, subiectiv sau sfat?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Autoevaluare și temă',
            timp: '5 min',
            activitate: '– Autoevaluare L1-L5: cele trei afirmații, în caiet.\n– Tema: „Interpretare”, ex. 3, 4, 6 și 9 (tabelul literar-nonliterar); „Provocări”, ex. 2; „Aplicații” (posterul), facultativ, pe grupe; fișa de exerciții, ex. 3 și pagina 2; minitestul, dacă îl folosesc.',
          },
        ],
        evaluare: 'Anunțurile grupelor; autoevaluarea L1-L5; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-6/fisa-exercitii.pdf' },
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
          'Manual Art 5, pp. 90-92',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-7/fisa-exercitii.pdf)',
          'Infograficul „Tradiții: sărbătorile de iarnă” (/materiale/clasa-5/unitatea-3/lectia-7/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '8 min',
            activitate: '– „Pentru început”, p. 90, ex. 1: strofa din „Iarna pe uliță” de George Coșbuc și pictura lui Gheorghe Ciobanu; în perechi, ce emoții și amintiri vă trezesc?\n– Ex. 2: intrusul din listă și de ce ține el de altă sărbătoare.',
          },
          {
            etapa: 'Colindatul',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1, în grupe de 3-4: de câte ori ați colindat, unde, ce colinde ați cântat, cum ați fost răsplătiți? Fiecare grupă face un mic inventar.\n– Ex. 2: ce colinde din listă cunoașteți? Facem topul clasei.\n– Întreb de alte obiceiuri de iarnă, din alte zone ale țării sau din alte țări.',
          },
          {
            etapa: 'Aplicații: colinde de aici și de aiurea',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 1: ce eveniment prezintă colindul „O, ce veste minunată”?\n– Ex. 2: „O, brad frumos” („O Tannenbaum”): cum e descris bradul? (dacă e posibil, ascultăm o variantă).\n– Ex. 3: „Moș Crăciun cu plete dalbe”: ce amintiri vă trezește?',
          },
          {
            etapa: 'Notițe',
            timp: '3 min',
            activitate: '– În caiete, după Repere și infografic: tradițiile și obiceiurile; sărbătorile diferă de la o comunitate la alta, dar au și aspecte comune (colindatul).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (intrusul), ex. 2 (obiceiul și sărbătoarea) și ex. 3 (sărbători de iarnă în alte țări), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '6 min',
            activitate: '– Ce au în comun sărbătorile de iarnă din culturi diferite? (darurile, lumina, cântecul, masa în familie).\n– Tema: fișa de exerciții, pagina 2; grupele lucrează la proiectul „În așteptarea Crăciunului”.',
          },
        ],
        evaluare: 'Inventarele grupelor; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-7/fisa-exercitii.pdf' },
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
            etapa: 'Pregătirea prezentărilor',
            timp: '4 min',
            activitate: '– Stabilim ordinea grupelor; cronometrul pe tablă (3-5 minute pe grupă); grupele își pregătesc recuzita.',
          },
          {
            etapa: 'Prezentările',
            timp: '36 min',
            activitate: '– Fiecare grupă prezintă (scenetă, colinde, poster, prezentare, decorațiuni...), apoi răspunde la una-două întrebări ale colegilor.\n– Completez grila din fișa proiectului pentru fiecare grupă.\n– Ceilalți ascultă activ și notează un lucru reușit la fiecare grupă.',
          },
          {
            etapa: 'Autoevaluare',
            timp: '6 min',
            activitate: '– Fiecare elev completează autoevaluarea de la p. 91 (sursele, tema, colaborarea, produsul, claritatea, atractivitatea).',
          },
          {
            etapa: 'Încheiere',
            timp: '4 min',
            activitate: '– Spun ce a mers bine în general; urăm „Sărbători fericite!”; afișăm produsele.',
          },
        ],
        evaluare: 'Grila de evaluare pe grupe; autoevaluarea elevilor.',
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-9/fisa-exercitii.pdf)',
          'Quizul „Ascultarea activă” (materialul de joc al lecției)',
          'Imagini color cu obiecte, pentru descriere',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Jocul de rol',
            timp: '6 min',
            activitate: '– Un elev iese câteva momente ca să-și pregătească o prezentare de un minut; clasa primește, în secret, sarcina să nu-l asculte (să nu-l privească, să vorbească între ei).\n– Elevul prezintă; apoi îl întreb cum s-a simțit.',
          },
          {
            etapa: 'Pentru început',
            timp: '4 min',
            activitate: '– „Pentru început”, p. 92, ex. 1-3: diferența dintre a auzi și a asculta; cum te simți când nu ești ascultat; după ce recunoști un bun ascultător.',
          },
          {
            etapa: 'Ghicitorile',
            timp: '5 min',
            activitate: '– „Explorare”, ex. 1: citesc ghicitorile; elevii pot pune întrebări suplimentare până ghicesc.',
          },
          {
            etapa: 'Descrierea după imagini',
            timp: '8 min',
            activitate: '– Ex. 2: doi-trei voluntari primesc câte o imagine color și o descriu în detaliu; ceilalți completează tabelul (văd, aud, are gust de, miros, pipăi) și pun întrebări sau reformulează.\n– Ex. 3: comparăm tabelele în perechi și completăm rubricile goale.',
          },
          {
            etapa: 'Notițe',
            timp: '3 min',
            activitate: '– În caiete, după Repere și schema de la p. 93: ascultarea activă (a auzi clar, a interacționa fără să întrerupi, întrebări de clarificare, reformulare, contact vizual, încurajare, concentrare, înțelegere).',
          },
          {
            etapa: 'Aplicații: vorbitor, ascultător, observator',
            timp: '12 min',
            activitate: '– „Aplicații”, p. 93: grupe de câte trei, trei runde; vorbitorul povestește 2-3 minute o întâmplare amuzantă de pe strada lui; ascultătorul dă semnale de atenție, întreabă, reformulează, rezumă; observatorul completează fișa de evaluare.\n– Circul și observ câte o secvență din fiecare grupă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '8 min',
            activitate: '– Pagina 1: ex. 1 (ascultător activ sau nu?) și ex. 2 (a auzi sau a asculta?), individual, 5 minute; verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Reflecții”, ex. 1-3, în enunțuri scurte; fișa de exerciții, ex. 3 și pagina 2. Dacă rămâne timp: quizul lecției.',
          },
        ],
        evaluare: 'Fișele observatorilor; observarea exercițiului în trei; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-9/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-10/fisa-exercitii.pdf)',
          'Schema „Substantivul” (/materiale/clasa-5/unitatea-3/lectia-10/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, ex. 1, variantă rapidă: descriu eu o casă (pereți galbeni, două ferestre pătrate, o ușă mare, un acoperiș țuguiat, un horn înalt), elevii o schițează în 2 minute și numesc părțile ei.',
          },
          {
            etapa: 'Istoria cuvântului „casă”',
            timp: '2 min',
            activitate: '– Ex. 2: casă, din latinescul casa („colibă”); o propoziție în care casă înseamnă „familie”.',
          },
          {
            etapa: 'Dirijarea învățării: substantivul comun și propriu',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1: ce denumesc substantivele din propoziții (ființe, lucruri, fenomene, însușiri, acțiuni, stări).\n– Ex. 2, joc pe grupe de șase, 5 minute: fișa cu străzi, orașe, țări, prenume, nume de animale, sărbători; câștigă grupa cu cele mai multe substantive corecte.\n– Ex. 3: Bușteni și Creangă, nume proprii venite din substantive comune.\n– În caiete, după Repere: substantivul; comun și propriu; scrierea cu literă mare.',
          },
          {
            etapa: 'Dirijarea învățării: genul și numărul',
            timp: '7 min',
            activitate: '– „Explorare”, ex. 1-3: genul (proba un-doi, o-două, un-două); numărul; desinențele de plural.\n– În caiete: cele trei genuri, cu probe și exemple; numerele; desinența.',
          },
          {
            etapa: 'Aplicații frontale',
            timp: '6 min',
            activitate: '– „Aplicații”, ex. 1 (cuvintele care nu sunt substantive, joc), ex. 4 (genul) și ex. 6 (pluralul, cu desinențele subliniate), la tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (ce denumește?), ex. 2 (genul și pluralul) și ex. 3 (literă mare sau mică?), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: „Aplicații”, ex. 2, 5, 7, 8 și 9; „Deschideri” (știrea cu pluralul lui cotidian, gadget, laptop, produs, verificat în DOOM3); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Jocul pe grupe; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-10/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-11/fisa-exercitii.pdf)',
          'Schema „Articolul” (/materiale/clasa-5/unitatea-3/lectia-11/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Jocul Semaforul',
            timp: '6 min',
            activitate: '– „Explorare – Articolul”, ex. 1: fiecare elev primește un bilețel cu o formă a substantivului (stâlp, stâlpul, un stâlp...) și o scrie pe culoarea potrivită a semaforului desenat pe afiș.',
          },
          {
            etapa: 'Ce s-a adăugat?',
            timp: '2 min',
            activitate: '– Ex. 2: ce s-a adăugat fiecărui substantiv ca să arate cât de cunoscut e obiectul?',
          },
          {
            etapa: 'Dirijarea învățării: articolul hotărât și nehotărât',
            timp: '10 min',
            activitate: '– „Explorare”, ex. 1: unde stau articolele când obiectele sunt cunoscute (la sfârșit).\n– Ex. 2: unde stau când obiectele sunt mai puțin cunoscute (înainte).\n– Ex. 3 (normă și abatere): copiii, poeziile; de ce e greșit „exercițile”.',
          },
          {
            etapa: 'Notițe',
            timp: '5 min',
            activitate: '– În caiete, după Repere: articolul; substantiv articulat și nearticulat; articolul hotărât (lipit, cu -u- de legătură: băiatul) și nehotărât (separat); tabelele cu forme.',
          },
          {
            etapa: 'Aplicații frontale',
            timp: '7 min',
            activitate: '– „Aplicații”, ex. 1 (jocul Felinarul: articulate / nearticulate), ex. 2 (intrusul) și ex. 5 (subliniere cu una și două linii), la tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (ce articol are?), ex. 2 (articulează) și ex. 3 (câți de i?), individual, 10 minute.\n– Verificare, 5 minute; la ex. 3, explic pe tablă i-urile din copiii și membrii.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: „Aplicații”, ex. 3, 4, 6 și 7; „Deschideri” (anunțurile de la televizor, corectate); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Jocul Semaforul; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-11/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-12/fisa-exercitii.pdf)',
          'Schema „Posibilități combinatorii ale substantivului. Atributul” (/materiale/clasa-5/unitatea-3/lectia-12/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Scriu „casa” pe tablă; elevii îi adaugă cuvinte: cum e, a cui e, din ce e făcută (casa bunicii, casa nouă, casa de piatră). Anunț: azi numim partea de propoziție pe care au adăugat-o.',
          },
          {
            etapa: 'Dirijarea învățării: atributul',
            timp: '12 min',
            activitate: '– „Explorare – Atributul”, ex. 1: citim întrebările de sub desene (a cui casă? care casă? ce fel de casă?) și le notăm.\n– Ex. 2: punem întrebările pentru „casa” și „rafalele” din ultima propoziție.\n– Ex. 3: prin ce se exprimă atributele (adjectiv sau substantiv).\n– Ex. 4: câte atribute determină un substantiv în propoziția cu razele de soare.',
          },
          {
            etapa: 'Notițe',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: atributul; întrebările lui; substantivul ca centru și atributul ca adjunct; atributul adjectival și substantival; locul atributului.',
          },
          {
            etapa: 'Aplicații',
            timp: '10 min',
            activitate: '– „Aplicații”, ex. 1: asociem fiecare substantiv cu două atribute și construim propoziții.\n– Ex. 2: atributele din textul despre strada Mariei, la tablă, cu întrebările puse de la substantivul-centru.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (pune întrebarea), ex. 2 (centru și adjunct) și ex. 3 (adjectiv sau substantiv?), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: „Aplicații”, ex. 3 (proverbele de pe mănuși, cu atributele subliniate) și ex. 5; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-12/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-12/schema.svg', titlu: 'Posibilități combinatorii ale substantivului. Atributul' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-13/fisa-exercitii.pdf)',
          'Schema „Prepoziția” (/materiale/clasa-5/unitatea-3/lectia-13/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Scriu „casa de lângă bloc”, „casa fără acoperiș”, „mingea de sub mașină” și întreb: ce cuvinte leagă atributul de substantiv? Din câte cuvinte sunt făcute?',
          },
          {
            etapa: 'Reactualizarea',
            timp: '3 min',
            activitate: '– Atributul: întrebările și exprimarea lui, cu două exemple la tablă.',
          },
          {
            etapa: 'Dirijarea învățării: prepoziția',
            timp: '8 min',
            activitate: '– „Explorare – Prepoziția” (p. 98), ex. 1: ce rol au cuvintele scrise cu albastru.\n– Ex. 2: fără, de lângă, de pe: câți termeni are fiecare?',
          },
          {
            etapa: 'Notițe',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 99) și schema lecției: prepoziția leagă atributul de substantiv și se analizează împreună cu cuvântul pe care îl precedă; prepoziții simple și compuse, inclusiv despre, dinspre, înspre.',
          },
          {
            etapa: 'Aplicații',
            timp: '10 min',
            activitate: '– „Aplicații”, ex. 4 (felul prepozițiilor), la tablă.\n– Ex. 5 (adevărat sau fals), frontal, cu atributele numărate pe tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (simplă sau compusă?), ex. 2 (prepoziția care lipsește) și ex. 3 (atributul cu prepoziție), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '6 min',
            activitate: '– „Deschideri”: corectăm oral una dintre propozițiile auzite la radio și explicăm greșeala.\n– Tema: celelalte două propoziții de la „Deschideri”, corectate și explicate; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-13/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-13/schema.svg', titlu: 'Prepoziția' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-14/fisa-exercitii.pdf)',
          'Schema „Substantivul subiect. Acordul predicatului cu subiectul” (/materiale/clasa-5/unitatea-3/lectia-14/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Fiecare elev primește un bilețel cu un substantiv și construiește o propoziție în care acesta să fie subiect; câțiva citesc.',
          },
          {
            etapa: 'Dirijarea învățării: subiectul',
            timp: '10 min',
            activitate: '– „Explorare – Subiectul”, ex. 1, în grupe de patru: substantivele din propozițiile despre zăpadă, ce parte de propoziție sunt, de ce parte de propoziție depind, ce întrebare le punem.\n– Ex. 2-4: subiectele din text (Dan; Monica, Alina și Costin), din câți termeni sunt alcătuite; subiectele multiple de la ex. 4.',
          },
          {
            etapa: 'Notițe: subiectul',
            timp: '4 min',
            activitate: '– În caiete, după Repere și schema lecției: subiectul (întrebarea cine?), simplu și multiplu; termenii legați prin virgulă sau „și”, alăturați sau despărțiți.',
          },
          {
            etapa: 'Dirijarea învățării: acordul',
            timp: '7 min',
            activitate: '– „Explorare – Acordul”, ex. 1-2: persoana și numărul predicatelor, numărul subiectelor; ce observăm?\n– Ex. 3: „Numărul copiilor... a crescut”: acordul se face doar cu subiectul.\n– În caiete: regula acordului; la subiect multiplu, predicatul la plural.',
          },
          {
            etapa: 'Aplicații',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 1 (subiecte simple și multiple în textul despre Corina), ex. 2 (zăpadă: subiect sau altceva) și ex. 4 (forma corectă), frontal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (simplu sau multiplu?), ex. 2 (acordul corect) și ex. 3 (subiect sau atribut?), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Autoevaluare și temă',
            timp: '4 min',
            activitate: '– Autoevaluare L8-L11 (cele trei afirmații).\n– Tema: „Aplicații”, ex. 3; „Reflecții” (eseul de cinci minute: de ce e important să vorbești fără dezacorduri); „Portofoliu” (dezacordurile auzite în trei zile); fișa de exerciții, pagina 2; minitestul, dacă îl folosesc.',
          },
        ],
        evaluare: 'Exercițiile de grup și de la tablă; autoevaluarea L8-L11; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-14/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-3/lectia-14/schema.svg', titlu: 'Substantivul subiect. Acordul predicatului cu subiectul' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-15/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-15/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Joc: Piatra în lac',
            timp: '4 min',
            activitate: '– „Pentru început”, ex. 1: un minut, fiecare scrie substantivele care îi vin în minte la cuvântul „casă”; câțiva citesc.',
          },
          {
            etapa: 'Căsuța preferată',
            timp: '4 min',
            activitate: '– Ex. 2: fiecare alege una dintre cele trei căsuțe din copaci, spune de ce, și păstrează din listă doar cuvintele potrivite pentru ea.',
          },
          {
            etapa: 'Explorare: organizatorul',
            timp: '18 min',
            activitate: '– „Explorare”, ex. 1-2, individual: organizatorul grafic cu elementele căsuței și câte o trăsătură pentru fiecare, după model.\n– Ex. 3: locul în care se află căsuța și copacul.\n– Ex. 4: cum îți imaginezi interiorul? Schiță și trăsături.\n– Ex. 5: dacă ai personifica-o, ce trăsături omenești ar avea?\n– Trec printre bănci și ajut.',
          },
          {
            etapa: 'Dirijarea învățării: textul descriptiv',
            timp: '5 min',
            activitate: '– În caiete, după Repere: introducerea (tema, motivul alegerii), cuprinsul (aspectele în detaliu), încheierea (concluzie, părere personală); tema, elementele, publicul, scopul; restrângerea temei.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (lampa de pe birou), ex. 2 (introducere, cuprins sau încheiere?) și ex. 3 (pentru cine scriu?), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '7 min',
            activitate: '– În scris: „Ce am aflat despre cum se construiește un text descriptiv? Ce nu știu încă?”; câțiva citesc.\n– Tema: organizatorul complet pentru căsuța aleasă (fișa lecției); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Organizatoarele grafice; răspunsurile scrise de la reflecție; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-15/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-3/lectia-15/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-16/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-16/fisa.pdf)',
          'Organizatorul grafic realizat la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Reactualizarea',
            timp: '5 min',
            activitate: '– Pentru fiecare dintre cele trei căsuțe, câte un elev prezintă organizatorul făcut ora trecută.',
          },
          {
            etapa: 'Exersare: revizuirea',
            timp: '7 min',
            activitate: '– Fișa de exerciții, ex. 1: rescriem descrierea ghiozdanului fără repetiții, cu o comparație și o personificare; doi elevi citesc.',
          },
          {
            etapa: 'Scopul și planul',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 1: fiecare decide pentru o revistă de copii: vrea să impresioneze (a) sau să amuze (b)?\n– Planul, în organizatorul din manual: din ce e compus obiectul, cum arată, la ce folosește, de ce e important pentru mine; titlul.',
          },
          {
            etapa: 'Feedback pe plan',
            timp: '4 min',
            activitate: '– În perechi, schimb de planuri și câte o sugestie ca textul să fie mai captivant.',
          },
          {
            etapa: 'Redactarea',
            timp: '18 min',
            activitate: '– Fiecare scrie descrierea pe fișa lecției: ciorna, apoi revizuirea (claritate, paragrafe, corectitudine).\n– Trec printre bănci și notez observații (poate face planul, poate da feedback, textul e coerent și captivant).',
          },
          {
            etapa: 'Evaluare reciprocă',
            timp: '5 min',
            activitate: '– „Aplicații”, ex. 2, prescurtat: colegul verifică textul după grila din manual; fișa de exerciții, ex. 3 („Două stele și o dorință”).',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: varianta finală, pe o coală separată, după observații; fișa de exerciții, ex. 2 și 4; „Evaluarea portofoliului” (mapa cu lucrările din unitățile I-III, în ordinea preferințelor, cu 3-4 rânduri despre evoluție).',
          },
        ],
        evaluare: 'Grila de evaluare reciprocă; observațiile profesorului; textul final.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-3/lectia-16/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-3/lectia-16/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-17/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Textul A: casa din „Matilda”',
            timp: '5 min',
            activitate: '– Citesc fragmentul din „Matilda” de Roald Dahl (p. 104); elevii urmăresc.',
          },
          {
            etapa: 'Rezolvare ghidată, A',
            timp: '8 min',
            activitate: '– Ex. 1 (tema descrierii), ex. 6 (tabelul pasaj – trăsătura casei), ex. 7 (atribute despre casă), ex. 8 (personificarea), frontal.',
          },
          {
            etapa: 'Textul B: căsuța din copaci',
            timp: '5 min',
            activitate: '– Elevii citesc în gând articolul despre „Cuibul Princesei” (p. 105).',
          },
          {
            etapa: 'Rezolvare ghidată, B',
            timp: '8 min',
            activitate: '– Ex. 1 (unde a apărut textul), ex. 2 (două diferențe între descrierea reginei și cea a autorului), ex. 3 (tema, aspectele și trăsăturile, patru termeni de arhitectură, ce informații lipsesc).',
          },
          {
            etapa: 'Ascultare activă',
            timp: '5 min',
            activitate: '– În perechi: unul descrie din memorie căsuța din copaci; celălalt ascultă, pune o întrebare de clarificare și reformulează; apoi schimbă rolurile.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Textele despre far: pagina 1, ex. 1-3, și pagina 2, ex. 4, individual, 11 minute.\n– Verificare, 4 minute. Dacă rămâne timp: quizul lecției.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: A, ex. 9 (casa domnișoarei Honey, în 8-10 rânduri); B, ex. 4 (căsuța ta de vis, în două variante); fișa de exerciții, ex. 5-6.',
          },
        ],
        evaluare: 'Observarea rezolvării ghidate și a exercițiului în perechi; fișa de exerciții, ex. 1-4.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-17/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-18/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Lanțul noțiunilor: fiecare elev numește o noțiune de gramatică din unitate și dă un exemplu (substantiv propriu, articol nehotărât, atribut adjectival, prepoziție compusă, subiect multiplu...).',
          },
          {
            etapa: 'Rezolvare ghidată pe textul din „Matilda”',
            timp: '14 min',
            activitate: '– A, ex. 2 (trei substantive care numesc locuința: gen, număr, articol), ex. 3 (subiect simplu și multiplu), ex. 4 (atributele evidențiate), ex. 5 (substantivele proprii), la tablă și în caiete.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1-4, individual, 10 minute.\n– Verificare, 5 minute. Dacă rămâne timp: quizul lecției.',
          },
          {
            etapa: 'Pregătirea descrierii',
            timp: '12 min',
            activitate: '– Fișa de exerciții, ex. 6: descrierea unui obiect din casă pentru un copil de 6 ani; fiecare face planul și scrie începutul; doi-trei elevi citesc.\n– Verificăm pe loc cerințele: o personificare, trei atribute diferite, un subiect multiplu.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: descrierea de la ex. 6, terminată; fișa de exerciții, ex. 5. Anunț evaluarea de ora viitoare.',
          },
        ],
        evaluare: 'Observarea rezolvării ghidate; fișa de exerciții, ex. 1-5; descrierea de la ex. 6.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-3/lectia-18/fisa-exercitii.pdf' },
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
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Distribui testul (p. 106) și foile de lucru; elevii scriu numele.\n– Citesc cu voce tare fragmentul și cerințele; explic punctajul: partea A, 60 de puncte, partea B, 30 de puncte, 10 puncte din oficiu.\n– Recomand împărțirea timpului: cam 20 de minute pentru partea A, 15-20 de minute pentru descriere, 5 minute pentru recitire.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual; răspund doar la întrebări de înțelegere a cerinței.\n– Anunț timpul la jumătate și cu 5 minute înainte de final.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii recitesc și verifică numele; strâng lucrările.\n– Întreb scurt ce li s-a părut ușor și ce li s-a părut greu; notez pentru ora de analiză a rezultatelor.',
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
