# Scheme-notițe, clasa a V-a, Unitatea IV „Vreau să salvez lumea”. Conținutul
# vine din rubricile Repere ale Manualului Art 5, pp. 110-137; exemplele noi
# sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-4.py

SUB = 'Clasa a V-a · Unitatea IV, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 1 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-1',
        'titlu': 'Textul narativ literar. „Tezeu și Minotaurul”',
        'sub': SUB.format(n=1, pp='pp. 108-109'),
        'sursa': 'Sursa: Manual Art 5, pp. 108-109 (textul „Tezeu și Minotaurul”, caseta autorului, nota de subsol cuvânt cu cuvânt). Lecția nu are rubrica Repere. Datele despre text sunt reformulate după manual. Întrebările din fișă și rândul pentru cuvântul ales sunt create pentru aceste notițe, faptele vin din text.',
        'sect': [
            ('1. AUTORUL ȘI TEXTUL', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'AUTORUL', 'col': 'm',
                     'p': ['**Florin Bican** (n. 1956)',
                           'Este scriitor și traducător.',
                           'În 2013 a publicat volumul de versuri *Reciclopedia de povești cu rimă și fără tâlc*.']},
                    {'titlu': 'TEXTUL', 'col': 't',
                     'p': ['*Tezeu și Minotaurul* este o **repovestire** a legendei despre Tezeu și Minotaur.',
                           'A fost scrisă special pentru elevii care vor studia după acest manual.']},
                ]},
            ]),
            ('2. FIȘA TEXTULUI', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Ce găsesc în text'], 'lat': [0.27, 0.73],
                 'r': [['Cine sunt personajele?', '**Minos**, regele Cretei, și soția lui, **Pasifae**; **Minotaurul**, născut din iubirea ei pentru un taur fermecat; **Dedal**, renumit pentru iscusința lui; **Egeu**, regele Atenei; **Tezeu**, viteazul lui fiu; **Ariadna**, fiica lui Minos; **Dionysos**, zeul vinului și al fertilității. Zeii îl pedepsesc pe Minos.'],
                       ['Unde se petrec întâmplările?', 'În **Creta**, unde este labirintul, la **Atena** și pe mica insulă **Naxos**.'],
                       ['Când?', 'Timpul nu e precizat; textul spune doar *într-o zi*.'],
                       ['Ce plătește Atena?', 'În fiecare an, Egeu era obligat să plătească tribut **câte șapte băieți și șapte fete**, pentru a hrăni monstrul.'],
                       ['Cum se încheie?', 'Tezeu devine regele Atenei și rătăcește prin lume *„ca printr-un labirint fără ziduri”*.']]},
            ]),
            ('3. EVENIMENTELE ÎN ORDINE', [
                {'t': 'text', 'p': ['1. Zeii îl pedepsesc pe Minos: Pasifae se îndrăgostește de un taur fermecat și se naște **Minotaurul**.',
                                    '2. **Dedal** construiește labirintul, iar Minotaurul este închis acolo.',
                                    '3. **Tezeu** pleacă în Creta, cu tinerii sortiți monstrului. Egeu îl roagă să schimbe pânza neagră cu una albă, dacă se întoarce în viață.',
                                    '4. **Ariadna** se îndrăgostește de el și îi dă un ghem de sfoară.',
                                    '5. Tezeu îl învinge pe Minotaur și iese din labirint urmând firul Ariadnei.',
                                    '6. Scufundă navele Cretei și face un popas pe **Naxos**. La plecare o uită pe Ariadna, iar Dionysos o ia de soție.',
                                    '7. Tezeu uită să schimbe pânza neagră. Egeu se aruncă în mare, iar Marea Egee îi poartă numele.',
                                    '8. Tezeu devine regele Atenei.']},
            ]),
            ('4. CUVÂNT DIN NOTA DE SUBSOL', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Explicația din manual'], 'lat': [0.40, 0.60],
                 'r': [['*a hălădui* (vb.), din *„pe unde hălăduia Minotaurul”*', 'a trăi undeva în voie, în libertate, în liniște'],
                       ['un cuvânt nou, ales de mine', '……………………………………………']]},
            ]),
        ],
    },
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-2',
        'titlu': 'Timp, spațiu și acțiune. Legenda',
        'sub': SUB.format(n=2, pp='pp. 110-111'),
        'sursa': 'Sursa: Manual Art 5, pp. 110-111, rubrica Repere și povestea originii lui Tezeu; textul de bază este „Tezeu și Minotaurul” de Florin Bican.',
        'sect': [
            ('1. LEGENDA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Legendele** oferă explicații **imaginare** pentru originea universului, apariția plantelor și a animalelor, a fenomenelor naturale.']},
                {'t': 'text', 'p': ['• La început s-au transmis prin **viu grai**; apoi au fost culese de specialiști și circulă și în scris.',
                                    '• Când sunt povestite oral, povestitorii le pot **modifica**; de aceea există mai multe variante ale aceleiași întâmplări.']},
                {'t': 'nota', 'titlu': 'Legendele antice', 'p': ['sunt narațiuni în care **zeii intervin în mod supranatural** în lumea oamenilor, iar întâmplările se petrec într-un **timp foarte îndepărtat**.']},
            ]),
            ('2. PERSONAJELE LEGENDEI', [
                {'t': 'tabel', 'cap': ['Personajul', 'Cine este'], 'lat': [0.25, 0.75],
                 'r': [['**Tezeu**', 'eroul; fiul regelui Atenei, dar de fapt **semizeu**, fiul lui Poseidon'],
                       ['**Egeu**', 'regele Atenei'],
                       ['**Minos**', 'regele Cretei, care închide Minotaurul în labirint'],
                       ['**Ariadna**', 'fiica lui Minos, care îi dă lui Tezeu un ghem de sfoară'],
                       ['**Minotaurul**', 'monstrul din labirint, hrănit cu tineri aduși din Atena'],
                       ['**Poseidon**', 'zeul mării']]},
            ]),
            ('3. ÎNTREBĂRILE INVESTIGATORULUI', [
                {'t': 'text', 'p': ['Pentru orice legendă sau narațiune notez: **Cine** e personajul principal? Care sunt personajele secundare? **Unde** și **când** se petrec întâmplările? **Ce** declanșează acțiunea? **De ce** pleacă eroul de acasă?']},
            ]),
            ('4. O EXPRESIE NĂSCUTĂ DIN LEGENDĂ', [
                {'t': 'text', 'p': ['**firul Ariadnei** = ceea ce te ajută să găsești ieșirea dintr-o situație încâlcită, ca ghemul de sfoară care l-a scos pe Tezeu din labirint.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-3',
        'titlu': 'Personajele',
        'sub': SUB.format(n=3, pp='pp. 112-113'),
        'sursa': 'Sursa: Manual Art 5, p. 112, rubrica Repere (cuvânt cu cuvânt), Explorare ex. 1 (harta), ex. 3 (sensul cuvântului „erou”) și ex. 4 (trăsăturile). Harta și coloana „Fragmentul din text” sunt modele goale, de completat de elevi.',
        'sect': [
            ('1. PERSONAJELE LEGENDELOR GRECEȘTI', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['În legendele grecești, personajele sunt **zei**, **eroi (semizei)** și **oameni obișnuiți**.']},
                {'t': 'nota', 'p': ['**Zeii** sunt divinități adorate de greci și trăiesc pe cel mai înalt munte din Grecia, Olimp. Aceștia seamănă cu oamenii, se amestecă printre ei, îi pot transforma pe muritori în monștri și sunt părinții eroilor.']},
                {'t': 'nota', 'p': ['Eroii mai sunt numiți și **semizei**, pentru că provin din unirea unui zeu cu o muritoare. Nobili prin naștere, eroii sunt recunoscuți de ceilalți abia după o faptă excepțională, imposibil de îndeplinit de către un om obișnuit, cum ar fi uciderea unui monstru care înspăimântă lumea. Deși probează calități neobișnuite, de multe ori destinul eroilor este nefericit, depinzând de capriciile zeilor.']},
            ]),
            ('2. EROUL GREC', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Eroul grec** este un simbol civilizator, acela al luptei contra dezordinii și a barbariei. Tezeu și Heracle sunt singurii eroi recunoscuți de toți vechii greci.']},
                {'t': 'nota', 'titlu': 'Istoria cuvântului', 'p': ['Cuvântul *erou* vine în română din limba franceză, *héros*, dar și din limba latină, de la *heros*, unde înseamnă „semizeu sau persoană care s-a distins într-o bătălie, într-o împrejurare dificilă”.']},
            ]),
            ('3. HARTA PERSONAJELOR', [
                {'t': 'text', 'p': ['Desenez în caiet harta: scriu în centru **Tezeu** și **Minos**, notez în jur celelalte personaje din text și arăt prin săgeți legăturile dintre ele.']},
                {'t': 'carduri', 'n': 2, 'c': [
                    {'titlu': 'TEZEU', 'col': 't', 'p': ['în centrul hărții']},
                    {'titlu': 'MINOS', 'col': 'm', 'p': ['în centrul hărții']},
                ]},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'personajul: ……………', 'col': 'n', 'st': 15, 'p': ['legătura: ……………']},
                    {'titlu': 'personajul: ……………', 'col': 'n', 'st': 15, 'p': ['legătura: ……………']},
                    {'titlu': 'personajul: ……………', 'col': 'n', 'st': 15, 'p': ['legătura: ……………']},
                    {'titlu': 'personajul: ……………', 'col': 'n', 'st': 15, 'p': ['legătura: ……………']},
                    {'titlu': 'personajul: ……………', 'col': 'n', 'st': 15, 'p': ['legătura: ……………']},
                    {'titlu': 'personajul: ……………', 'col': 'n', 'st': 15, 'p': ['legătura: ……………']},
                ]},
            ]),
            ('4. TRĂSĂTURILE LUI TEZEU', [
                {'t': 'text', 'p': ['Lucrez în perechi: găsesc în text fragmentul care ilustrează fiecare trăsătură a lui Tezeu.']},
                {'t': 'tabel', 'cap': ['Trăsătura', 'Fragmentul din text'], 'lat': [0.30, 0.70],
                 'r': [['curajos', '……………………………………………'],
                       ['puternic', '……………………………………………'],
                       ['falnic', '……………………………………………'],
                       ['inteligent', '……………………………………………'],
                       ['încrezător în sine', '……………………………………………'],
                       ['infidel', '……………………………………………'],
                       ['hotărât', '……………………………………………'],
                       ['frumos', '……………………………………………'],
                       ['uituc', '……………………………………………']]},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-4',
        'titlu': 'Semnificațiile textului',
        'sub': SUB.format(n=4, pp='p. 114'),
        'sursa': 'Sursa: Manual Art 5, p. 114 (Interpretare ex. 1-3, 7 și 10; Portofoliu: Cvintetul, cuvânt cu cuvânt). Lecția nu are rubrica Repere. Răspunsurile și legăturile de la ex. 10 rămân elevilor; ordinea semnificațiilor din ex. 10 este schimbată pentru aceste notițe.',
        'sect': [
            ('1. ÎNTREBĂRILE INTERPRETĂRII', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Răspunsul meu, cu dovada din text'], 'lat': [0.50, 0.50],
                 'r': [['Care este **tema** textului *Tezeu și Minotaurul*? (ex. 1)', '……………………………………'],
                       ['Pentru cine luptă Tezeu: pentru **gloria lui** sau pentru **ceilalți**? Justific. (ex. 2)', '……………………………………'],
                       ['Ce **obțin atenienii** prin victoria lui Tezeu? (ex. 3)', '……………………………………']]},
            ]),
            ('2. TREI SEMNIFICAȚII ALE LABIRINTULUI', [
                {'t': 'text', 'p': ['Completez în caiet cele trei enunțuri (ex. 7):']},
                {'t': 'simboluri', 'ls': 34, 'r': [
                    ('a', 'Labirintul reprezintă **dificultatea luptei**, pentru că ... .'),
                    ('b', 'Labirintul reprezintă **un mijloc de apărare**, pentru că ... .'),
                    ('c', 'Labirintul reprezintă **victoria rațiunii asupra instinctelor**, pentru că ... .'),
                ]},
            ]),
            ('3. PERSONAJE ȘI SEMNIFICAȚII', [
                {'t': 'text', 'p': ['Asociez fiecare personaj cu semnificația lui și justific alegerea cu un fragment din text (ex. 10).']},
                {'t': 'coloane', 'c': [
                    {'titlu': 'Personajele', 'b': [{'t': 'text', 'p': ['1. Tezeu', '2. Minos', '3. Minotaurul', '4. Ariadna', '5. Egeu']}]},
                    {'titlu': 'Semnificațiile', 'b': [{'t': 'text', 'p': ['**a**  iubirea paternă', '**b**  violența', '**c**  forța și rațiunea', '**d**  rușinea', '**e**  iubirea capabilă de sacrificii']}]},
                ]},
                {'t': 'text', 'p': ['Perechile mele: 1 + …… ; 2 + …… ; 3 + …… ; 4 + …… ; 5 + …… .']},
            ]),
            ('4. CVINTETUL', [
                {'t': 'text', 'p': ['Alcătuiește o poezie de cinci versuri în care să sintetizezi ideile și sentimentele tale despre erou, ca tip de personaj.']},
                {'t': 'tabel', 'cap': ['Versul', 'Regula din manual'], 'lat': [0.13, 0.87],
                 'r': [['1', 'Primul vers trebuie să fie chiar cuvântul-cheie: *eroul*.'],
                       ['2', 'Al doilea vers este alcătuit din două cuvinte care sunt adjective și prezintă însușiri ale eroului.'],
                       ['3', 'Al treilea vers are trei cuvinte care arată ce poate face un erou, fiind verbe.'],
                       ['4', 'Al patrulea vers conține patru cuvinte și exprimă sentimentele tale față de erou.'],
                       ['5', 'Al cincilea vers conține un singur cuvânt, un substantiv, care sintetizează ce reprezintă eroul.']]},
                {'t': 'carduri', 'c': [
                    {'titlu': 'Modelul: Monstrul', 'col': 'm',
                     'p': ['Monstrul', 'ascuns, periculos,', 'atacă, lovește, doboară', 'fiară îngenuncheată de înțelepciune,', 'cruzime.']},
                    {'titlu': 'Schema mea: Eroul', 'col': 't',
                     'p': ['**eroul**', '……………, ……………', '……………, ……………, ……………', '……………, ……………, ……………, ……………', '……………']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 5 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-5',
        'titlu': 'Comparația',
        'sub': SUB.format(n=5, pp='p. 115'),
        'sursa': 'Sursa: Manual Art 5, p. 115, rubrica Repere și schema comparației.' + CREATE,
        'sect': [
            ('1. CE ESTE COMPARAȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Comparația** este figura de stil care exprimă un **raport de asemănare** între două persoane, obiecte, acțiuni, pentru a evidenția unul dintre termeni.']},
            ]),
            ('2. CUM ESTE ALCĂTUITĂ', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'comparatul', 'col': 't', 'p': ['termenul **descris**', '*labirint*']},
                    {'titlu': 'elementul de legătură', 'col': 'a', 'p': ['*ca, precum, cât, asemenea cu, aidoma cu, întocmai ca, asemănător cu, la fel ca*']},
                    {'titlu': 'comparantul', 'col': 'm', 'p': ['termenul care **ajută la descriere**', '*păienjeniș*']},
                ]},
                {'t': 'text', 'p': ['Cei doi termeni au **trăsături comune**: labirintul și păienjenișul sunt *întortocheate, încâlcite, complicate, derutante*.',
                                    'Comparatul poate fi un **substantiv**, un **adjectiv** sau un **verb**.']},
            ]),
            ('3. EXEMPLE', [
                {'t': 'tabel', 'cap': ['Comparația', 'Comparatul', 'Comparantul'], 'lat': [0.5, 0.25, 0.25],
                 'r': [['*Coada lui puternică șfichiuia aerul* **ca un bici**.', '*șfichiuia* (verb)', '*un bici*'],
                       ['*Minotaurul avea coarne ascuțite* **ca o suliță**.', '*ascuțite* (adjectiv)', '*o suliță*'],
                       ['*Labirintul avea galerii* **ca un păienjeniș**.', '*galerii* (substantiv)', '*un păienjeniș*']]},
                {'t': 'nota', 'titlu': 'Comparații pe care le folosim zilnic:', 'p': ['*albastru ca cerul, roșu ca focul, verde ca iarba*: le recunosc, dar în scris caut comparații **noi**, surprinzătoare.']},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-6',
        'titlu': 'Textul multimodal. Banda desenată',
        'sub': SUB.format(n=6, pp='pp. 116-118'),
        'sursa': 'Sursa: Manual Art 5, p. 118, rubrica Repere (definițiile sunt cuvânt cu cuvânt) și p. 116 (prezentarea benzii desenate, reformulată). Elementele benzii desenate sunt în schema lecției 7.',
        'sect': [
            ('1. TEXTUL MULTIMODAL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul multimodal** combină două sau mai multe modalități de comunicare pentru a transmite informații: cuvinte, imagini, culoare, sunete, gesturi, mimică, lumină, mișcare, așezare în spațiu etc.']},
            ]),
            ('2. CELE CINCI CODURI', [
                {'t': 'text', 'p': ['Într-un text multimodal, se folosesc următoarele coduri:']},
                {'t': 'tabel', 'cap': ['Codul', 'Ce cuprinde'], 'lat': [0.25, 0.75],
                 'r': [['**lingvistic**', 'vocabular, gramatică, ortografie etc.'],
                       ['**vizual**', 'culoare, forme, mișcare, grafice etc.'],
                       ['**auditiv**', 'ton, volum, ritm, efecte sonore etc.'],
                       ['**gestual**', 'gest, mimică, postură, mișcare etc.'],
                       ['**spațial**', 'direcție, apropiere, depărtare etc.']]},
            ]),
            ('3. SUPORTUL', [
                {'t': 'text', 'p': ['Suportul folosit pentru textul multimodal poate fi:']},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'hârtia', 'col': 't', 'p': ['cărți, afișe, benzi desenate etc.']},
                    {'titlu': 'digital', 'col': 'm', 'p': ['film, animații, spoturi publicitare, slide-uri etc.']},
                    {'titlu': 'live', 'col': 'a', 'p': ['spectacole de teatru, operă, operetă, balet etc.']},
                ]},
            ]),
            ('4. SIMPLU ȘI COMPLEX', [
                {'t': 'text', 'p': ['După numărul de modalități de comunicare folosite, textele multimodale pot fi:']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'simple', 'col': 't', 'p': ['când îmbină doar două modalități (afișe, postere, slide-uri etc.)']},
                    {'titlu': 'complexe', 'col': 'm', 'p': ['când îmbină trei sau mai multe modalități (filme, teatru, operă etc.)']},
                ]},
            ]),
            ('5. BANDA DESENATĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Banda desenată** este un text multimodal simplu în care se narează cu ajutorul imaginilor și al cuvintelor.']},
                {'t': 'nota', 'titlu': 'Banda din manual', 'p': ['Este realizată după fragmente din *Hoțul fulgerului* și *Bătălia din Labirint* de **Rick Riordan**, scriitor american pasionat de legendele antice. El a plasat în lumea de astăzi zei și semizei și astfel s-a născut seria *Percy Jackson și olimpienii*. Percy este, de fapt, întruchiparea eroului grec Perseu.']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Elementele benzii desenate (planșa, banda, vinieta, bulele și celelalte) le notez din schema lecției 7.']},
            ]),
        ],
    },
    # ---------------- Lecția 7 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-7',
        'titlu': 'Textul explicativ (aplicativ). Cum fac o bandă desenată',
        'sub': SUB.format(n=7, pp='pp. 118-119'),
        'sursa': 'Sursa: Manual Art 5, p. 119 (fișa cu instrucțiuni și cerințele) și p. 118 (Repere despre banda desenată).',
        'sect': [
            ('1. TEXTUL CARE DĂ INSTRUCȚIUNI', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Un text **explicativ (aplicativ)** oferă explicații și **instrucțiuni** pentru a realiza ceva.']},
                {'t': 'tabel', 'cap': ['Trăsătura', 'Cum apare în fișa pentru banda desenată'], 'lat': [0.35, 0.65],
                 'r': [['titlu și subtitluri', 'evidențiate prin mărimea literelor și prin culori'],
                       ['pași separați', 'paragrafe scurte, fiecare evidențiat'],
                       ['verbe la **imperativ**', '*Alege… Scrie… Stabilește… Desenează…*'],
                       ['schițe', 'arată prin desen ce ai de făcut'],
                       ['lista de materiale', 'coli A4, creion, creioane colorate, tuș, gumă, riglă, capsator']]},
            ]),
            ('2. PAȘII PENTRU O BANDĂ DESENATĂ', [
                {'t': 'text', 'p': ['1. Alege subiectul și personajele (fă schițe); stabilește locul și timpul.',
                                    '2. Scrie **scenariul**: ordinea întâmplărilor și ce spun personajele.',
                                    '3. Stabilește numărul de **planșe**, de **benzi** pe planșă și de **viniete** pe bandă.',
                                    '4. Desenează fiecare vinietă cu creionul și plasează **bulele** potrivite.',
                                    '5. Trasează desenul cu tuș, scrie textul din bule și din recitative, apoi colorează.',
                                    '6. Fă o copertă cu titlul și capsează colile.']},
            ]),
            ('3. VOCABULARUL BENZII DESENATE', [
                {'t': 'tabel', 'cap': ['Termenul', 'Ce înseamnă'], 'lat': [0.25, 0.75],
                 'r': [['planșa', 'o pagină cu benzi desenate'],
                       ['banda', 'succesiunea orizontală de viniete'],
                       ['vinieta', 'imaginea delimitată de un cadru'],
                       ['bulele', 'replicile (rotunde sau dreptunghiulare), gândurile (norișori), strigătele (cu zimți)'],
                       ['recitativul', 'panoul cu comentariile naratorului, sus sau jos în vinietă'],
                       ['ideogramele', 'desene simbolice: stele, inimioare, note muzicale'],
                       ['onomatopeele', 'cuvinte care imită zgomote'],
                       ['liniile de mișcare', 'arată o deplasare']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Banda desenată este un **text multimodal simplu**: povestește prin imagini și cuvinte.']},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-8',
        'titlu': 'Text auxiliar. „Eu sunt Malala”',
        'sub': SUB.format(n=8, pp='pp. 120-121'),
        'sursa': 'Sursa: Manual Art 5, pp. 120-121 (caseta de prezentare, notele de subsol cuvânt cu cuvânt, Discutarea textului ex. 1-5 și 9). Lecția nu are rubrica Repere. Datele din tabel sunt reformulate după caseta de la p. 120. Locurile goale rămân elevilor, ideile principale se stabilesc la oră.',
        'sect': [
            ('1. AUTOAREA ȘI CARTEA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'AUTOAREA', 'col': 'm',
                     'p': ['**Malala Yousafzai**, născută în 1997 în Pakistan.',
                           'A început încă de la vârsta de zece ani o campanie pentru educația fetelor, fiindcă talibanii le interziseseră acestora accesul la învățământul public.']},
                    {'titlu': 'CARTEA', 'col': 't',
                     'p': ['*Eu sunt Malala* este scrisă împreună cu **Patricia McCormick**.',
                           'Fragmentul din manual face parte din această carte.']},
                ]},
                {'t': 'tabel', 'cap': ['Anul', 'Ce se întâmplă'], 'lat': [0.16, 0.84],
                 'r': [['**2009**', 'Toate școlile de fete din Pakistan trebuiau închise. Malala merge la școala particulară a tatălui ei.'],
                       ['**2012**', 'În timp ce se întorcea acasă cu autobuzul școlar, este împușcată. Din fericire, supraviețuiește.'],
                       ['**2014**', 'Primește Premiul Nobel pentru Pace, fiind cea mai tânără deținătoare a acestui premiu.'],
                       ['**2015**', 'În semn de omagiu, numele ei este dat unei stele.']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Pentru că talibanii au continuat cu amenințările, Malala și, mai apoi, familia ei s-au refugiat în Marea Britanie.']},
            ]),
            ('2. FIȘA FRAGMENTULUI', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Ce găsesc în text'], 'lat': [0.27, 0.73],
                 'r': [['Cine sunt persoanele? (ex. 1)', '**Malala**, care povestește; **tatăl ei**, numit *Aba*; o **jurnalistă pakistaneză** care trăia în Alaska; talibanii, despre care se vorbește.'],
                       ['Unde și când? (ex. 2)', '*La începutul lui 2012*, în **Karachi**, unde Malala și tatăl ei erau invitații GEO TV.'],
                       ['Pentru ce luptă Malala? (ex. 3)', '……………………………………………'],
                       ['La ce pericole o expune lupta ei? (ex. 4)', '……………………………………………']]},
            ]),
            ('3. IDEEA PRINCIPALĂ A FIECĂRUI FRAGMENT', [
                {'t': 'text', 'p': ['Textul se împarte în șase fragmente (ex. 5). Elevul care joacă rolul profesorului scrie pe tablă ideea principală a fragmentului, iar eu o copiez aici.']},
                {'t': 'tabel', 'cap': ['Fragmentul', 'Ideea principală'], 'lat': [0.20, 0.80],
                 'r': [['1', '……………………………………………'], ['2', '……………………………………………'],
                       ['3', '……………………………………………'], ['4', '……………………………………………'],
                       ['5', '……………………………………………'], ['6', '……………………………………………']]},
            ]),
            ('4. CUVINTE NOI DIN NOTELE DE SUBSOL', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Explicația din manual'], 'lat': [0.24, 0.76],
                 'r': [['*taliban* (s. m.)', 'membru al unui grup care militează pentru mișcarea religioasă fundamentalistă islamică, în care femeilor le este interzis să studieze, să iasă neînsoțite în public, să umble fără văl pe cap'],
                       ['*Karachi*', 'oraș din sudul Pakistanului'],
                       ['*New York Times*', 'grup de presă american'],
                       ['*jani*', '„draga mea”, în pakistaneză'],
                       ['*aba*', 'termen afectuos, în pakistaneză, pentru „tată”'],
                       ['*paștun* (s. m.)', 'locuitor al unei provincii din nord-vestul Pakistanului; Malala precizează în cartea sa că paștunii sunt un popor pentru care onoarea reprezintă o valoare esențială']]},
            ]),
            ('5. TRĂSĂTURILE MALALEI', [
                {'t': 'text', 'p': ['Recitesc ultimele opt alineate și justific fiecare trăsătură printr-un fragment (ex. 9).']},
                {'t': 'tabel', 'cap': ['Trăsătura', 'Dovada din text'], 'lat': [0.28, 0.72],
                 'r': [['curaj', '……………………………………………'],
                       ['generozitate', '……………………………………………'],
                       ['pacifism', '……………………………………………'],
                       ['hotărâre', '……………………………………………'],
                       ['solidaritate', '……………………………………………']]},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-9',
        'titlu': 'Modele comportamentale eroice de-a lungul timpului',
        'sub': SUB.format(n=9, pp='pp. 122-123'),
        'sursa': 'Sursa: Manual Art 5, p. 123, rubrica Repere (cuvânt cu cuvânt), Explorare ex. 3 (axa cronologică) și Aplicații ex. 2 (tabelul). Interculturalitate. Coloanele de completat rămân elevilor.',
        'sect': [
            ('1. EROUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Eroul** este o ființă excepțională în care sunt proiectate valori și aspirații umane permanente (curaj, putere de sacrificiu, bunătate, spirit de dreptate etc.).']},
            ]),
            ('2. CUM S-A SCHIMBAT MODELUL EROIC', [
                {'t': 'text', 'p': ['Modelul comportamental eroic s-a transformat de-a lungul secolelor.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'Înainte', 'col': 'a', 'p': ['Eroul grec era caracterizat de noblețea originii divine, de unicitate, fiind idealizat de către artiști.']},
                    {'titlu': 'Astăzi', 'col': 't', 'p': ['Eroul contemporan poate fi **omul obișnuit**, sub multiple înfățișări.']},
                ]},
                {'t': 'text', 'p': ['**Televiziunea, ziarele și revistele** au un rol important în impunerea eroilor contemporani.']},
            ]),
            ('3. AXA CRONOLOGICĂ', [
                {'t': 'text', 'p': ['Copiez axa în caiet și notez eroii specifici fiecărei epoci, pe care i-am descoperit în textul de la Explorare, ex. 1 (ex. 3).']},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': '3000 î.H.', 'sub': 'Mesopotamia', 'col': 't', 'p': ['eroii: ……………']},
                    {'titlu': 'sec. al VIII-lea î.H.', 'sub': 'Grecia', 'col': 't', 'p': ['eroii: ……………']},
                    {'titlu': 'sec. I î.H.', 'sub': 'Roma', 'col': 't', 'p': ['eroii: ……………']},
                    {'titlu': 'Evul Mediu', 'sub': 'Europa', 'col': 'a', 'p': ['eroii: ……………']},
                    {'titlu': 'sec. al XIX-lea', 'sub': 'Europa', 'col': 'm', 'p': ['eroii: ……………']},
                    {'titlu': 'sec. al XX-lea', 'sub': 'America, Europa, Asia', 'col': 'm', 'p': ['eroii: ……………']},
                ]},
            ]),
            ('4. EROUL ANTIC, NAȚIONAL ȘI UNIVERSAL', [
                {'t': 'text', 'p': ['Completăm tabelul pe grupe (Aplicații, ex. 2) și prezentăm rezultatele în fața clasei.']},
                {'t': 'tabel', 'cap': ['Tipul de erou', 'Înfățișare', 'Fapte', 'Ce le inspiră celorlalți oameni'], 'lat': [0.20, 0.22, 0.28, 0.30],
                 'r': [['Eroul antic', '', '', ''],
                       ['Eroul național', '', '', ''],
                       ['Eroul universal', '', '', '']]},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-10',
        'titlu': 'Atitudini comunicative. Acte de limbaj: a întreba, a solicita, a felicita',
        'sub': SUB.format(n=10, pp='pp. 124-125'),
        'sursa': 'Sursa: Manual Art 5, pp. 124-125, rubricile Repere și exemplul din Explorare.',
        'sect': [
            ('1. CE TRANSMIT CÂND COMUNIC', [
                {'t': 'text', 'p': ['Nu contează doar **ce** spun, ci și **cum** spun. Prin cuvinte, gesturi și voce transmit:']},
                {'t': 'tabel', 'cap': ['Transmit', '*„Hai să salvăm împreună cățelul ăsta!”*'], 'lat': [0.35, 0.65],
                 'r': [['o informație', 'cățelul e în pericol'],
                       ['o stare, o atitudine', 'îmi este milă de cățel'],
                       ['o așteptare de la ascultător', 'îl îndemn să mă ajute'],
                       ['relația dintre noi', 'o relație de colaborare']]},
                {'t': 'text', 'p': ['Tot ce spune, dincolo de cuvinte, ceva despre vorbitor și despre relația dintre cei care comunică sunt **atitudini comunicative**.']},
            ]),
            ('2. ATENȚIA ȘI EMPATIA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'atenția', 'col': 't', 'p': ['ascultătorul se concentrează la ce spune vorbitorul; vorbitorul observă cum reacționează ascultătorul']},
                    {'titlu': 'empatia', 'col': 'm', 'p': ['capacitatea de a te pune **în locul celuilalt**, de a fi interesat de ce gândește sau simte']},
                ]},
            ]),
            ('3. ACTE DE LIMBAJ', [
                {'t': 'text', 'p': ['Un **act de limbaj** este o comunicare inițiată cu o anumită **intenție**: a întreba, a solicita, a felicita.']},
                {'t': 'tabel', 'cap': ['Actul', 'Cu cei apropiați', 'Politicos, cu cei pe care nu-i cunosc bine'], 'lat': [0.2, 0.36, 0.44],
                 'r': [['**a întreba** (cer un răspuns)', '*Ce știi despre…? Ce părere ai despre…?*', '*Ce mi-ați putea spune despre…? Știți cumva…?*'],
                       ['**a solicita** (aștept o reacție)', '*Dă-mi, te rog… Explică-mi, te rog…*', '*Ați putea să-mi spuneți…? Vă rog frumos să… Am rugămintea să…*'],
                       ['**a felicita** (laud sau urez)', '*Bravo! Felicitări! Ești eroul meu!*', '*Aș vrea să vă felicit pentru… Îmi face plăcere să vă urez…*']]},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-11',
        'titlu': 'Pronumele. Pronumele personal',
        'sub': SUB.format(n=11, pp='pp. 126-127'),
        'sursa': 'Sursa: Manual Art 5, pp. 126-127, rubricile Repere și modelul de analiză.' + CREATE,
        'sect': [
            ('1. PRONUMELE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Pronumele** este partea de vorbire care **ține locul unui substantiv**.']},
                {'t': 'text', 'p': ['*Nadia Comăneci a obținut primul zece.* → **Ea** *a obținut primul zece.*']},
            ]),
            ('2. PRONUMELE PERSONAL', [
                {'t': 'text', 'p': ['**Pronumele personal** indică persoanele care participă la comunicare.']},
                {'t': 'tabel', 'cap': ['Persoana', 'Cine este', 'Singular', 'Plural'], 'lat': [0.2, 0.3, 0.25, 0.25], 'al': ['l', 'l', 'c', 'c'],
                 'r': [['I', 'vorbitorul', 'eu', 'noi'],
                       ['a II-a', 'ascultătorul', 'tu', 'voi'],
                       ['a III-a', 'cel despre care se vorbește', 'el (m.), ea (f.)', 'ei (m.), ele (f.)']]},
                {'t': 'text', 'p': ['• Pronumele personal are **gen** doar la persoana a III-a.',
                                    '• Are forme **accentuate** (*eu, tu, el, ea, mine, mie*) și **neaccentuate**, numite și **clitice** (*mă, m-, îmi, mi, îți, ți*).']},
                {'t': 'text', 's': 16, 'p': ['*Pe* **mine** **mă** *atrage viața savanților.*']},
            ]),
            ('3. PRONUNȚIA CORECTĂ', [
                {'t': 'atentie', 'p': ['*eu, el, ei, ele* se scriu cu **e** și se pronunță la început cu [ĭe]; *ea* se scrie cu **e** și se pronunță [ĭa].']},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„ei”* – pronume personal, persoana a III-a, numărul plural, genul masculin, forma accentuată.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-12',
        'titlu': 'Pronumele personal. Din SMS în limba română corectă',
        'sub': SUB.format(n=12, pp='p. 127'),
        'sursa': 'Sursa: Manual Art 5, p. 127 (Aplicații și Deschideri).' + CREATE,
        'sect': [
            ('1. PRONUMELE SCURTE SE LEAGĂ CU CRATIMĂ', [
                {'t': 'text', 'p': ['Formele neaccentuate ale pronumelui personal se leagă cu **cratimă** de cuvântul vecin:']},
                {'t': 'tabel', 'cap': ['Scriem', 'Înseamnă', 'Exemplu'], 'lat': [0.18, 0.37, 0.45],
                 'r': [['*nu-l*', 'nu + îl', '*Nu-l găsesc.*'], ['*n-o*', 'nu + o', '*N-o chem.*'],
                       ['*nu-i*', 'nu + îi', '*Nu-i dau cartea.*'], ['*ce-l*', 'ce + îl', '*Ce-l doare?*']]},
            ]),
            ('2. CUVINTE CARE SE AUD LA FEL', [
                {'t': 'tabel', 'cap': ['Cu cratimă', 'Fără cratimă'], 'lat': [0.5, 0.5],
                 'r': [['*mi-au* = mi + au: *Mi-au dat un premiu.*', '*miau* = sunetul pisicii'],
                       ['*i-a* = i + a: *I-a spus adevărul.*', '*ia* = verbul *a lua*: *Ia cartea!*'],
                       ['*l-a* = l + a: *L-a chemat.*', '*la* = prepoziție: *Merg la școală.*'],
                       ['*ne-a* = ne + a: *Ne-a ajutat.*', '*nea* = nene: *Nea Mihai.*']]},
                {'t': 'text', 'p': ['Același cuvânt poate fi pronume sau alt cuvânt: *Pe* **mine** *mă caută.* (pronume) / *Am trei* **mine** *de pix.* (substantiv)']},
            ]),
            ('3. SMS-UL ȘI LIMBA STANDARD', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'în SMS', 'col': 'r', 'p': ['prescurtări, fără diacritice, fără cratime, multe semne de exclamare']},
                    {'titlu': 'în scris, la școală', 'col': 'v', 'p': ['cuvinte întregi, **diacritice**, **cratimă** la pronumele scurte, punctuație corectă']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-13',
        'titlu': 'Pronumele personal de politețe',
        'sub': SUB.format(n=13, pp='pp. 128-129'),
        'sursa': 'Sursa: Manual Art 5, pp. 128-129, rubricile Repere, tabelul formelor și modelul de analiză.',
        'sect': [
            ('1. CE ARATĂ', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Pronumele personal de politețe** arată **respectul** față de o persoană.']},
                {'t': 'text', 'p': ['Are doar persoanele **a II-a** și **a III-a** și se deosebește după gen doar la persoana a III-a singular.']},
            ]),
            ('2. FORMELE', [
                {'t': 'tabel', 'cap': ['', 'singular', 'plural'], 'lat': [0.24, 0.38, 0.38],
                 'r': [['persoana a II-a', '*dumneata* (d-ta), *dumitale* (d-tale); *dumneavoastră* (dv., dvs.)', '*dumneavoastră* (dv., dvs., d-voastră)'],
                       ['persoana a III-a, masculin', '*dumnealui* (d-lui), *dânsul*', '*dumnealor* (d-lor), *dânșii*'],
                       ['persoana a III-a, feminin', '*dumneaei* (d-ei), *dânsa*', '*dumnealor* (d-lor), *dânsele*']]},
                {'t': 'text', 'p': ['• *dânsul, dânsa, dânșii, dânsele* exprimă cel mai **scăzut** grad de respect; în Moldova, regional, au valoare de pronume personal.',
                                    '• Variante familiare: *mata, matale, mătăluță, mătălică, tălică*.']},
            ]),
            ('3. FORMULELE REVERENȚIOASE', [
                {'t': 'text', 'p': ['Arată **cel mai înalt** grad de respect, în limbajul oficial: *Majestatea Voastră, Domnia Voastră, Preafericirea Voastră, Excelența Sa*.']},
                {'t': 'atentie', 'p': ['Au **majusculă la fiecare termen**: *Domnia Sa*, nu *Domnia sa*. Corect: *Majestatea*, nu *Maiestatea*.',
                                       'Cu *dumneavoastră*, verbul e la **persoana a II-a plural**, chiar și pentru o singură persoană: *Dumneavoastră* **ați venit**.']},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„dumneavoastră”* – pronume personal de politețe, persoana a II-a, numărul singular (adresare către o singură persoană).']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-14',
        'titlu': 'Adjectivul. Articolul demonstrativ',
        'sub': SUB.format(n=14, pp='pp. 130-131'),
        'sursa': 'Sursa: Manual Art 5, pp. 130-131, rubricile Repere, tabelul formelor și modelul de analiză.' + CREATE,
        'sect': [
            ('1. ADJECTIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Adjectivul** este partea de vorbire care exprimă **însușirea** unui obiect și determină un substantiv.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'propriu-zis', 'col': 't', 'p': ['*curajos, verde*']},
                    {'titlu': 'provenit din verb la participiu', 'col': 'm', 'p': ['*desenat, imprimat*']},
                ]},
            ]),
            ('2. FORMA ȘI ACORDUL', [
                {'t': 'text', 'p': ['• **Desinența** arată cum se schimbă forma după gen și număr: *curajos, curajoasă, curajoși, curajoase*.',
                                    '• Adjectivele sunt **variabile** (își schimbă forma) sau **invariabile** (*gri, roz*: *un costum gri, niște aripi gri*).',
                                    '• Adjectivul se **acordă în gen și număr** cu substantivul determinat.',
                                    '• Locul obișnuit e **după** substantiv. Pus **înainte**, preia articolul hotărât: *liliacul uriaș → uriașul liliac*.',
                                    '• În propoziție, adjectivul este **atribut**.']},
                {'t': 'atentie', 'titlu': 'Adjectivele în -iu:', 'p': ['*copiii* **zglobii** (după substantiv) / **zglobiii** *copii* (înainte, cu articol: trei *i*).']},
            ]),
            ('3. ARTICOLUL DEMONSTRATIV', [
                {'t': 'text', 'p': ['**Articolul demonstrativ** leagă un adjectiv de substantivul determinat și se acordă în gen și număr cu acesta: *pelerina* **cea** *roșie*, *băiatul* **cel** *mic*.']},
                {'t': 'tabel', 'cap': ['', 'masculin', 'feminin'], 'lat': [0.3, 0.35, 0.35], 'al': ['l', 'c', 'c'],
                 'r': [['singular', 'cel, celui', 'cea, celei'], ['plural', 'cei, celor', 'cele, celor']]},
                {'t': 'tabel', 'cap': ['Scriem', 'Când', 'Exemplu'], 'lat': [0.18, 0.37, 0.45],
                 'r': [['*cel* / *ce-l*', 'articol / *ce* + *îl*', '*băiatul cel mic* / *Ce-l supără?*'],
                       ['*cea* / *ce-a*', 'articol / *ce* + *a*', '*fata cea harnică* / *Ce-a spus?*'],
                       ['*cei* / *ce-i*', 'articol / *ce* + *îi*', '*copiii cei mici* / *Ce-i dai?*']]},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„virtual”* – adjectiv propriu-zis, variabil, se acordă în gen și număr cu substantivul „joc” (neutru, singular), în propoziție este atribut.']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-15',
        'titlu': 'Gradele de comparație ale adjectivului',
        'sub': SUB.format(n=15, pp='pp. 132-133'),
        'sursa': 'Sursa: Manual Art 5, pp. 132-133, rubrica Repere.' + CREATE,
        'sect': [
            ('1. CE SUNT', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Gradele de comparație** (de intensitate) sunt formele pe care le ia adjectivul pentru a arăta **în ce măsură** un obiect are o însușire.']},
            ]),
            ('2. TOATE GRADELE', [
                {'t': 'tabel', 'cap': ['Gradul', 'Cum se formează', 'Exemplu'], 'lat': [0.34, 0.33, 0.33],
                 'r': [['**pozitiv** (forma din dicționar)', '—', '*copil curajos*'],
                       ['**comparativ de egalitate**', '*la fel de, tot atât de, tot așa de, deopotrivă de*', '*la fel de curajos*'],
                       ['**comparativ de superioritate**', '*mai*', '*mai curajos*'],
                       ['**comparativ de inferioritate**', '*mai puțin*', '*mai puțin curajos*'],
                       ['**superlativ relativ de superioritate**', '*cel, cea, cei, cele* + *mai*', '*cel mai curajos*'],
                       ['**superlativ relativ de inferioritate**', '*cel* + *mai puțin*', '*cel mai puțin curajos*'],
                       ['**superlativ absolut de superioritate**', '*foarte, tare, prea*', '*foarte curajos*'],
                       ['**superlativ absolut de inferioritate**', '*foarte puțin, tare puțin*', '*foarte puțin curajos*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Superlativul **relativ** compară cu un grup (*cel mai curajos din clasă*); superlativul **absolut** nu compară cu nimic.']},
            ]),
            ('3. ADJECTIVE FĂRĂ GRADE DE COMPARAȚIE', [
                {'t': 'tabel', 'cap': ['De ce', 'Exemple'], 'lat': [0.45, 0.55],
                 'r': [['erau deja comparative sau superlative în latină', '*superior, inferior, optim, suprem, maxim, minim, superb*'],
                       ['însușirea nu poate fi modificată', '*complet, unic, principal, veșnic, colosal, uriaș, gigantic*'],
                       ['sensul nu permite comparația', '*acvatic, energetic, profesional, bucureștean*']]},
                {'t': 'atentie', 'p': ['Greșit: *foarte excelent*, *cel mai unic*. Aceste adjective nu primesc *mai* sau *foarte*.']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-16',
        'titlu': 'Descrierea unei persoane. Autoportretul',
        'sub': SUB.format(n=16, pp='pp. 134-135'),
        'sursa': 'Sursa: Manual Art 5, pp. 134-135, rubrica Repere, pașii și lista de control.',
        'sect': [
            ('1. PORTRETUL ȘI AUTOPORTRETUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Portretul** (descrierea unei persoane) se face stabilind elementele **fizice** și **morale** pe care le descriem și trăsăturile care fac persoana deosebită.']},
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Autoportretul** este portretul pe care cineva (scriitor, pictor sau om obișnuit) și-l face **sieși**.']},
            ]),
            ('2. CE POT DESCRIE', [
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'portretul fizic', 'col': 't', 'p': ['cum arăt']},
                    {'titlu': 'portretul moral', 'col': 'm', 'p': ['ce fel de om sunt']},
                    {'titlu': 'pasiunile', 'col': 'a', 'p': ['ce îmi place să fac']},
                    {'titlu': 'ce nu se vede', 'col': 'n', 'p': ['gusturi, obiceiuri, prieteni']},
                ]},
            ]),
            ('3. PAȘII AUTOPORTRETULUI', [
                {'t': 'text', 'p': ['1. Fac o listă cu tot ce mă definește, gândindu-mă că îl vor citi colegii.',
                                    '2. Restrâng lista la **cinci aspecte**.',
                                    '3. Schițez un **plan** cu ordinea lor.',
                                    '4. Scriu prima variantă, atent la organizarea ideilor.',
                                    '5. Revizuiesc: ideile importante, claritatea, apoi gramatica, ortografia, punctuația.',
                                    '6. Pot adăuga o fotografie sau un desen.']},
            ]),
            ('4. LISTA DE CONTROL', [
                {'t': 'text', 'p': ['• Paragraful introductiv prezintă tema și captează atenția.',
                                    '• Fiecare dintre cele cinci aspecte are paragraful său, cu detalii potrivite.',
                                    '• Stilul e plăcut; imaginea completează textul.',
                                    '• Textul e așezat corect în pagină, lizibil și îngrijit.']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-18',
        'titlu': 'Recapitulare. Lectură și comunicare în Unitatea IV',
        'sub': SUB.format(n=18, pp='pp. 110-125, 136-137'),
        'sursa': 'Sursa: Manual Art 5, rubricile Repere ale lecțiilor 2-10 și cerințele recapitulării de la pp. 136-137.',
        'sect': [
            ('1. LEGENDA', [
                {'t': 'text', 'p': ['Explicații **imaginare** pentru originea lumii, a plantelor, a animalelor, a fenomenelor; transmise mai întâi oral. În **legendele antice**, zeii intervin supranatural, într-un timp îndepărtat (*Tezeu și Minotaurul*, *Heracle și leul din Nemeea*).']},
            ]),
            ('2. CÂND CITESC O NARAȚIUNE', [
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'Cine?', 'col': 'n', 'p': ['personajul principal și cele secundare']},
                    {'titlu': 'Ce?', 'col': 'n', 'p': ['evenimentul prezentat']},
                    {'titlu': 'Unde? Când?', 'col': 'n', 'p': ['locul și timpul']},
                    {'titlu': 'De ce?', 'col': 'n', 'p': ['ce declanșează acțiunea']},
                ]},
            ]),
            ('3. COMPARAȚIA', [
                {'t': 'text', 'p': ['**comparat** + element de legătură (*ca, precum, cât…*) + **comparant**: *Săgeata s-a izbit de el* **ca de un zid de piatră**.']},
            ]),
            ('4. TEXTE CU MAI MULTE MODURI DE COMUNICARE', [
                {'t': 'text', 'p': ['**Textul explicativ (aplicativ)**: instrucțiuni, pași, verbe la imperativ, schițe.',
                                    '**Banda desenată**: planșă, bandă, viniete, bule, recitative, onomatopee.']},
            ]),
            ('5. COMUNICAREA', [
                {'t': 'text', 'p': ['**Atitudinile comunicative**: ce spun despre mine și despre relația cu ceilalți, dincolo de cuvinte. **Atenția** și **empatia** fac o comunicare bună.',
                                    '**Acte de limbaj**: a întreba, a solicita, a felicita, simplu cu cei apropiați, politicos cu ceilalți.']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-5/unitatea-4/lectia-19',
        'titlu': 'Recapitulare. Pronumele și adjectivul',
        'sub': SUB.format(n=19, pp='pp. 126-137'),
        'sursa': 'Sursa: Manual Art 5, pp. 126-135, rubricile Repere ale lecțiilor 11-15.',
        'sect': [
            ('1. PRONUMELE PERSONAL ȘI DE POLITEȚE', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.24, 0.46, 0.30],
                 'r': [['pronumele', 'ține locul unui substantiv', '*Heracle → el*'],
                       ['pronumele personal', 'persoana I, a II-a, a III-a; singular, plural; gen doar la a III-a', '*eu, tu, el/ea, noi, voi, ei/ele*'],
                       ['forme accentuate / neaccentuate', 'cele scurte se leagă cu cratimă', '*mie / îmi, mi-*'],
                       ['pronumele de politețe', 'arată respect; persoanele a II-a și a III-a', '*dumneavoastră, dumnealui*']]},
            ]),
            ('2. ADJECTIVUL', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.24, 0.46, 0.30],
                 'r': [['adjectivul', 'arată o însușire; se acordă cu substantivul; e atribut', '*leul uriaș*'],
                       ['propriu-zis / din participiu', '', '*roșu / aprins*'],
                       ['variabil / invariabil', 'își schimbă sau nu forma', '*mare – mari / gri*'],
                       ['articolul demonstrativ', 'leagă adjectivul de substantiv', '*Heracle cel viteaz*']]},
            ]),
            ('3. GRADELE DE COMPARAȚIE', [
                {'t': 'text', 'p': ['pozitiv: *puternic* · comparativ: *la fel de / mai / mai puțin puternic* · superlativ relativ: *cel mai / cel mai puțin puternic* · superlativ absolut: *foarte / foarte puțin puternic*']},
                {'t': 'atentie', 'p': ['Adjectivele ca *uriaș, unic, superb, suprem* **nu** au grade de comparație.']},
            ]),
        ],
    },
]
