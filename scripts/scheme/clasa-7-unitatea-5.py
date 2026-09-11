# Scheme-notițe, clasa a VII-a, Unitatea a V-a „Lumea de pe scenă”.
# Conținutul vine din rubricile Repere ale Manualului Art 7, pp. 172-193;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-7-unitatea-5.py

SUB = 'Clasa a VII-a · Unitatea a V-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-7/unitatea-5/lectia-3',
        'titlu': 'Textul dramatic. Structura. Indicațiile scenice',
        'sub': SUB.format(n=3, pp='p. 172'),
        'sursa': 'Sursa: Manual Art 7, p. 172, rubrica Repere; textul de bază este „Vrem să vă dăruim câte o fereastră” de Matei Vișniec.',
        'sect': [
            ('1. TEXTUL DRAMATIC', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul dramatic** este scris ca să fie **jucat pe scenă**. Fiind destinat spectacolului, are limite de **timp** și de **spațiu** ale acțiunii.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'actul', 'col': 't', 'p': ['diviziune formală a piesei', 'separat de celelalte printr-o **pauză**: se lasă cortina, spectatorii pot ieși', 'poate avea mai multe scene']},
                    {'titlu': 'scena (tabloul)', 'col': 'm', 'p': ['subdiviziune a actului', 'delimitată de **intrarea sau ieșirea** unui personaj ori de schimbarea locului și a timpului', 'uneori, de unitatea acțiunii']},
                ]},
            ]),
            ('2. CELE DOUĂ COMPONENTE', [
                {'t': 'tabel', 'cap': ['', 'Textul dialogat', 'Indicațiile autorului'], 'lat': [0.16, 0.42, 0.42],
                 'r': [['ce este', 'replicile personajelor (**replica** = o intervenție)', 'indicațiile scenice (**didascaliile**); **nu sunt rostite** de actori'],
                       ['unde', 'după numele personajului', 'înaintea textului dialogat și în interiorul lui, între **paranteze**, de obicei cu **italice**'],
                       ['ce parte e', '**partea literară**', '**partea nonliterară**']]},
                {'t': 'text', 'p': ['**Dramaturgul** imaginează acțiunea, construiește schimbul de replici și dă indicații despre interpretare.']},
            ]),
            ('3. INDICAȚIILE AUTORULUI', [
                {'t': 'tabel', 'cap': ['Felul', 'Ce cuprind'], 'lat': [0.2, 0.8],
                 'r': [['**externe**', 'titlul, **lista personajelor**, spațiul și timpul acțiunii, **decorul**'],
                       ['**interne**', 'împărțirea în acte și scene; intrările și ieșirile personajelor, deplasarea pe scenă, **intonația, mimica, gesturile**, acțiunile, momentele de tăcere; **numele personajului** scris cu majuscule înaintea replicii']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['*Didascalii* vine din greacă: așa se numeau caietele cu indicații date actorilor înaintea reprezentației.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-7/unitatea-5/lectia-14',
        'titlu': 'Numeralul. Posibilitățile combinatorii ale numeralului',
        'sub': SUB.format(n=14, pp='pp. 188-189'),
        'sursa': 'Sursa: Manual Art 7, pp. 188-189, rubricile Repere.',
        'sect': [
            ('1. NUMERALUL', [
                {'t': 'text', 'p': ['Exprimă un **număr** (cardinal) sau **ordinea** prin numărare (ordinal).']},
                {'t': 'text', 'p': ['• Cardinalele (simple, compuse) **nu au gen**, în afară de *unu/una, doi/două* și compusele lor: *douăzeci și unu / douăzeci și una*.',
                                    '• Ordinalele au forme după gen: *primul/prima, întâiul/întâia, al doilea/a doua, al douăzeci și unulea/a douăzeci și una, al cincizecilea/a cincizecea*.']},
                {'t': 'tabel', 'cap': ['Valoarea', 'Exemple'], 'lat': [0.25, 0.75],
                 'r': [['**adjectivală**', '*trei copii, a doua scenă, douăzeci de copii*'],
                       ['**pronominală**', '*Doi dintre actori au întârziat. A treia a întârziat.*'],
                       ['**substantivală**', '*tramvaiul 36, anul 1918; Doi plus trei fac cinci.*']]},
            ]),
            ('2. NUMERALUL ADJUNCT', [
                {'t': 'tabel', 'cap': ['Valoarea', 'Determină', 'Funcția', 'Exemplu'], 'lat': [0.17, 0.17, 0.3, 0.36],
                 'r': [['adjectivală', 'un substantiv', '**atribut adjectival**', '*doi copii, al doilea act*'],
                       ['pronominală', 'un substantiv', 'atribut prepozițional / genitival', '*florile de la doi; cartea primului*'],
                       ['pronominală', 'un verb', 'complement direct, indirect, prepozițional; circumstanțial', '*Am citit trei dintre poezii. M-am adresat primului.*'],
                       ['substantivală', 'un substantiv', 'atribut genitival / prepozițional', '*radicalul lui nouă; radical din nouă*'],
                       ['substantivală', 'un verb', 'complement prepozițional', '*Numără până la zece.*']]},
            ]),
            ('3. NUMERALUL CENTRU ȘI ALTE FUNCȚII', [
                {'t': 'text', 'p': ['• **centru**, cu valoare pronominală, urmat de o construcție cu prepoziție: *doi dintre ei, primul dintre concurenți*;',
                                    '• **centru**, cu valoare substantivală, în matematică; după un substantiv (*ora 14, camera 123*) are funcția de **atribut în nominativ**;',
                                    '• cu valoare pronominală poate fi **subiect** (*Trei vor obține mențiuni.*) sau **nume predicativ** (*Radu este primul.*).']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-7/unitatea-5/lectia-15',
        'titlu': 'Adverbul. Posibilitățile combinatorii ale adverbului',
        'sub': SUB.format(n=15, pp='pp. 190-191'),
        'sursa': 'Sursa: Manual Art 7, pp. 190-191, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. ADVERBUL', [
                {'t': 'text', 'p': ['Parte de vorbire **neflexibilă** care arată circumstanțele acțiunii.']},
                {'t': 'tabel', 'cap': ['După înțeles', 'Exemple', 'După alcătuire', 'Exemple'], 'lat': [0.17, 0.33, 0.17, 0.33],
                 'r': [['de loc', '*acolo, deasupra, jos*', 'simple', '*așa, azi, sus*'],
                       ['de timp', '*acum, curând, ieri*', 'compuse', '*acasă, altădată, deloc, astă-seară*'],
                       ['de mod', '*astfel, bine, românește*', '', '']]},
                {'t': 'text', 'p': ['• Gradele de comparație sunt ca la adjectiv; unele nu au grade: *acasă, aici, afară, împreună, mereu*.',
                                    '• **Locuțiunea adverbială**: *an de an, la paștele cailor, cât ai bate din palme*.']},
            ]),
            ('2. FUNCȚIILE', [
                {'t': 'tabel', 'cap': ['Funcția', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['circumstanțial de mod', '*Actorii au interpretat* **bine** *scena 1.*'],
                       ['circumstanțial de timp', '*Selecția va avea loc* **mâine**.'],
                       ['circumstanțial de loc', '*Anunțul a fost afișat* **acolo**.'],
                       ['atribut adverbial (după substantiv, de obicei cu *de*)', '*emoțiile* **de atunci**']]},
            ]),
            ('3. SEMIADVERBELE', [
                {'t': 'text', 'p': ['**Fără funcție sintactică**: *chiar, doar, decât, mai, măcar, nu, numai, tot, și*.']},
                {'t': 'atentie', 'p': ['• *numai, doar* – în enunțuri **afirmative** (*Numai tu ai participat.*); *decât* – doar în enunțuri **negative** (*Nu a participat decât el.*).',
                                       '• *mai* stă între **auxiliar și participiu** (*Am mai văzut spectacolul.*) și între **clitic și verb** (*Îmi mai dai o carte?*).']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„ieri” – adverb de timp, fără grad de comparație, funcția sintactică de circumstanțial de timp.*']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-7/unitatea-5/lectia-16',
        'titlu': 'Interjecția. Onomatopeele. Interjecția predicativă',
        'sub': SUB.format(n=16, pp='pp. 192-193'),
        'sursa': 'Sursa: Manual Art 7, pp. 192-193, rubrica Repere.',
        'sect': [
            ('1. INTERJECȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Parte de vorbire **neflexibilă** care exprimă **stări sufletești**, **reacții** la senzații, **îndemnuri** sau **imită sunete** din natură.']},
                {'t': 'tabel', 'cap': ['Felul', 'Exemple'], 'lat': [0.35, 0.65],
                 'r': [['**propriu-zise** (stări, reacții, îndemnuri)', '*au, ei, of, uau, vai*'],
                       ['**onomatopee** (imită sunete sau mișcări)', '*miau, hapciu, gâl-gâl, țuști*'],
                       ['**simple** (și repetate)', '*au, miau, pleosc; cioc-cioc, nani-nani*'],
                       ['**compuse** (componente diferite)', '*hodoronc-tronc, ia uite, tic-tac*'],
                       ['**locuțiuni interjecționale**', '*ei bine, ia te uită, măi să fie, vai de mine, Doamne ferește*'],
                       ['**de adresare** (apelative)', '*bă, bre, mă, măi; alo, hei, pst*']]},
            ]),
            ('2. INTERJECȚIA PREDICATIVĂ', [
                {'t': 'nota', 'p': ['Unele interjecții se comportă ca un verb și au funcția de **predicat verbal**: **Hai** *acasă!* **Uite**-*l pe Radu!* *Piatra* **pleosc** *în lac.*']},
            ]),
            ('3. PUNCTUAȚIA', [
                {'t': 'text', 'p': ['• Interjecțiile se despart prin **virgulă** sau prin **semnul exclamării**: *Ei, asta e o veste bună! Ei! Să vedem...*',
                                    '• Interjecție + substantiv în vocativ: virgula se pune **după tot grupul**: *Măi Radu, unde ai fost?*']},
            ]),
        ],
    },
]
