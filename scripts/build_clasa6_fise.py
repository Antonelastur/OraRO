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


def _hdr_lines(cols, widths):
    return max(1, *[1 + int(len(str(c)) * 4.8 / (w - 8)) for c, w in zip(cols, widths)])


def draw_table(page, y, cols, widths, rows, row_h, data=None):
    # antet cu înălțime adaptată, ca titlurile lungi de coloană să nu fie tăiate
    hh = 8 + _hdr_lines(cols, widths) * 13
    page.draw_rect(fitz.Rect(48, y - 2, 48 + sum(widths), y - 2 + hh), color=None, fill=(0.92, 0.96, 0.96))
    x = 48
    for c, w in zip(cols, widths):
        page.insert_textbox(fitz.Rect(x + 4, y, x + w - 4, y - 2 + hh), str(c),
                            fontsize=10, fontname="F-bold", color=(0.14, 0.13, 0.15), lineheight=1.15)
        x += w
    y = y - 2 + hh
    top = y
    for i in range(rows):
        if data and i < len(data):
            x = 52
            for txt, w in zip(data[i], widths):
                if txt:
                    page.insert_textbox(fitz.Rect(x, y + 4, x + w - 8, y + row_h), str(txt),
                                        fontsize=10, fontname="F-reg", color=(0.14, 0.13, 0.15))
                x += w
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
                    y += 6 + _hdr_lines(b["cols"], b["widths"]) * 13 + rh * b["rows"]
                else:
                    y = draw_table(pg, y, b["cols"], b["widths"], b["rows"], rh, b.get("data"))
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
    # distribuție cu rest maxim: sum(base) == extra exact, ca pagina să se umple
    shares = [extra * s["weight"] / wsum for s in slots]
    base = [int(x) for x in shares]
    for i in sorted(range(len(slots)), key=lambda k: shares[k] - base[k], reverse=True)[:extra - sum(base)]:
        base[i] += 1
    counts = [MIN_LINES + b for b in base]

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


