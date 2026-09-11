# Scheme-notițe, clasa a V-a, Unitatea V „Călătoresc prin basme”. Conținutul
# vine din rubricile Repere ale Manualului Art 5, pp. 144-165; exemplele noi
# sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-5.py

SUB = 'Clasa a V-a · Unitatea V, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-2',
        'titlu': 'Basmul. Acțiunea, timpul și spațiul',
        'sub': SUB.format(n=2, pp='pp. 144-145'),
        'sursa': 'Sursa: Manual Art 5, pp. 144-145, rubricile Repere și tabelul spațiilor; textul de bază este „Zâna Munților”, cules de Petre Ispirescu.',
        'sect': [
            ('1. BASMUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Basmele** înfățișează o **lume ireală**, cu întâmplări **supranaturale**, creaturi fabuloase, oameni cu puteri supranaturale sau animale cu însușiri omenești.']},
                {'t': 'text', 'p': ['Între povestitor și ascultători există o **convenție**: în basm se poate petrece orice, oricât de surprinzător.']},
            ]),
            ('2. ACȚIUNEA ÎN BASM', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'situația inițială', 'col': 't', 'p': ['o stare de **echilibru**, modificată de un eveniment sau de o împrejurare']},
                    {'titlu': 'restabilirea echilibrului', 'col': 'm', 'p': ['de obicei, prin **trecerea unor probe**']},
                    {'titlu': 'situația finală', 'col': 'a', 'p': ['echilibrul e restabilit, iar eroul e **răsplătit**']},
                ]},
                {'t': 'text', 'p': ['Basmul transmite **încrederea** într-o lume bună și frumoasă.']},
            ]),
            ('3. TIMPUL ȘI SPAȚIUL', [
                {'t': 'text', 'p': ['Cadrul întâmplărilor este **vag, imprecis**: evenimentele nu pot fi așezate în timp și spațiu. Asta anunță chiar **formula de început**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'formula de început', 'col': 't', 'p': ['*A fost odată ca niciodată; că de n-ar fi, nu s-ar mai povesti…*']},
                    {'titlu': 'formula de încheiere', 'col': 'm', 'p': ['*Iar eu încălecai p-o șea și vă spusei dumneavoastră așa.*']},
                ]},
                {'t': 'tabel', 'cap': ['Spațiul din basm', 'Ce poate însemna'], 'lat': [0.3, 0.7],
                 'r': [['palatul', 'statutul social înalt al familiei împărătești'],
                       ['cotețele găinilor', 'statutul de jos al slujnicei; proba pe care o trece zâna'],
                       ['pădurea', 'loc al pericolelor sau al întâlnirii care schimbă viața; trecere spre lumea supranaturală'],
                       ['munții', 'tărâmul zânei, un spațiu protector'],
                       ['palatele nunților', 'sărbători ale iubirii, unde au loc adevăratele întâlniri'],
                       ['satul', 'lumea oamenilor obișnuiți']]},
            ]),
            ('4. HARTA MENTALĂ', [
                {'t': 'text', 'p': ['**Harta mentală** este o schemă care dă o imagine de ansamblu asupra unei teme, cu cuvinte, idei, desene.',
                                    'Pentru un basm notez: **situația de la început**, **evenimentul care strică echilibrul**, **peripețiile** personajelor și **situația de la final**.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-3',
        'titlu': 'Personajele basmului',
        'sub': SUB.format(n=3, pp='pp. 146-147'),
        'sursa': 'Sursa: Manual Art 5, pp. 146-147, rubrica Repere; citatele sunt din „Zâna Munților”.',
        'sect': [
            ('1. CINE TRĂIEȘTE ÎN BASME', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'oameni cu calități supranaturale', 'col': 't', 'p': ['puteri excepționale, capacitatea de a se transforma în altceva']},
                    {'titlu': 'ființe fabuloase', 'col': 'm', 'p': ['zâne, zmei, căpcăuni, animale năzdrăvane']},
                ]},
            ]),
            ('2. EROUL DIN BASM', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Eroul** este în slujba **binelui** și a **dreptății** (erou pozitiv).']},
                {'t': 'text', 'p': ['• Are un **scop**: să îndeplinească o misiune, să-i înfrângă pe cei răi (personajele negative), să-și găsească dragostea sau norocul.',
                                    '• Ca să reușească, trebuie să treacă **probe**.']},
            ]),
            ('3. PIRAMIDA PERSONAJELOR', [
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'principale', 'col': 't', 'p': ['în centrul acțiunii']},
                    {'titlu': 'secundare', 'col': 'm', 'p': ['ajută sau încurcă acțiunea']},
                    {'titlu': 'episodice', 'col': 'a', 'p': ['apar o singură dată sau de câteva ori']},
                ]},
            ]),
            ('4. DIN FAPTE LA TRĂSĂTURI', [
                {'t': 'text', 'p': ['Deduc trăsăturile din ce fac și din ce spun personajele. În caiet notez trăsătura lângă pasaj:']},
                {'t': 'tabel', 'cap': ['Pasajul', 'Trăsătura'], 'lat': [0.72, 0.28],
                 'r': [['*„Ajunsese să nu mai aibă dascălii ce să-i dea să învețe.”* (fiul de împărat)', '…'],
                       ['*„Toată curtea împărătească lua în nume de bine pe această găinăreasă, pentru vrednicia și curățenia ei.”* (zâna)', '…']]},
                {'t': 'nota', 'titlu': 'Comparații utile:', 'p': ['fiul împăratului și **Făt-Frumos**; Zâna Munților și **Cenușăreasa**, în diagrame Venn: asemănări la mijloc, deosebiri pe laturi.']},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-8',
        'titlu': 'Elemente paraverbale și nonverbale în prezentarea orală',
        'sub': SUB.format(n=8, pp='pp. 155-156'),
        'sursa': 'Sursa: Manual Art 5, pp. 155-156, rubrica Repere și autoevaluarea.',
        'sect': [
            ('1. CONȚINUTUL ȘI MODUL DE PREZENTARE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Într-o prezentare orală, **ce** spui și **cum** spui sunt la fel de importante.']},
                {'t': 'text', 'p': ['Folosite potrivit, elementele paraverbale și nonverbale îi ajută pe ascultători să înțeleagă tema.']},
            ]),
            ('2. CE FOLOSESC', [
                {'t': 'coloane', 'c': [
                    {'titlu': 'PARAVERBALE (vocea)', 'b': [
                        {'t': 'text', 'p': ['• **intensitatea vocii**: potrivită publicului și sălii, nici prea tare, nici prea încet;',
                                            '• **intonația** subliniază ce e important;',
                                            '• **ritmul** e mai rar decât într-o conversație, ca ascultătorii să aibă timp să înțeleagă;',
                                            '• **pauza** poate scoate în evidență o idee.']},
                    ]},
                    {'titlu': 'NONVERBALE (corpul)', 'b': [
                        {'t': 'text', 'p': ['• **mimica**: deschidere față de public, un chip zâmbitor;',
                                            '• **gesturile**: măsurate și firești, întăresc spusele;',
                                            '• **poziția corpului**: sigură, dreaptă, dar nu rigidă;',
                                            '• **contactul vizual** arată respect; nu privesc doar o persoană.']},
                    ]},
                ]},
            ]),
            ('3. MĂ AUTOEVALUEZ DUPĂ PREZENTARE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'conținutul', 'col': 't', 'p': ['informații clare, bine alese · un plan · explicații la întrebări · legătura cu ce am învățat · opinii motivate · interesul colegilor']},
                    {'titlu': 'prezentarea', 'col': 'm', 'p': ['intonație potrivită, fără blocaje, în timp · contact vizual · corp sigur · ritm potrivit · gesturi naturale · fără să citesc planul · entuziasm']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-9',
        'titlu': 'Acte de limbaj: a promite, a declara',
        'sub': SUB.format(n=9, pp='p. 157'),
        'sursa': 'Sursa: Manual Art 5, p. 157, rubrica Repere și exemplele din Explorare și Aplicații.',
        'sect': [
            ('1. A PROMITE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**A promite** este un act de limbaj prin care vorbitorul **se angajează** să acționeze într-un anumit fel.']},
                {'t': 'text', 'p': ['*Promit să te ajut la teme.* · *Îți promit că vin la timp.*']},
                {'t': 'atentie', 'p': ['Nu fac **promisiuni nerealiste**. *„A promite luna de pe cer”* sau *„marea cu sarea”* înseamnă a promite lucruri imposibile.']},
            ]),
            ('2. A DECLARA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**A declara** este un act de limbaj prin care vorbitorul **anunță**, **recunoaște** sau **își asumă** ceva.']},
                {'t': 'text', 'p': ['Se folosește mai ales în limbajul **oficial**: administrativ, politic, publicistic, juridic.']},
                {'t': 'tabel', 'cap': ['Declarația', 'Unde o auzim'], 'lat': [0.5, 0.5],
                 'r': [['*„Vă declar căsătoriți!”*', 'la cununie'],
                       ['*„Declar ședința deschisă.”*', 'la începutul unei ședințe'],
                       ['*„Declar că nu am fost de față la accident.”*', 'în fața unei autorități']]},
                {'t': 'nota', 'titlu': 'O declarație din basm:', 'p': ['*„Iată, pentru dragostea ta, mă lepăd de puterea mea cea măiastră, numai și tu să mă iubești, precum te iubesc și eu.”* (Zâna Munților): o declarație de intenție și o declarație de dragoste.']},
            ]),
            ('3. ACTE DE LIMBAJ ÎNVĂȚATE', [
                {'t': 'text', 'p': ['a întreba · a solicita · a felicita · **a promite** · **a declara**']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-10',
        'titlu': 'Numeralul. Numeralul cardinal',
        'sub': SUB.format(n=10, pp='pp. 158-159'),
        'sursa': 'Sursa: Manual Art 5, pp. 158-159, rubricile Repere.' + CREATE,
        'sect': [
            ('1. NUMERALUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Numeralul** este partea de vorbire care exprimă un **număr** sau **ordinea** obiectelor prin numărare.']},
                {'t': 'text', 'p': ['**Numeralul cardinal** exprimă un număr: *trei luni, patruzeci de vase*.']},
            ]),
            ('2. SIMPLE ȘI COMPUSE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'simple', 'col': 't', 'p': ['*unu, doi, trei, patru, cinci, șase, șapte, opt, nouă, zece*']},
                    {'titlu': 'compuse', 'col': 'm', 'p': ['*unsprezece, doisprezece, patruzeci, o sută cinci, două mii șaptesprezece*']},
                ]},
                {'t': 'text', 'p': ['*unu/un* și *doi* își schimbă forma după gen: *un băiat / o fată*, *doi băieți / două fete*.']},
            ]),
            ('3. „UN” ȘI „O”: CE SUNT?', [
                {'t': 'text', 'p': ['*Un* și *o* sunt **numerale cardinale** atunci când:']},
                {'t': 'text', 'p': ['• sunt în legătură cu alte numerale: *Adu-mi* **o** *pungă cu aur și* **două** *cu nestemate!*',
                                    '• sunt însoțite de *singur, singură, numai, doar*: **Un** *singur scop avea vrăjitorul.*',
                                    '• exprimă o unitate de măsură: *Duhul s-a ivit după* **o** *secundă.*']},
                {'t': 'tabel', 'cap': ['Propoziția', '*o* este'], 'lat': [0.6, 0.4],
                 'r': [['*Am cumpărat* **o** *carte de povești.*', 'articol nehotărât'],
                       ['*Am* **o** *singură carte de povești.*', 'numeral cardinal'],
                       ['**O** *citesc în fiecare seară.*', 'pronume personal']]},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-11',
        'titlu': 'Numeralul ordinal. Numeralul, aspecte normative',
        'sub': SUB.format(n=11, pp='pp. 160-161'),
        'sursa': 'Sursa: Manual Art 5, pp. 160-161, rubricile Repere.' + CREATE,
        'sect': [
            ('1. NUMERALUL ORDINAL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Numeralul ordinal** arată **ordinea** obiectelor prin numărare.']},
                {'t': 'tabel', 'cap': ['Genul', 'Forma', 'Din ce e alcătuit'], 'lat': [0.3, 0.25, 0.45],
                 'r': [['masculin și neutru', '*al doilea*', '*al* + *doi* + *-le-* + *-a*'],
                       ['feminin', '*a doua*', '*a* + *doua*']]},
                {'t': 'text', 'p': ['Seria începe cu *întâi (întâiul, întâia)* și *primul (prima)*, care sunt **sinonime**: *Întâia noapte a trecut repede. = Prima noapte a trecut repede.*']},
            ]),
            ('2. REGULI DE SCRIERE ȘI DE ACORD', [
                {'t': 'tabel', 'cap': ['Regula', 'Exemplu'], 'lat': [0.55, 0.45],
                 'r': [['numeralul „1” are forma *unu*', '*doi crini: unu alb și unu portocaliu*'],
                       ['*doi* și compusele lui se acordă cu substantivul feminin', '*ora două, clasa a douăsprezecea, patruzeci și două de cărți*'],
                       ['după substantiv, la feminin, merg *întâi* și *întâia*', '*clasa întâi / clasa întâia*'],
                       ['17 și 18 se scriu după numeralele din care sunt compuse', '*șaptesprezece, optsprezece*'],
                       ['14, 16 și 60 au forme speciale', '*paisprezece, șaisprezece, șaizeci*'],
                       ['în texte, numerele se scriu cu cifre, cele sub zece în cuvinte', '*Avem 24 de elevi și trei profesori.*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Numeralele ordinale se pot scrie și cu cifre romane: *clasa a V-a*.']},
            ]),
            ('3. ATENȚIE', [
                {'t': 'atentie', 'p': ['*mii* (numeral: *două mii*) / *mi-i* (*mi* + *îi*: *Mi-i dor de bunici*).',
                                       'În vorbirea neîngrijită apar forme greșite: *unșpe, paișpe, douăj’*. În scris folosesc **forma literară**.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-12',
        'titlu': 'Descrierea unei ființe imaginare',
        'sub': SUB.format(n=12, pp='pp. 162-163'),
        'sursa': 'Sursa: Manual Art 5, pp. 162-163, rubrica Repere, pașii și grila; modelul e din „Șifonierul, leul și vrăjitoarea” de C.S. Lewis.',
        'sect': [
            ('1. CE DESCRIU', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Descrierea unei ființe imaginare** prezintă trăsăturile ei **fizice** și **morale** și scoate în evidență caracterul **fabulos**, prin aspecte surprinzătoare, neobișnuite.']},
            ]),
            ('2. PĂRȚILE DE VORBIRE ALE DESCRIERII', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'substantive', 'col': 't', 'p': ['numesc ființa și părțile ei: *picioare, coadă, barbă*']},
                    {'titlu': 'adjective', 'col': 'm', 'p': ['arată trăsăturile: *ascuțită, cârlionțat, lucios*']},
                    {'titlu': 'verbe', 'col': 'a', 'p': ['la indicativ, **prezent** sau **imperfect**: *era, avea, purta*']},
                ]},
            ]),
            ('3. UN MODEL: FAUNUL', [
                {'t': 'tabel', 'cap': ['Partea', 'Trăsătura din text'], 'lat': [0.3, 0.7],
                 'r': [['statura', 'numai puțin mai înalt decât Lucy'],
                       ['trupul', 'de la mijloc în sus bărbat; picioare de țap, cu păr negru, lucios, și copite; coadă'],
                       ['fața', 'ciudată, dar plăcută, cu barbă ascuțită și păr cârlionțat; câte un corn de o parte și de alta a frunții'],
                       ['îmbrăcămintea', 'un fular roșu de lână']]},
            ]),
            ('4. PAȘII', [
                {'t': 'text', 'p': ['1. Inventez o ființă sau aleg una dintr-o carte și îi dau un nume.',
                                    '2. Hotărăsc ce fel de ființă este: înspăimântătoare, blândă și protectoare sau vicleană.',
                                    '3. Fac o schemă: părțile, trăsăturile fizice și morale, puterile, relația cu alții, o concluzie.',
                                    '4. Scriu descrierea, cu introducere, cuprins și încheiere; revizuiesc; rescriu îngrijit, cu titlu și, dacă vreau, un desen.']},
                {'t': 'nota', 'titlu': 'Grila:', 'p': ['descriere fizică și morală · trăsăturile supranaturale · vocabular potrivit · verbe la prezent sau imperfect · text interesant și original · propoziții corecte']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-15',
        'titlu': 'Recapitulare. Lectură și comunicare în Unitatea V',
        'sub': SUB.format(n=15, pp='pp. 144-163, 164-165'),
        'sursa': 'Sursa: Manual Art 5, rubricile Repere ale lecțiilor 2-11 și cerințele recapitulării de la pp. 164-165.',
        'sect': [
            ('1. BASMUL', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin'], 'lat': [0.3, 0.7],
                 'r': [['lumea basmului', 'ireală, cu întâmplări supranaturale; în basm se poate petrece orice'],
                       ['acțiunea', 'echilibru → un eveniment îl strică → probe → echilibrul revine, eroul e răsplătit'],
                       ['timpul și spațiul', 'vagi, imprecise; formule de început și de încheiere'],
                       ['personajele', 'oameni cu puteri supranaturale și ființe fabuloase; eroul e în slujba binelui']]},
            ]),
            ('2. COMUNICAREA', [
                {'t': 'text', 'p': ['• În prezentarea orală folosesc **paraverbalul** (intensitatea vocii, intonația, ritmul, pauza) și **nonverbalul** (mimica, gesturile, poziția corpului, contactul vizual).',
                                    '• **A promite**: mă angajez să fac ceva. **A declara**: anunț, recunosc sau îmi asum ceva, mai ales oficial.']},
            ]),
            ('3. DESCRIEREA UNEI FIINȚE IMAGINARE', [
                {'t': 'text', 'p': ['trăsături fizice și morale, aspecte fabuloase · substantive, adjective, verbe la prezent sau imperfect · introducere, cuprins, încheiere']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-16',
        'titlu': 'Recapitulare. Numeralul',
        'sub': SUB.format(n=16, pp='pp. 158-165'),
        'sursa': 'Sursa: Manual Art 5, pp. 158-161, rubricile Repere ale lecțiilor 9-10.' + CREATE,
        'sect': [
            ('1. FELURILE NUMERALULUI', [
                {'t': 'tabel', 'cap': ['Felul', 'Ce exprimă', 'Exemple'], 'lat': [0.25, 0.3, 0.45],
                 'r': [['cardinal simplu', 'un număr', '*trei, zece*'],
                       ['cardinal compus', 'un număr', '*șaptesprezece, douăzeci și opt, o mie*'],
                       ['ordinal', 'ordinea', '*primul, întâiul, al doilea, a doua, al cincilea*']]},
            ]),
            ('2. „UN” ȘI „O”', [
                {'t': 'text', 'p': ['**numerale** când apar cu alte numerale, cu *singur, numai, doar* sau ca unitate de măsură; altfel sunt, de obicei, **articole nehotărâte**; *o* poate fi și **pronume**: *O văd.*']},
            ]),
            ('3. FORME CORECTE', [
                {'t': 'atentie', 'p': ['*optsprezece*, nu *optâsprezece* · *douăsprezece mii*, cu substantiv feminin · *treizeci și una de litere* · *unul din patru copii* · *șaizeci*, nu *șasezeci* · *paisprezece, șaisprezece*']},
            ]),
        ],
    },
]
