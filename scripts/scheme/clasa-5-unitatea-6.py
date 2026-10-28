# Scheme-notițe, clasa a V-a, Unitatea VI „Din carte spre departe”. Conținutul
# vine din rubricile Repere ale Manualului Art 5, pp. 171-190; exemplele noi
# sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-6.py

SUB = 'Clasa a V-a · Unitatea VI, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'
GOL = '\u00a0'  # celulă goală, pentru ce completează elevii

SCHEME = [
    # ---------------- Lecția 1 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-1',
        'titlu': 'Jurnalul Monicăi: fișa de date',
        'sub': SUB.format(n=1, pp='pp. 168-170'),
        'sursa': 'Sursa: Manual Art 5, pp. 168-170, jurnalul Monicăi (caseta de la p. 168, explicațiile Monicăi de la pp. 169-170, nota 1 de la p. 170). Manualul nu dă anul excursiei.',
        'sect': [
            ('1. CARTEA DE IDENTITATE A JURNALULUI', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Răspunsul din manual'], 'lat': [0.25, 0.75],
                 'r': [['**Cine scrie?**', 'Monica, elevă în clasa a V-a la o școală gimnazială din București'],
                       ['**Cui i se adresează?**', 'Jurnalului ei: *Jurnalule* (p. 168), *Dragă jurnalule* (p. 169), *Drăguțul meu jurnal* (p. 170)'],
                       ['**Când?**', 'pe parcursul celor trei zile ale excursiei tematice *Din carte spre departe*'],
                       ['**Unde?**', 'în excursie, în trei orașe: Alba Iulia, Brașov, Târgoviște'],
                       ['**De ce?**', 'a scris la solicitarea profesoarei sale']]},
            ]),
            ('2. TREI ZILE, TREI ORAȘE', [
                {'t': 'tabel', 'cap': ['Ziua', 'Orașul', 'Locurile pomenite în jurnal'], 'lat': [0.2, 0.17, 0.63],
                 'r': [['**vineri, 6 mai**', 'Alba Iulia', 'Via Principalis, Palatul Principilor, catedrala, Poarta a treia, Biblioteca Batthyaneum, librăria'],
                       ['**sâmbătă, 7 mai**', 'Brașov', 'pensiunea, Șcheii Brașovului, Muzeul „Prima Școală Românească”'],
                       ['**duminică, 8 mai**', 'Târgoviște', 'Curtea Domnească, Turnul Chindiei, Muzeul Tiparului și al Cărții Vechi Românești']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Fiecare zi are o intrare nouă, cu data în față. Textul dă ziua și luna, nu și anul.']},
            ]),
            ('3. CUVINTE LĂMURITE ÎN TEXT', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Ce spune manualul', 'Unde'], 'lat': [0.2, 0.64, 0.16],
                 'r': [['**incunabulele**', 'exemplare din cărțile tipărite în primii ani ai introducerii tiparului, adică înainte de anul 1500', 'p. 169 (Monica)'],
                       ['**slavona**', 'o limbă veche în care se foloseau caracterele chirilice în care s-a scris și la noi', 'p. 170 (Monica)'],
                       ['**Neagoe Basarab**', 'a fost domnitorul Țării Românești între 1512 și 1521', 'p. 170 (nota 1)']]},
            ]),
        ],
    },
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
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-3',
        'titlu': 'Semnificațiile textului: jocul X și O și pagina de jurnal',
        'sub': SUB.format(n=3, pp='pp. 172-173'),
        'sursa': 'Sursa: Manual Art 5, p. 172 (Interpretare, ex. 1-2, regula jocului și cele nouă titluri) și p. 173 (ex. 8, Portofoliu). Tabelul de la secțiunea 3 rămâne gol pentru elevi.',
        'sect': [
            ('1. JOCUL X ȘI O: GRILA DIN CAIET', [
                {'t': 'text', 'p': ['Desenez pe pagina întreagă a caietului un tabel cu nouă căsuțe, trei rânduri și trei coloane, cu aceste titluri:']},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'FAPTE INTERESANTE', 'col': 't', 'st': 15},
                    {'titlu': 'INFORMAȚII', 'col': 't', 'st': 15},
                    {'titlu': 'OPINII', 'col': 't', 'st': 15},
                    {'titlu': 'TEMA', 'col': 'm', 'st': 15},
                    {'titlu': 'VOCABULAR', 'col': 'm', 'st': 15},
                    {'titlu': 'DETALII', 'col': 'm', 'st': 15},
                    {'titlu': 'ÎNTREBĂRI', 'col': 'a', 'st': 15},
                    {'titlu': 'IMAGINI', 'col': 'a', 'st': 15},
                    {'titlu': 'SUMAR', 'col': 'a', 'st': 15, 'p': ['*cine? ce? când? unde? de ce?*']},
                ]},
                {'t': 'nota', 'titlu': 'Regula jocului (manual, p. 172):', 'p': ['Fiecare dintre voi marchează pe rând, în tabelul din caiet, câte o căsuță, răspunzând la cerința asociată acesteia, notată în tabelul de mai jos. Câștigă cel care reușește primul să marcheze trei căsuțe adiacente pe orizontală, pe verticală sau pe diagonală.']},
            ]),
            ('2. CUM SCRIU O PAGINĂ DE JURNAL', [
                {'t': 'nota', 'titlu': 'Portofoliu (manual, p. 173):', 'p': ['Redactează o pagină de jurnal de cel mult 100 de cuvinte, în care să prezinți o experiență trăită de tine astăzi. Ai în vedere că atunci când scrii un jurnal este important să notezi data, să utilizezi persoana I și să fii sincer/sinceră.']},
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'data', 'col': 't', 'p': ['o notez la început']},
                    {'titlu': 'persoana I', 'col': 'm', 'p': ['scriu despre mine']},
                    {'titlu': 'sinceritatea', 'col': 'a', 'p': ['spun ce simt cu adevărat']},
                    {'titlu': 'lungimea', 'col': 'n', 'p': ['cel mult 100 de cuvinte']},
                ]},
            ]),
            ('3. REALIZAREA-RECORD', [
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Exercițiul 8: completez în caiet tabelul. Pe prima coloană scriu numele personalităților despre care Monica a aflat lucruri noi, pe a doua ce au înfăptuit și poate fi considerat un record.']},
                {'t': 'tabel', 'cap': ['Numele personalității', 'Realizarea-record'], 'lat': [0.4, 0.6], 's': 30,
                 'r': [[GOL, GOL], [GOL, GOL], [GOL, GOL], [GOL, GOL]]},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-4',
        'titlu': 'Scrisoarea III de Mihai Eminescu: fișa textului',
        'sub': SUB.format(n=4, pp='pp. 174-175'),
        'sursa': 'Sursa: Manual Art 5, p. 174 (textul de prezentare, notele 2, 3 și 6) și p. 175 (Discutarea textului, ex. 3, 4 și 5). Manualul dă pentru bătălia de la Rovine două date; în schemă notăm doar anul. Tabelul de la secțiunea 4 rămâne gol pentru elevi.',
        'sect': [
            ('1. FIȘA TEXTULUI', [
                {'t': 'tabel', 'cap': ['Rubrica', 'Ce notez'], 'lat': [0.25, 0.75],
                 'r': [['**Autorul**', 'Mihai Eminescu (1850-1889), „poetul nostru național”'],
                       ['**Opera**', 'poemul *Scrisoarea III*'],
                       ['**Fragmentul**', 'întâlnirea dintre Baiazid și Mircea cel Bătrân, înaintea luptei de la Rovine'],
                       ['**Personajele**', 'Mircea cel Bătrân, Baiazid și solul'],
                       ['**Baiazid**', 'sultan al Imperiului Otoman în perioada 1389-1402'],
                       ['**Rovine**', 'lupta s-a petrecut în 1394 sau în 1395, după cum o datează istoricii'],
                       ['**Mircea la Eminescu**', '„un domnitor exemplar, al cărui singur scop este să-și slujească țara”']]},
            ]),
            ('2. CUVINTE DIN NOTELE DE SUBSOL (p. 174)', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Sensul din notă'], 'lat': [0.4, 0.6],
                 'r': [['**bănat** (s. n., reg.)', 'supărare'],
                       ['**Aliotman** (s. n., rar)', 'turcime'],
                       ['**pristol** (s. n.)', 'altar']]},
            ]),
            ('3. TEXT LITERAR ȘI INFORMAȚIE ISTORICĂ', [
                {'t': 'nota', 'titlu': 'Exercițiul 3 (manual, p. 175):', 'p': ['Autorii textelor literare, chiar atunci când se inspiră din evenimente reale, precum cele istorice, nu sunt interesați să redea exact informația istorică, ci să transmită anumite idei, atitudini, sentimente.']},
            ]),
            ('4. EXERCIȚIUL 4: IDEILE TEXTULUI', [
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['În perechi: împart textul în patru fragmente logice, aleg cuvântul-cheie al fiecăruia, formulez ideile principale, apoi ideile secundare.']},
                {'t': 'tabel', 'cap': ['Fragmentul logic', 'Cuvântul-cheie', 'Ideea principală', 'Ideile secundare'], 'lat': [0.16, 0.2, 0.32, 0.32], 'al': ['c', 'l', 'l', 'l'], 's': 26,
                 'r': [['**1**', GOL, GOL, GOL], ['**2**', GOL, GOL, GOL], ['**3**', GOL, GOL, GOL], ['**4**', GOL, GOL, GOL]]},
            ]),
        ],
    },
    # ---------------- Lecția 5 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-5',
        'titlu': 'De la manuscris la cartea electronică: Repere și drumul cărții',
        'sub': SUB.format(n=5, pp='pp. 176-177'),
        'sursa': 'Sursa: Manual Art 5, p. 177, rubrica Repere; p. 176, articolul lui Iulian Comănescu (anii 1450 și 1560); notele de subsol de la pp. 176-177. Fiecare an de pe axă poartă sursa lui.',
        'sect': [
            ('1. REPERE (p. 177)', [
                {'t': 'nota', 'p': ['În Evul Mediu, scrierea cărților – mai multe foi de pergament pliate și cusute împreună – cădea în sarcina călugărilor copiști, care editau mai multe volume destinate nobilimii, mănăstirilor și universităților. Era însă o muncă dificilă, iar copierea unui manuscris dura mult timp. Abia în 1440 și-a făcut apariția tiparul în sens modern: Johannes Gutenberg a inventat presa tipografică, literele mobile dintr-un aliaj de plumb și o cerneală pe bază de ulei. Prima carte tipărită cu ajutorul acestei invenții revoluționare a fost Biblia în limba latină (1455).']},
                {'t': 'nota', 'p': ['La începutul mileniului al III-lea, odată cu dezvoltarea tehnologiei, au apărut suporturile electronice. Cărțile arată, în mare, la fel cu cele tipărite: au coperte, pagină de titlu, cuprins, capitole. Folosind suportul electronic oferit de dischete, apoi de CD-uri, de e-bookuri și de tablete multimedia, spațiul de stocare a informației s-a micșorat enorm. Un alt avantaj este posibilitatea consultării pe internet a multor texte, imagini, hărți etc.']},
            ]),
            ('2. DRUMUL CĂRȚII', [
                {'t': 'tabel', 'cap': ['Când', 'Ce se întâmplă', 'De unde știm'], 'lat': [0.2, 0.55, 0.25],
                 'r': [['**Evul Mediu**', 'călugării copiști scriu cărțile de mână, pe foi de pergament', 'Repere, p. 177'],
                       ['**1440**', 'apare tiparul în sens modern: Gutenberg inventează presa tipografică și literele mobile', 'Repere, p. 177'],
                       ['**pe la 1450**', 'Gutenberg tipărește vreo 150-180 de exemplare dintr-o Biblie', 'articolul, p. 176'],
                       ['**1455**', 'prima carte tipărită cu presa lui Gutenberg: Biblia în limba latină', 'Repere, p. 177'],
                       ['**prin 1560**', 'diaconul Coresi tipărește la Brașov Tetraevanghelul, în română', 'articolul, p. 176'],
                       ['**începutul mileniului al III-lea**', 'apar suporturile electronice: dischete, CD-uri, e-bookuri, tablete', 'Repere, p. 177']]},
                {'t': 'atentie', 'titlu': 'Manualul dă date puțin diferite', 'p': ['Pentru Gutenberg găsim 1440 (tiparul în sens modern, în Repere), pe la 1450 (Biblia tipărită, în articol) și 1455 (Biblia în limba latină, în Repere). Le scriu pe toate, fiecare cu sursa ei.']},
            ]),
            ('3. TERMENI DIN SUBSOL', [
                {'t': 'tabel', 'cap': ['Termenul', 'Sensul din notă', 'Unde'], 'lat': [0.22, 0.6, 0.18],
                 'r': [['**tetraevanghel**', 'carte care cuprinde cele patru Evanghelii', 'p. 176'],
                       ['**e-book**', 'carte electronică în care sunt cuprinse textul și/sau imaginile unei cărți tipărite', 'p. 177'],
                       ['**link**', 'adresă pe internet', 'p. 176']]},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-6',
        'titlu': 'Formele cărții. Cum mă documentez online',
        'sub': SUB.format(n=6, pp='p. 177'),
        'sursa': 'Sursa: Manual Art 5, p. 177, articolul lui Iulian Comănescu (secțiunile 1 și 2). Secțiunea 3, cadrul „Cum mă documentez online”, este creată pentru aceste notițe și nu vine din manual.',
        'sect': [
            ('1. DE LA PAPIRUS LA ECRAN', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['papirus → pergament → hârtie → tiparul lui Gutenberg → culegerea automată → tiparul pe calculator → ecranul']},
                {'t': 'tabel', 'cap': ['Forma cărții', 'Ce spune articolul'], 'lat': [0.34, 0.66],
                 'r': [['**suluri de papirus**', 'așa au fost cărțile mai întâi'],
                       ['**pergamente**', 'din piele de vițel; au urmat după ce Imperiul Bizantin a pierdut Egiptul, de unde veneau papirusurile'],
                       ['**hârtie**', 'cărțile s-au mutat pe hârtie prin secolul al XI-lea'],
                       ['**tiparul lui Gutenberg**', 'apoi au urmat Gutenberg și o mulțime de alte schimbări'],
                       ['**culegerea automată a textului**', 'o altă schimbare de după Gutenberg'],
                       ['**tiparul pe calculator**', 'o altă schimbare de după Gutenberg'],
                       ['**ecranul**', 'mai nou, cărțile sunt scrise și citite pe ecranul calculatorului']]},
            ]),
            ('2. CĂRȚILE NU MOR', [
                {'t': 'nota', 'titlu': 'Teza autorului (Iulian Comănescu, p. 177):', 'p': ['Despre cărți: „nu vor muri, fiindcă au murit deja de nenumărate ori și au reînviat”.']},
                {'t': 'nota', 'titlu': 'Încheierea articolului:', 'p': ['„Dar cărțile vor muri doar după ce va muri ultimul cititor.”']},
                {'t': 'nota', 'titlu': 'Un argument din articol:', 'p': ['„Vânzările cresc […] și la cele clasice, de hârtie și carton.”']},
            ]),
            ('3. CUM MĂ DOCUMENTEZ ONLINE (creat pentru aceste notițe)', [
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Cadru creat pentru aceste notițe. Exemplul din coloana din mijloc este articolul din manual.']},
                {'t': 'tabel', 'cap': ['Ce notez', 'Exemplu: articolul din manual', 'Sursa mea'], 'lat': [0.24, 0.46, 0.3], 's': 16,
                 'r': [['**titlul**', '*Tetraevanghel înghesuit într-un post de blog înghesuit într-o rețea*', GOL],
                       ['**autorul**', 'Iulian Comănescu', GOL],
                       ['**adresa**', 'www.comanescu.ro', GOL],
                       ['**data consultării**', 'ziua în care deschid pagina', GOL]]},
            ]),
        ],
    },
    # ---------------- Lecția 7 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-7',
        'titlu': 'Identitate națională. Stema României',
        'sub': SUB.format(n=7, pp='pp. 178-179'),
        'sursa': 'Sursa: Manual Art 5, p. 179, rubrica Repere; p. 178, textul despre stemă (adaptare după edusoft.ro); p. 179, Explorare ex. 4 și Aplicații ex. 3-4. Locurile cu puncte se completează după exercițiul 2 din Explorare; cadrele goale sunt pentru elevi.',
        'sect': [
            ('1. REPERE (p. 179)', [
                {'t': 'nota', 'p': ['Identitatea națională este sentimentul de apartenență a unei persoane la o națiune. Națiunea este o comunitate cu aceeași identitate istorică și culturală, nu neapărat etnică (deși cazul este frecvent), care și-a afirmat voința de a trăi într-un stat independent.']},
                {'t': 'nota', 'p': ['Sentimentul de identitate națională, manifestat prin patriotism, se sprijină pe un ansamblu de valori împărtășite de toți membrii comunității: identificarea și valorizarea unuia sau a mai mulți strămoși fondatori; o istorie comună cu eroi emblematici pentru calitățile pe care comunitatea le apreciază; limba vorbită, fixată de gramatici și dicționare; o serie de monumente care reflectă continuitatea și geniul național; peisajele specifice; folclorul, tradițiile și obiceiurile.']},
            ]),
            ('2. STEMA ROMÂNIEI: ELEMENTELE DE LA CENTRU (p. 178)', [
                {'t': 'tabel', 'cap': ['Elementul', 'Ce știm din text'], 'lat': [0.3, 0.7],
                 'r': [['**vulturul de aur cu cruce**', 'simbolizează dinastia întemeietoare a Basarabilor; întruchipează curajul, hotărârea, zborul spre înălțimi, puterea; încă două sensuri: ………'],
                       ['**scutul albastru**', 'simbolizează: ………'],
                       ['**sceptrul**', 'amintește de Mihai Viteazul'],
                       ['**sabia**', 'îl simbolizează pe Ștefan cel Mare'],
                       ['**coroana de oțel**', 'coroana regală a României, adăugată în 2016, turnată din țeava unui tun otoman capturat în Războiul de Independență din 1877-1878']]},
            ]),
            ('3. STEMA ROMÂNIEI: BLAZONUL CU PROVINCIILE (p. 178)', [
                {'t': 'tabel', 'cap': ['Provincia', 'Simbolul de pe blazon', 'Semnificația'], 'lat': [0.22, 0.4, 0.38],
                 'r': [['**Țara Românească**', 'pe albastru, un vultur cu o cruce ortodoxă în cioc, un soare și o lună de aur', 'provincie cu rol hotărâtor în destinul istoric al României'],
                       ['**Moldova**', 'bour negru cu o stea între coarne, trandafir cu cinci petale, semilună', 'trandafirul: ………; semiluna: ………'],
                       ['**Banatul și Oltenia**', 'pod galben cu două arce de boltă, leu de aur', 'podul peste Dunăre al împăratului roman Traian; leul: forța și măreția'],
                       ['**Transilvania**', 'vultur negru cu gheare de aur, șapte turnuri crenelate', 'turnurile: ………; cele șapte cetăți: Bistrița, Brașov, Cluj, Mediaș, Orăștie, Sibiu, Sighișoara'],
                       ['**Dobrogea** (Teritoriile Mării Negre)', 'doi delfini față în față, cu capul în jos', 'delfinii: ………']]},
            ]),
            ('4. STEMA JUDEȚULUI MEU (Explorare, ex. 4)', [
                {'t': 'tabel', 'cap': ['Desenez stema județului în care locuiesc', 'Notez semnificațiile elementelor'], 'lat': [0.5, 0.5], 's': 90,
                 'r': [[GOL, GOL]]},
            ]),
            ('5. O VALOARE, DOUĂ COMPORTAMENTE (Aplicații, ex. 3-4)', [
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Model din manual: GENEROZITATE → *a-i împrumuta unui coleg niște cărți, a-i ajuta pe membrii familiei la treburi ușoare, a dărui altora din timpul tău*']},
                {'t': 'tabel', 'cap': ['Valoarea aleasă din listă', 'Două comportamente asociate'], 'lat': [0.35, 0.65], 's': 34,
                 'r': [[GOL, GOL], [GOL, GOL], [GOL, GOL], [GOL, GOL], [GOL, GOL]]},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-5/unitatea-6/lectia-8',
        'titlu': 'Proiect de grup: Imagini ale domnitorului, fișa de pornire',
        'sub': SUB.format(n=8, pp='pp. 180-182'),
        'sursa': 'Sursa: Manual Art 5, pp. 180-182 (sarcina de lucru, fragmentele și imaginile, timpul de realizare, pașii, lista de criterii). Pașii sunt rezumați din manual; rubricile goale se completează la oră.',
        'sect': [
            ('1. SARCINA DE LUCRU (p. 180)', [
                {'t': 'nota', 'p': ['Alcătuiți patru grupe. Fiecare grupă va prezenta imaginea unuia dintre domnitorii Ștefan cel Mare, Mircea cel Bătrân, Mihai Viteazul sau Vlad Țepeș, pornind de la fragmentele de mai jos.']},
                {'t': 'tabel', 'cap': ['Domnitorul', 'Textul', 'Imaginea'], 'lat': [0.2, 0.42, 0.38],
                 'r': [['**Ștefan cel Mare**', '*Cântecele lui Ștefan Vodă*, poezie populară culeasă de Vasile Alecsandri (p. 180)', 'portretul din *Tetraevanghelul* de la Humor (1473)'],
                       ['**Mircea cel Bătrân**', '*Mircea cel Mare și solii* de Dimitrie Bolintineanu (pp. 180-181)', 'pictură din biserica Episcopiei de Argeș'],
                       ['**Mihai Viteazul**', '*Românii supt Mihai-Voievod Viteazul* de Nicolae Bălcescu (p. 181)', '*Mihai Viteazul* de Mișu Popp, ulei pe pânză, 1881'],
                       ['**Vlad Țepeș**', '*De la Vlad Țepeș la Dracula Vampirul* de Neagu Djuvara și Radu Oltean (p. 182)', 'tablou din a doua jumătate a secolului al XVI-lea, expus la Muzeul de Istorie a Artei din Viena']]},
                {'t': 'text', 's': 15, 'c': 'n', 'p': ['**Timp de realizare:** o săptămână']},
            ]),
            ('2. CEI ȘASE PAȘI (p. 182)', [
                {'t': 'text', 'p': ['1. Notez în caiet ce m-a reținut în textul grupei: o idee, o trăsătură a personajului, limbajul.',
                                    '2. Alegem produsul, poster sau produs cu editoare grafice, și ne împărțim rolurile: coordonatorul, editorul textului, editorul imaginilor etc.',
                                    '3. Facem planul proiectului.',
                                    '4. Dezvoltăm planul: numele domnitorului, epoca, trăsăturile din text, valorile promovate, cum se reflectă în imagine (trăsături fizice, ținută, elemente cromatice) și informații de la alte discipline.',
                                    '5. Realizăm produsul, cu imagini, desene și scheme.',
                                    '6. Prezentăm proiectul în fața colegilor.']},
            ]),
            ('3. FIȘA GRUPEI', [
                {'t': 'tabel', 'cap': ['Stabilim la oră', 'Notăm aici'], 'lat': [0.4, 0.6], 's': 17,
                 'r': [['**Domnitorul grupei**', GOL],
                       ['**Produsul ales**', GOL],
                       ['**Coordonatorul**', GOL],
                       ['**Editorul textului**', GOL],
                       ['**Editorul imaginilor**', GOL],
                       ['**Data prezentării**', GOL]]},
            ]),
            ('4. CRITERIILE DE AUTOEVALUARE (p. 182)', [
                {'t': 'text', 'p': ['• Prezentarea clară a temei, identificând elemente relevante pentru domnitor',
                                    '• Valorificarea textului, a imaginii asociate acestuia și a informațiilor dobândite la alte discipline',
                                    '• Redactarea unui text coerent',
                                    '• Integrarea de imagini, desene, scheme',
                                    '• Identificarea valorilor promovate în textul dat']},
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
