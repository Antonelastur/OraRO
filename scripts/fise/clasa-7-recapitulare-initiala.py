# Fișe de exerciții, clasa a VII-a, Recapitularea inițială. Lecția 1 (prezentarea
# manualului) nu are fișă; Lecția 2 reia materia clasei a VI-a (Manual Art 6).
# Manualul și ghidul Art 7 nu conțin test inițial; fișa ține loc de exerciții de
# fixare. Textul este creat pentru fișă.
# Rezolvările: notite-profesor/clasa-7/recapitulare-initiala/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-7-recapitulare-initiala.py

SUB = 'Clasa a VII-a · Recapitulare inițială, Lecția {n} · materia clasei a VI-a (Manual Art 6) · lucru în clasă'
NOTA = 'Exerciții originale de recapitulare pe materia clasei a VI-a; textul este creat pentru fișă. Recapitularea nu se notează în catalog.'


def fisa(n, reper, *pagini):
    return {'cale': f'clasa-7/recapitulare-initiala/lectia-{n}', 'sub': SUB.format(n=n),
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


DEAL = [
    '„În ultima zi de vacanță, Matei a urcat cu bunicul pe dealul din spatele satului. De acolo se vedea toată '
    'valea, cu râul ei subțire și cu acoperișurile roșii.',
    '— Ce liniște! a spus băiatul. Aș sta aici toată ziua.',
    '— Ascultă mai bine, i-a răspuns bunicul, zâmbind. Auzi greierii?',
    'Matei a închis ochii. Deodată, a auzit și greierii, și clopotul bisericii, și vântul prin frunze. Atunci a '
    'înțeles că liniștea nu era deloc goală și și-a dorit să mai rămână puțin.”',
]

FISE = [
    fisa(2,
         'Reper (clasa a VI-a): Naratorul relatează la persoana a III-a (povestitor anonim) sau la persoana I '
         '(personaj-narator). Trăsăturile personajelor sunt numite sau deduse. Verbele de declarație stau înainte, '
         'după sau în interiorul replicii. Verbul are moduri personale: indicativ, conjunctiv, condițional-optativ, '
         'imperativ. Adjectivul și adverbul au grade de comparație.',
         [
             X(1, 'Pe deal', ['Citește textul (scris pentru fișă).'] + DEAL),
             T(2, 'Lectura', 'Completează după text.',
               ['', 'Răspunsul'], [190, 320], gol(
                   'naratorul (persoana)', 'timpul acțiunii', 'spațiul', 'personajul principal',
                   'o secvență descriptivă', 'verbele de declarație (poziția)'), row_h=26),
         ],
         [
             T(3, 'Parte de vorbire și funcție', 'Scrie partea de vorbire și funcția sintactică a cuvântului din text.',
               ['Cuvântul', 'Partea de vorbire', 'Funcția sintactică'], [150, 180, 180], gol3(
                   'acolo', 'roșii', 'băiatul', 'i- (i-a răspuns)', 'Deodată', 'greierii (Auzi greierii?)', 'goală')),
             T(4, 'Modul verbului', 'Scrie modul și timpul (dacă are) verbului din text.',
               ['Verbul', 'Modul', 'Timpul'], [170, 170, 170], gol3(
                   'a urcat', 'aș sta', 'Ascultă', 'era', 'să rămână')),
             X(5, 'Transformă', [
                 'a) Trece în vorbire indirectă: „— Ce liniște! a spus băiatul.” → ______________________________',
                 'b) Scrie adjectivul „subțire” la superlativ absolut de superioritate: ______________________',
                 'c) Înlocuiește adverbul „Deodată” cu alt adverb de timp: ______________________']),
             L(6, 'Continuarea', 'Continuă textul cu 4-5 propoziții, cu o replică a lui Matei și un verb la conjunctiv.', 2),
         ]),
]
