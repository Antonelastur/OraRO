// Materiale de sprijin originale pentru Unitatea III „Cum descoperim lumea?",
// clasa a VIII-a. Quizuri pe obiectivele fiecărei lecții; noțiunile vin din
// manualul Art 8 ediția 2025 și din ghid, formulările sunt proprii.

export default {
  'lectia-7': {
    joc: {
      tip: 'quiz',
      titlu: 'Lumea Sofiei de Jostein Gaarder',
      pasi: [
        {
          intrebare: 'Cu ce întrebare începe cartea, adresată Sofiei într-un plic?',
          variante: [
            { text: 'Cine ești tu?', corect: true, explicatie: 'E întrebarea de la care pornește toată filozofia din carte.' },
            { text: 'Unde locuiești?', corect: false, explicatie: 'Ar fi o întrebare de identificare, nu una filozofică.' },
            { text: 'Ce vrei să te faci când vei fi mare?', corect: false, explicatie: 'Ține de planuri, nu de identitate.' },
          ],
          indiciu: null,
          sursa: 'Caietul elevului, temă legată de Unitatea III',
        },
        {
          intrebare: 'Ce fel de întrebare este „cine ești tu?”, în felul în care o pune cartea?',
          variante: [
            { text: 'O întrebare filozofică: nu are un singur răspuns corect și te obligă să gândești', corect: true, explicatie: 'Spre deosebire de o întrebare de cunoștințe, aici răspunsul nu se caută în manual.' },
            { text: 'O întrebare cu răspuns unic, verificabil', corect: false, explicatie: 'Dacă ar avea un singur răspuns, nu ar mai fi filozofică.' },
            { text: 'O întrebare retorică, la care nu se așteaptă răspuns', corect: false, explicatie: 'Dimpotrivă, cartea insistă ca Sofia să răspundă.' },
          ],
          indiciu: null,
          sursa: 'Caietul elevului, temă legată de Unitatea III',
        },
        {
          intrebare: 'Ce leagă acest text de tema unității, „Cum descoperim lumea?”',
          variante: [
            { text: 'Arată că descoperirea lumii începe de la a-ți pune întrebări, nu de la a primi răspunsuri', corect: true, explicatie: 'Toate personajele unității descoperă lumea punând întrebări.' },
            { text: 'Arată că lumea se descoperă doar călătorind', corect: false, explicatie: 'Sofia nu pleacă nicăieri; descoperirea e interioară.' },
            { text: 'Nu are legătură cu tema unității', corect: false, explicatie: 'E chiar textul care formulează cel mai direct întrebarea unității.' },
          ],
          indiciu: null,
          sursa: 'Caietul elevului, temă legată de Unitatea III',
        },
      ],
    },
  },

  'lectia-12': {
    joc: {
      tip: 'quiz',
      titlu: 'Atributul și apoziția',
      pasi: [
        {
          intrebare: 'Ce determină întotdeauna un atribut?',
          variante: [
            { text: 'Un substantiv sau un înlocuitor al lui: pronume, numeral', corect: true, explicatie: 'Dacă determină un verb, nu mai e atribut, ci complement sau circumstanțial.' },
            { text: 'Un verb', corect: false, explicatie: 'Ce determină verbul e complement sau circumstanțial.' },
            { text: 'Un adverb', corect: false, explicatie: 'Adverbul se determină tot prin circumstanțial.' },
          ],
          indiciu: 'Întreabă-te de la ce cuvânt pui întrebarea.',
          sursa: 'Manual Art 8, pp. 112-114',
        },
        {
          intrebare: 'În „cartea de povești a bunicii”, câte atribute sunt?',
          variante: [
            { text: 'Două: „de povești” și „a bunicii”, ambele determină „cartea”', corect: true, explicatie: 'Un substantiv poate avea mai multe atribute simultan.' },
            { text: 'Unul singur: „de povești”', corect: false, explicatie: '„A bunicii” răspunde la „a cui?”, deci e tot atribut.' },
            { text: 'Niciunul, sunt complemente', corect: false, explicatie: 'Complementele determină verbe, nu substantive.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 112-114',
        },
        {
          intrebare: 'Ce este apoziția?',
          variante: [
            { text: 'Un termen alăturat unui substantiv, care îl explică sau îl identifică, de obicei izolat prin virgulă', corect: true, explicatie: 'Sofia, eleva din Norvegia, primește un plic.' },
            { text: 'Un complement direct izolat prin virgulă', corect: false, explicatie: 'Apoziția ține de sfera atributului, nu a complementului.' },
            { text: 'Elementul care introduce o subordonată', corect: false, explicatie: 'Acela e elementul de relație.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 112-114',
        },
        {
          intrebare: 'Care variantă e corect punctuată?',
          variante: [
            { text: 'Gaarder, autorul cărții, e norvegian.', corect: true, explicatie: 'Apoziția explicativă se izolează prin virgule la ambele capete.' },
            { text: 'Gaarder autorul cărții, e norvegian.', corect: false, explicatie: 'Lipsește virgula de la începutul apoziției.' },
            { text: 'Gaarder, autorul cărții e norvegian.', corect: false, explicatie: 'Lipsește virgula de la sfârșitul apoziției.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 112-114',
        },
      ],
    },
  },

  'lectia-13': {
    joc: {
      tip: 'quiz',
      titlu: 'Propoziția atributivă',
      pasi: [
        {
          intrebare: 'Ce fel de regent are o propoziție atributivă?',
          variante: [
            { text: 'Un substantiv sau un înlocuitor al lui, aflat în propoziția regentă', corect: true, explicatie: 'Atributiva face, în frază, ce face atributul în propoziție.' },
            { text: 'Un verb', corect: false, explicatie: 'Regentul verbal duce la completive sau circumstanțiale.' },
            { text: 'O conjuncție', corect: false, explicatie: 'Conjuncția e element de relație, nu regent.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 115-116',
        },
        {
          intrebare: 'Prin ce se introduce, cel mai des, o atributivă?',
          variante: [
            { text: 'Prin pronume relative: care, cine, ce, sau prin adverbe relative: unde, când, cum', corect: true, explicatie: '„Cartea care mi-a plăcut” are atributiva introdusă prin „care”.' },
            { text: 'Prin conjuncțiile „și”, „dar”', corect: false, explicatie: 'Acelea coordonează, nu subordonează.' },
            { text: 'Doar prin virgulă', corect: false, explicatie: 'Atributiva are întotdeauna un element de relație.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 115-116',
        },
        {
          intrebare: 'Când se pune virgulă înaintea unei atributive?',
          variante: [
            { text: 'Când e explicativă, adică adaugă o informație care se poate scoate fără să schimbe sensul', corect: true, explicatie: 'Cartea, care era veche, mirosea a praf: informația e în plus.' },
            { text: 'Întotdeauna, fără excepție', corect: false, explicatie: 'Atributiva determinativă nu se desparte prin virgulă.' },
            { text: 'Niciodată', corect: false, explicatie: 'Cea explicativă cere virgulă.' },
          ],
          indiciu: 'Încearcă să scoți subordonata. Dacă sensul rămâne întreg, e explicativă.',
          sursa: 'Manual Art 8, pp. 115-116',
        },
        {
          intrebare: 'În „Elevul care a citit cartea a răspuns primul”, atributiva este...',
          variante: [
            { text: 'determinativă: precizează despre care elev e vorba, deci nu se desparte prin virgulă', corect: true, explicatie: 'Fără ea, nu am ști despre cine vorbim.' },
            { text: 'explicativă, deci ar trebui virgulă', corect: false, explicatie: 'Dacă ai scoate-o, propoziția și-ar pierde sensul precis.' },
            { text: 'o completivă directă', corect: false, explicatie: 'Regentul e substantivul „elevul”, nu un verb.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 115-116',
        },
      ],
    },
  },

  'lectia-14': {
    joc: {
      tip: 'quiz',
      titlu: 'Complementul direct',
      pasi: [
        {
          intrebare: 'La ce întrebări răspunde complementul direct?',
          variante: [
            { text: 'pe cine? ce?', corect: true, explicatie: 'Întrebarea se pune întotdeauna de la verb.' },
            { text: 'cui?', corect: false, explicatie: 'La „cui?” răspunde complementul indirect.' },
            { text: 'unde? când?', corect: false, explicatie: 'Acelea sunt întrebări pentru circumstanțiale.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 117',
        },
        {
          intrebare: 'În „Îl citesc pe Gaarder”, câte complemente directe sunt?',
          variante: [
            { text: 'Unul singur: „pe Gaarder”, reluat prin „îl”', corect: true, explicatie: 'Pronumele neaccentuat doar anticipează sau reia; nu e un al doilea complement.' },
            { text: 'Două: „îl” și „pe Gaarder”', corect: false, explicatie: 'Ar însemna să numeri de două ori aceeași informație.' },
            { text: 'Niciunul', corect: false, explicatie: '„Pe Gaarder” răspunde clar la „pe cine citesc?”.' },
          ],
          indiciu: 'Reluarea prin pronume nu creează un complement nou.',
          sursa: 'Manual Art 8, p. 117',
        },
        {
          intrebare: 'Prin ce se poate exprima complementul direct?',
          variante: [
            { text: 'Substantiv, pronume, numeral sau verb la infinitiv și supin', corect: true, explicatie: '„Am terminat de citit” are complement direct exprimat prin supin.' },
            { text: 'Doar prin substantiv', corect: false, explicatie: 'Pronumele apare la fel de des.' },
            { text: 'Doar prin pronume', corect: false, explicatie: 'Substantivul e cel mai frecvent.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 117',
        },
        {
          intrebare: 'Ce verbe cer complement direct?',
          variante: [
            { text: 'Verbele tranzitive: a citi, a scrie, a vedea, a face', corect: true, explicatie: 'Un verb intranzitiv, ca „a merge”, nu poate avea complement direct.' },
            { text: 'Toate verbele, fără excepție', corect: false, explicatie: '„Plouă” sau „merg” nu pot primi complement direct.' },
            { text: 'Doar verbele la timpuri compuse', corect: false, explicatie: 'Timpul verbal nu are legătură cu tranzitivitatea.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 117',
        },
      ],
    },
  },

  'lectia-16': {
    joc: {
      tip: 'quiz',
      titlu: 'Complementul indirect',
      pasi: [
        {
          intrebare: 'La ce întrebare răspunde complementul indirect?',
          variante: [
            { text: 'cui?', corect: true, explicatie: 'Arată, de obicei, destinatarul sau beneficiarul acțiunii.' },
            { text: 'pe cine?', corect: false, explicatie: 'Aceea e întrebarea complementului direct.' },
            { text: 'cu ce scop?', corect: false, explicatie: 'Aceea e întrebarea circumstanțialului de scop.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 120',
        },
        {
          intrebare: 'Ce este anticiparea complementului indirect?',
          variante: [
            { text: 'Pronumele neaccentuat apare înaintea complementului: I-am dat Anei cartea', corect: true, explicatie: '„I-” anticipează „Anei”, care vine după.' },
            { text: 'Pronumele apare după complement', corect: false, explicatie: 'Aceea e reluarea, nu anticiparea.' },
            { text: 'Complementul lipsește complet', corect: false, explicatie: 'Dacă lipsește, nu e nici anticipare, nici reluare.' },
          ],
          indiciu: 'Anticipare înseamnă „înainte”. Cine vine primul, pronumele sau substantivul?',
          sursa: 'Manual Art 8, p. 120',
        },
        {
          intrebare: 'În „Anei i-am dat cartea”, ce fenomen apare?',
          variante: [
            { text: 'Reluare: complementul „Anei” e reluat prin pronumele „i-”, care vine după el', corect: true, explicatie: 'Substantivul stă primul, pronumele îl reia.' },
            { text: 'Anticipare', corect: false, explicatie: 'La anticipare, pronumele ar fi venit primul.' },
            { text: 'Niciunul, e o construcție greșită', corect: false, explicatie: 'E o construcție corectă și foarte frecventă în română.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 120',
        },
        {
          intrebare: 'Prin ce se exprimă, cel mai des, complementul indirect?',
          variante: [
            { text: 'Prin substantiv sau pronume în cazul dativ', corect: true, explicatie: 'Dativul e cazul care răspunde la „cui?”.' },
            { text: 'Prin substantiv în acuzativ, cu prepoziție', corect: false, explicatie: 'Aceea e zona complementului prepozițional.' },
            { text: 'Prin adverb', corect: false, explicatie: 'Adverbul exprimă, de obicei, circumstanțiale.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 120',
        },
      ],
    },
  },

  'lectia-18': {
    joc: {
      tip: 'quiz',
      titlu: 'Complementul prepozițional',
      pasi: [
        {
          intrebare: 'Ce deosebește complementul prepozițional de celelalte complemente?',
          variante: [
            { text: 'Prepoziția e cerută obligatoriu de verbul regent, nu poate fi schimbată sau scoasă', corect: true, explicatie: 'A depinde cere „de”, a renunța cere „la”. Nu se pot inversa.' },
            { text: 'Apare întotdeauna la sfârșitul propoziției', corect: false, explicatie: 'Poziția nu decide funcția.' },
            { text: 'Se exprimă doar prin pronume', corect: false, explicatie: 'Se exprimă cel mai des prin substantiv.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 123',
        },
        {
          intrebare: 'În „Mă gândesc la vacanță”, ce funcție are „la vacanță”?',
          variante: [
            { text: 'complement prepozițional, fiindcă verbul „a se gândi” cere obligatoriu prepoziția „la”', corect: true, explicatie: 'Nu poți spune „mă gândesc vacanță” sau „mă gândesc de vacanță”.' },
            { text: 'complement indirect', corect: false, explicatie: 'Complementul indirect răspunde la „cui?” și stă în dativ.' },
            { text: 'circumstanțial de loc', corect: false, explicatie: 'Nu arată unde se petrece acțiunea.' },
          ],
          indiciu: 'Încearcă să scoți prepoziția sau să o schimbi. Dacă nu merge, e cerută de verb.',
          sursa: 'Manual Art 8, p. 123',
        },
        {
          intrebare: 'Care verbe cer complement prepozițional?',
          variante: [
            { text: 'a depinde de, a renunța la, a se gândi la, a se teme de, a conta pe', corect: true, explicatie: 'Fiecare are prepoziția lui, fixă, care ține de regimul verbului.' },
            { text: 'a citi, a scrie, a vedea', corect: false, explicatie: 'Acelea sunt tranzitive și cer complement direct.' },
            { text: 'a ploua, a ninge', corect: false, explicatie: 'Sunt impersonale și nu cer complement.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 123',
        },
        {
          intrebare: 'Cum deosebești complementul prepozițional de circumstanțialul de loc, când amândouă au prepoziție?',
          variante: [
            { text: 'Verifici dacă prepoziția e cerută de verb sau doar arată locul. La circumstanțial poți schimba prepoziția.', corect: true, explicatie: 'Merg la școală, în școală, spre școală: toate merg. Mă gândesc la vacanță: doar „la”.' },
            { text: 'Te uiți dacă e la începutul sau la sfârșitul propoziției', corect: false, explicatie: 'Poziția nu e criteriu.' },
            { text: 'Numeri cuvintele', corect: false, explicatie: 'Lungimea nu are legătură cu funcția sintactică.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 123',
        },
      ],
    },
  },

  'lectia-2': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-2/schema.svg', titlu: 'Ce face un text să fie ficțional' } },
  'lectia-3': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-3/schema.svg', titlu: 'Cele cinci structuri textuale și cum se îmbină' } },
  'lectia-5': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-5/schema.svg', titlu: 'Cum citesc un text discontinuu' } },
  'lectia-8': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-8/schema.svg', titlu: 'Proiectul Limbi inventate, pas cu pas' } },
  'lectia-9': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-9/schema.svg', titlu: 'Teză, argument, exemplu' } },
  'lectia-19': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-19/schema.svg', titlu: 'Cele trei completive, față în față' } },
  'lectia-20': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-20/schema.svg', titlu: 'Comparație și analogie' } },
  'lectia-22': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-22/schema.svg', titlu: 'Ce am învățat despre lectură în Unitatea III' } },
  'lectia-23': { schema: { fisier: '/materiale/clasa-8/unitatea-3/lectia-23/schema.svg', titlu: 'Atribute și complemente, toate la un loc' } },
}
