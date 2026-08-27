# -*- coding: utf-8 -*-
"""Generează infograficele SVG restante pentru clasa a VI-a.

Materiale de sprijin vizuale. Conținutul de bază (definiții, liste de fapte)
provine din Art 6 (Sâmihăian et al., Art Klett 2023), cu pagina notată în
subsolul fiecărui infografic. Stil aliniat cu infograficele deja existente:
fundal crem, titluri navy, panouri albe cu antet colorat.

Rulează din rădăcina proiectului:  python scripts/build_clasa6_infografice.py
"""
import os
import textwrap

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

BG = "#faf7f0"
NAVY = "#10233f"
MUTED = "#5b6b83"
INK = "#3a3226"
PALETTE = ["#0d9c92", "#6f5ea8", "#c2694a", "#3f7cb5"]
TINT = {"#0d9c92": "#eaf6f4", "#6f5ea8": "#f1ecfa", "#c2694a": "#f7ece7", "#3f7cb5": "#e9f1f8"}

FONT = "'Segoe UI', 'Plus Jakarta Sans', -apple-system, Roboto, sans-serif"


def _esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _wrap(text, width):
    return textwrap.wrap(text, width) or [""]


def panel(x, y, w, h, color, titlu, bullets, exemplu=None):
    out = [
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16" fill="#ffffff" stroke="{color}" stroke-width="2.5"/>',
        f'<rect x="{x}" y="{y}" width="{w}" height="46" rx="16" fill="{color}"/>',
        f'<rect x="{x}" y="{y+24}" width="{w}" height="22" fill="{color}"/>',
        f'<text x="{x+w/2}" y="{y+29}" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">{_esc(titlu.upper())}</text>',
    ]
    ty = y + 74
    for b in bullets:
        lines = _wrap(b, int((w - 44) / 6.6))
        spans = ""
        for i, ln in enumerate(lines):
            prefix = "• " if i == 0 else "  "
            spans += f'<tspan x="{x+22}" y="{ty}">{_esc(prefix + ln)}</tspan>'
            ty += 18
        out.append(f'<text font-size="12" fill="{INK}">{spans}</text>')
        ty += 6
    if exemplu:
        by = y + h - 58
        out.append(f'<rect x="{x+22}" y="{by}" width="{w-44}" height="46" rx="10" fill="{TINT[color]}"/>')
        exl = _wrap(exemplu, int((w - 70) / 6.2))[:2]
        for i, ln in enumerate(exl):
            out.append(f'<text x="{x+36}" y="{by+20+i*15}" font-size="11.5" fill="{INK}">{_esc(ln)}</text>')
    return "\n    ".join(out)


def infografic(path, titlu, subtitlu, panels, sursa, vh=460):
    n = len(panels)
    gap = 30
    px = 60
    pw = int((900 - 2 * px - (n - 1) * gap) / n)
    ph = vh - 160
    body = []
    for i, p in enumerate(panels):
        x = px + i * (pw + gap)
        body.append(panel(x, 95, pw, ph, PALETTE[i % 4], p["titlu"], p["bullets"], p.get("exemplu")))
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 {vh}" font-family="{FONT}">
  <rect width="900" height="{vh}" fill="{BG}"/>
  <text x="450" y="42" text-anchor="middle" font-size="21" font-weight="700" fill="{NAVY}">{_esc(titlu)}</text>
  <text x="450" y="65" text-anchor="middle" font-size="13" fill="{MUTED}">{_esc(subtitlu)}</text>
  <g>
    {"\n  </g>\n  <g>\n    ".join(body)}
  </g>
  <text x="450" y="{vh-20}" text-anchor="middle" font-size="11" fill="{MUTED}">{_esc(sursa)}</text>
