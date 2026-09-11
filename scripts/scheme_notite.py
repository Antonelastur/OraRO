"""Generator de scheme-notițe pentru OraRO.

O schemă e pagina de notițe a lecției: tot ce scriu elevii în caiet și din ce
învață acasă, sistematizat pe secțiuni. Conținutul stă în fișiere de date din
scripts/scheme/ (o listă SCHEME pe unitate); aici se face doar așezarea în
pagină. Textul se măsoară cu fonturile Segoe UI, iar fiecare fragment primește
poziție și lățime fixe, deci nimic nu iese din casete, oricare ar fi fontul
cu care se deschide fișierul.

Utilizare:  python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-1.py

Marcaje în text:
  **bold**   *italic*   _o linie_ (predicat)   __două linii__ (subiect)
  ~linie ondulată~ (atribut)   °linie punctată° (complement)
  {t:text colorat}  culori: t teal, m mov, a auriu, n navy, g gri, r roșu, v verde
  Un paragraf care începe cu „• ”, „– ” sau „1. ” primește indent agățat.
"""
import runpy
import sys
from html import escape
from pathlib import Path

from PIL import ImageFont

RADACINA = Path(__file__).resolve().parent.parent
FONTURI = Path('C:/Windows/Fonts')
FISIERE_FONT = {(False, False): 'segoeui.ttf', (True, False): 'segoeuib.ttf',
                (False, True): 'segoeuii.ttf', (True, True): 'segoeuiz.ttf'}
FAMILIE = "'Segoe UI', 'Plus Jakarta Sans', -apple-system, Roboto, sans-serif"

CUL = {'bg': '#faf7f0', 'n': '#10233f', 'm': '#6f5ea8', 't': '#0d9c92', 'g': '#5b6b83',
       'x': '#3a3226', 'linie': '#e3dccb', 'crem': '#f3efe4', 'lila': '#efeaf8',
       'a': '#9a7433', 'r': '#b4432c', 'v': '#2f7d4f', 'alb': '#ffffff'}

LATIME = 900
X0, XW = 40, 820          # caseta secțiunii
PAD = 22                  # spațiul interior al secțiunii

_fonturi = {}


def latime(text, marime, b=False, i=False):
    cheie = (b, i)
    if cheie not in _fonturi:
        _fonturi[cheie] = ImageFont.truetype(str(FONTURI / FISIERE_FONT[cheie]), 100)
    return _fonturi[cheie].getlength(text) * marime / 100


# ---------- text îmbogățit ----------

MARCAJE = [('**', 'b'), ('__', 'u2'), ('_', 'u1'), ('*', 'i'), ('~', 'uw'), ('°', 'ud')]


def parseaza(text, baza=()):
    """Textul cu marcaje → listă de (fragment, stiluri, culoare)."""
    stiluri, culoare, buf, iesire = set(baza), None, '', []

    def emite():
        nonlocal buf
        if buf:
            iesire.append((buf, frozenset(stiluri), culoare))
            buf = ''

    i = 0
    while i < len(text):
        if text[i] == '{' and text[i + 2:i + 3] == ':' and text[i + 1] in CUL:
            emite()
            culoare, i = text[i + 1], i + 3
            continue
        if text[i] == '}' and culoare:
            emite()
            culoare, i = None, i + 1
            continue
        for marcaj, stil in MARCAJE:
            if text.startswith(marcaj, i):
                emite()
                stiluri ^= {stil}
                i += len(marcaj)
                break
        else:
            buf += text[i]
            i += 1
    emite()
    return iesire


def cuvinte(fragmente):
    """Fragmentele → cuvinte; un cuvânt e o listă de bucăți cu stil propriu."""
    rez, curent = [], []
    for text, stiluri, culoare in fragmente:
        parti = text.split(' ')
        for k, parte in enumerate(parti):
            if k > 0:
                if curent:
                    rez.append(curent)
                curent = []
            if parte:
                curent.append((parte, stiluri, culoare))
    if curent:
        rez.append(curent)
    return rez


def lat_bucata(bucata, marime):
    text, st, _ = bucata
    return latime(text, marime, 'b' in st, 'i' in st)


