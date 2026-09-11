# Fișe de exerciții, clasa a VI-a, Recapitularea inițială (6 lecții).
# Recapitularea reia materia de limbă din clasa a V-a (Manual Art 5, pp. 24-35).
# Exerciții originale, altele decât cele din fișele clasei a V-a (Unitatea I,
# lecțiile 9-14) și din manual; textele sunt create pentru fișe.
# Rezolvările: notite-profesor/clasa-6/recapitulare-initiala/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-6-recapitulare-initiala.py

SUB = 'Clasa a VI-a · Recapitulare inițială, Lecția {n} · materia clasei a V-a (Manual Art 5, {pp}) · lucru în clasă'
NOTA = ('Exerciții originale de recapitulare (Manual Art 5, {pp}); textele sunt create pentru fișă. '
        'Recapitularea nu se notează în catalog.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-6/recapitulare-initiala/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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


def perechi(*randuri):
    return [[a, '', b, ''] for a, b in randuri]


FISE = [
    fisa(1, 'pp. 24-25',
         'Reper (clasa a V-a): Propoziția este o comunicare cu un singur predicat. Predicatul arată ce face subiectul; '
         'subiectul arată cine face acțiunea. Propoziția e simplă (subiect și predicat) sau dezvoltată (are și părți '
         'secundare), afirmativă sau negativă. În scris, începe cu majusculă și se încheie cu punct, semnul întrebării '
         'sau semnul exclamării; virgula apare după o strigare și între termenii unei enumerări.',
         [
             T(1, 'Fișa propoziției', 'Completează tabelul: S = simplă, D = dezvoltată, A = afirmativă, N = negativă.',
               ['Propoziția', 'Predicatul', 'Subiectul', 'S / D', 'A / N'], [205, 95, 90, 55, 65],
               [[p, '', '', '', ''] for p in [
                   'Vacanța s-a terminat.', 'Colegii mei nu au uitat de mine.', 'Nu vine trenul.',
                   'Andrei a adus o minge nouă.', 'Soarele strălucea peste tabără.']], row_h=22),
             X(2, 'Câte propoziții?', [
                 'Citește mesajul și încercuiește predicatele.',
                 '„Am ajuns acasă. Mama pregătea cina, iar tata citea. Tu ce faci? Te sun mâine!”',
                 'Câte predicate ai găsit? _____   Câte propoziții are mesajul? _____']),
             T(3, 'Transformă', 'Scrie propoziția transformată cum se cere.',
               ['Propoziția dată → cerința', 'Propoziția nouă'], [250, 260], gol(
                   'Pisica mică a prins ieri un șoarece. → simplă',
                   'Copiii cântă. → dezvoltată',
                   'Trenul de Brașov a plecat la timp. → negativă',
                   'Florile au înflorit. → dezvoltată, negativă'), row_h=26),
         ],
         [
             L(4, 'Dialogul cu semnele lui', [
                 'Rescrie ca dialog, cu linie de dialog, majuscule și semnele de punctuație potrivite:',
                 'ioana l-a întrebat pe radu ai terminat tema radu i-a răspuns aproape mai am o problemă',
                 'ioana a strigat bravo radu'], 4),
             L(5, 'Vacanța în cinci propoziții', [
                 'Scrie cinci propoziții despre vacanța ta: una simplă, două dezvoltate, una negativă și una care',
                 'conține o strigare (cu virgulă). Subliniază predicatele.'], 4),
         ]),

    fisa(2, 'pp. 26-27',
         'Reper (clasa a V-a): Cuvântul are un sens (conținutul) și o formă (sunetele); sensul se stabilește în context. '
         'Dicționarul (explicativ, ortografic, de sinonime, de antonime, enciclopedic, bilingv) așază cuvintele în ordine '
         'alfabetică: dacă primele litere sunt identice, contează prima literă diferită.',
         [
             T(1, 'Același verb, alte sensuri', 'Explică sensul verbului „a trece” în fiecare propoziție.',
               ['Propoziția', 'Sensul'], [280, 230], gol(
                   'Timpul trece repede în vacanță.', 'Am trecut examenul de înot.',
                   'Trecem strada pe la semafor.', 'Mi-a trecut durerea de cap.',
                   'Trec pe la bunica după școală.'), row_h=22),
             X(2, 'Ordinea din dicționar', [
                 'Scrie cuvintele în ordinea în care apar în dicționar.',
                 'cartof, carte, cartonaș, cartier, cartelă, carton',
                 '_____________________________________________________________________________',
                 'Încercuiește, din fiecare pereche, cuvântul care apare primul: a) sare – șarpe  b) ție – tie  c) înot – inel']),
         ],
         [
             T(3, 'Ce dicționar folosești?', 'Alege: explicativ, ortografic (DOOM), de sinonime, de antonime, enciclopedic, bilingv.',
               ['Ce vrei să afli', 'Dicționarul'], [330, 180], gol(
                   'ce înseamnă cuvântul „incunabul”', 'dacă se scrie „copii” sau „copiii”',
                   'alt cuvânt pentru „frumos”', 'cine a fost diaconul Coresi',
                   'cum se spune „bibliotecă” în engleză', 'contrariul cuvântului „generos”'), row_h=22),
             L(4, 'Articolul tău de dicționar', [
                 'Scrie un articol de dicționar pentru cuvântul „ghiozdan”: pluralul, partea de vorbire, sensul',
                 'și un exemplu de propoziție.'], 3),
         ]),

    fisa(3, 'pp. 28-29',
         'Reper (clasa a V-a): Sinonimele au formă diferită și sens asemănător; antonimele au formă diferită și sens opus; '
         'în ambele cazuri, cuvintele sunt aceeași parte de vorbire. Sinonimul se alege după context; un cuvânt cu mai '
         'multe sensuri are sinonime pentru fiecare sens. Există sinonime și pentru expresii.',
         [
             T(1, 'Sinonimul potrivit', 'Înlocuiește verbul „a lua” cu un sinonim potrivit contextului.',
               ['Propoziția', 'Sinonimul'], [360, 150], gol(
                   'Am luat nota zece la test.', 'Ia umbrela, că plouă!', 'Am luat trenul de ora opt.',
                   'Și-a luat o bicicletă nouă.', 'Hoțul a luat banii din sertar.'), row_h=22),
             X(2, 'Intrusul e un antonim', [
                 'În fiecare serie de sinonime s-a strecurat un antonim. Taie-l.',
                 'a) a vorbi, a spune, a zice, a tăcea, a rosti',
                 'b) curajos, viteaz, îndrăzneț, fricos, cutezător',
                 'c) repede, iute, grabnic, încet, rapid',
                 'd) a începe, a porni, a termina, a demara, a declanșa']),
             T(3, 'Antonime', 'Scrie antonimul fiecărui cuvânt.',
               ['Cuvântul', 'Antonimul', 'Cuvântul', 'Antonimul'], [165, 90, 165, 90],
               perechi(('posibil', 'a coase'), ('cunoscut', 'a îmbrăca'), ('a urca', 'bogat')), row_h=22),
         ],
         [
             X(4, 'Expresia, într-un cuvânt', [
                 'Scrie un sinonim pentru fiecare expresie.',
                 'a) a ține minte: ______________        b) a pune la cale: ______________',
                 'c) a-și pierde firea: ______________    d) a bate câmpii: ______________']),
             L(5, 'Fără repetiții', [
                 'Rescrie textul, înlocuind verbul „a merge” cu sinonime potrivite:',
                 '„Dimineața am mers la plajă. Apoi am mers la cofetărie. După-amiază am mers cu bicicleta,',
                 'iar seara am mers la teatru.”'], 4),
         ]),

    fisa(4, 'pp. 30-31',
         'Reper (clasa a V-a): Câmpul lexical cuprinde cuvintele care se raportează la aceeași idee și sunt aceeași parte '
         'de vorbire; au trăsături de sens comune și trăsături care le deosebesc. În câmpul lexical intră și sinonimele, '
         'și expresiile. Un cuvânt cu mai multe sensuri poate intra în câmpuri lexicale diferite.',
         [
             T(1, 'Trei câmpuri lexicale', [
                 'Așază cuvintele: catalog, bagaj, ninsoare, tablă, bilet, ceață, recreație, hartă, grindină,',
                 'diriginte, gară, curcubeu.'],
               ['Școala', 'Călătoria', 'Vremea'], [170, 170, 170], rows=4, row_h=22),
             X(2, 'Intrusul (altă parte de vorbire)', [
                 'Taie cuvântul care nu poate intra în câmpul lexical, fiindcă e altă parte de vorbire.',
                 'a) a alerga, a sări, a înota, alergător          b) bucuros, vesel, fericit, bucurie',
                 'c) doctor, spital, rețetă, sănătos               d) a citi, a scrie, lectură, a desena']),
             X(3, 'Câmpul lexical al cuvântului „casă”', [
                 'Completează.',
                 'sinonime: ____________________________________________________________',
                 'cuvinte înrudite (căsuță...): _________________________________________',
                 'expresii: ____________________________________________________________']),
         ],
         [
             T(4, 'Un cuvânt, două câmpuri', 'Scrie două câmpuri lexicale în care intră fiecare cuvânt, cu câte un exemplu.',
               ['Cuvântul', 'Câmpul 1 (exemplu)', 'Câmpul 2 (exemplu)'], [110, 200, 200], gol3(
                   'coroană', 'aripă', 'vârf'), row_h=26),
             L(5, 'O zi în familie', [
                 'Scrie un text de 5-6 rânduri despre o zi în familie, cu cel puțin șase cuvinte din câmpul lexical',
                 'al familiei. Subliniază-le.'], 4),
         ]),

    fisa(5, 'pp. 32-33',
         'Reper (clasa a V-a): Vocalele ([a], [ă], [î], [e], [i], [o], [u]) pot forma singure o silabă; consoanele se '
         'pronunță cu ajutorul unei vocale; semivocalele ([ĕ], [ĭ], [ŏ], [ŭ]) nu formează singure o silabă. Alfabetul are '
         '31 de litere; de obicei o literă notează un sunet, dar x notează două, iar ce, ci, ge, gi, che, chi, ghe, ghi '
         'pot nota un singur sunet.',
         [
             T(1, 'Litere și sunete', 'Scrie câte litere și câte sunete are fiecare cuvânt.',
               ['Cuvântul', 'Litere', 'Sunete'], [250, 130, 130], gol3(
                   'chitară', 'taxi', 'ceas', 'ghiozdan', 'mâine', 'exemplu'), row_h=22),
             X(2, 'Semivocalele', [
                 'Subliniază literele care notează semivocale.',
                 'iarnă      bou      piatră      ploaie      noi      soare      zău      iepure']),
             X(3, 'Literele rare', [
                 'Scrie câte un cuvânt cu fiecare literă și ce sunet (sau sunete) notează ea în cuvântul tău.',
                 'k: ________________     w: ________________     y: ________________     x: ________________']),
         ],
         [
             T(4, 'Vocală, consoană sau semivocală?', 'Scrie sub fiecare literă V, C sau S.',
               ['c', 'a', 'i', 'e', 't', '|', 'p', 'l', 'o', 'a', 'i', 'e'],
               [42, 42, 42, 42, 42, 44, 42, 42, 42, 42, 42, 42], rows=1, row_h=30),
             L(5, 'Cuvinte cu semivocale', 'Scrie cinci cuvinte care conțin câte o semivocală și subliniaz-o.', 2),
             L(6, 'Alfabetul clasei', 'Scrie numele a cinci colegi în ordine alfabetică și câte vocale are fiecare nume.', 3),
         ]),

    fisa(6, 'pp. 34-35',
         'Reper (clasa a V-a): Silaba conține o singură vocală și se pronunță cu un singur efort expirator. La capăt de '
         'rând, liniuța de despărțire se pune o singură dată. Accentul este pronunțarea mai intensă a unei silabe; în '
         'română nu are loc fix și poate deosebi sensul unor cuvinte scrise la fel. DOOM3 arată accentul corect.',
         [
             T(1, 'Desparte în silabe', 'Desparte în silabe și scrie numărul silabelor.',
               ['Cuvântul', 'Despărțirea în silabe', 'Nr.'], [150, 290, 70], gol3(
                   'astronaut', 'fereastră', 'copilărie', 'ceainic', 'idee', 'poezie'), row_h=22),
             X(2, 'Accentul corect', [
                 'Desparte în silabe și subliniază silaba accentuată (verifică în DOOM3 sau pe dexonline).',
                 'fenomen: ______________    butelie: ______________    regizor: ______________',
                 'unic: ______________        mizerie: ______________    apostrof: ______________']),
             X(3, 'Accentul schimbă sensul', [
                 'Scrie o propoziție cu „compánie” (unitate militară) și una cu „companíe” (tovărășie; firmă).',
                 '_____________________________________________________________________________',
                 '_____________________________________________________________________________']),
         ],
         [
             X(4, 'Rime cu număr de silabe', [
                 'Găsește un cuvânt care rimează și are același număr de silabe.',
                 'carte → ______________     vacanță → ______________     lumină → ______________',
                 'școală → ______________    fereastră → ______________']),
             L(5, 'Catrenul începutului de an', [
                 'Scrie o strofă de patru versuri despre începutul școlii, cu versuri de câte 7-8 silabe.',
                 'Desparte primul vers în silabe și numără-le.'], 4),
         ]),
]
