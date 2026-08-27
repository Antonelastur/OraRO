# -*- coding: utf-8 -*-
"""Generează cele 32 de fișe de lucru restante, clasa a V-a, Unitățile II-VI.
Materiale de sprijin originale (enunțuri proprii), fără conținut de bază
inventat: exercițiile cer elevului să folosească textul citit deja la clasă,
nu prezintă fapte de intrigă ca date certe.
"""
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fisa_helpers import new_doc, new_page, header, footer, section, item, lines_space, table_row

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def out_path(rel):
    return os.path.join(ROOT, "public", "materiale", "clasa-5", rel)


# ---------- șabloane ----------

def build_personaje(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, "Fișă de lucru — Personajele", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Identificarea personajelor")
    y = item(p, y, "Notează, în ordinea apariției lor în text, personajele principale și secundare.")
    y = lines_space(p, y, 3)
    y = section(p, y, 2, "Trăsături fizice și morale")
    y = table_row(p, y, ["Personaj", "Trăsături fizice", "Trăsături morale"], [140, 200, 200], bold=True, fill=(0.92, 0.96, 0.96))
    for _ in range(3):
        y = table_row(p, y, ["", "", ""], [140, 200, 200])
    y += 10
    y = section(p, y, 3, "Argumentează cu citate")
    y = item(p, y, "Alege un personaj din tabel și găsește, în text, două fragmente care îi susțin trăsăturile notate. Transcrie-le mai jos.")
    y = lines_space(p, y, 4)
    footer(p, spec["sursa"])
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


def build_semnificatii(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, "Fișă de lucru — Semnificațiile textului", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Prima impresie")
    y = item(p, y, "Ce ai simțit la prima lectură a textului? Alege un cuvânt-emoție și explică, în 2-3 rânduri, de ce.")
    y = lines_space(p, y, 3)
    y = section(p, y, 2, "Ideea centrală")
    y = item(p, y, "Formulează, într-o singură propoziție, ideea centrală a textului, așa cum ai înțeles-o tu.")
    y = lines_space(p, y, 2)
    y = section(p, y, 3, "Legătura cu propria experiență")
    y = item(p, y, "Ai trăit sau ai văzut vreodată o situație asemănătoare cu cea din text? Povestește pe scurt.")
    y = lines_space(p, y, 4)
    y = section(p, y, 4, "O întrebare pentru autor")
    y = item(p, y, "Dacă ai putea să-l întrebi ceva pe autor despre acest text, ce l-ai întreba?")
    y = lines_space(p, y, 2)
    footer(p, spec["sursa"])
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


def build_text_auxiliar(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, f"Fișă de lucru — Text auxiliar: {spec['titlu_text']}", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Jurnalul cu dublă intrare")
    y = table_row(p, y, ["Fragment din text care mi-a atras atenția", "Ce gândesc / ce simt despre el"], [255, 255], bold=True, fill=(0.92, 0.96, 0.96))
    for _ in range(4):
        y = table_row(p, y, ["", ""], [255, 255])
    y += 10
    y = section(p, y, 2, "Comparație cu textul de bază al unității")
    y = item(p, y, f"Ce asemănări și ce deosebiri găsești între {spec['titlu_text']} și textul de bază al acestei unități?")
    y = lines_space(p, y, 4)
    y = section(p, y, 3, "Sugestie de lectură")
    y = item(p, y, "Recomandă acest text unui coleg, în 2-3 rânduri: de ce merită citit?")
    y = lines_space(p, y, 2)
    footer(p, spec["sursa"])
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


def build_proiect_cerinte(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, f"Fișă de proiect — {spec['nume_proiect']}", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Tema proiectului")
    y = item(p, y, spec["tema"])
    y = lines_space(p, y, 1, gap=18)
    y = section(p, y, 2, "Ce trebuie să conțină")
    for cerinta in spec["cerinte"]:
        y = item(p, y, f"• {cerinta}", gap=6)
    y += 8
    y = section(p, y, 3, "Calendar")
    y = item(p, y, spec["calendar"])
    y += 10
    y = section(p, y, 4, "Criterii de evaluare")
    y = table_row(p, y, ["Criteriu", "Punctaj"], [420, 90], bold=True, fill=(0.92, 0.96, 0.96))
    for criteriu, punctaj in spec["criterii"]:
        y = table_row(p, y, [criteriu, punctaj], [420, 90])
    footer(p, spec["sursa"])
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


def build_proiect_grila(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, f"Grilă de evaluare — {spec['nume_proiect']}", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Grila de evaluare")
    y = table_row(p, y, ["Criteriu", "Punctaj maxim", "Punctaj obținut"], [280, 110, 110], bold=True, fill=(0.92, 0.96, 0.96))
    for criteriu, punctaj in spec["criterii"]:
        y = table_row(p, y, [criteriu, punctaj, ""], [280, 110, 110])
    y += 16
    y = section(p, y, 2, "Autoevaluare")
    y = item(p, y, "Ce a mers bine în realizarea proiectului tău? Ce ai face altfel, dacă ai reîncepe?")
    y = lines_space(p, y, 4)
    footer(p, spec["sursa"])
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


def build_redactare_pregatire(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, f"Fișă de lucru — {spec['titlu_redactare']}, pregătire", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Brainstorming")
    y = item(p, y, spec["brainstorm"])
    y = lines_space(p, y, 4)
    y = section(p, y, 2, "Organizator grafic")
    y = table_row(p, y, spec["organizator_coloane"], [170]*len(spec["organizator_coloane"]), bold=True, fill=(0.92, 0.96, 0.96))
    for _ in range(4):
        y = table_row(p, y, [""] * len(spec["organizator_coloane"]), [170]*len(spec["organizator_coloane"]))
    footer(p, spec["sursa"])
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


def build_redactare_scriere(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, f"Fișă de lucru — {spec['titlu_redactare']}, redactare", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Cerință")
    y = item(p, y, spec["cerinta"])
    y += 6
    y = section(p, y, 2, "Reperele scrierii")
    for reper in spec["repere"]:
        y = item(p, y, f"• {reper}", gap=6)
    y += 10
    y = section(p, y, 3, "Ciorna")
    y = lines_space(p, y, 12, gap=22)
    footer(p, spec["sursa"] + " — pagina 1")
    p2 = new_page(doc)
    header(p2, f"Fișă de lucru — {spec['titlu_redactare']}, redactare", spec["subtitlu"])
    y = 90
    y = section(p2, y, 4, "Forma finală, după revizuire")
    y = lines_space(p2, y, 16, gap=22)
    footer(p2, spec["sursa"] + " — pagina 2")
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


# ---------- specificații ----------

SPECS = []

def personaje(unit, lec, out, titlu, sursa):
    SPECS.append(("personaje", dict(subtitlu=f"{unit}, {lec} · {titlu}", sursa=sursa, out=out)))

def semnificatii(unit, lec, out, titlu, sursa):
    SPECS.append(("semnificatii", dict(subtitlu=f"{unit}, {lec} · {titlu}", sursa=sursa, out=out)))

def text_auxiliar(unit, lec, out, titlu_text, sursa):
    SPECS.append(("text_auxiliar", dict(subtitlu=f"{unit}, {lec}", titlu_text=titlu_text, sursa=sursa, out=out)))

def proiect_cerinte(unit, lec, out, nume_proiect, tema, cerinte, calendar, criterii, sursa):
    SPECS.append(("proiect_cerinte", dict(subtitlu=f"{unit}, {lec}", nume_proiect=nume_proiect, tema=tema,
                                           cerinte=cerinte, calendar=calendar, criterii=criterii, sursa=sursa, out=out)))

def proiect_grila(unit, lec, out, nume_proiect, criterii, sursa):
    SPECS.append(("proiect_grila", dict(subtitlu=f"{unit}, {lec}", nume_proiect=nume_proiect, criterii=criterii, sursa=sursa, out=out)))

def redactare_pregatire(unit, lec, out, titlu_redactare, brainstorm, organizator_coloane, sursa):
    SPECS.append(("redactare_pregatire", dict(subtitlu=f"{unit}, {lec}", titlu_redactare=titlu_redactare,
                                               brainstorm=brainstorm, organizator_coloane=organizator_coloane, sursa=sursa, out=out)))

def redactare_scriere(unit, lec, out, titlu_redactare, cerinta, repere, sursa):
    SPECS.append(("redactare_scriere", dict(subtitlu=f"{unit}, {lec}", titlu_redactare=titlu_redactare,
                                             cerinta=cerinta, repere=repere, sursa=sursa, out=out)))


# Unitatea II
personaje("Unitatea II", "Lecția 4", "unitatea-2/lectia-4/fisa.pdf", "Vizită... de I.L. Caragiale", "Art 5, Lecția 4, pp. 48-49")
semnificatii("Unitatea II", "Lecția 5", "unitatea-2/lectia-5/fisa.pdf", "Vizită... de I.L. Caragiale", "Art 5, Lecția 5, p. 50")
text_auxiliar("Unitatea II", "Lecția 6", "unitatea-2/lectia-6/fisa.pdf", "Exuvii de Simona Popescu", "Art 5, Lecția 6, pp. 51-52")
proiect_cerinte("Unitatea II", "Lecția 8", "unitatea-2/lectia-8/fisa.pdf", "Jocuri fără vârstă",
                "Prezintă un joc tradițional (de-al tău, al familiei sau al comunității tale), cu regulile lui, și explică de ce e „fără vârstă”.",
                ["Numele jocului și originea lui (de la cine l-ai învățat)",
                 "Regulile jocului, explicate pas cu pas",
                 "Materialele necesare, dacă există",
                 "De ce crezi că poate fi jucat de oameni de orice vârstă"],
                "Proiect individual — termen: sfârșitul Unității II",
                [("Claritatea explicării regulilor", "3p"), ("Originalitate și implicare personală", "3p"),
                 ("Corectitudinea exprimării scrise", "2p"), ("Prezentare îngrijită", "2p")],
                "Art 5, Proiect individual, p. 55")
redactare_pregatire("Unitatea II", "Lecția 18", "unitatea-2/lectia-18/fisa.pdf", "Textul narativ ficțional",
                    "Alege un personaj imaginar și un loc neobișnuit. Gândește-te: ce vrea personajul tău? Ce obstacol întâlnește?",
                    ["Personaj", "Loc", "Ce vrea", "Obstacol"], "Art 5, Lecția 17, p. 74")
redactare_scriere("Unitatea II", "Lecția 19", "unitatea-2/lectia-19/fisa.pdf", "Textul narativ ficțional",
                   "Redactează un text narativ ficțional (minimum 15 rânduri), pornind de la personajul, locul și obstacolul stabilite în fișa de pregătire.",
                   ["respectă etapele scrierii: ciornă, revizuire, formă finală",
                    "include un început, o desfășurare și un final",
                    "folosește dialog, dacă se potrivește",
                    "verifică ortografia și punctuația înainte de forma finală"],
                   "Art 5, Lecția 17, p. 75")
proiect_grila("Unitatea II", "Lecția 20", "unitatea-2/lectia-20/fisa.pdf", "Jocuri fără vârstă",
              [("Claritatea explicării regulilor", "3p"), ("Originalitate și implicare personală", "3p"),
               ("Corectitudinea exprimării scrise", "2p"), ("Prezentare îngrijită", "2p")],
              "Art 5, Proiect individual, p. 55")

# Unitatea III
proiect_cerinte("Unitatea III", "Lecția 1", "unitatea-3/lectia-1/fisa.pdf", "În așteptarea Crăciunului",
                "Realizați, pe grupe, un material (poster, prezentare sau scenetă) despre un obicei de Crăciun dintr-o zonă a României sau dintr-o altă cultură.",
                ["Prezentarea obiceiului ales: ce se face, când, de ce",
                 "Cel puțin o imagine sau un desen propriu",
                 "O comparație scurtă cu un obicei asemănător, din altă zonă sau cultură",
                 "Implicarea fiecărui membru al grupei"],
                "Proiect de grup — prezentare în ultima oră dinaintea vacanței de iarnă",
                [("Informația e corectă și bine documentată", "3p"), ("Materialul e clar și atractiv", "3p"),
                 ("Comparația culturală e relevantă", "2p"), ("Colaborarea în grup", "2p")],
                "Art 5, Proiect de grup, p. 91")
semnificatii("Unitatea III", "Lecția 4", "unitatea-3/lectia-4/fisa.pdf", "O stradă cu sentimente de Ana Blandiana", "Art 5, Lecția 3, p. 84")
text_auxiliar("Unitatea III", "Lecția 5", "unitatea-3/lectia-5/fisa.pdf", "O pisică de Tudor Arghezi", "Art 5, Lecția 4, pp. 85-86")
proiect_grila("Unitatea III", "Lecția 8", "unitatea-3/lectia-8/fisa.pdf", "În așteptarea Crăciunului",
              [("Informația e corectă și bine documentată", "3p"), ("Materialul e clar și atractiv", "3p"),
               ("Comparația culturală e relevantă", "2p"), ("Colaborarea în grup", "2p")],
              "Art 5, Proiect de grup, p. 91")
redactare_pregatire("Unitatea III", "Lecția 15", "unitatea-3/lectia-15/fisa.pdf", "Descrierea unui obiect",
                    "Alege un obiect drag ție, din camera ta. Notează cuvinte din câmpul lexical al casei care îl pot descrie.",
                    ["Ce este", "Cum arată", "La ce folosește", "De ce e important pentru tine"], "Art 5, Lecția 12, p. 102")
redactare_scriere("Unitatea III", "Lecția 16", "unitatea-3/lectia-16/fisa.pdf", "Descrierea unui obiect",
                   "Redactează o compunere descriptivă (minimum 12 rânduri) despre obiectul ales în fișa de pregătire.",
                   ["respectă etapele scrierii: ciornă, revizuire, formă finală",
                    "folosește cel puțin două epitete sau comparații",
                    "organizează descrierea de la general la detalii",
                    "verifică ortografia și punctuația înainte de forma finală"],
                   "Art 5, Lecția 12, p. 103")

# Unitatea IV
personaje("Unitatea IV", "Lecția 3", "unitatea-4/lectia-3/fisa.pdf", "Tezeu și Minotaurul de Florin Bican", "Art 5, Lecția 3, pp. 112-113")
semnificatii("Unitatea IV", "Lecția 4", "unitatea-4/lectia-4/fisa.pdf", "Tezeu și Minotaurul de Florin Bican", "Art 5, Lecția 4, p. 114")
text_auxiliar("Unitatea IV", "Lecția 8", "unitatea-4/lectia-8/fisa.pdf", "Eu sunt Malala de Malala Yousafzai și Patricia McCormick", "Art 5, Lecția 8, pp. 120-121")
redactare_pregatire("Unitatea IV", "Lecția 16", "unitatea-4/lectia-16/fisa.pdf", "Descrierea unei persoane. Autoportretul",
                    "Gândește-te la tine: trei trăsături fizice și trei trăsături de caracter pe care le-ai alege pentru autoportretul tău.",
                    ["Trăsătură", "Un exemplu concret din viața ta"], "Art 5, Lecția 15, p. 134")
redactare_scriere("Unitatea IV", "Lecția 17", "unitatea-4/lectia-17/fisa.pdf", "Autoportretul",
                   "Redactează propriul autoportret (minimum 15 rânduri), pornind de la trăsăturile alese în fișa de pregătire.",
                   ["respectă etapele scrierii: ciornă, revizuire, formă finală",
                    "include trăsături fizice și trăsături morale",
                    "susține fiecare trăsătură cu un exemplu concret",
                    "verifică ortografia și punctuația înainte de forma finală"],
                   "Art 5, Lecția 15, p. 135")

# Unitatea V
semnificatii("Unitatea V", "Lecția 4", "unitatea-5/lectia-4/fisa.pdf", "Zâna Munților, basm cules de Petre Ispirescu", "Art 5, Lecția 4, p. 148")
text_auxiliar("Unitatea V", "Lecția 5", "unitatea-5/lectia-5/fisa.pdf", "Aladin și lampa fermecată, din O mie și una de nopți", "Art 5, Lecția 5, pp. 149-150")
proiect_cerinte("Unitatea V", "Lecția 7", "unitatea-5/lectia-7/fisa.pdf", "Itinerar multicultural",
                "Realizați, pe grupe, un „itinerar” care prezintă basme sau tradiții din cel puțin două culturi diferite.",
                ["Alegerea a două culturi și a câte unui basm sau a unei tradiții reprezentative",
                 "O scurtă prezentare a fiecăreia (autor/sursă, temă, personaje sau obiceiuri)",
                 "Cel puțin o asemănare și o deosebire identificate între ele",
                 "Modalitatea de prezentare aleasă de grup (poster, hartă, prezentare digitală)"],
                "Proiect de grup — prezentare stabilită de comun acord cu profesoara",
                [("Documentarea celor două culturi", "3p"), ("Claritatea asemănărilor/deosebirilor", "3p"),
                 ("Originalitatea prezentării", "2p"), ("Colaborarea în grup", "2p")],
                "Art 5, Proiect de grup, p. 153")
redactare_pregatire("Unitatea V", "Lecția 12", "unitatea-5/lectia-12/fisa.pdf", "Descrierea unei ființe imaginare",
                    "Inventează o ființă imaginară. Gândește-te la înfățișarea, puterile și locul unde trăiește.",
                    ["Înfățișare", "Puteri sau trăsături speciale", "Unde trăiește"], "Art 5, Lecția 11, p. 162")
redactare_scriere("Unitatea V", "Lecția 13", "unitatea-5/lectia-13/fisa.pdf", "Descrierea unei ființe imaginare",
                   "Redactează o compunere descriptivă (minimum 12 rânduri) despre ființa imaginară inventată în fișa de pregătire.",
                   ["respectă etapele scrierii: ciornă, revizuire, formă finală",
                    "folosește cel puțin două comparații sau epitete",
                    "organizează descrierea logic (înfățișare, apoi puteri, apoi habitat)",
                    "verifică ortografia și punctuația înainte de forma finală"],
                   "Art 5, Lecția 11, p. 163")
proiect_grila("Unitatea V", "Lecția 14", "unitatea-5/lectia-14/fisa.pdf", "Itinerar multicultural",
              [("Documentarea celor două culturi", "3p"), ("Claritatea asemănărilor/deosebirilor", "3p"),
               ("Originalitatea prezentării", "2p"), ("Colaborarea în grup", "2p")],
              "Art 5, Proiect de grup, p. 153")

# Unitatea VI
semnificatii("Unitatea VI", "Lecția 3", "unitatea-6/lectia-3/fisa.pdf", "Jurnal de călătorie", "Art 5, Lecția 3, pp. 172-173")
text_auxiliar("Unitatea VI", "Lecția 4", "unitatea-6/lectia-4/fisa.pdf", "Scrisoarea III de Mihai Eminescu", "Art 5, Lecția 4, pp. 174-175")
proiect_cerinte("Unitatea VI", "Lecția 8", "unitatea-6/lectia-8/fisa.pdf", "Imagini ale domnitorului",
                "Realizați, pe grupe, un material despre modul în care e înfățișat un domnitor român într-o operă literară sau într-o sursă istorică.",
                ["Alegerea unui domnitor și a unei surse (text literar sau istoric)",
                 "Prezentarea faptelor principale asociate domnitorului ales",
                 "O reflecție despre imaginea lui în cultura română de azi",
                 "Modalitatea de prezentare aleasă de grup"],
                "Proiect de grup — prezentare stabilită de comun acord cu profesoara",
                [("Corectitudinea informației istorice", "3p"), ("Claritatea prezentării", "3p"),
                 ("Reflecția personală", "2p"), ("Colaborarea în grup", "2p")],
                "Art 5, Proiect de grup, p. 180")
proiect_grila("Unitatea VI", "Lecția 10", "unitatea-6/lectia-10/fisa.pdf", "Imagini ale domnitorului",
              [("Corectitudinea informației istorice", "3p"), ("Claritatea prezentării", "3p"),
               ("Reflecția personală", "2p"), ("Colaborarea în grup", "2p")],
              "Art 5, Proiect de grup, p. 180")
redactare_pregatire("Unitatea VI", "Lecția 13", "unitatea-6/lectia-13/fisa.pdf", "Prezentarea textului",
                    "Alege un text propriu, deja scris, în care ai putea insera un desen, un grafic sau o schemă. Ce ai adăuga și de ce ar ajuta cititorul?",
                    ["Ce material grafic aș adăuga", "De ce ar ajuta cititorul"], "Art 5, Lecția 9, p. 187")
redactare_scriere("Unitatea VI", "Lecția 14", "unitatea-6/lectia-14/fisa.pdf", "Prezentarea textului",
                   "Redactează o scurtă compunere (minimum 10 rânduri) care integrează materialul grafic propriu conceput în fișa de pregătire.",
                   ["respectă etapele scrierii: ciornă, revizuire, formă finală",
                    "materialul grafic se leagă direct de conținutul textului",
                    "verifică ortografia și punctuația înainte de forma finală"],
                   "Art 5, Lecția 9, p. 188")


def build_textul_explicativ(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, "Fișă de lucru — Textul explicativ", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Cauzal sau procedural?")
    y = item(p, y, "Un text explicativ cauzal răspunde la întrebarea de ce?, un text explicativ procedural răspunde la întrebarea cum? Notează, pentru fiecare titlu de mai jos, ce fel de text explicativ crezi că este.")
    for exemplu in ["De ce plouă?", "Cum se face un ceai?", "De ce hibernează urșii?", "Cum se montează un cort?"]:
        y = item(p, y, f"„{exemplu}” — ", gap=8)
        y = lines_space(p, y, 1)
    y += 6
    y = section(p, y, 2, "Scrie propriul text explicativ")
    y = item(p, y, "Alege un fenomen sau o activitate pe care o cunoști bine și scrie un scurt text explicativ (cauzal sau procedural, la alegere), de minimum 6 rânduri.")
    y = lines_space(p, y, 8, gap=22)
    footer(p, spec["sursa"])
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


def build_pronume_ii(spec):
    doc = new_doc()
    p = new_page(doc)
    header(p, "Fișă de lucru — Pronumele personal (II)", spec["subtitlu"])
    y = 90
    y = section(p, y, 1, "Înlocuiește substantivele cu pronume")
    for enunt in [
        "Maria și Ion au plecat la joacă.",
        "Cartea era pe masă.",
        "Copiii au strigat numele profesoarei.",
    ]:
        y = item(p, y, f"„{enunt}” → ", gap=8)
        y = lines_space(p, y, 1)
    y += 6
    y = section(p, y, 2, "Persoană și număr")
    y = item(p, y, "Precizează persoana și numărul pronumelor personale din enunțurile de mai sus, după ce le-ai înlocuit.")
    y = lines_space(p, y, 3)
    y = section(p, y, 3, "Limbă vorbită și limbă scrisă")
    y = item(p, y, "Compară un mesaj de tip SMS cu norma limbii române standard. Rescrie corect, cu diacritice și fără prescurtări, un mesaj scurt pe care l-ai trimite unui prieten.")
    y = lines_space(p, y, 3)
    footer(p, spec["sursa"])
    doc.save(out_path(spec["out"]))
    print("saved", spec["out"])


BUILDERS = {
    "personaje": build_personaje,
    "semnificatii": build_semnificatii,
    "text_auxiliar": build_text_auxiliar,
    "proiect_cerinte": build_proiect_cerinte,
    "proiect_grila": build_proiect_grila,
    "redactare_pregatire": build_redactare_pregatire,
    "redactare_scriere": build_redactare_scriere,
    "textul_explicativ": build_textul_explicativ,
    "pronume_ii": build_pronume_ii,
}

SPECS.append(("textul_explicativ", dict(
    subtitlu="Unitatea IV, Lecția 7",
    sursa="Art 5, Lecția 7, p. 119",
    out="unitatea-4/lectia-7/fisa.pdf",
)))
SPECS.append(("pronume_ii", dict(
    subtitlu="Unitatea IV, Lecția 12",
    sursa="Art 5, Lecția 11, p. 127",
    out="unitatea-4/lectia-12/fisa.pdf",
)))

for kind, spec in SPECS:
    os.makedirs(os.path.dirname(out_path(spec["out"])), exist_ok=True)
    BUILDERS[kind](spec)

print(f"\nTotal fise generate (fara cele 2 speciale): {len(SPECS)}")