def paragraf(text, x, y, w, marime=15, culoare='x', baza=(), aliniere='l', interlinie=1.45):
    """Așază un paragraf cu indent agățat pentru liste. Întoarce (svg, înălțime)."""
    prefix = ''
    for p in ('• ', '– ', '→ '):
        if text.startswith(p):
            prefix, text = p, text[len(p):]
    if not prefix and len(text) > 3 and text[0].isdigit() and text[1:3] == '. ':
        prefix, text = text[:3], text[3:]
    svg = []
    indent = 0
    if prefix:
        numar = prefix[0].isdigit()
        greutate = ' font-weight="700"' if numar else ''
        svg.append(f'<text x="{x:.1f}" y="{y + marime:.1f}" font-size="{marime}" fill="{CUL[culoare]}"{greutate}>'
                   f'{escape(prefix.strip())}</text>')
        indent = latime(prefix, marime, numar) + 2
    lw = w - indent
    spatiu = latime(' ', marime)
    randuri, rand, lr = [], [], 0.0
    for cuv in cuvinte(parseaza(text, baza)):
        lc = sum(lat_bucata(b, marime) for b in cuv)
        if rand and lr + spatiu + lc > lw:
            randuri.append((rand, lr))
            rand, lr = [], 0.0
        lr += (spatiu if rand else 0) + lc
        rand.append(cuv)
    if rand:
        randuri.append((rand, lr))

    pas = marime * interlinie
    for n, (rand, lr) in enumerate(randuri):
        yb = y + marime + n * pas
        if aliniere == 'c':
            cx = x + indent + (lw - lr) / 2
        elif aliniere == 'r':
            cx = x + indent + lw - lr
        else:
            cx = x + indent
        # Bucăți consecutive cu același stil se unesc, cu spațiile dintre ele;
        # o bucată nouă ține minte dacă o precede un spațiu.
        rulari = []
        for k, cuv in enumerate(rand):
            for j, (t, st, cul) in enumerate(cuv):
                sep = k > 0 and j == 0
                if rulari and rulari[-1][1] == st and rulari[-1][2] == cul:
                    rulari[-1][0] += (' ' if sep else '') + t
                else:
                    rulari.append([t, st, cul, sep])
        for t, st, cul, sep in rulari:
            if sep:
                cx += spatiu
            rx = cx
            lt = latime(t, marime, 'b' in st, 'i' in st)
            cx += lt
            # Exemplele (italic) ies în navy, ca în schema-model, dacă nu au culoare proprie.
            if not cul and 'i' in st and culoare == 'x':
                cul = 'n'
            atr = f'x="{rx:.1f}" y="{yb:.1f}" font-size="{marime}" fill="{CUL[cul or culoare]}"'
            if 'b' in st:
                atr += ' font-weight="700"'
            if 'i' in st:
                atr += ' font-style="italic"'
            svg.append(f'<text {atr} textLength="{lt:.1f}" lengthAdjust="spacing">{escape(t)}</text>')
            svg.extend(subliniere(st, rx, rx + lt, yb, CUL[cul or culoare]))
    inaltime = len(randuri) * pas - (pas - marime) + marime * 0.3 if randuri else 0
    return '\n'.join(svg), inaltime


def subliniere(st, x1, x2, yb, culoare):
    linii = []
    if 'u1' in st or 'u2' in st:
        linii.append(f'<line x1="{x1:.1f}" y1="{yb + 3.5:.1f}" x2="{x2:.1f}" y2="{yb + 3.5:.1f}" stroke="{culoare}" stroke-width="1.4"/>')
    if 'u2' in st:
        linii.append(f'<line x1="{x1:.1f}" y1="{yb + 7:.1f}" x2="{x2:.1f}" y2="{yb + 7:.1f}" stroke="{culoare}" stroke-width="1.4"/>')
    if 'ud' in st:
        linii.append(f'<line x1="{x1:.1f}" y1="{yb + 4:.1f}" x2="{x2:.1f}" y2="{yb + 4:.1f}" stroke="{culoare}" stroke-width="1.6" stroke-dasharray="1.5 3" stroke-linecap="round"/>')
    if 'uw' in st:
        d, xx, sus = f'M {x1:.1f} {yb + 4.5:.1f}', x1, True
        while xx < x2:
            nx = min(xx + 3, x2)
            d += f' Q {(xx + nx) / 2:.1f} {yb + (2.5 if sus else 6.5):.1f} {nx:.1f} {yb + 4.5:.1f}'
            xx, sus = nx, not sus
        linii.append(f'<path d="{d}" stroke="{culoare}" stroke-width="1.3" fill="none"/>')
    return linii


def paragrafe(lista, x, y, w, marime=15, culoare='x', baza=(), aliniere='l', spatiere=None):
    svg, h = [], 0.0
    spatiere = marime * 0.35 if spatiere is None else spatiere
    for k, p in enumerate(lista):
        if k:
            h += spatiere
        s, hh = paragraf(p, x, y + h, w, marime, culoare, baza, aliniere)
        svg.append(s)
        h += hh
    return '\n'.join(svg), h


# ---------- blocuri ----------