def fisa_text_auxiliar(out, subtitlu, titlu_text, sursa, texte_baza="textul de bază al unității"):
    sheet(out, f"Fișă de lucru — Text auxiliar: {titlu_text}", subtitlu, [
        {"t": "table", "n": 1, "title": "Jurnalul cu dublă intrare", "rows": 5,
         "cols": ["Fragment din text care mi-a atras atenția", "Ce gândesc / ce simt despre el"],
         "widths": [255, 255]},
        {"t": "lines", "n": 2, "title": "Asemănări cu textul de bază", "weight": 3,
         "prompt": f"Notează două asemănări între acest text și {texte_baza}."},
        {"t": "lines", "n": 3, "title": "Deosebiri față de textul de bază", "weight": 3,
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


def fisa_personaje(out, subtitlu, text_ref, sursa):
    sheet(out, "Fișă de lucru — Personajele", subtitlu, [
        {"t": "lines", "n": 1, "title": "Cine sunt", "weight": 2,
         "prompt": f"Notează, în ordinea apariției în {text_ref}, personajele principale și secundare."},
        {"t": "table", "n": 2, "title": "Trăsături și dovezi", "rows": 4,
         "cols": ["Personaj", "Trăsătură", "Faptă sau replică din text care o arată"], "widths": [110, 150, 250]},
        {"t": "lines", "n": 3, "title": "Relații între personaje", "weight": 3,
         "prompt": "Alege două personaje și explică ce relație e între ele. Cum se schimbă relația de la începutul la sfârșitul textului?"},
        {"t": "lines", "n": 4, "title": "Personajul care îți seamănă", "weight": 3,
         "prompt": "Care personaj îți seamănă cel mai mult și prin ce? Argumentează cu o situație din text și una din viața ta."},
    ], sursa)


def fisa_proiect_cerinte(out, subtitlu, nume, tema, cerinte, calendar, criterii, sursa):
    sheet(out, f"Fișă de proiect — {nume}", subtitlu, [
        {"t": "lines", "n": 1, "title": "Tema", "weight": 1, "prompt": tema},
        {"t": "lines", "n": 2, "title": "Ce trebuie să conțină", "weight": 1,
         "prompt": [f"• {c}" for c in cerinte]},
        {"t": "lines", "n": 3, "title": "Calendar", "weight": 1, "prompt": calendar},
        {"t": "table", "n": 4, "title": "Criterii de evaluare (punctaj orientativ)", "rows": len(criterii),
         "cols": ["Criteriu", "Punctaj"], "widths": [420, 90],
         "data": [[c, p] for c, p in criterii]},
        {"t": "lines", "n": 5, "title": "Împărțirea sarcinilor în grup", "weight": 3,
         "prompt": "Scrieți numele fiecărui membru al grupei și de ce răspunde."},
    ], sursa)


def fisa_proiect_grila(out, subtitlu, nume, criterii, sursa):
    sheet(out, f"Grilă de evaluare — {nume}", subtitlu, [
        {"t": "table", "n": 1, "title": "Grila", "rows": len(criterii),
         "cols": ["Criteriu", "Punctaj maxim", "Obținut"], "widths": [300, 110, 100],
         "data": [[c, p, ""] for c, p in criterii]},
        {"t": "lines", "n": 2, "title": "Ce a mers bine", "weight": 3,
         "prompt": "Notează două lucruri reușite în proiectul grupului vostru."},
        {"t": "lines", "n": 3, "title": "Ce am schimba", "weight": 3,
         "prompt": "Dacă ați relua proiectul, ce ați face altfel? De ce?"},
        {"t": "lines", "n": 4, "title": "Nota pe care ne-o dăm și de ce", "weight": 3,
         "prompt": "Autoevaluare: ce notă credeți că merită proiectul și cum o justificați?"},
    ], sursa)


def fisa_rezumat_oral(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Rezumatul oral", subtitlu, [
        {"t": "table", "n": 1, "title": "Rezumatul este / nu este", "rows": 4,
         "cols": ["Rezumatul ESTE...", "Rezumatul NU ESTE..."], "widths": [255, 255],
         "prompt": "Completează, cu propriile cuvinte, ce este și ce nu este un rezumat."},
        {"t": "lines", "n": 2, "title": "Secvențele textului", "weight": 3,
         "prompt": "Împarte în secvențe un text scurt citit la clasă și notează, pentru fiecare, o idee principală."},
        {"t": "lines", "n": 3, "title": "Rezumatul oral al unui film", "weight": 3,
         "prompt": "Rezumă în 5-6 propoziții un scurtmetraj sau un film văzut recent. Spune doar ce e esențial, la timpul prezent."},
        {"t": "lines", "n": 4, "title": "Evaluează rezumatul colegului", "weight": 3,
         "prompt": "Ascultă rezumatul colegului de bancă. E mai scurt decât textul? Păstrează doar esențialul? Sunt folosite propriile cuvinte? Scrie o observație."},
    ], sursa, reper_text=(
        "Reper (manual, p. 63): Rezumatul reformulează ideile cu propriile cuvinte, surprinde ideile principale "
        "și arată că le-ai înțeles. Nu reproduce textul, nu reține detaliile nesemnificative și este mai scurt "
        "decât textul pe care îl rezumă."))


def fisa_verb(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Verbul. Flexiunea verbală", subtitlu, [
        {"t": "lines", "n": 1, "title": "Predicativ sau nepredicativ?", "weight": 2,
         "prompt": ["Subliniază verbele și scrie P (predicativ) sau N (nepredicativ):",
                    "a) Petruța pare vrăjitoare. b) Copiii au râs în hohote.",
                    "c) Băiatul a fost ales primul. d) El vrea să câștige."]},
        {"t": "table", "n": 2, "title": "Cele patru forme ale trecutului", "rows": 4, "row_h": 40,
         "cols": ["Forma trecutului", "Un verb la persoana I singular", "Un verb la persoana a III-a plural"],
         "widths": [170, 175, 175],
         "data": [["imperfect", "", ""], ["perfect compus", "", ""],
                  ["perfect simplu", "", ""], ["mai-mult-ca-perfect", "", ""]],
         "prompt": "Completează cu forme proprii, pentru fiecare formă a trecutului."},
        {"t": "lines", "n": 3, "title": "Normă și abatere", "weight": 2,
         "prompt": "Rescrie corect: „Dan mai a învățat o rețetă.” / „Auzisei cântecul și fugisei.” / „Ascultaseți sfaturile.”"},
        {"t": "lines", "n": 4, "title": "Viitor de limbă vorbită și de limbă scrisă", "weight": 2,
         "prompt": "Scrie aceeași acțiune viitoare în două feluri: o formă de limbă scrisă (voi face) și una populară (o să fac / oi face)."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 64-66): Verbul arată acțiunea, starea sau existența. După capacitatea de "
        "predicație, verbele sunt predicative (pot alcătui singure predicat) sau nepredicative. La modul "
        "indicativ, trecutul are patru forme: imperfect, perfect compus, perfect simplu și mai-mult-ca-perfect."))


REP_REZUMAT_SCRIS = (
    "Reper (manual, pp. 78-79): Într-un rezumat scris, informațiile din textul de bază sunt concentrate și "
    "simplificate, verbele se folosesc de obicei la prezent, nu se reproduc dialoguri și nu se folosesc "
    "cuvinte precum „autorul”, „naratorul”, „personajul”. Rezumatul este mai scurt decât textul de bază.")


def fisa_rezumat_scris_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Rezumatul scris (I). Identificarea secvențelor", subtitlu, [
        {"t": "lines", "n": 1, "title": "Împărțirea în secvențe", "weight": 3,
         "prompt": "Ia un text narativ citit la clasă. Marchează unde se termină fiecare secvență (schimbare de loc, de timp, de moment al acțiunii) și numerotează-le."},
        {"t": "table", "n": 2, "title": "Cuvinte-cheie pe secvențe", "rows": 5,
         "cols": ["Secvența", "Cuvinte-cheie", "Ideea principală"], "widths": [80, 200, 230]},
        {"t": "lines", "n": 3, "title": "Verificare", "weight": 3,
         "prompt": "Recitește ideile principale, în ordine. Se înțelege firul întâmplărilor doar din ele? Ce lipsește sau ce e de prisos?"},
    ], sursa, reper_text=REP_REZUMAT_SCRIS)


def fisa_rezumat_scris_2(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Rezumatul scris (II). Redactarea", subtitlu, [
        {"t": "lines", "n": 1, "title": "Ce nu intră în rezumat", "weight": 2,
         "prompt": "Taie din listă ce nu are loc într-un rezumat și explică pe scurt de ce: autorul, naratorul, personajul, deoarece, dialoguri reproduse, detalii de decor, păreri personale."},
        {"t": "lines", "n": 2, "title": "Redactarea rezumatului", "weight": 5,
         "prompt": "Scrie rezumatul folosind doar ideile principale identificate în fișa (I). La timpul prezent, cu propriile cuvinte, fără dialog reprodus."},
        {"t": "lines", "n": 3, "title": "Interevaluare (colegul de bancă)", "weight": 3,
         "prompt": "Verifică rezumatul colegului: e mai scurt decât textul? informațiile sunt concentrate? verbele sunt la prezent? lipsesc „autorul / naratorul / personajul”? Scrie o observație."},
    ], sursa, reper_text=REP_REZUMAT_SCRIS)


REP_VERSIFICATIE = (
    "Reper (manual, p. 90): Versificația (prozodia) se ocupă cu regulile de construcție a poeziei. Versul "
    "este un rând dintr-o poezie. Strofa este o grupare de versuri, despărțită de altele printr-un rând alb. "
    "Măsura este numărul de silabe dintr-un vers. Rima este potrivirea sunetelor de la sfârșitul versurilor, "
    "începând cu ultima vocală accentuată. Ritmul este alternanța silabelor accentuate și neaccentuate.")


