# Scheme-notițe, clasa a VII-a, Unitatea a IV-a „Cu noroc, fără noroc”.
# Conținutul vine din rubricile Repere ale Manualului Art 7, pp. 146-159;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-7-unitatea-4.py

SUB = 'Clasa a VII-a · Unitatea a IV-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-11',
        'titlu': 'Pronumele personal, de politețe și reflexiv',
        'sub': SUB.format(n=11, pp='pp. 146-147'),
        'sursa': 'Sursa: Manual Art 7, pp. 146-147, rubricile Repere.',
        'sect': [
            ('1. PRONUMELE PERSONAL', [
                {'t': 'text', 'p': ['**Pronumele** ține locul unui substantiv. **Pronumele personal** desemnează persoanele care participă la comunicare.']},
                {'t': 'tabel', 'cap': ['Categoria', 'Ce reținem'], 'lat': [0.2, 0.8],
                 'r': [['persoana', 'I, a II-a, a III-a'],
                       ['numărul', 'singular, plural'],
                       ['genul', 'doar la persoana a III-a: masculin, feminin'],
                       ['cazul', 'ca la substantiv; **G.** doar la persoana a III-a, **V.** doar la persoana a II-a'],
                       ['forma', 'la **Ac.** și **D.** are și forme **neaccentuate** (clitice)']]},
                {'t': 'text', 'p': ['• Are, în general, **aceleași funcții** ca substantivul.',
                                    '• În unele expresii **nu are funcție sintactică** (valoare neutră): *a nimerit-o bine, ce să-i faci*.',
                                    '• Cliticele **dublează** complementul direct și indirect: **anticipare** (*L-am văzut pe Alex.*) sau **reluare** (*Pe Mihai l-am văzut ieri.*).']},
            ]),
            ('2. PRONUMELE DE POLITEȚE', [
                {'t': 'text', 'p': ['Arată **respectul**; are forme doar pentru persoanele a **II-a** și a **III-a**, singular și plural; genul, doar la persoana a III-a: *dumneata, mătăluță, dumneavoastră, domnia-voastră; dumnealui, dumneaei, dânșii, domnia-sa*.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'pronume de politețe', 'col': 't', 'p': ['se scrie cu **literă mică** (DOOM3)', '*domnia-sa*']},
                    {'titlu': 'locuțiune pronominală (formulă reverențioasă)', 'col': 'm', 'p': ['**majusculă** la ambii termeni', '*Domnia Sa, Excelența Voastră, Majestatea Voastră, Sfinția Voastră*']},
                ]},
            ]),
            ('3. PRONUMELE REFLEXIV', [
                {'t': 'text', 'p': ['Arată **identitatea** dintre subiect și complementul care desemnează aceeași persoană. Are forme proprii doar la **persoana a III-a**, la **acuzativ** și **dativ**:']},
                {'t': 'tabel', 'cap': ['Cazul', 'Accentuate', 'Neaccentuate'], 'lat': [0.3, 0.35, 0.35], 'al': ['l', 'c', 'c'],
                 'r': [['acuzativ', '(pe) sine', 'se, s-'], ['dativ', 'sie, sieși', 'își, și']]},
                {'t': 'carduri', 'c': [
                    {'titlu': 'reflexiv', 'col': 't', 'p': ['aceeași persoană și același număr cu verbul', '**Mă** *întreb.* (I sg. + I sg.)']},
                    {'titlu': 'personal', 'col': 'm', 'p': ['persoane diferite', '**Mă** *întreabă.* (I sg. + III sg.)']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-12',
        'titlu': 'Pronumele și adjectivul pronominal posesiv',
        'sub': SUB.format(n=12, pp='pp. 148-149'),
        'sursa': 'Sursa: Manual Art 7, pp. 148-149, rubricile Repere, tabelul formelor și modelele de analiză.',
        'sect': [
            ('1. PRONUMELE POSESIV', [
                {'t': 'text', 'p': ['Înlocuiește **și obiectul posedat, și posesorul**, arătând relația dintre ele.']},
                {'t': 'text', 's': 16, 'p': ['**{t:al}** **{m:meu}** → {t:articolul posesiv} arată **obiectul posedat** (gen, număr); {m:forma specifică} arată **posesorul** (persoană, număr)']},
            ]),
            ('2. FORMELE (NOMINATIV-ACUZATIV)', [
                {'t': 'tabel', 'cap': ['Obiectul posedat', 'eu', 'tu', 'el, ea', 'noi', 'voi'], 'lat': [0.25, 0.15, 0.15, 0.15, 0.15, 0.15], 'al': ['l', 'c', 'c', 'c', 'c', 'c'],
                 'r': [['masculin sg.', 'al meu', 'al tău', 'al său', 'al nostru', 'al vostru'],
                       ['feminin sg.', 'a mea', 'a ta', 'a sa', 'a noastră', 'a voastră'],
                       ['masculin pl.', 'ai mei', 'ai tăi', 'ai săi', 'ai noștri', 'ai voștri'],
                       ['feminin pl.', 'ale mele', 'ale tale', 'ale sale', 'ale noastre', 'ale voastre']]},
                {'t': 'text', 'p': ['• La **genitiv-dativ** există doar forme de **plural**: *alor mei, alor tăi, alor noștri*.',
                                    '• **Nu** are forme pentru mai mulți posesori de persoana a III-a: folosesc **lor** (*ai lor*).']},
            ]),
            ('3. FUNCȚII ȘI ADJECTIVUL POSESIV', [
                {'t': 'text', 'p': ['**Pronumele posesiv** are funcțiile substantivului: subiect (*Ai mei sunt la atelier.*), nume predicativ (*Cana este a ta.*), complement, circumstanțial, atribut.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'pronume posesiv', 'col': 't', 'p': ['stă singur, în locul substantivului', '*Mi-l împrumuți pe* **al tău**?']},
                    {'titlu': 'adjectiv pronominal posesiv', 'col': 'm', 'p': ['însoțește substantivul și se acordă cu el', '*prietenul* **meu**, *prietena* **mea**', 'funcția: **atribut adjectival**']},
                ]},
                {'t': 'nota', 'titlu': 'Modele de analiză:', 'p': ['*„pe ai mei” – pronume posesiv, un singur posesor (persoana I), mai multe obiecte posedate (masculin, plural), cazul acuzativ, precedat de prepoziția „pe”, complement direct.*',
                                                                         '*„mea” – adjectiv pronominal posesiv, acordat cu „bunica” (feminin, singular, nominativ), un singur obiect posedat, un singur posesor (persoana I), atribut adjectival.*']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-13',
        'titlu': 'Pronumele și adjectivul pronominal demonstrativ',
        'sub': SUB.format(n=13, pp='pp. 150-151'),
        'sursa': 'Sursa: Manual Art 7, pp. 150-151, rubricile Repere, tabelele formelor și modelele de analiză.',
        'sect': [
            ('1. CE ARATĂ', [
                {'t': 'text', 'p': ['**Pronumele demonstrativ** înlocuiește numele unui obiect și arată **apropierea** sau **depărtarea** lui (în spațiu sau timp), **identitatea** sau **diferențierea** față de alte obiecte. Nu are persoană.']},
            ]),
            ('2. FORMELE', [
                {'t': 'tabel', 'cap': ['Felul', 'Cazul', 'm. sg.', 'm. pl.', 'f. sg.', 'f. pl.'], 'lat': [0.19, 0.11, 0.18, 0.18, 0.17, 0.17], 'al': ['l', 'c', 'c', 'c', 'c', 'c'], 's': 13,
                 'r': [['**apropiere**', 'N-Ac', 'acesta (ăsta)', 'aceștia (ăștia)', 'aceasta (asta)', 'acestea (astea)'],
                       ['', 'G-D', 'acestuia', 'acestora', 'acesteia', 'acestora'],
                       ['**depărtare**', 'N-Ac', 'acela (ăla)', 'aceia (ăia)', 'aceea (aia)', 'acelea (alea)'],
                       ['', 'G-D', 'aceluia', 'acelora', 'aceleia', 'acelora'],
                       ['**identitate**', 'N-Ac', 'același', 'aceiași', 'aceeași', 'aceleași'],
                       ['', 'G-D', 'aceluiași', 'acelorași', 'aceleiași', 'acelorași'],
                       ['**diferențiere**', 'N-Ac', 'celălalt', 'ceilalți', 'cealaltă', 'celelalte'],
                       ['', 'G-D', 'celuilalt', 'celorlalți', 'celeilalte', 'celorlalte']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Între paranteze: formele **vorbite**. În scris folosesc formele literare.']},
            ]),
            ('3. DE REȚINUT', [
                {'t': 'text', 'p': ['• *asta* are în limba literară **valoare neutră**, când nu se referă la persoane: *Nu mi-ai spus asta!*',
                                    '• *cel, cea, cei, cele* sunt demonstrative **semiindependente** când înlocuiesc un substantiv și au un determinant: *cea verde, cei de acolo; Cel 1/ care te-a chemat 2/ este directorul. 1/*',
                                    '• Pronumele demonstrativ are **funcțiile substantivului**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'adjectivul demonstrativ înainte', 'col': 't', 'p': ['formă **fără -a**', '*acest, acel băiat; acea fată; aceste fete*']},
                    {'titlu': 'adjectivul demonstrativ după', 'col': 'm', 'p': ['formă **cu -a**', '*băiatul acesta; fata aceea; fetele acelea*']},
                ]},
                {'t': 'text', 'p': ['Adjectivul demonstrativ se acordă cu substantivul și este **atribut adjectival**; cel de diferențiere nu își schimbă forma (*cealaltă mână, mâna cealaltă*).']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-14',
        'titlu': 'Pronumele și adjectivul pronominal nehotărât',
        'sub': SUB.format(n=14, pp='p. 152'),
        'sursa': 'Sursa: Manual Art 7, p. 152, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Pronumele nehotărât** nu dă informații precise despre obiectul pe care îl înlocuiește.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'simple', 'col': 't', 'p': ['*atât, unul, altul, mult, puțin, tot, cutare*']},
                    {'titlu': 'compuse', 'col': 'm', 'p': ['*altceva, altcineva, careva, ceva, cineva, câtva, fiecare, oricare, oricine, orice, oricât, vreunul*']},
                ]},
                {'t': 'text', 'p': ['• **Locuțiuni pronominale nehotărâte**: *cine știe cine, nu știu ce, te miri cine*.',
                                    '• Pronume care arată **gruparea**: *amândoi, ambii, tustrei, câteșitrei*: *Amândoi au plecat. Amândurora le-a plăcut.*']},
            ]),
            ('2. FUNCȚII ȘI ADJECTIVUL NEHOTĂRÂT', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'pronume nehotărât', 'col': 't', 'p': ['funcțiile substantivului', '**Mulți** *îndrăznesc să se opună.*']},
                    {'titlu': 'adjectiv pronominal nehotărât', 'col': 'm', 'p': ['însoțește substantivul și se acordă cu el', '**Fiecare** *copil își dorește...*', 'funcția: **atribut adjectival**']},
                ]},
            ]),
            ('3. ORTOGRAFIE ȘI ACORD', [
                {'t': 'atentie', 'p': ['• Compusele se scriu **într-un cuvânt**: *vreun, vreo* (nu *vre-un, vre-o*).',
                                       '• În compusele cu *ori-* scriu și pronunț **i**: *oricare, orice* (nu *orcare, orce*).',
                                       '• *Fiecare*, ca subiect, cere verbul la **singular**: *Fiecare știe acest lucru.*']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„vreunul” – pronume nehotărât compus, genul masculin, numărul singular, cazul acuzativ, funcția sintactică de complement direct.*']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-15',
        'titlu': 'Pronumele și adjectivul pronominal interogativ',
        'sub': SUB.format(n=15, pp='p. 153'),
        'sursa': 'Sursa: Manual Art 7, p. 153, rubrica Repere, tabelul funcțiilor și modelele de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 'p': ['Ține locul substantivului **așteptat ca răspuns**. Formele: **care, cine, ce, cât, câtă, câți, câte**. Apare **numai în enunțuri interogative**, de obicei la început.']},
                {'t': 'atentie', 'titlu': 'Regula funcției', 'p': ['Pronumele interogativ are **aceeași funcție** ca răspunsul: **Cine** *vorbește?* → *Vorbește* **Ana**. (amândouă subiect)']},
            ]),
            ('2. FUNCȚIILE', [
                {'t': 'tabel', 'cap': ['Cazul', 'Funcția', 'Exemplu'], 'lat': [0.12, 0.38, 0.5], 'al': ['c', 'l', 'l'],
                 'r': [['N', 'subiect / nume predicativ', '*Cine a venit? Cine au fost invitații?*'],
                       ['Ac', 'complement direct', '*Pe cine ai remarcat?*'],
                       ['Ac', 'complement prepozițional / nume predicativ', '*Despre ce ați vorbit? Din ce era costumul?*'],
                       ['Ac', 'circumstanțial de loc / timp / mod', '*Spre ce ai mers? După cine ai sosit? Precum cine s-a purtat?*'],
                       ['D', 'complement indirect', '*Cui i-ai dat fructele?*'],
                       ['G', 'atribut pronominal genitival', '*Al cui costum ți-a plăcut?*']]},
            ]),
            ('3. ADJECTIVUL INTEROGATIV', [
                {'t': 'text', 'p': ['Însoțește un substantiv și se acordă cu el: **Câte** *prăjituri ai mâncat?* **Care** *prieten te-a chemat?* Funcția: **atribut adjectival**.']},
                {'t': 'nota', 'titlu': 'Modele de analiză:', 'p': ['*„pe cine” – pronume interogativ, cazul acuzativ, precedat de prepoziția „pe”, complement direct.*',
                                                                         '*„câte” – adjectiv pronominal interogativ, acordat cu „prăjituri” (feminin, plural, acuzativ), atribut adjectival.*']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-16',
        'titlu': 'Pronumele și adjectivul pronominal relativ',
        'sub': SUB.format(n=16, pp='pp. 154-155'),
        'sursa': 'Sursa: Manual Art 7, pp. 154-155, rubricile Repere, tabelul funcțiilor și modelele de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 'p': ['**Pronumele relativ** leagă, în frază, o **propoziție secundară** de propoziția de care depinde și are **funcție sintactică** în propoziția pe care o introduce.']},
                {'t': 'text', 'p': ['• Formele sunt aceleași cu ale interogativului: *care, cine, ce, cât, câtă, câți, câte*; plus compusul **ceea ce**.',
                                    '• *cel ce, cei ce* = demonstrativ + relativ (*ce* = *care*); popular: relativul invariabil *de* (*Omul de-l vezi...*).']},
            ]),
            ('2. FUNCȚIILE', [
                {'t': 'tabel', 'cap': ['Funcția', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['subiect', '*Întâmplarea 1/ care m-a speriat 2/ n-are o explicație. 1/*'],
                       ['complement direct', '*Femeia 1/ pe care am văzut-o 2/ a intrat în bloc. 1/*'],
                       ['complement prepozițional', '*Întâmplarea 1/ la care mă gândesc 2/...*'],
                       ['complement indirect', '*Persoana 1/ căreia îi povestesc 2/ m-a înțeles. 1/*'],
                       ['atribut genitival', '*Întâmplarea 1/ al cărei sens nu-l înțeleg 2/...*'],
                       ['circumstanțial (loc, timp, mod, cauză, scop)', '*Locul 1/ spre care mă îndrept 2/... Felul 1/ în care a procedat 2/... Motivul 1/ din care ai acționat 2/...*']]},
            ]),
            ('3. DE REȚINUT', [
                {'t': 'atentie', 'p': ['• *Care* complement direct primește **obligatoriu** *pe*: *femeia* **pe care** *am văzut-o*.',
                                       '• La genitiv: **relativul** se acordă cu substantivul pe care îl înlocuiește, iar **articolul genitival** cu substantivul determinat: *Expertul* **a cărui** *părere ne-a ajutat...*']},
                {'t': 'text', 'p': ['**Adjectivul relativ** însoțește un substantiv nearticulat pe care îl precedă: *Știu* **care** *prieten mă va ajuta.* Funcția: **atribut adjectival**.']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„pe care” – pronume relativ, cazul acuzativ, precedat de prepoziția „pe”, funcția sintactică de complement direct.*']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-17',
        'titlu': 'Pronumele și adjectivul pronominal negativ',
        'sub': SUB.format(n=17, pp='p. 156'),
        'sursa': 'Sursa: Manual Art 7, p. 156, rubrica Repere, tabelul funcțiilor și modelele de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Pronumele negativ** înlocuiește numele unor obiecte prezentate ca **inexistente**. Apare **numai în enunțuri negative**: **nimeni, nimic, niciunul, niciuna**.']},
                {'t': 'atentie', 'p': ['Ca subiecte, *nimeni* și *nimic* cer verbul la **singular**, chiar dacă se referă la mai multe persoane: *Nimeni dintre ei n-a răspuns. Nimeni și nimic nu îl oprește.*']},
            ]),
            ('2. FUNCȚIILE', [
                {'t': 'tabel', 'cap': ['Cazul', 'Funcția', 'Exemplu'], 'lat': [0.12, 0.38, 0.5], 'al': ['c', 'l', 'l'],
                 'r': [['N', 'subiect', '*Nimeni n-a ieșit afară.*'],
                       ['N', 'nume predicativ', '*Noul medic nu este niciunul dintre ei.*'],
                       ['Ac', 'complement direct / prepozițional', '*Nu observ pe nimeni. Nu mă gândesc la nimic rău.*'],
                       ['Ac', 'atribut prepozițional / circumstanțial de loc', '*Darul de la niciunul... N-a mers la nimeni.*'],
                       ['D', 'complement indirect', '*Nu i-am spus nimănui secretul.*'],
                       ['G', 'atribut pronominal genitival', '*Caietul niciunuia nu este pe masă.*']]},
            ]),
            ('3. ADJECTIVUL NEGATIV', [
                {'t': 'text', 'p': ['**niciun, nicio**: însoțesc un substantiv și se acordă cu el; funcția: **atribut adjectival**.']},
                {'t': 'nota', 'titlu': 'Modele de analiză:', 'p': ['*„nimănui” – pronume negativ, cazul dativ, complement indirect.*', '*„niciun” – adjectiv pronominal negativ, acordat cu „inel” (neutru, singular, acuzativ), atribut adjectival.*']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-18',
        'titlu': 'Adjectivul pronominal de întărire',
        'sub': SUB.format(n=18, pp='p. 157'),
        'sursa': 'Sursa: Manual Art 7, p. 157, rubrica Repere, tabelul formelor și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 'p': ['**Pronumele** de întărire a dispărut din limba de azi; se folosește doar **adjectivul pronominal de întărire**. Se acordă în gen, număr și caz cu substantivul sau pronumele determinat și **precizează prin insistență** persoana: *Directorul* **însuși** *ne-a sprijinit.*']},
                {'t': 'text', 'p': ['Funcția: **atribut adjectival**. Tendința de azi: înlocuirea cu **chiar**: *A venit chiar el.*']},
            ]),
            ('2. FORMELE', [
                {'t': 'tabel', 'cap': ['', 'Cazul', 'm. sg.', 'f. sg.', 'm. pl.', 'f. pl.'], 'lat': [0.16, 0.12, 0.18, 0.18, 0.18, 0.18], 'al': ['l', 'c', 'c', 'c', 'c', 'c'], 's': 13,
                 'r': [['persoana I', 'N-Ac', 'însumi', 'însămi', 'înșine', 'însene'],
                       ['', 'D-G', 'însumi', 'însemi', 'înșine', 'însene'],
                       ['persoana a II-a', 'N-Ac', 'însuți', 'însăți', 'înșivă', 'însevă'],
                       ['', 'D-G', 'însuți', 'înseți', 'înșivă', 'însevă'],
                       ['persoana a III-a', 'N-Ac', 'însuși', 'însăși', 'înșiși', 'înseși, însele'],
                       ['', 'D-G', 'însuși', 'înseși', 'înșiși', 'înseși, însele']]},
            ]),
            ('3. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„însăși” – adjectiv pronominal de întărire, acordat în gen, număr și caz cu pronumele „ea” (feminin, singular, nominativ), funcția sintactică de atribut adjectival.*']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-7/unitatea-4/lectia-19',
        'titlu': 'Posibilitățile combinatorii ale pronumelui',
        'sub': SUB.format(n=19, pp='pp. 158-159'),
        'sursa': 'Sursa: Manual Art 7, pp. 158-159, rubrica Repere, tabelul funcțiilor și modelele de analiză.',
        'sect': [
            ('1. PRONUMELE CENTRU', [
                {'t': 'tabel', 'cap': ['I se subordonează', 'Exemple'], 'lat': [0.38, 0.62],
                 'r': [['atributul adjectival', '*acela roșu, ceva frumos, nimic interesant, toți aceia*'],
                       ['atributul substantival prepozițional', '*tu din fotografie, niciunul din clasă*'],
                       ['atributul substantival genitival', '*nimic al Mariei*'],
                       ['atributul pronominal prepozițional', '*care dintre ei, unul ca dumneata*'],
                       ['atributul adverbial', '*acesta de alături, oricine de aici*']]},
            ]),
            ('2. PRONUMELE ADJUNCT', [
                {'t': 'tabel', 'cap': ['Grupul', 'Funcția', 'Exemplu'], 'lat': [0.16, 0.34, 0.5],
                 'r': [['nominal', 'atribut prepozițional / genitival / în dativ', '*felicitarea de la unii; casa acestora; gândurile-ți frumoase*'],
                       ['verbal', 'complement direct / indirect / prepozițional', '*Scrie asta. Fiecăruia îi pasă. Se teme de ai tăi.*'],
                       ['verbal', 'circumstanțial de loc / timp / mod', '*Stă lângă oricine. Sosise înaintea lor. Atenția cu care mă asculți...*'],
                       ['verbal', 'circumstanțial de cauză / scop', '*Boala de care a suferit... Examenul pentru care înveți...*']]},
                {'t': 'text', 'p': ['Două funcții deosebite în grupul verbal: **subiectul** (interdependență: *Nimeni nu a răspuns.*) și **numele predicativ** (relație ternară: *Caietul este al meu.*).']},
            ]),
            ('3. ADJECTIVELE PRONOMINALE', [
                {'t': 'nota', 'p': ['Toate adjectivele pronominale (posesive, demonstrative, nehotărâte, interogative, relative, negative, de întărire) au funcția de **atribut adjectival**.']},
                {'t': 'nota', 'titlu': 'Modele de analiză:', 'p': ['*„cine” – pronume interogativ, cazul nominativ, funcție sintactică de subiect.*', '*„acestui” – adjectiv pronominal demonstrativ de apropiere, neutru, singular, genitiv, atribut adjectival.*']},
            ]),
        ],
    },
]
