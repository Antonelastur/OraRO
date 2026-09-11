# Scheme-notițe, clasa a VI-a, Unitatea a V-a „Călătorii de tot felul”.
# Conținutul vine din rubricile Repere ale Manualului Art 6, pp. 158-189;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-6-unitatea-5.py

SUB = 'Clasa a VI-a · Unitatea a V-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-6/unitatea-5/lectia-3',
        'titlu': 'Acțiunea, spațiul și timpul într-o schiță',
        'sub': SUB.format(n=3, pp='pp. 158-159'),
        'sursa': 'Sursa: Manual Art 6, pp. 158-159, rubrica Repere și schemele din Explorare; textul de bază este „D-l Goe...” de I.L. Caragiale.',
        'sect': [
            ('1. TEXTUL NARATIV DE DIMENSIUNI REDUSE', [
                {'t': 'text', 'p': ['Unele texte narative sunt **scurte** și au acțiunea limitată la **un singur eveniment semnificativ** din viața personajelor. Multe dintre textele lui I.L. Caragiale din volumul *Momente și schițe* au aceste trăsături.']},
                {'t': 'tabel', 'cap': ['Elementul', 'Cum este'], 'lat': [0.3, 0.7],
                 'r': [['**acțiunea**', 'un singur eveniment; ritm **alert**'],
                       ['**spațiul**', '**restrâns**'],
                       ['**timpul**', '**limitat**'],
                       ['**detaliile**', '**puține**, dar **semnificative**']]},
            ]),
            ('2. CUM URMĂRESC SPAȚIUL ȘI TIMPUL', [
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'spațiul inițial', 'col': 't', 'p': ['unde începe acțiunea']},
                    {'titlu': 'spațiul desfășurării', 'col': 'm', 'p': ['unde se petrec întâmplările']},
                    {'titlu': 'spațiul final', 'col': 'a', 'p': ['unde se încheie evenimentele']},
                ]},
                {'t': 'text', 'p': ['Caut **indicii temporali**: data, momentul zilei, ora, durata; din ei aflu cât durează întâmplarea.']},
            ]),
            ('3. CUM LUCREZ CU TEXTUL', [
                {'t': 'text', 'p': ['1. delimitez **fragmentele logice** și găsesc cuvântul-cheie al fiecăruia;',
                                    '2. formulez **ideile principale** și **tema**;',
                                    '3. rezum oral, fragment cu fragment;',
                                    '4. stabilesc **persoana** la care se povestește și **cine** povestește.']},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-6/unitatea-5/lectia-4',
        'titlu': 'Dialogul în textul literar',
        'sub': SUB.format(n=4, pp='pp. 160-161'),
        'sursa': 'Sursa: Manual Art 6, pp. 160-161, rubricile Repere.' + CREATE,
        'sect': [
            ('1. DIALOGUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Dialogul** este comunicarea verbală dintre două sau mai multe persoane care își transmit informații. Intervenția unui partener se numește **replică**.']},
                {'t': 'text', 'p': ['• Un dialog are **cel puțin două replici** legate logic între ele.',
                                    '• În opera literară, dialogul **imită** dialogul real și reproduce discuția dintre personaje.',
                                    '• Intervenția unui personaj se marchează prin **linie de dialog** (—).']},
            ]),
            ('2. VERBELE DE DECLARAȚIE', [
                {'t': 'text', 'p': ['*a zice, a spune, a întreba, a răspunde, a adăuga, a exclama, a striga, a ruga*']},
                {'t': 'tabel', 'cap': ['Unde stă verbul', 'Punctuația', 'Exemplu'], 'lat': [0.24, 0.36, 0.4],
                 'r': [['**înaintea** replicii', 'urmat de **două puncte**', '*Ana spuse:* / *— Vin și eu!*'],
                       ['**după** replică', 'precedat de **virgulă, puncte de suspensie, ! sau ?**', '*— Vin și eu! strigă Ana.*'],
                       ['**în interiorul** replicii', 'izolat prin **virgule** sau **linii de pauză**', '*— Vin, spuse Ana, și eu.*']]},
            ]),
            ('3. CE MAI ARATĂ DIALOGUL', [
                {'t': 'text', 'p': ['**Nonverbalul și paraverbalul** (mimica, gesturile, privirea, tonul, volumul vocii, pauzele) sunt redate prin cuvinte: *zice încruntat, zbiară, bătând din picioare*.']},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': '!', 'col': 'r', 'p': ['emoție, surpriză, furie, nervozitate']},
                    {'titlu': '?', 'col': 't', 'p': ['întrebare, nedumerire']},
                    {'titlu': '...', 'col': 'm', 'p': ['ezitări, întreruperi, pauze']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-6/unitatea-5/lectia-8',
        'titlu': 'Organizarea textului argumentativ',
        'sub': SUB.format(n=8, pp='pp. 168-169'),
        'sursa': 'Sursa: Manual Art 6, pp. 168-169, rubrica Repere, schema și modelul textual din Explorare.',
        'sect': [
            ('1. SCOPUL ȘI PREMISA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul argumentativ** vrea să **convingă** cititorii de o opinie. Opinia se formulează în **premisă** (ipoteză, teză), un enunț de acord sau dezacord.']},
                {'t': 'text', 'p': ['*Cred că printre momentele care te ajută să te dezvolți se numără și călătoriile.*']},
            ]),
            ('2. STRUCTURA', [
                {'t': 'tabel', 'cap': ['Partea', 'Ce conține'], 'lat': [0.2, 0.8],
                 'r': [['**introducerea**', '(a) **premisa**'],
                       ['**cuprinsul**', '(b) **argumentele**: fapte, dovezi, exemple, impresii, convingeri; (c) **exemplele** care le fac credibile; uneori **contraargumente**'],
                       ['**încheierea**', '(d) **concluzia**: reformulează punctul de vedere, nuanțat după argumente']]},
                {'t': 'nota', 'titlu': 'Modelul din manual:', 'p': ['*Este bine să călătorești (a), pentru că astfel îți poți depăși limitele (b). De exemplu, când am urcat pe vârful Moldoveanu, am descoperit că îmi pot învinge teama de înălțime (c). Așadar, călătorind, te poți descoperi pe tine (d).*']},
            ]),
            ('3. CUVINTELE ARGUMENTĂRII', [
                {'t': 'tabel', 'cap': ['Rolul', 'Cuvinte'], 'lat': [0.3, 0.7],
                 'r': [['ordinea argumentelor', '*în primul rând, în al doilea rând, mai întâi, apoi, după aceea, nu în ultimul rând, în cele din urmă*'],
                       ['exemplele', '*de exemplu, astfel, de pildă*'],
                       ['legătura dintre idei', '*pentru că, deoarece, ca urmare, spre deosebire de*'],
                       ['concluzia', '*în concluzie, așadar*'],
                       ['implicarea cititorilor', '*după cum știți, așa cum vă dați seama, nu cred că vă îndoiți de*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Timpul verbal folosit de obicei: **prezentul indicativului**.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-6/unitatea-5/lectia-14',
        'titlu': 'Adjectivul. Gradele de comparație',
        'sub': SUB.format(n=14, pp='pp. 180-181'),
        'sursa': 'Sursa: Manual Art 6, pp. 180-181, rubrica Repere, tabelele și modelul de analiză.',
        'sect': [
            ('1. ADJECTIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Adjectivul** exprimă o **însușire** a unui obiect și determină un substantiv. Poate fi **propriu-zis** (*bucuros*) sau **provenit din verb la participiu** (*adormit*).']},
                {'t': 'tabel', 'cap': ['Adjectivele', 'Exemple'], 'lat': [0.35, 0.65],
                 'r': [['variabile, cu **4 forme**', '*frumos, frumoasă, frumoși, frumoase*'],
                       ['variabile, cu **3 forme**', '*adânc, adâncă, adânci*'],
                       ['variabile, cu **2 forme**', '*dulce, dulci*'],
                       ['**invariabile**', '*antiglonț, eficace, vernil, violet*']]},
                {'t': 'text', 'p': ['Se **acordă** în gen, număr și caz cu substantivul. Stă de obicei **după** substantiv; pus înainte, **preia articolul**: *frumoasa zi*.']},
            ]),
            ('2. ARTICOLUL DEMONSTRATIV', [
                {'t': 'text', 'p': ['Leagă adjectivul de substantiv și se acordă cu acesta: *costumul* **cel** *alb, steaua* **cea** *luminoasă*.']},
                {'t': 'tabel', 'cap': ['', 'masc. sg.', 'masc. pl.', 'fem. sg.', 'fem. pl.'], 'lat': [0.2, 0.2, 0.2, 0.2, 0.2], 'al': ['l', 'c', 'c', 'c', 'c'],
                 'r': [['N-Ac', 'cel', 'cei', 'cea', 'cele'], ['G-D', 'celui', 'celor', 'celei', 'celor']]},
            ]),
            ('3. GRADELE DE COMPARAȚIE', [
                {'t': 'tabel', 'cap': ['Gradul', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['**pozitiv**', '*strălucitoare*'],
                       ['comparativ de **egalitate**', '*tot atât de / la fel de strălucitoare*'],
                       ['comparativ de **superioritate / inferioritate**', '*mai / mai puțin strălucitoare*'],
                       ['superlativ **relativ** de superioritate / inferioritate', '*cea mai / cea mai puțin strălucitoare*'],
                       ['superlativ **absolut** de superioritate / inferioritate', '*foarte / foarte puțin strălucitoare*']]},
                {'t': 'atentie', 'p': ['**Fără grade**: *superior, inferior, anterior, optim* (comparative în latină), *complet, unic, principal* (însușirea nu se schimbă), *cosmic, brașovean* (sensul nu permite).']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„cel mai răcoros” – adjectiv propriu-zis, variabil, cu patru forme flexionare, acordat în gen, număr și caz cu „locul” (neutru, singular, acuzativ), gradul superlativ relativ de superioritate, funcția sintactică de atribut adjectival.*']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-6/unitatea-5/lectia-16',
        'titlu': 'Adverbul. Felurile adverbului',
        'sub': SUB.format(n=16, pp='pp. 184-185'),
        'sursa': 'Sursa: Manual Art 6, pp. 184-185, rubricile Repere.' + CREATE,
        'sect': [
            ('1. ADVERBUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Adverbul** determină un **verb** și exprimă **împrejurările** în care se desfășoară acțiunea. **Nu își schimbă forma**.']},
            ]),
            ('2. FELURILE ADVERBULUI', [
                {'t': 'tabel', 'cap': ['Felul', 'Întrebarea', 'Exemple', 'În propoziție'], 'lat': [0.16, 0.16, 0.34, 0.34],
                 'r': [['**de loc**', '*unde?*', '*aici, deasupra, jos, sus*', '*Pisica doarme* **sus**.'],
                       ['**de timp**', '*când?*', '*acum, astăzi, curând, mereu*', '**Mâine** *plecăm la munte.*'],
                       ['**de mod**', '*cum?*', '*agale, alene, așa, bine*', '*Bunicul merge* **agale**.']]},
            ]),
            ('3. CUM ÎL RECUNOSC', [
                {'t': 'text', 'p': ['1. găsesc **verbul** pe care îl determină;',
                                    '2. pun întrebarea **unde? când? cum?** de la verb;',
                                    '3. verific: cuvântul **nu își schimbă forma** (spre deosebire de adjectiv).']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'adjectiv', 'col': 'a', 'p': ['determină un **substantiv** și se acordă', '*o rochie* **frumoasă**']},
                    {'titlu': 'adverb', 'col': 't', 'p': ['determină un **verb**, nu se schimbă', '*cântă* **frumos**']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-6/unitatea-5/lectia-18',
        'titlu': 'Vorbirea directă și vorbirea indirectă',
        'sub': SUB.format(n=18, pp='pp. 188-189'),
        'sursa': 'Sursa: Manual Art 6, pp. 188-189, rubricile Repere, modelul din Explorare și lista de control.',
        'sect': [
            ('1. DOUĂ FELURI DE A REDA SPUSELE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'vorbirea directă', 'col': 't', 'p': ['reproduce **întocmai** cuvintele unei persoane sau ale unui personaj']},
                    {'titlu': 'vorbirea indirectă', 'col': 'm', 'p': ['redă spusele **prin relatare**']},
                ]},
            ]),
            ('2. CUM TRANSFORM', [
                {'t': 'text', 'p': ['• elimin **linia de dialog**;',
                                    '• folosesc **verbe de declarație**, urmate de *că, să, ca să, dacă, unde, când, care*;',
                                    '• elimin enunțurile **imperative, exclamative, interogative**;',
                                    '• trec verbele și pronumele de la persoanele I și a II-a la **persoana a III-a**;',
                                    '• trec **imperativul** în **conjunctiv**;',
                                    '• trec substantivele în **vocativ** în acuzativ sau dativ;',
                                    '• elimin exclamațiile și cuvintele care imită sunete;',
                                    '• redau cât mai **exact** spusele personajului.']},
            ]),
            ('3. MODELUL DIN MANUAL', [
                {'t': 'tabel', 'cap': ['Vorbire directă', 'Vorbire indirectă'], 'lat': [0.5, 0.5],
                 'r': [['*„— Goe! maică! Acolo ești? — Da!”*', '*Bunica îl întreabă pe Goe dacă este în acel loc. Băiatul răspunde afirmativ.*'],
                       ['*„— Aide! zice mam’ mare, ieși odată! Ne-ai speriat.”*', '*Bunica îi cere să iasă odată, fiindcă le-a speriat.*'],
                       ['*„— Nu pot! zbiară Goe dinăuntru.”*', '*Din interior, Goe strigă că nu poate.*']]},
            ]),
        ],
    },
]
