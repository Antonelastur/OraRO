# Scheme-notițe, clasa a VII-a, Unitatea a III-a „Harta sentimentelor”.
# Conținutul vine din rubricile Repere ale Manualului Art 7, pp. 92-117;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-7-unitatea-3.py

SUB = 'Clasa a VII-a · Unitatea a III-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-7/unitatea-3/lectia-3',
        'titlu': 'Limbajul figurat. Epitetul, personificarea, comparația, enumerația',
        'sub': SUB.format(n=3, pp='p. 92'),
        'sursa': 'Sursa: Manual Art 7, p. 92, rubrica Repere; textul de bază este „Lacul” de Mihai Eminescu.',
        'sect': [
            ('1. EPITETUL', [
                {'t': 'text', 'p': ['Determină un **substantiv** sau un **verb** prin cuvinte care arată **însușiri deosebite**.']},
                {'t': 'tabel', 'cap': ['Se exprimă prin', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['adjectiv', '*„nuferi galbeni”*'],
                       ['adverb', '*„să-mi cadă lin pe piept”*'],
                       ['substantiv (metale, pietre prețioase, materii)', '*„pădurii de argint”*']]},
            ]),
            ('2. PERSONIFICAREA', [
                {'t': 'text', 'p': ['Atribuie **însușiri omenești** unor ființe necuvântătoare, lucruri, fenomene.']},
                {'t': 'tabel', 'cap': ['Se obține prin', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['substantiv + verb de acțiune omenească', '*„lacul... tresărind”*'],
                       ['substantiv + adjectiv de însușire omenească', '*„blândei lune”*'],
                       ['substantiv în vocativ', '*„Doină, doină, cântic dulce”*']]},
            ]),
            ('3. COMPARAȚIA ȘI ENUMERAȚIA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'comparația', 'col': 't', 'p': ['raport de **asemănare** între doi termeni, ca să-l evidențieze pe unul', 'legătura: *ca, precum, cât, asemenea, aidoma, asemănător, întocmai*']},
                    {'titlu': 'enumerația', 'col': 'm', 'p': ['**înșiruire** de termeni de același fel (substantive, adjective, verbe)', 'fără întrerupere sau cu alte cuvinte intercalate']},
                ]},
            ]),
            ('4. CUM COMENTEZ O FIGURĂ DE STIL', [
                {'t': 'text', 'p': ['1. **numesc** figura și citez versul;',
                                    '2. arăt **din ce e alcătuită**;',
                                    '3. spun **ce sugerează**: ce imagine, ce stare, ce sentiment întărește.']},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-7/unitatea-3/lectia-6',
        'titlu': 'Limbajul figurat. Metafora',
        'sub': SUB.format(n=6, pp='pp. 97-98'),
        'sursa': 'Sursa: Manual Art 7, pp. 97-98, rubrica Repere și modelele din Aplicații.',
        'sect': [
            ('1. DE LA COMPARAȚIE LA METAFORĂ', [
                {'t': 'text', 'p': ['Un sens figurat se poate obține dintr-o **comparație** din care se elimină cuvântul de legătură, iar **comparantul** ia locul **comparatului**:']},
                {'t': 'tabel', 'cap': ['Comparația', 'Metafora'], 'lat': [0.5, 0.5],
                 'r': [['*Foșnetul de frunze este ca un hohot.*', '*„hohot de frunze”*'],
                       ['*Luna ca o seceră de argint strălucea noaptea pe cer.*', '*Secera de argint strălucea noaptea pe cer.*'],
                       ['*Ninsoarea ca o îmbrățișare mă cuprindea.*', '*Îmbrățișarea ninsorii mă cuprindea.*']]},
            ]),
            ('2. METAFORA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Metafora** trece de la sensul obișnuit al unui cuvânt la altul, pe baza unei **comparații subînțelese**. I se spune și „**comparație prescurtată**”; în greacă înseamnă „transfer”.']},
                {'t': 'text', 'p': ['• Metaforele sunt **substantive** sau **verbe**.',
                                    '• Se combină cu alte figuri: **epitetul** (*„hohot de frunze”*), repetiția, enumerația.',
                                    '• Uneori, un text întreg e o metaforă, ca **ghicitorile**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'explicită (clară)', 'col': 't', 'p': ['termenul la care se referă apare în text', '*„Lună tu, stăpâna mării...”*']},
                    {'titlu': 'implicită (mai puțin clară)', 'col': 'm', 'p': ['termenul nu apare în text', '*„zale argintie”* (zăpada)']},
                ]},
            ]),
            ('3. CUM DESCIFREZ O METAFORĂ', [
                {'t': 'text', 'p': ['1. caut cuvântul folosit cu **sens neobișnuit**;',
                                    '2. mă întreb **ce este ca...** acel cuvânt (refac comparația);',
                                    '3. explic **ce au în comun** cei doi termeni și ce sugerează imaginea.']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['În poezia secolului XX, expresivitatea vine adesea mai puțin din figuri de stil și mai mult din **amestecul de limbaje**.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-7/unitatea-3/lectia-14',
        'titlu': 'Substantivul. Locuțiunea substantivală',
        'sub': SUB.format(n=14, pp='pp. 108-109'),
        'sursa': 'Sursa: Manual Art 7, pp. 108-109, rubricile Repere.',
        'sect': [
            ('1. SUBSTANTIVUL', [
                {'t': 'tabel', 'cap': ['Categoria', 'Ce reținem'], 'lat': [0.2, 0.8],
                 'r': [['felul', '**comune** / **proprii**; **simple** / **compuse**'],
                       ['genul', 'masculin, feminin, neutru; **sufixele moționale** formează feminine din masculine și invers (*doctoriță, rățoi*); unele au o singură formă pentru ambele genuri: *albină, crap, elefant, părinte, star, vultur*'],
                       ['numărul', 'singular / plural; **nonnumărabile**: defective de plural (*jale*), defective de singular (*zori*); **masive**: *ulei* (materia) / *trei uleiuri* (sortimente)'],
                       ['colectivele', 'la singular, înțeles de plural; pot fi formate cu sufixe'],
                       ['articolul', 'nearticulat, articulat hotărât sau nehotărât']]},
            ]),
            ('2. CAZURILE ȘI FUNCȚIILE', [
                {'t': 'tabel', 'cap': ['Cazul', 'Funcțiile'], 'lat': [0.2, 0.8],
                 'r': [['**nominativ**', 'subiect, nume predicativ'],
                       ['**acuzativ**', 'complement direct, complement prepozițional, circumstanțiale, atribut prepozițional'],
                       ['**dativ**', 'complement indirect'],
                       ['**genitiv**', 'atribut genitival (uneori cu articol genitival)'],
                       ['**vocativ**', 'chemare, atenționare; **fără** funcție sintactică']]},
            ]),
            ('3. LOCUȚIUNEA SUBSTANTIVALĂ', [
                {'t': 'nota', 'p': ['Grup unitar de cuvinte, **sinonim cu un substantiv**, care se comportă ca un substantiv și poate fi determinat de **atribute**. Multe provin din **locuțiuni verbale** cu verbul substantivizat: *a-i părea rău* → *părere de rău*; *a-și aduce aminte* → *aducere aminte*.']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-7/unitatea-3/lectia-15',
        'titlu': 'Prepoziția. Locuțiunea prepozițională',
        'sub': SUB.format(n=15, pp='pp. 110-111'),
        'sursa': 'Sursa: Manual Art 7, pp. 110-111, rubricile Repere și nota despre „ca și”.',
        'sect': [
            ('1. PREPOZIȚIA', [
                {'t': 'text', 'p': ['Parte de vorbire **neflexibilă** care leagă un **atribut**, un **complement** sau un **circumstanțial** de cuvântul determinat.']},
                {'t': 'text', 'p': ['• **simple**: *cu, de, în, la, lângă*; **compuse**: *de la, de pe, de pe lângă, despre, înspre*;',
                                    '• unele au **sens** (*sub, lângă, spre*), altele doar **leagă** (*de, la, a*); unele depind de context: *Stă* **pe** *scaun.* / *Îl aștept* **pe** *el.*']},
            ]),
            ('2. LOCUȚIUNEA PREPOZIȚIONALĂ', [
                {'t': 'text', 'p': ['Grup unitar care se comportă ca o prepoziție: *față de, în loc de, în afara, cât despre, de-a curmezișul, în mijlocul, de jur împrejurul, de-a lungul*.']},
                {'t': 'atentie', 'p': ['Nu sunt locuțiuni: grupurile cu adverbe (*aproape de, departe de, alături de*) și îmbinările libere în care pot intercala un adjectiv (*cu scopul mărturisit, din punct de vedere economic*).']},
            ]),
            ('3. CE CAZ CER', [
                {'t': 'tabel', 'cap': ['Cazul', 'Prepoziții și locuțiuni'], 'lat': [0.18, 0.82],
                 'r': [['**acuzativ**', 'majoritatea: *către, cu, din, de, după, în, la, pe, prin*; *față de, în loc de, în afară de*'],
                       ['**genitiv**', '*asupra, contra*; cele din adverbe articulate: *deasupra, dedesubtul, înaintea, înăuntrul*; *în fața, în spatele, în mijlocul, în urma, în jurul, în preajma*'],
                       ['**dativ**', '*datorită, mulțumită, grație*']]},
                {'t': 'text', 'p': ['• *asemenea, aidoma, conform, contrar, potrivit* sunt **adverbe**, nu prepoziții.',
                                    '• În enumerare, după o prepoziție de genitiv, **articolul genitival** se reia: *asupra satelor,* **a** *orașelor,* **a** *câmpiilor*.']},
                {'t': 'nota', 'titlu': '„Ca și”', 'p': ['Nu adaug *și* după *ca* ca să evit o cacofonie: nu *ca și coleg*, ci **în calitate de** *coleg* sau **ca** *prieten*. *Ca și* e corect doar la comparativul de egalitate: *la fel de înalt ca și Dan*.']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-7/unitatea-3/lectia-16',
        'titlu': 'Posibilitățile combinatorii ale substantivului',
        'sub': SUB.format(n=16, pp='pp. 112-113'),
        'sursa': 'Sursa: Manual Art 7, pp. 112-113, rubrica Repere, tabelele și modelul de analiză.',
        'sect': [
            ('1. SUBIECTUL ȘI NUMELE PREDICATIV', [
                {'t': 'text', 'p': ['Față de verbul-predicat, substantivul poate fi **subiect** (interdependență: verbul îi impune nominativul, subiectul îi impune persoana și numărul) sau **nume predicativ**.']},
                {'t': 'tabel', 'cap': ['Numele predicativ în', 'Exemplu'], 'lat': [0.45, 0.55],
                 'r': [['nominativ', '*Ana este* **o prietenă** *bună.*'],
                       ['acuzativ cu prepoziție / locuțiune', '*Penarul este* **din plastic**.'],
                       ['genitiv cu prepoziție / locuțiune', '*El este* **contra conflictelor**. *Ea este* **de partea Inei**.']]},
            ]),
            ('2. SUBSTANTIVUL CENTRU: ATRIBUTUL SUBSTANTIVAL', [
                {'t': 'tabel', 'cap': ['Felul', 'Cazul', 'Exemplu'], 'lat': [0.27, 0.33, 0.4],
                 'r': [['genitival', 'genitiv fără prepoziție', '*Cartea* **copilului** *e pe masă.*'],
                       ['prepozițional', 'Ac., G. sau D. cu prepoziție / locuțiune', '*Cartea* **de la bunica**; *lupta* **contra violenței**; *succesul* **datorită perseverenței**'],
                       ['în nominativ', 'nominativ', '*Orașul* **Brașov** *este frumos.*'],
                       ['în dativ', 'dativ fără prepoziție', '*Predarea limbii române* **străinilor**...']]},
            ]),
            ('3. SUBSTANTIVUL ADJUNCT AL VERBULUI SAU AL ADJECTIVULUI', [
                {'t': 'tabel', 'cap': ['Funcția', 'Cazul', 'Exemplu'], 'lat': [0.28, 0.32, 0.4],
                 'r': [['complement direct', 'Ac. fără prepoziție sau cu *pe*', '*Îl văd* **pe Dan**.'],
                       ['complement indirect', 'D.', '*Îi dau* **băiatului** *un sfat.*'],
                       ['complement prepozițional', 'Ac. sau G. cu prepoziție', '*Luptă* **contra violenței**.'],
                       ['circumstanțial de loc', 'Ac. sau G. cu prepoziție / locuțiune', '*Se joacă* **în spatele blocului**.'],
                       ['circumstanțial de timp', 'Ac. sau G., cu sau fără prepoziție', '*A stat* **trei săptămâni**.'],
                       ['circumstanțial de mod / cauză / scop', 'Ac. cu prepoziție', '*Scrie* **fără grabă**. *E roșu* **de furie**. *Mergem* **la cumpărături**.']]},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„duduia” – substantiv comun, simplu, genul feminin, numărul singular, cazul nominativ, articulat cu articolul hotărât „-a”, funcția sintactică de subiect.*']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-7/unitatea-3/lectia-17',
        'titlu': 'Adjectivul. Gradele de comparație',
        'sub': SUB.format(n=17, pp='pp. 114-115'),
        'sursa': 'Sursa: Manual Art 7, pp. 114-115, rubricile Repere, tabelele și modelul de analiză.',
        'sect': [
            ('1. ADJECTIVUL', [
                {'t': 'text', 'p': ['Exprimă **însușirea** unui obiect; determină un substantiv sau un substitut. Poate fi **propriu-zis** (*emoție puternică*) sau provenit **din participiu** (*rochie cumpărată*), **din gerunziu** (*lumânare fumegândă*), **din adverb** (*oameni bine*).']},
                {'t': 'text', 'p': ['• **variabile**: cu 4 forme (*bun*), 3 forme (*grijuliu*), 2 forme (*limpede*); **invariabile**: *bordo, ditamai*;',
                                    '• se **acordă** în gen, număr și caz; antepus, preia articolul: *Bunul tată mă ocrotește.*;',
                                    '• se formează prin derivare (*amărui, nedemn*) și compunere (*roșu-închis, cumsecade*).']},
            ]),
            ('2. GRADELE DE COMPARAȚIE', [
                {'t': 'tabel', 'cap': ['Gradul', 'Cum se formează', 'Exemplu'], 'lat': [0.34, 0.36, 0.3],
                 'r': [['pozitiv', '', '*bun*'],
                       ['comparativ de egalitate', '*tot atât de, la fel de, tot așa de, deopotrivă de*', '*la fel de bun*'],
                       ['comparativ de superioritate / inferioritate', '*mai / mai puțin*', '*mai bun*'],
                       ['superlativ relativ', '*cel (cea, cei, cele) mai / mai puțin*', '*cel mai bun*'],
                       ['superlativ absolut', '*foarte, tare, prea* (+ *puțin*)', '*foarte bun*']]},
                {'t': 'tabel', 'cap': ['Superlativul absolut, expresiv', 'Exemple'], 'lat': [0.45, 0.55],
                 'r': [['adverb + *de*', '*grozav de bun, neînchipuit de frumos*'],
                       ['supin după adjectiv', '*frumoasă de speriat*'],
                       ['grupuri locuționale', '*din cale-afară de, peste măsură de*'],
                       ['adverbe din substantive', '*singur cuc, sănătos tun, foc de frumoasă*'],
                       ['*ce, cât* în exclamații; repetare; prefixe și sufixe', '*Ce bun tort! mare-mare; ultraparfumat, rarisim*']]},
                {'t': 'atentie', 'p': ['**Fără grade**: *superior, maxim, suprem* (comparative sau superlative în latină), *viu, complet, unic* (negradabile), *acvatic, biologic* (sensul nu permite).']},
            ]),
            ('3. LOCUȚIUNEA ADJECTIVALĂ', [
                {'t': 'text', 'p': ['Grup unitar **sinonim cu un adjectiv**, care se comportă ca un adjectiv și poate avea grade de comparație: *de treabă, cu nasul pe sus, de seamă*.']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„pozitivă” – adjectiv propriu-zis, variabil, cu patru forme flexionare, acordat în gen, număr și caz cu „atitudine” (feminin, singular, acuzativ), gradul pozitiv.*']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-7/unitatea-3/lectia-18',
        'titlu': 'Posibilitățile combinatorii ale adjectivului',
        'sub': SUB.format(n=18, pp='pp. 116-117'),
        'sursa': 'Sursa: Manual Art 7, pp. 116-117, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. ADJECTIVUL ADJUNCT', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'atribut adjectival', 'col': 't', 'p': ['în grupul nominal', 'determină un substantiv (*nota* **mare**), un pronume (*Dumnealui* **mai îndrăzneț**...), un numeral (*Doi* **mai triști**...)']},
                    {'titlu': 'nume predicativ', 'col': 'a', 'p': ['în grupul verbal', 'relație ternară cu subiectul și verbul copulativ', '*El pare* **vesel**.']},
                ]},
                {'t': 'text', 'p': ['Atributul adjectival se exprimă prin adjectiv propriu-zis (orice grad), din participiu (*emoția* **trăită**), gerunziu acordat (*vocea* **tremurândă**), din adverb (*un băiat* **bine**).']},
            ]),
            ('2. ADJECTIVUL CENTRU', [
                {'t': 'tabel', 'cap': ['Adjectivul e determinat de', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['complement prepozițional', '*El este plin* **de griji**. *Vrednic* **de respect**.'],
                       ['complement indirect', '*Ea este recunoscătoare* **colegilor**.'],
                       ['circumstanțial de loc', '*Ea este veselă* **la petreceri**.'],
                       ['circumstanțial de timp', '*El este îngândurat* **de zile bune**.'],
                       ['circumstanțial de mod', '*un copil frumos* **sufletește**'],
                       ['circumstanțial de cauză', '*Ana este slabă* **de nemâncată**.'],
                       ['circumstanțial de scop', '*Este atentă* **pentru a înțelege lecția**.']]},
            ]),
            ('3. DUBLUL ROL', [
                {'t': 'nota', 'p': ['Un adjectiv poate fi **în același timp** adjunct și centru: *Fata* **surprinsă** *de emoțiile ei vorbește cu mama.* – *surprinsă* e adjunct pentru *fata* și centru pentru complementul prepozițional *de emoțiile*.']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„scundă” – adjectiv propriu-zis, variabil, cu patru forme, acordat în gen, număr și caz cu „o fată” (feminin, singular, nominativ), gradul pozitiv, funcție sintactică de atribut adjectival.*']},
            ]),
        ],
    },
]
