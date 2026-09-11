# Scheme-notițe, clasa a V-a, Unitatea IV „Vreau să salvez lumea”. Conținutul
# vine din rubricile Repere ale Manualului Art 5, pp. 110-137; exemplele noi
# sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-4.py

SUB = 'Clasa a V-a · Unitatea IV, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-2',
        'titlu': 'Timp, spațiu și acțiune. Legenda',
        'sub': SUB.format(n=2, pp='pp. 110-111'),
        'sursa': 'Sursa: Manual Art 5, pp. 110-111, rubrica Repere și povestea originii lui Tezeu; textul de bază este „Tezeu și Minotaurul” de Florin Bican.',
        'sect': [
            ('1. LEGENDA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Legendele** oferă explicații **imaginare** pentru originea universului, apariția plantelor și a animalelor, a fenomenelor naturale.']},
                {'t': 'text', 'p': ['• La început s-au transmis prin **viu grai**; apoi au fost culese de specialiști și circulă și în scris.',
                                    '• Când sunt povestite oral, povestitorii le pot **modifica**; de aceea există mai multe variante ale aceleiași întâmplări.']},
                {'t': 'nota', 'titlu': 'Legendele antice', 'p': ['sunt narațiuni în care **zeii intervin în mod supranatural** în lumea oamenilor, iar întâmplările se petrec într-un **timp foarte îndepărtat**.']},
            ]),
            ('2. PERSONAJELE LEGENDEI', [
                {'t': 'tabel', 'cap': ['Personajul', 'Cine este'], 'lat': [0.25, 0.75],
                 'r': [['**Tezeu**', 'eroul; fiul regelui Atenei, dar de fapt **semizeu**, fiul lui Poseidon'],
                       ['**Egeu**', 'regele Atenei'],
                       ['**Minos**', 'regele Cretei, care închide Minotaurul în labirint'],
                       ['**Ariadna**', 'fiica lui Minos, care îi dă lui Tezeu un ghem de sfoară'],
                       ['**Minotaurul**', 'monstrul din labirint, hrănit cu tineri aduși din Atena'],
                       ['**Poseidon**', 'zeul mării']]},
            ]),
            ('3. ÎNTREBĂRILE INVESTIGATORULUI', [
                {'t': 'text', 'p': ['Pentru orice legendă sau narațiune notez: **Cine** e personajul principal? Care sunt personajele secundare? **Unde** și **când** se petrec întâmplările? **Ce** declanșează acțiunea? **De ce** pleacă eroul de acasă?']},
            ]),
            ('4. O EXPRESIE NĂSCUTĂ DIN LEGENDĂ', [
                {'t': 'text', 'p': ['**firul Ariadnei** = ceea ce te ajută să găsești ieșirea dintr-o situație încâlcită, ca ghemul de sfoară care l-a scos pe Tezeu din labirint.']},
            ]),
        ],
    },
    # ---------------- Lecția 5 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-5',
        'titlu': 'Comparația',
        'sub': SUB.format(n=5, pp='p. 115'),
        'sursa': 'Sursa: Manual Art 5, p. 115, rubrica Repere și schema comparației.' + CREATE,
        'sect': [
            ('1. CE ESTE COMPARAȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Comparația** este figura de stil care exprimă un **raport de asemănare** între două persoane, obiecte, acțiuni, pentru a evidenția unul dintre termeni.']},
            ]),
            ('2. CUM ESTE ALCĂTUITĂ', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'comparatul', 'col': 't', 'p': ['termenul **descris**', '*labirint*']},
                    {'titlu': 'elementul de legătură', 'col': 'a', 'p': ['*ca, precum, cât, asemenea cu, aidoma cu, întocmai ca, asemănător cu, la fel ca*']},
                    {'titlu': 'comparantul', 'col': 'm', 'p': ['termenul care **ajută la descriere**', '*păienjeniș*']},
                ]},
                {'t': 'text', 'p': ['Cei doi termeni au **trăsături comune**: labirintul și păienjenișul sunt *întortocheate, încâlcite, complicate, derutante*.',
                                    'Comparatul poate fi un **substantiv**, un **adjectiv** sau un **verb**.']},
            ]),
            ('3. EXEMPLE', [
                {'t': 'tabel', 'cap': ['Comparația', 'Comparatul', 'Comparantul'], 'lat': [0.5, 0.25, 0.25],
                 'r': [['*Coada lui puternică șfichiuia aerul* **ca un bici**.', '*șfichiuia* (verb)', '*un bici*'],
                       ['*Minotaurul avea coarne ascuțite* **ca o suliță**.', '*ascuțite* (adjectiv)', '*o suliță*'],
                       ['*Labirintul avea galerii* **ca un păienjeniș**.', '*galerii* (substantiv)', '*un păienjeniș*']]},
                {'t': 'nota', 'titlu': 'Comparații pe care le folosim zilnic:', 'p': ['*albastru ca cerul, roșu ca focul, verde ca iarba*: le recunosc, dar în scris caut comparații **noi**, surprinzătoare.']},
            ]),
        ],
    },
    # ---------------- Lecția 7 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-7',
        'titlu': 'Textul explicativ (aplicativ). Cum fac o bandă desenată',
        'sub': SUB.format(n=7, pp='pp. 118-119'),
        'sursa': 'Sursa: Manual Art 5, p. 119 (fișa cu instrucțiuni și cerințele) și p. 118 (Repere despre banda desenată).',
        'sect': [
            ('1. TEXTUL CARE DĂ INSTRUCȚIUNI', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Un text **explicativ (aplicativ)** oferă explicații și **instrucțiuni** pentru a realiza ceva.']},
                {'t': 'tabel', 'cap': ['Trăsătura', 'Cum apare în fișa pentru banda desenată'], 'lat': [0.35, 0.65],
                 'r': [['titlu și subtitluri', 'evidențiate prin mărimea literelor și prin culori'],
                       ['pași separați', 'paragrafe scurte, fiecare evidențiat'],
                       ['verbe la **imperativ**', '*Alege… Scrie… Stabilește… Desenează…*'],
                       ['schițe', 'arată prin desen ce ai de făcut'],
                       ['lista de materiale', 'coli A4, creion, creioane colorate, tuș, gumă, riglă, capsator']]},
            ]),
            ('2. PAȘII PENTRU O BANDĂ DESENATĂ', [
                {'t': 'text', 'p': ['1. Alege subiectul și personajele (fă schițe); stabilește locul și timpul.',
                                    '2. Scrie **scenariul**: ordinea întâmplărilor și ce spun personajele.',
                                    '3. Stabilește numărul de **planșe**, de **benzi** pe planșă și de **viniete** pe bandă.',
                                    '4. Desenează fiecare vinietă cu creionul și plasează **bulele** potrivite.',
                                    '5. Trasează desenul cu tuș, scrie textul din bule și din recitative, apoi colorează.',
                                    '6. Fă o copertă cu titlul și capsează colile.']},
            ]),
            ('3. VOCABULARUL BENZII DESENATE', [
                {'t': 'tabel', 'cap': ['Termenul', 'Ce înseamnă'], 'lat': [0.25, 0.75],
                 'r': [['planșa', 'o pagină cu benzi desenate'],
                       ['banda', 'succesiunea orizontală de viniete'],
                       ['vinieta', 'imaginea delimitată de un cadru'],
                       ['bulele', 'replicile (rotunde sau dreptunghiulare), gândurile (norișori), strigătele (cu zimți)'],
                       ['recitativul', 'panoul cu comentariile naratorului, sus sau jos în vinietă'],
                       ['ideogramele', 'desene simbolice: stele, inimioare, note muzicale'],
                       ['onomatopeele', 'cuvinte care imită zgomote'],
                       ['liniile de mișcare', 'arată o deplasare']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Banda desenată este un **text multimodal simplu**: povestește prin imagini și cuvinte.']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-10',
        'titlu': 'Atitudini comunicative. Acte de limbaj: a întreba, a solicita, a felicita',
        'sub': SUB.format(n=10, pp='pp. 124-125'),
        'sursa': 'Sursa: Manual Art 5, pp. 124-125, rubricile Repere și exemplul din Explorare.',
        'sect': [
            ('1. CE TRANSMIT CÂND COMUNIC', [
                {'t': 'text', 'p': ['Nu contează doar **ce** spun, ci și **cum** spun. Prin cuvinte, gesturi și voce transmit:']},
                {'t': 'tabel', 'cap': ['Transmit', '*„Hai să salvăm împreună cățelul ăsta!”*'], 'lat': [0.35, 0.65],
                 'r': [['o informație', 'cățelul e în pericol'],
                       ['o stare, o atitudine', 'îmi este milă de cățel'],
                       ['o așteptare de la ascultător', 'îl îndemn să mă ajute'],
                       ['relația dintre noi', 'o relație de colaborare']]},
                {'t': 'text', 'p': ['Tot ce spune, dincolo de cuvinte, ceva despre vorbitor și despre relația dintre cei care comunică sunt **atitudini comunicative**.']},
            ]),
            ('2. ATENȚIA ȘI EMPATIA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'atenția', 'col': 't', 'p': ['ascultătorul se concentrează la ce spune vorbitorul; vorbitorul observă cum reacționează ascultătorul']},
                    {'titlu': 'empatia', 'col': 'm', 'p': ['capacitatea de a te pune **în locul celuilalt**, de a fi interesat de ce gândește sau simte']},
                ]},
            ]),
            ('3. ACTE DE LIMBAJ', [
                {'t': 'text', 'p': ['Un **act de limbaj** este o comunicare inițiată cu o anumită **intenție**: a întreba, a solicita, a felicita.']},
                {'t': 'tabel', 'cap': ['Actul', 'Cu cei apropiați', 'Politicos, cu cei pe care nu-i cunosc bine'], 'lat': [0.2, 0.36, 0.44],
                 'r': [['**a întreba** (cer un răspuns)', '*Ce știi despre…? Ce părere ai despre…?*', '*Ce mi-ați putea spune despre…? Știți cumva…?*'],
                       ['**a solicita** (aștept o reacție)', '*Dă-mi, te rog… Explică-mi, te rog…*', '*Ați putea să-mi spuneți…? Vă rog frumos să… Am rugămintea să…*'],
                       ['**a felicita** (laud sau urez)', '*Bravo! Felicitări! Ești eroul meu!*', '*Aș vrea să vă felicit pentru… Îmi face plăcere să vă urez…*']]},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-11',
        'titlu': 'Pronumele. Pronumele personal',
        'sub': SUB.format(n=11, pp='pp. 126-127'),
        'sursa': 'Sursa: Manual Art 5, pp. 126-127, rubricile Repere și modelul de analiză.' + CREATE,
        'sect': [
            ('1. PRONUMELE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Pronumele** este partea de vorbire care **ține locul unui substantiv**.']},
                {'t': 'text', 'p': ['*Nadia Comăneci a obținut primul zece.* → **Ea** *a obținut primul zece.*']},
            ]),
            ('2. PRONUMELE PERSONAL', [
                {'t': 'text', 'p': ['**Pronumele personal** indică persoanele care participă la comunicare.']},
                {'t': 'tabel', 'cap': ['Persoana', 'Cine este', 'Singular', 'Plural'], 'lat': [0.2, 0.3, 0.25, 0.25], 'al': ['l', 'l', 'c', 'c'],
                 'r': [['I', 'vorbitorul', 'eu', 'noi'],
                       ['a II-a', 'ascultătorul', 'tu', 'voi'],
                       ['a III-a', 'cel despre care se vorbește', 'el (m.), ea (f.)', 'ei (m.), ele (f.)']]},
                {'t': 'text', 'p': ['• Pronumele personal are **gen** doar la persoana a III-a.',
                                    '• Are forme **accentuate** (*eu, tu, el, ea, mine, mie*) și **neaccentuate**, numite și **clitice** (*mă, m-, îmi, mi, îți, ți*).']},
                {'t': 'text', 's': 16, 'p': ['*Pe* **mine** **mă** *atrage viața savanților.*']},
            ]),
            ('3. PRONUNȚIA CORECTĂ', [
                {'t': 'atentie', 'p': ['*eu, el, ei, ele* se scriu cu **e** și se pronunță la început cu [ĭe]; *ea* se scrie cu **e** și se pronunță [ĭa].']},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„ei”* – pronume personal, persoana a III-a, numărul plural, genul masculin, forma accentuată.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-12',
        'titlu': 'Pronumele personal. Din SMS în limba română corectă',
        'sub': SUB.format(n=12, pp='p. 127'),
        'sursa': 'Sursa: Manual Art 5, p. 127 (Aplicații și Deschideri).' + CREATE,
        'sect': [
            ('1. PRONUMELE SCURTE SE LEAGĂ CU CRATIMĂ', [
                {'t': 'text', 'p': ['Formele neaccentuate ale pronumelui personal se leagă cu **cratimă** de cuvântul vecin:']},
                {'t': 'tabel', 'cap': ['Scriem', 'Înseamnă', 'Exemplu'], 'lat': [0.18, 0.37, 0.45],
                 'r': [['*nu-l*', 'nu + îl', '*Nu-l găsesc.*'], ['*n-o*', 'nu + o', '*N-o chem.*'],
                       ['*nu-i*', 'nu + îi', '*Nu-i dau cartea.*'], ['*ce-l*', 'ce + îl', '*Ce-l doare?*']]},
            ]),
            ('2. CUVINTE CARE SE AUD LA FEL', [
                {'t': 'tabel', 'cap': ['Cu cratimă', 'Fără cratimă'], 'lat': [0.5, 0.5],
                 'r': [['*mi-au* = mi + au: *Mi-au dat un premiu.*', '*miau* = sunetul pisicii'],
                       ['*i-a* = i + a: *I-a spus adevărul.*', '*ia* = verbul *a lua*: *Ia cartea!*'],
                       ['*l-a* = l + a: *L-a chemat.*', '*la* = prepoziție: *Merg la școală.*'],
                       ['*ne-a* = ne + a: *Ne-a ajutat.*', '*nea* = nene: *Nea Mihai.*']]},
                {'t': 'text', 'p': ['Același cuvânt poate fi pronume sau alt cuvânt: *Pe* **mine** *mă caută.* (pronume) / *Am trei* **mine** *de pix.* (substantiv)']},
            ]),
            ('3. SMS-UL ȘI LIMBA STANDARD', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'în SMS', 'col': 'r', 'p': ['prescurtări, fără diacritice, fără cratime, multe semne de exclamare']},
                    {'titlu': 'în scris, la școală', 'col': 'v', 'p': ['cuvinte întregi, **diacritice**, **cratimă** la pronumele scurte, punctuație corectă']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-13',
        'titlu': 'Pronumele personal de politețe',
        'sub': SUB.format(n=13, pp='pp. 128-129'),
        'sursa': 'Sursa: Manual Art 5, pp. 128-129, rubricile Repere, tabelul formelor și modelul de analiză.',
        'sect': [
            ('1. CE ARATĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Pronumele personal de politețe** arată **respectul** față de o persoană.']},
                {'t': 'text', 'p': ['Are doar persoanele **a II-a** și **a III-a** și se deosebește după gen doar la persoana a III-a singular.']},
            ]),
            ('2. FORMELE', [
                {'t': 'tabel', 'cap': ['', 'singular', 'plural'], 'lat': [0.24, 0.38, 0.38],
                 'r': [['persoana a II-a', '*dumneata* (d-ta), *dumitale* (d-tale); *dumneavoastră* (dv., dvs.)', '*dumneavoastră* (dv., dvs., d-voastră)'],
                       ['persoana a III-a, masculin', '*dumnealui* (d-lui), *dânsul*', '*dumnealor* (d-lor), *dânșii*'],
                       ['persoana a III-a, feminin', '*dumneaei* (d-ei), *dânsa*', '*dumnealor* (d-lor), *dânsele*']]},
                {'t': 'text', 'p': ['• *dânsul, dânsa, dânșii, dânsele* exprimă cel mai **scăzut** grad de respect; în Moldova, regional, au valoare de pronume personal.',
                                    '• Variante familiare: *mata, matale, mătăluță, mătălică, tălică*.']},
            ]),
            ('3. FORMULELE REVERENȚIOASE', [
                {'t': 'text', 'p': ['Arată **cel mai înalt** grad de respect, în limbajul oficial: *Majestatea Voastră, Domnia Voastră, Preafericirea Voastră, Excelența Sa*.']},
                {'t': 'atentie', 'p': ['Au **majusculă la fiecare termen**: *Domnia Sa*, nu *Domnia sa*. Corect: *Majestatea*, nu *Maiestatea*.',
                                       'Cu *dumneavoastră*, verbul e la **persoana a II-a plural**, chiar și pentru o singură persoană: *Dumneavoastră* **ați venit**.']},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„dumneavoastră”* – pronume personal de politețe, persoana a II-a, numărul singular (adresare către o singură persoană).']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-14',
        'titlu': 'Adjectivul. Articolul demonstrativ',
        'sub': SUB.format(n=14, pp='pp. 130-131'),
        'sursa': 'Sursa: Manual Art 5, pp. 130-131, rubricile Repere, tabelul formelor și modelul de analiză.' + CREATE,
        'sect': [
            ('1. ADJECTIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Adjectivul** este partea de vorbire care exprimă **însușirea** unui obiect și determină un substantiv.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'propriu-zis', 'col': 't', 'p': ['*curajos, verde*']},
                    {'titlu': 'provenit din verb la participiu', 'col': 'm', 'p': ['*desenat, imprimat*']},
                ]},
            ]),
            ('2. FORMA ȘI ACORDUL', [
                {'t': 'text', 'p': ['• **Desinența** arată cum se schimbă forma după gen și număr: *curajos, curajoasă, curajoși, curajoase*.',
                                    '• Adjectivele sunt **variabile** (își schimbă forma) sau **invariabile** (*gri, roz*: *un costum gri, niște aripi gri*).',
                                    '• Adjectivul se **acordă în gen și număr** cu substantivul determinat.',
                                    '• Locul obișnuit e **după** substantiv. Pus **înainte**, preia articolul hotărât: *liliacul uriaș → uriașul liliac*.',
                                    '• În propoziție, adjectivul este **atribut**.']},
                {'t': 'atentie', 'titlu': 'Adjectivele în -iu:', 'p': ['*copiii* **zglobii** (după substantiv) / **zglobiii** *copii* (înainte, cu articol: trei *i*).']},
            ]),
            ('3. ARTICOLUL DEMONSTRATIV', [
                {'t': 'text', 'p': ['**Articolul demonstrativ** leagă un adjectiv de substantivul determinat și se acordă în gen și număr cu acesta: *pelerina* **cea** *roșie*, *băiatul* **cel** *mic*.']},
                {'t': 'tabel', 'cap': ['', 'masculin', 'feminin'], 'lat': [0.3, 0.35, 0.35], 'al': ['l', 'c', 'c'],
                 'r': [['singular', 'cel, celui', 'cea, celei'], ['plural', 'cei, celor', 'cele, celor']]},
                {'t': 'tabel', 'cap': ['Scriem', 'Când', 'Exemplu'], 'lat': [0.18, 0.37, 0.45],
                 'r': [['*cel* / *ce-l*', 'articol / *ce* + *îl*', '*băiatul cel mic* / *Ce-l supără?*'],
                       ['*cea* / *ce-a*', 'articol / *ce* + *a*', '*fata cea harnică* / *Ce-a spus?*'],
                       ['*cei* / *ce-i*', 'articol / *ce* + *îi*', '*copiii cei mici* / *Ce-i dai?*']]},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„virtual”* – adjectiv propriu-zis, variabil, se acordă în gen și număr cu substantivul „joc” (neutru, singular), în propoziție este atribut.']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-15',
        'titlu': 'Gradele de comparație ale adjectivului',
        'sub': SUB.format(n=15, pp='pp. 132-133'),
        'sursa': 'Sursa: Manual Art 5, pp. 132-133, rubrica Repere.' + CREATE,
        'sect': [
            ('1. CE SUNT', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Gradele de comparație** (de intensitate) sunt formele pe care le ia adjectivul pentru a arăta **în ce măsură** un obiect are o însușire.']},
            ]),
            ('2. TOATE GRADELE', [
                {'t': 'tabel', 'cap': ['Gradul', 'Cum se formează', 'Exemplu'], 'lat': [0.34, 0.33, 0.33],
                 'r': [['**pozitiv** (forma din dicționar)', '—', '*copil curajos*'],
                       ['**comparativ de egalitate**', '*la fel de, tot atât de, tot așa de, deopotrivă de*', '*la fel de curajos*'],
                       ['**comparativ de superioritate**', '*mai*', '*mai curajos*'],
                       ['**comparativ de inferioritate**', '*mai puțin*', '*mai puțin curajos*'],
                       ['**superlativ relativ de superioritate**', '*cel, cea, cei, cele* + *mai*', '*cel mai curajos*'],
                       ['**superlativ relativ de inferioritate**', '*cel* + *mai puțin*', '*cel mai puțin curajos*'],
                       ['**superlativ absolut de superioritate**', '*foarte, tare, prea*', '*foarte curajos*'],
                       ['**superlativ absolut de inferioritate**', '*foarte puțin, tare puțin*', '*foarte puțin curajos*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Superlativul **relativ** compară cu un grup (*cel mai curajos din clasă*); superlativul **absolut** nu compară cu nimic.']},
            ]),
            ('3. ADJECTIVE FĂRĂ GRADE DE COMPARAȚIE', [
                {'t': 'tabel', 'cap': ['De ce', 'Exemple'], 'lat': [0.45, 0.55],
                 'r': [['erau deja comparative sau superlative în latină', '*superior, inferior, optim, suprem, maxim, minim, superb*'],
                       ['însușirea nu poate fi modificată', '*complet, unic, principal, veșnic, colosal, uriaș, gigantic*'],
                       ['sensul nu permite comparația', '*acvatic, energetic, profesional, bucureștean*']]},
                {'t': 'atentie', 'p': ['Greșit: *foarte excelent*, *cel mai unic*. Aceste adjective nu primesc *mai* sau *foarte*.']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-16',
        'titlu': 'Descrierea unei persoane. Autoportretul',
        'sub': SUB.format(n=16, pp='pp. 134-135'),
        'sursa': 'Sursa: Manual Art 5, pp. 134-135, rubrica Repere, pașii și lista de control.',
        'sect': [
            ('1. PORTRETUL ȘI AUTOPORTRETUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Portretul** (descrierea unei persoane) se face stabilind elementele **fizice** și **morale** pe care le descriem și trăsăturile care fac persoana deosebită.']},
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Autoportretul** este portretul pe care cineva (scriitor, pictor sau om obișnuit) și-l face **sieși**.']},
            ]),
            ('2. CE POT DESCRIE', [
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'portretul fizic', 'col': 't', 'p': ['cum arăt']},
                    {'titlu': 'portretul moral', 'col': 'm', 'p': ['ce fel de om sunt']},
                    {'titlu': 'pasiunile', 'col': 'a', 'p': ['ce îmi place să fac']},
                    {'titlu': 'ce nu se vede', 'col': 'n', 'p': ['gusturi, obiceiuri, prieteni']},
                ]},
            ]),
            ('3. PAȘII AUTOPORTRETULUI', [
                {'t': 'text', 'p': ['1. Fac o listă cu tot ce mă definește, gândindu-mă că îl vor citi colegii.',
                                    '2. Restrâng lista la **cinci aspecte**.',
                                    '3. Schițez un **plan** cu ordinea lor.',
                                    '4. Scriu prima variantă, atent la organizarea ideilor.',
                                    '5. Revizuiesc: ideile importante, claritatea, apoi gramatica, ortografia, punctuația.',
                                    '6. Pot adăuga o fotografie sau un desen.']},
            ]),
            ('4. LISTA DE CONTROL', [
                {'t': 'text', 'p': ['• Paragraful introductiv prezintă tema și captează atenția.',
                                    '• Fiecare dintre cele cinci aspecte are paragraful său, cu detalii potrivite.',
                                    '• Stilul e plăcut; imaginea completează textul.',
                                    '• Textul e așezat corect în pagină, lizibil și îngrijit.']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-18',
        'titlu': 'Recapitulare. Lectură și comunicare în Unitatea IV',
        'sub': SUB.format(n=18, pp='pp. 110-125, 136-137'),
        'sursa': 'Sursa: Manual Art 5, rubricile Repere ale lecțiilor 2-10 și cerințele recapitulării de la pp. 136-137.',
        'sect': [
            ('1. LEGENDA', [
                {'t': 'text', 'p': ['Explicații **imaginare** pentru originea lumii, a plantelor, a animalelor, a fenomenelor; transmise mai întâi oral. În **legendele antice**, zeii intervin supranatural, într-un timp îndepărtat (*Tezeu și Minotaurul*, *Heracle și leul din Nemeea*).']},
            ]),
            ('2. CÂND CITESC O NARAȚIUNE', [
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'Cine?', 'col': 'n', 'p': ['personajul principal și cele secundare']},
                    {'titlu': 'Ce?', 'col': 'n', 'p': ['evenimentul prezentat']},
                    {'titlu': 'Unde? Când?', 'col': 'n', 'p': ['locul și timpul']},
                    {'titlu': 'De ce?', 'col': 'n', 'p': ['ce declanșează acțiunea']},
                ]},
            ]),
            ('3. COMPARAȚIA', [
                {'t': 'text', 'p': ['**comparat** + element de legătură (*ca, precum, cât…*) + **comparant**: *Săgeata s-a izbit de el* **ca de un zid de piatră**.']},
            ]),
            ('4. TEXTE CU MAI MULTE MODURI DE COMUNICARE', [
                {'t': 'text', 'p': ['**Textul explicativ (aplicativ)**: instrucțiuni, pași, verbe la imperativ, schițe.',
                                    '**Banda desenată**: planșă, bandă, viniete, bule, recitative, onomatopee.']},
            ]),
            ('5. COMUNICAREA', [
                {'t': 'text', 'p': ['**Atitudinile comunicative**: ce spun despre mine și despre relația cu ceilalți, dincolo de cuvinte. **Atenția** și **empatia** fac o comunicare bună.',
                                    '**Acte de limbaj**: a întreba, a solicita, a felicita, simplu cu cei apropiați, politicos cu ceilalți.']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-19',
        'titlu': 'Recapitulare. Pronumele și adjectivul',
        'sub': SUB.format(n=19, pp='pp. 126-137'),
        'sursa': 'Sursa: Manual Art 5, pp. 126-135, rubricile Repere ale lecțiilor 11-15.',
        'sect': [
            ('1. PRONUMELE PERSONAL ȘI DE POLITEȚE', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.24, 0.46, 0.30],
                 'r': [['pronumele', 'ține locul unui substantiv', '*Heracle → el*'],
                       ['pronumele personal', 'persoana I, a II-a, a III-a; singular, plural; gen doar la a III-a', '*eu, tu, el/ea, noi, voi, ei/ele*'],
                       ['forme accentuate / neaccentuate', 'cele scurte se leagă cu cratimă', '*mie / îmi, mi-*'],
                       ['pronumele de politețe', 'arată respect; persoanele a II-a și a III-a', '*dumneavoastră, dumnealui*']]},
            ]),
            ('2. ADJECTIVUL', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.24, 0.46, 0.30],
                 'r': [['adjectivul', 'arată o însușire; se acordă cu substantivul; e atribut', '*leul uriaș*'],
                       ['propriu-zis / din participiu', '', '*roșu / aprins*'],
                       ['variabil / invariabil', 'își schimbă sau nu forma', '*mare – mari / gri*'],
                       ['articolul demonstrativ', 'leagă adjectivul de substantiv', '*Heracle cel viteaz*']]},
            ]),
            ('3. GRADELE DE COMPARAȚIE', [
                {'t': 'text', 'p': ['pozitiv: *puternic* · comparativ: *la fel de / mai / mai puțin puternic* · superlativ relativ: *cel mai / cel mai puțin puternic* · superlativ absolut: *foarte / foarte puțin puternic*']},
                {'t': 'atentie', 'p': ['Adjectivele ca *uriaș, unic, superb, suprem* **nu** au grade de comparație.']},
            ]),
        ],
    },
]