def fisa_prozodie(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Prozodie și recitare", subtitlu, [
        {"t": "table", "n": 1, "title": "Strofa și versul", "rows": 3, "row_h": 34,
         "cols": ["Ce număr", "Răspuns", "Cum ai numărat"], "widths": [180, 90, 240],
         "data": [["Câte strofe are poezia", "", ""], ["Câte versuri are o strofă", "", ""],
                  ["Câte silabe are primul vers", "", ""]],
         "prompt": "Ia poezia Iarna de Vasile Alecsandri și completează."},
        {"t": "lines", "n": 2, "title": "Marchează pauzele de recitare", "weight": 3,
         "prompt": "Transcrie prima strofă și marchează cu o bară ( / ) locurile unde ai face pauză când reciți. Explică o alegere."},
        {"t": "lines", "n": 3, "title": "Grila de recitare", "weight": 3,
         "prompt": "Recită fragmentul unui coleg. Notează, cu o observație fiecare: intonația expresivă, ritmul rostirii, gestica și mimica."},
        {"t": "lines", "n": 4, "title": "Ce imagine îmi rămâne", "weight": 3,
         "prompt": "Ce imagine din poezie îți rămâne cel mai puternic în minte după ce ai recitat-o? Descrie-o în 2-3 rânduri."},
    ], sursa, reper_text=REP_VERSIFICATIE)


def fisa_versificatie(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Versificația: rimă, măsură, ritm", subtitlu, [
        {"t": "lines", "n": 1, "title": "Măsura versurilor", "weight": 2,
         "prompt": ["Numără silabele fiecărui vers din strofa de mai jos și scrie măsura la capăt:",
                    "„A nins. În soare codrul cu trunchiuri de cărbune / Întinde umbre-albastre pe proaspătul omăt, /",
                    "Și mă visez la geamuri cu anii îndărăt: / Văd dealul alb, târlia și vremurile bune.” (Ion Pillat)"]},
        {"t": "lines", "n": 2, "title": "Rima", "weight": 2,
         "prompt": "Notează sunetele care rimează la sfârșitul versurilor de mai sus. Ce schema de rimă rezultă (aabb, abab, abba)?"},
        {"t": "lines", "n": 3, "title": "Ritmul", "weight": 3,
         "prompt": "Citește cu voce tare primul vers și marchează silabele accentuate. Ritmul e mai degrabă vioi sau lin? Cum se potrivește cu peisajul descris?"},
        {"t": "lines", "n": 4, "title": "Scrii tu două versuri", "weight": 3,
         "prompt": "Compune două versuri despre iarnă care să rimeze între ele și să aibă aceeași măsură."},
    ], sursa, reper_text=REP_VERSIFICATIE)


def fisa_atitudini(out, subtitlu, sursa):
    stmts = [
        "a) Sunt atent/atentă la ceea ce mi se comunică.",
        "b) Mă interesează nu doar întâmplarea, ci și trăirile celui care vorbește.",
        "c) Am răbdare să ascult punctul de vedere al fiecăruia.",
        "d) Într-un proiect de grup, mă implic în toate activitățile.",
        "e) Îmi place să lucrez în grup.",
        "f) Intru ușor în vorbă cu colegi pe care nu-i cunosc bine.",
    ]
    sheet(out, "Fișă de lucru — Atitudini comunicative. Autoevaluare", subtitlu, [
        {"t": "table", "n": 1, "title": "Termometrul atitudinilor", "rows": len(stmts), "row_h": 32,
         "cols": ["Enunț", "1", "2", "3", "4", "5"], "widths": [330, 36, 36, 36, 36, 36],
         "data": [[s, "", "", "", "", ""] for s in stmts],
         "prompt": "Bifează în dreptul fiecărui enunț: 1 = dezacord total, 3 = neutru, 5 = acord total."},
        {"t": "lines", "n": 2, "title": "Unde stau bine", "weight": 3,
         "prompt": "La ce atitudine (interes, curiozitate, implicare, cooperare) crezi că stai cel mai bine? Dă un exemplu concret dintr-o oră."},
        {"t": "lines", "n": 3, "title": "Ce vreau să schimb", "weight": 3,
         "prompt": "Alege o atitudine la care vrei să progresezi și scrie un pas mic, concret, pe care îl poți face săptămâna asta."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 100-101): Atitudinile comunicative țin de felul în care participi la o discuție sau "
        "la o activitate de grup: interesul, curiozitatea, implicarea și cooperarea. Ele se pot observa și "
        "autoevalua."))


def fisa_descriere_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Descrierea unui peisaj (I). Pregătire", subtitlu, [
        {"t": "lines", "n": 1, "title": "Subiectul și scopul", "weight": 2,
         "prompt": "Subiectul descrierii: un peisaj de iarnă. Pentru cine scrii și de ce scrii? Notează în două rânduri."},
        {"t": "table", "n": 2, "title": "Ce percep (văd, aud, simt prin miros / frig / atingere, ce emoție am)",
         "rows": 4, "row_h": 30,
         "cols": ["Ce văd", "Ce aud", "Ce simt", "Ce emoție am"], "widths": [128, 128, 128, 126]},
        {"t": "lines", "n": 3, "title": "Patru figuri de stil", "weight": 3,
         "prompt": "Alege patru elemente ale peisajului. La două alătură câte un epitet; cu celelalte două fă o comparație și o personificare."},
        {"t": "lines", "n": 4, "title": "Planul descrierii", "weight": 3,
         "prompt": "Fixează direcția privirii (sus / jos / stânga / dreapta) și ordinea în care vei prezenta planurile peisajului (de exemplu: cerul, apoi câmpul, apoi un detaliu apropiat)."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 116-117): Redactarea are cinci etape: pregătirea (alegi subiectul, aduni informații, "
        "faci planul), ciorna, revizuirea, editarea, publicarea. Într-o descriere de peisaj se folosesc de "
        "obicei verbe la imperfect, persoana I singular, și figuri de stil: epitet, comparație, personificare."))


