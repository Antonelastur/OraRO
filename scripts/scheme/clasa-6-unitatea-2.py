# Scheme-notițe, clasa a VI-a, Unitatea a II-a „Printre colegi și prieteni”.
# Conținutul vine din rubricile Repere ale Manualului Art 6, pp. 47-77;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-6-unitatea-2.py

SUB = 'Clasa a VI-a · Unitatea a II-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-3',
        'titlu': 'Timpul și spațiul într-o narațiune',
        'sub': SUB.format(n=3, pp='pp. 47-48'),
        'sursa': 'Sursa: Manual Art 6, pp. 47-48, rubrica Repere și grila planului dezvoltat; textul de bază este „Oracolul” de Mircea Cărtărescu.',
        'sect': [
            ('1. DOUĂ TIMPURI ÎNTR-O NARAȚIUNE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'timpul desfășurării întâmplărilor', 'col': 't', 'p': ['când se petrece **acțiunea**', 'poate fi **trecut, prezent sau viitor** față de momentul narării', 'marcat prin verbe la trecut, prezent sau viitor']},
                    {'titlu': 'timpul povestirii întâmplărilor', 'col': 'm', 'p': ['momentul în care **naratorul relatează**', 'marcat prin verbe la **prezent**']},
                ]},
                {'t': 'atentie', 'p': ['Cele două timpuri **nu coincid întotdeauna**: naratorul poate povesti azi ceva petrecut cu mulți ani în urmă.']},
            ]),
            ('2. RITMUL POVESTIRII', [
                {'t': 'text', 'p': ['• Unele episoade pot fi **sărite**.',
                                    '• Altele pot fi **comprimate**, prin rezumare.',
                                    '• Acțiunea se poate petrece **într-un singur loc** sau **în mai multe locuri**.']},
            ]),
            ('3. PLANUL DEZVOLTAT DE IDEI', [
                {'t': 'text', 'p': ['Pornesc de la **planul simplu** (ideile principale) și adaug, sub fiecare, **ideile secundare**.']},
                {'t': 'nota', 'titlu': 'Verific:', 'p': ['fiecare idee principală are una sau mai multe idei secundare · respect ordinea întâmplărilor din text · respect regulile de exprimare, ortografie și punctuație.']},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-4',
        'titlu': 'Etapele acțiunii (momentele subiectului)',
        'sub': SUB.format(n=4, pp='pp. 49-51'),
        'sursa': 'Sursa: Manual Art 6, pp. 49-51, rubricile Repere.',
        'sect': [
            ('1. DE LA TREI PĂRȚI LA CINCI MOMENTE', [
                {'t': 'text', 'p': ['Cele trei părți ale narațiunii (situația inițială, succesiunea de întâmplări, situația finală) se împart în **cinci momente ale subiectului**.']},
            ]),
            ('2. MOMENTELE SUBIECTULUI', [
                {'t': 'tabel', 'cap': ['Momentul', 'Ce cuprinde', 'Verbele folosite de obicei'], 'lat': [0.2, 0.47, 0.33],
                 'r': [['**expozițiunea**', 'situația inițială, starea de echilibru; personajele, timpul, spațiul', 'indicativ imperfect sau prezent'],
                       ['**intriga**', 'întâmplarea sau motivul interior (o dorință, o problemă) care declanșează acțiunea și rupe echilibrul', 'perfect compus sau prezent (în texte vechi, perfect simplu)'],
                       ['**desfășurarea acțiunii**', 'cea mai întinsă parte; întâmplările provocate de intrigă', 'perfect compus, prezent; uneori mai-mult-ca-perfectul'],
                       ['**punctul culminant**', 'momentul **cel mai tensionat**, care pune capăt întâmplărilor provocate de intrigă', ''],
                       ['**deznodământul**', 'încheierea acțiunii; o **nouă stare de echilibru**, uneori legată de situația inițială', 'perfect compus, prezent, uneori imperfect']]},
            ]),
            ('3. DE REȚINUT', [
                {'t': 'text', 'p': ['• **Epilogul** prezintă momente de **după** încheierea acțiunii.',
                                    '• Momentele nu sunt întotdeauna clar delimitate: uneori își **schimbă ordinea**, alteori unele **lipsesc**.']},
                {'t': 'nota', 'titlu': 'Cum lucrez:', 'p': ['asociez fiecare moment cu secvențele din planul simplu de idei; pentru fiecare pot formula 3-4 întrebări ale căror răspunsuri sunt ideile principale.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-12',
        'titlu': 'Verbul. Felul verbelor. Indicativul',
        'sub': SUB.format(n=12, pp='pp. 64-65'),
        'sursa': 'Sursa: Manual Art 6, pp. 64-65, rubricile Repere.' + CREATE,
        'sect': [
            ('1. FELUL VERBELOR', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Verbul** arată **acțiunea, starea sau existența**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'predicative', 'col': 't', 'p': ['pot alcătui singure predicatul', '*Am o carte veche.*', 'funcția: **predicat verbal**']},
                    {'titlu': 'nepredicative', 'col': 'm', 'p': ['nu pot alcătui singure predicatul', '*Am inventat o rețetă.*']},
                ]},
            ]),
            ('2. VERBELE AUXILIARE', [
                {'t': 'tabel', 'cap': ['Auxiliarul', 'Formează', 'Exemplu'], 'lat': [0.18, 0.42, 0.4],
                 'r': [['**a avea**', 'perfectul compus', '*Am cules cimbrișor.*'],
                       ['**a vrea**', 'viitorul și viitorul anterior', '*vei învăța; vei fi văzut*'],
                       ['**a fi**', 'viitorul anterior', '*Voi fi găsit cartea...*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['**Funcția sintactică** este rolul unei părți de propoziție în enunț.']},
            ]),
            ('3. MODUL INDICATIV', [
                {'t': 'text', 'p': ['**Modul** este forma pe care o ia verbul ca să arate cum privește vorbitorul acțiunea. **Indicativul** arată o acțiune **sigură, reală** și este **singurul mod cu toate timpurile**.']},
                {'t': 'tabel', 'cap': ['Timpul', 'Exemplu (a cânta, pers. I)'], 'lat': [0.45, 0.55],
                 'r': [['prezent', '*cânt*'],
                       ['imperfect', '*cântam*'],
                       ['perfect simplu', '*cântai*'],
                       ['perfect compus', '*am cântat*'],
                       ['mai-mult-ca-perfect', '*cântasem*'],
                       ['viitor / viitor anterior', '*voi cânta / voi fi cântat*']]},
                {'t': 'text', 'p': ['Prezentul se construiește cu **desinențe** (arată persoana și numărul: *cântăm, ziceți*) și cu **sunete care arată timpul** (*lucrează, vorbim*).']},
                {'t': 'atentie', 'p': ['Viitorul are și forme de **limbă vorbită** (*o să cânt, am să cânt*) și **populare** (*oi cânta*); în scris folosesc forma literară: *voi cânta*.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-14',
        'titlu': 'Modul conjunctiv',
        'sub': SUB.format(n=14, pp='pp. 68-69'),
        'sursa': 'Sursa: Manual Art 6, pp. 68-69, rubricile Repere, tabelele de conjugare și modelul de analiză.',
        'sect': [
            ('1. CE ARATĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Conjunctivul** arată o acțiune **posibilă, realizabilă**. Marca lui este cuvântul **să**.']},
                {'t': 'text', 'p': ['• La începutul enunțurilor orale, persoana a III-a poate apărea fără *să*: *Facă ce-o dori!*',
                                    '• Verbele predicative la conjunctiv au funcția de **predicat verbal**.']},
            ]),
            ('2. TIMPURILE', [
                {'t': 'tabel', 'cap': ['Timpul', 'Ce arată', 'Cum se formează', 'Exemplu'], 'lat': [0.14, 0.3, 0.32, 0.24],
                 'r': [['**prezent**', 'acțiune posibilă în momentul vorbirii sau după', '*să* + indicativ prezent (altă formă la pers. a III-a)', '*să cânt, să cânte*'],
                       ['**perfect**', 'acțiune posibilă înainte de momentul vorbirii', '*să* + *fi* + participiu; **aceeași formă** la toate persoanele', '*să fi cântat*']]},
                {'t': 'tabel', 'cap': ['', 'a cânta', 'a merge', 'a citi'], 'lat': [0.19, 0.27, 0.27, 0.27], 'al': ['l', 'c', 'c', 'c'],
                 'r': [['eu', '*să cânt*', '*să merg*', '*să citesc*'],
                       ['tu', '*să cânți*', '*să mergi*', '*să citești*'],
                       ['el, ea, ei, ele', '*să cânte*', '*să meargă*', '*să citească*'],
                       ['noi', '*să cântăm*', '*să mergem*', '*să citim*'],
                       ['voi', '*să cântați*', '*să mergeți*', '*să citiți*']]},
            ]),
            ('3. FORMA NEGATIVĂ ȘI ORDINEA CUVINTELOR', [
                {'t': 'text', 'p': ['• Negativul se face cu **nu**: *să nu cânt, să nu fi cântat*.',
                                    '• **cam, mai, tot** stau **între *să* și verb** la prezent (*să mai cânt*) și **între *să* și *fi*** la perfect (*să mai fi cântat*).']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„să nu scăpăm” – verb predicativ, modul conjunctiv, timpul prezent, persoana I, numărul plural, formă negativă, funcție sintactică de predicat verbal.*']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-15',
        'titlu': 'Modul condițional-optativ',
        'sub': SUB.format(n=15, pp='pp. 70-71'),
        'sursa': 'Sursa: Manual Art 6, pp. 70-71, rubricile Repere, tabelele de conjugare și modelul de analiză.',
        'sect': [
            ('1. CE ARATĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Condițional-optativul** arată acțiuni **posibile**, a căror realizare depinde de o **condiție**, sau acțiuni **dorite**.']},
            ]),
            ('2. TIMPURILE', [
                {'t': 'tabel', 'cap': ['Timpul', 'Ce arată', 'Cum se formează', 'Exemplu'], 'lat': [0.14, 0.3, 0.32, 0.24],
                 'r': [['**prezent**', 'acțiune în momentul vorbirii sau după', 'auxiliarul *a avea* + **infinitiv**', '*aș cânta*'],
                       ['**perfect**', 'acțiune înainte de momentul vorbirii', '*a avea* + *fi* + **participiu**', '*aș fi cântat*']]},
                {'t': 'text', 'p': ['Formele auxiliarului: **aș, ai, ar, am, ați, ar**.']},
            ]),
            ('3. DE REȚINUT', [
                {'t': 'text', 'p': ['• Negativul: *nu aș cânta / n-aș cânta; nu ar fi cântat / n-ar fi cântat*.',
                                    '• **cam, mai, tot** stau între auxiliar și infinitiv (*aș mai cânta*) și, la perfect, între cele două auxiliare (*aș mai fi cântat*).',
                                    '• În limbajul familiar există **forme inverse**: *Cântare-aș, dar n-am glas!*',
                                    '• Verbele predicative la condițional-optativ sunt **predicate verbale**.']},
                {'t': 'atentie', 'titlu': 'Ortograme', 'p': ['*n-aș* (nu aș) ≠ *naș* · *s-ar* (se ar) ≠ *sar* · *c-ai* (că ai) ≠ *cai* · *m-ai* (mă ai) ≠ *mai*']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„ar fi trăit” – verb predicativ, modul condițional-optativ, timpul perfect, persoana a III-a, numărul singular, funcția sintactică de predicat verbal.*']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-16',
        'titlu': 'Verbul copulativ a fi. Predicatul nominal',
        'sub': SUB.format(n=16, pp='pp. 72-73'),
        'sursa': 'Sursa: Manual Art 6, pp. 72-73, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. PREDICATUL NOMINAL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Predicatul nominal** = verbul copulativ **a fi** + **nume predicativ**.']},
                {'t': 'text', 's': 16, 'p': ['*Ioana* **{m:este}** **{a:elevă}**. · *Fetele* **{m:sunt}** **{a:înalte}**.']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['{m:verb copulativ} + {a:nume predicativ}']},
            ]),
            ('2. VERBUL COPULATIV ȘI NUMELE PREDICATIV', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'verbul copulativ', 'col': 'm', 'p': ['face legătura dintre subiect și numele predicativ', 'nu are înțeles de sine stătător (nepredicativ)', 'formează predicat nominal când are **mod**']},
                    {'titlu': 'numele predicativ', 'col': 'a', 'p': ['arată o **caracteristică** a subiectului', 'se exprimă prin **adjectiv** sau **substantiv**', '**simplu** (*Ina este mică.*) sau **multiplu** (*Ina este mică și cuminte.*)']},
                ]},
                {'t': 'text', 'p': ['Numele predicativ intră într-o **relație ternară**: e cerut de verbul copulativ și depinde de subiect, care îi impune **genul și numărul** (*Fetele sunt eleve. Băiatul este inteligent.*).']},
            ]),
            ('3. TREI FELURI DE A FI', [
                {'t': 'tabel', 'cap': ['A fi este', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['**copulativ**', '*Ileana este frumoasă.*'],
                       ['**predicativ** (se află, există)', '*Vlad este în laborator.*'],
                       ['**auxiliar**', '*Aș fi mâncat un măr.*']]},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„să fie mai ușoară” – predicat nominal alcătuit din verb copulativ, modul conjunctiv, timpul prezent, persoana a III-a, numărul singular + nume predicativ exprimat prin adjectiv propriu-zis, variabil, acordat cu „trezirea” (feminin, singular), gradul comparativ de superioritate.*']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-17',
        'titlu': 'Subiectul',
        'sub': SUB.format(n=17, pp='pp. 74-75'),
        'sursa': 'Sursa: Manual Art 6, pp. 74-75, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Subiectul** arată **cine face acțiunea** unui predicat verbal sau **cui i se atribuie** o însușire exprimată de numele predicativ. Răspunde la întrebarea **cine?** (*ce?*)']},
                {'t': 'text', 'p': ['Subiectul și predicatul sunt într-o relație de **interdependență**: fiecare îi impune ceva celuilalt.']},
            ]),
            ('2. FELURILE SUBIECTULUI', [
                {'t': 'tabel', 'cap': ['Felul', 'Ce înseamnă', 'Exemplu'], 'lat': [0.2, 0.48, 0.32],
                 'r': [['**simplu**', 'un singur termen', '*Ana citește.*'],
                       ['**multiplu**', 'doi sau mai mulți termeni, legați prin virgulă sau *și*', '*Dan și Ina scriu.*'],
                       ['**subînțeles**', 'neexprimat, dar spus înainte; verbul la persoana a III-a', '*Vântul bate și mișcă ramurile.*'],
                       ['**inclus**', 'neexprimat, dedus din desinența verbului la persoanele I și a II-a', '*Alergăm în curte.* (noi)']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Enunțurile cu verbe despre vreme (*Plouă. Geruiește.*) **nu au subiect**.']},
            ]),
            ('3. DE REȚINUT', [
                {'t': 'atentie', 'p': ['La persoanele I și a II-a nu exprim subiectul prin pronume, fiindcă desinența spune deja cine face acțiunea. Îl exprim doar pentru **insistență** (*Tu ai murdărit tabla, tu s-o ștergi.*) sau **opoziție** (*Eu lucrez și tu doar privești.*).']},
                {'t': 'text', 'p': ['• Predicatul se **acordă** în persoană și număr cu subiectul; la subiect multiplu, verbul e la **plural**.',
                                    '• La pronume diferite, **persoana I** are prioritate față de a II-a și a III-a, iar **a II-a** față de a III-a: *Noi și voi vom participa.*']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„doamna” – subiect, exprimat prin substantiv comun, genul feminin, numărul singular, articulat cu articolul hotărât „-a”.*']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-18',
        'titlu': 'Complementul. Posibilitățile combinatorii ale verbului',
        'sub': SUB.format(n=18, pp='pp. 76-77'),
        'sursa': 'Sursa: Manual Art 6, pp. 76-77, rubricile Repere.' + CREATE,
        'sect': [
            ('1. COMPLEMENTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Complementul** este o parte secundară de propoziție care **determină un verb**.']},
                {'t': 'tabel', 'cap': ['Întrebările complementului', 'Exemplu'], 'lat': [0.4, 0.6],
                 'r': [['*pe cine? ce?*', '*Anca îl strigă* **pe Matei**. *Maria face* **un desen**.'],
                       ['*la cine? la ce? după cine? pentru ce?* etc.', '*Luiza fuge* **după el**. *Mă gândesc* **la vacanță**.'],
                       ['*cui?*', '*Dinu îi dă* **Adinei** *un sendviș.*']]},
                {'t': 'text', 'p': ['Se exprimă prin **substantiv** (*Scrie un e-mail.*) sau **pronume** (*Mă gândesc la el.*).']},
            ]),
            ('2. VERBUL, CENTRUL PROPOZIȚIEI', [
                {'t': 'text', 'p': ['Când are **mod**, verbul este **centrul** unui grup de cuvinte și are funcția de **predicat verbal** (verb predicativ) sau intră într-un **predicat nominal** (verb copulativ + nume predicativ).']},
                {'t': 'tabel', 'cap': ['Verbul se combină cu', 'Relația'], 'lat': [0.35, 0.65],
                 'r': [['**subiectul**', 'interdependență: poziție favorizată'],
                       ['**numele predicativ**', 'relație ternară, cu verbul copulativ și cu subiectul'],
                       ['**complementul, circumstanțialul**', 'se subordonează unui verb predicativ']]},
                {'t': 'atentie', 'p': ['Predicatul **nu se repetă** într-o propoziție: două predicate înseamnă **două propoziții**.']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-6/unitatea-2/lectia-19',
        'titlu': 'Circumstanțialul. Prepoziția',
        'sub': SUB.format(n=19, pp='pp. 76-77'),
        'sursa': 'Sursa: Manual Art 6, pp. 76-77, rubricile Repere și desenul din Explorare.',
        'sect': [
            ('1. CIRCUMSTANȚIALUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțialul** determină un verb și arată **împrejurările** în care se desfășoară acțiunea.']},
                {'t': 'tabel', 'cap': ['Împrejurarea', 'Întrebările', 'Exemplu'], 'lat': [0.2, 0.35, 0.45],
                 'r': [['**locul**', '*unde? pe unde? încotro?*', '*În pauză, stăm* **în clasă**.'],
                       ['**timpul**', '*când? de când? până când?*', '**În pauză**, *stăm în clasă.*'],
                       ['**modul**', '*cum? în ce fel?*', '*Alex aleargă* **cu viteză**.']]},
                {'t': 'text', 'p': ['Se exprimă, ca și complementul, prin **substantiv** (*Plec la munte.*) sau **pronume** (*Merg la ei.*).']},
            ]),
            ('2. PREPOZIȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Prepoziția** leagă un **atribut**, un **complement** sau un **circumstanțial** de cuvântul determinat.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'simple', 'col': 't', 'p': ['un singur termen', '*cu, de, în, între, la, lângă*']},
                    {'titlu': 'compuse', 'col': 'm', 'p': ['doi sau mai mulți termeni', '*de la, de pe lângă, despre, înspre*']},
                ]},
                {'t': 'text', 'p': ['• Unele au **sens** (*sub, lângă, spre, în*), altele sunt **fără sens** (*de, la*).',
                                    '• Prepoziția **se analizează împreună** cu partea de vorbire înaintea căreia se află: *Băncile* **din clasă** *sunt albe.*']},
            ]),
        ],
    },
]
