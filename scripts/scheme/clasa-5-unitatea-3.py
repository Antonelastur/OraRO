# Scheme-notițe, clasa a V-a, Unitatea III „Pe strada mea”. Conținutul vine
# din rubricile Repere ale Manualului Art 5, pp. 80-105; exemplele noi sunt
# anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-3.py

SUB = 'Clasa a V-a · Unitatea III, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 1 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-1',
        'titlu': 'Proiect de grup. În așteptarea Crăciunului',
        'sub': SUB.format(n=1, pp='p. 91'),
        'sursa': 'Sursa: Manual Art 5, p. 91 (sarcina, pașii, sugestiile și criteriile de autoevaluare).',
        'sect': [
            ('1. SARCINA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['În grupe de **4-5 elevi**, pregătim înainte de vacanță un proiect despre **Crăciun**.']},
                {'t': 'text', 'p': ['**Teme posibile:** o scenetă despre nașterea lui Isus; colindele preferate; sărbătorirea Crăciunului în lume; o carte despre Crăciun; povestea lui Moș Crăciun; tradițiile de iarnă din comunitatea noastră; decorațiuni pentru brad; o scrisoare către Moș Crăciun.',
                                    '**Timp:** două săptămâni. **Prezentarea:** 3-5 minute, în ultima oră de română dinaintea vacanței.']},
            ]),
            ('2. PAȘII', [
                {'t': 'tabel', 'cap': ['Săptămâna', 'Ce facem'], 'lat': [0.2, 0.8],
                 'r': [['I', 'Alegem tema și ne documentăm.'],
                       ['II', 'Alegem produsul (scenetă, colinde, poster, PowerPoint, decorațiuni, prezentarea unei cărți, o rețetă), ne împărțim sarcinile și repetăm prezentarea, cu toată recuzita.']]},
            ]),
            ('3. DOCUMENTAREA', [
                {'t': 'text', 'p': ['1. Stabilim sursele: cărți, reviste, internet.',
                                    '2. Fiecare consultă cel puțin o sursă, ia notițe și **notează sursa**.',
                                    '3. Prezentăm în grupă ce am aflat și alegem informațiile pe care le folosim.']},
            ]),
            ('4. CUM MĂ AUTOEVALUEZ', [
                {'t': 'text', 'p': ['• am folosit sursele de informare · • m-am raportat la temă · • am colaborat în echipă și mi-am asumat rolul · • produsul e de calitate · • prezentarea e clară și atractivă']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-3',
        'titlu': 'Textul descriptiv literar. Personificarea',
        'sub': SUB.format(n=3, pp='pp. 80-83'),
        'sursa': 'Sursa: Manual Art 5, pp. 80-83, rubricile Repere; exemplele sunt din „O stradă cu sentimente” de Ana Blandiana.',
        'sect': [
            ('1. TEXTUL DESCRIPTIV', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul descriptiv** prezintă un obiect, o ființă, un cadru din natură sau un fenomen al naturii, evidențiind **părțile componente** și **trăsăturile particulare**.']},
                {'t': 'nota', 'titlu': 'Textul descriptiv literar', 'p': ['prezintă **impresii și percepții subiective** despre ce descrie. E construit prin folosirea **creativă** a limbajului, ca obiectul să fie prezentat cât mai sugestiv.']},
            ]),
            ('2. CUM E CONSTRUITĂ O DESCRIERE', [
                {'t': 'text', 'p': ['**Obiectul descris** → **părțile lui componente** → **trăsăturile** fiecărei părți.']},
                {'t': 'tabel', 'cap': ['Casa cu pereții portocalii', 'Trăsătura'], 'lat': [0.4, 0.6],
                 'r': [['pereții', '*portocalii*'],
                       ['ferestrele', 'prin ele se văd *flori și perdele cu horbote*'],
                       ['din casă', '*se aud glasuri de copii*']]},
            ]),
            ('3. FIGURA DE STIL. PERSONIFICAREA', [
                {'t': 'text', 'p': ['**Figura de stil** este un procedeu care sporește **expresivitatea** unei comunicări.']},
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Personificarea** atribuie **însușiri omenești** unor ființe necuvântătoare, unor obiecte sau unor fenomene ale naturii.']},
                {'t': 'tabel', 'cap': ['O acțiune omenească', 'O însușire omenească'], 'lat': [0.5, 0.5],
                 'r': [['casa *„râde toată ziua în hohote”*', 'casele sunt *„ambițioase, încăpățânate, curioase, vesele, triste, bârfitoare, timide”*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Acțiunile omenești sunt exprimate prin **verbe**, însușirile prin **adjective**.']},
            ]),
            ('4. DESPRE AUTOARE ȘI CUVINTE NOI', [
                {'t': 'text', 'p': ['**Ana Blandiana** este pseudonimul Otiliei Valeria Coman: poetă, prozatoare, publicistă. Pentru copii: *Întâmplări din grădina mea*, *Întâmplări de pe strada mea*, cu motanul **Arpagic**.']},
                {'t': 'tabel', 'cap': ['Cuvântul', 'Sensul'], 'lat': [0.3, 0.7],
                 'r': [['*țuguiat*', 'ascuțit, prelungit'], ['*dibaci*', 'îndemânatic, priceput'],
                       ['*impertinent*', 'obraznic'], ['*horbotă*', 'dantelă (regional)']]},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-9',
        'titlu': 'Ascultarea activă',
        'sub': SUB.format(n=9, pp='pp. 92-93'),
        'sursa': 'Sursa: Manual Art 5, pp. 92-93, rubrica Repere, schema și fișa de observare.',
        'sect': [
            ('1. A AUZI ȘI A ASCULTA', [
                {'t': 'text', 'p': ['Ca să asculți, trebuie să auzi. Dar a asculta înseamnă mai mult: să fii **atent** și să **înțelegi** ce ți se spune.']},
            ]),
            ('2. CE ÎNSEAMNĂ ASCULTAREA ACTIVĂ', [
                {'t': 'text', 's': 15.5, 'p': ['**Ascultarea activă** este o strategie esențială în comunicare. Presupune:']},
                {'t': 'carduri', 'n': 2, 'c': [
                    {'titlu': 'să auzi', 'col': 't', 'p': ['să primești clar mesajul, fără zgomote care să-l perturbe']},
                    {'titlu': 'să interacționezi', 'col': 'm', 'p': ['asculți fără să întrerupi; știi când poți interveni cu întrebări sau cu un rezumat; urmărești gesturile, păstrezi contactul vizual, îl încurajezi pe vorbitor']},
                    {'titlu': 'să te concentrezi', 'col': 'a', 'p': ['îți menții atenția']},
                    {'titlu': 'să înțelegi', 'col': 'n', 'p': ['știi de ce asculți: relaxare, informare, analiză']},
                ]},
                {'t': 'text', 'p': ['Asculți ca să auzi, ca să te gândești la ce ai auzit, ca să arăți **empatie**, ca să urmărești gesturile vorbitorului și ca să spui ce ai înțeles (prin **reformulare**) sau să pui **întrebări**.']},
            ]),
            ('3. SEMNELE UNUI ASCULTĂTOR BUN', [
                {'t': 'text', 'p': ['• participă la comunicare în egală măsură cu vorbitorul și păstrează contactul vizual;',
                                    '• îl încurajează pe vorbitor cu sunete sau gesturi de aprobare;',
                                    '• pune întrebări sau reformulează ideile, ca să fie sigur că a înțeles;',
                                    '• respectă regulile de preluare a cuvântului;',
                                    '• la final, poate face un rezumat clar al celor auzite.']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-10',
        'titlu': 'Substantivul',
        'sub': SUB.format(n=10, pp='pp. 94-95'),
        'sursa': 'Sursa: Manual Art 5, pp. 94-95, rubricile Repere.' + CREATE,
        'sect': [
            ('1. CE ESTE SUBSTANTIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Substantivul** este partea de vorbire care denumește ființe, lucruri, fenomene ale naturii, însușiri, acțiuni, stări sufletești, considerate în sens larg **obiecte**.']},
                {'t': 'text', 'p': ['*copil, casă, ninsoare, răutate, plimbare, bucurie*']},
            ]),
            ('2. SUBSTANTIVE COMUNE ȘI PROPRII', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'comune', 'col': 't', 'p': ['denumesc o **clasă** de obiecte de același fel', '*stradă, oraș, floare*']},
                    {'titlu': 'proprii', 'col': 'm', 'p': ['denumesc **individualități**: nume de persoane, țări, localități, ape, sărbători; se scriu cu **literă mare**', '*Ana, România, Mureș, Crăciun*']},
                ]},
                {'t': 'text', 'p': ['Există substantive proprii obținute din substantive comune: *floare → Floarea*.']},
            ]),
            ('3. GENUL ȘI NUMĂRUL', [
                {'t': 'tabel', 'cap': ['Genul', 'Cum îl recunosc', 'Exemplu'], 'lat': [0.2, 0.4, 0.4], 'al': ['l', 'c', 'l'],
                 'r': [['masculin', 'un – doi', '*un copil, doi copii*'],
                       ['feminin', 'o – două', '*o fată, două fete*'],
                       ['neutru', 'un – două', '*un caiet, două caiete*']]},
                {'t': 'text', 'p': ['**Numărul:** singular (un singur obiect) și plural (două sau mai multe obiecte).',
                                    '**Desinențele** sunt sunetele de la sfârșitul substantivului care arată genul și numărul: *maidanez∅ – maidanezi*, *cas-ă – cas-e*, *bloc∅ – bloc-uri*.']},
            ]),
            ('4. ATENȚIE', [
                {'t': 'atentie', 'p': ['Același cuvânt poate fi substantiv sau verb: *un pahar de* **vin** (substantiv) / **Vin** *acasă.* (verb). Verific formele de plural în **DOOM3**.']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-11',
        'titlu': 'Articolul',
        'sub': SUB.format(n=11, pp='pp. 96-97'),
        'sursa': 'Sursa: Manual Art 5, pp. 96-97, rubricile Repere, tabelele și modelele.',
        'sect': [
            ('1. CE ESTE ARTICOLUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Articolul** însoțește întotdeauna un substantiv și arată **în ce măsură** obiectul le este cunoscut vorbitorilor.']},
                {'t': 'text', 'p': ['• Articolul se analizează **întotdeauna împreună cu substantivul**.',
                                    '• Substantivele pot fi **articulate** (*semaforul, un semafor*) sau **nearticulate** (*semafor*).',
                                    '• În dicționar, substantivele apar **nearticulate**.']},
            ]),
            ('2. ARTICOLUL HOTĂRÂT', [
                {'t': 'text', 'p': ['Arată că obiectul e **cunoscut** de vorbitor și de ascultător. Se adaugă **la sfârșitul** substantivului, într-un singur cuvânt. La masculin și neutru singular se leagă prin **-u-**: *băiat-u-l*.']},
                {'t': 'tabel', 'cap': ['', 'masculin', 'feminin', 'neutru'], 'lat': [0.19, 0.27, 0.27, 0.27], 'al': ['l', 'c', 'c', 'c'],
                 'r': [['singular', '-l, -le, -a, -lui', '-a, -i', '-l, -lui'], ['plural', '-i, -lor', '-le, -lor', '-le, -lor']]},
            ]),
            ('3. ARTICOLUL NEHOTĂRÂT', [
                {'t': 'text', 'p': ['Arată că obiectul e **mai puțin cunoscut**. Se așază **înaintea** substantivului, ca un cuvânt separat.']},
                {'t': 'tabel', 'cap': ['', 'masculin', 'feminin', 'neutru'], 'lat': [0.19, 0.27, 0.27, 0.27], 'al': ['l', 'c', 'c', 'c'],
                 'r': [['singular', 'un, unui', 'o, unei', 'un, unui'], ['plural', 'niște, unor', 'niște, unor', 'niște, unor']]},
                {'t': 'tabel', 'cap': ['', 'articulat hotărât', 'articulat nehotărât'], 'lat': [0.2, 0.4, 0.4], 'al': ['l', 'c', 'c'],
                 'r': [['singular', '*fulgul*', '*un fulg*'], ['plural', '*fulgii*', '*niște fulgi*']]},
            ]),
            ('4. NORMĂ: CÂȚI „I” SCRIU', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'face parte din cuvânt', 'desinența', 'articolul hotărât'], 'lat': [0.25, 0.25, 0.25, 0.25], 'al': ['l', 'c', 'c', 'c'],
                 'r': [['*copiii*', 'copi-', '-i', '-i'], ['*poeziile*', 'poezi-', '-i-', '-le']]},
                {'t': 'atentie', 'p': ['De aceea scriem *exercițiile* (exerciți- + -i- + -le), nu *exercițile*.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-12',
        'titlu': 'Posibilități combinatorii ale substantivului. Atributul',
        'sub': SUB.format(n=12, pp='p. 98'),
        'sursa': 'Sursa: Manual Art 5, p. 98, rubrica Repere și exemplele din Explorare.',
        'sect': [
            ('1. ATRIBUTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Atributul** este partea secundară de propoziție care **determină un substantiv**.']},
                {'t': 'text', 'p': ['Întrebările atributului: **al/a/ai/ale cui?**, **care?**, **ce fel de?**']},
                {'t': 'tabel', 'cap': ['Întrebarea', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['a cui casă?', '*Casa* **bătrânei** *este mică, mică.*'],
                       ['care casă?', '*Casa* **nouă** *este mare și bârfitoare.*'],
                       ['ce fel de casă?', '*Casa* **de cărămidă** *are pereți portocalii.*']]},
            ]),
            ('2. SUBSTANTIVUL CENTRU ȘI ADJUNCT', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'centru', 'col': 't', 'p': ['substantivul determinat de alte cuvinte', '**casa** *Anei*, **casa** *verde*, **casa** *de piatră*']},
                    {'titlu': 'adjunct', 'col': 'm', 'p': ['cuvântul care determină substantivul', '*casa* **Anei**, *casa* **de piatră**']},
                ]},
            ]),
            ('3. CUM SE EXPRIMĂ ATRIBUTUL', [
                {'t': 'tabel', 'cap': ['Prin', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['adjectiv', '*strada* **largă**'], ['substantiv', '*strada* **bunicii**, *strada* **din centru**']]},
                {'t': 'text', 'p': ['• Un substantiv poate avea **unul sau mai multe** atribute: *Palidele raze de soare…*',
                                    '• De obicei, atributul stă **după** substantiv, dar poate sta și **înainte**.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-13',
        'titlu': 'Prepoziția',
        'sub': SUB.format(n=13, pp='p. 99'),
        'sursa': 'Sursa: Manual Art 5, pp. 98-99, rubrica Repere și exemplele din Explorare.',
        'sect': [
            ('1. CE ESTE PREPOZIȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Prepoziția** este partea de vorbire care **leagă un atribut** de substantivul determinat.']},
                {'t': 'text', 'p': ['Prepoziția se analizează **împreună** cu partea de vorbire pe care o precedă și intră în componența atributului.']},
                {'t': 'text', 'p': ['*Casa* **fără acoperiș** *va fi demolată.* · *Casa* **de lângă blocul înalt** *este încrezută.*']},
            ]),
            ('2. FELURILE PREPOZIȚIILOR', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'simple', 'col': 't', 'sub': 'un singur termen', 'p': ['*cu, de, după, fără, în, între, la, lângă, pe, pentru, peste, până*']},
                    {'titlu': 'compuse', 'col': 'm', 'sub': 'doi sau mai mulți termeni', 'p': ['*de la, de lângă, de pe, de peste, de prin, de sub, pe după, pe la, pe sub, de pe la, de pe lângă, de pe sub*']},
                ]},
                {'t': 'nota', 'titlu': 'Compuse scrise într-un singur cuvânt:', 'p': ['*despre* (de + spre), *dinspre* (din + spre), *înspre* (în + spre)']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-14',
        'titlu': 'Substantivul subiect. Acordul predicatului cu subiectul',
        'sub': SUB.format(n=14, pp='pp. 100-101'),
        'sursa': 'Sursa: Manual Art 5, pp. 100-101, rubricile Repere și modelele.' + CREATE,
        'sect': [
            ('1. SUBIECTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Subiectul** este partea de propoziție care arată **cine** face acțiunea exprimată de un predicat verbal.']},
                {'t': 'text', 'p': ['Întrebarea subiectului: **cine?** Subiectul și predicatul sunt într-o strânsă relație.']},
                {'t': 'tabel', 'cap': ['Întrebarea', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['cine aleargă?', '*__Pisicile__ _aleargă_.*'], ['cine a apărut?', '*__Soarele__ _a apărut_ iar pe cer.*']]},
            ]),
            ('2. SUBIECTUL SIMPLU ȘI MULTIPLU', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'simplu', 'col': 't', 'p': ['un singur termen', '*__Zăpada__ cădea neîncetat.*']},
                    {'titlu': 'multiplu', 'col': 'm', 'p': ['doi sau mai mulți termeni, legați prin virgulă sau prin *și*', '*__Fetele__ și __băieții__ _merg_ la joacă.*']},
                ]},
                {'t': 'text', 'p': ['Termenii subiectului multiplu pot sta unul lângă altul sau pot fi despărțiți de alte părți de propoziție.']},
            ]),
            ('3. ACORDUL PREDICATULUI CU SUBIECTUL', [
                {'t': 'text', 's': 15.5, 'p': ['Verbul predicat se acordă în **persoană** și **număr** cu substantivul subiect.']},
                {'t': 'tabel', 'cap': ['Subiectul', 'Predicatul'], 'lat': [0.5, 0.5],
                 'r': [['*Vecinul meu* (singular)', '*a plecat* (singular)'],
                       ['*Prietenii lui* (plural)', '*l-au însoțit* (plural)'],
                       ['*Bunicii și părinții* (multiplu)', '*au stabilit* (întotdeauna plural)']]},
                {'t': 'atentie', 'p': ['Acordul se face **doar cu substantivul subiect**, nu cu alte cuvinte din propoziție: *Grupul elevilor* **a plecat** *în excursie* (nu *au plecat*).']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-15',
        'titlu': 'Descrierea unui obiect',
        'sub': SUB.format(n=15, pp='pp. 102-103'),
        'sursa': 'Sursa: Manual Art 5, pp. 102-103, rubrica Repere, organizatorul grafic și grila.',
        'sect': [
            ('1. TEXTUL DESCRIPTIV ARE TREI PĂRȚI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'introducerea', 'col': 't', 'p': ['precizează **tema** descrierii; poate spune de ce am ales obiectul sau cu ce scop îl descriu']},
                    {'titlu': 'cuprinsul', 'col': 'm', 'p': ['descrie **în detaliu** diferite aspecte ale obiectului']},
                    {'titlu': 'încheierea', 'col': 'a', 'p': ['o **concluzie**, un punct de vedere personal despre obiect']},
                ]},
            ]),
            ('2. ÎNAINTE SĂ SCRIU', [
                {'t': 'text', 'p': ['1. Stabilesc **tema**: ce obiect descriu.',
                                    '2. Notez **toate elementele componente** pe care le-aș putea descrie.',
                                    '3. Mă gândesc **pentru cine** și **cu ce scop** scriu, apoi **aleg** doar elementele potrivite.',
                                    '4. Pot adăuga fotografii sau desene.']},
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'din ce este compus', 'col': 'n'},
                    {'titlu': 'cum arată', 'col': 'n'},
                    {'titlu': 'pentru ce e folosit', 'col': 'n'},
                    {'titlu': 'de ce e important pentru mine', 'col': 'n'},
                ]},
            ]),
            ('3. PAȘII REDACTĂRII', [
                {'t': 'text', 'p': ['planul → aleg aspectele potrivite perspectivei mele → titlul → prima variantă → **revizuirea** (claritate, paragrafe, gramatică, ortografie, punctuație) → varianta finală, lizibilă.']},
            ]),
            ('4. GRILA', [
                {'t': 'text', 'p': ['• Reiese clar obiectul descris, aspectele și trăsăturile lui și părerea mea.',
                                    '• Are introducere, cuprins și încheiere; elementele, tonul și limbajul se potrivesc scopului și cititorilor.',
                                    '• Titlul se potrivește cu scopul textului.',
                                    '• Exprimarea e clară și corectă; textul e așezat corect în pagină; nu plictisește cititorul.']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-17',
        'titlu': 'Recapitulare. Lectură și comunicare în Unitatea III',
        'sub': SUB.format(n=17, pp='pp. 80-93, 104-105'),
        'sursa': 'Sursa: Manual Art 5, rubricile Repere ale lecțiilor 1-7 și cerințele recapitulării de la pp. 104-105.',
        'sect': [
            ('1. TEXTUL DESCRIPTIV', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin'], 'lat': [0.3, 0.7],
                 'r': [['textul descriptiv', 'prezintă un obiect, o ființă, un cadru din natură, un fenomen, cu **părțile** și **trăsăturile** lor'],
                       ['textul descriptiv literar', 'impresii și percepții **subiective**, limbaj creativ, sugestiv'],
                       ['tema descrierii', 'obiectul sau ființa care se descrie'],
                       ['personificarea', 'figură de stil care dă **însușiri omenești** unor ființe necuvântătoare, obiecte, fenomene']]},
            ]),
            ('2. CUM ANALIZEZ O DESCRIERE', [
                {'t': 'text', 'p': ['1. Precizez **tema** descrierii.',
                                    '2. Găsesc **părțile** obiectului descris și le asociez cu **trăsăturile** din text.',
                                    '3. Caut **figurile de stil**, de exemplu personificarea.',
                                    '4. Observ dacă descrierea transmite **impresii** (literară) sau mai ales **informații** (de exemplu, termeni de specialitate).']},
            ]),
            ('3. ASCULTAREA ACTIVĂ', [
                {'t': 'text', 'p': ['Aud clar mesajul, mă concentrez, nu întrerup, păstrez contactul vizual, încurajez vorbitorul, pun întrebări și reformulez ca să verific dacă am înțeles.']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-18',
        'titlu': 'Recapitulare. Substantivul, articolul, atributul, subiectul',
        'sub': SUB.format(n=18, pp='pp. 94-105'),
        'sursa': 'Sursa: Manual Art 5, pp. 94-103, rubricile Repere ale lecțiilor 8-12.' + CREATE,
        'sect': [
            ('1. SUBSTANTIVUL ȘI ARTICOLUL', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.22, 0.46, 0.32],
                 'r': [['substantivul', 'denumește obiecte în sens larg; comun sau propriu', '*stradă / Ana*'],
                       ['genul', 'masculin (un–doi), feminin (o–două), neutru (un–două)', '*copil, fată, caiet*'],
                       ['numărul', 'singular / plural, arătat de desinențe', '*casă – case*'],
                       ['articolul hotărât', 'obiect cunoscut; la sfârșitul cuvântului', '*strada, fulgii*'],
                       ['articolul nehotărât', 'obiect mai puțin cunoscut; înaintea cuvântului', '*o stradă, niște fulgi*']]},
            ]),
            ('2. ATRIBUTUL ȘI PREPOZIȚIA', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.22, 0.46, 0.32],
                 'r': [['atributul', 'determină un substantiv; *al cui? care? ce fel de?*', '*casa* **veche**'],
                       ['atribut prin adjectiv', '', '*strada* **largă**'],
                       ['atribut prin substantiv', 'cu sau fără prepoziție', '*strada* **bunicii**, **din centru**'],
                       ['prepoziția', 'leagă atributul de substantiv; simplă sau compusă', '*de, pe / de pe, de lângă*']]},
            ]),
            ('3. SUBIECTUL ȘI ACORDUL', [
                {'t': 'text', 'p': ['Subiectul răspunde la **cine?** și poate fi **simplu** sau **multiplu**. Predicatul se acordă cu subiectul în persoană și număr; la subiectul multiplu, acordul e **la plural**: *__Gerul__ și __zăpada__ _au făcut_ ravagii.*']},
            ]),
            ('4. REDACTAREA: DESCRIEREA UNUI OBIECT', [
                {'t': 'text', 'p': ['Introducerea (tema) → cuprinsul (aspectele obiectului, în detaliu) → încheierea (părerea mea).']},
            ]),
        ],
    },
]
