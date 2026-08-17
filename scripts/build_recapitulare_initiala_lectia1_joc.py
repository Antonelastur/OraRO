# -*- coding: utf-8 -*-
import fitz

W, H = 595, 842  # A4 portret
ACCENT = (0.16, 0.42, 0.47)
TEXT = (0.14, 0.13, 0.15)
MUTED = (0.4, 0.4, 0.42)
CELL_BG = (0.98, 0.96, 0.90)
CELL_BORDER = (0.75, 0.55, 0.20)

REGULAR = "C:/Windows/Fonts/segoeui.ttf"
BOLD = "C:/Windows/Fonts/segoeuib.ttf"

doc = fitz.open()


def new_page():
    page = doc.new_page(width=W, height=H)
    page.insert_font(fontname="F-reg", fontfile=REGULAR)
    page.insert_font(fontname="F-bold", fontfile=BOLD)
    return page


def header(page, kicker, title):
    page.draw_rect(fitz.Rect(0, 0, W, 8), color=None, fill=ACCENT)
    if kicker:
        page.insert_textbox(fitz.Rect(40, 26, W - 40, 44), kicker,
                             fontsize=11, fontname="F-reg", color=ACCENT, align=0)
    page.insert_textbox(fitz.Rect(40, 42, W - 40, 74), title,
                         fontsize=19, fontname="F-bold", color=TEXT, align=0)


def footer(page, note):
    page.insert_textbox(fitz.Rect(40, H - 30, W - 40, H - 14), note,
                         fontsize=9, fontname="F-reg", color=MUTED, align=0)


def paragraph(page, y, text, fontsize=11.5, gap=10):
    page.insert_textbox(fitz.Rect(40, y, W - 40, y + 200), text,
                         fontsize=fontsize, fontname="F-reg", color=TEXT, align=0, lineheight=1.4)
    import math
    chars_per_line = int((W - 80) / (fontsize * 0.5))
    lines = max(1, math.ceil(len(text) / chars_per_line))
    return y + lines * fontsize * 1.4 + gap


# --- Pagina 1: instrucțiuni profesoară ---
p = new_page()
header(p, "Recapitulare inițială, Lecția 1", "Jocuri de intercunoaștere, instrucțiuni")
y = 90

y = paragraph(p, y,
    "Ora 1 din recapitularea inițială. Scop: elevii și profesoara se cunosc, clasa se destinde înainte de "
    "evaluarea inițială din ora următoare. Joc original, gândit ca variantă mai jucăușă la fișa clasică de "
    "prezentare din Ghidul profesorului (III.1).", fontsize=12, gap=18)

y = paragraph(p, y, "1. Vânătoarea de colegi (15-20 minute)", fontsize=13.5, gap=6)
y = paragraph(p, y,
    "Fiecare elev primește grila de bingo de la pagina 2. Elevii se ridică și circulă prin clasă, opresc câte "
    "un coleg și îi pun întrebarea din căsuță. Dacă răspunsul se potrivește, notează numele colegului în "
    "căsuță și trec la altcineva. Nu se completează două căsuțe cu numele aceluiași coleg. Câștigă primul "
    "elev care completează un rând, o coloană sau o diagonală întreagă, strigând „Bingo!”. Jocul poate "
    "continua până se umple toată grila, dacă timpul permite.", gap=18)

y = paragraph(p, y, "2. Pașaportul clasei a V-a (15 minute)", fontsize=13.5, gap=6)
y = paragraph(p, y,
    "Fiecare elev completează pașaportul de la pagina 3, cu numele, o pasiune, o așteptare de la orele de "
    "română și un mic desen sau simbol personal. Profesoara completează și ea un pașaport, ca să se "
    "prezinte clasei. Pașapoartele se lipesc pe un perete al clasei, sub titlul „Clasa a V-a”, și rămân acolo "
    "până la sfârșitul primului semestru.", gap=18)

y = paragraph(p, y,
    "Sursă a ideii de fișă cu așteptări: Ghidul profesorului, Editura Art Klett, III.1, ORA 1. Formatul de joc, "
    "vânătoarea de colegi și pașaportul, e o propunere originală, mai apropiată de jocurile pe care copiii "
    "le cunosc deja.", fontsize=10, gap=10)

