# Fișe de exerciții, clasa a VII-a, Unitatea IV „Cu noroc, fără noroc”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 7, pp. 124-163). Textele
# fără autor sunt create pentru fișe; citatele scurte sunt doar din autori în
# domeniul public (I.L. Caragiale, Anton Pann); Stacey Pierson, Ion Ghinoiu,
# povestea „Cerșetorul și regele” (traducerea din manual), Constantin Chiriță
# sunt doar parafrazați. Lecția 24 (evaluarea) nu are fișă.
# Rezolvările: notite-profesor/clasa-7/unitatea-4/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-7-unitatea-4.py

SUB = 'Clasa a VII-a · Unitatea IV, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 7, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-7/unitatea-4/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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
    fisa(1, 'pp. 124-129',
         'Reper (manual, pp. 124-129): „Două loturi” de I.L. Caragiale urmărește încercarea funcționarului Lefter '
         'Popescu de a găsi două bilete de loterie pe care le crede câștigătoare. Textul are un final deschis.',
         [
             T(1, 'Informațiile esențiale', 'Răspunde scurt, după text.',
               ['Întrebarea', 'Răspunsul'], [270, 240], gol(
                   'Cu ce bani a cumpărat Lefter biletele?', 'Ce parte din câștig îi promite căpitanului?',
                   'Cui a dat madam Popescu jacheta? Pe ce?', 'Cine îi însoțește pe Lefter la chivuțe?',
                   'Unde găsește Lefter, în sfârșit, biletele?', 'Ce scrie Lefter după ce le găsește?',
                   'Ce află Lefter la bancher?')),
             T(2, 'Adevărat sau fals?', 'Scrie A (adevărat) sau F (fals).', AF, [440, 70], gol(
                 'Lefter e convins, de la început, că va avea noroc.', 'Țâca purta jacheta cenușie pe sub haine.',
                 'Biletele erau cusute în căptușeala jachetei.', 'Șeful îl amenință pe Lefter că îl dă afară.',
                 'Numerele erau câștigătoare, dar fiecare la cealaltă loterie.')),
         ],
         [
             T(3, 'Forme vechi, forme literare', 'Scrie forma literară de azi a cuvintelor din text.',
               ['Forma din text', 'Forma literară'], [255, 255], gol(
                   'canțilerie', 'minț (nu minț, boiarule)', 'viu (mâine viu negreșit)', 'd-asupra', 'pept',
                   'acuma', 'mesii (marmura mesii)', 'deștele', 'mâne'), row_h=20),
             T(4, 'Cuvinte din text', 'Explică sensul și scrie un enunț al tău.',
               ['Cuvântul', 'Sensul', 'Enunțul meu'], [110, 170, 230], gol3(
                   'a canoni', 'sardonic', 'laconic', 'impiegat', 'viceversa'), row_h=26),
         ], titlu='Două loturi de I.L. Caragiale'),

    fisa(2, 'pp. 130-131',
         'Reper (manual, p. 130): Detaliile de viață concretă și indicii precisi de timp și spațiu dau iluzia unei lumi '
         'reale. Autorul poate schimba ordinea momentelor subiectului, poate dialoga cu cititorul și poate propune '
         'mai multe finaluri.',
         [
             T(1, 'Locuri și întâmplări', 'Scrie ce se întâmplă în fiecare loc.',
               ['Locul', 'Ce se întâmplă acolo'], [180, 330], gol(
                   'casa din strada Pacienții', 'berăria', 'mahalaua Farfurigiilor', 'secția de poliție', 'ministerul',
                   'la bancher'), row_h=26),
             T(2, 'Indicii de timp', 'Ce aflăm din fiecare indiciu?',
               ['Indiciul din text', 'Ce aflăm'], [200, 310], gol(
                   '„Era seară”', '„de trei zile”', '„Peste un ceas, pe-nserate”', '„Pe la șapte și jumătate”',
                   '„La opt și cinci”', '„După zece minute”')),
         ],
         [
             T(3, 'Ordinea din text și ordinea reală', 'Numerotează evenimentele în cele două ordini (1-6).',
               ['Evenimentul', 'În text', 'În realitate'], [330, 90, 90], gol3(
                   'Soții Popescu caută biletele de trei zile.', 'Lefter cumpără biletele cu bani împrumutați.',
                   'Pandele aduce vestea câștigului.', 'Lefter își amintește de jacheta cenușie.',
                   'Lefter își scrie demisia.', 'Bancherul rostește cuvântul „viceversa”.')),
             L(4, 'Povestea, azi', 'Rescrie situația inițială ca și cum s-ar petrece azi (un loz, un telefon, un oraș de azi), '
               'în 5-6 rânduri.', 2),
         ]),

    fisa(3, 'pp. 132-134',
         'Reper (manual, p. 133): Autorul construiește un emițător fictiv, naratorul, care se poate adresa unui cititor '
         'imaginar. Personajul principal e construit din date biografice, mediu, relații cu ceilalți, comportament, '
         'reacții, limbaj; mijloacele de caracterizare sunt directe și indirecte.',
         [
             T(1, 'Vocea naratorului', 'Scrie R (relatare), C (comentariu al naratorului) sau A (adresare către cititor).',
               ['Fragmentul', 'R / C / A'], [430, 80], gol(
                   '„Dar ce au pierdut? ce caută?”', '„D. Lefter sare să deschidă”', '„Așa și e; e bolnav.”',
                   '„Cititorul a înțeles acuma ce caută”', '„Frumoase farfurii!”',
                   '„prefer să vă spun drept”')),
             T(2, 'Personajele', 'Scrie rolul fiecăruia și dacă e principal, secundar sau episodic.',
               ['Personajul', 'Rolul în întâmplare', 'Felul'], [130, 270, 110], gol3(
                   'Lefter Popescu', 'madam Popescu', 'căpitanul Pandele', 'comisarul Turtureanu', 'Țâca', 'Mitică',
                   'bancherul')),
         ],
         [
             T(3, 'Trăsătura și mijlocul', 'Scrie trăsătura lui Lefter și mijlocul de caracterizare.',
               ['Fragmentul', 'Trăsătura', 'Mijlocul'], [250, 130, 130], gol3(
                   '„— Taci! strigă crunt d. Lefter”', '„intră foarte umilit”',
                   '„răspunde fără afectare d. Popescu”', '„Îmi cunosc eu norocul!”'), row_h=26),
             T(4, 'Emoțiile lui Lefter', 'Scrie emoția și un gest sau o vorbă care o arată.',
               ['Momentul', 'Emoția', 'Dovada'], [170, 130, 210], gol3(
                   'vestea câștigului', 'povestea jachetei', 'la chivuțe', 'găsirea biletelor', 'la bancher'), row_h=26),
         ]),

    fisa(4, 'p. 135',
         'Reper (manual, p. 135): Ironia e o trăsătură a stilului lui Caragiale; se realizează prin aluzie, exagerare, '
         'diminuare, contrast. Sub aparența comică, Lefter pare victima unui joc al hazardului.',
         [
             T(1, 'Procedeele ironiei', 'Scrie procedeul (exagerare, contrast, diminuare, aluzie) și de ce e amuzant.',
               ['Fragmentul', 'Procedeul', 'De ce e amuzant'], [230, 90, 190], gol3(
                   '„cointeresat cu cinci la sută”', '„intră ca o furtună”', '„Sănătatea mea prea delicată”',
                   '„a scuturat în fine jugul nesuferitei robii”', '„se roșea, se-ngălbenea”'), row_h=28),
             T(2, 'Ce poate sugera', 'Scrie o semnificație posibilă.',
               ['Elementul din text', 'Ce poate sugera'], [200, 310], gol(
                   'jacheta cenușie', 'carnetul căpitanului', 'sertarul de la minister', 'corăbiile scufundate din final',
                   'titlul „Două loturi”'), row_h=26),
         ],
         [
             T(3, 'Pentru sau împotrivă', 'Scrie câte un argument pentru și unul împotriva afirmației.',
               ['Afirmația', 'Pentru', 'Împotrivă'], [190, 160, 160], gol3(
                   'Jocurile de noroc aduc fericire.', 'Un talisman te poate ajuta.',
                   'Ghinionul se poate evita.'), row_h=44),
             L(4, 'Opinia mea', 'Norocul sau neatenția l-a pierdut pe Lefter? Scrie 6-8 rânduri, cu două argumente din text.', 3),
         ]),

    fisa(5, 'pp. 136-138',
         'Reper (manual, p. 138): Enciclopedia e o lucrare de referință cu informații sistematizate, generală sau pe un '
         'domeniu. Textul enciclopedic e, de regulă, multimodal: explicațiile sunt însoțite de imagini, iar online și de '
         'sunete, animații, hiperlinkuri.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F, după articolul „Porțelanul”.', AF, [440, 70], gol(
                 'Porțelanul s-a fabricat prima oară în epoca Sui.', 'Jingdezhen devine centrul porțelanului sub Yuan și Ming.',
                 'Porțelanul chinezesc e făcut din caolin și piatră de porțelan.', 'Cuprul dădea nuanțe de albastru.',
                 'Pagoda de Porțelan se află la Beijing.', 'Ceramica de Delft s-a inspirat din porțelanul chinezesc.')),
             T(2, 'Organizarea articolului', 'Scrie ce informație găsești în fiecare parte.',
               ['Subtitlul', 'Ce aflu'], [200, 310], gol(
                   'Istoria', 'Tehnologii și decorațiuni', 'Forme și funcții', 'Răspândirea porțelanului în lume',
                   'Bibliografie')),
         ],
         [
             T(3, 'Ce fel de text?', 'Clasifică fiecare text.',
               ['Textul', 'Continuu / discontinuu', 'Mono- / multimodal'], [210, 150, 150], gol3(
                   'un articol de enciclopedie cu fotografii', 'un orar al clasei', 'o poezie fără ilustrații',
                   'o hartă cu legendă', 'o pagină web cu video și linkuri', 'un bilet de tren')),
             T(4, 'Termeni de specialitate', 'Explică termenul cu cuvintele tale și spune unde ai găsit explicația.',
               ['Termenul', 'Explicația mea', 'Unde am găsit-o'], [100, 280, 130], gol3(
                   'caolin', 'glazură', 'translucid', 'cobalt'), row_h=26),
         ], titlu='Textul multimodal. Enciclopedia (I)'),

    fisa(6, 'pp. 138-139',
         'Reper (manual, pp. 138-139): Articolul enciclopedic trimite la lucrările folosite la documentare. Wikipedia e '
         'o enciclopedie online la care oricine poate contribui, deci informațiile se verifică și din alte surse. '
         'Sursele se citează după reguli precise.',
         [
             T(1, 'Dicționar sau enciclopedie?', 'Scrie D (dicționar explicativ) sau E (enciclopedie).',
               ['Trăsătura', 'D / E'], [440, 70], gol(
                   'dă pe scurt sensurile unui cuvânt', 'prezintă istoria și întrebuințările unui obiect',
                   'are imagini, hărți și bibliografie', 'indică genul și forma de plural a cuvântului',
                   'poate avea mai multe volume, pe domenii')),
             T(2, 'Citarea sursei', 'Scrie notele de subsol după regulile de la p. 139 (date inventate pentru exercițiu). '
               'Sursa 1: cartea lui Ana Pop, Meșteșuguri de altădată, Iași, Editura Exemplu, 2020, p. 45. Sursa 2: articolul '
               'online al lui Dan Ionescu, Ceramica de Horezu, www.exemplu.ro, citit la 3 martie 2025.',
               ['Sursa', 'Nota de subsol'], [90, 420], gol('sursa 1', 'sursa 2'), row_h=40),
         ],
         [
             T(3, 'Poți avea încredere?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Orice articol de pe Wikipedia e corect.', 'Oricine poate modifica un articol de pe Wikipedia.',
                 'Informația găsită online se verifică și în alte surse.', 'Un articol cu bibliografie e mai ușor de verificat.')),
             L(4, 'Articolul meu', 'Scrie un articol enciclopedic de 6-8 rânduri despre un obiect artizanal pe care îl cunoști, '
               'cu un titlu și două subtitluri.', 3),
         ], titlu='Textul multimodal. Enciclopedia (II)'),

    fisa(7, 'pp. 140-141',
         'Reper (manual, pp. 140-141): „Cerșetorul și regele” e o poveste populară indiană, cu indici vagi de timp și '
         'spațiu, cu un narator omniscient și o învățătură despre noroc și generozitate. Se compară cu „Două loturi”.',
         [
             T(1, 'Ordinea întâmplărilor', 'Numerotează întâmplările (1-6), în ordinea din poveste.',
               ['Întâmplarea', 'Nr.'], [440, 70], gol(
                   'Cerșetorul găsește seara un bob de aur în traistă.', 'Un rege sosește în sat într-o caleașcă de aur.',
                   'Regele se oprește și îi cere cerșetorului ceva.', 'Cerșetorul crede că norocul lui a sosit.',
                   'Cerșetorul plânge că n-a dat tot orezul.', 'Cerșetorul îi dă regelui un singur bob de orez.')),
             T(2, 'Două texte, față în față', 'Completează comparația.',
               ['Criteriul', '„Două loturi”', '„Cerșetorul și regele”'], [130, 190, 190], gol3(
                   'tipul textului', 'timpul și spațiul', 'personajul principal', 'ce pierde personajul',
                   'cum reacționează', 'naratorul'), row_h=26),
         ],
         [
             T(3, 'Ce s-ar fi întâmplat dacă...', 'Imaginează urmarea și spune ce învățătură ar avea.',
               ['Situația', 'Urmarea', 'Învățătura'], [170, 180, 160], gol3(
                   'i-ar fi dat tot orezul', 'nu i-ar fi dat nimic', 'ar fi fugit de rege'), row_h=40),
             L(4, 'Morala poveștii', 'Formulează în 2-3 enunțuri învățătura poveștii și dă un exemplu din viața de azi.', 2),
         ], titlu='Cerșetorul și regele'),

    fisa(8, 'pp. 142-143',
         'Reper (manual, p. 143): Mitologia românească are ființe fabuloase: personificări ale timpului, ale forțelor '
         'naturii, ale înțelepciunii și ale sorții, duhuri, personaje de basm, plante și animale miraculoase. Mărțișorul '
         'protejează la începutul anului agrar; Baba-Dochia e timpul vechi, care moare simbolic.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F, după fragmentul de la p. 142.', AF, [440, 70], gol(
                 'Mărțișorul era, la origine, un șnur din două fire.', 'Pe la 1900, mărțișorul se dăruia doar fetelor.',
                 'La sfârșit, mărțișorul se agăța pe un pom înflorit.', 'Dochia poartă nouă sau douăsprezece cojoace.',
                 'Dochia îngheață din cauza unei secete.', 'Obiceiul e atestat doar la nordul Dunării.')),
             T(2, 'Făpturi din mitologia românească', 'Scrie categoria fiecărei făpturi, după Repere.',
               ['Făptura', 'Categoria'], [180, 330], gol(
                   'Baba-Dochia', 'Muma-Pădurii', 'ursitoarele', 'ielele', 'Sfarmă-Piatră', 'Piaza-Rea', 'mătrăguna',
                   'zburătorul'), row_h=20),
         ],
         [
             T(3, 'Dată fixă sau mobilă?', 'Scrie F (dată fixă) sau M (dată mobilă).',
               ['Sărbătoarea', 'F / M'], [440, 70], gol(
                   'Mărțișorul (1 martie)', 'Floriile', 'Paștele', 'Sânzienele (24 iunie)', 'Rusaliile', 'Boboteaza (6 ianuarie)')),
             L(4, 'Mărțișorul meu', 'Descrie în 5-6 rânduri un mărțișor pe care l-ai face: materialele, simbolul, cui l-ai dărui și de ce.', 2),
         ], titlu='Baba-Dochia și tradiția mărțișorului'),

    fisa(9, 'p. 144',
         'Reper (manual, p. 144): Textul narativ oral are: prezentarea împrejurărilor (cine, când, unde), desfășurarea '
         'întâmplărilor, deznodământul și evaluarea (ce semnificație are). Povestitorul poate reveni în prezent: '
         '„Cam așa a fost.”',
         [
             T(1, 'Părțile narațiunii orale', 'Scrie partea: împrejurări, desfășurare, deznodământ, evaluare, revenire.',
               ['Enunțul (poveste scrisă pentru fișă)', 'Partea'], [360, 150], gol(
                   'Sâmbăta trecută eram cu fratele meu în parc.', 'Deodată, un câine mare ne-a luat mingea.',
                   'Am fugit după el până la lac.', 'Până la urmă, stăpânul lui ne-a adus mingea înapoi.',
                   'De atunci știu că nu orice câine mare e rău.', 'Cam așa a fost.')),
             T(2, 'Pregătesc povestea mea', 'Notează pe scurt o întâmplare norocoasă trăită de tine.',
               ['Întrebarea', 'Povestea mea'], [170, 340], gol(
                   'Cine? Când? Unde?', 'Ce s-a întâmplat mai întâi?', 'Ce s-a întâmplat apoi?', 'Cum s-a terminat?',
                   'Ce semnificație are?'), row_h=26),
         ],
         [
             T(3, 'Ascultătorul evaluează', 'Ascultă povestea colegului și completează.',
               ['Criteriul', 'DA / NU', 'Observația mea'], [230, 70, 210], gol3(
                   'detalii despre persoane, loc, timp', 'o succesiune de acțiuni cu deznodământ',
                   'persoana I sau a III-a, semnificația întâmplării', 'o povestire expresivă, interesantă')),
             L(4, 'Situații narative', 'Propune trei situații pe tema unității (o coincidență, o pierdere, un câștig neașteptat).', 2),
         ]),

    fisa(10, 'p. 145',
         'Reper (manual, p. 145): Legătura dintre enunțurile unui text oral se face prin repetare (de cuvinte sau de '
         'structuri), prin reformulare (sinonime, adjectiv sau verb transformat în substantiv, altă formă a verbului) și '
         'prin conectori (confirmare, cauză, concesie, rectificare, concluzie, adaos, schimbarea temei).',
         [
             T(1, 'Reformulează', 'Reformulează enunțul prin procedeul cerut.',
               ['Enunțul', 'Procedeul', 'Varianta ta'], [180, 120, 210], [
                   ['Satul era liniștit.', 'adjectiv → substantiv', ''],
                   ['E periculos să înoți după masă.', 'verb → substantiv', ''],
                   ['Clasa noastră a organizat o expoziție.', 'altă formă a verbului', ''],
                   ['Bunicul locuia într-o casă veche.', 'sinonime', ''],
                   ['Elevii au vizitat muzeul.', 'altă formă a verbului', '']], row_h=26),
             T(2, 'Ce exprimă conectorul?', 'Scrie ce exprimă conectorul (cuvântul sau grupul de legătură).',
               ['Enunțurile (scrise pentru fișă)', 'Exprimă'], [380, 130], gol(
                   'Plouă. Totuși, mergem la meci.', 'Am învățat mult; așadar, sunt liniștit.',
                   'Mi-a plăcut filmul. În plus, actorii au fost buni.', 'Tu ai citit cartea, iar eu am văzut filmul.',
                   'Într-adevăr, a fost o zi norocoasă.', 'A întârziat. De fapt, a venit la timp, la altă sală.',
                   'Nu m-a sunat, pentru că și-a pierdut telefonul.')),
         ],
         [
             L(3, 'Leagă enunțurile', 'Rescrie ca text legat, cu trei conectori diferiți: Am găsit un trifoi cu patru foi. '
               'L-am păstrat într-o carte. Nu cred în talismane. Mi-a plăcut forma lui. L-am dăruit surorii mele.', 2),
             L(4, 'Repetarea', 'Scrie două enunțuri legate prin repetarea unui cuvânt și două legate prin repetarea '
               'unei structuri.', 2),
         ]),

    fisa(11, 'pp. 146-147',
         'Reper (manual, pp. 146-147): Pronumele personal are persoană, număr, gen (la persoana a III-a), caz și forme '
         'accentuate și neaccentuate (clitice). Pronumele de politețe arată respectul. Pronumele reflexiv are aceeași '
         'persoană și același număr cu verbul; forme proprii doar la persoana a III-a (sine, se, sie, își).',
         [
             T(1, 'Pronumele personale', 'Enunțuri: (1) Eu i-am dăruit Mariei un mărțișor. (2) Ea mi-a mulțumit. '
               '(3) L-am văzut pe Andrei la atelier. (4) Lor le place să picteze.',
               ['Pronumele', 'Persoana, numărul', 'Cazul', 'Funcția'], [110, 130, 110, 160], gol4(
                   'Eu (1)', 'i- (1)', 'Ea (2)', 'mi- (2)', 'L- (3)', 'Lor (4)')),
             T(2, 'Personal sau reflexiv?', 'Scrie P (personal) sau R (reflexiv).',
               ['Enunțul', 'P / R'], [440, 70], gol(
                   'Mă spăl pe mâini.', 'Mă cheamă mama.', 'Îți faci tema.', 'Îți dau o carte.', 'Ne pregătim de concurs.',
                   'Ne ajută vecinul.', 'Își cumpără un bilet.')),
         ],
         [
             T(3, 'Politețea', 'Înlocuiește pronumele cu un pronume de politețe; scrie persoana și numărul.',
               ['Enunțul', 'Varianta politicoasă', 'Pers., nr.'], [170, 240, 100], gol3(
                   'Tu ai venit la curs?', 'El ne-a ajutat.', 'Ea știe răspunsul.', 'Ei au plecat devreme.'), row_h=26),
             T(4, 'Scrie corect', 'Corectează scrierea pronumelor.',
               ['Enunțul greșit', 'Varianta corectă'], [255, 255], gol(
                   'Mia spus că vine.', 'Lam întâlnit ieri.', 'Ia dat un mărțișor.', 'Și-a luat haina și sa dus.',
                   'Nea chemat la el.')),
         ]),

    fisa(12, 'pp. 148-149',
         'Reper (manual, pp. 148-149): Pronumele posesiv (al meu, a ta, ai noștri, alor voștri) înlocuiește și '
         'posesorul, și obiectul posedat. Articolul arată obiectul posedat, forma specifică arată posesorul. Când '
         'determină un substantiv, e adjectiv pronominal posesiv (atribut adjectival).',
         [
             T(1, 'Posesorul și obiectul', 'Completează pentru fiecare pronume posesiv.',
               ['Pronumele', 'Posesorul (câți, persoana)', 'Obiectul posedat (câte, genul)'], [110, 200, 200], gol3(
                   'ale mele', 'al tău', 'a sa', 'ai voștri', 'alor noștri', 'a voastră')),
             T(2, 'Pronume sau adjectiv?', 'Scrie P (pronume posesiv) sau A (adjectiv pronominal posesiv).',
               ['Enunțul', 'Cuvântul', 'P / A'], [300, 120, 90], [
                   ['Cartea mea e nouă.', 'mea', ''], ['A mea e nouă.', 'a mea', ''],
                   ['Prietenii tăi au venit.', 'tăi', ''], ['Ai tăi au venit.', 'ai tăi', ''],
                   ['Casa noastră e aproape.', 'noastră', ''], ['Mă gândesc la ale noastre.', 'ale noastre', '']]),
         ],
         [
             T(3, 'Cazul și funcția', 'Scrie cazul și funcția sintactică a pronumelui posesiv.',
               ['Enunțul', 'Cazul', 'Funcția'], [220, 120, 170], gol3(
                   'Ai mei sunt acasă.', 'Cana este a ta.', 'Îi aștept pe ai tăi.', 'Le-am scris alor noștri.',
                   'Vorbim despre ale voastre.', 'Stau lângă ai mei.')),
             T(4, 'Scrie corect', 'Corectează greșelile; dacă forma e corectă, scrie „corect”.',
               ['Forma', 'Varianta corectă'], [255, 255], gol(
                   'colega mia', 'prietenii voștrii', 'a-i mei', 'cartea sa a lui', 'Le-am spus alor tăi.')),
         ]),

    fisa(13, 'pp. 150-151',
         'Reper (manual, pp. 150-151): Pronumele demonstrativ poate fi de apropiere (acesta, ăsta), de depărtare '
         '(acela, ăla), de identitate (același), de diferențiere (celălalt); cel, cea, cei, cele urmate de un atribut '
         'sunt pronume semiindependente. Lângă un substantiv, cu care se acordă, devine adjectiv (atribut adjectival).',
         [
             T(1, 'Felul pronumelui demonstrativ', 'Scrie felul și varianta (scrisă sau vorbită).',
               ['Pronumele', 'Felul', 'Scris / vorbit'], [140, 220, 150], gol3(
                   'acesta', 'ăla', 'aceeași', 'ceilalți', 'astea', 'aceluia')),
             T(2, 'Pronume sau adjectiv?', 'Scrie P (pronume) sau A (adjectiv pronominal demonstrativ).',
               ['Enunțul', 'Cuvântul', 'P / A'], [300, 120, 90], [
                   ['Aceasta e casa mea.', 'Aceasta', ''], ['Casa aceasta e veche.', 'aceasta', ''],
                   ['Acel băiat e vecinul meu.', 'Acel', ''], ['L-am văzut pe acela.', 'acela', ''],
                   ['Celălalt pix scrie mai bine.', 'Celălalt', ''], ['Dă-mi-l pe celălalt!', 'celălalt', '']]),
         ],
         [
             T(3, 'Valorile lui „cel”', 'Scrie: pronume demonstrativ, adjectiv demonstrativ sau articol demonstrativ.',
               ['Enunțul', 'Valoarea lui cel / cea / cele'], [300, 210], gol(
                   'Cel de lângă ușă e fratele meu.', 'Fata cea harnică a câștigat.', 'Pe cel deal trece un voinic.',
                   'E cel mai bun elev din clasă.', 'Cele spuse de tine sunt adevărate.')),
             T(4, 'Forma corectă', 'Alege forma corectă.',
               ['Variantele', 'Forma corectă'], [330, 180], gol(
                   'Au venit aceiași / aceeași colegi.', 'Am citit aceeași / aceiași carte.',
                   'Fetele acelea / aceia sunt surori.', 'Băieții aceia / acea au plecat.')),
         ], titlu='Pronumele și adjectivul pronominal demonstrativ'),

    fisa(14, 'p. 152',
         'Reper (manual, p. 152): Pronumele nehotărât nu dă informații precise despre obiect; poate fi simplu (unul, '
         'mult, tot, altul) sau compus (cineva, fiecare, oricine, vreunul); compusele se scriu într-un cuvânt. Lângă un '
         'substantiv devine adjectiv. Subiectul „fiecare” cere verbul la singular.',
         [
             T(1, 'Simplu sau compus?', 'Găsește pronumele nehotărât și scrie S (simplu) sau C (compus).',
               ['Enunțul', 'Pronumele', 'S / C'], [300, 120, 90], gol3(
                   'Cineva a sunat la ușă.', 'Mulți au rămas afară.', 'Oricare ți-ar plăcea.', 'Fiecare și-a luat biletul.',
                   'Au adus altceva.', 'Toți au aplaudat.')),
             T(2, 'Pronume sau adjectiv?', 'Scrie P (pronume) sau A (adjectiv pronominal nehotărât).',
               ['Enunțul', 'P / A'], [440, 70], gol(
                   'Unii copii joacă șah.', 'Unii joacă șah.', 'Fiecare elev are o fișă.', 'Fiecare are o fișă.',
                   'Am cumpărat câteva cărți.', 'Am cumpărat câteva.')),
         ],
         [
             T(3, 'Corectează', 'Scrie enunțul corect.',
               ['Enunțul greșit', 'Varianta corectă'], [255, 255], gol(
                   'Fiecare am primit un premiu.', 'Ai văzut vre-un film bun?', 'Orce ai spune, te cred.',
                   'Amândoura le-a plăcut.'), row_h=26),
             T(4, 'Analiza', 'Scrie alcătuirea, cazul și funcția sintactică.',
               ['Pronumele (enunțul)', 'Alcătuirea', 'Cazul', 'Funcția'], [200, 90, 90, 130], gol4(
                   'cuiva (Am dat cuiva cartea.)', 'Toți (Toți au venit.)', 'altceva (Mă gândesc la altceva.)',
                   'multora (Le-am scris multora.)')),
         ], titlu='Pronumele și adjectivul pronominal nehotărât'),

    fisa(15, 'p. 153',
         'Reper (manual, p. 153): Pronumele interogativ (care, cine, ce, cât) ține locul cuvântului așteptat ca răspuns; '
         'funcția lui e aceeași cu a răspunsului. Când determină un substantiv, cu care se acordă, devine adjectiv '
         'pronominal interogativ (atribut adjectival).',
         [
             T(1, 'Întrebare și răspuns', 'Răspunde, apoi scrie funcția pronumelui interogativ.',
               ['Întrebarea', 'Răspunsul tău', 'Funcția'], [180, 180, 150], gol3(
                   'Cine a câștigat?', 'Pe cine ai invitat?', 'Cui i-ai dat biletul?', 'Despre ce vorbiți?',
                   'Al cui e ghiozdanul?', 'Ce a devenit fratele tău?')),
             T(2, 'Pronume sau adjectiv?', 'Scrie P (pronume) sau A (adjectiv pronominal interogativ).',
               ['Enunțul', 'P / A'], [440, 70], gol(
                   'Care carte îți place?', 'Care îți place?', 'Câți elevi au venit?', 'Câți au venit?', 'Ce film ai văzut?',
                   'Ce ai văzut?')),
         ],
         [
             T(3, 'Formulează întrebarea', 'Pune o întrebare la cuvântul din paranteză, cu un pronume interogativ.',
               ['Enunțul', 'Întrebarea'], [240, 270], gol(
                   'Ana a câștigat concursul. (Ana)', 'Am vorbit cu bunicul. (cu bunicul)', 'I-am scris Mariei. (Mariei)',
                   'Casa vecinului e nouă. (vecinului)', 'Mă gândesc la vacanță. (la vacanță)'), row_h=24),
             T(4, 'Forma corectă', 'Alege forma corectă.',
               ['Variantele', 'Forma corectă'], [330, 180], gol(
                   'Cui / La cine i-ai dat cartea?', 'Cărui / Căruia coleg i-ai scris?', 'Cine a / au sunat la ușă?',
                   'Pe care / Care l-ai ales?')),
         ], titlu='Pronumele și adjectivul pronominal interogativ'),

    fisa(16, 'pp. 154-155',
         'Reper (manual, pp. 154-155): Pronumele relativ (care, cine, ce, cât, ceea ce) leagă o propoziție secundară '
         'de regenta ei și are funcție în propoziția pe care o introduce. „Care” complement direct cere „pe”. Lângă un '
         'substantiv nearticulat devine adjectiv pronominal relativ.',
         [
             T(1, 'Pronumele relativ', 'Scrie pronumele relativ, ce înlocuiește și funcția lui.',
               ['Fraza', 'Pronumele', 'Înlocuiește', 'Funcția'], [210, 80, 100, 120], gol4(
                   'Cartea pe care mi-ai dat-o e bună.', 'Colegul căruia i-am scris a răspuns.',
                   'Orașul în care locuiesc e mic.', 'Fata al cărei desen a câștigat e aici.', 'Omul care ne-a ajutat e medic.'),
               row_h=26),
             T(2, 'Pronume sau adjectiv?', 'Scrie P (pronume) sau A (adjectiv pronominal relativ).',
               ['Fraza', 'P / A'], [440, 70], gol(
                   'Știu care elev a câștigat.', 'Știu care a câștigat.', 'Nu știu ce carte să aleg.', 'Nu știu ce să aleg.',
                   'Am aflat câți bani ai strâns.', 'Am aflat câți au venit.')),
         ],
         [
             T(3, 'Completează', 'Completează cu pronumele relativ potrivit (cu prepoziția, dacă e nevoie).',
               ['Fraza', 'Pronumele relativ'], [360, 150], gol(
                   'Prietena ... i-am dat cartea s-a mutat.', 'Băiatul ... bicicletă e roșie stă aici.',
                   'Casa ... am copilărit e veche.', 'Filmul ... ți-am vorbit rulează azi.', 'Colegii ... i-am invitat au venit.')),
             T(4, 'Propozițiile', 'Desparte fraza în propoziții și scrie cuvântul de legătură.',
               ['Fraza', 'Propozițiile', 'Cuvântul de legătură'], [170, 220, 120], gol3(
                   'Cel ce ne-a ajutat e vecinul nostru.', 'Ceea ce ai găsit are valoare.'), row_h=44),
         ], titlu='Pronumele și adjectivul pronominal relativ'),

    fisa(17, 'p. 156',
         'Reper (manual, p. 156): Pronumele negativ (nimeni, nimic, niciunul, niciuna) apare numai în enunțuri negative; '
         'ca subiecte, „nimeni” și „nimic” cer verbul la singular. Adjectivele pronominale negative sunt „niciun”, '
         '„nicio” (atribut adjectival); se scriu într-un cuvânt.',
         [
             T(1, 'Pronume sau adjectiv?', 'Scrie P (pronume) sau A (adjectiv pronominal negativ).',
               ['Enunțul', 'Cuvântul', 'P / A'], [300, 120, 90], [
                   ['Nimeni n-a venit.', 'Nimeni', ''], ['Niciun elev n-a lipsit.', 'Niciun', ''],
                   ['Nu i-am spus nimănui.', 'nimănui', ''], ['Nicio veste n-a sosit.', 'Nicio', ''],
                   ['Niciunul nu știa drumul.', 'Niciunul', ''], ['Nu mă gândesc la nimic.', 'nimic', '']]),
             T(2, 'Cazul și funcția', 'Scrie cazul și funcția pronumelui negativ.',
               ['Enunțul', 'Cazul', 'Funcția'], [240, 110, 160], gol3(
                   'Nimeni nu a răspuns.', 'Nu văd pe nimeni.', 'Caietul niciunuia nu e aici.', 'Nu mă bazez pe niciunul.',
                   'Câștigătorul nu e niciunul dintre ei.')),
         ],
         [
             T(3, 'Acordul și scrierea', 'Alege forma corectă.',
               ['Variantele', 'Forma corectă'], [330, 180], gol(
                   'Nimeni din sală nu știa / știau răspunsul.', 'Niciuna dintre fete n-a / n-au întârziat.',
                   'Nu am primit nici un / niciun mesaj.', 'Nu am nicio / nici o grijă.')),
             T(4, 'Enunțuri negative', 'Transformă în enunț negativ, cu un pronume sau adjectiv negativ.',
               ['Enunțul', 'Enunțul negativ'], [220, 290], gol(
                   'Cineva a sunat.', 'Am văzut ceva.', 'Fiecare a înțeles.', 'Am o idee.', 'I-am spus cuiva.')),
         ], titlu='Pronumele și adjectivul pronominal negativ'),

    fisa(18, 'p. 157',
         'Reper (manual, p. 157): Azi se folosește doar adjectivul pronominal de întărire (însumi, însăși, înșine, '
         'înșiși...), care se acordă în gen, număr și caz cu substantivul sau pronumele determinat și are funcția de '
         'atribut adjectival. Poate fi înlocuit cu „chiar”.',
         [
             T(1, 'Forma potrivită', 'Completează cu adjectivul pronominal de întărire.',
               ['Enunțul', 'Adjectivul'], [380, 130], gol(
                   'Eu (fată) ... am pictat tabloul.', 'Ea ... a propus jocul.', 'Voi, băieți, ... ați reparat bicicleta?',
                   'Ele ... au organizat serbarea.', 'Noi, fetele, ... am ales tema.', 'Tu, Mihai, ... ai spus asta.')),
             T(2, 'Acordul', 'Scrie ce determină adjectivul și genul, numărul, cazul.',
               ['Enunțul', 'Ce determină', 'Gen, număr, caz'], [230, 120, 160], gol3(
                   'Directoarea însăși ne-a felicitat.', 'Le-am vorbit elevilor înșiși.', 'Mă gândesc la mine însămi.',
                   'Vorbește despre sine însuși.')),
         ],
         [
             T(3, 'Corectează', 'Scrie forma corectă.',
               ['Enunțul greșit', 'Varianta corectă'], [255, 255], gol(
                   'Ei însăși au venit.', 'Ea însuși a gătit.', 'Voi însevă, băieți, ați câștigat.', 'A venit chiar el însuși.'),
               row_h=26),
             T(4, 'Cu „chiar”', 'Înlocuiește adjectivul de întărire cu „chiar”.',
               ['Enunțul', 'Varianta cu „chiar”'], [255, 255], gol(
                   'Profesorul însuși m-a lăudat.', 'Am vorbit cu ea însăși.', 'Copiii înșiși au plantat pomii.'), row_h=26),
         ]),

    fisa(19, 'pp. 158-159',
         'Reper (manual, pp. 158-159): Pronumele poate fi centru de grup nominal (determinat de atribute) sau adjunct: '
         'în grupul nominal (atribut pronominal prepozițional, genitival, în dativ) sau în grupul verbal (complemente, '
         'circumstanțiale, subiect, nume predicativ). Adjectivele pronominale sunt atribute adjectivale.',
         [
             T(1, 'Pronumele centru', 'Scrie determinarea pronumelui și felul atributului.',
               ['Grupul', 'Determinarea', 'Felul atributului'], [150, 130, 230], gol3(
                   'ceva interesant', 'unul ca tine', 'acela de alături', 'niciunul din clasă', 'nimic al Mariei')),
             T(2, 'Pronumele adjunct', 'Scrie funcția sintactică a pronumelui dat.',
               ['Enunțul', 'Pronumele', 'Funcția'], [230, 100, 180], [
                   ['Casa acestora e nouă.', 'acestora', ''], ['Am primit un mesaj de la unii.', 'de la unii', ''],
                   ['Fiecăruia îi pasă.', 'Fiecăruia', ''], ['Te gândești la asta?', 'la asta', ''],
                   ['Stă lângă oricine.', 'lângă oricine', ''], ['Nimeni n-a răspuns.', 'Nimeni', '']]),
         ],
         [
             T(3, 'Adjectivele pronominale', 'Scrie felul și cazul adjectivului pronominal.',
               ['Enunțul', 'Adjectivul', 'Felul', 'Cazul'], [200, 90, 130, 90], [
                   ['Nicio frunză nu mișca.', 'Nicio', '', ''], ['Am vorbit cu prietena mea.', 'mea', '', ''],
                   ['Acel talisman e vechi.', 'Acel', '', ''], ['Toți copiii au venit.', 'Toți', '', ''],
                   ['Care drum e mai scurt?', 'Care', '', '']]),
             T(4, 'Acordul corect', 'Alege forma corectă.',
               ['Variantele', 'Forma corectă'], [330, 180], gol(
                   'Oricare dintre ei pot / poate veni.', 'Fiecare dintre voi a / ați primit o fișă.',
                   'Niciunul dintre noi n-am / n-a știut.', 'Unul dintre prieteni mi-a / mi-au scris.')),
         ], titlu='Posibilități combinatorii ale pronumelui'),

    fisa(20, 'pp. 160-161',
         'Reper (manual, pp. 160-161): Într-un text dominant narativ pot apărea secvențe descriptive (trăsături, cadru), '
         'dialogate (cuvintele personajelor, verbe de declarație, linie de dialog) și explicative (răspund la „De ce?” '
         'și „Cum?”, cu mai întâi, apoi, deoarece).',
         [
             X(1, 'Furtuna', [
                 'Citește textul (scris pentru fișă).',
                 '(a) Era o după-amiază de iulie. Cerul se acoperise de nori grei, cenușii, iar vântul îndoia plopii de pe '
                 'marginea drumului.',
                 '(b) Ioana și bunicul se întorceau de la pescuit, când o lumină albă a brăzdat cerul.',
                 '(c) — Bunicule, de ce tună abia după ce fulgeră? a întrebat Ioana. — Vezi imediat, a zâmbit bătrânul.',
                 '(d) Fulgerul e o descărcare electrică între nori sau între nori și pământ. Mai întâi vedem lumina, apoi '
                 'auzim tunetul, deoarece sunetul călătorește mult mai încet decât lumina.',
                 '(e) Au ajuns acasă chiar când începea ploaia.']),
             T(2, 'Secvențele', 'Scrie tipul fiecărei secvențe și un indiciu.',
               ['Fragmentul', 'Tipul secvenței', 'Indiciul'], [90, 170, 250], gol3('(a)', '(b)', '(c)', '(d)', '(e)')),
         ],
         [
             T(3, 'Mărcile secvențelor', 'Scrie tipul de secvență: narativă, descriptivă, dialogată, explicativă.',
               ['Marca', 'Tipul'], [370, 140], gol(
                   'verb de declarație și linie de dialog', 'grupuri substantiv + adjectiv, verbe la imperfect',
                   'cuvinte ca „deoarece”, „mai întâi”, „în consecință”', 'întâmplări înlănțuite, cu un deznodământ',
                   'răspunde la întrebarea „De ce?”')),
             L(4, 'O secvență explicativă', 'Scrie 4-5 rânduri care explică de ce apare curcubeul (sau alt fenomen), '
               'cu doi conectori explicativi.', 2),
         ], titlu='Structuri textuale (I)'),

    fisa(21, 'p. 161',
         'Reper (manual, p. 161): Compunerea narativă respectă structura (situație inițială, element declanșator, '
         'întâmplări, deznodământ), conține secvențe descriptive, dialogate și explicative legate armonios și are un '
         'titlu care stârnește interesul.',
         [
             T(1, 'Planul compunerii', 'Completează planul compunerii tale.',
               ['Partea', 'Ce scriu'], [190, 320], gol(
                   'situația inițială (cine, unde, când)', 'elementul declanșator', 'întâmplările', 'deznodământul',
                   'unde inserez descrierea', 'unde inserez dialogul', 'unde inserez explicația'), row_h=26),
             T(2, 'Trecerile', 'Scrie o propoziție care face trecerea de la narațiune la secvența cerută.',
               ['Trecerea', 'Propoziția mea'], [170, 340], gol(
                   'narațiune → descriere', 'narațiune → dialog', 'narațiune → explicație'), row_h=34),
         ],
         [
             T(3, 'Verific compunerea', 'Scrie DA sau NU.',
               ['Întrebarea', 'DA / NU'], [420, 90], gol(
                   'Are situație inițială, întâmplări și deznodământ?', 'Are o secvență descriptivă?',
                   'Are o secvență dialogată, cu punctuația potrivită?', 'Are o secvență explicativă clară?',
                   'Se leagă firesc părțile?', 'Titlul stârnește interesul?')),
             L(4, 'Titlul', 'Propune trei titluri pentru compunerea ta și subliniază-l pe cel mai bun.', 1),
         ], titlu='Structuri textuale (II)'),

    fisa(22, 'pp. 162-163',
         'Recapitulare (manual, pp. 124-145): textul narativ literar, spațiul și timpul, momentele subiectului, '
         'naratorul și personajele, caracterizarea, textul multimodal, structura textului narativ oral.',
         [
             X(1, 'Tombola', [
                 'Citește textul (scris pentru fișă).',
                 'La serbarea de Crăciun, școala a organizat o tombolă. Biletele costau doi lei, iar premiul cel mare era o '
                 'bicicletă roșie, așezată lângă bradul din sala de sport. Radu cumpărase cinci bilete cu banii strânși '
                 'toată toamna.',
                 '— Azi e ziua mea norocoasă, i-a spus el Ilincăi. Simt asta! — Așa spuneai și la concursul de șah, a râs ea.',
                 'Doamna directoare a scos, pe rând, bilețelele din urnă. Radu a câștigat o gumă, apoi un creion. La premiul '
                 'cel mare, sala a tăcut. Numărul câștigător era 47. Radu avea 46 și 48. Ilinca, cu singurul ei bilet, avea 47.',
                 'Seara, Radu i-a povestit mamei totul: nu se supărase, fiindcă Ilinca îi promisese că îl lasă să meargă cu '
                 'bicicleta în fiecare sâmbătă.']),
             T(2, 'Recunoaște', 'Completează după text.',
               ['', 'Din text'], [200, 310], gol(
                   'naratorul (tipul, persoana)', 'locul și timpul', 'personajul principal', 'intriga',
                   'punctul culminant', 'o trăsătură a lui Radu și dovada')),
         ],
         [
             T(3, 'Radu povestește oral', 'Scrie ce ar spune Radu mamei în fiecare parte a narațiunii orale.',
               ['Partea', 'Ce spune Radu'], [150, 360], gol(
                   'împrejurările', 'desfășurarea', 'deznodământul', 'evaluarea', 'revenirea în prezent'), row_h=26),
             L(4, 'Prima sâmbătă', 'Scrie 5-6 rânduri despre prima sâmbătă cu bicicleta, cu o secvență descriptivă.', 2),
         ]),

    fisa(23, 'p. 163',
         'Recapitulare (manual, pp. 146-161): pronumele personal, de politețe, reflexiv, posesiv, demonstrativ, '
         'nehotărât, interogativ, relativ, negativ, adjectivul de întărire, funcțiile pronumelui, secvențele textuale.',
         [
             X(1, 'Patru enunțuri', [
                 '(1) Cine a câștigat bicicleta pe care o voia Radu?   (2) Ilinca însăși i-a spus asta mamei ei.',
                 '(3) Niciun alt copil nu avea biletul acela.   (4) Fiecare dintre noi ar fi vrut premiul ei.']),
             T(2, 'Pronumele', 'Scrie felul, cazul și funcția sintactică.',
               ['Pronumele (enunțul)', 'Felul', 'Cazul', 'Funcția'], [130, 130, 90, 160], gol4(
                   'Cine (1)', 'care (1)', 'i- (2)', 'asta (2)', 'Fiecare (4)', 'noi (4)')),
             T(3, 'Adjectivele pronominale', 'Scrie felul și genul, numărul, cazul.',
               ['Adjectivul (enunțul)', 'Felul', 'Gen, număr, caz'], [150, 180, 180], gol3(
                   'însăși (2)', 'Niciun (3)', 'alt (3)', 'acela (3)')),
         ],
         [
             T(4, 'Scrie corect', 'Corectează greșelile.',
               ['Greșit', 'Corect'], [255, 255], gol(
                   'vre-o prietenă', 'orcine', 'aceiași carte', 'colegii voștrii', 'Ia spus adevărul.', 'Ei însăși au venit.'),
               row_h=20),
             L(5, 'La tombolă', 'Scrie 6-8 rânduri despre o întâmplare la un târg sau la o tombolă, cu o secvență dialogată '
               'și trei pronume de feluri diferite. Subliniază pronumele.', 3),
         ]),
]
