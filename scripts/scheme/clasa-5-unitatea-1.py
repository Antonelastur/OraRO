# Scheme-notițe, clasa a V-a, Unitatea I „Despre mine. Selfie”. Conținutul
# vine din rubricile Repere ale Manualului Art 5; exemplele noi sunt anunțate
# în subsol. La lecțiile de lectură, notițele adună datele textului și
# întrebările de interpretare, nu răspunsurile din Ghid.
# Generare: python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-1.py

SUB = 'Clasa a V-a · Unitatea I, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-3',
        'titlu': 'Cuvântul-cheie. Tema. Planul simplu de idei',
        'sub': SUB.format(n=3, pp='p. 15'),
        'sursa': 'Sursa: Manual Art 5, p. 15, rubricile Repere; rândul model din tabel e din manual.',
        'sect': [
            ('1. CUVÂNTUL-CHEIE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Cuvântul-cheie** este un substantiv sau un grup de cuvinte care numește aspectul cel mai important dintr-un fragment.']},
                {'t': 'text', 'p': ['Într-un text pot fi identificate, de regulă, **mai multe** cuvinte-cheie.']},
            ]),
            ('2. TEMA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Tema** unui text oral sau scris este ideea centrală dezvoltată în cadrul acestuia.']},
                {'t': 'text', 'p': ['• Pentru numirea temei se folosește un **substantiv**.',
                                    '• Teme literare frecvente: *călătoria, copilăria, dragostea, familia, natura, prietenia, școala*.',
                                    '• Uneori, **titlul** textului poate anticipa tema.']},
                {'t': 'nota', 'titlu': 'Deosebirea:', 'p': ['Cuvântul-cheie numește ce e mai important într-un **fragment**; tema este ideea centrală a **întregului text**.']},
            ]),
            ('3. IDEEA PRINCIPALĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Ideea principală** este comunicarea prin care se transmite informația esențială dintr-un fragment de text.']},
                {'t': 'text', 'p': ['Poate fi exprimată **direct** în text sau poate fi **desprinsă** prin punerea în legătură a unor informații din text.']},
                {'t': 'text', 'p': ['**Cum o formulez:**']},
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': '1. Delimitez', 'col': 't', 'p': ['fragmentul logic']},
                    {'titlu': '2. Găsesc', 'col': 't', 'p': ['cuvântul-cheie']},
                    {'titlu': '3. Adaug', 'col': 't', 'p': ['un predicat']},
                    {'titlu': '4. Completez', 'col': 't', 'p': ['cu alte cuvinte']},
                ]},
                {'t': 'text', 'p': ['Ideea principală răspunde la întrebarea: *Despre ce/cine este vorba în fragmentul delimitat?*']},
                {'t': 'tabel', 'cap': ['Delimitarea textului', 'Cuvântul-cheie', 'Ideea principală'],
                 'lat': [0.38, 0.22, 0.40],
                 'r': [['*„Nu știu [...] nu cumva să îndrăznești!”*', '*marți*', '*Marți a fost o zi dificilă.*']]},
            ]),
            ('4. PLANUL SIMPLU DE IDEI', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Planul simplu de idei** cuprinde toate ideile principale ale textului, înlănțuite în ordinea apariției lor în text.']},
                {'t': 'nota', 'titlu': 'Cum îl scriu în caiet:', 'p': ['1. Prima idee principală.', '2. A doua idee principală.', '3. Și tot așa, până la ultimul fragment.']},
                {'t': 'text', 's': 14, 'c': 't', 'p': ['Identificarea și formularea ideilor principale ajută la înțelegerea textului.']},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-4',
        'titlu': 'Semnificațiile textului. „Prietenul meu” de Ioana Pârvulescu',
        'sub': SUB.format(n=4, pp='p. 16'),
        'sursa': 'Sursa: Manual Art 5, pp. 16 și 18 (întrebările de interpretare și prezentarea temei). Răspunsurile se scriu în caiet.',
        'sect': [
            ('1. CE ÎNSEAMNĂ SĂ INTERPRETEZ UN TEXT', [
                {'t': 'text', 's': 15.5, 'p': ['Caut înțelesurile care **nu sunt spuse direct**: ce sugerează titlul, comparațiile, întrebările personajului și finalul.']},
            ]),
            ('2. PISTE DE INTERPRETARE', [
                {'t': 'tabel', 'cap': ['Ce observ în text', 'Întrebarea la care răspund în caiet'], 'lat': [0.5, 0.5],
                 'r': [['Titlul *Prietenul meu*', 'La cine se referă titlul: la Joi, la Adi sau la amândoi?'],
                       ['Ziua e ca *„o mașină condusă de un șofer începător pe un drum cu gropi”*', 'Ce spune comparația despre ziua de marți?'],
                       ['Oamenii *„n-au ochi și ochelari cu care să-ți vadă și sufletul”*', 'La ce se referă Bogdan?'],
                       ['Minutele îi par lui Bogdan ore', 'De ce i se pare timpul atât de lung?'],
                       ['Întrebările la care Bogdan nu are răspuns', 'Ce răspuns posibil le-aș da?'],
                       ['Finalul, o întrebare care nu așteaptă răspuns', 'De ce ajunge Bogdan la concluzia că ziua n-a fost chiar așa de rea?']]},
            ]),
            ('3. EMOȚIILE LUI BOGDAN', [
                {'t': 'text', 'p': ['Desenez în caiet **cadranul unui ceas** și notez, în dreptul momentelor zilei de marți, cuvântul care numește emoția trăită de Bogdan.']},
            ]),
            ('4. TEMA TEXTULUI', [
                {'t': 'text', 's': 15.5, 'p': ['În povestirea Ioanei Pârvulescu este vorba despre **prietenie**.',
                                              'Ziua de marți a început prost, dar a avut și **urmări bune**.']},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-6',
        'titlu': 'Text auxiliar. „Hronicul și cântecul vârstelor” de Lucian Blaga',
        'sub': SUB.format(n=6, pp='pp. 18-19'),
        'sursa': 'Sursa: Manual Art 5, pp. 18-19 (textul, prezentarea și notele de subsol).',
        'sect': [
            ('1. DESPRE TEXT', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'AUTORUL', 'col': 'm', 'p': ['**Lucian Blaga** (1895-1961), unul dintre marii scriitori ai literaturii române.']},
                    {'titlu': 'CARTEA', 'col': 't', 'p': ['*Hronicul și cântecul vârstelor* evocă etapele importante ale vieții autorului; fragmentul e despre **copilărie**.']},
                ]},
            ]),
            ('2. CINE, UNDE, CE', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Ce aflu din text'], 'lat': [0.3, 0.7],
                 'r': [['Cine povestește?', 'Un copil, strigat de prieteni *„Lulu Popii”*.'],
                       ['Cine sunt prietenii?', '*Vasile Bănățeanu, Roman al lui Tudorel și Adam al Vicii*, născuți în același an cu el.'],
                       ['Unde se petrece?', 'Pe **ulița** satului.'],
                       ['Ce descoperă copilul?', 'Că **cerul** (zenitul) merge peste tot cu el.'],
                       ['Ce face cu descoperirea?', 'O ține **secret**, apoi i-o spune lui Adam al Vicii.'],
                       ['Ce încercare fac?', 'Unul o ia pe uliță în sus, celălalt în jos: dacă cerul merge cu amândoi, ar trebui să „crape”.']]},
            ]),
            ('3. CUVINTE NOI', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Sensul din text'], 'lat': [0.42, 0.58],
                 'r': [['*auroră*', 'început al unei perioade'],
                       ['*într-adins*', 'intenționat'],
                       ['*zenit*', 'cerul de deasupra capului'],
                       ['*a tălmăci*', 'a explica, a traduce'],
                       ['*a ține sub trei lacăte și șapte peceți*', 'a ține în secret ceva'],
                       ['*răgaz*', 'interval de timp liber'],
                       ['*a o lua razna*', 'a pleca la întâmplare, fără țintă'],
                       ['*sacru*', 'sfânt'],
                       ['*dezolat*', 'foarte trist'],
                       ['*a mântui*', 'a termina']]},
            ]),
            ('4. LEGĂTURA CU „PRIETENUL MEU”', [
                {'t': 'text', 'p': ['• *Prietenul meu* de Ioana Pârvulescu: este vorba despre **prietenie**.',
                                    '• *Hronicul și cântecul vârstelor*: amintiri din **copilărie**, cu prietenii numiți *„rudele mai presus de sânge”*.',
                                    '**În caiet:** ce legătură văd între cele două texte? Delimitez fragmentul, găsesc cuvintele-cheie și scriu planul simplu de idei, ca în lecția 3.']},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-8',
        'titlu': 'Exprimarea adecvată a emoțiilor. Roluri în comunicare',
        'sub': SUB.format(n=8, pp='pp. 22-23'),
        'sursa': 'Sursa: Manual Art 5, pp. 22-23, rubrica Repere.' + CREATE,
        'sect': [
            ('1. SITUAȚIA DE COMUNICARE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['De fiecare dată când se transmit **gânduri, idei, întâmplări, stări, emoții**, este vorba de o situație de comunicare.']},
            ]),
            ('2. FELURILE COMUNICĂRII', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'verbală', 'col': 't', 'sub': 'prin cuvinte',
                     'p': ['prin intermediul unei limbi cunoscute de cei care comunică', 'poate fi **orală** sau **scrisă**', '*„Mă bucur că ai venit!”*']},
                    {'titlu': 'nonverbală', 'col': 'm', 'sub': 'prin corp',
                     'p': ['mimica, poziția corpului, gesturile, contactul vizual', '*un zâmbet, o îmbrățișare*']},
                    {'titlu': 'paraverbală', 'col': 'a', 'sub': 'prin voce',
                     'p': ['intonația, intensitatea vocii, ritmul vorbirii', '*vorbești șoptit sau apăsat, repede sau rar*']},
                ]},
                {'t': 'nota', 'titlu': 'Reține:', 'p': ['Comunicarea **orală** le presupune pe toate trei: verbală, nonverbală și paraverbală.']},
            ]),
            ('3. ROLURI ÎN COMUNICARE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'vorbitorul', 'col': 'n', 'p': ['transmite mesajul']},
                    {'titlu': 'ascultătorul', 'col': 'n', 'p': ['primește mesajul']},
                ]},
                {'t': 'text', 'p': ['Rolurile se schimbă: când ascultătorul răspunde, devine vorbitor.']},
            ]),
            ('4. COMUNICAREA EMOȚIILOR', [
                {'t': 'text', 's': 15.5, 'p': ['Comunicarea emoțiilor presupune să arăți ceea ce simți: prin **cuvinte**, **gesturi**, **expresii ale feței** sau **simboluri**.']},
                {'t': 'tabel', 'cap': ['Emoția', 'Prin cuvinte', 'Prin gesturi și expresia feței'], 'lat': [0.2, 0.34, 0.46],
                 'r': [['bucuria', '*„Ce bine!”*', 'zâmbet, ochi luminoși'],
                       ['tristețea', '*„Îmi pare rău.”*', 'privire în jos, umeri căzuți'],
                       ['frica', '*„Mi-e teamă!”*', 'ochi mari, corp încordat'],
                       ['furia', '*„Nu e corect!”*', 'sprâncene încruntate, pumni strânși'],
                       ['dezgustul', '*„Ce urât miroase!”*', 'nas încrețit, cap întors']]},
                {'t': 'atentie', 'p': ['Emoțiile se exprimă **adecvat**, potrivit situației; uneori e bine să le **temperezi**.']},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-9',
        'titlu': 'Propoziția. Tipuri de propoziții',
        'sub': SUB.format(n=9, pp='pp. 24-25'),
        'sursa': 'Sursa: Manual Art 5, pp. 24-25, rubricile Repere.' + CREATE,
        'sect': [
            ('1. PROPOZIȚIA', [
                {'t': 'text', 's': 18, 'c': 'n', 'p': ['**Propoziția** este o comunicare cu un singur predicat.']},
                {'t': 'text', 's': 15.5, 'p': ['**Reține:** câte predicate, atâtea propoziții.']},
                {'t': 'text', 's': 16, 'p': ['*Alex întârzie. A rămas la școală. Lucrează la proiect.*']},
                {'t': 'text', 's': 14, 'c': 't', 'p': ['3 predicate (întârzie, a rămas, lucrează) → 3 propoziții']},
            ]),
            ('2. PĂRȚILE DE PROPOZIȚIE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'PRINCIPALE', 'col': 'm', 'sub': 'suficiente pentru existența unei propoziții',
                     'p': ['• **Predicatul** arată ce face subiectul.',
                           '• **Subiectul** arată cine face acțiunea exprimată de predicat.']},
                    {'titlu': 'SECUNDARE', 'col': 't', 'sub': 'îmbogățesc sensul propoziției',
                     'p': ['*Ilinca citește o carte.*', '„o carte” este o parte secundară.']},
                ]},
                {'t': 'text', 'p': ['**În caiet:** predicatul se subliniază cu o linie, subiectul cu două linii.']},
                {'t': 'text', 's': 20, 'p': ['*__Ilinca__ _citește_.*']},
            ]),
            ('3. TIPURI DE PROPOZIȚII', [
                {'t': 'coloane', 'c': [
                    {'titlu': 'DUPĂ ALCĂTUIRE', 'b': [
                        {'t': 'carduri', 'n': 1, 'c': [
                            {'titlu': 'simplă', 'col': 't', 'p': ['alcătuită din predicat și subiect', '*Ex.: Ilinca citește.*']},
                            {'titlu': 'dezvoltată', 'col': 't', 'p': ['în alcătuirea ei intră cel puțin o parte secundară', '*Ex.: Ilinca citește o carte.*']},
                        ]},
                        {'t': 'nota', 'titlu': 'Din simplă în dezvoltată:', 'p': ['adaug cel puțin o parte secundară.', '*Ilinca citește. → Ilinca citește o carte seara.*']},
                    ]},
                    {'titlu': 'DUPĂ ASPECTUL PREDICATULUI', 'b': [
                        {'t': 'carduri', 'n': 1, 'c': [
                            {'titlu': 'afirmativă', 'col': 'm', 'p': ['verbul cu rol de predicat e la forma afirmativă', '*Ex.: Cățelul a lătrat.*']},
                            {'titlu': 'negativă', 'col': 'm', 'p': ['verbul cu rol de predicat e la forma negativă', '*Ex.: Cățelul nu a lătrat.*']},
                        ]},
                        {'t': 'nota', 'titlu': 'Din afirmativă în negativă:', 'p': ['pun „nu” înaintea verbului cu rol de predicat.', '*Vorbesc cu Ilinca. → Nu vorbesc cu Ilinca.*']},
                    ]},
                ]},
            ]),
            ('4. CUM SPUN FELUL UNEI PROPOZIȚII', [
                {'t': 'tabel', 'cap': ['Propoziția', 'după alcătuire', 'după aspectul predicatului'],
                 'lat': [0.46, 0.27, 0.27], 'al': ['l', 'c', 'c'],
                 'r': [['*Riley zâmbește.*', '{t:simplă}', '{m:afirmativă}'],
                       ['*Ruxi nu a răspuns.*', '{t:simplă}', '{m:negativă}'],
                       ['*Ilinca citește o carte.*', '{t:dezvoltată}', '{m:afirmativă}'],
                       ['*Adi nu vine azi la mine.*', '{t:dezvoltată}', '{m:negativă}']]},
                {'t': 'text', 's': 13.5, 'c': 'g', 'p': ['Răspunsul complet are ambele criterii: „propoziție dezvoltată, negativă”.']},
            ]),
            ('5. ORTOGRAFIA ȘI PUNCTUAȚIA PROPOZIȚIEI', [
                {'t': 'simboluri', 'r': [
                    ('Aa', 'În scris, propoziția începe cu **literă mare**.'),
                    ('. ? !', 'La final: **punct**, **semnul întrebării** sau **semnul exclamării**.'),
                    (',', ['**Virgula** se pune după un cuvânt care arată o strigare: *Ruxi, ce faci?*',
                           'și între termenii unei enumerări: *cu Luminița, Adi și Marius*']),
                    (':', '**Două puncte** se pun înaintea unei enumerări: *Am trei prieteni: Ilinca, Ruxi și Adi.*'),
                    ('—', ['**Linia de dialog** marchează începutul replicii fiecărei persoane:',
                           '*— Ruxi, ce faci?*', '*— Vorbesc cu Ilinca.*']),
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-10',
        'titlu': 'Cuvântul și dicționarul',
        'sub': SUB.format(n=10, pp='pp. 26-27'),
        'sursa': 'Sursa: Manual Art 5, pp. 26-27, rubricile Repere; articolul CÂINE e din manual, prescurtat.' + CREATE,
        'sect': [
            ('1. VOCABULARUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Vocabularul** este alcătuit din totalitatea cuvintelor care există sau au existat vreodată într-o limbă.']},
                {'t': 'text', 'p': ['• Fiecare limbă are propriul vocabular.',
                                    '• Vocabularul e în **permanentă mișcare**: apar cuvinte noi, altele nu mai sunt folosite, iar sensul unora se schimbă.']},
            ]),
            ('2. CUVÂNTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Cuvântul** este unitatea de bază a vocabularului. Are:']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'sens (înțeles)', 'col': 't', 'p': ['reprezintă **conținutul**']},
                    {'titlu': 'sunete (înveliș sonor)', 'col': 'm', 'p': ['reprezintă **forma**']},
                ]},
                {'t': 'tabel', 'cap': ['Situația', 'Exemplu'], 'lat': [0.5, 0.5],
                 'r': [['același sens, sunete diferite', '*a hotărî – a decide*'],
                       ['sens diferit, aceleași sunete', '*liliac* (arbust) – *liliac* (animal)']]},
                {'t': 'nota', 'titlu': 'Contextul', 'p': ['Sensul unui cuvânt se stabilește în **context**, adică în propoziția sau în fragmentul în care apare.',
                                                          '*Liliacul a înflorit în grădină. / Liliacul zboară noaptea.*']},
            ]),
            ('3. DICȚIONARUL', [
                {'t': 'text', 'p': ['**Dicționarul** este o lucrare științifică în care se includ cuvintele unei limbi sau termenii specifici unui domeniu.',
                                    'Feluri: *explicative, normative, enciclopedice, ortografice, de sinonime, de antonime, de opere literare*.',
                                    '**DEX** = *Dicționarul explicativ al limbii române*, lucrarea în care sunt explicate sensurile cuvintelor.']},
            ]),
            ('4. ORDINEA ALFABETICĂ', [
                {'t': 'text', 'p': ['• Cuvintele se așază în ordine alfabetică, după **prima literă**.',
                                    '• Dacă primele litere sunt identice, ordonez după **prima literă interioară diferită**:']},
                {'t': 'text', 'p': ['*vocabular, vocabulă, vocală, vocalic, vocalism, vocaliza, vocalizare, vocaliză*']},
            ]),
            ('5. ARTICOLUL DE DICȚIONAR', [
                {'t': 'nota', 'p': ['**CÂINE**, *câini*, **s. m.** **1.** Animal mamifer carnivor, domesticit, folosit pentru pază, vânătoare etc. *Expr.* A tăia frunză la câini = a trândăvi. – *Lat.* canis.']},
                {'t': 'tabel', 'cap': ['În articolul din DEX găsesc', 'Unde'], 'lat': [0.45, 0.55],
                 'r': [['cuvântul și forma de plural', '**CÂINE**, *câini*'],
                       ['natura gramaticală', '*s. m.* = substantiv masculin'],
                       ['sensurile, numerotate', '*1.* Animal mamifer…'],
                       ['expresiile', '*Expr.* A tăia frunză la câini'],
                       ['originea', '*Lat.* canis = din latină']]},
                {'t': 'text', 's': 13.5, 'c': 'g', 'p': ['Prescurtări: *s. m.* substantiv masculin, *s. f.* substantiv feminin, *s. n.* substantiv neutru, *adj.* adjectiv, *vb.* verb.']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-11',
        'titlu': 'Sinonimele. Antonimele',
        'sub': SUB.format(n=11, pp='pp. 28-29'),
        'sursa': 'Sursa: Manual Art 5, pp. 28-29, rubricile Repere.' + CREATE,
        'sect': [
            ('1. SINONIMELE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Sinonimele** sunt cuvinte cu **formă diferită** și cu **sens asemănător sau identic**.']},
                {'t': 'text', 'p': ['*bucuroasă – mulțumită – veselă – voioasă*', '*tristă – supărată – posomorâtă – mâhnită*']},
                {'t': 'text', 'p': ['• Sinonimele trebuie să fie **aceeași parte de vorbire**.',
                                    '• Alegerea sinonimului depinde de **context**; înlocuirea nu trebuie să schimbe sensul textului.',
                                    '• Un cuvânt cu mai multe sensuri are sinonime **pentru fiecare sens**.',
                                    '• Există sinonime și pentru **expresii**: *a o lua la fugă – a fugi*.']},
                {'t': 'nota', 'titlu': 'Același cuvânt, sensuri diferite, sinonime diferite:', 'p': ['*Mâna ei e rece.* → *înghețată*   ·   *Privirea lui e rece.* → *distantă*']},
            ]),
            ('2. ANTONIMELE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Antonimele** sunt cuvinte cu **formă diferită** și cu **sens opus**.']},
                {'t': 'text', 'p': ['*bucurie – tristețe*   ·   *a intra – a ieși*   ·   *mare – mic*']},
                {'t': 'text', 'p': ['• O pereche de antonime e alcătuită din cuvinte care sunt **aceeași parte de vorbire**.']},
                {'t': 'atentie', 'p': ['*bucurie* (substantiv) și *tristă* (adjectiv) nu formează o pereche de antonime. Corect: *bucurie – tristețe* sau *bucuroasă – tristă*.']},
            ]),
            ('3. PE SCURT', [
                {'t': 'tabel', 'cap': ['', 'Sinonimele', 'Antonimele'], 'lat': [0.3, 0.35, 0.35], 'al': ['l', 'c', 'c'],
                 'r': [['forma', 'diferită', 'diferită'],
                       ['sensul', 'asemănător sau identic', 'opus'],
                       ['partea de vorbire', 'aceeași', 'aceeași']]},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-12',
        'titlu': 'Câmpul lexical',
        'sub': SUB.format(n=12, pp='pp. 30-31'),
        'sursa': 'Sursa: Manual Art 5, pp. 30-31, rubricile Repere.' + CREATE,
        'sect': [
            ('1. CE ESTE CÂMPUL LEXICAL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Câmpul lexical** cuprinde toate cuvintele care se raportează la **aceeași idee**, putând avea formă complet diferită sau apropiată.']},
                {'t': 'text', 'p': ['Cuvintele aparțin aceluiași domeniu: au **trăsături de sens comune**, dar și trăsături de sens care le deosebesc.']},
            ]),
            ('2. EXEMPLU: RELAȚIILE DE RUDENIE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'rudenie naturală', 'col': 't', 'p': ['*mamă, tată, fiu, fiică, frate, soră, bunic, bunică, nepot, nepoată, unchi, mătușă, văr, verișoară*']},
                    {'titlu': 'rudenie socială', 'col': 'm', 'p': ['*soț, soție, socru, soacră, ginere, noră*']},
                ]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Câmpul se poate lărgi cu cuvinte formate de la acestea (*bunicuță*) sau cu expresii (*frate vitreg*).']},
            ]),
            ('3. REGULI', [
                {'t': 'text', 'p': ['• În câmpul lexical al unui cuvânt intră și **sinonimele** acestuia și **expresiile** care îl conțin.',
                                    '• Câmpul lexical cuprinde cuvinte din **aceeași parte de vorbire** (substantive, adjective, verbe).',
                                    '• Un cuvânt cu mai multe sensuri poate intra în **câmpuri lexicale diferite**.']},
                {'t': 'nota', 'titlu': 'Exemplu:', 'p': ['*amar* intră în câmpul lexical al **gustului**, dar și în cel al **sentimentelor**: *Am mult amar în suflet.*']},
            ]),
            ('4. ALTE CÂMPURI LEXICALE', [
                {'t': 'tabel', 'cap': ['Câmpul lexical', 'Cuvinte'], 'lat': [0.3, 0.7],
                 'r': [['școala', '*elev, profesor, catalog, bancă, pauză, teză, oră*'],
                       ['vremea', '*ploaie, vânt, ninsoare, soare, ceață, furtună*'],
                       ['culorile', '*roșu, galben, verde, albastru, mov, portocaliu*']]},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-13',
        'titlu': 'Tipurile de sunete',
        'sub': SUB.format(n=13, pp='pp. 32-33'),
        'sursa': 'Sursa: Manual Art 5, pp. 32-33, rubricile Repere; modelul ȘCOALĂ e din manual.' + CREATE,
        'sect': [
            ('1. SUNETELE LIMBII ROMÂNE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'vocalele', 'col': 't',
                     'p': ['se pronunță **neînsoțite** de sunete de sprijin și pot forma **singure o silabă**', '**[a], [ă], [î], [e], [i], [o], [u]**']},
                    {'titlu': 'consoanele', 'col': 'm',
                     'p': ['**nu pot forma singure** o silabă; se pronunță cu ajutorul unei vocale', '[b], [k], [d], [f], [g], [h], [j], [l], [m], [n], [p], [r], [s], [ș], [t], [ț], [v], [z]']},
                    {'titlu': 'semivocalele', 'col': 'a',
                     'p': ['seamănă cu vocalele, dar **nu pot forma singure** o silabă', 'se notează cu căciuliță: **[ĕ], [ĭ], [ŏ], [ŭ]**']},
                ]},
                {'t': 'text', 'p': ['• O silabă conține **o singură vocală**.', '• Sunetele **[a], [ă], [î]** sunt întotdeauna vocale.']},
                {'t': 'tabel', 'cap': ['Litere', 'Ș', 'C', 'O', 'A', 'L', 'Ă'], 'lat': [0.28] + [0.12] * 6, 'al': ['l'] + ['c'] * 6,
                 'r': [['Felul sunetelor', 'C', 'C', 'S', 'V', 'C', 'V']]},
                {'t': 'text', 's': 13.5, 'c': 'g', 'p': ['V = vocală, C = consoană, S = semivocală']},
            ]),
            ('2. I „ȘOPTIT”', [
                {'t': 'text', 'p': ['La sfârșitul unui cuvânt poate apărea un **i „șoptit”**. Nu îl confund cu vocala sau cu semivocala:']},
                {'t': 'tabel', 'cap': ['Cuvântul', 'i de la final este'], 'lat': [0.5, 0.5], 'al': ['c', 'c'],
                 'r': [['*pomi*', 'i „șoptit”'], ['*metri*', 'vocală'], ['*noi*', 'semivocală']]},
            ]),
            ('3. LITERA ȘI ALFABETUL', [
                {'t': 'text', 'p': ['**Litera** este semnul grafic al unui sunet. Limba română folosește **alfabetul latin**, cu **31 de litere**:']},
                {'t': 'text', 's': 15.5, 'p': ['*a, ă, â, b, c, d, e, f, g, h, i, î, j, k, l, m, n, o, p, q, r, s, ș, t, ț, u, v, w, x, y, z*']},
                {'t': 'atentie', 'p': ['Folosirea **diacriticelor** (ă, â, î, ș, ț) este obligatorie: *tara – țara*, *sal – șal* sunt cuvinte diferite.']},
            ]),
            ('4. CORESPONDENȚA SUNET – LITERĂ', [
                {'t': 'text', 'p': ['În general, o literă transcrie un singur sunet. **Excepții:**']},
                {'t': 'tabel', 'cap': ['Situația', 'Exemple'], 'lat': [0.5, 0.5],
                 'r': [['o literă → mai multe sunete', '**x** = [ks] sau [gz]'],
                       ['un sunet → mai multe litere', '[î] = **î**, **â**; [k] = **c**, **q**, **k**'],
                       ['*ce, ci, ge, gi, che, chi, ghe, ghi* = **un sunet**', 'când în silabă urmează o vocală: *cea-ră*'],
                       ['*ce, ci, ge, gi, che, chi, ghe, ghi* = **două sunete**', 'când urmează o consoană (*cen-tu-ră*) sau formează singure silaba (*ci-reș*)']]},
                {'t': 'atentie', 'titlu': 'Excepții:', 'p': ['*a-so-ci-at, ghi-o-cel, li-ce-an, re-gi-u-ne*: grupul e înaintea unei vocale, dar notează două sunete.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-14',
        'titlu': 'Silaba. Accentul',
        'sub': SUB.format(n=14, pp='pp. 34-35'),
        'sursa': 'Sursa: Manual Art 5, pp. 34-35, rubricile Repere.' + CREATE,
        'sect': [
            ('1. SILABA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Silaba** este formată fie dintr-o vocală, fie dintr-un grup de sunete care conține o vocală și se pronunță cu **un singur efort expirator**.']},
                {'t': 'text', 'p': ['Cuvântul poate avea una, două sau mai multe silabe:']},
                {'t': 'tabel', 'cap': ['Cuvântul', 'Despărțit în silabe', 'Număr de silabe'], 'lat': [0.33, 0.37, 0.30], 'al': ['l', 'c', 'c'],
                 'r': [['*o*', 'o', '1'], ['*carte*', 'car-te', '2'], ['*fereastră*', 'fe-reas-tră', '3'], ['*prietenie*', 'pri-e-te-ni-e', '5']]},
                {'t': 'nota', 'titlu': 'La capăt de rând:', 'p': ['Cuvintele se despart cu **liniuța de despărțire**, pusă o singură dată, la capăt de rând, fără a se repeta la început de rând.']},
            ]),
            ('2. ACCENTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Accentul** reprezintă pronunțarea **mai intensă** a unei silabe dintr-un cuvânt.']},
                {'t': 'text', 'p': ['• În limba română, accentul **nu are loc fix**, pe prima sau pe ultima silabă.',
                                    '• Accentul poate **diferenția sensul** cuvintelor scrise la fel: *ácele* (de cusut) – *acéle* (fete).',
                                    '• În poezie se admit și alte accentuări, pentru sonoritatea versurilor: *puréci* (Marin Sorescu).']},
            ]),
            ('3. CUM SE MARCHEAZĂ ACCENTUL', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'în DOOM3', 'col': 'm', 'p': ['vocala accentuată e **subliniată**: *zen_i_t*']},
                    {'titlu': 'în alte dicționare și texte', 'col': 't', 'p': ['cu **accent ascuțit**: *puréci*']},
                ]},
                {'t': 'text', 'p': ['**DOOM3** (2021) este dicționarul normativ care arată cum se pronunță și cum se scriu corect cuvintele.']},
                {'t': 'nota', 'titlu': 'Accentuări corecte, după DOOM3:', 'p': ['*ántic, arípă, avaríe, caractér, gíngaș, profesór, tráfic*']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-16',
        'titlu': 'Etapele scrierii. Redactarea și revizuirea textului',
        'sub': SUB.format(n=16, pp='pp. 36-37'),
        'sursa': 'Sursa: Manual Art 5, pp. 36-37, rubricile Repere, modelul de pagină și lista de control.',
        'sect': [
            ('1. CELE CINCI ETAPE ALE SCRIERII', [
                {'t': 'tabel', 'cap': ['Etapa', 'Ce fac'], 'lat': [0.24, 0.76],
                 'r': [['**1. Pregătirea**', 'aleg subiectul, publicul și scopul; răspund la *cine? ce? când? unde? de ce? cum?*; fac planul și strâng informațiile'],
                       ['**2. Ciorna**', 'scriu o primă variantă și dezvolt fiecare idee'],
                       ['**3. Revizuirea**', 'verific dacă ideile sunt clare, exprimarea corectă, paragrafele marcate prin alineat; șterg ce nu e relevant'],
                       ['**4. Editarea**', 'așez textul în pagină (titlul sus, la mijloc; fiecare paragraf cu alineat), rescriu lizibil, verific punctuația'],
                       ['**5. Publicarea**', 'împărtășesc textul: panoul clasei, revista școlii, citire din scaunul autorului']]},
                {'t': 'text', 's': 13.5, 'c': 'g', 'p': ['Mă pot întoarce oricând la o etapă anterioară.']},
            ]),
            ('2. RELATAREA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Relatarea** este un text în care se prezintă detaliat un eveniment la care a participat cel care îl povestește.']},
            ]),
            ('3. PĂRȚILE UNUI TEXT', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'introducerea', 'col': 't', 'p': ['spune despre ce va fi vorba (tema)', 'e **scurtă** și stârnește interesul']},
                    {'titlu': 'cuprinsul', 'col': 'm', 'p': ['detaliază ideile, dă explicații', 'ocupă **cea mai mare parte** a textului']},
                    {'titlu': 'încheierea', 'col': 'a', 'p': ['formulează o idee generală despre temă', 'e **scurtă**']},
                ]},
                {'t': 'nota', 'titlu': 'Paragraful', 'p': ['este un fragment de text despărțit de rest prin **alineat nou**. Într-un paragraf dezvolt **o singură idee**.']},
            ]),
            ('4. PAGINA DE CAIET', [
                {'t': 'tabel', 'cap': ['Partea', 'Cum o scriu'], 'lat': [0.3, 0.7],
                 'r': [['TITLU', 'sus, la mijlocul rândului'],
                       ['INTRODUCERE', 'un paragraf scurt'],
                       ['CUPRINS', '*Mai întâi, … Apoi, … În cele din urmă, …*'],
                       ['ÎNCHEIERE', 'un paragraf scurt']]},
                {'t': 'text', 'p': ['Cuvinte care păstrează ordinea în timp: *mai întâi, apoi, după aceea, mai târziu, în cele din urmă*.']},
            ]),
            ('5. LISTA DE CONTROL', [
                {'t': 'text', 'p': ['• Textul are introducere, cuprins și încheiere, marcate prin paragrafe diferite.',
                                    '• Introducerea este captivantă.',
                                    '• Acțiunile se înlănțuie logic.',
                                    '• Textul este așezat corect în pagină.',
                                    '• Sunt respectate regulile de ortografie și de punctuație.']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-17',
        'titlu': 'Recapitulare. Cum citesc un text nou',
        'sub': SUB.format(n=17, pp='pp. 13, 15, 17, 38-39'),
        'sursa': 'Sursa: Manual Art 5, pp. 13, 15 și 17 (Repere) și pp. 38-39 (cerințele recapitulării).',
        'sect': [
            ('1. PAȘII PENTRU UN TEXT CITIT PRIMA DATĂ', [
                {'t': 'tabel', 'cap': ['Pasul', 'Ce fac'], 'lat': [0.12, 0.88], 'al': ['c', 'l'],
                 'r': [['1', 'Delimitez textul în **fragmente logice**.'],
                       ['2', 'Găsesc **cuvântul-cheie** al fiecărui fragment.'],
                       ['3', 'Formulez **ideile principale** și scriu **planul simplu de idei**.'],
                       ['4', 'Stabilesc **tema**, ideea centrală a textului.'],
                       ['5', 'Decid dacă textul e **literar** sau **nonliterar**.']]},
            ]),
            ('2. TEXTUL LITERAR ȘI TEXTUL NONLITERAR', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'textul literar', 'col': 't',
                     'p': ['prezintă o **lume imaginară**, mai apropiată sau mai îndepărtată de lumea reală', 'transmite idei, dar mai ales **emoții și sentimente**', 'folosește un limbaj **expresiv**']},
                    {'titlu': 'textul nonliterar', 'col': 'm',
                     'p': ['se referă la **aspecte din realitate**', 'scopul: să **informeze**, să **convingă** sau să **amuze**', 'ex.: afișul, invitația, articolul de ziar, rețeta, instrucțiunile, eticheta, articolul de dicționar']},
                ]},
            ]),
            ('3. ÎNTREBĂRILE PENTRU UN TEXT CARE RELATEAZĂ O ÎNTÂMPLARE', [
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'Cine?', 'col': 'n', 'p': ['Cine sunt personajele?']},
                    {'titlu': 'Ce?', 'col': 'n', 'p': ['Ce fac personajele?']},
                    {'titlu': 'Când?', 'col': 'n', 'p': ['Când se petrec evenimentele?']},
                    {'titlu': 'Unde?', 'col': 'n', 'p': ['Unde se petrec evenimentele?']},
                ]},
            ]),
            ('4. DEFINIȚII DE REȚINUT', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin'], 'lat': [0.3, 0.7],
                 'r': [['cuvântul-cheie', 'substantiv sau grup de cuvinte care numește aspectul cel mai important dintr-un fragment'],
                       ['ideea principală', 'comunicarea care transmite informația esențială dintr-un fragment'],
                       ['planul simplu de idei', 'toate ideile principale, în ordinea apariției lor în text'],
                       ['tema', 'ideea centrală a textului, numită printr-un substantiv']]},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-18',
        'titlu': 'Recapitulare. Limba română în Unitatea I',
        'sub': SUB.format(n=18, pp='pp. 24-37'),
        'sursa': 'Sursa: Manual Art 5, pp. 24-37, rubricile Repere ale lecțiilor 9-16.' + CREATE,
        'sect': [
            ('1. PROPOZIȚIA', [
                {'t': 'text', 'p': ['Propoziția = o comunicare cu **un singur predicat**. Subiectul se subliniază cu două linii, predicatul cu o linie: *__Ilinca__ _citește_.*']},
                {'t': 'tabel', 'cap': ['Criteriul', 'Tipuri', 'Exemplu'], 'lat': [0.28, 0.24, 0.48],
                 'r': [['după alcătuire', 'simplă / dezvoltată', '*Ilinca citește. / Ilinca citește o carte.*'],
                       ['după aspectul predicatului', 'afirmativă / negativă', '*Cățelul a lătrat. / Cățelul nu a lătrat.*']]},
            ]),
            ('2. VOCABULARUL', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.2, 0.48, 0.32],
                 'r': [['cuvântul', 'are **sens** și **formă** (sunete); sensul se stabilește în context', '*liliac* (arbust / animal)'],
                       ['sinonimele', 'formă diferită, sens asemănător sau identic', '*veselă – voioasă*'],
                       ['antonimele', 'formă diferită, sens opus', '*mare – mic*'],
                       ['câmpul lexical', 'cuvinte care se raportează la aceeași idee', '*mamă, tată, frate, bunic*'],
                       ['dicționarul', 'cuvinte în ordine alfabetică; DEX explică sensurile', '*vocală, vocalic, vocaliza*']]},
            ]),
            ('3. SUNETE, LITERE, SILABE', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.2, 0.48, 0.32],
                 'r': [['vocalele', 'pot forma singure o silabă', '[a], [ă], [î], [e], [i], [o], [u]'],
                       ['consoanele', 'se pronunță cu ajutorul unei vocale', '[b], [d], [m], [s]…'],
                       ['semivocalele', 'seamănă cu vocalele, dar nu formează singure o silabă', '[ĕ], [ĭ], [ŏ], [ŭ]'],
                       ['silaba', 'o vocală sau un grup de sunete care conține o vocală', '*car-te*'],
                       ['accentul', 'pronunțarea mai intensă a unei silabe', '*ácele – acéle*']]},
            ]),
            ('4. SCRIEREA', [
                {'t': 'text', 'p': ['Etapele scrierii: **pregătirea → ciorna → revizuirea → editarea → publicarea**.',
                                    'Textul are introducere, cuprins și încheiere; fiecare idee nouă începe un paragraf nou.']},
            ]),
        ],
    },
]
