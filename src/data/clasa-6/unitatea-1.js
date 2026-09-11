// Unitatea I: Acasă, în familie, printre cărți — clasa a VI-a
// Sursă: Limba și literatura română, manual Art Klett (Sâmihăian, Dobra, Halaszi,
// Davidoiu-Roman, Corcheș), ediția 2023; proiectarea pe unități de învățare
// 2023-2024; planificarea calendaristică.
//
// Manualul își numerotează singur lecțiile Unității I, L1 până la L17 (cuprins,
// pp. 6, 8-9), pe 19 ore de recapitulare inițială + unitate (2 ore recapitulare
// inițială, tratate separat, în afara acestui fișier). Cele 22 de lecții de mai
// jos urmează însă orele din proiectarea pe unități, nu numerotarea manualului:
// decizie explicită a Antoanelei, o resursă pe oră de curs, nu pe pagină de
// manual. Acolo unde o singură lecție de manual (o singură pagină sau pereche de
// pagini) e predată în 2 ore și deci apare aici ca 2 lecții de site, sursaManual
// notează explicit „partea 1/2” și „partea 2/2”, ca să nu pară o eroare de
// citare: paginile citate sunt corecte, doar împărțite pe două ore de curs.
//
// Paginile manualului au fost verificate direct în Art 6.pdf (căutare de text +
// citire pagină cu pagină), nu presupuse. „Semnificațiile textului” apare de
// două ori ca lecție distinctă în manual (L4 și L7), câte o dată pentru fiecare
// text de bază al unității, nu ca variantă split a aceleiași lecții.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.
//
// Materiale: schema și infografic sunt originale, desenate pornind de la
// structurile și exemplele din manual (organizatoare grafice, diagrama
// autor-narator-personaj de la p. 14, exemplele cu „păianjen”). Jocurile
// (quiz) folosesc situații și reguli reale din paginile citate. Fișele
// lecțiilor 4, 7, 9, 10, 15, 18 și 19 sunt materiale de sprijin originale,
// generate cu scripts/build_clasa6_fise.py, cu conținutul de bază (definiții,
// trăsături de specie) din Art 6, notat în casete „Reper”. Pentru lecțiile 1
// și 5 (prezentare) și 22 (test), materialul rămâne null — necesită NotebookLM/
// Canva, respectiv forma finală construită de Antoanela în Google Forms.
// Lecția 12 (joc de rol) rămâne fără material propriu: manualul conține deja,
// la p. 27, o activitate completă de joc de rol, gata de folosit la oră.