def bloc(b, x, y, w):
    tip = b['t']
    if tip == 'text':
        return paragrafe(b['p'], x, y, w, b.get('s', 15), b.get('c', 'x'), ('i',) if b.get('i') else ())
    if tip in ('nota', 'atentie'):
        return caseta_nota(b, x, y, w)
    if tip == 'carduri':
        return carduri(b, x, y, w)
    if tip == 'tabel':
        return tabel(b, x, y, w)
    if tip == 'simboluri':
        return simboluri(b, x, y, w)
    if tip == 'coloane':
        return coloane(b, x, y, w)
    raise ValueError(f'bloc necunoscut: {tip}')


def blocuri(lista, x, y, w, spatiere=14):
    svg, h = [], 0.0
    for k, b in enumerate(lista):
        if k:
            h += spatiere
        s, hh = bloc(b, x, y + h, w)
        svg.append(s)
        h += hh
    return '\n'.join(svg), h


def continut_card(c, x, y, w):
    svg, h = [], 12.0
    if c.get('titlu'):
        s, hh = paragraf(f"**{c['titlu']}**", x, y + h, w, c.get('st', 16), c.get('col', 't'))
        svg.append(s)
        h += hh
    if c.get('sub'):
        s, hh = paragraf(c['sub'], x, y + h, w, 13.5, 'g')
        svg.append(s)
        h += hh
    if c.get('p'):
        h += 4 if (c.get('titlu') or c.get('sub')) else 0
        s, hh = paragrafe(c['p'], x, y + h, w, c.get('s', 14.5))
        svg.append(s)
        h += hh
    if c.get('b'):
        h += 6
        s, hh = blocuri(c['b'], x, y + h, w, 10)
        svg.append(s)
        h += hh
    return '\n'.join(svg), h + 12


def carduri(b, x, y, w):
    lista = b['c']
    n = b.get('n', len(lista))
    gap = 16
    cw = (w - gap * (n - 1)) / n
    svg, h_total = [], 0.0
    for start in range(0, len(lista), n):
        rand = lista[start:start + n]
        interioare = [continut_card(c, 0, 0, cw - 32) for c in rand]
        ch = max(hh for _, hh in interioare)
        for k, c in enumerate(rand):
            cx = x + k * (cw + gap)
            cy = y + h_total
            col = CUL[c.get('col', 't')]
            svg.append(f'<rect x="{cx:.1f}" y="{cy:.1f}" width="{cw:.1f}" height="{ch:.1f}" rx="12" fill="#ffffff" stroke="{col}" stroke-width="2"/>')
            s, _ = continut_card(c, cx + 16, cy, cw - 32)
            svg.append(s)
        h_total += ch + (gap if start + n < len(lista) else 0)
    return '\n'.join(svg), h_total


def caseta_nota(b, x, y, w):
    svg, h = [], 12.0
    atentie = b['t'] == 'atentie'
    titlu = b.get('titlu', 'Atenție!' if atentie else None)
    xi = x + (22 if atentie else 16)
    wi = w - (38 if atentie else 32)
    if titlu:
        s, hh = paragraf(f'**{titlu}**', xi, y + h, wi, 14.5, 'r' if atentie else 'n')
        svg.append(s)
        h += hh
    s, hh = paragrafe(b['p'], xi, y + h, wi, b.get('s', 14.5))
    svg.append(s)
    h += hh + 12
    fundal = f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="12" fill="{CUL["crem"]}"/>'
    bara = f'<rect x="{x:.1f}" y="{y:.1f}" width="6" height="{h:.1f}" rx="3" fill="{CUL["r"]}"/>' if atentie else ''
    return fundal + bara + '\n'.join(svg), h


def tabel(b, x, y, w):
    marime = b.get('s', 14.5)
    lat = b.get('lat') or [1 / len(b['cap'])] * len(b['cap'])
    al = b.get('al') or ['l'] * len(b['cap'])
    xs = [x]
    for f in lat:
        xs.append(xs[-1] + f * w)
    svg, h = [], 0.0
    randuri = [(b['cap'], True)] + [(r, False) for r in b['r']]
    for celule, cap in randuri:
        interioare = []
        for k, cel in enumerate(celule):
            text = f'**{cel}**' if cap and cel else cel
            s, hh = paragraf(text, xs[k] + 12, y + h + 8, xs[k + 1] - xs[k] - 24,
                             13.5 if cap else marime, 'n' if cap else 'x', aliniere=al[k])
            interioare.append((s, hh))
        rh = max(hh for _, hh in interioare) + 14
        if cap:
            svg.append(f'<rect x="{x:.1f}" y="{y + h:.1f}" width="{w:.1f}" height="{rh:.1f}" fill="{CUL["lila"]}"/>')
        svg.extend(s for s, _ in interioare)
        svg.append(f'<line x1="{x:.1f}" y1="{y + h + rh:.1f}" x2="{x + w:.1f}" y2="{y + h + rh:.1f}" stroke="{CUL["linie"]}"/>')
        h += rh
    for xv in xs[1:-1]:
        svg.append(f'<line x1="{xv:.1f}" y1="{y:.1f}" x2="{xv:.1f}" y2="{y + h:.1f}" stroke="{CUL["linie"]}"/>')
    return '\n'.join(svg), h


