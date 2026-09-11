# Scheme-notițe, clasa a V-a, Unitatea VI „Din carte spre departe”. Conținutul
# vine din rubricile Repere ale Manualului Art 5, pp. 171-190; exemplele noi
# sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-6.py

SUB = 'Clasa a V-a · Unitatea VI, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-2',
        'titlu': 'Trăsături ale textului narativ nonliterar',
        'sub': SUB.format(n=2, pp='p. 171'),
        'sursa': 'Sursa: Manual Art 5, p. 171, rubrica Repere și modelul de tabel; exemplele sunt din jurnalul de călătorie din manual.',
        'sect': [
            ('1. TEXTUL NARATIV NONLITERAR', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul narativ nonliterar** prezintă, ca și cel literar, o succesiune de întâmplări în ordine logică și temporală, dar întâmplările **s-au petrecut în realitate**, într-un anumit timp și spațiu.']},
                {'t': 'text', 'p': ['Acțiunea e făcută de **persoane concrete**, care există în realitate. Ele se numesc **participanți** și nu trebuie confundate cu personajele literare.']},
            ]),
            ('2. LITERAR SAU NONLITERAR?', [
                {'t': 'tabel', 'cap': ['', 'Narativ literar', 'Narativ nonliterar'], 'lat': [0.22, 0.39, 0.39],
                 'r': [['întâmplările', 'imaginate de autor', 'petrecute în realitate'],
                       ['cine acționează', '**personaje**', '**participanți**, persoane reale'],
                       ['timpul și locul', 'pot fi imaginare', 'reale, pot fi verificate'],
                       ['exemple', 'basmul, povestirea', 'jurnalul, reportajul, articolul, interviul, scrisoarea, raportul, textul științific']]},
            ]),
            ('3. INDICII DE TIMP ȘI DE SPAȚIU ÎNTR-UN JURNAL', [
                {'t': 'tabel', 'cap': ['Date', 'Zile ale săptămânii', 'Momente ale zilei', 'Alți indici de timp'], 'lat': [0.25] * 4, 'al': ['c'] * 4,
                 'r': [['*8 mai*', '*duminică*', '*dimineața*', '*anul trecut*']]},
                {'t': 'tabel', 'cap': ['Localități', 'Instituții', 'Alte locuri'], 'lat': [1 / 3] * 3, 'al': ['c'] * 3,
                 'r': [['*Brașov*', '*Muzeul Tiparului și al Cărții Vechi Românești*', '*Turnul Chindiei*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Locurile dintr-un text nonliterar pot fi verificate pe hartă sau pe internet.']},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-9',
        'titlu': 'Acte de limbaj: a explica, a recomanda, a afirma',
        'sub': SUB.format(n=9, pp='pp. 183-184'),
        'sursa': 'Sursa: Manual Art 5, pp. 183-184, rubrica Repere, dialogul și tabelul de itinerarii.' + CREATE,
        'sect': [
            ('1. A EXPLICA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**A explica** înseamnă a oferi lămuriri, ca un fapt sau o idee să fie înțelese mai ușor.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'De ce?', 'col': 't', 'p': ['lămuresc **cauza** unui fenomen, a unei acțiuni']},
                    {'titlu': 'Cum?', 'col': 'm', 'p': ['dau **instrucțiuni**: cum folosesc un aparat, cum prepar o prăjitură, cum ajung undeva']},
                ]},
                {'t': 'tabel', 'cap': ['Cuvinte pentru cauză', 'Cuvinte pentru consecință'], 'lat': [0.5, 0.5],
                 'r': [['*pentru că, deoarece, căci, fiindcă, având în vedere, dat fiind că, din moment ce*', '*prin urmare, deci, în consecință, ca urmare, de aceea*']]},
            ]),
            ('2. A RECOMANDA ȘI A AFIRMA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'a recomanda', 'col': 'a', 'p': ['îl îndemn pe celălalt să acționeze într-un fel, îi dau un sfat', '*Îți recomand să… Te sfătuiesc să… Îți propun să…*']},
                    {'titlu': 'a afirma', 'col': 'n', 'p': ['spun că un fapt există sau că ceva e adevărat', '*Pământul este rotund. Recunosc că am greșit.*']},
                ]},
            ]),
            ('3. CUM EXPLIC UN DRUM', [
                {'t': 'tabel', 'cap': ['Informația', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['punctul de plecare', '*de la biserică*'],
                       ['direcția', '*mergi drept, o iei la dreapta, spre nord*'],
                       ['reperele', '*treci pe lângă benzinărie, până la prima intersecție*'],
                       ['distanța și durata', '*aproape doi kilometri, o jumătate de oră*'],
                       ['mijlocul de transport', '*pe jos, cu autobuzul, cu bicicleta*'],
                       ['punctul de sosire', '*casa din spatele spitalului*']]},
                {'t': 'atentie', 'p': ['La final adaug o **recomandare de siguranță**: *Îți recomand să fii atentă când traversezi!*']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-11',
        'titlu': 'Enunțul',
        'sub': SUB.format(n=11, pp='p. 185'),
        'sursa': 'Sursa: Manual Art 5, p. 185, rubrica Repere și dialogul din Pentru început.',
        'sect': [
            ('1. CE ESTE ENUNȚUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Enunțul** este o unitate de bază a comunicării, construită, de obicei, în jurul unui **predicat**.']},
            ]),
            ('2. ENUNȚUL SIMPLU ȘI ENUNȚUL COMPLEX', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'simplu', 'col': 't', 'p': ['alcătuit dintr-o **singură propoziție**', '*Cărțile tipărite nu vor dispărea.*']},
                    {'titlu': 'complex', 'col': 'm', 'p': ['alcătuit din **două sau mai multe propoziții**', '*Avem o istorie veche, am supraviețuit multor pericole.*']},
                ]},
                {'t': 'nota', 'titlu': 'Cum număr propozițiile:', 'p': ['câte **predicate**, atâtea **propoziții**. În al doilea exemplu sunt două predicate: *avem*, *am supraviețuit*, deci două propoziții.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-12',
        'titlu': 'Tipuri de enunț',
        'sub': SUB.format(n=12, pp='pp. 185-186'),
        'sursa': 'Sursa: Manual Art 5, pp. 185-186, rubrica Repere.' + CREATE,
        'sect': [
            ('1. ENUNȚURILE DUPĂ SCOPUL COMUNICĂRII', [
                {'t': 'tabel', 'cap': ['Enunțul', 'Ce comunică', 'Semnul de la final', 'Exemplu'], 'lat': [0.17, 0.33, 0.2, 0.3],
                 'r': [['**asertiv**', 'o informație despre o stare de lucruri', 'punctul (.); la o întrerupere voită, punctele de suspensie (…)', '*Afară plouă.*'],
                       ['**interogativ**', 'cere o informație', 'semnul întrebării (?)', '*Ai redactat compunerea?*'],
                       ['**imperativ**', 'un ordin, o solicitare, o rugăminte', 'semnul exclamării (!)', '*Adu-mi cartea de pe birou!*'],
                       ['**exclamativ**', 'emoții, sentimente', 'semnul exclamării (!)', '*Ce idee bună ai avut!*']]},
            ]),
            ('2. DIN ASERTIV ÎN ALTE TIPURI', [
                {'t': 'tabel', 'cap': ['Asertiv', 'Interogativ', 'Exclamativ'], 'lat': [1 / 3] * 3,
                 'r': [['*Filmul a fost lung.*', '*Filmul a fost lung?*', '*Ce lung a fost filmul!*']]},
            ]),
            ('3. ATENȚIE LA MESAJELE SCRISE', [
                {'t': 'atentie', 'p': ['Fără semnul de la final, nu știu dacă *Vii mâine* este o informație sau o întrebare. Semnele de punctuație arată **intenția** celui care scrie.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-13',
        'titlu': 'Prezentarea textului: desene, grafice, fotografii, scheme',
        'sub': SUB.format(n=13, pp='pp. 187-188'),
        'sursa': 'Sursa: Manual Art 5, pp. 187-188, rubrica Repere și sarcinile de lucru.',
        'sect': [
            ('1. TEXTUL ÎNSOȚIT DE IMAGINI', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Într-o compunere narativă sau descriptivă se pot integra, prin **colaj**, desene, fotografii, grafice, scheme.']},
                {'t': 'text', 'p': ['Astfel cititorul **vede** locurile, obiceiurile, peisajele, monumentele, oamenii despre care vorbește textul. Pagina dă impresia unui fapt **viu, trăit**.']},
            ]),
            ('2. CE POT ADĂUGA', [
                {'t': 'tabel', 'cap': ['Materialul grafic', 'Pentru ce e bun'], 'lat': [0.35, 0.65],
                 'r': [['fotografia, desenul', 'arată un peisaj, o clădire, un obiect'],
                       ['harta', 'arată unde se află localitățile'],
                       ['schema unui drum', 'arată traseul, cu săgeți'],
                       ['planul unei clădiri', 'arată cum sunt așezate încăperile, văzute de sus'],
                       ['orarul', 'arată ce se face și când']]},
            ]),
            ('3. REGULA DE AUR', [
                {'t': 'atentie', 'p': ['Textul **nu repetă** imaginea. Nu scriu *„Acesta este un câmp cu maci.”*, ci spun ce nu se vede: ce am simțit, ce am aflat, ce s-a întâmplat acolo.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-14',
        'titlu': 'Prezentarea textului: conceperea unui material grafic',
        'sub': SUB.format(n=14, pp='p. 188'),
        'sursa': 'Sursa: Manual Art 5, p. 188 (sarcinile, rubrica Repere și proiectul de portofoliu).',
        'sect': [
            ('1. CUM FAC MATERIALUL GRAFIC', [
                {'t': 'text', 'p': ['1. Aleg ce vreau să arăt: un loc, un drum, o clădire, un program.',
                                    '2. Aleg forma potrivită: desen, hartă, schemă cu săgeți, plan văzut de sus, orar.',
                                    '3. Îl fac clar: titlu, legendă, săgeți, culori puține.',
                                    '4. Îl așez lângă paragraful la care se referă.']},
            ]),
            ('2. JURNALUL DE CĂLĂTORIE', [
                {'t': 'text', 'p': ['Într-un jurnal de călătorie pot lipi cărți poștale, bilete, hărți, fotografii, desene, și lângă fiecare scriu **data**, **ce reprezintă** și **impresiile** mele.']},
            ]),
            ('3. O CERCETARE DESPRE LOCALITATEA MEA', [
                {'t': 'carduri', 'n': 2, 'c': [
                    {'titlu': 'de ce am nevoie', 'col': 't', 'p': ['aparat foto sau telefon, computer, carnet de notițe, creioane pentru schițe și hărți, atenție la ce e în jur']},
                    {'titlu': 'ce fac', 'col': 'm', 'p': ['observ un loc, vorbesc cu oamenii, fotografiez din unghiuri diferite, aleg 4-6 imagini, le lipesc și scriu lângă ele impresiile']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-15',
        'titlu': 'Recapitulare. Lectură și comunicare în Unitatea VI',
        'sub': SUB.format(n=15, pp='pp. 171-188, 189-190'),
        'sursa': 'Sursa: Manual Art 5, rubricile Repere ale lecțiilor 2-9 și cerințele recapitulării de la pp. 189-190.',
        'sect': [
            ('1. TEXTUL NARATIV NONLITERAR', [
                {'t': 'text', 'p': ['Întâmplări **reale**, într-un timp și un spațiu reale, cu **participanți**, persoane care există. Exemple: jurnalul, reportajul, articolul, textul de istorie (*O scurtă istorie a românilor povestită celor tineri* de Neagu Djuvara).']},
                {'t': 'text', 'p': ['Caut **indicii de timp** (date, zile, momente ale zilei) și **de spațiu** (localități, instituții, alte locuri) și verific dacă sunt reale.']},
            ]),
            ('2. ACTE DE LIMBAJ', [
                {'t': 'text', 'p': ['a întreba · a solicita · a felicita · a promite · a declara · **a explica** (de ce? cum?) · **a recomanda** · **a afirma**']},
            ]),
            ('3. TEXTUL ȘI IMAGINEA', [
                {'t': 'text', 'p': ['Fotografii, hărți, scheme, planuri, desene, integrate prin colaj; textul spune ce nu se vede în imagine.']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-16',
        'titlu': 'Recapitulare. Enunțul',
        'sub': SUB.format(n=16, pp='pp. 185-190'),
        'sursa': 'Sursa: Manual Art 5, pp. 185-186, rubrica Repere.' + CREATE,
        'sect': [
            ('1. SIMPLU SAU COMPLEX', [
                {'t': 'text', 'p': ['Câte predicate, atâtea propoziții. **Simplu**: o propoziție (*Mircea domnește 32 de ani.*). **Complex**: două sau mai multe (*Baiazid trece Dunărea și Mircea îl oprește.*).']},
            ]),
            ('2. PATRU TIPURI DE ENUNȚ', [
                {'t': 'tabel', 'cap': ['Tipul', 'Semnul', 'Exemplu'], 'lat': [0.25, 0.25, 0.5],
                 'r': [['asertiv', 'punctul (.)', '*Am citit cartea.*'],
                       ['interogativ', 'semnul întrebării (?)', '*Ai citit cartea?*'],
                       ['imperativ', 'semnul exclamării (!)', '*Citește cartea!*'],
                       ['exclamativ', 'semnul exclamării (!)', '*Ce carte frumoasă!*']]},
            ]),
            ('3. CE AM ÎNVĂȚAT ÎN CLASA A V-A DESPRE LIMBĂ', [
                {'t': 'text', 'p': ['propoziția și părțile ei · verbul și timpurile modului indicativ · imperativul · substantivul și articolul · atributul și prepoziția · subiectul și acordul · pronumele personal și de politețe · adjectivul și gradele de comparație · numeralul · enunțul']},
            ]),
        ],
    },
]
