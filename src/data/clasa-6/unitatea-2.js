// Unitatea II: Printre colegi și prieteni — clasa a VI-a
// Sursă: manual Art Klett 2023, cuprins pp. 6, 8-9 (numerotare proprie L1-L15);
// proiectarea pe unități 2023-2024; planificarea calendaristică.
//
// Aceeași convenție ca la Unitatea I: 24 de lecții din proiectarea pe unități
// (o resursă pe oră de curs), nu 15 după numerotarea manualului. Paginile au
// fost verificate direct în Art 6.pdf. Unde o lecție de manual (L8 Rezumatul
// oral, L9 Verbul, L14 Complementul și circumstanțialul, L15 Rezumatul scris,
// Recapitularea) e predată în 2 ore și apare aici ca 2 lecții de site,
// sursaManual notează „partea 1/2” și „partea 2/2”.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.
//
// Materiale: schema pentru lecțiile 3, 4, 12, 14, 15, 16, 17, 18, 19. Lecțiile
// 18-19 sunt aceeași pagină de manual (Lecția 14), pe două ore, dar au scheme
// separate, fiecare arată doar conceptul predat în ora respectivă (Complementul
// la 18, Circumstanțialul la 19), ca să nu apară pe ecran, la ora 18, un
// concept (circumstanțialul) neconsemnat încă. Joc pentru 10, 22, 23. Restul
// rămân null, listate în materiale-restante.md.

