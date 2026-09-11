# Scheme-notițe, clasa a VIII-a, Unitatea a V-a „Încotro se îndreaptă lumea?”.
# Conținutul vine din rubricile Repere ale Manualului Art 8, pp. 170-201;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-8-unitatea-5.py

SUB = 'Clasa a VIII-a · Unitatea a V-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-2',
        'titlu': 'Textul epic de mare întindere. Romanul. Distopia',
        'sub': SUB.format(n=2, pp='pp. 170-171'),
        'sursa': 'Sursa: Manual Art 8, pp. 170-171, rubrica Repere; textul de bază este „Fahrenheit 451” de Ray Bradbury.',
        'sect': [
            ('1. CUM E ORGANIZAT UN TEXT EPIC AMPLU', [
                {'t': 'text', 'p': ['Textul epic poate fi scurt, de lungime medie sau de mari dimensiuni, împărțit în **părți**, **capitole**, **subcapitole**, marcate prin titluri, numere sau **blancuri** (spații albe).']},
                {'t': 'text', 'p': ['Blancurile:']},
                {'t': 'text', 'p': ['• oferă cititorului un **punct de reper** în lectură;',
                                    '• delimitează un **episod semnificativ** din viața personajelor;',
                                    '• întrețin **suspansul** prin decupajul acțiunii.']},
            ]),
            ('2. ROMANUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Romanul** este, în general, cel mai amplu text epic: **personaje numeroase**, **acțiune complexă**, **mai multe fire narative**.']},
                {'t': 'text', 'p': ['E cel mai puțin supus constrângerilor: există și romane scurte, cu puține personaje și acțiune simplă.',
                                    'După teme, romanele pot fi: **sociale, istorice, de aventuri, polițiste, de dragoste, de anticipație** (science-fiction, SF).']},
            ]),
            ('3. UTOPIA ȘI DISTOPIA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'utopia', 'col': 't', 'p': ['din greacă, „loc care nu există”', 'o societate **ideală**, imaginară']},
                    {'titlu': 'distopia', 'col': 'r', 'p': ['imaginea **opusă** utopiei', 'societăți ale viitorului **dezumanizate** de un control politic, tehnologic sau religios']},
                ]},
            ]),
            ('4. LITERATURA SF', [
                {'t': 'text', 'p': ['**SF-ul** inventează **lumi posibile**, într-un timp și un spațiu imaginare, pornind de la **ipoteze științifice** și de la cunoștințele tehnice actuale.']},
                {'t': 'tabel', 'cap': ['SF', 'Fantastic', 'Fantasy'], 'lat': [0.34, 0.33, 0.33], 'al': ['c', 'c', 'c'],
                 'r': [['explicații științifice', 'o dimensiune **inexplicabilă** a evenimentelor', 'intervine **magia**']]},
                {'t': 'text', 'p': ['Dincolo de temele frecvente (invazia extraterestră, inteligența artificială), SF-ul invită la **reflecție** despre viitorul umanității: teme politice, culturale, ecologice.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-3',
        'titlu': 'Structuri textuale și îmbinarea lor',
        'sub': SUB.format(n=3, pp='pp. 172-173'),
        'sursa': 'Sursa: Manual Art 8, pp. 172-173, rubrica Repere, modelul din Explorare și grila de evaluare.',
        'sect': [
            ('1. SECVENȚELE DE BAZĂ', [
                {'t': 'text', 'p': ['Textul epic are o structură complexă, în care recunosc secvențele **narative, descriptive, dialogate, explicative și argumentative**.']},
                {'t': 'tabel', 'cap': ['Structura', 'După ce o recunosc'], 'lat': [0.22, 0.78],
                 'r': [['dialogată', 'adresare la persoana a II-a, substantive în vocativ, enunțuri interogative, replici'],
                       ['narativă', 'o acțiune cu personaje, într-o ordine logică și temporală'],
                       ['descriptivă', 'trăsăturile unui obiect, ale unui personaj, cadrul în timp și spațiu'],
                       ['explicativă', 'lămurește împrejurări, cauze, felul în care funcționează ceva'],
                       ['argumentativă', 'susține un punct de vedere cu argumente']]},
            ]),
            ('2. CUM SE ÎMBINĂ STRUCTURILE', [
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'succesiune', 'col': 't', 'p': ['o structură îi urmează alteia', 'A → B']},
                    {'titlu': 'alternanță', 'col': 'm', 'p': ['structurile revin rând pe rând, în grupaje', 'A → B → A → B']},
                    {'titlu': 'inserție', 'col': 'a', 'p': ['o structură apare în interiorul alteia', 'A [ B ] A']},
                ]},
            ]),
            ('3. MODELUL DIN MANUAL', [
                {'t': 'nota', 'p': ['*„Cu simbolica lui cască numerotată «451» trasă peste figura flegmatică, ai cărei ochi ardeau cu o flacără portocalie la gândul dezastrului iminent – scăpără aprinzătorul, iar casa fu înghițită de o vâlvătaie enormă, care mistui și cerul nocturn, vopsindu-l în roșu, în galben și-n negru.”*',
                                    'descriptivă – (narativă) – descriptivă = structura narativă este **inserată** în cea descriptivă.']},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-4',
        'titlu': 'Personajele. Conflictul',
        'sub': SUB.format(n=4, pp='pp. 174-175'),
        'sursa': 'Sursa: Manual Art 8, pp. 174-175, rubrica Repere, criteriile din Explorare și blazonul personajului.',
        'sect': [
            ('1. CUM CLASIFIC PERSONAJELE', [
                {'t': 'tabel', 'cap': ['Criteriul', 'Tipurile'], 'lat': [0.3, 0.7],
                 'r': [['importanța', '**principal** / **secundar**'],
                       ['rolul în conflict', '**protagonist** / **antagonist**'],
                       ['numărul', '**individual** / **colectiv**'],
                       ['evoluția', 'personaje care **se schimbă** / care **rămân neschimbate**']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Autorul poate construi personajele în **perechi antitetice** (antiteza).']},
            ]),
            ('2. CONFLICTUL', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'conflict exterior', 'col': 't', 'p': ['personajul se confruntă cu ceva sau cineva din afara lui']},
                    {'titlu': 'conflict interior', 'col': 'm', 'p': ['porniri, idei, atitudini contradictorii ale aceluiași personaj']},
                ]},
                {'t': 'tabel', 'cap': ['Omul în conflict cu', 'Ce înseamnă'], 'lat': [0.3, 0.7],
                 'r': [['**altă persoană**', 'ciocnire de interese, de valori între personaje'],
                       ['**societatea**', 'încalcă normele sociale, politice, culturale, morale ale comunității'],
                       ['**natura**', 'înfruntă forțele naturii sau provoacă dezastre'],
                       ['**tehnologia**', 'se confruntă cu inteligența artificială: roboți, androizi, nave'],
                       ['**sine însuși**', 'idei contradictorii, confruntarea cu propriile limite'],
                       ['**soarta, forțele supranaturale**', 'destinul, puteri mai presus de om']]},
            ]),
            ('3. BLAZONUL PERSONAJULUI', [
                {'t': 'text', 'p': ['numele · **mottoul** · un **eveniment important** · **calitatea principală** · **defectul principal** · alt personaj literar cu care îl asemăn · o vietate, o plantă sau o formă de relief care i se potrivește']},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-6',
        'titlu': 'Textul nonliterar. Textul de opinie',
        'sub': SUB.format(n=6, pp='pp. 178-180'),
        'sursa': 'Sursa: Manual Art 8, pp. 178-180, rubrica Repere; textul de bază este „Când vei fi adult, e posibil să nu ai loc de muncă” de Yuval Noah Harari.',
        'sect': [
            ('1. TEXTUL DE OPINIE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul de opinie** este un text nonliterar în care autorul își expune **opiniile** despre o temă, ca să-i **convingă** pe cititori de adevărul unei idei.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'argumente raționale', 'col': 't', 'p': ['fapte, dovezi, exemple din realitate, deducții logice']},
                    {'titlu': 'argumente emoționale', 'col': 'm', 'p': ['impresii, convingeri personale']},
                ]},
            ]),
            ('2. STRATEGII', [
                {'t': 'tabel', 'cap': ['Strategia', 'Ce face autorul'], 'lat': [0.25, 0.75],
                 'r': [['**obiecția**', 'formulează o idee opusă, ca s-o respingă'],
                       ['**concesia**', 'acceptă parțial o idee opusă'],
                       ['**analogia**', 'găsește asemănări între teza lui și alte idei sau situații'],
                       ['**examenul critic**', 'evaluează punctele tari și slabe ale opiniei'],
                       ['**confruntarea**', 'compară argumentarea pro cu cea contra']]},
            ]),
            ('3. CONECTORII', [
                {'t': 'tabel', 'cap': ['Rolul', 'Conectori'], 'lat': [0.25, 0.75],
                 'r': [['ierarhia argumentelor', '*mai întâi, după aceea, apoi, în plus, în cele din urmă; în primul rând, în al doilea rând*'],
                       ['adaos / analogie', '*în plus, mai mult, de altfel, și / tot astfel, la fel*'],
                       ['concesie / obiecție / opoziție', '*totuși, cu toate acestea / dar / dimpotrivă, din contră, însă, în schimb*'],
                       ['concluzie / consecință', '*așa că, așadar, deci / astfel, în consecință*'],
                       ['confirmare / rectificare', '*într-adevăr / de fapt, în fine, mai bine zis*'],
                       ['exemplificare / explicație', '*astfel, de exemplu, bunăoară / pentru că, de aceea, asta înseamnă că*']]},
            ]),
            ('4. CE MAI OBSERV', [
                {'t': 'text', 'p': ['• **procedee**: adresarea directă către cititori, enunțurile interogative;',
                                    '• **figuri de stil**: epitete, comparații, hiperbole, antiteze, personificări, repetiții, enumerații;',
                                    '• **structuri**: predomină cele **argumentative** și **explicative**; pot apărea un dialog fictiv (cu cititorul sau cu un adversar de idei) și structuri narative sau descriptive, ca exemple.']},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-9',
        'titlu': 'Argumentare și persuasiune: logos, patos, etos',
        'sub': SUB.format(n=9, pp='pp. 186-187'),
        'sursa': 'Sursa: Manual Art 8, pp. 186-187, rubrica Repere și modelul de raționament din Explorare.',
        'sect': [
            ('1. CE FACE O ARGUMENTARE BUNĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Calitatea unei argumentări se măsoară prin **eficacitatea** ei, adică prin puterea de **persuasiune** (de convingere).']},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'LOGOS', 'col': 't', 'p': ['**corectitudinea logică** a argumentelor']},
                    {'titlu': 'PATOS', 'col': 'r', 'p': ['**implicarea emoțională** a auditoriului']},
                    {'titlu': 'ETOS', 'col': 'n', 'p': ['**credibilitatea** vorbitorului: valori comune, argumente de calitate']},
                ]},
            ]),
            ('2. FORȚA UNUI ARGUMENT', [
                {'t': 'text', 'p': ['Depinde de doi factori:']},
                {'t': 'text', 'p': ['1. **premisele** sunt juste: fapte, exemple, dovezi adevărate sau credibile;',
                                    '2. **legătura** dintre argument și concluzie e potrivită: deducția e corectă.']},
                {'t': 'nota', 'titlu': 'Un raționament greșit (model din manual):', 'p': ['*Gulliver merge la școala din Laputa, deci Gulliver este elev al acestei școli.* Este greșit, pentru că nu există o legătură **cauză-efect** între vizita la școală și calitatea de elev.']},
            ]),
            ('3. RECEPTORUL', [
                {'t': 'text', 'p': ['Vorbitorul vrea să-i schimbe receptorului convingerile, credințele sau acțiunile. Impactul argumentelor depinde de receptor:']},
                {'t': 'text', 'p': ['• ce **știe** despre temă;', '• dacă are **convingeri ferme**;', '• dacă are **idei preconcepute**.']},
                {'t': 'atentie', 'p': ['Același subiect cere argumente diferite pentru ascultători diferiți (de exemplu, părinții sau un prieten).']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-10',
        'titlu': 'Argumentare și persuasiune: discuția argumentată',
        'sub': SUB.format(n=10, pp='pp. 186-187'),
        'sursa': 'Sursa: Manual Art 8, pp. 186-187, rubricile Repere și Aplicații, grila de evaluare.',
        'sect': [
            ('1. TIPURI DE ARGUMENTE', [
                {'t': 'tabel', 'cap': ['Argumentul se sprijină pe', 'Apelul la'], 'lat': [0.55, 0.45],
                 'r': [['dovezi: fapte, informații, exemple, statistici, cercetări', '**logos** (rațiune)'],
                       ['stări emoționale, experiențe subiective', '**patos** (emoție)'],
                       ['idei consacrate, valori morale, propria credibilitate', '**etos** (valori, încredere)']]},
            ]),
            ('2. PAȘII UNEI DISCUȚII ARGUMENTATE', [
                {'t': 'text', 'p': ['1. notăm ideile despre temă (de exemplu, *Școala viitorului*);',
                                    '2. alegem prin vot 2-3 aspecte concrete;',
                                    '3. în grupe, căutăm **cele mai bune strategii de persuasiune**, cu argumente logice, bazate pe fapte și dovezi;',
                                    '4. un reprezentant prezintă argumentele; ceilalți evaluează după grilă.']},
            ]),
            ('3. GRILA DE EVALUARE', [
                {'t': 'text', 'p': ['• ideea argumentată (**premisa**) reiese clar;',
                                    '• argumentele sunt prezentate **logic**, ușor de urmărit;',
                                    '• se sprijină pe **exemple relevante, fapte, statistici, cercetări**;',
                                    '• implică **valori morale**;',
                                    '• se bazează și pe **experiențe și emoții**;',
                                    '• **stilul** argumentării e atractiv.']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-11',
        'titlu': 'Circumstanțialul de cauză',
        'sub': SUB.format(n=11, pp='p. 188'),
        'sursa': 'Sursa: Manual Art 8, p. 188, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțialul de cauză** arată **cauza** sau **motivul** unei acțiuni ori al unei însușiri. Răspunde la întrebările: **din ce cauză? din ce pricină? din ce motiv?**']},
                {'t': 'atentie', 'titlu': 'Regula timpului:', 'p': ['cauza este **obligatoriu anterioară** acțiunii sau însușirii exprimate de regent.']},
                {'t': 'text', 'p': ['**Regentul**: verb, locuțiune verbală (*Am înghețat* **de frig**. *A băgat de seamă* **din întâmplare**.) sau adjectiv (*Era roșu* **de furie**.).']},
            ]),
            ('2. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['substantiv, pronume, numeral în Ac. cu *de, din, dintru, pentru, din cauză de, din pricină de*', '*Plecase din această cauză. Să nu fii supărat pentru mine. De ce râzi?*'],
                       ['pronume personal în G. sau adjectiv posesiv, după *din cauza, din pricina*', '*Întârziase din cauza lui / sa.*'],
                       ['adjectiv cu prepoziție', '*A plâns de bucuroasă.*'],
                       ['adverb, locuțiune adverbială', '*De repede ce vorbea, nu-l înțelegeau. Plouă și de aceea mi-e frig.*'],
                       ['gerunziu / infinitiv', '*Lăudându-l prea mult, s-a obrăznicit. Este amendat pentru a nu-și fi făcut datoria.*']]},
            ]),
            ('3. DIN CAUZA SAU DATORITĂ?', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'din cauza, din pricina', 'col': 'r', 'p': ['efect **nefavorabil**']},
                    {'titlu': 'datorită', 'col': 'v', 'p': ['efect **pozitiv**']},
                ]},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„din neglijență” – circumstanțial de cauză, exprimat prin substantiv comun, simplu, genul feminin, numărul singular, cazul acuzativ, nearticulat, precedat de prepoziția simplă „din”.*']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-12',
        'titlu': 'Circumstanțiala de cauză',
        'sub': SUB.format(n=12, pp='pp. 189-190'),
        'sursa': 'Sursa: Manual Art 8, pp. 189-190, rubricile Repere.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțiala de cauză** este circumstanțialul de cauză exprimat printr-o **propoziție**. Răspunde la: *din ce cauză? din ce pricină? din ce motiv?*']},
                {'t': 'text', 'p': ['**Regentul**: verb sau locuțiune verbală (*Toți te apreciază, 1/ pentru că ești silitor. 2/*), adjectiv (*Fericită 1/ pentru că a avut succes, 2/...*), adverb (*Dansează grațios, 1/ fiindcă a luat ore de balet. 2/*), interjecție predicativă (*Trosc! cu pumnul în masă, 1/ că se enervase. 2/*).']},
            ]),
            ('2. ELEMENTELE DE RELAȚIE', [
                {'t': 'tabel', 'cap': ['Elementul', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['conjuncții: *căci, că, dacă, deoarece, fiindcă, întrucât*; *cum, când, unde* cu sens cauzal', '*Cum nu s-a întors la timp, 1/ m-am îngrijorat. 2/*'],
                       ['locuțiuni: *pentru că, pe motiv că, din cauză că, din pricină că, de vreme ce, din moment ce, odată ce*', '*Vine mereu la noi, 1/ pentru că se simte bine. 2/*'],
                       ['pronume relative cu prepoziții', '*Nu mă doare capul 1/ de ce crezi tu. 2/*'],
                       ['adjective pronominale relative', '*Nu-i tace gura, 1/ de câte istorii știe. 2/*']]},
            ]),
            ('3. CORELATIVE, TOPICĂ, VIRGULĂ', [
                {'t': 'text', 'p': ['Corelative în regentă: *de aceea, de asta, de aia, pentru aceea, atunci, apoi*.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'topica', 'col': 't', 'p': ['înainte sau după regentă', 'cu **cum**: **mereu înainte**', 'cu **că, căci**: **mereu după**']},
                    {'titlu': 'virgula', 'col': 'm', 'p': ['**de obicei, cu virgulă**', 'fără virgulă, dacă legătura cauză-efect e foarte importantă pentru vorbitor sau dacă e **singura cauză**']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-13',
        'titlu': 'Circumstanțialul de scop',
        'sub': SUB.format(n=13, pp='p. 191'),
        'sursa': 'Sursa: Manual Art 8, p. 191, rubrica Repere și modelul de analiză.' + CREATE,
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțialul de scop** arată **scopul** unei acțiuni sau al unei însușiri. Răspunde la întrebările: **cu ce scop? în ce scop?**']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'cauza', 'col': 'n', 'p': ['e **înainte** de acțiune', '*A plecat de frică.*']},
                    {'titlu': 'scopul', 'col': 'a', 'p': ['e **după** acțiune, urmărit de ea', '*A plecat pentru cumpărături.*']},
                ]},
            ]),
            ('2. DE CE DEPINDE', [
                {'t': 'tabel', 'cap': ['Regentul', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['verb, locuțiune verbală', '*Am adunat fonduri* **pentru ajutorarea copiilor**.'],
                       ['interjecție predicativă', '*Hai* **la plimbare**!'],
                       ['adjectiv', '*Era mereu atentă* **pentru a înțelege lecția**.'],
                       ['adverb', '*A colectat deșeurile bine,* **pentru a nu mai face încă un drum**.']]},
            ]),
            ('3. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['substantiv, pronume, numeral în Ac. sau G. cu *pentru, spre, întru, în, cu, după, la, în vederea*', '*Mergem la cumpărături. Testul e greu și în vederea lui m-am pregătit.*'],
                       ['locuțiune adverbială', '*De aceea te-a vizitat, pentru a-ți face o bucurie.*'],
                       ['infinitiv / supin', '*Spre a se convinge, a venit el însuși. Ogorul a fost pregătit pentru semănat.*']]},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„cu scopul” – circumstanțial de scop, exprimat prin substantiv comun, genul neutru, numărul singular, cazul acuzativ, articulat cu articolul hotărât „-l”, precedat de prepoziția simplă „cu”.*']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-14',
        'titlu': 'Circumstanțiala de scop',
        'sub': SUB.format(n=14, pp='pp. 192-193'),
        'sursa': 'Sursa: Manual Art 8, pp. 192-193, rubricile Repere.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțiala de scop** este circumstanțialul de scop exprimat printr-o **propoziție**. Răspunde la: *cu ce scop? în ce scop?*']},
                {'t': 'text', 'p': ['**Regentul**: verb sau locuțiune verbală (*L-am chemat 1/ să mă ajute. 2/*), adjectiv (*Era amabil cu toți 1/ ca să facă o impresie bună. 2/*), interjecție predicativă (*Poftim un ceai 1/ ca să te încălzești. 2/*).']},
            ]),
            ('2. ELEMENTELE DE RELAȚIE', [
                {'t': 'tabel', 'cap': ['Elementul', 'Exemplu'], 'lat': [0.4, 0.6],
                 'r': [['conjuncții: *ca să / ca ... să, să, de*', '*S-a dus la munte 1/ ca să se relaxeze. 2/ Hai 1/ de mănâncă! 2/*'],
                       ['locuțiunea *pentru ca ... să*', '*Am urmat sfaturile grădinarului 1/ pentru ca planta să se prindă. 2/*'],
                       ['pronume relative cu prepoziții', '*Muncise mult 1/ pentru ce avea de realizat. 2/*']]},
            ]),
            ('3. CORELATIVE, TOPICĂ, VIRGULĂ', [
                {'t': 'text', 'p': ['Corelative în regentă: *de aceea, de asta, de aia, anume, înadins, într-adins, intenționat*.']},
                {'t': 'tabel', 'cap': ['Situația', 'Regula'], 'lat': [0.45, 0.55],
                 'r': [['introdusă prin **să**, **de**', 'stă **după** regentă, **fără** virgulă'],
                       ['introdusă prin **ca să**, **pentru ca ... să**', 'poate sta și **înaintea** regentei'],
                       ['înaintea regentei', 'de obicei **cu** virgulă'],
                       ['după regentă', 'cu sau fără virgulă, după cât de strânsă e legătura'],
                       ['cu un **corelativ** în regentă', '**mereu cu virgulă**: *De aceea stă la umbră, ca să nu se bronzeze.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-15',
        'titlu': 'Construcții concesive',
        'sub': SUB.format(n=15, pp='pp. 194-195'),
        'sursa': 'Sursa: Manual Art 8, pp. 194-195, rubricile Repere.',
        'sect': [
            ('1. CE SUNT', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Construcțiile concesive** arată o împrejurare care **ar putea împiedica** o acțiune sau o însușire, **dar nu o împiedică**. Răspund la: **în ciuda cărui fapt? în pofida cărui fapt?**']},
                {'t': 'text', 'p': ['**Regentul**: verb sau locuțiune verbală, adjectiv sau locuțiune adjectivală, adverb sau locuțiune adverbială, interjecție predicativă: *Echipa a fost victorioasă,* **în pofida caniculei**. *Hai cu noi, 1/* **deși nu prea e loc**! *2/*']},
            ]),
            ('2. ÎN PROPOZIȚIE (CIRCUMSTANȚIAL CONCESIV)', [
                {'t': 'tabel', 'cap': ['Prin', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['substantiv în Ac. sau G. cu *cu tot, în ciuda, în pofida, indiferent de*', '*Cu toată vremea urâtă, am ieșit. În ciuda părerii tale, e un profesionist.*'],
                       ['adjectiv cu *chiar (și), și, nici*', '*Nu ar veni nici invitat.*'],
                       ['pronume, numeral cu *fără*, însoțite de *chiar (și)*', '*Chiar fără tine, tot ne-am descurcat.*'],
                       ['adverb, locuțiune adverbială', '*Contrar impresiei voastre, ea este serioasă. Cu toate acestea, nu a renunțat.*'],
                       ['infinitiv / gerunziu', '*Fără a fi prezent, tot a știut. Neștiind prea multe, s-a descurcat totuși.*']]},
            ]),
            ('3. ÎN FRAZĂ (CIRCUMSTANȚIALA CONCESIVĂ)', [
                {'t': 'tabel', 'cap': ['Elementul de relație', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['conjuncții: *deși, dacă, de, să, că*', '*Am mers cu ei, 1/ deși aveam treabă. 2/*'],
                       ['locuțiuni: *cu toate că, chiar dacă, chiar de, chiar să, măcar că, măcar să, fără să, fără ca ... să, chit că*', '*Se temea de el, 1/ cu toate că nu avea motive. 2/*'],
                       ['pronume și adjective nehotărâte', '*Oricâte necazuri ar avea, 1/ e mereu zâmbitor. 2/*'],
                       ['adverbe nehotărâte', '*Oricând ai veni, 1/ tot aici ne găsești. 2/*'],
                       ['juxtapunere (fără element de relație)', '*Supără-te, 1/ noi tot plecăm! 2/*']]},
                {'t': 'atentie', 'p': ['Construcțiile concesive, înainte sau după regent, se despart **întotdeauna prin virgulă**.']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-16',
        'titlu': 'Construcții condiționale',
        'sub': SUB.format(n=16, pp='pp. 196-197'),
        'sursa': 'Sursa: Manual Art 8, pp. 196-197, rubricile Repere.',
        'sect': [
            ('1. CE SUNT', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Construcțiile condiționale** arată o **ipoteză** sau o **condiție** de care depinde o acțiune. Răspund la întrebarea: **cu ce condiție?**']},
                {'t': 'text', 'p': ['**Regentul**: verb sau locuțiune verbală (*Dacă o să fie vreme bună, 1/ mergem în excursie. 2/*), adjectiv (*o mască utilizabilă* **în caz de incendiu**), interjecție predicativă (*Hai și tu 1/ dacă vrei! 2/*).']},
            ]),
            ('2. ÎN PROPOZIȚIE (CIRCUMSTANȚIAL CONDIȚIONAL)', [
                {'t': 'tabel', 'cap': ['Prin', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['substantiv (sau substitut) în Ac. sau G. cu *cu condiția, în caz de, în locul*', '*În caz de furtună, adăpostește-te! În locul lor, l-aș fi pedepsit.*'],
                       ['gerunziu', '*Ascultând cu atenție, vei înțelege.*'],
                       ['adverb', '*Antrenează-te, altfel nu poți câștiga!*']]},
            ]),
            ('3. ÎN FRAZĂ (CIRCUMSTANȚIALA CONDIȚIONALĂ)', [
                {'t': 'tabel', 'cap': ['Elementul de relație', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['conjuncții: *dacă, de, să*; *când* cu sens condițional', '*Nu va fi pedepsit 1/ dacă nu este vinovat. 2/ Când aș ști 1/ că minți, 2/ m-aș supăra. 3/*'],
                       ['locuțiuni: *în caz că, fără să*', '*Nu mai plecăm la munte, 1/ în caz că plouă. 2/*'],
                       ['pronume relative și nehotărâte cu *în locul*', '*În locul cui a intervenit, 1/ eu nu aș fi spus asta. 2/*'],
                       ['juxtapunere', '*Muncești, 1/ ai de toate! 2/*']]},
                {'t': 'text', 'p': ['• **Topica** e liberă: înainte sau după regent.',
                                    '• **Virgula** depinde de legătura pe care o face vorbitorul; apare **mai des** când condiționala stă **înainte**: *Dacă are timp, va veni.*']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-17',
        'titlu': 'Exprimarea preferințelor și a opiniilor',
        'sub': SUB.format(n=17, pp='pp. 198-199'),
        'sursa': 'Sursa: Manual Art 8, pp. 198-199, rubrica Repere.',
        'sect': [
            ('1. ATITUDINEA VORBITORULUI', [
                {'t': 'text', 'p': ['Când îmi exprim preferințele și opiniile, arăt **atitudinea subiectivă** față de temă sau față de realitate prin **verbe de opinie, adverbe, adjective, locuțiuni, expresii**.']},
            ]),
            ('2. VALORILE ȘI MIJLOACELE', [
                {'t': 'tabel', 'cap': ['Valoarea', 'Mijloace'], 'lat': [0.22, 0.78],
                 'r': [['**certitudinea**', '*știu că, am convingerea că, e limpede că, adevărul e că, nu încape îndoială că; bineînțeles, firește, în mod evident*'],
                       ['**incertitudinea**', '*bănuiesc că, presupun / cred că, îmi imaginez că, mă îndoiesc că, m-aș mira să; aproximativ, oarecum*'],
                       ['**probabilitatea**', '*s-ar părea că, s-ar putea să, nu e exclus să; după cât se pare; eventual, poate, probabil, pesemne, parcă*'],
                       ['**necesitatea**', '*trebuie să, se cuvine să, se impune să, e nevoie să, am obligația să; neapărat*'],
                       ['**dorința**', '*doresc să, vreau să, am intenția să*'],
                       ['**aprecierea pozitivă**', '*apreciez, merită să, sunt bucuros că, am plăcerea să, e bine / util / recomandabil să*'],
                       ['**aprecierea negativă**', '*detest să, îmi displace că, regret că, nu e indicat să; din păcate, din nefericire, e greșit / trist*']]},
            ]),
            ('3. ATITUDINE SIGURĂ SAU PRUDENTĂ', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'sigură', 'col': 't', 'p': ['formule de **certitudine** și de **necesitate**']},
                    {'titlu': 'prudentă', 'col': 'm', 'p': ['și formule de **incertitudine** sau de **probabilitate**']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-18',
        'titlu': 'Textul de opinie pentru revista școlii',
        'sub': SUB.format(n=18, pp='pp. 198-199'),
        'sursa': 'Sursa: Manual Art 8, p. 199, etapele redactării și grila de evaluare.',
        'sect': [
            ('1. ETAPELE', [
                {'t': 'text', 'p': ['1. adun **întrebări și sfaturi** despre temă (grupe de experți și de curioși);',
                                    '2. îmi aleg **punctul de vedere** și atitudinea: sigură sau prudentă;',
                                    '3. mă **documentez** și îmi organizez informațiile;',
                                    '4. fac **planul**;',
                                    '5. recitesc, corectez, completez, renunț la ce nu e important;',
                                    '6. verific **conectorii** dintre opinie și argumente și **mijloacele de exprimare a opiniei**;',
                                    '7. scriu forma finală și o citesc din scaunul autorului.']},
            ]),
            ('2. PLANUL', [
                {'t': 'tabel', 'cap': ['Partea', 'Ce scriu'], 'lat': [0.2, 0.8],
                 'r': [['**introducerea**', '**captez atenția** cititorilor și îmi formulez **opinia**'],
                       ['**cuprinsul**', '**două argumente diferite**, cu exemple: fapte, dovezi, mărturii, statistici, impresii, emoții, valori morale'],
                       ['**încheierea**', 'o concluzie care îmi **reafirmă poziția** și reia, pe scurt, argumentele']]},
            ]),
            ('3. GRILA', [
                {'t': 'text', 'p': ['• am folosit ideile discutate în grupe;',
                                    '• opinia e formulată **limpede**;',
                                    '• introducere, cuprins, încheiere, marcate prin **paragrafe**;',
                                    '• două argumente **diferite și relevante**, sprijinite pe **exemple**;',
                                    '• mijloace lingvistice potrivite de exprimare a opiniei;',
                                    '• textul este **convingător**.']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-19',
        'titlu': 'Recapitulare: romanul, structurile, conflictul',
        'sub': 'Clasa a VIII-a · Unitatea a V-a, Lecția 19 · Manual, pp. 170-175 și 200-201 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 2-4; recapitularea de la pp. 200-201 (fragment din „Darul lui Jonas” de Lois Lowry).',
        'sect': [
            ('1. ROMANUL ȘI SPECIILE LUI', [
                {'t': 'text', 'p': ['• **Romanul**: cel mai amplu text epic, personaje numeroase, acțiune complexă, mai multe fire narative; împărțit în părți, capitole, blancuri.',
                                    '• **Utopia** (societate ideală) ≠ **distopia** (societate a viitorului dezumanizată de control politic, tehnologic, religios).',
                                    '• **SF**: lumi posibile, pornind de la ipoteze științifice; ≠ fantastic (inexplicabilul), ≠ fantasy (magia).']},
            ]),
            ('2. STRUCTURILE TEXTUALE', [
                {'t': 'text', 'p': ['narativă · descriptivă · dialogată · explicativă · argumentativă, îmbinate prin **succesiune**, **alternanță** sau **inserție**.']},
            ]),
            ('3. PERSONAJELE ȘI CONFLICTUL', [
                {'t': 'tabel', 'cap': ['', 'Pe scurt'], 'lat': [0.25, 0.75],
                 'r': [['personajele', 'principal / secundar; protagonist / antagonist; individual / colectiv; care evoluează / care rămân la fel'],
                       ['conflictul exterior', 'cu altă persoană, cu societatea, cu natura, cu tehnologia, cu soarta'],
                       ['conflictul interior', 'cu sine însuși: idei, porniri contradictorii, propriile limite']]},
            ]),
            ('4. CUBUL (METODA DIN RECAPITULARE)', [
                {'t': 'text', 'p': ['**descrie** · **compară** · **asociază** · **analizează** · **aplică** · **argumentează**: șase feluri de a privi același text.']},
            ]),
        ],
    },
    # ---------------- Lecția 20 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-20',
        'titlu': 'Recapitulare: cauza, scopul, concesia, condiția',
        'sub': 'Clasa a VIII-a · Unitatea a V-a, Lecția 20 · Manual, pp. 188-197 și 200-201 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 10-15 (pp. 188-197); cerințele de limbă din recapitularea de la p. 201.',
        'sect': [
            ('1. PATRU CIRCUMSTANȚIALE', [
                {'t': 'tabel', 'cap': ['', 'Întrebarea', 'Parte de propoziție', 'Propoziție introdusă prin'], 'lat': [0.14, 0.24, 0.28, 0.34],
                 'r': [['**cauză**', '*din ce cauză?*', '*de frig, din neglijență, din cauza lui*', '*pentru că, fiindcă, deoarece, întrucât, căci, că, cum*'],
                       ['**scop**', '*cu ce scop?*', '*pentru ajutorarea..., la cumpărături, spre a...*', '*ca să, să, de, pentru ca ... să*'],
                       ['**concesie**', '*în ciuda cărui fapt?*', '*în ciuda..., cu toată..., fără a...*', '*deși, cu toate că, chiar dacă, chit că, măcar că*'],
                       ['**condiție**', '*cu ce condiție?*', '*în caz de..., cu condiția..., altfel*', '*dacă, de, să, în caz că, fără să*']]},
            ]),
            ('2. VIRGULA', [
                {'t': 'tabel', 'cap': ['Circumstanțiala', 'Virgula'], 'lat': [0.25, 0.75],
                 'r': [['de cauză', 'de obicei cu virgulă; fără, dacă e singura cauză sau legătura e foarte strânsă'],
                       ['de scop', 'cu *să, de*: fără virgulă; înainte de regentă: de obicei cu; cu corelativ: mereu cu'],
                       ['concesivă', '**întotdeauna** cu virgulă'],
                       ['condițională', 'după legătura dorită; mai des cu virgulă când stă înainte']]},
            ]),
            ('3. ATENȚIE LA SENS', [
                {'t': 'text', 'p': ['• **din cauza, din pricina** = efect nefavorabil; **datorită** = efect pozitiv.',
                                    '• Cauza e **înaintea** acțiunii; scopul e **urmărit** de acțiune.',
                                    '• Aceeași conjuncție (*să, dacă, cum, când*) poate introduce propoziții diferite: pun **întrebarea** de la regent.']},
            ]),
        ],
    },
    # ---------------- Lecția 21 ----------------
    {
        'cale': 'clasa-8/unitatea-5/lectia-21',
        'titlu': 'Recapitulare: argumentarea și opinia',
        'sub': 'Clasa a VIII-a · Unitatea a V-a, Lecția 21 · Manual, pp. 178-180, 186-187, 198-199 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 6, 9 și 16; cerința de redactare din recapitularea de la p. 201.',
        'sect': [
            ('1. CUM CONVING', [
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'LOGOS', 'col': 't', 'p': ['argumente corecte logic, premise adevărate']},
                    {'titlu': 'PATOS', 'col': 'r', 'p': ['implicarea emoțională a publicului']},
                    {'titlu': 'ETOS', 'col': 'n', 'p': ['credibilitatea mea, valorile comune']},
                ]},
                {'t': 'text', 'p': ['Strategii din textul de opinie: **obiecția, concesia, analogia, examenul critic, confruntarea**.']},
            ]),
            ('2. CUM ÎMI EXPRIM OPINIA', [
                {'t': 'tabel', 'cap': ['Valoarea', 'Exemple'], 'lat': [0.25, 0.75],
                 'r': [['certitudine', '*știu că, e limpede că, firește*'],
                       ['incertitudine / probabilitate', '*cred că, presupun că / s-ar putea să, probabil*'],
                       ['necesitate', '*trebuie să, e nevoie să*'],
                       ['apreciere', '*merită să, e util să / din păcate, regret că*']]},
            ]),
            ('3. TEXTUL DE OPINIE: CERINȚA-TIP', [
                {'t': 'text', 'p': ['• conținut adecvat, cu **strategii de argumentare și persuasiune**;',
                                    '• **mijloace lingvistice** potrivite de exprimare a opiniei;',
                                    '• introducere (opinia), cuprins (două argumente cu exemple), încheiere (poziția reafirmată);',
                                    '• exprimare clară și corectă, ortografie, punctuație, așezare în pagină.']},
            ]),
        ],
    },
]
