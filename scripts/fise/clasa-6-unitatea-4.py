# Fișe de exerciții, clasa a VI-a, Unitatea IV „Popasuri cu tâlc”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 6). Textele fără autor
# sunt create pentru fișe (inclusiv fabula „Furnica și porumbelul”, după Esop,
# versificată pentru fișă); citatele scurte sunt doar din autori în domeniul
# public (Grigore Alexandrescu); traducerile și autorii sub drepturi sunt doar
# parafrazați. Lecția 23 (evaluarea) nu are fișă.
# Rezolvările: notite-profesor/clasa-6/unitatea-4/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-6-unitatea-4.py

SUB = 'Clasa a VI-a · Unitatea IV, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 6, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-6/unitatea-4/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
            'sursa': NOTA.format(pp=pp), 'reper': reper, 'pagini': list(pagini)}


def T(n, title, prompt, cols, widths, data=None, rows=None, row_h=22):
    return {'t': 'table', 'n': n, 'title': title, 'prompt': prompt, 'cols': cols,
            'widths': widths, 'rows': rows or len(data), 'row_h': row_h, 'data': data}


def L(n, title, prompt, weight=1):
    return {'t': 'lines', 'n': n, 'title': title, 'prompt': prompt, 'weight': weight}


def X(n, title, prompt):
    return {'t': 'text', 'n': n, 'title': title, 'prompt': prompt}


def gol(*randuri):
    return [[r, ''] for r in randuri]


def gol3(*randuri):
    return [[r, '', ''] for r in randuri]


def gol4(*randuri):
    return [[r, '', '', ''] for r in randuri]


AF = ['Afirmația', 'A / F']

VEVERITA = ('„O veveriță a strâns toată toamna alune, în timp ce un pițigoi râdea de ea din vârful unui fag. Când a '
            'venit iarna, pițigoiul a bătut, înghețat, la scorbura ei. Veverița i-a deschis și i-a dat jumătate din '
            'alune.”')

ANCHETA = [
    '(1) În ogradă erau rațe, curcani, bibilici și un cocoș țanțoș.',
    '(2) Vulpea pândea, se furișa, sărea și fugea cu prada.',
    '(3) Uliul era viclean, lacom și mincinos.',
    '(4) Găinile ciuguleau, trăgeau, smuceau sfoara.',
]

CUTIA = ('„Un băiat a găsit în podul bunicii o cutie încuiată. A căutat cheia toată după-amiaza. Seara, bunica i-a '
         'dat-o zâmbind. În cutie erau scrisorile pe care i le trimisese bunicul din armată.”')

CLIPIM = [
    '„De ce clipim? Clipim fiindcă ochii au nevoie să fie mereu umezi. La fiecare clipire, pleoapa întinde pe ochi '
    'un strat subțire de lacrimi, adică un lichid ușor sărat, care spală praful.',
    'De aceea, când stăm mult în fața ecranului și uităm să clipim, ochii ne ustură. Așadar, clipitul este un fel de '
    'ștergător de parbriz al ochilor.”',
]

FURNICA = [
    'Furnica și porumbelul (după Esop, în versuri scrise pentru fișă)',
    '„La un izvor, o furnică însetată / Căzu în apă și se zbătea speriată. / Un porumbel, din creanga unui fag, / '
    'Îi aruncă o frunză, ca un steag. / Furnica urcă pe frunză, udă toată, / Și ajunse pe mal, pe iarba bogată.',
    'Dar iată, un vânător, sub fag, pândea / Și-n porumbel, cu arcul, lung ochea. / Furnica, mică, vrednică și iute, '
    '/ Îl mușcă de călcâi, cu fălcile-i tăcute: / Vânătorul tresări, săgeata zbură-n vânt, / Iar porumbelul fugi spre '
    'alt pământ.',
    'Fă bine oricând, oricui, fără răsplată: / Și binele, cândva, la tine se arată.”',
    '(Semnul / arată sfârșitul versului.)',
]

