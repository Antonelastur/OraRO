# Fișe de exerciții, clasa a VI-a, Unitatea III „Dincolo de ferestre”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 6). Textele fără autor
# sunt create pentru fișe; citatele scurte sunt doar din autori în domeniul
# public (Vasile Alecsandri); Ana Blandiana, Nicolae Labiș, T.O. Bobe sunt doar
# parafrazați. Lecțiile 11 (proiectul) și 25 (evaluarea) nu au fișă.
# Rezolvările: notite-profesor/clasa-6/unitatea-3/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-6-unitatea-3.py

SUB = 'Clasa a VI-a · Unitatea III, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 6, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-6/unitatea-3/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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


def gol5(*randuri):
    return [[r, '', '', '', ''] for r in randuri]


STROFA2 = [
    '„Ziua ninge, noaptea ninge, dimineața ninge iară!',
    'Cu o zale argintie se îmbracă mândra țară;',
    'Soarele rotund și palid se prevede pintre nori',
    'Ca un vis de tinerețe pintre anii trecători.”',
]

IANUARIE = [
    '„Pe dealul alb pădurea doarme grea,',
    'Cu brazii strânși sub glugile de nea,',
    'Iar râul din vale, oglindă de gheață,',
    'Păstrează cerul sur de dimineață.',
    'Deodată, soarele-și aprinde focul,',
    'Zăpada scânteiază peste tot locul,',
    'Și-o ceată de copii, cu sănii noi,',
    'Coboară dealul, râzând, câte doi.”',
]

CATRENE = [
    'A. „Ninge-ncet peste grădină, / Totul e-o mare lumină, / Brazii dorm sub nea curată, / Ca o casă fermecată.”',
    'B. „Pe geam, un fulg s-a așezat, / Mic și alb ca o steluță, / Iar copilul, fermecat, / Îl atinge cu-o mânuță.”',
    'C. „Sub streașină, țurțurii lungi / Sclipesc în soarele de-amiază, / Iar vrăbiile-n șir veghează, / Cu ochii mici, '
    'pe crengi prelungi.”',
    '(Semnul / arată sfârșitul versului. Cuvintele legate prin cratimă, ca „e-o”, „cu-o”, se numără ca o silabă.)',
]

BULETIN = [
    '„Sâmbătă, în vestul țării, cerul va fi mai mult noros, iar temperaturile maxime vor fi cuprinse între 2 și '
    '5 grade. În Moldova va ninge slab, iar noaptea minimele vor coborî până la -8 grade.',
    'Duminică, vântul se va intensifica la munte, cu rafale de până la 60 km/h. La București, vremea va fi '
    'însorită, dar rece, cu maxime de 3 grade.”',
]

STIRE = [
    'Supratitlu: Iarna a venit mai devreme!',
    'Titlu: ELEVI BLOCAȚI DE NĂMEȚI ÎN AUTOBUZUL ȘCOLAR',
    '„Treizeci de elevi din comuna Valea Albă au rămas ieri dimineață, timp de două ore, într-un autobuz școlar '
    'oprit de nămeți pe drumul spre oraș.',
    'Șoferul a anunțat imediat dispeceratul, iar un plug al drumarilor a curățat șoseaua. Între timp, copiii au '
    'primit ceai cald de la jandarmi. Autobuzul a ajuns la școală la ora zece.',
    'Meteorologii anunță noi ninsori, așa că părinții sunt sfătuiți să urmărească avertizările în zilele următoare.”',
]

FEREASTRA = [
    '„De la fereastra camerei mele, văd întâi curtea școlii, albă și netedă ca o foaie nescrisă. Mai departe, '
    'dincolo de gard, trei tei bătrâni își țin ramurile încărcate de zăpadă ca pe niște tăvi. În fundal, blocurile '
    'cenușii par niște corăbii înghețate într-o mare de ceață.',
    'Sus, cerul e jos și greu, iar fulgii coboară liniștiți, fără grabă. Îmi lipesc fruntea de geamul rece și simt '
    'că aș vrea să ies, să las primele urme.”',
]

AJUN = [
    '„Se lasă seara albă peste sat,',
    'Iar brazii poartă glugi de zăpadă,',
    'Pe drum, un fum subțire s-a-nălțat,',
    'Un fir ce leagă cer și ogradă.',
    'Colindători cu steaua-n mâini se-adună,',
    'Și glasul lor e clar ca un clopoțel;',
    'Și-i urmărește, de sus, o lună',
    'Ca un bunic zâmbind, blând și bătrânel.”',
]

