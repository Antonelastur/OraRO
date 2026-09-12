# Fișe de exerciții, clasa a VI-a, Unitatea V „Călătorii de tot felul”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 6). Textele fără autor
# sunt create pentru fișe; citatele scurte sunt doar din autori în domeniul
# public (I.L. Caragiale); Samantha Fanelli, Lucy și Stephen Hawking, Grigore
# Vieru, Nichita Stănescu, Michael Ende sunt doar parafrazați. Lecțiile 1 și 11
# (proiectul) și 22 (evaluarea) nu au fișă.
# Rezolvările: notite-profesor/clasa-6/unitatea-5/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-6-unitatea-5.py

SUB = 'Clasa a VI-a · Unitatea V, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 6, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-6/unitatea-5/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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

AUTOBUZ = [
    '„Luni, la șapte și un sfert, autobuzul 331 era plin ochi. Pe scaunul de lângă ușă, un băiat de vreo zece ani '
    'ținea în brațe un ghiozdan cât el și un pahar de ciocolată caldă. «Mamă, de ce stăm? Eu vreau să mergem!», '
    'striga el, bătând din picioare.',
    'La prima frână, ciocolata a zburat drept pe haina șoferului. În liniștea care s-a lăsat, mama a zâmbit: «Nu-i '
    'nimic, puiule, domnul are și altă haină.» Șoferul a oftat și a pornit mai departe, cu zece minute întârziere.”',
]

LECTURA = [
    '„Cred că fiecare elev ar trebui să citească în vacanță măcar o carte. În primul rând, lectura ne îmbogățește '
    'vocabularul. De exemplu, după ce am citit „Toate pânzele sus!”, am învățat zeci de cuvinte despre corăbii. În '
    'al doilea rând, cărțile ne duc în locuri unde nu am putea ajunge altfel.',
    'Pe de altă parte, unii spun că vacanța e pentru joacă, nu pentru citit. Totuși, o carte se poate citi și pe '
    'plajă, între două jocuri. În concluzie, o carte în vacanță nu strică vacanța, ci o face mai bogată.”',
]

MARTE = ('„Marte este o planetă mică, roșiatică și rece. Pe suprafața ei prăfuită se văd cratere adânci și vulcani '
         'stinși. Cel mai înalt vulcan din Sistemul Solar, Olympus Mons, se află tot aici. Roverele trimise de oameni '
         'au găsit urme vechi de apă.”')

MUNTE = ('„Ieri am plecat devreme spre munte. Am mers încet, pentru că drumul urca mereu. Sus, lângă cabană, am '
         'mâncat repede și am privit departe, spre sat. Acum îmi amintesc cu drag ziua aceea.”')

EXCURSIE = [
    '„— Unde mergem în excursie? întrebă Mara.',
    '— La Sinaia, răspunse doamna dirigintă. Luați-vă haine groase!',
    '— Vom vedea și castelul? se interesă Vlad.',
    '— Da, și vom urca și cu telecabina, zâmbi diriginta.',
    '— Super! strigă toată clasa.”',
]

GARA = [
    '„Era sâmbătă dimineață, iar gara din Brașov mirosea a cafea și a ploaie. Ilinca și bunicul ei așteptau trenul '
    'spre Constanța, cu două rucsacuri și o umbrelă verde.',
    '— Cât mai avem? întrebă fetița, uitându-se pentru a zecea oară la ceas.',
    '— Șapte minute, răspunse bunicul. Știi ce facem în șapte minute?',
    '— Ce?',
    '— Ghicim unde pleacă oamenii din jurul nostru.',
    'Ilinca râse și arătă spre un domn cu o valiză uriașă:',
    '— El pleacă la Polul Nord!',
    'În clipa aceea, un fluier lung anunță sosirea trenului. Bunicul își luă rucsacul și șopti:',
    '— Vezi? Timpul trece repede când te joci.”',
]