def fisa_descriere_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Descrierea unui peisaj (II). Redactare", subtitlu, [
        {"t": "lines", "n": 1, "title": "Ciorna", "weight": 6,
         "prompt": "Scrie prima variantă a descrierii peisajului de iarnă, pe baza planului din fișa (I). Folosește verbe la imperfect, persoana I singular, și cele patru figuri de stil pregătite."},
    ], [
        {"t": "lines", "n": 2, "title": "Verificare", "weight": 2,
         "prompt": "Bifează: ai folosit cele patru elemente ale peisajului? ai integrat cele patru figuri de stil? ai menționat senzații și emoții? verbele sunt la imperfect, persoana I? ai un titlu surprinzător?"},
        {"t": "lines", "n": 3, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie descrierea în formă finală, cu corecturile de exprimare, ortografie și punctuație."},
    ], sursa)


def fisa_fabula_mesaj(out, subtitlu, titlu_fabula, sursa):
    sheet(out, "Fișă de lucru — Mesajul fabulei, azi", subtitlu, [
        {"t": "lines", "n": 1, "title": "Morala, cu cuvintele tale", "weight": 2,
         "prompt": f"Formulează într-o propoziție învățătura fabulei {titlu_fabula}."},
        {"t": "lines", "n": 2, "title": "O situație de azi", "weight": 4,
         "prompt": "Descrie o situație din viața de azi (școală, familie, online) în care morala acestei fabule s-ar potrivi la fel de bine."},
        {"t": "lines", "n": 3, "title": "Mai e valabilă?", "weight": 4,
         "prompt": "Crezi că mesajul fabulei este la fel de adevărat astăzi ca atunci când a fost scrisă? Scrie-ți răspunsul și două argumente."},
        {"t": "lines", "n": 4, "title": "Rescrie fabula pe scurt", "weight": 3,
         "prompt": "Repovestește fabula în 4-5 rânduri, mutând acțiunea în zilele noastre, cu personaje umane."},
    ], sursa)


REP_PRONUME = (
    "Reper (manual, p. 140): Pronumele personal și cel de politețe au aceleași funcții sintactice ca "
    "substantivul (subiect, complement, atribut) și își schimbă forma după caz. Politețea se exprimă prin "
    "forme ca dumneavoastră, dumnealui, domnia sa și prin formule reverențioase: Alteța Sa, Excelența Sa, "
    "Majestatea Sa, Sfinția Sa.")


def fisa_pronume_caz(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Pronumele personal și de politețe: caz, grade de politețe", subtitlu, [
        {"t": "table", "n": 1, "title": "Cazul și funcția sintactică", "rows": 4, "row_h": 34,
         "cols": ["Enunț", "Pronumele", "Cazul", "Funcția sintactică"], "widths": [200, 90, 90, 130],
         "data": [["El le-a înșelat pe găini.", "", "", ""],
                  ["Întrecerea a câștigat-o ea.", "", "", ""],
                  ["Tufișurile de lângă ea sunt înalte.", "", "", ""],
                  ["Vorbim mereu despre ei.", "", "", ""]]},
        {"t": "lines", "n": 2, "title": "Grade de politețe", "weight": 3,
         "prompt": "Rescrie enunțul „Tu ai spus adevărul.” în trei grade de politețe diferite (familiar, politicos, reverențios). Notează ce pronume ai folosit."},
        {"t": "lines", "n": 3, "title": "Formule reverențioase", "weight": 3,
         "prompt": "Potrivește: rege, papă, mitropolit, ambasador cu formulele Majestatea Sa, Sanctitatea Sa, Înaltpreasfinția Sa, Excelența Sa."},
    ], sursa, reper_text=REP_PRONUME)


def fisa_clitice(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Cliticele pronominale. Anticipare, reluare, ortografie", subtitlu, [
        {"t": "lines", "n": 1, "title": "Antepuse sau postpuse", "weight": 2,
         "prompt": ["Notează, pentru fiecare clitic, dacă e antepus (înaintea verbului) sau postpus (după verb):",
                    "a) L-am atenționat pe Andrei.  b) Pe Ina am sunat-o ieri.",
                    "c) Să-i dai lui Silviu cartea.  d) Mihaelei i-am trimis un mesaj."]},
        {"t": "lines", "n": 2, "title": "Anticipare și reluare", "weight": 3,
         "prompt": "Rescrie, anticipând sau reluând complementul prin clitic: „Am dat cartea colegului.” / „Pe bunica o vizităm duminică.”"},
        {"t": "lines", "n": 3, "title": "Comprimă formele", "weight": 3,
         "prompt": "Transformă după model (Pot să-i împrumut colegului CD-urile? → Pot să i le împrumut?): „A vândut pachetele unei cliente.” / „A trimis părintelui regulamentul.”"},
        {"t": "lines", "n": 4, "title": "Corectează ortografia", "weight": 3,
         "prompt": "Rescrie corect: „Ia-ți văzut colegii?” / „Î-mi place poezia.” / „Radu iar da o carte lui Mihai.”"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 140-141): Cliticele pronominale sunt formele neaccentuate ale pronumelui (mă, te, "
        "l, o, i, le, mi, ți, ne, vă). Ele pot fi antepuse sau postpuse verbului și pot anticipa ori relua un "
        "complement (I-am scris lui Andrei; Pe tata l-am văzut). Se scriu legate prin cratimă de cuvântul "
        "vecin: l-am, să-i, ți-ai, i le."))