footer(p, "Recapitulare inițială, Lecția 1 — pagina 1")

# --- Pagina 2: bingo ---
p = new_page()
header(p, "Joc", "Vânătoarea de colegi")
y = 90
p.insert_textbox(fitz.Rect(40, y, W - 40, y + 40),
                  "Găsește un coleg pentru fiecare căsuță și notează-i numele. Nu repeta numele.",
                  fontsize=11, fontname="F-reg", color=TEXT, align=0, lineheight=1.3)
y += 40

prompts = [
    "are un animal\nde companie",
    "a citit o carte\nde aventuri",
    "vorbește o altă\nlimbă, pe lângă\nromână",
    "cântă la un\ninstrument\nmuzical",
    "a călătorit vara\naceasta în alt\njudeț sau altă țară",
    "are un frate sau\no soră mai mică",
    "știe să înoate",
    "îi place\nmatematica",
    "a scris vreodată\no poezie",
    "joacă un sport\nde echipă",
    "are aceeași\nculoare preferată\nca tine",
    "s-a mutat la altă\nșcoală anul\nacesta",
    "știe o vorbă\nîntr-o limbă\nstrăină",
    "desenează sau\npictează în timpul\nliber",
    "are mai mult de\ndoi frați sau surori",
    "abia așteaptă\nprima oră de\nromână",
]

cols, rows = 4, 4
margin = 40
gap = 8
cell_w = (W - 2 * margin - (cols - 1) * gap) / cols
cell_h = 100
grid_top = y + 6

for i, text in enumerate(prompts):
    r, c = divmod(i, cols)
    x0 = margin + c * (cell_w + gap)
    y0 = grid_top + r * (cell_h + gap)
    rect = fitz.Rect(x0, y0, x0 + cell_w, y0 + cell_h)
    p.draw_rect(rect, color=CELL_BORDER, fill=CELL_BG, width=1.1)
    p.insert_textbox(fitz.Rect(x0 + 6, y0 + 6, x0 + cell_w - 6, y0 + cell_h - 26), text,
                      fontsize=9.3, fontname="F-reg", color=TEXT, align=1, lineheight=1.22)
    p.insert_textbox(fitz.Rect(x0 + 6, y0 + cell_h - 22, x0 + cell_w - 6, y0 + cell_h - 4),
                      "Nume: __________", fontsize=8, fontname="F-reg", color=MUTED, align=1)

footer(p, "Recapitulare inițială, Lecția 1 — pagina 2")

# --- Pagina 3: pasaport ---
p = new_page()
header(p, "Joc", "Pașaportul clasei a V-a")
y = 100

outer = fitz.Rect(60, y, W - 60, y + 560)
p.draw_rect(outer, color=CELL_BORDER, fill=CELL_BG, width=1.6)

p.insert_textbox(fitz.Rect(80, y + 24, W - 80, y + 60), "PAȘAPORT",
                  fontsize=22, fontname="F-bold", color=ACCENT, align=1)
p.insert_textbox(fitz.Rect(80, y + 52, W - 80, y + 76), "Clasa a V-a, Limba și literatura română",
                  fontsize=11, fontname="F-reg", color=MUTED, align=1)

photo = fitz.Rect(W / 2 - 60, y + 90, W / 2 + 60, y + 210)
p.draw_rect(photo, color=CELL_BORDER, fill=(1, 1, 1), width=1.1)
p.insert_textbox(photo, "desen sau\nfotografie", fontsize=10, fontname="F-reg", color=MUTED, align=1)

fields = [
    "Numele meu: ______________________________________",
    "",
    "O pasiune de-a mea: _______________________________",
    "",
    "Ce aștept de la orele de română: ___________________",
    "_____________________________________________________",
    "",
    "Un lucru amuzant despre mine: _____________________",
    "_____________________________________________________",
]
fy = y + 230
for line in fields:
    p.insert_textbox(fitz.Rect(90, fy, W - 90, fy + 24), line,
                      fontsize=11.5, fontname="F-reg", color=TEXT, align=0)
    fy += 30

footer(p, "Recapitulare inițială, Lecția 1 — pagina 3")

out = "public/materiale/clasa-5/recapitulare-initiala/lectia-1/joc.pdf"
doc.save(out)
print("saved", out, len(doc), "pagini")