FISE = [
    fisa(1, 'pp. 84-85',
         'Reper: În pastelul „Iarna”, Vasile Alecsandri descrie în patru strofe o iarnă aspră, cu ninsoare fără '
         'oprire (strofele I-III), apoi o iarnă veselă, luminoasă (strofa a IV-a). Textul descriptiv în versuri se '
         'organizează după formă (sunete, ritm) și după conținut (imagini vizuale, sonore, tactile).',
         [
             T(1, 'Ce vezi, ce auzi, ce simți', 'Scrie din poezie câte un vers (sau un fragment) pentru fiecare fel de imagine.',
               ['Imaginea', 'Versul sau fragmentul'], [110, 400], gol(
                   'vizuală', 'sonoră', 'tactilă (de frig)', 'de mișcare'), row_h=30),
             T(2, 'Două ierni', 'Scrie A (iarna aspră) sau V (iarna veselă).',
               ['Versul', 'A / V'], [440, 70], gol(
                   '„Ziua ninge, noaptea ninge, dimineața ninge iară!”',
                   '„Dar ninsoarea încetează, norii fug, doritul soare”',
                   '„Ca fantasme albe plopii înșirați se perd în zare”',
                   '„În văzduh voios răsună clinchete de zurgălăi.”',
                   '„Se văd satele perdute sub clăbuci albii de fum.”',
                   '„Strălucește și dismiardă oceanul de ninsoare.”')),
         ],
         [
             T(3, 'Cuvinte de altădată', 'Poezia are forme vechi ale unor cuvinte. Scrie forma de azi.',
               ['Forma din poezie', 'Forma de azi'], [250, 260], gol(
                   'zbor', 'perdute', 'pintre', 'împregiur', 'dismiardă', 'iară')),
             L(4, 'Iarna de la fereastra ta', 'Scrie 4-5 versuri sau propoziții despre iarna din localitatea ta, cu o imagine vizuală și una sonoră.', 3),
         ]),

    fisa(2, 'pp. 84-85',
         'Reper (manual, p. 85): Poezia e alcătuită din versuri (rândurile ei), grupate în strofe, despărțite printr-un '
         'rând alb. La recitare contează intonația, ritmul rostirii, pauzele și elementele nonverbale (gestica, mimica).',
         [
             T(1, 'Strofa și versul', 'Completează despre poezia „Iarna”.',
               ['Întrebarea', 'Răspunsul'], [300, 210], gol(
                   'Câte strofe are poezia?',
                   'Câte versuri are o strofă? Cum se numește?',
                   'Care vers arată că ninge fără oprire?',
                   'Ce cuvânt apare în primul și în ultimul vers?'), row_h=28),
             X(2, 'Pregătesc recitarea', [
                 'Marchează cu / pauzele scurte și cu // pauzele lungi; subliniază cuvintele pe care le accentuezi.'] + STROFA2),
         ],
         [
             T(3, 'Grila colegului', 'Colegul tău îți ascultă recitarea și completează: DA sau NU și o observație.',
               ['Criteriul', 'DA / NU', 'Observația'], [230, 60, 220], gol3(
                   'rostesc clar toate cuvintele', 'fac pauze la sfârșit de vers și de strofă',
                   'tonul arată teama, apoi bucuria', 'privesc publicul, am gesturi potrivite'), row_h=26),
             T(4, 'Cuvinte-cheie pentru memorare', 'Alege un cuvânt-cheie pentru fiecare strofă și explică de ce te ajută.',
               ['Strofa', 'Cuvântul-cheie', 'De ce l-am ales'], [80, 150, 280], gol3('I', 'a II-a', 'a III-a', 'a IV-a')),
             L(5, 'Strofa ta', 'Scrie o strofă de patru versuri despre prima ninsoare (nu trebuie să rimeze).', 2),
         ]),

    fisa(3, 'pp. 86-87',
         'Reper (manual, pp. 86-87): Textul descriptiv literar prezintă sugestiv elementele componente și '
         'proprietățile unui obiect, ale unei ființe, ale unui spațiu. Tabloul cuprinde un peisaj dintr-o privire. '
         'Pastelul descrie natura și transmite, în același timp, sentimentele privitorului.',
         [
             X(1, 'Dimineață de ianuarie', ['Citește poezia (scrisă pentru fișă).'] + IANUARIE),
             T(2, 'Schema descrierii', 'Scrie proprietățile fiecărui element component.',
               ['Elementul component', 'Proprietățile (din text)'], [170, 340], gol(
                   'pădurea', 'brazii', 'râul', 'cerul', 'zăpada')),
         ],
         [
             T(3, 'Două tablouri', 'Compară cele două strofe ale poeziei din fișă.',
               ['', 'Strofa I', 'Strofa a II-a'], [130, 190, 190], gol3(
                   'momentul zilei', 'lumina', 'mișcarea', 'sunetele', 'starea transmisă'), row_h=28),
             T(4, 'Unde privește Alecsandri?', 'Scrie C (planul ceresc) sau T (planul terestru).',
               ['Fragmentul din „Iarna”', 'C / T'], [440, 70], gol(
                   '„cerne norii de zăpadă”', '„ai țării umeri dalbi”', '„Soarele rotund și palid”',
                   '„Tot e alb pe câmp, pe dealuri”', '„sanie ușoară care trece peste văi”')),
             L(5, 'Pastelul tău', 'Descrie în 5-6 propoziții un tablou de iarnă din cartierul tău, cu trei elemente componente și proprietățile lor.', 2),
         ]),

    fisa(4, 'pp. 88-89',
         'Reper (manual, p. 89): Epitetul arată o însușire deosebită a unui obiect sau a unei acțiuni. Poate fi '
         'exprimat prin adjectiv (sanie ușoară), prin substantiv (fiori de gheață) sau poate determina un verb (voios '
         'răsună). Poate fi cromatic sau personificator; simplu, dublu, triplu.',
         [
             T(1, 'Ce figură de stil?', 'Scrie E (epitet), C (comparație) sau P (personificare).',
               ['Expresia', 'E / C / P'], [440, 70], gol(
                   'zăpadă pufoasă', 'fulgii ca niște fluturi', 'vântul cântă prin hornuri', 'brazi de smarald',
                   'copacii plâng cu țurțuri', 'soarele palid', 'pârtia ca o oglindă', 'liniștea albă')),
             T(2, 'Felul epitetului', 'Scrie ce determină epitetul (substantiv sau verb) și ce fel de epitet este.',
               ['Epitetul', 'Determină', 'Felul'], [200, 130, 180], gol3(
                   'pădure de argint', 'cer vânăt', 'vântul supărat', 'nopți lungi, reci și albe', 'ninge liniștit',
                   'zăpadă albă și moale')),
         ],
         [
             T(3, 'Comparații de iarnă', 'Explică fiecare comparație.',
               ['Comparația', 'Ce sugerează', 'Ce atmosferă creează'], [170, 170, 170], gol3(
                   'râul ca o oglindă de gheață', 'țurțurii ca niște lumânări', 'pârtia albă ca o foaie nescrisă'),
               row_h=34),
             X(4, 'Completează cu epitete', [
                 'a) Pe drum trece o sanie ______________.    b) Cerul era ______________ și ______________.',
                 'c) Vântul șuieră ______________ (epitet al verbului).',
                 'd) Brazii ______________ (epitet personificator) își pleacă ramurile.']),
             L(5, 'Geamul înghețat', 'Descrie în 3-4 propoziții geamul înghețat, cu un epitet cromatic, unul dublu și unul personificator; subliniază-le.', 2),
         ]),

    fisa(5, 'pp. 89-90',
         'Reper (manual, p. 90): Măsura = numărul de silabe al unui vers. Catrenul = strofa de patru versuri. Rima = '
         'potrivirea sunetelor de la sfârșitul versurilor, începând cu ultima vocală accentuată: împerecheată (aabb), '
         'încrucișată (abab), îmbrățișată (abba), monorimă (aaaa). Ritmul = succesiunea silabelor accentuate și '
         'neaccentuate.',
         [
             X(1, 'Trei catrene', ['Citește catrenele (scrise pentru fișă).'] + CATRENE),
             T(2, 'Măsura și rima', 'Scrie măsura fiecărui vers și tipul rimei.',
               ['Catrenul', 'Măsura versurilor (1, 2, 3, 4)', 'Tipul rimei'], [90, 250, 170], gol3('A', 'B', 'C'),
               row_h=30),
         ],
         [
             X(3, 'Accentul', [
                 'Subliniază silabele accentuate din primul vers al catrenului A.',
                 'Nin – ge-ncet – pes – te – gră – di – nă']),
             T(4, 'Caută rime', 'Scrie două cuvinte care rimează cu fiecare cuvânt dat.',
               ['Cuvântul', 'Rime'], [150, 360], gol('zăpadă', 'brad', 'ger', 'gheață', 'lumină')),
             L(5, 'Catrenul tău', 'Scrie un catren cu rimă încrucișată, cu versuri de 7-8 silabe, despre o zi de iarnă. Notează măsura la capătul fiecărui vers.', 3),
         ]),

    fisa(6, 'p. 91',
         'Reper: Interpretezi „Iarna” când te întrebi ce trăiește privitorul: teama în fața unei ierni fără sfârșit, '
         'admirația pentru măreția peisajului, bucuria de la final. Poezia începe și se încheie cu privirea spre '
         'văzduh.',
         [
             T(1, 'Trăirile privitorului', 'Scrie cuvinte sau versuri din poezie care arată fiecare trăire.',
               ['Trăirea', 'Cuvinte sau versuri din text'], [110, 400], gol(
                   'teamă', 'uimire', 'mândrie', 'bucurie'), row_h=30),
             T(2, 'De acord sau nu?', 'Scrie DA sau NU și un argument din text.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [240, 60, 210], gol3(
                   'Iarna e privită de aproape, dintr-un singur loc.',
                   'Soarele e comparat cu un vis de tinerețe.',
                   'În primele strofe nu e niciun semn de viață.',
                   'Sania aduce veselia și mișcarea pe orizontală.'), row_h=40),
         ],
         [
             T(3, 'Imagini și semnificații', 'Explică ce poate însemna fiecare imagine.',
               ['Imaginea', 'Ce poate însemna'], [170, 340], gol(
                   'plopii ca fantasme albe', 'fumul de deasupra satelor', '„doritul soare”', 'sania ușoară',
                   'clinchetele de zurgălăi'), row_h=28),
             L(4, 'Scrisoare către Alecsandri', 'Scrie-i poetului 5-6 rânduri: ce ți-a plăcut în „Iarna” și cum arată iarna de azi.', 2),
             L(5, 'Două titluri', 'Propune un titlu pentru fiecare dintre cele două tablouri ale poeziei.', 1),
         ]),

    fisa(7, 'pp. 92-94',
         'Reper (manual, pp. 93-94): Textul nonliterar se referă la realitate. Buletinul meteorologic informează '
         'despre vreme; poate fi monomodal (doar cuvinte), multimodal simplu (cuvinte și hartă) sau multimodal complex '
         '(cu animații). Știrea răspunde la întrebările cine?, ce?, unde?, când?, de ce?; are titlu, uneori '
         'supratitlu, început, cuprins și încheiere.',
         [
             X(1, 'Prognoza pentru weekend', ['Citește buletinul (scris pentru fișă).'] + BULETIN),
             T(2, 'Informații din buletin', 'Răspunde pe scurt.',
               ['Întrebarea', 'Răspunsul'], [230, 280], gol(
                   'Unde va ninge?', 'Care e cea mai scăzută temperatură?', 'Unde va bate vântul cel mai tare?',
                   'Cum va fi vremea la București?', 'Ce timp verbal se folosește? De ce?'), row_h=26),
             T(3, 'Monomodal sau multimodal?', 'Scrie M (monomodal), MS (multimodal simplu) sau MC (multimodal complex).',
               ['Textul', 'M / MS / MC'], [420, 90], gol(
                   'buletinul scris din fișă, fără hartă', 'prognoza din ziar, cu hartă și viniete',
                   'buletinul de la televizor, cu animații', 'știrea online însoțită de o fotografie')),
         ],
         [
             X(4, 'O știre', ['Citește știrea (scrisă pentru fișă).'] + STIRE),
             T(5, 'Știrea, pe întrebări', 'Completează după știre.',
               ['', 'Din știre'], [130, 380], gol(
                   'cine?', 'ce s-a întâmplat?', 'unde?', 'când?', 'de ce?', 'titlul: verbal sau nominal?')),
             T(6, 'Titluri nominale', 'Transformă titlurile verbale în titluri nominale (fără predicat).',
               ['Titlul verbal', 'Titlul nominal'], [250, 260], gol(
                   'Zăpada a blocat drumul spre munte', 'Elevii au construit un iglu', 'Ninge abundent în Moldova'),
               row_h=26),
         ]),

    fisa(8, 'p. 95',
         'Reper: În „Greutatea omătului” de Ana Blandiana, arborii frânți de zăpadă păruseră fericiți, îmbrăcați în '
         'nori eleganți, iar nimeni nu se gândise să cântărească norii. Poeta nu pictează natura, ca Alecsandri, ci '
         'își proiectează trăirile asupra ei.',
         [
             T(1, 'Două ierni în poezie', 'Compară cele două poezii.',
               ['', '„Iarna” (Alecsandri)', '„Greutatea omătului”'], [130, 190, 190], gol3(
                   'forma (strofe, rimă)', 'ce se descrie', 'indicii de spațiu', 'cum apare zăpada', 'ce transmite'),
               row_h=34),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', ['Afirmația', 'A / F'], [440, 70], gol(
                 'Poezia Anei Blandiana are rimă.', 'Arborii par fericiți înainte să se frângă.',
                 'Norii sunt asemănați cu niște haine.', 'Poezia precizează locul în care se află arborii.',
                 'Poezia se încheie cu o întrebare.')),
         ],
         [
             L(3, 'Aparatul de cântărire a norilor', 'Imaginează-ți și descrie în 4-5 propoziții aparatul: cum arată, cine l-ar folosi, ce ar arăta.', 3),
             L(4, 'Când apasă bucuria', 'Poate o bucurie să devină o povară? Dă un exemplu din viața unui copil (3-4 propoziții).', 2),
         ]),

    fisa(9, 'pp. 96-97',
         'Reper (manual, pp. 96-97): Bradul, veșnic verde, e un simbol al vieții veșnice, al belșugului și al '
         'ocrotirii. În credința populară, leagă lumea de sub pământ, lumea oamenilor și cerul. Apare în riturile de '
         'trecere: nașterea, nunta, moartea.',
         [
             T(1, 'Bradul în riturile de trecere', 'Completează după textul din manual.',
               ['Ritul', 'Ce se face cu bradul', 'Ce simbolizează'], [175, 215, 120], gol3(
                   'nașterea', 'nunta', 'moartea unui tânăr necăsătorit'), row_h=40),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', ['Afirmația', 'A / F'], [440, 70], gol(
                 'Bradul de Crăciun împodobit e un obicei de origine germană.',
                 'Primul brad celebru din România a fost împodobit la curtea regelui Carol I.',
                 'Crenguțele de brad puse la casele noi sunt o datină preluată de la romani.',
                 'Bradul apare doar la sărbătorile de iarnă.',
                 'Imaginea bradului apare stilizată pe covoare, ștergare și ii.',
                 'Tămâia, o rășină, era considerată purificatoare.')),
         ],
         [
             T(3, 'Cele trei lumi', 'Scrie ce lume reprezintă fiecare parte a bradului, după credința populară.',
               ['Partea bradului', 'Lumea'], [150, 360], gol('rădăcinile', 'tulpina', 'crengile'), row_h=26),
             L(4, 'Bradul din casa ta', 'Povestește în 4-5 propoziții cum se împodobește bradul la voi acasă și ce înseamnă pentru tine.', 3),
         ]),

    fisa(10, 'p. 97',
         'Reper (manual, p. 97): Ia românească a ajuns în arta și moda lumii: pictorul Henri Matisse a pictat „La '
         'Blouse roumaine” (1940), Regina Maria a purtat ia în vizitele internaționale, iar Yves Saint-Laurent a creat '
         'în 1981 o colecție inspirată din ea. Motivul bradului apare stilizat pe ii, covoare, ștergare, lăzi.',
         [
             T(1, 'Ia în lume', 'Completează după textul din manual.',
               ['Cine', 'Ce a făcut', 'Ce a obținut'], [120, 200, 190], gol3(
                   'Henri Matisse', 'Regina Maria', 'Yves Saint-Laurent'), row_h=36),
             T(2, 'Ia, azi', 'Scrie argumentele tale.',
               ['', 'Argumentul meu'], [160, 350], gol(
                   'de ce aș purta-o', 'de ce nu aș purta-o', 'o ocazie potrivită'), row_h=30),
         ],
         [
             L(3, 'Motivul bradului', 'Desenează, în spațiul de mai jos, un motiv de brad stilizat, din linii drepte, și scrie pe ce obiect l-ai coase.', 3),
             L(4, 'Tradiția pe un obiect de azi', 'Alege un obiect de azi (ghiozdan, tricou, husă de telefon) și descrie în 3-4 propoziții cum ai pune pe el un motiv tradițional.', 2),
         ]),

    fisa(12, 'pp. 100-101',
         'Reper (manual, p. 100): Ascultătorul activ este atent și îl încurajează pe vorbitor (Te ascult...), '
         'transmite semnale nonverbale de interes, pune întrebări de clarificare (Vrei să spui că...?), reformulează '
         '(Dacă înțeleg bine...) și reflectă sentimentele vorbitorului (Înțeleg că te simți...).',
         [
             T(1, 'Ce face ascultătorul?', 'Scrie tehnica folosită: încurajare, semnal nonverbal, clarificare, reformulare, reflectarea sentimentelor.',
               ['Replica sau gestul', 'Tehnica'], [310, 200], gol(
                   '„Vrei să spui că n-ai mai vrut să mergi?”', '„Dacă înțeleg bine, ai luat locul doi.”',
                   '„Îmi imaginez că te-ai speriat.”', '„Spune mai departe, te ascult.”', 'dă din cap și zâmbește',
                   '„Ce înțelegi prin «ciudat»?”')),
             T(2, 'Asculți sau nu?', 'Scrie DA (ascultare activă) sau NU.', ['Comportamentul', 'DA / NU'], [440, 70], gol(
                 'se uită pe telefon cât vorbește colegul', 'îl întrerupe ca să-și spună povestea lui',
                 'îl privește pe vorbitor', 'repetă pe scurt ce a înțeles', 'îi spune „Nu e mare lucru, treci peste!”',
                 'îl întreabă ce a simțit atunci')),
         ],
         [
             T(3, 'Răspunde ca un ascultător activ', 'Scrie o replică potrivită, cu tehnica cerută.',
               ['Ce spune colegul', 'Replica ta'], [250, 260], gol(
                   '„Mâine am concurs și nu pot să dorm.” (reflectare)',
                   '„Am ajuns târziu din cauza autobuzului.” (clarificare)',
                   '„Bunicul meu s-a mutat la noi.” (reformulare)'), row_h=36),
             L(4, 'Cel mai bun ascultător', 'Descrie în 4-5 propoziții pe cineva care te ascultă cu adevărat: ce face, cum te simți.', 3),
         ]),

    fisa(13, 'pp. 100-101',
         'Reper (manual, p. 101): O bună comunicare cere și atitudini potrivite: interes pentru opiniile celorlalți, '
         'atenție față de cei care vorbesc, implicare în conversație și cooperare în activitățile de grup.',
         [
             T(1, 'Ce atitudine?', 'Scrie atitudinea: interes, atenție, implicare sau cooperare.',
               ['Situația', 'Atitudinea'], [400, 110], gol(
                   'Mihai îl întreabă pe colegul tăcut: „Tu cum ai rezolva?”',
                   'Ioana urmărește prezentarea fără să se lase distrasă.',
                   'Radu se oferă să facă desenul pentru poster.',
                   'Echipa își împarte sarcinile și se ajută între ei.')),
             T(2, 'Ce spui sau ce faci când…', 'Scrie o reacție potrivită.',
               ['Situația', 'Reacția mea'], [220, 290], gol(
                   'nu ești de acord cu un coleg', 'un coleg nu spune nimic în grup', 'cineva face singur toată munca',
                   'îți dai seama că ai greșit'), row_h=30),
         ],
         [
             T(3, 'Cum lucrez eu în grup?', 'Autoevaluare: scrie des, uneori sau rar și un exemplu.',
               ['Afirmația', 'Des / uneori / rar', 'Exemplu'], [210, 110, 190], gol3(
                   'ascult până la capăt', 'întreb ce cred ceilalți', 'îmi fac partea de sarcină',
                   'îi ajut pe cei rămași în urmă'), row_h=26),
             L(4, 'O ceartă evitată', 'Povestește în 4-5 propoziții cum a ajutat o atitudine bună să evitați o ceartă în grup.', 3),
         ]),

    fisa(14, 'pp. 102-104',
         'Reper (manual, pp. 102-103): Substantivul are fel (comun, propriu), gen, număr și poate fi articulat hotărât '
         'sau nehotărât. Colectivele au la singular înțeles de plural (stol). Nonnumărabilele pot avea doar singular '
         '(oțet) sau doar plural (ochelari); numele de materii au plural cu sens de sortimente (făinuri).',
         [
             T(1, 'Analiză', '„Iarna trecută, familia noastră a urcat la o cabană. Pe drum, un stol de ciori zbura deasupra brazilor.”',
               ['Substantivul', 'Felul', 'Genul', 'Numărul', 'Articolul'], [110, 110, 90, 90, 110], gol5(
                   'iarna', 'familia', 'o cabană', 'un stol', 'brazilor')),
             T(2, 'Pluralul', 'Scrie pluralul și desinența (sau „aceeași formă”).',
               ['Singular', 'Plural', 'Desinența'], [170, 170, 170], gol3(
                   'cabană', 'schior', 'vârf', 'munte', 'pui', 'învățătoare')),
         ],
         [
             X(3, 'Acordul cu un colectiv', [
                 'Încercuiește forma corectă (uneori sunt corecte amândouă).',
                 'a) Echipa (a câștigat / au câștigat) meciul.    b) Un grup de elevi (a plecat / au plecat) în excursie.',
                 'c) Publicul (a aplaudat / au aplaudat).    d) O mulțime de fulgi (cădea / cădeau) peste oraș.']),
             T(4, 'Doar singular sau doar plural?', 'Scrie S (are doar singular) sau P (are doar plural).',
               ['Substantivul', 'S / P'], [440, 70], gol(
                   'miere', 'răbdare', 'sănătate', 'foame', 'lene', 'nădragi', 'măruntaie', 'tăiței')),
             X(5, 'Materii și sortimente', [
                 'Ce arată pluralul în a doua propoziție din fiecare pereche?',
                 'a) Am cumpărat brânză. / În vitrină erau zece brânzeturi.    b) Beau ceai. / Magazinul are ceaiuri din toată lumea.',
                 '→ ______________________________________________________________']),
         ]),

    fisa(15, 'p. 105',
         'Reper (manual, p. 105): Cazul este forma pe care o ia substantivul pentru a-și arăta funcția sintactică. '
         'Substantivul subiect sau nume predicativ stă în cazul nominativ; poate fi articulat hotărât, nehotărât sau '
         'nearticulat (Tata este avocat.).',
         [
             T(1, 'Subiect sau nume predicativ?', 'Scrie S sau NP și cum e articulat substantivul.',
               ['Enunțul', 'Substantivul', 'S / NP', 'Articolul'], [200, 100, 70, 140], [
                   ['Viscolul a troienit drumurile.', 'viscolul', '', ''],
                   ['Bunicul meu este pădurar.', 'pădurar', '', ''],
                   ['Chiciura acoperă brazii.', 'chiciura', '', ''],
                   ['Sania noastră e o barcă.', 'o barcă', '', ''],
                   ['Fulgii sunt stele mici.', 'stele', '', ''],
                   ['Mâine vine gerul.', 'gerul', '', '']]),
             X(2, 'Construiește', [
                 'a) o propoziție în care „zăpada” e subiect: ______________________________________',
                 'b) o propoziție în care „zăpadă” e nume predicativ: ______________________________________',
                 'c) o propoziție cu subiectul „iarna” și numele predicativ „anotimp”: ______________________________']),
         ],
         [
             T(3, 'Analiză după model', '„Lacul a înghețat. Gheața este o oglindă groasă.” Analizează substantivele.',
               ['Substantivul', 'Felul, genul, numărul, cazul, articolul, funcția'], [110, 400], gol(
                   'lacul', 'gheața', 'o oglindă'), row_h=34),
             L(4, 'Definiții de iarnă', 'Definește amuzant trei lucruri de iarnă (omătul, sania, gerul), cu predicat nominal: „Omătul este…”. Subliniază numele predicative.', 3),
         ]),

    fisa(16, 'pp. 106-108',
         'Reper (manual, pp. 106-107): Complementul direct (pe cine? ce?) și complementul prepozițional (la ce? de '
         'ce? pentru cine? pe cine?...) stau în cazul acuzativ. Complementul direct cu „pe” poate fi dublat de un '
         'pronume neaccentuat (Îl ascult pe Dan.); cel prepozițional, nu (Contez pe prieteni.).',
         [
             T(1, 'Direct sau prepozițional?', 'Scrie întrebarea și CD sau CP.',
               ['Enunțul', 'Complementul', 'Întrebarea', 'CD / CP'], [190, 120, 120, 80], [
                   ['Mara construiește un iglu.', 'un iglu', '', ''],
                   ['Ne gândim la vacanță.', 'la vacanță', '', ''],
                   ['O ajut pe bunica.', 'pe bunica', '', ''],
                   ['Mă bazez pe colegi.', 'pe colegi', '', ''],
                   ['Ne bucurăm de zăpadă.', 'de zăpadă', '', ''],
                   ['Privesc fulgii.', 'fulgii', '', '']]),
             X(2, 'Dublat sau nu?', [
                 'Compară: „Îl aștept pe Andrei.” și „Mă bazez pe Andrei.” Ce complement este „pe Andrei” în fiecare? '
                 'Cum ți-ai dat seama?',
                 '→ ______________________________________________________________',
                 '→ ______________________________________________________________']),
         ],
         [
             T(3, 'Ortografia pluralului', 'Scrie pluralul articulat hotărât.',
               ['Singular', 'Plural articulat'], [250, 260], gol(
                   'vizitiu', 'geamgiu', 'scafandru', 'gutuie', 'bucurie', 'cutie')),
             L(4, 'Complemente de iarnă', 'Scrie patru propoziții despre joaca în zăpadă: două cu complement direct și două cu complement prepozițional. Subliniază-le și scrie întrebarea.', 3),
         ]),

    fisa(17, 'pp. 109-111',
         'Reper (manual, pp. 109-111): Circumstanțialele de loc (unde? de unde? încotro?), de timp (când? de când? '
         'până când?) și de mod (cum? în ce fel?) arată împrejurările acțiunii. Atributul substantival prepozițional '
         'determină un substantiv (cutia de creioane). Toate stau în acuzativ, cu prepoziție.',
         [
             T(1, 'Loc, timp sau mod?', 'Scrie întrebarea și L, T sau M.',
               ['Enunțul', 'Grupul', 'Întrebarea', 'L / T / M'], [190, 120, 120, 80], [
                   ['Mergem la patinoar.', 'la patinoar', '', ''],
                   ['Am schiat până la prânz.', 'până la prânz', '', ''],
                   ['Coboară cu prudență.', 'cu prudență', '', ''],
                   ['Venim de la munte.', 'de la munte', '', ''],
                   ['De luni ninge mereu.', 'de luni', '', ''],
                   ['Ninge fără oprire.', 'fără oprire', '', '']]),
             T(2, 'Atribut sau circumstanțial?', 'Scrie A (atribut) sau C (circumstanțial) și cuvântul determinat.',
               ['Enunțul', 'Grupul', 'A / C și cuvântul determinat'], [190, 120, 200], [
                   ['Casa de la munte e mică.', 'de la munte', ''],
                   ['Plecăm de la munte.', 'de la munte', ''],
                   ['Mănușile de lână sunt calde.', 'de lână', ''],
                   ['Bradul din curte e înalt.', 'din curte', ''],
                   ['Am ieșit din curte.', 'din curte', '']]),
         ],
         [
             X(3, 'Virgula', [
                 'Pune virgulele unde e nevoie (dacă nu e nevoie, scrie „fără virgulă”).',
                 'a) În fiecare iarnă mergem la bunici.    b) Andrei în acea seară a construit un om de zăpadă.',
                 'c) Citesc cu atenție harta.    d) Ne plimbăm prin parc.']),
             L(4, 'Anunțul excursiei', 'Scrie un anunț de 4-5 rânduri despre o excursie la munte, cu un circumstanțial de loc, unul de timp, unul de mod și un atribut prepozițional; subliniază-le.', 3),
         ]),

    fisa(18, 'p. 112',
         'Reper (manual, p. 112): Complementul indirect arată beneficiarul acțiunii și răspunde la întrebarea cui?; '
         'stă în cazul dativ. Numele de persoane terminate în consoană sau străine primesc „lui” (lui Petru); cele în '
         '-a se termină în -ei (Robertei); cele în -ca, -ga, în -ăi (Ericăi).',
         [
             T(1, 'Cui?', 'Scrie complementul indirect și forma lui de nominativ.',
               ['Enunțul', 'Complementul indirect', 'Nominativul'], [260, 130, 120], gol3(
                   'Îi dau fratelui meu mănușile.', 'Bunica le citește nepoților povești.',
                   'I-am trimis Irinei o felicitare.', 'Le mulțumim profesorilor.')),
             T(2, 'Dativul numelor proprii', 'Completează: „I-am dat un fular…”',
               ['Numele', 'Dativul'], [250, 260], gol('Ioana', 'Mihai', 'Doina', 'Vica', 'Ingrid', 'Ana')),
         ],
         [
             X(3, 'Completează', [
                 'a) I-am dăruit (Elena) __________ un fular.    b) Le-am trimis (colegi) __________ poze de la munte.',
                 'c) I-am explicat (Radu) __________ regula.    d) I-am cerut (Paula) __________ o carte.']),
             L(4, 'Lista darurilor', 'Scrie cinci propoziții: cui ce dăruiești de sărbători. Subliniază complementele indirecte.', 3),
         ]),

    fisa(19, 'pp. 113-114',
         'Reper (manual, pp. 113-114): Substantivul atribut care răspunde la întrebarea al, a, ai, ale cui? stă în '
         'genitiv (atribut substantival genitival). Articolul genitival (al, a, ai, ale) se acordă cu substantivul '
         'determinat și se repetă în enumerare. În genitiv și dativ, substantivul are aceeași formă.',
         [
             T(1, 'Genitiv sau dativ?', 'Scrie G sau D.',
               ['Enunțul', 'Substantivul', 'G / D'], [300, 130, 80], [
                   ['Culoarea zăpezii e albă.', 'zăpezii', ''],
                   ['I-am dat zăpezii o formă de iepure.', 'zăpezii', ''],
                   ['Glasul bunicii e cald.', 'bunicii', ''],
                   ['Bunicii îi place ceaiul.', 'bunicii', ''],
                   ['Crengile bradului sunt grele.', 'bradului', ''],
                   ['Îi pun bradului o stea.', 'bradului', '']]),
             X(2, 'Articolul genitival', [
                 'Completează cu al, a, ai, ale.',
                 'a) mănușile roșii ___ surorii mele    b) săniuța nouă ___ vecinului    c) fularul lung ___ bunicului',
                 'd) brazii înalți ___ pădurii    e) ferestrele ___ casei și ___ școlii']),
         ],
         [
             T(3, 'Corectează', 'Scrie forma corectă.',
               ['Greșit', 'Corect'], [250, 260], gol(
                   'căciula lui Mihai și al lui Dan', 'pantofii noi a Mariei', 'cabanele moderne a stațiunii',
                   'câinele vecinei și a vecinului'), row_h=26),
             L(4, 'Al cui e?', 'Descrie în 4 propoziții camera ta, cu cel puțin patru atribute genitivale. Subliniază articolele genitivale.', 3),
         ]),

    fisa(20, 'p. 115',
         'Reper (manual, p. 115): Vocativul arată o chemare sau o adresare. Are forme proprii (-e: băiete, -ule: '
         'copilule, -o: Ano, -lor: fetelor) sau forma nominativului (Anca). Nu are funcție sintactică. Se desparte prin '
         'virgulă, uneori și cu semnul exclamării, împreună cu determinanții lui.',
         [
             T(1, 'Forme de vocativ', 'Scrie vocativul și desinența (sau „aceeași formă”).',
               ['Substantivul', 'Vocativul', 'Desinența'], [170, 170, 170], gol3(
                   'bunic', 'Andrei', 'Elena', 'colegi', 'băiat', 'doamnă')),
             X(2, 'Punctuația', [
                 'Pune virgula și semnul exclamării sau al întrebării.',
                 'a) Radule vino repede    b) Ce faci Ioana    c) Dragi colegi vă invit la serbare    d) Mamă uite ninge']),
         ],
         [
             T(3, 'Vocativ sau nu?', 'Scrie V (vocativ) sau funcția substantivului.',
               ['Enunțul', 'Substantivul', 'V / funcția'], [260, 120, 130], [
                   ['Ana, ai terminat?', 'Ana', ''],
                   ['Ana a terminat.', 'Ana', ''],
                   ['Copii, liniște!', 'copii', ''],
                   ['Copiii fac liniște.', 'copiii', ''],
                   ['Te rog, doamnă, repetă!', 'doamnă', '']]),
             L(4, 'Invitația', 'Scrie o invitație de 4-5 rânduri la serbarea de iarnă a clasei, cu trei substantive în vocativ (unul cu determinanți).', 3),
         ]),

    fisa(21, 'pp. 116-117',
         'Reper (manual, p. 116): Când descrii un peisaj, poți prezenta imaginea în ansamblu sau poți muta privirea '
         '(dreapta, stânga, sus, jos; prim-plan, plan secund, fundal). Numești elementele (substantive) și '
         'proprietățile lor (adjective), folosești figuri de stil, îți arăți emoțiile, la prezent sau la imperfect.',
         [
             X(1, 'De la fereastră', ['Citește textul (scris pentru fișă).'] + FEREASTRA),
             T(2, 'Planurile descrierii', 'Completează după text.',
               ['Planul', 'Ce se vede', 'Proprietăți'], [110, 200, 200], gol3(
                   'prim-plan', 'plan secund', 'fundal', 'sus'), row_h=28),
         ],
         [
             T(3, 'Figuri de stil și simțuri', 'Scrie câte un exemplu din text.',
               ['Ce caut', 'Exemplul din text'], [150, 360], gol(
                   'o comparație', 'o personificare', 'un epitet', 'o senzație tactilă', 'o emoție'), row_h=26),
             T(4, 'Fereastra ta', 'Notițe pentru descrierea de ora următoare: privește pe fereastra clasei sau a camerei tale.',
               ['', 'Notițele mele'], [150, 360], gol(
                   'locul de unde privesc', 'prim-plan', 'plan secund', 'fundal', 'ce aud', 'ce simt'), row_h=26),
         ]),

    fisa(22, 'p. 117',
         'Reper (manual, p. 117): Etapele scrierii: pregătirea (pentru cine și de ce scrii, informațiile, planul), '
         'ciorna, revizuirea, editarea, publicarea. În descrierea peisajului folosești verbe la imperfect, persoana I.',
         [
             T(1, 'Planul descrierii', 'Completează înainte de a scrie ciorna.',
               ['', 'Notițele mele'], [170, 340], gol(
                   'pentru cine și de ce scriu', 'locul de unde privesc', 'direcția privirii',
                   'patru elemente și proprietățile lor', 'o comparație', 'o personificare', 'ce simt'), row_h=26),
             X(2, 'Imperfect, persoana I', [
                 'Rescrie la imperfect.',
                 'a) Văd curtea albă. → __________________    b) Fulgii cad încet. → __________________',
                 'c) Simt frigul pe obraz. → __________________    d) Copacii stau nemișcați. → __________________']),
         ],
         [
             T(3, 'Lista de verificare', 'După ciornă, bifează DA sau NU.',
               ['Criteriul', 'DA / NU'], [440, 70], gol(
                   'am patru elemente ale peisajului', 'am patru figuri de stil', 'arăt ce văd, aud și simt',
                   'îmi numesc emoțiile', 'verbele sunt la imperfect, persoana I', 'am un titlu surprinzător')),
             L(4, 'Trei titluri', 'Propune trei titluri surprinzătoare pentru descrierea ta.', 1),
             L(5, 'Comentariul colegului', 'Colegul tău scrie aici 3-4 rânduri despre descrierea ta: ce i-a plăcut și ce ai putea îmbunătăți.', 2),
         ]),

    fisa(23, 'pp. 118-119',
         'Recapitulare (manual, pp. 84-101): textul descriptiv în versuri, tabloul, pastelul, epitetul, comparația, '
         'personificarea, măsura și rima, textul nonliterar (buletinul, știrea), ascultarea activă.',
         [
             X(1, 'Seară de Ajun', ['Citește poezia (scrisă pentru fișă).'] + AJUN),
             T(2, 'Tabloul', 'Completează după poezie.',
               ['', 'Din text'], [150, 360], gol(
                   'momentul zilei', 'locul', 'elemente componente', 'mișcarea', 'sunetele'), row_h=26),
         ],
         [
             T(3, 'Figurile de stil', 'Scrie un exemplu și ce sugerează.',
               ['Figura', 'Exemplul', 'Ce sugerează'], [130, 190, 190], gol3(
                   'epitet cromatic', 'epitet dublu', 'comparație', 'personificare'), row_h=28),
             T(4, 'Versificația', 'Scrie măsura versurilor și tipul rimei.',
               ['Strofa', 'Măsura (1, 2, 3, 4)', 'Rima'], [90, 250, 170], gol3('I', 'a II-a')),
             L(5, 'O știre despre colindători', 'Scrie un titlu nominal și primul paragraf (cine?, ce?, unde?, când?) al unei știri despre colindătorii din sat.', 2),
         ]),

    fisa(24, 'pp. 118-119',
         'Recapitulare (manual, pp. 102-117): substantivul, colectivele și defectivele, cazurile nominativ, acuzativ, '
         'dativ, genitiv, vocativ și funcțiile lor, articolul genitival, punctuația vocativului.',
         [
             X(1, 'Trei enunțuri', [
                 '(1) Colindătorii i-au cântat bunicii o colindă veche.',
                 '(2) Steaua colindătorilor strălucea în noapte.',
                 '(3) Copii, veniți la masă!']),
             T(2, 'Cazul și funcția', 'Scrie cazul și funcția sintactică.',
               ['Substantivul (enunțul)', 'Cazul', 'Funcția sintactică'], [190, 110, 210], gol3(
                   'colindătorii (1)', 'bunicii (1)', 'o colindă (1)', 'steaua (2)', 'colindătorilor (2)',
                   'în noapte (2)', 'copii (3)', 'la masă (3)')),
         ],
         [
             T(3, 'Colective și defective', 'Scrie C (colectiv), S (doar singular) sau P (doar plural).',
               ['Substantivul', 'C / S / P'], [440, 70], gol('cireadă', 'oaste', 'frunziș', 'foame', 'nădragi', 'lene')),
             X(4, 'Articolul genitival', [
                 'Completează: sclipirile ___ stelelor, glasul ___ colindătorilor, căciulile ___ copiilor,',
                 'bucuria ___ bunicii și ___ bunicului.']),
             X(5, 'Vocativul', [
                 'Corectează punctuația: a) Dragi colindători intrați în casă    b) Bunico ne dai colaci']),
             L(6, 'Descriere în miniatură', 'Descrie în 5-6 rânduri bradul din centrul localității tale; folosește cel puțin un substantiv în fiecare caz și notează cazul deasupra lui.', 3),
         ]),
]
