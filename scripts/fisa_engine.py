# -*- coding: utf-8 -*-
"""Motor comun de layout pentru fișele de lucru OraRO (PDF A4).

Pagina se umple până la subsol: secțiunile cu spațiu de scris împart spațiul
rămas proporțional cu un „weight”. Tabelele au chenar vizibil, antet cu
înălțime adaptată și pot fi pre-completate.

Folosire:
    from fisa_engine import sheet, sheet2, set_clasa
    set_clasa("clasa-7")
    sheet("unitatea-1/lectia-2/fisa.pdf", "Titlu", "Subtitlu", [blocks...], "Sursă")

Bloc 'lines': {'t':'lines','n':int,'title':str,'prompt':str|list,'weight':int}
Bloc 'table': {'t':'table','n':int,'title':str,'prompt':str|None,
               'cols':[...],'widths':[...],'rows':int,'row_h':int?,'data':[[...]]?}
"""
import os

import fitz
from fisa_helpers import W, H, new_doc, new_page, header, footer, section, item, table_row

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOOT_Y = H - 44
LINE_GAP = 24
MIN_LINES = 2
GRID = (0.78, 0.80, 0.81)
INK = (0.14, 0.13, 0.15)

_CLASA = "clasa-6"


def set_clasa(nume):
    global _CLASA
    _CLASA = nume


def out_path(rel):
    return os.path.join(ROOT, "public", "materiale", _CLASA, rel)


def write_lines(page, y, n, gap=LINE_GAP):
    for _ in range(n):
        page.draw_line(fitz.Point(48, y), fitz.Point(W - 40, y), color=(0.75, 0.75, 0.75), width=0.6)
        y += gap
    return y


def _hdr_lines(cols, widths):
    return max(1, *[1 + int(len(str(c)) * 4.8 / (w - 8)) for c, w in zip(cols, widths)])


def draw_table(page, y, cols, widths, rows, row_h, data=None):
    hh = 8 + _hdr_lines(cols, widths) * 13
    page.draw_rect(fitz.Rect(48, y - 2, 48 + sum(widths), y - 2 + hh), color=None, fill=(0.92, 0.96, 0.96))
    x = 48
    for c, w in zip(cols, widths):
        page.insert_textbox(fitz.Rect(x + 4, y, x + w - 4, y - 2 + hh), str(c),
                            fontsize=10, fontname="F-bold", color=INK, lineheight=1.15)
        x += w
    y = y - 2 + hh
    top = y
    for i in range(rows):
        if data and i < len(data):
            x = 52
            for txt, w in zip(data[i], widths):
                if txt:
                    page.insert_textbox(fitz.Rect(x, y + 4, x + w - 8, y + row_h), str(txt),
                                        fontsize=10, fontname="F-reg", color=INK)
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