def fisa_inserare_descriptiv_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Inserarea secvențelor descriptive (I). Pregătire", subtitlu, [
        {"t": "lines", "n": 1, "title": "Firul narativ", "weight": 3,
         "prompt": "Pornește de la o situație inițială dată sau aleasă de tine. Notează pe scurt: situația inițială, 2-3 urmări posibile, urmarea aleasă, deznodământul."},
        {"t": "table", "n": 2, "title": "Unde inserez descrierea (momentul, ce descriu, ce figuri de stil)",
         "rows": 3, "row_h": 36,
         "cols": ["Momentul", "Ce descriu (loc, personaj, obiect)", "Figuri de stil"],
         "widths": [130, 250, 130]},
        {"t": "lines", "n": 3, "title": "Rezerva de imagini", "weight": 3,
         "prompt": "Scrie din timp câteva enumerații, epitete și comparații pe care le vei putea folosi în cele două secvențe descriptive."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 146-147): Într-o narațiune poți insera secvențe descriptive, în locuri alese cu "
        "grijă, ca să încetinești ritmul și să faci cititorul să vadă scena. În descriere folosești enumerații, "
        "epitete și comparații, fără să pierzi firul întâmplărilor."))


def fisa_inserare_descriptiv_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Inserarea secvențelor descriptive (II). Redactare", subtitlu, [
        {"t": "lines", "n": 1, "title": "Ciorna narațiunii", "weight": 6,
         "prompt": "Redactează o narațiune scurtă la persoana a III-a, pe baza planului din fișa (I), și inserează în cuprinsul ei două secvențe descriptive."},
    ], [
        {"t": "lines", "n": 2, "title": "Verificare", "weight": 2,
         "prompt": "Bifează: firul întâmplărilor se înțelege? cele două secvențe descriptive sunt la locul potrivit? ai folosit enumerații, epitete, comparații? deznodământul rezolvă problema de la început?"},
        {"t": "lines", "n": 3, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie narațiunea în formă finală, cu corecturile de conținut, exprimare și punctuație."},
    ], sursa)


def fisa_text_explicativ(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul explicativ. Redactare", subtitlu, [
        {"t": "lines", "n": 1, "title": "Ce fel de explicație", "weight": 2,
         "prompt": ["Scrie, pentru fiecare titlu, dacă textul cerut ar fi cauzal (răspunde la „de ce?”) sau procedural (răspunde la „cum?”):",
                    "„De ce îngheață apa iarna?” ___   „Cum se pregătește un ceai?” ___",
                    "„De ce migrează păsările?” ___   „Cum se joacă «Uliii și porumbeii»?” ___"]},
        {"t": "lines", "n": 2, "title": "Planul textului", "weight": 3,
         "prompt": "Alege un subiect pe care îl cunoști bine. Notează: ce anume explici, cui te adresezi, în ce ordine prezinți informațiile (pași sau cauze)."},
        {"t": "lines", "n": 3, "title": "Redactarea", "weight": 5,
         "prompt": "Scrie textul explicativ (minimum 8 rânduri). Folosește conectori potriviți (mai întâi, apoi, în final / pentru că, prin urmare) și un limbaj clar, fără cuvinte inutile."},
    ], sursa, reper_text=(
        "Reper (manual, p. 148): Textul explicativ oferă o explicație sau o informație. Poate fi cauzal (arată "
        "de ce se petrece ceva) sau procedural (arată cum se face ceva, pas cu pas). Are un limbaj clar, "
        "precis, și folosește conectori care leagă ideile."))


def fisa_argumentativ(out, subtitlu, titlu_text, sursa):
    sheet(out, "Fișă de lucru — Textul argumentativ", subtitlu, [
        {"t": "lines", "n": 1, "title": "Teza", "weight": 2,
         "prompt": f"Care este ideea pe care autoarea o susține în {titlu_text}? Scrie-o într-o propoziție."},
        {"t": "table", "n": 2, "title": "Argumentele", "rows": 3, "row_h": 40,
         "cols": ["Argumentul (pe scurt)", "Cuvântul sau expresia care îl introduce", "Un exemplu din text"],
         "widths": [190, 160, 160],
         "prompt": "Găsește trei argumente din text și conectorii care le leagă (în plus, mai mult, de asemenea)."},
        {"t": "lines", "n": 3, "title": "Ești de acord?", "weight": 4,
         "prompt": "Ești de acord cu teza autoarei? Scrie-ți poziția și adaugă un argument propriu, diferit de cele din text."},
        {"t": "lines", "n": 4, "title": "Un contraargument", "weight": 3,
         "prompt": "Ce ar putea răspunde cineva care nu e de acord? Formulează un contraargument și apoi replica ta."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 166-167): Un text argumentativ susține o idee (teza) prin argumente, legate între "
        "ele cu conectori: în plus, mai mult, de asemenea, prin urmare. De obicei se încheie cu o concluzie "
        "care reia teza."))


def fisa_text_oral(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Comprehensiunea textului oral. Parafraza", subtitlu, [
        {"t": "lines", "n": 1, "title": "Parafrazează", "weight": 3,
         "prompt": "Ascultă (sau citește cu voce tare) un scurt text informativ. Reformulează cu cuvintele tale trei enunțuri din el, fără să schimbi sensul."},
        {"t": "table", "n": 2, "title": "Explicit sau implicit", "rows": 4, "row_h": 32,
         "cols": ["Informația", "Explicită (spusă direct)", "Implicită (dedusă)"], "widths": [280, 115, 115],
         "prompt": "Pentru fiecare informație, bifează dacă a fost spusă direct sau dedusă din text."},
        {"t": "lines", "n": 3, "title": "O întrebare de clarificare", "weight": 3,
         "prompt": "Ce nu a fost clar în text? Formulează o întrebare pe care ai pune-o vorbitorului."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 178-179): A parafraza înseamnă a reformula o idee cu propriile cuvinte, păstrând "
        "sensul. Într-un text, informațiile explicite sunt spuse direct, iar cele implicite se deduc din context."))


REP_ADJECTIV = (
    "Reper (manual, pp. 182-183): Adjectivul determină un substantiv și are, de obicei, funcția sintactică de "
    "atribut adjectival sau de nume predicativ. Un adjectiv poate fi la rândul lui determinat de un adverb sau "
    "de un complement (mândru de reușită, ușor de citit).")


