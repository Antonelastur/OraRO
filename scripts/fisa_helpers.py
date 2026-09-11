# -*- coding: utf-8 -*-
"""Funcții comune pentru generarea fișelor de lucru OraRO, ca PDF A4."""
import math
import fitz

W, H = 595, 842  # A4 portret
ACCENT = (0.16, 0.42, 0.47)
TEXT = (0.14, 0.13, 0.15)
MUTED = (0.4, 0.4, 0.42)

REGULAR = "C:/Windows/Fonts/segoeui.ttf"
BOLD = "C:/Windows/Fonts/segoeuib.ttf"


def new_doc():
    return fitz.open()


def new_page(doc):
    page = doc.new_page(width=W, height=H)
    page.insert_font(fontname="F-reg", fontfile=REGULAR)
    page.insert_font(fontname="F-bold", fontfile=BOLD)
    return page


def _fits(text, fontfile, size):
    return fitz.Font(fontfile=fontfile).text_length(text, fontsize=size) <= W - 80


def header(page, title, subtitle):
    page.draw_rect(fitz.Rect(0, 0, W, 8), color=None, fill=ACCENT)
    # insert_textbox nu scrie nimic dacă textul nu încape: titlurile lungi se micșorează
    size = 16
    while size > 11 and not _fits(title, BOLD, size):
        size -= 0.5
    # caseta are nevoie de ~25 pt la 16 pt Segoe UI Bold; la 22 pt titlul nu se scria deloc
    page.insert_textbox(fitz.Rect(40, 22, W - 40, 50), title,
                         fontsize=size, fontname="F-bold", color=TEXT, align=0)
    page.insert_textbox(fitz.Rect(40, 50, W - 40, 68), subtitle,
                         fontsize=10.5, fontname="F-reg", color=MUTED, align=0)


def footer(page, note):
    top = H - 30 if _fits(note, REGULAR, 9) else H - 40  # subsolul lung urcă pe două rânduri
    page.insert_textbox(fitz.Rect(40, top, W - 40, H - 12), note,
                         fontsize=9, fontname="F-reg", color=MUTED, align=0)


def section(page, y, number, title):
    page.insert_textbox(fitz.Rect(40, y, W - 40, y + 22), f"{number}. {title}",
                         fontsize=13, fontname="F-bold", color=ACCENT, align=0)
    return y + 26


def item(page, y, text, fontsize=11, gap=14):
    rc = page.insert_textbox(fitz.Rect(48, y, W - 40, y + 100), text,
                              fontsize=fontsize, fontname="F-reg", color=TEXT, align=0, lineheight=1.4)
    if rc >= 0:
        # rândurile scrise efectiv (rc = spațiul rămas nefolosit în casetă)
        lines = max(1, round((100 - rc) / (fontsize * 1.4)))
    else:
        chars_per_line = int((W - 88) / (fontsize * 0.5))
        lines = max(1, math.ceil(len(text) / chars_per_line))
    return y + lines * fontsize * 1.4 + gap


def lines_space(page, y, n=2, gap=22):
    for _ in range(n):
        page.draw_line(fitz.Point(48, y), fitz.Point(W - 40, y), color=(0.75, 0.75, 0.75), width=0.6)
        y += gap
    return y + 4


def table_row(page, y, cols, widths, fontsize=10.5, bold=False, fill=None):
    x = 48
    if fill:
        page.draw_rect(fitz.Rect(48, y - 2, W - 40, y + 20), color=None, fill=fill)
    for text, w in zip(cols, widths):
        page.insert_textbox(fitz.Rect(x + 4, y, x + w - 4, y + 20), text,
                             fontsize=fontsize, fontname="F-bold" if bold else "F-reg",
                             color=TEXT, align=0)
        x += w
    return y + 24
