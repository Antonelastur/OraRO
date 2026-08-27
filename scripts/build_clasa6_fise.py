# -*- coding: utf-8 -*-
"""Generează fișele de lucru restante pentru clasa a VI-a.

Materiale de sprijin originale: enunțurile sunt proprii, nu copiate din manual.
Conținutul de bază (definiții, trăsături de specie) apare doar în casete scurte
„Reper”, cu sursa notată în subsol, preluat din Art 6 (Sâmihăian et al., Art
Klett, ed. 2023). Exercițiile îi cer elevului să lucreze cu textul deja citit
la clasă, nu prezintă fapte de intrigă drept date certe.

Layout: fiecare pagină se umple până la subsol. Secțiunile cu spațiu de scris
primesc linii proporțional cu „weight”, așa încât să nu rămână gol pe pagină.

Rulează din rădăcina proiectului:  python scripts/build_clasa6_fise.py
"""
import os
import sys

import fitz

sys.path.insert(0, os.path.dirname(__file__))
from fisa_helpers import (
    W, H, new_doc, new_page, header, footer, section, item, table_row,
)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOOT_Y = H - 44          # ultima linie utilă înainte de subsol
LINE_GAP = 24
MIN_LINES = 2            # minim de rânduri pentru orice secțiune de scris


def out_path(rel):
    return os.path.join(ROOT, "public", "materiale", "clasa-6", rel)


def write_lines(page, y, n, gap=LINE_GAP):
    for _ in range(n):
        page.draw_line(fitz.Point(48, y), fitz.Point(W - 40, y),
                       color=(0.75, 0.75, 0.75), width=0.6)
        y += gap
    return y


GRID = (0.78, 0.80, 0.81)


def draw_table(page, y, cols, widths, rows, row_h):
    y = table_row(page, y, cols, widths, bold=True, fill=(0.92, 0.96, 0.96))
    top = y
    for _ in range(rows):
        y += row_h
        page.draw_line(fitz.Point(48, y), fitz.Point(48 + sum(widths), y), color=GRID, width=0.5)
    x = 48
    for w in widths[:-1]:
        x += w
        page.draw_line(fitz.Point(x, top - 22), fitz.Point(x, y), color=GRID, width=0.5)
    page.draw_line(fitz.Point(48, top - 22), fitz.Point(48, y), color=GRID, width=0.5)
    page.draw_line(fitz.Point(48 + sum(widths), top - 22), fitz.Point(48 + sum(widths), y), color=GRID, width=0.5)
    return y


