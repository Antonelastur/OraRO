# Fișe de exerciții, clasa a VII-a, Unitatea I „Călătorie în necunoscut”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 7, pp. 10-45). Textele
# fără autor sunt create pentru fișe; Veronica D. Niculescu e doar parafrazată;
# citatele scurte sunt doar din autori în domeniul public (Ion Creangă). Lecția 22
# (evaluarea) nu are fișă.
# Rezolvările: notite-profesor/clasa-7/unitatea-1/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-7-unitatea-1.py

SUB = 'Clasa a VII-a · Unitatea I, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 7, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-7/unitatea-1/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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

LAC = [
    '„Sâmbătă dimineață, Ilie și-a luat bicicleta și a pornit spre lac. A trecut pe lângă moară, apoi a coborât '
    'dealul în viteză.',
    'În același timp, bunica lui descoperea în bucătărie că poarta rămăsese deschisă și că Azorel dispăruse.',
    'Ilie ajunsese deja la lac. După un timp, a auzit în spatele lui un lătrat cunoscut.',
    'Pe când bunica striga după câine pe toată ulița, Azorel își sprijinea labele pe roata bicicletei lui Ilie.”',
]

ANUNT = [
    'TÂRGUL DE CARTE AL ȘCOLII',
    'Ce: vânzare și schimb de cărți pentru copii, cu o „bibliotecă vie” (elevii povestesc cărțile preferate).',
    'Unde: sala de sport a școlii, intrarea din strada Florilor.',
    'Când: vineri, 14 martie, între orele 12 și 16.',
    'Cum: aduceți o carte și primiți un bon de schimb. Intrarea este liberă.',
    'Informații: doamna profesoară de română, la cabinetul de limba română.',
]

FERESTRE = [
    '„În aceeași seară, două ferestre rămăseseră luminate în orașul de pe malul Mureșului. La una dintre ele, '
    'Sara lipea în album fotografii cu ghețari, fiorduri, balene și aurore boreale. Visa să ajungă cândva în Norvegia.',
    'Cam în același timp, în cealaltă parte a orașului, domnul Anghel, profesorul ei de geografie, pregătea pentru '
    'a doua zi o hartă uriașă a Europei de Nord.',
    'A doua zi, la ora de geografie, Sara a rămas cu gura căscată: pe tablă stătea chiar harta fiordurilor ei.',
    '— De unde ați știut? a întrebat ea.',
    '— N-am știut, a zâmbit profesorul. Uneori, drumurile se întâlnesc singure.”',
]

