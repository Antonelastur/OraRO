# Fișe de exerciții, clasa a VIII-a, Recapitularea inițială. Lecția 1 (prezentarea
# manualului) nu are fișă; Lecția 2 reia materia clasei a VII-a (Manual Art 7).
# Ghidul Art 8 nu prevede test inițial (îl recomandă doar la preluarea unei clase
# noi); fișa ține loc de exerciții recapitulative. Textul este creat pentru fișă.
# Rezolvările: notite-profesor/clasa-8/recapitulare-initiala/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-8-recapitulare-initiala.py

SUB = 'Clasa a VIII-a · Recapitulare inițială, Lecția {n} · materia clasei a VII-a (Manual Art 7) · lucru în clasă'
NOTA = 'Exerciții originale de recapitulare pe materia clasei a VII-a; textul este creat pentru fișă. Recapitularea nu se notează în catalog.'


def fisa(n, reper, *pagini):
    return {'cale': f'clasa-8/recapitulare-initiala/lectia-{n}', 'sub': SUB.format(n=n),
            'sursa': NOTA, 'reper': reper, 'pagini': list(pagini)}


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


MARE = [
    '„Pe la opt seara, Ilinca și fratele ei au coborât pe plajă. Marea era liniștită, ca o oglindă uriașă, iar '
    'valurile mici șopteau ceva nisipului.',
    '— Uite, prima stea! a strigat băiatul.',
    '— Pune-ți o dorință, i-a zis ea încet. Dar nu i-o spune nimănui!',
    'Băiatul a închis ochii. Nimeni nu știe nici azi ce și-a dorit atunci.”',
]

FISE = [
    fisa(2,
         'Reper (clasa a VII-a): Naratorul poate fi omniscient (persoana a III-a) sau personaj (persoana I). Figurile '
         'de stil: epitetul, comparația, personificarea, metafora, enumerația. Pronumele poate fi personal, de '
         'politețe, reflexiv, posesiv, demonstrativ, nehotărât, interogativ, relativ, negativ. Numeralul, adverbul, '
         'interjecția au valori și funcții proprii.',
         [
             X(1, 'Seara la mare', ['Citește textul (scris pentru fișă).'] + MARE),
             T(2, 'Lectura', 'Completează după text.',
               ['', 'Răspunsul'], [200, 310], gol(
                   'naratorul (tipul, persoana)', 'timpul și spațiul', 'o comparație', 'o personificare', 'un epitet',
                   'începutul secvenței dialogate', 'verbele de declarație'), row_h=26),
         ],
         [
             T(3, 'Pronumele', 'Scrie felul, cazul și funcția sintactică.',
               ['Pronumele', 'Felul', 'Cazul', 'Funcția'], [130, 110, 90, 180], gol4(
                   'ei (fratele ei)', 'i- (i-a zis)', 'o (i-o spune)', 'nimănui', 'Nimeni')),
             T(4, 'Alte părți de vorbire', 'Scrie partea de vorbire, felul și funcția sintactică.',
               ['Cuvântul', 'Partea de vorbire, felul', 'Funcția'], [120, 220, 170], gol3(
                   'prima', 'încet', 'liniștită', 'Uite', 'uriașă', 'atunci'), row_h=20),
             L(5, 'Continuarea', 'Continuă textul cu 5-6 propoziții despre a doua zi, cu o descriere, o replică și un '
               'pronume de politețe.', 2),
         ]),
]
