# -*- coding: utf-8 -*-
"""Generează fișele de lucru restante pentru clasa a VII-a.

Materiale de sprijin originale: enunțuri proprii, conținut de bază (definiții,
trăsături de specie) doar în casete „Reper”, din Art 7 (Sâmihăian et al., Art
Klett), cu pagina notată în subsol.

Rulează din rădăcina proiectului:  python scripts/build_clasa7_fise.py
"""
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fisa_engine import sheet, sheet2, set_clasa

set_clasa("clasa-7")


def fisa_semnificatii(out, subtitlu, intrebare, sursa):
    sheet(out, "Fișă de lucru — Semnificațiile textului", subtitlu, [
        {"t": "lines", "n": 1, "title": "Prima impresie", "weight": 2,
         "prompt": "Ce ai simțit la prima lectură? Alege un cuvânt care numește o emoție și explică de ce."},
        {"t": "lines", "n": 2, "title": "Ideea centrală", "weight": 2,
         "prompt": "Formulează într-o propoziție ideea centrală a textului, așa cum ai înțeles-o tu."},
        {"t": "lines", "n": 3, "title": "Răspuns personal", "weight": 4,
         "prompt": [intrebare, "Scrie-ți poziția și susține-o cu două argumente și un citat scurt din text."]},
        {"t": "lines", "n": 4, "title": "Atitudinile personajelor", "weight": 3,
         "prompt": "Alege un personaj și explică atitudinea lui într-un moment-cheie. Ești de acord cu felul în care reacționează?"},
        {"t": "lines", "n": 5, "title": "Legătura cu tine", "weight": 3,
         "prompt": "Ai trăit sau ai văzut o situație asemănătoare? Povestește pe scurt."},
    ], sursa)


def fisa_text_auxiliar(out, subtitlu, titlu_text, texte_baza, sursa):
    sheet(out, f"Fișă de lucru — Text auxiliar: {titlu_text}", subtitlu, [
        {"t": "table", "n": 1, "title": "Jurnalul cu dublă intrare", "rows": 5,
         "cols": ["Fragment care mi-a atras atenția", "Ce gândesc / ce simt despre el"], "widths": [255, 255]},
        {"t": "lines", "n": 2, "title": "Trăsăturile personajelor", "weight": 3,
         "prompt": "Ce trăsături ale personajelor se desprind din fragment? Susține fiecare trăsătură cu o faptă sau o replică."},
        {"t": "lines", "n": 3, "title": "Legături cu textul de bază", "weight": 3,
         "prompt": f"Ce asemănări și ce deosebiri găsești între acest fragment și {texte_baza}?"},
        {"t": "lines", "n": 4, "title": "Sugestie de lectură", "weight": 2,
         "prompt": "Recomandă textul unui coleg, în 2-3 rânduri: de ce merită citit?"},
    ], sursa)


def fisa_legarea_secventelor(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Legarea secvențelor narative", subtitlu, [
        {"t": "table", "n": 1, "title": "Înlănțuire sau alternanță", "rows": 4, "row_h": 34,
         "cols": ["Secvența din text", "Cum e legată de precedenta", "Cuvântul sau formula care o leagă"],
         "widths": [190, 170, 170],
         "prompt": "Ia un text narativ citit la clasă și completează pentru patru treceri dintre secvențe."},
        {"t": "lines", "n": 2, "title": "Recunoaște procedeul", "weight": 3,
         "prompt": "Într-un text la alegere, găsește un pasaj de înlănțuire și unul de alternanță. Transcrie prima propoziție a fiecăruia."},
        {"t": "lines", "n": 3, "title": "Scrii tu", "weight": 4,
         "prompt": "Scrie un scurt fragment narativ (6-8 rânduri) în care două fire de acțiune se desfășoară în paralel. Marchează trecerile cu formule de alternanță."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 14-15): Înlănțuirea leagă secvențele aceluiași fir narativ în ordine cronologică, "
        "prin alăturare sau prin cuvinte ca apoi, când, după aceea, în cele din urmă. Alternanța prezintă două "
        "fire narative în paralel: naratorul întrerupe un fir pentru a-l continua pe celălalt, cu formule ca "
        "în acest timp, în același timp, pe când se întâmplau acestea."))


