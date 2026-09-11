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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-1/fisa-exercitii.pdf)',
          'Prezentarea lecției (/materiale/clasa-5/unitatea-1/lectia-1/prezentare.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 10, ex. 1-3: cuvântul selfie (cuvântul anului 2013, după Dicționarele Oxford); de ce și-au făcut copiii din imaginile a-d fotografiile?\n– Doi-trei elevi povestesc un selfie făcut cu un prieten: când, de ce, ce au simțit.\n– Anunț: citim povestirea unui băiat care vrea să arate, la ora de română, cine e prietenul lui cel mai bun.',
          },
          {
            etapa: 'Lectura model',
            timp: '12 min',
            activitate: '– Citesc eu textul cu voce tare (ex. 4, „Ascultă textul în lectura profesorului”); elevii urmăresc în manual, pp. 10-12.\n– Mă opresc de două ori pentru predicții: după ce Claudia îl avertizează pe Bogdan („Ce idee credeți că a avut?”) și după ce banca începe să latre („Ce va face Bogdan acum?”).',
          },
          {
            etapa: 'Vocabularul textului',
            timp: '5 min',
            activitate: '– Explicăm cuvintele din subsol: rigolă, chihuahua.\n– Elevii spun alte cuvinte pe care nu le-au înțeles (de exemplu: anapoda, a fremăta, hodoronc-tronc); le lămurim din context.\n– Fiecare notează în caiet trei cuvinte noi, cu sensul lor.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '8 min',
            activitate: '– P. 12, ex. 1: elevii împart foaia de caiet în patru cadrane (Mi-a plăcut..., Nu mi-a plăcut..., Nu am înțeles..., Mi-a amintit de...) și le completează, 4 minute.\n– Patru-cinci elevi citesc câte un cadran; lămurim împreună ce „nu am înțeles”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Fișa de exerciții, pagina 1: ex. 1 (ordinea întâmplărilor), ex. 2 (cine face?) și ex. 3 (rezumat cu goluri), individual, 10 minute.\n– Verificare frontală, 5 minute: ordinea din ex. 1 se citește cu voce tare, ca un rezumat oral al textului (rezolvările sunt în notițele profesorului).',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '4 min',
            activitate: '– Discuție scurtă: ce alte texte sau cărți despre prietenie ați citit?\n– Tema: citesc prezentarea autoarei (p. 12) și rezolvă ex. 2 de la p. 12 (o întrebare pentru Ioana Pârvulescu); fișa de exerciții, pagina 2, ex. 5 și 6.',
          },
        ],
        evaluare: 'Observarea sistematică; cadranele cu impresii; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: { fisier: '/materiale/clasa-5/unitatea-1/lectia-1/prezentare.pdf' },
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-1/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-2/fisa-exercitii.pdf)',
          'Prezentarea lecției (/materiale/clasa-5/unitatea-1/lectia-2/prezentare.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei și captarea atenției',
            timp: '6 min',
            activitate: '– Trei-patru elevi citesc întrebarea pentru autoare de la temă.\n– Conduc discuția spre ideea că scriitoarea a ales cum să fie personajele și că le-ar fi putut da și alte trăsături: „Dacă ați fi voi autorii, ce ați schimba la Bogdan?”',
          },
          {
            etapa: 'Dirijarea învățării: textul literar',
            timp: '14 min',
            activitate: '– Explorare „Textul literar”, p. 13, ex. 1-2, frontal: un sentiment din text; universul textului e apropiat sau depărtat de realitate? (cerem motivarea).\n– Ex. 3-4: pe tablă, două coloane, „sensul obișnuit” și „sensul din text”, pentru a foșni, a fremăta, a zgâlțâi, a vorbi (cu florile), a lătra (banca).\n– Ex. 5: trei elevi mimează, pe rând, cel mai amuzant moment; ceilalți ghicesc, cu întrebări la care se răspunde doar prin semne (da, nu, aproape).\n– În caiete, după Repere: textul literar prezintă o lume imaginară, transmite idei, dar mai ales emoții, într-un limbaj expresiv.',
          },
          {
            etapa: 'Dirijarea învățării: înțelegerea textului',
            timp: '10 min',
            activitate: '– Explorare „Înțelegerea textului”, p. 13, ex. 1: personajul principal și trei informații despre el (ce detalii din desen v-au ajutat?).\n– Ex. 2: desenez pe tablă harta relațiilor, cu Bogdan în centru; elevii numesc relațiile de pe săgeți (prietenie, frate-soră, elev-profesor).\n– Ex. 3-5, frontal: cum se poartă Adi; cuvintele despre timp; cele trei locuri ale acțiunii.\n– Concluzie, după Repere: pentru a înțelege o întâmplare, răspundem la Cine? Ce? Când? Unde? Fiecare scrie o propoziție despre ce este vorba în text.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 2 (cele patru întrebări, pe un text nou) și ex. 3 (ce înseamnă de fapt expresiile), individual, 7 minute; verificare, 3 minute.\n– Pagina 2: ex. 4 (emoțiile din text, cu indiciul din text), în perechi, 4 minute; două perechi citesc.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '6 min',
            activitate: '– Pălăriile gânditoare („Provocări”, p. 14), variantă scurtă: șase elevi primesc câte un rol (albă – povestește neutru, roșie – emoțiile lui Bogdan, neagră – îl acuză, galbenă – îl apără, verde – ingeniozitatea lui, albastră – coordonează și trage concluzia).\n– Tema: „Aplicații”, p. 14, ex. 1, 4, 6 și 7, în caiet; „Portofoliu”, ex. 1 (fișele de identitate pentru Bogdan, Claudia și Adi).',
          },
        ],
        evaluare: 'Observarea sistematică; propoziția Cine-Ce-Când-Unde; fișa de exerciții, ex. 2-4.',
      },
      materiale: {
        prezentare: { fisier: '/materiale/clasa-5/unitatea-1/lectia-2/prezentare.pdf' },
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-2/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-3/fisa-exercitii.pdf)',
          'Schema lecției „De la cuvântul-cheie la planul de idei” (/materiale/clasa-5/unitatea-1/lectia-3/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Joc, „Explorare”, p. 15, ex. 1: un minut, fiecare se gândește la o întrebuințare cât mai neobișnuită a unei chei; le notez pe tablă, într-un ciorchine.\n– Legătura: azi căutăm „cheia” unui text, cuvântul care deschide înțelesul fiecărui fragment.',
          },
          {
            etapa: 'Delimitarea textului în fragmente',
            timp: '10 min',
            activitate: '– Ex. 2, în perechi: delimitează povestirea „Prietenul meu” în fragmente logice.\n– Ex. 3: două-trei perechi formează o grupă, își compară delimitările și o aleg pe cea mai bună.\n– Notez pe tablă delimitarea aleasă de clasă, cu primele și ultimele cuvinte ale fiecărui fragment.',
          },
          {
            etapa: 'Dirijarea învățării: cuvântul-cheie și tema',
            timp: '8 min',
            activitate: '– Ex. 4: potrivim substantivele din manual (cățelul, ora de istorie, ghinioane, pedeapsa, lătratul, prietenii, marți, vinovatul) cu fragmentele de pe tablă.\n– Ex. 5: familia, prietenia sau școala? Elevii aleg cuvântul-cheie al întregului text și își motivează alegerea.\n– În caiete, după schema lecției: cuvântul-cheie; tema (se numește printr-un substantiv; teme frecvente: călătoria, copilăria, familia, natura, prietenia, școala).',
          },
          {
            etapa: 'Dirijarea învățării: ideea principală și planul simplu',
            timp: '14 min',
            activitate: '– „Planul simplu de idei”, ex. 1: primul fragment îl facem frontal, după modelul din manual (cuvântul-cheie + un predicat + alte cuvinte); grupele continuă tabelul în caiete.\n– Ex. 2: fiecare grupă scrie planul simplu pe o coală.\n– Ex. 3, turul galeriei, scurt: colile se afișează, grupele trec pe la celelalte și lasă câte o observație.\n– În caiete: ideea principală și planul simplu de idei (ideile principale, în ordinea din text).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (cuvântul-cheie în „Zmeul lui Matei”) și ex. 2 (ideea principală din cuvântul-cheie), individual, 7 minute.\n– Verificare, 3 minute: doi elevi citesc planul obținut.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '3 min',
            activitate: '– Întrebare de final: la ce ne ajută planul simplu de idei când povestim un text?\n– Tema: planul simplu al povestirii, transcris curat în caiet, după observațiile din turul galeriei; fișa de exerciții, pagina 2, ex. 4-6.',
          },
        ],
        evaluare: 'Observarea sistematică; tabelul grupelor (cuvinte-cheie, idei principale); fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-3/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-3/schema.svg', titlu: 'Cuvântul-cheie. Tema. Planul simplu de idei' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Doi elevi citesc planul simplu de idei făcut acasă.\n– Întreb: „Dincolo de întâmplare, ce vrea să ne spună textul?” Notez răspunsurile într-un colț al tablei; le revedem la final.',
          },
          {
            etapa: 'Dirijarea învățării: titlul și comparațiile',
            timp: '10 min',
            activitate: '– „Interpretare”, p. 16, ex. 1: la cine se referă titlul? Votăm variantele a-d cu mâna ridicată, apoi cer argumente pentru fiecare vot.\n– Ex. 2: de ce e comparată ziua cu o mașină condusă de un șofer începător pe un drum cu gropi?\n– Ex. 3: sunteți de acord că profesorii de română dau des teme despre prietenie? De ce credeți că o fac?',
          },
          {
            etapa: 'Dirijarea învățării: gândurile și emoțiile lui Bogdan',
            timp: '12 min',
            activitate: '– Ex. 4: ce înseamnă că oamenii „n-au ochi și ochelari” cu care să-ți vadă sufletul?\n– Ex. 5-6: de ce i se par minutele ore? Elevii dau exemple proprii de timp care trece prea încet sau prea repede.\n– Ex. 7: căutăm în text întrebările fără răspuns ale lui Bogdan și le dăm răspunsuri posibile.\n– Ex. 8-9: de ce n-a fost ziua chiar așa de rea? Care sunt urmările bune? (alegere și argument).\n– Dau feedback constructiv la fiecare răspuns („Ai o abordare interesantă. Te-ai gândit și la...?”).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (aceeași faptă, două fețe) și ex. 2 (de acord sau nu, cu argument din text), în perechi, 8 minute.\n– Patru perechi prezintă câte un răspuns, 4 minute; ceilalți spun dacă argumentul se sprijină pe text.\n– Ex. 3 (dacă Bogdan tăcea), individual, 3 minute.\n– Variantă pentru o clasă mai lentă: fișa de lucru a lecției, în locul ex. 1-2.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '8 min',
            activitate: '– Linia valorică („Provocări”, ex. 3): „Există o legătură între a fi fată sau băiat și rezultatele la școală?” Elevii se așază de o parte și de alta a unei linii imaginare; fiecare grupă aduce două argumente; cine își schimbă locul explică de ce.\n– Revedem ideile notate la început: ce am adăuga acum despre mesajul textului?\n– Tema: p. 16, ex. 10 și 11 (ceasul emoțiilor lui Bogdan); facultativ, „Provocări”, ex. 1 (norii); fișa de exerciții, pagina 2, ex. 6 (biletul de scuze).',
          },
        ],
        evaluare: 'Observarea sistematică; calitatea argumentelor din text; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-1/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-1/lectia-4/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-5/fisa-exercitii.pdf)',
          'Infograficul „Scurtă istorie a selfie-ului” (/materiale/clasa-5/unitatea-1/lectia-5/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 17, ex. 1-2: ce înfățișează cele trei imagini? Ce asemănări și ce deosebiri au?\n– Conduc răspunsurile spre ideea că toate sunt portrete, dar din epoci diferite.\n– Anunț: citim un text care nu povestește, ci informează.',
          },
          {
            etapa: 'Lectura și înțelegerea textului',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1: lectură în gând, 3 minute.\n– Ex. 2: a amuza, a convinge sau a informa? Votăm și cerem argumente.\n– Ex. 3: la ce aspecte din realitate se referă textul? Le trecem pe tablă pe o axă a timpului: 1524, 1839, 2002, 2013, 2016.\n– Ex. 4: limbajul e obișnuit sau neobișnuit? Comparăm cu o frază expresivă din „Prietenul meu”.\n– În caiete, după Repere: textul nonliterar, cele trei scopuri, exemple (afișul, invitația, rețeta, eticheta, articolul de dicționar etc.).',
          },
          {
            etapa: 'Aplicații pe textul din manual',
            timp: '10 min',
            activitate: '– În perechi: ex. 1 (cuvântul-cheie al fiecărui paragraf), ex. 2 (ideile principale), ex. 3 (diferența dintre sensul din DEX și cel din dicționarele Oxford).\n– Verificare frontală rapidă, cu infograficul lecției pe proiector.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (literar sau nonliterar, cu scopul) și ex. 2 (ce fel de text este), individual, 8 minute; verificare, 4 minute.\n– Ex. 3 (din literar, în nonliterar), 3 minute; doi elevi citesc variantele lor.',
          },
          {
            etapa: 'Reflecție, autoevaluare și temă',
            timp: '7 min',
            activitate: '– „Reflecții”, p. 17: e dificil să citești un text nonliterar? Ce părere aveți despre selfie-uri?\n– Autoevaluare L1-L5: fiecare completează în caiet cele trei afirmații (cel mai important..., cel mai mult mi-a plăcut..., cel mai dificil...).\n– Tema: „Aplicații”, ex. 4; fișa de exerciții, pagina 2, ex. 4 și 5 (afișul clasei); minitestul, dacă îl folosesc.',
          },
        ],
        evaluare: 'Observarea sistematică; autoevaluarea L1-L5; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-5/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-6/fisa-exercitii.pdf)',
          'Quizul „Descoperirea lui Lulu” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Aveți un prieten de dinainte de școală? Vă amintiți o întâmplare amuzantă cu el?” Răspund doi-trei elevi.\n– Predicții pornind de la titlu și de la imaginea din manual: despre ce va fi fragmentul?',
          },
          {
            etapa: 'Lectura',
            timp: '10 min',
            activitate: '– Citesc fragmentul cu voce tare (sau pornesc înregistrarea din manualul digital).\n– Explic cuvintele din subsol pe măsură ce apar: auroră, într-adins, zenit, a tălmăci, răgaz, dezolat, sacru, a mântui; și expresia „a ține sub trei lacăte și șapte peceți”.',
          },
          {
            etapa: 'Discutarea textului',
            timp: '13 min',
            activitate: '– „Discutarea textului”, p. 19, ex. 1-5, frontal: unde și când; cum i se adresau prietenii; ce profesie avea tatăl (ce secvență v-a ajutat?); personajele; descoperirea.\n– Ex. 6, cu mâna ridicată pentru fiecare variantă (A-C).\n– Ex. 8-9: ce cuvinte arată că descoperirea era secretă (elevii le notează în caiet)? De ce credeți că i-a dezvăluit secretul lui Adam?\n– Dau feedback constructiv, cu întrebări de continuare.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (adevărat sau fals) și ex. 2 (cuvintele din glosar, în propoziții noi), individual, 7 minute.\n– Ex. 3 (încercarea celor doi prieteni), în perechi, 5 minute.\n– Verificare, 3 minute.\n– Dacă rămâne timp: quizul „Descoperirea lui Lulu”, pe proiector.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '7 min',
            activitate: '– Ex. 11: ce legătură are fragmentul cu „Prietenul meu”?\n– Ex. 12-13: un elev povestește o experiență în care a descoperit importanța prieteniei; alții recomandă o carte despre prietenie (vezi și „Biblioteci deschise”: „Minunea”, „Amintiri din copilărie”).\n– Tema: ex. 7 (planul simplu de idei al fragmentului, individual) și ex. 10 (răspunsul la „de ce nu crapă în două?”); fișa de exerciții, pagina 2, ex. 4 (doi povestitori).',
          },
        ],
        evaluare: 'Observarea sistematică; răspunsurile la ex. 1-9; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-6/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-7/fisa-exercitii.pdf)',
          'Infograficul „Cele cinci emoții din «Întors pe dos»” (/materiale/clasa-5/unitatea-1/lectia-7/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– „Pentru început”, p. 20, ex. 1-2: ce emoții ale lui Bogdan și ale povestitorului lui Blaga vă sunt cunoscute? Ce nume au emoțiile voastre înainte de un test?\n– Ex. 3: fiecare asociază o culoare pentru surpriză, iubire, descurajare, neliniște; comparăm alegerile și observăm că fiecare simte altfel aceeași emoție.',
          },
          {
            etapa: 'Explorare: filmul „Întors pe dos”',
            timp: '13 min',
            activitate: '– Citim prezentarea filmului (p. 20). Dacă am proiector, arăt o secvență scurtă din film, pregătită dinainte.\n– Ex. 2, frontal: asociem fiecare personaj-emoție cu descrierea lui.\n– Discuție: sunt emoțiile firești? La ce folosește fiecare?\n– În caiete, după Repere și infograficul lecției: emoțiile, personalitatea, identitatea personală.',
          },
          {
            etapa: 'Aplicații',
            timp: '8 min',
            activitate: '– „Aplicații”, p. 21, ex. 1-3, frontal: ce descoperă Bucuria despre Dezgust, Frică și Furie; de ce i se pare inutilă Tristețea; care sunt valorile, pasiunea și însușirile lui Riley (insulele personalității).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (ce emoție trăiești?), ex. 2 (termometrul emoțiilor) și ex. 3 (emoție sau însușire?), individual, 9 minute.\n– Verificare, 4 minute; insist pe ex. 3: emoția trece, însușirea rămâne.\n– Pagina 2, ex. 5 (ce ți-ar spune emoțiile în prima zi într-o școală nouă), oral, 2 minute.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '7 min',
            activitate: '– „Provocări”, ex. 1: ar fi viața mai bună fără emoții? Fiecare notează două schimbări pozitive și două negative; câțiva citesc.\n– Tema: „Aplicații”, ex. 4-5 (portretul emoțiilor tale); „Portofoliu” (insulele personalității tale); fișa de exerciții, pagina 2, ex. 6 (scrisoare pentru Bucurie).',
          },
        ],
        evaluare: 'Observarea sistematică; participarea la discuție; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-7/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-8/fisa-exercitii.pdf)',
          'Schema „Exprimarea adecvată a emoțiilor. Roluri în comunicare” (/materiale/clasa-5/unitatea-1/lectia-8/schema.svg)',
          'Quizul cu același titlu (materialul de joc al lecției)',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 22, ex. 1-2, frontal: după ce semne vă dați seama că cineva are emoții? În ce situații e potrivit să ți le arăți?',
          },
          {
            etapa: 'Explorare: cele două desene',
            timp: '10 min',
            activitate: '– Desenul A, întrebările a-f: ce emoție se vede, cum o exprimă fata, cine e vorbitor și cine ascultător, ce se schimbă când fata răspunde.\n– Desenul B, întrebările a-c: emoțiile și semnele care le trădează; două perechi improvizează dialogul celor doi copii.\n– Întrebări suplimentare: comunică personajele? Prin câte moduri? Când șoptim sau strigăm, transmitem un mesaj? Ce roluri pot avea participanții?',
          },
          {
            etapa: 'Dirijarea învățării: tipurile de comunicare',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: comunicarea verbală (orală, scrisă), nonverbală (mimică, gesturi, poziția corpului, privire), paraverbală (intonație, intensitatea vocii, ritm); rolurile de vorbitor și ascultător; comunicarea emoțiilor.',
          },
          {
            etapa: 'Aplicații orale',
            timp: '12 min',
            activitate: '– „Aplicații”, p. 23, ex. 1: asociem oral simbolurile cu emoțiile.\n– Ex. 2: trei-patru elevi mimează câte o situație din manual; clasa ghicește emoția.\n– Ex. 3, în perechi, cu bilețelele (bucurie, tristețe, frică, furie, dezgust): „Sunt ... pentru că ... și mă simt de parcă ...” / „Îmi pare bine (rău) că simți așa, pentru că ...”; apoi rolurile se schimbă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (verbal, nonverbal, paraverbal) și ex. 3 (potrivit sau nepotrivit), individual, 6 minute.\n– Ex. 2 (dialogul dintre Tudor și Ana), 3 minute.\n– Verificare, 4 minute. Dacă rămâne timp: quizul lecției.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– „Reflecții”, p. 23, ex. 1-2: e bine să ne comunicăm emoțiile? Când ar trebui să le temperăm?\n– Tema: „Reflecții”, ex. 3 (trei reguli de comunicare a emoțiilor); „Portofoliu” (portretul chinezesc); fișa de exerciții, pagina 2, ex. 4 și 6.',
          },
        ],
        evaluare: 'Observarea sistematică a participării la jocurile de rol; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-8/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-8/schema.svg', titlu: 'Exprimarea adecvată a emoțiilor. Roluri în comunicare' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-9/fisa-exercitii.pdf)',
          'Schema „Propoziția. Tipuri de propoziții” (/materiale/clasa-5/unitatea-1/lectia-9/schema.svg)',
          'Quizul „Subiectul și predicatul” (materialul de joc al lecției)',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției și reactualizarea',
            timp: '6 min',
            activitate: '– Elevii deschid manualul la p. 24 și citesc în gând schimbul de mesaje dintre Ruxi și Ilinca.\n– Frontal, ex. 1-2 de la „Pentru început”: găsesc predicatele, le numără, apoi numără propozițiile.\n– Îi las să formuleze singuri concluzia: câte predicate, atâtea propoziții.\n– Reactualizare din clasa a IV-a: „Ce arată predicatul? Dar subiectul?” Doi-trei elevi dau câte un exemplu.\n– Scriu titlul pe tablă și le spun ce vor ști la final: să recunoască o propoziție și să spună dacă e simplă sau dezvoltată, afirmativă sau negativă.',
          },
          {
            etapa: 'Dirijarea învățării: propoziția simplă și dezvoltată',
            timp: '10 min',
            activitate: '– Explorare, p. 24, ex. 1: elevii caută în a treia replică propoziția alcătuită doar din subiect și predicat.\n– Ex. 2: tăiem, în celelalte propoziții, tot ce nu e predicat. Întreb: „Mai înțelegem ceva? Ce am pierdut?” Concluzia: predicatul poate forma singur propoziția, dar celelalte cuvinte îi îmbogățesc înțelesul.\n– Pe tablă și în caiete, după schema lecției: definiția propoziției; părțile principale (predicatul arată ce face subiectul, subiectul arată cine face acțiunea); părțile secundare; propoziția simplă și cea dezvoltată.\n– Exemplu pe tablă: „Joi latră.” (simplă) → „Joi latră tare în rucsac.” (dezvoltată). Subliniem predicatul cu o linie și subiectul cu două linii, ca în manual.',
          },
          {
            etapa: 'Dirijarea învățării: propoziția afirmativă și negativă',
            timp: '5 min',
            activitate: '– Explorare, p. 24 jos: elevii compară „Vorbesc cu Ilinca la telefon.” cu „Nu vorbesc cu Adi.” și spun ce s-a schimbat în forma verbului.\n– În caiete, după Repere: propoziția afirmativă și cea negativă, cu exemplul „Cățelul a lătrat. / Cățelul nu a lătrat.”\n– Joc oral, „Întoarce propoziția”: spun trei propoziții, elevii le transformă pe loc (Adi râde. / Joi nu doarme. / Bogdan întârzie.).',
          },
          {
            etapa: 'Dirijarea învățării: ortografia și punctuația',
            timp: '7 min',
            activitate: '– Explorare, p. 25, ex. 1-4, frontal, pe schimbul de mesaje și pe scena ilustrată.\n– Întrebări suplimentare, sugerate de ghid: De ce s-a folosit semnul întrebării? Dar semnul exclamării? Când s-a pus punctul? În ce situații apare virgula?\n– În caiete, după Repere: literă mare la început; la final punct, semnul întrebării sau al exclamării; virgula după o strigare și între termenii unei enumerări; două puncte înaintea enumerării; linia de dialog.\n– La ex. 4, un elev scrie pe tablă dialogul dintre Ruxi și Ilinca, cu linie de dialog; clasa corectează.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '17 min',
            activitate: '– Împart fișa de exerciții. Pagina 1 (ex. 1-5), individual, 10 minute, cu cronometrul pe tablă.\n– Verificare frontală, 5 minute: câte un elev citește răspunsul, clasa confirmă sau corectează (rezolvările sunt în notițele profesorului). Insist pe ex. 2: „Bună, Irina!” nu are predicat, deci nu e propoziție.\n– Ultimele 2 minute, în perechi: ex. 6, „Scara propoziției”. Câștigă perechea care urcă toate treptele corect.\n– Elevii care termină repede trec la ex. 7, „Potrivește”; cu cei care se blochează lucrez la ex. 3. Dacă rămâne timp: quizul „Subiectul și predicatul”, pe proiector.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– Reflecție, „Deschideri”, p. 25: cum ar fi o lume în care oamenii n-ar folosi propoziții, ci cuvinte înșiruite la întâmplare? Răspund doi-trei elevi.\n– Bilet de ieșire: pe o foaie, fiecare scrie o propoziție simplă, apoi aceeași propoziție dezvoltată și negativă. Le strâng la ușă.\n– Tema: manual, p. 25, Aplicații, ex. 1, 4, 5 și 7; fișa de exerciții, pagina 2, ex. 8 și 9.',
          },
        ],
        evaluare: 'Observarea sistematică; verificarea fișei de exerciții (ex. 1-5) și a biletelor de ieșire; tema (manual, p. 25, ex. 1, 4, 5, 7).',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-9/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-9/schema.svg', titlu: 'Propoziția. Tipuri de propoziții' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-10/fisa-exercitii.pdf)',
          'Schema „Cuvântul și dicționarul” (/materiale/clasa-5/unitatea-1/lectia-10/schema.svg)',
          'Quizul cu același titlu (materialul de joc al lecției)',
          'Un dicționar tipărit',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 26, ex. 1-2: cuvântul pentru fiecare obiect din imagini; ce sensuri are azi cuvântul carte (carte de joc, carte de identitate...)?\n– Arăt un dicționar tipărit: cine l-a folosit și pentru ce?',
          },
          {
            etapa: 'Dirijarea învățării: cuvântul',
            timp: '10 min',
            activitate: '– „Explorare”, p. 26: citim fragmentul lui Dan Coman (cuvântul lemn repetat până nu mai înseamnă nimic).\n– Întrebările a-d, frontal: cuvinte necunoscute deduse din context; sunetele și sensul lui lemn; vară și alt cuvânt cu aceeași formă; prin ce se aseamănă și prin ce se deosebesc a spune și a rosti.\n– În caiete, după Repere: vocabularul; cuvântul (sens și sunete); contextul; cuvinte cu același sens, dar formă diferită, și cuvinte cu aceeași formă, dar sens diferit.',
          },
          {
            etapa: 'Dirijarea învățării: dicționarul',
            timp: '10 min',
            activitate: '– P. 27, ex. 1: fragmentul din „Povestea frindelului”: ce conține un dicționar? Pot intra cuvinte noi?\n– Ex. 2: articolul CÂINE: ce informații ne dă? Le numim pe rând (plural, parte de vorbire, sens, expresii, sens figurat, formă regională, origine); explic semnul ◊.\n– În caiete: dicționarul, tipuri de dicționare, ordinea alfabetică (după prima literă diferită), articolul de dicționar, DEX.',
          },
          {
            etapa: 'Aplicații',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 3, în perechi, ca întrecere: cele 12 cuvinte în ordine alfabetică.\n– Ex. 4, la tablă: seria emoționat, emoție... ordonată, cu literele interioare încercuite.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (același cuvânt, alt sens), ex. 2 (care vine primul în dicționar?) și ex. 3 (pe ce pagină?), individual, 8 minute.\n– Verificare, 5 minute; la ex. 2 și 3 insist pe literele cu diacritice: ă și â după a, î după i, ș după s, ț după t.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '4 min',
            activitate: '– „Deschideri”, p. 27: două informații noi, utile; în ce situații v-ar ajuta un dicționar pe telefon (dexonline)?\n– Tema: „Aplicații”, ex. 1, 2, 5 și 6 (cu DEX sau dexonline); „Portofoliu” (un obiect inventat și articolul lui de dicționar); fișa de exerciții, pagina 2, ex. 4-6.',
          },
        ],
        evaluare: 'Observarea sistematică; întrecerea de la ex. 3; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-10/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-11/fisa-exercitii.pdf)',
          'Schema „Sinonimele. Antonimele” (/materiale/clasa-5/unitatea-1/lectia-11/schema.svg)',
          'Quizul „Sinonime și antonime” (materialul de joc al lecției)',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 28: cum era Riley când Bucuria ținea butoanele și cum era când le lua Tristețea?\n– Bucuria și tristețea sunt emoții asemănătoare sau opuse? De ce?',
          },
          {
            etapa: 'Dirijarea învățării: sinonimele',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1-3: sensul, forma și partea de vorbire a cuvintelor din cele două serii.\n– Ex. 4, la tablă: bun înlocuit cu apropiat, priceput, gustos, valoros, după context.\n– Ex. 5: arbore, pom sau copac? De ce nu se pot înlocui oricând între ele?\n– Ex. 6: un verb în locul expresiilor subliniate.\n– În caiete, după schema lecției: sinonimele; aceeași parte de vorbire; alegerea după context; sinonime pentru fiecare sens; sinonime pentru expresii.',
          },
          {
            etapa: 'Dirijarea învățării: antonimele',
            timp: '5 min',
            activitate: '– „Explorare”, ex. 1-2: cuvintele cu sens opus din textul despre Riley și din secvența lui Blaga (în sus, în jos).\n– În caiete: antonimele, aceeași parte de vorbire.',
          },
          {
            etapa: 'Aplicații frontale',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 2: a scoate înlocuit cu sinonimul potrivit fiecărui context; doi elevi la tablă, ceilalți în caiete.\n– Ex. 3: intrusul din fiecare serie, cu explicație.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (sinonime sau antonime?), ex. 2 (cuvântul mare în contexte diferite) și ex. 3 (expresia într-un cuvânt), individual, 9 minute.\n– Verificare, 4 minute.\n– Pagina 2, ex. 5 (ghicitori cu sinonime și antonime), oral, 2 minute. Dacă rămâne timp: quizul lecției.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– „Deschideri”, p. 29: la ce ne ajută sinonimele și antonimele când vorbim și scriem? Adunăm exemple (evităm repetițiile, nuanțăm, arătăm contrastul).\n– Tema: „Aplicații”, ex. 1, 5, 6, 7 și 9; fișa de exerciții, pagina 2, ex. 4 și 6.',
          },
        ],
        evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-11/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-12/fisa-exercitii.pdf)',
          'Schema „Câmpul lexical” (/materiale/clasa-5/unitatea-1/lectia-12/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Selfie-ul de familie de la p. 30: cine sunt persoanele din fotografie? Ce alcătuiesc ele împreună? Când își face o familie un selfie?',
          },
          {
            etapa: 'Dirijarea învățării: gruparea după sens',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 2: cuvintele din jurul fotografiei care numesc rudenia naturală.\n– Ex. 3-4: desenez pe tablă arborele familiei din fotografie; elevii răspund la întrebări și completează: frate, fiu, fiică, nepoți, unchi, mătușă, verișori; ginere, socri, soț, soție.\n– În caiete, după schema lecției: câmpul lexical (cuvinte legate de aceeași idee, cu trăsături de sens comune și trăsături care le deosebesc).',
          },
          {
            etapa: 'Dirijarea învățării: lărgirea câmpului lexical',
            timp: '6 min',
            activitate: '– Ex. 1-3: un sinonim pentru mătușă; ce parte de vorbire sunt cuvintele; alte cuvinte, derivate și expresii (bunicuță, frate vitreg).\n– În caiete: sinonimele și expresiile intră în câmpul lexical; cuvintele sunt aceeași parte de vorbire; un cuvânt cu mai multe sensuri poate intra în câmpuri diferite (amar).',
          },
          {
            etapa: 'Aplicații',
            timp: '10 min',
            activitate: '– „Aplicații”, ex. 1: citesc versurile lui Shel Silverstein; elevii ridică mâna la fiecare fruct.\n– Ex. 2 și 4, frontal: denumirea câmpurilor lexicale.\n– Ex. 6, joc pe grupe: două minute, cât mai multe cuvinte din câmpul lexical al florii; câștigă grupa cu cele mai multe cuvinte corecte.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (sortează cuvintele), ex. 2 (un cuvânt, două câmpuri) și ex. 3 (ghicitori de familie), individual, 8 minute.\n– Verificare, 5 minute.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '4 min',
            activitate: '– „Deschideri”, ex. 1: la ce alte materii ne ajută câmpul lexical?\n– Tema: „Aplicații”, ex. 3 (zece termeni din câmpul lexical al filmului) și ex. 5 (intrusul); „Deschideri”, ex. 2 (compunere cu un câmp lexical, cuvintele subliniate); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică; jocul pe grupe; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-12/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-12/schema.svg', titlu: 'Câmpul lexical' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-13/fisa-exercitii.pdf)',
          'Schema „Tipurile de sunete” (/materiale/clasa-5/unitatea-1/lectia-13/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Sunetele din jur (ploaia, clopoțelul, vântul) și sunetele cu care vorbim.\n– „Pentru început”, p. 32: Joi a răsturnat cutiile cu litere; care litere redau vocale și care redau consoane?',
          },
          {
            etapa: 'Dirijarea învățării: vocale, consoane, semivocale',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1: despărțim sunet și vocală în silabe; câte vocale are fiecare silabă? Concluzie: o silabă, o singură vocală.\n– Ex. 2 (con-soa-nă, fe-reas-tră, pia-ță, zi-uă): litera colorată redă o vocală sau nu? Pronunț clar vocala din „inimă” și semivocala din „iepure”; elevii repetă.\n– Ex. 3: i-ul de la finalul lui flori și nori; ex. 4: pronunțarea corectă a lui x în exact, exemplu, examinare, expresiv.\n– În caiete, după schema lecției: vocalele, consoanele, semivocalele, i „șoptit”.',
          },
          {
            etapa: 'Dirijarea învățării: alfabetul și corespondența sunet-literă',
            timp: '10 min',
            activitate: '– „Explorare”, ex. 1: jocul cu cartonașe (31 de litere): elevii se așază în ordinea alfabetică; fără cartonașe, spun alfabetul în lanț.\n– Ex. 2-4: litere și sunete în emoție, tristețe, frică, dezgust, text; ce sunete redă x; literele pentru [k], [î], [u], [ŭ], [v].\n– Ex. 5: despărțim la tablă ceață, cireș, ghiozdan, ghețar etc. și observăm când ce, ci, ge, gi, che, chi, ghe, ghi redau un sunet și când două.\n– În caiete: litera, alfabetul (31 de litere), excepțiile de la regula „o literă, un sunet”.',
          },
          {
            etapa: 'Aplicații',
            timp: '6 min',
            activitate: '– „Aplicații”, ex. 1, la tablă: V, C, S sub literele din bancă, idee, ploaie.\n– Ex. 7, oral: vocala i sau i „șoptit” la finalul cuvintelor din listă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1-4, individual, 8 minute.\n– Verificare, 5 minute; la ex. 3 despărțim în silabe, ca să vedem dacă după grupul de litere urmează o vocală.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '4 min',
            activitate: '– „Deschideri”, p. 33: citim cu voce tare o propoziție scrisă fără diacritice; ce se întâmplă cu înțelesul?\n– Tema: „Aplicații”, ex. 3, 4, 6 și 8; fișa de exerciții, pagina 2, ex. 5-7.',
          },
        ],
        evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-4.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-13/fisa-exercitii.pdf' },
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
        schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-13/schema.svg', titlu: 'Tipurile de sunete' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-14/fisa-exercitii.pdf)',
          'Schema „Silaba. Accentul” (/materiale/clasa-5/unitatea-1/lectia-14/schema.svg)',
          'Quizul „Silaba și accentul” (materialul de joc al lecției)',
          'DOOM3',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Bătăi din palme pe silabe: numele a trei-patru elevi, apoi câteva cuvinte date.\n– Citim versurile lui Marin Sorescu de la p. 34.',
          },
          {
            etapa: 'Dirijarea învățării: silaba',
            timp: '8 min',
            activitate: '– „Explorare”, p. 34, a-d: despărțim pornește și pată; cuvântul alcătuit dintr-o singură vocală; cum despărțim albăstrie și purece la capăt de rând; de ce a ales poetul forma purece.\n– În caiete, după schema lecției: silaba; cuvinte cu una, două sau mai multe silabe; liniuța de despărțire, pusă o singură dată, la capăt de rând.',
          },
          {
            etapa: 'Dirijarea învățării: accentul',
            timp: '10 min',
            activitate: '– Ex. 1-2: ce silabă se pronunță mai intens în carte, câmpie, ochelarii, pată?\n– Ex. 3: citim cu voce tare propoziția cu ácele și acéle.\n– Ex. 4-5: pricină și ianuarie (normă și abatere); de ce a pus poetul accent pe puréci?\n– Prezint DOOM3 (vocala accentuată e subliniată) și dexonline.\n– În caiete: accentul; nu are loc fix în limba română; poate deosebi sensul cuvintelor scrise la fel; DOOM3.',
          },
          {
            etapa: 'Aplicații',
            timp: '10 min',
            activitate: '– „Aplicații”, ex. 1 și 5, la tablă: despărțire în silabe și silaba accentuată.\n– Ex. 8, oral: propoziții cu cópii și copíi, véselă și vesélă.\n– Ex. 9: citim în cor lista, cu accentul din DOOM3.\n– Ex. 11: corectăm accentul greșit din cele două propoziții.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1-4, individual, 10 minute.\n– Verificare, 4 minute. Dacă rămâne timp: quizul „Silaba și accentul”.',
          },
          {
            etapa: 'Autoevaluare și temă',
            timp: '4 min',
            activitate: '– Autoevaluare L9-L14: cele trei afirmații, în caiet.\n– Tema: „Aplicații”, ex. 2, 3, 6, 7 și 10; „Deschideri”, ex. 2 (cuvinte auzite accentuate greșit); fișa de exerciții, pagina 2, ex. 5-8; minitestul, dacă îl folosesc.',
          },
        ],
        evaluare: 'Observarea sistematică; autoevaluarea L9-L14; fișa de exerciții, ex. 1-4.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-14/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-15/fisa-exercitii.pdf)',
          'Infograficul „Cele cinci etape ale scrierii” (/materiale/clasa-5/unitatea-1/lectia-15/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 36, ex. 1: fiecare notează trei cuvinte legate de o experiență personală amuzantă.\n– Ex. 2, în perechi: și-o povestesc pe scurt unul altuia.',
          },
          {
            etapa: 'Dirijarea învățării: etapele scrierii',
            timp: '12 min',
            activitate: '– Repere, p. 36, cu infograficul lecției: pregătirea pentru redactare, scrierea ciornei, revizuirea, editarea, publicarea.\n– Pentru fiecare etapă, elevii dau un exemplu de acțiune concretă (aleg subiectul, scriu prima variantă, șterg ce nu e important...).\n– În caiete: cele cinci etape, ca o scară; ne putem întoarce oricând la o treaptă anterioară.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (în ce etapă sunt?) și ex. 2 (pentru cine și de ce scriu?), individual, 6 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Pregătirea propriului text',
            timp: '17 min',
            activitate: '– „Explorare”, ex. 1: fiecare stabilește scopul și publicul relatării despre experiența aleasă.\n– Ex. 2: răspunde, în caiet, la cele șase întrebări: cine? ce? când? unde? de ce? cum?\n– Ex. 3: planul compunerii: introducere, trei-patru idei pentru cuprins, încheiere.\n– Trec printre bănci și ajut; la final, doi elevi citesc planul, iar clasa spune ce ar mai trebui adăugat.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– Care etapă vi s-a părut cea mai grea azi? De ce?\n– Tema: fișa de exerciții, pagina 2, ex. 4-6; planul se aduce ora viitoare (scriem textul).',
          },
        ],
        evaluare: 'Observarea sistematică; planurile relatării; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-15/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-16/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-16/fisa.pdf)',
          'Planul realizat la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției și reactualizarea',
            timp: '5 min',
            activitate: '– Doi elevi citesc planul de ora trecută.\n– Recapitulăm etapele scrierii: la care ajungem azi? (ciorna, revizuirea, editarea).',
          },
          {
            etapa: 'Dirijarea învățării: structura relatării',
            timp: '8 min',
            activitate: '– Repere, p. 37: relatarea; introducerea, cuprinsul și încheierea (cuprinsul e partea cea mai mare); paragraful; cuvintele de legătură (mai întâi, apoi, după aceea, mai târziu, în cele din urmă).\n– Desenez pe tablă modelul de pagină din manual: titlu, introducere, cuprins (Mai întâi..., Apoi..., În cele din urmă...), încheiere.',
          },
          {
            etapa: 'Exersare: fișa de exerciții',
            timp: '9 min',
            activitate: '– Pagina 1: ex. 1 (introducere, cuprins sau încheiere?), ex. 2 (cuvinte care leagă întâmplările) și ex. 3 (unde începe un paragraf nou?), individual, 6 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Scrierea ciornei',
            timp: '15 min',
            activitate: '– „Aplicații”, ex. 1: fiecare scrie ciorna relatării, după plan, pe foaia organizată ca în model.\n– Trec printre bănci; ajut mai ales la introducere (să stârnească interesul) și la ordinea întâmplărilor.',
          },
          {
            etapa: 'Revizuirea în perechi',
            timp: '9 min',
            activitate: '– Ex. 2: colegul de bancă citește textul și dă o sugestie; apoi schimbă rolurile.\n– Ex. 4: fiecare își verifică textul cu lista de control din fișa lecției (Da/Nu la fiecare criteriu).',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '4 min',
            activitate: '– Ex. 6, oral: ce etapă a scrierii a sărit Bogdan când și-a scris compunerea?\n– Tema: ex. 3 (forma finală, după sugestiile colegului, pe fișa lecției); „Deschideri” (impresiile despre scriere, cel mult zece rânduri); fișa de exerciții, pagina 2, ex. 4-6. Ora viitoare, doi-trei elevi citesc din scaunul autorului (ex. 5).',
          },
        ],
        evaluare: 'Lista de control din fișa lecției; observarea revizuirii în perechi; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-1/lectia-16/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-1/lectia-16/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-17/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-17/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Scaunul autorului',
            timp: '6 min',
            activitate: '– Doi-trei elevi citesc relatarea scrisă acasă din scaunul autorului (ex. 5, p. 37); clasa pune câte o întrebare despre text sau despre cum a fost scris.',
          },
          {
            etapa: 'Lectura textului',
            timp: '7 min',
            activitate: '– Citesc fragmentul din „Povestește-mi ceva” de Sharon Creech (p. 38); elevii urmăresc în manual.\n– Primele impresii: ce fel de fată e Salamanca?',
          },
          {
            etapa: 'Rezolvare ghidată, ex. 1-9',
            timp: '15 min',
            activitate: '– Ex. 1, în perechi: fragmentele logice și cuvântul-cheie al fiecăruia.\n– Ex. 2-3, frontal, la tablă: tema (cu motivare) și planul simplu de idei.\n– Ex. 4-5: literar sau nonliterar (cu argumente); Cine? Ce? Când? Unde?\n– Ex. 6-9, oral, rapid: ochii lui Phoebe, emoția Salamancăi, de ce e considerată curajoasă, concluzia de la final.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții, pe un text nou',
            timp: '17 min',
            activitate: '– Textul „Biletele fără semnătură”: pagina 1, ex. 1-3, și pagina 2, ex. 4-5, individual, 12 minute.\n– Verificare, 5 minute: tema, fragmentele și ideile principale se citesc cu voce tare.',
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– Adunăm pe tablă pașii pe care îi facem la un text nou: citesc, răspund la Cine-Ce-Când-Unde, împart în fragmente, găsesc cuvintele-cheie, formulez ideile, stabilesc tema.\n– Tema: fișa de exerciții, pagina 2, ex. 6-8; fișa lecției („Fotografia din primul rând”).',
          },
        ],
        evaluare: 'Observarea sistematică; planul simplu de la ex. 3; fișa de exerciții, ex. 1-5.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-1/lectia-17/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-1/lectia-17/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-18/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și vocabular” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Lanțul noțiunilor: fiecare elev numește o noțiune de limbă din unitate și dă un exemplu (propoziție simplă, sinonim, semivocală, silabă accentuată...).',
          },
          {
            etapa: 'Rezolvare ghidată: gramatică și vocabular',
            timp: '15 min',
            activitate: '– P. 39, ex. 10-11, frontal: felul propozițiilor și transformările cerute.\n– Ex. 12: ce ne lămurește articolul CĂUȘ despre text?\n– Ex. 13, la tablă: ordinea din dicționar.\n– Ex. 14-16, în perechi: sinonime, antonime și câmpul lexical al naturii, pe cuvintele din text.',
          },
          {
            etapa: 'Rezolvare ghidată: fonetică',
            timp: '6 min',
            activitate: '– Ex. 17-19, la tablă: felul sunetelor; litere și sunete; silabe și silaba accentuată.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1, ex. 1-4, și pagina 2, ex. 5-7, individual, 11 minute.\n– Verificare, 4 minute. Dacă rămâne timp: quizul lecției.',
          },
          {
            etapa: 'Pregătirea redactării și temă',
            timp: '9 min',
            activitate: '– Ex. 20: relatarea unei experiențe dintr-o zi obișnuită de școală, cu emoticoane. Fiecare răspunde la cele șase întrebări și face planul, 6 minute.\n– Citim criteriile din manual (conținut, părțile textului, exprimare, ortografie și punctuație, așezare în pagină).\n– Tema: redactarea textului de la ex. 20, cu autoevaluare după criterii; fișa de exerciții, pagina 2, ex. 8. Anunț evaluarea de ora viitoare.',
          },
        ],
        evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-7; textul de la ex. 20, evaluat după criteriile din manual.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-1/lectia-18/fisa-exercitii.pdf' },
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
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Distribui testul (p. 40) și foile de lucru; elevii scriu numele.\n– Citesc cu voce tare fragmentul și cerințele; explic punctajul: partea A, 60 de puncte, partea B, 30 de puncte, 10 puncte din oficiu.\n– Recomand împărțirea timpului: cam 20 de minute pentru partea A, 15-20 de minute pentru relatare, 5 minute pentru recitire.',
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
