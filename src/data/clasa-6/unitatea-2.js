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
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Cele trei cadre din scurtmetrajul „Cântecul” (Mindenki), p. 60: despre ce credeți că e filmul? Notez câteva ipoteze pe tablă, le verificăm după vizionare.',
          },
          {
            etapa: 'Scurtmetrajul',
            timp: '4 min',
            activitate: '– Caseta de la p. 60: scurtmetraj și lungmetraj, durata, festivalurile; filmul a primit Premiul Oscar în 2016.',
          },
          {
            etapa: 'Arborele lui Sapiro',
            timp: '14 min',
            activitate: '– Desenez arborele pe tablă și îl completăm pe un exemplu cunoscut (conflictul din „Oracolul”), parte cu parte: rădăcinile – cauzele; solul – mediul; tulpina – cei implicați; scorbura – problema; ramurile – ce simt; frunzele – ce fac; fructele – soluțiile.\n– Elevii copiază schema în caiete, cu întrebarea fiecărei părți.',
          },
          {
            etapa: 'Formarea grupelor și sarcinile',
            timp: '8 min',
            activitate: '– Formez grupe de 5-7 elevi; o grupă primește și prezentarea generală a filmului (fișa cu titlul, regizorii, genul, durata, premiile, p. 61).\n– Calendarul: săptămâna I – vizionarea și împărțirea sarcinilor; săptămâna II – pregătirea prezentării de 3-5 minute (poster, PowerPoint sau altă formă).',
          },
          {
            etapa: 'Fișa grupei',
            timp: '14 min',
            activitate: '– Fiecare grupă completează fișa lecției: membrii, partea din arbore a fiecăruia, termenele, forma prezentării, cine prezintă ce.\n– Trec pe la grupe și verific dacă fiecare elev are cel puțin o sarcină.',
          },
          {
            etapa: 'Criteriile de evaluare',
            timp: '5 min',
            activitate: '– Citim fișa de observare de la p. 61 (prezentare cursivă, cu gesturi și mimică; colaborare; sprijin pentru colegi) și scara de clasificare; le spun că așa vor fi evaluați.\n– Tema: vizionarea filmului în grupă, în prima săptămână.',
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-2/fisa-exercitii.pdf)',
          'Coli pentru planșele de impresii',
          'Bilețele pentru întrebările adresate autorului',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– Dezgheț: jocuri în care se ating palmele (Bâza, Piatră-foarfece-hârtie...).\n– „Pentru început”, p. 44, ex. 1-2: fotografiile cu mâini – ce au în comun, prin ce diferă, ce simt oamenii; notez pe tablă, pe trei coloane.\n– Ex. 4: ce credeți că înseamnă „oracol”? Notez ipotezele, fără corecturi; le verificăm după lectură.',
          },
          {
            etapa: 'Despre autor',
            timp: '3 min',
            activitate: '– Caseta de la p. 44: Mircea Cărtărescu (n. 1956), poet și prozator, cel mai tradus scriitor român contemporan; „Enciclopedia zmeilor”, pentru copii; „Oracolul” e adaptat după textul „Petruța”.',
          },
          {
            etapa: 'Lectura model',
            timp: '13 min',
            activitate: '– Citesc textul cu voce tare, cu manualele închise; elevii notează cuvintele necunoscute.\n– Lămurim cuvintele din subsol (IDR, tebecist, ofticos, preventoriu) și pe cele notate de elevi; revenim la ipotezele despre „oracol”.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '12 min',
            activitate: '– P. 46, ex. 1: grupe de patru completează pe o coală cele patru cadrane (mi-a plăcut, nu mi-a plăcut, n-am înțeles, mi-a amintit de); reprezentanții prezintă, planșele rămân afișate pe durata lecțiilor despre text.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (cine face?) și ex. 2 (adevărat sau fals?), individual, 8 minute.\n– Verificare, 4 minute; la fiecare „fals”, elevul arată locul din text.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: p. 46, ex. 2 (întrebarea pentru autor, pe bilețel; la începutul orei următoare, voluntarii răspund în locul lui); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Planșele de impresii; observarea sistematică; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-2/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-3/fisa-exercitii.pdf)',
          'Schema „Timpul și spațiul într-o narațiune” (/materiale/clasa-6/unitatea-2/lectia-3/schema.svg)',
          'Coli pentru postere, abțibilduri',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Trei voluntari trag bilețele cu întrebări pentru autor și răspund în locul lui; aleg și o întrebare despre „când” și „unde”, ca punte spre lecție.',
          },
          {
            etapa: 'Explorare, ex. 1-5, ca un concurs',
            timp: '10 min',
            activitate: '– P. 47: elevii rezolvă individual; primii cinci care termină prezintă: vârsta naratorului, anotimpul și câmpul lui lexical, câți ani au trecut, primii indici spațiali și locul principal, indicele spațial legat de momentul povestirii.\n– Toți notează răspunsurile în caiete.',
          },
          {
            etapa: 'Notițe: timpul și spațiul',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: timpul desfășurării întâmplărilor și timpul povestirii (marcat prin prezent), episoadele sărite sau comprimate, unul sau mai multe locuri; desenăm axa timpului.',
          },
          {
            etapa: 'Secvențele și ideile principale',
            timp: '12 min',
            activitate: '– Ex. 6, în perechi: asociază cuvintele-cheie cu secvențele textului și le ordonează; le reamintesc că secvențele nu coincid mereu cu paragrafele.\n– Ex. 7: formulează ideile principale; le verificăm frontal și le scriu pe tablă, iar elevii le notează.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: textul „Prietena din tabără” (scris pentru fișă), ex. 2 (al întâmplării sau al povestirii?) și ex. 3 (unde se petrece?), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 3: anunțarea posterelor',
            timp: '4 min',
            activitate: '– Formez grupe de 4-5 pentru planul dezvoltat de idei (poster) și le arăt grila de la p. 48; posterele se prezintă la începutul orei următoare, prin turul galeriei.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1-2 (reperele temporale și secvențele lor); posterul grupei; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică; ideile principale din caiete; fișa de exerciții, ex. 2-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-3/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-4/fisa-exercitii.pdf)',
          'Schema „Etapele acțiunii (momentele subiectului)” (/materiale/clasa-6/unitatea-2/lectia-4/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Turul galeriei',
            timp: '6 min',
            activitate: '– Posterele cu planul dezvoltat de idei se afișează; elevii le evaluează pe grila de la p. 48 și lipesc câte un abțibild pe cel mai bun.',
          },
          {
            etapa: 'Explorare, ex. 1-3 (p. 49 sus)',
            timp: '7 min',
            activitate: '– Ex. 1, frontal: scriu pe tablă numerele 1-10, elevii aleg citatele în ordine.\n– Ex. 2, în grupe de patru: grupează secvențele în situația inițială, succesiunea de întâmplări, situația finală (2-3 minute); ce parte a fost mai greu de delimitat?\n– Ex. 3: modul și timpul din primul paragraf.',
          },
          {
            etapa: 'Momentele, pe rând',
            timp: '14 min',
            activitate: '– Expozițiunea (Repere, p. 49); intriga: p. 49 jos, ex. 1-3 (schimbarea timpului verbal, evenimentul care declanșează acțiunea, indicele temporal) și Repere, p. 50.\n– Desfășurarea acțiunii: p. 50 sus (organizatorul cu indici temporali); punctul culminant: p. 50 mijloc, ex. 1-3, în perechi; deznodământul și epilogul: p. 50 jos și Repere, p. 51.\n– După fiecare moment, elevii notează definiția în caiet, după schema lecției.',
          },
          {
            etapa: 'Schema momentelor',
            timp: '6 min',
            activitate: '– Aplicații, ex. 4: elevii completează în caiet schema care leagă secvențele de momente; verificăm pe tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: textul „Mingea din curte” (scris pentru fișă) și ex. 2 (momentele subiectului), individual, 7 minute.\n– Verificare, 5 minute; discutăm unde se termină desfășurarea și unde începe punctul culminant.',
          },
          {
            etapa: 'Discuție în perechi',
            timp: '2 min',
            activitate: '– Aplicații, ex. 5: ce moment a fost cel mai greu de delimitat, în „Oracolul” și în textul din fișă?',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1-3 (textul despre momentul preferat, întrebările pentru fiecare moment, schimb de caiete ora viitoare); fișa de exerciții, pagina 2. Opțional, „Provocări”: filmul poveștii, termen o săptămână.',
          },
        ],
        evaluare: 'Schema momentelor din caiet; fișa de exerciții, ex. 1-2; interevaluarea posterelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-4/schema.svg', titlu: 'Etapele acțiunii (momentele subiectului)' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-5/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-5/fisa.pdf)',
          'Bilețele cu numele personajelor',
          'DEX sau dexonline.ro',
        ],
        desfasurare: [
          {
            etapa: 'Vitrina',
            timp: '8 min',
            activitate: '– Explorare, ex. 1: elevii extrag bilețele (asistenta, băiatul, Iosub, Petruța, Puică, Tovarășa) și se așază în „vitrină”, pe trei rânduri; fiecare spune, la persoana I, în ce momente apare, cu cine intră în contact și ce face.',
          },
          {
            etapa: 'Acvariul emoțiilor și istoria cuvintelor',
            timp: '6 min',
            activitate: '– Ex. 2, individual: substantivele potrivite cu impresia lăsată de personaje; câțiva își citesc alegerile, cu motivare.\n– Ex. 3: sensul cuvântului „tovarășă” atunci și azi, cu DEX-ul; caseta „Istoria cuvintelor”.',
          },
          {
            etapa: 'Notițe: tipurile de personaje',
            timp: '6 min',
            activitate: '– În caiete, după Repere: principal, secundar, episodic; personajul colectiv; trăsături numite sau deduse (din fapte, vorbe, îmbrăcăminte).\n– Ex. 4-5, în perechi: secvențele în care grupul de elevi se comportă ca un singur personaj; un episod în care naratorul e în grup și unul în care e exclus.',
          },
          {
            etapa: 'Aplicații, ex. 1-8',
            timp: '10 min',
            activitate: '– Frontal: participant sau martor; trăsăturile grupului din pasaje; Puică (o trăsătură numită, una dedusă); expresia „a tremura din toate încheieturile”.\n– În perechi: trăsăturile fizice și morale ale Petruței (ex. 5-6); uniforma ei (ex. 7); de ce o numește naratorul „săraca” (ex. 8).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: textul „Colega nouă” (scris pentru fișă), ex. 2 (rolul personajului) și ex. 3 (trăsături deduse), individual, 9 minute.\n– Verificare, 4 minute; discutăm cum recunoaștem personajul colectiv.',
          },
          {
            etapa: 'Temă',
            timp: '7 min',
            activitate: '– Discutăm „Provocări”, ex. 1: trăiește băiatul o situație de bullying? Cum ați proceda voi? (câteva păreri, fără judecăți de persoane).\n– Tema: Aplicații, ex. 9-11; „Provocări”, ex. 2, în scris; fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea jocului de rol; fișa lecției; fișa de exerciții, ex. 2-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-2/lectia-5/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-6/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-6/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi-trei elevi citesc ce ar fi făcut în locul colegilor băiatului; discutăm pe scurt despre bullying.',
          },
          {
            etapa: 'Interpretare, ex. 1-5',
            timp: '10 min',
            activitate: '– Frontal: e diferit băiatul la început? Cum se poartă colegii după pată? Prin ce se distinge Petruța (fizic, îmbrăcăminte, familie)?\n– Ex. 4, în perechi: seamănă băiatul cu Petruța în felul în care îi privesc ceilalți? Ex. 5: de ce se gândește la Petruța, nu la Lili?',
          },
          {
            etapa: 'Titlul: trei oracole',
            timp: '10 min',
            activitate: '– Ex. 6-7: imaginile de la p. 54 (templul din Delphi, Bocca della Verità, caietul-oracol); trei elevi citesc fragmentele; ce le leagă?\n– Ex. 8-9: la ce apelau oamenii în Antichitate, ce practică a rămas azi, de ce aveau copiii caiete-oracol.',
          },
          {
            etapa: 'Interpretare, ex. 10-12',
            timp: '7 min',
            activitate: '– De ce se așază Petruța lângă băiat? Poate ghici viitorul? Cum explicați dispariția petei? Primesc orice răspuns argumentat din text.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (de acord sau nu?) și ex. 2 (ce poate însemna?), individual, 8 minute.\n– Citim câteva interpretări, 4 minute; cer argumentul din text pentru fiecare.',
          },
          {
            etapa: 'Provocări și autoevaluare',
            timp: '4 min',
            activitate: '– „Provocări”, ex. 4: un substantiv pentru relația dintre băiat și Petruța, spus de fiecare pe rând.\n– Autoevaluare L1-L5, p. 55: elevii completează cele trei afirmații.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Provocări”, ex. 1 (cinci întrebări ale Petruței) și ex. 5 (Sibilele); fișa lecției; fișa de exerciții, pagina 2. Opțional, „Portofoliu”: posterul despre Oracolele Sibiline.',
          },
        ],
        evaluare: 'Observarea discuției; fișa lecției; fișa de exerciții, ex. 1-2; autoevaluarea L1-L5.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-6/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-2/lectia-6/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Text auxiliar. Micul Nicolas de René Goscinny, ilustrații de Jean-Jacques Sempé',
      obiective: [
        'Compară textul auxiliar Micul Nicolas cu textul de bază al unității și formulează sugestii de lectură.',
      ],
      sursaManual: 'Manual, Lecția 6, „Noi pagini, alte idei”, pp. 56-57 (Micul Nicolas de René Goscinny, ilustrații de Sempé)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Micul Nicolas de René Goscinny, ilustrații de Jean-Jacques Sempé',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Compară textul auxiliar Micul Nicolas cu textul de bază al unității și formulează sugestii de lectură.',
        ],
        resurse: [
          'Manual Art 6, pp. 56-57',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-7/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-7/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– O întâmplare amuzantă cu un coleg nou (sau când ați fost voi cei noi). Privim desenul de la p. 56: ce credeți că se va întâmpla?',
          },
          {
            etapa: 'Lectura',
            timp: '10 min',
            activitate: '– Citesc fragmentul cu voce tare; elevii urmăresc.\n– Ex. 1: fiecare notează două comentarii despre comportamentul copiilor și le confruntă cu colegul de bancă.',
          },
          {
            etapa: 'Discutarea textului, ex. 2-6',
            timp: '10 min',
            activitate: '– Ex. 2: întrebări după organizator (cine?, cum?, când?, ce?), schimb de caiete.\n– Ex. 3: ideile principale, formulate individual, verificate frontal.\n– Ex. 4-6: prin ce se deosebește George, personajul cel mai simpatic și cel mai antipatic, de ce îl crede Aristide norocos.',
          },
          {
            etapa: 'Discutarea textului, ex. 7-10',
            timp: '8 min',
            activitate: '– Ce au în comun cele două texte (variantele de la ex. 7, orice răspuns justificat); câte un cuvânt pentru Nicolas, Aristide, Achim, George; afirmația lui Achim; comportamentul cel mai condamnabil.\n– Le reamintesc formulele de opinie (după părerea mea...) și de motivare (deoarece...).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (cine spune sau face?) și ex. 2 (adevărat sau fals?), individual, 8 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Biblioteci deschise',
            timp: '3 min',
            activitate: '– Prezint „Val și Cetatea Sufletelor” de Ana Alfianu și „Magee, zis Maniacul” de Jerry Spinelli; elevii spun pe care ar citi-o și de ce.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Portofoliu”, poreclele amuzante pentru personajele desenate de Sempé (pe grupe, până ora viitoare); impresia despre text, 10-15 rânduri; fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea discuției; fișa lecției; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-7/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-2/lectia-7/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-8/fisa-exercitii.pdf)',
          'Infograficul „Etnii și jocuri de copii” (/materiale/clasa-6/unitatea-2/lectia-8/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Pentru început',
            timp: '6 min',
            activitate: '– Ex. 1, frontal: aveți prieteni din altă comunitate etnică? Ce comunități sunt în clasa, în localitatea voastră?\n– Ex. 2, în perechi: minoritățile din România și culorile lor pe harta de la p. 58 (maghiari, sârbi, tătari, ucraineni).',
          },
          {
            etapa: 'Slavici și colegii maghiari',
            timp: '6 min',
            activitate: '– Explorare, ex. 1: elevii citesc fragmentul din „Lumea prin care am trecut” și notează ce îi leagă pe Slavici și pe Sima de colegii de bancă.',
          },
          {
            etapa: 'Jocurile din fotografii și din descrieri',
            timp: '10 min',
            activitate: '– Ex. 2: fotografiile de la Muzeul Etnografic al Transilvaniei – ce joc vă e cunoscut?\n– Ex. 3: citesc descrierile (Țuiul, Bújj, bújj, zöld ág, O podo baruno); elevii le asociază cu fotografiile și cu jocuri pe care le-au jucat.',
          },
          {
            etapa: 'Notițe: comunitatea etnică și jocul',
            timp: '4 min',
            activitate: '– În caiete, după Repere și infograficul lecției: comunitatea etnică, influențele culturale, jocul ca limbaj universal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (trei jocuri, trei comunități) și ex. 2 (poarta și podul), individual, 8 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Provocări: un joc fără cuvinte',
            timp: '10 min',
            activitate: '– Grupe de 4-6 (după locul din bănci) inventează un joc care se poate juca fără cuvinte, cu 4-6 reguli și desene, pe o coală.\n– Câte un elev prezintă jocul; alegem prin vot cel mai reușit.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1-3 (jocuri fără cuvinte, titlurile tablourilor, joaca cu un copil necunoscut); „Portofoliu”, planșa despre un joc în culturi diferite; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Jocurile inventate, prezentate și votate; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-8/fisa-exercitii.pdf' },
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
            etapa: 'Pregătirea',
            timp: '5 min',
            activitate: '– Tragem la sorți ordinea grupelor; grupele își pregătesc posterele sau prezentările.\n– Distribui fișele de observare: fiecare grupă care ascultă urmărește câte un coleg din grupa care prezintă (criteriile de la p. 61).',
          },
          {
            etapa: 'Prezentările',
            timp: '35 min',
            activitate: '– Fiecare grupă are 3-5 minute: arborele lui Sapiro pe filmul „Cântecul”, cu toți membrii la cuvânt; grupa care a avut prezentarea generală a filmului începe.\n– După fiecare prezentare: o întrebare din public și completarea fișelor de observare (1 minut).',
          },
          {
            etapa: 'Evaluarea',
            timp: '7 min',
            activitate: '– Toți completează scara de clasificare („Ai participat cu plăcere?”); un elev centralizează răspunsurile pe lista de control.\n– Spun ce a reușit fiecare grupă și ce se poate îmbunătăți.',
          },
          {
            etapa: 'Reflecție',
            timp: '3 min',
            activitate: '– Ce ați aflat din film despre prietenie și despre colegi? Două-trei răspunsuri.',
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-10/fisa-exercitii.pdf)',
          'Quizul „Rezumatul oral, regulile” (materialul de joc al lecției)',
          'Scurtmetrajul Un mic ajutor de la un prieten, dacă e disponibil la clasă',
        ],
        desfasurare: [
          {
            etapa: 'Pentru început: ziua de ieri, mimată',
            timp: '8 min',
            activitate: '– Un minut de gândit la momentele importante ale zilei de ieri; voluntarii le mimează în 1-2 minute, clasa ghicește.',
          },
          {
            etapa: 'Imaginile, în perechi',
            timp: '12 min',
            activitate: '– Explorare, ex. 1: la p. 62, unul formulează ideea imaginii, celălalt pune o întrebare de clarificare, apoi schimbă rolurile.\n– Cel puțin șase elevi prezintă ideile în ordine, legate între ele; urmărim scurtmetrajul, dacă e disponibil.',
          },
          {
            etapa: 'Ex. 2-3',
            timp: '4 min',
            activitate: '– Ce a fost mai ușor: mimul sau ideile spuse oral? Ce cuvinte ați folosit ca să legați ideile? Fac lista pe tablă.',
          },
          {
            etapa: 'Notițe: rezumatul oral',
            timp: '5 min',
            activitate: '– În caiete, după Repere: ce este rezumatul și cele cinci reguli (ideile principale, ordinea, prezentul sau perfectul compus, fără comentarii, dialog, citate, cuvintele de legătură).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce nu merge în rezumat?) și ex. 2 (cuvinte de legătură), individual, 8 minute.\n– Verificare, 4 minute; pentru fiecare fragment, spunem regula.',
          },
          {
            etapa: 'Quiz',
            timp: '6 min',
            activitate: '– Quizul „Rezumatul oral, regulile”, frontal; discutăm răspunsurile greșite.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1 (fișa „Ce este rezumatul?”, în caiet); fișa de exerciții, pagina 2 (rezumatul zilei, pregătit pentru a fi spus).',
          },
        ],
        evaluare: 'Observarea sistematică; quizul; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-10/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-11/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-11/fisa.pdf)',
          'Scurtmetrajul Lou (Pixar, 2017), dacă e disponibil la clasă',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '5 min',
            activitate: '– Doi elevi spun rezumatul zilei lor; clasa verifică regulile cu lista din caiet.',
          },
          {
            etapa: 'Rezumatul fragmentului din „Oracolul”',
            timp: '13 min',
            activitate: '– Aplicații, ex. 2, în perechi: recitesc fragmentul cu oracolul de la p. 63 și îl rezumă oral pe rând; ascultătorul evaluează pe grila Da/Nu.\n– Doi elevi rezumă în fața clasei; le dau feedback pe fiecare criteriu.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: textul „Fluierul” (scris pentru fișă) și ex. 2 (schema Cine, Scop, Dar, Atunci, Așa că), individual, 8 minute.\n– Verificare, 4 minute; arăt cum schema devine un rezumat în cinci propoziții.',
          },
          {
            etapa: 'Provocări: scurtmetrajul „Lou”',
            timp: '17 min',
            activitate: '– Urmărim scurtmetrajul (circa 7 minute), cu fișa lecției în față.\n– Un minut de gândire după schemă; câțiva elevi prezintă rezumatul oral; clasa verifică regulile.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2 (schema pentru „Capra cu trei iezi” și rezumatul „Fluierului”, pregătit pentru a fi spus).',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 63; observarea rezumatelor orale; fișa de exerciții, ex. 2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-11/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-2/lectia-11/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-12/fisa-exercitii.pdf)',
          'Schema „Verbul. Felul verbelor. Indicativul” (/materiale/clasa-6/unitatea-2/lectia-12/schema.svg)',
          'Cretă colorată',
        ],
        desfasurare: [
          {
            etapa: 'Graffiti',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 64, ex. 1: toți elevii scriu în același timp pe tablă cuvinte care arată ce face Petruța; păstrez pe tablă doar verbele.\n– Ex. 2: ce parte de vorbire sunt? Scriu definiția verbului.',
          },
          {
            etapa: 'Rețeta pentru note mari',
            timp: '10 min',
            activitate: '– Explorare, ex. 1-4: un elev citește rețeta; găsim verbele și funcția lor, auxiliarele și timpurile pe care le formează, apoi locurile unde aceleași verbe sunt predicative.',
          },
          {
            etapa: 'Notițe: felul verbelor',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: verbe predicative și nepredicative; auxiliarele a avea, a vrea, a fi, cu exemple; funcția sintactică.',
          },
          {
            etapa: 'Modurile și prezentul',
            timp: '8 min',
            activitate: '– Explorare (p. 64 jos), ex. 1-3: modurile verbelor din rețetă, timpul celor la indicativ, desinențele și sunetele de prezent (aflăm, ascultați, aud...).\n– Notăm Reperele despre mod, indicativ și prezent.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: scrisoarea lui Ștefan (scrisă pentru fișă), ex. 2 (predicativ sau auxiliar?) și ex. 3 (modul și timpul), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Normă și abatere',
            timp: '4 min',
            activitate: '– Explorare, p. 65, ex. 4: formele pe care „vrăjitoarea” le face să dispară; le explicăm cu DOOM-ul la îndemână.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1-3 (p. 67); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică; fișa de exerciții, ex. 2-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-12/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-12/schema.svg', titlu: 'Verbul. Felul verbelor. Indicativul' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-13/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-13/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Aplicații, ex. 2-3: citim formele corecte și enunțurile construite cu cealaltă formă.',
          },
          {
            etapa: 'Cele patru trecuturi',
            timp: '12 min',
            activitate: '– Explorare, p. 65, ex. 5-7: grupăm verbele în cutiile timpurilor, alcătuirea perfectului compus, desinențele și sunetele de timp.\n– Notăm tabelul de la p. 66 (imperfect, perfect compus, perfect simplu, mai-mult-ca-perfect), cu greșelile frecvente la persoana a II-a singular și la plural.',
          },
          {
            etapa: 'Normă și abatere',
            timp: '4 min',
            activitate: '– Ex. 8: enunțurile corecte și greșelile din celelalte, explicate.',
          },
          {
            etapa: 'Viitorul și imperativul',
            timp: '10 min',
            activitate: '– Ex. 9-12: viitorul de limbă scrisă și de limbă vorbită, viitorul popular, viitorul anterior, viitorul în trecut; notăm Reperele.\n– Ex. 13-14: imperativul din rețetă și imperativul negativ; infinitivul și participiul.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (care trecut?) și ex. 2 (corectează), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Trifoiul norocos',
            timp: '5 min',
            activitate: '– Aplicații, ex. 4, în grupe de patru: verbele pe frunzele timpurilor; câștigă grupa care termină prima corect.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 5-10; „Provocări” (reporterul de la emisiunea de cultivare a limbii); fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea jocului; fișa lecției; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-13/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-2/lectia-13/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-14/fisa-exercitii.pdf)',
          'Schema „Modul conjunctiv” (/materiale/clasa-6/unitatea-2/lectia-14/schema.svg)',
          'Bilețele și un panou',
        ],
        desfasurare: [
          {
            etapa: 'Toamna, cu prietenii',
            timp: '5 min',
            activitate: '– Explorare, p. 68, ex. 1: fiecare continuă pe un bilețel „Într-o zi ploioasă de toamnă, împreună cu prietenii mei pot să...” și îl prinde pe panou; citim câteva.',
          },
          {
            etapa: 'Ce arată conjunctivul',
            timp: '8 min',
            activitate: '– Ex. 2-4: textul despre fotbal – acțiuni sigure sau posibile, elementul comun al verbelor colorate, funcția lor.\n– Ex. 5: formele fără „să” din limba vorbită.\n– Notăm Reperele: acțiune posibilă, marca „să”, predicat verbal.',
          },
          {
            etapa: 'Timpurile conjunctivului',
            timp: '12 min',
            activitate: '– Explorare, ex. 1-3: când se desfășoară acțiunea; conjugarea la prezent (culorile desinențelor și ale sunetelor de conjunctiv, persoana a III-a); perfectul, la fel la toate persoanele.\n– Ex. 4-5: forma negativă; locul lui cam, mai, tot.\n– În caiete, după schema lecției: prezentul și perfectul, alcătuirea lor, forma negativă, topica.',
          },
          {
            etapa: 'Umbreluța',
            timp: '6 min',
            activitate: '– Aplicații, ex. 1, în perechi: grupează enunțurile după timpul conjunctivului; verificăm frontal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (prezent sau perfect?) și ex. 2 (conjugarea verbelor „a scrie”, „a lucra”, „a vedea”), individual, 10 minute.\n– Verificare, 4 minute; atenție la persoana a III-a.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: Aplicații, ex. 2-3 (topica și analiza verbelor din fragmentul de Cleopatra Lorințiu, după model); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului în perechi; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-14/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-15/fisa-exercitii.pdf)',
          'Schema „Modul condițional-optativ” (/materiale/clasa-6/unitatea-2/lectia-15/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Frunza și norul',
            timp: '7 min',
            activitate: '– Explorare, p. 70, ex. 1-2, în perechi: completează „Aș vrea / N-aș vrea să fiu o frunză / un nor, pentru că...”, dau un titlu textului; un elev îl prezintă.\n– Ex. 3-4: ce arată „aș vrea”? Ce arată verbele din enunțul cu jocul Dixit?',
          },
          {
            etapa: 'Timpurile',
            timp: '12 min',
            activitate: '– Explorare, ex. 1-3: când se desfășoară acțiunea; tabelele A și B – auxiliarele a avea și a fi, infinitivul și participiul.\n– Ex. 4-5: forma negativă și funcția sintactică.\n– În caiete, după Repere și schema lecției: definiția, prezentul și perfectul, forma negativă.',
          },
          {
            etapa: 'Limbă vorbită și normă',
            timp: '6 min',
            activitate: '– Ex. 6: formele inverse din vorbirea afectivă; ex. 7: corectăm topica lui mai, cam, tot; notăm regula.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '4 min',
            activitate: '– În perechi: clasificăm verbele după timp; verificăm frontal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (timp și formă) și ex. 2 (conjugarea verbului „a învăța”), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Cărticica ortogramelor (anunțare)',
            timp: '4 min',
            activitate: '– „Provocări”: formez grupele de patru; fiecare elev alege două perechi de ortograme (c-ai/cai, n-aș/naș, s-ar/sar, v-ar/var...) pentru pagina lui; termen: o săptămână.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 2-3 (modurile din fragmentul „Oracolului”, analiza verbelor din textul Laurei Grünberg); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2; cărticica ortogramelor, la portofoliu.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-15/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-16/fisa-exercitii.pdf)',
          'Schema „Verbul copulativ a fi. Predicatul nominal” (/materiale/clasa-6/unitatea-2/lectia-16/schema.svg)',
          'Un săculeț cu un obiect ascuns',
        ],
        desfasurare: [
          {
            etapa: 'Obiectul misterios',
            timp: '6 min',
            activitate: '– Explorare, p. 72, ex. 1: un elev pipăie obiectul din săculeț și răspunde la „Este ușor? Este rece?”; clasa are trei încercări. Scriu pe tablă două răspunsuri ale lui („Este moale.”).',
          },
          {
            etapa: 'Verbul copulativ',
            timp: '7 min',
            activitate: '– Ex. 2-4: „Dan este elev.”, „El este inteligent.” – putem scoate cuvântul de după „a fi”? E predicativ sau nu?\n– Notăm Reperele: verbul copulativ.',
          },
          {
            etapa: 'Predicatul nominal',
            timp: '10 min',
            activitate: '– Explorare, ex. 1-4: predicatele din enunțuri, modul și timpul lui „a fi”, părțile de vorbire cerute, cu câte cuvinte se grupează.\n– În caiete, după schema lecției: predicat nominal = verb copulativ + nume predicativ; numele predicativ simplu și multiplu, prin substantiv sau adjectiv.',
          },
          {
            etapa: 'Acordul și cele trei valori ale lui „a fi”',
            timp: '6 min',
            activitate: '– Explorare, p. 73, ex. 1-2: cui se subordonează numele predicativ; felul lui „a fi”.\n– Notăm: relația ternară, acordul cu subiectul, „a fi” copulativ, predicativ, auxiliar.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Predicatele nominale din enunțuri și grila cu inițialele numelor predicative; cine descoperă primul cuvântul?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce fel de „a fi”?) și ex. 2 (numele predicativ), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Provocări și temă',
            timp: '4 min',
            activitate: '– Doi-trei elevi spun o definiție amuzantă a prieteniei, cu predicat nominal.\n– Tema: Aplicații, ex. 3-5; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică; definițiile cu predicat nominal; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-16/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-16/schema.svg', titlu: 'Verbul copulativ a fi. Predicatul nominal' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-17/fisa-exercitii.pdf)',
          'Schema „Subiectul” (/materiale/clasa-6/unitatea-2/lectia-17/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Joc: Cine aleargă? Cine este blând?',
            timp: '6 min',
            activitate: '– Explorare, p. 74, ex. 1: șase grupe, patru minute, cât mai multe propoziții pentru fișa a sau b; numărăm propozițiile corecte.',
          },
          {
            etapa: 'Subiectul exprimat',
            timp: '8 min',
            activitate: '– Ex. 2-5: ce sunt „aleargă” și „este blând”; ce sunt „copilul” și „pisoiul”; subiectul simplu și multiplu; prin ce părți de vorbire se exprimă.\n– Le atrag atenția: întrebarea se pune predicatului. Notăm definiția și felurile, după schema lecției.',
          },
          {
            etapa: 'Subiectul neexprimat',
            timp: '8 min',
            activitate: '– Explorare, ex. 1-5: propozițiile fără subiect exprimat, de ce lipsește, autorul acțiunii din „alergăm”, desinența care îl arată, propozițiile despre vreme.\n– Ex. 6: greșeala din „Noi învățăm astăzi subiectul.”; notăm subiectul subînțeles, inclus, propozițiile fără subiect și când e firesc pronumele.',
          },
          {
            etapa: 'Acordul predicatului cu subiectul',
            timp: '5 min',
            activitate: '– P. 75, ex. 1-2: acordul în persoană și număr; prioritatea persoanelor la subiectul multiplu; notăm Reperele.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '4 min',
            activitate: '– Frontal: subiectele simple și multiple din textul despre Mihai și prin ce se exprimă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (felul subiectului) și ex. 2 (subînțeles sau inclus?), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '7 min',
            activitate: '– Aplicații, ex. 2, frontal, pe primul enunț, ca model.\n– Tema: Aplicații, ex. 2-3; „Portofoliu” (car, minte, poartă, ca subiect și ca predicat); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea jocului; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-17/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-18/fisa-exercitii.pdf)',
          'Schema „Complementul. Posibilitățile combinatorii ale verbului” (/materiale/clasa-6/unitatea-2/lectia-18/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Enunțuri spontane: pe cine ați întâlnit azi în drum spre școală? Cui ați vrea să faceți un cadou? Ce ați citit ieri? Scriu trei răspunsuri pe tablă.',
          },
          {
            etapa: 'Desenul de la p. 76',
            timp: '10 min',
            activitate: '– Explorare, ex. 1: citim enunțurile și întrebările de sub desen; care arată împrejurări? Elevii notează întrebările în caiet.\n– Ex. 2-3: întrebări pentru părțile nemarcate; prin ce se exprimă părțile secundare.',
          },
          {
            etapa: 'Notițe: complementul',
            timp: '6 min',
            activitate: '– În caiete, după Repere și schema lecției: complementul determină verbul; întrebările (pe cine? ce? cui? la cine? la ce? despre ce? după cine?); exprimat prin substantiv sau pronume, cu sau fără prepoziție.\n– Revenim la enunțurile de pe tablă și subliniem complementele.',
          },
          {
            etapa: 'Posibilitățile combinatorii',
            timp: '7 min',
            activitate: '– P. 77, Explorare, ex. 1-2: felul predicatelor și al subiectelor, apoi complementele din textul despre clopoțel; notăm verbul ca centru (Repere, p. 77).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (găsește complementul) și ex. 2 (completează cu un complement), individual, 8 minute.\n– Verificare, 4 minute; la fiecare complement, cer întrebarea.',
          },
          {
            etapa: 'Aplicații, ex. 1 (începutul)',
            timp: '6 min',
            activitate: '– Primele două enunțuri din textul despre expoziția de desene, frontal: complementele și întrebările lor.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 1, terminat (doar complementele); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-18/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-2/lectia-18/schema.svg', titlu: 'Complementul. Posibilitățile combinatorii ale verbului' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-19/fisa-exercitii.pdf)',
          'Schema „Circumstanțialul. Prepoziția” (/materiale/clasa-6/unitatea-2/lectia-19/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Complementele din textul despre expoziție, citite cu întrebările lor; ce părți au rămas nesubliniate?',
          },
          {
            etapa: 'Circumstanțialul',
            timp: '9 min',
            activitate: '– Revenim la desenul de la p. 76: „În pauză, stăm în clasă.”, „Alex aleargă cu viteză pe lângă bănci.” – când?, unde?, cum?, pe unde?\n– În caiete, după schema lecției: circumstanțialul arată împrejurările; întrebările lui; cum îl deosebim de complement (după întrebare).',
          },
          {
            etapa: 'Prepoziția',
            timp: '8 min',
            activitate: '– Explorare, p. 76, ex. 1-2: prepozițiile de sub desen, simple sau compuse; înaintea cărei părți de propoziție stă „din”.\n– Notăm Reperele: prepoziția simplă și compusă, cu sens sau fără sens, analizată împreună cu cuvântul următor.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '9 min',
            activitate: '– Ex. 1: circumstanțialele din textul despre expoziție; ex. 2: funcția cuvântului „vacanță”; ex. 3: prepozițiile potrivite din tabloul băiatului, oral.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (complement sau circumstanțial?) și ex. 2 (prepozițiile), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Autoevaluare L9-L14',
            timp: '4 min',
            activitate: '– P. 77: elevii completează cele trei afirmații; notez ce trebuie reluat înainte de recapitulare.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Provocări”, p. 77 (prepozițiile folosite greșit la televizor); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2; autoevaluarea L9-L14.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-19/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-20/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-20/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Pentru început',
            timp: '7 min',
            activitate: '– P. 78: fiecare scrie un text de 5-6 rânduri cu păduchi, șampon, chel, gard, prieten, în această ordine, și îl citește colegului de bancă.',
          },
          {
            etapa: 'Fragmentul din „Băiatul cu pijamale în dungi”',
            timp: '10 min',
            activitate: '– Prezint pe scurt romanul lui John Boyne (Bruno, fiul directorului unui lagăr nazist, și prietenul lui, Shmuel); citesc fragmentul.\n– Explorare, ex. 1: o asemănare și o deosebire între textele lor și fragment.',
          },
          {
            etapa: 'Întrebări și conținut',
            timp: '9 min',
            activitate: '– Ex. 2, în perechi: câte trei întrebări cu răspuns în text, puse colegului.\n– Ex. 3: fișa conținutului (cadru, personaje, conflict, acțiune, rezolvare), completată în caiet după consultarea cu colegul.',
          },
          {
            etapa: 'Rezumatul oral și cel scris',
            timp: '4 min',
            activitate: '– Ex. 4: recitim regulile de la p. 62; care se aplică și în scris? Notăm definiția rezumatului scris (Repere, p. 79).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: textul „Bicicleta roșie” (scris pentru fișă) și ex. 2 (conținutul textului), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Secvențele fragmentului',
            timp: '5 min',
            activitate: '– Aplicații, ex. 2 (p. 79), în perechi: încep împărțirea fragmentului din manual în secvențe, cu cuvintele-cheie.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 2, terminat (ideile principale ale fragmentului); fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului în perechi; fișa lecției; fișa de exerciții, ex. 2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-20/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-2/lectia-20/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-21/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-21/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Cele două rezumate',
            timp: '5 min',
            activitate: '– Aplicații, ex. 1: care secvență de rezumat e corectă? Două abateri din cealaltă.',
          },
          {
            etapa: 'Ce eliminăm',
            timp: '5 min',
            activitate: '– Ex. 3-4: care răspunsuri la întrebările de ora trecută nu intră în rezumat; cuvintele din listă care nu au ce căuta într-un rezumat și de ce.',
          },
          {
            etapa: 'Regulile și gerunziul',
            timp: '6 min',
            activitate: '– Notăm cele cinci reguli din Repere, p. 79, și rolul gerunziului.\n– Fișa de exerciții, ex. 2 (cu gerunziu), frontal.',
          },
          {
            etapa: 'Corectarea unui rezumat',
            timp: '5 min',
            activitate: '– Fișa de exerciții, ex. 1 (corectează rezumatul), individual, apoi verificare.',
          },
          {
            etapa: 'Redactarea',
            timp: '20 min',
            activitate: '– Ex. 5: fiecare redactează rezumatul fragmentului din „Băiatul cu pijamale în dungi”, pornind de la ideile principale din temă; planul pe fișa lecției.\n– Trec pe la bănci; ajut la persoana a III-a și la cuvintele de legătură.',
          },
          {
            etapa: 'Interevaluarea',
            timp: '6 min',
            activitate: '– Elevii își citesc rezumatele colegului de bancă și se evaluează pe grila de la p. 79.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: forma finală a rezumatului; fișa de exerciții, pagina 2. Opțional, „Portofoliu”: romanul, rezumatul lui și diagrama Venn roman–film.',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 79; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-2/lectia-21/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-2/lectia-21/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-22/fisa-exercitii.pdf)',
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
            timp: '9 min',
            activitate: '– P. 80: citesc proza scurtă „Ăsta este pentru Jamie” de Truman Capote; elevii urmăresc.',
          },
          {
            etapa: 'Ex. 1-8',
            timp: '8 min',
            activitate: '– Frontal: momentul zilei și alt reper temporal; momentul povestirii; locul întâlnirilor; unde se joacă Jamie; cuvântul-cheie al primului paragraf; personajele pe categorii; persoana și naratorul.',
          },
          {
            etapa: 'Ex. 9-11',
            timp: '8 min',
            activitate: '– Secvențele pe momentele subiectului și planul simplu de idei, în perechi; rezumatul oral spus colegului.',
          },
          {
            etapa: 'Ex. 12-14',
            timp: '4 min',
            activitate: '– Trăsătura lui Teddy din replică; de ce ar fi vrut Jamie să-i dea câinele lui Teddy; relația dintre doi copii care nu se întâlnesc niciodată.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: textul „Cutia de scrisori” (scris pentru fișă) și ex. 2 (timp, spațiu, narator), individual, 7 minute.\n– Verificare, 4 minute.',
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
        evaluare: 'Observarea sistematică; quizul; fișa de exerciții, ex. 2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-22/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-23/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: '– Scriu pe tablă ultima propoziție a scrisorii din textul lui Capote; cine găsește primul modul și timpul fiecărui verb?',
          },
          {
            etapa: 'Ex. 15-18',
            timp: '8 min',
            activitate: '– Pe textul de la p. 80: auxiliarele din „A venit pe alee...”; rolul cuvântului colorat; analiza verbelor; un enunț cu „a plăcea” la condițional-optativ prezent.',
          },
          {
            etapa: 'Ex. 19-23',
            timp: '9 min',
            activitate: '– Felul predicatului din „parcul era proaspăt și verde”; un conjunctiv prezent din ultimul paragraf; predicatul și subiectul din „Era indian, detectiv...”; funcțiile din „Femeia a ridicat privirea.”; părțile secundare din „A tras câinele spre el.”',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: textul „Cutia de scrisori”, ex. 2 (verbele din text) și ex. 3 (predicat verbal sau nominal?), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Pregătirea rezumatului',
            timp: '8 min',
            activitate: '– Ex. 24: reamintim regulile rezumatului scris; fiecare își face planul pentru rezumatul textului lui Capote, pornind de la ideile de la ex. 10.',
          },
          {
            etapa: 'Quiz',
            timp: '6 min',
            activitate: '– Quizul „Recapitulare, gramatică și redactare”; discutăm greșelile.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: ex. 24, rezumatul scris; fișa de exerciții, pagina 2. Anunț evaluarea: verbul și modurile, predicatul, subiectul, complementul, circumstanțialul, momentele subiectului, rezumatul.',
          },
        ],
        evaluare: 'Observarea sistematică; quizul; fișa de exerciții, ex. 2-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-2/lectia-23/fisa-exercitii.pdf' },
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
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Distribui testele (fragment după Mircea Sântimbreanu, „Mărinimie”) și foile de răspuns.\n– Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: modul și timpul, condițional-optativ, felul predicatului și al subiectului, funcții sintactice, naratorul, repere de timp și spațiu, idei principale pentru intrigă și punctul culminant, înțelegerea poantei, semnificația unei afirmații); B, 30 de puncte (rezumatul textului); 10 puncte din oficiu.\n– Recomand circa 25 de minute pentru A, 15 minute pentru rezumat, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual, pe foaia separată; supraveghez discret.\n– Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii își recitesc lucrarea (persoana a III-a și timpurile din rezumat, ortografia, punctuația), apoi strâng foile.\n– Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.',
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
