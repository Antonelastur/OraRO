# Scheme-notițe, clasa a VIII-a, Unitatea a III-a „Cum descoperim lumea?”.
# Conținutul vine din rubricile Repere ale Manualului Art 8, pp. 101-129;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-8-unitatea-3.py

SUB = 'Clasa a VIII-a · Unitatea a III-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-2',
        'titlu': 'Lumea ficțională',
        'sub': SUB.format(n=2, pp='pp. 101-102'),
        'sursa': 'Sursa: Manual Art 8, pp. 101-102, rubricile Repere și Provocări; textul de bază este „În Țara-Obiectelor-cu-Suflet” de Angela Baciu.',
        'sect': [
            ('1. FICȚIUNEA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Ficțiunea** (din latinescul *fictio*, „născocire”) este o reprezentare produsă de **imaginația** cuiva.']},
                {'t': 'text', 'p': ['• Apare în arte, în filme, în jocuri video: toate au în comun **invenția**, evenimente și personaje **imaginare**.',
                                    '• În sens restrâns, înseamnă narațiunile în proză; e folosit adesea ca sinonim pentru **roman**.']},
            ]),
            ('2. FICȚIUNEA LITERARĂ', [
                {'t': 'text', 'p': ['**Ficțiunea literară** este o **lume inventată**, construită cu ajutorul **limbajului**, mai apropiată sau mai îndepărtată de realitate.']},
                {'t': 'nota', 'titlu': 'Pactul cititorului:', 'p': ['când intră într-o lume ficțională, cititorul acceptă că nu va găsi o lume reală, ci una **inventată**, prin care autorul îi comunică **felul în care percepe sau înțelege lumea**.']},
            ]),
            ('3. LIMBAJUL CREEAZĂ LUMEA', [
                {'t': 'text', 'p': ['Felul în care cititorul înțelege lumea ficțională depinde de:']},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'cuvinte', 'col': 't', 'p': ['alegerea cuvintelor', 'combinarea lor în enunțuri']},
                    {'titlu': 'organizare', 'col': 'm', 'p': ['paragrafele', 'așezarea textului în pagină']},
                    {'titlu': 'scriere', 'col': 'a', 'p': ['ortografia', 'punctuația (de exemplu, majusculele neobișnuite)']},
                ]},
            ]),
            ('4. CUM SE NAȘTE O POVESTE', [
                {'t': 'text', 'p': ['Gianni Rodari: o povestire poate porni de la un **„binom fantastic”**, adică două cuvinte **îndepărtate** ca sens (de exemplu, *lumină* și *pantofi*). Imaginația caută o lume în care cele două să poată conviețui.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-3',
        'titlu': 'Combinarea structurilor textuale',
        'sub': SUB.format(n=3, pp='pp. 103-104'),
        'sursa': 'Sursa: Manual Art 8, pp. 103-104, rubrica Repere.',
        'sect': [
            ('1. STRUCTURILE TEXTUALE ȘI ÎNTREBĂRILE LOR', [
                {'t': 'tabel', 'cap': ['Structura', 'Ce face', 'Răspunde la'], 'lat': [0.18, 0.44, 0.38],
                 'r': [['**narativă**', 'prezintă întâmplări, raportate la timp', '*cine? ce face? unde? când? în ce ordine? de ce? cu ce urmări?*'],
                       ['**descriptivă**', 'informații despre personaje, peisaje, obiecte în spațiu', '*ce descrie? cum arată? din ce e compus? ce trăsături are?*'],
                       ['**dialogată**', 'replicile personajelor; le caracterizează și dau detalii despre acțiune', '*cine vorbește? despre ce discută?*'],
                       ['**explicativă**', 'explicații pentru acțiuni, comportamente, elemente ale lumii ficționale', '*cum se explică?*'],
                       ['**argumentativă**', 'susține un punct de vedere cu argumente și exemple', '*de ce?*']]},
            ]),
            ('2. DE CE LE COMBINĂ AUTORII', [
                {'t': 'text', 'p': ['• Combinarea structurilor dă **dinamism** textului: universul ficțional devine complex și divers, ca lumea reală.',
                                    '• Recunoscând structurile, înțeleg **ce vrea autorul să comunice în fiecare secvență** și care e **sensul global**, după structura care **predomină**.',
                                    '• Mulți autori contemporani depășesc granițele tipurilor tradiționale de texte prin felul în care combină structurile.']},
            ]),
            ('3. ȘI ÎN TEXTELE NONLITERARE', [
                {'t': 'tabel', 'cap': ['Structura', 'Unde o găsesc'], 'lat': [0.25, 0.75],
                 'r': [['narativă', 'reportaj, carte de istorie, știre, relatare orală'],
                       ['descriptivă', 'reclamă, pliant turistic, anunț'],
                       ['explicativă', 'prezentarea unor concepte, instrucțiuni de folosire, diagrame, hărți conceptuale'],
                       ['argumentativă', 'eseu, teorie științifică, discurs, dezbatere'],
                       ['dialogată', 'e-mailuri, mesaje, interviu, bloguri, rețele de socializare']]},
            ]),
        ],
    },
    # ---------------- Lecția 5 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-5',
        'titlu': 'Textul discontinuu',
        'sub': SUB.format(n=5, pp='p. 106'),
        'sursa': 'Sursa: Manual Art 8, p. 106, rubrica Repere.',
        'sect': [
            ('1. TEXTELE DUPĂ FORMAT', [
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'continue', 'col': 't', 'p': ['propoziții și paragrafe înșiruite', '*eseuri, rapoarte, romane*']},
                    {'titlu': 'discontinue', 'col': 'm', 'p': ['informații prezentate **neliniar**', '*liste, tabele, hărți, diagrame, reclame, orare*']},
                    {'titlu': 'mixte', 'col': 'a', 'p': ['secvențe continue + imagini sau grafice', '*reviste, pagini web*']},
                ]},
            ]),
            ('2. TEXTUL DISCONTINUU', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul discontinuu** este un document **vizual**, neorganizat în propoziții și paragrafe. De aceea, **lectura lui nu este liniară**.']},
            ]),
            ('3. CUM ÎL CITESC', [
                {'t': 'text', 'p': ['Întâi înțeleg **modul de organizare** al documentului:']},
                {'t': 'tabel', 'cap': ['Documentul', 'Ce fac'], 'lat': [0.25, 0.75],
                 'r': [['**tabelul**', 'aflu ce informații are fiecare **coloană** și fiecare **rând**'],
                       ['**diagrama**', 'corelez informațiile așezate în **poziții diferite**'],
                       ['**harta**', 'mă orientez după **repere** (legendă, puncte cardinale, nume) ca să găsesc locurile']]},
                {'t': 'nota', 'titlu': 'Și în literatură:', 'p': ['unele romane au o **hartă** a lumii inventate de autor (de exemplu, harta lui Norton Juster pentru *Vama fantomă*).']},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-8',
        'titlu': 'Proiect de grup. Limbi inventate',
        'sub': SUB.format(n=8, pp='p. 109'),
        'sursa': 'Sursa: Manual Art 8, p. 109, rubricile Punere în temă, Pași și Evaluarea proiectului.',
        'sect': [
            ('1. LIMBI NATURALE ȘI LIMBI ARTIFICIALE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'limbile naturale', 'col': 't', 'p': ['apărute în decursul istoriei', 'parte a culturii unei populații numeroase']},
                    {'titlu': 'limbile artificiale', 'col': 'm', 'p': ['**inventate** de un om sau de un grup restrâns de oameni']},
                ]},
            ]),
            ('2. TIPURI DE LIMBI ARTIFICIALE', [
                {'t': 'tabel', 'cap': ['Tipul', 'Pentru ce', 'Exemple'], 'lat': [0.17, 0.33, 0.5],
                 'r': [['**auxiliare**', 'comunicarea dintre oameni', '*esperanto* (gândită ca limbă internațională)'],
                       ['**fictive**', 'creații artistice: literatură, filme', 'elfa lui Tolkien (*quenya, sindarin*), *dothraki, na’vi*, minioneza, klingoniana'],
                       ['**experimentale**', 'cercetarea lingviștilor', '*Toki Pona, Laadan*'],
                       ['**secrete**', 'codificarea informației', '*Lingua Ignota* (secolul al XII-lea)'],
                       ['**ludice**', 'jocurile copiilor', '*păsăreasca*']]},
            ]),
            ('3. PAȘII PROIECTULUI', [
                {'t': 'text', 'p': ['1. Alegem, în grupe de 3-4, o limbă inventată.',
                                    '2. Ne **documentăm** și căutăm exemple (cărți, filme, documentare).',
                                    '3. Împărțim sarcinile și pregătim prezentarea (PowerPoint sau produs media).',
                                    '4. Prezentăm proiectul clasei. Timp: o săptămână.']},
            ]),
            ('4. CUM EVALUĂM', [
                {'t': 'tabel', 'cap': ['Criteriul', 'Ce urmărim'], 'lat': [0.25, 0.75],
                 'r': [['organizare', 'material bine structurat, ușor de înțeles'],
                       ['conținut', 'informații relevante pentru limba aleasă'],
                       ['colaborare', 'fiecare membru a contribuit'],
                       ['prezentare', 'clară; text și imagini combinate creativ']]},
                {'t': 'text', 'p': ['**Scara feedbackului**: clarifică (*Mă poți ajuta să înțeleg mai bine...*) → apreciază (*Apreciez... Îmi place... Mi s-a părut original...*) → analizează (*Mi se pare că... Mă întreb...*) → sugerează (*Ai putea adăuga... Ai putea reformula... Ai putea dezvolta...*).']},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-9',
        'titlu': 'Textul argumentativ',
        'sub': SUB.format(n=9, pp='pp. 110-111'),
        'sursa': 'Sursa: Manual Art 8, pp. 110-111, rubrica Repere și grila de evaluare.' + CREATE,
        'sect': [
            ('1. SCOPUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Un **text argumentativ**, oral sau scris, vrea să **convingă** ascultătorii sau cititorii de o opinie, de un punct de vedere.']},
            ]),
            ('2. STRUCTURA', [
                {'t': 'tabel', 'cap': ['Partea', 'Ce conține'], 'lat': [0.2, 0.8],
                 'r': [['**introducerea**', '**teza** (o opinie, o judecată de valoare); dacă teza e dată, îmi spun **poziția** față de ea'],
                       ['**cuprinsul**', '**argumente** și **contraargumente** (explicații care susțin sau combat teza) + **exemple** sau probe pentru fiecare argument'],
                       ['**încheierea**', 'o **concluzie** scurtă, care arată că argumentele susțin teza']]},
            ]),
            ('3. CONECTORII', [
                {'t': 'tabel', 'cap': ['Pentru', 'Conectori'], 'lat': [0.27, 0.73],
                 'r': [['teză', '*Părerea mea este că... Consider că...*'],
                       ['argument', '*pentru că, deoarece*'],
                       ['ordinea argumentelor', '*în primul rând / mai întâi, în al doilea rând / apoi, nu în ultimul rând / în fine*'],
                       ['pro și contra', '*deși, totuși, în ciuda faptului că, oricum, pe de o parte, pe de altă parte*'],
                       ['exemplu', '*de exemplu, de fapt, de pildă*'],
                       ['concluzie', '*în concluzie, așadar, pe scurt, prin urmare, în consecință*']]},
                {'t': 'atentie', 'titlu': 'Regula:', 'p': ['fiecare argument e întărit de **cel puțin un exemplu**.']},
            ]),
            ('4. UN MODEL SCURT', [
                {'t': 'nota', 'p': ['*Consider că lectura ne dezvoltă imaginația. În primul rând, cărțile ne obligă să ne închipuim locuri și chipuri; de exemplu, fiecare cititor își imaginează altfel o țară inventată. În al doilea rând, lectura ne dă cuvinte noi, cu care putem crea propriile povești. Așadar, cine citește are mai multe lumi la îndemână.*']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Oral, argumentarea poate fi un **monolog** în fața publicului sau o parte dintr-o **dezbatere**.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-12',
        'titlu': 'Atributul. Apoziția',
        'sub': SUB.format(n=12, pp='pp. 112-114'),
        'sursa': 'Sursa: Manual Art 8, pp. 112-114, rubricile Repere.',
        'sect': [
            ('1. ATRIBUTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Atributul** determină un **substantiv** sau un substitut al lui (pronume, numeral cu valoare pronominală). Este adjunct într-un grup nominal.']},
            ]),
            ('2. FELURILE ATRIBUTULUI', [
                {'t': 'tabel', 'cap': ['Felul', 'Se exprimă prin', 'Exemplu'], 'lat': [0.18, 0.44, 0.38],
                 'r': [['**adjectival**', 'adjectiv (toate gradele), adjectiv din participiu, din gerunziu, din adverb, adjectiv pronominal, locuțiune adjectivală, numeral', '*blocul foarte înalt, străzile ninse, așa vânt, casa noastră, om de treabă, trei copaci*'],
                       ['**substantival genitival**', 'substantiv în genitiv', '*Ferestrele caselor sunt mici.*'],
                       ['**substantival prepozițional**', 'substantiv în Ac., G. sau D. cu prepoziție sau locuțiune prepozițională', '*gardul de beton, ceaiul contra răcelii, clădirea din spatele casei, reușita grație ajutorului*'],
                       ['**substantival în nominativ**', 'substantiv în nominativ', '*Orașul București este frumos.*'],
                       ['**substantival în dativ**', 'substantiv în dativ, fără prepoziție', '*Ana este vară Inei.*'],
                       ['**pronominal**', 'pronume în G., în Ac./G./D. cu prepoziție, în D. fără prepoziție', '*Părerea acestora... Unul dintre ei... Sufletu-i vesel...*'],
                       ['**verbal**', 'verb (sau locuțiune verbală) la infinitiv, supin, gerunziu', '*Bucuria de a vedea ninsoarea... Drumul de străbătut... Ninsoarea căzând...*'],
                       ['**adverbial**', 'adverb sau locuțiune adverbială', '*Vântul de aici e rece. Pomii din jur...*'],
                       ['**interjecțional**', 'interjecție', '*Am mâncat o prăjitură mmm!*']]},
            ]),
            ('3. APOZIȚIA', [
                {'t': 'text', 'p': ['**Apoziția** exprimă o relație de **echivalență de sens** între două cuvinte sau grupuri de cuvinte; a doua secvență precizează informații despre prima (**baza**). Poate fi **suprimată**.']},
                {'t': 'text', 'p': ['*O voi vizita pe prietena mea,* **Ana**. / *O voi vizita pe Ana,* **prietena mea**.']},
                {'t': 'tabel', 'cap': ['Regula', 'Pe scurt'], 'lat': [0.25, 0.75],
                 'r': [['poziția', 'întotdeauna **după** bază (substantiv, pronume, numeral, adjectiv, verb)'],
                       ['punctuația', 'se desparte prin **virgulă** sau **linie de pauză** ori e precedată de **două puncte**'],
                       ['cazul', 'de obicei **nominativ**, oricare ar fi cazul bazei; poate relua cazul bazei: *Am vorbit cu Dan, cu prietenul tău.*'],
                       ['introdusă prin', '*adică, anume, mai exact, altfel spus* (fără funcție sintactică)'],
                       ['se exprimă prin', 'substantiv, pronume, numeral, adjectiv, forme verbale nepersonale'],
                       ['felul', '**simplă** (un termen) sau **dezvoltată**: *Petre, colegul de bancă al Inei*']]},
                {'t': 'atentie', 'p': ['Apoziția **nu este atribut**. Atributul în nominativ (*orașul București*) nu se poate suprima, stă doar în nominativ și **nu** se desparte prin virgulă.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-13',
        'titlu': 'Atributiva',
        'sub': SUB.format(n=13, pp='pp. 115-116'),
        'sursa': 'Sursa: Manual Art 8, pp. 115-116, rubrica Repere.',
        'sect': [
            ('1. CE ESTE ATRIBUTIVA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Atributiva** este atributul exprimat printr-o **propoziție**. Răspunde la întrebările **care?**, **ce fel de?**']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'contragerea', 'col': 't', 'p': ['propoziția → partea de propoziție, cu același sens', '*cartea pe care am citit-o* → *cartea citită*']},
                    {'titlu': 'expansiunea', 'col': 'm', 'p': ['partea de propoziție → propoziția, cu același sens', '*inima de fetru* → *inima care e din fetru*']},
                ]},
                {'t': 'text', 'p': ['**Regentul** poate fi un **substantiv** (comun sau propriu), un **pronume** sau un **numeral** cu valoare pronominală.']},
            ]),
            ('2. ELEMENTELE DE RELAȚIE', [
                {'t': 'tabel', 'cap': ['Elementul', 'Exemplu'], 'lat': [0.38, 0.62],
                 'r': [['pronume relative (N., Ac., D., G.)', '*Textul 1/ pe care l-am citit 2/ mi s-a părut minunat. 1/*'],
                       ['adjective pronominale relative', '*Hotărârea 1/ ce cărți să citim 2/ ne aparține. 1/*'],
                       ['pronume și adjective nehotărâte', '*Speranța 1/ oricui scrie 2/ este de a avea cititori. 1/*'],
                       ['adverbe relative', '*Momentul 1/ când ne vom întâlni 2/ l-am stabilit. 1/*'],
                       ['conjuncții subordonatoare', '*Nu ascundea dorința 1/ să meargă la un spectacol. 2/*']]},
                {'t': 'text', 'p': ['• Adverbele relative introduc atributive **doar** după substantive care exprimă **locul, timpul sau modul**.',
                                    '• *ca ... să* se folosește numai **despărțit** de alte cuvinte: *Dorința profesorului 1/ ca toți elevii să ia note mari 2/...*',
                                    '• În limbajul popular apare *de*: *Omul 1/ de-l vezi 2/ e tatăl meu. 1/*']},
            ]),
            ('3. POZIȚIA ȘI VIRGULA', [
                {'t': 'text', 'p': ['Atributiva stă **întotdeauna după** termenul determinat, de obicei imediat după el; adesea e **intercalată** în regentă.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'de cele mai multe ori', 'col': 't', 'p': ['**fără virgulă**', '*Scriitorii 1/ pe care i-am citit 2/ m-au impresionat. 1/*']},
                    {'titlu': 'atributiva izolată', 'col': 'm', 'p': ['**cu virgulă**, după un nume propriu, un substantiv sau pronume puternic individualizat', '*Ana, 1/ care este prietena mea cea mai bună, 2/ a întârziat. 1/*']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-14',
        'titlu': 'Complementul direct',
        'sub': SUB.format(n=14, pp='p. 117'),
        'sursa': 'Sursa: Manual Art 8, p. 117, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Complementul direct** determină un verb, o locuțiune verbală sau o interjecție predicativă și arată, mai ales, **obiectul asupra căruia acționează** autorul faptei. Răspunde la întrebările **pe cine?**, **ce?**']},
                {'t': 'text', 'p': ['• Stă în cazul **acuzativ**, cu sau fără prepoziția **pe** (marca lui).',
                                    '• Au complement direct doar verbele care pot trece de la **forma activă la cea pasivă**.']},
            ]),
            ('2. DE CE DEPINDE', [
                {'t': 'tabel', 'cap': ['Regentul', 'Exemplu'], 'lat': [0.38, 0.62],
                 'r': [['verb la un mod personal', '*Elevul rezolvă* **exerciții**.'],
                       ['infinitiv / supin', '*Pot inventa* **povești**. *Îi era greu de înțeles* **explicația**.'],
                       ['locuțiune verbală', '*Profesorul a băgat de seamă* **greșelile**.'],
                       ['interjecție predicativă', '*Iată* **cartea** *promisă!*']]},
            ]),
            ('3. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['substantiv, locuțiune substantivală', '*Ascult muzică. Are ținere de minte.*'],
                       ['pronume (personal, de politețe, reflexiv, posesiv, demonstrativ, nehotărât, interogativ, relativ, negativ)', '*Nu sun pe nimeni.*'],
                       ['numeral cu valoare pronominală', '*Am văzut trei dintre filmele premiate.*'],
                       ['verb sau locuțiune verbală la infinitiv, gerunziu, supin', '*Pot rezolva problema. Aud tunând. A terminat de predat.*']]},
            ]),
            ('4. DUBLAREA, POZIȚIA, MODELUL', [
                {'t': 'text', 'p': ['• **Dublarea prin clitic** în acuzativ: **anticipare** (*I-am întrebat pe toți.*) sau **reluare** (*Pe Andreea o știu din tabără.*).',
                                    '• Stă de obicei **după verb** și **nu** se desparte de el prin virgulă.']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„știri” – complement direct exprimat prin substantiv comun, simplu, genul feminin, numărul plural, cazul acuzativ, nearticulat.*']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-16',
        'titlu': 'Complementul indirect',
        'sub': SUB.format(n=16, pp='p. 120'),
        'sursa': 'Sursa: Manual Art 8, p. 120, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Complementul indirect** determină cel mai des un verb și arată **beneficiarul** unei acțiuni. Răspunde la întrebarea **cui?** Stă în cazul **dativ**.']},
            ]),
            ('2. DE CE DEPINDE', [
                {'t': 'tabel', 'cap': ['Regentul', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['verb la un mod personal', '*El le povestește* **copiilor** *o întâmplare.*'],
                       ['formă verbală nepersonală', '*L-am auzit spunându-i ceva la ureche.* (**-i**)'],
                       ['locuțiune verbală', '*Ea îi aduce aminte* **lui Vlad** *de promisiune.*'],
                       ['adjectiv', '*O decizie favorabilă* **mie**.'],
                       ['adverb', '*A răspuns potrivit* **așteptărilor**.'],
                       ['interjecție predicativă', '*Bravo* **vouă**!']]},
            ]),
            ('3. PRIN CE SE EXPRIMĂ', [
                {'t': 'text', 'p': ['• **substantive**: *Le spun colegilor adevărul.*',
                                    '• **pronume** (personal, de politețe, posesiv, demonstrativ, nehotărât, interogativ, relativ, negativ): *I-am dat atenție fiecăruia.*',
                                    '• **numerale** cu valoare pronominală: *I-a cerut primului un sfat.*']},
                {'t': 'atentie', 'titlu': 'la + nominal', 'p': ['se folosește **doar** când cuvântul nu are formă de dativ: după un **numeral** sau un **adjectiv invariabil** (*Am trimis mesajul la trei / la al treilea / la ditamai profesorul*). În rest, folosesc **dativul**.']},
            ]),
            ('4. DUBLAREA ȘI MODELUL', [
                {'t': 'text', 'p': ['• Poate fi **anticipat** sau **reluat** printr-un clitic: *I-am spus Soniei un secret.*',
                                    '• Uneori dublarea nu e posibilă: *Consumul de zahăr dăunează sănătății. Bravo sportivilor!*']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„i” – complement indirect, exprimat prin pronume personal, persoana a III-a, numărul singular, genul masculin, cazul dativ, formă neaccentuată.*']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-18',
        'titlu': 'Complementul prepozițional',
        'sub': SUB.format(n=18, pp='p. 123'),
        'sursa': 'Sursa: Manual Art 8, p. 123, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Complementul prepozițional** arată obiectul care este **ținta acțiunii** sau pentru care acționează autorul faptei.']},
                {'t': 'text', 'p': ['Răspunde la întrebări cu prepoziție: *pentru cine? pentru ce? de cine? de ce? la cine? la ce? de la cine? despre cine? despre ce?* etc.']},
            ]),
            ('2. DE CE DEPINDE', [
                {'t': 'tabel', 'cap': ['Regentul', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['verb la un mod personal', '*Se gândește* **la examen**. *Mă tem* **de eșec**.'],
                       ['formă verbală nepersonală', '*Bazându-se* **pe intuiție**, *a răspuns corect.*'],
                       ['locuțiune verbală', '*Își aduce aminte* **de toți**.'],
                       ['adjectiv', '*Ești capabil* **de asta**.'],
                       ['adverb', '*Stă departe* **de patinoar**.'],
                       ['interjecție', '*Mersi* **pentru tot**!']]},
            ]),
            ('3. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['substantiv sau locuțiune substantivală în Ac. cu prepoziție / locuțiune prepozițională sau în G. cu prepoziție', '*Depinde de sprijinul altora. Era mândră față de colege. Necazul s-a abătut asupra satului.*'],
                       ['pronume în Ac. sau G. cu prepoziție', '*Nu-și amintește de tine. Vina a căzut asupra lui.*'],
                       ['numeral cu valoare pronominală', '*Se teme de doi / de al doilea.*'],
                       ['verb sau locuțiune verbală la infinitiv sau supin', '*M-am săturat de a căuta / de căutat cartea.*']]},
            ]),
            ('4. POZIȚIA ȘI MODELUL', [
                {'t': 'text', 'p': ['Stă de obicei **după regent**, **fără virgulă**. Poate sta și înainte, ca să fie pus în evidență: *Despre tine vreau să vorbim acum.*']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„de emoție” – complement prepozițional, exprimat prin substantiv comun, genul feminin, numărul singular, cazul acuzativ, nearticulat, precedat de prepoziția simplă „de”.*']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-19',
        'titlu': 'Completiva prepozițională',
        'sub': SUB.format(n=19, pp='pp. 124-125'),
        'sursa': 'Sursa: Manual Art 8, pp. 124-125, rubrica Repere și modelul din Explorare.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Completiva prepozițională** este complementul prepozițional exprimat printr-o **propoziție**. Răspunde la întrebări ca: *de cine? de ce? despre ce? la ce? cu cine? cu ce? pe cine?*']},
                {'t': 'text', 'p': ['*Adolescenții vorbesc* **despre organizarea unei excursii**. → *Adolescenții vorbesc 1/* **despre ce vor face pentru organizarea excursiei**. *2/*']},
            ]),
            ('2. REGENTUL', [
                {'t': 'tabel', 'cap': ['Regentul', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['verb (mod personal sau formă nepersonală)', '*Îi pasă 1/ de ce se întâmplă cu tine. 2/ Se bucură 1/ că ai venit. 2/*'],
                       ['locuțiune verbală', '*Nu-mi dau seama 1/ cum ai rezolvat problema. 2/*'],
                       ['adjectiv', '*Este interesată 1/ de ce e nou. 2/*'],
                       ['adverb', '*Proiectul este aproape 1/ de ce și-au dorit. 2/*'],
                       ['interjecție', '*Halal 1/ de cine a crezut-o! 2/*']]},
            ]),
            ('3. ELEMENTELE DE RELAȚIE', [
                {'t': 'tabel', 'cap': ['Elementul', 'Exemplu'], 'lat': [0.38, 0.62],
                 'r': [['conjuncții: *că, să, dacă, ca ... să*', '*El este sigur 1/ că va fi susținut. 2/*'],
                       ['locuțiuni: *cum de, ca nu cumva să, nu cumva să*', '*Se gândește 1/ ca nu cumva să piardă autobuzul. 2/*'],
                       ['pronume și adjective relative', '*Și-a dat seama 1/ despre ce film este vorba. 2/*'],
                       ['pronume și adjective nehotărâte', '*Mă bazez 1/ pe oricine este creativ. 2/*'],
                       ['adverbe relative', '*Se interesează 1/ cum să ajungă acolo. 2/*']]},
            ]),
            ('4. POZIȚIA ȘI VIRGULA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'după regentă', 'col': 't', 'p': ['**fără virgulă**']},
                    {'titlu': 'înaintea regentei, reluată prin pronume', 'col': 'm', 'p': ['**cu virgulă**', '*Pentru cine a câștigat, pentru acela mă bucur.*']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 20 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-20',
        'titlu': 'Tipare textuale: comparația și analogia',
        'sub': SUB.format(n=20, pp='pp. 126-127'),
        'sursa': 'Sursa: Manual Art 8, pp. 126-127, rubrica Repere, modelul din Explorare și grila de evaluare.',
        'sect': [
            ('1. COMPARAȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['A **compara** două sau mai multe elemente (obiecte, persoane, idei, emoții, fenomene) înseamnă a le evidenția **asemănările** și **deosebirile**, după **criterii** potrivite.']},
                {'t': 'tabel', 'cap': ['Gradul', 'Mijloace'], 'lat': [0.4, 0.6],
                 'r': [['comparativ de **egalitate**', '*tot atât de..., la fel de..., tot așa de..., deopotrivă de...*'],
                       ['comparativ de **superioritate** / **inferioritate**', '*mai... / mai puțin...*'],
                       ['superlativ relativ de superioritate / inferioritate', '*cel (cea) mai... / cel (cea) mai puțin...*']]},
            ]),
            ('2. ANALOGIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Analogia** compară noțiuni, situații, fenomene între care există o **asemănare parțială**. Explică noțiuni **abstracte** prin elemente **concrete, familiare**.']},
                {'t': 'nota', 'titlu': 'Model din manual:', 'p': ['*Lectura este ca o călătorie. Când citești, poți descoperi, la fel ca atunci când călătorești, o diversitate de locuri, tipuri umane, situații, emoții și idei.*']},
                {'t': 'text', 'p': ['Observ: numesc cele două elemente, apoi spun **ce au în comun** (baza analogiei).']},
            ]),
            ('3. CÂND SCRIU UN TEXT COMPARATIV', [
                {'t': 'text', 'p': ['1. stabilesc **criteriile**;',
                                    '2. prezint **aspectele comune** și **aspectele diferite**;',
                                    '3. adaug o **analogie** potrivită;',
                                    '4. verific: text coerent, clar structurat, exprimare nuanțată și corectă.']},
            ]),
        ],
    },
    # ---------------- Lecția 22 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-22',
        'titlu': 'Recapitulare: lumea ficțională și structurile textului',
        'sub': 'Clasa a VIII-a · Unitatea a III-a, Lecția 22 · Manual, pp. 101-111 și 128-129 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 2, 3, 5 și 7; recapitularea de la pp. 128-129 (fragment din „Micul Prinț” de Antoine de Saint-Exupéry).',
        'sect': [
            ('1. LUMEA FICȚIONALĂ', [
                {'t': 'text', 'p': ['• **Ficțiunea literară**: o lume inventată, construită prin **limbaj**; cititorul face un **pact** și acceptă lumea inventată.',
                                    '• Limbajul creează lumea: alegerea cuvintelor, enunțurile, paragrafele, așezarea în pagină, ortografia, punctuația.']},
            ]),
            ('2. STRUCTURILE TEXTUALE', [
                {'t': 'tabel', 'cap': ['Structura', 'Întrebarea-cheie', 'Ce face'], 'lat': [0.2, 0.3, 0.5],
                 'r': [['narativă', '*cine? ce face? când? unde?*', 'prezintă întâmplări, raportate la timp'],
                       ['descriptivă', '*cum arată? ce trăsături are?*', 'prezintă personaje, peisaje, obiecte în spațiu'],
                       ['dialogată', '*cine vorbește? despre ce?*', 'redă replicile personajelor'],
                       ['explicativă', '*cum se explică?*', 'lămurește acțiuni, comportamente, elemente ale lumii ficționale'],
                       ['argumentativă', '*de ce?*', 'susține un punct de vedere cu argumente și exemple']]},
                {'t': 'text', 'p': ['Sensul global al textului depinde de structura care **predomină**.']},
            ]),
            ('3. TEXTE DUPĂ FORMAT', [
                {'t': 'text', 'p': ['**continue** (paragrafe) · **discontinue** (tabele, hărți, diagrame; lectură neliniară) · **mixte** (text + imagini)']},
            ]),
            ('4. TEXTUL ARGUMENTATIV', [
                {'t': 'tabel', 'cap': ['Partea', 'Conține', 'Conectori'], 'lat': [0.18, 0.4, 0.42],
                 'r': [['introducere', 'teza / poziția mea', '*consider că, părerea mea este că*'],
                       ['cuprins', 'argumente, contraargumente, exemple', '*pentru că, deoarece; totuși, deși; de exemplu, de pildă*'],
                       ['încheiere', 'concluzia', '*așadar, în concluzie, prin urmare*']]},
            ]),
        ],
    },
    # ---------------- Lecția 23 ----------------
    {
        'cale': 'clasa-8/unitatea-3/lectia-23',
        'titlu': 'Recapitulare: atributul, apoziția, complementul direct',
        'sub': 'Clasa a VIII-a · Unitatea a III-a, Lecția 23 · Manual, pp. 112-119 și 128-129 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 8-11 (pp. 112-119); recapitularea de la pp. 128-129.',
        'sect': [
            ('1. ATRIBUTUL ȘI ATRIBUTIVA', [
                {'t': 'tabel', 'cap': ['', 'Atributul', 'Atributiva'], 'lat': [0.2, 0.4, 0.4],
                 'r': [['ce determină', 'un substantiv sau un substitut', 'un substantiv, pronume, numeral'],
                       ['întrebarea', '*care? ce fel de?*', '*care? ce fel de?*'],
                       ['felurile / elementele', 'adjectival, substantival, pronominal, verbal, adverbial, interjecțional', 'pronume și adjective relative și nehotărâte, adverbe relative, conjuncții'],
                       ['virgula', 'nu se desparte de regent', 'de obicei fără; cu virgulă doar atributiva izolată']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['*contragere*: propoziție → parte de propoziție; *expansiune*: parte de propoziție → propoziție, cu același sens.']},
            ]),
            ('2. APOZIȚIA', [
                {'t': 'text', 'p': ['Echivalență de sens cu baza; stă **după** bază; se poate **suprima**; se desparte prin **virgulă, linie de pauză** sau **două puncte**; poate fi introdusă prin *adică, anume, mai exact*.']},
                {'t': 'text', 'p': ['*Sora mea,* **Elena**, *este profesoară.* ≠ *orașul* **București** (atribut în nominativ, fără virgulă)']},
            ]),
            ('3. COMPLEMENTUL DIRECT ȘI COMPLETIVA DIRECTĂ', [
                {'t': 'tabel', 'cap': ['', 'Complementul direct', 'Completiva directă'], 'lat': [0.2, 0.4, 0.4],
                 'r': [['întrebarea', '*pe cine? ce?*', '*pe cine? ce?*'],
                       ['regentul', 'verb (și nepersonal), locuțiune verbală, interjecție predicativă', 'verb sau locuțiune verbală, interjecție predicativă'],
                       ['forma / introducerea', 'acuzativ, cu sau fără *pe*', 'conjuncții (*că, să, ca ... să, dacă, de, cum că*), adverbe relative, pronume și adjective relative sau nehotărâte'],
                       ['virgula', 'nu se desparte de verb', 'după regentă, fără virgulă; înainte, virgula nu e obligatorie']]},
                {'t': 'text', 'p': ['*Știu* **că vei veni**. *Am aflat* **încotro se îndreaptă**. *Iată* **ce cadou am primit**!']},
            ]),
        ],
    },
]