def fisa_narator_enumeratie(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Naratorul, personajele, autorul. Enumerația", subtitlu, [
        {"t": "table", "n": 1, "title": "Autor sau narator", "rows": 3, "row_h": 32,
         "cols": ["Afirmația", "Se referă la autor sau la narator?"], "widths": [340, 170],
         "data": [["Persoana reală care a scris textul.", ""],
                  ["Vocea care povestește întâmplările din text.", ""],
                  ["Poate fi un personaj din poveste.", ""]]},
        {"t": "lines", "n": 2, "title": "Statutul personajelor", "weight": 3,
         "prompt": "Notează, pentru două personaje, statutul lor (social, familial) și o trăsătură dominantă, cu o dovadă din text."},
        {"t": "lines", "n": 3, "title": "Enumerația", "weight": 3,
         "prompt": "Găsește în text o enumerație. Transcrie-o și explică ce efect are: accentuează abundența, ritmul, varietatea?"},
        {"t": "lines", "n": 4, "title": "Scrii tu", "weight": 3,
         "prompt": "Descrie un loc aglomerat folosind o enumerație de cel puțin patru termeni."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 16-17): Autorul este persoana reală care scrie textul; naratorul este vocea care "
        "relatează întâmplările și poate fi sau nu un personaj. Enumerația este o figură de stil care înșiră "
        "termeni de același fel, pentru a sublinia abundența, varietatea sau ritmul."))


def fisa_etapele_scrierii(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Etapele scrierii. Organizarea unui text", subtitlu, [
        {"t": "table", "n": 1, "title": "Cele cinci etape", "rows": 5, "row_h": 30,
         "cols": ["Etapa", "Ce fac la această etapă"], "widths": [150, 360],
         "data": [["1. Pregătirea", ""], ["2. Ciorna", ""], ["3. Revizuirea", ""],
                  ["4. Editarea", ""], ["5. Publicarea", ""]]},
        {"t": "lines", "n": 2, "title": "Situația de comunicare", "weight": 3,
         "prompt": "Alege ce vei scrie: o recenzie de carte, o prezentare de film sau una de blog. Notează pentru cine scrii, cu ce scop și pe ce canal."},
        {"t": "lines", "n": 3, "title": "Ciorna", "weight": 5,
         "prompt": "Scrie prima variantă a textului (minimum 10 rânduri): o scurtă recenzie sau prezentare, cu titlu și o apreciere clară."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 40-41): Redactarea are cinci etape: pregătirea, ciorna, revizuirea (claritate, "
        "logică, timpuri verbale, repetiții, pleonasme), editarea (titlu centrat, ortografie, punctuație, "
        "imagini) și publicarea. Recenzia este un text nonliterar care prezintă o operă cu aprecieri critice."))


def fisa_stil(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Calitățile stilului", subtitlu, [
        {"t": "table", "n": 1, "title": "Recunoaște calitatea", "rows": 5, "row_h": 30,
         "cols": ["Calitatea stilului", "Un exemplu (din text sau propriu)"], "widths": [180, 330],
         "data": [["Naturalețea", ""], ["Armonia", ""], ["Varietatea", ""],
                  ["Concizia", ""], ["Originalitatea", ""]]},
        {"t": "lines", "n": 2, "title": "Rescrie pentru concizie", "weight": 3,
         "prompt": "Rescrie mai concis: „Din punctul meu de vedere personal, eu cred că este un lucru foarte bun și pozitiv.”"},
        {"t": "lines", "n": 3, "title": "Rescrie pentru varietate", "weight": 3,
         "prompt": "Rescrie evitând repetițiile: „Băiatul a luat cartea. Băiatul a deschis cartea. Băiatul a citit din carte.”"},
        {"t": "lines", "n": 4, "title": "Un scurt text propriu", "weight": 3,
         "prompt": "Scrie 4-5 rânduri despre un loc care îți place, ținând cont de naturalețe, armonie și originalitate."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 42-43): Calitățile stilului sunt naturalețea (exprimare firească), armonia "
        "(sonoritate plăcută, fără cacofonii), varietatea (evitarea repetițiilor), concizia (spui mult în "
        "cuvinte puține) și originalitatea (o voce proprie). Ele completează proprietatea, puritatea și "
        "originalitatea învățate în clasa a VI-a."))


# ---------- șabloane reutilizabile ----------