FISE = [
    fisa(1, 'pp. 10-13',
         'Reper: În povestirea „Cum e lumea” de Veronica D. Niculescu, Bianca, un pui de urs de la Zoo Sibiu, '
         'fuge din cușcă pe urmele unui fluture și ajunge în oraș, în curtea Direcției de Pașapoarte. Mara, o tânără '
         'care se grăbea să-și facă pașaportul, se așază între urs și puștile oamenilor.',
         [
             T(1, 'În ce ordine?', 'Numerotează întâmplările în ordinea din text (1-7).',
               ['Întâmplarea', 'Nr.'], [440, 70], gol(
                   'Mama Marei o sună și îi cere să nu iasă din casă.',
                   'Un fluture mare trezește puiul de urs.',
                   'O bătrână crede că ursul e un câine și îl alungă.',
                   'Îngrijitoarea îi dă puiului de urs o pară.',
                   'Mara se pune între urs și oamenii cu puști.',
                   'Bianca aleargă prin vale, pe lângă lac și pădure.',
                   'Ursul ajunge în curtea Direcției de Pașapoarte.')),
             T(2, 'Cine face?', 'Scrie personajul (fapte repovestite).',
               ['Fapta', 'Personajul'], [360, 150], gol(
                   'vorbește cu animalele și se plânge de dureri de oase',
                   'vrea să citească poezii la un festival din Belgrad',
                   'doarme pe o bancă la intrarea în cămin',
                   'își așteaptă clienții lângă un ponei',
                   'aleargă pe urmele unui fluture',
                   'strigă la fată să plece din curte')),
         ],
         [
             T(3, 'Situații și emoții', 'Scrie ce simte personajul și ce ai simțit tu.',
               ['Situația', 'Ce simte personajul', 'Ce am simțit eu'], [190, 160, 160], gol3(
                   'Bianca, singură dimineața', 'Bianca, alergând prin vale', 'Mara, auzind strigătele',
                   'mulțimea, când vede că e un pui'), row_h=30),
             L(4, 'Scrisoarea Biancăi', 'Scrie, ca Bianca, o scrisoare de 5-6 rânduri către frații ei, despre ce a văzut „dincolo” de gratii.', 3),
         ]),

    fisa(2, 'pp. 14-15',
         'Reper (manual, p. 15): Înlănțuirea leagă secvențele aceluiași fir narativ, în ordine cronologică (apoi, '
         'după un timp, în cele din urmă). Alternanța prezintă două fire narative în paralel; naratorul trece de la '
         'unul la altul prin formule ca „în acest timp”, „în același timp”, „pe când se întâmplau acestea”.',
         [
             X(1, 'Două drumuri', ['Citește textul (scris pentru fișă).'] + LAC),
             T(2, 'Firele narative', 'Completează după text.',
               ['', 'Din text'], [200, 310], gol(
                   'firul narativ 1 (cine, unde)', 'firul narativ 2 (cine, unde)', 'formulele de alternanță',
                   'cuvintele de înlănțuire', 'unde se întâlnesc firele'), row_h=26),
         ],
         [
             T(3, 'Înlănțuire sau alternanță?', 'Scrie Î (înlănțuire) sau A (alternanță).',
               ['Enunțul (dintr-o povestire)', 'Î / A'], [440, 70], gol(
                   'Am mâncat, apoi am plecat spre gară.', 'În acest timp, sora mea dormea liniștită acasă.',
                   'După un timp, ploaia s-a oprit.', 'Pe când noi cântam în tabără, bunicul repara ceasul.',
                   'În cele din urmă, am găsit cheia.')),
             L(4, 'Al doilea fir', 'Scrie o întâmplare de 5-6 propoziții cu două fire narative (tu, la școală; cineva de acasă), legate prin alternanță. Subliniază formulele de trecere.', 3),
         ]),

    fisa(3, 'pp. 16-17',
         'Reper (manual, p. 16): Autorul e o persoană reală; naratorul e vocea care relatează și poate fi o voce '
         'anonimă (persoana a III-a) sau un personaj (persoana I). Personajele pot fi principale, secundare, episodice, '
         'figuranți sau colective. Enumerația înșiră termeni de același fel, despărțiți prin virgulă.',
         [
             T(1, 'Autor, narator sau personaj?', 'Scrie AU (autor), N (narator) sau P (personaj).',
               ['Despre cine e vorba', 'AU / N / P'], [410, 100], gol(
                   'Veronica D. Niculescu', 'vocea care știe ce se petrece și la zoo, și în oraș',
                   'Bianca', 'a tradus cărți de Lewis Carroll', 'nu ia parte la întâmplări, dar știe ce gândesc personajele',
                   'mulțimea din curtea Direcției de Pașapoarte')),
             T(2, 'Statutul personajelor', 'Scrie statutul (principal, secundar, episodic, figurant, colectiv) și o trăsătură.',
               ['Personajul', 'Statutul', 'O trăsătură'], [130, 190, 190], gol3(
                   'Bianca', 'Mara', 'îngrijitoarea', 'mama Marei', 'paznicul', 'mulțimea')),
         ],
         [
             X(3, 'Enumerația', [
                 'Subliniază termenii enumerației și scrie ce rol are ea.',
                 'a) În rucsac, Ilie avea o hartă, o lanternă, un briceag și două mere. Rolul: ____________________',
                 'b) Pădurea foșnea, trosnea, șuiera, cânta. Rolul: ____________________',
                 'c) Casa bunicii era mică, albă, liniștită și primitoare. Rolul: ____________________']),
             L(4, 'Alt narator', 'Povestește la persoana I, ca Mara, clipa în care vede ursul în curte (5-6 propoziții). Ce află cititorul acum și ce nu mai află?', 3),
         ]),

    fisa(4, 'pp. 18-19',
         'Reper: Textul literar are mai multe semnificații. În „Cum e lumea”, fuga Biancăi poate însemna dorința de '
         'explorare, de independență sau de libertate; și Mara are „gratiile” ei. Obiectele din text (fluturele, '
         'gratiile, petalele) pot căpăta sensuri simbolice.',
         [
             T(1, 'Ce semnifică?', 'Scrie ce crezi că semnifică fiecare element.',
               ['Elementul', 'Ce semnifică pentru mine'], [180, 330], gol(
                   'fluturele', 'gratiile cuștii', 'lumea „de dincolo”', 'zidul înalt din curte',
                   'petalele de mușcată'), row_h=26),
             T(2, 'Bianca și Mara', 'Compară cele două personaje.',
               ['', 'Bianca', 'Mara'], [150, 180, 180], gol3(
                   'ce își dorește', 'ce o oprește („gratiile”)', 'ce face în momentul decisiv', 'ce află despre lume'),
               row_h=30),
         ],
         [
             T(3, 'Ești de acord?', 'Scrie DA sau NU și un argument din text.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [260, 60, 190], gol3(
                   'Bianca a fugit din dorință de libertate.', 'Oamenii din clădire au fost răi.',
                   'Mara a fost curajoasă, nu imprudentă.', 'Și oamenii trăiesc, uneori, „în cuști”.'), row_h=30),
             L(4, 'Cum e lumea?', 'Ce i-ar povesti Bianca mamei ei, seara, despre „cum e lumea”? Scrie 5-6 rânduri.', 3),
         ]),

    fisa(5, 'pp. 20-21',
         'Reper (manual, p. 21): Textul nonliterar se referă la realitate și poate fi continuu (enunțuri și '
         'paragrafe) sau discontinuu (secvențe separate vizual, liste, tabele, grafice). Anunțul răspunde la '
         'întrebările Ce?, Cum?, Unde?, Când? și are un titlu care atrage atenția.',
         [
             X(1, 'Anunțul', ['Citește anunțul (scris pentru fișă).'] + ANUNT),
             T(2, 'Ce afli?', 'Completează după anunț.',
               ['', 'Răspunsul'], [170, 340], gol(
                   'Ce?', 'Unde?', 'Când?', 'Cum?', 'scopul anunțului', 'cui se adresează'), row_h=24),
         ],
         [
             T(3, 'Continuu sau discontinuu?', 'Scrie C (continuu) sau D (discontinuu).',
               ['Textul', 'C / D'], [440, 70], gol(
                   'o scrisoare către un prieten', 'orarul clasei', 'un articol de ziar despre o expediție',
                   'cuprinsul manualului', 'un bilet de tren', 'un fluturaș cu programul unui festival')),
             L(4, 'Anunțul tău', 'Scrie un anunț pentru un obiect pierdut în școală: titlu, Ce?, Unde?, Când?, Cum?', 3),
         ]),

    fisa(6, 'pp. 22-23',
         'Reper: În fragmentul din „Amintiri din copilărie” de Ion Creangă, Nică pleacă din Humulești spre școala de '
         'la Socola, cu Zaharia, în căruța lui moș Luca. Naratorul, adult, își amintește drumul cu umor și cu tristețe.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Nică pleacă bucuros spre Socola.', 'Călătoresc cu căruța lui moș Luca.',
                 'Popasul de noapte de peste Siret a fost plăcut.', 'Moș Luca ar trăi bucuros la câmpie.',
                 'Pe drum, se întovărășesc cu niște oameni cu care de draniță.', 'Nică pierde din vedere munții Neamțului.')),
             T(2, 'Nică și Bianca', 'Compară cele două plecări.',
               ['', 'Nică', 'Bianca'], [150, 180, 180], gol3(
                   'pleacă de bunăvoie?', 'ce lasă în urmă', 'ce simte la plecare', 'cine îl/o însoțește'), row_h=28),
         ],
         [
             T(3, 'Cuvinte de altădată', 'Scrie cuvântul sau explicația de azi.',
               ['Cuvântul din text', 'Azi spunem'], [200, 310], gol(
                   'șagă', 'harabagiu', 'mas', 'harbuz', 'a se hodini', 'pe sponci')),
             L(4, 'Plecarea mea', 'Descrie în 5-6 rânduri o plecare de acasă (tabără, excursie), cu o comparație care să arate ce ai simțit.', 3),
         ]),

    fisa(7, 'pp. 24-25',
         'Reper (manual, p. 25): Obiceiurile se transmit de la o generație la alta în comunitățile tradiționale; '
         'originea lor nu poate fi datată. Tradiția păstrează conștient obiceiurile în societatea modernă și se '
         'adresează și celor din afara comunității. Obiceiurile sunt religioase sau laice.',
         [
             T(1, 'Obicei sau tradiție?', 'Scrie O (obicei) sau T (tradiție).',
               ['Afirmația', 'O / T'], [440, 70], gol(
                   'Se practică de secole într-o comunitate, în mod firesc.', 'Se păstrează conștient în societatea modernă.',
                   'Se adresează și celor din afara comunității.', 'Originea lui nu poate fi datată.',
                   'Este prezentat turiștilor la un festival.')),
             T(2, 'Două comunități din Timiș', 'Completează după manual (p. 25).',
               ['', 'Chirvaiul (șvabii)', 'Lăzărița (bulgarii bănățeni)'], [150, 180, 180], gol3(
                   'când are loc', 'cine participă', 'ce se întâmplă', 'cu ce sărbătoare seamănă'), row_h=28),
         ],
         [
             T(3, 'Religios sau laic?', 'Scrie R (religios) sau L (laic).',
               ['Obiceiul', 'R / L'], [440, 70], gol(
                   'colindatul de Crăciun', 'mărțișorul', 'sfințirea apei de Bobotează', 'Dragobetele',
                   'Paparuda', 'încondeierea ouălor de Paște')),
             L(4, 'Capitala culturală', 'Scrie 4-5 propoziții pentru dosarul de candidatură al orașului tău: ce obicei, ce loc și ce valoare ar prezenta Europei.', 3),
         ]),

    fisa(8, 'p. 26',
         'Reper (manual, p. 26): Principiul cooperării cere ca informația să fie suficientă (nici mai mult, nici mai '
         'puțin decât trebuie), adevărată, relevantă pentru scopul conversației, iar intervențiile să fie clare, '
         'logice, fără ambiguități.',
         [
             T(1, 'Ce regulă se încalcă?', 'Doi colegi stabilesc când se întâlnesc la bibliotecă pentru proiect. Scrie regula încălcată: suficientă, adevărată, relevantă, clară.',
               ['Replica', 'Regula încălcată'], [340, 170], gol(
                   '„Ne vedem mâine.” (fără oră și fără loc)', '„Biblioteca e deschisă duminica.” (e închisă)',
                   '„Apropo, ai văzut ce frumos a nins?”', '„Poate da, poate nu, depinde, mai vedem...”',
                   '„Strada Morii nr. 5, adică pe Morii, la 5, pe strada Morii.”'), row_h=24),
             T(2, 'Replica bună', 'Rescrie primele patru replici de la ex. 1, astfel încât să respecte regula.',
               ['Replica', 'Varianta ta'], [80, 430], gol('1', '2', '3', '4'), row_h=30),
         ],
         [
             T(3, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Într-un dialog bun spui cât mai multe detalii, chiar și inutile.',
                 'Nu folosim informații neverificate.', 'Putem schimba subiectul oricând, fără motiv.',
                 'Replicile trebuie să fie clare, fără ambiguități.')),
             L(4, 'Un dialog cooperant', 'Scrie un dialog de 6-8 replici în care doi colegi aleg un film, respectând toate cele patru reguli ale cooperării.', 3),
         ]),

    fisa(9, 'p. 27',
         'Reper (manual, pp. 26-27): Politețea pozitivă apropie: complimente, solidaritate de grup, adresare cu '
         'prenumele, persoana a II-a singular. Politețea negativă păstrează distanța: scuze, regrete, formule de '
         'respect, pronume de politețe („Vă rog să-mi permiteți...”).',
         [
             T(1, 'Pozitivă sau negativă?', 'Scrie PP (politețe pozitivă) sau PN (politețe negativă).',
               ['Replica', 'PP / PN'], [420, 90], gol(
                   '„Ai desenat superb, ca de obicei!”', '„Îmi cer scuze că vă deranjez, ați putea să-mi spuneți ora?”',
                   '„Hai, frate, că reușim împreună!”', '„Doamnă directoare, vă rog să-mi permiteți să intru.”',
                   '„Sunt sigur că te descurci, ești cel mai priceput!”', '„Aș veni, dar, din păcate, am antrenament.”')),
             T(2, 'Aceeași cerere, două feluri', 'Formulează cererea în ambele feluri.',
               ['Cererea', 'Politețe pozitivă', 'Politețe negativă'], [150, 180, 180], gol3(
                   'împrumuți o carte', 'ceri voie să ieși', 'ceri un loc la geam'),
               row_h=36),
         ],
         [
             L(3, 'Prea politicos', 'Scrie o scenă de 4-6 replici în care politețea exagerată devine comică într-o situație urgentă (de exemplu, un incendiu mic în bucătărie).', 2),
             L(4, 'Mulțumesc', 'Scrie 4-5 rânduri de mulțumire pentru un profesor, cu cel puțin două mărci ale politeții negative.', 2),
         ]),

    fisa(10, 'pp. 28-29',
         'Reper (manual, pp. 28-29): Fraza are două sau mai multe propoziții. Coordonarea leagă propoziții de același '
         'fel, prin joncțiune (și, dar, iar, sau, deci) sau prin juxtapunere (virgulă, punct-și-virgulă). Propozițiile '
         'principale au sens de sine stătător; cele secundare depind de altele.',
         [
             X(1, 'Patru enunțuri', [
                 'Desparte în propoziții, cu bare oblice, și numerotează propozițiile.',
                 'a) Trenul a oprit în gară, călătorii au coborât și peronul s-a umplut de bagaje.',
                 'b) Ilinca voia să vadă marea, dar părinții au ales muntele.',
                 'c) Am căutat harta peste tot; până la urmă, am găsit-o în rucsac.',
                 'd) Știu că drumul e lung.']),
             T(2, 'Analiza', 'Completează pentru fiecare enunț de la ex. 1.',
               ['Enunțul', 'Nr. de propoziții', 'Coordonarea (juxtapunere, joncțiune sau „nu există”)'], [90, 120, 300],
               gol3('a', 'b', 'c', 'd'), row_h=26),
         ],
         [
             T(3, 'Principală sau secundară?', 'Scrie P (principală) sau S (secundară).',
               ['Propoziția', 'P / S'], [440, 70], gol(
                   'Știu (enunțul d)', 'că drumul e lung (enunțul d)', 'Ilinca voia (enunțul b)',
                   'să vadă marea (enunțul b)', 'dar părinții au ales muntele (enunțul b)')),
             X(4, 'Punct-și-virgulă', [
                 'Unește enunțurile într-o frază, cu punct-și-virgulă.',
                 'a) Soarele apune. Pescarii se întorc. → ____________________________________________',
                 'b) Vântul a stat. Marea s-a liniștit. → ____________________________________________']),
             L(5, 'Jurnal de bord', 'Scrie 3-4 fraze dintr-un jurnal de bord, cu coordonare prin juxtapunere și prin joncțiune. Desparte-le în propoziții.', 2),
         ]),

    fisa(11, 'pp. 30-31',
         'Reper (manual, p. 30): Conjuncțiile coordonatoare sunt copulative (și, nici), disjunctive (sau, ori, fie), '
         'adversative (dar, iar, ci, însă) și concluzive (deci). Înaintea adversativelor se pune virgulă; „însă” și '
         '„deci” nu se izolează prin virgule în interiorul propoziției.',
         [
             T(1, 'Felul conjuncției', 'Scrie conjuncția și felul ei.',
               ['Enunțul', 'Conjuncția', 'Felul'], [260, 100, 150], gol3(
                   'Am citit și am desenat.', 'Vii cu noi sau rămâi acasă?', 'E frig, dar nu plouă.',
                   'Am învățat, deci sunt liniștit.', 'Nu cântă, nici nu dansează.', 'Nu e verde, ci albastru.')),
             T(2, 'Ce leagă?', 'Scrie „părți de propoziție” (și care) sau „propoziții”.',
               ['Enunțul', 'Ce leagă conjuncția'], [240, 270], gol(
                   'Ana și Mihai pleacă în drumeție.', 'Ana pleacă, iar Mihai rămâne.',
                   'Vreau mere sau pere.', 'Citește sau scrie la birou.'), row_h=24),
         ],
         [
             X(3, 'Punctuația corectă', [
                 'Rescrie enunțurile cu punctuația corectă (unde e nevoie).',
                 'a) Am vrut să vin dar am întârziat. → ____________________________________________',
                 'b) Sau pleci acum sau rămâi cu noi. → ____________________________________________',
                 'c) Colegul tău a sosit al meu însă întârzie. → _______________________________________',
                 'd) Am terminat, deci, proiectul. → ____________________________________________']),
             L(4, 'Conjuncțiile tale', 'Scrie un mesaj de 4-5 propoziții către un prieten despre o excursie, cu câte o conjuncție coordonatoare din fiecare fel. Subliniază-le.', 3),
         ]),

    fisa(12, 'pp. 32-33',
         'Reper (manual, p. 32): Derivarea formează cuvinte noi cu prefixe (înaintea rădăcinii) și sufixe (după '
         'rădăcină). Diminutivele exprimă micșorarea, simpatia, deprecierea sau atenuarea. Derivatele parasintetice '
         'au prefix și sufix în același timp (a înlemni). Prefixul ex- („fost”) se scrie cu cratimă.',
         [
             T(1, 'Prefix, rădăcină, sufix', 'Desparte cuvântul în părți (scrie „–” dacă nu există).',
               ['Cuvântul', 'Prefixul', 'Rădăcina', 'Sufixul'], [150, 110, 140, 110], gol4(
                   'grădinar', 'străbunic', 'drumeț', 'ursoaică', 'a înflori', 'nefericire')),
             T(2, 'Diminutivul și valoarea lui', 'Scrie diminutivul și valoarea: micșorare, simpatie, depreciere, atenuare.',
               ['Enunțul', 'Diminutivul', 'Valoarea'], [260, 110, 140], gol3(
                   'Mi-a adus un căluț de lemn, cât palma.', 'Ce fetiță isteață!',
                   'Un biet scriitoraș își lăuda versurile.', 'Așteaptă o clipită!')),
         ],
         [
             X(3, 'Scrie corect', [
                 'a) Formează derivate cu prefixul ne-: înțeles → __________  încredere → __________  îndoielnic → __________',
                 'b) Formează derivate cu prefixul ex- („fost”): prieten → __________  campion → __________']),
             T(4, 'Serii derivative', 'Continuă seria: cuvântul de bază → derivat → alt derivat.',
               ['Cuvântul de bază', 'Derivatul 1', 'Derivatul 2 (de la derivatul 1)'], [150, 170, 190], gol3(
                   'pădure', 'carte', 'lemn')),
             L(5, 'Povestea diminutivelor', 'Scrie 3-4 propoziții despre un pui de animal, cu trei diminutive care au valori diferite. Subliniază-le.', 2),
         ]),

    fisa(13, 'pp. 34-35',
         'Reper (manual, p. 34): Compunerea se face prin alăturare (nord-vest), prin subordonare (floarea-soarelui) '
         'sau prin abreviere (CFR). Elementele savante (auto-, bio-, geo-, hidro-, micro-, tele-) au circulație '
         'internațională. Familia lexicală cuprinde derivatele și compusele unui cuvânt de bază.',
         [
             T(1, 'Procedeul de compunere', 'Scrie: alăturare, subordonare sau abreviere.',
               ['Cuvântul compus', 'Procedeul'], [300, 210], gol(
                   'floarea-soarelui', 'nord-vest', 'BNR', 'Baia Mare', 'româno-maghiar', 'untdelemn')),
             T(2, 'Elementele savante', 'Scrie elementul savant și sensul lui.',
               ['Cuvântul', 'Elementul savant', 'Sensul'], [170, 150, 190], gol3(
                   'autobiografie', 'hidrocentrală', 'geografie', 'microscop', 'telecomandă', 'biologie')),
         ],
         [
             T(3, 'Familia lexicală', 'Scrie trei derivate și un compus pentru fiecare cuvânt.',
               ['Cuvântul', 'Trei derivate', 'Un compus'], [110, 260, 140], gol3('soare', 'lup', 'bun'), row_h=30),
             X(4, 'Intrusul', [
                 'Taie cuvântul care nu face parte din familia lexicală.',
                 'a) pădure, pădurar, pădurice, împădurire, padină',
                 'b) lemn, lemnos, lemnar, lemur, a înlemni',
                 'c) munte, muntean, muntenesc, muntișor, muncitor']),
             L(5, 'Abrevieri din orașul meu', 'Scrie trei abrevieri pe care le întâlnești în orașul tău și ce înseamnă fiecare.', 1),
         ]),

    fisa(14, 'p. 36',
         'Reper (manual, p. 36): Pleonasmul alătură cuvinte cu același înțeles (a coborî jos). Pleonasmele sunt lexicale '
         '(a repeta iar), gramaticale (și-a spus opinia sa) și lexico-gramaticale (dar însă). Unele sunt acceptate, '
         'pentru că întăresc ideea (cât vezi cu ochii, a îngheța de frig).',
         [
             T(1, 'Găsește pleonasmul', 'Scrie pleonasmul și varianta corectă.',
               ['Enunțul', 'Pleonasmul', 'Varianta corectă'], [220, 120, 170], gol3(
                   'Am urcat sus în pod.', 'Să ne întoarcem înapoi acasă.', 'Au colaborat împreună la proiect.',
                   'Trebuie să prevedem dinainte greutățile.', 'Și-a spălat mâinile sale.'), row_h=24),
             T(2, 'Ce fel de pleonasm?', 'Scrie: lexical, gramatical sau lexico-gramatical.',
               ['Pleonasmul', 'Felul'], [300, 210], gol(
                   'dar totuși', 'mujdei de usturoi', 'și-a luat ghiozdanul său', 'a coexista împreună')),
         ],
         [
             T(3, 'Acceptat sau greșit?', 'Scrie AC (acceptat) sau G (greșit).',
               ['Construcția', 'AC / G'], [440, 70], gol(
                   'cât vezi cu ochii', 'a îngheța de frig', 'hemoragie de sânge', 'am auzit cu urechile mele',
                   'avansează înainte')),
             L(4, 'Anunțul, fără pleonasme', [
                 'Rescrie corect: „Vă anunțăm dinainte că vom reveni din nou mâine, ca să colaborăm împreună la',
                 'amenajarea spațiului verde. Vă rugăm să urcați sus, la etajul trei.”'], 2),
         ]),

    fisa(15, 'p. 37',
         'Reper (manual, p. 37): Sinonimele au sens asemănător, antonimele sens opus, omonimele aceeași formă și '
         'sensuri fără legătură; cuvântul polisemantic are mai multe sensuri legate între ele. Paronimele seamănă ca '
         'formă, dar au sens diferit (temporal – temporar); folosirea unuia în locul altuia e o confuzie paronimică.',
         [
             T(1, 'Ce relație?', 'Scrie: sinonime, antonime, omonime sau sensuri ale unui cuvânt polisemantic.',
               ['Perechea', 'Relația'], [300, 210], gol(
                   'a călători – a voiaja', 'departe – aproape', 'lac (apă) – lac (vopsea)',
                   'cap (al omului) – cap (al listei)', 'nou – vechi', 'vârf (de munte) – vârf (de creion)')),
             T(2, 'Paronimul potrivit', 'Scrie cuvântul corect.',
               ['Enunțul', 'Cuvântul corect'], [380, 130], gol(
                   'Legitimația e valabilă (temporal / temporar) doar o lună.', 'Proba (orală / orară) e mâine.',
                   'Vreau să (evoc / invoc) o amintire din tabără.', 'Mi-a făcut un (compliment / complement) frumos.',
                   'Zgomotul o (enervează / inervează).')),
         ],
         [
             T(3, 'Sensuri', 'Scrie câte un enunț cu sensul propriu de bază și cu un sens figurat.',
               ['Cuvântul', 'Sens propriu de bază', 'Sens figurat'], [110, 200, 200], gol3(
                   'drum', 'aripă', 'rădăcină'), row_h=32),
             L(4, 'Paronime într-o călătorie', 'Scrie 4-5 propoziții despre o călătorie, cu două perechi de paronime folosite corect. Subliniază-le.', 2),
         ]),

    fisa(16, 'p. 38',
         'Reper (manual, p. 38): Locuțiunea e un grup stabil de cuvinte cu sens unitar (a băga de seamă = a observa); '
         'în îmbinarea liberă, fiecare cuvânt își păstrează sensul. Termenii științifici aparțin unor domenii. '
         'Limbajul popular și variația regională (pronunții, forme, cuvinte ale unei zone) nu sunt limbă literară.',
         [
             T(1, 'Locuțiune sau îmbinare liberă?', 'Scrie L sau Î; pentru locuțiune, dă un sinonim.',
               ['Enunțul', 'L / Î', 'Sinonimul'], [270, 70, 170], gol3(
                   'Și-a pus în gând să urce muntele.', 'A pus cartea în ghiozdan.', 'Am băgat de seamă greșeala.',
                   'Am tras cu ochiul la tabla colegului.', 'Am tras de funie cu toată puterea.',
                   'Dintr-odată a început ploaia.')),
             T(2, 'Termeni științifici', 'Scrie domeniul fiecărui termen.',
               ['Termenul', 'Domeniul'], [260, 250], gol(
                   'fotosinteză', 'ipotenuză', 'diagnostic', 'sufix', 'moleculă', 'meridian')),
         ],
         [
             T(3, 'Regional și literar', 'Scrie cuvântul literar.',
               ['Cuvântul regional sau popular', 'Cuvântul literar'], [260, 250], gol(
                   'curechi', 'păpușoi', 'crumpi', 'mâță', 'ciubote')),
             L(4, 'Bunicul povestește', 'Scrie 4-5 replici ale unui bunic dintr-o regiune a țării, cu două cuvinte regionale și o locuțiune; explică-le în paranteză.', 3),
         ], titlu='Locuțiuni. Termeni științifici. Regionalisme'),

    fisa(17, 'p. 39',
         'Reper (manual, p. 39): Accentul este pronunțarea mai intensă a unei silabe. În română, accentul este liber și '
         'poate deosebi sensul unor cuvinte scrise la fel (omografe). În caz de ezitare, se consultă DOOM3 '
         '(doom.lingv.ro), unde vocala accentuată e subliniată.',
         [
             T(1, 'Silaba accentuată', 'Desparte în silabe și subliniază silaba accentuată (verifică în DOOM3).',
               ['Cuvântul', 'Despărțirea în silabe'], [150, 360], gol(
                   'mizerie', 'regizor', 'lozincă', 'sever', 'hectar', 'antic', 'diagnostic')),
             T(2, 'Accentul schimbă sensul', 'Scrie câte un enunț pentru fiecare accentuare.',
               ['Cuvântul', 'Accent pe prima silabă', 'Accent pe a doua silabă'], [110, 200, 200], gol3(
                   'mobilă', 'copii', 'veselă'), row_h=32),
         ],
         [
             X(3, 'Citește corect', [
                 'Subliniază vocala accentuată din cuvintele regizor, sever, antic, hectar, diagnostic, apoi citește cu voce tare.',
                 'a) Regizorul a fost sever cu actorii.',
                 'b) Ne-am cazat într-un han antic, pe un teren de un hectar.',
                 'c) Doctorul a pus repede un diagnostic.']),
             L(4, 'Dialog cu accente', 'Scrie un dialog de 4-6 replici în care să folosești „mobilă” cu ambele accentuări, „regizor” și „hectar”. Subliniază silabele accentuate.', 2),
         ]),

    fisa(18, 'pp. 40-41',
         'Reper (manual, pp. 40-41): Etapele scrierii: pregătirea, ciorna, revizuirea (idei, logică, timpuri, repetiții, '
         'pleonasme), editarea (titlu, ortografie, punctuație, imagini) și publicarea. Recenzia prezintă o carte cu '
         'aprecieri critice; nu dezvăluie deznodământul și se încheie cu o recomandare.',
         [
             T(1, 'Etapa potrivită', 'Scrie etapa: pregătire, ciornă, revizuire, editare, publicare.',
               ['Ce fac', 'Etapa'], [360, 150], gol(
                   'Îmi aleg subiectul și publicul.', 'Scriu repede ideile, fără să mă opresc la greșeli.',
                   'Elimin o repetiție și un pleonasm.', 'Verific dacă timpurile verbale sunt coerente.',
                   'Așez titlul centrat și adaug o imagine.', 'Îmi citesc recenzia în fața clasei.')),
             T(2, 'Unde pun secvența?', 'Scrie: introducere, cuprins, încheiere sau „nu o pun”.',
               ['Secvența dintr-o recenzie', 'Unde'], [360, 150], gol(
                   'Autorul a mai scris două romane de aventuri.', 'Pe scurt, un băiat pleacă să-și caute bunicul.',
                   'Mi-a plăcut umorul, dar finalul e grăbit.', 'La final, bunicul e găsit pe o insulă.',
                   'Recomand cartea celor care iubesc marea.')),
         ],
         [
             T(3, 'Planul recenziei mele', 'Alege o carte, un film sau un blog despre călătorii și fă planul.',
               ['Partea', 'Ce scriu'], [180, 330], gol(
                   'titlul', 'introducerea (autor, operă)', 'cuprinsul (subiectul, fără final)', 'punctele forte',
                   'minusurile', 'încheierea (recomandarea)'), row_h=28),
             L(4, 'Primul paragraf', 'Scrie introducerea recenziei tale (3-4 propoziții).', 2),
         ]),

    fisa(19, 'pp. 42-43',
         'Reper (manual, p. 43): Calitățile generale ale stilului sunt claritatea, corectitudinea, precizia, '
         'proprietatea termenilor, puritatea. Calitățile particulare: naturalețea, concizia, armonia (fără cacofonii), '
         'varietatea vocabularului, originalitatea.',
         [
             T(1, 'Ce calitate lipsește?', 'Scrie calitatea particulară a stilului care nu e respectată.',
               ['Enunțul', 'Calitatea'], [370, 140], gol(
                   '1. Am mers, apoi am mers mai departe și am tot mers.',
                   '2. Am realizat efectuarea unei plimbări cu scopul de a ne plimba.',
                   '3. Ca cameră, era cam mică.',
                   '4. Marea era albastră ca marea, iar cerul era ca cerul.',
                   '5. Subsemnatul elev am purces la contemplarea ambientului montan.'), row_h=24),
             L(2, 'Rescrie', 'Rescrie enunțurile 1, 2 și 3 de la ex. 1, astfel încât să respecte calitatea stilului.', 2),
         ],
         [
             T(3, 'Aceeași idee, trei stiluri', 'Scrie ideea „A început ploaia pe munte.” în trei feluri.',
               ['Stilul', 'Varianta ta'], [180, 330], gol(
                   'concis', 'armonios (muzical)', 'original (imagine nouă)'), row_h=34),
             L(4, 'Pagina de jurnal', 'Scrie 6-8 rânduri despre o călătorie, cu naturalețe și varietate. Subliniază enunțul cel mai reușit.', 3),
         ]),

    fisa(20, 'pp. 44-45',
         'Recapitulare (manual, pp. 10-27): textul narativ literar, înlănțuirea și alternanța, naratorul, autorul, '
         'personajele, enumerația, textul nonliterar discontinuu și anunțul, principiile cooperării și politeții.',
         [
             X(1, 'Două ferestre', ['Citește textul (scris pentru fișă).'] + FERESTRE),
             T(2, 'Recunoaște', 'Completează după text.',
               ['', 'Din text'], [190, 320], gol(
                   'tipul textului', 'naratorul (persoana)', 'firele narative și procedeul', 'formula de trecere',
                   'enumerația și rolul ei', 'personajul principal'), row_h=24),
         ],
         [
             T(3, 'Cooperare și politețe', 'Scrie ce principiu se respectă sau ce regulă se încalcă.',
               ['Replica (la ora de geografie)', 'Principiul / regula'], [320, 190], gol(
                   '„Scuzați-mă, domnule profesor, pot să vă întreb ceva?”', '„Ești cea mai pasionată elevă din clasă!”',
                   '„Norvegia e în Africa.”', '„Apropo de fiorduri, ce mâncăm azi?”'), row_h=24),
             L(4, 'Anunțul', 'Scrie un anunț (titlu, Ce?, Unde?, Când?, Cum?) pentru expoziția de fotografii „Nordul, de aproape”, organizată de Sara la școală.', 2),
         ]),

    fisa(21, 'pp. 44-45',
         'Recapitulare (manual, pp. 28-43): fraza și coordonarea, conjuncția, derivarea, compunerea, familia lexicală, '
         'pleonasmul, paronimele, locuțiunile, accentul, etapele scrierii, stilul.',
         [
             X(1, 'Trei fraze', [
                 'a) Sara lipea fotografii, iar profesorul pregătea o hartă.',
                 'b) A zâmbit, dar n-a spus nimic.',
                 'c) Visa să ajungă în Norvegia.']),
             T(2, 'Analiza frazelor', 'Completează pentru fiecare frază de la ex. 1.',
               ['Fraza', 'Nr. de propoziții', 'Relația dintre propoziții', 'Conjuncția și felul ei'], [70, 110, 170, 160],
               gol4('a', 'b', 'c'), row_h=28),
             T(3, 'Formarea cuvintelor', 'Scrie cum s-a format fiecare cuvânt.',
               ['Cuvântul', 'Cum s-a format'], [180, 330], gol(
                   'fotografie', 'drumeție', 'profesoară', 'nord-vest', 'a înnopta')),
         ],
         [
             T(4, 'Corectează', 'Scrie varianta corectă.',
               ['Greșit', 'Corect'], [270, 240], gol(
                   'Profesorul a revenit din nou la hartă.', 'Excursia a fost temporală, doar o zi.',
                   'Sara a rămas neânțeleasă.', 'Am o carte, dar însă nu o citesc.'), row_h=26),
             L(5, 'Recenzie scurtă', 'Scrie o recenzie de 60-80 de cuvinte pentru o carte sau un film despre o călătorie, cu o recomandare la final.', 3),
         ]),
]
