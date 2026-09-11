# Scheme-notițe, clasa a VII-a, Unitatea a II-a „Aproape de ceilalți”.
# Conținutul vine din rubricile Repere ale Manualului Art 7, pp. 67-81;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-7-unitatea-2.py

SUB = 'Clasa a VII-a · Unitatea a II-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-7/unitatea-2/lectia-13',
        'titlu': 'Verbul. Tipuri de verbe. Locuțiunea verbală',
        'sub': SUB.format(n=13, pp='pp. 67-69'),
        'sursa': 'Sursa: Manual Art 7, pp. 67-69, rubricile Repere și modelele de analiză.' + CREATE,
        'sect': [
            ('1. PREDICATIVE ȘI NEPREDICATIVE', [
                {'t': 'text', 'p': ['**Verbul** arată acțiunea, starea sau existența. **Predicativele** pot alcătui singure predicatul (*El citește mult.*); **nepredicativele** nu pot.']},
                {'t': 'tabel', 'cap': ['Auxiliarul', 'Formează'], 'lat': [0.18, 0.82],
                 'r': [['**a avea**', 'indicativ perfect compus (*am lucrat*); condițional-optativ prezent (*aș lucra*) și perfect (*aș fi lucrat*)'],
                       ['**a vrea**', 'indicativ viitor (*vei lucra*) și viitor anterior (*vei fi lucrat*)'],
                       ['**a fi**', 'viitor anterior (*vor fi aflat*), conjunctiv perfect (*să fi plouat*), condițional-optativ perfect (*aș fi venit*)']]},
            ]),
            ('2. VERBELE COPULATIVE', [
                {'t': 'text', 'p': ['Nu au sens deplin singure: cer un **nume predicativ**, cu care formează **predicatul nominal**.']},
                {'t': 'tabel', 'cap': ['Verbul', 'Este copulativ când', 'Exemplu'], 'lat': [0.16, 0.44, 0.4],
                 'r': [['**a fi**', 'nu înseamnă „a se afla, a exista, a dura”', '*El este perseverent.*'],
                       ['**a deveni**', 'întotdeauna', '*A devenit profesor.*'],
                       ['**a ajunge, a ieși, a se face**', 'înseamnă „a deveni”', '*A ajuns faimoasă. S-a făcut inginer.*'],
                       ['**a însemna**', 'nu înseamnă „a nota”; arată echivalența', '*Prietenia înseamnă respect.*'],
                       ['**a rămâne**', 'înseamnă „a-și păstra însușirile”', '*El a rămas nedumerit.*'],
                       ['**a părea**', 'propoziția are subiect', '*Ei păreau veseli.*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['*A fi* poate fi copulativ (*Sunt curajos.*), predicativ (*Sunt multe cărți pe raft.*) sau auxiliar (*Aș fi plâns.*).']},
            ]),
            ('3. LOCUȚIUNEA VERBALĂ', [
                {'t': 'text', 'p': ['Grup unitar de cuvinte, **sinonim cu un verb**, care are întotdeauna un **verb** în componență: *a băga de seamă* (= a observa), *a-și da seama* (= a înțelege).']},
                {'t': 'text', 'p': ['• Se comportă ca un verb: are **complemente** și **circumstanțiale**, **nu** atribute; substantivele din ea sunt, de obicei, nearticulate.',
                                    '• Cu verbul la un mod personal, e **predicat verbal**. Apare des în vorbire.']},
                {'t': 'nota', 'titlu': 'Modele de analiză:', 'p': ['*„a ajuns popă” – predicat nominal: verbul copulativ „a ajunge”, indicativ perfect compus, persoana a III-a, singular + numele predicativ „popă” (substantiv comun, masculin, singular, nominativ, nearticulat).*',
                                                                         '*„aduc aminte” – locuțiune verbală: verb la indicativ prezent, persoana I, singular + adverbul „aminte”.*']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-7/unitatea-2/lectia-15',
        'titlu': 'Modurile și timpurile verbului',
        'sub': SUB.format(n=15, pp='pp. 70-73'),
        'sursa': 'Sursa: Manual Art 7, pp. 70-73, rubricile Repere.',
        'sect': [
            ('1. MODURILE', [
                {'t': 'text', 'p': ['**Modul** arată cum privește vorbitorul acțiunea. Verbele la moduri personale își schimbă forma după persoană și număr și sunt **predicate**.']},
                {'t': 'tabel', 'cap': ['Modul', 'Arată', 'Exemplu'], 'lat': [0.22, 0.46, 0.32],
                 'r': [['**indicativ**', 'acțiune **sigură, reală**', '*Ei au plecat.*'],
                       ['**imperativ**', 'ordin, îndemn, sfat, rugăminte', '*Plecați mai repede!*'],
                       ['**conjunctiv**', 'acțiune **posibilă, realizabilă** (marca *să*)', '*Vreau să plec.*'],
                       ['**condițional-optativ**', 'acțiune posibilă sau **dorită**, care depinde de o condiție', '*Aș pleca la munte.*']]},
            ]),
            ('2. TIMPURILE INDICATIVULUI', [
                {'t': 'tabel', 'cap': ['Timpul', 'Ce arată', 'Exemplu'], 'lat': [0.24, 0.46, 0.3],
                 'r': [['**prezent**', 'acțiunea din momentul vorbirii; adevăruri generale, proverbe', '*lucrez; Leneșul mai mult aleargă.*'],
                       ['**imperfect**', 'acțiune trecută, în paralel cu alta (sufixe *-a-, -ea-*)', '*cântam, păream*'],
                       ['**perfect compus**', 'acțiune trecută, încheiată (*a avea* + participiu)', '*am lucrat*'],
                       ['**perfect simplu**', 'acțiune încheiată; timpul povestirii la pers. a III-a', '*lucră, lucrară*'],
                       ['**mai-mult-ca-perfect**', 'acțiune încheiată înaintea altei acțiuni trecute (*-se-*)', '*lucrasem*'],
                       ['**viitor**', 'după momentul vorbirii; scris: *voi veni*; vorbit: *am să / o să ascult*', '*voi veni*'],
                       ['**viitor anterior**', 'acțiune viitoare, încheiată înaintea alteia viitoare', '*vor fi început*'],
                       ['**viitor în trecut**', 'viitor văzut dintr-un moment trecut (*aveam* + conjunctiv)', '*aveam să înțeleg*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Forme regionale: perfect compus cu *o, or* (*o venit*); perfect simplu la persoana I în Oltenia, Banat, Crișana (*Abia venii.*); viitor cu *oi, ăi, or* (*oi veni*).']},
            ]),
            ('3. CELELALTE MODURI', [
                {'t': 'tabel', 'cap': ['Modul', 'Forme'], 'lat': [0.25, 0.75],
                 'r': [['**imperativ**', 'fără timpuri; doar persoana a II-a; negativ singular: *nu* + infinitiv (*Nu veni!*); plural: *nu* + imperativ (*Nu veniți!*); *a fi*: *fii / nu fi*'],
                       ['**conjunctiv**', 'prezent: *să vin, să vină*; perfect: *să fi venit* (aceeași formă la toate persoanele)'],
                       ['**condițional-optativ**', 'prezent: *aș veni* (*a avea* + infinitiv); perfect: *aș fi venit*']]},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-7/unitatea-2/lectia-16',
        'titlu': 'Infinitivul și participiul',
        'sub': SUB.format(n=16, pp='pp. 74-75'),
        'sursa': 'Sursa: Manual Art 7, pp. 74-75, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. INFINITIVUL', [
                {'t': 'text', 'p': ['Denumește o acțiune sau o stare; este **forma de dicționar** a verbului. Apare cu *a* (*A ajuta este o dovadă de generozitate.*) sau fără *a* (*Pot rezolva.*).']},
                {'t': 'tabel', 'cap': ['Conjugarea', 'I', 'a II-a', 'a III-a', 'a IV-a', 'a V-a'], 'lat': [0.2, 0.16, 0.16, 0.16, 0.16, 0.16], 'al': ['l', 'c', 'c', 'c', 'c', 'c'],
                 'r': [['exemplu', '*a lucra*', '*a vedea*', '*a râde*', '*a vorbi*', '*a hotărî*']]},
                {'t': 'tabel', 'cap': ['Funcția infinitivului', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['subiect', '**A visa** *este minunat.*'],
                       ['nume predicativ', '*Pasiunea lui este* **de a explora** *culturi diferite.*'],
                       ['complement direct', '*Pot* **învăța** *din greșeli.*'],
                       ['complement prepozițional', '*Se gândește* **la a da** *un mesaj.*'],
                       ['atribut verbal', '*teama* **de a vorbi** *în public*']]},
            ]),
            ('2. PARTICIPIUL', [
                {'t': 'text', 'p': ['Arată o acțiune **terminată**, suferită sau îndeplinită. Intră în **timpurile compuse**: *am vorbit, voi fi vorbit, să fi vorbit, aș fi vorbit*.']},
                {'t': 'tabel', 'cap': ['Sufixul', 'Verbele', 'Exemple'], 'lat': [0.14, 0.5, 0.36],
                 'r': [['**-at**', 'conjugarea I', '*cântat, lucrat*'],
                       ['**-ut**', 'a II-a și unele de a III-a', '*văzut, făcut*'],
                       ['**-s**', 'unele de a III-a', '*mers, rămas*'],
                       ['**-t**', 'puține de a III-a', '*copt, rupt*'],
                       ['**-it**', 'a IV-a', '*citit, vorbit*'],
                       ['**-ât**', 'a V-a', '*doborât, pârât*']]},
                {'t': 'text', 'p': ['Singur, participiul devine **adjectiv**: atribut (*cartea citită*) sau nume predicativ (*Amintirile sunt plăcute.*). Negativ: *ne-* (*neaflat*), cu *mai* intercalat (*nemaiauzit*).']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„a învăța” – verb predicativ, conjugarea I, infinitiv, funcția sintactică de subiect.*']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-7/unitatea-2/lectia-17',
        'titlu': 'Gerunziul și supinul',
        'sub': SUB.format(n=17, pp='pp. 76-77'),
        'sursa': 'Sursa: Manual Art 7, pp. 76-77, rubricile Repere, tabelele și modelele de analiză.',
        'sect': [
            ('1. GERUNZIUL', [
                {'t': 'text', 'p': ['Denumește o acțiune **în desfășurare**, fără legătură precisă cu momentul vorbirii. Sufixe: **-ând** (*lucrând, mergând*), **-ind** (*muncind, fugind*).']},
                {'t': 'text', 'p': ['• negativ cu *ne-* (*neauzind*), cu *mai* intercalat (*nemaiauzind*);',
                                    '• cliticele se leagă după el: *văzându-mă, văzând-o*;',
                                    '• acordat cu un substantiv, devine adjectiv (**gerunziu acordat**): *cu buzele tremurânde*.']},
                {'t': 'tabel', 'cap': ['Funcția', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['circumstanțial de mod', '*Cântă* **atingând** *clapele cu grație.*'],
                       ['circumstanțial de timp', '**Trecând** *prin parc, a văzut-o pe Maria.*'],
                       ['atribut verbal', '*Cu hainele* **fluturând**, *alerga spre pădure.*'],
                       ['complement direct', '*Văd* **fulgerând** *în noapte.*']]},
            ]),
            ('2. SUPINUL', [
                {'t': 'text', 'p': ['Denumește acțiunea, ca infinitivul. Se formează din **prepoziție + participiu**: *de, din, după, la, pentru*. Negativ: *de neînțeles*.']},
                {'t': 'tabel', 'cap': ['Funcția', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['subiect', '**De spus** *e ușor,* **de făcut** *e mai dificil.*'],
                       ['nume predicativ', '*Îndemnul lui este* **de urmat**.'],
                       ['atribut verbal', '*cartofi* **de copt**, *cartofi* **de prăjit**'],
                       ['complement direct', '*Am terminat* **de citit**.'],
                       ['complement prepozițional', '*M-am plictisit* **de așteptat** *în stație.*']]},
            ]),
            ('3. MODELE DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„mergând” – verb predicativ, conjugarea a III-a, gerunziu, funcția sintactică de circumstanțial de mod.*',
                                    '*„de făcut” – verb predicativ, conjugarea a III-a, supin, funcția sintactică de complement direct.*']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-7/unitatea-2/lectia-18',
        'titlu': 'Posibilitățile combinatorii ale verbului. Circumstanțialul de cauză',
        'sub': SUB.format(n=18, pp='pp. 78-80'),
        'sursa': 'Sursa: Manual Art 7, pp. 78-80, rubricile Repere.',
        'sect': [
            ('1. VERBUL CA CENTRU', [
                {'t': 'text', 'p': ['Cu mod personal, verbul este **centrul grupului verbal**: **predicat verbal** (verb predicativ) sau, cu un nume predicativ, **predicat nominal**.']},
                {'t': 'tabel', 'cap': ['Verbul se combină cu', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['**subiectul** (interdependență)', '*Preotul* **ajută**.'],
                       ['**numele predicativ** (relație ternară)', '*Oamenii sunt* **fericiți**.'],
                       ['**complement direct / prepozițional / indirect**', '*Am văzut* **un film**. *A apelat* **la voluntari**. *Li s-a adresat* **sătenilor**.'],
                       ['**circumstanțiale** de loc, timp, mod', '*A intrat* **în biserică**. *Vine* **sâmbăta viitoare**. *Îi ajută* **cu prietenie**.']]},
                {'t': 'text', 'p': ['Infinitivul, supinul și gerunziul pot fi, mai ales: **atribut verbal** (*dorința de a reuși, porumb de fiert, lacrimi șiroind*), **complement direct** (*Pot învăța. Am terminat de învățat.*), **complement prepozițional** (*M-am plictisit de citit.*).']},
            ]),
            ('2. CIRCUMSTANȚIALUL DE CAUZĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Subordonat **facultativ** al verbului; arată **cauza** unei acțiuni sau a unei însușiri. Răspunde la: **din ce cauză? din ce pricină?**']},
                {'t': 'tabel', 'cap': ['Se exprimă prin', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['substantiv, pronume, numeral în Ac. cu *de, din, pentru, după*', '*A plâns* **de emoție**. *Să nu te superi* **pentru mine**!'],
                       ['adjectiv cu prepoziție', '**De zgârcit**, *nu le-a dat copiilor nimic.*'],
                       ['gerunziu', '**Citind** *cu atenție textul, ai înțeles personajul.*']]},
                {'t': 'atentie', 'titlu': 'Virgula', 'p': ['De obicei stă **după** verb (*Cântă de bucurie.*). Exprimat prin **adjectiv cu prepoziție** sau **gerunziu** și pus **înainte**, e urmat **obligatoriu** de virgulă: *De invidios, nu l-a felicitat. Nevăzând groapa, a alunecat.*']},
            ]),
        ],
    },
    # ---------------- Lecția 20 ----------------
    {
        'cale': 'clasa-7/unitatea-2/lectia-20',
        'titlu': 'Circumstanțialul de scop',
        'sub': SUB.format(n=20, pp='p. 81'),
        'sursa': 'Sursa: Manual Art 7, p. 81, rubrica Repere și modelul de analiză.' + CREATE,
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Subordonat **facultativ** al verbului; arată **scopul** (finalitatea) acțiunii. Răspunde la: **cu ce scop? în ce scop?**']},
                {'t': 'text', 'p': ['Poate depinde de un verb la un mod personal sau de o formă nepersonală: *Au ieșit* **la strâns gunoaiele**. *S-a remarcat, muncind* **pentru a-și împlini visul**.']},
            ]),
            ('2. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.4, 0.6],
                 'r': [['substantiv (sau substitut) cu prepoziție', '*Au muncit* **pentru ajutorarea comunității**.'],
                       ['infinitiv cu prepoziție', '*Lucrează* **pentru a ajuta** *comunitatea.*'],
                       ['supin', '*Au plecat* **la cules** *mere.*']]},
                {'t': 'atentie', 'titlu': 'Virgula', 'p': ['Poate sta înainte sau după verb. Pus **înainte**, se desparte prin **virgulă**: *Pentru a reuși, a făcut eforturi mari.*']},
            ]),
            ('3. CAUZĂ SAU SCOP?', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'cauza', 'col': 'n', 'p': ['motivul, **înainte** de acțiune', '*A plâns* **de durere**.']},
                    {'titlu': 'scopul', 'col': 'a', 'p': ['ce urmărește acțiunea, **după** ea', '*A plecat* **la cules** *mere.*']},
                ]},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„pentru a inspira” – circumstanțial de scop, exprimat prin verb predicativ, conjugarea I, infinitiv, precedat de prepoziția simplă „pentru”.*']},
            ]),
        ],
    },
]
