# -*- coding: utf-8 -*-
import fitz

W, H = 595, 842  # A4 portret
BG = (1, 1, 1)
ACCENT = (0.16, 0.42, 0.47)
TEXT = (0.14, 0.13, 0.15)
MUTED = (0.4, 0.4, 0.42)

REGULAR = "C:/Windows/Fonts/segoeui.ttf"
BOLD = "C:/Windows/Fonts/segoeuib.ttf"

doc = fitz.open()


def new_page():
    page = doc.new_page(width=W, height=H)
    page.insert_font(fontname="F-reg", fontfile=REGULAR)
    page.insert_font(fontname="F-bold", fontfile=BOLD)
    return page


def header(page):
    page.draw_rect(fitz.Rect(0, 0, W, 8), color=None, fill=ACCENT)
    page.insert_textbox(fitz.Rect(40, 28, W - 40, 50), "Recapitulare inițială. Fișă de lucru",
                         fontsize=17, fontname="F-bold", color=TEXT, align=0)
    page.insert_textbox(fitz.Rect(40, 50, W - 40, 68), "Clasa a V-a",
                         fontsize=11, fontname="F-reg", color=MUTED, align=0)


def footer(page, note):
    page.insert_textbox(fitz.Rect(40, H - 30, W - 40, H - 14), note,
                         fontsize=9, fontname="F-reg", color=MUTED, align=0)


def section(page, y, number, title):
    page.insert_textbox(fitz.Rect(40, y, W - 40, y + 22), f"{number}. {title}",
                         fontsize=13.5, fontname="F-bold", color=ACCENT, align=0)
    return y + 26


def item(page, y, text, fontsize=11, gap=16):
    page.insert_textbox(fitz.Rect(48, y, W - 40, y + 60), text,
                         fontsize=fontsize, fontname="F-reg", color=TEXT, align=0, lineheight=1.4)
    import math
    chars_per_line = int((W - 88) / (fontsize * 0.5))
    lines = max(1, math.ceil(len(text) / chars_per_line))
    return y + lines * fontsize * 1.4 + gap


def lines_space(page, y, n=2, gap=22):
    for _ in range(n):
        page.draw_line(fitz.Point(48, y), fitz.Point(W - 40, y), color=(0.75, 0.75, 0.75), width=0.6)
        y += gap
    return y + 4


# --- Pagina 1 ---
p = new_page()
header(p)
y = 90

y = section(p, y, 1, "Sinonime și antonime")
y = item(p, y, "Scrie câte un sinonim pentru fiecare cuvânt: repede, curajos, a vorbi, frumos, bucurie.")
y = lines_space(p, y, 2)
y = item(p, y, "Scrie câte un antonim pentru fiecare cuvânt: mare, ziuă, a începe, cald, prieten.")
y = lines_space(p, y, 2, gap=24)

y = section(p, y, 2, "Grupuri de sunete. Despărțirea în silabe")
y = item(p, y, "Desparte în silabe cuvintele: prietenie, exercițiu, iarnă, ochelari, floare.")
y = lines_space(p, y, 2)
y = item(p, y, "Subliniază, dacă există, diftongii și triftongii din cuvintele de mai sus.")
y = lines_space(p, y, 1, gap=24)

y = section(p, y, 3, "Scriere corectă")
y = item(p, y, "Corectează greșelile din enunțuri:")
y = item(p, y, "a) Ei-au plecat la joacă.", gap=8)
y = lines_space(p, y, 1)
y = item(p, y, "b) Nu ma duc la scoală astazi.", gap=8)
y = lines_space(p, y, 1)
y = item(p, y, "c) Copii sau jucat toata ziua afara.", gap=8)
y = lines_space(p, y, 1, gap=20)

footer(p, "Recapitulare inițială, clasa a V-a — pagina 1")

# --- Pagina 2 ---
p = new_page()
header(p)
y = 90

y = section(p, y, 4, "Părțile de vorbire")
y = item(p, y, 'Subliniază substantivele cu o linie și verbele cu două linii, în enunțul: '
                '„Copiii au alergat veseli prin curtea școlii.”')
y = lines_space(p, y, 2, gap=24)
y = item(p, y, "Precizează felul propozițiilor de mai jos (enunțiativă, interogativă, exclamativă sau imperativă):")
y = item(p, y, "a) Ai văzut noul coleg de clasă?", gap=8)
y = lines_space(p, y, 1)
y = item(p, y, "b) Deschideți caietele, vă rog!", gap=8)
y = lines_space(p, y, 1)
y = item(p, y, "c) Ce frumoasă e curtea școlii toamna!", gap=8)
y = lines_space(p, y, 1, gap=24)

y = section(p, y, 5, "Dictare")
y = item(p, y, "Text citit de profesoară, elevii scriu în caiet:")
y = item(p, y,
         "„A început un nou an școlar. Elevii s-au întâlnit cu bucurie și au povestit despre vacanță. "
         "Fiecare avea o întâmplare de împărtășit colegilor.”", fontsize=11.5, gap=10)
y = lines_space(p, y, 4, gap=22)

footer(p, "Recapitulare inițială, clasa a V-a — pagina 2")

# --- Pagina 3 ---
p = new_page()
header(p)
y = 90

y = section(p, y, 6, "Redactarea unui text funcțional")
y = item(p, y, "Scrie o invitație către un coleg sau o colegă, prin care îl inviți la o serbare a clasei. "
                "Nu uita elementele unei invitații: cine invită, la ce eveniment, când și unde are loc.")
y = lines_space(p, y, 10, gap=24)

footer(p, "Recapitulare inițială, clasa a V-a — pagina 3")

out = "public/materiale/clasa-5/recapitulare-initiala/lectia-2/fisa.pdf"
doc.save(out)
print("saved", out, len(doc), "pagini")