export const unitatea1 = {
  id: 'unitatea-1',
  titlu: 'Unitatea I: Acasă, în familie, printre cărți',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ literar. Un păianjen care se crede Spiderman de Adina Popescu',
      obiective: [
        'Identifică informații esențiale din textul narativ Un păianjen care se crede Spiderman de Adina Popescu, povestit din perspectiva unui păianjen narator.',
      ],
      sursaManual: 'Manual, Lecția 1, pp. 10-12 (Un păianjen care se crede Spiderman de Adina Popescu); Ghidul profesorului, Unitatea I',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. Un păianjen care se crede Spiderman de Adina Popescu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul narativ Un păianjen care se crede Spiderman de Adina Popescu, povestit din perspectiva unui păianjen narator.',
        ],
        resurse: [
          'Manual Art 6, pp. 10-12',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-1/fisa-exercitii.pdf)',
          'Caietele elevilor',
          'O cutie pentru „cutia corespondenței”',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '8 min',
            activitate: '– „Pentru început”, p. 10, ex. 1: fiecare notează primele idei și imagini legate de cuvântul „acasă”; le adun pe tablă, grupate (familia, obiceiuri, obiecte dragi, animale de companie).\n– Ex. 2: prezint modelul blazonului familiei (numele, prenumele, membrii familiei, timpul liber, un obicei, valoarea familiei); se completează acasă, pentru portofoliu.',
          },
          {
            etapa: 'Despre autoare',
            timp: '3 min',
            activitate: '– Caseta de la p. 10: Adina Popescu (n. 1978), scriitoare, jurnalistă, autoare de filme documentare; textul e scris special pentru manual.\n– Ați citit „Alice în Țara Minunilor” sau cărți de Roald Dahl? (le putem arăta la oră)',
          },
          {
            etapa: 'Lectura model',
            timp: '13 min',
            activitate: '– Ex. 3: citesc textul cu voce tare; elevii urmăresc în manual cele nouă secvențe.\n– Lămurim cuvintele necunoscute (de izbeliște, migală, împăciuitoare, răzgâiată, a răbufni) și ce este Skype.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '9 min',
            activitate: '– P. 12, ex. 1: fiecare împarte o pagină în patru cadrane (mi-a plăcut, nu mi-a plăcut, n-am înțeles, mi-a amintit de) și le completează; câțiva citesc.\n– Ex. 2: fiecare notează o întrebare pentru Adina Popescu.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (cine face?) și ex. 2 (adevărat sau fals?), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: ex. 3 de la „Impresii” (ce carte i-ai recomanda păianjenului și de ce), pe un bilet, pentru „cutia corespondenței”; alte informații despre autoare; blazonul familiei; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2; blazonul, în portofoliu.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-1/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Narațiunea. Acțiunea. Timpul și spațiul',
      obiective: [
        'Identifică acțiunea, indiciile de timp și de spațiu dintr-un text narativ, pe baza textului Un păianjen care se crede Spiderman.',
      ],
      sursaManual: 'Manual, Lecția 2, p. 13',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Narațiunea. Acțiunea. Timpul și spațiul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică acțiunea, indiciile de timp și de spațiu dintr-un text narativ, pe baza textului Un păianjen care se crede Spiderman.',
        ],
        resurse: [
          'Manual Art 6, p. 13',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-2/fisa-exercitii.pdf)',
          'Schema „Acțiunea, timpul și spațiul într-o narațiune” (/materiale/clasa-6/unitatea-1/lectia-2/schema.svg)',
          'Coli A4 pentru ideile principale',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Citesc câteva bilete din „cutia corespondenței”; clasa ghicește cine a recomandat cartea.\n– Doi elevi spun ce au aflat nou despre autoare.',
          },
          {
            etapa: 'Ideile principale',
            timp: '12 min',
            activitate: '– „Explorare”, p. 13, ex. 1: grupe de 2-3, fiecare cu una dintre cele nouă secvențe; găsesc cuvintele-cheie și scriu ideea principală pe o jumătate de coală.\n– Ex. 2: grupele lipesc colile pe tablă; doi elevi le ordonează, cu ajutorul clasei; toți notează ideile în caiete.',
          },
          {
            etapa: 'Scena preferată',
            timp: '3 min',
            activitate: '– Ex. 3: cea mai amuzantă și cea mai tristă scenă; fiecare își compară răspunsul cu colegul de bancă.',
          },
          {
            etapa: 'Spațiul',
            timp: '6 min',
            activitate: '– Ex. 4-5, în aceleași grupe: indicii de spațiu din secvență, legați de personajele care apar acolo; un membru al grupei schițează locul.',
          },
          {
            etapa: 'Timpul',
            timp: '5 min',
            activitate: '– Ex. 6-7, frontal: anotimpul și partea zilei; pasajele care trimit la întâmplări de dinainte de acțiunea din prim-plan.',
          },
          {
            etapa: 'Notițe: narațiunea',
            timp: '3 min',
            activitate: '– În caiete, după Repere și schema lecției: textul narativ, ordinea logică și temporală, secvențele (ca scenele unui film), indicii de timp pentru prim-plan și pentru momente anterioare.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '4 min',
            activitate: '– Frontal: acțiunea din prim-plan și amintirile se petrec în același spațiu? La ce folosesc pasajele despre trecut? Ex. 3: câte scene ar avea filmul, pe scurt.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (firul întâmplărilor) și ex. 2 (prim-plan sau amintire?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Provocări”, banda desenată pornind de la schițe, cu un semn pentru amintiri; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Colile cu ideile principale; observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-2/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-2/schema.svg', titlu: 'Acțiunea, timpul și spațiul într-o narațiune' },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Narațiunea la persoana I. Autorul, naratorul, personajul',
      obiective: [
        'Diferențiază autorul, naratorul și personajul într-un text narativ la persoana I, pe baza textului Un păianjen care se crede Spiderman.',
      ],
      sursaManual: 'Manual, Lecția 3, pp. 14-15',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Narațiunea la persoana I. Autorul, naratorul, personajul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Diferențiază autorul, naratorul și personajul într-un text narativ la persoana I, pe baza textului Un păianjen care se crede Spiderman.',
        ],
        resurse: [
          'Manual Art 6, pp. 14-15',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-3/fisa-exercitii.pdf)',
          'Schema „Autorul, naratorul, personajul” (/materiale/clasa-6/unitatea-1/lectia-3/schema.svg)',
          'Coli pentru postere',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Benzile desenate se afișează; scurt tur al galeriei, cu câte o apreciere.',
          },
          {
            etapa: 'Explorare, ex. 1-5',
            timp: '6 min',
            activitate: '– Frontal, p. 14: cine e autoarea; cine relatează; la ce persoană; care sunt personajele; un text din clasa a V-a cu narator-personaj.',
          },
          {
            etapa: 'Notițe: autor, narator, personaj',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: cele două lumi (reală: autorul, cititorul; ficțiunea: naratorul, personajele); naratorul la persoana I e și personaj.',
          },
          {
            etapa: 'Aplicații, ex. 1-4',
            timp: '8 min',
            activitate: '– Ex. 1-2: diferența dintre cele două lumi; de ce păianjenul-narator nu e autoarea.\n– Ex. 3: figura de stil care îl face pe păianjen să vorbească și prin ce diferă de un păianjen obișnuit.\n– Ex. 4: cum își spune păianjenul gândurile și sentimentele (exemple din text).',
          },
          {
            etapa: 'Posterele personajelor',
            timp: '12 min',
            activitate: '– Ex. 5: trei grupe (Maria, mama, păianjenul); cinci minute în perechi pe schema de la p. 15, apoi posterul grupei.\n– Câte un membru prezintă posterul și răspunde la întrebări.',
          },
          {
            etapa: 'Păpușarul',
            timp: '3 min',
            activitate: '– Ex. 7: imaginea păpușarului cu marionetele: cine e autorul, cine sunt personajele?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '9 min',
            activitate: '– Pagina 1: ex. 1 (real sau ficțiune?), ex. 2 (persoana a III-a) și ex. 3 (fapt, gând sau sentiment?), individual, 6 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Portofoliu”, textul rescris din perspectiva Mariei; fișa de exerciții, pagina 2. Punerea în scenă (ex. 6) rămâne pentru o oră de lectură, dacă avem timp.',
          },
        ],
        evaluare: 'Posterele grupelor; observarea sistematică; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-3/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-3/schema.svg', titlu: 'Autorul, naratorul, personajul' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului (Un păianjen care se crede Spiderman)',
      obiective: [
        'Formulează o opinie argumentată despre semnificația textului Un păianjen care se crede Spiderman.',
      ],
      sursaManual: 'Manual, Lecția 4, p. 16',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului (Un păianjen care se crede Spiderman)',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie argumentată despre semnificația textului Un păianjen care se crede Spiderman.',
        ],
        resurse: [
          'Manual Art 6, p. 16',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Citesc două fragmente scurte cu naratori-animale (sugestiile din ghid) și elevii ghicesc cine povestește.',
          },
          {
            etapa: 'Interpretare, ex. 1-5',
            timp: '8 min',
            activitate: '– Frontal, p. 16: ce efect are un păianjen-narator; emoțiile din relatare și momentele lor; de ce îi consideră pe Maria și pe părinții ei familia lui; cartea lui preferată; ce spune despre Maria raftul cu Roald Dahl.',
          },
          {
            etapa: 'Interpretare, ex. 6-11',
            timp: '8 min',
            activitate: '– Personajele din „Alice în Țara Minunilor” din ilustrație; de ce își dorește păianjenul o familie; familia Mariei în trei adjective; personajul de care ne simțim aproape; de ce se crede Spiderman; notele pentru titlu (ex. 11).',
          },
          {
            etapa: 'Discuție pe grupe',
            timp: '7 min',
            activitate: '– Ex. 12: grupe de 4-5 discută afirmația că observațiile celor din familie nu înseamnă că nu țin la tine, pornind de la reproșurile mamei; un raportor spune concluzia.',
          },
          {
            etapa: 'Ideea preferată',
            timp: '2 min',
            activitate: '– Ex. 13: câțiva elevi spun, într-un enunț, ideea din text pe care au apreciat-o cel mai mult.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce înseamnă familia?) și ex. 2 (de acord sau nu?), individual, 8 minute.\n– Verificare, 4 minute; primesc orice răspuns bine argumentat.',
          },
          {
            etapa: 'Bilet de ieșire',
            timp: '4 min',
            activitate: '– Fișa lecției, „Ideea centrală”: fiecare o formulează într-o propoziție și predă biletul.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Portofoliu”, textul de 90-100 de cuvinte despre responsabilitățile din familie; „Provocări” (a, b sau c, la alegere); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea discuției pe grupe; biletele de ieșire; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-1/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Textul descriptiv literar în proză. Indescriptibil de Simona Popescu',
      obiective: [
        'Identifică trăsăturile textului descriptiv literar în proză, pe baza textului Indescriptibil de Simona Popescu.',
      ],
      sursaManual: 'Manual, Lecția 5, pp. 17-18 (Indescriptibil de Simona Popescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul descriptiv literar în proză. Indescriptibil de Simona Popescu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile textului descriptiv literar în proză, pe baza textului Indescriptibil de Simona Popescu.',
        ],
        resurse: [
          'Manual Art 6, pp. 17-18',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-5/fisa-exercitii.pdf)',
          'Un dicționar tipărit sau dexonline.ro',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– „Pentru început”, p. 17, ex. 1: fiecare descrie în câteva rânduri prima carte de care își amintește ceva deosebit; schimbă caietul cu colegul de bancă și discută.',
          },
          {
            etapa: 'Despre autoare',
            timp: '2 min',
            activitate: '– Caseta de la p. 17: Simona Popescu (n. 1965), poetă și prozatoare; pentru ea, cărțile sunt ca o jucărie; textul e scris pentru manual.',
          },
          {
            etapa: 'Lectura model',
            timp: '12 min',
            activitate: '– Citesc textul cu voce tare; elevii urmăresc.\n– Lămurim cuvintele din subsol (postav, cimilitură, nacelă, nabab, nahlap, naiadă, criptogramă, crisalidă) și cuvântul „lăuntric”.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '7 min',
            activitate: '– P. 18, ex. 1: fiecare notează un enunț din text care l-a atras și explică de ce.\n– Ex. 2: amintim structura unui articol de dicționar (pe dexonline, pentru „emoție”); fiecare definește, ca în dicționar, o emoție simțită la lectură.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (adevărat sau fals?) și ex. 2 (jocul de-a ghicitul, pe dos), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Jocul de-a ghicitul',
            timp: '5 min',
            activitate: '– Deschid dicționarul la întâmplare și citesc trei definiții; elevii ghicesc cuvântul.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Pentru început”, ex. 2 (descrierea unei cărți, în cel mult 100 de cuvinte, cu cele opt cuvinte-cheie); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-5/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Descrierea în proză',
      obiective: [
        'Recunoaște elementele descrierii într-un text în proză: obiectul descris, proprietățile și elementele componente.',
      ],
      sursaManual: 'Manual, Lecția 6, p. 19',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea în proză',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște elementele descrierii într-un text în proză: obiectul descris, proprietățile și elementele componente.',
        ],
        resurse: [
          'Manual Art 6, p. 19',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-6/fisa-exercitii.pdf)',
          'Schema „Descrierea în proză” (/materiale/clasa-6/unitatea-1/lectia-6/schema.svg)',
          'Un dicționar sau dexonline.ro',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi elevi citesc descrierea unei cărți cu cele opt cuvinte-cheie; clasa spune ce cuvinte i-au ajutat să și-o imagineze.',
          },
          {
            etapa: 'Explorare, ex. 1-2',
            timp: '9 min',
            activitate: '– Ex. 1: căutăm în dicționar cuvintele necunoscute din text.\n– Ex. 2, în perechi: schema descrierii Dicționarului școlarului din primul paragraf (denumirea, proprietățile, elementele componente); o completăm apoi la tablă.',
          },
          {
            etapa: 'Explorare, ex. 3-6',
            timp: '9 min',
            activitate: '– Ex. 3: cum arată dicționarul pentru oricine și cum îl simte copilul; ex. 4: ce vedeți, simțiți, gândiți la „familie” și „carte”.\n– Ex. 5: cele două secvențe de la p. 19 (ce descriu, cum arată sau cum e perceput obiectul); ex. 6: comparația cu „jucăriile cu cheiță”.',
          },
          {
            etapa: 'Notițe: descrierea',
            timp: '4 min',
            activitate: '– În caiete, după Repere și schema lecției: textul descriptiv literar (prezentare sugestivă), rolul descrierii, cele cinci simțuri, sentimentele și gândurile.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '7 min',
            activitate: '– Frontal: cum e descrisă „cugetarea” în ghicitoare; secvența descriptivă din paragraful al treilea și trăsăturile ei; rolul adjectivelor din paragraful al cincilea.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1-2 (ghiozdanul bunicului și schema descrierii) și ex. 3 (obiectiv sau subiectiv?), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Aplicații”, ex. 4 (secvența descriptivă preferată și de ce); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Schemele completate în perechi; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-6/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-6/schema.svg', titlu: 'Descrierea în proză' },
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Semnificațiile textului (Indescriptibil)',
      obiective: [
        'Formulează o opinie argumentată despre semnificația textului Indescriptibil de Simona Popescu.',
      ],
      sursaManual: 'Manual, Lecția 7, p. 20',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului (Indescriptibil)',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie argumentată despre semnificația textului Indescriptibil de Simona Popescu.',
        ],
        resurse: [
          'Manual Art 6, p. 20',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-7/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-7/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Interpretare, ex. 1-3',
            timp: '8 min',
            activitate: '– Frontal, p. 20: cum „desenează” descrierile lumea; de ce e dicționarul o jucărie din care faci alte jucării; ați jucat și voi jocul de-a ghicitul?',
          },
          {
            etapa: 'Grădina, în perechi',
            timp: '8 min',
            activitate: '– Ex. 4: fiecare descrie o grădină (ce vede, aude, miroase, pipăie, gustă); perechile își compară textele: cheamă același cuvânt aceleași imagini?',
          },
          {
            etapa: 'Interpretare, ex. 5-9',
            timp: '9 min',
            activitate: '– Cuvintele care se ajută unele pe altele; ce cuvinte se ascund în „descriere” și „copil”; lumea lăuntrică, mai mare decât cea din afară; rolul simțurilor și al imaginației; titlul „Indescriptibil”.',
          },
          {
            etapa: 'Călătoriile imaginare',
            timp: '3 min',
            activitate: '– Ex. 10: vă plac călătoriile imaginare prin texte? Două-trei opinii motivate.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce înțeleg eu) și ex. 2 (lumea ta lăuntrică), individual, 8 minute.\n– Citim câteva răspunsuri, 4 minute.',
          },
          {
            etapa: 'Ghicitori în perechi',
            timp: '6 min',
            activitate: '– „Provocări”, ex. 2: perechile scriu o ghicitoare prin descriere și o citesc; clasa ghicește și spune ce detalii au ajutat.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Provocări”, ex. 1 (descrierea bibliotecii din imagini și a lumilor imaginare de dincolo de ele); fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea discuției și a lucrului în perechi; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-7/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-1/lectia-7/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Textele continue și discontinue',
      obiective: [
        'Diferențiază textele continue de textele discontinue și recunoaște exemple din fiecare categorie.',
      ],
      sursaManual: 'Manual, Lecția 8, p. 21',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textele continue și discontinue',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Diferențiază textele continue de textele discontinue și recunoaște exemple din fiecare categorie.',
        ],
        resurse: [
          'Manual Art 6, p. 21',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-8/fisa-exercitii.pdf)',
          'Infograficul „Texte continue și texte discontinue” (/materiale/clasa-6/unitatea-1/lectia-8/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi elevi citesc descrierea bibliotecii, din „scaunul autorului”; colegii dau feedback.',
          },
          {
            etapa: 'Explorare, ex. 1-3',
            timp: '10 min',
            activitate: '– Ex. 1: ce cărți se pot citi „pe sărite” și de ce.\n– Ex. 2-3: observăm imaginile a-i (poezie, listă, orar, grafice, pagină de dicționar) și le grupăm în două categorii.',
          },
          {
            etapa: 'Notițe: textele continue și discontinue',
            timp: '5 min',
            activitate: '– În caiete, după Repere și infograficul lecției: textele continue (propoziții, paragrafe) și discontinue (liste, tabele, calendare, grafice, scheme, articole de dicționar), cu exemple.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '4 min',
            activitate: '– Frontal: ce fel de text e Dicționarul școlarului; ce tip de text vi se pare mai greu de înțeles și de ce.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (continuu sau discontinuu?), ex. 2 (din continuu în discontinuu) și ex. 3 (unde găsești răspunsul?), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Texte discontinue din viața de zi cu zi',
            timp: '6 min',
            activitate: '– Pe grupe: o listă de texte discontinue (hartă, plan de evacuare, meniu, bon, bilet de tren) și ce informații dă fiecare; raportorii citesc listele.',
          },
          {
            etapa: 'Autoevaluare L1-L8',
            timp: '4 min',
            activitate: '– P. 21: elevii completează cele trei afirmații; citim câteva și notez ce trebuie reluat.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; minitestul din manualul digital, opțional.',
          },
        ],
        evaluare: 'Listele grupelor; autoevaluarea; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-8/fisa-exercitii.pdf' },
        joc: null,
        infografic: { fisier: '/materiale/clasa-6/unitatea-1/lectia-8/infografic.svg', titlu: 'Texte continue și texte discontinue' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Text auxiliar. Lectura în trei, în doi, de unul singur de Rodica Zane',
      obiective: [
        'Compară textul auxiliar Lectura în trei, în doi, de unul singur de Rodica Zane cu textele de bază ale unității, folosind jurnalul cu dublă intrare.',
      ],
      sursaManual: 'Manual, Lecția 9, „Noi pagini, alte idei”, pp. 22-23 (Lectura în trei, în doi, de unul singur de Rodica Zane)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Lectura în trei, în doi, de unul singur de Rodica Zane',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Compară textul auxiliar Lectura în trei, în doi, de unul singur de Rodica Zane cu textele de bază ale unității, folosind jurnalul cu dublă intrare.',
        ],
        resurse: [
          'Manual Art 6, pp. 22-23',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-9/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-9/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Ce povești ascultați înainte să știți să citiți? Cine vi le citea, unde, când?',
          },
          {
            etapa: 'Lectura cu jurnalul cu dublă intrare',
            timp: '14 min',
            activitate: '– Explic jurnalul cu dublă intrare (în stânga pasajul, în dreapta de ce l-am notat); fiecare citește în gând textul de la p. 22 și notează cel puțin trei pasaje în fișa lecției.',
          },
          {
            etapa: 'Discutarea textului, ex. 1-6',
            timp: '10 min',
            activitate: '– Ex. 1: elevii își compară jurnalele în perechi sau în grupuri de 3-4.\n– Ex. 2-3: desenul și paragraful potrivit; asemănări cu păianjenul Adinei Popescu și cu lectura dicționarului.\n– Ex. 4-6: tema textului, în ce alte texte apare, ce vrea să spună autoarea despre „primele cărți”.',
          },
          {
            etapa: 'Discutarea textului, ex. 7-10',
            timp: '7 min',
            activitate: '– O altă comparație pentru carte sau poveste; cărți recitite; ce aștepți de la o carte bună (lista de la ex. 9); secvența finală a textului.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (cele trei feluri de lectură) și ex. 2 (adevărat sau fals?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Biblioteci deschise',
            timp: '2 min',
            activitate: '– Recomand „Invizibilii” de Ioana Pârvulescu și „Inimă de cerneală” de Cornelia Funke.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Portofoliu”, pagina de jurnal despre prima carte citită singur (pe coală A4, pentru volumul clasei); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Jurnalul cu dublă intrare; observarea discuției; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-9/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-1/lectia-9/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Valori etice în legendele popoarelor. Legenda păianjenului și a albinei',
      obiective: [
        'Identifică valorile etice transmise de Legenda păianjenului și a albinei și recunoaște trăsăturile legendei ca specie.',
      ],
      sursaManual: 'Manual, Lecția 10, pp. 24-25 (Legenda păianjenului și a albinei)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Valori etice în legendele popoarelor. Legenda păianjenului și a albinei',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Identifică valorile etice transmise de Legenda păianjenului și a albinei și recunoaște trăsăturile legendei ca specie.',
        ],
        resurse: [
          'Manual Art 6, pp. 24-25',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-10/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-10/fisa.pdf)',
          'O foaie pentru acoperirea paragrafelor la lectura predictivă',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 24, ex. 1: cu ce asociați albina și păianjenul? Comparăm asocierile.\n– Ex. 2: un simbol pentru ideea de familie (o figură sau o vietate).',
          },
          {
            etapa: 'Lectura predictivă',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1: elevii citesc paragraf cu paragraf, cu restul acoperit; după fiecare, notează ce cred că urmează; câțiva citesc predicțiile.\n– Ex. 2: câte predicții s-au adeverit și de ce a fost ușor sau greu.',
          },
          {
            etapa: 'Explorare, ex. 3-6',
            timp: '8 min',
            activitate: '– Ex. 3: cu cine semeni, fata sau băiatul? Ex. 4: de ce îi iubește mama pe amândoi la fel.\n– Ex. 5: valorile fetei, ale băiatului și ale mamei, în caiete; ex. 6: semnificația legendei (grupe de 2-3 aleg una dintre variante).',
          },
          {
            etapa: 'Notițe: legenda',
            timp: '5 min',
            activitate: '– În caiete, după Repere: legenda; legendele mitologice (deceurile, cum le-a numit B.P. Hasdeu) și legendele istorice; explicații diferite la popoare diferite.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– În perechi: ce reprezintă păianjenul la greci (Arahne), în tradiția islamică (Peștera Thawr), la tribul Hopi (Femeia Păianjen); tipul legendelor din lecție.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (fapta și urmarea) și ex. 2 (mitologică sau istorică?), individual, 8 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Provocări”, ex. 2 (povestea unui păianjen, dintr-un mit, o carte sau un film, și ce simbolizează); fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Predicțiile și valorile notate; observarea lucrului în perechi; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-10/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-1/lectia-10/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Contextul de comunicare (I)',
      obiective: [
        'Analizează contextul de comunicare dintr-un dialog: identitatea interlocutorilor, relația dintre ei, locul și scopul comunicării.',
      ],
      sursaManual: 'Manual, Lecția 11, pp. 26-27, partea 1/2 (Contextul de comunicare, analiza dialogului Maria-mama)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Contextul de comunicare (I)',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Analizează contextul de comunicare dintr-un dialog: identitatea interlocutorilor, relația dintre ei, locul și scopul comunicării.',
        ],
        resurse: [
          'Manual Art 6, pp. 26-27',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-11/fisa-exercitii.pdf)',
          'Quizul „Contextul de comunicare” (materialul de joc al lecției)',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 26, ex. 1: o situație în care comunicați ușor și una în care vă e greu.\n– Ex. 2: în care dintre situațiile din listă se poate comunica bine? Elevii aleg și explică.',
          },
          {
            etapa: 'Dialogul Maria – mama',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1, frontal: cine sunt personajele și ce relație au (cuvintele care o arată); unde are loc dialogul și dacă sunt condiții bune; de ce apelează Maria la mama; ce exprimă ultima replică a mamei; de ce „Fugiți!” și „URIAȘ” scris cu majuscule; cum ar anunța Maria descoperirea la ora de română.',
          },
          {
            etapa: 'Ex. 2',
            timp: '3 min',
            activitate: '– Fragmentul fără nume: ați înțeles cine vorbește? De ce?',
          },
          {
            etapa: 'Notițe: contextul de comunicare',
            timp: '5 min',
            activitate: '– În caiete, după Repere: componentele contextului (participanții, statutul, locul, momentul; informațiile, opiniile, intențiile; locul enunțului) și adaptarea limbajului, a adresării, a tonului.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1-2 (dialogul de la bibliotecă și contextul lui), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '6 min',
            activitate: '– Quizul „Contextul de comunicare”, frontal; discutăm răspunsurile greșite.',
          },
          {
            etapa: 'Pregătirea jocului de rol',
            timp: '4 min',
            activitate: '– Formez cele patru perechi pentru ora următoare și le dau scenariile de la p. 27; tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-11/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Contextul de comunicare',
          pasi: [
            {
              intrebare: 'În dialogul dintre Maria și mama ei, despre păianjenul din cameră, care este relația dintre cei doi interlocutori?',
              variante: [
                { text: 'Relație de familie, mamă și fiică', corect: true, explicatie: 'Contextul de comunicare include identitatea și relația dintre interlocutori, aici o relație de familie.' },
                { text: 'Relație de prietenie, între colegi', corect: false, explicatie: 'Cele două personaje sunt mamă și fiică, nu colege.' },
                { text: 'Relație profesională, elev și profesor', corect: false, explicatie: 'Dialogul se poartă acasă, nu la școală.' },
              ],
              indiciu: 'Recitește prima replică: „Fugiți! Un păianjen URIAȘ în camera mea!”',
              sursa: 'Manual, Lecția 11, p. 26',
            },
            {
              intrebare: 'De ce apelează Maria la mama ei în acest dialog?',
              variante: [
                { text: 'Îi solicită ajutorul, ca să scape de păianjen', corect: true, explicatie: 'Maria cere insistent ajutorul mamei: „Caută-l!”' },
                { text: 'Vrea s-o convingă că în cameră e ordine', corect: false, explicatie: 'Dimpotrivă, mama e cea care observă dezordinea.' },
                { text: 'Îi reproșează ceva mamei', corect: false, explicatie: 'Maria cere ajutor, nu face un reproș.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 11, p. 26',
            },
            {
              intrebare: 'De ce crezi că autoarea a scris cu majusculă cuvântul URIAȘ, în prima replică a Mariei?',
              variante: [
                { text: 'Ca să arate spaima și exagerarea Mariei', corect: true, explicatie: 'Majuscula are aici rol expresiv, marchează intensitatea emoției, nu o regulă gramaticală obișnuită.' },
                { text: 'Pentru că toate adjectivele se scriu cu majusculă', corect: false, explicatie: 'Adjectivele nu se scriu cu majusculă în mod normal.' },
                { text: 'Din greșeală de tipar', corect: false, explicatie: 'E o alegere stilistică deliberată a autoarei.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 11, p. 26',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Contextul de comunicare (II), joc de rol',
      obiective: [
        'Construiește, prin joc de rol, un dialog adecvat unui context de comunicare dat.',
      ],
      sursaManual: 'Manual, Lecția 11, pp. 26-27, partea 2/2 (Contextul de comunicare, joc de rol pe perechi)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Contextul de comunicare (II), joc de rol',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Construiește, prin joc de rol, un dialog adecvat unui context de comunicare dat.',
        ],
        resurse: [
          'Manual Art 6, p. 27, jocul de rol și grila de evaluare',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-12/fisa-exercitii.pdf)',
        ],
        desfasurare: [
          {
            etapa: 'Reamintire',
            timp: '3 min',
            activitate: '– Componentele contextului de comunicare: cine, cu cine, unde, când, cu ce intenție.',
          },
          {
            etapa: 'Pregătirea',
            timp: '8 min',
            activitate: '– Fiecare pereche își completează fișa de pregătire (fișa de exerciții, ex. 1) și stabilește scenariul, 5 minute.\n– Explic grila de evaluare de la p. 27 (adresarea, adaptarea la condiții grele, cunoștințele comune) și grila de observare din fișă (ex. 3).',
          },
          {
            etapa: 'Jocurile de rol',
            timp: '26 min',
            activitate: '– Perechile joacă pe rând: copil și părinte (animalul de companie), frate și soră, nepot și bunicul care aude greu, copil și vecin; câte trei minute de joc.\n– După fiecare, observatorii dau calificative pe grilă și justifică prin exemple concrete; actorii explică alegerile lor.',
          },
          {
            etapa: 'Replica potrivită',
            timp: '4 min',
            activitate: '– Fișa de exerciții, ex. 2, frontal: ce replică se potrivește bunicului care aude greu și de ce.',
          },
          {
            etapa: 'Reflecții',
            timp: '6 min',
            activitate: '– „Reflecții”, p. 27: ce a fost cel mai greu (adaptarea la interlocutor, bruiajele, intențiile celuilalt)? Actorii răspund, observatorii comentează.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: un dialog scris, de 8-10 replici, pentru unul dintre celelalte scenarii; fișa de exerciții, ex. 4.',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 27 și pe grila din fișă; observarea sistematică.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-12/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Cuvântul. Sinonimele și antonimele',
      obiective: [
        'Reactualizează și aprofundează identificarea și folosirea adecvată a sinonimelor și a antonimelor.',
      ],
      sursaManual: 'Manual, Lecția 12, pp. 28-29',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cuvântul. Sinonimele și antonimele',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Reactualizează și aprofundează identificarea și folosirea adecvată a sinonimelor și a antonimelor.',
        ],
        resurse: [
          'Manual Art 6, pp. 28-29',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-13/fisa-exercitii.pdf)',
          'Schema „Cuvântul. Sinonimele și antonimele” (/materiale/clasa-6/unitatea-1/lectia-13/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 28, ex. 1-4: în perechi, cât mai multe cuvinte din literele prinse în pânză (două minute); forma și sensul a trei cuvinte; sinonimul care sugerează cel mai bine o familie unită; antonime pentru „însorit” și „tânăr”.',
          },
          {
            etapa: 'Cuvântul: sens și formă',
            timp: '5 min',
            activitate: '– „Explorare”, ex. 1-3: imaginile și cuvintele potrivite; perechile cu același sens; cuvintele cu aceeași formă și sens diferit.',
          },
          {
            etapa: 'Notițe: cuvântul',
            timp: '4 min',
            activitate: '– În caiete, după Repere și schema lecției: cuvântul (sens și formă), contextul care stabilește sensul, exemple (ban, broască).',
          },
          {
            etapa: 'Sinonime și antonime',
            timp: '10 min',
            activitate: '– „Explorare”, ex. 1-4, frontal: asocieri de sinonime, perechi de antonime, intrușii din serii, perechea fără antonime.\n– Ex. 5-8, în perechi: sinonime și antonime pentru expresii; verificăm câteva.',
          },
          {
            etapa: 'Notițe: sinonimia și antonimia',
            timp: '3 min',
            activitate: '– În caiete, după Repere: definițiile; aceeași parte de vorbire; contextul; sinonimia și antonimia între cuvinte, între cuvânt și expresie, între expresii; antonimele au sens diametral opus (mare – mic), altfel e doar o opoziție (fată – băiat).',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Ex. 1, oral: sinonimul potrivit pentru „mare” în cele șase enunțuri.\n– Ex. 2, pe grupe: sinonime și antonime pentru „bucurie”, „cunoscut”, „a pleca”, cu câte un enunț.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (aceeași formă, alt sens) și ex. 2 (sinonime pentru „tare”), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 3-4; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; lucrul pe grupe; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-13/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-13/schema.svg', titlu: 'Cuvântul. Sinonimele și antonimele' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Sensurile cuvintelor',
      obiective: [
        'Diferențiază sensul propriu de bază, sensul propriu secundar și sensul figurat al unui cuvânt.',
      ],
      sursaManual: 'Manual, Lecția 13, pp. 30-31',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Sensurile cuvintelor',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Diferențiază sensul propriu de bază, sensul propriu secundar și sensul figurat al unui cuvânt.',
        ],
        resurse: [
          'Manual Art 6, pp. 30-31',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-14/fisa-exercitii.pdf)',
          'Schema „Sensurile cuvintelor” (/materiale/clasa-6/unitatea-1/lectia-14/schema.svg)',
          'DEX sau dexonline.ro',
        ],
        desfasurare: [
          {
            etapa: 'Joc de dezgheț',
            timp: '4 min',
            activitate: '– Un cuvânt comun pentru o țesătură, o pânză de păianjen și un tablou: fiecare îl scrie pe un bilețel; numărăm câți au găsit „pânză”.',
          },
          {
            etapa: 'Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Cele trei enunțuri cu „păianjen” (poarta de fotbal, biblioteca, emoțiile): unde numește ceva concret? Ce înseamnă în al treilea?',
          },
          {
            etapa: 'Notițe: sensurile',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: sensul propriu de bază, sensul propriu secundar, sensul figurat, cu exemplele cu „picior”; expresiile au sens în ansamblu (floarea vârstei).',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '7 min',
            activitate: '– Ex. 1: sensurile lui „inimă”; ex. 2: articolul DEX pentru „aripă” și sensul din fiecare enunț; ex. 3: „aripă” cu sens figurat.',
          },
          {
            etapa: 'Aplicații, ex. 4-5',
            timp: '6 min',
            activitate: '– Ex. 4, în perechi: sens propriu sau figurat (a-j); ex. 5: sensurile verbului „a aprinde”; verificăm frontal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (ce sens are?) și ex. 2 (un cuvânt, trei sensuri), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Posterele sensurilor',
            timp: '6 min',
            activitate: '– Ex. 6: grupe de 3-4, fiecare cu un cuvânt (gură, dinte, cap, sprânceană): câte un enunț pentru fiecare sens; confruntăm răspunsurile.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Aplicații”, ex. 7-8; „Provocări”, ex. 2 (dialogul amuzant bazat pe o confuzie de sens); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Posterele grupelor; observarea sistematică; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-14/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-14/schema.svg', titlu: 'Sensurile cuvintelor' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Omonimele. Cuvintele polisemantice',
      obiective: [
        'Diferențiază omonimele de cuvintele polisemantice și recunoaște exemple din fiecare categorie.',
      ],
      sursaManual: 'Manual, Lecția 14, pp. 32-33',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Omonimele. Cuvintele polisemantice',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Diferențiază omonimele de cuvintele polisemantice și recunoaște exemple din fiecare categorie.',
        ],
        resurse: [
          'Manual Art 6, pp. 32-33',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-15/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-15/fisa.pdf)',
          'DEX sau dexonline.ro',
        ],
        desfasurare: [
          {
            etapa: 'Explorare: omonimele',
            timp: '10 min',
            activitate: '– Ex. 1: câte un enunț cu „ramă” pentru fiecare imagine; ex. 2: comparăm articolele DEX pentru ramă1 și ramă2.\n– Ex. 3-4: sensurile cuvintelor din versurile Constanței Buzea și propoziții cu alt sens; ex. 5: „poartă”, substantiv și verb.',
          },
          {
            etapa: 'Notițe: omonimele',
            timp: '6 min',
            activitate: '– În caiete, după Repere: omonimele (aceeași formă, sensuri fără legătură); lexicale totale și parțiale, lexico-gramaticale; omofone și omografe (vésela – vesélă nu sunt omonime); ortogramele (neam – ne-am) nu sunt omonime.',
          },
          {
            etapa: 'Explorare: cuvintele polisemantice',
            timp: '8 min',
            activitate: '– Ex. 1-2: sensurile lui „masă” și ce le leagă; ex. 3: enunțuri cu omonime ale lui „masă”; ex. 4: cuvinte cu „poli-”, cu dicționarul.',
          },
          {
            etapa: 'Notițe: polisemia',
            timp: '2 min',
            activitate: '– În caiete: cuvântul polisemantic (sensuri legate între ele), spre deosebire de omonime.',
          },
          {
            etapa: 'Aplicații, ex. 1-4',
            timp: '6 min',
            activitate: '– Frontal: asocierea omonimelor cu sensurile (elan, fermă, arie); de ce „uni” și „companie” nu sunt omonime; pluralul potrivit (coarne, cornuri, corni); sinonimele verbului „a face”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce fel de omonime?) și ex. 2 (sensurile verbului „a trage”), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Bilet de ieșire',
            timp: '3 min',
            activitate: '– Fișa lecției, ex. 1 (omonim sau polisemantic?): fiecare rezolvă primele două perechi și predă biletul.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Provocări” (pisălogul și efectul omonimiei în poezie); fișa lecției, terminată; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică; biletele de ieșire; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-15/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-1/lectia-15/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Diftongul, triftongul, hiatul',
      obiective: [
        'Identifică diftongul, triftongul și vocalele în hiat într-un cuvânt dat.',
      ],
      sursaManual: 'Manual, Lecția 15, pp. 34-35',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Diftongul, triftongul, hiatul',
        data: null,
        tipOra: 'Predare, fonetică',
        durata: 50,
        obiective: [
          'Identifică diftongul, triftongul și vocalele în hiat într-un cuvânt dat.',
        ],
        resurse: [
          'Manual Art 6, pp. 34-35',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-16/fisa-exercitii.pdf)',
          'Schema „Diftongul, triftongul, hiatul” (/materiale/clasa-6/unitatea-1/lectia-16/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– „Pentru început”, p. 34: ilustrația cu Maria și păianjenul; sunetele din „Maria” și din numele elevilor.',
          },
          {
            etapa: 'Explorare: diftongul',
            timp: '8 min',
            activitate: '– Ex. 1-5, frontal: sunetele din „pă-ian-jen”, vocala și semivocala în „vai” și „biet”, ce se întâmplă în „geam”, câte sunete are verbul „e”.',
          },
          {
            etapa: 'Notițe: diftongul',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: diftongul ascendent (floa-re) și descendent (mâi-ne); ce, ci, ge, gi, che, chi, ghe, ghi înaintea vocalei nu formează de obicei diftong; „este”, „el”, „ele” se pronunță cu diftong.',
          },
          {
            etapa: 'Explorare: triftongul',
            timp: '6 min',
            activitate: '– Ex. 1-5: silabele din „tigroaică” și „leoaică”; cuvinte cu „eoa” și „iai”; sunetele din „eu”; grupul „te-ai”.',
          },
          {
            etapa: 'Notițe: triftongul',
            timp: '2 min',
            activitate: '– În caiete: triftongul (cre-ioa-ne); „eu”, „ei” se pronunță cu triftong; cuvintele legate prin cratimă (mi-a, ne-au).',
          },
          {
            etapa: 'Hiatul',
            timp: '3 min',
            activitate: '– „Explorare”, ex. 1-2: vocalele din „u-ri-aș” și poziția lor; notăm definiția hiatului (ca-i-să).',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '8 min',
            activitate: '– Frontal: despărțim în silabe și încercuim diftongii (cai, fier, gutui...); ascendenți și descendenți; triftongii din „aripioară”, „lăcrămioară”, „maiou”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (diftong, triftong sau hiat?) și ex. 2 (urcător sau coborâtor?), individual, 8 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 4-7; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-16/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-16/schema.svg', titlu: 'Diftongul, triftongul, hiatul' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Despărțirea în silabe',
      obiective: [
        'Desparte în silabe cuvinte care conțin grupuri consonantice, diftongi și triftongi, conform regulilor învățate.',
      ],
      sursaManual: 'Manual, Lecția 16, pp. 36-37',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Despărțirea în silabe',
        data: null,
        tipOra: 'Predare, fonetică',
        durata: 50,
        obiective: [
          'Desparte în silabe cuvinte care conțin grupuri consonantice, diftongi și triftongi, conform regulilor învățate.',
        ],
        resurse: [
          'Manual Art 6, pp. 36-37',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-17/fisa-exercitii.pdf)',
          'Quizul „Despărțirea în silabe” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Explorare”, p. 36, ex. 1-2: cântăm „Un elefant se legăna” și urmărim partitura; cuvintele de o silabă și cele cu mai multe silabe.',
          },
          {
            etapa: 'Regulile, descoperite pe rând',
            timp: '14 min',
            activitate: '– O consoană între vocale (e-le-fant, ru-pea); două consoane (pân-ză) și excepția cu l sau r (seriile ca-blu, co-dru); trei consoane (pen-tru) și excepțiile (sculp-tor, punc-te); două vocale alăturate (a-vi-on, ma-iou).\n– După fiecare set de exerciții, notăm regula în caiet, cu un exemplu.',
          },
          {
            etapa: 'Liniuța de despărțire',
            timp: '2 min',
            activitate: '– Biletul de la p. 37: liniuța se scrie o singură dată, la capăt de rând; nu se confundă cu cratima.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '8 min',
            activitate: '– Ex. 1: recunoaștem regula aplicată (a-le-e, bar-bă, ci-fru...); ex. 2, în perechi: despărțim cuvintele din listă și spunem regula.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (regula aplicată) și ex. 2 (despărțirea corectă), individual, 8 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Despărțirea în silabe”, frontal.',
          },
          {
            etapa: 'Autoevaluare L12-L16',
            timp: '3 min',
            activitate: '– P. 37: elevii completează cele trei afirmații.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: „Aplicații”, ex. 3 (fișa cu toate regulile, colorată); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Quizul; autoevaluarea; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-17/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Despărțirea în silabe',
          pasi: [
            {
              intrebare: 'În câte silabe se desparte cuvântul elefant?',
              variante: [
                { text: '3 silabe: e-le-fant', corect: true, explicatie: 'O consoană între două vocale trece la silaba următoare, de aceea „l” trece la „le”.' },
                { text: '4 silabe: e-l-e-fant', corect: false, explicatie: 'Consoana „l” nu poate forma singură o silabă, trebuie să însoțească o vocală.' },
                { text: '2 silabe: ele-fant', corect: false, explicatie: 'Silaba „ele” ar conține două vocale separate, ceea ce nu e corect.' },
              ],
              indiciu: 'O silabă conține, de obicei, o singură vocală.',
              sursa: 'Manual, Lecția 16, p. 36',
            },
            {
              intrebare: 'Cuvântul pânză se desparte pân-ză. Câte consoane sunt între cele două vocale, â și ă?',
              variante: [
                { text: 'Două: n și z', corect: true, explicatie: 'Când sunt două consoane între vocale, prima rămâne la silaba dinainte, a doua trece la silaba următoare.' },
                { text: 'O singură consoană, n', corect: false, explicatie: 'Sunt de fapt două consoane, n și z, între cele două vocale.' },
                { text: 'Trei consoane', corect: false, explicatie: 'Doar n și z se află între vocalele â și ă.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 16, p. 36',
            },
            {
              intrebare: 'Cuvântul rupea conține diftongul ea. Ce se întâmplă cu o consoană aflată înaintea unui diftong, la despărțirea în silabe?',
              variante: [
                { text: 'Trece la silaba următoare, ca în ru-pea', corect: true, explicatie: 'Dacă înaintea unei consoane se află un diftong sau un triftong, consoana trece la silaba următoare.' },
                { text: 'Rămâne la silaba dinainte', corect: false, explicatie: 'Regula pentru consoana dinaintea unui diftong e alta: trece la silaba următoare.' },
                { text: 'Se desparte de diftong', corect: false, explicatie: 'Diftongul nu se desparte niciodată în silabe diferite.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 16, p. 37',
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
      titlu: 'Trăsăturile stilului. Jurnalul ca specie',
      obiective: [
        'Identifică trăsăturile stilului (proprietate, puritate, originalitate, adecvare situațională) într-un text-suport, Jurnalul Annei Frank.',
      ],
      sursaManual: 'Manual, Lecția 17, pp. 38-39, partea 1/2 (Redactarea unei narațiuni la persoana I. Stilul — text-suport, Jurnalul Annei Frank)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Trăsăturile stilului. Jurnalul ca specie',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Identifică trăsăturile stilului (proprietate, puritate, originalitate, adecvare situațională) într-un text-suport, Jurnalul Annei Frank.',
        ],
        resurse: [
          'Manual Art 6, pp. 38-39',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-18/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-18/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 38, ex. 1-2: ați citit sau ați ținut un jurnal? La ce v-ar folosi? Discuție în grupuri de 3-4, apoi câteva răspunsuri.',
          },
          {
            etapa: 'Contextul',
            timp: '3 min',
            activitate: '– Anne Frank: Amsterdam, 1942, familia ascunsă doi ani, jurnalul scris ca scrisori către o prietenă imaginară, Kitty.',
          },
          {
            etapa: 'Lectura textului',
            timp: '8 min',
            activitate: '– Citesc însemnarea din 8 iulie 1942; elevii urmăresc. Ex. 2: ce v-a impresionat cel mai mult?',
          },
          {
            etapa: 'Explorare, ex. 3-4',
            timp: '7 min',
            activitate: '– Ex. 3: timpul și spațiul, orele, succesiunea întâmplărilor, participanții, cu exemple din text.\n– Ex. 4: elementele specifice jurnalului (data, adresarea, persoana I, trăirile).',
          },
          {
            etapa: 'Notițe: stilul',
            timp: '6 min',
            activitate: '– În caiete, după Repere și fișa lecției: proprietatea termenilor, puritatea, originalitatea (creativitate, forță de evocare, personalizare), adecvarea situațională, cu câte un exemplu.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '6 min',
            activitate: '– Pe grupe: stilul Annei Frank după cele trei criterii; raportorii prezintă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce trăsătură lipsește?) și ex. 2-3 (elementele jurnalului Ioanei), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 2 (lista evenimentelor importante din familie și alegerea unuia pentru pagina de jurnal); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; fișa lecției; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-18/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-1/lectia-18/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Redactarea unei pagini de jurnal',
      obiective: [
        'Redactează o pagină de jurnal la persoana I, cu respectarea trăsăturilor stilului învățate.',
      ],
      sursaManual: 'Manual, Lecția 17, pp. 38-39, partea 2/2 (Redactarea unei narațiuni la persoana I. Stilul — redactare și interevaluare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Redactarea unei pagini de jurnal',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o pagină de jurnal la persoana I, cu respectarea trăsăturilor stilului învățate.',
        ],
        resurse: [
          'Manual Art 6, p. 39, grila de interevaluare',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-19/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-19/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Planul',
            timp: '7 min',
            activitate: '– Fiecare pornește de la evenimentul ales acasă și completează planul din fișa de exerciții (ex. 1): data, adresarea, trei momente, ce a simțit, încheierea.',
          },
          {
            etapa: 'Revizuirea, pe un model',
            timp: '7 min',
            activitate: '– Fișa de exerciții, ex. 2: citim însemnarea din fișă; elevii descoperă ce nu respectă forma jurnalului și trăsăturile stilului, apoi o rescriu.',
          },
          {
            etapa: 'Redactarea',
            timp: '20 min',
            activitate: '– Fiecare scrie pagina de jurnal pe fișa lecției (ciorna), după plan, la persoana I, cu gânduri și emoții, nu doar fapte.\n– Trec pe la bănci și ajut la începutul însemnării și la formulări originale.',
          },
          {
            etapa: 'Interevaluarea',
            timp: '10 min',
            activitate: '– „Aplicații”, ex. 3: elevii schimbă caietele și se evaluează pe grila de la p. 39 și pe grila din fișă (ex. 3), cu exemple.',
          },
          {
            etapa: 'Lecturi',
            timp: '3 min',
            activitate: '– Doi-trei elevi își citesc paginile; clasa spune ce a fost original.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: forma finală a paginii de jurnal, în portofoliu, după observațiile colegului (fișa de exerciții, ex. 4).',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 39; pagina de jurnal, în portofoliu.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-19/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-1/lectia-19/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea I: narațiune, personaje, tipuri de text.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 40-41, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea I: narațiune, personaje, tipuri de text.',
        ],
        resurse: [
          'Manual Art 6, pp. 40-41',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-20/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: '– Fiecare elev numește o noțiune de lectură sau de comunicare din unitate; le scriu pe tablă, într-un ciorchine.',
          },
          {
            etapa: 'Lectura textului',
            timp: '6 min',
            activitate: '– P. 40: citesc fragmentul din „Catherine cea îndărătnică” de Karen Cushman.',
          },
          {
            etapa: 'Ex. 1-5',
            timp: '6 min',
            activitate: '– Frontal: secolul și anul; cele două denumiri ale lunii septembrie; țara, comitatul, satul; autoarea și de unde aflăm; naratoarea și vârsta ei.',
          },
          {
            etapa: 'Arborele genealogic',
            timp: '5 min',
            activitate: '– Ex. 6: în caiete, arborele genealogic al familiei lui Catherine, cu statutul fiecăruia.',
          },
          {
            etapa: 'Ex. 7-12',
            timp: '8 min',
            activitate: '– Persoana și dacă jurnalul e adevărat sau inventat; statutul familiei; o zi din viața unei fete de atunci; ce așteaptă familia de la Catherine; trăsăturile și valorile ei; ce e diferit și ce e la fel azi.',
          },
          {
            etapa: 'Contextul de comunicare',
            timp: '3 min',
            activitate: '– Doi elevi joacă scurt dialogul în care Catherine îi cere mamei să scape de tors; clasa observă adresarea potrivită.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1-3 pe însemnarea „Cartea bunicului” (text nou, scris pentru fișă), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, lectură și comunicare”; notez ce trebuie reluat.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Arborele genealogic; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-20/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce diferență există între autor și narator, într-un text narativ?',
              variante: [
                { text: 'Autorul aparține lumii reale, naratorul aparține ficțiunii', corect: true, explicatie: 'Autorul construiește textul din lumea reală; naratorul e vocea care relatează povestea, în interiorul ficțiunii.' },
                { text: 'Sunt mereu aceeași persoană', corect: false, explicatie: 'Autorul și naratorul nu se confundă niciodată, chiar dacă naratorul povestește la persoana I.' },
                { text: 'Naratorul scrie cartea, autorul o citește', corect: false, explicatie: 'E invers: autorul scrie, cititorul citește, iar naratorul relatează în interiorul textului.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 3, pp. 14-15',
            },
            {
              intrebare: 'Un text organizat în liste, tabele sau grafice, fără legătură gramaticală directă între secvențe, este un text...',
              variante: [
                { text: 'discontinuu', corect: true, explicatie: 'Textele discontinue prezintă informația în secvențe separate: liste, tabele, grafice, scheme.' },
                { text: 'continuu', corect: false, explicatie: 'Textele continue sunt organizate în propoziții și paragrafe, curgătoare.' },
                { text: 'narativ', corect: false, explicatie: 'Narativ se referă la tipul de conținut, nu la modul de organizare grafică a textului.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 21',
            },
            {
              intrebare: 'În textul Un păianjen care se crede Spiderman, la ce persoană este relatată acțiunea?',
              variante: [
                { text: 'Persoana I, naratorul e chiar păianjenul', corect: true, explicatie: 'Naratorul-personaj e păianjenul, care relatează întâmplările din perspectiva lui.' },
                { text: 'Persoana a III-a', corect: false, explicatie: 'Textul e relatat la persoana I, de către păianjen.' },
                { text: 'Persoana a II-a', corect: false, explicatie: 'Persoana a II-a nu se folosește pentru relatarea unei narațiuni.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 1, p. 10',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de vocabular și de fonetică din Unitatea I: sinonime, antonime, sensurile cuvintelor, omonime, diftong, triftong, silabă.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 40-41, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de vocabular și de fonetică din Unitatea I: sinonime, antonime, sensurile cuvintelor, omonime, diftong, triftong, silabă.',
        ],
        resurse: [
          'Manual Art 6, pp. 40-41',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-1/lectia-21/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '3 min',
            activitate: '– Doi elevi citesc dialogul cu bunicul; clasa verifică adresarea.',
          },
          {
            etapa: 'Ex. 13-18',
            timp: '10 min',
            activitate: '– Pe fragmentul din „Catherine cea îndărătnică”: sensul lui „pergament” (ex. 13); sinonime pentru cuvintele și expresiile de la ex. 14; o pereche de antonime (ex. 15); „cerneală” cu sens figurat (ex. 16); omonimele lui „tors” (ex. 17); alt sens pentru „ceas” (ex. 18).',
          },
          {
            etapa: 'Ex. 19-20',
            timp: '7 min',
            activitate: '– Cuvinte cu diftong, triftong, hiat din primele două însemnări; despărțim în silabe cuvintele de la ex. 20, la tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (sinonime și antonime), ex. 2 (omonime sau polisemantic?) și ex. 3 (silabe și sunete), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Pregătirea compunerii',
            timp: '10 min',
            activitate: '– Ex. 21: pagina de jurnal din vremea lui Catherine. Stabilim împreună ce trebuie să conțină (data, adresarea, întâmplări din acea lume, emoții) și reamintim trăsăturile stilului; fiecare își face planul și scrie începutul.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, gramatică și redactare”.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: ex. 21, pagina de jurnal terminată; fișa de exerciții, pagina 2. Anunț evaluarea: vocabular, fonetică, narațiunea la persoana I, pagina de jurnal.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-1/lectia-21/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Care este antonimul cuvântului harnic?',
              variante: [
                { text: 'leneș', corect: true, explicatie: 'Antonimele sunt cuvinte cu formă diferită și sens opus.' },
                { text: 'silitor', corect: false, explicatie: 'Silitor e mai degrabă sinonim, nu antonim, cu harnic.' },
                { text: 'priceput', corect: false, explicatie: 'Priceput nu e opus lui harnic ca sens.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 12, pp. 28-29',
            },
            {
              intrebare: 'Cuvântul ramă poate denumi și o ramă de tablou, și un pește de apă dulce. Ce fel de cuvinte sunt acestea?',
              variante: [
                { text: 'omonime', corect: true, explicatie: 'Omonimele au aceeași formă, dar sensuri complet diferite, fără nicio legătură între ele.' },
                { text: 'sinonime', corect: false, explicatie: 'Sinonimele au formă diferită și sens asemănător, nu e cazul aici.' },
                { text: 'cuvinte polisemantice', corect: false, explicatie: 'La cuvintele polisemantice, sensurile au o legătură între ele; la omonime, nu.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 14, pp. 32-33',
            },
            {
              intrebare: 'În cuvântul uriaș (u-ri-aș), sunetele i și a se află în hiat. Ce înseamnă asta?',
              variante: [
                { text: 'Sunt două vocale alăturate, dar fiecare rămâne în silaba ei', corect: true, explicatie: 'Hiatul apare când două vocale alăturate nu formează diftong, ci rămân în silabe diferite.' },
                { text: 'Formează împreună un diftong', corect: false, explicatie: 'Dacă ar forma diftong, ar fi în aceeași silabă, nu despărțite.' },
                { text: 'Una dintre ele nu se pronunță', corect: false, explicatie: 'Ambele vocale se pronunță, doar că în silabe diferite.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 15, pp. 34-35',
            },
            {
              intrebare: 'Când o singură consoană se află între două vocale, la despărțirea în silabe, consoana...',
              variante: [
                { text: 'trece la silaba următoare', corect: true, explicatie: 'Regula de bază: o consoană între două vocale trece la silaba următoare, ca în le-gă-na.' },
                { text: 'rămâne la silaba dinainte', corect: false, explicatie: 'Regula spune contrariul: consoana trece la silaba următoare.' },
                { text: 'se dublează', corect: false, explicatie: 'Consoana nu se dublează, doar se atașează silabei următoare.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 16, p. 36',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea I.',
      ],
      sursaManual: 'Manual, Evaluare, p. 42',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea I.',
        ],
        resurse: [
          'Testul, Manual Art 6, p. 42',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Distribui testele (fragment după Laura Grünberg, „Într-o carte”, din volumul „Care-i faza cu cititul – seniorii”) și foile de răspuns.\n– Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: sinonime, antonime, sens secundar și figurat, omonime, diftong, triftong, hiat, autor și narator, timp și spațiu, o părere, un comentariu); B, 30 de puncte (o pagină de jurnal despre o experiență de lectură, 20-30 de rânduri); 10 puncte din oficiu.\n– Recomand: circa 25 de minute pentru A, 15 minute pentru B, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual, pe foaia separată; supraveghez discret.\n– Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii își recitesc lucrarea (despărțirea în silabe, ortografia, forma de jurnal), apoi strâng foile.\n– Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.',
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
