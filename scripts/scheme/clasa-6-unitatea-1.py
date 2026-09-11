# Scheme-notițe, clasa a VI-a, Unitatea I „Acasă, în familie, printre cărți”.
# Conținutul vine din rubricile Repere ale Manualului Art 6, pp. 13-35;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-6-unitatea-1.py

SUB = 'Clasa a VI-a · Unitatea I, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-6/unitatea-1/lectia-2',
        'titlu': 'Acțiunea, timpul și spațiul într-o narațiune',
        'sub': SUB.format(n=2, pp='p. 13'),
        'sursa': 'Sursa: Manual Art 6, p. 13, rubrica Repere; textul de bază este „Un păianjen care se crede Spiderman” de Adina Popescu.' + CREATE,
        'sect': [
            ('1. TEXTUL NARATIV', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul narativ** prezintă desfășurarea unor întâmplări în **ordine logică și temporală**.']},
            ]),
            ('2. SECVENȚELE NARATIVE', [
                {'t': 'text', 'p': ['Textul se împarte în **secvențe** distincte, ca **scenele** unui film. O secvență nouă începe când se schimbă:']},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'spațiul', 'col': 't', 'p': ['locul în care se petrece acțiunea']},
                    {'titlu': 'timpul', 'col': 'm', 'p': ['momentul în care se petrece acțiunea']},
                    {'titlu': 'personajele', 'col': 'a', 'p': ['cine are rolul cel mai important în prim-plan']},
                ]},
            ]),
            ('3. INDICII DE TIMP ȘI DE SPAȚIU', [
                {'t': 'text', 'p': ['• **Indicii de timp** trimit, de obicei, la **acțiunea din prim-plan**, adică la firul principal al narațiunii.',
                                    '• Uneori se referă la alte momente, **înainte** (amintiri, rememorări) sau **după** acțiunea din prim-plan.',
                                    '• **Indicii de spațiu** arată locurile; îi leg de personajele care apar acolo.']},
                {'t': 'tabel', 'cap': ['Indici de timp', 'Indici de spațiu'], 'lat': [0.5, 0.5],
                 'r': [['*într-o seară de toamnă, a doua zi, atunci, cu un an în urmă*', '*în bucătărie, pe tavan, după dulap, în curte*']]},
            ]),
            ('4. CUM LUCREZ CU UN TEXT NARATIV', [
                {'t': 'text', 'p': ['1. împart textul în **secvențe**;',
                                    '2. caut **cuvintele-cheie** din fiecare secvență;',
                                    '3. formulez **ideea principală** a fiecărei secvențe;',
                                    '4. le ordonez: obțin **planul simplu de idei**.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-6/unitatea-1/lectia-3',
        'titlu': 'Autorul, naratorul, personajul',
        'sub': SUB.format(n=3, pp='pp. 14-15'),
        'sursa': 'Sursa: Manual Art 6, pp. 14-15, rubrica Repere, schema celor două lumi și schema profilului de personaj.',
        'sect': [
            ('1. CELE DOUĂ LUMI', [
                {'t': 'tabel', 'cap': ['Lumea reală', 'Lumea inventată (ficțiunea)', 'Lumea reală'], 'lat': [0.3, 0.4, 0.3], 'al': ['c', 'c', 'c'],
                 'r': [['**AUTORUL**', '**NARATORUL, PERSONAJELE**', '**CITITORUL**'],
                       ['', 'în textul narativ', '']]},
                {'t': 'text', 'p': ['• **Autorul** este o persoană reală, cu identitate concretă, care construiește o lume imaginară.',
                                    '• **Naratorul** și **personajele** nu există în realitate: trăiesc doar în paginile cărții, în **ficțiune**.']},
                {'t': 'atentie', 'p': ['Autorul și naratorul **nu se confundă**: autorul face parte din lumea reală, naratorul aparține lumii inventate.']},
            ]),
            ('2. NARATORUL', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'la persoana a III-a', 'col': 't', 'p': ['povestește ce fac alții', '*El a deschis ușa...*']},
                    {'titlu': 'la persoana I', 'col': 'm', 'p': ['este **și personaj**', 'relatează din **perspectiva sa**: fapte, gânduri, sentimente', '*Eu am deschis ușa...*']},
                ]},
            ]),
            ('3. PERSONAJELE', [
                {'t': 'text', 'p': ['**Personajele** îndeplinesc acțiunile și au contribuții diferite la întâmplări. Pot fi **ființe umane**, **ființe necuvântătoare** sau **obiecte**.']},
                {'t': 'nota', 'titlu': 'Profilul unui personaj:', 'p': ['ce face și ce spune? · ce simte? · ce gândesc alte personaje despre el? · care este părerea mea despre el?']},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-6/unitatea-1/lectia-6',
        'titlu': 'Descrierea în proză',
        'sub': SUB.format(n=6, pp='p. 19'),
        'sursa': 'Sursa: Manual Art 6, p. 19, rubrica Repere și schemele din Explorare; textul de bază este „Indescriptibil” de Simona Popescu.' + CREATE,
        'sect': [
            ('1. TEXTUL DESCRIPTIV LITERAR', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul descriptiv literar** prezintă **sugestiv** un obiect, o ființă sau un loc, ca să-l ajute pe cititor să și-l **imagineze**.']},
            ]),
            ('2. CE CUPRINDE O DESCRIERE', [
                {'t': 'tabel', 'cap': ['Elementul', 'Ce notez'], 'lat': [0.3, 0.7],
                 'r': [['**denumirea**', 'ce descriu (obiect, ființă, loc)'],
                       ['**elementele componente**', 'din ce părți e alcătuit'],
                       ['**proprietățile**', 'cum sunt: formă, culoare, mărime, material'],
                       ['**impresiile**', 'sentimente, emoții, gânduri ale celui care descrie']]},
            ]),
            ('3. DESCRIEREA CU TOATE SIMȚURILE', [
                {'t': 'carduri', 'n': 5, 'c': [
                    {'titlu': 'văz', 'col': 't', 'p': ['Arată ca...']},
                    {'titlu': 'auz', 'col': 'm', 'p': ['Sună ca...']},
                    {'titlu': 'miros', 'col': 'a', 'p': ['Miroase ca...']},
                    {'titlu': 'gust', 'col': 'r', 'p': ['Are gust de...']},
                    {'titlu': 'pipăit', 'col': 'n', 'p': ['Se simte ca...']},
                ]},
                {'t': 'nota', 'titlu': 'Exemplu:', 'p': ['*Caietul meu de lectură are coperte verzi, tari, cu colțurile tocite. Miroase a lipici și a creioane colorate, iar paginile foșnesc ca frunzele uscate. Când îl deschid, simt că intru într-o casă numai a mea.*']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Observ: proprietăți (verzi, tari), percepții (miroase, foșnesc), o comparație și o impresie personală.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-6/unitatea-1/lectia-13',
        'titlu': 'Cuvântul. Sinonimele și antonimele',
        'sub': SUB.format(n=13, pp='pp. 28-29'),
        'sursa': 'Sursa: Manual Art 6, pp. 28-29, rubricile Repere.' + CREATE,
        'sect': [
            ('1. CUVÂNTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Cuvântul** este unitatea de bază a vocabularului.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'sensul (înțelesul)', 'col': 't', 'p': ['**conținutul** cuvântului']},
                    {'titlu': 'sunetele (învelișul sonor)', 'col': 'm', 'p': ['**forma** cuvântului']},
                ]},
                {'t': 'text', 'p': ['• același sens, formă diferită: *bucuros – vesel*;',
                                    '• aceeași formă, sens diferit: *ban* (monedă) / *ban* (conducător al unui ținut în Evul Mediu).']},
                {'t': 'atentie', 'titlu': 'Contextul', 'p': ['Sensul unui cuvânt se stabilește în **context**: o îmbinare de cuvinte, un enunț sau un text în care apare cuvântul.']},
            ]),
            ('2. SINONIMELE ȘI ANTONIMELE', [
                {'t': 'tabel', 'cap': ['', 'Sinonimele', 'Antonimele'], 'lat': [0.2, 0.4, 0.4],
                 'r': [['forma', 'diferită', 'diferită'],
                       ['sensul', '**asemănător** sau identic', '**diametral opus**'],
                       ['exemple', '*frumos – arătos, a începe – a porni*', '*cald – rece, a urca – a coborî*']]},
                {'t': 'text', 'p': ['• Sinonimele și antonimele sunt **aceeași parte de vorbire**.',
                                    '• Aleg sinonimul sau antonimul potrivit **după context**.']},
            ]),
            ('3. SE STABILESC ÎNTRE', [
                {'t': 'tabel', 'cap': ['', 'Sinonime', 'Antonime'], 'lat': [0.3, 0.35, 0.35],
                 'r': [['două cuvinte', '*vesel – bucuros*', '*harnic – leneș*'],
                       ['o expresie și un cuvânt', '*a-și pune pofta-n cui – a renunța*', '*cu capul în nori – atent*'],
                       ['două expresii', '*a bate câmpii – a vorbi vrute și nevrute*', '*cu capul în nori – cu picioarele pe pământ*']]},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-6/unitatea-1/lectia-14',
        'titlu': 'Sensurile cuvintelor',
        'sub': SUB.format(n=14, pp='pp. 30-31'),
        'sursa': 'Sursa: Manual Art 6, pp. 30-31, rubrica Repere și articolul de dicționar din Aplicații.',
        'sect': [
            ('1. SENSUL PROPRIU', [
                {'t': 'text', 'p': ['**Sensul propriu** este sensul comun, obișnuit, cunoscut și folosit de toți vorbitorii, legat de un aspect din realitate.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'sens propriu de bază', 'col': 't', 'p': ['sensul pe care cuvântul îl păstrează în orice context', '*Și-a scrântit* **piciorul**.']},
                    {'titlu': 'sens propriu secundar', 'col': 'm', 'p': ['sens căpătat într-un context, pe baza unei **asemănări** cu obiectul denumit de sensul de bază', '**Piciorul** *paharului s-a spart.*']},
                ]},
            ]),
            ('2. SENSUL FIGURAT', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Sensul figurat** este sensul **neobișnuit**, folosit cu valoare **expresivă**, pe baza unei **asemănări subînțelese**.']},
                {'t': 'text', 'p': ['*Părinții sunt* **picioarele** *de sprijin ale copiilor.*']},
            ]),
            ('3. CUM MĂ AJUTĂ DICȚIONARUL', [
                {'t': 'text', 'p': ['• Sensurile unui cuvânt sunt **numerotate** în articolul de dicționar (DEX): 1, 2, 3...',
                                    '• Sensul figurat e marcat cu **Fig.**',
                                    '• Citesc enunțul, apoi aleg sensul care se potrivește **în context**.']},
                {'t': 'nota', 'titlu': 'Cum decid:', 'p': ['denumește ceva concret, obișnuit? → sens propriu de bază · seamănă ca formă, funcție sau poziție cu obiectul de bază? → sens propriu secundar · e o imagine expresivă, neobișnuită? → sens figurat.']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-6/unitatea-1/lectia-16',
        'titlu': 'Diftongul, triftongul, hiatul',
        'sub': SUB.format(n=16, pp='pp. 34-35'),
        'sursa': 'Sursa: Manual Art 6, pp. 34-35, rubricile Repere.',
        'sect': [
            ('1. DIFTONGUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Diftongul** este un grup format dintr-o **vocală** și o **semivocală**, pronunțate **în aceeași silabă**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'urcător (ascendent)', 'col': 't', 'p': ['semivocală + vocală', '*floa-re*: [ŏa]']},
                    {'titlu': 'coborâtor (descendent)', 'col': 'm', 'p': ['vocală + semivocală', '*mâi-ne*: [âĭ]']},
                ]},
            ]),
            ('2. TRIFTONGUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Triftongul** este un grup format dintr-o **vocală** și **două semivocale**, pronunțate **în aceeași silabă**: *cre-ioa-ne* [ĭoa].']},
            ]),
            ('3. HIATUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Hiatul** apare între **două vocale alăturate** ale aceluiași cuvânt, pronunțate **în silabe diferite**: *ca-i-să*.']},
            ]),
            ('4. ATENȚIE LA', [
                {'t': 'tabel', 'cap': ['Situația', 'Ce se întâmplă'], 'lat': [0.45, 0.55],
                 'r': [['*ce, ci, ge, gi, che, chi, ghe, ghi* înaintea unei vocale', 'de obicei, **nu** formează diftongi: *ceas* = [č] + [a] + [s]; *gheață*: [g’] + [a]'],
                       ['*strângeau*', 'în *-geau*: consoana [ğ] + diftongul [aŭ]'],
                       ['*este, e, eram, el, ele*', 'se pronunță cu diftongul **[ĭe]**'],
                       ['*eu, ei*', 'se pronunță cu triftongii **[ĭeŭ], [ĭeĭ]**'],
                       ['cuvinte legate prin cratimă', '*mi-a* formează un diftong, *ne-au* un triftong']]},
                {'t': 'nota', 'titlu': 'Regula de lucru:', 'p': ['întâi despart cuvântul **în silabe**, apoi caut vocalele și semivocalele din fiecare silabă.']},
            ]),
        ],
    },
]
