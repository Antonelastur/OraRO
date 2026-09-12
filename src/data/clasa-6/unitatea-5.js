// Unitatea V: Călătorii de tot felul — clasa a VI-a
// Sursă: manual Art Klett 2023, cuprins pp. 6, 8-9 (numerotare proprie L1-L16);
// proiectarea pe unități 2023-2024; planificarea calendaristică.
//
// Aceeași convenție ca la Unitățile I-IV: 22 de lecții din proiectarea pe
// unități (o resursă pe oră de curs), nu 16 după numerotarea manualului.
// Paginile au fost verificate direct în Art 6.pdf. Unde o lecție de manual
// (L16 Transformarea vorbirii directe în indirectă, Recapitularea) e predată
// în 2 ore și apare aici ca 2 lecții de site, sursaManual notează
// „partea 1/2” și „partea 2/2”. Fiecare schemă arată doar conceptul predat
// în ora respectivă.
//
// Ultima unitate din clasa a VI-a construită structural. După aceasta,
// materiale-restante.md conține lista completă, cumulativă, pe toate cele
// cinci unități, pentru o sesiune dedicată de completare.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.
//
// Materiale: schema pentru lecțiile 3, 4, 8, 14, 16, 18. Joc pentru 12, 20,
// 21. Restul rămân null, listate în materiale-restante.md.