def fisa_adjectiv(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Posibilitățile combinatorii ale adjectivului", subtitlu, [
        {"t": "table", "n": 1, "title": "Adjectivul și funcția lui", "rows": 4, "row_h": 34,
         "cols": ["Enunț", "Adjectivul", "Funcția sintactică"], "widths": [280, 110, 120],
         "data": [["Singurul român care a zburat în cosmos este Prunariu.", "", ""],
                  ["Astronautul este celebru.", "", ""],
                  ["Costumele astronauților sunt grele.", "", ""],
                  ["O călătorie în spațiu este fascinantă.", "", ""]]},
        {"t": "lines", "n": 2, "title": "Ce determină adjectivul", "weight": 3,
         "prompt": "Adaugă un adverb sau un complement lângă fiecare adjectiv: „mândru ___”, „ușor ___”, „plin ___”. Ce parte de propoziție e cuvântul adăugat?"},
        {"t": "lines", "n": 3, "title": "Completează cu adjective", "weight": 3,
         "prompt": "Completează și precizează funcția sintactică a adjectivului: „Orașele ___ sunt ___.” / „Ghidul ___ a fost ___.”"},
    ], sursa, reper_text=REP_ADJECTIV)


def fisa_adverb(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Adverbul: grade de comparație, funcție sintactică", subtitlu, [
        {"t": "lines", "n": 1, "title": "Subliniază adverbele", "weight": 2,
         "prompt": ["Subliniază toate adverbele din textul de mai jos:",
                    "„Copiii se joacă azi în curte împreună. Acolo se întâmplă cele mai surprinzătoare lucruri.",
                    "Ies degrabă din clase. Unii intră apoi foarte încet, tiptil, după profesori.”"]},
        {"t": "table", "n": 2, "title": "Cu grad sau fără grad de comparație", "rows": 3, "row_h": 32,
         "cols": ["Adverbul", "Are grade de comparație? (da / nu)", "La ce grad e folosit aici"],
         "widths": [110, 200, 200]},
        {"t": "lines", "n": 3, "title": "Funcția sintactică", "weight": 3,
         "prompt": "Pentru trei adverbe din text, pune întrebarea potrivită (unde? când? cum?) și scrie ce circumstanțial este."},
        {"t": "lines", "n": 4, "title": "Trece la toate gradele", "weight": 3,
         "prompt": "Trece adverbul „lesne”, pe rând, la gradul comparativ (de superioritate, de egalitate, de inferioritate) și la superlativ."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 186-187): Adverbul arată o circumstanță (de loc, de timp, de mod) și are, de "
        "obicei, funcția de circumstanțial. Unele adverbe au grade de comparație (repede, mai repede, foarte "
        "repede), altele nu (acasă, azi, mereu, aici)."))


