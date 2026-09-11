# Fișe de exerciții, clasa a V-a, Unitatea I „Despre mine. Selfie”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 5). Rezolvările sunt
# în notite-profesor/clasa-5/unitatea-1/. Generare:
# python scripts/fise_exercitii.py scripts/fise/clasa-5-unitatea-1.py

SUB = 'Clasa a V-a · Unitatea I, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = 'Exerciții originale pe conținutul lecției (Manual Art 5, {pp}). Exercițiile din manual rămân temă pentru acasă.'

FISE = [
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-1/lectia-9',
        'titlu': 'Fișă de exerciții — Propoziția. Tipuri de propoziții',
        'sub': SUB.format(n=9, pp='pp. 24-25'),
        'sursa': NOTA.format(pp='pp. 24-25'),
        'reper': ('Reper (manual, pp. 24-25): Propoziția este o comunicare cu un singur predicat. Predicatul arată '
                  'ce face subiectul; subiectul arată cine face acțiunea. Propoziția simplă are doar predicat și '
                  'subiect; cea dezvoltată are și cel puțin o parte secundară. După forma verbului cu rol de '
                  'predicat, propoziția este afirmativă sau negativă.'),
        'pagini': [
            [
                {'t': 'table', 'n': 1, 'title': 'Propoziție sau nu?', 'rows': 5, 'row_h': 20,
                 'prompt': 'Scrie DA dacă grupul de cuvinte este propoziție și NU dacă nu este.',
                 'cols': ['Grupul de cuvinte', 'DA / NU'], 'widths': [400, 110],
                 'data': [['Copiii se joacă în parc.', ''], ['Pe o bancă verde.', ''], ['Ploaia a încetat.', ''],
                          ['Foarte frumos și liniștit.', ''], ['Cu o carte în mână.', '']]},
                {'t': 'text', 'n': 2, 'title': 'Vânătoarea de predicate',
                 'prompt': ['Citește mesajul lui Vlad și încercuiește predicatele.',
                            '„Bună, Irina! Mâine plecăm la munte. Tata a luat bilete. Tu vii? Mama face sandvișuri.”',
                            'Câte propoziții are mesajul? _____   De ce „Bună, Irina!” nu e propoziție? ______________']},
                {'t': 'text', 'n': 3, 'title': 'Cine face? Ce face?',
                 'prompt': ['Completează subiectul sau predicatul care lipsește; scrie S sau P deasupra lui.',
                            'a) ____________ latră la poștaș.     b) Bunica ____________ o plăcintă.',
                            'c) ____________ zboară spre țările calde.     d) Elevii ____________ în bancă.']},
                {'t': 'table', 'n': 4, 'title': 'Adevărat sau fals?', 'rows': 4, 'row_h': 20,
                 'prompt': 'Scrie A (adevărat) sau F (fals).',
                 'cols': ['Afirmația', 'A / F'], 'widths': [430, 80],
                 'data': [['O propoziție poate avea două predicate.', ''],
                          ['Propoziția simplă are doar subiect și predicat.', ''],
                          ['Propoziția „Nu știu.” este negativă.', ''],
                          ['În scris, propoziția începe cu literă mică.', '']]},
                {'t': 'lines', 'n': 5, 'title': 'Întoarce propoziția', 'weight': 1,
                 'prompt': ['Schimbă forma predicatului: din afirmativă în negativă sau invers.',
                            'a) Nu am văzut filmul.     b) Luca ascultă muzică.     c) Câinele nu a mâncat.     d) Eu înțeleg exercițiul.']},
            ],
            [
                {'t': 'table', 'n': 6, 'title': 'Scara propoziției', 'rows': 4, 'row_h': 24,
                 'prompt': 'La fiecare treaptă, păstrează propoziția de dinainte și adaugă un singur cuvânt nou. Propoziția trebuie să rămână corectă.',
                 'cols': ['Treapta', 'Propoziția'], 'widths': [70, 440],
                 'data': [['1', 'Pisica doarme.'], ['2', ''], ['3', ''], ['4', '']]},
                {'t': 'table', 'n': 7, 'title': 'Potrivește', 'rows': 6, 'row_h': 22,
                 'prompt': ['Scrie litera potrivită lângă fiecare propoziție.',
                            'A = simplă, afirmativă     B = simplă, negativă     C = dezvoltată, afirmativă     D = dezvoltată, negativă'],
                 'cols': ['Propoziția', 'Litera'], 'widths': [410, 100],
                 'data': [['Soarele răsare.', ''], ['Nu am uitat tema acasă.', ''], ['Vântul nu bate.', ''],
                          ['Andrei a câștigat concursul de șah.', ''], ['Mașina nu a pornit dimineața.', ''], ['Florile cresc.', '']]},
                {'t': 'lines', 'n': 8, 'title': 'Detectivul de greșeli', 'weight': 2,
                 'prompt': ['Fiecare propoziție are câte o greșeală de scriere sau de punctuație. Rescrie-le corect.',
                            'a) ana citește o carte.     b) Ce faci Mihai?',
                            'c) Am cumpărat mere pere și prune.     d) Vino repede, andrei!']},
                {'t': 'lines', 'n': 9, 'title': 'Mesaj cu reguli', 'weight': 3,
                 'prompt': 'Scrie un mesaj de patru propoziții către un prieten, despre weekendul tău: una simplă, una dezvoltată, '
                           'una negativă și una care se termină cu semnul întrebării. Numerotează-le.'},
            ],
        ],
    },
]