FISE = [
    fisa(1, 'pp. 122-123',
         'Reper: În fabula „Uliul și găinile” de Grigore Alexandrescu, un uliu prins de Ion și legat lângă coteț le '
         'câștigă încrederea păsărilor prin vorbe frumoase și promisiuni. Eliberat de găini, le răpește pe rând. '
         'Versurile de la final spun învățătura.',
         [
             T(1, 'Cine face?', 'Scrie personajul (sau personajele) care fac fiecare acțiune.',
               ['Acțiunea (repovestită)', 'Personajul'], [340, 170], gol(
                   'prinde uliul și îl leagă lângă coteț',
                   'se sperie la început, apoi se obișnuiesc',
                   'promite că le va da de știre când vine vulpea',
                   'îl dezleagă cu ciocuri și cu unghii',
                   'strigă cu jale: „Ce pază este asta?”',
                   'răpește o găină, apoi două, trei'), row_h=24),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Uliul a fost legat în coteț.', 'La început, păsările s-au îngrozit.',
                 'Uliul a promis să le apere de lup.', 'Găinile l-au dezlegat într-o singură zi.',
                 'Uliul spune că acum e liber și le vorbește „de sus”.',
                 'Naratorul spune că el nu l-ar fi eliberat.'), row_h=24),
         ],
         [
             T(3, 'Cuvinte din text', 'Explică pe scurt sensul fiecărui cuvânt sau grup de cuvinte.',
               ['Cuvântul', 'Sensul'], [150, 360], gol(
                   'norocit', 'slobod', 'a slobozi', 'destoinic', 'făgăduială', 'cu jale')),
             T(4, 'Expresii cu animale', 'Explică expresiile. La care personaj din fabulă s-ar potrivi?',
               ['Expresia', 'Ce înseamnă și cui i se potrivește'], [220, 290], gol(
                   'a umbla cu cioara vopsită', 'lacrimi de crocodil', 'a-și băga capul în gura lupului',
                   'a face din țânțar armăsar'), row_h=28),
             L(5, 'În locul găinilor', 'Ce i-ai fi răspuns tu uliului, când v-a promis că vă păzește? Scrie 3-4 replici.', 2),
         ]),

    fisa(2, 'pp. 124-125',
         'Reper (manual, p. 124): Textul narativ în versuri relatează o întâmplare, printr-un narator, cu personaje, '
         'dialog și muzicalitate. Fabula oferă o lecție de viață prin întâmplări puse pe seama animalelor, plantelor, '
         'obiectelor; timpul și spațiul sunt vagi. Morala poate fi explicită (spusă) sau implicită (dedusă).',
         [
             T(1, 'Fabula pe scurt', 'Completează despre „Uliul și găinile”.',
               ['Întrebarea', 'Răspunsul'], [200, 310], gol(
                   'cine povestește', 'unde se petrece', 'când se petrece', 'ce parte e despărțită de rest',
                   'ce fel de morală are'), row_h=26),
             T(2, 'Versuri scurte', 'Ce idee pune în evidență fiecare vers scurt?',
               ['Versul', 'Ce subliniază'], [200, 310], gol(
                   '„Încă și să-i vorbească.”', '„Pe urmă câte vrei.”', '„Nu mai lăsă-ndoială;”',
                   '„Iar nu să ne jertfești.”'), row_h=28),
         ],
         [
             X(3, 'O fabulă fără morală scrisă', ['Citește textul (scris pentru fișă).', VEVERITA]),
             L(4, 'Morala ta', 'Morala acestei fabule e implicită. Formuleaz-o tu, într-o propoziție.', 1),
             T(5, 'Ce este fabula?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Fabula e scrisă întotdeauna în proză.', 'Personajele întruchipează trăsături omenești.',
                 'Timpul și spațiul sunt precizate exact.', 'Morala poate fi spusă de narator sau de un personaj.',
                 'Textele narative în versuri își au originea în tradițiile orale.')),
         ]),

    fisa(3, 'pp. 126-127',
         'Reper (manual, p. 126): Enumerația înșiră mai mulți termeni de același fel, despărțiți prin virgulă, ca să '
         'accentueze sau să detalieze. În fabule, personajele sunt măști pentru tipuri de oameni; întâmplarea se '
         'bazează pe opoziția dintre două personaje, iar raportul dintre ele se poate inversa.',
         [
             X(1, 'Patru enunțuri', ['Citește enunțurile (scrise pentru fișă).'] + ANCHETA),
             T(2, 'Enumerația', 'Scrie termenii enumerației și ce parte de vorbire sunt.',
               ['Nr.', 'Termenii enumerației', 'Partea de vorbire'], [60, 290, 160], gol3('1', '2', '3', '4')),
             T(3, 'Măștile', 'Ce defect sau ce calitate omenească întruchipează fiecare personaj de fabulă?',
               ['Personajul', 'Defectul sau calitatea'], [170, 340], gol(
                   'vulpea', 'lupul', 'mielul', 'greierele', 'furnica', 'uliul lui Alexandrescu')),
         ],
         [
             T(4, 'Leul și șoarecele', 'După Esop: un leu prinde un șoarece și, amuzat, îl lasă să plece. Mai târziu, '
               'leul cade în plasa vânătorilor, iar șoarecele roade funiile și îl eliberează. Arată cum se inversează '
               'raportul dintre personaje.',
               ['', 'Leul', 'Șoarecele'], [150, 180, 180], gol3('situația inițială', 'situația finală'), row_h=40),
             L(5, 'Titluri cu doi', 'Propune două titluri de fabulă cu doi termeni opuși (ca „Stejarul și trestia”) și scrie într-o propoziție ce s-ar întâmpla în fiecare.', 2),
         ]),

    fisa(4, 'p. 128',
         'Reper: Interpretezi „Uliul și găinile” când te întrebi pe cine critică: pe cel care promite și nu se ține '
         'de cuvânt sau pe cel care crede orice vorbă frumoasă. Morala de la final lămurește învățătura.',
         [
             T(1, 'Cine greșește?', 'Scrie DA sau NU și explică.',
               ['Personajul', 'Greșește?', 'De ce'], [110, 90, 310], gol3('uliul', 'găinile', 'Ion', 'naratorul'),
               row_h=30),
             T(2, 'Morala, în alte cuvinte', 'Reformulează morala fabulei.',
               ['Forma', 'Formularea ta'], [170, 340], gol(
                   'ca proverb', 'ca sfat', 'ca interdicție („Nu…”)', 'pentru un copil de 6 ani'), row_h=28),
         ],
         [
             T(3, 'De acord sau nu?', 'Scrie DA sau NU și un argument.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [240, 60, 210], gol3(
                   'Cine promite la ananghie uită repede.', 'Găinile sunt pedepsite pentru bunătate.',
                   'Fără morală, textul n-ar fi înțeles.', 'Titlul arată cine primește lecția.'), row_h=40),
             L(4, 'Scrisoarea găinilor', 'Scrie, în numele găinilor, o scrisoare de 5-6 rânduri către puii lor, cu sfatul pe care l-au învățat.', 3),
         ]),

    fisa(5, 'p. 128',
         'Reper: Pentru La Fontaine, fabula e o poveste inventată care arată totuși adevăruri și dă oamenilor povețe '
         'prin pilda animalelor. Învățătura din „Uliul și găinile” se poate verifica și azi: promisiunile făcute la '
         'nevoie sau prea frumoase trebuie cântărite.',
         [
             T(1, 'Uliul de azi', 'Seamănă situația cu fabula? Scrie DA sau NU și de ce.',
               ['Situația', 'DA / NU', 'De ce'], [300, 60, 150], gol3(
                   'un coleg promite că îți dă jocul înapoi mâine', 'un mesaj îți promite un premiu dacă dai parola',
                   'cineva promite orice ca să fie ales șef', 'un prieten îți cere tema „doar de data asta”'),
               row_h=40),
             L(2, 'Trei sfaturi', 'Scrie trei sfaturi pentru cineva care primește o promisiune prea frumoasă ca să fie adevărată.', 2),
         ],
         [
             T(3, 'Planul benzii desenate', 'Pregătește banda desenată după fabulă: șase cadre.',
               ['Cadrul', 'Ce se vede', 'Replica'], [60, 230, 220], gol3('1', '2', '3', '4', '5', '6'), row_h=30),
         ]),

    fisa(6, 'pp. 129-131',
         'Reper (manual, p. 129): Jean de La Fontaine (Franța, secolul al XVII-lea) a pornit de la fabulele lui Esop, '
         'cu scopul de „a instrui și a plăcea”. În „Iepurele și broasca-țestoasă”, morala stă la început, iar '
         'narațiunea are trei momente: provocarea, întrecerea, victoria.',
         [
             T(1, 'Două fabule', 'Compară cele două fabule.',
               ['', '„Uliul și găinile”', '„Iepurele și broasca”'], [150, 180, 180], gol3(
                   'locul moralei', 'personajele opuse', 'cine pare mai tare', 'cine câștigă', 'defectul criticat'),
               row_h=30),
             T(2, 'Cine spune sau face?', 'Scrie iepurele sau broasca.',
               ['Fapta sau vorba (repovestită)', 'Personajul'], [360, 150], gol(
                   'pune rămășag că ajunge prima', 'crede că nu e cazul să se grăbească', 'paște, doarme, se joacă',
                   'merge „șontâc, șontâc”', 'se repede, dar prea târziu', 'întreabă la final: „Tot n-am avut dreptate?”')),
         ],
         [
             T(3, 'Proverbe potrivite', 'Se potrivește proverbul cu fabula lui La Fontaine? Scrie DA sau NU.',
               ['Proverbul', 'DA / NU'], [440, 70], gol(
                   'Încet, încet, departe ajungi.', 'Graba strică treaba.', 'Cine râde la urmă râde mai bine.',
                   'Nu lăsa pe mâine ce poți face azi.', 'Ce ție nu-ți place, altuia nu-i face.')),
             L(4, 'Revanșa iepurelui', 'Scrie în 5-6 propoziții o a doua întrecere, în care iepurele a învățat lecția. Ce morală ar avea noua fabulă?', 3),
         ]),

    fisa(7, 'p. 132',
         'Reper (manual, p. 132): Proverbele sunt enunțuri scurte și sugestive care concentrează înțelepciunea unei '
         'comunități. Au la bază experiența de viață comună, circulă adesea la popoare diferite și se țin minte ușor, '
         'prin rime și figuri de stil (Lenea e cucoană mare, care cere de mâncare.).',
         [
             X(1, 'Recompune proverbele', [
                 'Pune cuvintele în ordine.',
                 'a) parte, carte, ai, ai → ______________________________________',
                 'b) dimineață, departe, cine, se scoală, ajunge, de → ______________________________________',
                 'c) mult, dulce, aduce, vorba → ______________________________________',
                 'd) se uită, ochii, nu, care, se văd → ______________________________________',
                 'e) pepenii, păzește, frica → ______________________________________',
                 'f) pe, limba, ei, pasăre, piere, fiecare → ______________________________________']),
             T(2, 'Ce înseamnă?', 'Explică fiecare proverb.',
               ['Proverbul', 'Ce înseamnă'], [320, 190], gol(
                   'Omul sfințește locul.', 'Socoteala de acasă nu se potrivește cu cea din târg.',
                   'Ce-ți faci cu mâna ta e bine făcut.', 'Cu răbdarea treci marea.', 'Pisica blândă zgârie rău.'),
               row_h=26),
         ],
         [
             T(3, 'Proverbul potrivit', 'Scrie proverbul de la ex. 2 care se potrivește fiecărei situații.',
               ['Situația', 'Proverbul'], [340, 170], gol(
                   'Andrei credea că termină tema repede; a stat două ore.',
                   'O profesoară a făcut dintr-o școală veche una vie.',
                   'Colegul cel mai tăcut a răspuns cel mai tăios.',
                   'Ioana a exersat luni întregi și a câștigat concursul.',
                   'Mihai și-a construit singur căsuța pentru păsări.'), row_h=26),
             L(4, 'Morala uliului, în proverb', 'Găsește un proverb pentru morala fabulei „Uliul și găinile” și explică alegerea.', 1),
             L(5, 'Un proverb inventat', 'Inventează un proverb cu rimă despre școală (ca „Lenea e cucoană mare, care cere de mâncare”).', 1),
         ]),

    fisa(8, 'p. 133',
         'Reper: Aceleași învățături apar în proverbele unor popoare diferite, pentru că oamenii au trecut prin '
         'experiențe asemănătoare: Piatra ce se rostogolește nu prinde mușchi. are perechi în engleză și în franceză.',
         [
             T(1, 'Echivalente românești', 'Scrie proverbul românesc cu același înțeles.',
               ['Proverbul (țara)', 'Echivalentul românesc'], [300, 210], gol(
                   'Anglia: Nu judeca o carte după copertă.', 'Germania: Ora dimineții are aur în gură.',
                   'Italia: Cine merge încet ajunge departe.', 'Franța: Cine se aseamănă se adună.',
                   'Anglia: Orice nor are o margine de argint.'), row_h=26),
             X(2, 'Completează proverbele', [
                 'a) Cine se scoală de dimineață departe __________.    b) Fiecare pasăre pe limba ei __________.',
                 'c) Nu e pădure fără __________.    d) Banii albi sunt buni pentru zile __________.',
                 'e) Ce naște din pisică șoareci __________.']),
         ],
         [
             L(3, 'Tabloul proverbului', 'Alege un proverb și descrie în 3-4 propoziții scena în care l-ai picta „ad litteram”, ca Pieter Bruegel.', 3),
             L(4, 'Întreabă acasă', 'Scrie un proverb pe care îl spun des bunicii sau părinții tăi și în ce situație îl folosesc.', 2),
         ]),

    fisa(9, 'p. 134',
         'Reper (manual, p. 134): Dicția este pronunțarea clară și corectă a cuvintelor: nu prea repede, nu prea încet, '
         'fără silabe înghițite și fără exagerare. În scris, căderea unor sunete în vorbirea familiară se marchează '
         'prin apostrof (un’ = unde).',
         [
             X(1, 'Încurcături de limbă', [
                 'Citește fiecare încurcătură de trei ori, tot mai repede (sunt scrise pentru fișă). Subliniază grupul de sunete cel mai greu.',
                 'a) Șase șoareci șușotesc prin șase șuri de paie.',
                 'b) Trei trenuri trec tăcute prin tunelul trist.',
                 'c) Căpșuni coapte în coșuleț, coșulețul lângă coteț.']),
             T(2, 'Forma îngrijită', 'Scrie forma din limba îngrijită.',
               ['Rostirea familiară', 'Forma îngrijită'], [250, 260], gol(
                   'las’ că vin', 'dom’ profesor', 'p-aici', 'd-aia', 'ș-apoi')),
         ],
         [
             T(3, 'Sfaturi pentru vorbitor', 'Ce sfat îi dai fiecărui vorbitor?',
               ['Problema', 'Sfatul meu'], [220, 290], gol(
                   'vorbește prea repede, înghite silabe', 'vorbește prea încet', 'articulează exagerat',
                   'vorbește pe un singur ton'), row_h=28),
             L(4, 'Încurcătura ta', 'Creează o încurcătură de limbă cu sunetele „ț” sau „cr” și exerseaz-o.', 2),
         ]),

    fisa(10, 'p. 135',
         'Reper (manual, p. 135): Inteligența emoțională înseamnă să-ți înțelegi și să-ți folosești emoțiile pozitiv. '
         'Are trei componente: conștientizarea de sine, empatia, autocontrolul. Semaforul: roșu – te oprești și spui ce '
         'simți; galben – te gândești la soluții și la urmări; verde – alegi planul și acționezi.',
         [
             T(1, 'Ce componentă?', 'Scrie: conștientizare de sine, empatie sau autocontrol.',
               ['Ce spune copilul', 'Componenta'], [360, 150], gol(
                   '„Îmi dau seama că sunt nervos: n-am dormit.”', '„Înțeleg de ce Maria e tristă: i s-a pierdut câinele.”',
                   '„Număr până la zece înainte să răspund.”', '„Mă descurc la desen, dar la probleme îmi e greu.”',
                   '„Cum s-ar simți colegul dacă aș râde de el?”')),
             T(2, 'Semaforul', 'Situația: colegul ți-a luat pixul fără să întrebe și ți l-a stricat. Ce faci?',
               ['Culoarea', 'Ce faci'], [150, 360], gol(
                   'ROȘU (oprește-te)', 'GALBEN (gândește-te)', 'VERDE (acționează)'), row_h=36),
         ],
         [
             T(3, 'Numește emoția', 'Scrie emoția (sau emoțiile) potrivite.',
               ['Situația', 'Emoția'], [340, 170], gol(
                   'ai primit o notă mare după mult efort', 'prietenul tău s-a mutat în alt oraș',
                   'urmează să vorbești în fața școlii', 'cineva te-a vorbit pe la spate', 'ai spart vaza bunicii')),
             L(4, 'Mesajul de împăcare', 'Scrie un mesaj de 3-4 rânduri către un coleg cu care te-ai certat: spune ce ai simțit, fără să-l acuzi („Eu am simțit…”).', 2),
         ]),

    fisa(11, 'pp. 136-137',
         'Reper (manual, p. 136): Pronumele personal ține locul unui substantiv. Persoana I = vorbitorul, a II-a = '
         'ascultătorul, a III-a = cel despre care se vorbește; genul apare doar la persoana a III-a. În dativ și '
         'acuzativ, pronumele are forme accentuate (mie, pe mine) și neaccentuate, numite clitice (îmi, mă).',
         [
             T(1, 'Înlocuiește cu pronume', 'Înlocuiește cuvintele din paranteză cu pronume personale.',
               ['Enunțul', 'Enunțul cu pronume'], [270, 240], gol(
                   '(Vulpea) pândește cotețul.', 'Ion îl leagă pe (uliu).', 'Le dau (găinilor) grăunțe.',
                   '(Tu și Andrei) veniți la teatru?', 'Mă gândesc la (fratele meu).')),
             T(2, 'Persoana, numărul, genul', 'Completează.',
               ['Pronumele', 'Persoana', 'Numărul', 'Genul'], [150, 120, 120, 120], gol4(
                   'ele (Ele cântă.)', 'mie (Mie îmi place.)', 'voi (Voi veniți?)', 'lui (cartea lui)',
                   'te (Te aștept.)')),
         ],
         [
             T(3, 'Accentuat sau neaccentuat?', 'Scrie A sau N și cazul.',
               ['Pronumele', 'A / N', 'Cazul'], [200, 110, 200], gol3('mie', 'îmi', 'pe mine', 'mă', 'ție', 'îți')),
             X(4, 'Ortograme', [
                 'Încercuiește forma potrivită.',
                 'a) Andrei (l-a / la) întâlnit (l-a / la) bibliotecă.    b) Profesorul (ne-a / nea) spus că vine (ne-a / nea) Vasile.',
                 'c) Pixurile acestea (ți-i / ții) dau dacă (ți-i / ții) promisiunea.',
                 'd) Colegii (vi-i / vii) prezint diseară, dacă (vi-i / vii).']),
         ]),

    fisa(12, 'pp. 137-139',
         'Reper (manual, p. 138): Pronumele de politețe arată grade de respect: redus (dumneata, dânsul), standard '
         '(dumneavoastră), sporit (domnia-voastră, domnia-sa). „Dumneavoastră” cere verbul la persoana a II-a plural. '
         'Formulele reverențioase se scriu cu majuscule la ambii termeni (Excelența Voastră).',
         [
             T(1, 'Ce pronume folosești?', 'Scrie pronumele sau formula de politețe potrivită.',
               ['Situația', 'Pronumele'], [330, 180], gol(
                   'vorbești cu directoarea școlii', 'vorbești politicos despre bunicul unui coleg',
                   'vorbești familiar cu un vecin în vârstă', 'te adresezi oficial unui ambasador',
                   'vorbești politicos despre o profesoară')),
             X(2, 'Corectează', [
                 'a) Dumneavoastră este obosit? → ______________________________________',
                 'b) Bine ați venit, excelența voastră! → ______________________________________',
                 'c) Domnia-voastră aveți dreptate. → ______________________________________',
                 'd) Dumneata vă rog să așteptați. → ______________________________________']),
         ],
         [
             T(3, 'Cazul pronumelui de politețe', 'Scrie cazul pronumelui.',
               ['Enunțul', 'Cazul'], [360, 150], gol(
                   'Dumneavoastră ați sunat?', 'V-am adus dumneavoastră scrisoarea.', 'Cartea dumitale e pe masă.',
                   'Mă gândesc la dumnealui.', 'Vă salut pe dumneavoastră, doamnă!', 'Spune-mi, dumneata, ce s-a întâmplat!')),
             L(4, 'Dialogul', 'Scrie un dialog de 5-6 replici între un elev și directorul școlii, cu pronume de politețe potrivite. Subliniază-le.', 3),
         ]),

    fisa(13, 'pp. 140-141',
         'Reper (manual, p. 140): Pronumele are aceleași funcții ca substantivul: subiect și nume predicativ '
         '(nominativ), atribut pronominal prepozițional (acuzativ) și genitival (genitiv), complement direct și '
         'prepozițional, circumstanțiale (acuzativ), complement indirect (dativ). Poate fi centru sau adjunct.',
         [
             T(1, 'Funcția pronumelui', 'Scrie funcția sintactică și cazul.',
               ['Enunțul', 'Pronumele', 'Funcția și cazul'], [210, 100, 200], [
                   ['Ea a câștigat cursa.', 'ea', ''],
                   ['Câștigătorul ești tu.', 'tu', ''],
                   ['Casa lor e la țară.', 'lor', ''],
                   ['Vorbim despre voi.', 'despre voi', ''],
                   ['Le-am scris lor.', 'lor', ''],
                   ['Plec la ei.', 'la ei', ''],
                   ['Cartea de la el e nouă.', 'de la el', ''],
                   ['Te aștept pe tine.', 'pe tine', '']]),
             X(2, 'Construiește', [
                 'Scrie câte o propoziție în care pronumele „dânsa” (sau „dânsei”) să fie:',
                 'a) subiect: ______________________________    b) complement direct: ______________________________',
                 'c) complement indirect: ______________________    d) atribut genitival: ______________________']),
         ],
         [
             T(3, 'Centru sau adjunct?', 'Scrie dacă pronumele e centru sau adjunct și în ce grup.',
               ['Enunțul', 'Centru / adjunct', 'Grupul'], [230, 110, 170], gol3(
                   'Voi din spate, liniște!', 'Scrisoarea de la ea a sosit.', 'Îl ajut pe el.', 'Tu cu ochelari, vino!')),
             L(4, 'Despre prietenul meu', 'Scrie 4-5 propoziții despre un prieten, cu pronumele „el”, „lui”, „îl” sau „-l” în cel puțin trei funcții diferite; notează funcția deasupra.', 3),
         ]),

    fisa(14, 'p. 141',
         'Reper (manual, p. 141): Formele neaccentuate (cliticele) dublează complementul direct și pe cel indirect: '
         'anticipare (L-am întrebat pe dânsul.; I-am dat Anei o carte.) sau reluare (Pe Ana am văzut-o.). Când apar '
         'două clitice, cel de dativ stă înaintea celui de acuzativ (Mi l-a dat.).',
         [
             T(1, 'Anticipare sau reluare?', 'Scrie A sau R și ce complement este dublat (CD sau CI).',
               ['Enunțul', 'A / R', 'Complementul dublat'], [260, 70, 180], gol3(
                   'L-am chemat pe Radu.', 'Pe Radu l-am chemat.', 'I-am scris Mariei.', 'Mariei i-am scris.',
                   'O văd pe bunica.', 'Bunicii i-am adus flori.')),
             T(2, 'Două clitice', 'Înlocuiește complementele cu două clitice.',
               ['Enunțul', 'Cu două clitice'], [260, 250], gol(
                   'Îi dau fratelui meu mingea.', 'Le arăt colegilor pozele.', 'Îmi aduce bunica plăcinta.',
                   'Îți împrumut cartea.')),
         ],
         [
             T(3, 'Corectează', 'Scrie forma corectă.',
               ['Greșit', 'Corect'], [250, 260], gol(
                   'Iam spus adevărul.', 'Ia dat o carte.', 'Neam întâlnit ieri.', 'Lam văzut pe Andrei.',
                   'Să-ți-l dau?')),
             L(4, 'Mesaj cu clitice', 'Scrie un mesaj de 4 propoziții către un prieten, cu cel puțin două clitice pentru complemente directe și două pentru complemente indirecte. Subliniază-le.', 3),
         ]),

    fisa(15, 'pp. 142-143',
         'Reper (manual, pp. 142-143): Pronumele reflexiv arată că acțiunea se răsfrânge asupra subiectului (aceeași '
         'persoană și același număr). Forme proprii are doar la persoana a III-a: acuzativ (pe) sine, se, s-; dativ '
         'sieși, sie, își, și-. La persoanele I și a II-a împrumută formele pronumelui personal (Mă întreb.).',
         [
             X(1, 'Completează', [
                 'Completează cu se, s-, își, și-, sine, sieși.',
                 'a) Pisica ______ spală cu lăbuța.    b) Ana ______ caută cheile.',
                 'c) Copiii ___-au certat, apoi ___-au dat mâna.    d) El vorbește numai despre ______.',
                 'e) ______ spune ______ în gând că va reuși.']),
             T(2, 'Reflexiv sau personal?', 'Scrie R (reflexiv) sau P (personal).',
               ['Enunțul', 'R / P'], [440, 70], gol(
                   'Mă îmbrac repede.', 'Mă îmbracă mama.', 'Îți faci tema?', 'Îți fac un ceai.', 'Ne vedem mâine.',
                   'Ne vede profesorul.')),
         ],
         [
             T(3, 'Analiză', 'Completează.',
               ['Pronumele', 'Persoana', 'Cazul', 'Forma'], [160, 90, 100, 160], gol4(
                   'se (Se piaptănă.)', 'își (Își face bagajul.)', 'sine (Crede în sine.)', 'sieși (Își spune sieși.)')),
             X(4, 'Corectează', [
                 'a) Sa îmbrăcat gros. → __________________    b) Șia pus căciula. → __________________',
                 'c) Sau jucat în zăpadă. → __________________    d) Iși face planuri. → __________________']),
             L(5, 'Dimineața mea', 'Scrie 4-5 propoziții despre cum te pregătești dimineața, cu verbe reflexive. Subliniază pronumele reflexive.', 2),
         ]),

    fisa(16, 'pp. 144-145',
         'Reper (manual, pp. 144-145): Numeralul cardinal exprimă un număr (de la douăzeci în sus se leagă prin „de”: '
         'douăzeci de copii); cel ordinal arată ordinea (al doilea, a doua, primul). Valori: adjectivală (trei cai), '
         'pronominală (Două dintre cărți...), substantivală (tramvaiul 34; Doi plus trei fac cinci.).',
         [
             T(1, 'Felul și valoarea', 'Completează.',
               ['Enunțul', 'Numeralul', 'Felul', 'Valoarea'], [210, 100, 100, 100], [
                   ['Am citit trei fabule.', 'trei', '', ''],
                   ['Două dintre ele mi-au plăcut.', 'două', '', ''],
                   ['A treia m-a plictisit.', 'a treia', '', ''],
                   ['Locuiesc la etajul 4.', '4', '', ''],
                   ['Cinci plus cinci fac zece.', 'cinci', '', ''],
                   ['Al doilea capitol e scurt.', 'al doilea', '', '']]),
             T(2, 'Corectează', 'Scrie forma corectă.',
               ['Greșit', 'Corect'], [250, 260], gol(
                   'douăzeci elevi', 'pagina doișpe', 'o sută lei', 'al doilea ediție', 'primul zi')),
         ],
         [
             T(3, 'Scrie în litere', 'Scrie numeralele în litere.',
               ['În cifre', 'În litere'], [200, 310], gol(
                   '21 de fete', '12 caiete', 'al 2-lea loc', 'anul 1848', 'a 7-a clasă')),
             L(4, 'Anunțul concursului', 'Scrie un anunț de 4-5 rânduri pentru un concurs al clasei, cu numerale cu toate cele trei valori; notează valoarea deasupra fiecăruia.', 3),
         ]),

    fisa(17, 'pp. 146-147',
         'Reper (manual, p. 147): Pasajele descriptive încetinesc acțiunea, dar au un rol: la început construiesc '
         'cadrul și prezintă personajele, în interior dau informații necesare, la sfârșit pun în evidență '
         'deznodământul. În narațiune – perfectul compus sau simplu; în descriere – imperfectul sau prezentul.',
         [
             X(1, 'Cutia din pod', ['Citește textul (scris pentru fișă).', CUTIA]),
             T(2, 'Unde pui descrierea?', 'Alege locul fiecărei descrieri și notează detaliile pe care le-ai adăuga.',
               ['Ce descriu', 'După ce propoziție', 'Ce detalii aș adăuga'], [100, 150, 260], gol3(
                   'podul', 'cutia', 'bunica', 'scrisorile'), row_h=34),
         ],
         [
             T(3, 'Narațiune sau descriere?', 'Scrie N sau D și timpul verbului.',
               ['Enunțul', 'N / D', 'Timpul'], [330, 60, 120], gol3(
                   'Băiatul a urcat scara.', 'Podul era întunecat și mirosea a lemn vechi.',
                   'Cutia avea colțuri de alamă și un lacăt ruginit.', 'Bunica a scos cheia din buzunarul șorțului.',
                   'Scrisorile erau îngălbenite, legate cu o panglică.')),
             L(4, 'Rescrie', 'Rescrie textul de la ex. 1 cu două pasaje descriptive (unul la început și unul la sfârșit), cu verbe la imperfect.', 3),
         ]),

    fisa(18, 'p. 147',
         'Reper (manual, p. 147): Continui o povestire la persoana a III-a păstrând situația inițială și personajele, '
         'alegi urmările și un deznodământ, stabilești locul a două descrieri (cu enumerații, epitete, comparații). '
         'Narațiunea rămâne la perfectul simplu, descrierea la imperfect.',
         [
             T(1, 'Planul povestirii', 'Completează înainte de a scrie.',
               ['', 'Notițele mele'], [170, 340], gol(
                   'o urmare posibilă', 'altă urmare posibilă', 'urmarea aleasă', 'deznodământul',
                   'descrierea 1: ce și unde', 'descrierea 2: ce și unde'), row_h=26),
             T(2, 'Perfect simplu și imperfect', 'Scrie verbul la persoana a III-a singular (sau plural, unde se cere).',
               ['Verbul', 'Forma'], [250, 260], gol(
                   'a se trezi (narațiune)', 'a alerga (narațiune)', 'a privi (narațiune)', 'a fi (descriere)',
                   'a străluci (descriere, plural)')),
         ],
         [
             X(3, 'Figuri de stil pentru descriere', [
                 'a) Antenele lui Andrei erau lungi ca __________________ (comparație).',
                 'b) Bucătăria era __________, __________ și __________ (enumerație de adjective).',
                 'c) Pisica __________ (epitet) sări pe fereastră.']),
             L(4, 'Trei titluri', 'Propune trei titluri pentru povestirea ta.', 1),
             L(5, 'Observația colegului', 'Colegul tău scrie aici 3-4 rânduri despre povestirea ta.', 2),
         ]),

    fisa(19, 'pp. 148-149',
         'Reper (manual, p. 149): Textul explicativ poate fi cauzal (răspunde la „de ce?”; explicațiile sunt introduse '
         'prin fiindcă, pentru că, de aceea, așadar, ca urmare, adică, mai exact) sau procedural (răspunde la „cum?”: '
         'rețete, instrucțiuni, prospecte, cu pași, marcatori, verbe la indicativ prezent sau la imperativ).',
         [
             T(1, 'Cauzal sau procedural?', 'Scrie C (cauzal) sau P (procedural).',
               ['Textul', 'C / P'], [440, 70], gol(
                   'rețeta de clătite', 'de ce cad frunzele toamna', 'instrucțiunile unui joc',
                   'de ce vedem fulgerul înainte să auzim tunetul', 'prospectul unui medicament')),
             X(2, 'De ce clipim?', ['Citește textul (scris pentru fișă).'] + CLIPIM),
             T(3, 'Cuvintele explicației', 'Ce rol are fiecare cuvânt în textul de la ex. 2?',
               ['Cuvântul', 'Rolul (cauză, consecință, concluzie, explicație suplimentară)'], [150, 360], gol(
                   'fiindcă', 'adică', 'de aceea', 'așadar')),
         ],
         [
             T(4, 'Pașii', 'Cum plantezi o boabă de fasole? Numerotează pașii (1-5).',
               ['Pasul', 'Nr.'], [440, 70], gol(
                   'Uzi pământul.', 'Pui ghiveciul la lumină.', 'Umpli ghiveciul cu pământ.', 'Faci o gropiță cu degetul.',
                   'Pui boabele și le acoperi.')),
             L(5, 'Întrebările tale', 'Scrie o întrebare care începe cu „De ce…?” și una cu „Cum…?”, la care ai vrea să răspunzi printr-un text explicativ.', 1),
         ]),

    fisa(20, 'p. 149',
         'Reper (manual, p. 149): Pentru „De ce…?” enumeri cauzele și consecințele în ordine logică; pentru „Cum…?” '
         'dai materialele și pașii în ordine (mai întâi, apoi, în cele din urmă). Vocabular precis, marcatori, desene '
         'sau tabele, verbe la indicativ prezent sau la imperativ.',
         [
             T(1, 'Planul textului meu', 'Completează înainte de a scrie.',
               ['', 'Notițele mele'], [170, 340], gol(
                   'întrebarea', 'tipul (cauzal sau procedural)', 'de unde m-am informat',
                   'cauzele sau materialele', 'consecințele sau pașii', 'concluzia'), row_h=26),
             X(2, 'Cuvinte de legătură', [
                 'Completează cu: apoi, în cele din urmă, mai întâi, după aceea.',
                 'Cum îți pregătești ghiozdanul: __________ verifici orarul. __________ pui manualele și caietele în ordinea',
                 'orelor. __________ adaugi penarul. __________ închizi ghiozdanul și îl lași lângă ușă.']),
         ],
         [
             T(3, 'La imperativ', 'Rescrie instrucțiunile la imperativ, persoana a II-a singular.',
               ['Instrucțiunea', 'La imperativ'], [250, 260], gol(
                   'Se amestecă făina cu laptele.', 'Se taie merele felii.', 'Se coace prăjitura 20 de minute.')),
             L(4, 'Desenul explicației', 'Schițează aici un desen sau un tabel care să însoțească textul tău explicativ.', 3),
         ]),

    fisa(21, 'pp. 150-151',
         'Recapitulare (manual, pp. 122-135): textul narativ în versuri, fabula și morala, enumerația, personajele-măști, '
         'versificația, proverbele, dicția, inteligența emoțională.',
         [
             X(1, 'Furnica și porumbelul', FURNICA),
             T(2, 'Fabula', 'Completează.',
               ['', 'Din text'], [150, 360], gol(
                   'naratorul', 'personajele', 'timpul și spațiul', 'momentele acțiunii', 'morala'), row_h=28),
         ],
         [
             T(3, 'Figurile de stil', 'Scrie un exemplu și ce sugerează.',
               ['Figura', 'Exemplul', 'Ce sugerează'], [130, 190, 190], gol3('enumerație', 'comparație', 'epitet'),
               row_h=28),
             T(4, 'Versificația', 'Completează.',
               ['', 'Răspunsul'], [200, 310], gol(
                   'tipul rimei', 'două cuvinte care rimează', 'măsura versurilor 3 și 4')),
             T(5, 'Proverb și emoții', 'Completează.',
               ['', 'Răspunsul'], [200, 310], gol(
                   'un proverb potrivit moralei', 'ce simte furnica în apă', 'ce simte furnica la final',
                   'cine dovedește empatie')),
         ]),

    fisa(22, 'pp. 150-151',
         'Recapitulare (manual, pp. 136-149): pronumele personal și de politețe, cazurile și funcțiile lor, cliticele, '
         'pronumele reflexiv, numeralul și valorile lui, descrierea în narațiune, textul explicativ.',
         [
             X(1, 'Enunțuri despre fabulă', [
                 '(1) Porumbelul i-a aruncat furnicii o frunză.    (2) Furnica l-a salvat pe el de vânător.',
                 '(3) Dumneavoastră ați citit fabula?    (4) Vânătorul se ascunsese sub fag.',
                 '(5) Primul ajutor a venit de la porumbel, al doilea, de la furnică.',
                 '(6) Fabula are paisprezece versuri.    (7) Trei plus trei fac șase.']),
             T(2, 'Pronumele', 'Completează.',
               ['Pronumele (enunțul)', 'Felul', 'Cazul', 'Funcția'], [150, 110, 80, 170], gol4(
                   'i- (1)', 'l- (2)', 'el (2)', 'Dumneavoastră (3)', 'se (4)')),
         ],
         [
             T(3, 'Numeralele', 'Completează.',
               ['Numeralul (enunțul)', 'Felul', 'Valoarea'], [180, 150, 180], gol3(
                   'primul (5)', 'al doilea (5)', 'paisprezece (6)', 'trei (7)')),
             X(4, 'Două clitice', [
                 'a) Îi dau porumbelului firimituri. → __________________    b) Le arăt colegilor fabula. → __________________']),
             L(5, 'Un text explicativ scurt', 'Scrie în 4-5 rânduri un text explicativ cauzal: „De ce e bine să ne ajutăm între noi?”, cu fiindcă, de aceea, așadar.', 3),
         ]),
]