def _layout_page(page, blocks, reper_text=None):
    """blocks, în ordine:
      'lines': {'t':'lines','n','title','prompt','weight'}
      'table': {'t':'table','n','title','prompt'?,'cols','widths','rows','row_h'?}
    Secțiunile 'lines' împart tot spațiul rămas până la FOOT_Y, proporțional cu
    'weight', astfel încât pagina să se umple, fără gol la subsol.
    """
    def walk(pg, y, dry, line_counts):
        li = 0
        for b in blocks:
            y = section(pg, y, b["n"], b["title"])
            prompts = b.get("prompt") or []
            if isinstance(prompts, str):
                prompts = [prompts]
            for pr in prompts:
                y = item(pg, y, pr, gap=6)
            if b["t"] == "table":
                rh = b.get("row_h", 34)
                if dry:
                    y += 22 + rh * b["rows"]
                else:
                    y = draw_table(pg, y, b["cols"], b["widths"], b["rows"], rh)
                y += 12
            else:
                if not dry:
                    y = write_lines(pg, y + 2, line_counts[li])
                li += 1
                y += 8
        return y

    y0 = 88
    if reper_text:
        y0 = item(page, y0, reper_text, fontsize=10, gap=10) + 4

    slots = [b for b in blocks if b["t"] == "lines"]

    scratch = fitz.open()
    sp = scratch.new_page(width=W, height=H)
    sp.insert_font(fontname="F-reg", fontfile="C:/Windows/Fonts/segoeui.ttf")
    sp.insert_font(fontname="F-bold", fontfile="C:/Windows/Fonts/segoeuib.ttf")
    y_end = walk(sp, y0, True, [0] * len(slots))
    scratch.close()

    reserved = MIN_LINES * LINE_GAP * len(slots)
    extra = max(0, int((FOOT_Y - y_end - reserved) // LINE_GAP))
    wsum = sum(s["weight"] for s in slots) or 1
    counts = [MIN_LINES + round(extra * s["weight"] / wsum) for s in slots]

    walk(page, y0, False, counts)
    return counts


def sheet(path, title, subtitle, blocks, sursa, reper_text=None):
    doc = new_doc()
    p = new_page(doc)
    header(p, title, subtitle)
    _layout_page(p, blocks, reper_text)
    footer(p, sursa)
    os.makedirs(os.path.dirname(out_path(path)), exist_ok=True)
    doc.save(out_path(path))
    print("saved", path)


def sheet2(path, title, subtitle, blocks1, blocks2, sursa, reper_text=None):
    doc = new_doc()
    p1 = new_page(doc)
    header(p1, title, subtitle)
    _layout_page(p1, blocks1, reper_text)
    footer(p1, sursa + " — pagina 1")
    p2 = new_page(doc)
    header(p2, title, subtitle)
    _layout_page(p2, blocks2)
    footer(p2, sursa + " — pagina 2")
    os.makedirs(os.path.dirname(out_path(path)), exist_ok=True)
    doc.save(out_path(path))
    print("saved", path)


# ---------- fișele Unității I ----------

def fisa_semnificatii(out, subtitlu, intrebare_opinie, sursa):
    sheet(out, "Fișă de lucru — Semnificațiile textului", subtitlu, [
        {"t": "lines", "n": 1, "title": "Prima impresie", "weight": 2,
         "prompt": "Ce ai simțit la prima lectură a textului? Alege un cuvânt care numește o emoție și explică de ce."},
        {"t": "lines", "n": 2, "title": "Ideea centrală", "weight": 2,
         "prompt": "Formulează, într-o singură propoziție, ideea centrală a textului, așa cum ai înțeles-o tu."},
        {"t": "lines", "n": 3, "title": "Opinie argumentată", "weight": 4,
         "prompt": [intrebare_opinie,
                    "Scrie-ți opinia și susține-o cu două argumente. Folosește cel puțin un citat scurt din text."]},
        {"t": "lines", "n": 4, "title": "Trei întrebări despre text", "weight": 3,
         "prompt": "Notează trei întrebări pe care ți le pui după lectură: una despre un personaj, una despre limbaj, una despre mesaj."},
        {"t": "lines", "n": 5, "title": "Legătura cu tine", "weight": 3,
         "prompt": "Ai trăit sau ai văzut o situație asemănătoare cu cea din text? Povestește pe scurt."},
    ], sursa)


def fisa_text_auxiliar(out, subtitlu, titlu_text, sursa):
    sheet(out, f"Fișă de lucru — Text auxiliar: {titlu_text}", subtitlu, [
        {"t": "table", "n": 1, "title": "Jurnalul cu dublă intrare", "rows": 5,
         "cols": ["Fragment din text care mi-a atras atenția", "Ce gândesc / ce simt despre el"],
         "widths": [255, 255]},
        {"t": "lines", "n": 2, "title": "Asemănări cu textele de bază", "weight": 3,
         "prompt": "Notează două asemănări între acest text și textele de bază ale unității (Un păianjen care se crede Spiderman, Indescriptibil)."},
        {"t": "lines", "n": 3, "title": "Deosebiri față de textele de bază", "weight": 3,
         "prompt": "Notează două deosebiri: de temă, de ton, de tip de text sau de perspectivă."},
        {"t": "lines", "n": 4, "title": "Sugestie de lectură", "weight": 2,
         "prompt": "Recomandă acest text unui coleg, în 2-3 rânduri: de ce merită citit?"},
    ], sursa)


def fisa_legenda(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Legenda ca specie. Valori etice", subtitlu, [
        {"t": "table", "n": 1, "title": "Trăsăturile legendei, regăsite în text", "rows": 4,
         "cols": ["Trăsătură", "Exemplu din Legenda păianjenului și a albinei"], "widths": [180, 330],
         "prompt": "Completează tabelul cu exemple din text."},
        {"t": "lines", "n": 2, "title": "Ce tip de legendă este?", "weight": 2,
         "prompt": "Legenda păianjenului și a albinei este mitologică sau istorică? Explică alegerea."},
        {"t": "lines", "n": 3, "title": "Valorile etice", "weight": 4,
         "prompt": "Ce comportament al fetei și ce comportament al băiatului sunt puse față în față? Ce valoare transmite textul prin această opoziție?"},
        {"t": "lines", "n": 4, "title": "O legendă a popoarelor", "weight": 4,
         "prompt": "Cunoști o altă legendă (românească sau din altă cultură) care explică originea unei viețuitoare sau a unui obicei? Rezum-o și spune ce valoare evidențiază."},
    ], sursa, reper_text=(
        "Reper (manual, p. 25): Legenda este un text narativ care prezintă întâmplări miraculoase despre "
        "originea unor ființe sau lucruri, despre faptele unor eroi sau despre evenimente istorice, "
        "evidențiind valori precum binele, adevărul, frumosul. Legendele pot fi mitologice (explică originea "
        "unor ființe, fenomene, astre) sau istorice (explică, prin fapte imaginare, evenimente și personaje reale)."))


def fisa_omonime(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Omonimele. Cuvintele polisemantice", subtitlu, [
        {"t": "lines", "n": 1, "title": "Omonim sau polisemantic?", "weight": 2,
         "prompt": ["Pentru fiecare pereche, scrie O (omonime) sau P (sens al unui cuvânt polisemantic):",
                    "a) Am pus scrisoarea într-un plic. / Copilul a plâns cu plic.",
                    "b) Broasca sare în baltă. / Nu pune multă sare în ciorbă.",
                    "c) Piciorul mă doare. / Piciorul mesei s-a rupt.",
                    "d) A tras cu arcul. / Arcul de triumf e impunător."]},
        {"t": "lines", "n": 2, "title": "Construiește contexte", "weight": 4,
         "prompt": "Alcătuiește câte două enunțuri pentru fiecare cuvânt, cu sens diferit de fiecare dată: „poartă”, „vie”, „car”, „sare”."},
        {"t": "lines", "n": 3, "title": "Sensurile unui cuvânt polisemantic", "weight": 4,
         "prompt": "Scrie patru enunțuri în care verbul „a lua” să aibă, pe rând, patru sensuri diferite. Notează în paranteză un sinonim pentru fiecare sens."},
        {"t": "lines", "n": 4, "title": "Omonimie în poezie", "weight": 3,
         "prompt": "Găsește sau inventează două versuri care folosesc o pereche de omonime. Explică efectul."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 32-33): Omonimele au aceeași formă și sensuri complet diferite, fără legătură "
        "între ele (bancă1 „instituție financiară” / bancă2 „scaun lung”). Cuvântul polisemantic are două sau "
        "mai multe sensuri legate între ele (masă „mobilă” / masă „mâncare” / masă „grup de oameni la masă”)."))


