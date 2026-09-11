# Fișă de exerciții, clasa a V-a, Recapitularea inițială (lecția 2).
# Exerciții originale pe conținuturile din ciclul primar, altele decât cele din
# fișa de recapitulare existentă (lectia-2/fisa.pdf). Celelalte lecții ale
# recapitulării (intercunoaștere, teste inițiale, analiză) nu au fișă de exerciții.
# Rezolvările: notite-profesor/clasa-5/recapitulare-initiala/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-5-recapitulare-initiala.py


def T(n, title, prompt, cols, widths, data=None, rows=None, row_h=22):
    return {'t': 'table', 'n': n, 'title': title, 'prompt': prompt, 'cols': cols,
            'widths': widths, 'rows': rows or len(data), 'row_h': row_h, 'data': data}


def L(n, title, prompt, weight=1):
    return {'t': 'lines', 'n': n, 'title': title, 'prompt': prompt, 'weight': weight}


def X(n, title, prompt):
    return {'t': 'text', 'n': n, 'title': title, 'prompt': prompt}


FISE = [
    {
        'cale': 'clasa-5/recapitulare-initiala/lectia-2',
        'sub': 'Clasa a V-a · Recapitulare inițială, Lecția 2 · conținuturi din ciclul primar · lucru în clasă',
        'sursa': ('Exerciții originale, pe conținuturile din ciclul primar. Completează fișa de recapitulare a lecției; '
                  'textele sunt create pentru fișă.'),
        'reper': ('Recapitulare (ciclul primar): sinonime și antonime, despărțirea în silabe, grupurile de litere, scrierea '
                  'corectă (s-a/sa, i-a/ia, s-au/sau, într-o), părțile de vorbire, subiectul și predicatul, felul '
                  'propozițiilor după scopul comunicării, biletul.'),
        'pagini': [
            [
                T(1, 'Cuvinte-pereche', 'Scrie un sinonim și un antonim pentru fiecare cuvânt.',
                  ['Cuvântul', 'Sinonim', 'Antonim'], [150, 180, 180],
                  [[c, '', ''] for c in ['harnic', 'a urca', 'luminos', 'început', 'vesel', 'a primi']], row_h=22),
                X(2, 'Silabe și grupuri de litere', [
                    'a) Desparte în silabe: vacanță, caiet, iepure, școală, creion, ceainic.',
                    '_____________________________________________________________________________',
                    'b) Scrie câte un cuvânt cu fiecare grup de litere: ce, ci, che, chi, ge, gi, ghe, ghi.',
                    '_____________________________________________________________________________']),
                X(3, 'Scrie corect', [
                    'Încercuiește forma corectă.',
                    'a) Mihai (s-a / sa) dus la bibliotecă împreună cu (s-a / sa) soră.',
                    'b) Ana (i-a / ia) dat colegei un creion și (i-a / ia) caietul de pe bancă.',
                    'c) (Sau / S-au) întâlnit în parc după ore.        d) Vii la mine (sau / s-au) mergem la ea?',
                    'e) (Într-o / Intr-o) zi de toamnă am plecat la munte.']),
            ],
            [
                T(4, 'Părțile de vorbire', 'Propoziția: „Ei au citit ieri trei povești frumoase.” Scrie partea de vorbire.',
                  ['Cuvântul', 'Partea de vorbire', 'Cuvântul', 'Partea de vorbire'], [120, 135, 120, 135],
                  [['ei', '', 'trei', ''], ['au citit', '', 'povești', ''], ['ieri', '', 'frumoase', '']], row_h=22),
                T(5, 'Subiect și predicat', 'Scrie subiectul și predicatul fiecărei propoziții.',
                  ['Propoziția', 'Subiectul', 'Predicatul'], [250, 130, 130],
                  [['Bunica pregătește plăcinte.', '', ''], ['Pe cer strălucesc stelele.', '', ''],
                   ['Colegul meu a câștigat concursul.', '', '']], row_h=22),
                X(6, 'Felul propozițiilor', [
                    'Transformă propoziția „Plouă afară.”:',
                    'în propoziție interogativă: ____________________________________________________',
                    'în propoziție exclamativă: ____________________________________________________',
                    'Dezvoltă propoziția „Câinele latră.”, adăugând trei cuvinte: _________________________________']),
                L(7, 'Biletul', [
                    'Scrie un bilet pentru mama (3-4 rânduri): unde ai plecat, cu cine și când te întorci.',
                    'Nu uita cui te adresezi, mesajul și semnătura.'], 3),
            ],
        ],
    },
]
