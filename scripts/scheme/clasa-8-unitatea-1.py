# Scheme-notițe, clasa a VIII-a, Unitatea I „Unde găsim frumusețea?”. Conținutul
# vine din rubricile Repere ale Manualului Art 8, pp. 11-47; exemplele noi sunt
# anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-8-unitatea-1.py

SUB = 'Clasa a VIII-a · Unitatea I, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-2',
        'titlu': 'Textul liric. Versificația',
        'sub': SUB.format(n=2, pp='p. 11'),
        'sursa': 'Sursa: Manual Art 8, p. 11, rubrica Repere; textul de bază este „O, rămâi...” de Mihai Eminescu.',
        'sect': [
            ('1. TEXTUL LIRIC', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul liric** exprimă mai ales **stări, emoții, sentimente**, dar și idei, aspirații. Este marcat de **subiectivitate**: autorul imaginează un univers care redă felul lui de a vedea lumea.']},
            ]),
            ('2. VOCEA LIRICĂ ȘI MĂRCILE SUBIECTIVITĂȚII', [
                {'t': 'text', 'p': ['Vocea care rostește poezia **nu este autorul** ca persoană reală, ci o **construcție ficțională**, într-o ipostază umană: copilul, îndrăgostitul, admiratorul naturii, geniul, revoltatul. Poate fi chiar un obiect sau un element al naturii: în *O, rămâi...* vorbește **pădurea**.']},
                {'t': 'tabel', 'cap': ['Marca subiectivității', 'Exemplu'], 'lat': [0.5, 0.5],
                 'r': [['**persoana I singular** (cea mai puternică)', '*eu, mă, îmi; iubesc, simt*'],
                       ['celelalte persoane, mai ales a II-a', '*tu, rămâi, te văd*'],
                       ['interjecții, exclamații', '*O, rămâi...!*'],
                       ['interogații care nu așteaptă răspuns', '*Cine mă cheamă?*'],
                       ['verbe și substantive care exprimă trăiri, aprecieri', '*dor, a iubi, frumusețe*']]},
            ]),
            ('3. VERSIFICAȚIA (PROZODIA)', [
                {'t': 'text', 'p': ['**Versificația** cuprinde regulile de construcție a poeziei. Textele în versuri pot fi **lirice, epice sau dramatice**.']},
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce este'], 'lat': [0.22, 0.78],
                 'r': [['**versul**', 'un rând dintr-o poezie, încheiat cu un spațiu gol'],
                       ['**strofa**', 'un grup de versuri, despărțit de altele printr-un rând alb (blanc): **distih** (2 versuri), **terțină** (3), **catren** (4)'],
                       ['**măsura**', 'numărul de silabe dintr-un vers; constantă sau variabilă; scurtă (5-8), medie (9-11), lungă (12-18)'],
                       ['**rima**', 'potrivirea sunetelor de la sfârșitul versurilor, începând cu **ultima vocală accentuată**']]},
            ]),
            ('4. TIPURI DE RIMĂ ÎN CATREN', [
                {'t': 'tabel', 'cap': ['Rima', 'Schema'], 'lat': [0.5, 0.5], 'al': ['l', 'c'],
                 'r': [['împerecheată', 'a a b b'], ['încrucișată', 'a b a b'], ['îmbrățișată', 'a b b a'],
                       ['monorimă', 'a a a a'], ['semirimă', 'a b c b']]},
                {'t': 'nota', 'titlu': 'Rima imperfectă:', 'p': ['se potrivesc doar vocalele accentuate de la final, consoanele diferă: *creștet – veșted*.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-3',
        'titlu': 'Limbajul figurat. Aliterația',
        'sub': SUB.format(n=3, pp='p. 12'),
        'sursa': 'Sursa: Manual Art 8, p. 12, rubrica Repere.' + CREATE,
        'sect': [
            ('1. FIGURILE DE STIL ÎNVĂȚATE', [
                {'t': 'tabel', 'cap': ['Figura', 'Ce este', 'Cum o recunosc'], 'lat': [0.18, 0.44, 0.38],
                 'r': [['**personificarea**', 'dă însușiri omenești unor ființe necuvântătoare, lucruri, fenomene', 'substantiv + verb de acțiune omenească sau adjectiv de însușire umană; substantiv în vocativ'],
                       ['**epitetul**', 'arată o însușire deosebită a unui substantiv sau a unui verb', 'adjectiv, adverb sau substantiv (metale, pietre prețioase, materii)'],
                       ['**comparația**', 'un raport de asemănare între doi termeni', 'cuvinte de legătură: *ca, precum, cât, la fel ca*'],
                       ['**metafora**', 'trecerea la alt sens pe baza unei comparații subînțelese', '**explicită** (termenul e în text) sau **implicită** (lipsește)'],
                       ['**repetiția**', 'reluarea aceluiași sunet, cuvânt sau grup de cuvinte', 'de două sau mai multe ori']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Figurile de stil se pot **combina** între ele, dând textului expresivitate și sensuri multiple.']},
            ]),
            ('2. ALITERAȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Aliterația** este repetarea unei **consoane** sau a unui grup de consoane în cuvinte apropiate, pentru un efect **imitativ** sau **expresiv**.']},
                {'t': 'text', 'p': ['• De obicei, consoana stă la **începutul** cuvintelor.',
                                    '• Apare în poezie, dar și în reclame, în exercițiile de dicție, în cântece, în numele unor personaje.']},
                {'t': 'tabel', 'cap': ['Exemplul', 'Consoana', 'Ce sugerează'], 'lat': [0.5, 0.2, 0.3],
                 'r': [['*Vântul vâjâie viforos prin văi.*', '**v**', 'suflul vântului'],
                       ['*Șapte șerpi șerpuiesc șerpuitor spre șesuri.*', '**ș**', 'mișcarea alunecoasă (exercițiu de dicție)']]},
            ]),
            ('3. CUM COMENTEZ O FIGURĂ DE STIL', [
                {'t': 'text', 'p': ['1. **Numesc** figura și citez versul.',
                                    '2. **Explic** din ce e alcătuită (ce se compară, ce se personifică, ce însușire se subliniază).',
                                    '3. **Arăt ce sugerează**: ce idee, ce emoție, ce imagine întărește în poezie.']},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-6',
        'titlu': 'Figurile de stil. Enumerația și hiperbola',
        'sub': SUB.format(n=6, pp='p. 16'),
        'sursa': 'Sursa: Manual Art 8, p. 16, rubrica Repere; exemplul de enumerație e din „Izvorul nopții” de Lucian Blaga.' + CREATE,
        'sect': [
            ('1. ENUMERAȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Enumerația** este înșiruirea mai multor termeni de același fel (substantive, adjective, verbe), ca să atragă atenția asupra aspectelor descrise, să accentueze ideea sau să detalieze imaginea.']},
                {'t': 'text', 'p': ['*„din care tainic curge noaptea* **peste văi** */ și* **peste munți** *și* **peste șesuri**”']},
            ]),
            ('2. HIPERBOLA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Hiperbola** este exagerarea **intenționată** a însușirilor unei ființe, ale unui obiect sau a desfășurării unei întâmplări, ca să impresioneze cititorul.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'mărește', 'col': 't', 'p': ['*un uriaș cât un munte*']},
                    {'titlu': 'micșorează', 'col': 'm', 'p': ['*un pitic cât un bob de mazăre*']},
                ]},
                {'t': 'text', 'p': ['• Apare și în **vorbirea curentă**: *arde de nerăbdare, frumoasă foc, e un frig de crapă pietrele*.',
                                    '• Hiperbola se construiește întotdeauna **împreună cu alte figuri de stil**: epitete, comparații, metafore.']},
            ]),
            ('3. CUM O COMENTEZ', [
                {'t': 'nota', 'p': ['Numesc hiperbola și figura cu care se combină, arăt ce se exagerează și spun **ce efect** are: fascinația, intensitatea unei trăiri, unicitatea unei ființe, comicul unei situații.']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-10',
        'titlu': 'Compararea textelor sub aspectul conținutului și al structurii',
        'sub': SUB.format(n=10, pp='p. 21'),
        'sursa': 'Sursa: Manual Art 8, p. 21, rubrica Repere și modelul de comparație dat în manual.',
        'sect': [
            ('1. CE ÎNSEAMNĂ SĂ COMPAR DOUĂ TEXTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Găsesc **asemănările** și **deosebirile** dintre texte și le prezint **în paralel**, nu pe rând, text cu text.']},
            ]),
            ('2. PAȘII', [
                {'t': 'text', 'p': ['1. Stabilesc **criteriile** după care compar.',
                                    '2. Compar **conținutul**: idei, sentimente, tema, ipostaza vocii lirice, câmpurile lexicale.',
                                    '3. Compar **forma**: organizarea și așezarea versurilor în pagină, sonoritatea (ritm, rimă, măsură, aliterații), figurile de stil, imaginile artistice.']},
                {'t': 'tabel', 'cap': ['Imaginile artistice', 'Ce simț implică'], 'lat': [0.35, 0.65],
                 'r': [['vizuale', 'văzul'], ['auditive', 'auzul'], ['olfactive', 'mirosul'], ['tactile', 'pipăitul'], ['motorii', 'mișcarea']]},
            ]),
            ('3. UN MODEL DE COMPARAȚIE', [
                {'t': 'nota', 'p': ['*Cele trei texte au în comun apariția unui element acvatic din natură: marea în poeziile lui Lucian Blaga și Nichita Stănescu și lacul în cea a lui Mihai Eminescu. Acestea sunt diferite prin dimensiune, sugerând hiperbolic lumea în ansamblu, în primele două texte, și doar reflectarea imaginii ei în spațiul restrâns al lacului, în textul eminescian.*']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Observ: o asemănare, apoi o deosebire, fiecare explicată, cu trimitere la texte. Pentru trei texte folosesc o diagramă Venn cu trei cercuri.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-13',
        'titlu': 'Strategii de ascultare activă',
        'sub': SUB.format(n=13, pp='pp. 26-27'),
        'sursa': 'Sursa: Manual Art 8, pp. 26-27, rubrica Repere și grila de observare.',
        'sect': [
            ('1. CE ESTE ASCULTAREA ACTIVĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Ascultarea activă** înseamnă atenție deplină la vorbitor, încurajarea lui prin întrebări și semnale nonverbale și paraverbale și un **feedback** care arată că l-ai înțeles.']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Tipurile de comunicare verbală: publică, în grupuri mici, interpersonală, intrapersonală (cu tine însuți).']},
            ]),
            ('2. CELE PATRU ETAPE', [
                {'t': 'tabel', 'cap': ['Etapa', 'Ce fac'], 'lat': [0.27, 0.73],
                 'r': [['**1. Concentrarea atenției**', 'înlătur ce mă poate distrage (telefon, ecrane, căști), elimin zgomotele, mă apropii de vorbitor, nu mă gândesc la altceva'],
                       ['**2. Încurajarea vorbitorului**', 'contact vizual, corp ușor aplecat spre el, fără brațe încrucișate; nu întrerup; zâmbesc, dau din cap; scurte semnale: *aha, hmm*'],
                       ['**3. Reflecția asupra spuselor**', 'pun întrebări de clarificare, reformulez cu cuvintele mele, rezum ca să nu uit nimic'],
                       ['**4. Oferirea feedbackului**', 'răspund la tema abordată și respect opiniile vorbitorului, chiar dacă nu sunt de acord']]},
            ]),
            ('3. DE CE MĂ AJUTĂ', [
                {'t': 'text', 'p': ['• construiesc relații mai bune cu ceilalți;',
                                    '• învăț mai ușor, în orice situație;',
                                    '• rezolv mai bine problemele de zi cu zi.']},
                {'t': 'atentie', 'p': ['Îmi spun părerea **după** ce am întrebat, am rezumat sau am reformulat, nu în timpul intervenției vorbitorului. La teme de specialitate mă **documentez** dinainte.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-14',
        'titlu': 'Categorii semantice',
        'sub': SUB.format(n=14, pp='pp. 28-30'),
        'sursa': 'Sursa: Manual Art 8, pp. 28-30, rubricile Repere.',
        'sect': [
            ('1. CONTEXTUL', [
                {'t': 'text', 'p': ['Sensul unui cuvânt se stabilește în **context**: **verbal** (îmbinare, propoziție, frază, text) sau **situațional** (o situație în care apare doar un cuvânt).']},
            ]),
            ('2. SINONIMELE ȘI ANTONIMELE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'sinonimele', 'col': 't', 'p': ['formă diferită, sens asemănător sau identic', '**parțiale**: se înlocuiesc doar în unele contexte (*iute – repede, picant*)', '**absolute**: în orice context (*potasiu – kaliu*)']},
                    {'titlu': 'antonimele', 'col': 'm', 'p': ['sensuri diametral opuse', 'formă complet diferită (*frumos – urât*)', 'sau diferență de prefix (*atent – neatent, a face – a desface*)']},
                ]},
                {'t': 'text', 'p': ['• Sunt perechi de cuvinte din **aceeași parte de vorbire**; relația poate fi între două cuvinte, între un cuvânt și o expresie sau între două expresii.',
                                    '• La un cuvânt polisemantic, sinonimele și antonimele se stabilesc **pentru fiecare sens**.']},
            ]),
            ('3. OMONIMELE ȘI CUVINTELE POLISEMANTICE', [
                {'t': 'text', 'p': ['**Omonimele** au aceeași formă și sensuri **complet diferite**:']},
                {'t': 'tabel', 'cap': ['Tipul', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['lexicale **totale** (aceeași parte de vorbire, aceleași forme)', '*broască* (animal / mecanism al ușii)'],
                       ['lexicale **parțiale** (aceeași parte de vorbire, forme diferite)', '*romane* (narațiuni) / *romani* (locuitori)'],
                       ['**lexico-gramaticale** (părți de vorbire diferite)', '*car* (substantiv) / *car* (verbul *a căra*)']]},
                {'t': 'text', 'p': ['**Omofonele** se pronunță la fel, **omografele** se scriu la fel. Omonimele sunt obligatoriu omofone, cu același accent.',
                                    '**Cuvântul polisemantic** are mai multe sensuri **legate între ele**; la omonime nu există nicio legătură de sens.']},
            ]),
            ('4. PARONIMELE', [
                {'t': 'text', 'p': ['**Paronimele** au formă asemănătoare și sens diferit. Se deosebesc:']},
                {'t': 'tabel', 'cap': ['Prin', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['un sunet', '*familiar* (cunoscut) / *familial* (de familie)'],
                       ['două sunete', '*a colabora* (a lucra împreună) / *a corobora* (a sprijini cu dovezi)'],
                       ['ordinea sunetelor', '*a revela* (a dezvălui) / *a releva* (a evidenția)']]},
                {'t': 'atentie', 'p': ['**Confuzia paronimică** este o greșeală de exprimare, din necunoașterea exactă a sensului unui cuvânt.']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-15',
        'titlu': 'Derivarea. Compunerea',
        'sub': SUB.format(n=15, pp='pp. 31-33'),
        'sursa': 'Sursa: Manual Art 8, pp. 31-33, rubricile Repere, tabelul sufixelor și modelele de analiză.',
        'sect': [
            ('1. DERIVAREA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Derivarea** este mijlocul intern de îmbogățire a vocabularului prin care se formează cuvinte noi cu **sufixe** și **prefixe**.']},
                {'t': 'tabel', 'cap': ['Sufixele sunt', 'Ce fac', 'Exemplu'], 'lat': [0.25, 0.45, 0.3],
                 'r': [['lexicale', 'formează cuvinte noi', '*rămurică*'],
                       ['gramaticale', 'creează forme gramaticale', '*cânta*'],
                       ['lexico-gramaticale', 'dau un sens nou și o categorie gramaticală', '*rățoi, favorizare, ales*']]},
                {'t': 'tabel', 'cap': ['Sufixele arată', 'Exemple'], 'lat': [0.3, 0.7],
                 'r': [['autorul acțiunii, meseria', '*croitor, florar, fotbalist, poștaș*'],
                       ['colectivități', '*brădet, frunziș, țărănime*'],
                       ['noțiuni abstracte', '*copilărie, dorință, hărnicie, singurătate*'],
                       ['originea / locul', '*moldovean, olandez / frizerie*'],
                       ['modul acțiunii', '*cruciș, târâș, tinerește*'],
                       ['micșorare (diminutive) / mărire (augmentative)', '*căluț, frunzuliță / căsoaie, copilandru*']]},
                {'t': 'text', 'p': ['• **Diminutivele** pot exprima micșorarea, dar și simpatia, atenuarea, deprecierea, ironia.',
                                    '• **Prefixele** se adaugă înaintea rădăcinii: *incorectitudine, a reciti, neplăcut, negreșit*.',
                                    '• **Serie derivativă**: *dar → darnic → dărnicie*. **Derivat parasintetic**: sufix și prefix în același timp (*a închipui*).',
                                    '• Sufixele și prefixele le caut pe **forma de dicționar** a cuvântului.']},
            ]),
            ('2. COMPUNEREA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Compunerea** formează cuvinte noi unind doi sau mai mulți termeni, care își pierd, de obicei, sensul lor de sine stătător.']},
                {'t': 'tabel', 'cap': ['Procedeul', 'Exemple'], 'lat': [0.35, 0.65],
                 'r': [['**alăturarea** (termenii nu depind unul de altul)', '*decât, mobilă-tip, până la*'],
                       ['**subordonarea** (un termen depinde de celălalt)', '*a binecuvânta, încurcă-lume, ochiul-boului*'],
                       ['**abrevierea**: inițiale / inițiale și fragmente / fragmente / fragmente și cuvinte', '*STB / TAROM, aragaz / aprozar / Rompetrol*']]},
                {'t': 'text', 'p': ['• Elemente savante din greacă și latină: **prefixoide** (*pseudospecialist*), **sufixoide** (*fotofob*).',
                                    '• Compusele pot fi orice parte de vorbire: *bună-creștere, a binedispune, așa-zis, oricare, douăzeci, deseori, de pe lângă, deoarece, ei na*.']},
                {'t': 'atentie', 'p': ['Abrevierile cu inițiale se scriu cu **litere mari, fără puncte**, și nu se despart la capăt de rând. Nu le confund cu termeni străini (*GPS, CD, VIP*) sau cu prescurtări (*etc., nr.*).']},
            ]),
            ('3. MODELE DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„a străbate”* – format prin derivare cu prefixul *stră-* de la verbul *a bate*.',
                                    '*„numai”* – format prin compunere prin alăturare din adverbul *nu* + adverbul *mai*.']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-16',
        'titlu': 'Conversiunea. Familia de cuvinte',
        'sub': SUB.format(n=16, pp='pp. 34-35'),
        'sursa': 'Sursa: Manual Art 8, pp. 34-35, rubricile Repere și modelul de analiză.' + CREATE,
        'sect': [
            ('1. CONVERSIUNEA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Conversiunea** (schimbarea valorii gramaticale) formează cuvinte noi prin trecerea de la o parte de vorbire la alta, **fără să schimbe forma** cuvântului.']},
                {'t': 'text', 'p': ['Cuvântul nou se poartă ca partea de vorbire la care a trecut: se articulează (substantivul), se acordă (adjectivul) sau e invariabil (adverbul, prepoziția), cu funcțiile sintactice ale acesteia.']},
                {'t': 'tabel', 'cap': ['Se obțin', 'Din', 'Exemplu'], 'lat': [0.2, 0.42, 0.38],
                 'r': [['**substantive**', 'adjective, participii, supine, gerunzii, pronume, adverbe, interjecții', '*Binele învinge. Frumosul ne atrage.*'],
                       ['**adjective**', 'participii, gerunzii, adverbe', '*o ușă închisă, o apă curgătoare*'],
                       ['**adverbe**', 'adjective, participii, substantive (anotimpuri, zile, părți ale zilei)', '*Vorbește frumos. Vara plecăm la mare.*'],
                       ['**prepoziții**', 'adverbe, substantive, participii', '*grație talentului, mulțumită sprijinului*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Substantivele din **participiu** numesc persoane sau obiecte (*vizitatul*, cel vizitat), cele din **supin** numesc acțiunea (*vizitatul unei expoziții*).']},
                {'t': 'nota', 'titlu': 'Model:', 'p': ['*„totul”* – substantiv, obținut prin conversiune din pronumele nehotărât *tot*.']},
            ]),
            ('2. FAMILIA LEXICALĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Familia lexicală** cuprinde toate cuvintele formate prin **derivare, compunere și conversiune** de la un cuvânt de bază.']},
                {'t': 'text', 'p': ['*pădure → păduriță, pădurar, păduros, a împăduri, împădurit, despădurire*']},
                {'t': 'atentie', 'p': ['În familia lexicală **nu** intră cuvintele împrumutate din alte limbi, chiar dacă seamănă ca formă și sens cu cuvântul de bază.']},
            ]),
            ('3. FAMILIA LEXICALĂ SAU CÂMPUL LEXICAL?', [
                {'t': 'tabel', 'cap': ['', 'Familia lexicală', 'Câmpul lexical'], 'lat': [0.24, 0.38, 0.38],
                 'r': [['ce le unește', 'același cuvânt de bază (rădăcină)', 'aceeași idee'],
                       ['părțile de vorbire', 'diferite', 'de același fel'],
                       ['exemplu', '*floare, floricică, florar, a înflori*', '*trandafir, lalea, crin, garoafă*']]},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-17',
        'titlu': 'Împrumuturile. Neologismele',
        'sub': SUB.format(n=17, pp='pp. 36-37'),
        'sursa': 'Sursa: Manual Art 8, pp. 36-37, rubricile Repere.',
        'sect': [
            ('1. DE UNDE VIN CUVINTELE', [
                {'t': 'tabel', 'cap': ['Cuvintele', 'Exemple'], 'lat': [0.4, 0.6],
                 'r': [['**moștenite** din latină (și din limba dacilor)', '*an, a crede, drept, el, jos, lângă, să*'],
                       ['**formate** în limbă (derivare, compunere, conversiune)', '*străvechi, despre, ars*'],
                       ['**împrumutate** din alte limbi', '*funcționar, inițial, a remarca*']]},
                {'t': 'text', 'p': ['**Împrumuturile** sunt un mijloc **extern** de îmbogățire a vocabularului. Cuvintele moștenite au trecut continuu din latină în română, schimbându-și forma după legi precise (din latina populară: *plovia → ploaie*); cele împrumutate au fost preluate într-un anumit moment.',
                                    'Împrumuturile apar prin conviețuire, vecinătate, relații culturale, economice, politice; pot fi **directe** (contactul dintre vorbitori) sau **indirecte** (prin cărți).']},
            ]),
            ('2. ÎMPRUMUTURI VECHI ȘI NOI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'vechi', 'col': 'a', 'p': ['slavă: *drag, a iubi, prieten*', 'turcă: *ciulama, iaurt, murdar*', 'greacă: *a agonisi, conopidă, tacticos*', 'maghiară: *a făgădui, oraș, viclean*']},
                    {'titlu': 'noi', 'col': 't', 'p': ['franceză: *aliterație, hiperbolă, nostalgic*', 'engleză: *design, volei, weekend*', 'italiană: *adagio, pizza, scadență*', 'germană: *crenvurst, rucsac, ștecăr*', 'latină: *colocviu, etern, fabulă*']},
                ]},
            ]),
            ('3. NEOLOGISMELE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Neologismele** sunt cuvinte mai recente, împrumutate sau create în limbă, cu **obligatoriu un element nou**.']},
                {'t': 'text', 'p': ['• Au intrat din primele decenii ale secolului al XIX-lea, mai ales din franceză și latină, și au modernizat limba: *epidemie* a înlocuit *molimă*, *rege* pe *rigă*, *casetă* pe *besactea*.',
                                    '• Azi cele mai multe vin din engleză: unele adaptate (*miting, fotbal*), altele cu forma din limba de origine (*hobby, smartphone*).']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-18',
        'titlu': 'Registrele limbii. Argoul. Jargonul',
        'sub': SUB.format(n=18, pp='pp. 38-39'),
        'sursa': 'Sursa: Manual Art 8, pp. 38-39, rubricile Repere și exemplele din desene.',
        'sect': [
            ('1. REGISTRELE LIMBII', [
                {'t': 'text', 'p': ['**Registrele limbii** sunt felurile în care folosim limba după situația de comunicare: **cine** vorbește cu **cine** (statutul lor), **unde** și **când**.']},
                {'t': 'tabel', 'cap': ['', 'Solemn (oficial)', 'Standard (curent)', 'Familiar (colocvial)'], 'lat': [0.16, 0.28, 0.28, 0.28],
                 'r': [['când', 'ceremonii, discursuri, relații oficiale', 'situații obișnuite, cu o anumită distanță', 'cu persoane apropiate'],
                       ['vocabularul', 'termeni pretențioși; *maestre, domnule academician*', 'uzual', 'mai puțin pretențios: *profu’*'],
                       ['gramatica', 'respectată strict; fraze ample', 'respectată; enunțuri scurte', 'nu strict; enunțuri scurte, exclamații'],
                       ['pronunția', 'foarte îngrijită', 'îngrijită', 'cad sunete: *domne, s-aud*'],
                       ['exemplu', '*Stimate domnule ministru, vă rog să luați cuvântul!*', '*Doamnă, vă rog liniște!*', '*Sst! Domne, vreau s-aud comunicatu’ ăsta!*']]},
                {'t': 'text', 'p': ['• Solemnul și standardul sunt **formale** (politețe negativă); familiarul e **informal** (politețe pozitivă).',
                                    '• Toate pot fi orale sau scrise; familiarul apare în scris în literatură sau între prieteni.']},
                {'t': 'atentie', 'p': ['**Amestecul registrelor** produce efecte comice. Nu îl folosesc în lucrări.']},
            ]),
            ('2. ARGOUL', [
                {'t': 'text', 'p': ['**Argoul** este un limbaj codificat al unui grup relativ închis, ca să nu fie înțeles de ceilalți. Se schimbă des.']},
                {'t': 'tabel', 'cap': ['Cum apar termenii argotici', 'Exemple'], 'lat': [0.35, 0.65],
                 'r': [['prin metaforă', '*mansardă* (cap), *vrăjeală* (prosteală)'],
                       ['prin împrumut', '*mișto, baftă* (din romani), *bos* (din engleză), *fraier* (din germană)'],
                       ['prin derivare', '*bengos* (formidabil)'],
                       ['prin trunchiere', '*bac* (bacalaureat), *nașpa*'],
                       ['din cuvinte vechi sau regionale', '*pârnaie* (închisoare)']]},
            ]),
            ('3. JARGONUL', [
                {'t': 'text', 'p': ['**Jargonul** este un limbaj de specialitate, cu mulți termeni tehnici (medical, lingvistic, matematic, informatic: *desktop, click*), sau un limbaj plin de cuvinte străine, folosit de cine vrea să pară pretențios. Se folosește între specialiști.']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-19',
        'titlu': 'Fonetica',
        'sub': SUB.format(n=19, pp='pp. 40-41'),
        'sursa': 'Sursa: Manual Art 8, pp. 40-41, rubricile Repere.',
        'sect': [
            ('1. SUNETE ȘI LITERE', [
                {'t': 'text', 'p': ['Sunetele limbii române: **vocale, consoane, semivocale**. **Litera** este semnul grafic al unui sunet; de obicei, o literă notează un sunet.']},
                {'t': 'text', 'p': ['• Grupurile *ce, ci, ge, gi, che, chi, ghe, ghi* notează **un sunet** (consoana [č], [ğ], [k’], [g’]) sau **două sunete** (consoana + *e* sau *i*).',
                                    '• *ci, gi, chi, ghi* la final de cuvânt redau adesea doar o consoană.',
                                    '• **i „șoptit”** apare la finalul unor cuvinte, după consoană, și chiar în compuse: *oricând, oricât, câteșitrei*.']},
            ]),
            ('2. DIFTONGUL, TRIFTONGUL, HIATUL', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce este', 'Exemplu'], 'lat': [0.2, 0.52, 0.28],
                 'r': [['**diftongul**', 'vocală + semivocală în aceeași silabă; **urcător** (semivocală + vocală) sau **coborâtor** (vocală + semivocală)', '*tŏamnă / raĭ*'],
                       ['**triftongul**', 'vocală + două semivocale în aceeași silabă', '*suĭaĭ*'],
                       ['**hiatul**', 'două vocale alăturate, în silabe diferite', '*re-al*']]},
                {'t': 'text', 'p': ['*el, ele, este, eram* se scriu cu **e** și se pronunță cu [ĭe]; uneori formează triftongi: [ĭeŭ], [ĭeĭ].']},
            ]),
            ('3. CUVINTELE DE ORIGINE STRĂINĂ', [
                {'t': 'text', 'p': ['Împrumuturile **neadaptate** se scriu și se pronunță ca în limba de origine; pentru ele consult **DOOM3**.']},
                {'t': 'tabel', 'cap': ['Situația', 'Exemplu'], 'lat': [0.5, 0.5],
                 'r': [['*u* se citește diferit după limbă', '*tul* [ü], *outfit* [u], *a upgrada* [a]'],
                       ['sunete străine limbii române', '[ü] în *déjà-vu*, [ö] în *a pasteuriza*'],
                       ['literele duble din nume proprii = un sunet; *zz* italian = [ț]', '*Aachen; pizza*'],
                       ['litere care nu se citesc', '*h* în *thailandez*'],
                       ['articolul hotărât fără cratimă, când finalul se citește ca în română', '*feedbackul, storyul*'],
                       ['articolul hotărât cu cratimă, când scrierea și pronunția diferă', '*show-ul, standby-ul*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Numele proprii străine: forma originară (*New York, Shakespeare*), normele internaționale (*Beijing*) sau forme adaptate vechi (*Londra, Florența, Varșovia*).']},
            ]),
        ],
    },
    # ---------------- Lecția 20 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-20',
        'titlu': 'Organizarea coerentă a textului. Anafora',
        'sub': SUB.format(n=20, pp='pp. 42-43'),
        'sursa': 'Sursa: Manual Art 8, pp. 42-43, rubricile Repere.' + CREATE,
        'sect': [
            ('1. COERENȚA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Coerența** este ansamblul de trăsături care asigură **logica** și **înțelegerea** unui text.']},
                {'t': 'text', 'p': ['Un text are o ordine **logică** (fiecare secvență se leagă de întreg), **temporală** (succesiunea acțiunilor, prin timpurile verbale) și **spațială** (așezarea enunțurilor în pagină).',
                                    'Fiecare enunț poate fi corect (are **coeziune**), dar textul să nu aibă sens, dacă lipsesc legăturile logice (nu are **coerență**).']},
                {'t': 'tabel', 'cap': ['Regula', 'Ce cere'], 'lat': [0.3, 0.7],
                 'r': [['**continuității**', 'enunțurile au în comun un minimum de informație, prin reluări'],
                       ['**progresiei**', 'fiecare enunț aduce o informație nouă; nu repet aceeași idee cu alte cuvinte'],
                       ['**noncontradicției**', 'fără informații contradictorii; nu schimb persoana sau timpul povestirii']]},
            ]),
            ('2. ANAFORA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Anafora** este reluarea unui cuvânt (**antecedentul**) printr-un alt cuvânt (**anaforicul**), care se referă la aceeași realitate.']},
                {'t': 'text', 's': 16, 'p': ['*{t:Ana} merge la cenaclu, pentru că {m:ea} scrie poezii.*']},
                {'t': 'text', 'p': ['Anafora elimină **repetițiile supărătoare** și asigură continuitatea textului.']},
                {'t': 'tabel', 'cap': ['Anaforicul poate fi', 'Exemplu'], 'lat': [0.4, 0.6],
                 'r': [['pronume', '*Ana... **ea**...*'],
                       ['numeral cu valoare pronominală', '*Am scris câteva poezii. **Două** au fost publicate.*'],
                       ['adverb', '*...la cenaclul școlii. **Acolo**...*'],
                       ['substantiv sau grup nominal', '*Un băiat blond... **Tânărul**...*'],
                       ['*da*, *nu*, echivalente cu o propoziție', '*– Mă însoțești? – **Da**.*'],
                       ['*a face* + pronume neutru', '*Ar fi putut comenta poezia. N-**a făcut-o**.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 21 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-21',
        'titlu': 'Etapele scrierii. Integrarea feedbackului',
        'sub': SUB.format(n=21, pp='pp. 44-45'),
        'sursa': 'Sursa: Manual Art 8, pp. 44-45, rubrica Repere, sarcina de redactare și grila de evaluare.',
        'sect': [
            ('1. ETAPELE UNEI REDACTĂRI', [
                {'t': 'text', 'p': ['pregătirea → prima variantă pe ciornă → **revizuirea** → editarea (textul final) → publicarea (prezentarea scrisă sau orală)']},
            ]),
            ('2. FEEDBACKUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Feedbackul** în redactare este procesul prin care observațiile și sugestiile despre o lucrare sunt folosite de autor ca s-o îmbunătățească.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'când ofer feedback', 'col': 't', 'p': ['fac observații **concrete**, într-un limbaj clar', 'nu sunt excesiv de negativ', 'dau **sugestii de modificare**']},
                    {'titlu': 'când primesc feedback', 'col': 'm', 'p': ['ascult sau citesc fără să reacționez negativ', 'întreb ce nu înțeleg', 'aleg ce e util și modific textul']},
                ]},
                {'t': 'text', 'p': ['Apoi editez (ortografie, punctuație, scris pe curat) și îmi pregătesc prezentarea: marchez pasajele importante, citesc cu voce tare de mai multe ori.']},
            ]),
            ('3. COMENTAREA UNOR VERSURI: CERINȚA-TIP', [
                {'t': 'text', 'p': ['Compunere de **minimum 100 de cuvinte** despre semnificația unor versuri, în care:']},
                {'t': 'text', 'p': ['• prezint elemente componente ale peisajului sau ale imaginii;',
                                    '• interpretez **două figuri de stil** diferite, relevante pentru semnificație;',
                                    '• precizez o **emoție** sau un **sentiment** exprimat, cu justificare;',
                                    '• menționez **tema**, legată de semnificația versurilor.']},
            ]),
            ('4. GRILA', [
                {'t': 'tabel', 'cap': ['Aspectul', 'Ce verific'], 'lat': [0.27, 0.73],
                 'r': [['conținutul', 'respect sarcina; abordez toate reperele'],
                       ['organizarea', 'ideile se înlănțuie logic; paragraf pentru fiecare idee; conectori potriviți; fără repetiții (folosesc anafora)'],
                       ['corectitudinea', 'termeni potriviți unui comentariu; registrul standard, persoana a III-a; ortografie și punctuație'],
                       ['aspectul', 'alineate clare; scris îngrijit și lizibil']]},
            ]),
        ],
    },
    # ---------------- Lecția 23 ----------------
    {
        'cale': 'clasa-8/unitatea-1/lectia-23',
        'titlu': 'Rolul elementelor grafice în prezentarea unui text',
        'sub': SUB.format(n=23, pp='pp. 46-47'),
        'sursa': 'Sursa: Manual Art 8, pp. 46-47, rubrica Repere și grila de evaluare.',
        'sect': [
            ('1. ELEMENTELE GRAFICE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Elementele grafice** sunt mesaje vizuale cu un limbaj universal, care pot **emoționa, informa, convinge, amuza**.']},
                {'t': 'text', 'p': ['Pot fi **artistice** sau **utilitare**: fotografii, picturi, benzi desenate, colaje, desene, diagrame, scheme. Le înțeleg raportându-le la context; **legenda** dă titlul, autorul, sursa, anul.']},
            ]),
            ('2. CUM CITIM O IMAGINE', [
                {'t': 'text', 'p': ['Lectura unei imagini are două procese foarte rapide: **identificarea** și **interpretarea**. Privirea merge întâi spre:']},
                {'t': 'text', 'p': ['• ființe (oameni, animale, plante), apoi obiecte și simboluri;',
                                    '• prim-plan, apoi planul secund, apoi fundalul;',
                                    '• stânga sus, apoi dreapta jos, într-o lectură în forma literei **Z**.']},
            ]),
            ('3. SLIDE-URI ȘI PLANȘE', [
                {'t': 'text', 'p': ['• **titluri și subtitluri**;',
                                    '• evidențieri prin font, culoare, corp de literă de **minimum 24** de puncte;',
                                    '• **cuvinte-cheie** și texte scurte; pornesc de la ele prezentarea orală, fără să citesc;',
                                    '• elemente grafice potrivite, așezate unde privirea ajunge prima dată.']},
                {'t': 'nota', 'titlu': 'Statice sau cinetice:', 'p': ['elementele grafice pot fi **statice** (pe hârtie) sau **cinetice** (videoclipuri, animații, înregistrări audio), în prezentări PowerPoint, Prezi, Canva.']},
            ]),
        ],
    },
]
