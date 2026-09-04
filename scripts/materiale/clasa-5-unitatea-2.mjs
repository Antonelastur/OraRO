// Materiale de sprijin originale pentru Unitatea II „De-a ce mă joc",
// clasa a V-a. Quizuri scrise pe obiectivele fiecărei lecții; noțiunile vin din
// manualul Art 5 și din ghid, formulările sunt proprii.
// Schemele injectate aici sunt fișiere SVG din public/materiale/.

export default {
  'lectia-1': {
    joc: {
      tip: 'quiz',
      titlu: 'Vizită... de I.L. Caragiale',
      pasi: [
        {
          intrebare: 'Cine povestește întâmplarea din text?',
          variante: [
            { text: 'Un musafir care vine în vizită și povestește ce a văzut', corect: true, explicatie: 'Textul e povestit la persoana I, de cel care face vizita.' },
            { text: 'Mama lui Ionel', corect: false, explicatie: 'Mama e personaj, dar nu ea ține firul povestirii.' },
            { text: 'Ionel însuși', corect: false, explicatie: 'Ionel e cel despre care se povestește, nu cel care povestește.' },
          ],
          indiciu: 'Uită-te la formele verbelor: cine spune „am fost”, „am văzut”?',
          sursa: 'Manual Art 5, p. 42',
        },
        {
          intrebare: 'Cu ce ocazie merge musafirul în vizită?',
          variante: [
            { text: 'De ziua onomastică a doamnei Popescu, mama lui Ionel', corect: true, explicatie: 'Vizita e una de politețe, de sărbătoare, ceea ce face purtarea lui Ionel și mai izbitoare.' },
            { text: 'La o petrecere de Crăciun', corect: false, explicatie: 'Textul nu vorbește despre sărbătorile de iarnă.' },
            { text: 'La o serbare școlară', corect: false, explicatie: 'Întâmplarea se petrece acasă la familia Popescu, nu la școală.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 42',
        },
        {
          intrebare: 'Cum se poartă Ionel pe tot parcursul vizitei?',
          variante: [
            { text: 'Neascultător și obraznic, iar mama îl scuză de fiecare dată', corect: true, explicatie: 'Contrastul dintre purtarea copilului și îngăduința mamei ține tot textul.' },
            { text: 'Politicos și tăcut', corect: false, explicatie: 'Dimpotrivă, Ionel face numai năzbâtii.' },
            { text: 'Timid, ascunzându-se de musafir', corect: false, explicatie: 'Ionel e foarte prezent, nu se ascunde deloc.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 42',
        },
        {
          intrebare: 'Ce face un text să fie narativ?',
          variante: [
            { text: 'Povestește o întâmplare, cu personaje, într-un anumit loc și timp', corect: true, explicatie: 'Textul narativ are acțiune care se desfășoară, spre deosebire de cel descriptiv.' },
            { text: 'Descrie amănunțit cum arată un loc', corect: false, explicatie: 'Aceea e trăsătura textului descriptiv.' },
            { text: 'Explică cum funcționează ceva', corect: false, explicatie: 'Acela e un text explicativ, nonliterar de obicei.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 42',
        },
      ],
    },
  },

  'lectia-2': {
    joc: {
      tip: 'quiz',
      titlu: 'Timp, spațiu și acțiune',
      pasi: [
        {
          intrebare: 'Unde se petrece acțiunea din Vizită...?',
          variante: [
            { text: 'În casa familiei Popescu, în salon și în camerele alăturate', corect: true, explicatie: 'Tot textul se desfășoară într-un singur spațiu, casa gazdelor.' },
            { text: 'Într-un parc din oraș', corect: false, explicatie: 'Nicio scenă nu se petrece afară.' },
            { text: 'La școala lui Ionel', corect: false, explicatie: 'Școala e doar amintită, nu e locul acțiunii.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 45',
        },
        {
          intrebare: 'Cât durează, aproximativ, întâmplarea povestită?',
          variante: [
            { text: 'Câteva ore, cât ține o vizită', corect: true, explicatie: 'Timpul e scurt și continuu, ceea ce dă textului ritmul lui alert.' },
            { text: 'Câțiva ani', corect: false, explicatie: 'Nu există niciun salt mare în timp.' },
            { text: 'O singură clipă', corect: false, explicatie: 'Se întâmplă prea multe lucruri pentru o singură clipă.' },
          ],
          indiciu: 'Gândește-te de câte ori se schimbă momentul zilei în text.',
          sursa: 'Manual Art 5, p. 45',
        },
        {
          intrebare: 'Ce sunt reperele temporale dintr-un text narativ?',
          variante: [
            { text: 'Cuvintele și expresiile care arată când se petrece acțiunea sau în ce ordine', corect: true, explicatie: 'De exemplu: după aceea, peste puțin timp, spre seară.' },
            { text: 'Numele personajelor', corect: false, explicatie: 'Numele arată cine, nu când.' },
            { text: 'Descrierile de peisaj', corect: false, explicatie: 'Descrierile arată cum arată ceva, nu neapărat când.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 45',
        },
        {
          intrebare: 'De ce e util să ordonezi cronologic ideile unui text?',
          variante: [
            { text: 'Ca să înțelegi clar ce s-a întâmplat mai întâi și ce a urmat', corect: true, explicatie: 'Ordinea cronologică e baza oricărui rezumat corect.' },
            { text: 'Ca să numeri câte propoziții are textul', corect: false, explicatie: 'Numărarea propozițiilor nu are legătură cu înțelegerea.' },
            { text: 'Ca să afli cine e autorul', corect: false, explicatie: 'Autorul se află din titlu, nu din ordinea ideilor.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 45',
        },
      ],
    },
  },

  'lectia-3': {
    joc: {
      tip: 'quiz',
      titlu: 'Planul dezvoltat de idei',
      pasi: [
        {
          intrebare: 'Prin ce se deosebește planul dezvoltat de planul simplu de idei?',
          variante: [
            { text: 'Planul dezvoltat adaugă, sub fiecare idee principală, ideile secundare', corect: true, explicatie: 'Planul simplu are doar ideile principale; cel dezvoltat le detaliază.' },
            { text: 'Planul dezvoltat e scris cu majuscule', corect: false, explicatie: 'Forma scrierii nu are legătură cu tipul planului.' },
            { text: 'Planul dezvoltat are mai puține rânduri', corect: false, explicatie: 'Dimpotrivă, e mai amplu decât cel simplu.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 47',
        },
        {
          intrebare: 'Ce este o idee secundară?',
          variante: [
            { text: 'Un amănunt important care lămurește sau completează ideea principală', corect: true, explicatie: 'Ideile secundare atârnă de cea principală, nu stau singure.' },
            { text: 'O idee care nu are legătură cu textul', corect: false, explicatie: 'Dacă nu are legătură, nu e nici măcar secundară.' },
            { text: 'Ultima propoziție din fiecare fragment', corect: false, explicatie: 'Poziția în fragment nu decide dacă o idee e principală sau secundară.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 47',
        },
        {
          intrebare: 'Cum verifici dacă o idee e principală sau secundară?',
          variante: [
            { text: 'Scot ideea din plan. Dacă textul nu se mai înțelege, era principală.', corect: true, explicatie: 'Ideea principală e cea fără de care firul povestirii se rupe.' },
            { text: 'Măsor câte cuvinte are', corect: false, explicatie: 'Lungimea nu spune nimic despre importanță.' },
            { text: 'Verific dacă e scrisă la început', corect: false, explicatie: 'O idee principală poate apărea oriunde în fragment.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 47',
        },
        {
          intrebare: 'La ce folosește un organizator grafic când alcătuiești planul?',
          variante: [
            { text: 'Te ajută să vezi limpede ce idee atârnă de care, înainte să scrii', corect: true, explicatie: 'Structura devine vizibilă, deci mai ușor de verificat.' },
            { text: 'Îl folosești doar ca să faci pagina mai frumoasă', corect: false, explicatie: 'Rolul lui e de gândire, nu decorativ.' },
            { text: 'Înlocuiește complet planul scris', corect: false, explicatie: 'E o etapă intermediară; planul scris rămâne rezultatul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 47',
        },
      ],
    },
  },

  'lectia-7': {
    joc: {
      tip: 'quiz',
      titlu: 'Jocuri de ieri și de azi',
      pasi: [
        {
          intrebare: 'De ce seamănă între ele jocurile copiilor din țări diferite?',
          variante: [
            { text: 'Pentru că răspund unor nevoi comune tuturor copiilor: mișcare, întrecere, imaginație', corect: true, explicatie: 'Regulile diferă, nevoia din spatele jocului e aceeași.' },
            { text: 'Pentru că toate au fost inventate în aceeași țară', corect: false, explicatie: 'Jocurile apar independent, în culturi care nu s-au întâlnit.' },
            { text: 'Pentru că se joacă doar în școală', corect: false, explicatie: 'Cele mai multe jocuri de copii apar în afara școlii.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 53-54',
        },
        {
          intrebare: 'Ce arată faptul că un joc are nume diferite în limbi diferite?',
          variante: [
            { text: 'Că fiecare limbă își denumește lumea în felul ei, chiar când lucrul e același', corect: true, explicatie: 'Numele diferă, jocul rămâne recognoscibil.' },
            { text: 'Că jocurile nu au nicio legătură între ele', corect: false, explicatie: 'Tocmai asemănarea regulilor arată legătura.' },
            { text: 'Că doar una dintre limbi are numele corect', corect: false, explicatie: 'Nu există un nume mai corect decât altul; sunt limbi diferite.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 53-54',
        },
        {
          intrebare: 'Ce s-a schimbat cel mai mult la jocurile copiilor în ultimii cincizeci de ani?',
          variante: [
            { text: 'Multe s-au mutat de afară pe ecran, dar tot de întrecere și de imaginație e vorba', corect: true, explicatie: 'Suportul s-a schimbat, nevoia din spate a rămas.' },
            { text: 'Copiii nu se mai joacă deloc', corect: false, explicatie: 'Se joacă la fel de mult, dar altfel.' },
            { text: 'Toate jocurile vechi au dispărut complet', corect: false, explicatie: 'Multe se joacă și azi, uneori sub alt nume.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 53-54',
        },
      ],
    },
  },

  'lectia-11': {
    joc: {
      tip: 'quiz',
      titlu: 'Verbul și predicatul verbal',
      pasi: [
        {
          intrebare: 'Care este predicatul verbal din propoziția „Copiii se joacă în curte”?',
          variante: [
            { text: 'se joacă', corect: true, explicatie: 'Predicatul verbal arată acțiunea făcută de subiect.' },
            { text: 'Copiii', corect: false, explicatie: 'Copiii e subiectul, arată cine face acțiunea.' },
            { text: 'în curte', corect: false, explicatie: 'În curte arată locul, e parte secundară.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 60',
        },
        {
          intrebare: 'Ce este infinitivul unui verb?',
          variante: [
            { text: 'Forma de bază a verbului, cea din dicționar, precedată de „a”: a citi, a merge', corect: true, explicatie: 'Infinitivul e o formă nepersonală: nu arată cine face acțiunea.' },
            { text: 'Forma verbului la persoana I singular', corect: false, explicatie: 'Aceea e o formă personală, care arată cine face acțiunea.' },
            { text: 'Verbul scris la plural', corect: false, explicatie: 'Numărul nu are legătură cu infinitivul.' },
          ],
          indiciu: 'Cum cauți un verb în dicționar? Sub ce formă îl găsești?',
          sursa: 'Manual Art 5, p. 60',
        },
        {
          intrebare: 'Ce arată persoana și numărul unui verb?',
          variante: [
            { text: 'Cine face acțiunea și dacă e vorba de unul sau mai mulți', corect: true, explicatie: 'Eu citesc, tu citești, ei citesc: se schimbă persoana și numărul.' },
            { text: 'Când se petrece acțiunea', corect: false, explicatie: 'Momentul acțiunii e arătat de timp, nu de persoană.' },
            { text: 'Dacă acțiunea e reală sau doar dorită', corect: false, explicatie: 'Aceea e treaba modului verbal.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 60',
        },
        {
          intrebare: 'În „Ionel a spart tava”, câte cuvinte formează predicatul verbal?',
          variante: [
            { text: 'Două: a spart, fiindcă verbul e la un timp compus', corect: true, explicatie: 'La timpurile compuse, auxiliarul și verbul de bază formează împreună predicatul.' },
            { text: 'Unul singur: spart', corect: false, explicatie: 'Fără auxiliarul „a”, forma verbală nu e completă.' },
            { text: 'Trei: Ionel a spart', corect: false, explicatie: 'Ionel e subiectul, nu face parte din predicat.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 60',
        },
      ],
    },
  },

  'lectia-12': {
    joc: {
      tip: 'quiz',
      titlu: 'Modul indicativ. Prezentul',
      pasi: [
        {
          intrebare: 'Ce arată modul indicativ?',
          variante: [
            { text: 'O acțiune prezentată ca sigură, reală', corect: true, explicatie: 'Indicativul e modul faptelor care se petrec cu adevărat.' },
            { text: 'O acțiune dorită sau posibilă', corect: false, explicatie: 'Aceea e zona altor moduri, învățate mai târziu.' },
            { text: 'O poruncă', corect: false, explicatie: 'Porunca e exprimată de modul imperativ.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 62',
        },
        {
          intrebare: 'Care e forma corectă la persoana a II-a singular, prezent, a verbului „a crea”?',
          variante: [
            { text: 'tu creezi', corect: true, explicatie: 'Verbele terminate în -ea de tipul acesta primesc sufixul -ez la prezent.' },
            { text: 'tu crei', corect: false, explicatie: 'Forma e greșită; lipsește sufixul cerut de acest tip de verb.' },
            { text: 'tu creiezi', corect: false, explicatie: 'Se adaugă un i în plus, care nu are ce căuta acolo.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 62',
        },
        {
          intrebare: 'Prezentul indicativ poate arăta și o acțiune care nu se petrece chiar acum?',
          variante: [
            { text: 'Da, poate arăta un obicei sau un adevăr general: în fiecare zi merg la școală', corect: true, explicatie: 'Prezentul acoperă și acțiunile repetate, și adevărurile mereu valabile.' },
            { text: 'Nu, arată exclusiv momentul vorbirii', corect: false, explicatie: 'Ar fi prea îngust; prezentul are mai multe valori.' },
            { text: 'Doar dacă verbul e la plural', corect: false, explicatie: 'Numărul nu are nicio legătură.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 62',
        },
        {
          intrebare: 'Care e forma corectă?',
          variante: [
            { text: 'eu continui, tu continui, el continuă', corect: true, explicatie: 'La persoana I și a II-a forma e aceeași; la a III-a se schimbă terminația.' },
            { text: 'eu continuu, tu continui, el continue', corect: false, explicatie: 'Formele de persoana I și a III-a sunt greșite.' },
            { text: 'eu continui, tu continue, el continuu', corect: false, explicatie: 'Formele sunt amestecate între persoane.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 62',
        },
      ],
    },
  },

  'lectia-13': {
    joc: {
      tip: 'quiz',
      titlu: 'Imperfectul',
      pasi: [
        {
          intrebare: 'Ce fel de acțiune trecută arată imperfectul?',
          variante: [
            { text: 'O acțiune care ținea sau se repeta în trecut, fără să știm când s-a terminat', corect: true, explicatie: 'De aceea se folosește la descrieri și la amintiri din copilărie.' },
            { text: 'O acțiune terminată clar, într-un moment precis', corect: false, explicatie: 'Aceea e valoarea perfectului compus.' },
            { text: 'O acțiune care abia urmează să se întâmple', corect: false, explicatie: 'Aceea e valoarea viitorului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 64',
        },
        {
          intrebare: 'Care propoziție are verbul la imperfect?',
          variante: [
            { text: 'În fiecare vară mergeam la bunici.', corect: true, explicatie: 'Mergeam arată o acțiune repetată în trecut.' },
            { text: 'Ieri am mers la bunici.', corect: false, explicatie: 'Am mers e perfect compus, acțiune terminată.' },
            { text: 'Mâine merg la bunici.', corect: false, explicatie: 'Merg e prezent cu valoare de viitor.' },
          ],
          indiciu: 'Caută varianta care sugerează că lucrul se repeta.',
          sursa: 'Manual Art 5, p. 64',
        },
        {
          intrebare: 'Ce terminații are imperfectul, la persoana I singular?',
          variante: [
            { text: '-am, -eam, -iam: cântam, mergeam, citeam', corect: true, explicatie: 'Terminația depinde de conjugarea verbului.' },
            { text: '-ez, -esc', corect: false, explicatie: 'Acelea sunt sufixe de prezent.' },
            { text: '-ui, -ăi', corect: false, explicatie: 'Nu sunt terminații de imperfect.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 64',
        },
        {
          intrebare: 'De ce apare imperfectul atât de des în descrieri?',
          variante: [
            { text: 'Pentru că oprește acțiunea pe loc și lasă timp pentru amănunte', corect: true, explicatie: 'Perfectul compus împinge povestea înainte; imperfectul o ține pe loc.' },
            { text: 'Pentru că e cel mai scurt timp verbal', corect: false, explicatie: 'Lungimea formelor nu are legătură.' },
            { text: 'Pentru că nu are forme la plural', corect: false, explicatie: 'Are forme la toate persoanele și numerele.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 64',
        },
      ],
    },
  },

  'lectia-14': {
    joc: {
      tip: 'quiz',
      titlu: 'Perfectul compus',
      pasi: [
        {
          intrebare: 'Din ce se formează perfectul compus?',
          variante: [
            { text: 'Din verbul auxiliar a avea și participiul verbului de bază', corect: true, explicatie: 'Am citit: am e auxiliarul, citit e participiul.' },
            { text: 'Din verbul a fi și infinitiv', corect: false, explicatie: 'Aceea e o altă construcție, nu perfectul compus.' },
            { text: 'Dintr-un singur cuvânt, ca imperfectul', corect: false, explicatie: 'Tocmai de aceea se numește compus: are două părți.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 66',
        },
        {
          intrebare: 'Care sunt formele auxiliarului a avea la perfectul compus?',
          variante: [
            { text: 'am, ai, a, am, ați, au', corect: true, explicatie: 'Sunt forme scurte, deosebite de verbul a avea folosit singur.' },
            { text: 'sunt, ești, este, suntem, sunteți, sunt', corect: false, explicatie: 'Acelea sunt formele verbului a fi.' },
            { text: 'voi, vei, va, vom, veți, vor', corect: false, explicatie: 'Acelea sunt formele auxiliarului de viitor.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 66',
        },
        {
          intrebare: 'Ce este participiul?',
          variante: [
            { text: 'O formă nepersonală a verbului, care intră în alcătuirea timpurilor compuse: citit, mers, scris', corect: true, explicatie: 'Participiul nu arată singur cine face acțiunea.' },
            { text: 'Verbul la persoana a III-a plural', corect: false, explicatie: 'Aceea e o formă personală.' },
            { text: 'Verbul precedat de „a”', corect: false, explicatie: 'Aceea e forma de infinitiv.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 66',
        },
        {
          intrebare: 'Care variantă e scrisă corect?',
          variante: [
            { text: 'Ei au venit devreme.', corect: true, explicatie: 'Auxiliarul „au” se scrie într-un cuvânt, corect acordat cu subiectul la plural.' },
            { text: 'Ei a-u venit devreme.', corect: false, explicatie: 'Auxiliarul nu se desparte niciodată cu cratimă.' },
            { text: 'Ei a venit devreme.', corect: false, explicatie: 'Auxiliarul nu e acordat: la persoana a III-a plural se folosește „au”.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 66',
        },
      ],
    },
  },

  'lectia-15': {
    joc: {
      tip: 'quiz',
      titlu: 'Perfectul simplu și mai-mult-ca-perfectul',
      pasi: [
        {
          intrebare: 'Unde întâlnești cel mai des perfectul simplu, astăzi?',
          variante: [
            { text: 'În textele literare, mai ales în povestiri, și în vorbirea din unele zone ale țării', corect: true, explicatie: 'În limba vorbită standard a fost înlocuit aproape complet de perfectul compus.' },
            { text: 'În conversația de zi cu zi, peste tot în țară', corect: false, explicatie: 'În vorbirea curentă folosim aproape numai perfectul compus.' },
            { text: 'Doar în manualele de matematică', corect: false, explicatie: 'Nu are legătură cu un anumit domeniu școlar.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 68',
        },
        {
          intrebare: 'Ce arată mai-mult-ca-perfectul?',
          variante: [
            { text: 'O acțiune trecută, terminată înaintea altei acțiuni trecute', corect: true, explicatie: 'Plecase înainte să ajung eu: prima acțiune s-a încheiat înaintea celei de-a doua.' },
            { text: 'O acțiune care se petrece chiar acum', corect: false, explicatie: 'Aceea e valoarea prezentului.' },
            { text: 'O acțiune viitoare', corect: false, explicatie: 'Toate cele patru timpuri studiate în unitate sunt trecute, în afară de viitor.' },
          ],
          indiciu: 'Care acțiune s-a întâmplat mai devreme dintre cele două?',
          sursa: 'Manual Art 5, p. 68',
        },
        {
          intrebare: 'Care verb e la mai-mult-ca-perfect?',
          variante: [
            { text: 'plecase', corect: true, explicatie: 'Terminația -se e marca mai-mult-ca-perfectului.' },
            { text: 'plecă', corect: false, explicatie: 'Plecă e perfect simplu.' },
            { text: 'a plecat', corect: false, explicatie: 'A plecat e perfect compus.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 68',
        },
        {
          intrebare: 'De ce folosesc scriitorii perfectul simplu în povestiri?',
          variante: [
            { text: 'Pentru că dă un ritm alert acțiunii și sună a povestire', corect: true, explicatie: 'Formele scurte împing narațiunea înainte, faptă după faptă.' },
            { text: 'Pentru că e singurul timp corect gramatical', corect: false, explicatie: 'Toate timpurile trecute sunt corecte; diferă efectul.' },
            { text: 'Pentru că se scrie mai ușor', corect: false, explicatie: 'Ușurința scrierii nu e un motiv stilistic.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 68',
        },
      ],
    },
  },

  'lectia-16': {
    joc: {
      tip: 'quiz',
      titlu: 'Viitorul',
      pasi: [
        {
          intrebare: 'Cu ce auxiliar se formează viitorul literar?',
          variante: [
            { text: 'Cu formele voi, vei, va, vom, veți, vor', corect: true, explicatie: 'Voi citi, vei citi, va citi: auxiliarul provine din verbul a vrea.' },
            { text: 'Cu formele am, ai, a, am, ați, au', corect: false, explicatie: 'Acelea formează perfectul compus.' },
            { text: 'Cu formele sunt, ești, este', corect: false, explicatie: 'Acelea sunt formele verbului a fi la prezent.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 70',
        },
        {
          intrebare: 'Care dintre acestea e o formă de viitor popular, folosită în vorbire?',
          variante: [
            { text: 'o să merg', corect: true, explicatie: 'Forma cu „o să” e foarte răspândită în vorbirea curentă.' },
            { text: 'am mers', corect: false, explicatie: 'E perfect compus, o acțiune trecută.' },
            { text: 'mergeam', corect: false, explicatie: 'E imperfect, tot acțiune trecută.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 70',
        },
        {
          intrebare: 'Care variantă e scrisă corect?',
          variante: [
            { text: 'Mâine voi citi o carte.', corect: true, explicatie: 'Auxiliarul se scrie separat de verbul de bază, fără cratimă.' },
            { text: 'Mâine voi-citi o carte.', corect: false, explicatie: 'Cratima nu are ce căuta între auxiliar și verb.' },
            { text: 'Mâine voicit o carte.', corect: false, explicatie: 'Cele două cuvinte nu se scriu legat.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 70',
        },
        {
          intrebare: 'Poate prezentul să exprime o acțiune viitoare?',
          variante: [
            { text: 'Da, când în propoziție apare un reper de timp viitor: mâine plec la munte', corect: true, explicatie: 'Contextul, nu forma verbului, arată că e vorba de viitor.' },
            { text: 'Nu, niciodată', corect: false, explicatie: 'Se întâmplă des în vorbirea curentă.' },
            { text: 'Doar la persoana I', corect: false, explicatie: 'Funcționează la toate persoanele.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 70',
        },
      ],
    },
  },

  'lectia-17': {
    joc: {
      tip: 'quiz',
      titlu: 'Modul imperativ',
      pasi: [
        {
          intrebare: 'Ce exprimă modul imperativ?',
          variante: [
            { text: 'O poruncă, un îndemn, o rugăminte, adresate direct cuiva', corect: true, explicatie: 'Imperativul se adresează întotdeauna interlocutorului.' },
            { text: 'O acțiune sigură, petrecută în trecut', corect: false, explicatie: 'Aceea e zona indicativului.' },
            { text: 'O acțiune care se repeta odinioară', corect: false, explicatie: 'Aceea e valoarea imperfectului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 72',
        },
        {
          intrebare: 'Care e forma corectă de imperativ negativ, persoana a II-a singular, pentru verbul „a face”?',
          variante: [
            { text: 'nu face', corect: true, explicatie: 'La negativ, persoana a II-a singular folosește forma de infinitiv, nu cea afirmativă.' },
            { text: 'nu fă', corect: false, explicatie: 'Fă e forma afirmativă; la negativ e greșită.' },
            { text: 'nu faci', corect: false, explicatie: 'Faci e prezent indicativ, nu imperativ.' },
          ],
          indiciu: 'Compară: „Fă asta!” față de „Nu ... asta!”. Ce se schimbă?',
          sursa: 'Manual Art 5, p. 72',
        },
        {
          intrebare: 'Ce semn de punctuație însoțește de obicei un enunț la imperativ?',
          variante: [
            { text: 'Semnul exclamării', corect: true, explicatie: 'Îndemnul sau porunca se marchează, de regulă, prin semnul exclamării.' },
            { text: 'Semnul întrebării', corect: false, explicatie: 'Acela marchează o întrebare, nu un îndemn.' },
            { text: 'Două puncte', corect: false, explicatie: 'Două puncte anunță o enumerare sau o explicație.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 72',
        },
        {
          intrebare: 'Unde întâlnești cel mai des imperativul, în afara școlii?',
          variante: [
            { text: 'În rețete, instrucțiuni și reguli de joc: amestecă, taie, aruncă zarul', corect: true, explicatie: 'Orice text care îți spune ce să faci folosește imperativul.' },
            { text: 'În texte care descriu un peisaj', corect: false, explicatie: 'Descrierile nu se adresează direct cititorului cu îndemnuri.' },
            { text: 'Doar în poezii', corect: false, explicatie: 'Apare în poezii, dar mult mai des în texte practice.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 72',
        },
      ],
    },
  },

  'lectia-4': { schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-4/schema.svg', titlu: 'Cum aflăm cum e un personaj' } },
  'lectia-6': { schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-6/schema.svg', titlu: 'Jurnalul cu dublă intrare' } },
  'lectia-8': { schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-8/schema.svg', titlu: 'Proiectul Jocuri fără vârstă, pas cu pas' } },
  'lectia-9': { schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-9/schema.svg', titlu: 'Ce răspund la o invitație, un reproș, un compliment' } },
  'lectia-10': { schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-10/schema.svg', titlu: 'Regulile de acces la cuvânt' } },
  'lectia-18': { schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-18/schema.svg', titlu: 'Momentele unei povestiri' } },
  'lectia-21': { schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-21/schema.svg', titlu: 'Ce am învățat despre lectură în Unitatea II' } },
  'lectia-22': { schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-22/schema.svg', titlu: 'Timpurile verbului, toate la un loc' } },
}