FISE = [
    fisa(2, 'pp. 154-157',
         'Reper: În schița „D-l Goe...” de I.L. Caragiale, mam’ mare, mamița și tanti Mița îl duc pe Goe cu trenul la '
         'București, de 10 Mai. Pe drum, Goe își pierde pălăria cu biletul, se lovește la nas, se încuie în toaletă '
         'și trage semnalul de alarmă.',
         [
             T(1, 'În ce ordine?', 'Numerotează întâmplările în ordinea din text (1-7).',
               ['Întâmplarea', 'Nr.'], [440, 70], gol(
                   'Goe se încuie în compartimentul unde intră o singură persoană.',
                   'Pălăria îi zboară pe fereastră, cu biletul.', 'Goe trage semnalul de alarmă.',
                   'Cele trei cucoane așteaptă cu Goe trenul pe peron.', 'Goe se lovește la nas de clanța cupeului.',
                   'Conductorul cere să se plătească biletul.', 'Cucoanele pornesc cu trăsura spre „bulivar”.')),
             T(2, 'Cine spune?', 'Scrie personajul care rostește replica.',
               ['Replica', 'Personajul'], [340, 170], gol(
                   '„Eu vreau să vie!”', '„Parol! Chiar eu l-am cumpărat!”', '„Nu știi ce simțitor e?”',
                   '„Uite ce e, cucoană, trebuie să plătiți un bilet...”', '„Ce treabă ai tu, urâtule?”',
                   '„...nu e voie să scoți capul pe fereastră, mititelule!”')),
         ],
         [
             T(3, 'Forma corectă', 'Scrie forma corectă de azi.',
               ['Forma din text', 'Forma corectă'], [250, 260], gol(
                   'n-am declaratără', 'să vază', 'să râză', 'să răspunză', 'grije')),
             L(4, 'Goe, azi', 'Imaginează-ți că Goe călătorește azi cu avionul. Ce ar face? Scrie 4-5 propoziții.', 3),
         ]),

    fisa(3, 'pp. 158-159',
         'Reper (manual, p. 158): Schița este un text narativ scurt, cu un singur eveniment semnificativ din viața '
         'personajelor, spațiu restrâns, timp limitat, ritm alert și puține detalii, dar semnificative. Multe texte '
         'din „Momente și schițe” de I.L. Caragiale au aceste trăsături.',
         [
             X(1, 'În autobuz', ['Citește textul (scris pentru fișă).'] + AUTOBUZ),
             T(2, 'Ca într-o schiță', 'Completează după text.',
               ['', 'Din text'], [180, 330], gol(
                   'spațiul', 'timpul (ziua, ora)', 'evenimentul', 'cât durează', 'ritmul (alert sau lent)',
                   'cu cine seamănă băiatul'), row_h=26),
         ],
         [
             T(3, 'Ce este schița?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Schița prezintă multe evenimente din viața personajelor.', 'Spațiul schiței este restrâns.',
                 'Ritmul acțiunii este alert.', 'Detaliile sunt multe și fără importanță.',
                 '„D-l Goe...” face parte din volumul „Momente și schițe”.')),
             L(4, 'La următoarea stație', 'Continuă textul de la ex. 1: ce se întâmplă la următoarea stație? Scrie 3-4 propoziții, cu ritm alert.', 3),
         ]),

    fisa(4, 'pp. 160-161',
         'Reper (manual, pp. 160-161): Dialogul are cel puțin două replici legate logic. Replica se marchează prin '
         'linie de dialog. Verbele de declarație (a zice, a întreba, a răspunde, a striga) stau înaintea replicii '
         '(cu două puncte), după ea (după virgulă, !, ?, ...) sau în interiorul ei (între virgule).',
         [
             X(1, 'Dialogul fără semne', [
                 'Rescrie dialogul (scris pentru fișă) cu linie de dialog și cu semnele de punctuație potrivite.',
                 'Mama întreabă de ce plângi Radule',
                 'Nu-mi găsesc biletul răspunde Radu',
                 'L-ai pus în buzunarul de la geacă zice mama',
                 'Aoleu da aici era exclamă băiatul']),
             L(2, 'Dialogul, corect', 'Scrie aici dialogul cu semnele puse.', 2),
             T(3, 'Verbul de declarație', 'Scrie verbul, poziția lui (înainte, după, în interior) și semnul folosit.',
               ['Replica', 'Verbul', 'Poziția', 'Semnul'], [220, 90, 100, 100], gol4(
                   '„— Ai bilet? întreabă conductorul.”', '„Mama zise: — Stai cuminte!”',
                   '„— Nu, șopti Radu, l-am pierdut.”', '„— Ajunge! strigă tata.”')),
         ],
         [
             T(4, 'Ce arată semnele?', 'Explică ce arată semnele de punctuație sau literele repetate.',
               ['Replica', 'Ce arată'], [300, 210], gol(
                   '„— Nu vreeeau!”', '„— Dar noi n-am declaratără?”', '„— Lasă-l încolo! Că prea e nu știu cum!...”',
                   '„— Ce... ce s-a întâmplat?”'), row_h=28),
             L(5, 'Goe și conductorul', 'Scrie un dialog de 6 replici între Goe și conductor, cu verbe de declarație în toate cele trei poziții.', 3),
         ]),

    fisa(5, 'pp. 162-163',
         'Reper (manual, p. 162): Trăsăturile unui personaj pot fi numite (de narator, de alte personaje, de el însuși) '
         'sau deduse din fapte, atitudine, vorbire. Prin dialog, personajele își dezvăluie felul de a fi, relațiile, '
         'gradul de cultură. Figuranții sunt simpli martori ai întâmplărilor.',
         [
             T(1, 'De unde aflăm?', 'Scrie trăsătura lui Goe și sursa: N (narator), P (alt personaj), F (faptele lui), V (vorbele lui).',
               ['Secvența', 'Trăsătura', 'Sursa'], [260, 150, 100], gol3(
                   '„D. Goe este foarte impacient”', '„E lucru mare, cât e de deștept!”',
                   '„Vezi că sunteți proaste amândouă?”', 'se strâmbă și scoate iar capul pe fereastră',
                   'trage manivela semnalului de alarmă', '„Pe tine nu vreau!”')),
             T(2, 'Cele trei cucoane', 'Cum se poartă fiecare cu Goe? Dă un exemplu din text.',
               ['Personajul', 'Cum se poartă cu Goe', 'Exemplul'], [110, 220, 180], gol3(
                   'mam’ mare', 'mamița', 'tanti Mița'), row_h=34),
         ],
         [
             T(3, 'Vorbirea și educația', 'Ce arată felul în care vorbește personajul?',
               ['Cuvântul (personajul)', 'Ce arată'], [180, 330], gol(
                   '„marinel” (mam’ mare)', '„n-am declaratără” (mamița)', '„Parol!” (tanti Mița)', '„mariner” (Goe)'),
               row_h=26),
             L(4, 'Goe se prezintă', 'Scrie, la persoana I, cum s-ar prezenta Goe unui coleg nou (4-5 propoziții), astfel încât să i se vadă trăsăturile.', 3),
         ]),

    fisa(6, 'pp. 164-165',
         'Reper (manual, pp. 164-165): Comicul apare din contraste (între aparență și esență, între vechi și nou, între '
         'efort și rezultat). Ironia spune opusul a ceea ce gândește cineva; în „D-l Goe...”, naratorul își ironizează '
         'personajele. Copilul răsfățat îi imită pe adulții din jurul lui.',
         [
             T(1, 'Unde e comicul?', 'Explică ce e comic sau ironic în fiecare secvență.',
               ['Secvența', 'Ce e comic sau ironic'], [270, 240], gol(
                   '„Ca să nu mai rămâie repetent și anul acesta”', '„cu un ton de comandă, zice încruntat”',
                   '„liberează pe captiv”', '„Nu se poate ști cine a tras manivela.”',
                   'mam’ mare scoate din săculeț un beret'), row_h=30),
             T(2, 'Vinovat sau nu?', 'Pregătește-te pentru „linia valorică”.',
               ['', 'Argumentul meu'], [200, 310], gol(
                   'Goe e vinovat, pentru că', 'Goe nu e vinovat, pentru că', 'Cine mai e vinovat', 'Concluzia mea'),
               row_h=30),
         ],
         [
             L(3, 'Scrisoare către Goe', 'Scrie-i lui Goe, din partea unui copil de azi, 5-6 rânduri despre cum să se poarte într-o călătorie.', 3),
             L(4, 'Dacă ar fi fost altfel', 'Dacă cele trei cucoane l-ar fi educat altfel, cum ar fi arătat călătoria? Scrie 3-4 propoziții.', 2),
         ]),

    fisa(7, 'pp. 166-167',
         'Reper: Textul argumentativ vrea să convingă. În articolul Samanthei Fanelli, călătoriile te fac mai bun: '
         'devii mai independent, înțelegi că experiențele contează mai mult decât lucrurile, înveți să te descurci când '
         'ceva merge prost și înveți să prețuiești alte culturi.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Autoarea crede că o călătorie te poate schimba.', 'Călătoriile te fac mai dependent de alții.',
                 'Suvenirurile contează mai mult decât amintirile.', 'Neplăcerile de pe drum te învață să te adaptezi.',
                 'Autoarea dă ca exemple Colosseumul și Machu Picchu.', 'La final spune că o viață ajunge pentru toate locurile.')),
             T(2, 'Ce te învață călătoria?', 'Scrie, cu cuvintele tale, un exemplu din text.',
               ['Ce înveți', 'Exemplul din text'], [170, 340], gol(
                   'independența', 'ce contează în viață', 'să te adaptezi', 'să înțelegi alte culturi'), row_h=28),
         ],
         [
             T(3, 'Fapt sau opinie?', 'Scrie F (fapt) sau O (opinie).', ['Enunțul', 'F / O'], [440, 70], gol(
                 'Colosseumul se află la Roma.', 'Călătoriile te fac mai bun.', 'Machu Picchu a fost un oraș al incașilor.',
                 'Cea mai frumoasă țară e Italia.', 'Zborurile pot fi anulate.', 'Merită să călătorești singur.')),
             L(4, 'Argumentul tău', 'Scrie un argument propriu pentru ideea „Călătoriile te fac mai bun”, cu un exemplu din viața ta (3-4 propoziții).', 3),
         ], titlu='Textul argumentativ (Samantha Fanelli)'),

    fisa(8, 'pp. 168-169',
         'Reper (manual, p. 168): Textul argumentativ are o premisă (ipoteză), argumente susținute de exemple, uneori un '
         'contraargument, și o concluzie. Formule: de ierarhizare (în primul rând, apoi), de exemplificare (de exemplu, '
         'de pildă), de legătură (pentru că, deoarece), de concluzie (în concluzie, așadar).',
         [
             X(1, 'O carte în vacanță', ['Citește textul (scris pentru fișă).'] + LECTURA),
             T(2, 'Părțile textului', 'Completează după text.',
               ['', 'Din text'], [150, 360], gol(
                   'premisa', 'argumentul 1', 'exemplul', 'argumentul 2', 'contraargumentul', 'concluzia'), row_h=26),
         ],
         [
             T(3, 'Formulele', 'Ce rol are fiecare formulă în text?',
               ['Formula', 'Rolul'], [170, 340], gol('în primul rând', 'de exemplu', 'pe de altă parte', 'totuși', 'în concluzie')),
             X(4, 'Ordonează', [
                 'Scrie literele în ordinea unui text argumentativ: ______________________',
                 'a) Așadar, animalele de companie ne fac viața mai bună.',
                 'b) Cred că e bine ca un copil să aibă un animal de companie.',
                 'c) De pildă, de când am un cățel, ies zilnic la plimbare.',
                 'd) În primul rând, un animal te învață să fii responsabil.',
                 'e) În al doilea rând, te face să te miști mai mult.']),
             L(5, 'Premisa ta', 'Scrie premisa și două argumente pentru ideea: „E bine să avem o zi fără ecrane pe săptămână.”', 2),
         ]),

    fisa(9, 'pp. 170-171',
         'Reper: În fragmentul din „George și cheia secretă a Universului” de Lucy și Stephen Hawking, George și Annie '
         'zboară pe o cometă pe lângă Saturn. Annie, cam îngâmfată, îi explică planetele și gravitația, iar George ia pe '
         'furiș o rocă din inelele planetei.',
         [
             T(1, 'Știai sau nu?', 'Scrie A sau F, apoi semnul tău: C (confirmă ce știam), N (nou), X (contrazice), ? (neclar).',
               ['Afirmația', 'A / F', 'Semnul meu'], [330, 60, 120], gol3(
                   'Saturn e a doua planetă ca mărime.', 'Pământul e cea mai mare planetă.',
                   'Inelele lui Saturn sunt din gheață, bolovani, pietricele.', 'În jurul Soarelui se rotesc opt planete.',
                   'Jupiter e cea mai mică planetă.')),
             T(2, 'George sau Annie?', 'Scrie personajul (fapte repovestite).',
               ['Fapta', 'Personajul'], [360, 150], gol(
                   'spune că ea a văzut prima planeta Saturn', 'minte că știa ce loc are Saturn ca mărime',
                   'crede că Pământul e cea mai mare planetă', 'ia pe furiș o rocă și o bagă în buzunar',
                   'explică de ce cad lucrurile unele spre altele', 'se laudă cu cât de multe știe')),
         ],
         [
             T(3, 'Trăsături', 'Scrie o trăsătură și fapta sau vorba din care reiese.',
               ['Personajul', 'Trăsătura', 'Din ce reiese'], [100, 170, 240], gol3('George', 'Annie'), row_h=40),
             L(4, 'Călătoria ta cosmică', 'Descrie în 4-5 propoziții ce ai vedea zburând pe lângă altă planetă (Jupiter sau Marte), folosind o informație științifică pe care o știi.', 3),
         ]),

    fisa(10, 'pp. 172-174',
         'Reper (manual, p. 173): Limba română are peste 24 de milioane de vorbitori. Este limbă oficială în România, '
         'în Republica Moldova și în provincia Voivodina (Serbia) și una dintre limbile oficiale ale Uniunii Europene. '
         'Comunitățile de vorbitori din afara țării alcătuiesc diaspora.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Româna este limbă oficială doar în România.', 'Româna este una dintre limbile oficiale ale UE.',
                 'În Serbia, româna este limbă oficială în Voivodina.', 'Ziua Limbii Române se sărbătorește pe 31 august.',
                 'Cursuri de română pentru străini se țin în peste 50 de țări.',
                 '„Diaspora” înseamnă comunitatea din țara de origine.')),
             T(2, 'Unde se vorbește românește?', 'Dă exemple din manual.',
               ['', 'Exemple'], [200, 310], gol(
                   'limbă oficială', 'comunități în țări vecine (cu o regiune)', 'comunități în Europa de Vest',
                   'comunități pe alte continente'), row_h=28),
         ],
         [
             T(3, 'Ce spun textele?', 'Scrie tema și sentimentul transmis de fiecare text.',
               ['Textul', 'Tema', 'Sentimentul'], [140, 185, 185], gol3(
                   'Grigore Vieru', 'Nichita Stănescu', 'e-mailul Luminiței'), row_h=34),
             L(4, 'Zece cuvinte', 'Scrie cele mai frumoase zece cuvinte românești pentru tine și explică de ce l-ai ales pe primul.', 1),
             L(5, 'Răspuns pentru Luminița', 'Scrie-i Luminiței, în 4-5 rânduri, cum ai păstra tu limba română dacă ai locui în altă țară.', 2),
         ], titlu='Limba română în Europa'),

    fisa(12, 'pp. 176-177',
         'Reper (manual, p. 176): Actul de limbaj este un enunț rostit cu o intenție (a informa, a ruga, a promite, a '
         'interzice, a amenința) și care produce un efect asupra interlocutorului. Intenția se arată prin verbe (promit, '
         'rog), prin imperativ, prin „nu”, prin ton și gesturi. Actul e eficient dacă are efectul dorit.',
         [
             T(1, 'Ce intenție?', 'Scrie actul de limbaj: promisiune, interdicție, felicitare, recomandare, rugăminte, amenințare.',
               ['Enunțul', 'Actul de limbaj'], [340, 170], gol(
                   '„Îți promit că vin mâine.”', '„Nu călca pe iarbă!”', '„Felicitări pentru premiu!”',
                   '„Ți-aș recomanda să iei umbrela.”', '„Vă rog să închideți ușa.”', '„Dacă mai întârzii, nu mai vii cu noi!”')),
             T(2, 'Același enunț, altă intenție', 'Enunțul este „E ora nouă.” Ce intenție are vorbitorul în fiecare context?',
               ['Contextul', 'Intenția'], [300, 210], gol(
                   'mama, către copilul care se uită la televizor', 'un prieten care te așteaptă de la ora opt',
                   'răspunsul pentru un călător care întreabă cât e ceasul'), row_h=26),
         ],
         [
             T(3, 'Eficient sau nu?', 'Scrie E (eficient) sau I (ineficient) și de ce.',
               ['Situația', 'E / I', 'De ce'], [300, 60, 150], gol3(
                   'Radu cere un pix; colegul i-l dă.', 'I se spune lui Goe să nu scoată capul; îl scoate.',
                   'Ghidul anunță plecarea la 8; toți vin la timp.', 'Profesorul cere liniște; clasa vorbește mai departe.'),
               row_h=26),
             L(4, 'O replică, trei intenții', 'Scrie trei mini-situații în care „Mâine vorbim.” exprimă, pe rând, o promisiune, o amenințare și o amânare.', 3),
         ]),

    fisa(13, 'pp. 178-179',
         'Reper (manual, pp. 178-179): Parafraza reformulează cu propriile cuvinte ce a spus altcineva, păstrând sensul '
         '(cu sinonime sau prin reformulare completă). Informațiile explicite sunt spuse direct; cele implicite se '
         'deduc din context.',
         [
             T(1, 'Parafrazează', 'Spune același lucru cu alte cuvinte.',
               ['Enunțul', 'Parafraza ta'], [250, 260], gol(
                   'Trenul a întârziat din pricina ceții.', 'Ghidul ne-a sfătuit să stăm lângă grup.',
                   'Muzeul este închis lunea.', 'Biletele se cumpără doar de la casă.'), row_h=28),
             T(2, 'E o parafrază bună?', 'Enunțul inițial: „Hotelul are piscină, e lângă plajă și oferă micul-dejun.” Scrie DA sau NU și de ce.',
               ['Varianta', 'DA / NU', 'De ce'], [360, 60, 90], gol3(
                   '„Hotelul are piscină, e lângă plajă și oferă micul-dejun.”',
                   'Poți înota, ajungi repede la mare și primești micul-dejun.', 'Hotelul e scump și departe de mare.',
                   'Hotelul are piscină.'), row_h=26),
         ],
         [
             T(3, 'Explicit sau implicit?', 'Dialogul: „— Iar ai lăsat fereastra deschisă! Mi-e frig. — Închid acum.” Scrie E sau I.',
               ['Informația', 'E / I'], [400, 110], gol(
                   'Vorbitoarei îi e frig.', 'Fereastra e deschisă.', 'Nu e prima dată când se întâmplă.',
                   'Vorbitoarea vrea să se închidă fereastra.', 'Celălalt a înțeles ce i se cere.')),
             L(4, 'Destinația colegului', 'Parafrazează în scris ce ți-a povestit colegul despre destinația lui preferată de vacanță (4-5 propoziții).', 3),
         ]),

    fisa(14, 'pp. 180-181',
         'Reper (manual, pp. 180-181): Adjectivul poate fi propriu-zis sau provenit din participiu; variabil (cu patru, '
         'trei sau două forme) sau invariabil (eficace, vernil). Se acordă cu substantivul; articolul demonstrativ (cel, '
         'cea, cei, cele) îl leagă de el. Are grade de comparație (unele adjective nu au: unic, cosmic).',
         [
             X(1, 'Marte', ['Citește textul (scris pentru fișă).', MARTE]),
             T(2, 'Adjectivele din text', 'Scrie felul (propriu-zis sau din participiu) și gradul de comparație.',
               ['Adjectivul', 'Felul', 'Gradul'], [150, 190, 170], gol3(
                   'mică', 'roșiatică', 'prăfuită', 'stinși', 'cel mai înalt', 'trimise', 'vechi')),
         ],
         [
             T(3, 'Formele adjectivului', 'Scrie câte forme are adjectivul (sau „invariabil”) și care sunt.',
               ['Adjectivul', 'Nr. de forme', 'Formele'], [150, 110, 250], gol3(
                   'lung', 'rece', 'vesel', 'gri', 'românesc', 'bej')),
             X(4, 'Gradele de comparație', [
                 'Completează cu adjectivul din paranteză, la gradul cerut.',
                 'a) Jupiter e __________ (mare) decât Pământul. (comparativ de superioritate)',
                 'b) Mercur e __________ (mic) planetă. (superlativ relativ de superioritate)',
                 'c) Venus e __________ (luminos). (superlativ absolut de superioritate)',
                 'd) Neptun e __________ (îndepărtat) planetă de Soare. (superlativ relativ de superioritate)',
                 'e) Cometa e __________ (strălucitor) ca o stea. (comparativ de egalitate)']),
             L(5, 'Planeta ta', 'Descrie o planetă inventată în 4-5 propoziții, cu adjective la trei grade de comparație diferite. Subliniază-le.', 2),
         ]),

    fisa(15, 'pp. 182-183',
         'Reper (manual, p. 182): Adjectivul adjunct este atribut adjectival (determină un substantiv) sau nume '
         'predicativ (după verbul copulativ „a fi”, acordat cu subiectul). Adjectivul poate fi și centru, cu propriile '
         'determinări: complement prepozițional (dornic de aventură), indirect (recunoscător prietenilor), circumstanțial.',
         [
             T(1, 'Atribut sau nume predicativ?', 'Scrie AA (atribut adjectival) sau NP (nume predicativ).',
               ['Enunțul', 'Adjectivul', 'AA / NP'], [270, 120, 120], [
                   ['Călătoria lungă ne-a obosit.', 'lungă', ''],
                   ['Călătoria a fost lungă.', 'lungă', ''],
                   ['Am văzut un munte înzăpezit.', 'înzăpezit', ''],
                   ['Muntele era înzăpezit.', 'înzăpezit', ''],
                   ['Copiii veseli cântă.', 'veseli', '']]),
             T(2, 'Adjectivul-centru', 'Scrie determinarea adjectivului și funcția ei.',
               ['Grupul', 'Determinarea', 'Funcția'], [170, 150, 190], gol3(
                   'plin de apă', 'credincios stăpânului', 'roșu la față', 'obosit de dimineață', 'alb ca zăpada')),
         ],
         [
             X(3, 'Completează cu adjective', [
                 'a) Excursia a fost __________ și __________. (nume predicativ multiplu)',
                 'b) Ne-am cazat într-o cabană __________. (atribut adjectival)',
                 'c) Eram __________ de drum. (adjectiv cu complement prepozițional)']),
             L(4, 'Reclamă de vacanță', 'Scrie o reclamă de 4 propoziții pentru o destinație, cu cel puțin trei atribute adjectivale și două nume predicative.', 3),
         ]),

    fisa(16, 'pp. 184-185',
         'Reper (manual, p. 184): Adverbul determină un verb și arată împrejurările acțiunii. Adverbele pot fi de loc '
         '(aici, sus, departe), de timp (acum, mâine, mereu) sau de mod (bine, repede, încet). Adverbul nu își schimbă '
         'forma.',
         [
             X(1, 'La munte', ['Citește textul (scris pentru fișă).', MUNTE]),
             T(2, 'Adverbele din text', 'Scrie felul adverbului și verbul pe care îl determină.',
               ['Adverbul', 'Felul', 'Verbul determinat'], [140, 140, 230], gol3(
                   'ieri', 'devreme', 'încet', 'mereu', 'sus', 'repede', 'departe', 'acum')),
         ],
         [
             X(3, 'Intrusul', [
                 'Încercuiește adverbul care nu se potrivește în serie și spune de ce.',
                 'a) aici, acolo, jos, mâine    b) bine, frumos, încet, afară    c) azi, ieri, curând, alene']),
             T(4, 'Alt adverb, același fel', 'Înlocuiește adverbul cu altul de același fel, care schimbă sensul.',
               ['Enunțul', 'Enunțul nou'], [250, 260], gol('Plecăm acum.', 'Stau aici.', 'Vorbește tare.', 'Vine mereu.')),
             L(5, 'Jurnal de călătorie', 'Scrie 4-5 propoziții dintr-un jurnal de călătorie, cu cel puțin un adverb de loc, unul de timp și unul de mod. Subliniază-le.', 2),
         ]),

    fisa(17, 'pp. 186-187',
         'Reper (manual, pp. 186-187): Adverbul are aceleași grade de comparație ca adjectivul (bine, la fel de bine, '
         'mai bine, cel mai bine, foarte bine), dar multe adverbe nu au grade (acolo, ieri). Adverbul poate fi '
         'circumstanțial de loc, de timp sau de mod; semiadverbele (mai, tot, cam, doar) nu au funcție sintactică.',
         [
             T(1, 'Gradul adverbului', 'Scrie gradul de comparație.',
               ['Enunțul', 'Gradul'], [300, 210], gol(
                   'Alergi mai repede decât mine.', 'Cântă cel mai frumos.', 'Scrie foarte citeț.',
                   'Vorbește la fel de încet ca tine.', 'A răspuns mai puțin sigur.', 'Pleacă devreme.')),
             T(2, 'Funcția adverbului', 'Scrie funcția (sau „fără funcție”).',
               ['Enunțul', 'Adverbul', 'Funcția'], [230, 100, 180], [
                   ['Ne vedem mâine.', 'mâine', ''],
                   ['Stăm afară.', 'afară', ''],
                   ['Scrie frumos.', 'frumos', ''],
                   ['Îl tot aștept.', 'tot', ''],
                   ['Mai vreau o prăjitură.', 'mai', ''],
                   ['Au plecat departe.', 'departe', '']]),
         ],
         [
             X(3, 'Adverbul „ușor”, la toate gradele', [
                 'pozitiv: ușor    comparativ de egalitate: __________________',
                 'comparativ de superioritate: __________________    de inferioritate: __________________',
                 'superlativ relativ de superioritate: __________________    de inferioritate: __________________',
                 'superlativ absolut de superioritate: __________________    de inferioritate: __________________']),
             L(4, 'Clasamentul', 'Scrie 4 propoziții despre cum aleargă patru colegi la cros, cu adverbul „repede” la patru grade diferite.', 3),
         ]),

    fisa(18, 'pp. 188-189',
         'Reper (manual, pp. 188-189): Vorbirea directă reproduce întocmai cuvintele cuiva; vorbirea indirectă le '
         'relatează: dispare linia de dialog, apare un verb de declarație urmat de că, să, dacă, unde, când; persoanele '
         'I și a II-a devin a III-a, imperativul devine conjunctiv, vocativul devine acuzativ sau dativ, exclamațiile dispar.',
         [
             T(1, 'Directă sau indirectă?', 'Scrie D (vorbire directă) sau I (vorbire indirectă).',
               ['Enunțul', 'D / I'], [440, 70], gol(
                   'Mama a spus: „Vino acasă!”', 'Mama i-a spus să vină acasă.', '„— Unde e biletul? întrebă conductorul.”',
                   'Conductorul a întrebat unde e biletul.', 'Radu a zis că e obosit.')),
             T(2, 'Ce se schimbă?', 'Compară: „— Andrei, vino repede aici! strigă mama.” → „Mama îi strigă lui Andrei să vină repede acolo.”',
               ['Ce era în vorbirea directă', 'Ce devine în vorbirea indirectă'], [250, 260], gol(
                   'vocativul „Andrei”', 'imperativul „vino”', 'adverbul „aici”', 'semnul exclamării', 'linia de dialog')),
         ],
         [
             X(3, 'Transformă', [
                 'Trece în vorbire indirectă.',
                 'a) Ioana întreabă: „Când pleacă trenul?” → ______________________________________',
                 'b) Tata îmi spune: „Ia-ți geaca!” → ______________________________________',
                 'c) Bunicul zice: „Sunt obosit.” → ______________________________________',
                 'd) Profesorul ne-a spus: „Mâine mergem la muzeu.” → ______________________________________']),
             L(4, 'O conversație de ieri', 'Relatează în vorbire indirectă o conversație de ieri (4-5 propoziții), cu cel puțin trei verbe de declarație diferite.', 3),
         ]),

    fisa(19, 'p. 189',
         'Reper (manual, p. 189): La trecerea în vorbirea indirectă folosești verbe de declarație variate (a întreba, '
         'a răspunde, a ruga, a exclama, a adăuga), elimini semnele dialogului și enunțurile imperative, exclamative, '
         'interogative și reproduci cât mai fidel spusele personajelor.',
         [
             X(1, 'Excursia', ['Citește dialogul (scris pentru fișă).'] + EXCURSIE),
             L(2, 'Transformă', 'Trece dialogul de la ex. 1 în vorbire indirectă.', 3),
         ],
         [
             T(3, 'Verbul potrivit', 'Scrie un verb de declarație potrivit fiecărei situații.',
               ['Situația', 'Verbul de declarație'], [300, 210], gol(
                   'o cerere politicoasă', 'o întrebare', 'un strigăt de bucurie', 'un răspuns', 'o completare a spuselor')),
             T(4, 'Corectează transformarea', 'Scrie varianta corectă.',
               ['Greșit', 'Corect'], [270, 240], gol(
                   'Mara a întrebat unde mergem în excursie?', 'Doamna a zis să vă luați haine groase.',
                   'Vlad a întrebat: dacă vor vedea castelul.', 'Clasa a strigat: „Super!”'), row_h=28),
         ]),

    fisa(20, 'pp. 190-191',
         'Recapitulare (manual, pp. 154-179): schița, spațiul și timpul, naratorul, dialogul și verbele de declarație, '
         'semnele de punctuație din dialog, personajele, textul argumentativ, actele de limbaj, parafraza.',
         [
             X(1, 'În gară', ['Citește textul (scris pentru fișă).'] + GARA),
             T(2, 'Timp, spațiu, narator', 'Completează.',
               ['', 'Din text'], [170, 340], gol(
                   'momentul', 'locul', 'destinația', 'naratorul și persoana'), row_h=26),
         ],
         [
             T(3, 'Verbele de declarație', 'Scrie poziția verbului față de replică și ce arată el.',
               ['Verbul', 'Poziția', 'Ce arată'], [120, 130, 260], gol3('întrebă', 'răspunse', 'arătă', 'șopti')),
             T(4, 'Replicile', 'Completează.',
               ['', 'Răspunsul'], [220, 290], gol(
                   'o replică fără verb de declarație', 'dialog sau replici independente?', 'o trăsătură a bunicului',
                   'ce simte Ilinca la început'), row_h=26),
             L(5, 'În tren', 'Continuă textul cu un dialog de 4-5 replici în tren, cu verbe de declarație variate.', 2),
         ]),

    fisa(21, 'pp. 190-191',
         'Recapitulare (manual, pp. 180-189): adjectivul (feluri, forme, grade, funcții), adverbul (feluri, grade, '
         'funcții), vorbirea directă și indirectă, textul argumentativ.',
         [
             X(1, 'Cinci enunțuri', [
                 '(1) Ilinca și bunicul așteptau trenul, cu o umbrelă verde.    (2) Un domn cu o valiză uriașă stătea aproape.',
                 '(3) Timpul trece repede când te joci.    (4) Bunicul era cel mai calm călător din gară.',
                 '(5) Trenul a sosit mai devreme decât credeam.']),
             T(2, 'Adjectivele', 'Completează.',
               ['Adjectivul (enunțul)', 'Felul, nr. de forme', 'Gradul', 'Funcția'], [140, 150, 120, 100], gol4(
                   'verde (1)', 'uriașă (2)', 'cel mai calm (4)'), row_h=26),
             T(3, 'Adverbele', 'Completează.',
               ['Adverbul (enunțul)', 'Felul', 'Gradul', 'Funcția'], [150, 100, 150, 110], gol4(
                   'aproape (2)', 'repede (3)', 'mai devreme (5)'), row_h=26),
         ],
         [
             X(4, 'Vorbire indirectă', [
                 'Trece în vorbire indirectă replicile din textul „În gară”.',
                 'a) „— Cât mai avem? întrebă fetița.” → ______________________________________',
                 'b) „— Șapte minute, răspunse bunicul.” → ______________________________________',
                 'c) „— El pleacă la Polul Nord! râse Ilinca.” → ______________________________________']),
             L(5, 'Text argumentativ scurt', 'Scrie o premisă, două argumente cu exemple și o concluzie pentru ideea: „E mai frumos să călătorești cu trenul decât cu mașina.”', 3),
         ]),
]
