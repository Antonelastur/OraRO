# -*- coding: utf-8 -*-
import fitz

W, H = 960, 540
BG = (0.98, 0.96, 0.90)
ACCENT = (0.16, 0.42, 0.47)
TEXT = (0.14, 0.13, 0.15)
BOX_BG = (0.99, 0.90, 0.70)
BOX_BORDER = (0.75, 0.55, 0.20)

REGULAR = "C:/Windows/Fonts/segoeui.ttf"
BOLD = "C:/Windows/Fonts/segoeuib.ttf"

doc = fitz.open()


def new_slide():
    page = doc.new_page(width=W, height=H)
    page.draw_rect(fitz.Rect(0, 0, W, H), color=None, fill=BG)
    page.insert_font(fontname="F-reg", fontfile=REGULAR)
    page.insert_font(fontname="F-bold", fontfile=BOLD)
    return page


def header(page, kicker, title):
    page.draw_rect(fitz.Rect(0, 0, W, 10), color=None, fill=ACCENT)
    if kicker:
        page.insert_textbox(fitz.Rect(50, 34, W - 50, 60), kicker,
                             fontsize=15, fontname="F-reg", color=ACCENT, align=0)
    page.insert_textbox(fitz.Rect(48, 54, W - 50, 120), title,
                         fontsize=30, fontname="F-bold", color=TEXT, align=0)


def item_lines(text, w, fontsize):
    import math
    avg_char_w = fontsize * 0.5
    chars_per_line = max(10, int(w / avg_char_w))
    return max(1, math.ceil(len(text) / chars_per_line))


def bullets(page, items, y0=140, fontsize=17, gap=6, x0=60, w=None, color=TEXT, marker="\u2014  "):
    w = w or (W - 120)
    y = y0
    for item in items:
        rect = fitz.Rect(x0, y, x0 + w, y + 90)
        page.insert_textbox(rect, marker + item, fontsize=fontsize,
                             fontname="F-reg", color=color, align=0, lineheight=1.32)
        y += fontsize * 1.32 * item_lines(item, w, fontsize) + gap


def box(page, rect, text, fontsize=16.5, bg=BOX_BG, border=BOX_BORDER, label=None):
    page.draw_rect(rect, color=border, fill=bg, width=1.4)
    ty = rect.y0 + 14
    if label:
        page.insert_textbox(fitz.Rect(rect.x0 + 18, ty, rect.x1 - 18, ty + 24), label,
                             fontsize=13, fontname="F-bold", color=(0.45, 0.30, 0.05), align=0)
        ty += 22
    page.insert_textbox(fitz.Rect(rect.x0 + 18, ty, rect.x1 - 18, rect.y1 - 14), text,
                         fontsize=fontsize, fontname="F-reg", color=TEXT, align=0, lineheight=1.35)


def footer(page, note):
    page.insert_textbox(fitz.Rect(48, H - 34, W - 50, H - 12), note,
                         fontsize=11.5, fontname="F-reg", color=(0.4, 0.4, 0.42), align=0)


# --- Slide 1: Titlu ---
page = new_slide()
page.draw_rect(fitz.Rect(0, 0, W, H), color=None, fill=ACCENT)
page.insert_textbox(fitz.Rect(60, 150, W - 60, 190), "Unitatea I: Despre mine. Selfie",
                     fontsize=18, fontname="F-reg", color=(1, 1, 1), align=0)
page.insert_textbox(fitz.Rect(58, 190, W - 60, 280), "Lecția 2: Trăsături ale textului literar",
                     fontsize=38, fontname="F-bold", color=(1, 1, 1), align=0)
page.insert_textbox(fitz.Rect(60, 300, W - 60, 340), "Actualizare pe baza textului „Prietenul meu” de Ioana Pârvulescu",
                     fontsize=17, fontname="F-reg", color=(0.92, 0.97, 0.96), align=0)
page.insert_textbox(fitz.Rect(60, H - 50, W - 60, H - 20), "Sursă: Art 5, pp. 13-14; Ghidul profesorului, pp. 69-72",
                     fontsize=12, fontname="F-reg", color=(0.85, 0.93, 0.92), align=0)

# --- Slide 2: Recapitulare / deschidere ---
p = new_slide()
header(p, "Recapitulăm", "Ce am citit data trecută")
bullets(p, [
    "Am citit povestirea „Prietenul meu” de Ioana Pârvulescu.",
    "L-am cunoscut pe Bogdan, elev în clasa a V-a, pe sora lui, Claudia, pe colegul lui, Adi, și pe Joi, cățelul.",
    "Aveam de temă o întrebare pentru scriitoare, pornind de la text.",
], y0=150, fontsize=19)
box(p, fitz.Rect(60, 330, W - 60, 460),
    "Verificăm tema: ce întrebare i-ați adresa Ioanei Pârvulescu despre povestire?",
    fontsize=18, label="Deschidere")
footer(p, "Manual, p. 12")

