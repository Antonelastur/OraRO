# Fișe de exerciții, clasa a VIII-a, Unitatea III „Cum descoperim lumea?”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 8, pp. 98-129). Textele
# fără autor (enunțuri, fragmente, orarul, argumentările) sunt create pentru fișe;
# Angela Baciu, Richard Bach și fragmentul din „Micul Prinț” (traducerea din manual)
# sunt doar parafrazați. Fără fișă: L7 (fragmentul din „Lumea Sofiei” nu e în manual),
# L8 (proiectul) și L25 (evaluarea). Rezolvările: notite-profesor/clasa-8/unitatea-3/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-8-unitatea-3.py

SUB = 'Clasa a VIII-a · Unitatea III, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 8, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-8/unitatea-3/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
         'sursa': NOTA.format(pp=pp), 'reper': reper, 'pagini': list(pagini)}
    if titlu:  # titlul lecției e prea lung pentru antet
        f['titlu'] = 'Fișă de exerciții — ' + titlu
    return f


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

FISE = [
    fisa(1, 'pp. 98-100',
         'Reper (manual, pp. 98-100): În textul Angelei Baciu, o naratoare adultă face curățenie pe birou, iar obiectele '
         'prind viață: fiecare are un nume, un caracter și o poveste; Fetița cu codițe vrea să le salveze. Textul are '
         'trăsături epice și lirice.',
         [
             T(1, 'Obiectele-cu-Suflet', 'Scrie ce face sau ce simte fiecare obiect în text.',
               ['Obiectul', 'Ce face sau ce simte'], [190, 320], gol(
                   'Trifoiul-cu-Patru-Foi', 'Foarfecele-Verde-de-Hârtie', 'Lupa-cu-Mâner-de-Lemn', 'Capsatorul-Orbu',
                   'Penarul-Funcționarul', 'Ochi-de-Tigru'), row_h=26),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F, după text.', AF, [440, 70], gol(
                 'Naratoarea se întreabă dacă IA poate face și curățenie.', 'Fetița cu codițe poartă mănuși albastre.',
                 'Limba AFCA se găsește în dicționare.', 'AFCA înseamnă Azi-Fericire-Culoare-Armonie.',
                 'Piatra-Tata a fost adusă din Alanya.', 'Cheia propune ca curățenia să se facă altă dată.')),
         ],
         [
             T(3, 'Epic și liric', 'Scrie câte un exemplu din text pentru fiecare trăsătură.',
               ['Trăsătura', 'Exemplul din text'], [190, 320], gol(
                   'o întâmplare', 'personaje', 'un narator', 'exprimarea emoțiilor', 'imagini poetice'), row_h=26),
             L(4, 'Obiectul meu cu suflet', 'Scrie 5-6 rânduri despre un obiect din camera ta, cu un nume compus, ca în text: '
               'ce face și ce simte.', 2),
         ], titlu='În Țara-Obiectelor-cu-Suflet'),

    fisa(2, 'pp. 101-102',
         'Reper (manual, p. 102): Ficțiunea literară e o lume inventată, construită prin limbaj, mai apropiată sau mai '
         'îndepărtată de realitate. Cititorul face un pact: acceptă lumea inventată. Alegerea cuvintelor, ortografia, '
         'așezarea în pagină construiesc lumea ficțională.',
         [
             T(1, 'Real sau inventat?', 'Scrie R (se poate verifica în realitate) sau I (inventat).',
               ['Elementul din text', 'R / I'], [440, 70], gol(
                   'Salonic este un oraș din Grecia.', 'Un trifoi vrea să aibă cinci foi.', 'Ziua iei se sărbătorește pe 24 iunie.',
                   'Obiectele vorbesc limba AFCA.', 'Stelele Michelin se acordă restaurantelor.', 'Tata construiește Muntele Copilăriei.')),
             T(2, 'Inventarul țării', 'Scrie obiecte din text pentru fiecare categorie.',
               ['Categoria', 'Obiecte din text'], [150, 360], gol(
                   'papetărie', 'amintiri și suveniruri', 'mâncare și băuturi', 'decor și sărbători'), row_h=30),
         ],
         [
             T(3, 'Binomul fantastic', 'Imaginează pe scurt o situație care leagă cele două cuvinte.',
               ['Binomul', 'Situația mea'], [130, 380], gol('umbrelă + pian', 'nor + ghiozdan', 'pisică + telescop'), row_h=40),
             L(4, 'Portretul naratoarei', 'Scrie 4-5 rânduri despre naratoare: fire, preferințe, calități, cu dovezi din text.', 2),
         ], titlu='Lumea ficțională'),

    fisa(3, 'pp. 103-104',
         'Reper (manual, p. 103): Într-un text se combină structuri narative (întâmplări), descriptive (cum arată), '
         'dialogate (replici), explicative (cum se explică?) și argumentative (de ce?). Ele apar și în texte nonliterare: '
         'reportaj, pliant, instrucțiuni, discurs, mesaje.',
         [
             T(1, 'Ce structură?', 'Scrie: narativă, descriptivă, dialogată, explicativă sau argumentativă.',
               ['Fragmentul (scris pentru fișă)', 'Structura'], [380, 130], gol(
                   'Fetița și-a legat șorțul și s-a apucat de curățenie.', 'Avea codițe împletite, pistrui și ochi mari, mirați.',
                   '— Unde sunt? — În țara unde lucrurile au suflet.', 'AFCA vine de la patru cuvinte: Azi, Fericire, Culoare, Armonie.',
                   'Lumea e sucită, pentru că mașinile fac ce făceau oamenii.'), row_h=26),
             T(2, 'În texte nonliterare', 'Scrie structura dominantă.',
               ['Textul', 'Structura dominantă'], [300, 210], gol(
                   'un reportaj despre un festival', 'un pliant turistic', 'instrucțiunile unui aparat',
                   'un discurs într-o dezbatere', 'un schimb de mesaje')),
         ],
         [
             T(3, 'Momentele subiectului', 'Scrie ce se întâmplă în fiecare moment al poveștii.',
               ['Momentul', 'Ce se întâmplă'], [150, 360], gol(
                   'expozițiunea', 'intriga', 'desfășurarea', 'punctul culminant', 'deznodământul'), row_h=26),
             L(4, 'Continuarea', 'Continuă povestea în 5-6 rânduri: unde pune fetița stiloul? Include o secvență dialogată și '
               'una descriptivă.', 2),
         ], titlu='Combinarea structurilor textuale'),

    fisa(4, 'p. 105',
         'Reper (manual, p. 105): Textul poate fi citit ca o comparație între lumea mașinilor și lumea imaginației, ca o '
         'invitație de a privi altfel lucrurile mărunte sau ca o poveste despre „acasă”, locul unde e inima ta.',
         [
             T(1, 'Regulile țării', 'Scrie ce spune regula despre țară și dacă ai vrea-o în lumea ta.',
               ['Regula (după text)', 'Ce spune despre țară', 'În lumea mea?'], [170, 230, 110], gol3(
                   'Fiecare lucru are un rost.', 'Fiecare își cunoaște locul.', 'Nimeni nu îl deranjează pe altul.'), row_h=36),
             T(2, 'Ce pot sugera', 'Scrie o semnificație posibilă.',
               ['Elementul', 'Ce poate sugera'], [190, 320], gol(
                   'Muntele Copilăriei', 'ușa deschisă spre casele copiilor', 'limba AFCA', 'cele două inimi',
                   'stiloul care nu are loc'), row_h=26),
         ],
         [
             T(3, 'Cine e Fetița cu codițe?', 'Scrie un argument pentru și unul împotriva fiecărei ipoteze.',
               ['Ipoteza', 'Pentru', 'Împotrivă'], [170, 170, 170], gol3(
                   'naratoarea, copil', 'fiica naratoarei', 'un personaj inventat', 'orice cititor'), row_h=34),
             L(4, 'Acasă', 'Scrie 5-6 rânduri: ce înseamnă „acasă” pentru tine? Ce obiect ți-l amintește?', 2),
         ], titlu='Semnificațiile textului'),

    fisa(5, 'p. 106',
         'Reper (manual, p. 106): Textele pot fi continue (propoziții și paragrafe), discontinue (liste, tabele, hărți, '
         'diagrame, orare) sau mixte. Textul discontinuu nu se citește liniar: trebuie înțeles felul în care e organizat.',
         [
             X(1, 'Mersul trenurilor', [
                 'Citește tabelul (creat pentru fișă): trenurile de azi, de la Iași spre București.',
                 'IR 1 · pleacă 07:10 · ajunge 13:25 · linia 3        R 2 · pleacă 09:40 · ajunge 16:50 · linia 1',
                 'IR 3 · pleacă 14:05 · ajunge 20:15 · linia 2']),
             T(2, 'Citesc tabelul', 'Răspunde.',
               ['Întrebarea', 'Răspunsul'], [340, 170], gol(
                   'La ce oră pleacă trenul R 2?', 'Care tren ajunge cel mai devreme?', 'De pe ce linie pleacă IR 3?',
                   'Cât durează drumul cu IR 1?', 'Ce tren iei dacă pleci după 9 și ajungi înainte de 17?')),
         ],
         [
             T(3, 'Continuu, discontinuu sau mixt?', 'Scrie C, D sau M.',
               ['Textul', 'C / D / M'], [420, 90], gol(
                   'un roman', 'orarul clasei', 'o hartă', 'o revistă cu fotografii', 'un tabel cu note', 'un eseu',
                   'o pagină web', 'o rețetă cu poze și pași'), row_h=20),
             L(4, 'Harta țării', 'Scrie 4-5 rânduri: cum ai desena harta Țării-Obiectelor-cu-Suflet (ce locuri, ce legendă)?', 2),
         ], titlu='Textul discontinuu'),

    fisa(6, 'pp. 107-108',
         'Reper (manual, p. 107): Povestea lui Richard Bach e despre pescărușul Jonathan, căruia îi pasă mai mult de zbor '
         'decât de hrană; e o poveste despre conformism și depășirea lui, despre libertatea de a fi tu însuți.',
         [
             T(1, 'Jonathan și stolul', 'Compară, după text.',
               ['Criteriul', 'Jonathan', 'Ceilalți pescăruși'], [150, 180, 180], gol3(
                   'ce contează: zborul sau hrana', 'cum privesc greșeala', 'unde își petrec timpul', 'ce simt'), row_h=30),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F, după text.', AF, [440, 70], gol(
                 'Jonathan exersa zborul lent, departe de țărm.', 'Pentru pescăruși, a se poticni în zbor e o rușine.',
                 'Mama lui îl laudă pentru zbor.', 'Tatăl îi spune că zbori ca să te hrănești.',
                 'Jonathan încearcă să fie ca ceilalți și reușește.', 'Jonathan învață să doarmă în văzduh.')),
         ],
         [
             T(3, 'Zborul ca metaforă', 'Scrie ce ar putea fi „zborul” pentru fiecare.',
               ['Persoana', 'Zborul ei'], [150, 360], gol('un elev', 'un sportiv', 'un artist', 'eu'), row_h=26),
             L(4, 'Jonathan din mine', 'Scrie 5-6 rânduri: trăiește și în tine un Jonathan? În ce fel?', 2),
         ], titlu='Pescărușul Jonathan Livingston'),

    fisa(9, 'pp. 110-111',
         'Reper (manual, p. 111): Textul argumentativ are introducere (teza sau opinia față de ea), cuprins (argumente, '
         'contraargumente, exemple) și încheiere (concluzia). Conectori: consider că; pentru că, deoarece; în primul rând; '
         'de exemplu; deși, totuși; în concluzie, așadar.',
         [
             T(1, 'Părțile argumentării', 'Scrie: opinie, argument, exemplu, contraargument sau concluzie.',
               ['Enunțul (scris pentru fișă)', 'Partea'], [390, 120], gol(
                   'Consider că lectura ne ajută să înțelegem lumea.', 'În primul rând, cărțile ne arată locuri pe care nu le-am văzut.',
                   'De exemplu, un jurnal de călătorie îți arată viața din Japonia.', 'Totuși, unii spun că filmele fac asta mai repede.',
                   'În concluzie, lectura rămâne un drum spre lume.'), row_h=26),
             T(2, 'Conectorii', 'Scrie ce introduce fiecare conector.',
               ['Conectorul', 'Ce introduce'], [230, 280], gol(
                   'Părerea mea este că', 'deoarece', 'în al doilea rând', 'de pildă', 'deși', 'prin urmare')),
         ],
         [
             T(3, 'Argument și exemplu', 'Scrie un argument și un exemplu pentru fiecare teză.',
               ['Teza', 'Argumentul', 'Exemplul'], [150, 180, 180], gol3(
                   'Imaginația ne ajută la școală.', 'E bine să fie ordine în cameră.'), row_h=44),
             L(4, 'Concluzia', 'Scrie concluzia pentru una dintre tezele de la ex. 3 (2-3 rânduri), cu un conector potrivit.', 1),
         ], titlu='Textul argumentativ (1/2)'),

    fisa(10, 'pp. 110-111',
         'Reper (manual, p. 111): Argumentele se ierarhizează (în primul rând, apoi, în fine) și se întăresc prin '
         'exemple; argumentele pro și contra fac textul mai convingător; concluzia arată că argumentele susțin teza.',
         [
             T(1, 'Ordonează argumentarea', 'Numerotează enunțurile (1-6), în ordinea unei argumentări.',
               ['Enunțul (scris pentru fișă)', 'Nr.'], [440, 70], gol(
                   'Așadar, sportul în echipă e o școală a colaborării.', 'Cred că sportul în echipă te învață să colaborezi.',
                   'De exemplu, la baschet, un coș vine după pasele tuturor.',
                   'În primul rând, nicio echipă nu câștigă prin efortul unuia singur.',
                   'Astfel, după un meci pierdut, colegii se încurajează.', 'În al doilea rând, înveți să accepți înfrângerea împreună.'),
               row_h=24),
             T(2, 'Pro și contra', 'Teza: „Telefonul ar trebui interzis în pauze.” Completează.',
               ['', 'Pro', 'Contra'], [120, 195, 195], gol3('argumentul 1', 'argumentul 2', 'un exemplu'), row_h=34),
         ],
         [
             T(3, 'Planul argumentării mele', 'Alege o teză de la p. 111 și plănuiește argumentarea.',
               ['Partea', 'Ce scriu'], [150, 360], gol(
                   'teza', 'opinia mea', 'argumentul 1 și exemplul', 'argumentul 2 și exemplul', 'un contraargument',
                   'concluzia'), row_h=26),
             L(4, 'Textul meu argumentativ', 'Scrie argumentarea (8-10 rânduri), după planul de la ex. 3.', 3),
         ], titlu='Textul argumentativ (2/2)'),

    fisa(11, 'pp. 110-111',
         'Reper (manual, p. 111): Argumentarea orală e un monolog în fața publicului sau o parte a unei dezbateri. '
         'Vorbitorul își spune clar poziția, aduce două argumente cu exemple, folosește conectori și încheie cu o concluzie.',
         [
             T(1, 'Discursul meu de un minut', 'Pregătește argumentarea orală.',
               ['Partea', 'Ce spun'], [150, 360], gol(
                   'teza aleasă', 'opinia mea', 'argumentul 1', 'exemplul 1', 'argumentul 2', 'exemplul 2', 'concluzia'),
               row_h=24),
             T(2, 'Grila vorbitorului', 'După ce vorbești, scrie DA sau NU.',
               ['Criteriul', 'DA / NU'], [420, 90], gol(
                   'Mi-am spus clar poziția.', 'Am dat două argumente diferite.', 'Am întărit argumentele cu exemple.',
                   'Am folosit conectori.', 'Am încheiat cu o concluzie.', 'Am vorbit clar, privind publicul.',
                   'M-am încadrat într-un minut.'), row_h=20),
         ],
         [
             T(3, 'Ascult un coleg', 'Notează despre argumentarea unui coleg.',
               ['', 'Ce am reținut'], [170, 340], gol(
                   'teza colegului', 'cel mai bun argument', 'un exemplu', 'o sugestie pentru el'), row_h=26),
             L(4, 'Ce aș schimba', 'Scrie 3-4 rânduri: ce ai schimba în argumentarea ta după ce i-ai ascultat pe colegi?', 1),
         ], titlu='Argumentarea orală'),

    fisa(12, 'pp. 112-114',
         'Reper (manual, pp. 112-114): Atributul determină un substantiv sau un substitut al lui: adjectival, substantival '
         '(genitival, prepozițional, în nominativ, în dativ), pronominal, verbal, adverbial, interjecțional. Apoziția '
         'e echivalentă ca sens cu baza, stă după ea, e suprimabilă și se desparte prin virgulă, linie sau două puncte.',
         [
             T(1, 'Felul atributului', 'Scrie felul atributului.',
               ['Grupul', 'Atributul', 'Felul'], [180, 120, 210], [
                   ['o casă veche', 'veche', ''], ['acoperișul școlii', 'școlii', ''], ['podul de lemn', 'de lemn', ''],
                   ['râul Mureș', 'Mureș', ''], ['caietul lui', 'lui', ''], ['fiecare dintre voi', 'dintre voi', ''],
                   ['plăcerea de a desena', 'de a desena', ''], ['oamenii de acolo', 'de acolo', '']], row_h=20),
             T(2, 'Apoziția', 'Scrie apoziția și baza ei.',
               ['Enunțul (scris pentru fișă)', 'Apoziția', 'Baza'], [250, 150, 110], gol3(
                   'Am vizitat Brașovul, orașul de sub Tâmpa.', 'Vecinul nostru, domnul Pop, e medic.',
                   'Am urcat pe cel mai înalt vârf: Moldoveanu.', 'Au venit doi colegi, Dan și Radu.',
                   'E harnic, adică muncitor.'), row_h=24),
         ],
         [
             T(3, 'Atribut sau apoziție?', 'Scrie AT (atribut substantival în nominativ) sau AP (apoziție) pentru cuvântul dat.',
               ['Enunțul', 'Cuvântul', 'AT / AP'], [250, 170, 90], [
                   ['Orașul Cluj e frumos.', 'Cluj', ''], ['Clujul, orașul copilăriei mele, e frumos.', 'orașul', ''],
                   ['Fluviul Dunărea curge spre est.', 'Dunărea', ''], ['Dunărea, marele fluviu, curge spre est.', 'fluviu', '']]),
             T(4, 'Punctuația apoziției', 'Rescrie cu punctuația potrivită.',
               ['Enunțul', 'Varianta corectă'], [255, 255], gol(
                   'L-am sunat pe Vlad vărul meu.', 'Ne-am oprit la Sinaia perla Carpaților.',
                   'Am cumpărat rechizitele caiete creioane o riglă.'), row_h=28),
         ], titlu='Atributul. Apoziția'),

    fisa(13, 'pp. 115-116',
         'Reper (manual, pp. 115-116): Atributiva e realizarea propozițională a atributului (care? ce fel de?). Regentul e '
         'un substantiv, pronume sau numeral; elementele de relație: pronume și adjective relative și nehotărâte, adverbe '
         'relative, conjuncții. Stă după regent și, de obicei, nu se desparte prin virgulă.',
         [
             X(1, 'Șase fraze', [
                 'Citește frazele (scrise pentru fișă).',
                 '(1) Cartea pe care o citesc e o hartă a unei lumi inventate.   (2) Știu un loc unde obiectele vorbesc.',
                 '(3) Ziua când am primit scrisoarea a fost ploioasă.   (4) Speranța că vom câștiga ne-a ținut treji.',
                 '(5) Colegul al cărui caiet l-am luat e bolnav.   (6) Laud curajul oricui spune adevărul.']),
             T(2, 'Atributiva', 'Scrie atributiva și elementul de relație (partea de vorbire).',
               ['Fraza', 'Atributiva', 'Elementul de relație'], [60, 250, 200], gol3('(1)', '(2)', '(3)', '(4)', '(5)', '(6)'),
               row_h=24),
         ],
         [
             T(3, 'Contragere și expansiune', 'Transformă atributul în atributivă sau atributiva în atribut.',
               ['Construcția', 'Transformarea'], [230, 280], gol(
                   'o pisică speriată', 'fereastra de la etaj', 'o fată care are ochi albaștri', 'un om care e de treabă')),
             T(4, 'Corectează', 'Scrie varianta corectă.',
               ['Enunțul greșit', 'Varianta corectă'], [255, 255], gol(
                   'Fata al cărui bunic e pictor mi-e colegă.', 'Vestea că să vină ne-a bucurat.',
                   'Am cumpărat cartea, care o voiai.', 'Fetele a căror desene au câștigat vin.'), row_h=26),
         ], titlu='Atributiva'),

    fisa(14, 'p. 117',
         'Reper (manual, p. 117): Complementul direct (pe cine? ce?) arată obiectul asupra căruia se îndreaptă acțiunea; '
         'stă în acuzativ, uneori cu „pe”. Se exprimă prin substantiv, pronume, numeral, verb la infinitiv, gerunziu, supin '
         'și poate fi dublat prin clitic (anticipare sau reluare).',
         [
             T(1, 'Complementul direct', 'Scrie complementul direct și partea de vorbire.',
               ['Enunțul (scris pentru fișă)', 'Complementul direct', 'Partea de vorbire'], [200, 140, 170], gol3(
                   'Citesc o poveste.', 'Îl chem pe Andrei.', 'Nu văd pe nimeni.', 'I-am ales pe amândoi.',
                   'Pot desena.', 'Am de citit.')),
             T(2, 'Dublarea prin clitic', 'Scrie cliticul și dacă anticipează sau reia complementul.',
               ['Enunțul', 'Cliticul', 'Anticipare / reluare'], [230, 100, 180], gol3(
                   'Pe bunica o vizităm duminica.', 'L-am văzut pe Dan.', 'Le-am citit pe toate.')),
         ],
         [
             T(3, 'Completează', 'Completează cu un complement direct exprimat prin partea de vorbire cerută.',
               ['Enunțul', 'Partea de vorbire', 'Complementul'], [200, 160, 150], [
                   ['Am cumpărat ... .', 'numeral', ''], ['Îl aștept ... .', 'pronume personal', ''],
                   ['Am terminat ... .', 'verb la supin', ''], ['Citesc ... .', 'substantiv', '']]),
             T(4, 'Are complement direct?', 'Scrie DA (și care e) sau NU.',
               ['Enunțul', 'Răspunsul'], [300, 210], gol(
                   'Copilul doarme.', 'Copilul citește o carte.', 'Mama pregătește cina.', 'Afară plouă.')),
         ], titlu='Complementul direct'),

    fisa(15, 'pp. 118-119',
         'Reper (manual, pp. 118-119): Completiva directă e realizarea propozițională a complementului direct (pe cine? '
         'ce?). Regentul e un verb, o locuțiune verbală sau o interjecție predicativă; elementele de relație: conjuncții '
         '(că, să, dacă), pronume și adverbe relative, pronume nehotărâte. De obicei nu se desparte prin virgulă.',
         [
             T(1, 'Completiva directă', 'Scrie completiva directă și elementul de relație.',
               ['Fraza (scrisă pentru fișă)', 'Completiva directă', 'Elementul de relație'], [170, 170, 170], gol3(
                   'Cred că vei reuși.', 'Nu știu dacă vine.', 'Ghicește cine a sunat!', 'Întreabă unde e gara.',
                   'Mănâncă orice îi gătești.', 'Vreau să învăț chineză.')),
             T(2, 'Din complement în completivă', 'Transformă complementul direct într-o completivă directă.',
               ['Propoziția', 'Fraza cu completivă directă'], [200, 310], gol(
                   'Știu răspunsul.', 'Îmi imaginez o lume nouă.', 'Am văzut câștigătorul.', 'Promit revenirea.'), row_h=26),
         ],
         [
             T(3, 'Corectează', 'Scrie varianta corectă.',
               ['Enunțul greșit', 'Varianta corectă'], [255, 255], gol(
                   'Sper ca să te văd.', 'Știu căci ai dreptate.', 'Mă întreb că oare când vine.', 'Au hotărât că să rămână.')),
             L(4, 'Frazele mele', 'Scrie patru fraze cu completive directe, cu regenții: a spera, a observa, a decide, a ghici.', 2),
         ], titlu='Completiva directă'),

    fisa(16, 'p. 120',
         'Reper (manual, p. 120): Complementul indirect (cui?) arată beneficiarul acțiunii; stă în dativ (sau „la” + '
         'numeral). Regentul poate fi un verb, o locuțiune, un adjectiv, un adverb, o interjecție. Poate fi anticipat sau '
         'reluat prin clitic în dativ.',
         [
             T(1, 'Complementul indirect', 'Scrie complementul indirect și regentul (partea de vorbire).',
               ['Enunțul (scris pentru fișă)', 'Complementul indirect', 'Regentul'], [220, 140, 150], gol3(
                   'Le dăruiesc prietenilor cărți.', 'I-am spus adevărul.', 'Fiecăruia i-a plăcut filmul.',
                   'Am dat bomboane la cinci dintre ei.', 'Bravo echipei!', 'Aleargă asemenea vântului.',
                   'Un climat prielnic plantelor'), row_h=20),
             T(2, 'Anticipare sau reluare?', 'Scrie cliticul și rolul lui.',
               ['Enunțul', 'Cliticul', 'Anticipare / reluare'], [230, 100, 180], gol3(
                   'I-am scris Mariei.', 'Mariei i-am scris.', 'Le-am dat colegilor fișele.', 'Colegilor le-am dat fișele.')),
         ],
         [
             T(3, 'Corectează', 'Scrie varianta corectă; dacă enunțul e corect, scrie „corect”.',
               ['Enunțul', 'Varianta corectă'], [255, 255], gol(
                   'Am dat flori la mama.', 'Am explicat regula la toți.', 'Am trimis la ea o scrisoare.', 'Le-a dat cadouri copiilor.')),
             T(4, 'Înlocuiește', 'Rescrie „Colegilor le-am trimis invitații.” cu complementul indirect exprimat prin partea de vorbire cerută.',
               ['Partea de vorbire', 'Enunțul'], [170, 340], gol(
                   'pronume nehotărât', 'pronume demonstrativ', 'numeral cu valoare pronominală'), row_h=26),
         ], titlu='Complementul indirect'),

    fisa(17, 'pp. 121-122',
         'Reper (manual, pp. 121-122): Completiva indirectă e realizarea propozițională a complementului indirect (cui?). '
         'Regentul e un verb, o locuțiune, un adjectiv, un adverb sau o interjecție; e introdusă prin pronume relative '
         'și nehotărâte în dativ (cui, oricui) sau prin adjective pronominale.',
         [
             T(1, 'Completiva indirectă', 'Scrie elementul de relație și regentul (partea de vorbire).',
               ['Fraza (scrisă pentru fișă)', 'Elementul de relație', 'Regentul'], [230, 140, 140], gol3(
                   'Dau un sfat cui îl cere.', 'Arată desenul oricui e curios.', 'Bravo cui a terminat primul!',
                   'Cartea e utilă oricui învață.', 'Cântă asemenea cui l-a învățat.', 'Îi răspund oricui mă întreabă.')),
             T(2, 'Același „cui”', 'Scrie felul subordonatei introduse prin „cui”.',
               ['Fraza', 'Felul subordonatei'], [300, 210], gol(
                   'Îi dau cartea cui o cere.', 'Nu știu cui să-i cer ajutor.', 'Rămâne întrebarea cui să-i dăm premiul.')),
         ],
         [
             T(3, 'Expansiune', 'Transformă complementul indirect într-o completivă indirectă.',
               ['Propoziția', 'Fraza cu completivă indirectă'], [210, 300], gol(
                   'Îi mulțumesc profesorului.', 'Le trimit invitații colegilor.', 'Bravo câștigătorului!'), row_h=26),
             L(4, 'Frazele mele', 'Scrie trei fraze cu completive indirecte, cu regentul: un verb, un adjectiv, o interjecție.', 2),
         ], titlu='Completiva indirectă'),

    fisa(18, 'p. 123',
         'Reper (manual, p. 123): Complementul prepozițional (la ce? de cine? despre ce? pe cine?) arată ținta acțiunii; '
         'e mereu precedat de prepoziție. Regentul poate fi un verb, o locuțiune, un adjectiv, un adverb, o interjecție; '
         'se exprimă prin substantiv, pronume, numeral, verb la infinitiv sau supin.',
         [
             T(1, 'Complementul prepozițional', 'Scrie complementul prepozițional și regentul (partea de vorbire).',
               ['Enunțul (scris pentru fișă)', 'Complementul', 'Regentul'], [220, 140, 150], gol3(
                   'Mă gândesc la vacanță.', 'Se teme de întuneric.', 'Vorbește despre tine.', 'Contez pe amândoi.',
                   'S-a apucat de învățat.', 'E mândru de ea.', 'Stă departe de gălăgie.'), row_h=20),
             T(2, 'Ce fel de complement?', 'Scrie CD, CI sau CP.',
               ['Enunțul', 'Felul'], [420, 90], gol(
                   'Mă gândesc la mama.', 'O ascult pe mama.', 'Îi scriu mamei.', 'Vorbesc despre mama.', 'O văd pe mama.')),
         ],
         [
             T(3, 'Completează', 'Completează cu un complement prepozițional exprimat prin partea de vorbire cerută.',
               ['Enunțul', 'Partea de vorbire', 'Complementul'], [200, 160, 150], [
                   ['Îmi aduc aminte ... .', 'pronume', ''], ['Totul depinde ... .', 'substantiv', ''],
                   ['E capabil ... .', 'verb la infinitiv', ''], ['Se teme ... .', 'numeral', '']]),
             L(4, 'Ce îmi pasă', 'Scrie 4-5 rânduri despre un lucru la care ții, cu trei complemente prepoziționale. Subliniază-le.', 2),
         ], titlu='Complementul prepozițional'),

    fisa(19, 'pp. 124-125',
         'Reper (manual, pp. 124-125): Completiva prepozițională e realizarea propozițională a complementului prepozițional. '
         'E introdusă prin conjuncții (că, să, dacă), locuțiuni, pronume și adjective relative sau nehotărâte, adverbe '
         'relative. Antepusă și reluată prin pronume, se desparte prin virgulă.',
         [
             T(1, 'Completiva prepozițională', 'Scrie elementul de relație și regentul (partea de vorbire).',
               ['Fraza (scrisă pentru fișă)', 'Elementul de relație', 'Regentul'], [230, 140, 140], gol3(
                   'Mă gândesc să plec la munte.', 'Se bucură că a venit primăvara.', 'Mă bazez pe cine m-a ajutat.',
                   'Îmi aduc aminte când ne-am cunoscut.', 'Sunt curios ce vei alege.', 'Vai de cine minte!')),
             T(2, 'Același „dacă”', 'Scrie felul subordonatei introduse prin „dacă”.',
               ['Fraza', 'Felul subordonatei'], [300, 210], gol(
                   'Verifică dacă am încuiat ușa.', 'Totul depinde dacă avem timp.', 'Nesiguranța dacă am ales bine m-a frământat.')),
         ],
         [
             T(3, 'Din complement în completivă', 'Transformă complementul prepozițional într-o completivă prepozițională.',
               ['Propoziția', 'Fraza cu completivă'], [200, 310], gol(
                   'Mă gândesc la plecare.', 'Se bucură de reușită.', 'Mă tem de greșeli.', 'Depinde de ajutorul lor.'), row_h=26),
             T(4, 'Punctuația', 'Rescrie cu punctuația corectă.',
               ['Enunțul', 'Varianta corectă'], [255, 255], gol(
                   'Cu cine lucrezi cu acela mă înțeleg.', 'Mă gândesc, să plec.', 'La ce te gândești la asta mă gândesc și eu.'),
               row_h=26),
         ], titlu='Completiva prepozițională'),

    fisa(20, 'pp. 126-127',
         'Reper (manual, pp. 126-127): Comparația pune în paralel două sau mai multe elemente după criterii, arătând '
         'asemănări și deosebiri, cu structuri de comparativ (la fel de... ca, mai... decât, mai puțin... decât) și de '
         'superlativ relativ (cel mai..., cel mai puțin...). Analogia explică o noțiune abstractă prin asemănarea '
         'parțială cu ceva concret.',
         [
             T(1, 'Gradele de comparație', 'Scrie structura de comparare și gradul exprimat.',
               ['Enunțul (scris pentru fișă)', 'Structura', 'Gradul'], [280, 100, 130], gol3(
                   'Trotineta e la fel de rapidă ca bicicleta în oraș.', 'Bicicleta e mai stabilă decât trotineta.',
                   'Trotineta e mai puțin grea decât bicicleta.', 'Bicicleta e cea mai potrivită pentru drumuri lungi.',
                   'Trotineta e cea mai puțin zgomotoasă din parc.', 'Rolele sunt tot atât de distractive ca trotineta.'),
               row_h=26),
             T(2, 'Criterii de comparare', 'Compară cartea și filmul după fiecare criteriu. Scrie apoi un enunț cu o structură de comparare.',
               ['Criteriul', 'Cartea', 'Filmul', 'Enunțul comparativ'], [90, 100, 100, 220], [
                   ['durata', '', '', ''], ['imaginația', '', '', ''], ['costul', '', '', ''], ['emoția', '', '', '']], row_h=32),
         ],
         [
             T(3, 'Pe ce se bazează analogia?', 'Scrie trăsătura comună pe care se bazează fiecare analogie.',
               ['Analogia (scrisă pentru fișă)', 'Trăsătura comună'], [280, 230], gol(
                   'Memoria e un sertar.', 'Prietenia e ca o grădină.', 'Creierul care învață e ca un mușchi antrenat.',
                   'Internetul e ca un oraș uriaș fără hartă.', 'Răbdarea e o sămânță.'), row_h=26),
             T(4, 'Științific sau literar?', 'Scrie Ș (text științific) sau L (text literar).',
               ['Asocierea', 'Ș / L'], [420, 90], gol(
                   'Inima funcționează ca o pompă care împinge sângele prin vase.',
                   'Luna era o lampă uitată aprinsă deasupra satului.',
                   'Celula are, ca o fabrică, compartimente cu roluri diferite.',
                   'Timpul, un râu fără maluri, ne duce pe toți.')),
             L(5, 'Analogiile mele', 'Propune câte o analogie pentru prietenie, curaj și viitor. Explică, pentru fiecare, pe ce asemănare se bazează.', 2),
         ], titlu='Comparație, analogie (1/2)'),

    fisa(21, 'p. 127',
         'Reper (manual, p. 127): Un text comparativ stabilește criteriile, apoi prezintă, în ordine, asemănările și '
         'deosebirile, cu structuri de comparare și conectori (la fel, în schimb, spre deosebire de, însă). O analogie '
         'potrivită face comparația mai vie.',
         [
             X(1, 'Un text comparativ', [
                 'Citește textul (scris pentru fișă).',
                 'Dimineața și seara, parcul din cartierul meu pare să fie două locuri diferite, deși aleile, băncile și copacii '
                 'rămân aceiași. Le compar după trei criterii: lumina, oamenii și sunetele.',
                 'Dimineața, lumina e rece și limpede, la fel de curată ca apa dintr-un pahar. Seara, în schimb, lumina e mai caldă '
                 'și mai blândă decât ziua, iar felinarele aprind câte un cerc galben pe alee.',
                 'Dimineața trec prin parc oameni grăbiți, care se uită la ceas. Seara, oamenii sunt mai puțin grăbiți: se plimbă, '
                 'stau pe bănci, vorbesc. Spre deosebire de dimineață, seara parcul devine un loc de întâlnire.',
                 'Sunetele sunt însă asemănătoare: și dimineața, și seara se aud păsările. Dimineața, parcul e un ceas deșteptător; '
                 'seara, e o pernă pe care orașul își lasă capul. Cel mai frumos mi se pare, totuși, momentul de seară.']),
             T(2, 'Structura textului', 'Completează tabelul pe baza textului.',
               ['Criteriul', 'Dimineața', 'Seara', 'Asemănare / deosebire'], [90, 140, 140, 140],
               [['', '', '', ''] for _ in range(3)], row_h=34),
         ],
         [
             T(3, 'Mijloacele comparării', 'Scrie din text câte un exemplu.',
               ['Mijlocul', 'Exemplul din text'], [180, 330], gol(
                   'comparativ de egalitate', 'comparativ de superioritate', 'comparativ de inferioritate',
                   'superlativ relativ', 'conector de contrast', 'analogie')),
             T(4, 'Planul textului meu', 'Alege două elemente de comparat (două anotimpuri, două orașe, un obiect vechi și unul nou) și completează planul.',
               ['Criteriul', 'Elementul A', 'Elementul B', 'Analogia'], [90, 140, 140, 140],
               [['', '', '', ''] for _ in range(3)], row_h=34),
             L(5, 'Primul paragraf', 'Scrie paragraful de început al textului tău: ce compari și după ce criterii.', 1),
         ], titlu='Comparație, analogie (2/2)'),

    fisa(22, 'pp. 128-129',
         'Reper (manual, pp. 128-129): Recapitulăm lectura din Unitatea III: lumea ficțională, combinarea structurilor '
         'textuale (narativă, descriptivă, dialogată, explicativă, argumentativă), semnificațiile textului și elementele '
         'textului argumentativ.',
         [
             X(1, 'Ceasul bunicului', [
                 'Citește textul (scris pentru fișă).',
                 'În podul casei, Ilinca a găsit un ceas de perete oprit la ora cinci. Era din lemn închis la culoare, cu un cadran '
                 'îngălbenit și cu limbi subțiri, ca două fire de iarbă uscată.',
                 '— De ce s-a oprit? l-a întrebat ea pe bunic.',
                 '— Pentru că n-a mai avut cine să-l întoarcă, a zis bunicul. Un ceas mecanic funcționează cu un arc: când îl '
                 'întorci, arcul se strânge, iar apoi, desfăcându-se încet, pune în mișcare rotițele.',
                 'Ilinca a învârtit cheița. Ceasul a tresărit și a început să bată. Bunicul a zâmbit: „Cred că asta e cea mai '
                 'importantă lecție: ce iubești trebuie și îngrijit. Altfel se oprește, ca ceasul ăsta.”']),
             T(2, 'Structurile textuale', 'Scrie structura textuală a fiecărei secvențe și un indiciu.',
               ['Secvența', 'Structura', 'Un indiciu'], [200, 130, 180], gol3(
                   '„Era din lemn închis la culoare...”', '„— De ce s-a oprit?”', '„Un ceas mecanic funcționează...”',
                   '„Ilinca a învârtit cheița.”', '„Cred că asta e...”'), row_h=26),
         ],
         [
             T(3, 'Adevărat sau fals', 'Scrie A sau F.', AF, [420, 90], gol(
                 'Ceasul s-a oprit din cauza unei defecțiuni.', 'Bunicul explică felul în care funcționează ceasul.',
                 'Comparația „ca două fire de iarbă uscată” descrie limbile ceasului.', 'Ilinca refuză să atingă ceasul.',
                 'Bunicul își susține opinia cu o comparație.')),
             T(4, 'Legături între texte', 'Scrie ce are în comun fiecare text din unitate cu „Ceasul bunicului”.',
               ['Textul din unitate', 'Ce au în comun'], [200, 310], gol(
                   'În Țara-Obiectelor-cu-Suflet', 'Pescărușul Jonathan Livingston', 'fragmentul din Micul Prinț (p. 128)'), row_h=32),
             L(5, 'Părerea mea', 'Formulează o opinie despre ideea bunicului și susține-o cu un argument și un exemplu.', 1),
         ], titlu='Recapitulare, lectură'),

    fisa(23, 'pp. 128-129',
         'Reper (manual, pp. 112-125): Recapitulăm funcțiile sintactice din unitate (atributul și apoziția, complementul '
         'direct, indirect și prepozițional) și subordonatele corespunzătoare (atributiva, completivele directă, '
         'indirectă și prepozițională).',
         [
             X(1, 'Robotul lui Radu', [
                 'Citește enunțurile (scrise pentru fișă).',
                 '(1) Radu, colegul meu de bancă, a construit un robot din piese vechi.   (2) I-a dat robotului un nume ciudat.',
                 '(3) Ne-a spus că robotul dansează.   (4) Ne gândeam dacă spune adevărul.',
                 '(5) Robotul pe care l-a construit îi zâmbește oricui îl privește.   (6) Mă bucur de reușita lui.']),
             T(2, 'Funcția sintactică', 'Scrie funcția sintactică și partea de vorbire.',
               ['Cuvântul', 'Enunțul', 'Funcția sintactică', 'Partea de vorbire'], [100, 60, 180, 170], [
                   ['colegul', '(1)', '', ''], ['vechi', '(1)', '', ''], ['robot', '(1)', '', ''], ['robotului', '(2)', '', ''],
                   ['ciudat', '(2)', '', ''], ['Ne', '(3)', '', ''], ['reușita', '(6)', '', ''], ['lui', '(6)', '', '']], row_h=20),
             T(3, 'Subordonatele', 'Scrie subordonata, felul ei și elementul de relație.',
               ['Fraza', 'Subordonata', 'Felul', 'Elementul de relație'], [50, 200, 130, 130], gol4('(3)', '(4)', '(5)', '(5)'),
               row_h=24),
         ],
         [
             T(4, 'Găsește intrusul', 'Scrie construcția care nu se potrivește și funcția sintactică a celorlalte.',
               ['Seria', 'Intrusul', 'Funcția celorlalte'], [300, 100, 110], gol3(
                   'o văd pe Ioana · îi scriu Ioanei · o chem pe Ioana',
                   'mă gândesc la tine · te ascult · mă tem de tine',
                   'casa mea · casa de piatră · Ana, sora mea',
                   'le dau colegilor · mă bazez pe ei · îi spun fratelui'), row_h=28),
             T(5, 'Expansiune', 'Transformă partea de propoziție într-o subordonată și scrie felul subordonatei.',
               ['Propoziția', 'Fraza', 'Felul subordonatei'], [160, 230, 120], gol3(
                   'Aștept venirea ta.', 'Mă gândesc la vacanță.', 'Le mulțumesc colegilor.', 'Am o bicicletă albastră.'),
               row_h=26),
         ], titlu='Recapitulare, limbă română'),

    fisa(24, 'pp. 128-129',
         'Reper (manual, pp. 126-129): Textul argumentativ are opinie, argumente, exemple, conectori și concluzie. Textul '
         'comparativ are criterii, asemănări și deosebiri, structuri de comparare și, uneori, analogii.',
         [
             X(1, 'Două idei', [
                 'Citește cele două idei (scrise pentru fișă).',
                 'A. Lumea se descoperă cu ochii: cine privește atent vede tot ce are nevoie să știe.',
                 'B. Lumea se descoperă cu inima: vezi cu adevărat doar ceea ce iubești.']),
             T(2, 'Criteriile', 'Compară cele două idei după criteriile date.',
               ['Criteriul', 'Ideea A', 'Ideea B'], [120, 195, 195], [
                   ['cu ce cunoști lumea', '', ''], ['ce poți cunoaște', '', ''], ['ce limită are', '', '']], row_h=34),
             T(3, 'Asemănări și deosebiri', 'Formulează o asemănare și o deosebire cu structuri de comparare, apoi o analogie care să explice ce înseamnă „a vedea cu inima”.',
               ['Elementul', 'Formularea mea'], [140, 370], gol(
                   'o asemănare', 'o deosebire', 'o analogie'), row_h=30),
         ],
         [
             X(4, 'Un paragraf de îmbunătățit', [
                 'Paragraful (scris pentru fișă): „Cred că ochii nu ajung pentru a cunoaște lumea. Pentru că nu. De exemplu, '
                 'e așa. Deci am dreptate.”']),
             T(5, 'Ce lipsește', 'Verifică fiecare element al textului argumentativ și propune o îmbunătățire.',
               ['Elementul', 'Există? (DA / NU)', 'Propunerea mea'], [110, 110, 290], gol3(
                   'opinia', 'argumentul', 'exemplul', 'conectorii', 'concluzia'), row_h=26),
             L(6, 'Paragraful rescris', 'Rescrie paragraful, cu un argument și un exemplu reale.', 1),
         ], titlu='Recapitulare, redactare'),
]