def fisa_proiect_cerinte(out, subtitlu, nume, tema, cerinte, calendar, criterii, sursa):
    sheet(out, f"Fișă de proiect — {nume}", subtitlu, [
        {"t": "lines", "n": 1, "title": "Tema", "weight": 1, "prompt": tema},
        {"t": "lines", "n": 2, "title": "Ce trebuie să conțină", "weight": 1,
         "prompt": [f"• {c}" for c in cerinte]},
        {"t": "lines", "n": 3, "title": "Calendar", "weight": 1, "prompt": calendar},
        {"t": "table", "n": 4, "title": "Criterii de evaluare (punctaj orientativ)", "rows": len(criterii),
         "cols": ["Criteriu", "Punctaj"], "widths": [420, 90], "data": [[c, p] for c, p in criterii]},
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


# ---------- Unitatea II ----------

def fisa_structura_narativa(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Structura textului narativ", subtitlu, [
        {"t": "table", "n": 1, "title": "Momentele narațiunii, în Popa Tanda", "rows": 5, "row_h": 32,
         "cols": ["Momentul narațiunii", "Ce se întâmplă în text"], "widths": [180, 330],
         "data": [["Expozițiunea", ""], ["Intriga", ""], ["Desfășurarea acțiunii", ""],
                  ["Punctul culminant", ""], ["Deznodământul", ""]]},
        {"t": "lines", "n": 2, "title": "Cele două descrieri ale satului", "weight": 3,
         "prompt": "Compară descrierea satului de la începutul și de la sfârșitul nuvelei: două aspecte comune și două diferite. Ce sugerează schimbarea?"},
        {"t": "lines", "n": 3, "title": "Atitudinea naratorului", "weight": 3,
         "prompt": "Naratorul e detașat (observator neimplicat) sau marcat afectiv? Găsește un pasaj care îți susține răspunsul."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 53-54): Firul narativ se organizează în momente ale narațiunii: expozițiunea, "
        "intriga, desfășurarea acțiunii, punctul culminant, deznodământul. Secvențele descriptive pot fi "
        "plasate simetric (la început și la sfârșit), ca să sublinieze o evoluție."))


def fisa_personaj_repetitia(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Construcția personajului. Repetiția", subtitlu, [
        {"t": "table", "n": 1, "title": "Trăsăturile părintelui Trandafir", "rows": 4, "row_h": 34,
         "cols": ["Trăsătura", "Cine o arată (narator / alt personaj / el însuși)", "Exemplu din text"],
         "widths": [130, 210, 170]},
        {"t": "lines", "n": 2, "title": "Rolul repetiției", "weight": 3,
         "prompt": "Ce idee subliniază repetarea replicii „Popa e omul dracului!”? De ce se schimbă ea în final în „este omul lui Dumnezeu”?"},
        {"t": "lines", "n": 3, "title": "Epitetul care revine", "weight": 3,
         "prompt": "Ce epitet se repetă când e vorba despre părintele Trandafir? Ce impresie lasă asupra cititorului?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 55-56): Personajul se construiește prin caracterizare directă (trăsături spuse "
        "de narator, de alte personaje sau de el însuși) și indirectă (din fapte, vorbe, relații, nume). "
        "Repetiția, ca mijloc de construcție, insistă asupra unei trăsături sau a unei idei."))


def fisa_conflict(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Conflictul. Personaje plate și rotunde", subtitlu, [
        {"t": "lines", "n": 1, "title": "Conflictul", "weight": 3,
         "prompt": "Care este conflictul principal al nuvelei (între cine și cine, sau între personaj și ce)? Ce urmări are asupra acțiunii?"},
        {"t": "table", "n": 2, "title": "Plat sau rotund", "rows": 3, "row_h": 34,
         "cols": ["Personajul", "Plat sau rotund?", "Argument din text"], "widths": [130, 130, 250]},
        {"t": "lines", "n": 3, "title": "Evoluția personajului rotund", "weight": 4,
         "prompt": "Alege un personaj rotund și arată cum se schimbă de la începutul la sfârșitul textului. Ce anume îl face să se schimbe?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 57-58): Conflictul este ciocnirea dintre forțe, personaje sau idei, care pune în "
        "mișcare acțiunea. Personajele plate au un singur plan și rămân previzibile; personajele rotunde "
        "sunt complexe, uneori contradictorii, și evoluează pe parcursul textului."))


def fisa_semnif_conexiuni(out, subtitlu, titlu_text, sursa):
    sheet(out, "Fișă de lucru — Semnificațiile textului. Cele trei conexiuni", subtitlu, [
        {"t": "lines", "n": 1, "title": "Text – eu", "weight": 3,
         "prompt": f"Ce moment din {titlu_text} îți amintește de ceva trăit sau simțit de tine? Explică legătura."},
        {"t": "lines", "n": 2, "title": "Text – text", "weight": 3,
         "prompt": "Ce alt text (carte, film, poveste) tratează o temă asemănătoare? Ce au în comun și prin ce se deosebesc?"},
        {"t": "lines", "n": 3, "title": "Text – lume", "weight": 3,
         "prompt": "Ce spune textul despre o problemă reală din societate, de ieri sau de azi?"},
        {"t": "lines", "n": 4, "title": "Răspuns personal", "weight": 3,
         "prompt": "Formulează, în 3-4 rânduri, ce înseamnă textul pentru tine, pornind de la cele trei conexiuni."},
    ], sursa, reper_text=(
        "Reper: Strategia celor trei conexiuni te ajută să înțelegi un text legându-l de tine (text–eu), de "
        "alte texte (text–text) și de realitatea din jur (text–lume)."))


def fisa_fapte_opinii(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Fapte și opinii. Textul explicativ", subtitlu, [
        {"t": "table", "n": 1, "title": "Fapt sau opinie", "rows": 5, "row_h": 30,
         "cols": ["Enunț", "Fapt (F) / Opinie (O)", "Cuvântul care te ajută să decizi"],
         "widths": [230, 120, 160],
         "data": [["Cameron a plătit masa unei familii.", "", ""],
                  ["Gestul lui a fost minunat.", "", ""],
                  ["Blogul are mii de urmăritori.", "", ""],
                  ["Cred că exemplul lui merită urmat.", "", ""],
                  ["Proiectul a început într-un fast-food.", "", ""]]},
        {"t": "lines", "n": 2, "title": "Intenția vorbitorului", "weight": 3,
         "prompt": "Când folosește fapte, ce vrea de obicei vorbitorul? Dar când folosește opinii? Dă câte un exemplu."},
        {"t": "lines", "n": 3, "title": "Un scurt text explicativ", "weight": 4,
         "prompt": "Alege un obicei sau un fenomen și scrie 5-6 rânduri care explică cum sau de ce se petrece. Folosește măcar un fapt verificabil."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 65-66): Faptele prezintă certitudini, se pot observa, măsura, dovedi (cuvinte-"
        "cheie: numerale, a verifica, a dovedi, document, martor). Opiniile sunt păreri personale (cuvinte-"
        "cheie: bun, rău, a crede, a considera, punct de vedere, întotdeauna). Textul explicativ arată cum "
        "sau de ce se întâmplă ceva, ca să facă pe cineva să înțeleagă."))


def fisa_locutiunea_verbala(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Locuțiunea verbală", subtitlu, [
        {"t": "table", "n": 1, "title": "Locuțiune și verb sinonim", "rows": 5, "row_h": 30,
         "cols": ["Locuțiunea verbală", "Un verb sinonim", "Enunț propriu"], "widths": [160, 130, 220],
         "data": [["a-și da seama", "", ""], ["a băga de seamă", "", ""], ["a sta de vorbă", "", ""],
                  ["a lua la rost", "", ""], ["a spăla putina", "", ""]]},
        {"t": "lines", "n": 2, "title": "Locuțiune sau nu?", "weight": 3,
         "prompt": "Explică de ce „a ajuns la sapă de lemn” e locuțiune verbală, iar „a ajuns acasă” nu este."},
        {"t": "lines", "n": 3, "title": "Funcția sintactică", "weight": 3,
         "prompt": "Într-un enunț propriu cu o locuțiune verbală la mod personal, arată că are funcția de predicat verbal."},
    ], sursa, reper_text=(
        "Reper (manual, p. 68): Locuțiunea verbală este un grup unitar de cuvinte, sinonim cu un verb, care "
        "conține întotdeauna un verb (a-și da seama, a băga de seamă). Se comportă ca un verb: are funcția "
        "de predicat verbal și e determinată de complemente și circumstanțiale, nu de atribute. Apare des în "
        "limbajul oral."))