</svg>
'''
    full = os.path.join(ROOT, "public", "materiale", "clasa-6", path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(svg)
    print("saved", path)


# ---------- U2, Lecția 8 ----------
infografic(
    "unitatea-2/lectia-8/infografic.svg",
    "Etnii și jocuri de copii în spațiul românesc",
    "Unitatea II, Lecția 7 · similitudini interculturale",
    [
        {"titlu": "Comunitatea etnică", "bullets": [
            "Grup de oameni care trăiesc în aceeași țară sau localitate.",
            "Au aceeași etnie și o limbă comună.",
            "Împărtășesc tradiții, obiceiuri și credințe religioase.",
        ], "exemplu": "În spațiul românesc trăiesc români, maghiari, romi, germani, ucraineni, sârbi și alții."},
        {"titlu": "Jocuri care se aseamănă", "bullets": [
            "Aceleași jocuri apar la comunități diferite, cu alt nume și alte versuri.",
            "„O podo baruno” (joc rom) este varianta jocului „Podul de piatră s-a dărâmat”.",
            "Multe jocuri se pot juca fără cuvinte, deci trec ușor de la o etnie la alta.",
        ], "exemplu": "Interferențele culturale îmbogățesc cultura populară a tuturor popoarelor."},
    ],
    "Sursă: manual, Lecția 7, pp. 58-59 (Repere)",
)

# ---------- U3, Lecția 7 ----------
infografic(
    "unitatea-3/lectia-7/infografic.svg",
    "Buletinul meteorologic și știrea",
    "Unitatea III, Lecția 5 · texte nonliterare multimodale",
    [
        {"titlu": "Buletinul meteorologic", "bullets": [
            "Anunță vremea pe baza unor măsurători.",
            "Presiunea aerului – barometru.",
            "Temperatura – termometru.",
            "Vântul (viteză, direcție) – giruetă.",
            "Precipitațiile – pluviometru.",
        ], "exemplu": "Termeni: aversă, burniță, lapoviță, ninsoare, furtună, uragan."},
        {"titlu": "Știrea", "bullets": [
            "Articol scurt care informează despre un fapt real.",
            "Răspunde la: cine? ce? unde? când? de ce?",
            "Titlul atrage atenția; poate fi nominal, fără predicat.",
            "Deasupra titlului poate sta un supratitlu.",
        ], "exemplu": "E multimodală când are și fotografii, grafice sau secvențe filmate."},
    ],
    "Sursă: manual, Lecția 5, pp. 92-94 (Repere)",
)

# ---------- U3, Lecția 9 ----------
infografic(
    "unitatea-3/lectia-9/infografic.svg",
    "Bradul în cultura populară românească (I)",
    "Unitatea III, Lecția 7 · tradiție și simboluri",
    [
        {"titlu": "Ce simbolizează", "bullets": [
            "Prin verticalitate, un drum spre veșnicie.",
            "Leagă lumea subterană, cea terestră și cea cerească.",
            "Ocrotește viața omului și îndepărtează teama de moarte.",
            "În mentalitatea creștină, simbol al Sfintei Treimi.",
        ], "exemplu": "Tămâia, o rășină, este element purificator și ocrotitor."},
        {"titlu": "În riturile de trecere", "bullets": [
            "Apare în toate riturile de trecere românești.",
            "Sprijină tânărul în inițiere: putere, inteligență, curaj.",
            "Puteri ocrotitoare preluate de la romani.",
        ], "exemplu": "Ramuri de brad la coama casei în construcție, la hățurile cailor, la căruțe."},
    ],
    "Sursă: manual, Lecția 7, pp. 96-97 (Repere)",
)

# ---------- U3, Lecția 10 ----------
infografic(
    "unitatea-3/lectia-10/infografic.svg",
    "Bradul în cultura populară românească (II)",
    "Unitatea III, Lecția 7 · artă și design contemporan",
    [
        {"titlu": "În arta populară", "bullets": [
            "Imaginea bradului apare stilizată, ca motiv decorativ.",
            "Se regăsește pe covoare, ștergare, ii, cojoace, lăzi de zestre.",
            "Motivul trece din obicei în ornament, păstrându-și sensul.",
        ], "exemplu": "Bradul de pe o ie sau de pe un ștergar spune aceeași poveste ca bradul din ritual."},
        {"titlu": "În arta modernă", "bullets": [
            "Elemente tradiționale sunt reluate în pictură și în modă.",
            "Ia românească a devenit celebră prin tabloul lui Henri Matisse.",
            "„La Blouse roumaine” (Ia românească), pictat în 1940.",
        ], "exemplu": "Motivele populare, între care bradul stilizat, inspiră designul vestimentar de azi."},
    ],
    "Sursă: manual, Lecția 7, pp. 96-97 (Repere)",
)

# ---------- U4, Lecția 8 ----------
infografic(
    "unitatea-4/lectia-8/infografic.svg",
    "Înțelepciunea proverbelor. Similitudini interculturale",
    "Unitatea IV, Lecția 6 · valori ale culturii populare",
    [
        {"titlu": "Ce este proverbul", "bullets": [
            "O zicere scurtă din înțelepciunea populară.",
            "Transmite o morală sau o valoare de viață.",
            "Se grupează după teme: animale și plante, părți ale corpului, meserii, fenomene ale naturii, anotimpuri.",
        ], "exemplu": "„Cine seamănă vânt culege furtună.” · „Zidurile au urechi.”"},
        {"titlu": "Aceleași idei, culturi diferite", "bullets": [
            "Proverbe din culturi diferite spun același lucru în alte cuvinte.",
            "Pieter Bruegel cel Bătrân a pictat peste 100 de proverbe flamande (1559).",
            "La Fontaine reia moralele lui Esop, la sute de ani distanță.",
        ], "exemplu": "„Peștele cel mare îl înghite pe cel mic” apare în multe limbi."},
    ],
    "Sursă: manual, Lecția 6, pp. 132-133 (Repere)",
)

# ---------- U5, Lecția 10 ----------
infografic(
    "unitatea-5/lectia-10/infografic.svg",
    "Limba română în Europa și în lume",
    "Unitatea V, Lecția 9 · comunitatea lingvistică",
    [
        {"titlu": "Cifre și statut", "bullets": [
            "Peste 24 de milioane de vorbitori în întreaga lume.",
            "Limbă oficială în România, Republica Moldova și în Voivodina (Serbia).",
            "Una dintre limbile oficiale ale Uniunii Europene.",
        ], "exemplu": "Ziua Limbii Române: 31 august, din 2013."},
        {"titlu": "Comunități în Europa", "bullets": [
            "Ucraina (Cernăuți, Bugeac, Transcarpatia), Serbia (Valea Timocului).",
            "Ungaria (Gyula), Bulgaria, Cipru, Italia, Spania.",
            "Și în Austria, Belgia, Germania, Irlanda, Portugalia.",
        ]},
        {"titlu": "Diaspora, mai departe", "bullets": [
            "În afara Europei: Israel, SUA, Canada, Australia, Noua Zeelandă.",
            "„Diaspora” vine din greacă: dia „prin” + spora „a împrăștia”.",
            "Elevii de origine română pot urma cursul „Limbă, cultură și civilizație românească”.",
        ]},
    ],
    "Sursă: manual, Lecția 9, pp. 172-174 (Repere)",
    vh=470,
)

print("\nInfografice clasa a VI-a generate: 6")