# --- Slide 3: Explorare - textul literar ---
p = new_slide()
header(p, "Textul literar", "Explorare")
bullets(p, [
    "Numește un sentiment la care se face referire în text.",
    "Universul imaginat de Ioana Pârvulescu este apropiat sau depărtat de realitate? Motivează.",
    "În text: „clasa foșnea și fremăta ca o pădure”. Ce înțeles au verbele a foșni și a fremăta aici?",
    "Ce sens au verbele a zgâlțâi, a vorbi și a lătra în fragmentele date din text?",
], y0=140, fontsize=17.5)
footer(p, "Manual, p. 13, exercițiile 1-4")

# --- Slide 4: Joc de mimă ---
p = new_slide()
header(p, "Joc", "Cel mai amuzant moment")
bullets(p, [
    "Gândiți-vă la ce fac personajele din povestire.",
    "Care este cel mai amuzant moment din text?",
    "Mimați-l în fața colegilor, ca ei să ghicească la ce vă referiți.",
], y0=150, fontsize=19)
footer(p, "Manual, p. 13, exercițiul 5")

# --- Slide 5: Repere - ce este textul literar ---
p = new_slide()
header(p, "Repere", "Ce este textul literar")
box(p, fitz.Rect(60, 150, W - 60, 320),
    "Textul literar prezintă o lume imaginară și transmite idei, dar mai ales emoții și sentimente, "
    "într-un limbaj expresiv. Lumea imaginară a textului literar poate fi mai apropiată sau mai "
    "îndepărtată de lumea reală.",
    fontsize=20)
footer(p, "Manual, p. 13")

# --- Slide 6: Repere - intrebari ---
p = new_slide()
header(p, "Repere", "Cum înțelegem un text narativ")
box(p, fitz.Rect(60, 150, W - 60, 380),
    "Pentru a înțelege un text literar în care se relatează o întâmplare, cititorul trebuie să "
    "răspundă la câteva întrebări:\n\n"
    "\u2022  Cine sunt personajele?\n"
    "\u2022  Ce fac personajele?\n"
    "\u2022  Când se petrec evenimentele?\n"
    "\u2022  Unde se petrec evenimentele?",
    fontsize=19)
footer(p, "Manual, p. 13")

# --- Slide 7: Personajul principal + harta relatiilor ---
p = new_slide()
header(p, "Înțelegerea textului", "Personajele")
bullets(p, [
    "Alegeți personajul principal dintre cele prezentate în imaginile din manual și notați trei informații importante despre el.",
    "Realizați harta relațiilor dintre personajele din text.",
], y0=150, fontsize=18.5)
footer(p, "Manual, p. 13, exercițiile 1-2")

# --- Slide 8: Timp si spatiu ---
p = new_slide()
header(p, "Înțelegerea textului", "Timp și spațiu")
bullets(p, [
    "Cum se comportă Adi față de prietenul său?",
    "Transcrieți din text două cuvinte referitoare la timpul în care se petrec întâmplările.",
    "Acțiunea se desfășoară în trei locuri diferite. Identificați-le.",
], y0=150, fontsize=18.5)
footer(p, "Manual, p. 13-14, exercițiile 3-5")

# --- Slide 9: Diagrama Bogdan - Claudia ---
p = new_slide()
header(p, "Lucrăm în grupe", "Bogdan și Claudia")
box(p, fitz.Rect(60, 150, W - 60, 300),
    "Desenați pe o coală o diagramă cu asemănările și deosebirile dintre Bogdan și Claudia. "
    "Prezentați posterul în fața clasei.",
    fontsize=19)
footer(p, "Manual, p. 14, exercițiul 3")

# --- Slide 10: Joc palariile ganditoare ---
p = new_slide()
header(p, "Joc", "Pălăriile gânditoare")
box(p, fitz.Rect(60, 130, W - 60, 232),
    "Șase pălării sau șepcuțe de culori diferite. Elevul cu pălăria albastră coordonează discuția "
    "și adresează întrebări celorlalți cinci, despre Bogdan.",
    fontsize=15.5)
bullets(p, [
    "Albă \u2014 povestește pe scurt și neutru ce a făcut Bogdan.",
    "Roșie \u2014 prezintă sentimentele/emoțiile trăite de Bogdan.",
    "Neagră \u2014 îl acuză pe Bogdan pentru fapta sa.",
    "Galbenă \u2014 îl apără pe Bogdan.",
    "Verde \u2014 explică în ce constă ingeniozitatea lui Bogdan.",
    "Albastră \u2014 coordonează discuția.",
], y0=250, fontsize=14.5, gap=4)
footer(p, "Manual, p. 14")

# --- Slide 11: Portofoliu / tema ---
p = new_slide()
header(p, "Temă", "Portofoliu: fișe de identitate")
bullets(p, [
    "Realizați câte o fișă de identitate pentru Bogdan, Claudia și Adi: numele personajului, portretul desenat, statutul și două trăsături.",
    "Realizați o fișă asemănătoare și pentru Joi.",
], y0=150, fontsize=18.5)
footer(p, "Manual, p. 14")

out = "public/materiale/clasa-5/unitatea-1/lectia-2/prezentare.pdf"
doc.save(out)
print("saved", out, len(doc), "pagini")
