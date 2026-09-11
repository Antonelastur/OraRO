# Scheme-notițe, clasa a VI-a, Unitatea a IV-a „Popasuri cu tâlc”.
# Conținutul vine din rubricile Repere ale Manualului Art 6, pp. 124-149;
# exemplele noi sunt anunțate în subsol. Fabula lui Grigore Alexandrescu apare
# aici cu forma „Uliul și găinile”. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-6-unitatea-4.py

SUB = 'Clasa a VI-a · Unitatea a IV-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-6/unitatea-4/lectia-2',
        'titlu': 'Textul narativ în versuri. Fabula',
        'sub': SUB.format(n=2, pp='pp. 124-125'),
        'sursa': 'Sursa: Manual Art 6, pp. 124-125, rubrica Repere; textul de bază este fabula „Uliul și găinile” de Grigore Alexandrescu.',
        'sect': [
            ('1. NARAȚIUNEA ÎN VERSURI', [
                {'t': 'text', 'p': ['Textul narativ literar poate fi scris **în proză** sau **în versuri**. În versuri, un **narator** relatează o întâmplare la care iau parte mai multe **personaje**.']},
                {'t': 'text', 'p': ['• acțiunea este **alertă**; · dialogurile sunt **vii**;',
                                    '• contează **muzicalitatea**: rime variate, versuri lungi și scurte, ritm.']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Își are originea în **tradițiile orale**: întâmplări eroice (*Iliada*, *Odiseea*, cântece despre cavaleri și haiduci) sau întâmplări cu tâlc, ușor de ținut minte.']},
            ]),
            ('2. FABULA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Fabula** oferă o **lecție de viață** printr-o întâmplare simplă, pusă pe seama unor **animale, plante sau obiecte** cu trăsături omenești.']},
                {'t': 'text', 'p': ['Pentru că întâmplarea are o semnificație valabilă oricând, **spațiul și timpul** sunt **vag precizate**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'narațiunea', 'col': 't', 'p': ['întâmplarea, cu personajele ei']},
                    {'titlu': 'morala', 'col': 'a', 'p': ['**explicită**: rostită de narator sau de un personaj', '**implicită**: o deduce cititorul']},
                ]},
            ]),
            ('3. CUM URMĂRESC ÎNTÂMPLAREA', [
                {'t': 'text', 'p': ['Leg întâmplările în **lanț**, cauză și efect: *... așa că ... · ... astfel încât ... · ... ca urmare ...*',
                                    'Observ timpurile verbelor în narațiune și în dialog și ce efect au versurile lungi alternând cu cele scurte.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-6/unitatea-4/lectia-3',
        'titlu': 'Enumerația. Personajele fabulei',
        'sub': SUB.format(n=3, pp='pp. 126-127'),
        'sursa': 'Sursa: Manual Art 6, pp. 126-127, rubricile Repere și schema personajelor din Explorare.' + CREATE,
        'sect': [
            ('1. ENUMERAȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Enumerația** este înșiruirea mai multor termeni de același fel (substantive, adjective, verbe), ca să **accentueze** o idee sau să **detalieze** ce se descrie. Termenii se despart prin **virgulă**.']},
                {'t': 'text', 'p': ['*În ogradă erau* **rațe, gâște, curci și găini**.']},
            ]),
            ('2. PERSONAJELE FABULEI', [
                {'t': 'text', 'p': ['Personajele (animale, plante, păsări, obiecte) sunt **personificate**: devin **măști** pentru anumite tipuri de oameni, criticați pentru defectele lor: **prostia, lăudăroșenia, dorința de putere, cruzimea, orgoliul, zgârcenia**.']},
                {'t': 'tabel', 'cap': ['Criteriul', 'Personaje'], 'lat': [0.3, 0.7],
                 'r': [['importanța', 'principale / secundare'],
                       ['numărul', 'individuale / colective'],
                       ['natura', 'umane / animaliere (sau plante, obiecte)']]},
            ]),
            ('3. OPOZIȚIA DINTRE PERSONAJE', [
                {'t': 'text', 'p': ['Întâmplarea se bazează, de obicei, pe **opoziția dintre două personaje**, vizibilă chiar în titlu: *Greierele și furnica, Lupul și mielul, Corbul și vulpea, Stejarul și trestia*.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'la început', 'col': 't', 'p': ['un personaj e într-o poziție **superioară** (se mândrește, se laudă)', 'celălalt e într-o poziție **inferioară**']},
                    {'titlu': 'după un eveniment neprevăzut', 'col': 'm', 'p': ['**raportul se inversează**']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-6/unitatea-4/lectia-10',
        'titlu': 'Inteligența emoțională',
        'sub': SUB.format(n=10, pp='p. 135'),
        'sursa': 'Sursa: Manual Art 6, p. 135, rubricile Repere și Portofoliu.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Inteligența emoțională** este capacitatea de a-ți **înțelege** emoțiile și de a le **folosi în mod pozitiv**.']},
            ]),
            ('2. CELE TREI COMPONENTE', [
                {'t': 'tabel', 'cap': ['Componenta', 'Ce înseamnă'], 'lat': [0.3, 0.7],
                 'r': [['**conștientizarea de sine**', 'mă observ, îmi recunosc sentimentele, îmi cunosc punctele tari și slabe, îmi reglez stările'],
                       ['**empatia**', 'înțeleg sentimentele și grijile celorlalți, privesc situația din perspectiva lor, știu că oamenii simt și reacționează diferit și nu-i învinovățesc pentru asta'],
                       ['**autocontrolul emoțional**', 'înțeleg legătura dintre gânduri, reacții și emoții, dintre fapte și consecințe; găsesc metode să stăpânesc teama, mânia, tristețea, neliniștea, stresul; rămân motivat pozitiv']]},
            ]),
            ('3. PRIM AJUTOR EMOȚIONAL', [
                {'t': 'nota', 'titlu': 'Exemplu din manual:', 'p': ['Cineva cu stima de sine scăzută spune: *„Nimic nu îmi iese cum trebuie.”* Ce îl poate ajuta: *„Amintește-ți ce calități ai.” „Amintește-ți ce lucruri grozave ai făcut până acum.” „Nimănui nu îi ies toate lucrurile așa cum și-ar dori.”*']},
                {'t': 'text', 'p': ['Într-un conflict: numesc **ce simt**, ascult ce simte celălalt, caut **mai multe soluții** și aleg una bună pentru amândoi.']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-6/unitatea-4/lectia-11',
        'titlu': 'Pronumele personal și pronumele de politețe',
        'sub': SUB.format(n=11, pp='pp. 136-137'),
        'sursa': 'Sursa: Manual Art 6, pp. 136-137, rubrica Repere și tabelul formelor; pronumele de politețe din exemplele de la pp. 136-140.',
        'sect': [
            ('1. PRONUMELE PERSONAL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Pronumele personal** ține locul unui substantiv. Are **trei persoane**, **două numere**; **genul** apare numai la persoana a III-a.']},
                {'t': 'text', 'p': ['Toate cazurile au forme **accentuate**; la acuzativ și dativ există și forme **neaccentuate** (**clitice**).']},
            ]),
            ('2. FORMELE PRONUMELUI PERSONAL', [
                {'t': 'tabel', 'cap': ['', 'eu', 'tu', 'el / ea', 'noi', 'voi', 'ei / ele'], 'lat': [0.13, 0.13, 0.13, 0.16, 0.13, 0.14, 0.18], 'al': ['l', 'c', 'c', 'c', 'c', 'c', 'c'], 's': 13,
                 'r': [['**N**', 'eu', 'tu', 'el / ea', 'noi', 'voi', 'ei / ele'],
                       ['**G**', '–', '–', 'lui / ei', '–', '–', 'lor'],
                       ['**D** acc.', 'mie', 'ție', 'lui / ei', 'nouă', 'vouă', 'lor'],
                       ['**D** clitic', 'îmi, mi', 'îți, ți', 'îi, i', 'ne, ni', 'vă, v-, vi', 'le, li'],
                       ['**Ac** acc.', 'mine', 'tine', 'el / ea', 'noi', 'voi', 'ei / ele'],
                       ['**Ac** clitic', 'mă, m-', 'te', 'îl, l- / o', 'ne', 'vă, v-', 'îi, i- / le'],
                       ['**V**', '–', 'tu!', '–', '–', 'voi!', '–']]},
            ]),
            ('3. PRONUMELE DE POLITEȚE', [
                {'t': 'text', 'p': ['Arată **respectul** față de persoana cu care sau despre care vorbim.']},
                {'t': 'tabel', 'cap': ['Persoana', 'Forme'], 'lat': [0.25, 0.75],
                 'r': [['a II-a', '*dumneata (matale), dumitale; dumneavoastră; domnia-ta, domnia-voastră, domniile-voastre*'],
                       ['a III-a', '*dumnealui, dumneaei, dumnealor; dânsul, dânsa, dânșii, dânsele; domnia-sa, domniile-lor*']]},
                {'t': 'atentie', 'titlu': 'Ortograme', 'p': ['*l-a* (pe el l-a văzut) ≠ *la* (merge la școală) · *ne-a* (ne-a spus) ≠ *nea* (zăpadă) · *ți-i* (ți-i dau) ≠ *ții* (tu ții)']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-6/unitatea-4/lectia-13',
        'titlu': 'Funcțiile sintactice ale pronumelui',
        'sub': SUB.format(n=13, pp='pp. 140-141'),
        'sursa': 'Sursa: Manual Art 6, pp. 140-141, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. CA SUBSTANTIVUL', [
                {'t': 'text', 'p': ['Pronumele personal și cel de politețe au **aceleași funcții sintactice ca substantivul**. Pot fi **centru** al unui grup (*Dumneata* **de lângă geam**, *vino aici!*) sau **adjunct** (*cartea* **de la voi**).']},
            ]),
            ('2. FUNCȚIILE ȘI CAZURILE', [
                {'t': 'tabel', 'cap': ['Funcția', 'Cazul', 'Exemple'], 'lat': [0.33, 0.1, 0.57], 'al': ['l', 'c', 'l'],
                 'r': [['subiect', 'N', '*Ei au acceptat provocarea. Dumnealor au aflat?*'],
                       ['nume predicativ', 'N', '*Mesagerul este el.*'],
                       ['atribut pronominal prepozițional', 'Ac', '*Veștile despre dânșii sunt bune.*'],
                       ['atribut pronominal genitival', 'G', '*Unde a dispărut caietul ei?*'],
                       ['complement direct', 'Ac', '*Pe dumneavoastră v-am întâlnit ieri?*'],
                       ['complement prepozițional', 'Ac', '*Vorbim despre ele.*'],
                       ['complement indirect', 'D', '*Le-am spus doar lor vestea.*'],
                       ['circumstanțial de loc', 'Ac', '*Plec la ei.*'],
                       ['circumstanțial de mod', 'Ac', '*Procedează ca mine!*'],
                       ['circumstanțial de timp', 'Ac', '*Am sosit după voi.*']]},
            ]),
            ('3. ANTICIPAREA ȘI RELUAREA PRIN CLITICE', [
                {'t': 'tabel', 'cap': ['', 'Complement direct', 'Complement indirect'], 'lat': [0.2, 0.4, 0.4],
                 'r': [['**anticipare** (cliticul înainte)', '**L**-*am întrebat* **pe dânsul**.', '**I**-*am dat* **Anei** *o carte.*'],
                       ['**reluare** (cliticul după)', '**Pe Ana** *am văzut*-**o** *ieri.*', '**Mamei** **i**-*am adus o ciocolată.*']]},
                {'t': 'atentie', 'p': ['Când apar două clitice, cel de **dativ** stă **înaintea** celui de **acuzativ**: *Mi l-a dat ieri. Adu-i-le imediat.*']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„i” – pronume personal, persoana a III-a, numărul singular, genul masculin, cazul dativ, formă neaccentuată, funcție sintactică de complement indirect (reluare).*']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-6/unitatea-4/lectia-15',
        'titlu': 'Pronumele reflexiv',
        'sub': SUB.format(n=15, pp='pp. 142-143'),
        'sursa': 'Sursa: Manual Art 6, pp. 142-143, rubricile Repere și modelul de analiză.',
        'sect': [
            ('1. CE ARATĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Pronumele reflexiv** arată că persoana asupra căreia se îndreaptă acțiunea este **aceeași cu subiectul**.']},
                {'t': 'text', 'p': ['*Mama* **se** *machiază și* **își** *dă cu parfum.*']},
            ]),
            ('2. FORMELE PROPRII (PERSOANA A III-A)', [
                {'t': 'tabel', 'cap': ['Cazul', 'Accentuate', 'Neaccentuate (clitice)'], 'lat': [0.3, 0.35, 0.35], 'al': ['l', 'c', 'c'],
                 'r': [['**acuzativ**', '(pe) sine', 'se, s-'],
                       ['**dativ**', 'sieși, sie', 'își, și-']]},
                {'t': 'text', 'p': ['Formele sunt **aceleași la singular și la plural** și nu au gen.']},
            ]),
            ('3. PERSOANELE I ȘI A II-A', [
                {'t': 'text', 'p': ['Împrumută **formele neaccentuate ale pronumelui personal** (*mă, te, ne, vă; îmi, îți, ne, vă*). Sunt reflexive când au **aceeași persoană și același număr cu verbul**:']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'reflexiv', 'col': 't', 'p': ['**Mă** *întreb.*', 'I sg. + I sg.: aceeași persoană']},
                    {'titlu': 'personal', 'col': 'm', 'p': ['**Mă** *întreabă.*', 'I sg. + III sg.: persoane diferite']},
                ]},
                {'t': 'atentie', 'titlu': 'Ortograme', 'p': ['*s-a* (se a: *s-a spălat*) ≠ *sa* (a sa) · *s-au* (se au: *s-au încurajat*) ≠ *sau* (ori)']},
                {'t': 'nota', 'titlu': 'Model de analiză:', 'p': ['*„și” – pronume reflexiv, persoana a III-a, numărul singular, cazul dativ, formă neaccentuată.*']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-6/unitatea-4/lectia-16',
        'titlu': 'Numeralul. Valorile numeralului',
        'sub': SUB.format(n=16, pp='pp. 144-145'),
        'sursa': 'Sursa: Manual Art 6, pp. 144-145, rubricile Repere.',
        'sect': [
            ('1. NUMERALUL CARDINAL', [
                {'t': 'text', 'p': ['**Numeralul** exprimă un **număr** sau arată **ordinea** obiectelor prin numărare. **Cardinalul** exprimă un număr.']},
                {'t': 'tabel', 'cap': ['Structura', 'Exemple'], 'lat': [0.45, 0.55],
                 'r': [['**simple**: de la 1 la 10', '*unu/una, doi/două, trei, ..., zece*'],
                       ['**compuse**: de la 11 la 19', '*unsprezece, doisprezece*'],
                       ['compuse cu *zeci*', '*douăzeci, treizeci*'],
                       ['compuse cu *sută, mie, milion, miliard*', '*o sută, două mii, trei milioane*'],
                       ['structură mixtă, cu *și* sau *de*', '*o sută treizeci și patru, douăzeci de mii*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Cardinalele **nu au gen**, în afară de *unu/una, doi/două* și compusele lor: *doisprezece băieți / douăsprezece fete*.']},
            ]),
            ('2. NUMERALUL ORDINAL', [
                {'t': 'text', 'p': ['Exprimă **ordinea**; are forme după gen: *primul/prima, întâiul/întâia, al doilea/a doua*.']},
                {'t': 'tabel', 'cap': ['', 'Marcă', 'Cardinal', 'Articol / particulă'], 'lat': [0.25, 0.25, 0.25, 0.25], 'al': ['l', 'c', 'c', 'c'],
                 'r': [['masculin', '**al**', 'șapte', '**-le-a**'], ['feminin', '**a**', 'șapte', '**-a**']]},
            ]),
            ('3. VALORILE NUMERALULUI', [
                {'t': 'tabel', 'cap': ['Valoarea', 'Când', 'Exemple'], 'lat': [0.18, 0.44, 0.38],
                 'r': [['**adjectivală**', 'însoțește un substantiv și se acordă cu el; de obicei stă înainte', '*trei cai, a doua stradă, cel de-al treilea copil*'],
                       ['**pronominală**', 'înlocuiește un substantiv', '*Două dintre cărți mi-au plăcut. A treia, mai puțin.*'],
                       ['**substantivală**', 'ca denumire sau în matematică', '*tramvaiul 34, anul 1848; Doi plus trei fac cinci.*']]},
                {'t': 'atentie', 'p': ['De la **douăzeci** în sus, cardinalul se leagă de substantiv prin **de**: *douăzeci* **de** *copii, treizeci și șapte* **de** *caiete*.']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-6/unitatea-4/lectia-19',
        'titlu': 'Textul explicativ',
        'sub': SUB.format(n=19, pp='pp. 148-149'),
        'sursa': 'Sursa: Manual Art 6, pp. 148-149, rubrica Repere, recomandările din Aplicații și grila de verificare.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul explicativ** oferă informații organizate dintr-un domeniu al cunoașterii, ca să ne ajute să **înțelegem** un fenomen, un fapt, o situație.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'cauzal: DE CE?', 'col': 't', 'p': ['explică fenomene, evenimente, idei', 'articole de dicționar, texte din manuale, enciclopedii, presă']},
                    {'titlu': 'procedural: CUM?', 'col': 'm', 'p': ['explică pașii pentru a face ceva', 'rețete, instrucțiuni, prospecte, reguli de joc']},
                ]},
            ]),
            ('2. CUVINTELE EXPLICAȚIEI', [
                {'t': 'tabel', 'cap': ['Exprimă', 'Cuvinte'], 'lat': [0.35, 0.65],
                 'r': [['cauza', '*fiindcă, pentru că, din motivul, de aceea*'],
                       ['consecința, concluzia', '*așadar, ca urmare*'],
                       ['o explicație suplimentară', '*mai exact, adică, cu alte cuvinte*'],
                       ['pașii (procedural)', '*mai întâi, apoi, în cele din urmă*']]},
            ]),
            ('3. TEXTUL PROCEDURAL', [
                {'t': 'text', 'p': ['• e împărțit în **părți distincte**, cu **subtitluri**, **marcatori**, cuvinte colorate sau îngroșate;',
                                    '• poate avea **imagini** și **tabele** care completează explicația;',
                                    '• verbele: de regulă **indicativ prezent, persoana a III-a**; uneori **imperativ** sau **infinitiv**.']},
                {'t': 'nota', 'titlu': 'Verific:', 'p': ['am explicat clar cauzele sau pașii? · am folosit cuvinte care ușurează înțelegerea? · vocabular precis, potrivit cititorului? · imagini sau marcatori? · verbele la modurile recomandate?']},
            ]),
        ],
    },
]