export const unitatea5 = {
  id: 'unitatea-5',
  titlu: 'Unitatea V: Călătorii de tot felul',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Proiectul „Comunitățile din jurul României” (anunțare)',
      obiective: [
        'Se familiarizează cu tema, sarcinile și criteriile de evaluare ale proiectului de grup Comunitățile din jurul României.',
      ],
      sursaManual: 'Manual, Proiect de grup, p. 175',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiectul „Comunitățile din jurul României” (anunțare)',
        data: null,
        tipOra: 'Proiect, anunțare',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, sarcinile și criteriile de evaluare ale proiectului de grup Comunitățile din jurul României.',
        ],
        resurse: [
          'Manual Art 6, p. 175',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-1/fisa.pdf)',
          'Bilețele pentru tragerea la sorți',
        ],
        desfasurare: [
          {
            etapa: 'Români dincolo de graniță',
            timp: '5 min',
            activitate: '– Întreb: ce țări se învecinează cu România? Știți locuri din afara granițelor unde se vorbește românește?\n– Notez pe tablă, fără corecturi, ce spun elevii; revenim la listă la prezentarea proiectului.',
          },
          {
            etapa: 'Sarcina de lucru',
            timp: '8 min',
            activitate: '– Citim „Sarcina de lucru” de la p. 175: cinci grupe, câte o țară vecină (Bulgaria, Republica Moldova, Serbia, Ucraina, Ungaria).\n– Pașii din săptămâna I, pe tablă: poziția geografică, populația, limba oficială, regiunile cu comunități de români, numărul aproximativ al acestora, personalități.',
          },
          {
            etapa: 'Calendarul pe trei săptămâni',
            timp: '5 min',
            activitate: '– Săptămâna I: roluri și documentare; săptămâna II: selectarea informațiilor și alegerea formei (poster, prezentare, animație, poveste digitală); săptămâna III: prezentarea (Lecția 11).\n– Elevii notează în caiete datele-limită.',
          },
          {
            etapa: 'Tragerea la sorți',
            timp: '3 min',
            activitate: '– Formez cele cinci grupe; câte un reprezentant trage bilețelul cu țara.',
          },
          {
            etapa: 'Fișa lecției: rolurile',
            timp: '15 min',
            activitate: '– Distribui fișa de proiect; grupele citesc ce trebuie să conțină prezentarea (unde trăiește comunitatea, cum își păstrează limba, tradiții, o mărturie).\n– Completează rubrica 5: numele fiecărui membru și rolul lui (coordonator, cercetători, redactor, prezentator); trec pe la fiecare grupă și verific că toți au o sarcină.',
          },
          {
            etapa: 'Criteriile de evaluare',
            timp: '5 min',
            activitate: '– Citim criteriile de la p. 175 (conținutul, munca în echipă, prezentarea) și grila orientativă din fișă.\n– Precizez că la final fiecare grupă se autoevaluează pe grila din Lecția 11.',
          },
          {
            etapa: 'Surse de încredere',
            timp: '5 min',
            activitate: '– Discutăm unde caută informații: site-uri oficiale, enciclopedii, presa comunităților, interviuri cu cunoscuți.\n– Regula grupei: fiecare informație are notată sursa.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fiecare membru aduce ora viitoare două informații despre țara grupei, cu sursa notată.\n– Coordonatorul stabilește, până la finalul săptămânii, când se întâlnește grupa.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de organizare a grupei, fără notare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-1/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Textul narativ literar. D-l Goe... de I.L. Caragiale',
      obiective: [
        'Identifică informații esențiale din textul narativ D-l Goe... de I.L. Caragiale.',
      ],
      sursaManual: 'Manual, Lecția 1, pp. 154-157 (D-l Goe... de I.L. Caragiale)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. D-l Goe... de I.L. Caragiale',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul narativ D-l Goe... de I.L. Caragiale.',
        ],
        resurse: [
          'Manual Art 6, pp. 154-157',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-2/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Călătorii și reguli',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 154, ex. 1-2: cu ce mijloace de transport ați călătorit? Care a fost cel mai confortabil, care cel mai puțin?\n– Ex. 3, în perechi: cinci reguli de purtare într-un mijloc de transport în comun; două perechi le citesc, notez pe tablă regulile comune.',
          },
          {
            etapa: 'Titlul',
            timp: '2 min',
            activitate: '– Ex. 4: cine ar putea fi personajul unui text numit „D-l Goe...”? Cum vi-l imaginați?',
          },
          {
            etapa: 'Despre autor',
            timp: '3 min',
            activitate: '– Caseta de la p. 154: I.L. Caragiale, cel mai mare dramaturg român („O scrisoare pierdută”, „D-ale carnavalului”); textul a apărut în ziarul „Universul” în mai 1900 și în volumul „Momente și schițe”.',
          },
          {
            etapa: 'Lectura model',
            timp: '12 min',
            activitate: '– Citesc expresiv textul (pp. 154-157); elevii urmăresc.\n– Lămurim cuvintele din subsol pe măsură ce apar: 10 Mai, hatâr, urbe, impacient, cupeu, vergea, parol, macaz, beret, captiv, manivelă.',
          },
          {
            etapa: 'Impresii după prima lectură, ex. 1',
            timp: '6 min',
            activitate: '– Elevii împart pagina de caiet în patru cadrane și completează cele patru enunțuri (mi-a plăcut, nu mi-a plăcut, nu am înțeles, mi-a amintit de).\n– Trei-patru elevi citesc câte un cadran; lămurim pe loc ce „nu am înțeles”.',
          },
          {
            etapa: 'Impresii, ex. 3-4',
            timp: '4 min',
            activitate: '– Ex. 3: ați fi scris alt final? De ce?\n– Ex. 4: ce întrebare i-ați pune lui Caragiale despre text?',
          },
          {
            etapa: 'Impresii, ex. 2',
            timp: '2 min',
            activitate: '– Elevii caută în text cuvintele cu formă greșită; le scriem pe tablă, cu forma corectă alături.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ordinea întâmplărilor) și ex. 2 (cine spune replica?), individual, 8 minute.\n– Verificare, 4 minute; la replicile disputate, căutăm locul din text.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Impresii după prima lectură”, ex. 5 (cum s-ar îmbrăca Goe azi), în scris; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-2/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Acțiunea, spațiul și timpul',
      obiective: [
        'Identifică spațiul și indiciile temporale ale unei călătorii, pe baza textului D-l Goe...',
      ],
      sursaManual: 'Manual, Lecția 2, pp. 158-159',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Acțiunea, spațiul și timpul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică spațiul și indiciile temporale ale unei călătorii, pe baza textului D-l Goe...',
        ],
        resurse: [
          'Manual Art 6, pp. 158-159',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-3/fisa-exercitii.pdf)',
          'Schema „Acțiunea, spațiul și timpul într-o schiță” (/materiale/clasa-6/unitatea-5/lectia-3/schema.svg)',
          'O hartă sau acces la internet',
        ],
        desfasurare: [
          {
            etapa: 'Explorare, ex. 1-2',
            timp: '9 min',
            activitate: '– Ex. 1, în perechi: fragmentele logice și cuvântul-cheie al fiecăruia.\n– Ex. 2, în grupe de 4-6: ideile principale și tema textului; o grupă le scrie pe tablă, celelalte completează.',
          },
          {
            etapa: 'Rezumatul prin ștafetă, ex. 3',
            timp: '5 min',
            activitate: '– În aceleași grupe, fiecare elev rezumă oral câte un fragment și predă ștafeta; ascult o grupă până la capăt.',
          },
          {
            etapa: 'Evenimentul și spațiul, ex. 4-8',
            timp: '8 min',
            activitate: '– Ex. 4: un singur eveniment sau mai multe?\n– Ex. 5: schema din caiet cu spațiul de început, spațiul întâmplărilor și spațiul final.\n– Ex. 6-7: locurile din tren și localitățile prin care trece trenul, căutate pe hartă; ce rol au nume reale într-un text literar?\n– Ex. 8: spațiu amplu sau restrâns?',
          },
          {
            etapa: 'Timpul și naratorul, ex. 9-13',
            timp: '7 min',
            activitate: '– Ex. 9: tabelul indicilor temporali, copiat în caiet și completat în perechi; ex. 10-11: alți indici și durata călătoriei.\n– Ex. 12-13: persoana narării și vocea care narează (variantele a-d, cu justificare).',
          },
          {
            etapa: 'Notițe: schița',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 158) și schema lecției: schița, un singur eveniment semnificativ, spațiu restrâns, timp limitat, ritm alert, detalii puține, dar semnificative.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (textul „În autobuz”, scris pentru fișă) și ex. 2 (trăsăturile schiței în text), individual, 7 minute.\n– Verificare, 4 minute; întrebarea finală: cu cine seamănă băiatul din autobuz?',
          },
          {
            etapa: 'Aplicații, ex. 2',
            timp: '3 min',
            activitate: '– De ce „urbea X”? Elevii aleg dintre variantele a-d sau propun alta și își susțin alegerea.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1 și 3; ex. 4 (fragmentul din Ioana Pârvulescu, informațiile cele mai interesante notate în caiet); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului în perechi și pe grupe; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-3/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-5/lectia-3/schema.svg', titlu: 'Acțiunea, spațiul și timpul într-o schiță' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Dialogul în textul literar',
      obiective: [
        'Recunoaște replicile și verbele de declarație într-un text narativ dialogat.',
      ],
      sursaManual: 'Manual, Lecția 3, pp. 160-161',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Dialogul în textul literar',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște replicile și verbele de declarație într-un text narativ dialogat.',
        ],
        resurse: [
          'Manual Art 6, pp. 160-161',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-4/fisa-exercitii.pdf)',
          'Schema „Dialogul în textul literar” (/materiale/clasa-6/unitatea-5/lectia-4/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Cine vorbește? Explorare, ex. 1-3',
            timp: '8 min',
            activitate: '– Ex. 1: ce personaje comunică între ele?\n– Ex. 2, în grupe de 4-6, ca pentru o punere în scenă: fiecare grupă primește o pagină a textului și atribuie replicile; numărăm cine vorbește cel mai mult.\n– Ex. 3: fac toate replicile parte dintr-un dialog?',
          },
          {
            etapa: 'Replica, ex. 4-6',
            timp: '4 min',
            activitate: '– Fragmentul dintre mamiță și Goe: cine e vorbitor, cine ascultător; sunt legate cele două intervenții? Ce semn marchează intervenția?',
          },
          {
            etapa: 'Verbele de declarație, ex. 7-9',
            timp: '7 min',
            activitate: '– Ex. 7: secvențele a-b transcrise în caiet; replicile subliniate cu albastru, verbele cu verde.\n– Ex. 8: tabelul verb – poziție – semn de punctuație; ex. 9: cuvintele despre mimica și tonul lui Goe, încercuite.',
          },
          {
            etapa: 'Notițe: dialogul',
            timp: '6 min',
            activitate: '– În caiete, după Repere (pp. 160-161) și schema lecției: dialogul, replica, linia de dialog; verbele de declarație și cele trei poziții (înainte, cu două puncte; după, precedate de virgulă, !, ?, ...; în interior, între virgule sau linii de pauză); rolul semnelor !, ?, ...; indicii nonverbali și paraverbali.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '3 min',
            activitate: '– Ex. 1: ultima replică a textului face parte dintr-un dialog? Ex. 2, frontal: verbele și poziția lor în fragmentele a-b.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1-2 (dialogul fără semne, rescris corect) și ex. 3 (verbul de declarație, poziția, semnul), individual, 9 minute.\n– Verificare, 4 minute; un elev scrie dialogul pe tablă.',
          },
          {
            etapa: 'Tipuri de replici, ex. 12',
            timp: '6 min',
            activitate: '– Cinci grupe, câte un tip de replică (scurte, întrerupte, întrebare-răspuns, două-trei întrebări, răspuns și comentariu); fiecare citește exemplul găsit.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Explorare, ex. 10-11; Aplicații, ex. 3-5 (ex. 5 în 6-8 rânduri); fișa de exerciții, pagina 2.\n– Miniproiectul de la „Provocări”: două grupe pregătesc sceneta, a treia e juriul, cu grila de la p. 161.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-5/lectia-4/schema.svg', titlu: 'Dialogul în textul literar' },
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Personajele',
      obiective: [
        'Identifică trăsăturile personajelor din textul D-l Goe..., pe baza acțiunilor și a replicilor lor.',
      ],
      sursaManual: 'Manual, Lecția 4, pp. 162-163',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Personajele',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile personajelor din textul D-l Goe..., pe baza acțiunilor și a replicilor lor.',
        ],
        resurse: [
          'Manual Art 6, pp. 162-163',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-5/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-5/fisa.pdf)',
          'Coli mari pentru harta personajelor',
        ],
        desfasurare: [
          {
            etapa: 'Personajele, Explorare, ex. 1-3',
            timp: '5 min',
            activitate: '– Personajul principal; celelalte personaje, grupate în secundare și episodice (schema de la ex. 2, în caiet); cine sunt personajele care doar asistă?',
          },
          {
            etapa: 'Portretul lui Goe, ex. 4-5',
            timp: '4 min',
            activitate: '– Aspect fizic sau doar ținută? Ce sugerează lipsa portretului fizic?\n– Ce spune naratorul despre Goe în primul paragraf și în restul textului?',
          },
          {
            etapa: 'Ce spun ceilalți, ex. 6-8',
            timp: '7 min',
            activitate: '– Ex. 6: cui îi aparține fiecare replică despre Goe (a-f)?\n– Ex. 7-8: ce trăsături scoate în evidență fiecare și ce atitudine au adulții față de el (variantele date sau altele).',
          },
          {
            etapa: 'Faptele și vorbele lui Goe, ex. 9-10',
            timp: '5 min',
            activitate: '– Ex. 9: secvențele cu faptele lui și trăsăturile care reies.\n– Ex. 10: replicile a-b, cu verbele care le însoțesc (întrerupe, zice smucindu-se).',
          },
          {
            etapa: 'Notițe: trăsăturile personajului',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 162): figuranții; trăsături numite (de narator, de alte personaje, de el însuși) și deduse (fapte, atitudine, vorbire); rolul dialogului și al verbelor de declarație în construirea personajului.',
          },
          {
            etapa: 'Harta personajelor, Aplicații, ex. 1',
            timp: '10 min',
            activitate: '– Grupe de 4-6, pe coli mari: Goe în mijloc, celelalte personaje în colțuri, săgeți în ambele sensuri cu atitudinea fiecăruia.\n– Două grupe prezintă; celelalte adaugă ce lipsește.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (trăsătura și sursa ei) și ex. 2 (cele trei cucoane), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Fișa lecției',
            timp: '3 min',
            activitate: '– Distribui fișa lecției; elevii rezolvă ex. 1 (personajele în ordinea apariției); restul fișei rămâne pentru acasă.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: Aplicații, ex. 2-5 (organizatorul grafic de la ex. 4, în caiet); fișa lecției, ex. 2-4; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; harta personajelor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-5/lectia-5/fisa-exercitii.pdf' },
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
        'Formulează o opinie argumentată despre semnificația textului D-l Goe..., inclusiv despre ironia din text.',
      ],
      sursaManual: 'Manual, Lecția 5, pp. 164-165',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie argumentată despre semnificația textului D-l Goe..., inclusiv despre ironia din text.',
        ],
        resurse: [
          'Manual Art 6, pp. 164-165',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-6/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-6/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Titlul, Interpretare, ex. 1-2',
            timp: '6 min',
            activitate: '– Ex. 1: ce trăsături ar trebui să aibă un „domn”? Le comparăm cu ale lui Goe; ce sugerează alăturarea și punctele de suspensie?\n– Ex. 2: titlul inițial, „10 Mai”: ce contrast apare între sărbătoarea națională și întâmplare?',
          },
          {
            etapa: 'Copilul care imită, ex. 3',
            timp: '5 min',
            activitate: '– În perechi: situații în care Goe face exact ce fac cele trei femei; fiecare pereche citește una.',
          },
          {
            etapa: 'Comicul și ironia, ex. 4-5',
            timp: '9 min',
            activitate: '– Citim definițiile din enunțuri și le notăm în caiete: comicul (din contraste: aparență-esență, vechi-nou, efort-rezultat) și ironia.\n– Ex. 4 a-d, frontal: în ce constă comicul fiecărei situații?\n– Ex. 5 a-b: ironia naratorului.',
          },
          {
            etapa: 'Linia valorică, ex. 6',
            timp: '8 min',
            activitate: '– E Goe vinovat pentru felul în care se poartă? Elevii se așază de o parte și de alta a unei linii imaginare.\n– Fiecare tabără își prezintă argumentele; cine își schimbă părerea trece linia și spune de ce.',
          },
          {
            etapa: 'Goe și noi, ex. 7-9',
            timp: '5 min',
            activitate: '– Ex. 7: cu ce personaje literare sau din filme l-ați asocia pe Goe?\n– Ex. 8-9: în ce vă asemănați sau vă deosebiți de el; citim unul dintre răspunsurile elevilor de la ex. 9.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (unde e comicul?) și ex. 2 (argumentele pentru „linia valorică”), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Fișa lecției',
            timp: '3 min',
            activitate: '– Fișa lecției, ex. 2: ideea centrală a textului, într-o singură propoziție; două-trei formulări citite și comparate.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: ex. 9 (textul propriu) sau ex. 10 (mesajul către cele trei femei), la alegere; fișa de exerciții, pagina 2.\n– Portofoliu: cvintetul despre un personaj, după modelul de la p. 165.',
          },
        ],
        evaluare: 'Observarea participării la linia valorică; fișa de exerciții, ex. 1-2. Temă de portofoliu: cvintetul despre un personaj.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-6/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-5/lectia-6/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Textul argumentativ. Motive pentru care călătoriile te fac mai bun de Samantha Fanelli',
      obiective: [
        'Identifică argumentele dintr-un text argumentativ despre efectele pozitive ale călătoriilor.',
      ],
      sursaManual: 'Manual, Lecția 6, pp. 166-167 (Motive pentru care călătoriile te fac mai bun de Samantha Fanelli)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul argumentativ. Motive pentru care călătoriile te fac mai bun de Samantha Fanelli',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică argumentele dintr-un text argumentativ despre efectele pozitive ale călătoriilor.',
        ],
        resurse: [
          'Manual Art 6, pp. 166-167',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-7/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-7/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Patru locuri, „Pentru început”, ex. 1-3',
            timp: '5 min',
            activitate: '– Imaginile de la p. 166: ce reprezintă fiecare, prin ce se aseamănă și se deosebesc, unde ați vrea să ajungeți și de ce.',
          },
          {
            etapa: 'Ultima mea călătorie, ex. 4',
            timp: '4 min',
            activitate: '– Fiecare elev continuă în caiet două dintre cele cinci începuturi de enunț; trei elevi le citesc.',
          },
          {
            etapa: 'Despre autoare',
            timp: '2 min',
            activitate: '– Caseta de la p. 166: Samantha Fanelli, scriitoare și jurnalistă din Danemarca, autoare de articole despre călătorii.',
          },
          {
            etapa: 'Lectura model',
            timp: '8 min',
            activitate: '– Citesc textul (pp. 166-167); elevii urmăresc și marchează pe margine, cu creionul, paragrafele.\n– Lămurim similaritate și revelație (subsol).',
          },
          {
            etapa: 'Impresii după prima lectură, ex. 1',
            timp: '5 min',
            activitate: '– Cele patru cadrane în caiet; trei elevi citesc câte unul.',
          },
          {
            etapa: 'Impresii, ex. 2-6',
            timp: '7 min',
            activitate: '– Ex. 2: tema textului (a-d), cu justificare; ex. 3-5: legătura cu imaginea cu obiecte de călătorie, rolul a trei obiecte, ce altceva ați lua cu voi.\n– Ex. 6: o asemănare de conținut cu „D-l Goe...”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (adevărat sau fals?) și ex. 2 (ce te învață călătoria, cu exemple repovestite din text), individual, 7 minute.\n– Verificare, 4 minute; la fiecare „fals”, căutăm paragraful.',
          },
          {
            etapa: 'Fișa lecției',
            timp: '5 min',
            activitate: '– Ex. 1: teza autoarei, într-o propoziție; ex. 3, oral: ești de acord? Adaugă un argument propriu.\n– Ex. 2 și 4 rămân pentru ora următoare, când învățăm argumentul și contraargumentul.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; recitirea textului, cu atenție la cuvintele „Mai întâi”, „Apoi”, „Pe de altă parte”, „În concluzie”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; fișa lecției, ex. 1.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-7/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-5/lectia-7/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Organizarea textului argumentativ',
      obiective: [
        'Identifică ipoteza, argumentele și concluzia unui text argumentativ.',
      ],
      sursaManual: 'Manual, Lecția 7, pp. 168-169',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Organizarea textului argumentativ',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică ipoteza, argumentele și concluzia unui text argumentativ.',
        ],
        resurse: [
          'Manual Art 6, pp. 168-169',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-8/fisa-exercitii.pdf)',
          'Schema „Organizarea textului argumentativ” (/materiale/clasa-6/unitatea-5/lectia-8/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Scopul și părțile, Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Ex. 1: cu ce scop a fost scris textul (a-d)?\n– Ex. 2: delimităm introducerea, cuprinsul și încheierea; elevii marchează pe manual.',
          },
          {
            etapa: 'Modelul textului, ex. 3',
            timp: '4 min',
            activitate: '– Citim modelul „Este bine să călătorești...” cu secvențele a-d; care e ideea de la care pornește autoarea? Fapt sau opinie?',
          },
          {
            etapa: 'Argumente, exemple, concluzie, ex. 4-8',
            timp: '8 min',
            activitate: '– Ex. 4-5: cele două argumente (secvența b) și care e mai convingător.\n– Ex. 6: un fragment despre emoții; ex. 7: exemplele din al doilea paragraf (secvența c); ex. 8: concluzia și locul ei în model.',
          },
          {
            etapa: 'Notițe: textul argumentativ',
            timp: '7 min',
            activitate: '– În caiete, după Repere (p. 168) și schema lecției: scopul, premisa (ipoteza, teza), argumentele și exemplele, contraargumentul, concluzia; schema introducere – cuprins – încheiere.\n– Formulele: de ierarhizare, de exemplificare, de legătură, de concluzie, de implicare a cititorului; timpul prezent.',
          },
          {
            etapa: 'Aplicații, ex. 1-4',
            timp: '5 min',
            activitate: '– Ex. 1: ipoteza reformulată de fiecare; ex. 2: conectorii primelor două argumente.\n– Ex. 3-4: cuvântul-cheie al primului argument și argumentul reformulat cu el.',
          },
          {
            etapa: 'Contraargumentul, Aplicații, ex. 12-15',
            timp: '4 min',
            activitate: '– Secvența „Pe de altă parte...”: ce contraargument conține, prin ce formulă e introdus, ce exemple îl susțin, de ce autoarea îl consideră mai puțin important.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (textul „O carte în vacanță”, scris pentru fișă, și părțile lui), individual, 7 minute.\n– Verificare, 4 minute, pe schema de pe tablă.',
          },
          {
            etapa: 'Autoevaluare L1-L7',
            timp: '3 min',
            activitate: '– Elevii completează în caiete cele trei enunțuri de la p. 169 (cel mai important, cel mai plăcut, cel mai dificil); colectez oral ce a fost greu.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 5-11 și 16-18; fișa de exerciții, pagina 2.\n– Portofoliu: „Este important să știi să argumentezi?”, după modelul de la ex. 3; fișa lecției 7, ex. 2 și 4.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea achizițiilor din lecțiile 1-7. Temă de portofoliu: textul „Este important să știi să argumentezi?”.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-8/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-5/lectia-8/schema.svg', titlu: 'Organizarea textului argumentativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Text auxiliar. George și cheia secretă a Universului de Lucy și Stephen Hawking',
      obiective: [
        'Formulează idei și puncte de vedere pe baza fragmentului auxiliar George și cheia secretă a Universului.',
      ],
      sursaManual: 'Manual, Lecția 8, „Noi pagini, alte idei”, pp. 170-171 (George și cheia secretă a Universului de Lucy și Stephen Hawking)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. George și cheia secretă a Universului de Lucy și Stephen Hawking',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Formulează idei și puncte de vedere pe baza fragmentului auxiliar George și cheia secretă a Universului.',
        ],
        resurse: [
          'Manual Art 6, pp. 170-171',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-9/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-9/fisa.pdf)',
          'Creioane, pentru notarea pe margine',
        ],
        desfasurare: [
          {
            etapa: 'Ce știm despre planete',
            timp: '4 min',
            activitate: '– Întreb: câte planete are Sistemul Solar? Care e cea mai mare? Ce planetă are inele?\n– Notez răspunsurile pe tablă, fără să le corectez; le verificăm după lectură.',
          },
          {
            etapa: 'Metoda SINELG',
            timp: '3 min',
            activitate: '– Citim prezentarea romanului (p. 170) și explic cele patru semne de pe margine: confirmă, contrazice, nou, neclar.',
          },
          {
            etapa: 'Lectura cu semne',
            timp: '10 min',
            activitate: '– Elevii citesc individual fragmentul (pp. 170-171) și notează semnele cu creionul.',
          },
          {
            etapa: 'Discutarea textului, ex. 1-4',
            timp: '7 min',
            activitate: '– Ex. 1: ce semn predomină? Confruntare în perechi.\n– Ex. 2-4: ce s-a confirmat, ce a contrazis ce știau, ce a rămas neclar; ne întoarcem la lista de pe tablă.',
          },
          {
            etapa: 'Locul, personajele, ex. 5-8',
            timp: '7 min',
            activitate: '– Ex. 5: unde se petrece întâmplarea?\n– Ex. 6, ștafeta pe scurt: câte o propoziție de rezumat de la fiecare elev din bancă și din banca din spate.\n– Ex. 7-8: trăsăturile lui George și ale lui Annie; replicile în care Annie îl tachinează.',
          },
          {
            etapa: 'Călătoria mea, ex. 9',
            timp: '2 min',
            activitate: '– Prin ce seamănă călătoria lui George cu una făcută de voi? Două-trei răspunsuri.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (adevărat sau fals, cu semnul propriu) și ex. 2 (George sau Annie?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Biblioteci deschise',
            timp: '3 min',
            activitate: '– Prezint cele două recomandări de la p. 171, „Toate pânzele sus!” de Radu Tudoran și „Călătoriile lui Gulliver” de Jonathan Swift; cine vrea le poate împrumuta de la bibliotecă.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa lecției (jurnalul cu dublă intrare, asemănări și deosebiri față de „D-l Goe...”, recomandarea); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lecturii cu semne și a discuției; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-9/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-5/lectia-9/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Limba română în Europa. Comunitatea lingvistică a vorbitorilor de limbă română de pretutindeni',
      obiective: [
        'Identifică informații despre comunitatea lingvistică a vorbitorilor de limbă română din Europa.',
      ],
      sursaManual: 'Manual, Lecția 9, pp. 172-174',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Limba română în Europa. Comunitatea lingvistică a vorbitorilor de limbă română de pretutindeni',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Identifică informații despre comunitatea lingvistică a vorbitorilor de limbă română din Europa.',
        ],
        resurse: [
          'Manual Art 6, pp. 172-174',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-10/fisa-exercitii.pdf)',
          'Infograficul „Limba română în Europa” (/materiale/clasa-6/unitatea-5/lectia-10/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Harta Europei, „Pentru început”, ex. 1',
            timp: '7 min',
            activitate: '– Grupe de 4-6: limbile oficiale ale cât mai multor țări de pe harta de la p. 172, în 5 minute.\n– Numărăm răspunsurile corecte; câștigă grupa cu cele mai multe.',
          },
          {
            etapa: 'Româna fără să fie limbă națională, ex. 2',
            timp: '3 min',
            activitate: '– În ce țări credeți că se vorbește românește fără să fie limbă națională? Notez ipotezele pe tablă.',
          },
          {
            etapa: 'Lectura grupajului',
            timp: '8 min',
            activitate: '– Citesc poezia lui Grigore Vieru și textul lui Nichita Stănescu; doi elevi citesc e-mailul Luminiței.\n– Explorare, ex. 1: fiecare notează în caiet câte o secvență din fiecare text.',
          },
          {
            etapa: 'Explorare, ex. 2-7',
            timp: '8 min',
            activitate: '– Ex. 2: comparăm secvențele cu colegul; ex. 3-4: tema și sentimentele din primele două texte.\n– Ex. 5-6: ce a surprins-o pe Luminița, în ce țări se mai vorbește românește, de ce există cursul de „Limbă, cultură și civilizație românească”.\n– Ex. 7: istoria cuvântului diaspora și sensul lui în e-mail.',
          },
          {
            etapa: 'Notițe și infografic',
            timp: '5 min',
            activitate: '– Proiectez infograficul; în caiete, după Repere (p. 173): numărul vorbitorilor, țările unde româna e limbă oficială, comunitățile din Europa și de pe alte continente, diaspora, cursurile pentru străini.\n– Verificăm ipotezele de la ex. 2.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (adevărat sau fals?) și ex. 2 (unde se vorbește românește?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: '„Limba română este patria mea”, Aplicații, ex. 2',
            timp: '4 min',
            activitate: '– Discuție: ce înseamnă enunțul? Două-trei explicații, apoi o formulare comună notată în caiete.',
          },
          {
            etapa: 'Ziua Limbii Române',
            timp: '3 min',
            activitate: '– Aplicații, ex. 6: 31 august, Ziua Limbii Române; citesc fragmentul din poezia lui Nicolae Dabija de la p. 174.\n– Propunem o activitate pe care clasa ar putea s-o organizeze (rubrica de la p. 174).',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: Aplicații, ex. 4-5; Portofoliu, ex. 1 (ce reprezintă limba română pentru tine, 30-50 de cuvinte); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2. Temă de portofoliu: textul de 30-50 de cuvinte.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-10/fisa-exercitii.pdf' },
        joc: null,
        infografic: { fisier: '/materiale/clasa-6/unitatea-5/lectia-10/infografic.svg', titlu: 'Limba română în Europa' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Prezentarea proiectului „Comunitățile din jurul României”',
      obiective: [
        'Prezintă și evaluează, pe grupe, proiectul Comunitățile din jurul României, conform criteriilor stabilite.',
      ],
      sursaManual: 'Manual, Proiect de grup, p. 175',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului „Comunitățile din jurul României”',
        data: null,
        tipOra: 'Proiect, prezentare și evaluare',
        durata: 50,
        obiective: [
          'Prezintă și evaluează, pe grupe, proiectul Comunitățile din jurul României, conform criteriilor stabilite.',
        ],
        resurse: [
          'Manual Art 6, p. 175, criteriile de evaluare',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-11/fisa.pdf)',
          'Produsele grupelor, postere sau prezentări',
        ],
        desfasurare: [
          {
            etapa: 'Pregătirea',
            timp: '5 min',
            activitate: '– Tragem la sorți ordinea grupelor; posterele se afișează, prezentările se deschid pe calculator.\n– Reamintesc criteriile de la p. 175 și timpul: cel mult 6 minute pe grupă, cu un minut pentru întrebări.',
          },
          {
            etapa: 'Prezentările grupelor',
            timp: '35 min',
            activitate: '– Cele cinci grupe prezintă comunitățile românești din Bulgaria, Republica Moldova, Serbia, Ucraina și Ungaria.\n– După fiecare grupă: o întrebare din partea colegilor și o observație de la mine; notez punctajul pe criterii.',
          },
          {
            etapa: 'Evaluarea',
            timp: '6 min',
            activitate: '– Fiecare grupă completează fișa lecției (grila, ce a mers bine, ce ar schimba, nota pe care și-o dă).\n– Compar autoevaluarea cu punctajul meu și anunț calificativele.',
          },
          {
            etapa: 'Reflecție',
            timp: '4 min',
            activitate: '– Pasul 7 de la p. 175: ce ați descoperit despre comunitățile din jurul României? Dar despre voi, lucrând în echipă?\n– Revenim la lista de pe tablă din prima oră a proiectului.',
          },
        ],
        evaluare: 'Evaluare pe criteriile de la p. 175; autoevaluarea grupei pe fișa lecției.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-11/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Performarea actelor de limbaj',
      obiective: [
        'Recunoaște actele de limbaj (promisiune, felicitare, interzicere, recomandare) dintr-o secvență de comunicare.',
      ],
      sursaManual: 'Manual, Lecția 10, pp. 176-177',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Performarea actelor de limbaj',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Recunoaște actele de limbaj (promisiune, felicitare, interzicere, recomandare) dintr-o secvență de comunicare.',
        ],
        resurse: [
          'Manual Art 6, pp. 176-177',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-12/fisa-exercitii.pdf)',
          'Quizul „Performarea actelor de limbaj” (materialul de joc al lecției)',
        ],
        desfasurare: [
          {
            etapa: 'Vinietele, „Pentru început”',
            timp: '4 min',
            activitate: '– Vinietele din banda desenată de la p. 176: contextul, împrejurarea, interlocutorii și statutul lor.',
          },
          {
            etapa: 'Replica tânărului, Explorare, ex. 1-4',
            timp: '8 min',
            activitate: '– Ex. 1: ce fel de enunț e replica, după scop?\n– Ex. 2-3: intenția tânărului; ce transmit negația și formula „mititelule”; ce a crezut Goe că vrea tânărul?\n– Ex. 4, oral: efectul replicii asupra lui Goe, după răspunsul și gestul lui.',
          },
          {
            etapa: 'Notițe: actul de limbaj',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 176): actul de limbaj, secvența lingvistică, intenția, efectul.\n– Cum se exprimă intenția: verbe care numesc actul (promit, rog), imperativ, cuvinte ca „nu”, „te rog”, elemente paraverbale și nonverbale; act eficient și ineficient.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Ex. 1: „Ceaiul e atât de rece!”, intențiile A-B asociate cu contextele a-b.\n– Ex. 2, în perechi: tabelul cu „E frig aici!”, intenția și efectul în cele trei contexte; două perechi citesc.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (ce intenție?) și ex. 2 (același enunț, altă intenție), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Jocul de rol, Aplicații, ex. 3',
            timp: '8 min',
            activitate: '– Trei perechi joacă o scenă de călătorie cu replica „Vom vedea mai târziu!”: anticipare, promisiune, amenințare.\n– Clasa evaluează fiecare pereche pe criteriile de la p. 177.',
          },
          {
            etapa: 'Quizul',
            timp: '4 min',
            activitate: '– Rezolvăm quizul „Performarea actelor de limbaj” frontal; la răspunsurile greșite, cerem intenția și efectul.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Reflecții”, ex. 3 (cinci reguli) și ex. 4 (proverbul „Unde dai și unde crapă”), în scris; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Evaluare pe grila jocului de rol; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-12/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Performarea actelor de limbaj',
          pasi: [
            {
              intrebare: 'Ce este un act de limbaj?',
              variante: [
                { text: 'O acțiune realizată prin cuvinte: promiți, feliciți, interzici, ceri ceva', corect: true, explicatie: 'Prin cuvinte nu doar transmitem informații, ci și facem lucruri: promitem, felicităm, interzicem.' },
                { text: 'Doar un enunț gramatical corect', corect: false, explicatie: 'Corectitudinea gramaticală nu are legătură directă cu tipul actului de limbaj.' },
                { text: 'O greșeală de exprimare', corect: false, explicatie: 'Actul de limbaj e o funcție firească a comunicării, nu o greșeală.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 10, p. 176',
            },
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Te felicit pentru rezultat!”?',
              variante: [
                { text: 'o felicitare', corect: true, explicatie: 'Enunțul exprimă direct o felicitare, aprecierea pentru o reușită.' },
                { text: 'o interzicere', corect: false, explicatie: 'Interzicerea ar suna, de exemplu, „Nu ai voie să faci asta”.' },
                { text: 'o promisiune', corect: false, explicatie: 'O promisiune ar suna „Îți promit că...”, nu e cazul aici.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 10, p. 176',
            },
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Îți promit că vin mâine”?',
              variante: [
                { text: 'o promisiune', corect: true, explicatie: 'Verbul „promit” marchează explicit acest act de limbaj.' },
                { text: 'o recomandare', corect: false, explicatie: 'O recomandare ar suna „Ar trebui să vii mâine”.' },
                { text: 'o felicitare', corect: false, explicatie: 'Nu se exprimă nicio apreciere pentru o reușită.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 10, p. 176',
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
      titlu: 'Strategii de concepere și comprehensiune a textului oral',
      obiective: [
        'Identifică parafraze și diferențiază informațiile explicite de cele implicite dintr-un text oral.',
      ],
      sursaManual: 'Manual, Lecția 11, pp. 178-179',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Strategii de concepere și comprehensiune a textului oral',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Identifică parafraze și diferențiază informațiile explicite de cele implicite dintr-un text oral.',
        ],
        resurse: [
          'Manual Art 6, pp. 178-179',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-13/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-13/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'La librărie, Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Doi elevi citesc bulele de dialog de la p. 178, cu roluri.\n– Ex. 2: care variantă redă mai bine ce vrea să spună băiatul în prima replică?',
          },
          {
            etapa: 'Diagrama Venn, ex. 3',
            timp: '5 min',
            activitate: '– Desenez pe tablă diagrama; elevii o copiază și o completează cu ce e comun și ce apare doar în replica librarului sau doar în a băiatului.',
          },
          {
            etapa: 'Notițe: parafraza',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 178): parafraza, reformularea cu propriile cuvinte, cu sensul păstrat; parafraze cu sinonime și parafraze care schimbă complet textul; rolul parafrazei.',
          },
          {
            etapa: 'Ce nu se spune direct, Explorare, ex. 1-4',
            timp: '6 min',
            activitate: '– Ex. 1-2: ce destinații ar fi de evitat? Ce tipuri de destinații sugerează librarul și din ce informație deducem asta?\n– Ex. 3-4: scopul pentru care băiatul vrea cartea și de ce nu apare în nicio replică.',
          },
          {
            etapa: 'Notițe: informații explicite și implicite',
            timp: '3 min',
            activitate: '– În caiete, după Repere (p. 179): informațiile explicite și implicite, cu exemplele din manual.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Ex. 1: comparăm recomandarea librarului cu reformularea băiatului, enunț cu enunț: unde sunt respectate principiile parafrazei, unde apar abateri?\n– Ex. 2: reformulăm corect enunțurile greșite; două variante pe tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (parafrazează) și ex. 2 (e o parafrază bună?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Destinația preferată, Aplicații, ex. 3',
            timp: '8 min',
            activitate: '– În perechi: fiecare prezintă destinația preferată, colegul o parafrazează; vorbitorul evaluează parafraza pe grila de la p. 179; apoi schimbă rolurile.\n– Pe fișa lecției, ex. 2-3, fiecare notează o informație explicită, una implicită și o întrebare de clarificare pentru colegul lui.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 4 (două întrebări despre destinația colegului, cu o informație explicită și una implicită); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului în perechi; evaluare pe grila parafrazei; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-13/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-5/lectia-13/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Adjectivul (actualizare)',
      obiective: [
        'Reactualizează acordul adjectivului cu substantivul determinat, în gen, număr și caz.',
      ],
      sursaManual: 'Manual, Lecția 12, pp. 180-181',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Adjectivul (actualizare)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează acordul adjectivului cu substantivul determinat, în gen, număr și caz.',
        ],
        resurse: [
          'Manual Art 6, pp. 180-181',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-14/fisa-exercitii.pdf)',
          'Schema „Adjectivul. Gradele de comparație” (/materiale/clasa-6/unitatea-5/lectia-14/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Planetele, „Pentru început”',
            timp: '5 min',
            activitate: '– Imaginea Sistemului Solar de la p. 180: trei elevi descriu câte o planetă (formă, culoare, mărime) și o compară cu celelalte.\n– Notez pe tablă cuvintele care arată însușiri.',
          },
          {
            etapa: 'Explorare, ex. 1-6',
            timp: '9 min',
            activitate: '– Pe textul despre Saturn: ex. 1, adjectivele propriu-zise și cele din participiu; ex. 2, locul lor față de substantiv.\n– Ex. 3-5: cazul substantivelor determinate, genul, numărul și cazul adjectivelor.\n– Ex. 6: gradele de comparație și adjectivele fără grade.',
          },
          {
            etapa: 'Formele și articolul demonstrativ, ex. 7-8',
            timp: '4 min',
            activitate: '– Ex. 7: câte forme au drăguț, mic, cuminte?\n– Ex. 8: articolele demonstrative din cele două enunțuri și rolul lor.',
          },
          {
            etapa: 'Notițe: adjectivul',
            timp: '8 min',
            activitate: '– În caiete, după Repere (pp. 180-181) și schema lecției: adjectivul propriu-zis și din participiu; variabil (patru, trei, două forme) și invariabil; acordul cu substantivul; locul adjectivului.\n– Tabelul articolului demonstrativ (cel, cea, cei, cele; celui, celei, celor) și tabelul gradelor de comparație, cu „piatră strălucitoare”; adjectivele fără grade.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1-2 (textul „Marte”, scris pentru fișă, și adjectivele lui: felul și gradul), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Pe textul despre comete: adjectivele propriu-zise și cele din participiu; genul, numărul, cazul și gradul fiecăruia, frontal.',
          },
          {
            etapa: 'Aplicații, ex. 3',
            timp: '3 min',
            activitate: '– Lista de la p. 181, sortată în caiete pe două coloane: variabile și invariabile.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 4 (formele adjectivelor variabile de la ex. 3) și ex. 5 (analiza adjectivelor din Gellu Naum, după model); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-14/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-5/lectia-14/schema.svg', titlu: 'Adjectivul. Gradele de comparație' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Posibilități combinatorii ale adjectivului',
      obiective: [
        'Recunoaște funcția sintactică a adjectivului și complementele care determină un adjectiv.',
      ],
      sursaManual: 'Manual, Lecția 13, pp. 182-183',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Posibilități combinatorii ale adjectivului',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște funcția sintactică a adjectivului și complementele care determină un adjectiv.',
        ],
        resurse: [
          'Manual Art 6, pp. 182-183',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-15/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-15/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Inelele lui Saturn, Explorare, ex. 1',
            timp: '6 min',
            activitate: '– Grupe de 4-6, pe textul de la p. 182: a) adjectivele; b) funcția lor; c) de ce depinde adjectivul nume predicativ.\n– Fiecare grupă răspunde la câte o cerință; celelalte confirmă sau corectează.',
          },
          {
            etapa: 'Adjectivul determinat, ex. 2',
            timp: '3 min',
            activitate: '– Cele trei situații în care adjectivul are el însuși o determinare; ce parte de propoziție e aceasta?',
          },
          {
            etapa: 'Notițe: adjectivul adjunct și centru',
            timp: '8 min',
            activitate: '– În caiete, după Repere (p. 182): adjectivul adjunct (drum lung) și centru (drum plin de gropi).\n– Adjunctul: atribut adjectival sau nume predicativ, acordat cu subiectul prin „a fi”; schemele din manual.\n– Adjunctele adjectivului: complement prepozițional, indirect, circumstanțial de loc, de timp, de mod, cu exemplele din Repere.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '7 min',
            activitate: '– Pe fișa lecției, ex. 1 (aceleași enunțuri ca la Aplicații, ex. 1): adjectivele subliniate și funcția lor.\n– Ex. 3: adjectivul cu dublu rol și funcția adjunctului său.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (atribut sau nume predicativ?) și ex. 2 (adjectivul-centru), individual, 8 minute.\n– Verificare, 4 minute; la ex. 2 punem întrebarea pentru fiecare determinare.',
          },
          {
            etapa: 'Aplicații, ex. 4-5',
            timp: '5 min',
            activitate: '– Pe fișa lecției, ex. 3: enunțurile completate cu adjective și funcția fiecăruia; câte o variantă citită pentru fiecare enunț.',
          },
          {
            etapa: 'Fișa lecției, ex. 2',
            timp: '5 min',
            activitate: '– Adăugăm o determinare lângă „mândru”, „ușor”, „plin” și spunem ce parte de propoziție este.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 6-7 (analiza adjectivelor din cele trei texte); „Provocări”, ex. 2 (portretul unei ființe de pe Saturn, cu șase adjective subliniate); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2; fișa lecției.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-15/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-5/lectia-15/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Adverbul. Felurile adverbului',
      obiective: [
        'Identifică adverbele de loc, de timp și de mod într-un text dat.',
      ],
      sursaManual: 'Manual, Lecția 14, pp. 184-185',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Adverbul. Felurile adverbului',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică adverbele de loc, de timp și de mod într-un text dat.',
        ],
        resurse: [
          'Manual Art 6, pp. 184-185',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-16/fisa-exercitii.pdf)',
          'Schema „Adverbul. Felurile adverbului” (/materiale/clasa-6/unitatea-5/lectia-16/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Mesajul Alinei, Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Elevii completează mesajul către Miruna cu acasă, astăzi, repede.\n– Ex. 2: de ce parte de vorbire depind cuvintele introduse?',
          },
          {
            etapa: 'Biletul Alinei, Explorare, ex. 1-2',
            timp: '6 min',
            activitate: '– Citim biletul lăsat mamei; cuvintele colorate, grupate în caiete pe trei coloane: loc, timp, mod.',
          },
          {
            etapa: 'Notițe: adverbul',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 184) și schema lecției: adverbul determină un verb și arată împrejurările acțiunii; nu își schimbă forma; adverbe de loc, de timp, de mod, cu exemplele din manual.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '8 min',
            activitate: '– Doi elevi citesc proiectul despre căile ferate.\n– Ex. 2: cuvintele colorate, pe trei coloane; ex. 3: verbul determinat de fiecare adverb, frontal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1-2 (textul „La munte”, scris pentru fișă: felul adverbelor și verbul determinat), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Intrusul, Aplicații, ex. 4',
            timp: '3 min',
            activitate: '– Seriile a-c: fiecare elev încercuiește intrusul și spune de ce nu se potrivește.',
          },
          {
            etapa: 'Jocul, Aplicații, ex. 9',
            timp: '6 min',
            activitate: '– Grupe de patru: narațiune de patru propoziții în care a descoperi, a plăcea, a zbura sunt determinate de departe, întotdeauna, repede.\n– Câștigă prima grupă care termină corect; două grupe citesc.',
          },
          {
            etapa: 'Aplicații, ex. 8, oral',
            timp: '2 min',
            activitate: '– „Părinții mei călătoresc ...”, completat pe rând cu un adverb de loc, de timp și de mod.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 5-7; „Provocări” (propozițiile amuzante cu adverbele de pe bilețele); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; jocul pe grupe; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-16/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-5/lectia-16/schema.svg', titlu: 'Adverbul. Felurile adverbului' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Gradele de comparație și funcțiile sintactice ale adverbului',
      obiective: [
        'Recunoaște gradele de comparație ale adverbului și funcția lui sintactică.',
      ],
      sursaManual: 'Manual, Lecția 15, pp. 186-187',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Gradele de comparație și funcțiile sintactice ale adverbului',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște gradele de comparație ale adverbului și funcția lui sintactică.',
        ],
        resurse: [
          'Manual Art 6, pp. 186-187',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-17/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-17/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Aprecierile, Explorare, ex. 1-5',
            timp: '7 min',
            activitate: '– Trei elevi citesc replicile din ilustrația de la p. 186.\n– Ex. 1-4: cum se schimbă aprecierea; ce adverb arată egalitatea; diferența dintre replica profesoarei și a Alinei; ce exprimă cele două adverbe din replica băiatului.\n– Ex. 5: la ce parte de vorbire am mai întâlnit gradele de comparație?',
          },
          {
            etapa: 'Notițe: gradele de comparație ale adverbului',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 186) și după modelul adjectivului: tabelul cu „învață bine”, la toate gradele.\n– Majoritatea adverbelor nu au grade: acolo, aici, ieri, firește.',
          },
          {
            etapa: 'Funcțiile, Explorare, ex. 1-3',
            timp: '6 min',
            activitate: '– Ex. 1: întrebările pentru acasă, bine, apoi și ce funcții le răspund.\n– Ex. 2: întrebările pentru celelalte adverbe din propoziții; ex. 3: „Mai cumpăr o carte.”: răspunde „mai” la vreo întrebare?',
          },
          {
            etapa: 'Notițe: funcțiile și semiadverbele',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 187): circumstanțialul de loc, de timp, de mod, cu întrebările fiecăruia; semiadverbele, fără funcție sintactică (tot, cam, mai, doar).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (gradul adverbului) și ex. 2 (funcția adverbului), individual, 8 minute.\n– Verificare, 4 minute; la semiadverbe, încercăm întrebarea și vedem că nu merge.',
          },
          {
            etapa: 'Aplicații, ex. 1-3, pe fișa lecției',
            timp: '6 min',
            activitate: '– Pe textul despre copiii din curte (fișa lecției, ex. 1-3): adverbele subliniate, gradul celor care au grade și funcția lor.',
          },
          {
            etapa: 'Fișa lecției, ex. 4',
            timp: '4 min',
            activitate: '– Adverbul „lesne” la toate gradele (Aplicații, ex. 4); un elev completează tabelul pe tablă.',
          },
          {
            etapa: 'Autoevaluare L12-L15',
            timp: '3 min',
            activitate: '– Elevii completează în caiete cele trei enunțuri de la p. 187; colectez oral ce a fost greu.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 5-6; „Provocări” (poezia cu adverbul „bine” la grade diferite); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; fișa lecției; autoevaluarea achizițiilor din lecțiile 12-15.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-17/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-5/lectia-17/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Transformarea vorbirii directe în indirectă (I), comparare texte',
      obiective: [
        'Compară un text la vorbire directă cu varianta lui la vorbire indirectă, identificând schimbările produse.',
      ],
      sursaManual: 'Manual, Lecția 16, p. 188, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Transformarea vorbirii directe în indirectă (I), comparare texte',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Compară un text la vorbire directă cu varianta lui la vorbire indirectă, identificând schimbările produse.',
        ],
        resurse: [
          'Manual Art 6, pp. 188-189',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-18/fisa-exercitii.pdf)',
          'Schema „Vorbirea directă și vorbirea indirectă” (/materiale/clasa-6/unitatea-5/lectia-18/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Maria la telefon, „Pentru început”',
            timp: '5 min',
            activitate: '– Cele trei viniete de la p. 188: cine sunt interlocutorii, despre ce vorbesc (ex. 2, oral).',
          },
          {
            etapa: 'Explorare, ex. 1-2',
            timp: '3 min',
            activitate: '– Ce au în comun ultimele două replici ale băiatului? Prin ce diferă?',
          },
          {
            etapa: 'Notițe: vorbirea directă și indirectă',
            timp: '3 min',
            activitate: '– În caiete, după Repere (p. 188): vorbirea directă, reproducerea întocmai; vorbirea indirectă, relatarea spuselor cuiva.',
          },
          {
            etapa: 'Compararea textelor, Explorare, ex. 1-2',
            timp: '12 min',
            activitate: '– Doi elevi citesc fragmentul din „D-l Goe...” și varianta la vorbire indirectă.\n– Întrebările a-g, frontal: semnele care dispar, persoana verbelor și a pronumelor, verbele de declarație, cuvintele de după ele, ce se întâmplă cu enunțurile imperative, exclamative, interogative, cu exclamațiile și cu vocativul, modul verbului „a ieși”, cât de exact sunt redate spusele.\n– Pe tablă, două coloane: ce era în vorbirea directă, ce devine în cea indirectă.',
          },
          {
            etapa: 'Notițe: regulile transformării',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 189) și schema lecției, cele nouă reguli ale trecerii în vorbire indirectă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (directă sau indirectă?) și ex. 2 (ce se schimbă?), individual, 7 minute.\n– Verificare, 4 minute, cu regulile din caiet.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '7 min',
            activitate: '– Enunțurile a-c cu George și Annie, transformate în caiete; trei elevi le scriu pe tablă.\n– Fiecare notează ce i-a fost greu; discutăm dificultățile.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; recitirea regulilor, pentru transformarea fragmentului mai lung de ora viitoare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-18/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-5/lectia-18/schema.svg', titlu: 'Vorbirea directă și vorbirea indirectă' },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Transformarea vorbirii directe în indirectă (II), exerciții',
      obiective: [
        'Transformă enunțuri de la vorbire directă la vorbire indirectă, cu respectarea regulilor învățate.',
      ],
      sursaManual: 'Manual, Lecția 16, p. 189, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Transformarea vorbirii directe în indirectă (II), exerciții',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Transformă enunțuri de la vorbire directă la vorbire indirectă, cu respectarea regulilor învățate.',
        ],
        resurse: [
          'Manual Art 6, p. 189, lista de control',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-19/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-6/unitatea-5/lectia-19/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„A spus că…”',
            timp: '4 min',
            activitate: '– Un elev spune o replică (o întrebare, o rugăminte, o exclamație); colegul o relatează clasei, începând cu „A spus că…”, „A întrebat dacă…”, „M-a rugat să…”.',
          },
          {
            etapa: 'Regulile',
            timp: '4 min',
            activitate: '– Recitim regulile din caiete; întreb ce se întâmplă cu imperativul, cu vocativul, cu semnul întrebării.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (dialogul „Excursia”, scris pentru fișă) și ex. 2 (transformarea lui în vorbire indirectă), individual, 10 minute.\n– Verificare, 4 minute: două lucrări citite, clasa spune ce reguli au fost respectate.',
          },
          {
            etapa: 'Micul Prinț, împreună, Aplicații, ex. 2',
            timp: '8 min',
            activitate: '– Citim fragmentul cu geograful de la p. 189.\n– Transformăm împreună primele trei replici; un elev scrie pe tablă, ceilalți propun verbe de declarație variate.',
          },
          {
            etapa: 'Restul fragmentului, individual',
            timp: '12 min',
            activitate: '– Elevii transformă în caiete restul fragmentului; trec printre bănci și semnalez greșelile de persoană și de mod.\n– Cine termină rezolvă fișa lecției, ex. 1-2.',
          },
          {
            etapa: 'Interevaluare, Aplicații, ex. 3',
            timp: '5 min',
            activitate: '– Schimb de caiete cu colegul de bancă; evaluare pe lista de control de la p. 189, cu DA sau NU la fiecare criteriu.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fragmentul din „Micul Prinț” rescris curat, cu observațiile colegului; fișa de exerciții, pagina 2; fișa lecției, ce a rămas.',
          },
        ],
        evaluare: 'Interevaluare pe lista de control de la p. 189; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-5/lectia-19/fisa.pdf', exercitii: '/materiale/clasa-6/unitatea-5/lectia-19/fisa-exercitii.pdf' },
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
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea V: dialog, structura textului argumentativ.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 190-191, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea V: dialog, structura textului argumentativ.',
        ],
        resurse: [
          'Manual Art 6, pp. 190-191',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-20/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ciorchinele unității',
            timp: '3 min',
            activitate: '– Pe tablă, „Călătorii de tot felul” în mijloc; elevii spun pe rând câte o noțiune de lectură sau de comunicare (schița, dialogul, verbele de declarație, personajele, comicul și ironia, textul argumentativ, actele de limbaj, parafraza).',
          },
          {
            etapa: 'Lectura fragmentului',
            timp: '5 min',
            activitate: '– Citesc fragmentul din „Jim Năsturel și Lukas, mecanicul de locomotivă” de Michael Ende (p. 190); lămurim vipie și vârstat.',
          },
          {
            etapa: 'Cerințele 1-7',
            timp: '8 min',
            activitate: '– Frontal: momentul plecării, cu secvențele-indiciu; zona de plecare și destinația; orientarea fără busolă; ce îi neliniștește; cine e Emma; persoana narării și naratorul (a-d).',
          },
          {
            etapa: 'Cerințele 8-12',
            timp: '10 min',
            activitate: '– Ex. 8, în perechi: tabelul verbelor de declarație (poziția, la ce se referă).\n– Ex. 9-12, frontal: semnele de la finalul replicilor, replicile fără verbe de declarație, dialog sau replici independente, rolul dialogului în replicile a-c.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (textul „În gară”, scris pentru fișă) și ex. 2 (timp, spațiu, narator), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, lectură și comunicare”, frontal; la fiecare greșeală, cine a răspuns corect explică.',
          },
          {
            etapa: 'Textul argumentativ și actele de limbaj',
            timp: '5 min',
            activitate: '– Oral: părțile unui text argumentativ și formulele specifice; o replică din textul lui Ende, cu intenția și efectul ei.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2 (verbele de declarație, replicile, continuarea dialogului în tren).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-20/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce marchează linia de dialog într-un text narativ?',
              variante: [
                { text: 'începutul unei replici', corect: true, explicatie: 'Linia de dialog (—) introduce fiecare intervenție a unui personaj.' },
                { text: 'sfârșitul textului', corect: false, explicatie: 'Linia de dialog apare de câte ori vorbește un personaj, nu doar la final.' },
                { text: 'o pauză în acțiune', corect: false, explicatie: 'Nu marchează o pauză, ci exact intervenția unui vorbitor.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 3, p. 160',
            },
            {
              intrebare: 'Cum se identifică timpul unei călătorii într-un text narativ?',
              variante: [
                { text: 'Din indicii temporali: data, momentul zilei, ora', corect: true, explicatie: 'Textul oferă adesea detalii concrete de timp, ca în D-l Goe...' },
                { text: 'Din numărul de personaje', corect: false, explicatie: 'Numărul de personaje nu are legătură cu timpul acțiunii.' },
                { text: 'Din lungimea textului', corect: false, explicatie: 'Lungimea textului nu indică momentul acțiunii.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 2, pp. 158-159',
            },
            {
              intrebare: 'Ce urmărește organizarea unui text argumentativ?',
              variante: [
                { text: 'Susținerea unei ipoteze prin argumente, până la o concluzie', corect: true, explicatie: 'E structura de bază: ipoteză, argumente, concluzie.' },
                { text: 'Povestirea unei întâmplări, în ordine cronologică', corect: false, explicatie: 'Aceasta e structura unui text narativ, nu argumentativ.' },
                { text: 'Descrierea unui loc sau a unui obiect', corect: false, explicatie: 'Aceasta e structura unui text descriptiv, nu argumentativ.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 7, pp. 168-169',
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
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea V: adjectivul, adverbul, vorbirea directă și indirectă.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 190-191, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea V: adjectivul, adverbul, vorbirea directă și indirectă.',
        ],
        resurse: [
          'Manual Art 6, pp. 190-191',
          'Fișa de exerciții (/materiale/clasa-6/unitatea-5/lectia-21/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Cerința 13',
            timp: '3 min',
            activitate: '– Scriu pe tablă „Până acum, acolo aveam munţii cei înalți.”; ce părți de vorbire sunt cuvintele în italic și ce rol are „cei”?',
          },
          {
            etapa: 'Adverbul și formele adjectivului, cerințele 14-15',
            timp: '7 min',
            activitate: '– Ex. 14, în perechi: felul, gradul și funcția adverbelor din enunțurile a-c.\n– Ex. 15, frontal: câte forme au înalt, mare, straniu.',
          },
          {
            etapa: 'Adjectivul, cerințele 16-18',
            timp: '8 min',
            activitate: '– Ex. 16: adjectivele din fragmentele a-b, subliniate în caiete.\n– Ex. 17: analiza lor completă, după modelul de la p. 181 (felul, formele, acordul, gradul, funcția); ex. 18: funcția lui „înăbușitor”.',
          },
          {
            etapa: 'Vorbirea indirectă, cerința 19',
            timp: '7 min',
            activitate: '– Transformăm împreună primele replici ale fragmentului; elevii continuă singuri, apoi un elev citește; verificăm pe lista de control de la p. 189.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-3 (cinci enunțuri, adjectivele și adverbele lor), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '6 min',
            activitate: '– Quizul „Recapitulare, gramatică și redactare”, frontal; la greșeli, revenim la notițe.',
          },
          {
            etapa: 'Pregătirea evaluării',
            timp: '4 min',
            activitate: '– Anunț proba de ora viitoare: un fragment nou, cerințe de gramatică și de lectură (partea A) și o transformare în vorbire indirectă (partea B).\n– Ce recitesc acasă: notițele despre adjectiv, adverb, dialog, verbele de declarație și regulile vorbirii indirecte.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2 (vorbirea indirectă și textul argumentativ scurt); recapitularea pentru evaluare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-6/unitatea-5/lectia-21/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Adjectivul se acordă cu substantivul determinat în...',
              variante: [
                { text: 'gen, număr și caz', corect: true, explicatie: 'Adjectivul își schimbă forma după cele trei categorii ale substantivului pe care îl însoțește.' },
                { text: 'doar număr', corect: false, explicatie: 'Acordul e mai complet: gen, număr și caz, nu doar număr.' },
                { text: 'persoană și timp', corect: false, explicatie: 'Persoana și timpul sunt categorii ale verbului, nu ale adjectivului.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 12, pp. 180-181',
            },
            {
              intrebare: 'Ce fel de adverb este cuvântul repede, din propoziția Lucrăm liniștit și repede?',
              variante: [
                { text: 'adverb de mod', corect: true, explicatie: 'Repede arată cum se desfășoară acțiunea, deci e adverb de mod.' },
                { text: 'adverb de timp', corect: false, explicatie: 'Adverbul de timp ar răspunde la când?, nu la cum?' },
                { text: 'adverb de loc', corect: false, explicatie: 'Adverbul de loc ar răspunde la unde?, nu la cum?' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 14, pp. 184-185',
            },
            {
              intrebare: 'Ce se întâmplă cu linia de dialog și semnele de exclamare când transformi vorbirea directă în indirectă?',
              variante: [
                { text: 'Dispar, informația se reformulează prin verbe de declarație', corect: true, explicatie: 'Vorbirea indirectă nu reproduce exact forma replicilor, le rezumă prin verbe ca „a întrebat”, „a cerut”.' },
                { text: 'Rămân neschimbate', corect: false, explicatie: 'Tocmai schimbarea acestor mărci definește trecerea la vorbirea indirectă.' },
                { text: 'Se dublează', corect: false, explicatie: 'Dimpotrivă, mărcile vorbirii directe dispar în vorbirea indirectă.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 16, p. 188',
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
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea V.',
      ],
      sursaManual: 'Manual, Evaluare, p. 192',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea V.',
        ],
        resurse: [
          'Testul, Manual Art 6, p. 192',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; manualul e deschis la p. 192 (textul „Singuri, pe vârful Omu” de Adina Popescu, cu secvențele evidențiate).\n– Anunț structura: partea A, 60 de puncte (zece cerințe de gramatică și lectură), partea B, 30 de puncte (transformarea schimbului final de replici în vorbire indirectă), 10 puncte din oficiu.\n– Timpul orientativ: 5 minute pentru citirea textului, 20 pentru partea A, 15 pentru partea B; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.\n– Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să recitească partea B după lista de control a vorbirii indirecte.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.',
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
