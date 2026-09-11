# -*- coding: utf-8 -*-
"""Fișe de exerciții pe lecție, pentru lucrul în clasă.

Exerciții variate și originale, făcute pe conținutul lecției și pe textul ei
(recunoaștere, completare, adevărat/fals, asociere, joc de construcție,
corectare, transformare, creație), nu doar tipurile din manual; exercițiile din
manual rămân temă pentru acasă. Paginarea vine din build_clasa6_fise, ca toate
fișele OraRO să arate la fel. Blocuri: 'text' (se răspunde în enunț), 'table',
'lines' (rânduri de scris). Rezolvările nu se publică: stau în notite-profesor/.

După generare, fișa se leagă de lecție: materiale.fisa.exercitii în
src/data/... și o resursă „Fișa de exerciții” în planul lecției (date și
scripts/planuri/).

Rulează din rădăcina proiectului:
  python scripts/fise_exercitii.py scripts/fise/clasa-5-unitatea-1.py
"""
import os
import re
import runpy
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fisa_helpers import new_doc, new_page, header, footer
from build_clasa6_fise import ROOT, _layout_page

FOOT_LIMIT = 798


def build(f):
    doc = new_doc()
    n = len(f['pagini'])
    for i, blocks in enumerate(f['pagini']):
        p = new_page(doc)
        header(p, f['titlu'], f['sub'])
        _layout_page(p, blocks, f.get('reper') if i == 0 else None)
        footer(p, f['sursa'] + (f' Pagina {i + 1} din {n}.' if n > 1 else ''))
        # ultima linie desenată nu are voie să intre în subsol
        ys = [it[2].y for d in p.get_drawings() for it in d['items'] if it[0] == 'l']
        if ys and max(ys) > FOOT_LIMIT:
            print(f'ATENȚIE: {f["cale"]}, pagina {i + 1} depășește subsolul ({max(ys):.0f})')
    out = os.path.join(ROOT, 'public', 'materiale', f['cale'], 'fisa-exercitii.pdf')
    os.makedirs(os.path.dirname(out), exist_ok=True)
    doc.save(out)


def _in_bloc(s, start, fn):
    """Aplică fn pe textul lecției care începe la `start` (până la următoarea lecție)."""
    end = s.find("id: 'lectia-", start + 1)
    end = len(s) if end < 0 else end
    return s[:start] + fn(s[start:end]) + s[end:]


def leaga(cale):
    clasa, unitate, lectie = cale.split('/')
    rel = f'/materiale/{cale}/fisa-exercitii.pdf'
    resursa = f'Fișa de exerciții ({rel})'

    data = os.path.join(ROOT, 'src', 'data', clasa, unitate + '.js')
    s = open(data, encoding='utf-8').read()
    i = s.find(f"id: '{lectie}'")
    if i < 0:
        raise SystemExit(f'{cale}: lecția nu există în {data}')

    def date(b):
        if rel in b:
            return b
        b2 = b.replace('fisa: null,', f"fisa: {{ exercitii: '{rel}' }},", 1)
        if b2 == b:
            b2 = re.sub(r"fisa: \{ fisier: ('[^']+') \},", lambda m: f"fisa: {{ fisier: {m.group(1)}, exercitii: '{rel}' }},", b, count=1)
        if b2 == b:
            raise SystemExit(f'{cale}: nu găsesc câmpul fisa')
        # resursa intră după prima resursă a planului (manualul)
        return re.sub(r"(resurse: \[\n(\s+)'[^\n]*',\n)", lambda m: f"{m.group(1)}{m.group(2)}'{resursa}',\n", b2, count=1)

    s = _in_bloc(s, i, date)
    open(data, 'w', encoding='utf-8').write(s)

    plan = os.path.join(ROOT, 'scripts', 'planuri', f'{clasa}-{unitate}.mjs')
    if os.path.exists(plan):
        p = open(plan, encoding='utf-8').read()
        k = p.find(f"'{lectie}': {{")
        if k >= 0 and resursa not in p[k:p.find("'lectia-", k + 1)]:
            j = p.find('resurse: [', k)
            if j >= 0:
                p = p[:j] + re.sub(r"(resurse: \['(?:[^'\\]|\\.)*')", lambda m: f"{m.group(1)}, '{resursa}'", p[j:], count=1)
                open(plan, 'w', encoding='utf-8').write(p)


def main(spec):
    for f in runpy.run_path(spec)['FISE']:
        build(f)
        leaga(f['cale'])
        print('fișă:', f['cale'])


if __name__ == '__main__':
    main(sys.argv[1])
