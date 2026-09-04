// Materiale de sprijin originale pentru Unitatea I, clasa a V-a.
// Quizurile sunt conținut original, scrise pe obiectivele fiecărei lecții.
// Noțiunile verificate vin din manual (Art 5) și din ghid; formulările
// întrebărilor și ale explicațiilor sunt proprii.
// Schemele injectate aici sunt fișiere SVG din public/materiale/.

export default {
  'lectia-1': {
    joc: {
      tip: 'quiz',
      titlu: 'Ce am reținut din „Prietenul meu”',
      pasi: [
        {
          intrebare: 'Cine povestește întâmplarea din textul „Prietenul meu”?',
          variante: [
            { text: 'O fetiță, care spune ce i s-a întâmplat ei', corect: true, explicatie: 'Textul e povestit la persoana I, de fetița care trăiește întâmplarea.' },
            { text: 'Un povestitor din afară, care nu apare în text', corect: false, explicatie: 'Dacă ar fi așa, am citi „ea a spus”, nu „am spus”.' },
            { text: 'Prietenul fetiței', corect: false, explicatie: 'Prietenul e personaj, dar nu el ține firul povestirii.' },
          ],
          indiciu: 'Uită-te la formele verbelor: sunt la persoana I sau a III-a?',
          sursa: 'Manual Art 5, pp. 10-12',
        },
        {
          intrebare: 'Ce înseamnă cuvântul „rigolă”, întâlnit în text?',
          variante: [
            { text: 'Un șanț îngust pe marginea drumului, pentru scurgerea apei', corect: true, explicatie: 'E un cuvânt pe care îl clarificăm din context și din dicționar.' },
            { text: 'Un fel de fereastră mică', corect: false, explicatie: 'Nu are legătură cu ferestrele; cuvântul ține de stradă.' },
            { text: 'O jucărie de lemn', corect: false, explicatie: 'Contextul din text arată clar că e ceva de pe stradă, nu o jucărie.' },
          ],
          indiciu: 'Recitește propoziția în care apare și vezi despre ce loc e vorba.',
          sursa: 'Manual Art 5, pp. 10-12',
        },
        {
          intrebare: 'Care dintre acestea este o informație esențială din text, nu un amănunt?',
          variante: [
            { text: 'Fetița își face un prieten neașteptat', corect: true, explicatie: 'Informația esențială e cea fără de care povestea nu se mai înțelege.' },
            { text: 'Culoarea exactă a unui obiect descris în treacăt', corect: false, explicatie: 'Un amănunt de decor; textul se înțelege și fără el.' },
            { text: 'Numărul de rânduri al textului', corect: false, explicatie: 'Nu e o informație din text, ci despre felul cum e tipărit.' },
          ],
          indiciu: 'Întreabă-te: dacă scot această informație, mai înțeleg povestea?',
          sursa: 'Manual Art 5, pp. 10-12',
        },
        {
          intrebare: 'Ce faci corect când desprinzi informațiile esențiale dintr-un text?',
          variante: [
            { text: 'Reții cine, unde, când și ce se întâmplă', corect: true, explicatie: 'Cele patru repere dau scheletul oricărei întâmplări.' },
            { text: 'Reții toate cuvintele necunoscute, în ordine', corect: false, explicatie: 'Cuvintele necunoscute se clarifică, dar nu ele sunt informația esențială.' },
            { text: 'Reții doar ultima propoziție', corect: false, explicatie: 'Finalul e important, dar singur nu spune despre ce e textul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 10-12',
        },
      ],
    },
  },

  'lectia-2': {
    joc: {
      tip: 'quiz',
      titlu: 'Trăsăturile textului literar',
      pasi: [
        {
          intrebare: 'Care dintre aceste trei trăsături aparțin textului literar?',
          variante: [
            { text: 'Lumea imaginară, emoțiile, limbajul expresiv', corect: true, explicatie: 'Sunt cele trei trăsături discutate în lecție.' },
            { text: 'Datele exacte, cifrele, sursele verificabile', corect: false, explicatie: 'Acestea sunt trăsături ale textului nonliterar.' },
            { text: 'Titlul, autorul, editura', corect: false, explicatie: 'Sunt informații despre carte, nu trăsături ale textului literar.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 13-14',
        },
        {
          intrebare: 'Ce înseamnă că un text literar are o „lume imaginară”?',
          variante: [
            { text: 'Autorul construiește o lume pornind de la realitate, dar nu identică cu ea', corect: true, explicatie: 'Lumea din text poate semăna cu a noastră, însă rămâne inventată de autor.' },
            { text: 'Tot ce se povestește s-a întâmplat cu adevărat', corect: false, explicatie: 'Asta ar fi o relatare, nu o lume imaginară.' },
            { text: 'În text apar obligatoriu zâne și balauri', corect: false, explicatie: 'Lumea imaginară nu înseamnă neapărat fantastic; poate fi foarte apropiată de viața de zi cu zi.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 13-14',
        },
        {
          intrebare: 'În care dintre variante se folosește un limbaj expresiv?',
          variante: [
            { text: 'Ploaia bătea în geam ca niște degete grăbite.', corect: true, explicatie: 'Comparația creează o imagine, deci limbajul e expresiv.' },
            { text: 'Astăzi au căzut 12 litri de apă pe metru pătrat.', corect: false, explicatie: 'E o informație exactă, specifică textului nonliterar.' },
            { text: 'Ploaia a început la ora 15:40.', corect: false, explicatie: 'Tot o informație precisă, fără intenție artistică.' },
          ],
          indiciu: 'Caută varianta care te face să vezi sau să auzi ceva.',
          sursa: 'Manual Art 5, pp. 13-14',
        },
        {
          intrebare: 'Ce este o inferență simplă despre un personaj?',
          variante: [
            { text: 'O concluzie pe care o tragi din faptele lui, chiar dacă textul nu o spune direct', corect: true, explicatie: 'Textul arată fapte, cititorul deduce trăsătura din ele.' },
            { text: 'Copierea unei propoziții din text', corect: false, explicatie: 'Copierea nu presupune nicio deducție.' },
            { text: 'O părere fără nicio legătură cu textul', corect: false, explicatie: 'O inferență se sprijină întotdeauna pe ceva din text.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 13-14',
        },
      ],
    },
  },

  'lectia-3': {
    joc: {
      tip: 'quiz',
      titlu: 'Cuvântul-cheie, tema și planul de idei',
      pasi: [
        {
          intrebare: 'Ce este cuvântul-cheie al unui fragment?',
          variante: [
            { text: 'Cuvântul fără de care fragmentul nu se mai înțelege', corect: true, explicatie: 'El poartă înțelesul central al fragmentului.' },
            { text: 'Cel mai lung cuvânt din fragment', corect: false, explicatie: 'Lungimea nu are nicio legătură cu importanța unui cuvânt.' },
            { text: 'Primul cuvânt al fragmentului', corect: false, explicatie: 'Poziția în text nu decide care e cuvântul-cheie.' },
          ],
          indiciu: 'Încearcă să povestești fragmentul fără acel cuvânt. Merge?',
          sursa: 'Manual Art 5, p. 15',
        },
        {
          intrebare: 'Prin ce se deosebește tema unui text de ideea principală a unui fragment?',
          variante: [
            { text: 'Tema e despre ce e vorba în tot textul, ideea principală e despre un singur fragment', corect: true, explicatie: 'Tema acoperă întregul, ideea principală acoperă o parte.' },
            { text: 'Sunt exact același lucru', corect: false, explicatie: 'Un text are o temă, dar mai multe idei principale.' },
            { text: 'Tema se scrie mereu cu majusculă', corect: false, explicatie: 'Scrierea nu are legătură cu deosebirea dintre ele.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 15',
        },
        {
          intrebare: 'Unde delimitezi, de obicei, un fragment nou într-un text narativ?',
          variante: [
            { text: 'Acolo unde se schimbă locul, timpul sau personajele', corect: true, explicatie: 'Aceste trei schimbări marchează, cel mai des, un fragment nou.' },
            { text: 'La fiecare cinci rânduri, indiferent de conținut', corect: false, explicatie: 'Delimitarea ține de conținut, nu de numărul de rânduri.' },
            { text: 'Doar la sfârșitul paginii', corect: false, explicatie: 'Pagina e o convenție de tipar, nu o graniță a sensului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 15',
        },
        {
          intrebare: 'Cum arată, corect alcătuit, un plan simplu de idei?',
          variante: [
            { text: 'O listă cu ideea principală a fiecărui fragment, în ordinea din text', corect: true, explicatie: 'Ideile principale, puse cap la cap și în ordine, dau planul simplu.' },
            { text: 'Un rezumat de o singură propoziție', corect: false, explicatie: 'Un rezumat scurt nu arată împărțirea pe fragmente.' },
            { text: 'Lista tuturor personajelor', corect: false, explicatie: 'Personajele sunt altceva decât ideile principale.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 15',
        },
      ],
    },
  },

  'lectia-4': {
    schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-4/schema.svg', titlu: 'De la întâmplare la semnificație' },
  },

  'lectia-5': {
    joc: {
      tip: 'quiz',
      titlu: 'Textul nonliterar',
      pasi: [
        {
          intrebare: 'Care este scopul principal al unui text nonliterar, ca cel despre istoria selfie-ului?',
          variante: [
            { text: 'Să informeze cititorul despre ceva real', corect: true, explicatie: 'Textul nonliterar transmite informații verificabile.' },
            { text: 'Să emoționeze cititorul printr-o poveste inventată', corect: false, explicatie: 'Acesta e scopul textului literar.' },
            { text: 'Să distreze prin rime și jocuri de cuvinte', corect: false, explicatie: 'Nu e scopul unui text informativ.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 17',
        },
        {
          intrebare: 'Ce fel de limbaj folosește, de obicei, un text nonliterar?',
          variante: [
            { text: 'Un limbaj clar și precis, cu date exacte', corect: true, explicatie: 'Claritatea e mai importantă decât frumusețea exprimării.' },
            { text: 'Un limbaj plin de comparații și metafore', corect: false, explicatie: 'Limbajul expresiv e specific textului literar.' },
            { text: 'Un limbaj greu de înțeles, ca să pară serios', corect: false, explicatie: 'Un text informativ bun e ușor de urmărit, nu complicat inutil.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 17',
        },
        {
          intrebare: 'Într-un text nonliterar despre istoria unui obiect, ce te aștepți să găsești?',
          variante: [
            { text: 'Ani, nume, invenții, în ordine cronologică', corect: true, explicatie: 'Textele informative despre istorie se sprijină pe repere de timp.' },
            { text: 'Un personaj principal cu trăsături morale', corect: false, explicatie: 'Personajele aparțin textului literar.' },
            { text: 'O încheiere cu o morală', corect: false, explicatie: 'Morala e specifică textelor literare, mai ales fabulei.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 17',
        },
        {
          intrebare: 'Cum îți dai seama repede dacă un text e literar sau nonliterar?',
          variante: [
            { text: 'Mă întreb dacă lumea din text e inventată sau reală și dacă limbajul e expresiv sau precis', corect: true, explicatie: 'Cele două întrebări, împreună, decid aproape întotdeauna.' },
            { text: 'Mă uit doar la lungimea textului', corect: false, explicatie: 'Și textele literare, și cele nonliterare pot fi scurte sau lungi.' },
            { text: 'Mă uit dacă are titlu', corect: false, explicatie: 'Ambele tipuri de text au titlu.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 17',
        },
      ],
    },
  },

  'lectia-6': {
    schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-6/schema.svg', titlu: 'Două texte, aceeași descoperire' },
  },

  'lectia-7': {
    joc: {
      tip: 'quiz',
      titlu: 'Identitatea personală și emoțiile',
      pasi: [
        {
          intrebare: 'Ce înseamnă identitatea personală?',
          variante: [
            { text: 'Tot ce mă face să fiu eu: numele, pasiunile, felul de a fi, amintirile', corect: true, explicatie: 'Identitatea personală adună trăsăturile care mă deosebesc de ceilalți.' },
            { text: 'Doar numele și prenumele scrise în acte', corect: false, explicatie: 'Actele arată datele oficiale, dar identitatea înseamnă mai mult.' },
            { text: 'Părerea colegilor despre mine', corect: false, explicatie: 'Părerea altora contează, dar nu ține locul identității proprii.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 20-22',
        },
        {
          intrebare: 'De ce ne ajută să ne recunoaștem emoțiile?',
          variante: [
            { text: 'Pentru că, dacă știu ce simt, pot să explic altora și pot să reacționez mai potrivit', corect: true, explicatie: 'Recunoașterea emoției e primul pas spre exprimarea ei adecvată.' },
            { text: 'Pentru că astfel putem scăpa de emoțiile neplăcute pentru totdeauna', corect: false, explicatie: 'Emoțiile neplăcute fac parte din viață; scopul nu e să dispară.' },
            { text: 'Pentru că doar bucuria e o emoție folositoare', corect: false, explicatie: 'Toate emoțiile au un rol, inclusiv tristețea sau frica.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 20-22',
        },
        {
          intrebare: 'Un coleg pierde un concurs pentru care s-a pregătit mult. Ce emoție e cel mai probabil să simtă?',
          variante: [
            { text: 'Tristețe, poate și dezamăgire', corect: true, explicatie: 'Tristețea apare când pierdem ceva la care țineam.' },
            { text: 'Doar bucurie', corect: false, explicatie: 'Bucuria nu se potrivește cu pierderea unui lucru dorit.' },
            { text: 'Nicio emoție, dacă e un elev serios', corect: false, explicatie: 'A simți emoții nu are legătură cu a fi serios sau nu.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 20-22',
        },
        {
          intrebare: 'Ce arată filmul „Întors pe dos” despre rolul emoțiilor?',
          variante: [
            { text: 'Că avem nevoie de toate emoțiile, nu doar de cele plăcute', corect: true, explicatie: 'Filmul arată că și tristețea are un rol important în viața personajului.' },
            { text: 'Că trebuie să fim mereu veseli', corect: false, explicatie: 'Filmul spune tocmai contrariul.' },
            { text: 'Că emoțiile nu se pot schimba niciodată', corect: false, explicatie: 'Emoțiile se schimbă tot timpul, în funcție de ce trăim.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 20-22',
        },
      ],
    },
  },

  'lectia-12': {
    joc: {
      tip: 'quiz',
      titlu: 'Câmpul lexical',
      pasi: [
        {
          intrebare: 'Ce este un câmp lexical?',
          variante: [
            { text: 'Un grup de cuvinte legate între ele prin aceeași idee sau prin trăsături de sens comune', corect: true, explicatie: 'Cuvintele câmpului lexical trimit toate spre același domeniu.' },
            { text: 'Un grup de cuvinte care încep cu aceeași literă', corect: false, explicatie: 'Litera inițială nu are nicio legătură cu sensul.' },
            { text: 'Un grup de cuvinte cu același număr de silabe', corect: false, explicatie: 'Numărul de silabe ține de formă, nu de sens.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 30-31',
        },
        {
          intrebare: 'Care cuvânt NU face parte din câmpul lexical al școlii?',
          variante: [
            { text: 'ancoră', corect: true, explicatie: 'Ancora ține de câmpul lexical al navigației, nu al școlii.' },
            { text: 'catalog', corect: false, explicatie: 'Catalogul aparține clar câmpului lexical al școlii.' },
            { text: 'recreație', corect: false, explicatie: 'Recreația e un termen din viața școlară.' },
          ],
          indiciu: 'Caută cuvântul care te duce cu gândul în alt loc.',
          sursa: 'Manual Art 5, pp. 30-31',
        },
        {
          intrebare: 'Cuvintele „ploaie, nor, fulger, ninsoare, vânt” alcătuiesc câmpul lexical al...',
          variante: [
            { text: 'fenomenelor naturii', corect: true, explicatie: 'Toate cinci numesc fenomene ale vremii, deci aceeași idee comună.' },
            { text: 'relațiilor de rudenie', corect: false, explicatie: 'Relațiile de rudenie ar fi mamă, tată, bunic.' },
            { text: 'obiectelor de scris', corect: false, explicatie: 'Obiectele de scris ar fi creion, stilou, caiet.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 30-31',
        },
        {
          intrebare: 'Poate un cuvânt să facă parte din două câmpuri lexicale diferite?',
          variante: [
            { text: 'Da, dacă are mai multe sensuri sau dacă se potrivește în două domenii', corect: true, explicatie: 'De exemplu, „broască” intră și în câmpul animalelor, și în cel al obiectelor de la ușă.' },
            { text: 'Nu, fiecare cuvânt aparține unui singur câmp lexical', corect: false, explicatie: 'Multe cuvinte se potrivesc în mai multe câmpuri, după sens și context.' },
            { text: 'Doar dacă e substantiv propriu', corect: false, explicatie: 'Nu are legătură cu felul substantivului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 30-31',
        },
      ],
    },
  },

  'lectia-13': {
    joc: {
      tip: 'quiz',
      titlu: 'Vocale, consoane, semivocale',
      pasi: [
        {
          intrebare: 'Ce este o vocală?',
          variante: [
            { text: 'Un sunet care se poate rosti singur și poate forma singur o silabă', corect: true, explicatie: 'În limba română, vocalele sunt a, ă, â, e, i, î, o, u.' },
            { text: 'Un sunet care are nevoie de alt sunet ca să fie rostit', corect: false, explicatie: 'Aceasta e definiția consoanei.' },
            { text: 'Orice literă scrisă cu majusculă', corect: false, explicatie: 'Majuscula ține de scriere, nu de felul sunetului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 32-33',
        },
        {
          intrebare: 'Câte vocale are limba română?',
          variante: [
            { text: 'Șapte: a, ă, â, e, i, î, o, u, dintre care â și î notează același sunet', corect: true, explicatie: 'Sunt opt litere, dar â și î redau același sunet, deci șapte vocale.' },
            { text: 'Cinci, ca în alte limbi', corect: false, explicatie: 'Cinci vocale au alte limbi, nu româna.' },
            { text: 'Zece', corect: false, explicatie: 'Zece e prea mult; se confundă probabil cu numărul de litere-vocale plus semivocale.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 32-33',
        },
        {
          intrebare: 'Ce este o semivocală?',
          variante: [
            { text: 'Un sunet care seamănă cu o vocală, dar nu poate forma singur o silabă', corect: true, explicatie: 'Semivocalele stau alături de o vocală, în aceeași silabă.' },
            { text: 'O vocală rostită pe jumătate de timp', corect: false, explicatie: 'Nu e vorba de durată, ci de rolul în silabă.' },
            { text: 'O consoană scrisă cu două litere', corect: false, explicatie: 'Nu are legătură cu felul cum se scrie.' },
          ],
          indiciu: 'Gândește-te la „i” din „iarnă”: se aude, dar nu ține singur o silabă.',
          sursa: 'Manual Art 5, pp. 32-33',
        },
        {
          intrebare: 'În cuvântul „carte”, ce fel de sunete sunt c, r, t?',
          variante: [
            { text: 'consoane', corect: true, explicatie: 'Consoanele nu pot fi rostite singure, au nevoie de o vocală alături.' },
            { text: 'vocale', corect: false, explicatie: 'Vocalele din „carte” sunt a și e.' },
            { text: 'semivocale', corect: false, explicatie: 'În „carte” nu apare nicio semivocală.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 32-33',
        },
      ],
    },
  },

  'lectia-15': {
    joc: {
      tip: 'quiz',
      titlu: 'Etapele scrierii',
      pasi: [
        {
          intrebare: 'Care este ordinea corectă a etapelor scrierii?',
          variante: [
            { text: 'Pregătirea, ciorna, revizuirea, editarea, publicarea', corect: true, explicatie: 'Fiecare etapă pregătește terenul pentru următoarea.' },
            { text: 'Publicarea, ciorna, pregătirea, revizuirea', corect: false, explicatie: 'Publicarea e ultima etapă, nu prima.' },
            { text: 'Editarea, revizuirea, pregătirea, ciorna', corect: false, explicatie: 'Ordinea e răsturnată; pregătirea vine întotdeauna prima.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 36',
        },
        {
          intrebare: 'Ce faci în etapa de pregătire, înainte să scrii primul rând?',
          variante: [
            { text: 'Aleg subiectul, mă gândesc cui scriu și îmi fac un plan', corect: true, explicatie: 'Pregătirea înseamnă tot ce se întâmplă înainte de prima frază.' },
            { text: 'Corectez greșelile de ortografie', corect: false, explicatie: 'Corectarea vine la editare, la finalul procesului.' },
            { text: 'Citesc textul în fața clasei', corect: false, explicatie: 'Aceea e publicarea, ultima etapă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 36',
        },
        {
          intrebare: 'De ce se numește „ciornă” prima variantă a textului?',
          variante: [
            { text: 'Pentru că e o variantă de lucru, pe care am voie să o schimb oricât', corect: true, explicatie: 'Ciorna nu trebuie să fie perfectă; tocmai de aceea urmează revizuirea.' },
            { text: 'Pentru că trebuie scrisă neîngrijit', corect: false, explicatie: 'Ciorna poate fi îngrijită; important e că se poate modifica.' },
            { text: 'Pentru că se aruncă imediat', corect: false, explicatie: 'Ciorna se păstrează, e baza variantei finale.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 36',
        },
        {
          intrebare: 'La ce ajută cele șase întrebări, cine, ce, unde, când, cum, de ce, în etapa de pregătire?',
          variante: [
            { text: 'Mă ajută să adun ideile și să nu uit nimic important din întâmplare', corect: true, explicatie: 'Răspunsurile la ele devin scheletul textului.' },
            { text: 'Mă ajută să număr cuvintele', corect: false, explicatie: 'Nu au legătură cu lungimea textului.' },
            { text: 'Mă ajută să aleg culoarea copertei', corect: false, explicatie: 'Nu privesc aspectul, ci conținutul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 36',
        },
      ],
    },
  },

  'lectia-16': {
    schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-16/schema.svg', titlu: 'Scriu, apoi îmi recitesc textul' },
  },

  'lectia-17': {
    schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-17/schema.svg', titlu: 'Cinci pași pentru un text citit prima dată' },
  },

  'lectia-18': {
    schema: { fisier: '/materiale/clasa-5/unitatea-1/lectia-18/schema.svg', titlu: 'Tot ce am învățat despre limbă în Unitatea I' },
  },
}