def simboluri(b, x, y, w):
    ls = b.get('ls', 58)
    svg, h = [], 0.0
    for k, (simbol, text) in enumerate(b['r']):
        if k:
            h += 10
        svg.append(f'<text x="{x:.1f}" y="{y + h + 16:.1f}" font-size="17" font-weight="700" fill="{CUL["m"]}">{escape(simbol)}</text>')
        s, hh = paragrafe(text if isinstance(text, list) else [text], x + ls, y + h, w - ls, b.get('s', 14.5), spatiere=3)
        svg.append(s)
        h += max(hh, 22)
    return '\n'.join(svg), h


def coloane(b, x, y, w):
    lista = b['c']
    gap = 20
    cw = (w - gap * (len(lista) - 1)) / len(lista)
    svg, h = [], 0.0
    for k, col in enumerate(lista):
        cx = x + k * (cw + gap)
        hh = 0.0
        if col.get('titlu'):
            s, t = paragraf(f"**{col['titlu']}**", cx, y, cw, 15, 'n', aliniere='c')
            svg.append(s)
            hh = t + 6
        s, t = blocuri(col['b'], cx, y + hh, cw, 10)
        svg.append(s)
        h = max(h, hh + t)
    return '\n'.join(svg), h


# ---------- pagina ----------

def genereaza(schema):
    svg, y = [], 0.0
    s, hh = paragraf(f"**{schema['titlu']}**", 40, 22, 820, 28, 'n', aliniere='c', interlinie=1.25)
    svg.append(s)
    y = 22 + hh + 2
    s, hh = paragraf(schema['sub'], 40, y, 820, 14, 'g', aliniere='c')
    svg.append(s)
    y += hh + 16
    for titlu, lista in schema['sect']:
        svg.append(f'<rect x="{X0}" y="{y:.1f}" width="{XW}" height="34" rx="10" fill="{CUL["m"]}"/>')
        svg.append(f'<text x="{X0 + 18}" y="{y + 23:.1f}" font-size="16" font-weight="700" fill="#ffffff">{escape(titlu)}</text>')
        y += 34
        s, hh = blocuri(lista, X0 + PAD, y + 18, XW - 2 * PAD)
        svg.append(f'<rect x="{X0}" y="{y:.1f}" width="{XW}" height="{hh + 36:.1f}" fill="#ffffff" stroke="{CUL["linie"]}"/>')
        svg.append(s)
        y += hh + 36 + 20
    s, hh = paragraf(schema['sursa'], 40, y, 820, 11.5, 'g', aliniere='c')
    svg.append(s)
    inaltime = round(y + hh + 16)
    cap = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {LATIME} {inaltime}" font-family="{FAMILIE}">\n'
           f'<rect width="{LATIME}" height="{inaltime}" fill="{CUL["bg"]}"/>\n')
    return cap + '\n'.join(svg) + '\n</svg>\n', inaltime


def actualizeaza_titluri(cale, titlu):
    """Titlul schemei din date și din planuri devine titlul notițelor."""
    import re
    fisier = f"/materiale/{cale}/schema.svg"
    titlu_js = titlu.replace("'", "\\'")
    surse = list((RADACINA / 'src' / 'data').rglob('*.js')) + list((RADACINA / 'scripts' / 'planuri').glob('*.mjs'))
    for sursa in surse:
        text = sursa.read_text(encoding='utf-8')
        if fisier not in text:
            continue
        nou = re.sub(r"(fisier: '" + re.escape(fisier) + r"', titlu: )'(?:[^'\\]|\\.)*'", lambda m: m.group(1) + f"'{titlu_js}'", text)
        nou = re.sub(r"Schema „[^”]*” \(" + re.escape(fisier) + r"\)", lambda m: f"Schema „{titlu}” ({fisier})", nou)
        if nou != text:
            sursa.write_text(nou, encoding='utf-8')


def main(cale_date):
    date = runpy.run_path(cale_date)
    for schema in date['SCHEME']:
        continut, inaltime = genereaza(schema)
        tinta = RADACINA / 'public' / 'materiale' / schema['cale'] / 'schema.svg'
        tinta.parent.mkdir(parents=True, exist_ok=True)
        tinta.write_text(continut, encoding='utf-8')
        actualizeaza_titluri(schema['cale'], schema['titlu'])
        print(f"{schema['cale']}: {inaltime}px")


if __name__ == '__main__':
    main(sys.argv[1])