def fisa_stil(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Trăsăturile stilului. Jurnalul ca specie", subtitlu, [
        {"t": "table", "n": 1, "title": "Recunoaște trăsătura", "rows": 4,
         "cols": ["Trăsătura stilului", "Exemplu din fragmentul citit (Jurnalul Annei Frank)"], "widths": [170, 340],
         "prompt": "Pentru fiecare trăsătură, caută un exemplu în text."},
        {"t": "lines", "n": 2, "title": "Jurnalul ca specie", "weight": 3,
         "prompt": "Notează trei elemente prin care recunoști că textul citit este o pagină de jurnal, nu altă specie narativă."},
        {"t": "lines", "n": 3, "title": "Exersează originalitatea", "weight": 3,
         "prompt": "Rescrie propoziția banală „Am plecat repede de acasă.” astfel încât să aibă forță de evocare. Scrie două variante."},
        {"t": "lines", "n": 4, "title": "Adecvarea situațională", "weight": 3,
         "prompt": "Scrie aceeași veste („am luat o notă mare”) în două feluri: într-un mesaj către un prieten și într-o pagină de jurnal. Ce se schimbă?"},
    ], sursa, reper_text=(
        "Reper (manual, p. 39): Trăsăturile stilului sunt proprietatea termenilor (folosirea corectă a "
        "cuvintelor), puritatea (evitarea cuvintelor neliterare, regionale, prea vechi sau prea noi), "
        "originalitatea (creativitate, forță de evocare, personalizare) și adecvarea situațională (adaptarea "
        "stilului la temă, la cititor, la scop și la tipul de text)."))