def fisa_vorbire_indirecta(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Transformarea vorbirii directe în vorbire indirectă", subtitlu, [
        {"t": "lines", "n": 1, "title": "Ce se schimbă", "weight": 2,
         "prompt": "Trece în vorbire indirectă: „— Vin și eu cu voi! strigă Ana.” Notează ce ai schimbat: semnele de punctuație, persoana verbului, persoana pronumelui."},
        {"t": "table", "n": 2, "title": "Verbul de declarație potrivit", "rows": 3, "row_h": 36,
         "cols": ["Replica (vorbire directă)", "Verbul de declarație", "Cuvântul de legătură (că / să / dacă)"],
         "widths": [230, 140, 140],
         "data": [["„Unde mergem?” a întrebat Dan.", "", ""],
                  ["„Adu-mi cartea!” i-a spus.", "", ""],
                  ["„Am terminat tema.” a zis Maria.", "", ""]]},
        {"t": "lines", "n": 3, "title": "Transformă un dialog întreg", "weight": 4,
         "prompt": "Ia un schimb scurt de replici (3-4) dintr-un text citit la clasă și repovestește-l în întregime în vorbire indirectă."},
    ], sursa, reper_text=(
        "Reper (manual, p. 188): La trecerea în vorbire indirectă dispar semnele dialogului (linie, ghilimele, "
        "semnul exclamării sau al întrebării), verbele și pronumele trec la persoana a III-a, iar replicile se "
        "leagă de un verb de declarație prin „că” (enunțiativ), „să” (imperativ) sau „dacă” / un cuvânt "
        "interogativ (interogativ). Vocativul dispare, iar spusele sunt repovestite, nu reproduse exact."))


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
                       "Art 6, Lecția 9, „Noi pagini, alte idei”, pp. 22-23",
                       texte_baza="textele de bază ale unității (Un păianjen care se crede Spiderman, Indescriptibil)")
    fisa_legenda("unitatea-1/lectia-10/fisa.pdf",
                 "Unitatea I, Lecția 10 · Legenda păianjenului și a albinei", "Art 6, Lecția 10, pp. 24-25")
    fisa_omonime("unitatea-1/lectia-15/fisa.pdf",
                 "Unitatea I, Lecția 15 (manual, Lecția 14)", "Art 6, Lecția 14, pp. 32-33")
    fisa_stil("unitatea-1/lectia-18/fisa.pdf",
              "Unitatea I, Lecția 18 (manual, Lecția 17, partea 1/2)", "Art 6, Lecția 17, pp. 38-39")
    fisa_redactare_jurnal("unitatea-1/lectia-19/fisa.pdf",
                          "Unitatea I, Lecția 19 (manual, Lecția 17, partea 2/2)", "Art 6, Lecția 17, pp. 38-39")

    # ---------- Unitatea II ----------
    fisa_proiect_cerinte(
        "unitatea-2/lectia-1/fisa.pdf", "Unitatea II, Lecția 1 · Proiect de grup",
        "Prietenia în filme",
        "Alegeți un film sau un scurtmetraj despre prietenie și pregătiți o prezentare de grup despre felul în care e înfățișată prietenia în el.",
        ["Titlul filmului, regizorul, anul și de ce l-ați ales",
         "Personajele între care există prietenia și cum evoluează relația",
         "O secvență-cheie descrisă pe scurt și ce arată ea despre prietenie",
         "O concluzie a grupului: ce spune filmul despre prietenie",
         "Rolul fiecărui membru al grupei"],
        "Proiect de grup, prezentare la finalul unității.",
        [("Alegerea filmului e potrivită și motivată", "2p"),
         ("Analiza relației de prietenie e clară", "3p"),
         ("Secvența-cheie e bine aleasă și explicată", "3p"),
         ("Colaborarea în grup", "2p")],
        "Art 6, Proiect de grup, p. 60")
    fisa_personaje("unitatea-2/lectia-5/fisa.pdf",
                   "Unitatea II, Lecția 5 · Oracolul de Mircea Cărtărescu",
                   "Oracolul", "Art 6, Lecția 4, pp. 52-53")
    fisa_semnificatii("unitatea-2/lectia-6/fisa.pdf",
                      "Unitatea II, Lecția 6 · Oracolul de Mircea Cărtărescu",
                      "Crezi că băiatul din text chiar crede în oracol sau doar vrea să fie acceptat de colegi?",
                      "Art 6, Lecția 5, pp. 54-55")
    fisa_text_auxiliar("unitatea-2/lectia-7/fisa.pdf", "Unitatea II, Lecția 7",
                       "Micuțul Nicolas de Sempé și Goscinny",
                       "Art 6, Lecția 6, „Noi pagini, alte idei”, pp. 56-57",
                       texte_baza="textul de bază al unității (Oracolul de Mircea Cărtărescu)")
    fisa_proiect_grila("unitatea-2/lectia-9/fisa.pdf", "Unitatea II, Lecția 9 · Proiect de grup",
                       "Prietenia în filme",
                       [("Alegerea filmului e potrivită și motivată", "2p"),
                        ("Analiza relației de prietenie e clară", "3p"),
                        ("Secvența-cheie e bine aleasă și explicată", "3p"),
                        ("Colaborarea în grup", "2p")],
                       "Art 6, Proiect de grup, pp. 60-61")
    fisa_rezumat_oral("unitatea-2/lectia-11/fisa.pdf",
                      "Unitatea II, Lecția 11 (manual, Lecția 8, partea 2/2)", "Art 6, Lecția 8, pp. 62-63")
    fisa_verb("unitatea-2/lectia-13/fisa.pdf",
              "Unitatea II, Lecția 13 (manual, Lecția 9, partea 2/2)", "Art 6, Lecția 9, pp. 64-67")
    fisa_rezumat_scris_1("unitatea-2/lectia-20/fisa.pdf",
                         "Unitatea II, Lecția 20 (manual, Lecția 15, partea 1/2)", "Art 6, Lecția 15, pp. 78-79")
    fisa_rezumat_scris_2("unitatea-2/lectia-21/fisa.pdf",
                         "Unitatea II, Lecția 21 (manual, Lecția 15, partea 2/2)", "Art 6, Lecția 15, pp. 78-79")

    # ---------- Unitatea III ----------
    fisa_prozodie("unitatea-3/lectia-2/fisa.pdf",
                  "Unitatea III, Lecția 2 (manual, Lecția 1, partea 2/2)", "Art 6, Lecția 1, pp. 84-85")
    fisa_versificatie("unitatea-3/lectia-5/fisa.pdf",
                      "Unitatea III, Lecția 5 (manual, Lecția 3, partea 2/2)", "Art 6, Lecția 3, p. 89")
    fisa_semnificatii("unitatea-3/lectia-6/fisa.pdf",
                      "Unitatea III, Lecția 6 · Iarna de Vasile Alecsandri",
                      "Crezi că poezia descrie iarna ca pe un anotimp prietenos sau ca pe unul aspru? Ce te face să crezi asta?",
                      "Art 6, Lecția 4, p. 91")
    fisa_text_auxiliar("unitatea-3/lectia-8/fisa.pdf", "Unitatea III, Lecția 8",
                       "Greutatea omătului de Ana Blandiana",
                       "Art 6, Lecția 6, „Noi pagini, alte idei”, p. 95",
                       texte_baza="textul de bază al unității (Iarna de Vasile Alecsandri)")
    fisa_proiect_cerinte(
        "unitatea-3/lectia-11/fisa.pdf", "Unitatea III, Lecția 11 · Proiect individual",
        "Obiceiuri specifice sărbătorilor de iarnă",
        "Alege un obicei de iarnă din zona ta sau din familia ta și prezintă-l, arătând ce se face, când și ce semnificație are.",
        ["Numele obiceiului și zona sau familia de la care îl știi",
         "Ce se face, pas cu pas, și în ce zi",
         "Ce semnificație are obiceiul (ce urează, ce alungă, ce sărbătorește)",
         "O sursă (o persoană din familie, o carte, un site) și, dacă poți, o fotografie sau un desen propriu"],
        "Proiect individual, prezentare în ultima oră dinaintea vacanței de iarnă.",
        [("Obiceiul e prezentat clar și complet", "3p"),
         ("Semnificația e explicată corect", "3p"),
         ("Documentarea are cel puțin o sursă", "2p"),
         ("Prezentarea e îngrijită", "2p")],
        "Art 6, Proiect individual, pp. 98-99")
    fisa_atitudini("unitatea-3/lectia-13/fisa.pdf",
                   "Unitatea III, Lecția 13 (manual, Lecția 8, partea 2/2)", "Art 6, Lecția 8, pp. 100-101")
    fisa_descriere_1("unitatea-3/lectia-21/fisa.pdf",
                     "Unitatea III, Lecția 21 (manual, Lecția 16, partea 1/2)", "Art 6, Lecția 16, pp. 116-117")
    fisa_descriere_2("unitatea-3/lectia-22/fisa.pdf",
                     "Unitatea III, Lecția 22 (manual, Lecția 16, partea 2/2)", "Art 6, Lecția 16, pp. 116-117")

    # ---------- Unitatea IV ----------
    fisa_semnificatii("unitatea-4/lectia-4/fisa.pdf",
                      "Unitatea IV, Lecția 4 (manual, Lecția 4, partea 1/2) · Ulucul și găinile",
                      "Cu ce personaj al fabulei ești de acord și cu ce personaj nu ești de acord? De ce?",
                      "Art 6, Lecția 4, p. 128")
    fisa_fabula_mesaj("unitatea-4/lectia-5/fisa.pdf",
                      "Unitatea IV, Lecția 5 (manual, Lecția 4, partea 2/2)",
                      "Ulucul și găinile", "Art 6, Lecția 4, p. 128")
    fisa_text_auxiliar("unitatea-4/lectia-6/fisa.pdf", "Unitatea IV, Lecția 6",
                       "Iepurele și broasca-țestoasă de Jean de La Fontaine",
                       "Art 6, Lecția 5, „Noi pagini, alte idei”, p. 129",
                       texte_baza="textul de bază al unității (fabula Ulucul și găinile)")
    fisa_pronume_caz("unitatea-4/lectia-12/fisa.pdf",
                     "Unitatea IV, Lecția 12 (manual, Lecția 8, partea 2/2)", "Art 6, Lecția 8, pp. 137-139")
    fisa_clitice("unitatea-4/lectia-14/fisa.pdf",
                 "Unitatea IV, Lecția 14 (manual, Lecția 9, partea 2/2)", "Art 6, Lecția 9, pp. 140-141")
    fisa_inserare_descriptiv_1("unitatea-4/lectia-17/fisa.pdf",
                               "Unitatea IV, Lecția 17 (manual, Lecția 12, partea 1/2)", "Art 6, Lecția 12, pp. 146-147")
    fisa_inserare_descriptiv_2("unitatea-4/lectia-18/fisa.pdf",
                               "Unitatea IV, Lecția 18 (manual, Lecția 12, partea 2/2)", "Art 6, Lecția 12, pp. 146-147")
    fisa_text_explicativ("unitatea-4/lectia-20/fisa.pdf",
                         "Unitatea IV, Lecția 20 (manual, Lecția 13, partea 2/2)", "Art 6, Lecția 13, p. 149")

    # ---------- Unitatea V ----------
    fisa_proiect_cerinte(
        "unitatea-5/lectia-1/fisa.pdf", "Unitatea V, Lecția 1 · Proiect de grup",
        "Comunitățile din jurul României",
        "Alegeți o comunitate românească din afara granițelor (dintr-o țară vecină sau din diaspora) și pregătiți o prezentare despre viața, limba și tradițiile ei.",
        ["Unde trăiește comunitatea aleasă și de când",
         "Cum își păstrează limba română (școală, biserică, familie, presă)",
         "Două-trei tradiții sau sărbători specifice",
         "O mărturie: un citat dintr-un interviu, un articol sau o persoană cu care ați vorbit",
         "Rolul fiecărui membru al grupei"],
        "Proiect de grup, prezentare la finalul unității.",
        [("Informația despre comunitate e corectă și documentată", "3p"),
         ("Legătura cu limba română e explicată clar", "3p"),
         ("Mărturia adaugă ceva viu prezentării", "2p"),
         ("Colaborarea în grup", "2p")],
        "Art 6, Proiect de grup, p. 175")
    fisa_personaje("unitatea-5/lectia-5/fisa.pdf",
                   "Unitatea V, Lecția 5 · D-l Goe... de I.L. Caragiale",
                   "D-l Goe...", "Art 6, Lecția 4, pp. 162-163")
    fisa_semnificatii("unitatea-5/lectia-6/fisa.pdf",
                      "Unitatea V, Lecția 6 · D-l Goe... de I.L. Caragiale",
                      "Pe cine ironizează autorul mai mult în această schiță: pe Goe sau pe familia lui? De ce crezi asta?",
                      "Art 6, Lecția 5, pp. 164-165")
    fisa_argumentativ("unitatea-5/lectia-7/fisa.pdf", "Unitatea V, Lecția 7",
                      "Motive pentru care călătoriile te fac mai bun de Samantha Fanelli",
                      "Art 6, Lecția 6, pp. 166-167")
    fisa_text_auxiliar("unitatea-5/lectia-9/fisa.pdf", "Unitatea V, Lecția 9",
                       "George și cheia secretă a Universului de Lucy și Stephen Hawking",
                       "Art 6, Lecția 8, „Noi pagini, alte idei”, pp. 170-171",
                       texte_baza="textul de bază al unității (D-l Goe... de I.L. Caragiale)")
    fisa_proiect_grila("unitatea-5/lectia-11/fisa.pdf", "Unitatea V, Lecția 11 · Proiect de grup",
                       "Comunitățile din jurul României",
                       [("Informația despre comunitate e corectă și documentată", "3p"),
                        ("Legătura cu limba română e explicată clar", "3p"),
                        ("Mărturia adaugă ceva viu prezentării", "2p"),
                        ("Colaborarea în grup", "2p")],
                       "Art 6, Proiect de grup, p. 175")
    fisa_text_oral("unitatea-5/lectia-13/fisa.pdf",
                   "Unitatea V, Lecția 13 (manual, Lecția 11)", "Art 6, Lecția 11, pp. 178-179")
    fisa_adjectiv("unitatea-5/lectia-15/fisa.pdf",
                  "Unitatea V, Lecția 15 (manual, Lecția 13)", "Art 6, Lecția 13, pp. 182-183")
    fisa_adverb("unitatea-5/lectia-17/fisa.pdf",
                "Unitatea V, Lecția 17 (manual, Lecția 15)", "Art 6, Lecția 15, pp. 186-187")
    fisa_vorbire_indirecta("unitatea-5/lectia-19/fisa.pdf",
                           "Unitatea V, Lecția 19 (manual, Lecția 16, partea 2/2)", "Art 6, Lecția 16, pp. 188-189")

    print("\nFise clasa a VI-a: U1 (7) + U2 (9) + U3 (8) + U4 (8) + U5 (10) = 42")
