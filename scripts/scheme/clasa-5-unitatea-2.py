# Scheme-notițe, clasa a V-a, Unitatea II „De-a ce mă joc”. Conținutul vine
# din rubricile Repere ale Manualului Art 5, pp. 45-77; exemplele noi sunt
# anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-2.py

SUB = 'Clasa a V-a · Unitatea II, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'
PERS = ['eu', 'tu', 'el, ea', 'noi', 'voi', 'ei, ele']


def conj(verbe, *coloane):
    """Tabel de conjugare: o coloană pe verb, un rând pe persoană."""
    n = len(verbe)
    return {'t': 'tabel', 'cap': [''] + list(verbe), 'lat': [0.16] + [0.84 / n] * n,
            'al': ['l'] + ['c'] * n, 's': 14,
            'r': [[PERS[i]] + [c[i] for c in coloane] for i in range(6)]}


SCHEME = [
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-2',
        'titlu': 'Timp, spațiu și acțiune. Textul narativ',
        'sub': SUB.format(n=2, pp='pp. 45-46'),
        'sursa': 'Sursa: Manual Art 5, pp. 45-46, rubricile Repere; exemplele sunt din „Vizită…” de I.L. Caragiale.',
        'sect': [
            ('1. ACȚIUNEA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Acțiunea** dintr-un text narativ constă în evenimentele despre care se povestește și care se desfășoară într-un anumit **timp** și **spațiu**.']},
                {'t': 'text', 'p': ['Coordonatele de timp și spațiu pot fi **numite** în text sau pot fi **deduse** de cititor, din informațiile textului sau din ce știe despre o epocă, un loc.']},
            ]),
            ('2. INDICII DE TIMP ȘI DE SPAȚIU', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'indicii de timp', 'col': 't', 'p': ['trimit la **epoca, anul, ziua, momentul zilei** în care se petrece acțiunea ori la **durata** ei', '*ziua onomasticii lui Ionel*']},
                    {'titlu': 'indicii de spațiu', 'col': 'm', 'p': ['trimit la **continentul, țara, regiunea, orașul, satul, strada, casa** în care se petrece acțiunea', '*salonul doamnei Popescu, vestibulul*']},
                ]},
            ]),
            ('3. TEXTUL NARATIV', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul narativ** prezintă o succesiune de întâmplări petrecute în ordine logică și temporală.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'Situația inițială', 'col': 't', 'sub': 'începutul', 'p': ['o stare de **echilibru**']},
                    {'titlu': 'Succesiunea de întâmplări', 'col': 'm', 'sub': 'mijlocul', 'p': ['**complicație → acțiune → rezolvare**']},
                    {'titlu': 'Situația finală', 'col': 'a', 'sub': 'încheierea', 'p': ['un **nou echilibru**']},
                ]},
                {'t': 'text', 'p': ['**Textul narativ literar** prezintă întâmplări **imaginare**, la care participă **personaje**.']},
            ]),
            ('4. SECVENȚELE, PE LARG', [
                {'t': 'tabel', 'cap': ['Secvența', 'Ce se întâmplă'], 'lat': [0.3, 0.7],
                 'r': [['situația inițială', 'o stare de echilibru'],
                       ['succesiunea de întâmplări', 'echilibrul se modifică (din cauza unui gest, a unei stări, a unei afirmații, a unor evenimente nedorite); apar **complicații**; complicațiile sunt depășite prin găsirea unei **rezolvări**'],
                       ['situația finală', 'un nou echilibru']]},
                {'t': 'nota', 'titlu': 'Altă imagine a acțiunii:', 'p': ['acțiunea crește treptat spre un **moment culminant**, apoi descrește spre o nouă stare de echilibru: *situația inițială → creșterea acțiunii → momentul culminant → descreșterea acțiunii → situația finală*.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-3',
        'titlu': 'Planul dezvoltat de idei',
        'sub': SUB.format(n=3, pp='p. 47'),
        'sursa': 'Sursa: Manual Art 5, p. 47, rubrica Repere, modelul din tabel și lista de control.',
        'sect': [
            ('1. IDEILE SECUNDARE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Ideile secundare** prezintă amănunte legate de ideea principală, completând-o.']},
            ]),
            ('2. PLANUL DEZVOLTAT DE IDEI', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Planul dezvoltat de idei** cuprinde ideile principale și ideile secundare corespunzătoare acestora, în ordinea în care apar în text.']},
                {'t': 'tabel', 'cap': ['Planul simplu de idei', 'Planul dezvoltat de idei'], 'lat': [0.42, 0.58],
                 'r': [['*Un domn vine în vizită la doamna Popescu cu ocazia onomasticii fiului ei.*',
                        '*Un domn vine în vizită la doamna Popescu cu ocazia onomasticii fiului ei.* {t:*Musafirul îi oferă lui Ionel o minge și începe să discute cu gazda.*}']]},
                {'t': 'text', 's': 13.5, 'c': 'g', 'p': ['Cu verde: ideea secundară adăugată.']},
            ]),
            ('3. CUM ÎL ALCĂTUIESC', [
                {'t': 'tabel', 'cap': ['Secvența', 'Ce notez'], 'lat': [0.3, 0.7],
                 'r': [['situația inițială', 'cum începe acțiunea: *Cine? Ce face? Unde? Când?*'],
                       ['succesiunea de întâmplări', 'cum se declanșează acțiunea, cum se desfășoară, cum sunt depășite complicațiile'],
                       ['situația finală', 'finalul întâmplării']]},
                {'t': 'text', 'p': ['Pornesc de la planul simplu și adaug, sub fiecare idee principală, detaliile care o completează.']},
            ]),
            ('4. LISTA DE CONTROL', [
                {'t': 'text', 'p': ['• A fost dezvoltată fiecare idee principală, cu detalii relevante.',
                                    '• A fost respectată ordinea în care apar în text ideile principale și secundare.',
                                    '• Exprimarea este clară și corectă, fără greșeli gramaticale, de ortografie sau de punctuație.']},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-4',
        'titlu': 'Personajele',
        'sub': SUB.format(n=4, pp='pp. 48-49'),
        'sursa': 'Sursa: Manual Art 5, pp. 48-49, rubrica Repere; citatele sunt din „Vizită…” de I.L. Caragiale.',
        'sect': [
            ('1. PERSONAJUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Personajul** este o ființă umană, un animal sau un obiect însuflețit care participă la acțiunile dintr-un text narativ literar.']},
                {'t': 'text', 'p': ['Este rodul imaginației unui autor și există doar în paginile textului, nu și în realitate.']},
                {'t': 'atentie', 'p': ['Personajul apare doar în textul **literar**. În textul **nonliterar**, acțiunea e făcută de o **persoană** care există în realitate.']},
            ]),
            ('2. DUPĂ ROLUL ÎN ACȚIUNE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'principal', 'col': 't', 'p': ['ocupă **locul central** în acțiune']},
                    {'titlu': 'secundar', 'col': 'm', 'p': ['are un rol **mai puțin important** în acțiune']},
                    {'titlu': 'episodic', 'col': 'a', 'p': ['apare într-un **singur episod** sau în numai câteva episoade']},
                ]},
            ]),
            ('3. DE UNDE AFLU CUM ESTE UN PERSONAJ', [
                {'t': 'text', 'p': ['Trăsăturile pot fi **numite** direct în text sau pot fi **deduse** din:']},
                {'t': 'tabel', 'cap': ['Deduc din', 'Exemplu din *Vizită…*'], 'lat': [0.3, 0.7],
                 'r': [['felul în care se comportă', '*„Maiorul sare de gâtul mamei și o sărută...”*'],
                       ['felul în care vorbește', '*„— Da tu de ce tragi? mă-ntrerupe maiorul...”*'],
                       ['ce spun alte personaje despre el', '*„— Coniță! uite Ionel! vrea să-mi răstoarne mașina!...”*']]},
                {'t': 'text', 's': 13.5, 'c': 'g', 'p': ['Trăsătura o scriu eu în caiet, lângă fragmentul din care am dedus-o.']},
            ]),
            ('4. FIȘA DE IDENTITATE A PERSONAJULUI', [
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'Familie', 'col': 'n', 'p': ['cu cine trăiește']},
                    {'titlu': 'Vârstă', 'col': 'n', 'p': ['câți ani are']},
                    {'titlu': 'Trăsături fizice', 'col': 'n', 'p': ['cum arată']},
                    {'titlu': 'Îmbrăcăminte', 'col': 'n', 'p': ['ce poartă']},
                ]},
                {'t': 'text', 'p': ['Completez fișa pentru **Ionel Popescu**, cu informații din text.']},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-6',
        'titlu': 'Text auxiliar. „Exuvii” de Simona Popescu',
        'sub': SUB.format(n=6, pp='pp. 51-52'),
        'sursa': 'Sursa: Manual Art 5, pp. 51-52 (prezentarea textului, metoda jurnalului și notele de subsol).',
        'sect': [
            ('1. DESPRE TEXT', [
                {'t': 'text', 'p': ['Fragment din romanul *Exuvii* de **Simona Popescu**, din capitolul *Regnum puerile*, adică „Regatul copiilor”.',
                                    'Arată cum vedeau lumea jocului copiii de la sfârșitul secolului al XX-lea, la un secol după Ionel din *Vizită…*.']},
            ]),
            ('2. JURNALUL CU DUBLĂ INTRARE', [
                {'t': 'text', 'p': ['1. Scriu sus titlul textului și numele autoarei.',
                                    '2. Împart pagina în două, cu o linie verticală.',
                                    '3. În stânga notez o propoziție sau un pasaj care m-a impresionat: mi-a amintit de ceva, nu sunt de acord cu el sau m-a intrigat.',
                                    '4. În dreapta explic de ce l-am ales și la ce m-am gândit.']},
                {'t': 'tabel', 'cap': ['Fragmentul din text', 'Ce gândesc / ce simt despre el'], 'lat': [0.5, 0.5],
                 'r': [['*„Împăcarea avea culoarea roz-auriu.”*', '…']]},
            ]),
            ('3. ZIUA ÎN „REGATUL COPIILOR”', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'dimineața', 'col': 'r', 'p': ['*„era pentru ferocitate”*']},
                    {'titlu': 'după-amiaza', 'col': 'a', 'p': ['*„era vremea jocurilor”*']},
                    {'titlu': 'seara', 'col': 'm', 'p': ['*„timpul împăcărilor, al fericirii generale”*']},
                ]},
            ]),
            ('4. CUVINTE NOI', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Sensul'], 'lat': [0.25, 0.75],
                 'r': [['*exuvie*', 'înveliș rezultat prin năpârlirea șerpilor'],
                       ['*mârșăvie*', 'faptă josnică, ticăloșie'],
                       ['*ferocitate*', 'cruzime, sălbăticie, violență'],
                       ['*scatoalcă*', 'lovitură dată cu palma sau cu dosul mâinii'],
                       ['*viperenie*', 'cuvânt inventat de autoare: răutate, jignire'],
                       ['*insinuant*', 'care strecoară aluzii răutăcioase'],
                       ['*harpie*', 'monstru din mitologia greacă; femeie arțăgoasă și rea']]},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-8',
        'titlu': 'Proiect individual. Jocuri fără vârstă',
        'sub': SUB.format(n=8, pp='pp. 53, 55'),
        'sursa': 'Sursa: Manual Art 5, p. 55 (proiectul) și p. 53 (Repere despre joc).',
        'sect': [
            ('1. SARCINA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Prezint un joc pe care l-am aflat de la **părinți, bunici** sau de la cineva din comunitate. Poate fi un joc românesc sau din altă cultură.']},
                {'t': 'text', 'p': ['**Timp de lucru:** trei săptămâni. **Prezentarea:** cel mult trei minute.']},
            ]),
            ('2. PAȘII', [
                {'t': 'tabel', 'cap': ['Săptămâna', 'Ce fac'], 'lat': [0.2, 0.8],
                 'r': [['I', 'Întreb pe cineva mai în vârstă ce jocuri erau populare în copilăria sa. Aleg un joc care ar avea succes și azi, cer o descriere detaliată și mă documentez pe internet.'],
                       ['II', 'Fac un **poster** cu prezentarea jocului, cu desene sau fotografii. Notez sursele orale și scrise.'],
                       ['III', 'Exersez prezentarea orală, eventual în fața celui care mi-a povestit jocul.']]},
            ]),
            ('3. LA PREZENTARE', [
                {'t': 'text', 'p': ['• Mă încadrez în timp.',
                                    '• Folosesc ce am scris pe poster, dar dau și informații în plus.',
                                    '• Explic desenele sau fotografiile.',
                                    '• Vorbesc clar, în enunțuri simple și corecte, într-un limbaj nici prea familiar, nici prea complicat.',
                                    '• Sunt pregătit să răspund la întrebările colegilor.']},
            ]),
            ('4. CE ESTE JOCUL', [
                {'t': 'text', 'p': ['**Jocul** este o activitate fizică sau mentală care nu urmărește un scop practic, ci divertismentul sau alungarea plictiselii.',
                                    'Jocul înseamnă distracție, libertate, imaginație și creativitate, dar și **reguli**, pe care jucătorii le cunosc și le respectă. Jocul poate apropia oameni din culturi diferite.']},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-9',
        'titlu': 'Schimburi de replici în dialog',
        'sub': SUB.format(n=9, pp='pp. 56-57'),
        'sursa': 'Sursa: Manual Art 5, pp. 56-57, rubrica Repere și sugestiile pentru jocurile de rol.',
        'sect': [
            ('1. DIALOGUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Dialogul** este o convorbire sau un schimb de replici între două sau mai multe persoane.']},
                {'t': 'text', 'p': ['Participanții devin, pe rând, **vorbitori** și **ascultători**. Între replici trebuie să existe **continuitate**.']},
            ]),
            ('2. CE RĂSPUND LA O REPLICĂ', [
                {'t': 'tabel', 'cap': ['Replica', 'Răspunsul potrivit', 'Formule utile'], 'lat': [0.2, 0.3, 0.5],
                 'r': [['o **întrebare**', 'răspund la întrebare; dacă n-am înțeles, cer lămuriri', '*Ce…? Cum…? Cu cine…? Unde…? De ce…?*'],
                       ['o **invitație**', 'o accept sau o refuz', '*Mulțumesc, vin cu plăcere…* / *Îmi pare rău, dar…*'],
                       ['un **compliment**', 'îmi exprim mulțumirea', '*Mulțumesc mult…*'],
                       ['un **reproș**', 'îl accept sau îl resping', '*Am înțeles…, îmi pare rău.* / *Îmi pare rău, dar nu ai dreptate.*']]},
                {'t': 'nota', 'titlu': 'Cum fac eu o invitație, un compliment, un reproș:', 'p': ['*Vreau să te invit… · Ești extraordinară, pentru că… · Nu-mi place că…*']},
            ]),
            ('3. ATITUDINEA ÎN DIALOG', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'politețea', 'col': 't', 'p': ['impune **respect** și **încurajare**']},
                    {'titlu': 'obrăznicia, superioritatea', 'col': 'r', 'p': ['generează **lipsă de confort** și **respingere**']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-10',
        'titlu': 'Reguli de acces la cuvânt',
        'sub': SUB.format(n=10, pp='pp. 58-59'),
        'sursa': 'Sursa: Manual Art 5, pp. 58-59, rubrica Repere și tabelul de semnale.',
        'sect': [
            ('1. DE CE AVEM NEVOIE DE REGULI', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Ca fiecare participant la discuție să-și poată face cunoscute ideile și ca să evităm **suprapunerile**, **întreruperile** sau **tăcerile**.']},
            ]),
            ('2. REGULILE', [
                {'t': 'text', 'p': ['1. Vorbitorul dă cuvântul altui participant **după ce a terminat** ce are de spus. Nimeni nu intervine dacă nu a fost numit.',
                                    '2. Îmi anunț intenția de a vorbi printr-un **semnal** (de exemplu, mâna ridicată) și aștept să termine cel care vorbește.',
                                    '3. Dacă mai mulți vor să intervină, are prioritate **cel care a semnalat primul**.',
                                    '4. În discuțiile cu toată clasa, profesorul este **moderator**; în grupe, un elev își asumă acest rol.']},
            ]),
            ('3. CUM ȘTIU CĂ POT INTERVENI', [
                {'t': 'tabel', 'cap': ['Ce văd', 'Ce aud'], 'lat': [0.5, 0.5],
                 'r': [['interlocutorul s-a oprit și mă privește', '*— Cam asta am avut de zis.*'],
                       ['mă invită din priviri să vorbesc', '*— Vrei să adaugi ceva?*'],
                       ['îmi face semn să vorbesc', '*— E rândul tău acum.*'],
                       ['s-a oprit și așteaptă', '*— Tu ce părere ai?*']]},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-11',
        'titlu': 'Verbul. Predicatul verbal',
        'sub': SUB.format(n=11, pp='pp. 60-61'),
        'sursa': 'Sursa: Manual Art 5, pp. 60-61, rubricile Repere.' + CREATE,
        'sect': [
            ('1. VERBUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Verbul** este partea de vorbire care arată **acțiunea**, **starea** sau **existența**.']},
                {'t': 'text', 'p': ['Își modifică forma după **timp**, **persoană** și **număr**, deci este o parte de vorbire **flexibilă**.']},
            ]),
            ('2. CATEGORIILE VERBULUI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'timpul', 'col': 't', 'p': ['**trecut**: înainte de momentul vorbirii', '**prezent**: în momentul vorbirii', '**viitor**: după momentul vorbirii']},
                    {'titlu': 'persoana', 'col': 'm', 'p': ['**I**: vorbitorul', '**a II-a**: ascultătorul', '**a III-a**: cel despre care e vorba']},
                    {'titlu': 'numărul', 'col': 'a', 'p': ['**singular**: face acțiunea o singură persoană', '**plural**: două sau mai multe persoane']},
                ]},
                {'t': 'nota', 'titlu': 'Forma afirmativă și forma negativă', 'p': ['Forma negativă se construiește cu **nu**, care se analizează împreună cu verbul: *vorbește → nu vorbește*.']},
            ]),
            ('3. PREDICATUL VERBAL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Când predicatul se exprimă **doar printr-un verb**, se numește **predicat verbal**.']},
                {'t': 'text', 's': 17, 'p': ['*__Ionel__ _atacă_ jupâneasa.*']},
            ]),
            ('4. INFINITIVUL, O FORMĂ VERBALĂ NEPERSONALĂ', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'forme personale', 'col': 't', 'p': ['își schimbă forma după persoană și sunt **predicate verbale**', '*încep, nu poate*']},
                    {'titlu': 'forme nepersonale', 'col': 'm', 'p': ['nu își schimbă forma după persoană și **nu sunt predicate**', '*a alerga, a opri*']},
                ]},
                {'t': 'text', 'p': ['**Infinitivul** este forma din dicționar a verbului: *a alerga, a putea, a începe*.']},
                {'t': 'tabel', 'cap': ['Situația', 'Exemplu'], 'lat': [0.5, 0.5],
                 'r': [['după verbul *a putea*, infinitivul e **fără** *a*', '*Pot cânta.*'],
                       ['după alte verbe, infinitivul e **cu** *a*', '*Doresc a desena.*']]},
            ]),
            ('5. PASTILA DE ORTOGRAFIE', [
                {'t': 'tabel', 'cap': ['Scriem', 'Când', 'Exemplu'], 'lat': [0.15, 0.4, 0.45],
                 'r': [['*n-a*', '**nu + a** (verbul auxiliar)', '*Ionel n-a ascultat.*'],
                       ['*na*', 'interjecție, când dăm ceva', '*Na, ia mingea!*'],
                       ['*n-ai*', '**nu + ai**', '*N-ai timp de joacă?*'],
                       ['*nai*', 'instrument muzical', '*Cântă la nai.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-12',
        'titlu': 'Modul indicativ. Prezentul',
        'sub': SUB.format(n=12, pp='pp. 62-63'),
        'sursa': 'Sursa: Manual Art 5, pp. 62-63, rubricile Repere și tabelul de conjugare.' + CREATE,
        'sect': [
            ('1. MODUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Modul** este forma pe care o ia verbul pentru a arăta cum consideră vorbitorul acțiunea.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'acțiune sigură, reală', 'col': 't', 'p': ['*Stă. Iese.*']},
                    {'titlu': 'acțiune posibilă', 'col': 'm', 'p': ['*Stai! Ieși!*']},
                ]},
                {'t': 'text', 'p': ['Modul care arată o acțiune **sigură și reală** este **modul indicativ**.']},
            ]),
            ('2. PREZENTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Prezentul** arată desfășurarea acțiunii **în momentul vorbirii**.']},
                {'t': 'text', 'p': ['• Verbele la prezent au o **parte relativ fixă**, comună cu infinitivul.',
                                    '• Sunetele care indică **persoana și numărul** se numesc **desinențe**.',
                                    '• Când lipsește sunetul care arată persoana și numărul, spunem că desinența e **zero**: *visez∅*.']},
                conj(['(a) cânta', '(a) visa', '(a) merge', '(a) hotărî'],
                     ['cânt', 'cânți', 'cântă', 'cântăm', 'cântați', 'cântă'],
                     ['visez', 'visezi', 'visează', 'visăm', 'visați', 'visează'],
                     ['merg', 'mergi', 'merge', 'mergem', 'mergeți', 'merg'],
                     ['hotărăsc', 'hotărăști', 'hotărăște', 'hotărâm', 'hotărâți', 'hotărăsc']),
            ]),
            ('3. FORME CU -EZ- ȘI -ESC-', [
                {'t': 'text', 'p': ['• Unele verbe au două forme cu **sensuri diferite**: *Ana manifestă interes pentru lectură* (arată) / *Ea manifestează pentru ocrotirea pădurilor* (participă la o demonstrație).',
                                    '• Alte verbe au două forme acceptate: *cheltuiește/cheltuie*, *chinuie/chinuiește*; DOOM3 o recomandă pe **prima**.']},
            ]),
            ('4. ALTE VALORI ALE PREZENTULUI', [
                {'t': 'text', 'p': ['Prezentul poate arăta și alt moment, când în propoziție există cuvinte care precizează timpul:']},
                {'t': 'tabel', 'cap': ['Valoarea', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['trecut', '*În 1859, Cuza unește Principatele.*'],
                       ['viitor', '*Săptămâna viitoare plecăm în excursie.*'],
                       ['adevăr general', '*Apa fierbe la 100 de grade.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-13',
        'titlu': 'Imperfectul',
        'sub': SUB.format(n=13, pp='pp. 64-65'),
        'sursa': 'Sursa: Manual Art 5, pp. 64-65, rubrica Repere și tabelul de conjugare.',
        'sect': [
            ('1. CE ARATĂ IMPERFECTUL', [
                {'t': 'text', 'p': ['Trecutul are mai multe timpuri. Unul dintre ele este **imperfectul**.']},
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Imperfectul** exprimă o acțiune trecută care se desfășoară **în același timp** cu o altă acțiune trecută.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'valoare durativă', 'col': 't', 'p': ['acțiunea durează', '*Alergam și nu te-am văzut.*']},
                    {'titlu': 'valoare repetitivă', 'col': 'm', 'p': ['acțiunea se repetă', '*De câte ori ieșeam în parc, întâlneam un prieten.*']},
                ]},
                {'t': 'nota', 'titlu': 'În narațiune:', 'p': ['imperfectul descrie **cadrul** în care se desfășoară acțiunea, adică **situația inițială**, de echilibru.']},
            ]),
            ('2. CUM ÎL RECUNOSC', [
                {'t': 'text', 'p': ['Sunetele care indică imperfectul sunt **-a-** și **-ea-**.']},
                conj(['(a) cânta', '(a) apărea', '(a) merge', '(a) dormi'],
                     ['cântam', 'cântai', 'cânta', 'cântam', 'cântați', 'cântau'],
                     ['apăream', 'apăreai', 'apărea', 'apăream', 'apăreați', 'apăreau'],
                     ['mergeam', 'mergeai', 'mergea', 'mergeam', 'mergeați', 'mergeau'],
                     ['dormeam', 'dormeai', 'dormea', 'dormeam', 'dormeați', 'dormeau']),
            ]),
            ('3. ATENȚIE LA VERBUL A VOI', [
                {'t': 'atentie', 'p': ['Corect: **voiam, voiai, voia**. Formele cu *r* (*vroiam, vroiai, vroia*) sunt **greșite**.',
                                       'Ele apar sub influența verbului *a vrea*, care la imperfect are formele *vream, vreai, vrea*.']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-14',
        'titlu': 'Verbul auxiliar a avea. Participiul. Perfectul compus',
        'sub': SUB.format(n=14, pp='pp. 66-67'),
        'sursa': 'Sursa: Manual Art 5, pp. 66-67, rubricile Repere, tabelele și modelul de analiză.' + CREATE,
        'sect': [
            ('1. VERBUL AUXILIAR A AVEA', [
                {'t': 'text', 'p': ['**Verbele auxiliare** ajută la formarea unor moduri și timpuri. *A avea* e un astfel de verb.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'a avea predicativ', 'col': 't', 'p': ['poate fi singur predicat', '*Am un joc nou.*']},
                    {'titlu': 'a avea auxiliar', 'col': 'm', 'p': ['ajută la formarea perfectului compus', '*Am învățat un joc nou.*']},
                ]},
                {'t': 'tabel', 'cap': ['', 'eu', 'tu', 'el, ea', 'noi', 'voi', 'ei, ele'], 'lat': [0.22] + [0.13] * 6, 'al': ['l'] + ['c'] * 6, 's': 14,
                 'r': [['*a avea* predicativ', 'am', 'ai', '**are**', '**avem**', '**aveți**', 'au'],
                       ['*a avea* auxiliar', 'am', 'ai', '**a**', '**am**', '**ați**', 'au']]},
            ]),
            ('2. PARTICIPIUL', [
                {'t': 'text', 'p': ['**Participiul** este o formă verbală nepersonală care arată o acțiune suferită de o ființă sau de un lucru: *învățat, ales*.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'valoare verbală', 'col': 't', 'p': ['ajută la formarea unor timpuri', '*Am terminat romanul.*']},
                    {'titlu': 'valoare de adjectiv', 'col': 'm', 'p': ['folosit singur, pe lângă un substantiv', '*Caietul terminat este pe masă.*']},
                ]},
            ]),
            ('3. PERFECTUL COMPUS', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Perfectul compus** exprimă o acțiune trecută și **terminată** în momentul vorbirii.']},
                {'t': 'text', 'p': ['Se formează din: **a avea** auxiliar + **participiul** verbului de conjugat: *am ascultat*.',
                                    'În narațiunile de azi și în vorbire, perfectul compus prezintă acțiunile, evenimentele.']},
                conj(['(a) cânta', '(a) apărea', '(a) merge', '(a) dormi'],
                     ['am cântat', 'ai cântat', 'a cântat', 'am cântat', 'ați cântat', 'au cântat'],
                     ['am apărut', 'ai apărut', 'a apărut', 'am apărut', 'ați apărut', 'au apărut'],
                     ['am mers', 'ai mers', 'a mers', 'am mers', 'ați mers', 'au mers'],
                     ['am dormit', 'ai dormit', 'a dormit', 'am dormit', 'ați dormit', 'au dormit']),
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„am auzit”* – verb predicativ, modul indicativ, timpul perfect compus, persoana I, numărul plural, în propoziție este predicat verbal.']},
            ]),
            ('5. PASTILA DE ORTOGRAFIE', [
                {'t': 'tabel', 'cap': ['Scriem', 'Când', 'Exemplu'], 'lat': [0.16, 0.38, 0.46],
                 'r': [['*ia* / *i-a*', 'verbul *a lua* / *i* + *a*', '*Ia mingea!* / *I-a dat mingea.*'],
                       ['*iau* / *i-au*', 'verbul *a lua* / *i* + *au*', '*Iau un joc.* / *I-au spus.*'],
                       ['*la* / *l-a*', 'prepoziție / *l* + *a*', '*Merg la școală.* / *L-a chemat.*'],
                       ['*mai* / *m-ai*', 'cuvânt de sine stătător / *m* + *ai*', '*Mai vino!* / *M-ai văzut?*'],
                       ['*neam* / *ne-am*', 'substantiv / *ne* + *am*', '*Un neam de oameni.* / *Ne-am jucat.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-15',
        'titlu': 'Perfectul simplu și mai-mult-ca-perfectul',
        'sub': SUB.format(n=15, pp='pp. 68-69'),
        'sursa': 'Sursa: Manual Art 5, pp. 68-69, rubricile Repere și tabelele de conjugare.',
        'sect': [
            ('1. PERFECTUL SIMPLU', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Perfectul simplu** exprimă, în limba literară, o acțiune trecută și **terminată** în momentul vorbirii.']},
                {'t': 'text', 'p': ['• Este **timpul povestirii imaginare**, la persoana a III-a: *Scufița Roșie plecă spre bunica.*',
                                    '• În limba literară vorbită a dispărut; locul lui l-a luat perfectul compus. Apare uneori ca **ironie**: *Vorbi și el!*',
                                    '• În **Oltenia, Banat, Crișana** și o parte din **Maramureș** se folosește curent, pentru o acțiune terminată de curând, în ultimele 24 de ore.']},
                {'t': 'text', 'p': ['Sunetele care indică perfectul simplu: **-a-, -u-, -se-, -i-, -â-**; la plural apare segmentul **-ră-**.']},
                conj(['(a) cânta', '(a) apărea', '(a) merge', '(a) dormi'],
                     ['cântai', 'cântași', 'cântă', 'cântarăm', 'cântarăți', 'cântară'],
                     ['apărui', 'apăruși', 'apăru', 'apărurăm', 'apărurăți', 'apărură'],
                     ['mersei', 'merseși', 'merse', 'merserăm', 'merserăți', 'merseră'],
                     ['dormii', 'dormiși', 'dormi', 'dormirăm', 'dormirăți', 'dormiră']),
                {'t': 'atentie', 'p': ['Verbele terminate în *-i*: persoana I are **doi i** (*eu dormii*), persoana a III-a are **un i** (*el dormi*). Verbul *a pustii* are trei: *eu pustiii*.']},
            ]),
            ('2. MAI-MULT-CA-PERFECTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Mai-mult-ca-perfectul** exprimă o acțiune trecută și terminată **înaintea altei acțiuni trecute**.']},
                {'t': 'text', 'p': ['• În narațiune arată acțiuni din **plan secund**, mai puțin importante: *Scufița, după ce pregătise un coș cu merinde, plecă spre bunica.*',
                                    '• Se recunoaște după grupul **-se-**, așezat după sunetul care indică perfectul simplu.']},
                conj(['(a) cânta', '(a) apărea', '(a) merge', '(a) dormi'],
                     ['cântasem', 'cântaseși', 'cântase', 'cântaserăm', 'cântaserăți', 'cântaseră'],
                     ['apărusem', 'apăruseși', 'apăruse', 'apăruserăm', 'apăruserăți', 'apăruseră'],
                     ['mersesem', 'merseseși', 'mersese', 'merseserăm', 'merseserăți', 'merseseră'],
                     ['dormisem', 'dormiseși', 'dormise', 'dormiserăm', 'dormiserăți', 'dormiseră']),
                {'t': 'atentie', 'p': ['Persoana a II-a singular se termină în **-și**: *începuseși*, nu *începusei*.',
                                       'La persoanele I și a II-a plural, formele **fără -ră-** sunt greșite: *cântaserăm*, nu *cântasem* (pentru noi).']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-16',
        'titlu': 'Viitorul. Verbele auxiliare a vrea și a fi',
        'sub': SUB.format(n=16, pp='pp. 70-71'),
        'sursa': 'Sursa: Manual Art 5, pp. 70-71, rubricile Repere și tabelele de conjugare.' + CREATE,
        'sect': [
            ('1. VIITORUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Viitorul** exprimă o acțiune care se va desfășura **după momentul vorbirii**.']},
                {'t': 'text', 'p': ['Se formează din **a vrea** auxiliar + **infinitivul** verbului de conjugat.']},
                conj(['(a) cânta', '(a) merge'],
                     ['voi cânta', 'vei cânta', 'va cânta', 'vom cânta', 'veți cânta', 'vor cânta'],
                     ['voi merge', 'vei merge', 'va merge', 'vom merge', 'veți merge', 'vor merge']),
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['În limba mai veche existau și forme inverse: *veni-va*, *sta-vom*, uneori cu pronume la mijloc: *învăța-ne-va*.']},
                {'t': 'atentie', 'p': ['După auxiliar vine **infinitivul**: *va vedea*, nu *va vede*; *va zice*, nu *va zicea*.']},
            ]),
            ('2. LIMBA STANDARD ȘI FORMELE DE VIITOR', [
                {'t': 'text', 'p': ['**Limba standard** este limba ordonată după norme și reguli stabilite de specialiști, mai ales în varianta scrisă.']},
                {'t': 'tabel', 'cap': ['Forma', 'Cum se formează', 'Exemplu'], 'lat': [0.27, 0.43, 0.30],
                 'r': [['viitor standard', '*a vrea* + infinitiv', '*voi cânta*'],
                       ['viitor de limbă vorbită', '*o* + *să* + verbul', '*o să cânt*'],
                       ['viitor de limbă vorbită', '*a avea* + *să* + verbul', '*am să cânt*'],
                       ['viitor popular', '*a vrea* fără *v* + infinitiv', '*oi cânta*']]},
                {'t': 'text', 's': 13.5, 'c': 'g', 'p': ['Primele trei forme sunt literare; viitorul popular nu este.']},
            ]),
            ('3. VIITORUL ANTERIOR', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Viitorul anterior** arată o acțiune viitoare, terminată **înaintea altei acțiuni viitoare**.']},
                {'t': 'text', 'p': ['Se formează din **a vrea** + **a fi** + **participiu**: *voi fi terminat*. Astăzi e rar și apare împreună cu un viitor standard:',
                                    '*Când **vei sosi**, **voi fi terminat** compunerea.*']},
            ]),
            ('4. PASTILA DE ORTOGRAFIE', [
                {'t': 'tabel', 'cap': ['Scriem', 'Când', 'Exemplu'], 'lat': [0.18, 0.37, 0.45],
                 'r': [['*voi* / *v-oi*', 'auxiliar sau pronume / *v* + *oi* (popular)', '*Voi pleca.* / *V-oi spune.*'],
                       ['*va* / *v-a*', 'auxiliar / *v* + *a*', '*Va ploua.* / *V-a chemat.*'],
                       ['*vom* / *v-om*', 'auxiliar / *v* + *om* (popular)', '*Vom citi.* / *V-om ajuta.*'],
                       ['*vor* / *v-or*', 'auxiliar / *v* + *or* (popular)', '*Vor veni.* / *V-or căuta.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-17',
        'titlu': 'Modul imperativ',
        'sub': SUB.format(n=17, pp='pp. 72-73'),
        'sursa': 'Sursa: Manual Art 5, pp. 72-73, rubrica Repere, tabelul de conjugare și modelul de analiză.',
        'sect': [
            ('1. CE ARATĂ IMPERATIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Modul imperativ** arată o acțiune posibilă, realizabilă, exprimând un **ordin**, un **îndemn**, un **sfat**, o **rugăminte**.']},
                {'t': 'text', 'p': ['• Are forme doar pentru **persoana a II-a**, singular și plural.',
                                    '• **Nu are timpuri.**',
                                    '• În vorbire are o intonație **exclamativă**.']},
            ]),
            ('2. FORMA AFIRMATIVĂ ȘI FORMA NEGATIVĂ', [
                {'t': 'tabel', 'cap': ['', 'singular (tu)', 'plural (voi)'], 'lat': [0.24, 0.38, 0.38], 'al': ['l', 'c', 'c'],
                 'r': [['afirmativă', '*Cântă!*', '*Cântați!*'],
                       ['negativă', '**nu** + infinitiv: *Nu cânta!*', '**nu** + imperativ: *Nu cântați!*']]},
                {'t': 'tabel', 'cap': ['verbul', '(a) cânta', '(a) visa', '(a) merge', '(a) dormi', '(a) hotărî'],
                 'lat': [0.15] + [0.17] * 5, 'al': ['l'] + ['c'] * 5, 's': 14,
                 'r': [['tu', 'cântă!', 'visează!', 'mergi!', 'dormi!', 'hotărăște!'],
                       ['voi', 'cântați!', 'visați!', 'mergeți!', 'dormiți!', 'hotărâți!']]},
            ]),
            ('3. FORME DE REȚINUT', [
                {'t': 'text', 'p': ['Unele verbe au forme speciale la singular: *Vino! Fă! Du! Zi! Refă! Adu!*']},
                {'t': 'atentie', 'p': ['*A fi*: **Fii** (cu doi *i*) la afirmativ: *Fii la antrenament!*; **Nu fi** (cu un *i*) la negativ.',
                                       '*Scrieți tema!* (imperativ plural, un cuvânt) / *Scrie-ți tema!* (*scrie* + *îți*, cu cratimă).']},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„mănâncă”* – verb predicativ, modul imperativ, persoana a II-a, numărul singular, formă afirmativă, în propoziție este predicat verbal.']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-18',
        'titlu': 'Textul narativ ficțional',
        'sub': SUB.format(n=18, pp='pp. 74-75'),
        'sursa': 'Sursa: Manual Art 5, pp. 74-75, rubrica Repere, schema planului și grila de evaluare.',
        'sect': [
            ('1. CE ESTE TEXTUL NARATIV FICȚIONAL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul narativ ficțional** prezintă o întâmplare **imaginată de autor**, cu succesiunea specifică textului narativ.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'situația inițială', 'col': 't', 'p': ['echilibru']},
                    {'titlu': 'succesiunea de întâmplări', 'col': 'm', 'p': ['complicații']},
                    {'titlu': 'situația finală', 'col': 'a', 'p': ['un nou echilibru']},
                ]},
            ]),
            ('2. PLANUL, PE SECVENȚE', [
                {'t': 'tabel', 'cap': ['Secvența', 'Ce scriu', 'Ce timpuri folosesc'], 'lat': [0.22, 0.5, 0.28],
                 'r': [['situația inițială', 'cadrul acțiunii, personajele; echilibrul de la început', 'cel puțin un verb la **imperfect**'],
                       ['succesiunea de întâmplări', 'problema care rupe echilibrul (*Deodată…*, *Brusc…*) și urmările ei, în ordine', '**perfect compus** sau **prezent**; **mai-mult-ca-perfect** pentru acțiuni anterioare'],
                       ['situația finală', 'cum se ajunge la un nou echilibru', '**perfect compus** sau **prezent**']]},
            ]),
            ('3. PAȘII SCRIERII', [
                {'t': 'text', 'p': ['1. **Planul**: situația inițială, ce o schimbă, cum se desfășoară acțiunea, cum se încheie.',
                                    '2. **Prima variantă**, dezvoltând ideile din plan.',
                                    '3. **Revizuirea**: verific logica acțiunii și detaliile.',
                                    '4. **Editarea**: rescriu varianta finală.']},
                {'t': 'nota', 'titlu': 'Prezentarea textului:', 'p': ['titlul sus, la mijloc; fiecare paragraf începe cu alineat; scrisul lizibil și ordonat, fără ștersături.']},
            ]),
            ('4. GRILA DE VERIFICARE', [
                {'t': 'text', 'p': ['• Reiese clar cine face acțiunea, ce se întâmplă, unde și când.',
                                    '• Textul este coerent: acțiunile se înlănțuie logic.',
                                    '• Am folosit timpurile modului indicativ potrivit secvențelor.',
                                    '• Titlul corespunde conținutului și este sugestiv.',
                                    '• Textul este surprinzător, original.',
                                    '• Textul e așezat corect în pagină; am respectat ortografia și punctuația.']},
            ]),
        ],
    },
    # ---------------- Lecția 21 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-21',
        'titlu': 'Recapitulare. Lectură și comunicare în Unitatea II',
        'sub': SUB.format(n=21, pp='pp. 45-59, 76-77'),
        'sursa': 'Sursa: Manual Art 5, rubricile Repere ale lecțiilor 2-9 și cerințele recapitulării de la pp. 76-77.',
        'sect': [
            ('1. TEXTUL NARATIV', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin'], 'lat': [0.3, 0.7],
                 'r': [['acțiunea', 'evenimentele povestite, într-un anumit timp și spațiu'],
                       ['indicii de timp și de spațiu', 'numiți în text sau deduși de cititor'],
                       ['secvențele narațiunii', 'situația inițială (echilibru) → succesiunea de întâmplări (complicații) → situația finală (nou echilibru)'],
                       ['textul narativ ficțional', 'întâmplare imaginată de autor']]},
            ]),
            ('2. PLANUL DE IDEI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'planul simplu', 'col': 't', 'p': ['doar ideile principale, în ordinea din text']},
                    {'titlu': 'planul dezvoltat', 'col': 'm', 'p': ['ideile principale **și** ideile secundare, care le completează cu amănunte']},
                ]},
            ]),
            ('3. PERSONAJELE', [
                {'t': 'text', 'p': ['• După rol: **principal**, **secundar**, **episodic**.',
                                    '• Trăsăturile sunt **numite** în text sau **deduse** din comportament, din vorbire și din ce spun alții.']},
            ]),
            ('4. CÂND CITESC UN TEXT NOU', [
                {'t': 'text', 'p': ['1. Fac o **predicție** după titlu: despre ce ar putea fi textul?',
                                    '2. Citesc fragment cu fragment și notez pe ce mă bazez: pe text sau pe ce știu deja.',
                                    '3. Verific dacă predicția s-a confirmat și marchez partea confirmată.']},
            ]),
            ('5. COMUNICAREA ORALĂ', [
                {'t': 'text', 'p': ['• În dialog, replicile se leagă: la întrebare răspund, invitația o accept sau o refuz, complimentul îl primesc cu mulțumire, reproșul îl accept sau îl resping.',
                                    '• Iau cuvântul după un semnal, când termină celălalt; are prioritate cine a semnalat primul.']},
            ]),
        ],
    },
    # ---------------- Lecția 22 ----------------
    {
        'cale': 'clasa-5/unitatea-2/lectia-22',
        'titlu': 'Recapitulare. Timpurile verbului, toate la un loc',
        'sub': SUB.format(n=22, pp='pp. 60-73'),
        'sursa': 'Sursa: Manual Art 5, pp. 60-73, rubricile Repere ale lecțiilor 10-16.',
        'sect': [
            ('1. MODUL INDICATIV: ACȚIUNE SIGURĂ, REALĂ', [
                {'t': 'tabel', 'cap': ['Timpul', 'Ce exprimă', '(a) cânta, eu'], 'lat': [0.24, 0.52, 0.24],
                 'r': [['**prezent**', 'acțiunea în momentul vorbirii', '*cânt*'],
                       ['**imperfect**', 'acțiune trecută, în același timp cu altă acțiune trecută; descrie cadrul', '*cântam*'],
                       ['**perfect compus**', 'acțiune trecută și terminată; timpul povestirii de azi', '*am cântat*'],
                       ['**perfect simplu**', 'acțiune trecută și terminată; timpul povestirii imaginare', '*cântai*'],
                       ['**mai-mult-ca-perfect**', 'acțiune terminată înaintea altei acțiuni trecute', '*cântasem*'],
                       ['**viitor**', 'acțiune după momentul vorbirii', '*voi cânta*'],
                       ['**viitor anterior**', 'acțiune viitoare terminată înaintea alteia viitoare', '*voi fi cântat*']]},
            ]),
            ('2. CUM SE FORMEAZĂ TIMPURILE COMPUSE', [
                {'t': 'tabel', 'cap': ['Timpul', 'Formula', 'Exemplu'], 'lat': [0.28, 0.44, 0.28],
                 'r': [['perfect compus', '*a avea* auxiliar + participiu', '*am mers*'],
                       ['viitor', '*a vrea* auxiliar + infinitiv', '*vom merge*'],
                       ['viitor anterior', '*a vrea* + *a fi* + participiu', '*vom fi mers*']]},
            ]),
            ('3. MODUL IMPERATIV: ORDIN, ÎNDEMN, SFAT', [
                {'t': 'text', 'p': ['Doar persoana a II-a, fără timpuri: *Cântă! Cântați!* · negativ: *Nu cânta! Nu cântați!* · *Fii!* / *Nu fi!*']},
            ]),
            ('4. GREȘELI DE EVITAT', [
                {'t': 'atentie', 'p': ['• *voiam* (nu *vroiam*) · • *începuseși* (nu *începusei*) · • *va vedea* (nu *va vede*) · • *Fii acasă!* (nu *Fi acasă!*)']},
            ]),
            ('5. MODELUL DE ANALIZĂ A VERBULUI', [
                {'t': 'nota', 'p': ['*„am auzit”* – verb predicativ, modul indicativ, timpul perfect compus, persoana I, numărul plural, în propoziție este predicat verbal.']},
            ]),
        ],
    },
]
