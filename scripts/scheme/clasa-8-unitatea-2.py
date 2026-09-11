# Scheme-notițe, clasa a VIII-a, Unitatea a II-a „Cum sunt ceilalți?”. Conținutul
# vine din rubricile Repere ale Manualului Art 8, pp. 58-93; exemplele noi sunt
# anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-8-unitatea-2.py

SUB = 'Clasa a VIII-a · Unitatea a II-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-2',
        'titlu': 'Textul dramatic. Structuri textuale',
        'sub': SUB.format(n=2, pp='pp. 58-59'),
        'sursa': 'Sursa: Manual Art 8, pp. 58-59, rubricile Repere; textul de bază este „Take, Ianke și Cadâr” de Victor Ion Popa.',
        'sect': [
            ('1. TEXTUL DRAMATIC', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul dramatic** este scris ca să fie **jucat pe scenă** (reprezentat) și este împărțit în secvențe de dimensiuni diferite.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'actul', 'col': 't', 'p': ['subdiviziunea unei piese, cu acțiune unitară', 'actele sunt separate printr-o pauză (lăsarea cortinei); spectatorii pot ieși din sală', 'se notează cu **cifre romane**']},
                    {'titlu': 'scena (tabloul)', 'col': 'm', 'p': ['subdiviziunea unui act', 'se delimitează prin ieșirea sau intrarea unui personaj ori prin schimbarea locului și a timpului', 'se notează cu **cifre arabe**']},
                ]},
            ]),
            ('2. CELE DOUĂ COMPONENTE', [
                {'t': 'tabel', 'cap': ['', 'Indicațiile scenice (didascaliile)', 'Replicile personajelor'], 'lat': [0.16, 0.44, 0.4],
                 'r': [['ce sunt', 'informații despre cum se transpune textul pe scenă', 'textul dialogat'],
                       ['unde apar', 'înaintea textului dialogat și în interiorul lui, de regulă **între paranteze rotunde**', 'după numele personajului'],
                       ['cum se scriu', 'de cele mai multe ori cu **italice**', 'numele personajului cu **majuscule**']]},
                {'t': 'tabel', 'cap': ['Indicațiile scenice sunt', 'Exemple'], 'lat': [0.35, 0.65],
                 'r': [['**externe** (inițiale)', 'lista personajelor (ordonată după importanță, poziție socială sau gen, uneori cu scurte caracterizări), decorul de la începutul actului'],
                       ['**interne** (funcționale)', 'numele personajelor din fața replicilor; indicațiile din paranteze despre gesturi, ton, destinatarul replicii, intrări și ieșiri, sunete']]},
            ]),
            ('3. DIALOGUL ȘI MONOLOGUL', [
                {'t': 'text', 'p': ['• **Dialogul** este principala modalitate de comunicare a personajelor; evidențiază trăsăturile lor și acțiunea.',
                                    '• **Monologul dramatic** este o intervenție amplă a unui personaj, în prezența sau în absența altui personaj.',
                                    '• În indicațiile scenice și în replici se pot combina diverse **structuri textuale** (narativă, descriptivă, dialogată, explicativă, argumentativă).']},
            ]),
            ('4. COMEDIA', [
                {'t': 'nota', 'p': ['**Comedia** este un text dramatic care provoacă **râsul** prin surprinderea unor tipuri umane sau a unor situații neașteptate. Râsul poate veni din **înfățișarea** personajelor, din **comportamentul** și **limbajul** lor sau din anumite **situații**.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-3',
        'titlu': 'Timpul, spațiul, acțiunea, personajele',
        'sub': SUB.format(n=3, pp='pp. 60-61'),
        'sursa': 'Sursa: Manual Art 8, pp. 60-61, rubricile Repere.',
        'sect': [
            ('1. TIMPUL ȘI SPAȚIUL ÎN TEATRU', [
                {'t': 'tabel', 'cap': ['', 'Al reprezentației', 'Al ficțiunii'], 'lat': [0.18, 0.41, 0.41],
                 'r': [['**timpul**', '**durata**: cât ține spectacolul', '**momentul**: când se petrec întâmplările'],
                       ['**spațiul**', '**spațiul-scenă**', 'spațiul imaginat de spectator ca un fragment de lume']]},
            ]),
            ('2. ACȚIUNEA ȘI CONFLICTUL', [
                {'t': 'text', 'p': ['**Acțiunea dramatică** este succesiunea de evenimente prezentate sau povestite pe scenă, care duc de la **situația inițială** la **situația finală**.',
                                    '**Conflictul dramatic** este înfruntarea dintre personaje, idei, situații diferite, cauzată de interese sau de sentimente opuse. Este un element **fundamental** al acțiunii dramatice.']},
            ]),
            ('3. PERSONAJUL DRAMATIC', [
                {'t': 'text', 'p': ['Personajul dramatic are o **dublă natură**: este o ființă **ficțională**, creată de autor, întruchipată pe scenă de o persoană reală, **actorul**.',
                                    'Ca ființă ficțională, are: un statut social, o vârstă, trăsături fizice, o istorie personală și un nume.']},
            ]),
            ('4. MIJLOACELE DE CONSTRUCȚIE A PERSONAJULUI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'caracterizare directă', 'col': 't', 'p': ['de către **autor**, în indicațiile scenice', 'de către **alte personaje**', 'de personajul însuși (**autocaracterizare**)']},
                    {'titlu': 'caracterizare indirectă', 'col': 'm', 'p': ['din indicațiile scenice care arată **acțiunile, gesturile, comportamentul**', 'din **modul în care vorbește**', 'din **replicile** lui, adică din ce spune']},
                ]},
                {'t': 'nota', 'titlu': 'Cum lucrez:', 'p': ['numesc trăsătura, indic mijlocul prin care reiese și citez replica sau indicația scenică potrivită.']},
            ]),
        ],
    },
    # ---------------- Lecția 5 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-5',
        'titlu': 'Textul nonliterar. Cronica de spectacol',
        'sub': SUB.format(n=5, pp='pp. 65-67'),
        'sursa': 'Sursa: Manual Art 8, pp. 65-67, rubrica Repere; textul de bază este cronica „Omenescul personajelor” de Ștefan Popa (Ștefan Aug. Doinaș).',
        'sect': [
            ('1. TEXTUL NONLITERAR', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul nonliterar** se referă la aspecte ale **realității**. Poate avea scopul de a **informa**, de a **convinge**, de a **amuza** etc.']},
            ]),
            ('2. CRONICA DE SPECTACOL', [
                {'t': 'text', 'p': ['**Cronica de spectacol** este un **comentariu de specialitate**, scris imediat după punerea în scenă a unui spectacol. Poate discuta orice element al spectacolului, de la text la realizarea artistică.']},
                {'t': 'text', 'p': ['Ce poate examina: **regia, scenografia, coregrafia, jocul actorilor, decorul, costumele, coloana sonoră, efectele speciale, atmosfera generală**.']},
                {'t': 'tabel', 'cap': ['Trăsătura', 'Ce înseamnă'], 'lat': [0.3, 0.7],
                 'r': [['text de **opinie**', 'are un grad mare de **subiectivitate**'],
                       ['semnat', 'de cele mai multe ori de o personalitate'],
                       ['apare regulat', 'în aceeași publicație, în aceeași zi a săptămânii etc.'],
                       ['unde apare', 'în reviste de specialitate sau pe bloguri'],
                       ['finalul', 'de obicei, un **punct de vedere** despre valoarea spectacolului']]},
            ]),
            ('3. CUM CITESC O CRONICĂ', [
                {'t': 'text', 'p': ['• despart **faptele** (ce s-a jucat, cine, unde) de **opinii** (aprecieri, judecăți de valoare);',
                                    '• caut **punctele tari** și **punctele slabe** ale spectacolului, în viziunea autorului;',
                                    '• observ ce interpretează autorul, dincolo de ce e scris în piesă;',
                                    '• formulez **mesajul final** al cronicii.']},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-8',
        'titlu': 'Atitudini comunicative',
        'sub': SUB.format(n=8, pp='pp. 72-73'),
        'sursa': 'Sursa: Manual Art 8, pp. 72-73, rubricile Repere, tabelul atitudinilor opuse asertivității și grila de evaluare.',
        'sect': [
            ('1. ATITUDINI CARE FAVORIZEAZĂ COMUNICAREA', [
                {'t': 'tabel', 'cap': ['Atitudinea', 'Ce înseamnă'], 'lat': [0.3, 0.7],
                 'r': [['**flexibilitatea**', 'mă adaptez contextului comunicării: subiectului, interlocutorilor, momentului'],
                       ['**asertivitatea**', 'îmi exprim **clar și ferm** dorințele, emoțiile, părerile, interesele, fără să-i deranjez pe ceilalți, fără dispreț sau ostilitate, fără să devin agresiv'],
                       ['**disponibilitatea pentru negociere**', 'doresc să găsesc o soluție **reciproc acceptabilă**']]},
                {'t': 'text', 'p': ['Comunicarea asertivă pornește de la convingerea că **toate persoanele sunt egale**: drepturile, sentimentele și nevoile celorlalți sunt la fel de importante ca ale mele.']},
            ]),
            ('2. ATITUDINI OPUSE ASERTIVITĂȚII', [
                {'t': 'tabel', 'cap': ['Atitudinea', 'Cum se manifestă'], 'lat': [0.27, 0.73],
                 'r': [['**pasivitatea**', 'o atitudine excesiv de amabilă în orice situație'],
                       ['**agresivitatea**', 'constrângere, intimidare, ton autoritar și ostil'],
                       ['**pasivitatea agresivă**', 'rezistență indirectă la cererile celorlalți, incapacitatea de a-mi exprima nemulțumirea'],
                       ['**manipularea**', 'evit să-mi spun punctul de vedere și îi fac pe ceilalți să simtă compasiune sau vinovăție']]},
            ]),
            ('3. NEGOCIEREA', [
                {'t': 'text', 'p': ['**Negocierea** este o acțiune voluntară, un dialog susținut, ca să armonizăm puncte de vedere divergente.',
                                    'Contează **inteligența emoțională**: să-mi conștientizez, să-mi controlez și să-mi exprim emoțiile și să gestionez relațiile cu ceilalți în mod **empatic**.']},
                {'t': 'nota', 'titlu': 'Verific:', 'p': ['m-am adaptat situației? mi-am exprimat clar dorința, fără agresivitate? am arătat respect? am căutat o soluție bună pentru amândoi?']},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-9',
        'titlu': 'Construcții active. Construcții pasive cu verbul a fi',
        'sub': SUB.format(n=9, pp='pp. 74-75'),
        'sursa': 'Sursa: Manual Art 8, pp. 74-75, rubricile Repere și schema construcției pasive.' + CREATE,
        'sect': [
            ('1. ACTIV SAU PASIV', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'construcția activă', 'col': 't', 'p': ['subiectul este **autorul acțiunii**', '*Andrei scrie o compunere.*', '*El a recitat poezia.*']},
                    {'titlu': 'construcția pasivă', 'col': 'm', 'p': ['subiectul **suportă acțiunea** făcută de altcineva', '*Compunerea este scrisă de Andrei.*', '*Poezia a fost recitată de el.*']},
                ]},
            ]),
            ('2. CONSTRUCȚIA PASIVĂ', [
                {'t': 'text', 'p': ['Are: un **subiect** (exprimat sau neexprimat) + o **formă verbală pasivă** + un **complement de agent**.']},
                {'t': 'text', 's': 16, 'p': ['*{t:Compunerea}  {m:a fost scrisă}  {a:de (către) Andrei}.*']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['{t:subiect} · {m:forma verbală pasivă = auxiliarul a fi + participiul} · {a:complement de agent}']},
                {'t': 'text', 'p': ['• **Participiul** se acordă în gen și număr cu subiectul: *Replica este rostită... Replicile sunt rostite...*',
                                    '• Auxiliarul **a fi** are forme la toate modurile și timpurile, **fără imperativ**; dintre formele nepersonale, doar **gerunziul** (*Fiind chemat de Andrei...*) și **infinitivul** (*de a fi aplaudat de spectatori*).']},
            ]),
            ('3. COMPLEMENTUL DE AGENT', [
                {'t': 'text', 'p': ['Denumește **autorul acțiunii** într-o construcție pasivă. E un complement prepozițional: substantiv, pronume sau numeral în **acuzativ**, cu prepoziția **de către** sau **de**. Poate fi exprimat sau neexprimat.']},
                {'t': 'text', 'p': ['*Ana este apreciată* **de către public**. *Ana a fost admirată* **de noi**. *Ana va fi felicitată* **de doi** *dintre prietenii ei.*']},
            ]),
            ('4. TRANSFORMAREA ACTIV → PASIV', [
                {'t': 'tabel', 'cap': ['Construcția activă', 'devine în construcția pasivă'], 'lat': [0.4, 0.6],
                 'r': [['complementul direct', '**subiect**'],
                       ['subiectul', '**complement de agent**, cu *de către* / *de*'],
                       ['verbul', 'auxiliarul *a fi* + participiul acordat cu subiectul; auxiliarul **păstrează modul și timpul**']]},
                {'t': 'text', 'p': ['*{t:Ana} redactează {m:compunerea}.  →  {m:Compunerea} este redactată de către {t:Ana}.*']},
                {'t': 'atentie', 'p': ['Se transformă în pasiv doar construcția activă cu **subiect, verb și complement direct**. *Copilul doarme.* nu are complement direct, deci nu are pereche pasivă.']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-10',
        'titlu': 'Predicatul (actualizare)',
        'sub': SUB.format(n=10, pp='pp. 76-77'),
        'sursa': 'Sursa: Manual Art 8, pp. 76-77, rubricile Repere și tabelul numelui predicativ.',
        'sect': [
            ('1. CELE DOUĂ FELURI DE PREDICAT', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'predicatul verbal', 'col': 't', 'p': ['arată **ce face** subiectul', 'verb predicativ la un mod personal: *Copiii cântă.*', 'și în construcția pasivă: *Echipa a fost ajutată de voluntari.*', 'locuțiune verbală: *și-a luat inima în dinți*', 'interjecție predicativă: *Uite că nu mai plouă!*']},
                    {'titlu': 'predicatul nominal', 'col': 'm', 'p': ['arată o **calitate** sau o **caracteristică** a subiectului', '**verb copulativ + nume predicativ**', 'copulative: *a fi, a deveni, a ajunge, a ieși, a se face, a rămâne, a însemna, a părea*']},
                ]},
                {'t': 'text', 'p': ['Numele predicativ poate fi **simplu** (*Cerul este senin.*) sau **multiplu** (*Ana este simpatică și prietenoasă.*).']},
            ]),
            ('2. PRIN CE SE EXPRIMĂ NUMELE PREDICATIV', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['substantiv în N / Ac. cu prepoziție / G. cu prepoziție', '*Ionel este fiul lui Take. Rochia ei este de mătase. Ei sunt contra prejudecăților.*'],
                       ['locuțiune substantivală', '*Gestul lui este o bătaie de joc.*'],
                       ['pronume', '*Adevărul este altul. Cine este autorul? Florile sunt de la noi.*'],
                       ['adjectiv (și din participiu)', '*Amintirile ei păreau triste. Câmpul este înverzit.*'],
                       ['numeral cu valoare pronominală', '*Ei sunt doi. Ana a ieșit prima.*'],
                       ['verb la infinitiv / supin', '*Visul lui este de a primi rolul. Voința lui este de admirat.*'],
                       ['adverb de mod', '*Caietul lui este altfel.*']]},
            ]),
            ('3. CAPCANA: PASIV SAU NOMINAL?', [
                {'t': 'tabel', 'cap': ['', 'Predicat verbal (pasiv)', 'Predicat nominal'], 'lat': [0.22, 0.39, 0.39],
                 'r': [['exemplu', '*Bicicleta este stricată în mod repetat.*', '*Florile sunt îmbobocite.*'],
                       ['testul', '**acceptă** complement de agent: *de către băiat*', '**nu acceptă** complement de agent'],
                       ['alcătuire', 'auxiliarul *a fi* + participiul verbului', 'copulativul *a fi* + adjectiv din participiu']]},
                {'t': 'atentie', 'p': ['Încerc mereu testul: pot adăuga **„de către cineva”**? Dacă da, e **predicat verbal** în construcție pasivă.']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-11',
        'titlu': 'Construcțiile cu pronume reflexive',
        'sub': SUB.format(n=11, pp='pp. 78-79'),
        'sursa': 'Sursa: Manual Art 8, pp. 78-79, rubrica Repere.',
        'sect': [
            ('1. CE SUNT', [
                {'t': 'text', 'p': ['În **construcțiile cu pronume reflexive**, forma neaccentuată a pronumelui reflexiv (în acuzativ sau dativ) însoțește un **verb** (*se spală, își spune*) sau, excepțional, un **substantiv** (*viața-mi*).',
                                    'Uneori apare și forma accentuată: *Nu numai pe noi, ci și* **pe sine** *se amăgește.* Reflexivul intră și în locuțiuni verbale: *a-și bate joc, a se face de râs*.']},
            ]),
            ('2. ARE SAU NU ARE FUNCȚIE SINTACTICĂ?', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'fără funcție sintactică', 'col': 'g', 'p': ['face parte din verb și nu se analizează separat', '*Ana* **se gândește** *la tine.*', 'nu pot spune *Ana ne gândește*']},
                    {'titlu': 'cu funcție sintactică', 'col': 't', 'p': ['pot să-l înlocuiesc cu un pronume personal: *Ana se supraestimează / Ana ne supraestimează*', 'pot să-l reiau prin forma accentuată: *...pe sine / pe ea*']},
                ]},
            ]),
            ('3. FUNCȚIILE PRONUMELUI REFLEXIV', [
                {'t': 'tabel', 'cap': ['Funcția', 'Când', 'Exemplu'], 'lat': [0.25, 0.4, 0.35],
                 'r': [['complement direct', 'în **acuzativ**', '*Ionel* **se** *cunoaște destul de bine.*'],
                       ['complement indirect', 'în **dativ**', '*Ionel* **își** *atribuie un rol nemeritat.*'],
                       ['complement posesiv', 'în dativ, însoțește verbul și depinde și de un substantiv; se poate relua cu *lui / sale*', '*Ana* **și**-*a pregătit costumul.*'],
                       ['atribut pronominal în dativ', 'lângă un substantiv (foarte rar)', '*Mă imaginez la casa-***mi**.']]},
                {'t': 'text', 'p': ['**Reciprocitatea** se verifică prin *unii pe alții, unul cu altul, unii altora*: *Copiii se felicită unii pe alții.*']},
            ]),
            ('4. CONSTRUCȚIA PASIV-REFLEXIVĂ', [
                {'t': 'nota', 'p': ['Reflexivul *se* însoțește un verb care acceptă **complement de agent** (exprimat sau nu): *Fișele se împart de către profesor. Fișele se așază pe bancă (de către elevi).*']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-12',
        'titlu': 'Construcțiile impersonale',
        'sub': SUB.format(n=12, pp='pp. 80-81'),
        'sursa': 'Sursa: Manual Art 8, pp. 80-81, rubrica Repere.',
        'sect': [
            ('1. CE SUNT', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Verbele impersonale** exprimă acțiuni care **nu sunt făcute de o persoană**. **Construcțiile impersonale** se organizează în jurul lor.']},
            ]),
            ('2. ÎNTOTDEAUNA IMPERSONALE', [
                {'t': 'tabel', 'cap': ['', 'Situația', 'Exemplu'], 'lat': [0.16, 0.5, 0.34],
                 'r': [['**fără subiect**', 'fenomene ale naturii', '*tună, plouă, burnițează, se înserează*'],
                       ['', 'persoana apare ca **complement direct**', '*Mă ustură în gât.*'],
                       ['', 'persoana apare ca **complement indirect**', '*Îmi pasă de rezultate.*'],
                       ['', 'denumirea unei persoane', '*Mă cheamă Matei.*'],
                       ['**cu subiect**', 'copulativul *a fi* + adverb; subiectul, după verb, e un infinitiv', '*Este bine a face sport.*'],
                       ['', '*a fi* + stări fiziologice sau sufletești; sens existențial', '*Mi-e dor. E noapte.*'],
                       ['', 'verbe cu subiect nonuman', '*Îmi place literatura. Îmi trebuie un caiet nou.*']]},
            ]),
            ('3. DEVIN IMPERSONALE ÎN CONTEXT', [
                {'t': 'tabel', 'cap': ['Cum', 'Exemplu'], 'lat': [0.5, 0.5],
                 'r': [['adaug *se* unui verb dintr-o construcție activă', '*Se aleargă în parc.*'],
                       ['adaug *se* și obțin o construcție impersonală reflexiv-pasivă', '*El știe rezultatul. → Se știe rezultatul.*'],
                       ['folosesc auxiliarul pasiv *a fi*', '*El știe rezultatul. → Este știut rezultatul.*']]},
                {'t': 'atentie', 'p': ['În *Îmi place teatrul*, subiectul există: **teatrul**. Persoana (*îmi*) nu e subiect, ci complement.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-13',
        'titlu': 'Subiectul (actualizare)',
        'sub': SUB.format(n=13, pp='pp. 82-83'),
        'sursa': 'Sursa: Manual Art 8, pp. 82-83, rubricile Repere și tabelul subiectului.',
        'sect': [
            ('1. CE ESTE SUBIECTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Subiectul** arată **cine face acțiunea** unui predicat verbal sau **cui i se atribuie** o însușire, o caracteristică, o identitate prin numele predicativ.']},
            ]),
            ('2. FELURILE SUBIECTULUI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'exprimat', 'col': 't', 'p': ['**simplu**: un singur termen', '**multiplu**: doi sau mai mulți termeni coordonați', 'poate sta **înainte** sau **după** predicat']},
                    {'titlu': 'neexprimat', 'col': 'm', 'p': ['**subînțeles**: a fost exprimat anterior; verbul e la persoana a III-a', '**inclus**: se deduce din desinența verbului la persoanele I și a II-a']},
                ]},
            ]),
            ('3. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['substantiv în nominativ', '*Soarele strălucește.*'],
                       ['locuțiune substantivală', '*Aducerile aminte ne fac nostalgici.*'],
                       ['pronume: personal, de politețe, posesiv, demonstrativ, nehotărât, negativ, interogativ, relativ', '*Tu ai greșit. Ai tăi au cumpărat biletele. Fiecare își dorește o notă bună. Nimeni nu a spus ceva.*'],
                       ['numeral cardinal sau ordinal cu valoare pronominală', '*Doi au întrebat de tine. Al treilea va primi o carte.*'],
                       ['verb la infinitiv', '*A citi este important.*'],
                       ['verb la gerunziu (după *se aude, se simte, se vede*)', '*Se vede răsărind soarele.*'],
                       ['verb la supin', '*De promis nu este greu.*']]},
                {'t': 'atentie', 'p': ['Subiectul **nu se desparte prin virgulă** de predicat.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-14',
        'titlu': 'Construcțiile incidente',
        'sub': SUB.format(n=14, pp='pp. 84-85'),
        'sursa': 'Sursa: Manual Art 8, pp. 84-85, rubricile Repere și tabelul construcțiilor incidente.',
        'sect': [
            ('1. CE ESTE O CONSTRUCȚIE INCIDENTĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Construcția incidentă** este o comunicare suplimentară, inserată într-un enunț, de care **nu este legată sintactic** și care nu e esențială pentru înțelegerea mesajului.']},
                {'t': 'tabel', 'cap': ['Poate fi', 'Exemplu'], 'lat': [0.25, 0.75],
                 'r': [['un cuvânt', '*Vai, nu pot să cred!*'],
                       ['un grup de cuvinte', '*Vecina mea,* **de treabă femeie**, *m-a ajutat.*'],
                       ['o propoziție', '*Străbunicul,* **Dumnezeu să-l ierte**, *a fost veteran de război.*'],
                       ['o frază', '*Vom repeta mâine,* **le-a șoptit regizorul, înainte să plece**.']]},
            ]),
            ('2. CE INTRĂ ÎN ACEASTĂ CATEGORIE', [
                {'t': 'tabel', 'cap': ['Categoria', 'Exemple'], 'lat': [0.45, 0.55],
                 'r': [['formulele de adresare', '*Ana, nu uita! Nu cred, domnule director!*'],
                       ['grupul verbal care prezintă contextul comunicării', '*— Ai văzut?* **a întrebat Ana**.'],
                       ['adverbe care exprimă necesitatea, probabilitatea, aproximarea', '*fără îndoială, probabil, pe undeva*'],
                       ['cuvinte care transmit stări și sentimente', '*Aoleu! Bună treabă! Sper, Dumnezeu să ne ajute!, să reușim.*'],
                       ['automatisme verbale', '*frate, zău, știi, ca să zic așa, gen, zic și eu*']]},
            ]),
            ('3. CUM LE MARCHEZ', [
                {'t': 'text', 'p': ['• În vorbire au o **intonație specială**.',
                                    '• În scris se separă prin **virgule**, **linii de pauză** sau **paranteze rotunde**.',
                                    '• Sunt un fenomen de **oralitate** (populară sau cultă); în literatură reproduc vorbirea personajelor.']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-15',
        'titlu': 'Fraza. Coordonarea',
        'sub': SUB.format(n=15, pp='pp. 86-87'),
        'sursa': 'Sursa: Manual Art 8, pp. 86-87, rubricile Repere și tabelul conjuncțiilor coordonatoare.',
        'sect': [
            ('1. FRAZA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Fraza** este un enunț alcătuit din două sau mai multe propoziții. **Numărul propozițiilor = numărul predicatelor.**']},
                {'t': 'text', 'p': ['Predicatul poate fi **subînțeles**; în locul lui pun virgulă sau linie de pauză:']},
                {'t': 'tabel', 'cap': ['Situația', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['predicat verbal subînțeles', '*Anca stă la birou 1/ și Cătălin, în fotoliu. 2/*'],
                       ['același verb la negativ: rămâne doar negația', '*Ea citește, 1/ iar el, nu. 2/*'],
                       ['verb pasiv: rămâne doar participiul', '*Bluza a fost spălată de bunica 1/ și călcată de mama. 2/*'],
                       ['predicat nominal: rămâne numele predicativ', '*Ea este blondă 1/ și el, brunet. 2/*']]},
            ]),
            ('2. COORDONAREA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'juxtapunere', 'col': 't', 'p': ['alăturarea propozițiilor, cu **virgulă** sau **punct și virgulă**', '*El citește, ea desenează.*']},
                    {'titlu': 'joncțiune', 'col': 'm', 'p': ['prin **conectori**: conjuncții și locuțiuni conjuncționale coordonatoare', '*El citește, iar ea desenează.*']},
                ]},
            ]),
            ('3. CONJUNCȚIILE COORDONATOARE ȘI VIRGULA', [
                {'t': 'tabel', 'cap': ['Felul', 'Conjuncții', 'Locuțiuni', 'Virgula'], 'lat': [0.17, 0.2, 0.2, 0.43],
                 'r': [['**copulative**', '*și, nici*', '*precum și, cât și*', 'nu pun virgulă înainte de *și*; pun înainte de *nici*: *Nu vorbește, nici nu cântă.*'],
                       ['**disjunctive**', '*sau, ori, fie, ba*', '', 'fără virgulă când nu sunt în pereche; cu virgulă când sunt repetate: *Sau înveți, sau mergi la plimbare.*'],
                       ['**adversative**', '*dar, iar, însă, ci, or*', '*numai că, doar că*', '**întotdeauna** virgulă înainte: *Am învățat, dar n-am știut răspunsul.*'],
                       ['**concluzive**', '*deci*', '*așa că*', 'virgulă înainte; în interiorul propoziției nu se izolează: *A învățat, știe deci bine.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-16',
        'titlu': 'Fraza. Subordonarea',
        'sub': SUB.format(n=16, pp='pp. 88-89'),
        'sursa': 'Sursa: Manual Art 8, pp. 88-89, rubricile Repere.',
        'sect': [
            ('1. PRINCIPALA ȘI SECUNDARA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'propoziția principală', 'col': 't', 'p': ['are **sens de sine stătător**', 'o frază are **cel puțin o** principală']},
                    {'titlu': 'propoziția secundară (subordonată)', 'col': 'm', 'p': ['**depinde ca sens** de un cuvânt din altă propoziție']},
                ]},
                {'t': 'text', 'p': ['Cuvântul de care depinde subordonata este **elementul regent**; propoziția în care se află este **regenta** (principală sau secundară).',
                                    '**Coordonarea** leagă propoziții **de același fel**; **subordonarea** leagă o propoziție de un **cuvânt** din regentă.']},
            ]),
            ('2. SUBORDONAREA PRIN CONJUNCȚII', [
                {'t': 'tabel', 'cap': ['', 'Exemple'], 'lat': [0.3, 0.7],
                 'r': [['**conjuncții** subordonatoare', '*că, să, dacă, de, deși, încât, ca ... să, căci, deoarece, fiindcă*'],
                       ['**locuțiuni** conjuncționale subordonatoare', '*până când, în timp ce, ori de câte ori, după cum, ca și cum, fără să, pe măsură ce, pentru că, din cauză că, din moment ce, în caz că, cu toate că, chiar dacă*']]},
                {'t': 'text', 'p': ['• Conjuncțiile subordonatoare apar **doar în frază**; cele coordonatoare apar și în propoziție.',
                                    '• Locuțiunile conjuncționale subordonatoare leagă **numai propoziții secundare** de regentele lor.']},
            ]),
            ('3. SUBORDONAREA PRIN ALTE PĂRȚI DE VORBIRE', [
                {'t': 'tabel', 'cap': ['Elementul de relație', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['pronume și adjective pronominale **relative** și **nehotărâte**', '*Fetele 1/ care au realizat decorurile 2/ sunt creative. 1/*'],
                       ['adverbe **relative** (*unde, când, cum, cât*), uneori cu prepoziție', '*Merge 1/ până unde l-ai trimis. 2/*'],
                       ['adverbe **nehotărâte** (*oriunde, oricum, oricând, oricât*)', '*Oricum aș face, 1/ tot nenorocire iese. 2/*']]},
                {'t': 'atentie', 'p': ['Pronumele, adjectivele și adverbele relative și nehotărâte **au funcție sintactică** în propoziția pe care o introduc.']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-17',
        'titlu': 'Enunțuri eliptice. Norme de punctuație',
        'sub': SUB.format(n=17, pp='pp. 90-91'),
        'sursa': 'Sursa: Manual Art 8, pp. 90-91, rubricile Repere.',
        'sect': [
            ('1. ELIPSA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Elipsa** este omiterea unor secvențe care se pot **recupera din context**, fiind exprimate anterior. E frecventă în limba vorbită.']},
                {'t': 'tabel', 'cap': ['Tipul', 'Ce se omite', 'Exemplu'], 'lat': [0.2, 0.33, 0.47],
                 'r': [['**elipsa verbală**', 'predicatul (total sau parțial) sau verbul copulativ', '*Eu am fost în parc și tu [ai fost], la film. Regizorul este talentat, scenograful, ingenios.*'],
                       ['**elipsa nominală**', 'un substantiv, eventual cu determinanții lui', '*Eu am vrut o prăjitură cu ciocolată, iar Ioana a vrut [o prăjitură] cu fistic.*']]},
                {'t': 'text', 'p': ['Omiterea predicatului **nu desființează propoziția**: predicatul se subînțelege.']},
            ]),
            ('2. PROPOZIȚIILE FRAGMENTARE', [
                {'t': 'text', 'p': ['Sunt o formă de elipsă specifică **exprimării orale**:']},
                {'t': 'tabel', 'cap': ['Unde apar', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['în structuri coordonate: rămâne doar informația nouă', '*Dan preferă spectacolele de teatru, iar Mihai nu.*'],
                       ['în răspunsuri: rămâne doar cuvântul care răspunde întrebării', '*— Când va avea loc premiera? — Vineri.*'],
                       ['răspunsuri prin adverbe echivalente cu o propoziție', '*da, nu, ba da, desigur, bineînțeles, poate, nicidecum*']]},
            ]),
            ('3. CUM MARCHEZ ELIPSA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'în scris', 'col': 't', 'p': ['elipsa verbală se marchează prin **virgulă** sau **linie de pauză**', '*Ea este cuminte și el – nu.*']},
                    {'titlu': 'în vorbire', 'col': 'm', 'p': ['elipsa se marchează printr-o **pauză**']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-18',
        'titlu': 'Cronica de film. Etica redactării',
        'sub': SUB.format(n=18, pp='pp. 92-93'),
        'sursa': 'Sursa: Manual Art 8, pp. 92-93, rubricile Repere, planul în cinci paragrafe și grila de evaluare.',
        'sect': [
            ('1. CRONICA DE FILM', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Cronica de film** este un text scris după vizionare, care examinează aspecte ale filmului: **regie, scenariu, jocul actorilor, coloană sonoră, efecte speciale**. Autorul poate formula **puncte de vedere personale**.']},
                {'t': 'atentie', 'p': ['Cronica **nu dezvăluie** punctul culminant și deznodământul, ca să-i încurajeze pe cititori să vadă filmul.']},
            ]),
            ('2. ÎNAINTE SĂ SCRIU', [
                {'t': 'text', 'p': ['Urmăresc filmul atent, **inclusiv genericul**, îmi iau notițe și răspund la întrebările:']},
                {'t': 'tabel', 'cap': ['Întrebarea', 'Ce aflu'], 'lat': [0.2, 0.8],
                 'r': [['**CE?**', 'titlul (și cel original), genul, semnificația, premiile, ce detalii nu trebuie divulgate'],
                       ['**CÂND și UNDE?**', 'când și de cine a fost produs, premiera, când și unde are loc acțiunea'],
                       ['**CINE?**', 'regizorul, scenaristul, actorii (sau vocile), publicul interesat'],
                       ['**CUM?**', 'cum mi s-au părut filmul, jocul actorilor, coloana sonoră, lungimea; cum m-am simțit']]},
            ]),
            ('3. PLANUL ÎN CINCI PARAGRAFE', [
                {'t': 'text', 'p': ['1. **informații generale**: titlul original, genul, regizorul, scenaristul, actorii;',
                                    '2. **prezentarea pe scurt**: loc, timp, personaje, relațiile dintre ele, fără final;',
                                    '3. **părerea mea**: mi-a plăcut sau nu și de ce;',
                                    '4. **mesajul** și morala filmului;',
                                    '5. **producătorul**, anul, locul lansării, premiile.']},
                {'t': 'text', 'p': ['Titlul cronicii include **titlul filmului**.']},
            ]),
            ('4. REDACTAREA ȘI ETICA EI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'de mână sau la calculator', 'col': 't', 'p': ['ortografie și așezare în pagină îngrijite', 'scris lizibil / reguli de tehnoredactare']},
                    {'titlu': 'originalitatea', 'col': 'm', 'p': ['lucrarea este **a mea**', 'părerile preluate de la alții stau **între ghilimele**, cu **sursa** precizată']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 20 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-20',
        'titlu': 'Recapitulare: textul dramatic și textele despre spectacol',
        'sub': 'Clasa a VIII-a · Unitatea a II-a, Lecția 20 · Manual, pp. 58-73 și 94-95 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 2, 3, 5, 7, 8 și 18; recapitularea de la pp. 94-95 („Citadela sfărâmată” de Horia Lovinescu).',
        'sect': [
            ('1. TEXTUL DRAMATIC', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Pe scurt'], 'lat': [0.27, 0.73],
                 'r': [['actul / scena', 'act = cifre romane, separate prin cortină; scenă = cifre arabe, se schimbă la intrarea sau ieșirea unui personaj'],
                       ['indicațiile scenice', '**externe** (lista personajelor, decorul) și **interne** (numele din fața replicilor, parantezele cu gesturi, ton, ritm, atitudine)'],
                       ['replicile', '**dialogul** (principala formă de comunicare) și **monologul** (intervenție amplă)'],
                       ['timpul / spațiul', 'durata reprezentației și momentul ficțiunii; spațiul-scenă și spațiul ficțiunii'],
                       ['acțiunea / conflictul', 'de la situația inițială la cea finală; conflictul = înfruntarea unor interese sau sentimente opuse'],
                       ['comedia', 'provoacă râsul prin înfățișare, comportament, limbaj, situații']]},
            ]),
            ('2. PERSONAJUL DRAMATIC', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'caracterizare directă', 'col': 't', 'p': ['autorul (indicațiile scenice)', 'alte personaje', 'autocaracterizarea']},
                    {'titlu': 'caracterizare indirectă', 'col': 'm', 'p': ['acțiuni, gesturi, comportament', 'felul în care vorbește', 'ce spune']},
                ]},
                {'t': 'text', 'p': ['Pentru o **fișă comparativă** a două personaje notez: statutul social, preferințele, idealurile, atitudinea, apoi **asemănările** și **deosebirile**, fiecare cu o replică drept dovadă.']},
            ]),
            ('3. TEXTE DESPRE SPECTACOL ȘI FILM', [
                {'t': 'tabel', 'cap': ['', 'Cronica de spectacol', 'Cronica de film'], 'lat': [0.2, 0.4, 0.4],
                 'r': [['când', 'imediat după punerea în scenă', 'după vizionare'],
                       ['ce discută', 'regie, scenografie, jocul actorilor, decor, costume, atmosferă', 'regie, scenariu, jocul actorilor, coloană sonoră, efecte'],
                       ['ce are în comun', 'text de opinie, subiectiv, cu un punct de vedere final', 'nu dezvăluie finalul']]},
            ]),
            ('4. COMUNICARE ȘI INTERCULTURALITATE', [
                {'t': 'text', 'p': ['• Atitudini care ajută comunicarea: **flexibilitatea, asertivitatea, disponibilitatea pentru negociere**; opuse asertivității: pasivitatea, agresivitatea, pasivitatea agresivă, manipularea.',
                                    '• **Comunitățile multiculturale** conviețuiesc fără schimburi culturale; **comunitățile interculturale** interacționează, respectând valorile și tradițiile celuilalt.',
                                    '• Relațiile culturale constructive păstrează **identitatea etnică**, chiar când preiau elemente de la altă comunitate.']},
            ]),
        ],
    },
    # ---------------- Lecția 21 ----------------
    {
        'cale': 'clasa-8/unitatea-2/lectia-21',
        'titlu': 'Recapitulare: construcțiile și fraza',
        'sub': 'Clasa a VIII-a · Unitatea a II-a, Lecția 21 · Manual, pp. 74-91 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 9-17; cerințele de limbă din recapitularea de la p. 95.',
        'sect': [
            ('1. CONSTRUCȚIILE VERBALE', [
                {'t': 'tabel', 'cap': ['Construcția', 'Cum o recunosc', 'Exemplu'], 'lat': [0.2, 0.45, 0.35],
                 'r': [['**activă**', 'subiectul face acțiunea', '*Andrei scrie o compunere.*'],
                       ['**pasivă**', '*a fi* + participiul acordat; acceptă complement de agent (*de către, de*)', '*Compunerea este scrisă de Andrei.*'],
                       ['**cu pronume reflexiv**', 'reflexivul fără funcție (în verb) sau cu funcție (CD, CI, complement posesiv)', '*se gândește / se cunoaște / și-a pregătit*'],
                       ['**pasiv-reflexivă**', '*se* + verb care acceptă complement de agent', '*Fișele se împart de către profesor.*'],
                       ['**impersonală**', 'acțiunea nu e făcută de o persoană', '*Plouă. Mi-e dor. Se știe rezultatul.*']]},
            ]),
            ('2. PĂRȚILE PRINCIPALE DE PROPOZIȚIE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'predicatul', 'col': 't', 'p': ['**verbal**: verb predicativ, locuțiune verbală, interjecție predicativă', '**nominal**: verb copulativ + nume predicativ', 'testul: *de către cineva* → verbal pasiv']},
                    {'titlu': 'subiectul', 'col': 'm', 'p': ['exprimat (simplu, multiplu) sau neexprimat (subînțeles, inclus)', 'substantiv, pronume, numeral, verb la infinitiv, gerunziu, supin', '**fără virgulă** între subiect și predicat']},
                ]},
            ]),
            ('3. CONSTRUCȚIILE INCIDENTE ȘI ELIPSA', [
                {'t': 'text', 'p': ['• **Construcția incidentă** nu e legată sintactic de enunț; se izolează prin virgule, linii de pauză, paranteze: *Va veni, probabil, și Ana.*',
                                    '• **Elipsa** omite ce se recuperează din context; elipsa verbală se marchează prin virgulă sau linie de pauză: *Mihai a sosit primul, Andrei, al doilea.*']},
            ]),
            ('4. FRAZA', [
                {'t': 'tabel', 'cap': ['', 'Coordonarea', 'Subordonarea'], 'lat': [0.2, 0.4, 0.4],
                 'r': [['ce leagă', 'propoziții **de același fel**', 'o propoziție de un **cuvânt** din regentă'],
                       ['cum', 'juxtapunere sau conjuncții coordonatoare: copulative, disjunctive, adversative, concluzive', 'conjuncții și locuțiuni subordonatoare; pronume, adjective, adverbe relative și nehotărâte']]},
                {'t': 'text', 'p': ['Virgula la coordonare: **mereu** înainte de adversative și de *deci*, înainte de *nici* și de conjuncțiile disjunctive repetate; în general, **nu** înainte de *și*.']},
                {'t': 'nota', 'titlu': 'Pașii analizei:', 'p': ['subliniez predicatele → încercuiesc elementele de relație → despart fraza în propoziții → le numesc felul (principală / secundară) → spun relația și ce parte de vorbire este elementul de relație.']},
            ]),
        ],
    },
]
