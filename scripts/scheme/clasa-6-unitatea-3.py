# Scheme-notițe, clasa a VI-a, Unitatea a III-a „Dincolo de ferestre”.
# Conținutul vine din rubricile Repere ale Manualului Art 6, pp. 86-115;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-6-unitatea-3.py

SUB = 'Clasa a VI-a · Unitatea a III-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-3',
        'titlu': 'Descrierea în versuri. Tabloul. Pastelul',
        'sub': SUB.format(n=3, pp='pp. 86-87'),
        'sursa': 'Sursa: Manual Art 6, pp. 86-87, rubricile Repere; textul de bază este „Iarna” de Vasile Alecsandri.',
        'sect': [
            ('1. TEXTUL DESCRIPTIV LITERAR', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Prezintă **sugestiv** elementele componente și proprietățile particulare ale unui obiect, ale unei ființe sau ale unui spațiu.']},
                {'t': 'text', 'p': ['• Părțile componente pot avea, la rândul lor, alte **elemente componente**, cu alte **proprietăți**.',
                                    '• Obiectul descris poate fi pus în legătură cu **alte obiecte** din spațiu și cu **timpul** (momentul în care e observat).']},
                {'t': 'tabel', 'cap': ['Obiectul descris', 'Element component', 'Proprietăți'], 'lat': [0.3, 0.3, 0.4], 'al': ['c', 'c', 'l'],
                 'r': [['peisaj de iarnă', 'câmp', '*alb*'], ['', 'dealuri', '*albe*'], ['', 'plopi', '...']]},
            ]),
            ('2. TABLOUL', [
                {'t': 'text', 'p': ['**Tabloul** este o formă a descrierii care înfățișează un aspect din **natură**, un **interior** sau **scene** din viața de zi cu zi, într-o imagine cuprinsă **dintr-o privire**.',
                                    'Tabloul literar seamănă cu o **fotografie** sau cu o **pictură**. În *Iarna* sunt două tablouri: **iarna înfricoșătoare** (primele trei strofe) și **iarna veselă** (ultima strofă).']},
            ]),
            ('3. PASTELUL', [
                {'t': 'nota', 'p': ['Poeziile care descriu natura sau un interior și transmit, în același timp, **sentimentele privitorului** seamănă cu tablourile făcute cu creioane colorate moi, numite **pasteluri**. De aceea Vasile Alecsandri și-a numit astfel poeziile.']},
            ]),
            ('4. CUM CITESC O DESCRIERE ÎN VERSURI', [
                {'t': 'text', 'p': ['• unde se află **privitorul** (aproape, departe, în mijlocul peisajului)?',
                                    '• cum e imaginea: **panoramică** sau **detaliată**?',
                                    '• în ce ordine merge privirea: **planul terestru**, **planul ceresc**?',
                                    '• ce **culoare** domină și ce **stare** creează?']},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-4',
        'titlu': 'Epitetul. Versificația',
        'sub': SUB.format(n=4, pp='pp. 88-89'),
        'sursa': 'Sursa: Manual Art 6, pp. 88-89, rubricile Repere și exercițiile de versificație din Explorare.',
        'sect': [
            ('1. FIGURILE DE STIL', [
                {'t': 'text', 'p': ['**Figurile de stil** dau **expresivitate** textului. Nu e destul să le recunosc: le dau un **sens** în legătură cu întregul text. Într-o descriere, ele conturează **original** elementul descris.']},
            ]),
            ('2. EPITETUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Epitetul** determină un **substantiv** sau un **verb** prin cuvinte care arată **însușiri deosebite** ale obiectului sau ale acțiunii.']},
                {'t': 'tabel', 'cap': ['Felul', 'Exemplu'], 'lat': [0.4, 0.6],
                 'r': [['pe lângă substantiv, prin **adjectiv**', '*„sanie ușoară”*'],
                       ['pe lângă substantiv, prin **substantiv** (metale, pietre prețioase, materii)', '*„fiori de gheață”*'],
                       ['pe lângă **verb**', '*„voios răsună”*'],
                       ['**cromatic** (culoarea)', '*„umeri dalbi”*'],
                       ['**personificator**', '*„mândra țară”*']]},
                {'t': 'tabel', 'cap': ['După numărul termenilor', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['simplu', '*„clăbuci albii”*'],
                       ['dublu', '*„soarele rotund și palid”*'],
                       ['triplu', '*„pe câmpia înălbită, netedă, strălucitoare”*'],
                       ['în cumul', '*„Rece, fragilă, nouă, virginală, / Lumina...”* (Tudor Arghezi)']]},
            ]),
            ('3. VERSIFICAȚIA', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce este'], 'lat': [0.2, 0.8],
                 'r': [['**versul**', 'un rând dintr-o poezie'],
                       ['**strofa**', 'un grup de versuri, despărțit de altele printr-un rând liber'],
                       ['**măsura**', '**numărul de silabe** dintr-un vers'],
                       ['**rima**', 'potrivirea sunetelor de la sfârșitul versurilor, începând cu **ultima vocală accentuată**']]},
                {'t': 'nota', 'titlu': 'Cum număr silabele:', 'p': ['despart versul în silabe așa cum se rostește: vocalele alăturate care se pronunță împreună (*s-a-nceput*) formează o singură silabă.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-14',
        'titlu': 'Substantivul. Colectivele și defectivele',
        'sub': SUB.format(n=14, pp='pp. 102-104'),
        'sursa': 'Sursa: Manual Art 6, pp. 102-104, rubricile Repere.',
        'sect': [
            ('1. SUBSTANTIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Substantivul** denumește ființe, lucruri, fenomene, însușiri, acțiuni, stări sufletești, adică **obiecte** în sens larg.']},
                {'t': 'tabel', 'cap': ['Categoria', 'Tipurile'], 'lat': [0.2, 0.8],
                 'r': [['felul', '**comune** (clase de obiecte) / **proprii** (individualități, cu literă mare)'],
                       ['genul', '**masculin** (*un brad, doi brazi*), **feminin** (*o sanie, două sănii*), **neutru** (*un dar, două daruri*)'],
                       ['numărul', '**singular** (*cizmă*) / **plural** (*cizme*); unele nu își schimbă forma (*pui*); unele au două plurale cu sensuri diferite (*elemente chimice / elemenți de calorifer*)'],
                       ['articolul', '**nearticulat** (*brad*); **articulat hotărât**, lipit la sfârșit (*bradul, fata*); **articulat nehotărât**, separat, înainte (*un brad, o fată*)']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Substantivul precedat de prepoziție se analizează **împreună** cu ea.']},
            ]),
            ('2. SUBSTANTIVELE COLECTIVE', [
                {'t': 'text', 'p': ['Au la **singular înțeles de plural**: *familie, echipă, grup, juriu*.']},
                {'t': 'tabel', 'cap': ['Situația', 'Acordul cu predicatul'], 'lat': [0.5, 0.5],
                 'r': [['colectivul singur, subiect', 'la **singular**: *Clasa noastră a mers la schi.*'],
                       ['colectivul + un substantiv la plural', '**singular sau plural**: *O mulțime de copii a / au mers la schi.*']]},
            ]),
            ('3. SUBSTANTIVELE DEFECTIVE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'numărabile', 'col': 't', 'p': ['*elev, elevi*']},
                    {'titlu': 'nonnumărabile', 'col': 'm', 'p': ['*sare*']},
                ]},
                {'t': 'tabel', 'cap': ['Defective', 'Exemplu'], 'lat': [0.5, 0.5],
                 'r': [['**de plural** (au numai singular)', '*oțet*'],
                       ['**de singular** (au numai plural)', '*ochelari*']]},
                {'t': 'nota', 'titlu': 'Numele de materii:', 'p': ['la plural arată **sortimente**: *Cumpăr făină.* (materia) / *Patiserul s-a aprovizionat cu diverse făinuri.* (sortimente)']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-15',
        'titlu': 'Cazul nominativ',
        'sub': SUB.format(n=15, pp='p. 105'),
        'sursa': 'Sursa: Manual Art 6, p. 105, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE CAZUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Cazul** este forma pe care o ia substantivul ca să exprime **funcția sintactică** în propoziție.']},
            ]),
            ('2. NOMINATIVUL', [
                {'t': 'text', 'p': ['Substantivul este în **nominativ** când are funcția de:']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'subiect', 'col': 't', 'p': ['răspunde la *cine? ce?*', '**Copiii** *se joacă.*']},
                    {'titlu': 'nume predicativ', 'col': 'a', 'p': ['după verbul copulativ', '*Tata este* **avocat**.']},
                ]},
                {'t': 'tabel', 'cap': ['Forma', 'Exemplu'], 'lat': [0.4, 0.6],
                 'r': [['articulat hotărât', '*Copiii se joacă.*'],
                       ['articulat nehotărât', '*Niște fetițe râd.*'],
                       ['nearticulat', '*Vine ger mare.*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Ca nume predicativ, substantivul în nominativ este, cel mai des, **nearticulat**.']},
            ]),
            ('3. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„iarna” – substantiv comun, genul feminin, numărul singular, cazul nominativ, articulat cu articolul hotărât „-a”, funcția sintactică de subiect.*']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-16',
        'titlu': 'Cazul acuzativ. Complementul direct și complementul prepozițional',
        'sub': SUB.format(n=16, pp='pp. 106-108'),
        'sursa': 'Sursa: Manual Art 6, pp. 106-108, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. ACUZATIVUL', [
                {'t': 'text', 'p': ['Substantivul cu funcția de **complement**, cu sau fără prepoziție, este în **acuzativ**. La nominativ și la acuzativ, substantivele au **aceeași formă** (omonimie cazuală).']},
            ]),
            ('2. DOUĂ COMPLEMENTE', [
                {'t': 'tabel', 'cap': ['', 'Complementul direct', 'Complementul prepozițional'], 'lat': [0.18, 0.41, 0.41],
                 'r': [['ce arată', 'obiectul asupra căruia acționează autorul faptei', 'obiectul care este ținta acțiunii sau pentru care se acționează'],
                       ['întrebările', '*pe cine? ce?*', '*pentru cine? de ce? la cine? la ce? de la cine?* etc.'],
                       ['forma', 'acuzativ, **cu sau fără *pe***', 'acuzativ, **cu prepoziție**'],
                       ['exemple', '*Dan colorează* **desenul**. *O zăresc* **pe Maria**.', '*Nu se satură* **de cărți**. *Se gândește* **la o expoziție**.']]},
            ]),
            ('3. PE: DIRECT SAU PREPOZIȚIONAL?', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'complement direct', 'col': 't', 'p': ['poate fi **dublat** de o formă neaccentuată a pronumelui', '**Îl** *ascult* **pe Dan**.']},
                    {'titlu': 'complement prepozițional', 'col': 'm', 'p': ['**nu** poate fi dublat', '*Contez* **pe prieteni**. (nu: *Îi contez pe prieteni*)']},
                ]},
            ]),
            ('4. ORTOGRAFIA LA PLURAL', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Face parte din cuvânt', 'Desinența', 'Articolul hotărât'], 'lat': [0.25, 0.25, 0.25, 0.25], 'al': ['c', 'c', 'c', 'c'],
                 'r': [['*copiii*', '*copi-*', '*-i-*', '*-i*'], ['*poeziile*', '*poezi-*', '*-i-*', '*-le*']]},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„pe prietenele” – substantiv comun, genul feminin, numărul plural, cazul acuzativ, articulat cu articolul hotărât „-le”, precedat de prepoziția simplă „pe”, funcția sintactică de complement direct.*']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-17',
        'titlu': 'Cazul acuzativ. Circumstanțialele. Atributul',
        'sub': SUB.format(n=17, pp='pp. 109-111'),
        'sursa': 'Sursa: Manual Art 6, pp. 109-111, rubricile Repere.',
        'sect': [
            ('1. COMPLINIRI OBLIGATORII ȘI FACULTATIVE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'obligatorii: complementele', 'col': 't', 'p': ['*El vede* **filmul**.', '*Se gândește* **la lucrare**.']},
                    {'titlu': 'facultative: circumstanțialele', 'col': 'm', 'p': ['arată împrejurările acțiunii', '*Ninge* **în oraș**.']},
                ]},
            ]),
            ('2. CIRCUMSTANȚIALELE', [
                {'t': 'tabel', 'cap': ['Circumstanțialul', 'Arată', 'Întrebările', 'Exemplu'], 'lat': [0.18, 0.28, 0.27, 0.27],
                 'r': [['**de loc**', 'situarea și orientarea în spațiu', '*unde? de unde? pe unde? încotro? dincotro?*', '*Aleargă* **până la gard**.'],
                       ['**de timp**', 'reperele în timp', '*când? de când? până când? cât timp?*', '*Am stat* **până la sfârșitul anului**.'],
                       ['**de mod**', 'felul în care se desfășoară acțiunea', '*cum? în ce fel?*', '*Mi-a vorbit* **cu blândețe**.']]},
                {'t': 'text', 'p': ['Substantivul circumstanțial este în **acuzativ**, cu **prepoziție**. Cu unele verbe, circumstanțialul de loc e **obligatoriu**: *locuiește* **în București**, *se îndreaptă* **spre casă**.']},
            ]),
            ('3. VIRGULA', [
                {'t': 'text', 'p': ['• De obicei, circumstanțialele **nu se despart** prin virgulă.',
                                    '• Se pot despărți când vreau să le **evidențiez**, puse înaintea verbului: *În această seară, am scris tema.*',
                                    '• Stau **între virgule** când sunt între subiect și predicat (*Ana, în această dimineață, n-a mers la școală.*) sau înaintea complementului direct (*Ana citește, cu atenție, textul.*).']},
            ]),
            ('4. SUBSTANTIVUL ÎN ACUZATIV POATE FI', [
                {'t': 'text', 'p': ['complement direct · complement prepozițional · circumstanțial de loc, de timp, de mod · **atribut substantival prepozițional** (determină un substantiv: *arțarul* **de lângă bloc**)']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-18',
        'titlu': 'Cazul dativ. Complementul indirect',
        'sub': SUB.format(n=18, pp='p. 112'),
        'sursa': 'Sursa: Manual Art 6, p. 112, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. COMPLEMENTUL INDIRECT', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Complementul indirect** determină un verb și arată **beneficiarul** unei acțiuni. Răspunde la întrebarea **cui?** Stă în cazul **dativ**.']},
                {'t': 'text', 'p': ['*Îi dau* **copilului** *un măr.* · *Sebastian îi spune* **mamei** *adevărul.*']},
            ]),
            ('2. DATIVUL NUMELOR DE PERSOANE', [
                {'t': 'tabel', 'cap': ['Numele', 'La dativ', 'Exemple'], 'lat': [0.4, 0.25, 0.35],
                 'r': [['masculine sau feminine terminate în consoană; nume străine', 'cu **lui** înainte', '*lui Petru, lui Carmen*'],
                       ['feminine terminate în **-a**', '**-ei**', '*Robertei, Mariei*'],
                       ['feminine terminate în **-ca, -ga**', '**-ăi**', '*Ericăi, Helgăi*']]},
            ]),
            ('3. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„vrăbiuțelor” – complement indirect, exprimat prin substantiv comun, genul feminin, numărul plural, cazul dativ, articulat cu articolul hotărât „-lor”.*']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-19',
        'titlu': 'Cazul genitiv. Articolul genitival',
        'sub': SUB.format(n=19, pp='pp. 113-114'),
        'sursa': 'Sursa: Manual Art 6, pp. 113-114, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. GENITIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Substantivul cu funcția de **atribut** care răspunde la întrebarea **al (a, ai, ale) cui?** este în **genitiv**: **atribut substantival genitival**.']},
                {'t': 'text', 'p': ['*Fratele* **Roxanei** *are șase ani.* · La **genitiv** și **dativ**, substantivele au **aceeași formă**.']},
            ]),
            ('2. ARTICOLUL GENITIVAL', [
                {'t': 'tabel', 'cap': ['', 'singular', 'plural'], 'lat': [0.34, 0.33, 0.33], 'al': ['l', 'c', 'c'],
                 'r': [['masculin (neutru)', '**al**', '**ai**'], ['feminin', '**a**', '**ale**']]},
                {'t': 'text', 'p': ['• Se **acordă** în gen și număr cu substantivul **determinat**: *pereții albi* **ai** *camerei; iarba albastră* **a** *câmpului*.',
                                    '• Într-o enumerare se **reia** înaintea fiecărui substantiv: *perdelele sufrageriei,* **ale** *bucătăriei și* **ale** *camerei*.',
                                    '• La unele nume proprii apare și **lui**: *caietul curat al lui Dan*.']},
            ]),
            ('3. SUBSTANTIVUL: CENTRU SAU ADJUNCT', [
                {'t': 'tabel', 'cap': ['Poziția', 'Exemple'], 'lat': [0.3, 0.7],
                 'r': [['**centru** al unui grup nominal', '*caiet* **curat**, *caiet* **de notițe**, *caietul* **copilului**'],
                       ['**adjunct** într-un grup nominal', 'atribut: *caiet* **de notițe**, *caietul* **copilului**'],
                       ['**adjunct** într-un grup verbal', '*Ia* **un caiet**. *Mă gândesc* **la caiet**. *Pixul este* **pe caiet**.']]},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„a tatălui” – substantiv comun, genul masculin, numărul singular, cazul genitiv, articulat cu articolul hotărât „-lui”, precedat de articolul genitival „a”, funcția sintactică de atribut substantival genitival.*']},
            ]),
        ],
    },
    # ---------------- Lecția 20 ----------------
    {
        'cale': 'clasa-6/unitatea-3/lectia-20',
        'titlu': 'Cazul vocativ',
        'sub': SUB.format(n=20, pp='p. 115'),
        'sursa': 'Sursa: Manual Art 6, p. 115, rubrica Repere.',
        'sect': [
            ('1. CE ESTE VOCATIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Substantivul prin care **chemăm** pe cineva sau îi **atragem atenția** este în **vocativ**.']},
                {'t': 'atentie', 'p': ['Substantivul în vocativ **nu are funcție sintactică**, dar poate fi **centru** pentru un atribut: *Nepotule* **drag**, *răspunde!*']},
            ]),
            ('2. FORMELE', [
                {'t': 'tabel', 'cap': ['Forma', 'Exemple'], 'lat': [0.4, 0.6],
                 'r': [['desinența **-e**', '*băiete, Vlade*'],
                       ['desinența **-ule**', '*copilule*'],
                       ['desinența **-o**', '*Ano*'],
                       ['desinența **-lor**', '*copiilor, fetelor*'],
                       ['aceeași formă cu nominativul', '*fată, Anca*']]},
            ]),
            ('3. PUNCTUAȚIA', [
                {'t': 'text', 'p': ['• În scris, vocativul se desparte prin **virgulă**: *Corina, pleci în vacanță?*',
                                    '• Uneori, după vocativ se pune **semnul exclamării**: *Mamă!*',
                                    '• Dacă are determinanți, **tot grupul** se desparte prin virgulă: *Dragi colegi de clasă, vă felicit!*']},
            ]),
        ],
    },
]