def fisa_circ_cauza(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Circumstanțialul de cauză. Redactare", subtitlu, [
        {"t": "lines", "n": 1, "title": "Recunoaște cauza", "weight": 2,
         "prompt": ["Subliniază circumstanțialul de cauză și pune întrebarea potrivită (din ce cauză?):",
                    "a) Din grijă pentru o familie săracă, tânărul a plătit masa.",
                    "b) Fiind nemulțumit de colegii lui, a pornit proiectul.",
                    "c) A întârziat din cauza ploii."]},
        {"t": "lines", "n": 2, "title": "Trei feluri de a exprima cauza", "weight": 3,
         "prompt": "Scrie același motiv („a lipsit fiindcă era bolnav”) în trei feluri: cu „din cauză că”, cu un substantiv și prepoziție („de boală”), cu un gerunziu („fiind bolnav”)."},
        {"t": "lines", "n": 3, "title": "Un scurt text cauzal", "weight": 4,
         "prompt": "Scrie 6-8 rânduri despre o faptă bună a cuiva, folosind cel puțin două circumstanțiale de cauză, exprimate diferit."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 78-80): Circumstanțialul de cauză arată din ce cauză sau din ce pricină se "
        "petrece acțiunea. Se poate exprima prin substantiv cu prepoziție (de frică, din grijă), prin "
        "gerunziu (fiind obosit) sau printr-o propoziție introdusă prin „fiindcă”, „din cauză că”, „deoarece”."))


