# Scheme-notițe, clasa a VII-a, Unitatea I „Călătorie în necunoscut”.
# Conținutul vine din rubricile Repere ale Manualului Art 7, pp. 28-38;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-7-unitatea-1.py

SUB = 'Clasa a VII-a · Unitatea I, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-7/unitatea-1/lectia-10',
        'titlu': 'Fraza. Coordonarea. Punctul și virgula',
        'sub': SUB.format(n=10, pp='pp. 28-29'),
        'sursa': 'Sursa: Manual Art 7, pp. 28-29, rubricile Repere și schemele frazelor.',
        'sect': [
            ('1. FRAZA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Fraza** este un enunț alcătuit din **două sau mai multe propoziții**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'propoziția principală', 'col': 't', 'p': ['are **sens de sine stătător**', 'o frază are **cel puțin o** principală']},
                    {'titlu': 'propoziția secundară', 'col': 'm', 'p': ['**depinde ca sens** de alta']},
                ]},
                {'t': 'text', 'p': ['*Tânărul aude 1/ că bate vântul 2/ și că tigrul rage. 3/* → 1 principală; 2 și 3 secundare, coordonate prin *și*.']},
            ]),
            ('2. COORDONAREA', [
                {'t': 'text', 'p': ['**Coordonarea** este raportul dintre propoziții **de același fel** (principale între ele sau secundare între ele).']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'prin joncțiune', 'col': 't', 'p': ['cu **conectori**: *ci, dar, deci, și, iar, ori, sau*', '*Tigrul este fioros,* **dar** *Pi nu se sperie.*']},
                    {'titlu': 'prin juxtapunere', 'col': 'm', 'p': ['**fără** cuvinte de legătură; pauza se marchează prin **virgulă** sau **punct și virgulă**', '*Pi doarme, tigrul doarme, oceanul doarme și el.*']},
                ]},
                {'t': 'text', 'p': ['În frazele mai lungi, cele două se pot **combina**: *Pi se trezește, 1/ tigrul se trezește 2/ și oceanul se află în jurul lor. 3/* (1-2 juxtapunere, 2-3 joncțiune prin *și*). În schemă, propozițiile coordonate stau **pe același nivel**.']},
            ]),
            ('3. PAȘII ANALIZEI', [
                {'t': 'text', 'p': ['1. găsesc **predicatele**;',
                                    '2. găsesc **elementele de relație** (cuvinte de legătură, semne de punctuație);',
                                    '3. împart fraza în propoziții și le **numerotez**;',
                                    '4. stabilesc **relațiile** dintre ele.']},
            ]),
            ('4. PUNCTUL ȘI VIRGULA', [
                {'t': 'nota', 'p': ['Separă propoziții **independente sintactic**, dar **legate ca sens**. Marchează o pauză **mai mare decât virgula**. Autorul alege dacă îl folosește în locul punctului sau al virgulei: *Oceanul se întinde nesfârșit; gândurile lui Pi sunt infinite.*']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-7/unitatea-1/lectia-11',
        'titlu': 'Conjuncția',
        'sub': SUB.format(n=11, pp='pp. 30-31'),
        'sursa': 'Sursa: Manual Art 7, pp. 30-31, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Conjuncția** este o parte de vorbire **neflexibilă** care leagă: în propoziție, **două părți de propoziție de același fel**; în frază, **două propoziții** (de același fel sau diferite).']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'simple', 'col': 't', 'p': ['un termen', '*ci, dar, fie, iar, însă, ori, sau, și*']},
                    {'titlu': 'compuse', 'col': 'm', 'p': ['doi sau mai mulți termeni', '*ca să*']},
                ]},
            ]),
            ('2. CONJUNCȚIILE COORDONATOARE', [
                {'t': 'tabel', 'cap': ['Felul', 'Exprimă', 'Conjuncții', 'Virgula'], 'lat': [0.17, 0.2, 0.21, 0.42],
                 'r': [['**copulative**', 'asocierea', '*și, nici*', ''],
                       ['**disjunctive**', 'excluderea, alternativa', '*sau, ori, fie, ba*', 'în perechi, **virgulă** înaintea celui de-al doilea: *Sau vii, sau pleci.*'],
                       ['**adversative**', 'opoziția', '*dar, iar, ci, însă, or*', '**totdeauna virgulă** înainte; *însă* în mijlocul propoziției nu se izolează: *Colegul tău a sosit, al meu însă întârzie.*'],
                       ['**concluzive**', 'concluzia', '*deci*', 'în interiorul propoziției nu se desparte: *Am început deci lecția.*']]},
            ]),
            ('3. CONJUNCȚIILE SUBORDONATOARE', [
                {'t': 'text', 'p': ['Leagă propoziții **care nu sunt de același fel**: *că, să, dacă, fiindcă, deși, încât*.']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„și” – conjuncție simplă coordonatoare copulativă.*']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-7/unitatea-1/lectia-12',
        'titlu': 'Derivarea',
        'sub': SUB.format(n=12, pp='pp. 32-33'),
        'sursa': 'Sursa: Manual Art 7, pp. 32-33, rubrica Repere.',
        'sect': [
            ('1. CUVÂNTUL DE BAZĂ ȘI RĂDĂCINA', [
                {'t': 'text', 'p': ['**Cuvântul de bază** este punctul de plecare pentru cuvinte noi. **Rădăcina** este partea comună cuvântului de bază și tuturor cuvintelor formate din el; poate avea altă formă decât cuvântul de bază:']},
                {'t': 'tabel', 'cap': ['Cuvântul de bază', 'Derivatul', 'Rădăcina'], 'lat': [0.33, 0.34, 0.33], 'al': ['c', 'c', 'c'],
                 'r': [['*nepot*', '*nepoțel*', '*nepoț-*'], ['*măr*', '*merișor*', '*mer-*'], ['*verde*', '*a înverzi*', '*verz-*']]},
            ]),
            ('2. SUFIXELE ȘI PREFIXELE', [
                {'t': 'tabel', 'cap': ['', 'Unde stau', 'Exemple'], 'lat': [0.22, 0.28, 0.5],
                 'r': [['**sufixe lexicale**', 'după rădăcină; formează cuvinte noi', '*inim-os, copil-aș*'],
                       ['**sufixe gramaticale**', 'creează forme ale aceluiași cuvânt', '*cumpăr-a-se*: *-a-* (perfect simplu), *-se-* (mai-mult-ca-perfect)'],
                       ['**prefixe**', 'înaintea rădăcinii', '*stră-vechi, ne-înțeles*']]},
                {'t': 'text', 'p': ['Sufixul lexical îl caut pe **forma de dicționar**: *copilașul* → *copilaș* → **-aș**.']},
                {'t': 'tabel', 'cap': ['Diminutivele exprimă', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['micșorarea', '*copilaș*'], ['simpatia', '*Am un nepoțel isteț.*'], ['deprecierea', '*Era un biet funcționăraș.*'], ['atenuarea', '*Stai un momențel!*']]},
            ]),
            ('3. DERIVAREA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Derivarea** formează cuvinte noi cu ajutorul **sufixelor** și al **prefixelor**.']},
                {'t': 'text', 'p': ['• **Derivat parasintetic**: prefix și sufix în același timp: *a în-lemn-i*.',
                                    '• **Serie derivativă**: *grădină → grădinar → grădinărie*.']},
                {'t': 'atentie', 'titlu': 'Scrierea', 'p': ['Prefixele se scriu **legat**; excepție: *ex-* cu sensul „fost” (*ex-președinte*). Dacă baza începe cu **î**, derivatul păstrează **î** după prefix: *neînceput*.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-7/unitatea-1/lectia-13',
        'titlu': 'Compunerea. Familia lexicală',
        'sub': SUB.format(n=13, pp='pp. 34-35'),
        'sursa': 'Sursa: Manual Art 7, pp. 34-35, rubricile Repere.',
        'sect': [
            ('1. COMPUNEREA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Compunerea** formează cuvinte noi unind sau alăturând doi sau mai mulți termeni, care își pierd, de obicei, sensul de sine stătător.']},
                {'t': 'tabel', 'cap': ['Procedeul', 'Exemple'], 'lat': [0.35, 0.65],
                 'r': [['**alăturarea** (termenii nu depind unul de altul)', '*câine-lup, despre, după-amiază, anglo-român, Cluj-Napoca, de pe lângă*'],
                       ['**subordonarea** (un termen depinde de celălalt)', '*coate-goale, capră-neagră, rea-voință, mătasea-broaștei, stea-de-mare, papă-lapte*'],
                       ['**abrevierea**', '*ONU* (inițiale), *Tarom* (inițiale și fragmente), *Petrom* (fragmente), *Romgaz* (fragmente și cuvinte)']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Compuse pot fi toate părțile de vorbire: *bunăvoință, a binecuvânta, cuminte, dumneavoastră, unsprezece, numai, de pe lângă, ca să*.']},
            ]),
            ('2. ELEMENTELE SAVANTE', [
                {'t': 'tabel', 'cap': ['Element', 'Sens', 'Element', 'Sens'], 'lat': [0.16, 0.34, 0.16, 0.34],
                 'r': [['*auto-*', 'de la sine, propriu', '*micro-*', 'mic'],
                       ['*bio-*', 'referitor la viață', '*macro-*', 'mare'],
                       ['*geo-*', 'referitor la pământ', '*poli-*', 'mai mulți'],
                       ['*hidro-*', 'referitor la apă', '*pseudo-*', 'fals'],
                       ['*tele-*', 'departe, la distanță', '*zoo-*', 'referitor la animale']]},
            ]),
            ('3. DE REȚINUT', [
                {'t': 'text', 'p': ['• Abrevierile cu inițiale se scriu, preferabil, **fără puncte** (DOOM3): *ONU*.',
                                    '• Nu toate abrevierile sunt compuse: *N* (nord), *dr.*, *art.*, *ian.* sunt **prescurtări**.',
                                    '• **Ortografia** nu arată procedeul: un compus scris legat poate fi alăturare (*despre*), subordonare (*binevoitor*) sau abreviere (*aprozar*). Cratima **nu** e un criteriu. La nevoie, verific în **DOOM3**.']},
            ]),
            ('4. FAMILIA LEXICALĂ', [
                {'t': 'nota', 'p': ['**Familia lexicală** cuprinde toate cuvintele formate de la un cuvânt de bază prin **derivare**, **compunere** și **conversiune** (trecerea în altă clasă gramaticală, de exemplu adjectivele din participiu).']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-7/unitatea-1/lectia-15',
        'titlu': 'Categoriile semantice. Confuziile paronimice',
        'sub': SUB.format(n=15, pp='p. 37'),
        'sursa': 'Sursa: Manual Art 7, p. 37, rubrica Repere.',
        'sect': [
            ('1. RELAȚII DE SENS', [
                {'t': 'tabel', 'cap': ['Categoria', 'Ce este'], 'lat': [0.25, 0.75],
                 'r': [['**sinonimele**', 'formă diferită, sens asemănător sau identic'],
                       ['**antonimele**', 'formă diferită, sens diametral opus'],
                       ['**omonimele**', 'aceeași formă, sensuri **complet diferite**; **omofonele** se pronunță la fel, **omografele** se scriu la fel'],
                       ['**cuvântul polisemantic**', 'mai multe sensuri **legate între ele**'],
                       ['**paronimele**', 'formă asemănătoare, înțeles diferit']]},
            ]),
            ('2. SENSURILE UNUI CUVÂNT', [
                {'t': 'tabel', 'cap': ['Sensul', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['propriu de bază', '*Era înalt și avea* **umeri** *largi.*'],
                       ['propriu secundar', '*Am un sacou cu* **umeri** *prea largi.*'],
                       ['figurat (valoare expresivă)', '*A reușit sprijinindu-se pe* **umerii** *altora.*']]},
            ]),
            ('3. PARONIMELE ȘI CONFUZIA PARONIMICĂ', [
                {'t': 'text', 'p': ['Paronimele se deosebesc printr-un sunet, cel mult două sau prin **ordinea** sunetelor:']},
                {'t': 'tabel', 'cap': ['Perechea', 'Sensurile'], 'lat': [0.35, 0.65],
                 'r': [['*temporal – temporar*', 'care se referă la timp / pentru o perioadă de timp'],
                       ['*oral – orar*', 'rostit / program stabilit pe ore'],
                       ['*a revela – a releva*', 'a dezvălui / a evidenția']]},
                {'t': 'atentie', 'p': ['**Confuzia paronimică** este greșeala de a folosi un cuvânt în locul paronimului său. Când am îndoieli, verific sensul în dicționar.']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-7/unitatea-1/lectia-16',
        'titlu': 'Locuțiuni, termeni științifici, limbaj popular, variație regională',
        'sub': SUB.format(n=16, pp='p. 38'),
        'sursa': 'Sursa: Manual Art 7, p. 38, rubrica Repere.' + CREATE,
        'sect': [
            ('1. LOCUȚIUNILE ȘI ÎMBINĂRILE LIBERE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'locuțiunea', 'col': 't', 'p': ['grup **stabil**, cu **sens unitar**; termenii își pierd sensul inițial', 'funcționează ca **un singur cuvânt** și are valoarea cuvântului cu care e sinonimă', '*a o lua la sănătoasa* (= a fugi)']},
                    {'titlu': 'îmbinarea liberă', 'col': 'm', 'p': ['fiecare cuvânt își păstrează **sensul** și **funcția sintactică**', 'unele tind să devină locuțiuni: *aurul negru* („petrol”)', '*a lua o carte*']},
                ]},
            ]),
            ('2. TERMENII ȘTIINȚIFICI', [
                {'t': 'tabel', 'cap': ['Domeniul', 'Exemplu', 'Domeniul', 'Exemplu'], 'lat': [0.22, 0.28, 0.22, 0.28],
                 'r': [['arheologie', '*sit*', 'lingvistică', '*substantiv*'],
                       ['biologie', '*citoplasmă*', 'matematică', '*ecuație*'],
                       ['fizică', '*densimetru*', 'medicină', '*incizie*']]},
            ]),
            ('3. LIMBAJUL POPULAR ȘI VARIAȚIA REGIONALĂ', [
                {'t': 'text', 'p': ['**Limbajul popular** e cunoscut pe tot teritoriul țării, dar **nu este literar**: *lănțug* („lănțișor”), *a umbla lela* („a umbla fără rost”); în sens larg, și limbajul urban nonstandard.']},
                {'t': 'tabel', 'cap': ['Variația regională prin', 'Exemple (formă regională / literară)'], 'lat': [0.35, 0.65],
                 'r': [['pronunție', '*șinși* / *cinci*'],
                       ['forme gramaticale', '*o făcut* / *a făcut*; *ei mersese* / *ei merseseră*'],
                       ['construcții sintactice', '*ei s-a dus* / *ei s-au dus*'],
                       ['cuvinte specifice unei zone', '*laibăr* („vestă”, Ardeal), *blagă* („bogăție”, Banat)']]},
                {'t': 'atentie', 'p': ['În scris și la școală folosesc formele **literare**; formele regionale le recunosc în texte și le explic.']},
            ]),
        ],
    },
]
