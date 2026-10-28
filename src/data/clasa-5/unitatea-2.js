// Unitatea II: De-a ce mă joc — clasa a V-a
// Sursă: Limba și literatura română, manual Art Klett (Sâmihăian, Dobra, Halaszi,
// Davidoiu-Roman), Ghidul profesorului, proiectarea pe unități de învățare
// 2022-2023, planificarea calendaristică. Numerotarea urmează manualul însuși
// (cuprins, pp. 6, 8-9): L1 până la L17, exact convenția stabilită la
// Unitatea I. Singurele excepții, unde manualul tratează o lecție ca bloc de
// 2 ore fără să-l despartă în două scenarii separate, dar conținutul celor
// două ore diferă real (redactarea, recapitularea), sunt despărțite mai jos
// în câte 2 lecții de site, organizare proprie, nu segmentare dată de sursă,
// la fel cum s-a procedat la Unitatea I.
//
// Paginile au fost verificate direct în cuprinsul din Art 5.pdf (pp. 6, 8-9).
//
// rezolvareGhid rămâne null aici intenționat, document intern, nu se publică.
// planLectie conține o schiță de plan în 6 pași (momentele lecției), afișată
// pe site sub eticheta discretă „Doar profesor” din PlanProfesor.tsx.
// Planurile ERR mai vechi din notite-profesor/ rămân neatinse, sunt altă formă.
//
// Materiale: schema pentru lecțiile 11 (Verbul, predicatul verbal) și 16
// (Modul imperativ). Joc pentru 10 (Reguli de acces la cuvânt), 21 și 22
// (recapitulare). Restul rămân null, listate în materiale-restante.md.