def fisa_redactare_jurnal(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Redactarea unei pagini de jurnal", subtitlu, [
        {"t": "table", "n": 1, "title": "Pregătire", "rows": 3,
         "cols": ["Ziua aleasă", "O întâmplare din acea zi", "Ce am simțit"], "widths": [170, 170, 170]},
        {"t": "lines", "n": 2, "title": "Cerință și ciornă", "weight": 1,
         "prompt": "Redactează o pagină de jurnal (minimum 12 rânduri) despre o zi care a contat pentru tine. Scrie la persoana I, datează însemnarea, include cel puțin un gând personal, nu doar fapte. Scrie ciorna mai jos."},
    ], [
        {"t": "lines", "n": 3, "title": "Interevaluare (colegul de bancă)", "weight": 2,
         "prompt": "Bifează și comentează: pagina e la persoana I? e datată? se simte vocea autorului? sunt respectate proprietatea și puritatea? Scrie o sugestie de îmbunătățire."},
        {"t": "lines", "n": 4, "title": "Forma finală, după revizuire", "weight": 5,
         "prompt": "Rescrie pagina de jurnal în formă finală, cu corecturile din interevaluare."},
    ], sursa)


if __name__ == "__main__":
    fisa_semnificatii("unitatea-1/lectia-4/fisa.pdf",
                      "Unitatea I, Lecția 4 · Un păianjen care se crede Spiderman de Adina Popescu",
                      "Crezi că păianjenul din text chiar se poartă „ca un supererou” sau doar își imaginează asta?",
                      "Art 6, Lecția 4, p. 16")
    fisa_semnificatii("unitatea-1/lectia-7/fisa.pdf",
                      "Unitatea I, Lecția 7 · Indescriptibil de Simona Popescu",
                      "Ce înseamnă, după tine, că ceva este „indescriptibil”? Se potrivește titlul cu textul?",
                      "Art 6, Lecția 7, p. 20")
    fisa_text_auxiliar("unitatea-1/lectia-9/fisa.pdf", "Unitatea I, Lecția 9",
                       "Lectura în trei, în doi, de unul singur de Rodica Zane",
                       "Art 6, Lecția 9, „Noi pagini, alte idei”, pp. 22-23")
    fisa_legenda("unitatea-1/lectia-10/fisa.pdf",
                 "Unitatea I, Lecția 10 · Legenda păianjenului și a albinei", "Art 6, Lecția 10, pp. 24-25")
    fisa_omonime("unitatea-1/lectia-15/fisa.pdf",
                 "Unitatea I, Lecția 15 (manual, Lecția 14)", "Art 6, Lecția 14, pp. 32-33")
    fisa_stil("unitatea-1/lectia-18/fisa.pdf",
              "Unitatea I, Lecția 18 (manual, Lecția 17, partea 1/2)", "Art 6, Lecția 17, pp. 38-39")
    fisa_redactare_jurnal("unitatea-1/lectia-19/fisa.pdf",
                          "Unitatea I, Lecția 19 (manual, Lecția 17, partea 2/2)", "Art 6, Lecția 17, pp. 38-39")
    print("\nTotal fise clasa a VI-a, Unitatea I: 7")