def fisa_caracterizare_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Caracterizarea personajului (I). Pregătire", subtitlu, [
        {"t": "table", "n": 1, "title": "Trăsături și mijloace", "rows": 5, "row_h": 32,
         "cols": ["Trăsătura", "Directă sau indirectă?", "Din ce se desprinde (faptă / vorbă / nume / relații)"],
         "widths": [130, 130, 250]},
        {"t": "lines", "n": 2, "title": "Planul caracterizării", "weight": 4,
         "prompt": "Schițează planul pe paragrafe: introducere (loc și statut), cuprins (2-3 grupuri de trăsături, cu mijloacele lor), încheiere (opinia ta despre personaj)."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 82-83): Caracterizarea unui personaj se organizează pe paragrafe: introducerea "
        "(locul și statutul personajului), cuprinsul (trăsăturile fizice și morale, susținute cu mijloacele "
        "de construcție: caracterizare directă și indirectă, prin fapte, vorbe, nume, relații), încheierea "
        "(o opinie personală). Se respectă etapele scrierii."))


def fisa_caracterizare_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Caracterizarea personajului (II). Redactare", subtitlu, [
        {"t": "lines", "n": 1, "title": "Ciorna", "weight": 6,
         "prompt": "Redactează caracterizarea părintelui Trandafir din Popa Tanda, pe baza planului din fișa (I). Introducere, cuprins pe grupuri de trăsături cu dovezi din text, încheiere cu opinia ta."},
    ], [
        {"t": "lines", "n": 2, "title": "Revizuire", "weight": 2,
         "prompt": "Bifează: ai și trăsături fizice, și morale? fiecare trăsătură are o dovadă din text? ai folosit și caracterizare directă, și indirectă? încheierea are o opinie proprie?"},
        {"t": "lines", "n": 3, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie caracterizarea în formă finală, cu corecturile de conținut, exprimare și punctuație."},
    ], sursa)