export const unitatea2 = {
  id: 'unitatea-2',
  titlu: 'Unitatea II: De-a ce mă joc',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ literar. Vizită... de I.L. Caragiale',
      obiective: [
        'Identifică informații esențiale din textul narativ Vizită... de I.L. Caragiale.',
      ],
      sursaManual: 'Art 5, Lecția 1, p. 42 (Vizită... de I.L. Caragiale); Ghidul profesorului',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. Vizită... de I.L. Caragiale',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul narativ Vizită... de I.L. Caragiale.',
        ],
        resurse: [
          'Manual Art 5, pp. 42-44',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-1/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 42, ex. 1: arunc o minge unui elev, care își prezintă jocul preferat printr-un indiciu sau prin mimă; cine ghicește primește mingea. Notez jocurile pe tablă.\n– Ex. 2: ce faceți când aveți musafiri? Două minute în grupe de câte patru, apoi câte un reprezentant spune doar ideile noi.',
            elevi: '„Pentru început”, p. 42:\nEx. 1: unul dintre voi își prezintă jocul preferat printr-un indiciu sau prin mimă; cine ghicește primește mingea.\nEx. 2: ce faceți când aveți musafiri? Două minute, în grupe de câte patru; apoi câte un reprezentant spune doar ideile noi.',
          },
          {
            etapa: 'Despre autor',
            timp: '3 min',
            activitate: '– Prezentarea de la p. 42: I.L. Caragiale, contemporan cu Eminescu, Creangă și Slavici; piese de teatru, nuvele, schițe; Teatrul Național din București îi poartă numele.\n– Întreb dacă au mai citit ceva de el.',
            elevi: 'I.L. Caragiale a trăit în aceeași epocă cu Eminescu, Creangă și Slavici. A scris piese de teatru, nuvele, schițe. Teatrul Național din București îi poartă numele.\nAți mai citit ceva de el?',
          },
          {
            etapa: 'Lectura',
            timp: '15 min',
            activitate: '– Ex. 3: lectură în gând; fiecare notează cuvintele necunoscute și personajul pe care l-ar citi pe roluri.\n– Lectura pe roluri (musafirul-narator, madam Popescu, Ionel, jupâneasa) sau înregistrarea din manualul digital.\n– Lămurim cuvintele din subsol: onomastică, roșior, formalitate, de rigoare, mașină (spirtieră), marțial, rotat, a se reculege, neutralitate, chesea, vestibul, policandru, mondir; expresia franceză de la final.',
            elevi: 'Ex. 3: citiți textul în gând. Notați cuvintele necunoscute și personajul pe care l-ați citi pe roluri.\nLectura pe roluri: musafirul-narator, madam Popescu, Ionel, jupâneasa.\nCuvinte din subsol: onomastică, roșior, formalitate, de rigoare, mașină (spirtieră), marțial, rotat, a se reculege, neutralitate, chesea, vestibul, policandru, mondir; expresia franceză de la final.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '10 min',
            activitate: '– Ilustrația de la p. 43: se potrivește cu textul? Ce detalii lipsesc?\n– „Impresii după prima lectură”, ex. 1: fiecare notează în caiet ce l-a amuzat sau l-a nedumerit; câțiva citesc.\n– Ex. 2, în grupe: la ce experiență sau la ce altă lectură te-a dus textul?\n– Revenim la jocurile de pe tablă: apar în text? De ce da sau de ce nu?',
            elevi: 'Ilustrația de la p. 43: se potrivește cu textul? Ce detalii lipsesc?\n„Impresii după prima lectură”:\nEx. 1: notați în caiet ce v-a amuzat sau v-a nedumerit. Câțiva citesc.\nEx. 2, în grupe: la ce experiență sau la ce altă lectură v-a dus textul?\nRevenim la jocurile de pe tablă: apar în text? De ce da sau de ce nu?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (cine spune?), ex. 2 (detaliile vizitei) și ex. 3 (cuvinte de altădată), individual, 9 minute.\n– Verificare, 4 minute (rezolvările sunt în notițele profesorului).',
            elevi: 'Fișa de exerciții, pagina 1, individual, 9 minute: ex. 1 (cine spune?), ex. 2 (detaliile vizitei), ex. 3 (cuvinte de altădată).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: recitirea textului; fișa de exerciții, pagina 2, ex. 4 și 5 (scrisoarea musafirului).',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică a lecturii (atenție, lectură fluentă, dorința de a-și spune impresiile); fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-1/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Vizită... de I.L. Caragiale',
          pasi: [
            {
              intrebare: 'Cine povestește întâmplarea din text?',
              variante: [
                {
                  text: 'Un musafir care vine în vizită și povestește ce a văzut',
                  corect: true,
                  explicatie: 'Textul e povestit la persoana I, de cel care face vizita.',
                },
                {
                  text: 'Mama lui Ionel',
                  corect: false,
                  explicatie: 'Mama e personaj, dar nu ea ține firul povestirii.',
                },
                {
                  text: 'Ionel însuși',
                  corect: false,
                  explicatie: 'Ionel e cel despre care se povestește, nu cel care povestește.',
                },
              ],
              indiciu: 'Uită-te la formele verbelor: cine spune „am fost”, „am văzut”?',
              sursa: 'Manual Art 5, p. 42',
            },
            {
              intrebare: 'Cu ce ocazie merge musafirul în vizită?',
              variante: [
                {
                  text: 'De ziua onomastică a doamnei Popescu, mama lui Ionel',
                  corect: true,
                  explicatie: 'Vizita e una de politețe, de sărbătoare, ceea ce face purtarea lui Ionel și mai izbitoare.',
                },
                {
                  text: 'La o petrecere de Crăciun',
                  corect: false,
                  explicatie: 'Textul nu vorbește despre sărbătorile de iarnă.',
                },
                {
                  text: 'La o serbare școlară',
                  corect: false,
                  explicatie: 'Întâmplarea se petrece acasă la familia Popescu, nu la școală.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 42',
            },
            {
              intrebare: 'Cum se poartă Ionel pe tot parcursul vizitei?',
              variante: [
                {
                  text: 'Neascultător și obraznic, iar mama îl scuză de fiecare dată',
                  corect: true,
                  explicatie: 'Contrastul dintre purtarea copilului și îngăduința mamei ține tot textul.',
                },
                {
                  text: 'Politicos și tăcut',
                  corect: false,
                  explicatie: 'Dimpotrivă, Ionel face numai năzbâtii.',
                },
                {
                  text: 'Timid, ascunzându-se de musafir',
                  corect: false,
                  explicatie: 'Ionel e foarte prezent, nu se ascunde deloc.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 42',
            },
            {
              intrebare: 'Ce face un text să fie narativ?',
              variante: [
                {
                  text: 'Povestește o întâmplare, cu personaje, într-un anumit loc și timp',
                  corect: true,
                  explicatie: 'Textul narativ are acțiune care se desfășoară, spre deosebire de cel descriptiv.',
                },
                {
                  text: 'Descrie amănunțit cum arată un loc',
                  corect: false,
                  explicatie: 'Aceea e trăsătura textului descriptiv.',
                },
                {
                  text: 'Explică cum funcționează ceva',
                  corect: false,
                  explicatie: 'Acela e un text explicativ, nonliterar de obicei.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 42',
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
      titlu: 'Timp, spațiu și acțiune',
      obiective: [
        'Recunoaște reperele temporale și spațiale ale acțiunii și ordonează cronologic ideile principale ale textului Vizită...',
      ],
      sursaManual: 'Art 5, Lecția 2, p. 45',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Timp, spațiu și acțiune',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște reperele temporale și spațiale ale acțiunii și ordonează cronologic ideile principale ale textului Vizită...',
        ],
        resurse: [
          'Manual Art 5, pp. 45-46',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-2/fisa-exercitii.pdf)',
          'Schema „Timp, spațiu și acțiune. Textul narativ” (/materiale/clasa-5/unitatea-2/lectia-2/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Dacă am proiector: primul minut din ecranizarea din 1952; ce e la fel și ce e diferit față de text?\n– Altfel: „Cât credeți că a durat vizita? O oră, o zi?”',
            elevi: 'Cât credeți că a durat vizita? O oră, o zi?',
          },
          {
            etapa: 'Dirijarea învățării: timpul și spațiul',
            timp: '12 min',
            activitate: '– „Explorare”, p. 45, ex. 1-4, pe grupe (fiecare grupă un exercițiu, apoi raportează; toți notează): indiciul de timp și ce aflăm din el; cât durează vizita și cum ați calculat; ce ne spune epoca (biografia autorului, obiectele); unde se petrece acțiunea (pasajele).\n– Pe tablă, săgeata acțiunii cu indicii de timp și de spațiu.\n– În caiete, după Repere: acțiunea; indicii de timp (epocă, an, zi, moment, durată) și de spațiu (țară, oraș, casă).',
            elevi: '„Explorare”, p. 45, ex. 1-4, pe grupe (fiecare grupă un exercițiu, apoi raportează; toți notează):\nindiciul de timp și ce aflăm din el;\ncât durează vizita și cum ați calculat;\nce ne spune epoca (biografia autorului, obiectele);\nunde se petrece acțiunea (pasajele).\nÎn caiet, după Repere: acțiunea; indicii de timp (epocă, an, zi, moment, durată) și de spațiu (țară, oraș, casă).',
            materiale: ['schema'],
          },
          {
            etapa: 'Dirijarea învățării: acțiunea',
            timp: '12 min',
            activitate: '– „Explorare”, p. 45, grupe de 3-4: ordonează cronologic cele zece idei principale și le numerotează; verificăm.\n– Repere, p. 46: desenez schema textului narativ (situația inițială → succesiunea de întâmplări: complicație, acțiune, rezolvare → situația finală); elevii o copiază.\n– „Aplicații”, ex. 1: asociem numerele ideilor cu secvențele.',
            elevi: '„Explorare”, p. 45, în grupe de 3-4: ordonați cronologic cele zece idei principale și numerotați-le. Verificăm.\nRepere, p. 46: schema textului narativ (situația inițială → succesiunea de întâmplări: complicație, acțiune, rezolvare → situația finală). Copiați-o în caiet.\n„Aplicații”, ex. 1: asociem numerele ideilor cu secvențele.',
            materiale: ['schema'],
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (timp sau spațiu?), ex. 2 (obiecte de altădată) și ex. 3 (schema unei povești noi), individual, 8 minute.\n– Verificare, 5 minute; la ex. 3 citim povestea Marei în ordinea corectă.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 8 minute: ex. 1 (timp sau spațiu?), ex. 2 (obiecte de altădată), ex. 3 (schema unei povești noi).\nApoi verificăm, 5 minute; la ex. 3 citim povestea Marei în ordinea corectă.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 2: cel mai liniștit și cel mai tensionat moment al vizitei; două grupe mimează momentele alese.\n– Concluzie, notată în caiete: textul narativ are acțiune, în timp și spațiu, realizată de personaje, cu situație inițială, întâmplări și situație finală.\n– Tema: „Aplicații”, ex. 3 și 4 (complicațiile; figura acțiunii); „Provocări”, ex. 2; fișa de exerciții, pagina 2.',
            elevi: '„Aplicații”, ex. 2: care a fost cel mai liniștit și care cel mai tensionat moment al vizitei? Două grupe mimează momentele alese.\nConcluzie, în caiet: textul narativ are acțiune, în timp și spațiu, realizată de personaje, cu situație inițială, întâmplări și situație finală.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică (localizează informații, ordonează ideile, face legături cauză-efect); fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-2/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Timp, spațiu și acțiune',
          pasi: [
            {
              intrebare: 'Unde se petrece acțiunea din Vizită...?',
              variante: [
                {
                  text: 'În casa familiei Popescu, în salon și în camerele alăturate',
                  corect: true,
                  explicatie: 'Tot textul se desfășoară într-un singur spațiu, casa gazdelor.',
                },
                {
                  text: 'Într-un parc din oraș',
                  corect: false,
                  explicatie: 'Nicio scenă nu se petrece afară.',
                },
                {
                  text: 'La școala lui Ionel',
                  corect: false,
                  explicatie: 'Școala e doar amintită, nu e locul acțiunii.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 45',
            },
            {
              intrebare: 'Cât durează, aproximativ, întâmplarea povestită?',
              variante: [
                {
                  text: 'Câteva ore, cât ține o vizită',
                  corect: true,
                  explicatie: 'Timpul e scurt și continuu, ceea ce dă textului ritmul lui alert.',
                },
                {
                  text: 'Câțiva ani',
                  corect: false,
                  explicatie: 'Nu există niciun salt mare în timp.',
                },
                {
                  text: 'O singură clipă',
                  corect: false,
                  explicatie: 'Se întâmplă prea multe lucruri pentru o singură clipă.',
                },
              ],
              indiciu: 'Gândește-te de câte ori se schimbă momentul zilei în text.',
              sursa: 'Manual Art 5, p. 45',
            },
            {
              intrebare: 'Ce sunt reperele temporale dintr-un text narativ?',
              variante: [
                {
                  text: 'Cuvintele și expresiile care arată când se petrece acțiunea sau în ce ordine',
                  corect: true,
                  explicatie: 'De exemplu: după aceea, peste puțin timp, spre seară.',
                },
                {
                  text: 'Numele personajelor',
                  corect: false,
                  explicatie: 'Numele arată cine, nu când.',
                },
                {
                  text: 'Descrierile de peisaj',
                  corect: false,
                  explicatie: 'Descrierile arată cum arată ceva, nu neapărat când.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 45',
            },
            {
              intrebare: 'De ce e util să ordonezi cronologic ideile unui text?',
              variante: [
                {
                  text: 'Ca să înțelegi clar ce s-a întâmplat mai întâi și ce a urmat',
                  corect: true,
                  explicatie: 'Ordinea cronologică e baza oricărui rezumat corect.',
                },
                {
                  text: 'Ca să numeri câte propoziții are textul',
                  corect: false,
                  explicatie: 'Numărarea propozițiilor nu are legătură cu înțelegerea.',
                },
                {
                  text: 'Ca să afli cine e autorul',
                  corect: false,
                  explicatie: 'Autorul se află din titlu, nu din ordinea ideilor.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 45',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-2/schema.svg', titlu: 'Timp, spațiu și acțiune. Textul narativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Planul dezvoltat de idei',
      obiective: [
        'Alcătuiește planul dezvoltat de idei al unui text narativ, pe baza unui organizator grafic.',
      ],
      sursaManual: 'Art 5, Lecția 3, p. 47',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Planul dezvoltat de idei',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Alcătuiește planul dezvoltat de idei al unui text narativ, pe baza unui organizator grafic.',
        ],
        resurse: [
          'Manual Art 5, p. 47',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-3/fisa-exercitii.pdf)',
          'Schema „Planul dezvoltat de idei” (/materiale/clasa-5/unitatea-2/lectia-3/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Reactualizarea',
            timp: '5 min',
            activitate: '– Doi elevi citesc ideile ordonate ora trecută.\n– Întreb: „Ar înțelege cineva care n-a citit textul cum i s-au pătat pantalonii musafirului?” Ce ar lipsi?',
            elevi: 'Doi dintre voi citesc ideile ordonate ora trecută.\nAr înțelege cineva care nu a citit textul cum i s-au pătat pantalonii musafirului? Ce ar lipsi?',
          },
          {
            etapa: 'Explorare',
            timp: '8 min',
            activitate: '– „Explorare”, p. 47, ex. 1: grupăm ideile în plan simplu, după tabel (cum începe acțiunea, ce se întâmplă, cum se termină).\n– Ex. 2: formulăm o idee care completează, prin detalii, prima idee principală.',
            elevi: '„Explorare”, p. 47:\nEx. 1: grupați ideile în plan simplu, după tabel (cum începe acțiunea, ce se întâmplă, cum se termină).\nEx. 2: formulați o idee care completează, prin detalii, prima idee principală.',
          },
          {
            etapa: 'Dirijarea învățării: ideea secundară',
            timp: '5 min',
            activitate: '– Repere: ideea secundară (amănunte legate de ideea principală); planul dezvoltat (idei principale + idei secundare, în ordinea din text).\n– Schema pe tablă, copiată în caiete: idei principale + idei secundare = plan dezvoltat de idei.',
            elevi: 'Repere: ideea secundară (amănunte legate de ideea principală); planul dezvoltat (idei principale + idei secundare, în ordinea din text).\nCopiați în caiet schema: idei principale + idei secundare = plan dezvoltat de idei.',
            materiale: ['schema'],
          },
          {
            etapa: 'Aplicații: planul dezvoltat al textului',
            timp: '12 min',
            activitate: '– „Aplicații”, ex. 1: elevii scriu planul dezvoltat al textului Vizită... în organizatorul din manual (situația inițială, succesiunea de întâmplări, situația finală); primul rând e modelul din manual.\n– Trec printre bănci și ajut la formularea detaliilor.',
            elevi: '„Aplicații”, ex. 1: scrieți planul dezvoltat al textului Vizită... în organizatorul din manual (situația inițială, succesiunea de întâmplări, situația finală). Primul rând este modelul din manual.',
          },
          {
            etapa: 'Evaluare reciprocă',
            timp: '5 min',
            activitate: '– Ex. 2: colegul de bancă verifică planul după lista de control din manual (detalii relevante, ordinea din text, exprimare corectă).',
            elevi: 'Ex. 2: colegul de bancă verifică planul după lista de control din manual (detalii relevante, ordinea din text, exprimare corectă).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (planul dezvoltat al textului „Bicicleta roșie”) și ex. 2 (principală sau secundară?), individual, 8 minute.\n– Verificare, 4 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 8 minute: ex. 1 (planul dezvoltat al textului „Bicicleta roșie”) și ex. 2 (principală sau secundară?).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '3 min',
            activitate: '– Ce pași am făcut ca să ajungem la planul dezvoltat?\n– Tema: forma finală a planului dezvoltat, după observațiile colegului; fișa de exerciții, pagina 2; „Portofoliu”: schița benzii desenate (ce ar fi în fiecare vinietă).',
            elevi: 'Ce pași am făcut ca să ajungem la planul dezvoltat?',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Evaluarea reciprocă după lista de control; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-3/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Planul dezvoltat de idei',
          pasi: [
            {
              intrebare: 'Prin ce se deosebește planul dezvoltat de planul simplu de idei?',
              variante: [
                {
                  text: 'Planul dezvoltat adaugă, sub fiecare idee principală, ideile secundare',
                  corect: true,
                  explicatie: 'Planul simplu are doar ideile principale; cel dezvoltat le detaliază.',
                },
                {
                  text: 'Planul dezvoltat e scris cu majuscule',
                  corect: false,
                  explicatie: 'Forma scrierii nu are legătură cu tipul planului.',
                },
                {
                  text: 'Planul dezvoltat are mai puține rânduri',
                  corect: false,
                  explicatie: 'Dimpotrivă, e mai amplu decât cel simplu.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 47',
            },
            {
              intrebare: 'Ce este o idee secundară?',
              variante: [
                {
                  text: 'Un amănunt important care lămurește sau completează ideea principală',
                  corect: true,
                  explicatie: 'Ideile secundare atârnă de cea principală, nu stau singure.',
                },
                {
                  text: 'O idee care nu are legătură cu textul',
                  corect: false,
                  explicatie: 'Dacă nu are legătură, nu e nici măcar secundară.',
                },
                {
                  text: 'Ultima propoziție din fiecare fragment',
                  corect: false,
                  explicatie: 'Poziția în fragment nu decide dacă o idee e principală sau secundară.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 47',
            },
            {
              intrebare: 'Cum verifici dacă o idee e principală sau secundară?',
              variante: [
                {
                  text: 'Scot ideea din plan. Dacă textul nu se mai înțelege, era principală.',
                  corect: true,
                  explicatie: 'Ideea principală e cea fără de care firul povestirii se rupe.',
                },
                {
                  text: 'Măsor câte cuvinte are',
                  corect: false,
                  explicatie: 'Lungimea nu spune nimic despre importanță.',
                },
                {
                  text: 'Verific dacă e scrisă la început',
                  corect: false,
                  explicatie: 'O idee principală poate apărea oriunde în fragment.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 47',
            },
            {
              intrebare: 'La ce folosește un organizator grafic când alcătuiești planul?',
              variante: [
                {
                  text: 'Te ajută să vezi limpede ce idee atârnă de care, înainte să scrii',
                  corect: true,
                  explicatie: 'Structura devine vizibilă, deci mai ușor de verificat.',
                },
                {
                  text: 'Îl folosești doar ca să faci pagina mai frumoasă',
                  corect: false,
                  explicatie: 'Rolul lui e de gândire, nu decorativ.',
                },
                {
                  text: 'Înlocuiește complet planul scris',
                  corect: false,
                  explicatie: 'E o etapă intermediară; planul scris rămâne rezultatul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 47',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-3/schema.svg', titlu: 'Planul dezvoltat de idei' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Personajele',
      obiective: [
        'Identifică personajele și trăsăturile lor fizice și morale în textul Vizită...',
      ],
      sursaManual: 'Art 5, Lecția 4, pp. 48-49',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Personajele',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Identifică personajele și trăsăturile lor fizice și morale în textul Vizită...',
        ],
        resurse: [
          'Manual Art 5, pp. 48-49',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Ilustrația de la p. 43: sunt toate personajele? Scriu lista pe tablă; pe parcurs, adăugăm lângă fiecare ce aflăm despre el.',
            elevi: 'Ilustrația de la p. 43: sunt toate personajele? Facem lista pe tablă; pe parcurs adăugăm lângă fiecare ce aflăm despre el.',
          },
          {
            etapa: 'Explorare',
            timp: '8 min',
            activitate: '– „Explorare”, p. 48, ex. 1: personajele în ordinea apariției și în ordinea importanței.\n– Ex. 2: fișa de identitate a lui Ionel (familie, vârstă, trăsături fizice, îmbrăcăminte), în caiet.',
            elevi: '„Explorare”, p. 48:\nEx. 1: personajele în ordinea apariției și în ordinea importanței.\nEx. 2: fișa de identitate a lui Ionel (familie, vârstă, trăsături fizice, îmbrăcăminte), în caiet.',
          },
          {
            etapa: 'Dirijarea învățării: personajul',
            timp: '5 min',
            activitate: '– Repere, p. 48, cu schemă pe tablă: personajul (ființă, animal, obiect însuflețit; există doar în text); principal, secundar, episodic; trăsăturile se deduc din fapte, din vorbe și din ce spun alții.',
            elevi: 'Repere, p. 48: personajul (ființă, animal, obiect însuflețit; există doar în text); principal, secundar, episodic; trăsăturile se deduc din fapte, din vorbe și din ce spun alții.',
            materiale: ['schema'],
          },
          {
            etapa: 'Aplicații pe grupe',
            timp: '15 min',
            activitate: '– „Aplicații”, ex. 1, frontal: trăsăturile lui Ionel din pasajele date.\n– Grupele lucrează în paralel: ex. 2 (diagrama Venn: ofițerul și Ionel) sau ex. 3 (câmpul lexical al armatei); ex. 5-8 (mama lui Ionel); ex. 9-13 (cine povestește și ce atitudini au personajele).\n– Raportorii prezintă; notez pe tablă, iar elevii în caiete, trăsăturile lui Ionel și ale mamei.',
            elevi: '„Aplicații”:\nEx. 1, frontal: trăsăturile lui Ionel din pasajele date.\nPe grupe, în paralel: ex. 2 (diagrama Venn: ofițerul și Ionel) sau ex. 3 (câmpul lexical al armatei); ex. 5-8 (mama lui Ionel); ex. 9-13 (cine povestește și ce atitudini au personajele).\nRaportorii prezintă. Notați în caiet trăsăturile lui Ionel și ale mamei.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (fapta și trăsătura) și ex. 2 (ce spune mama, ce face mama), individual, 8 minute.\n– Verificare, 4 minute. Variantă: fișa lecției (tabelul trăsăturilor și citatele).',
            elevi: 'Fișa de exerciții, pagina 1, individual, 8 minute: ex. 1 (fapta și trăsătura) și ex. 2 (ce spune mama, ce face mama).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– Ex. 4: în care dintre cele două tablouri s-ar potrivi mai bine Ionel? De ce?\n– Tema: „Provocări”, ex. 1-2 (SMS-ul pentru Ionel); ex. 8, în scris (ce ar spune mama când află de dulceață; jocul de rol îl facem la începutul orei viitoare); fișa de exerciții, pagina 2, ex. 3-4.',
            elevi: 'Ex. 4: în care dintre cele două tablouri s-ar potrivi mai bine Ionel? De ce?\nPentru ora viitoare pregătiți ex. 8, în scris: ce ar spune mama când află de dulceață. Jocul de rol îl facem la începutul orei.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică (deducții despre personaj, argumente din text); fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-2/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-2/lectia-4/schema.svg',
          titlu: 'Cum aflăm cum e un personaj',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează o opinie despre semnificația textului Vizită..., raportată la imaginea copilului în epocă.',
      ],
      sursaManual: 'Art 5, Lecția 5, p. 50',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie despre semnificația textului Vizită..., raportată la imaginea copilului în epocă.',
        ],
        resurse: [
          'Manual Art 5, p. 50',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-5/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-5/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Jocul de rol',
            timp: '5 min',
            activitate: '– Două perechi joacă scena de la ex. 8 (tema): madam Popescu află că Ionel i-a pus musafirului dulceață în șoșoni. Ce le spune musafirului și lui Ionel?',
            elevi: 'Jocul de rol, ex. 8: două perechi joacă scena în care madam Popescu află că Ionel i-a pus musafirului dulceață în șoșoni. Ce le spune musafirului și lui Ionel?',
          },
          {
            etapa: 'Interpretare: Ionel și educația lui',
            timp: '10 min',
            activitate: '– „Interpretare”, p. 50, ex. 1-4, frontal: ce spun jucăriile despre Ionel; de ce o atacă pe jupâneasă; sunt „sănătoase” părerile mamei despre educație?; se poartă ca un adult, ca un ofițer?\n– Cer de fiecare dată dovada din text.',
            elevi: '„Interpretare”, p. 50, ex. 1-4: ce spun jucăriile despre Ionel? De ce o atacă pe jupâneasă? Sunt „sănătoase” părerile mamei despre educație? Se poartă Ionel ca un adult, ca un ofițer?\nDați de fiecare dată dovada din text.',
          },
          {
            etapa: 'Minidezbatere',
            timp: '8 min',
            activitate: '– Ex. 6: fiecare elev alege o cauză a purtării lui Ionel (răsfățul, tatăl absent, lipsa de atenție, necunoașterea regulilor, reguli prea stricte); se formează grupe pe opțiuni; fiecare grupă aduce două argumente din text.',
            elevi: 'Ex. 6: alegeți o cauză a purtării lui Ionel (răsfățul, tatăl absent, lipsa de atenție, necunoașterea regulilor, reguli prea stricte). Formăm grupe pe opțiuni; fiecare grupă aduce două argumente din text.',
          },
          {
            etapa: 'Tema și titlul',
            timp: '6 min',
            activitate: '– Ex. 7: tema textului, la tablă și în caiete (educația copiilor, relația dintre părinți și copii, familia...).\n– Ex. 8: ce arată punctele de suspensie din titlu? (o vizită cu peripeții).\n– Ex. 9: de ce se mai citește textul și azi?',
            elevi: 'Ex. 7: tema textului, la tablă și în caiet.\nEx. 8: ce arată punctele de suspensie din titlu?\nEx. 9: de ce se mai citește textul și azi?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (alt titlu) și ex. 2 (dacă ai fi fost mama lui Ionel), individual, 8 minute.\n– Verificare, 5 minute: comparăm titlurile propuse și soluțiile.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 8 minute: ex. 1 (alt titlu) și ex. 2 (dacă ai fi fost mama lui Ionel).\nApoi verificăm, 5 minute: comparăm titlurile propuse și soluțiile.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Autoevaluare și temă',
            timp: '8 min',
            activitate: '– Autoevaluare L1-L5: cele trei afirmații, în caiet.\n– Tema: „Provocări”, ex. 3 și 4 (educația din familie; răsfățul); ex. 5 (investigația), facultativ; fișa de exerciții, pagina 2, ex. 3-4; minitestul, dacă îl folosesc.',
            elevi: 'Autoevaluare L1-L5: completați în caiet cele trei afirmații.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică a argumentării; autoevaluarea L1-L5; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-2/lectia-5/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Text auxiliar. Exuvii de Simona Popescu (fragment)',
      obiective: [
        'Compară textul auxiliar Exuvii de Simona Popescu cu textul de bază al unității, folosind jurnalul cu dublă intrare.',
      ],
      sursaManual: 'Art 5, Lecția 6, „Noi pagini, alte idei”, pp. 51-52 (Exuvii de Simona Popescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Exuvii de Simona Popescu (fragment)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Compară textul auxiliar Exuvii de Simona Popescu cu textul de bază al unității, folosind jurnalul cu dublă intrare.',
        ],
        resurse: [
          'Manual Art 5, pp. 51-52',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-6/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-6/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Întreb: „Poate fi o carte o jucărie?” (dacă am, pornesc materialul video cu Simona Popescu din manualul digital).\n– Explic titlul: exuvia (vezi subsolul) și numele capitolului, „Regnum puerile”, adică „Regatul copiilor”.',
            elevi: 'Poate fi o carte o jucărie?\nTitlul: exuvia (vezi subsolul) și numele capitolului, „Regnum puerile”, adică „Regatul copiilor”.',
          },
          {
            etapa: 'Lectura cu jurnalul cu dublă intrare',
            timp: '15 min',
            activitate: '– Explic metoda: pagina împărțită în două; stânga, pasajul care te-a impresionat; dreapta, de ce l-ai ales (ți-a amintit ceva, nu ești de acord, te-a surprins).\n– Lectură în gând; fiecare notează cel puțin trei pasaje.\n– Lămurim glosarul: mârșăvie, ferocitate, scatoalcă, viperenie (inventat de autoare), insinuant, harpie.',
            elevi: 'Jurnalul cu dublă intrare: împărțiți pagina în două. Stânga: pasajul care v-a impresionat. Dreapta: de ce l-ați ales (v-a amintit ceva, nu sunteți de acord, v-a surprins).\nCitiți în gând și notați cel puțin trei pasaje.\nGlosar: mârșăvie, ferocitate, scatoalcă, viperenie (inventat de autoare), insinuant, harpie.',
          },
          {
            etapa: 'Discutarea textului',
            timp: '12 min',
            activitate: '– „Discutarea textului”, ex. 1: în perechi, comparați jurnalele.\n– Ex. 4, minidezbatere pe grupe: ce are fragmentul în comun cu Vizită...?\n– Ex. 6: fetele și băieții sunt „specii diferite”? Un elev e reporter și întreabă câte un reprezentant al fetelor și al băieților.\n– Ex. 7: e furt să trișezi la joc? Răspuns scurt, în scris.',
            elevi: '„Discutarea textului”:\nEx. 1: în perechi, comparați jurnalele.\nEx. 4, minidezbatere pe grupe: ce are fragmentul în comun cu Vizită...?\nEx. 6: fetele și băieții sunt „specii diferite”? Un elev este reporter și întreabă câte un reprezentant al fetelor și al băieților.\nEx. 7: este furt să trișezi la joc? Răspuns scurt, în scris.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (ziua copiilor), ex. 2 (cinstit sau necinstit?) și ex. 3 (cuvintele din glosar), individual, 8 minute.\n– Verificare, 5 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 8 minute: ex. 1 (ziua copiilor), ex. 2 (cinstit sau necinstit?), ex. 3 (cuvintele din glosar).\nApoi verificăm, 5 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– Ce alte texte despre jocuri ați citit? Prezint „Biblioteci deschise”: „Cartea cu jucării” de Tudor Arghezi și „Harriet spionează” de Louise Fitzhugh.\n– Tema: „Portofoliu” (răspunsul la întrebarea „Este greu să fii copil?”); fișa de exerciții, pagina 2, ex. 4-5.',
            elevi: 'Ce alte texte despre jocuri ați citit? Din „Biblioteci deschise”: „Cartea cu jucării” de Tudor Arghezi și „Harriet spionează” de Louise Fitzhugh.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Jurnalul cu dublă intrare; participarea la minidezbatere; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-6/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-2/lectia-6/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-2/lectia-6/schema.svg',
          titlu: 'Jurnalul cu dublă intrare',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Diversitate culturală: jocuri de ieri și de azi',
      obiective: [
        'Compară cuvintele care denumesc jocul în mai multe limbi și recunoaște jocul ca punte între culturi diferite.',
      ],
      sursaManual: 'Art 5, Lecția 7, pp. 53-54',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Diversitate culturală: jocuri de ieri și de azi',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Compară cuvintele care denumesc jocul în mai multe limbi și recunoaște jocul ca punte între culturi diferite.',
        ],
        resurse: [
          'Manual Art 5, pp. 53-54',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-7/fisa-exercitii.pdf)',
          'Infograficul „Jocuri de ieri și de azi” (/materiale/clasa-5/unitatea-2/lectia-7/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– „Pentru început”, p. 53, ex. 1: grupăm cuvintele pentru joc din mai multe limbi după asemănare; observăm formele apropiate din limbile romanice (latină: jocus).\n– Ex. 2: fiecare spune un joc tradițional românesc și unul din altă țară; le notez în două coloane.',
            elevi: '„Pentru început”, p. 53:\nEx. 1: grupați după asemănare cuvintele pentru joc din mai multe limbi. Ce forme apropiate observați în limbile romanice (latină: jocus)?\nEx. 2: spuneți un joc tradițional românesc și unul din altă țară.',
          },
          {
            etapa: 'Jocuri de ieri',
            timp: '10 min',
            activitate: '– Citim lista lui Costin Moisil; fiecare bifează în gând jocurile jucate; din ce categorie ați bifat cele mai multe?\n– „Aplicații”, ex. 1, pe grupe: trei jocuri specific românești și trei împrumutate; completați lista cu jocuri digitale; care e cel mai popular în clasă?\n– Ex. 2: afișul expoziției „Piua”: ce sugerează praștia cu cablu electric?',
            elevi: 'Citim lista lui Costin Moisil. Bifați în gând jocurile jucate. Din ce categorie ați bifat cele mai multe?\n„Aplicații”, ex. 1, pe grupe: trei jocuri specific românești și trei împrumutate; completați lista cu jocuri digitale. Care este cel mai popular în clasă?\nEx. 2: afișul expoziției „Piua”: ce sugerează praștia cu cablu electric?',
          },
          {
            etapa: 'Ce este jocul',
            timp: '3 min',
            activitate: '– În caiete, după Repere: jocul (distracție, imaginație, dar și reguli, respect, colaborare; apropie culturile).\n– Întrebare: poate fi lectura un joc? Cu ce reguli?',
            elevi: 'În caiet, după Repere și infograficul lecției: jocul (distracție, imaginație, dar și reguli, respect, colaborare; apropie culturile).\nPoate fi lectura un joc? Cu ce reguli?',
            materiale: ['infografic'],
          },
          {
            etapa: 'Jocuri de azi',
            timp: '10 min',
            activitate: '– Lectura în ștafetă a textului despre jocurile digitale (p. 54).\n– Întrebările a-e, frontal: cea mai importantă informație; ce e atractiv; ce seamănă cu jocul lecturii; identități noi în joc; jocurile digitale și învățarea.',
            elevi: 'Lectură în ștafetă: textul despre jocurile digitale (p. 54).\nÎntrebările a-e: cea mai importantă informație; ce este atractiv; ce seamănă cu jocul lecturii; identități noi în joc; jocurile digitale și învățarea.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (jocul și țara lui), ex. 2 (ieri și azi) și ex. 3 (adevărat sau fals), individual, 8 minute.\n– Verificare, 5 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 8 minute: ex. 1 (jocul și țara lui), ex. 2 (ieri și azi), ex. 3 (adevărat sau fals).\nApoi verificăm, 5 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '7 min',
            activitate: '– „Aplicații” (p. 54), ex. 2-3: v-au ajutat jocurile digitale să comunicați cu copii din alte țări? În perechi, fiecare își prezintă jocul digital preferat.\n– Sinteză: jocul e universal; unele jocuri se joacă fără să vorbești aceeași limbă.\n– Tema: „Portofoliu” (două reclame: un joc tradițional și jocul digital preferat); fișa de exerciții, pagina 2.',
            elevi: '„Aplicații” (p. 54), ex. 2-3: v-au ajutat jocurile digitale să comunicați cu copii din alte țări? În perechi, prezentați-vă jocul digital preferat.\nSinteză: jocul este universal; unele jocuri se joacă fără să vorbești aceeași limbă.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică a participării; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-7/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Jocuri de ieri și de azi',
          pasi: [
            {
              intrebare: 'De ce seamănă între ele jocurile copiilor din țări diferite?',
              variante: [
                {
                  text: 'Pentru că răspund unor nevoi comune tuturor copiilor: mișcare, întrecere, imaginație',
                  corect: true,
                  explicatie: 'Regulile diferă, nevoia din spatele jocului e aceeași.',
                },
                {
                  text: 'Pentru că toate au fost inventate în aceeași țară',
                  corect: false,
                  explicatie: 'Jocurile apar independent, în culturi care nu s-au întâlnit.',
                },
                {
                  text: 'Pentru că se joacă doar în școală',
                  corect: false,
                  explicatie: 'Cele mai multe jocuri de copii apar în afara școlii.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 53-54',
            },
            {
              intrebare: 'Ce arată faptul că un joc are nume diferite în limbi diferite?',
              variante: [
                {
                  text: 'Că fiecare limbă își denumește lumea în felul ei, chiar când lucrul e același',
                  corect: true,
                  explicatie: 'Numele diferă, jocul rămâne recognoscibil.',
                },
                {
                  text: 'Că jocurile nu au nicio legătură între ele',
                  corect: false,
                  explicatie: 'Tocmai asemănarea regulilor arată legătura.',
                },
                {
                  text: 'Că doar una dintre limbi are numele corect',
                  corect: false,
                  explicatie: 'Nu există un nume mai corect decât altul; sunt limbi diferite.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 53-54',
            },
            {
              intrebare: 'Ce s-a schimbat cel mai mult la jocurile copiilor în ultimii cincizeci de ani?',
              variante: [
                {
                  text: 'Multe s-au mutat de afară pe ecran, dar tot de întrecere și de imaginație e vorba',
                  corect: true,
                  explicatie: 'Suportul s-a schimbat, nevoia din spate a rămas.',
                },
                {
                  text: 'Copiii nu se mai joacă deloc',
                  corect: false,
                  explicatie: 'Se joacă la fel de mult, dar altfel.',
                },
                {
                  text: 'Toate jocurile vechi au dispărut complet',
                  corect: false,
                  explicatie: 'Multe se joacă și azi, uneori sub alt nume.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 53-54',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-2/lectia-7/infografic.svg', titlu: 'Jocuri de ieri și de azi' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Proiect individual. Jocuri fără vârstă (anunțare)',
      obiective: [
        'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului individual Jocuri fără vârstă.',
      ],
      sursaManual: 'Art 5, Proiect individual, p. 55',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect individual. Jocuri fără vârstă (anunțare)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului individual Jocuri fără vârstă.',
        ],
        resurse: [
          'Manual Art 5, p. 55',
          'Fișa proiectului (/materiale/clasa-5/unitatea-2/lectia-8/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Ce jucau bunicii voștri când erau copii?” Trei-patru elevi răspund; notez jocurile pe tablă.',
            elevi: 'Ce jucau bunicii voștri când erau copii?',
          },
          {
            etapa: 'Prezentarea proiectului',
            timp: '15 min',
            activitate: '– Sarcina (p. 55): prezintă un joc aflat de la părinți, bunici sau de la cineva din comunitate, românesc sau din altă cultură.\n– Calendarul, trei săptămâni: I – interviul, alegerea jocului, documentarea; II – posterul, cu desene sau fotografii și sursele; III – prezentarea orală, de cel mult trei minute, exersată acasă.\n– Împart fișa proiectului; stabilim data prezentărilor.',
            elevi: 'Proiect individual (p. 55): prezentați un joc aflat de la părinți, bunici sau de la cineva din comunitate, românesc sau din altă cultură.\nCalendar, trei săptămâni: săptămâna I: interviul, alegerea jocului, documentarea; săptămâna a II-a: posterul, cu desene sau fotografii și sursele; săptămâna a III-a: prezentarea orală, de cel mult trei minute, exersată acasă.\nStabilim data prezentărilor.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Criteriile de evaluare',
            timp: '8 min',
            activitate: '– Citim autoevaluarea de la p. 55 și criteriile din fișă; pentru fiecare criteriu dau un exemplu de „bine” și unul de „slab” (de exemplu, un poster cu sursele scrise și unul fără).',
            elevi: 'Citim autoevaluarea de la p. 55 și criteriile din fișă. Pentru fiecare criteriu căutăm un exemplu de „bine” și unul de „slab” (de exemplu, un poster cu sursele scrise și unul fără).',
            materiale: ['fisa'],
          },
          {
            etapa: 'Cum iau un interviu',
            timp: '12 min',
            activitate: '– Formulăm împreună 5-6 întrebări pentru persoana intervievată: Cum se numea jocul? Câți jucători erau? Care erau regulile? Unde se juca? De la cine l-ați învățat? Se mai joacă azi?\n– Elevii le notează în caiet; două perechi simulează interviul în fața clasei.',
            elevi: 'Formulăm împreună 5-6 întrebări pentru persoana intervievată: Cum se numea jocul? Câți jucători erau? Care erau regulile? Unde se juca? De la cine l-ați învățat? Se mai joacă azi?\nNotați-le în caiet. Două perechi simulează interviul în fața clasei.',
          },
          {
            etapa: 'Planul personal',
            timp: '7 min',
            activitate: '– Fiecare notează în fișă pe cine va întreba, până când și de ce materiale are nevoie pentru poster.',
            elevi: 'Notați în fișă pe cine veți întreba, până când și de ce materiale aveți nevoie pentru poster.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Încheiere',
            timp: '3 min',
            activitate: '– Răspund la întrebări; anunț că la sfârșitul fiecărei săptămâni verificăm stadiul proiectului.',
            elevi: 'Puneți întrebări. La sfârșitul fiecărei săptămâni verificăm stadiul proiectului.',
          },
        ],
        evaluare: 'Fișa de pornire a proiectului; întrebările de interviu din caiet.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-8/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-2/lectia-8/schema.svg',
          titlu: 'Proiectul Jocuri fără vârstă, pas cu pas',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Schimburi de replici în dialog',
      obiective: [
        'Construiește, prin joc de rol, un schimb de replici adecvat unei situații de comunicare date (invitație, reproș, compliment).',
      ],
      sursaManual: 'Art 5, Lecția 8, pp. 56-57',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Schimburi de replici în dialog',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Construiește, prin joc de rol, un schimb de replici adecvat unei situații de comunicare date (invitație, reproș, compliment).',
        ],
        resurse: [
          'Manual Art 5, pp. 56-57',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-9/fisa-exercitii.pdf)',
          'Quizul „Schimburi de replici în dialog” (materialul de joc al lecției)',
          'Jocul „Situațiile”, interactiv, pe tablă (situațiile 1-6 din manual, trase pe rând de perechi)',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 56, ex. 1-2, frontal: vă e ușor să vorbiți cu colegii, cu profesorii, cu oameni pe care îi vedeți prima dată? Ce vă face să vă simțiți în largul vostru?',
            elevi: '„Pentru început”, p. 56, ex. 1-2: vă este ușor să vorbiți cu colegii, cu profesorii, cu oameni pe care îi vedeți prima dată? Ce vă face să vă simțiți în largul vostru?',
          },
          {
            etapa: 'Explorare: scena din Vizită...',
            timp: '10 min',
            activitate: '– „Explorare”, ex. 1: fragmentul din ecranizarea din 1952 (min. 4:07-4:30) sau citit pe roluri, după textul din manual.\n– Ex. 2, în grupe de 3-4: tema discuției; cine întreabă și cine răspunde în primele patru replici; replica cu reproș; cum respinge Ionel reproșul. Grupele raportează.',
            elevi: '„Explorare”:\nEx. 1: scena din Vizită... (ecranizarea din 1952 sau lectura pe roluri, după textul din manual).\nEx. 2, în grupe de 3-4: tema discuției; cine întreabă și cine răspunde în primele patru replici; replica cu reproș; cum respinge Ionel reproșul. Grupele raportează.',
          },
          {
            etapa: 'Dirijarea învățării: dialogul',
            timp: '5 min',
            activitate: '– În caiete, după Repere: dialogul; continuitatea replicilor; perechile: întrebare-răspuns, invitație-acceptare sau refuz, compliment-mulțumire, reproș-acceptare sau respingere; atitudinea politicoasă.',
            elevi: 'În caiet, după Repere: dialogul; continuitatea replicilor; perechile: întrebare-răspuns, invitație-acceptare sau refuz, compliment-mulțumire, reproș-acceptare sau respingere; atitudinea politicoasă.',
            materiale: ['schema'],
          },
          {
            etapa: 'Jocurile de rol',
            timp: '17 min',
            activitate: '– „Aplicații”, ex. 1: șase perechi trag pe tablă situațiile 1-6 (jocul „Situațiile”); 3 minute de pregătire, 2 minute de joc.\n– Ceilalți completează fișa de observare de la ex. 2 (rol interpretat corect, exprimare clară, politețe).\n– După fiecare joc: ce formule au folosit? (Vreau să te invit..., Îmi pare rău, dar..., Mulțumesc mult...).',
            elevi: 'Jocurile de rol, „Aplicații”:\nEx. 1: șase perechi trag, pe rând, la tablă situațiile 1-6; 3 minute de pregătire, 2 minute de joc.\nCeilalți completează fișa de observare de la ex. 2 (rol interpretat corect, exprimare clară, politețe).\nDupă fiecare joc: ce formule au folosit perechile?',
            joc: {
              tip: 'extragere',
              titlu: 'Situațiile',
              instructiune: 'Pregătiți dialogul 3 minute, apoi jucați-l 2 minute. Ceilalți observă: rolul, exprimarea, politețea.',
              buton: 'Trage o situație',
              faraRepetare: true,
              elemente: [
                {
                  eticheta: 'Perechea 1',
                  text: 'Un copil își invită un coleg sau o colegă de clasă la ziua lui de naștere (inventează locul, ziua, ora); colegul acceptă invitația și mulțumește.',
                  detaliu: 'Invitația: Vreau să te invit …; Mă bucur să te invit …; Sper că vei accepta invitația mea …\nAcceptarea: Mulțumesc, vin cu plăcere …; Sigur că vin, mulțumesc frumos …; Excelent! Abia aștept …',
                },
                {
                  eticheta: 'Perechea 2',
                  text: 'O doamnă face o invitație la onomastica fiicei sale (precizează locul, ziua, ora), pe care o adresează mamei unui coleg sau unei colege de clasă a fiicei; mama invitată își exprimă regretul că nu poate răspunde invitației.',
                  detaliu: 'Invitația: Aș vrea să vă invit …; Sunt încântată să vă invit …; Sper că veți putea veni la …\nRefuzul: Îmi pare rău, dar …; Mi-ar fi făcut plăcere …, dar …',
                },
                {
                  eticheta: 'Perechea 3',
                  text: 'Nepotul sau nepoata îi face un compliment bunicii (găsește tu calitățile pentru care bunica merită să fie lăudată); bunica răspunde, mulțumind pentru compliment.',
                  detaliu: 'Complimentul: Ești extraordinară …, pentru că …; Ești cea mai bună bunică, pentru că …\nRăspunsul: Mulțumesc mult …; Oh, ce drăguț/drăguță ești …',
                },
                {
                  eticheta: 'Perechea 4',
                  text: 'Doi prieteni vorbesc despre jocurile preferate: unul pune întrebări, celălalt răspunde.',
                  detaliu: 'Întrebările: Ce …?, Cum …?, Cu cine …?, Unde …?, De ce …?\nRăspunsurile: fii atent la întrebare, ca să dai un răspuns adecvat; dacă nu ești sigur că ai înțeles întrebarea, cere lămuriri.',
                },
                {
                  eticheta: 'Perechea 5',
                  text: 'Părintele unui copil cam neastâmpărat îi face reproșuri acestuia; copilul răspunde că a înțeles reproșul și că îl acceptă.',
                  detaliu: 'Reproșul: Îmi pare rău că trebuie să-ți spun …; Nu-mi place că …\nAcceptarea: Am înțeles …, îmi pare rău; Nu mi-am dat seama …, promit să nu mai fac.',
                },
                {
                  eticheta: 'Perechea 6',
                  text: 'Un băiat sau o fată îi reproșează celui mai bun prieten faptul că s-a comportat urât față de el sau de ea; prietenul nu acceptă reproșul și oferă explicații.',
                  detaliu: 'Reproșul: Nu-mi place cum te-ai purtat …; Sper că îți dai seama că sunt supărat/supărată pe tine, pentru că …\nRespingerea: Îmi pare rău, dar nu ai dreptate; Nu ai motive să fii supărat, pentru că …',
                },
              ],
              sursa: 'Manual Art 5, p. 57, „Aplicații”, ex. 1 (situațiile 1-6 și sugestiile de formulare)',
            },
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (ce fel de replică?), ex. 2 (răspunsul potrivit) și ex. 3 (politicos sau nu?), individual, 6 minute.\n– Verificare, 4 minute. Dacă rămâne timp: quizul lecției.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 6 minute: ex. 1 (ce fel de replică?), ex. 2 (răspunsul potrivit), ex. 3 (politicos sau nu?).\nApoi verificăm, 4 minute.\nDacă rămâne timp: jucăm quizul lecției.',
            materiale: ['fisa', 'joc'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '3 min',
            activitate: '– „Provocări”, ex. 1: ce a fost mai greu, să joci rolul sau să-i evaluezi pe colegi?\n– Tema: „Provocări”, ex. 2 (chestionarul de autoevaluare); fișa de exerciții, pagina 2, ex. 4-5.',
            elevi: '„Provocări”, ex. 1: ce a fost mai greu, să joci rolul sau să-i evaluezi pe colegi?',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Fișele de observare a jocurilor de rol; aprecierea profesorului pentru fiecare pereche; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-9/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Schimburi de replici în dialog',
          pasi: [
            {
              intrebare: 'Ce urmează, de obicei, după o invitație, într-un schimb de replici politicos?',
              variante: [
                { text: 'Acceptarea sau refuzul invitației', corect: true, explicatie: 'O invitație cere un răspuns: accept sau refuz, motivat politicos.' },
                { text: 'Un reproș adresat celui care invită', corect: false, explicatie: 'Reproșul nu e răspunsul firesc la o invitație.' },
                { text: 'O poruncă', corect: false, explicatie: 'Porunca nu are legătură cu a răspunde unei invitații.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 56',
            },
            {
              intrebare: 'Ce răspuns e potrivit pentru un compliment, într-un dialog politicos?',
              variante: [
                { text: 'Mulțumirea', corect: true, explicatie: 'La un compliment, răspunsul firesc și politicos e mulțumirea.' },
                { text: 'Reproșul', corect: false, explicatie: 'Reproșul nu e un răspuns potrivit la un compliment.' },
                { text: 'Tăcerea totală', corect: false, explicatie: 'Un răspuns, chiar scurt, e mai potrivit decât tăcerea într-un dialog politicos.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 56',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-2/lectia-9/schema.svg',
          titlu: 'Ce răspund la o invitație, un reproș, un compliment',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Reguli de acces la cuvânt',
      obiective: [
        'Aplică regulile de acces la cuvânt într-o comunicare de grup, pe baza unui fragment din Vizită...',
      ],
      sursaManual: 'Art 5, Lecția 9, pp. 58-59',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Reguli de acces la cuvânt',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Aplică regulile de acces la cuvânt într-o comunicare de grup, pe baza unui fragment din Vizită...',
        ],
        resurse: [
          'Manual Art 5, pp. 58-59',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-10/fisa-exercitii.pdf)',
          'Quizul „Reguli de acces la cuvânt” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Chem patru elevi și le dau, în secret, sarcina: discutați ce ați făcut ieri la școală; când cineva începe să vorbească, altul îl întrerupe după 2-3 cuvinte. Două minute.\n– Clasa: ce ați înțeles? Cei patru: cum v-ați simțit când ați fost întrerupți?',
          },
          {
            etapa: 'Explorare',
            timp: '8 min',
            activitate: '– „Explorare”, p. 58, ex. 1-2: momentul în care Ionel e nepoliticos cu musafirul; cum s-a simțit musafirul („M-am simțit..., pentru că...”).\n– Ex. 3: tabelul „Ce văd / Ce aud”: citim exemplele și adăugăm altele; elevii le notează.',
            elevi: '„Explorare”, p. 58:\nEx. 1-2: momentul în care Ionel este nepoliticos cu musafirul. Cum s-a simțit musafirul? Completați: „M-am simțit..., pentru că...”\nEx. 3: tabelul „Ce văd / Ce aud”: citim exemplele și adăugăm altele; notați-le.',
          },
          {
            etapa: 'Dirijarea învățării: regulile',
            timp: '4 min',
            activitate: '– În caiete, după Repere: regulile de acces la cuvânt (dai cuvântul după ce termini; anunți prin semn și aștepți; are prioritate cine a semnalat primul); moderatorul.',
            elevi: 'În caiet, după Repere: regulile de acces la cuvânt (dai cuvântul după ce termini; anunți prin semn și aștepți; are prioritate cine a semnalat primul); moderatorul.',
            materiale: ['schema'],
          },
          {
            etapa: 'Jocul culorilor',
            timp: '15 min',
            activitate: '– „Aplicații”, ex. 1: lectura pe roluri a textului lui Mircea Sântimbreanu (povestitor, două fete; un profesor și o elevă fără replici).\n– Ex. 2, investigație în grupe de 3-4 (grupele se formează la tablă, în jocul „Culorile”: fiecare elev trage o culoare): fiecare grupă își alege un moderator și un semn pentru „vreau să vorbesc”.\n– Variantă: tehnica acvariului; câțiva elevi observă o grupă cu grila de la p. 59.\n– Ex. 3-4: grupele raportează concluziile și se autoevaluează după grilă.',
            elevi: 'Jocul culorilor, „Aplicații”:\nEx. 1: lectura pe roluri a textului lui Mircea Sântimbreanu (povestitor, două fete; un profesor și o elevă fără replici).\nEx. 2, investigație în grupe de 3-4: fiecare trage la tablă o culoare, iar cei cu aceeași culoare formează o grupă. Alegeți un moderator și un semn pentru „vreau să vorbesc”.\nEx. 3-4: grupele raportează concluziile și se autoevaluează după grila de la p. 59.',
            joc: {
              tip: 'grupe',
              titlu: 'Culorile',
              instructiune: 'Trage o culoare. Cei care trag aceeași culoare formează o grupă.',
              etichete: [
                {
                  nume: 'Roșu',
                  culoare: '#d63a2f',
                },
                {
                  nume: 'Albastru',
                  culoare: '#2b6cb0',
                },
                {
                  nume: 'Verde',
                  culoare: '#2f9e55',
                },
                {
                  nume: 'Galben',
                  culoare: '#f2b61c',
                },
                {
                  nume: 'Portocaliu',
                  culoare: '#ed7d31',
                },
                {
                  nume: 'Mov',
                  culoare: '#7e57c2',
                },
                {
                  nume: 'Roz',
                  culoare: '#e86aa6',
                },
                {
                  nume: 'Maro',
                  culoare: '#8d5a3b',
                },
              ],
              maxPerGrupa: 4,
              sursa: 'Plan de lecție (Manual Art 5, pp. 58-59, „Aplicații”, ex. 2); culorile sunt alese pentru OraRO',
            },
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (pot să vorbesc acum?), ex. 2 (ce regulă s-a încălcat?) și ex. 3 (moderatorul), individual, 8 minute.\n– Verificare, 5 minute. Dacă rămâne timp: quizul lecției.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 8 minute: ex. 1 (pot să vorbesc acum?), ex. 2 (ce regulă s-a încălcat?), ex. 3 (moderatorul).\nApoi verificăm, 5 minute.\nDacă rămâne timp: jucăm quizul lecției.',
            materiale: ['fisa', 'joc'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– „Provocări”, ex. 1, în scris: cum v-ați simțit în grupă? V-ați putut spune părerea? Ați respectat regulile?\n– Tema: „Provocări”, ex. 2; fișa de exerciții, pagina 2, ex. 5. Fișa observatorului (ex. 4) o folosim la următoarea discuție pe grupe.',
            elevi: '„Provocări”, ex. 1, în scris: cum v-ați simțit în grupă? V-ați putut spune părerea? Ați respectat regulile?\nFișa observatorului (ex. 4) o folosim la următoarea discuție pe grupe.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Grila de autoevaluare a grupelor (p. 59); observarea discuției; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-10/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Reguli de acces la cuvânt',
          pasi: [
            {
              intrebare: 'Ce înseamnă regulile de acces la cuvânt, într-o discuție de grup?',
              variante: [
                { text: 'Fiecare vorbește la rândul lui, fără să întrerupă pe ceilalți', corect: true, explicatie: 'Regulile de acces la cuvânt organizează cine și când vorbește, ca discuția să rămână ordonată.' },
                { text: 'Doar cel mai în vârstă are voie să vorbească', corect: false, explicatie: 'Vârsta nu are legătură cu regulile de acces la cuvânt.' },
                { text: 'Vorbește cine strigă mai tare', corect: false, explicatie: 'Dimpotrivă, regulile există tocmai ca să nu domine cine vorbește mai tare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 9, p. 58',
            },
            {
              intrebare: 'De ce e importantă respectarea regulilor de acces la cuvânt într-o comunicare de grup?',
              variante: [
                { text: 'Ca toți participanții să fie ascultați și discuția să rămână ordonată', corect: true, explicatie: 'Fără reguli, discuția de grup riscă să devină haotică, iar unii participanți să nu fie ascultați.' },
                { text: 'Ca discuția să dureze cât mai mult', corect: false, explicatie: 'Durata discuției nu e scopul regulilor de acces la cuvânt.' },
                { text: 'Ca un singur vorbitor să domine tot timpul', corect: false, explicatie: 'Exact opusul: regulile împart cuvântul echitabil între participanți.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 9, p. 58',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-2/lectia-10/schema.svg',
          titlu: 'Regulile de acces la cuvânt',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Verbul. Predicatul verbal',
      obiective: [
        'Reactualizează categoriile gramaticale ale verbului, formele verbale nepersonale (infinitivul) și identifică predicatul verbal.',
      ],
      sursaManual: 'Art 5, Lecția 10, p. 60',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Verbul. Predicatul verbal',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează categoriile gramaticale ale verbului, formele verbale nepersonale (infinitivul) și identifică predicatul verbal.',
        ],
        resurse: [
          'Manual Art 5, pp. 60-61',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-11/fisa-exercitii.pdf)',
          'Schema „Verbul. Predicatul verbal” (/materiale/clasa-5/unitatea-2/lectia-11/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Mingea verbelor: arunc o minge; cine o prinde spune un verb și o aruncă altuia; cine spune altceva decât un verb iese din joc. Două minute.',
            elevi: 'Mingea verbelor: cine prinde mingea spune un verb și o aruncă altcuiva. Cine spune altceva decât un verb iese din joc. Două minute.',
          },
          {
            etapa: 'Pentru început',
            timp: '4 min',
            activitate: '– „Pentru început”, p. 60, ex. 1: încă trei verbe legate de joacă.\n– Ex. 2: istoria cuvântului verb (din franceză și din latină, verbum = cuvânt); maxima „Verba volant, scripta manent” („Cuvintele zboară, scrisul rămâne”).',
            elevi: '„Pentru început”, p. 60:\nEx. 1: încă trei verbe legate de joacă.\nEx. 2: istoria cuvântului verb (din franceză și din latină, verbum = cuvânt); maxima „Verba volant, scripta manent” („Cuvintele zboară, scrisul rămâne”).',
          },
          {
            etapa: 'Dirijarea învățării: flexiunea verbului',
            timp: '12 min',
            activitate: '– „Explorare”, p. 60, ex. 1: grupăm cuvintele amestecate printre jucării pe părți de vorbire.\n– Ex. 2-3: verbele din propoziții și timpul lor; ex. 4: trecem de la persoana I singular la persoana a III-a plural (ce se schimbă?); ex. 5: forma negativă.\n– În caiete, după Repere: verbul (acțiune, stare, existență); timpurile de bază; persoanele; numerele; forma afirmativă și negativă (nu se analizează împreună cu verbul).',
            elevi: '„Explorare”, p. 60:\nEx. 1: grupați pe părți de vorbire cuvintele amestecate printre jucării.\nEx. 2-3: verbele din propoziții și timpul lor.\nEx. 4: treceți de la persoana I singular la persoana a III-a plural. Ce se schimbă?\nEx. 5: forma negativă.\nÎn caiet, după schema lecției: verbul (acțiune, stare, existență); timpurile de bază; persoanele; numerele; forma afirmativă și negativă (nu se analizează împreună cu verbul).',
            materiale: ['schema'],
          },
          {
            etapa: 'Dirijarea învățării: predicatul verbal și infinitivul',
            timp: '10 min',
            activitate: '– „Explorare”, p. 61, ex. 1-2: predicatele din propozițiile despre Ionel și partea de vorbire prin care se exprimă.\n– Ex. 3-4: trecem verbele la alte persoane; ce verbe nu își schimbă forma? Le căutăm în dicționar.\n– În caiete: predicatul verbal; formele verbale nepersonale; infinitivul, cu sau fără a (după a putea, fără a: Pot cânta.).',
            elevi: '„Explorare”, p. 61:\nEx. 1-2: predicatele din propozițiile despre Ionel și partea de vorbire prin care se exprimă.\nEx. 3-4: treceți verbele la alte persoane. Ce verbe nu își schimbă forma? Căutați-le în dicționar.\nÎn caiet: predicatul verbal; formele verbale nepersonale; infinitivul, cu sau fără a (după a putea, fără a: Pot cânta.).',
            materiale: ['schema'],
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (fișa verbului), ex. 2 (predicate și infinitive) și ex. 3 (schimbă persoana), individual, 10 minute.\n– Verificare, 5 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 10 minute: ex. 1 (fișa verbului), ex. 2 (predicate și infinitive), ex. 3 (schimbă persoana).\nApoi verificăm, 5 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– „Deschideri”: ce arată mulțimea de verbe dintr-un text narativ? Numărăm verbele din pasajul cu toba (ex. 7): acțiunea pare rapidă.\n– Tema: „Aplicații”, ex. 1, 2, 5, 6 și 8 (ortogramele na/n-a, nai/n-ai); fișa de exerciții, pagina 2, ex. 4-6.',
            elevi: '„Deschideri”: ce arată mulțimea de verbe dintr-un text narativ? Numărăm verbele din pasajul cu toba (ex. 7).',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-11/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Verbul și predicatul verbal',
          pasi: [
            {
              intrebare: 'Care este predicatul verbal din propoziția „Copiii se joacă în curte”?',
              variante: [
                {
                  text: 'se joacă',
                  corect: true,
                  explicatie: 'Predicatul verbal arată acțiunea făcută de subiect.',
                },
                {
                  text: 'Copiii',
                  corect: false,
                  explicatie: 'Copiii e subiectul, arată cine face acțiunea.',
                },
                {
                  text: 'în curte',
                  corect: false,
                  explicatie: 'În curte arată locul, e parte secundară.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 60',
            },
            {
              intrebare: 'Ce este infinitivul unui verb?',
              variante: [
                {
                  text: 'Forma de bază a verbului, cea din dicționar, precedată de „a”: a citi, a merge',
                  corect: true,
                  explicatie: 'Infinitivul e o formă nepersonală: nu arată cine face acțiunea.',
                },
                {
                  text: 'Forma verbului la persoana I singular',
                  corect: false,
                  explicatie: 'Aceea e o formă personală, care arată cine face acțiunea.',
                },
                {
                  text: 'Verbul scris la plural',
                  corect: false,
                  explicatie: 'Numărul nu are legătură cu infinitivul.',
                },
              ],
              indiciu: 'Cum cauți un verb în dicționar? Sub ce formă îl găsești?',
              sursa: 'Manual Art 5, p. 60',
            },
            {
              intrebare: 'Ce arată persoana și numărul unui verb?',
              variante: [
                {
                  text: 'Cine face acțiunea și dacă e vorba de unul sau mai mulți',
                  corect: true,
                  explicatie: 'Eu citesc, tu citești, ei citesc: se schimbă persoana și numărul.',
                },
                {
                  text: 'Când se petrece acțiunea',
                  corect: false,
                  explicatie: 'Momentul acțiunii e arătat de timp, nu de persoană.',
                },
                {
                  text: 'Dacă acțiunea e reală sau doar dorită',
                  corect: false,
                  explicatie: 'Aceea e treaba modului verbal.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 60',
            },
            {
              intrebare: 'În „Ionel a spart tava”, câte cuvinte formează predicatul verbal?',
              variante: [
                {
                  text: 'Două: a spart, fiindcă verbul e la un timp compus',
                  corect: true,
                  explicatie: 'La timpurile compuse, auxiliarul și verbul de bază formează împreună predicatul.',
                },
                {
                  text: 'Unul singur: spart',
                  corect: false,
                  explicatie: 'Fără auxiliarul „a”, forma verbală nu e completă.',
                },
                {
                  text: 'Trei: Ionel a spart',
                  corect: false,
                  explicatie: 'Ionel e subiectul, nu face parte din predicat.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 60',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-11/schema.svg', titlu: 'Verbul. Predicatul verbal' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Modul indicativ. Prezentul',
      obiective: [
        'Recunoaște formele modului indicativ, timpul prezent, și le folosește corect, ortografic și ortoepic, în comunicare.',
      ],
      sursaManual: 'Art 5, Lecția 11, p. 62',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modul indicativ. Prezentul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște formele modului indicativ, timpul prezent, și le folosește corect, ortografic și ortoepic, în comunicare.',
        ],
        resurse: [
          'Manual Art 5, pp. 62-63',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-12/fisa-exercitii.pdf)',
          'Schema „Modul indicativ. Prezentul” (/materiale/clasa-5/unitatea-2/lectia-12/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Fiecare elev spune un verb pentru ceva ce a făcut sigur azi. Anunț: modul arată cum privește vorbitorul acțiunea.',
            elevi: 'Spuneți un verb pentru ceva ce ați făcut sigur azi.\nModul arată cum privește vorbitorul acțiunea.',
          },
          {
            etapa: 'Dirijarea învățării: modul indicativ',
            timp: '8 min',
            activitate: '– Jocul „Trotineta” (p. 62), în perechi: verbele din text în cele două coșuri (acțiuni sigure, acțiuni posibile); verificare cu altă pereche.\n– În caiete, după Repere: modul; modul indicativ (acțiune sigură, reală).',
            elevi: 'Jocul „Trotineta” (p. 62), în perechi: puneți verbele din text în cele două coșuri (acțiuni sigure, acțiuni posibile). Verificați cu altă pereche.\nÎn caiet, după Repere și schema lecției: modul; modul indicativ (acțiune sigură, reală).',
            materiale: ['schema'],
          },
          {
            etapa: 'Dirijarea învățării: prezentul',
            timp: '13 min',
            activitate: '– „Explorare”, ex. 1-3: dialogul copiilor: verbele, momentul acțiunii, cuvântul „acum”.\n– Ex. 4: tabelul de conjugare: partea comună cu infinitivul; desinențele (roșu) și sunetele care arată timpul (verde); desinența zero.\n– Ex. 5-6: toarnă și turnează (sensuri diferite); cheltuiește și cheltuie (ambele corecte, DOOM3 o recomandă pe prima).\n– Ex. 7: valorile prezentului (trecut, viitor, adevăr general).\n– În caiete: Repere, pp. 62-63.',
            elevi: '„Explorare”:\nEx. 1-3: dialogul copiilor: verbele, momentul acțiunii, cuvântul „acum”.\nEx. 4: tabelul de conjugare: partea comună cu infinitivul; desinențele (roșu) și sunetele care arată timpul (verde); desinența zero.\nEx. 5-6: toarnă și turnează (sensuri diferite); cheltuiește și cheltuie (ambele corecte, DOOM3 o recomandă pe prima).\nEx. 7: valorile prezentului (trecut, viitor, adevăr general).\nÎn caiet: Repere, pp. 62-63.',
            materiale: ['schema'],
          },
          {
            etapa: 'Aplicații frontale',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 1 (literele ascunse de jucării), ex. 2 (seria doar cu indicative; atenție la imperative), ex. 5-6 (formele corecte), la tablă.',
            elevi: '„Aplicații”, la tablă: ex. 1 (literele ascunse de jucării), ex. 2 (seria doar cu indicative; atenție la imperative), ex. 5-6 (formele corecte).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (sigur sau posibil?), ex. 2 (valorile prezentului) și ex. 3 (conjugare), individual, 9 minute.\n– Verificare, 4 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 9 minute: ex. 1 (sigur sau posibil?), ex. 2 (valorile prezentului), ex. 3 (conjugare).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– „Deschideri”: concursul de două zile, greșeli la indicativ prezent auzite la radio sau la televizor (emisiunea, ora, postul).\n– Tema: „Aplicații”, ex. 3, 4 și 7; fișa de exerciții, pagina 2, ex. 4-5.',
            elevi: '„Deschideri”: concursul de două zile: notați greșeli la indicativ prezent auzite la radio sau la televizor (emisiunea, ora, postul).',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-12/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Modul indicativ. Prezentul',
          pasi: [
            {
              intrebare: 'Ce arată modul indicativ?',
              variante: [
                {
                  text: 'O acțiune prezentată ca sigură, reală',
                  corect: true,
                  explicatie: 'Indicativul e modul faptelor care se petrec cu adevărat.',
                },
                {
                  text: 'O acțiune dorită sau posibilă',
                  corect: false,
                  explicatie: 'Aceea e zona altor moduri, învățate mai târziu.',
                },
                {
                  text: 'O poruncă',
                  corect: false,
                  explicatie: 'Porunca e exprimată de modul imperativ.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 62',
            },
            {
              intrebare: 'Care e forma corectă la persoana a II-a singular, prezent, a verbului „a crea”?',
              variante: [
                {
                  text: 'tu creezi',
                  corect: true,
                  explicatie: 'Verbele terminate în -ea de tipul acesta primesc sufixul -ez la prezent.',
                },
                {
                  text: 'tu crei',
                  corect: false,
                  explicatie: 'Forma e greșită; lipsește sufixul cerut de acest tip de verb.',
                },
                {
                  text: 'tu creiezi',
                  corect: false,
                  explicatie: 'Se adaugă un i în plus, care nu are ce căuta acolo.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 62',
            },
            {
              intrebare: 'Prezentul indicativ poate arăta și o acțiune care nu se petrece chiar acum?',
              variante: [
                {
                  text: 'Da, poate arăta un obicei sau un adevăr general: în fiecare zi merg la școală',
                  corect: true,
                  explicatie: 'Prezentul acoperă și acțiunile repetate, și adevărurile mereu valabile.',
                },
                {
                  text: 'Nu, arată exclusiv momentul vorbirii',
                  corect: false,
                  explicatie: 'Ar fi prea îngust; prezentul are mai multe valori.',
                },
                {
                  text: 'Doar dacă verbul e la plural',
                  corect: false,
                  explicatie: 'Numărul nu are nicio legătură.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 62',
            },
            {
              intrebare: 'Care e forma corectă?',
              variante: [
                {
                  text: 'eu continui, tu continui, el continuă',
                  corect: true,
                  explicatie: 'La persoana I și a II-a forma e aceeași; la a III-a se schimbă terminația.',
                },
                {
                  text: 'eu continuu, tu continui, el continue',
                  corect: false,
                  explicatie: 'Formele de persoana I și a III-a sunt greșite.',
                },
                {
                  text: 'eu continui, tu continue, el continuu',
                  corect: false,
                  explicatie: 'Formele sunt amestecate între persoane.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 62',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-12/schema.svg', titlu: 'Modul indicativ. Prezentul' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Imperfectul',
      obiective: [
        'Recunoaște formele modului indicativ, timpul imperfect, și le folosește corect în comunicare.',
      ],
      sursaManual: 'Art 5, Lecția 12, p. 64',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Imperfectul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște formele modului indicativ, timpul imperfect, și le folosește corect în comunicare.',
        ],
        resurse: [
          'Manual Art 5, pp. 64-65',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-13/fisa-exercitii.pdf)',
          'Schema „Imperfectul” (/materiale/clasa-5/unitatea-2/lectia-13/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Trei grupe dau, în lanț, verbe la prezent, la trecut și la viitor. Anunț: trecutul are mai multe timpuri; azi, imperfectul.',
            elevi: 'Trei grupe dau, în lanț, verbe la prezent, la trecut și la viitor.\nTrecutul are mai multe timpuri. Azi: imperfectul.',
          },
          {
            etapa: 'Morișca',
            timp: '7 min',
            activitate: '– „Explorare”, ex. 1: fiecare lipește bilețelul cu verbul pe paleta potrivită a moriștii desenate pe planșă; în centru scriem timpul de bază al tuturor: trecutul.',
            elevi: '„Explorare”, ex. 1: lipiți bilețelul cu verbul pe paleta potrivită a moriștii desenate pe planșă. În centru scriem timpul de bază al tuturor verbelor.',
          },
          {
            etapa: 'Dirijarea învățării: imperfectul',
            timp: '12 min',
            activitate: '– Ex. 2-3: verbele de sub cele două desene (alunecam, priveam / a apărut, a agățat, a trântit); care acțiuni sunt înaintea celorlalte?\n– Repere: imperfectul (acțiune de durată sau repetată; descrie cadrul narațiunii).\n– Ex. 4: conjugarea; sufixele -a- și -ea-.\n– Ex. 5: voiam, nu vroiam; explic de unde vine greșeala (verbul a vrea).\n– În caiete: definiția, exemplele și forma corectă voiam.',
            elevi: 'Ex. 2-3: verbele de sub cele două desene (alunecam, priveam / a apărut, a agățat, a trântit). Care acțiuni sunt înaintea celorlalte?\nRepere: imperfectul (acțiune de durată sau repetată; descrie cadrul narațiunii).\nEx. 4: conjugarea; sufixele -a- și -ea-.\nEx. 5: voiam, nu vroiam. De unde vine greșeala (verbul a vrea)?\nÎn caiet: definiția, exemplele și forma corectă voiam.',
            materiale: ['schema'],
          },
          {
            etapa: 'Aplicații',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 1, jocul „Mingile”, în perechi: prima pereche care termină corect câștigă.\n– Ex. 3 (intrusul) și ex. 6 (corectarea), la tablă.',
            elevi: '„Aplicații”:\nEx. 1, jocul „Mingile”, în perechi: prima pereche care termină corect câștigă.\nEx. 3 (intrusul) și ex. 6 (corectarea), la tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (durată sau repetare?), ex. 2 (completează cu imperfectul) și ex. 3 (satul de altădată), individual, 9 minute.\n– Verificare, 4 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 9 minute: ex. 1 (durată sau repetare?), ex. 2 (completează cu imperfectul), ex. 3 (satul de altădată).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– Doi elevi spun câte o propoziție despre cum era clasa în prima zi de școală, cu verbe la imperfect.\n– Tema: „Aplicații”, ex. 2, 4, 5 și 7; „Deschideri” (începutul unei narațiuni, cel mult cinci rânduri); fișa de exerciții, pagina 2, ex. 4-5.',
            elevi: 'Doi dintre voi spun câte o propoziție despre cum era clasa în prima zi de școală, cu verbe la imperfect.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică; jocul „Mingile”; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-13/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Imperfectul',
          pasi: [
            {
              intrebare: 'Ce fel de acțiune trecută arată imperfectul?',
              variante: [
                {
                  text: 'O acțiune care ținea sau se repeta în trecut, fără să știm când s-a terminat',
                  corect: true,
                  explicatie: 'De aceea se folosește la descrieri și la amintiri din copilărie.',
                },
                {
                  text: 'O acțiune terminată clar, într-un moment precis',
                  corect: false,
                  explicatie: 'Aceea e valoarea perfectului compus.',
                },
                {
                  text: 'O acțiune care abia urmează să se întâmple',
                  corect: false,
                  explicatie: 'Aceea e valoarea viitorului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 64',
            },
            {
              intrebare: 'Care propoziție are verbul la imperfect?',
              variante: [
                {
                  text: 'În fiecare vară mergeam la bunici.',
                  corect: true,
                  explicatie: 'Mergeam arată o acțiune repetată în trecut.',
                },
                {
                  text: 'Ieri am mers la bunici.',
                  corect: false,
                  explicatie: 'Am mers e perfect compus, acțiune terminată.',
                },
                {
                  text: 'Mâine merg la bunici.',
                  corect: false,
                  explicatie: 'Merg e prezent cu valoare de viitor.',
                },
              ],
              indiciu: 'Caută varianta care sugerează că lucrul se repeta.',
              sursa: 'Manual Art 5, p. 64',
            },
            {
              intrebare: 'Ce terminații are imperfectul, la persoana I singular?',
              variante: [
                {
                  text: '-am, -eam, -iam: cântam, mergeam, citeam',
                  corect: true,
                  explicatie: 'Terminația depinde de conjugarea verbului.',
                },
                {
                  text: '-ez, -esc',
                  corect: false,
                  explicatie: 'Acelea sunt sufixe de prezent.',
                },
                {
                  text: '-ui, -ăi',
                  corect: false,
                  explicatie: 'Nu sunt terminații de imperfect.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 64',
            },
            {
              intrebare: 'De ce apare imperfectul atât de des în descrieri?',
              variante: [
                {
                  text: 'Pentru că oprește acțiunea pe loc și lasă timp pentru amănunte',
                  corect: true,
                  explicatie: 'Perfectul compus împinge povestea înainte; imperfectul o ține pe loc.',
                },
                {
                  text: 'Pentru că e cel mai scurt timp verbal',
                  corect: false,
                  explicatie: 'Lungimea formelor nu are legătură.',
                },
                {
                  text: 'Pentru că nu are forme la plural',
                  corect: false,
                  explicatie: 'Are forme la toate persoanele și numerele.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 64',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-13/schema.svg', titlu: 'Imperfectul' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Verbul auxiliar a avea. Participiul. Perfectul compus',
      obiective: [
        'Recunoaște verbul auxiliar a avea, participiul și formarea perfectului compus.',
      ],
      sursaManual: 'Art 5, Lecția 13, p. 66',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Verbul auxiliar a avea. Participiul. Perfectul compus',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște verbul auxiliar a avea, participiul și formarea perfectului compus.',
        ],
        resurse: [
          'Manual Art 5, pp. 66-67',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-14/fisa-exercitii.pdf)',
          'Schema „Verbul auxiliar a avea. Participiul. Perfectul compus” (/materiale/clasa-5/unitatea-2/lectia-14/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Explorare”, ex. 1: șir de perechi față în față; un minut, fiecare îi prezintă celuilalt un joc învățat de curând; schimbăm perechile și repetăm.',
            elevi: '„Explorare”, ex. 1: stați în șir de perechi, față în față. Un minut: prezentați-i colegului un joc învățat de curând. Apoi schimbăm perechile și repetăm.',
          },
          {
            etapa: 'Dirijarea învățării: a avea și participiul',
            timp: '10 min',
            activitate: '– Ex. 2-6: un elev scrie pe tablă „Am învățat un joc nou.” și „Am un joc nou.” și subliniază predicatele; infinitivul, modul și timpul lor; formele comune ale lui a avea; ce parte de vorbire este „învățat” în „Jocul învățat este frumos”.\n– În caiete: verbul auxiliar și verbul predicativ; participiul; participiul folosit singur devine adjectiv.',
            elevi: 'Ex. 2-6: un elev scrie pe tablă „Am învățat un joc nou.” și „Am un joc nou.” și subliniază predicatele. Care sunt infinitivul, modul și timpul lor? Care sunt formele comune ale lui a avea? Ce parte de vorbire este „învățat” în „Jocul învățat este frumos”?\nÎn caiet: verbul auxiliar și verbul predicativ; participiul; participiul folosit singur devine adjectiv.',
            materiale: ['schema'],
          },
          {
            etapa: 'Dirijarea învățării: perfectul compus',
            timp: '8 min',
            activitate: '– Explorare, ex. 1-3: desenele cu ploaia (a început, au fugit, a rămas): acțiunea e încheiată? Ce formă verbală e scrisă cu verde?\n– În caiete: perfectul compus = am, ai, a, am, ați, au + participiu; e timpul povestirii în vorbirea de azi.',
            elevi: 'Explorare, ex. 1-3: desenele cu ploaia (a început, au fugit, a rămas): acțiunea este încheiată? Ce formă verbală este scrisă cu verde?\nÎn caiet: perfectul compus = am, ai, a, am, ați, au + participiu; este timpul povestirii în vorbirea de azi.',
            materiale: ['schema'],
          },
          {
            etapa: 'Aplicații',
            timp: '9 min',
            activitate: '– „Aplicații”, ex. 1 (gruparea pe timpuri), ex. 3 (valoare verbală sau nu), ex. 4 (a avea auxiliar sau predicativ), frontal.\n– Ex. 7, în perechi: unul dictează textul de la ex. 6 trecut la perfect compus, apoi corectează împreună.',
            elevi: '„Aplicații”:\nEx. 1 (gruparea pe timpuri), ex. 3 (valoare verbală sau nu), ex. 4 (a avea auxiliar sau predicativ), frontal.\nEx. 7, în perechi: unul dictează textul de la ex. 6 trecut la perfect compus, apoi corectați împreună.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (a avea), ex. 2 (participiul) și ex. 3 (formează perfectul compus), individual, 9 minute.\n– Verificare, 4 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 9 minute: ex. 1 (a avea), ex. 2 (participiul), ex. 3 (formează perfectul compus).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– „Deschideri”, oral: două propoziții care continuă povestea cu pisoiul (ex. 9), la perfect compus.\n– Tema: „Aplicații”, ex. 5, 6, 8 (ortogramele ia/i-a, iau/i-au, la/l-a, mai/m-ai, ne-am/neam) și 9; fișa de exerciții, pagina 2, ex. 4-5.',
            elevi: '„Deschideri”, oral: două propoziții care continuă povestea cu pisoiul (ex. 9), la perfect compus.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică; dictarea în perechi; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-14/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Perfectul compus',
          pasi: [
            {
              intrebare: 'Din ce se formează perfectul compus?',
              variante: [
                {
                  text: 'Din verbul auxiliar a avea și participiul verbului de bază',
                  corect: true,
                  explicatie: 'Am citit: am e auxiliarul, citit e participiul.',
                },
                {
                  text: 'Din verbul a fi și infinitiv',
                  corect: false,
                  explicatie: 'Aceea e o altă construcție, nu perfectul compus.',
                },
                {
                  text: 'Dintr-un singur cuvânt, ca imperfectul',
                  corect: false,
                  explicatie: 'Tocmai de aceea se numește compus: are două părți.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 66',
            },
            {
              intrebare: 'Care sunt formele auxiliarului a avea la perfectul compus?',
              variante: [
                {
                  text: 'am, ai, a, am, ați, au',
                  corect: true,
                  explicatie: 'Sunt forme scurte, deosebite de verbul a avea folosit singur.',
                },
                {
                  text: 'sunt, ești, este, suntem, sunteți, sunt',
                  corect: false,
                  explicatie: 'Acelea sunt formele verbului a fi.',
                },
                {
                  text: 'voi, vei, va, vom, veți, vor',
                  corect: false,
                  explicatie: 'Acelea sunt formele auxiliarului de viitor.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 66',
            },
            {
              intrebare: 'Ce este participiul?',
              variante: [
                {
                  text: 'O formă nepersonală a verbului, care intră în alcătuirea timpurilor compuse: citit, mers, scris',
                  corect: true,
                  explicatie: 'Participiul nu arată singur cine face acțiunea.',
                },
                {
                  text: 'Verbul la persoana a III-a plural',
                  corect: false,
                  explicatie: 'Aceea e o formă personală.',
                },
                {
                  text: 'Verbul precedat de „a”',
                  corect: false,
                  explicatie: 'Aceea e forma de infinitiv.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 66',
            },
            {
              intrebare: 'Care variantă e scrisă corect?',
              variante: [
                {
                  text: 'Ei au venit devreme.',
                  corect: true,
                  explicatie: 'Auxiliarul „au” se scrie într-un cuvânt, corect acordat cu subiectul la plural.',
                },
                {
                  text: 'Ei a-u venit devreme.',
                  corect: false,
                  explicatie: 'Auxiliarul nu se desparte niciodată cu cratimă.',
                },
                {
                  text: 'Ei a venit devreme.',
                  corect: false,
                  explicatie: 'Auxiliarul nu e acordat: la persoana a III-a plural se folosește „au”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 66',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-14/schema.svg', titlu: 'Verbul auxiliar a avea. Participiul. Perfectul compus' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Perfectul simplu și mai-mult-ca-perfectul',
      obiective: [
        'Recunoaște formele perfectului simplu și ale mai-mult-ca-perfectului și diferența de folosire față de perfectul compus.',
      ],
      sursaManual: 'Art 5, Lecția 14, p. 68',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Perfectul simplu și mai-mult-ca-perfectul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște formele perfectului simplu și ale mai-mult-ca-perfectului și diferența de folosire față de perfectul compus.',
        ],
        resurse: [
          'Manual Art 5, pp. 68-69',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-15/fisa-exercitii.pdf)',
          'Schema „Perfectul simplu și mai-mult-ca-perfectul” (/materiale/clasa-5/unitatea-2/lectia-15/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– Jocul „Povești amestecate” (p. 68), în cerc: încep cu fraza din manual (Scufița Roșie... îl întâlni în pădure pe Motanul Încălțat); fiecare adaugă o întâmplare; ultimul încheie povestea.',
            elevi: 'Jocul „Povești amestecate” (p. 68), în cerc: începem cu fraza din manual (Scufița Roșie... îl întâlni în pădure pe Motanul Încălțat). Fiecare adaugă o întâmplare; ultimul încheie povestea.',
          },
          {
            etapa: 'Dirijarea învățării: perfectul simplu',
            timp: '10 min',
            activitate: '– Ex. 2: plecă, întâlni: ce fel de acțiune arată?\n– Ex. 3: tabelul de conjugare: sunetele care arată timpul (-a-, -u-, -se-, -i-, -â-) și desinențele cu -ră- la plural.\n– Ex. 4 (normă): dorii, făgădui; ex. 5: perfectul simplu din Oltenia și Banat (o acțiune din ultimele 24 de ore).\n– În caiete, după Repere: perfectul simplu, timpul povestirii literare, la persoana a III-a; ortografia: dormii (eu), dormi (el), pustiii.',
            elevi: 'Ex. 2: plecă, întâlni: ce fel de acțiune arată?\nEx. 3: tabelul de conjugare: sunetele care arată timpul (-a-, -u-, -se-, -i-, -â-) și desinențele cu -ră- la plural.\nEx. 4 (normă): dorii, făgădui; ex. 5: perfectul simplu din Oltenia și Banat (o acțiune din ultimele 24 de ore).\nÎn caiet, după Repere și schema lecției: perfectul simplu, timpul povestirii literare, la persoana a III-a; ortografia: dormii (eu), dormi (el), pustiii.',
            materiale: ['schema'],
          },
          {
            etapa: 'Dirijarea învățării: mai-mult-ca-perfectul',
            timp: '9 min',
            activitate: '– Ex. 1-2: pregătise: când s-a petrecut față de celelalte acțiuni? E în prim-plan sau în plan secund?\n– Ex. 3-4: -se- după sunetul care arată perfectul simplu; ex. 5 (normă): trăseseși, rezistaserăți.\n– În caiete: greșelile frecvente (începuseși, nu începusei; -ră- la plural: plecaserăm).',
            elevi: 'Ex. 1-2: pregătise: când s-a petrecut față de celelalte acțiuni? Este în prim-plan sau în plan secund?\nEx. 3-4: -se- după sunetul care arată perfectul simplu; ex. 5 (normă): trăseseși, rezistaserăți.\nÎn caiet: greșelile frecvente (începuseși, nu începusei; -ră- la plural: plecaserăm).',
            materiale: ['schema'],
          },
          {
            etapa: 'Aplicații',
            timp: '6 min',
            activitate: '– „Aplicații”, ex. 1 (baloanele), ex. 2 și ex. 3 (corectarea replicii Mumei-Pădurii), la tablă.',
            elevi: '„Aplicații”, la tablă: ex. 1 (baloanele), ex. 2 și ex. 3 (corectarea replicii Mumei-Pădurii).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (ce timp este?), ex. 2 (scrie corect) și ex. 3 (din poveste, în vorbirea de azi), individual, 9 minute.\n– Verificare, 4 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 9 minute: ex. 1 (ce timp este?), ex. 2 (scrie corect), ex. 3 (din poveste, în vorbirea de azi).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: „Aplicații”, ex. 4 și 5; fișa de exerciții, pagina 2, ex. 4-5; „Deschideri” (secvențe din „Nea Mărin miliardar”; concursul de trei zile), facultativ.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-15/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Perfectul simplu și mai-mult-ca-perfectul',
          pasi: [
            {
              intrebare: 'Unde întâlnești cel mai des perfectul simplu, astăzi?',
              variante: [
                {
                  text: 'În textele literare, mai ales în povestiri, și în vorbirea din unele zone ale țării',
                  corect: true,
                  explicatie: 'În limba vorbită standard a fost înlocuit aproape complet de perfectul compus.',
                },
                {
                  text: 'În conversația de zi cu zi, peste tot în țară',
                  corect: false,
                  explicatie: 'În vorbirea curentă folosim aproape numai perfectul compus.',
                },
                {
                  text: 'Doar în manualele de matematică',
                  corect: false,
                  explicatie: 'Nu are legătură cu un anumit domeniu școlar.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 68',
            },
            {
              intrebare: 'Ce arată mai-mult-ca-perfectul?',
              variante: [
                {
                  text: 'O acțiune trecută, terminată înaintea altei acțiuni trecute',
                  corect: true,
                  explicatie: 'Plecase înainte să ajung eu: prima acțiune s-a încheiat înaintea celei de-a doua.',
                },
                {
                  text: 'O acțiune care se petrece chiar acum',
                  corect: false,
                  explicatie: 'Aceea e valoarea prezentului.',
                },
                {
                  text: 'O acțiune viitoare',
                  corect: false,
                  explicatie: 'Toate cele patru timpuri studiate în unitate sunt trecute, în afară de viitor.',
                },
              ],
              indiciu: 'Care acțiune s-a întâmplat mai devreme dintre cele două?',
              sursa: 'Manual Art 5, p. 68',
            },
            {
              intrebare: 'Care verb e la mai-mult-ca-perfect?',
              variante: [
                {
                  text: 'plecase',
                  corect: true,
                  explicatie: 'Terminația -se e marca mai-mult-ca-perfectului.',
                },
                {
                  text: 'plecă',
                  corect: false,
                  explicatie: 'Plecă e perfect simplu.',
                },
                {
                  text: 'a plecat',
                  corect: false,
                  explicatie: 'A plecat e perfect compus.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 68',
            },
            {
              intrebare: 'De ce folosesc scriitorii perfectul simplu în povestiri?',
              variante: [
                {
                  text: 'Pentru că dă un ritm alert acțiunii și sună a povestire',
                  corect: true,
                  explicatie: 'Formele scurte împing narațiunea înainte, faptă după faptă.',
                },
                {
                  text: 'Pentru că e singurul timp corect gramatical',
                  corect: false,
                  explicatie: 'Toate timpurile trecute sunt corecte; diferă efectul.',
                },
                {
                  text: 'Pentru că se scrie mai ușor',
                  corect: false,
                  explicatie: 'Ușurința scrierii nu e un motiv stilistic.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 68',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-15/schema.svg', titlu: 'Perfectul simplu și mai-mult-ca-perfectul' },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Viitorul. Verbele auxiliare a vrea și a fi',
      obiective: [
        'Recunoaște timpul viitor și verbele auxiliare a vrea și a fi, folosite la formarea lui.',
      ],
      sursaManual: 'Art 5, Lecția 15, p. 70',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Viitorul. Verbele auxiliare a vrea și a fi',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște timpul viitor și verbele auxiliare a vrea și a fi, folosite la formarea lui.',
        ],
        resurse: [
          'Manual Art 5, pp. 70-71',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-16/fisa-exercitii.pdf)',
          'Schema „Viitorul. Verbele auxiliare a vrea și a fi” (/materiale/clasa-5/unitatea-2/lectia-16/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Fiecare elev trage pe tablă un verb la infinitiv (jocul „Verbele la viitor”), îl trece la viitor și spune forma; răspunsul se arată la cerere.',
            elevi: 'Veniți la tablă și trageți un verb la infinitiv. Treceți-l la viitor și spuneți forma.',
            joc: {
              tip: 'extragere',
              titlu: 'Verbele la viitor',
              instructiune: 'Treci verbul tras la viitor și spune forma.',
              buton: 'Trage un verb',
              faraRepetare: false,
              elemente: [
                {
                  text: 'a cânta',
                  raspuns: 'voi cânta  ·  o să cânt  ·  am să cânt',
                },
                {
                  text: 'a citi',
                  raspuns: 'voi citi  ·  o să citesc  ·  am să citesc',
                },
                {
                  text: 'a scrie',
                  raspuns: 'voi scrie  ·  o să scriu  ·  am să scriu',
                },
                {
                  text: 'a desena',
                  raspuns: 'voi desena  ·  o să desenez  ·  am să desenez',
                },
                {
                  text: 'a merge',
                  raspuns: 'voi merge  ·  o să merg  ·  am să merg',
                },
                {
                  text: 'a dormi',
                  raspuns: 'voi dormi  ·  o să dorm  ·  am să dorm',
                },
                {
                  text: 'a alerga',
                  raspuns: 'voi alerga  ·  o să alerg  ·  am să alerg',
                },
                {
                  text: 'a învăța',
                  raspuns: 'voi învăța  ·  o să învăț  ·  am să învăț',
                },
                {
                  text: 'a juca',
                  raspuns: 'voi juca  ·  o să joc  ·  am să joc',
                },
                {
                  text: 'a vedea',
                  raspuns: 'voi vedea  ·  o să văd  ·  am să văd',
                },
                {
                  text: 'a spune',
                  raspuns: 'voi spune  ·  o să spun  ·  am să spun',
                },
                {
                  text: 'a face',
                  raspuns: 'voi face  ·  o să fac  ·  am să fac',
                },
              ],
              sursa: 'Plan de lecție (Manual Art 5, pp. 70-71); verbele sunt alese pentru OraRO',
            },
          },
          {
            etapa: 'Dirijarea învățării: viitorul și a vrea',
            timp: '9 min',
            activitate: '– „Explorare”, p. 70, ex. 1-5: verbele din anunțul ilustrat; momentul acțiunii; predicatul din replica fetei (vor, de la a vrea); a vrea în „vor participa”: predicativ sau auxiliar?; ce urmează după voi, vei, va...: infinitivul.\n– Ex. 6: „sta-vom” la Eminescu (forma inversă).\n– În caiete: viitorul = a vrea + infinitiv; formele inverse din limba veche.',
            elevi: '„Explorare”, p. 70, ex. 1-5: verbele din anunțul ilustrat; momentul acțiunii; predicatul din replica fetei (vor, de la a vrea); a vrea în „vor participa”: predicativ sau auxiliar? Ce urmează după voi, vei, va...?\nEx. 6: „sta-vom” la Eminescu (forma inversă).\nÎn caiet: viitorul = a vrea + infinitiv; formele inverse din limba veche.',
            materiale: ['schema'],
          },
          {
            etapa: 'Dirijarea învățării: limba standard și alte forme',
            timp: '9 min',
            activitate: '– Ex. 1-2: „Voi merge” și „Am să merg”: când folosim fiecare formă? Comparăm tabelele.\n– În caiete: limba standard; viitorul standard, cele două forme de limbă vorbită (o să cânt, am să cânt), toate literare; viitorul popular (oi cânta).',
            elevi: 'Ex. 1-2: „Voi merge” și „Am să merg”: când folosim fiecare formă? Comparăm tabelele.\nÎn caiet: limba standard; viitorul standard, cele două forme de limbă vorbită (o să cânt, am să cânt), toate literare; viitorul popular (oi cânta).',
            materiale: ['schema'],
          },
          {
            etapa: 'Dirijarea învățării: viitorul anterior',
            timp: '5 min',
            activitate: '– Ex. 1-2: „vei fi câștigat”: ce exprimă și din ce e alcătuit.\n– În caiete: a vrea + a fi + participiu; apare rar, împreună cu un viitor (Când vei sosi, voi fi terminat compunerea.).',
            elevi: 'Ex. 1-2: „vei fi câștigat”: ce exprimă și din ce este alcătuit?\nÎn caiet: a vrea + a fi + participiu; apare rar, împreună cu un viitor (Când vei sosi, voi fi terminat compunerea.).',
            materiale: ['schema'],
          },
          {
            etapa: 'Aplicații',
            timp: '6 min',
            activitate: '– „Aplicații”, ex. 1 (forme de scris și forme orale) și ex. 2 (corectarea formelor), frontal.',
            elevi: '„Aplicații”, frontal: ex. 1 (forme de scris și forme orale) și ex. 2 (corectarea formelor).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (ce fel de viitor?), ex. 2 (forma corectă) și ex. 3 (în viitor standard), individual, 9 minute.\n– Verificare, 4 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 9 minute: ex. 1 (ce fel de viitor?), ex. 2 (forma corectă), ex. 3 (în viitor standard).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Aplicații”, ex. 3 (ortogramele voi/v-oi, va/v-a, vom/v-om, vor/v-or), 5 și 7; „Deschideri” (verbele la viitor din rubrica meteo); fișa de exerciții, pagina 2.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-16/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Viitorul',
          pasi: [
            {
              intrebare: 'Cu ce auxiliar se formează viitorul literar?',
              variante: [
                {
                  text: 'Cu formele voi, vei, va, vom, veți, vor',
                  corect: true,
                  explicatie: 'Voi citi, vei citi, va citi: auxiliarul provine din verbul a vrea.',
                },
                {
                  text: 'Cu formele am, ai, a, am, ați, au',
                  corect: false,
                  explicatie: 'Acelea formează perfectul compus.',
                },
                {
                  text: 'Cu formele sunt, ești, este',
                  corect: false,
                  explicatie: 'Acelea sunt formele verbului a fi la prezent.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 70',
            },
            {
              intrebare: 'Care dintre acestea e o formă de viitor popular, folosită în vorbire?',
              variante: [
                {
                  text: 'o să merg',
                  corect: true,
                  explicatie: 'Forma cu „o să” e foarte răspândită în vorbirea curentă.',
                },
                {
                  text: 'am mers',
                  corect: false,
                  explicatie: 'E perfect compus, o acțiune trecută.',
                },
                {
                  text: 'mergeam',
                  corect: false,
                  explicatie: 'E imperfect, tot acțiune trecută.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 70',
            },
            {
              intrebare: 'Care variantă e scrisă corect?',
              variante: [
                {
                  text: 'Mâine voi citi o carte.',
                  corect: true,
                  explicatie: 'Auxiliarul se scrie separat de verbul de bază, fără cratimă.',
                },
                {
                  text: 'Mâine voi-citi o carte.',
                  corect: false,
                  explicatie: 'Cratima nu are ce căuta între auxiliar și verb.',
                },
                {
                  text: 'Mâine voicit o carte.',
                  corect: false,
                  explicatie: 'Cele două cuvinte nu se scriu legat.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 70',
            },
            {
              intrebare: 'Poate prezentul să exprime o acțiune viitoare?',
              variante: [
                {
                  text: 'Da, când în propoziție apare un reper de timp viitor: mâine plec la munte',
                  corect: true,
                  explicatie: 'Contextul, nu forma verbului, arată că e vorba de viitor.',
                },
                {
                  text: 'Nu, niciodată',
                  corect: false,
                  explicatie: 'Se întâmplă des în vorbirea curentă.',
                },
                {
                  text: 'Doar la persoana I',
                  corect: false,
                  explicatie: 'Funcționează la toate persoanele.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 70',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-16/schema.svg', titlu: 'Viitorul. Verbele auxiliare a vrea și a fi' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Modul imperativ',
      obiective: [
        'Recunoaște modul imperativ, formele afirmative și negative, cu respectarea normelor de ortografie.',
      ],
      sursaManual: 'Art 5, Lecția 16, p. 72',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modul imperativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște modul imperativ, formele afirmative și negative, cu respectarea normelor de ortografie.',
        ],
        resurse: [
          'Manual Art 5, pp. 72-73',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-17/fisa-exercitii.pdf)',
          'Schema „Modul imperativ” (/materiale/clasa-5/unitatea-2/lectia-17/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Comenzi, cu elevii în picioare: Ridicați mâinile! Coborâți-le! Faceți un pas la dreapta! Aplaudați! Ce arată verbele după care v-ați mișcat?',
            elevi: 'Comenzi, în picioare: Ridicați mâinile! Coborâți-le! Faceți un pas la dreapta! Aplaudați!\nCe arată verbele după care v-ați mișcat?',
          },
          {
            etapa: 'Dirijarea învățării: imperativul',
            timp: '12 min',
            activitate: '– „Explorare”, p. 72, ex. 1-4: verbele de pe eticheta de spălare; ce acțiuni arată; persoana și numărul; formele negative și din ce sunt alcătuite.\n– Ex. 5: desinențele (roșu) și sunetele care arată modul (verde).\n– Ex. 6 (normă): Refă, Du, Zi, Fii.\n– În caiete, după Repere: imperativul (ordin, îndemn, sfat, rugăminte); doar persoana a II-a; fără timp; negativul (Nu cânta! / Nu cântați!); formele speciale (vino, fă, du, zi, adu); fii, dar nu fi.',
            elevi: '„Explorare”, p. 72, ex. 1-4: verbele de pe eticheta de spălare; ce acțiuni arată; persoana și numărul; formele negative și din ce sunt alcătuite.\nEx. 5: desinențele (roșu) și sunetele care arată modul (verde).\nEx. 6 (normă): Refă, Du, Zi, Fii.\nÎn caiet, după Repere: imperativul (ordin, îndemn, sfat, rugăminte); doar persoana a II-a; fără timp; negativul (Nu cânta! / Nu cântați!); formele speciale (vino, fă, du, zi, adu); fii, dar nu fi.',
            materiale: ['schema'],
          },
          {
            etapa: 'Jocul Bingo',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 1: cartonașul (a căra, a culege, a privi, a râde; singular și plural) se joacă frontal, pe tablă: se trage o căsuță, un elev spune imperativul, clasa confirmă, apoi arăt răspunsul; când ies cele 8 căsuțe, clasa strigă „Bingo!”.',
            elevi: 'Jocul Bingo, „Aplicații”, ex. 1: clasa completează împreună cartonașul. Trageți o căsuță (verbul și numărul), spuneți imperativul, iar clasa confirmă. Când ies cele 8 căsuțe, strigăm „Bingo!”.',
            joc: {
              tip: 'extragere',
              titlu: 'Bingo la imperativ',
              instructiune: 'Imperativ, persoana a II-a, forma afirmativă. Un elev spune forma, clasa confirmă.',
              buton: 'Trage o căsuță',
              faraRepetare: true,
              elemente: [
                {
                  eticheta: 'a căra',
                  text: 'a căra, singular',
                  raspuns: 'Cară!',
                },
                {
                  eticheta: 'a căra',
                  text: 'a căra, plural',
                  raspuns: 'Cărați!',
                },
                {
                  eticheta: 'a culege',
                  text: 'a culege, singular',
                  raspuns: 'Culege!',
                },
                {
                  eticheta: 'a culege',
                  text: 'a culege, plural',
                  raspuns: 'Culegeți!',
                },
                {
                  eticheta: 'a privi',
                  text: 'a privi, singular',
                  raspuns: 'Privește!',
                },
                {
                  eticheta: 'a privi',
                  text: 'a privi, plural',
                  raspuns: 'Priviți!',
                },
                {
                  eticheta: 'a râde',
                  text: 'a râde, singular',
                  raspuns: 'Râzi!',
                },
                {
                  eticheta: 'a râde',
                  text: 'a râde, plural',
                  raspuns: 'Râdeți!',
                },
              ],
              sursa: 'Manual Art 5, p. 73, „Aplicații”, ex. 1 (cartonașul cu opt căsuțe)',
            },
          },
          {
            etapa: 'Aplicații frontale',
            timp: '6 min',
            activitate: '– Ex. 2, 3 și 5, la tablă; ex. 4: „Scrieți tema!” și „Scrie-ți tema!”: de ce se scriu diferit?',
            elevi: 'Ex. 2, 3 și 5, la tablă.\nEx. 4: „Scrieți tema!” și „Scrie-ți tema!”: de ce se scriu diferit?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (întoarce porunca), ex. 2 (forma corectă) și ex. 3 (comenzi pentru un robot), individual, 9 minute.\n– Verificare, 4 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 9 minute: ex. 1 (întoarce porunca), ex. 2 (forma corectă), ex. 3 (comenzi pentru un robot).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Autoevaluare și temă',
            timp: '6 min',
            activitate: '– Autoevaluare L10-L16 (verbul): cele trei afirmații, în caiet; le folosesc la recapitulare.\n– Tema: „Aplicații”, ex. 6-7 (verbele la imperativ din rețetă și analiza a cinci dintre ele); „Deschideri” (regulile jocului preferat, pentru ludoteca clasei); fișa de exerciții, pagina 2, ex. 4-5; minitestul, facultativ.',
            elevi: 'Autoevaluare L10-L16 (verbul): completați în caiet cele trei afirmații; le folosim la recapitulare.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Jocul Bingo; autoevaluarea L10-L16; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-17/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Modul imperativ',
          pasi: [
            {
              intrebare: 'Ce exprimă modul imperativ?',
              variante: [
                {
                  text: 'O poruncă, un îndemn, o rugăminte, adresate direct cuiva',
                  corect: true,
                  explicatie: 'Imperativul se adresează întotdeauna interlocutorului.',
                },
                {
                  text: 'O acțiune sigură, petrecută în trecut',
                  corect: false,
                  explicatie: 'Aceea e zona indicativului.',
                },
                {
                  text: 'O acțiune care se repeta odinioară',
                  corect: false,
                  explicatie: 'Aceea e valoarea imperfectului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 72',
            },
            {
              intrebare: 'Care e forma corectă de imperativ negativ, persoana a II-a singular, pentru verbul „a face”?',
              variante: [
                {
                  text: 'nu face',
                  corect: true,
                  explicatie: 'La negativ, persoana a II-a singular folosește forma de infinitiv, nu cea afirmativă.',
                },
                {
                  text: 'nu fă',
                  corect: false,
                  explicatie: 'Fă e forma afirmativă; la negativ e greșită.',
                },
                {
                  text: 'nu faci',
                  corect: false,
                  explicatie: 'Faci e prezent indicativ, nu imperativ.',
                },
              ],
              indiciu: 'Compară: „Fă asta!” față de „Nu ... asta!”. Ce se schimbă?',
              sursa: 'Manual Art 5, p. 72',
            },
            {
              intrebare: 'Ce semn de punctuație însoțește de obicei un enunț la imperativ?',
              variante: [
                {
                  text: 'Semnul exclamării',
                  corect: true,
                  explicatie: 'Îndemnul sau porunca se marchează, de regulă, prin semnul exclamării.',
                },
                {
                  text: 'Semnul întrebării',
                  corect: false,
                  explicatie: 'Acela marchează o întrebare, nu un îndemn.',
                },
                {
                  text: 'Două puncte',
                  corect: false,
                  explicatie: 'Două puncte anunță o enumerare sau o explicație.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 72',
            },
            {
              intrebare: 'Unde întâlnești cel mai des imperativul, în afara școlii?',
              variante: [
                {
                  text: 'În rețete, instrucțiuni și reguli de joc: amestecă, taie, aruncă zarul',
                  corect: true,
                  explicatie: 'Orice text care îți spune ce să faci folosește imperativul.',
                },
                {
                  text: 'În texte care descriu un peisaj',
                  corect: false,
                  explicatie: 'Descrierile nu se adresează direct cititorului cu îndemnuri.',
                },
                {
                  text: 'Doar în poezii',
                  corect: false,
                  explicatie: 'Apare în poezii, dar mult mai des în texte practice.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 72',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-17/schema.svg', titlu: 'Modul imperativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Textul narativ ficțional (I), pregătire',
      obiective: [
        'Recunoaște trăsăturile textului narativ ficțional, pe baza unui text-stimul.',
      ],
      sursaManual: 'Art 5, Lecția 17, p. 74, partea 1/2 (Textul narativ ficțional, pregătire)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ ficțional (I), pregătire',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Recunoaște trăsăturile textului narativ ficțional, pe baza unui text-stimul.',
        ],
        resurse: [
          'Manual Art 5, p. 74',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-18/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-18/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Brainstorming',
            timp: '7 min',
            activitate: '– „Pentru început”, p. 74, ex. 1: fiecare completează întrebarea „Ce s-ar întâmpla dacă, într-o zi...?”; le notez pe tablă (dau și eu idei: ai rămâne fără telefon pe o insulă, te-ai întâlni cu un extraterestru...).\n– Ex. 2: votăm cele mai interesante întrebări.',
            elevi: '„Pentru început”, p. 74:\nEx. 1: completați întrebarea „Ce s-ar întâmpla dacă, într-o zi...?” (de exemplu: ai rămâne fără telefon pe o insulă, te-ai întâlni cu un extraterestru...).\nEx. 2: votăm cele mai interesante întrebări.',
          },
          {
            etapa: 'Lectura textului',
            timp: '8 min',
            activitate: '– Citesc cu voce tare povestea „Cea mai mare dorință” de Cornelia Funke (adaptare, p. 74).',
            elevi: 'Ascultați povestea „Cea mai mare dorință” de Cornelia Funke (adaptare, p. 74) și urmăriți-o în manual.',
          },
          {
            etapa: 'Discuție pe grupe',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 2, în grupe de 4-5: personajele și trăsăturile lor; ce declanșează acțiunea; cum se desfășoară; situația finală; e o întâmplare reală sau imaginară?\n– Pun aceleași întrebări fiecărei grupe și comparăm concluziile.',
            elevi: '„Explorare”, ex. 2, în grupe de 4-5: personajele și trăsăturile lor; ce declanșează acțiunea; cum se desfășoară; situația finală; este o întâmplare reală sau imaginară? Comparăm concluziile grupelor.',
          },
          {
            etapa: 'Dirijarea învățării: textul narativ ficțional',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 75): textul narativ ficțional (situație inițială de echilibru, complicații, nouă echilibrare); pașii scrierii (plan, prima variantă, revizuire, editare); prezentarea textului (titlul la mijloc, alineat, scris lizibil).\n– Timpurile potrivite: imperfectul pentru cadru, perfectul compus sau prezentul pentru întâmplări, mai-mult-ca-perfectul pentru ce se petrecuse înainte.',
            elevi: 'În caiet, după Repere (p. 75): textul narativ ficțional (situație inițială de echilibru, complicații, nouă echilibrare); pașii scrierii (plan, prima variantă, revizuire, editare); prezentarea textului (titlul la mijloc, alineat, scris lizibil).\nTimpurile potrivite: imperfectul pentru cadru, perfectul compus sau prezentul pentru întâmplări, mai-mult-ca-perfectul pentru ce se petrecuse înainte.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (povestea lui Hannes, în ordine), ex. 2 (timpul potrivit fiecărei secvențe) și ex. 3 (cuvinte care rup echilibrul), individual, 8 minute.\n– Verificare, 4 minute.',
            elevi: 'Fișa de exerciții, pagina 1, individual, 8 minute: ex. 1 (povestea lui Hannes, în ordine), ex. 2 (timpul potrivit fiecărei secvențe), ex. 3 (cuvinte care rup echilibrul).\nApoi verificăm, 4 minute.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Reflecție și temă',
            timp: '5 min',
            activitate: '– Întreb: „Ce ați aflat despre cum se construiește un text narativ ficțional? Ce nu știți încă?”\n– Tema: fișa lecției (personaj, loc, ce vrea, obstacol) pentru povestea proprie, pornind de la „Ce s-ar întâmpla dacă ți s-ar îndeplini cea mai mare dorință?”; fișa de exerciții, pagina 2.',
            elevi: 'Ce ați aflat despre cum se construiește un text narativ ficțional? Ce nu știți încă?',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea discuției pe grupe; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-18/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-2/lectia-18/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-2/lectia-18/schema.svg',
          titlu: 'Momentele unei povestiri',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Textul narativ ficțional (II), redactare',
      obiective: [
        'Redactează un text narativ ficțional, cu respectarea etapelor scrierii și a planului unei compuneri.',
      ],
      sursaManual: 'Art 5, Lecția 17, p. 75, partea 2/2 (Textul narativ ficțional, redactare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ ficțional (II), redactare',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează un text narativ ficțional, cu respectarea etapelor scrierii și a planului unei compuneri.',
        ],
        resurse: [
          'Manual Art 5, p. 75',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-19/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-19/fisa.pdf)',
          'Planul realizat la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Reactualizarea',
            timp: '4 min',
            activitate: '– Doi-trei elevi citesc ideea de poveste și obstacolul notate acasă în fișa lecției.',
            elevi: 'Doi-trei dintre voi citesc ideea de poveste și obstacolul notate acasă în fișa lecției.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Exersare: fișa de exerciții',
            timp: '8 min',
            activitate: '– Pagina 1: ex. 1 (revizuiește textul cu „Și apoi”), individual, 5 minute; verificare, 3 minute: ce am schimbat și de ce (repetiția, vroia → voia).',
            elevi: 'Fișa de exerciții, pagina 1, ex. 1 (revizuiește textul cu „Și apoi”), individual, 5 minute.\nApoi verificăm, 3 minute: ce am schimbat și de ce.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Planul',
            timp: '10 min',
            activitate: '– „Aplicații”, ex. 1: fiecare scrie planul după schemă: situația inițială (cadrul, personajele, cel puțin un imperfect); momentul care rupe echilibrul („Deodată...”, „Brusc...”); întâmplările (perfect compus sau prezent); situația finală.',
            elevi: '„Aplicații”, ex. 1: scrieți planul după schemă:\nsituația inițială (cadrul, personajele, cel puțin un imperfect);\nmomentul care rupe echilibrul („Deodată...”, „Brusc...”);\nîntâmplările (perfect compus sau prezent);\nsituația finală.',
          },
          {
            etapa: 'Feedback pe plan',
            timp: '5 min',
            activitate: '– Ex. 2: schimb de planuri cu colegul de bancă; fiecare dă o sugestie ca povestea să fie mai captivantă.',
            elevi: 'Ex. 2: schimbați planul cu colegul de bancă. Fiecare dă o sugestie ca povestea să fie mai captivantă.',
          },
          {
            etapa: 'Redactarea',
            timp: '18 min',
            activitate: '– Ex. 3: fiecare scrie povestirea, pe fișa lecției (ciorna), după planul îmbunătățit.\n– Trec printre bănci, încurajez și notez observații (poate face planul, poate da feedback, textul e coerent și captivant).',
            elevi: 'Ex. 3: scrieți povestirea, pe fișa lecției (ciorna), după planul îmbunătățit.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Autoevaluare și temă',
            timp: '5 min',
            activitate: '– Fiecare își evaluează textul cu grila de la p. 75 (Da/Nu).\n– Tema: forma finală, pe pagina a doua a fișei lecției; fișa de exerciții, ex. 2-4. Strâng textele și dau feedback ora viitoare.',
            elevi: 'Evaluați-vă textul cu grila de la p. 75 (Da/Nu).',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Grila de autoevaluare (p. 75); observațiile profesorului în timpul redactării; textul final.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-19/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-2/lectia-19/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Prezentarea proiectului individual Jocuri fără vârstă',
      obiective: [
        'Prezintă și evaluează proiectul individual Jocuri fără vârstă, conform criteriilor stabilite.',
      ],
      sursaManual: 'Art 5, Proiect individual, p. 55 (prezentare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului individual Jocuri fără vârstă',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Prezintă și evaluează proiectul individual Jocuri fără vârstă, conform criteriilor stabilite.',
        ],
        resurse: [
          'Manual Art 5, p. 55',
          'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-2/lectia-20/fisa.pdf)',
          'Produsele proiectelor elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Pregătirea prezentărilor',
            timp: '4 min',
            activitate: '– Tragem la sorți ordinea; cronometrul pe tablă (cel mult 3 minute de prezentare); reamintesc regulile de acces la cuvânt pentru întrebări.',
            elevi: 'Tragem la sorți ordinea. Fiecare are cel mult 3 minute de prezentare.\nPentru întrebări respectăm regulile de acces la cuvânt.',
          },
          {
            etapa: 'Prezentările',
            timp: '38 min',
            activitate: '– Fiecare elev își prezintă posterul (3 minute), apoi răspunde la una-două întrebări ale colegilor (1 minut).\n– Completez grila din fișa proiectului pentru fiecare.\n– Într-o oră încap cam nouă-zece prezentări; ceilalți continuă ora viitoare.',
            elevi: 'Fiecare își prezintă posterul (3 minute), apoi răspunde la una-două întrebări ale colegilor (1 minut).',
          },
          {
            etapa: 'Autoevaluare',
            timp: '5 min',
            activitate: '– Cei care au prezentat completează autoevaluarea de la p. 55; ceilalți notează ce le-a plăcut la o prezentare și de ce.',
            elevi: 'Cei care au prezentat completează autoevaluarea de la p. 55; ceilalți notează ce le-a plăcut la o prezentare și de ce.',
          },
          {
            etapa: 'Încheiere',
            timp: '3 min',
            activitate: '– Spun ce a mers bine în general; anunț cine prezintă data viitoare; afișăm posterele în clasă.',
            elevi: 'Aflăm cine prezintă data viitoare. Afișăm posterele în clasă.',
          },
        ],
        evaluare: 'Grila de evaluare a proiectului; autoevaluarea elevilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-20/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: timp, spațiu, acțiune, planul dezvoltat de idei.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 76-77, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: timp, spațiu, acțiune, planul dezvoltat de idei.',
        ],
        resurse: [
          'Manual Art 5, pp. 76-77',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-21/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Predicții pornind de la titlu',
            timp: '6 min',
            activitate: '– Ex. 1: ce credeți că se întâmplă într-un text intitulat „Joaca cu bastonul”?\n– Elevii desenează în caiet tabelul predicțiilor: predicția, pe ce mă bazez, textul o confirmă?',
            elevi: 'Ex. 1: ce credeți că se întâmplă într-un text intitulat „Joaca cu bastonul”?\nDesenați în caiet tabelul predicțiilor: predicția, pe ce mă bazez, textul o confirmă?',
          },
          {
            etapa: 'Primul fragment',
            timp: '8 min',
            activitate: '– Ex. 2: citesc eu primul fragment, apoi elevii îl recitesc în gând.\n– Ex. 3-6: ideea principală; situația inițială și ce o modifică; personajele; cine va fi personajul principal și pe ce vă bazați.',
            elevi: 'Ex. 2: ascultați primul fragment, apoi recitiți-l în gând.\nEx. 3-6: ideea principală; situația inițială și ce o modifică; personajele; cine va fi personajul principal și pe ce vă bazați.',
          },
          {
            etapa: 'Al doilea fragment',
            timp: '10 min',
            activitate: '– Ex. 7: fiecare notează ce crede că urmează, apoi citim fragmentul.\n– Înainte de fiecare transformare, întreb: „În ce se va mai preface bastonul?”\n– Ex. 8-10: ce predicții s-au confirmat; secvența din care reiese curajul lui Claudio; completarea spațiilor.',
            elevi: 'Ex. 7: notați ce credeți că urmează, apoi citim fragmentul.\nÎn ce se va mai preface bastonul?\nEx. 8-10: ce predicții s-au confirmat; secvența din care reiese curajul lui Claudio; completarea spațiilor.',
          },
          {
            etapa: 'Finalul',
            timp: '8 min',
            activitate: '– Ex. 11: predicția despre final, apoi citim finalul.\n– Ex. 12-14: ce detalii v-au scăpat; ar fi fost mai bine să răspundă la întrebare?; ce părere aveți despre bătrân?\n– Ex. 15: două perechi joacă o continuare a dialogului dintre bătrân și Claudio; clasa observă rolul, claritatea, politețea.',
            elevi: 'Ex. 11: predicția despre final, apoi citim finalul.\nEx. 12-14: ce detalii v-au scăpat? Ar fi fost mai bine să răspundă la întrebare? Ce părere aveți despre bătrân?\nEx. 15: două perechi joacă o continuare a dialogului dintre bătrân și Claudio; clasa observă rolul, claritatea, politețea.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții, pe un text nou',
            timp: '13 min',
            activitate: '– Textul „Umbrela bunicii”: pagina 1, ex. 1-3, individual, 9 minute.\n– Verificare, 4 minute. Dacă rămâne timp: quizul lecției.',
            elevi: 'Fișa de exerciții, textul „Umbrela bunicii”, pagina 1, ex. 1-3, individual, 9 minute.\nApoi verificăm, 4 minute.\nDacă rămâne timp: jucăm quizul lecției.',
            materiale: ['fisa', 'joc'],
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: ex. 21 (planul dezvoltat al textului „Joaca cu bastonul”); fișa de exerciții, pagina 2, ex. 4-6.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Tabelul predicțiilor; observarea jocului de rol; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-21/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce arată reperele temporale și spațiale ale acțiunii, într-un text narativ?',
              variante: [
                { text: 'Când și unde se petrec întâmplările', corect: true, explicatie: 'Reperele temporale și spațiale situează acțiunea în timp și în spațiu.' },
                { text: 'Cine sunt personajele', corect: false, explicatie: 'Personajele se identifică separat, nu prin reperele de timp și spațiu.' },
                { text: 'Care e tema textului', corect: false, explicatie: 'Tema e altă componentă a textului, nu ține de timp și spațiu.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 2, p. 45',
            },
            {
              intrebare: 'Ce este planul dezvoltat de idei?',
              variante: [
                { text: 'O listă mai detaliată a ideilor principale și secundare ale textului', corect: true, explicatie: 'Spre deosebire de planul simplu, planul dezvoltat adaugă și ideile secundare.' },
                { text: 'Un rezumat scurt, de o singură propoziție', corect: false, explicatie: 'Planul dezvoltat e mai amplu decât un rezumat de o propoziție.' },
                { text: 'Titlul textului', corect: false, explicatie: 'Titlul nu are legătură cu planul de idei.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 3, p. 47',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-2/lectia-21/schema.svg',
          titlu: 'Ce am învățat despre lectură în Unitatea II',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, modurile și timpurile învățate.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 76-77, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, modurile și timpurile învățate.',
        ],
        resurse: [
          'Manual Art 5, pp. 76-77',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-22/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Fiecare elev numește un mod sau un timp învățat în unitate și dă un exemplu.',
            elevi: 'Numiți un mod sau un timp învățat în unitate și dați un exemplu.',
          },
          {
            etapa: 'Rezolvare ghidată, ex. 16-21',
            timp: '15 min',
            activitate: '– Ex. 16 (verbele și modul, timpul lor), ex. 17 (din perfect simplu în perfect compus), ex. 18 (viitorul), ex. 19 (timpurile din textul despre pălăria fermecată), ex. 20 (imperativele corecte), la tablă și în caiete.\n– Ex. 21: doi elevi citesc planul dezvoltat făcut acasă; ceilalți verifică după lista de control de la p. 47.',
            elevi: 'Rezolvare ghidată, la tablă și în caiete:\nEx. 16: verbele și modul, timpul lor.\nEx. 17: din perfect simplu în perfect compus.\nEx. 18: viitorul.\nEx. 19: timpurile din textul despre pălăria fermecată.\nEx. 20: imperativele corecte.\nEx. 21: doi dintre voi citesc planul dezvoltat făcut acasă; ceilalți verifică după lista de control de la p. 47.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1-4, individual, 10 minute.\n– Verificare, 5 minute. Dacă rămâne timp: quizul lecției.',
            elevi: 'Fișa de exerciții, pagina 1, ex. 1-4, individual, 10 minute.\nApoi verificăm, 5 minute.\nDacă rămâne timp: jucăm quizul lecției.',
            materiale: ['fisa', 'joc'],
          },
          {
            etapa: 'Pregătirea compunerii',
            timp: '12 min',
            activitate: '– Ex. 22: povestea cu un obiect vrăjit. Fiecare face planul: înainte de a primi obiectul, după ce l-a primit, cum s-a încheiat aventura.\n– Fișa de exerciții, pagina 2, ex. 6: fiecare scrie începutul (situația inițială, la imperfect, și momentul cu „Deodată”); doi-trei elevi citesc.',
            elevi: 'Ex. 22: povestea cu un obiect vrăjit. Faceți planul: înainte de a primi obiectul, după ce l-ați primit, cum s-a încheiat aventura.\nFișa de exerciții, pagina 2, ex. 6: scrieți începutul (situația inițială, la imperfect, și momentul cu „Deodată”). Doi-trei citesc.',
            materiale: ['fisa'],
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: textul de la ex. 22, verificat cu grila de la p. 75; fișa de exerciții, pagina 2, ex. 5. Anunț evaluarea de ora viitoare.',
            elevi: 'Ora viitoare avem evaluare.',
            materiale: ['fisa'],
          },
        ],
        evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-4; textul de la ex. 22, evaluat cu grila de la p. 75.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-2/lectia-22/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Care e diferența dintre perfectul compus și perfectul simplu?',
              variante: [
                { text: 'Perfectul compus se folosește în limba vorbită, perfectul simplu doar în literatură', corect: true, explicatie: 'Perfectul simplu a dispărut din limba vorbită, fiind folosit azi doar în naratiunea literară.' },
                { text: 'Sunt exact același timp, doar denumiri diferite', corect: false, explicatie: 'Sunt timpuri diferite, cu forme și folosiri diferite.' },
                { text: 'Perfectul simplu arată o acțiune viitoare', corect: false, explicatie: 'Ambele timpuri arată acțiuni trecute, nu viitoare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 14, p. 68',
            },
            {
              intrebare: 'Modul imperativ exprimă...',
              variante: [
                { text: 'o poruncă, un îndemn sau o rugăminte', corect: true, explicatie: 'Imperativul se adresează direct interlocutorului, cerându-i ceva.' },
                { text: 'o acțiune sigură, din trecut', corect: false, explicatie: 'Acțiunile sigure din trecut aparțin modului indicativ.' },
                { text: 'o acțiune posibilă, condiționată', corect: false, explicatie: 'Aceasta e mai degrabă zona modului condițional-optativ, învățat mai târziu.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 16, p. 72',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-2/lectia-22/schema.svg',
          titlu: 'Timpurile verbului, toate la un loc',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-23',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea II.',
      ],
      sursaManual: 'Art 5, Evaluare, p. 78',
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
          'Testul tipărit, varianta A: Manual Art 5, p. 78',
          'Barem de corectare, varianta A: Ghidul profesorului',
          'Testul tipărit, varianta B: text original, o pagină A4 (Drive, privat)',
          'Barem de corectare, varianta B (Drive, privat)',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Distribui testul, varianta A (manual, p. 78) sau varianta B (foaia tipărită), și foile de lucru; elevii scriu numele pe foaia de lucru.\n– Citesc cu voce tare fragmentul și cerințele; explic punctajul: partea A, 60 de puncte, partea B, 30 de puncte, 10 puncte din oficiu.\n– Recomand împărțirea timpului: cam 20 de minute pentru partea A, 15-20 de minute pentru narațiune, 5 minute pentru recitire.',
            elevi: 'Primiți testul și foaia de lucru. Scrieți numele pe foaia de lucru.\nPunctaj: partea A, 60 de puncte; partea B, 30 de puncte; 10 puncte din oficiu.\nÎmpărțiți timpul: cam 20 de minute pentru partea A, 15-20 de minute pentru narațiune, 5 minute pentru recitire.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual; răspund doar la întrebări de înțelegere a cerinței.\n– Anunț timpul la jumătate și cu 5 minute înainte de final.',
            elevi: 'Lucrați individual. Puteți întreba doar dacă nu ați înțeles cerința.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii recitesc și verifică numele; strâng lucrările.\n– Întreb scurt ce li s-a părut ușor și ce li s-a părut greu; notez pentru ora de analiză a rezultatelor.',
            elevi: 'Recitiți și verificați numele. Predați lucrarea.\nCe vi s-a părut ușor și ce vi s-a părut greu?',
          },
        ],
        evaluare: 'Evaluare sumativă scrisă, notată după baremul variantei date: varianta A, Ghidul profesorului; varianta B, baremul privat din Drive.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: {
          linkDocument: 'https://docs.google.com/document/d/1x7hIu0s-q_rMRlXqPwD_xy6-rNGC35B8INZczXeucOU/edit',
        },
        fisa: null,
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
  ],
}