export const unitatea2 = {
  id: 'unitatea-2',
  titlu: 'Unitatea II: Printre colegi și prieteni',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Proiectul de grup „Prietenia în filme” (anunțare)',
      obiective: [
        'Se familiarizează cu tema, sarcinile, calendarul și criteriile de evaluare ale proiectului de grup Prietenia în filme.',
      ],
      sursaManual: 'Manual, Proiect de grup, p. 60',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiectul de grup „Prietenia în filme” (anunțare)',
        data: null,
        tipOra: 'Proiect, anunțare',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, sarcinile, calendarul și criteriile de evaluare ale proiectului de grup Prietenia în filme.',
        ],
        resurse: [
          'Manual Art 6, pp. 60-61',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-1/fisa.pdf)',
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
            activitate: 'Le arăt cele trei cadre din scurtmetrajul Cântecul (Mindenki) de la p. 60 și îi întreb despre ce cred că e filmul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț proiectul de grup al unității, Prietenia în filme, pe care îl prezentăm peste două săptămâni.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Discutăm ce e un scurtmetraj și prin ce diferă de un lungmetraj, cu Reperele de la p. 60.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Explic sarcina și tehnica arborelui lui Sapiro, parte cu parte: rădăcinile sunt cauzele conflictului, solul e mediul, tulpina sunt cei implicați, scorbura e problema, ramurile sunt efectele, frunzele sunt acțiunile, fructele sunt soluțiile. Formez grupe de 5-7 elevi și stabilim calendarul pe două săptămâni și forma prezentării, poster sau PowerPoint.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Fiecare grupă completează fișa lecției cu rolurile și termenele membrilor, inclusiv cine face prezentarea generală a filmului. Citim împreună criteriile de evaluare de la p. 61.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de organizare a grupei, fără notare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-1/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Textul narativ literar în proză. Oracolul de Mircea Cărtărescu',
      obiective: [
        'Identifică informații esențiale din textul narativ Oracolul de Mircea Cărtărescu.',
      ],
      sursaManual: 'Manual, Lecția 1, pp. 44-46 (Oracolul de Mircea Cărtărescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar în proză. Oracolul de Mircea Cărtărescu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul narativ Oracolul de Mircea Cărtărescu.',
        ],
        resurse: [
          'Manual Art 6, pp. 44-46',
          'Coli pentru planșele de impresii',
          'Bilețele pentru întrebările adresate autorului',
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
            activitate: 'Privim fotografiile cu mâini de la p. 44 și ghicim ce simt oamenii. În perechi, fiecare alege o emoție și povestește într-un minut o situație în care a trăit-o.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că deschidem unitatea cu o povestire de Mircea Cărtărescu despre o clasă a patra și un băiat pus deoparte de colegi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Îi întreb ce cred că înseamnă cuvântul oracol și notez pe tablă ipotezele lor, ca să le verificăm după lectură.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc model textul de la pp. 44-46 și clarificăm cuvintele din subsol, IDR, tebecist, ofticos, preventoriu. Ne oprim la momentele-cheie: pata de pe braț, porecla, oracolul Petruței, ora de desen, dispariția petei, Petruța regăsită după treizeci de ani.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'În grupe de patru, elevii completează pe o coală cele patru cadrane ale impresiilor de lectură, iar un reprezentant prezintă planșa. Cine are timp scrie pe un bilețel o întrebare pentru autor.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri pe planșele de impresii.',
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
      titlu: 'Timpul și spațiul',
      obiective: [
        'Diferențiază timpul desfășurării întâmplărilor de timpul povestirii lor, pe baza textului Oracolul.',
      ],
      sursaManual: 'Manual, Lecția 2, p. 47',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Timpul și spațiul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Diferențiază timpul desfășurării întâmplărilor de timpul povestirii lor, pe baza textului Oracolul.',
        ],
        resurse: [
          'Manual Art 6, pp. 47-48',
          'Schema „Timpul și spațiul într-o narațiune” (/materiale/clasa-6/unitatea-2/lectia-3/schema.svg)',
          'Coli pentru postere, abțibilduri',
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
            activitate: 'Căutăm în primul paragraf indiciul care arată ce vârstă avea naratorul, apoi în final câți ani au trecut până când povestește.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să deosebim timpul în care se petrec întâmplările de timpul în care sunt povestite.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim indicii de timp și de spațiu lucrați la Un păianjen care se crede Spiderman.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'În perechi, elevii asociază cuvintele-cheie de la p. 47, IDR-ul, pata, rușinea, oracolul, ora de desen, miracolul, cu secvențele textului, le ordonează și formulează ideile principale. Cu ajutorul schemei explic timpul desfășurării și timpul povestirii, marcat prin prezent, și episoadele sărite sau comprimate, apoi sortăm reperele temporale de la p. 48.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '14 min',
            activitate: 'Grupe de 4-5 elevi alcătuiesc pe poster planul dezvoltat de idei. Prin turul galeriei, fiecare elev evaluează posterele pe grila de la p. 48 și lipește un abțibild pe cel mai bun.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; interevaluare prin turul galeriei, pe grila de la p. 48.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-3/schema.svg', titlu: 'Timpul și spațiul într-o narațiune' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Etapele acțiunii (momentele subiectului literar)',
      obiective: [
        'Identifică situația inițială, succesiunea de întâmplări și situația finală într-un text narativ.',
      ],
      sursaManual: 'Manual, Lecția 3, pp. 49-51',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Etapele acțiunii (momentele subiectului literar)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică situația inițială, succesiunea de întâmplări și situația finală într-un text narativ.',
        ],
        resurse: [
          'Manual Art 6, pp. 49-51',
          'Schema „Etapele acțiunii” (/materiale/clasa-6/unitatea-2/lectia-4/schema.svg)',
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
            activitate: 'Elevii ordonează cele zece secvențe citate la p. 49 în ordinea în care apar în text.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că împărțim textul în momentele subiectului literar și vedem ce timpuri verbale folosește fiecare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'În grupe de patru, elevii grupează secvențele pe cele trei părți din clasa a V-a: situația inițială, succesiunea de întâmplări, situația finală.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei explic cele cinci momente, expozițiunea, intriga, desfășurarea acțiunii, punctul culminant, deznodământul, și epilogul. Discutăm ce eveniment declanșează acțiunea, alegând dintre variantele de la p. 49, care e momentul de tensiune maximă și ce aduce ultimul paragraf, apoi observăm schimbarea timpurilor verbale de la un moment la altul.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii completează schema de la p. 51, asociind secvențele cu momentele subiectului, apoi discută în perechi care moment a fost cel mai greu de delimitat.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea schemei completate. Temă opțională: filmul poveștii, de la Provocări.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-4/schema.svg', titlu: 'Etapele acțiunii' },
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Personajele',
      obiective: [
        'Identifică trăsăturile personajelor din textul Oracolul, pe baza acțiunilor și a relațiilor dintre ele.',
      ],
      sursaManual: 'Manual, Lecția 4, pp. 52-53',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Personajele',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile personajelor din textul Oracolul, pe baza acțiunilor și a relațiilor dintre ele.',
        ],
        resurse: [
          'Manual Art 6, pp. 52-53',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-5/fisa.pdf)',
          'Bilețele cu numele personajelor',
          'DEX sau dexonline.ro',
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
            activitate: 'Jocul „Vitrina” de la p. 52: elevii extrag bilețele cu personajele, asistenta, băiatul, Iosub, Petruța, Puică, Tovarășa, și se așază în fața clasei pe trei rânduri, după rolul pe care cred că îl are personajul lor.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că vedem ce rol are fiecare personaj și cum îi aflăm trăsăturile.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Stabilim dacă naratorul e participant la acțiune sau doar martor.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Fixăm Reperele de la p. 52: personaj principal, secundar, episodic, personaj colectiv, trăsături numite sau deduse. Deducem trăsăturile grupului de copii din pasajele citate, apoi pe ale lui Puică și ale Petruței, fizice și morale, și discutăm de ce naratorul îi spune „săraca”. Căutăm în DEX sensul cuvântului tovarășă și îl comparăm cu cel din perioada comunistă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi discutăm întrebarea de la Provocări: trăiește băiatul o situație de bullying și cum ar fi procedat ei în locul colegilor?',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-5/fisa.pdf' },
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
        'Formulează o opinie argumentată despre semnificația textului Oracolul de Mircea Cărtărescu.',
      ],
      sursaManual: 'Manual, Lecția 5, pp. 54-55',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie argumentată despre semnificația textului Oracolul de Mircea Cărtărescu.',
        ],
        resurse: [
          'Manual Art 6, pp. 54-55',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-6/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi dacă băiatul se deosebește prin ceva de colegi în primul paragraf, înainte de apariția petei.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că discutăm ce spune povestirea despre excludere, prietenie și lucruri greu de explicat.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm cum se poartă colegii cu băiatul după ce îi descoperă pata și prin ce se distinge Petruța de ceilalți.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Asociem titlul cu cele trei imagini de la p. 54, templul din Delphi, Bocca della Verità, caietul-oracol, și citim fragmentele care le explică. Discutăm de ce aveau copiii caiete-oracol, de ce se așază Petruța lângă băiat, cum explică elevii dispariția petei și ce substantiv ar numi relația dintre cei doi.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi completează autoevaluarea pentru lecțiile 1-5.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; autoevaluarea achizițiilor din lecțiile 1-5. Temă opțională de portofoliu: posterul despre Oracolele Sibiline.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-6/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Text auxiliar. Micuțul Nicolas de Jean-Jacques Sempé și René Goscinny',
      obiective: [
        'Compară textul auxiliar Micuțul Nicolas cu textul de bază al unității și formulează sugestii de lectură.',
      ],
      sursaManual: 'Manual, Lecția 6, „Noi pagini, alte idei”, pp. 56-57 (Micuțul Nicolas de Sempé și Goscinny)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Micuțul Nicolas de Jean-Jacques Sempé și René Goscinny',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Compară textul auxiliar Micuțul Nicolas cu textul de bază al unității și formulează sugestii de lectură.',
        ],
        resurse: [
          'Manual Art 6, pp. 56-57',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-7/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi dacă au avut vreodată un coleg nou venit din altă parte și cum a fost primit.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim o întâmplare amuzantă cu un coleg nou și o comparăm cu Oracolul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim cum se purta grupul de copii cu băiatul din Oracolul, personajul colectiv.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Elevii citesc individual fragmentul de la p. 56 și notează două comentarii despre comportamentul copiilor, pe care le confruntă în perechi. Formulăm întrebări după organizatorul de la p. 57, discutăm prin ce se deosebește George de ceilalți, de ce îl crede Aristide norocos și ce au în comun cele două texte, dintre variantele propuse.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi prezint cele două cărți de la Biblioteci deschise, Val și Cetatea Sufletelor și Magee, zis Maniacul, iar elevii spun pe care ar citi-o și de ce.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; aprecieri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-7/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Valori ale culturii populare în spațiul românesc. Etnii și jocuri de copii',
      obiective: [
        'Recunoaște similitudini între jocurile de copii din diverse comunități etnice din spațiul românesc.',
      ],
      sursaManual: 'Manual, Lecția 7, pp. 58-59',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Valori ale culturii populare în spațiul românesc. Etnii și jocuri de copii',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Recunoaște similitudini între jocurile de copii din diverse comunități etnice din spațiul românesc.',
        ],
        resurse: [
          'Manual Art 6, pp. 58-59',
          'Infograficul „Etnii și jocuri de copii” (/materiale/clasa-6/unitatea-2/lectia-8/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi dacă au prieteni care aparțin altei comunități etnice și ce comunități cunosc în localitatea lor.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim cum se regăsesc aceleași jocuri de copii la comunități etnice diferite.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'În perechi, elevii enumeră minorități din România și le găsesc pe harta de la p. 58: maghiari, sârbi, tătari, ucraineni.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citim fragmentul din Lumea prin care am trecut de Ioan Slavici, despre colegii maghiari din Șiria. Privim fotografiile de joc și comparăm cele trei jocuri descrise, Țuiul, Bújj, bújj, zöld ág și O podo baruno, cu jocuri pe care le știu elevii. Cu infograficul fixăm Reperele: comunitatea etnică și jocul ca limbaj comun.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Grupe de 4-6 elevi inventează un joc care se poate juca fără cuvinte, cu 4-6 reguli, și îl prezintă clasei. Alegem prin vot jocul cel mai reușit.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri pe jocurile inventate. Temă de portofoliu: planșa despre un joc practicat în culturi diferite.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-6/unitatea-2/lectia-8/infografic.svg', titlu: 'Etnii și jocuri de copii' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Prezentarea proiectului „Prietenia în filme”',
      obiective: [
        'Prezintă și evaluează, pe grupe, proiectul Prietenia în filme, conform criteriilor stabilite.',
      ],
      sursaManual: 'Manual, Proiect de grup, pp. 60-61',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului „Prietenia în filme”',
        data: null,
        tipOra: 'Proiect, prezentare și evaluare',
        durata: 50,
        obiective: [
          'Prezintă și evaluează, pe grupe, proiectul Prietenia în filme, conform criteriilor stabilite.',
        ],
        resurse: [
          'Manual Art 6, p. 61, criteriile de evaluare',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-9/fisa.pdf)',
          'Produsele grupelor, postere sau prezentări',
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
            activitate: 'Tragem la sorți ordinea în care prezintă grupele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare grupă are 3-5 minute și că fiecare membru participă la prezentare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Recitim criteriile de la p. 61: prezentare cursivă, cu gesturi și mimică, colaborare, sprijin pentru colegi.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '3 min',
            activitate: 'Distribui fișele de evaluare; fiecare grupă care ascultă urmărește câte un coleg din grupa care prezintă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '35 min',
            activitate: 'Grupele își prezintă arborele lui Sapiro pe filmul Cântecul, iar ascultătorii completează fișele. La final, toți completează scara de clasificare, iar un elev centralizează răspunsurile pe lista de control.',
          },
        ],
        evaluare: 'Evaluare sumativă a proiectului, pe criteriile de la p. 61; interevaluare și autoevaluare prin scara de clasificare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-9/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Rezumatul oral (I), formularea ideilor',
      obiective: [
        'Formulează oral ideile principale ale unei succesiuni de întâmplări, respectând regulile rezumatului.',
      ],
      sursaManual: 'Manual, Lecția 8, pp. 62-63, partea 1/2 (Rezumatul oral, reguli)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Rezumatul oral (I), formularea ideilor',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Formulează oral ideile principale ale unei succesiuni de întâmplări, respectând regulile rezumatului.',
        ],
        resurse: [
          'Manual Art 6, pp. 62-63',
          'Quizul „Rezumatul oral, regulile” (materialul de joc al lecției)',
          'Scurtmetrajul Un mic ajutor de la un prieten, dacă e disponibil la clasă',
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
            activitate: 'Câțiva voluntari mimează în 1-2 minute desfășurarea zilei de ieri, iar clasa ghicește momentele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să povestim pe scurt o succesiune de întâmplări, adică să facem un rezumat oral.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim ideile principale ale Oracolului, formulate la lecțiile de lectură.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'În perechi, pe imaginile de la p. 62, un elev formulează ideea fiecărei imagini, celălalt pune o întrebare de clarificare, apoi schimbă rolurile. Prezentăm ideile în ordine, notăm cuvintele de legătură folosite și fixăm regulile rezumatului oral din Repere: ideile principale, ordinea întâmplărilor, prezentul sau perfectul compus, fără comentarii, dialog sau citate.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Rezumatul oral, regulile”, apoi discutăm răspunsurile greșite.',
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
          titlu: 'Rezumatul oral, regulile',
          pasi: [
            {
              intrebare: 'Ce este, de fapt, un rezumat bun?',
              variante: [
                { text: 'Un text în care ideile sunt reformulate cu propriile cuvinte, păstrând doar ce e important', corect: true, explicatie: 'Rezumatul reformulează, nu reproduce, și elimină detaliile nesemnificative.' },
                { text: 'Un text în care ideile sunt reproduse cuvânt cu cuvânt', corect: false, explicatie: 'Reproducerea exactă nu e rezumat, e copiere.' },
                { text: 'Un text la fel de lung sau chiar mai lung decât ce rezumă', corect: false, explicatie: 'Un rezumat trebuie să fie concis, mai scurt decât textul original.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 63',
            },
            {
              intrebare: 'Ce timpuri verbale ale indicativului se pot folosi într-un rezumat oral?',
              variante: [
                { text: 'Prezentul sau perfectul compus', corect: true, explicatie: 'Regulile de alcătuire a rezumatului oral indică aceste două timpuri.' },
                { text: 'Doar viitorul', corect: false, explicatie: 'Viitorul nu e printre timpurile recomandate pentru rezumat.' },
                { text: 'Doar perfectul simplu', corect: false, explicatie: 'Perfectul simplu a dispărut din limba vorbită, nu se folosește la rezumat oral.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 62',
            },
            {
              intrebare: 'Ce trebuie să respecte succesiunea ideilor dintr-un rezumat?',
              variante: [
                { text: 'Ordinea desfășurării întâmplărilor', corect: true, explicatie: 'Ideile trebuie relatate în ordinea în care se petrec, nu amestecat.' },
                { text: 'Ordinea alfabetică a personajelor', corect: false, explicatie: 'Ordinea alfabetică nu are legătură cu logica unei povești.' },
                { text: 'Lungimea fiecărei idei, de la cea mai scurtă', corect: false, explicatie: 'Lungimea ideilor nu e criteriul de ordonare.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 62',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Rezumatul oral (II), rezumarea unui text și a unui film',
      obiective: [
        'Rezumă oral, aplicat, un text și un scurtmetraj, folosind regulile învățate.',
      ],
      sursaManual: 'Manual, Lecția 8, pp. 62-63, partea 2/2 (Rezumatul oral, aplicații)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Rezumatul oral (II), rezumarea unui text și a unui film',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Rezumă oral, aplicat, un text și un scurtmetraj, folosind regulile învățate.',
        ],
        resurse: [
          'Manual Art 6, p. 63',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-11/fisa.pdf)',
          'Scurtmetrajul Lou (Pixar, 2017), dacă e disponibil la clasă',
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
            activitate: 'Îi întreb pe elevi cum i-ar povesti unui prieten, în două minute, ultimul film pe care l-au văzut.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că exersăm rezumatul oral pe un fragment din Oracolul și pe un scurtmetraj.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Completăm fișa „Ce este rezumatul?” de la p. 63: ce este și ce nu este un rezumat.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '12 min',
            activitate: 'În perechi, elevii recitesc fragmentul cu oracolul de la p. 63 și îl rezumă oral pe rând, iar ascultătorul evaluează pe grila Da/Nu.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '22 min',
            activitate: 'Urmărim scurtmetrajul Lou, iar elevii îl rezumă oral după schema de la Provocări, Cine, Scop, Dar, Atunci, Așa că, sprijinindu-se pe fișa lecției. Câțiva își prezintă rezumatul clasei.',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 63; observarea sistematică a rezumatelor orale.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-11/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Verbul (actualizare), tipuri și categorii gramaticale',
      obiective: [
        'Diferențiază verbele predicative de verbele auxiliare, recapitulare din clasa a V-a.',
      ],
      sursaManual: 'Manual, Lecția 9, pp. 64-67, partea 1/2 (Felul verbelor)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Verbul (actualizare), tipuri și categorii gramaticale',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Diferențiază verbele predicative de verbele auxiliare, recapitulare din clasa a V-a.',
        ],
        resurse: [
          'Manual Art 6, pp. 64-65',
          'Schema „Felul verbelor” (/materiale/clasa-6/unitatea-2/lectia-12/schema.svg)',
          'Cretă colorată',
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
            activitate: 'Jocul „Graffiti”: toți elevii scriu în același timp pe tablă, cu cretă colorată, cuvinte care arată ce face Petruța în Oracolul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm verbul și învățăm să deosebim verbele predicative de cele auxiliare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Stabilim ce parte de vorbire sunt cuvintele de pe tablă și reamintim definiția verbului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citim „Rețeta pentru note mari” de la p. 64 și găsim verbele, apoi auxiliarele și modurile și timpurile pe care le formează. Cu ajutorul schemei explic verbele predicative și nepredicative, auxiliarele a avea, a vrea, a fi, și căutăm în rețetă locurile unde aceleași verbe sunt predicative.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii precizează modurile verbelor din rețetă și aleg formele corecte de la „Normă și abatere”: aranjează, creează, scrii, copiez.',
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
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-12/schema.svg', titlu: 'Felul verbelor' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Verbul (actualizare), flexiunea verbală',
      obiective: [
        'Recunoaște formele modului indicativ, timpul trecut (imperfect, perfect compus, perfect simplu, mai-mult-ca-perfect).',
      ],
      sursaManual: 'Manual, Lecția 9, pp. 64-67, partea 2/2 (Modurile și timpurile învățate)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Verbul (actualizare), flexiunea verbală',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște formele modului indicativ, timpul trecut (imperfect, perfect compus, perfect simplu, mai-mult-ca-perfect).',
        ],
        resurse: [
          'Manual Art 6, pp. 65-67',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-13/fisa.pdf)',
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
            activitate: 'Scriu pe tablă patru verbe la trecut, schimbau, au alergat, fugiră, preparase, și îi întreb ce diferență de sens simt între ele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm modurile și timpurile verbului, cu accent pe cele patru timpuri trecute ale indicativului.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim ce este modul, indicativul și prezentul, cu desinențele și sunetele care arată timpul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Pe tabelul de la p. 66 explic imperfectul, perfectul compus, perfectul simplu și mai-mult-ca-perfectul, cu greșelile frecvente, alergasei în loc de alergaseși, vorbiseți în loc de vorbiserăți. Trecem prin cele trei forme de viitor, prin imperativul afirmativ și negativ și prin infinitiv și participiu.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi, în grupe de patru, jocul „Trifoiul norocos” de la p. 67, cu verbele de așezat pe frunza timpului potrivit.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției. Temă de portofoliu: schema cu timpurile indicativului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-13/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Modul conjunctiv',
      obiective: [
        'Recunoaște modul conjunctiv și îl folosește pentru a exprima acțiuni posibile, realizabile.',
      ],
      sursaManual: 'Manual, Lecția 10, pp. 68-69',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modul conjunctiv',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște modul conjunctiv și îl folosește pentru a exprima acțiuni posibile, realizabile.',
        ],
        resurse: [
          'Manual Art 6, pp. 68-69',
          'Schema „Modul conjunctiv” (/materiale/clasa-6/unitatea-2/lectia-14/schema.svg)',
          'Bilețele și un panou',
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
            activitate: 'Jocul „Toamna, cu prietenii”: fiecare elev continuă pe un bilețel enunțul „Într-o zi ploioasă de toamnă, împreună cu prietenii mei pot să…” și îl prinde pe panou.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm un mod nou, conjunctivul, care arată acțiuni posibile.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Pe textul despre fotbal de la p. 68 stabilim care acțiuni sunt sigure și care sunt posibile, amintind indicativul și imperativul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic conjunctivul și marca lui, să. Conjugăm la prezent și observăm persoana a III-a, să cânte, să meargă, apoi perfectul, să fi cântat, la fel la toate persoanele. Discutăm forma negativă, locul lui cam, mai, tot, corect „să ne mai ajutați”, și formele fără să din vorbire, Fie ce-o fi!',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'În perechi, jocul „Umbreluța”: elevii grupează enunțurile de la p. 69 după timpul conjunctivului, apoi analizează verbele la conjunctiv din fragmentul de Cleopatra Lorințiu.',
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
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-14/schema.svg', titlu: 'Modul conjunctiv' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Modul condițional-optativ',
      obiective: [
        'Recunoaște modul condițional-optativ și îl folosește pentru a exprima acțiuni condiționate.',
      ],
      sursaManual: 'Manual, Lecția 11, pp. 70-71',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modul condițional-optativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște modul condițional-optativ și îl folosește pentru a exprima acțiuni condiționate.',
        ],
        resurse: [
          'Manual Art 6, pp. 70-71',
          'Schema „Modul condițional-optativ” (/materiale/clasa-6/unitatea-2/lectia-15/schema.svg)',
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
            activitate: 'În perechi, elevii completează enunțurile de la p. 70: „Aș vrea să fiu o frunză, pentru că…”, „N-aș vrea să fiu un nor, pentru că…”, și citesc câteva variante.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm modul care exprimă dorințe și acțiuni ce depind de o condiție.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim conjunctivul și ce arată, ca să-l deosebim de modul nou.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic condițional-optativul, prezentul, aș cânta, și perfectul, aș fi cântat, cu auxiliarele lor. Discutăm forma negativă, n-aș, formele inverse din vorbirea afectivă, Mânca-l-ar mama, și locul lui cam, mai, tot, corect „ar mai sări”, nu „mai ar sări”.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii clasifică verbele de la p. 71 după timp, apoi încep, în grupe de patru, „Cărticica ortogramelor” cu perechi precum c-ai și cai, n-aș și naș, s-ar și sar, v-ar și var.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; produsul cu ortograme.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-15/schema.svg', titlu: 'Modul condițional-optativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Posibilități combinatorii ale verbului. Predicatul nominal',
      obiective: [
        'Recunoaște verbul copulativ a fi și identifică numele predicativ, în structura predicatului nominal.',
      ],
      sursaManual: 'Manual, Lecția 12, pp. 72-73',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Posibilități combinatorii ale verbului. Predicatul nominal',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște verbul copulativ a fi și identifică numele predicativ, în structura predicatului nominal.',
        ],
        resurse: [
          'Manual Art 6, pp. 72-73',
          'Schema „Predicatul nominal” (/materiale/clasa-6/unitatea-2/lectia-16/schema.svg)',
          'Un săculeț cu un obiect ascuns',
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
            activitate: 'Jocul „Obiectul misterios”: un elev pipăie obiectul din săculeț și răspunde la întrebări de tipul „Este ușor? Este rece?”, iar colegii au trei încercări să-l ghicească.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm un predicat nou, predicatul nominal, format cu verbul a fi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim predicatul verbal și diferența dintre verbele predicative și cele auxiliare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Pornind de la „Dan este elev.” și „El este inteligent.”, verificăm dacă putem înlătura cuvântul de după a fi. Cu ajutorul schemei definesc verbul copulativ, numele predicativ, simplu sau multiplu, exprimat prin substantiv sau adjectiv, și acordul lui cu subiectul. Deosebim cele trei valori ale lui a fi: copulativ, predicativ, auxiliar.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii identifică predicatele nominale de la p. 73 și completează grila cu inițialele numelor predicative, apoi formulează o definiție amuzantă a prieteniei, cu predicat nominal.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; enunțurile construite cu predicat nominal.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-16/schema.svg', titlu: 'Predicatul nominal' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Subiectul',
      obiective: [
        'Diferențiază subiectul exprimat de subiectul neexprimat și recunoaște subiectul simplu și multiplu.',
      ],
      sursaManual: 'Manual, Lecția 13, p. 74',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Subiectul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Diferențiază subiectul exprimat de subiectul neexprimat și recunoaște subiectul simplu și multiplu.',
        ],
        resurse: [
          'Manual Art 6, pp. 74-75',
          'Schema „Subiectul” (/materiale/clasa-6/unitatea-2/lectia-17/schema.svg)',
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
            activitate: 'Jocul de la p. 74: șase grupe, în patru minute, formează cât mai multe propoziții care răspund la „Cine aleargă?” sau „Cine este blând?”.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că studiem subiectul, felurile lui și acordul cu predicatul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Stabilim ce parte de propoziție sunt „aleargă” și „este blând”, predicat verbal și predicat nominal.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei explic subiectul simplu și multiplu, exprimat prin substantiv sau pronume, apoi subiectul neexprimat, subînțeles sau inclus, și propozițiile fără subiect, Burnițează. Corectăm „Noi învățăm astăzi subiectul.” și discutăm când e firesc pronumele, pentru insistență sau opoziție. Încheiem cu acordul predicatului și prioritatea persoanei I.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă aplicațiile de la p. 75: subiectele simple și multiple din textul despre Mihai și felul subiectelor neexprimate.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; enunțurile cu subiecte și predicate date; aprecieri.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-17/schema.svg', titlu: 'Subiectul' },
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Complementul',
      obiective: [
        'Identifică complementul ca parte de propoziție care determină verbul și arată obiectul acțiunii.',
      ],
      sursaManual: 'Manual, Lecția 14, pp. 76-77, partea 1/2 (Complementul)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Complementul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică complementul ca parte de propoziție care determină verbul și arată obiectul acțiunii.',
        ],
        resurse: [
          'Manual Art 6, pp. 76-77',
          'Schema „Complementul” (/materiale/clasa-6/unitatea-2/lectia-18/schema.svg)',
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
            activitate: 'Citim enunțurile de sub desenul de la p. 76 și întrebările lor: ce face Maria? pe cine strigă Anca? cui îi dă Dinu un sendviș?',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm complementul, partea secundară care completează verbul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim părțile principale de propoziție și ce înseamnă o parte secundară.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei definesc complementul, cu întrebările lui, pe cine? ce? cui? la cine? după cine? pentru ce?, exprimat prin substantiv sau pronume și subordonat verbului. Punem întrebări pentru părțile de propoziție nemarcate de pe desen și observăm prepozițiile care leagă unele complemente de verb.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii subliniază complementele din textul despre expoziția de desene de la p. 77 și notează întrebarea la care răspunde fiecare.',
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
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-18/schema.svg', titlu: 'Complementul' },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Circumstanțialul. Prepoziția',
      obiective: [
        'Identifică circumstanțialul ca parte de propoziție care arată împrejurările acțiunii și recunoaște rolul prepoziției.',
      ],
      sursaManual: 'Manual, Lecția 14, pp. 76-77, partea 2/2 (Circumstanțialul. Prepoziția)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Circumstanțialul. Prepoziția',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică circumstanțialul ca parte de propoziție care arată împrejurările acțiunii și recunoaște rolul prepoziției.',
        ],
        resurse: [
          'Manual Art 6, pp. 76-77',
          'Schema „Circumstanțialul. Prepoziția” (/materiale/clasa-6/unitatea-2/lectia-19/schema.svg)',
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
            activitate: 'Pornind de la „În pauză, stăm în clasă.” și „Alex aleargă cu viteză.”, îi întreb când, unde și cum se petrec acțiunile.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm circumstanțialul, care arată împrejurările acțiunii, și prepoziția.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim complementul și întrebările lui, din ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei definesc circumstanțialul, cu întrebările unde? când? cum?, și îl deosebim de complement. Explic prepoziția, simplă sau compusă, cu sens sau fără sens, analizată împreună cu cuvântul pe care îl precede. Închei cu posibilitățile combinatorii ale verbului, centru care se leagă de subiect, nume predicativ, complement și circumstanțial.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii stabilesc funcția cuvântului vacanță în cele patru enunțuri de la p. 77, completează prepozițiile potrivite, apoi completează autoevaluarea pentru lecțiile 9-14.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de autoevaluare pentru lecțiile 9-14.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-19/schema.svg', titlu: 'Circumstanțialul. Prepoziția' },
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Rezumatul scris (I), identificarea secvențelor',
      obiective: [
        'Identifică secvențele unui text narativ și formulează ideile principale, în vederea redactării unui rezumat.',
      ],
      sursaManual: 'Manual, Lecția 15, pp. 78-79, partea 1/2 (Rezumatul scris, pregătire)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Rezumatul scris (I), identificarea secvențelor',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Identifică secvențele unui text narativ și formulează ideile principale, în vederea redactării unui rezumat.',
        ],
        resurse: [
          'Manual Art 6, pp. 78-79',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-20/fisa.pdf)',
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
            activitate: 'Fiecare elev scrie un text narativ de 5-6 rânduri cu cuvintele păduchi, șampon, chel, gard, prieten, în această ordine, și îl citește colegului de bancă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că pregătim rezumatul scris al unui fragment: îl împărțim în secvențe și formulăm ideile principale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Recitim regulile rezumatului oral de la p. 62 și ne întrebăm care se aplică și rezumatului scris.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Prezint pe scurt romanul Băiatul cu pijamale în dungi de John Boyne și citim fragmentul de la p. 78. În perechi, elevii își pun câte trei întrebări cu răspuns în text, apoi completăm fișa conținutului: cadru, personaje, conflict, acțiune, rezolvare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi, în perechi, împart fragmentul în secvențe, notează cuvintele-cheie și stabilesc împreună ideile principale.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; ideile principale stabilite în perechi.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-20/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Rezumatul scris (II), redactarea rezumatului',
      obiective: [
        'Redactează un rezumat scris pornind de la ideile principale identificate.',
      ],
      sursaManual: 'Manual, Lecția 15, pp. 78-79, partea 2/2 (Rezumatul scris, redactare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Rezumatul scris (II), redactarea rezumatului',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează un rezumat scris pornind de la ideile principale identificate.',
        ],
        resurse: [
          'Manual Art 6, p. 79, grila de evaluare',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-21/fisa.pdf)',
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
            activitate: 'Comparăm cele două secvențe de rezumat de la p. 79 și îi întreb pe elevi care e corectă și ce greșeli are cealaltă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare redactează azi rezumatul fragmentului din Băiatul cu pijamale în dungi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm ideile principale de ora trecută și eliminăm din lista de la p. 79 cuvintele care nu au ce căuta într-un rezumat, autorul, naratorul, personajul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '8 min',
            activitate: 'Fixăm cele cinci reguli din Repere, p. 79, și folosirea gerunziului pentru a concentra informația, apoi elevii își pregătesc planul pe fișa lecției.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '27 min',
            activitate: 'Elevii redactează rezumatul, apoi îl citesc colegului de bancă și se evaluează reciproc pe grila de la p. 79.',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 79; observarea sistematică a elevilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-21/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: timp, spațiu, etapele acțiunii, rezumat oral.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 80-81, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: timp, spațiu, etapele acțiunii, rezumat oral.',
        ],
        resurse: [
          'Manual Art 6, pp. 80-81',
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
            activitate: 'Anunț că recapitulăm lectura și rezumatul oral pe un text nou.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm timpul desfășurării și timpul povestirii, momentele subiectului, tipurile de personaje și regulile rezumatului oral.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Citim Ăsta este pentru Jamie de Truman Capote, de la p. 80, și rezolvăm ghidat cerințele de lectură de la p. 81: reperele de timp și spațiu, personajele pe categorii, naratorul, momentele subiectului, planul simplu de idei, rezumatul oral în perechi.',
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
              intrebare: 'Care este diferența dintre timpul desfășurării întâmplărilor și timpul povestirii?',
              variante: [
                { text: 'Primul e momentul acțiunii, al doilea e momentul în care naratorul povestește', corect: true, explicatie: 'Cele două momente pot coincide sau pot fi diferite, depinde de text.' },
                { text: 'Sunt mereu identice', corect: false, explicatie: 'De multe ori naratorul povestește la ani distanță de acțiune.' },
                { text: 'Timpul povestirii nu apare în textele narative', corect: false, explicatie: 'Timpul povestirii se poate identifica prin timpul verbelor folosite de narator.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 2, p. 47',
            },
            {
              intrebare: 'Care sunt cele trei etape ale acțiunii, recapitulate din clasa a V-a?',
              variante: [
                { text: 'Situația inițială, succesiunea de întâmplări, situația finală', corect: true, explicatie: 'E schema recapitulată la Lecția 3, folosită pentru a organiza un text narativ.' },
                { text: 'Titlul, cuprinsul, concluzia', corect: false, explicatie: 'Acestea nu sunt etape ale acțiunii unei narațiuni.' },
                { text: 'Începutul, mijlocul și sfârșitul dialogului', corect: false, explicatie: 'Etapele acțiunii privesc întreaga narațiune, nu doar dialogul.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 3, p. 49',
            },
            {
              intrebare: 'Ce reguli trebuie să respecte un rezumat oral bun?',
              variante: [
                { text: 'Pornește de la ideile principale, respectă ordinea întâmplărilor, folosește prezentul sau perfectul compus', corect: true, explicatie: 'Astea sunt regulile de alcătuire a rezumatului oral, învățate la Lecția 8.' },
                { text: 'Trebuie să conțină toate detaliile textului original', corect: false, explicatie: 'Dimpotrivă, rezumatul elimină detaliile nesemnificative.' },
                { text: 'Trebuie spus la persoana a II-a', corect: false, explicatie: 'Persoana nu e o regulă a rezumatului; contează timpurile verbale.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, pp. 62-63',
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
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, modurile conjunctiv și condițional-optativ, predicatul nominal, subiectul, complementul, circumstanțialul.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 80-81, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, modurile conjunctiv și condițional-optativ, predicatul nominal, subiectul, complementul, circumstanțialul.',
        ],
        resurse: [
          'Manual Art 6, pp. 80-81',
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
            activitate: 'Scriu pe tablă „Jamie ar fi vrut să-l iei tu.” și cer modul și timpul fiecărui verb.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm gramatica și rezumatul scris din Unitatea II.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm felul verbelor, modurile și timpurile, predicatul verbal și nominal, subiectul, complementul, circumstanțialul și regulile rezumatului scris.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat cerințele de limbă de la p. 81, pe textul lui Truman Capote: auxiliarele, analiza verbelor, predicatul nominal „parcul era proaspăt și verde”, felul subiectelor, părțile secundare din „A tras câinele spre el.”.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi discutăm greșelile. Ca temă, redactează rezumatul scris al textului, cerința 24.',
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
              intrebare: 'Modul conjunctiv arată...',
              variante: [
                { text: 'acțiuni posibile, realizabile, nu certitudini', corect: true, explicatie: 'Spre deosebire de indicativ, conjunctivul nu exprimă certitudini.' },
                { text: 'acțiuni sigure, care s-au întâmplat deja', corect: false, explicatie: 'Acțiunile sigure, terminate, sunt exprimate la indicativ, timpurile trecutului.' },
                { text: 'o poruncă directă', corect: false, explicatie: 'Porunca directă e exprimată de modul imperativ, nu de conjunctiv.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 10, p. 68',
            },
            {
              intrebare: 'Modul condițional-optativ arată...',
              variante: [
                { text: 'acțiuni posibile, a căror realizare depinde de o condiție', corect: true, explicatie: 'De aici și numele modului: condiționează realizarea acțiunii.' },
                { text: 'o acțiune terminată în trecut, sigură', corect: false, explicatie: 'Acțiunile terminate, sigure, aparțin modului indicativ.' },
                { text: 'un îndemn sau o poruncă', corect: false, explicatie: 'Îndemnul sau porunca aparțin modului imperativ.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 11, p. 70',
            },
            {
              intrebare: 'Când verbul a fi se combină obligatoriu cu un substantiv sau un adjectiv ca să aibă sens complet, este...',
              variante: [
                { text: 'verb copulativ, parte din predicatul nominal', corect: true, explicatie: 'A fi copulativ nu are sens complet singur, are nevoie de numele predicativ.' },
                { text: 'verb predicativ, singur predicat', corect: false, explicatie: 'Verbul predicativ are sens complet și singur, fără alt cuvânt obligatoriu.' },
                { text: 'verb auxiliar', corect: false, explicatie: 'Verbul auxiliar ajută la formarea unor moduri și timpuri compuse, altă funcție.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 12, p. 72',
            },
            {
              intrebare: 'Ce fel de subiect are propoziția Corina, Mirela și Cornel joacă șah?',
              variante: [
                { text: 'subiect multiplu', corect: true, explicatie: 'Sunt trei termeni care fac acțiunea, deci subiectul e multiplu.' },
                { text: 'subiect simplu', corect: false, explicatie: 'Subiectul simplu are un singur termen; aici sunt trei.' },
                { text: 'subiect neexprimat', corect: false, explicatie: 'Subiectul apare direct în propoziție, e exprimat.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 13, p. 74',
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
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea II.',
      ],
      sursaManual: 'Manual, Evaluare, p. 82',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea II.',
        ],
        resurse: [
          'Testul, Manual Art 6, p. 82',
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
            activitate: 'Le spun elevilor că proba seamănă ca structură cu cea din Unitatea I și îi liniștesc în privința timpului de lucru.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se dă proba scrisă a Unității II, cu o parte de lectură și gramatică și un rezumat.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc structura probei, 60 de puncte la partea A, 30 la rezumat, 10 din oficiu, și cum își împart timpul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '35 min',
            activitate: 'Elevii rezolvă individual proba pe o foaie separată; supraveghez discret, gestionez timpul și strâng lucrările la final.',
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