if __name__ == "__main__":
    fisa_legarea_secventelor("unitatea-1/lectia-2/fisa.pdf",
                             "Unitatea I, Lecția 2 · Cum e lumea de Veronica D. Niculescu", "Art 7, pp. 14-15")
    fisa_narator_enumeratie("unitatea-1/lectia-3/fisa.pdf",
                            "Unitatea I, Lecția 3 · Cum e lumea de Veronica D. Niculescu", "Art 7, pp. 16-17")
    fisa_semnificatii("unitatea-1/lectia-4/fisa.pdf",
                      "Unitatea I, Lecția 4 · Cum e lumea de Veronica D. Niculescu",
                      "Crezi că personajul principal se schimbă pe parcursul textului sau rămâne la fel?",
                      "Art 7, pp. 18-19")
    fisa_text_auxiliar("unitatea-1/lectia-6/fisa.pdf", "Unitatea I, Lecția 6",
                       "Amintiri din copilărie de Ion Creangă (fragment)",
                       "textul de bază al unității (Cum e lumea de Veronica D. Niculescu)",
                       "Art 7, „Noi pagini, alte idei”, pp. 22-23")
    fisa_etapele_scrierii("unitatea-1/lectia-18/fisa.pdf",
                          "Unitatea I, Lecția 18", "Art 7, pp. 40-41")
    fisa_stil("unitatea-1/lectia-19/fisa.pdf",
              "Unitatea I, Lecția 19", "Art 7, pp. 42-43")

    # ---------- Unitatea II ----------
    fisa_proiect_cerinte(
        "unitatea-2/lectia-1/fisa.pdf", "Unitatea II, Lecția 1 · Proiect de grup",
        "Valorile mele, valorile comunității",
        "Alegeți o valoare importantă pentru comunitatea voastră (satul, cartierul, școala) și arătați cum se vede ea în fapte concrete.",
        ["Valoarea aleasă și de ce contează pentru comunitate",
         "Două-trei exemple concrete în care valoarea se vede (o tradiție, o faptă, o regulă nescrisă)",
         "O mărturie: un citat dintr-un interviu cu o persoană din comunitate",
         "Cum se transmite valoarea de la o generație la alta",
         "Rolul fiecărui membru al grupei"],
        "Proiect de grup, prezentare la finalul unității.",
        [("Valoarea e clar prezentată și motivată", "3p"),
         ("Exemplele concrete sunt relevante", "3p"),
         ("Mărturia adaugă ceva viu prezentării", "2p"),
         ("Colaborarea în grup", "2p")],
        "Art 7, Proiect de grup")
    fisa_structura_narativa("unitatea-2/lectia-3/fisa.pdf",
                            "Unitatea II, Lecția 3 · Popa Tanda de Ioan Slavici", "Art 7, pp. 53-54")
    fisa_personaj_repetitia("unitatea-2/lectia-4/fisa.pdf",
                            "Unitatea II, Lecția 4 · Popa Tanda de Ioan Slavici", "Art 7, pp. 55-56")
    fisa_conflict("unitatea-2/lectia-5/fisa.pdf",
                  "Unitatea II, Lecția 5 · Popa Tanda de Ioan Slavici", "Art 7, pp. 57-58")
    fisa_semnif_conexiuni("unitatea-2/lectia-6/fisa.pdf",
                          "Unitatea II, Lecția 6 · Popa Tanda de Ioan Slavici", "nuvela Popa Tanda", "Art 7, p. 59")
    fisa_text_auxiliar("unitatea-2/lectia-7/fisa.pdf", "Unitatea II, Lecția 7",
                       "Inocenții de Ioana Pârvulescu (fragment)",
                       "textul de bază al unității (Popa Tanda de Ioan Slavici)",
                       "Art 7, „Noi pagini, alte idei”, pp. 60-61")
    fisa_proiect_grila("unitatea-2/lectia-8/fisa.pdf", "Unitatea II, Lecția 8 · Proiect de grup",
                       "Valorile mele, valorile comunității",
                       [("Valoarea e clar prezentată și motivată", "3p"),
                        ("Exemplele concrete sunt relevante", "3p"),
                        ("Mărturia adaugă ceva viu prezentării", "2p"),
                        ("Colaborarea în grup", "2p")],
                       "Art 7, Proiect de grup, p. 62")
    fisa_fapte_opinii("unitatea-2/lectia-11/fisa.pdf",
                      "Unitatea II, Lecția 11 (manual, partea 1/2)", "Art 7, pp. 65-66")
    fisa_locutiunea_verbala("unitatea-2/lectia-14/fisa.pdf",
                            "Unitatea II, Lecția 14 (manual, partea 2/2)", "Art 7, pp. 67-69")
    fisa_circ_cauza("unitatea-2/lectia-19/fisa.pdf",
                    "Unitatea II, Lecția 19 (manual, partea 2/2)", "Art 7, pp. 78-80")
    fisa_caracterizare_1("unitatea-2/lectia-21/fisa.pdf",
                         "Unitatea II, Lecția 21 (manual, partea 1/2)", "Art 7, pp. 82-83")
    fisa_caracterizare_2("unitatea-2/lectia-22/fisa.pdf",
                         "Unitatea II, Lecția 22 (manual, partea 2/2)", "Art 7, pp. 82-83")

    print("\nFise clasa a VII-a: U1 (6) + U2 (12) = 18")
