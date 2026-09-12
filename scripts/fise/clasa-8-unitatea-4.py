# Fișe de exerciții, clasa a VIII-a, Unitatea IV „Unde găsim adevărul?”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 8, pp. 132-161). Textele
# fără autor (enunțuri, reclama, dialogurile, argumentările) sunt create pentru fișe;
# Mihail Sadoveanu, basmul lui Andersen (traducerea din manual), discursul Gretei
# Thunberg și povestea lui Jean-Claude Carrière sunt doar parafrazați. Fără fișă:
# L1 și L8 (proiectul), L20 (evaluarea). Rezolvările: notite-profesor/clasa-8/unitatea-4/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-8-unitatea-4.py

SUB = 'Clasa a VIII-a · Unitatea IV, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 8, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-8/unitatea-4/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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
    fisa(2, 'pp. 132-135',
         'Reper (manual, pp. 132-135): Iapa lui Vodă deschide volumul Hanu Ancuței (1928). La han, într-o toamnă, '
         'comisul Ioniță, un răzeș, spune cum și-a căutat dreptatea la Vodă Mihalache Sturza, în tinerețe, și de ce '
         'calul lui de acum se trage din „iapa lui Vodă”.',
         [
             T(1, 'Cine e cine', 'Scrie, pe scurt, cine este fiecare personaj și ce face în text.',
               ['Personajul', 'Cine este / ce face'], [150, 360], gol(
                   'comisul Ioniță', 'moș Leonte', 'Ancuța cea tânără', 'Ancuța cea de demult', 'boierul de la han',
                   'ofițerul tânăr', 'naratorul'), row_h=26),
             T(2, 'Ordinea întâmplărilor', 'Numerotează întâmplările din povestea lui Ioniță (1-7), în ordinea din text.',
               ['Întâmplarea (pe scurt)', 'Nr.'], [440, 70], gol(
                   'Vodă citește actele și promite dreptate.',
                   'La han sosește un boier într-o droșcă; Ioniță îi închină oala cu vin.',
                   'Ioniță pleacă acasă cu un slujbaș și cu porunca scrisă.',
                   'Ioniță îi spune boierului despre pricina lui și ce va cere lui Vodă.',
                   'La Curte, Ioniță îl recunoaște în Vodă pe boierul de la han.',
                   'Ioniță ajunge la Iași și trage la un han lângă Curtea Domnească.',
                   'Ioniță îi spune lui Vodă că nu și-ar fi luat vorba înapoi.')),
         ],
         [
             T(3, 'Cuvinte de altădată', 'Scrie sensul cuvântului (după notele din manual) și un enunț al tău cu el.',
               ['Cuvântul', 'Sensul', 'Enunțul meu'], [90, 190, 230], gol3(
                   'răzeș', 'pricină', 'chimir', 'droșcă', 'ocină', 'îndreptări'), row_h=26),
             T(4, 'Adevărat sau fals', 'Scrie A sau F, după text.', AF, [420, 90], gol(
                 'Povestea e spusă la Hanul Ancuței, într-o toamnă.', 'Calul lui Ioniță e gras și frumos.',
                 'Ioniță plătește el vinul băut cu boierul.', 'Pricina lui Ioniță a început în tinerețea lui.',
                 'Vodă se supără pe răspunsul lui Ioniță.', 'Calul de acum se trage din iapa de atunci.')),
             L(5, 'Aș vrea să știu', 'Scrie 3-4 rânduri: ce întrebare ți-a rămas după prima lectură și ce crezi că ți-ar răspunde comisul Ioniță.', 1),
         ], titlu='Iapa lui Vodă'),

    fisa(3, 'pp. 136-137',
         'Reper (manual, p. 137): Textul epic poate avea mai multe planuri narative, legate prin înlănțuire, alternanță '
         'sau inserție. Inserția (povestirea în ramă) include o poveste în alta: în rama de la han, comisul Ioniță spune '
         'povestea iepei lui Vodă.',
         [
             T(1, 'Rama sau povestea?', 'Scrie R (rama, la han, în prezent) sau P (povestea lui Ioniță, din tinerețe).',
               ['Elementul', 'R / P'], [420, 90], gol(
                   'toamna aurie și cărăușii cu must', 'droșca cu patru cai și boierul cu barbă roșie',
                   'moș Leonte care tâlcuiește semnele', 'odaia cea mare de la Curte', 'calul slab care nechează ciudat',
                   'ofițerul îmbrăcat în fireturi', 'Ancuța cea tânără, rezemată de ușor')),
             T(2, 'Axa timpului', 'Trei momente: când scrie naratorul, când se spun poveștile la han, când se petrece '
               'întâmplarea cu iapa. Pentru fiecare, scrie un indiciu din text și ce se întâmplă atunci.',
               ['Momentul', 'Un indiciu din text', 'Ce se întâmplă'], [130, 190, 190], gol3(
                   'scrierea', 'spunerea la han', 'întâmplarea cu iapa'), row_h=34),
         ],
         [
             T(3, 'Structuri textuale', 'Scrie structura textuală a fiecărei secvențe și un indiciu.',
               ['Secvența (pe scurt)', 'Structura', 'Indiciul'], [240, 100, 170], gol3(
                   'portretul lui Ioniță', 'discuția cu moș Leonte despre cal',
                   'drumul la Iași și intrarea la Curte', 'Ioniță lămurește pricina'), row_h=28),
             T(4, 'Ramă nouă', 'Mută povestea lui Ioniță într-o ramă de azi. Completează.',
               ['Elementul', 'Rama de azi'], [150, 360], gol(
                   'locul', 'povestitorul', 'ascultătorii', 'momentul', 'ce păstrez din poveste'), row_h=28),
         ], titlu='Structuri textuale'),

    fisa(4, 'pp. 138-139',
         'Reper (manual, p. 138): În povestirea în ramă, naratorul din ramă devine ascultător, iar un personaj devine '
         'narator. Antiteza alătură doi termeni opuși (idei, personaje, situații, planuri) ca să sublinieze opoziția '
         'dintre ei.',
         [
             T(1, 'Doi naratori', 'Compară cei doi naratori.',
               ['Întrebarea', 'Naratorul din ramă', 'Comisul Ioniță'], [170, 170, 170], gol3(
                   'La ce persoană relatează?', 'Participă la ce povestește?', 'Ce rol are în celălalt plan?'), row_h=32),
             T(2, 'Antiteze', 'Scrie termenul opus din text și ce subliniază opoziția.',
               ['Primul termen', 'Termenul opus', 'Ce subliniază'], [160, 160, 190], gol3(
                   'vremea de război dintre împărați', 'cei care cad doborâți de trudă', 'răzeșul care se ține de lege',
                   'boierul mărunt de la han'), row_h=30),
         ],
         [
             T(3, 'Din fapte, trăsături', 'Scrie personajul și trăsătura care reiese din fapta lui.',
               ['Fapta (pe scurt)', 'Personajul', 'Trăsătura'], [250, 110, 150], gol3(
                   'închină oala către toți cei de la han', 'se ia la întrecere cu moș Leonte în tâlcuiri',
                   'își mângâie barba și se joacă cu lanțugul', 'umblă printre oaspeți cu vin și vorbe bune',
                   'caută semnele în cartea de zodii'), row_h=26),
             L(4, 'Un personaj în antiteză', 'Scrie 4-5 rânduri despre un personaj inventat, construit prin antiteză: cum pare și cum este.', 1),
         ], titlu='Naratorii și personajele. Antiteza'),

    fisa(5, 'pp. 140-141',
         'Reper (manual, pp. 140-141): Textul se poate interpreta prin simboluri (hanul, calul, drumul), prin atmosfera '
         'spunerii poveștilor, prin tehnica amânării și prin ideea de adevăr: a spune ce crezi, a primi dreptate, a fi tu '
         'însuți.',
         [
             T(1, 'Simboluri', 'Scrie ce poate simboliza fiecare element și un detaliu din text.',
               ['Elementul', 'Ce poate simboliza', 'Un detaliu din text'], [170, 170, 170], gol3(
                   'porțile deschise ale hanului', 'drumul spre Iași', 'sacul cu hârțoage vechi', 'râsul calului',
                   'oala cu vin'), row_h=28),
             T(2, 'Opinii despre text', 'Scrie dacă ești de acord și un argument din text.',
               ['Afirmația', 'Acord?', 'Argumentul meu'], [200, 70, 240], gol3(
                   'Ioniță e curajos, nu obraznic.', 'Vodă îl ajută fiindcă l-a amuzat.',
                   'Amânările fac povestea mai interesantă.', 'Adevărul are nevoie de curaj.'), row_h=34),
         ],
         [
             T(3, 'Alt final', 'Imaginează-ți ce s-ar fi întâmplat în fiecare situație.',
               ['Situația', 'Ce s-ar fi întâmplat'], [200, 310], gol(
                   'boierul de la han nu era Vodă', 'Ioniță nu-l recunoștea pe boier', 'Vodă nu-i făcea dreptate',
                   'Ioniță își lua vorba înapoi'), row_h=32),
             L(4, 'Un adevăr spus cu curaj', 'Scrie 5-6 rânduri despre o situație, reală sau imaginată, în care a spune adevărul a cerut curaj.', 1),
         ], titlu='Semnificațiile textului'),

    fisa(6, 'pp. 142-143',
         'Reper (manual, pp. 142-143): Reclama e un text nonliterar, de obicei multimodal (cuvinte, imagini, sunete, '
         'culori), care vrea să convingă. O reclamă reușită respectă principiile: atenția, înțelegerea, încrederea, '
         'marca, acțiunea, efectul.',
         [
             X(1, 'O reclamă (creată pentru fișă)', [
                 'Citește descrierea afișului.',
                 'Pe un fundal albastru-închis, o bicicletă stă rezemată de un copac înflorit. Pe roata din față s-a așezat '
                 'un fluture. Sus, cu litere albe, mari: „Pedalezi și primăvara vine cu tine.” Jos, în colțul din dreapta, '
                 'cu litere mici: „Roata Lină – biciclete ușoare pentru oraș”. Dedesubt, și mai mic: „Casca nu e inclusă '
                 'în preț.”']),
             T(2, 'Analiza reclamei', 'Răspunde pe scurt.',
               ['Întrebarea', 'Răspunsul meu'], [210, 300], gol(
                   'Ce produs promovează?', 'Cui se adresează?', 'Care e scopul?', 'Care e sloganul?',
                   'Ce sugerează fluturele?', 'De ce e marca jos și mică?', 'Ce rol are textul cel mai mic?'), row_h=26),
         ],
         [
             T(3, 'Principiile reclamei', 'Scrie cum respectă reclama de la ex. 1 fiecare principiu sau ce îi lipsește.',
               ['Principiul', 'Reclama de la ex. 1'], [120, 390], gol(
                   'atenția', 'înțelegerea', 'încrederea', 'marca', 'acțiunea', 'efectul'), row_h=26),
             T(4, 'Sloganul meu', 'Propune un slogan și o imagine pentru fiecare produs.',
               ['Produsul', 'Sloganul', 'Imaginea'], [150, 210, 150], gol3(
                   'o librărie de cartier', 'o apă minerală', 'o aplicație de învățat limbi'), row_h=32),
         ], titlu='Reclama'),

    fisa(7, 'pp. 144-145',
         'Reper (manual, p. 144): În basmul lui Hans Christian Andersen, doi escroci îi „țes” unui împărat haine pe '
         'care, spun ei, nu le pot vedea proștii și cei nepotriviți pentru slujbă. De teamă, toți mint, până când un '
         'copil spune adevărul.',
         [
             T(1, 'Personajele și motivele lor', 'Scrie ce spune sau face fiecare și de ce.',
               ['Personajul', 'Ce spune sau face', 'De ce'], [120, 200, 190], gol3(
                   'împăratul', 'cei doi pehlivani', 'sfetnicul cel bătrân', 'curtenii', 'oamenii de pe stradă', 'copilul'),
               row_h=26),
             T(2, 'Adevărat sau fals', 'Scrie A sau F, după text.', AF, [420, 90], gol(
                 'Împăratul își cheltuia toți banii pe haine.',
                 'Pehlivanii spun că stofa nu o văd proștii și cei nepotriviți în slujbă.',
                 'Sfetnicul cel bătrân recunoaște că nu vede nimic.', 'Împăratul le dă pehlivanilor decorații.',
                 'După strigătul copilului, împăratul se oprește din alai.')),
         ],
         [
             T(3, 'De ce tac?', 'Scrie ce ar fi riscat fiecare dacă spunea adevărul.',
               ['Cine', 'Ce risca'], [150, 360], gol(
                   'sfetnicul cel bătrân', 'împăratul', 'un curtean', 'un om din mulțime'), row_h=28),
             L(4, 'Hainele de azi', 'Scrie 5-6 rânduri despre o situație de azi în care oamenii se prefac că „văd hainele împăratului” (o modă, o părere a grupului).', 1),
         ], titlu='Hainele cele noi ale împăratului'),

    fisa(9, 'pp. 147-148',
         'Reper (manual, p. 148): Persuasiunea e capacitatea mesajului de a convinge. Nonverbalul ține de corp '
         '(mișcările capului, mimica, gesturile, postura, privirea); paraverbalul ține de voce (volum, ritm, pauze, '
         'accentuarea cuvintelor-cheie, intonație).',
         [
             T(1, 'Nonverbal sau paraverbal?', 'Scrie NV (nonverbal) sau PV (paraverbal).',
               ['Comportamentul', 'NV / PV'], [420, 90], gol(
                   'privești publicul în ochi', 'faci o pauză înaintea ideii importante', 'ridici palma deschisă',
                   'vorbești mai încet, aproape în șoaptă', 'stai drept, cu umerii relaxați', 'accentuezi un cuvânt-cheie',
                   'încrunți sprâncenele', 'vorbești mai rar')),
             T(2, 'Același mesaj, efecte diferite', 'Scrie ce efect are fiecare mod de a rosti îndemnul „Nu renunța acum!”.',
               ['Cum e rostit', 'Efectul asupra ascultătorului'], [250, 260], gol(
                   'monoton, cu privirea în foi', 'strigat, cu degetul arătător ridicat',
                   'rar, cu o pauză după „Nu”, privind publicul', 'repede, zâmbind, cu mâinile în buzunare'), row_h=30),
         ],
         [
             T(3, 'Planul discursului meu', 'Alege o temă de la p. 148 și planifică un discurs de două minute.',
               ['Partea', 'Ce spun', 'Gest / voce'], [100, 250, 160], gol3(
                   'începutul', 'ideea 1', 'ideea 2', 'încheierea'), row_h=36),
             T(4, 'Grila ascultătorului', 'Ascultă un coleg și scrie DA sau NU.',
               ['Criteriul', 'DA / NU'], [420, 90], gol(
                   'A privit publicul.', 'A folosit pauze.', 'A accentuat cuvintele-cheie.', 'Gesturile au însoțit ideile.',
                   'Volumul a fost potrivit sălii.', 'Ritmul a variat.')),
         ], titlu='Comportamente persuasive'),

    fisa(10, 'p. 149',
         'Reper (manual, p. 149): Circumstanțialul de loc arată situarea sau orientarea în spațiu (unde? de unde? până '
         'unde? pe unde? încotro?). Determină un verb, o locuțiune, o interjecție sau un adjectiv; se exprimă prin '
         'substantiv, adverb, locuțiune adverbială, pronume, numeral, supin.',
         [
             T(1, 'Circumstanțialul de loc', 'Scrie circumstanțialul de loc și partea de vorbire prin care se exprimă.',
               ['Enunțul (scris pentru fișă)', 'Circumstanțialul', 'Partea de vorbire'], [220, 140, 150], gol3(
                   'Am lăsat bicicleta lângă poartă.', 'Pisica a sărit de pe dulap.', 'Vino încoace!', 'Te caut peste tot.',
                   'S-a așezat lângă mine.', 'Dintre cele două case, locuiesc în a doua.', 'S-a dus la înot.'), row_h=20),
             T(2, 'Întrebările', 'Scrie întrebarea potrivită și circumstanțialul de loc.',
               ['Enunțul', 'Întrebarea', 'Circumstanțialul'], [220, 130, 160], gol3(
                   'Norii vin dinspre mare.', 'Am mers până la capătul satului.', 'Trenul trece prin tunel.',
                   'Pleacă spre munte.')),
         ],
         [
             T(3, 'Loc sau altceva?', 'Scrie funcția sintactică a cuvintelor date.',
               ['Enunțul', 'Cuvintele', 'Funcția sintactică'], [210, 120, 180], [
                   ['Mă gândesc la mare.', 'la mare', ''], ['Merg la mare.', 'la mare', ''],
                   ['Casa de lângă râu e veche.', 'de lângă râu', ''], ['Stau lângă râu.', 'lângă râu', '']]),
             L(4, 'Drumul meu spre școală', 'Descrie în 4-5 rânduri drumul spre școală, cu cel puțin cinci circumstanțiale de loc diferite. Subliniază-le.', 2),
         ], titlu='Circumstanțialul de loc'),

    fisa(11, 'pp. 150-151',
         'Reper (manual, pp. 150-151): Circumstanțiala de loc e introdusă prin adverbe relative (unde, încotro, '
         'dincotro), adverbe nehotărâte (oriunde), pronume și adjective relative sau nehotărâte cu prepoziții. Cu un '
         'corelativ în regentă (acolo, de acolo), se desparte prin virgulă.',
         [
             T(1, 'Circumstanțiala de loc', 'Scrie subordonata și elementul de relație (partea de vorbire).',
               ['Fraza (scrisă pentru fișă)', 'Subordonata', 'Elementul de relație'], [200, 170, 140], gol3(
                   'Mergem unde e mai răcoare.', 'Câinele o urmează oriunde se duce.', 'A plecat de unde a venit.',
                   'S-a urcat pe ce era mai înalt.', 'Aleargă încotro îl cheamă vântul.', 'Stă lângă cine îl ajută.'),
               row_h=24),
             T(2, 'Același „unde”', 'Scrie felul subordonatei introduse prin „unde”.',
               ['Fraza', 'Felul subordonatei'], [300, 210], gol(
                   'Știu unde ai pus cheile.', 'Pune cheile unde le găsești ușor.', 'Orașul unde m-am născut e mic.',
                   'Depinde unde găsim cazare.')),
         ],
         [
             T(3, 'Expansiune', 'Transformă circumstanțialul de loc într-o circumstanțială de loc.',
               ['Propoziția', 'Fraza cu circumstanțială de loc'], [200, 310], gol(
                   'Mergem la bunici.', 'Stai lângă prietenul tău.', 'Vine din satul natal.', 'Caut ochelarii peste tot.'),
               row_h=26),
             T(4, 'Punctuația', 'Rescrie cu punctuația corectă.',
               ['Fraza', 'Varianta corectă'], [255, 255], gol(
                   'Unde e liniște acolo mă odihnesc.', 'Merg, unde vrei tu.',
                   'Până unde se vede drumul până acolo mergem.'), row_h=26),
         ], titlu='Circumstanțiala de loc'),

    fisa(12, 'p. 152',
         'Reper (manual, p. 152): Circumstanțialul de timp arată momentul, durata sau frecvența acțiunii (când? de când? '
         'până când?). Se exprimă prin substantiv, adverb, locuțiune adverbială, pronume, numeral și forme verbale '
         'nepersonale (supin, infinitiv, gerunziu).',
         [
             T(1, 'Circumstanțialul de timp', 'Scrie circumstanțialul de timp și partea de vorbire prin care se exprimă.',
               ['Enunțul (scris pentru fișă)', 'Circumstanțialul', 'Partea de vorbire'], [220, 140, 150], gol3(
                   'Ne vedem mâine.', 'Iarna mergem la schi.', 'Am plecat după ore.', 'Vine din când în când.',
                   'Am ajuns înaintea lor.', 'Mă spăl pe mâini înainte de a mânca.', 'Plimbându-mă, am găsit o monedă.'),
               row_h=20),
             T(2, 'Ortograme', 'Alege forma corectă.',
               ['Enunțul', 'Forma corectă'], [380, 130], gol(
                   'Merg la mare (o dată / odată) pe an.', '(Odată / O dată) ce a terminat, a plecat.',
                   'Nu ne-am mai văzut (de mult / demult).', 'Au trăit (demult / de mult) niște uriași.',
                   '(Deodată / De odată) s-a stins lumina.')),
         ],
         [
             T(3, 'Moment, durată, frecvență', 'Scrie circumstanțialul de timp și M (moment), D (durată) sau F (frecvență).',
               ['Enunțul', 'Circumstanțialul', 'M / D / F'], [250, 170, 90], gol3(
                   'Am citit toată după-amiaza.', 'Mergem la bunici în fiecare vară.', 'Concertul începe la ora șapte.',
                   'A plouat trei zile.', 'Uneori uit cheile acasă.')),
             L(4, 'Ziua mea', 'Scrie 4-5 rânduri despre o zi obișnuită, cu șase circumstanțiale de timp exprimate prin părți de vorbire diferite.', 2),
         ], titlu='Circumstanțialul de timp'),

    fisa(13, 'pp. 153-154',
         'Reper (manual, pp. 153-154): Circumstanțiala de timp e introdusă prin adverbe (când, oricând), conjuncții (până, '
         'cum, cât) și locuțiuni conjuncționale (după ce, până să, îndată ce, în timp ce, ori de câte ori). Cu un corelativ '
         'în regentă (atunci, imediat), se desparte prin virgulă.',
         [
             T(1, 'Circumstanțiala de timp', 'Scrie subordonata și elementul de relație.',
               ['Fraza (scrisă pentru fișă)', 'Subordonata', 'Elementul de relație'], [200, 180, 130], gol3(
                   'Te sun când ajung acasă.', 'Am așteptat până s-a oprit ploaia.', 'Cum a sunat clopoțelul, au ieșit.',
                   'În timp ce gătea, asculta radio.', 'Scrie-mi oricând ai nevoie.', 'Ori de câte ori plouă, citesc.'),
               row_h=24),
             T(2, 'Înainte, în același timp, după', 'Scrie dacă acțiunea din subordonată e anterioară, simultană sau posterioară celei din regentă.',
               ['Fraza', 'Raportul temporal'], [330, 180], gol(
                   'După ce am mâncat, am ieșit.', 'Cât timp vorbea, toți tăceau.',
                   'Am plecat înainte să înceapă furtuna.', 'Până să vii tu, am terminat.')),
         ],
         [
             T(3, 'Expansiune', 'Transformă circumstanțialul de timp într-o circumstanțială de timp.',
               ['Propoziția', 'Fraza cu circumstanțială de timp'], [220, 290], gol(
                   'La sosirea trenului, am alergat pe peron.', 'Înainte de culcare, citesc.',
                   'Vara lucrează la o fermă.', 'De la mutarea în oraș, nu l-am mai văzut.'), row_h=26),
             T(4, 'Punctuația', 'Rescrie cu punctuația corectă.',
               ['Fraza', 'Varianta corectă'], [255, 255], gol(
                   'Atunci am înțeles când am văzut fotografia.', 'Imediat ce a sosit a început să povestească.',
                   'Am citit, până am adormit.'), row_h=26),
         ], titlu='Circumstanțiala de timp'),

    fisa(14, 'p. 155',
         'Reper (manual, p. 155): Circumstanțialul de mod arată cum se desfășoară o acțiune sau cum se manifestă o '
         'însușire (cum? în ce fel?). Determină un verb, o locuțiune, o interjecție, un adjectiv sau un adverb; se exprimă '
         'prin substantiv, pronume, numeral, adverb, locuțiune adverbială, infinitiv, gerunziu, interjecție.',
         [
             T(1, 'Circumstanțialul de mod', 'Scrie circumstanțialul de mod și partea de vorbire prin care se exprimă.',
               ['Enunțul (scris pentru fișă)', 'Circumstanțialul', 'Partea de vorbire'], [220, 140, 150], gol3(
                   'Scrie citeț.', 'A deschis ușa cu grijă.', 'Desenează ca un pictor adevărat.',
                   'A intrat fără a bate la ușă.', 'Vine șchiopătând.', 'Ușa s-a închis trosc!', 'Au lucrat pe rând.'),
               row_h=20),
             T(2, 'Regentul', 'Scrie circumstanțialul de mod și regentul lui (partea de vorbire).',
               ['Construcția', 'Circumstanțialul', 'Regentul'], [210, 130, 170], gol3(
                   'o lucrare bine scrisă', 'Hai încet, că e gheață!', 'A vorbit convingător.',
                   'Și-a bătut joc de noi fără rușine.')),
         ],
         [
             T(3, 'Cum?', 'Completează cu un circumstanțial de mod exprimat prin partea de vorbire cerută.',
               ['Enunțul', 'Partea de vorbire', 'Circumstanțialul'], [200, 170, 140], [
                   ['Citește ... .', 'adverb', ''], ['A trecut examenul ... .', 'locuțiune adverbială', ''],
                   ['Plângea ... .', 'gerunziu', ''], ['A rezolvat problema ... .', 'substantiv cu prepoziție', '']]),
             L(4, 'Portret în mișcare', 'Descrie în 4-5 rânduri cum se mișcă și cum vorbește un personaj din Iapa lui Vodă, cu cinci circumstanțiale de mod. Subliniază-le.', 2),
         ], titlu='Circumstanțialul de mod'),

    fisa(15, 'pp. 156-157',
         'Reper (manual, pp. 156-157): Circumstanțiala de mod e introdusă prin adverbe (cum, cât, oricum, oricât), '
         'conjuncția precum și locuțiuni (fără să, după cum, ca și cum, ca și când, de parcă). Cu un corelativ în regentă '
         '(așa, astfel, întocmai), se desparte prin virgulă.',
         [
             T(1, 'Circumstanțiala de mod', 'Scrie subordonata și elementul de relație.',
               ['Fraza (scrisă pentru fișă)', 'Subordonata', 'Elementul de relație'], [210, 180, 120], gol3(
                   'Vorbește de parcă ar ști totul.', 'A plecat fără să închidă ușa.', 'Fă cum crezi de cuviință.',
                   'Ne privea ca și cum nu ne-ar cunoaște.', 'Precum ne-a promis, a venit la timp.',
                   'Obosit cum era, tot a terminat.'), row_h=24),
             T(2, 'Același „cum”', 'Scrie felul subordonatei introduse prin „cum”.',
               ['Fraza', 'Felul subordonatei'], [300, 210], gol(
                   'Nu știu cum a reușit.', 'Cum a intrat, a aprins lumina.', 'A gătit cum a învățat de la bunica.',
                   'Îmi place felul cum râde.')),
         ],
         [
             T(3, 'Expansiune', 'Transformă circumstanțialul de mod într-o circumstanțială de mod.',
               ['Propoziția', 'Fraza cu circumstanțială de mod'], [200, 310], gol(
                   'A ieșit pe furiș.', 'Lucrează după instrucțiuni.', 'Vorbea ca un profesor.', 'A plecat fără un cuvânt.'),
               row_h=26),
             T(4, 'Punctuația', 'Rescrie cu punctuația corectă.',
               ['Fraza', 'Varianta corectă'], [255, 255], gol(
                   'Astfel am lucrat cum ne-a arătat profesorul.', 'Cum ne-a cerut antrenorul așa ne-am încălzit.',
                   'Merge, fără să se grăbească.'), row_h=26),
         ], titlu='Circumstanțiala de mod'),

    fisa(16, 'pp. 158-159',
         'Reper (manual, p. 158): Orice temă poate fi privită din perspective opuse: argumente pro și contraargumente, '
         'fiecare cu exemple. Trecerea de la unul la altul se face prin conectori: dar, totuși, dimpotrivă, în schimb, pe '
         'de altă parte, cu toate acestea.',
         [
             X(1, 'Uniforma școlară', [
                 'Citește textul (scris pentru fișă).',
                 'Mulți colegi spun că uniforma școlară ar trebui interzisă. Eu cred, dimpotrivă, că e utilă, deși are și '
                 'neajunsuri.',
                 'În primul rând, uniforma îi face pe elevi mai egali: nimeni nu mai e judecat după haine. E adevărat că îți '
                 'ia din libertatea de a te exprima prin ce porți. Totuși, îți poți arăta personalitatea prin felul în care '
                 'vorbești, desenezi sau scrii.',
                 'În al doilea rând, uniforma scutește timp dimineața. Pe de altă parte, costă bani și se tocește repede. În '
                 'schimb, o uniformă bună ține un an întreg, pe când hainele la modă se schimbă de la o lună la alta.',
                 'Prin urmare, cred că avantajele uniformei sunt mai mari decât dezavantajele.']),
             T(2, 'Argumente și contraargumente', 'Completează pe baza textului.',
               ['Argumentul pro', 'Contraargumentul', 'Cum e combătut'], [170, 170, 170],
               [['', '', ''] for _ in range(2)], row_h=44),
         ],
         [
             T(3, 'Conectorii', 'Scrie din text conectorii, după rolul lor.',
               ['Rolul', 'Conectorii din text'], [200, 310], gol(
                   'introduc opinia', 'ierarhizează argumentele', 'introduc un contraargument',
                   'resping contraargumentul', 'introduc concluzia')),
             T(4, 'Pro și contra', 'Teza: „Școala ar trebui să înceapă la ora nouă.” Completează.',
               ['', 'Pro', 'Contra'], [110, 200, 200], gol3(
                   'argumentul 1', 'exemplul', 'argumentul 2', 'exemplul'), row_h=30),
         ], titlu='Pro-contra (1/2)'),

    fisa(17, 'pp. 158-159',
         'Reper (manual, p. 159): Textul pro-contra are introducere (opinia), cuprins (argumente, fiecare cu '
         'contraargumentul și exemplele lor) și încheiere (poziția reafirmată, care respinge contraargumentele). '
         'Conectorii marchează trecerea de la pro la contra.',
         [
             T(1, 'Ordonează textul', 'Numerotează enunțurile (1-6), ca să obții un text pro-contra coerent.',
               ['Enunțul (scris pentru fișă)', 'Nr.'], [440, 70], gol(
                   'Așadar, cred că biblioteca deschisă în pauze ar fi un câștig pentru toți.',
                   'Consider că biblioteca școlii ar trebui să fie deschisă și în pauze.',
                   'Unii spun că în pauze elevii au nevoie de mișcare, nu de cărți.',
                   'În primul rând, elevii ar putea împrumuta cărți fără să rămână după ore.',
                   'Totuși, biblioteca nu i-ar obliga pe toți să stea înăuntru: ar fi doar o posibilitate în plus.',
                   'În al doilea rând, ar fi un loc liniștit pentru cine vrea să recitească o lecție.'), row_h=24),
             T(2, 'Planul textului meu', 'Tema: „Sunt utile concursurile școlare?” Completează planul.',
               ['Partea', 'Ce scriu'], [190, 320], gol(
                   'opinia', 'argumentul 1 și exemplul', 'contraargumentul 1 și exemplul', 'argumentul 2 și exemplul',
                   'contraargumentul 2 și exemplul', 'concluzia'), row_h=30),
         ],
         [
             T(3, 'Conectorul potrivit', 'Completează cu un conector de opoziție potrivit.',
               ['Enunțul', 'Conectorul'], [390, 120], gol(
                   'Concursurile te motivează; ..., pot crea stres.',
                   'Unii cred că reclamele mint. ..., multe reclame informează corect.',
                   'Mulți cred că cititul e plictisitor; ..., te poate purta oriunde.',
                   'E scump să ai un animal. ..., bucuria lui nu are preț.')),
             L(4, 'Introducerea', 'Scrie introducerea textului tău (2-3 rânduri), cu opinia clar formulată.', 1),
         ], titlu='Pro-contra (2/2)'),

    fisa(18, 'pp. 160-161',
         'Reper (manual, pp. 160-161): Recapitulăm lectura din Unitatea IV: planurile narative și inserția (povestirea în '
         'ramă), naratorul și personajele, antiteza, structurile textuale, semnificațiile textului.',
         [
             X(1, 'La cabană', [
                 'Citește textul (scris pentru fișă).',
                 'Ploua de trei zile, iar noi, cinci drumeți, stăteam strânși lângă sobă, în cabana de sub creastă. '
                 'Cabanierul, un om scund, cu barba ca vata și cu ochi vioi, a pus ceainicul pe foc și a zis: „Dacă tot nu '
                 'plecați nicăieri, vă spun ce mi s-a întâmplat pe vremea când eram ghid.”',
                 '„Duceam un grup de orășeni spre vârf. Unul dintre ei, un domn grăbit, cu bocanci noi, lucioși, râdea de mine '
                 'că merg prea încet. La jumătatea drumului, ceața a acoperit totul. Domnul cel grăbit s-a oprit, speriat, iar '
                 'eu am mers înainte, încet, pas cu pas, cum merg de treizeci de ani. Seara, toți eram în cabană, teferi.”',
                 'Cabanierul a tăcut, a turnat ceaiul și a zâmbit: „Muntele nu-i iubește pe cei grăbiți.” Afară, ploaia '
                 'începuse să se oprească.']),
             T(2, 'Rama și povestea', 'Completează pentru cele două planuri.',
               ['Întrebarea', 'Rama', 'Povestea cabanierului'], [120, 195, 195], gol3(
                   'Unde?', 'Când?', 'Cine povestește?', 'La ce persoană?'), row_h=24),
         ],
         [
             T(3, 'Antiteza', 'Scrie termenul opus din text și ce subliniază opoziția.',
               ['Primul termen', 'Termenul opus', 'Ce subliniază'], [160, 170, 180], gol3(
                   'domnul cel grăbit', 'râsul de la începutul drumului', 'ploaia de afară'), row_h=32),
             T(4, 'Adevărat sau fals', 'Scrie A sau F, după text.', AF, [420, 90], gol(
                 'Naratorul din ramă e unul dintre drumeți.', 'Cabanierul a fost ghid.',
                 'Domnul cel grăbit ajunge primul în vârf.', 'Povestea cabanierului e o inserție.',
                 'Ploaia se oprește înainte de poveste.')),
         ], titlu='Recapitulare, lectură'),

    fisa(19, 'pp. 160-161',
         'Reper (manual, pp. 149-159): Recapitulăm circumstanțialele de loc, de timp și de mod, circumstanțialele '
         'propoziționale corespunzătoare (elementele de relație, corelativele, punctuația) și textul pro-contra.',
         [
             X(1, 'La bunicul', [
                 'Citește enunțurile (scrise pentru fișă).',
                 '(1) Când s-a întors de la câmp, bunicul ne-a adus mere.   (2) Le-a pus pe masă cum pune un negustor marfa.',
                 '(3) Le-am mâncat unde ne-a arătat, sub nuc.   (4) Rareori am fost mai fericiți.',
                 '(5) Seara, bunicul a plecat încet spre grajd.']),
             T(2, 'Circumstanțialele', 'Scrie felul circumstanțialului și partea de vorbire.',
               ['Cuvintele', 'Enunțul', 'Felul', 'Partea de vorbire'], [110, 60, 170, 170], [
                   ['de la câmp', '(1)', '', ''], ['pe masă', '(2)', '', ''], ['sub nuc', '(3)', '', ''],
                   ['Rareori', '(4)', '', ''], ['Seara', '(5)', '', ''], ['încet', '(5)', '', ''],
                   ['spre grajd', '(5)', '', '']], row_h=20),
             T(3, 'Subordonatele', 'Scrie subordonata, felul ei și elementul de relație.',
               ['Fraza', 'Subordonata', 'Felul', 'Elementul de relație'], [50, 210, 130, 120], gol4('(1)', '(2)', '(3)'),
               row_h=26),
         ],
         [
             T(4, 'Același cuvânt, subordonate diferite', 'Scrie felul subordonatei.',
               ['Fraza', 'Felul subordonatei'], [300, 210], gol(
                   'Nu știu când pleacă trenul.', 'Te sun când pleacă trenul.', 'Ora când pleacă trenul e pe bilet.',
                   'Merg unde pleacă trenul.')),
             T(5, 'Pro și contra, pe scurt', 'Teza: „E bine să ai telefon de la zece ani.” Completează.',
               ['', 'Argumentul', 'Exemplul'], [110, 200, 200], gol3('pro', 'contra', 'concluzia mea'), row_h=34),
         ], titlu='Recapitulare, limbă română'),
]
