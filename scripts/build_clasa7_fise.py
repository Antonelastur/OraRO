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


# ---------- Unitatea III ----------

def fisa_text_liric(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul liric. Emoții și sentimente", subtitlu, [
        {"t": "lines", "n": 1, "title": "Emoție sau sentiment", "weight": 2,
         "prompt": "Notează, din poezia citită, un vers care exprimă o emoție (reacție de moment) și unul care exprimă un sentiment (stare de durată). Explică diferența."},
        {"t": "table", "n": 2, "title": "Mărcile subiectivității", "rows": 4, "row_h": 32,
         "cols": ["Marca (persoana I, exclamație, cuvânt-emoție…)", "Exemplu din text", "Ce stare transmite"],
         "widths": [210, 160, 140]},
        {"t": "lines", "n": 3, "title": "Vocea lirică nu e autorul", "weight": 3,
         "prompt": "Ce ipostază umană crezi că exprimă vocea lirică din text (îndrăgostitul, copilul, contemplatorul naturii…)? Argumentează cu două versuri."},
        {"t": "lines", "n": 4, "title": "Scrii tu", "weight": 3,
         "prompt": "Scrie 3-4 versuri la persoana I despre o emoție puternică, folosind cel puțin o exclamație și un cuvânt-emoție."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 90-91): Vocea lirică este un eu imaginar, ficțional, care există doar în text și nu "
        "se confundă cu autorul; ea ia o ipostază (îndrăgostitul, copilul, revoltatul…). Subiectivitatea se "
        "vede în persoana I singular sau plural, în persoana a II-a, în exclamații și interogații retorice și "
        "în cuvinte care exprimă senzații și emoții (ah!, vai!, of!)."))


def fisa_descriptiv_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul descriptiv. Portretul", subtitlu, [
        {"t": "table", "n": 1, "title": "Obiectivă sau subiectivă", "rows": 4, "row_h": 30,
         "cols": ["Enunț descriptiv", "Obiectivă (O) / Subiectivă (S)", "Ce te ajută să decizi"],
         "widths": [230, 130, 150],
         "data": [["Are părul castaniu și ochii verzi.", "", ""],
                  ["Privirea ei lumina toată încăperea.", "", ""],
                  ["Măsoară un metru șaptezeci.", "", ""],
                  ["Zâmbetul lui era cald ca o zi de vară.", "", ""]]},
        {"t": "lines", "n": 2, "title": "Pașii unei descrieri", "weight": 3,
         "prompt": "Alege o persoană cunoscută. Notează, în ordine: cine e (obiectul descrierii), 3-4 elemente ale chipului, o proprietate pentru fiecare, impresia generală."},
        {"t": "lines", "n": 3, "title": "Două variante", "weight": 4,
         "prompt": "Descrie aceeași persoană de două ori: o dată obiectiv (persoana a III-a, limbaj neutru), o dată subiectiv (persoana I, cu figuri de stil)."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 106-107): Descrierea prezintă caracteristicile unui obiect, ale unei ființe sau ale "
        "unui peisaj. Descrierea obiectivă dă informații conforme cu realitatea, la persoana a III-a, cu limbaj "
        "neutru, fără figuri de stil. Descrierea subiectivă exprimă impresii și sentimente, mai ales la "
        "persoana I, cu figuri de stil. Se numește obiectul, apoi elementele lui, proprietățile, impresia generală."))


def fisa_descriere_pregatire(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Descrierea unui portret (III). Pregătire", subtitlu, [
        {"t": "lines", "n": 1, "title": "Observă tabloul", "weight": 3,
         "prompt": "Ia un portret pictat (din manual sau ales de tine). Notează: cine pare a fi personajul, ce vârstă, ce stare are, ce detalii ale chipului și ale ținutei ies în evidență."},
        {"t": "table", "n": 2, "title": "De la general la detaliu", "rows": 4, "row_h": 32,
         "cols": ["Nivel", "Ce descriu"], "widths": [170, 340],
         "data": [["Impresia generală", ""], ["Chipul (ochi, gură, expresie)", ""],
                  ["Ținuta și fundalul", ""], ["Un detaliu care spune ceva despre personaj", ""]]},
        {"t": "lines", "n": 3, "title": "Ciorna", "weight": 4,
         "prompt": "Scrie prima variantă a descrierii (8-10 rânduri), pe baza planului de mai sus."},
    ], sursa, reper_text=(
        "Reper (manual, p. 118): Redactarea unei descrieri urmează etapele scrierii. Se pornește de la "
        "impresia generală spre detalii, se aleg elementele semnificative ale portretului și se verifică la "
        "final claritatea, ortografia și punctuația."))


def fisa_descriere_redactare(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Descrierea unui portret (IV). Redactare", subtitlu, [
        {"t": "lines", "n": 1, "title": "Forma dezvoltată", "weight": 6,
         "prompt": "Dezvoltă ciorna din fișa (III) într-o descriere de 12-15 rânduri: impresie generală, chip, ținută, un detaliu revelator, o încheiere care spune ce impresie îți lasă personajul."},
    ], [
        {"t": "lines", "n": 2, "title": "Verificare finală", "weight": 2,
         "prompt": "Bifează: descrierea merge de la general la detaliu? ai ales elemente semnificative, nu la întâmplare? tipul de descriere (obiectivă/subiectivă) e păstrat pe tot textul? ortografia și punctuația sunt corecte?"},
        {"t": "lines", "n": 3, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie descrierea în formă finală, cu toate corecturile."},
    ], sursa)


def fisa_comentare_pasaje(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Comentarea unor pasaje dintr-un text", subtitlu, [
        {"t": "lines", "n": 1, "title": "Liric sau epic", "weight": 2,
         "prompt": "Ia un pasaj scurt dintr-un text citit la clasă. Stabilește dacă textul e liric sau epic și spune de unde știi."},
        {"t": "lines", "n": 2, "title": "Ideea pasajului", "weight": 3,
         "prompt": "Formulează într-o propoziție ideea principală a pasajului. Cum se leagă ea de restul textului?"},
        {"t": "lines", "n": 3, "title": "Semnificație și mijloace de expresie", "weight": 4,
         "prompt": "Ce figuri de stil sau alte mijloace de expresie susțin sensul pasajului? Comentează-le cu un citat scurt, introdus corect."},
        {"t": "lines", "n": 4, "title": "Rescrie sobru", "weight": 3,
         "prompt": "Rescrie un comentariu prea încărcat, eliminând aprecierile superlative și metaforele: „Acest pasaj absolut genial ne răscolește sufletul cu o forță de neimaginat.”"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 118-119): La comentarea unui pasaj: citești atent tot textul, stabilești dacă e "
        "liric sau epic, identifici ideile, prezinți semnificația legând-o de figurile de stil, dai exemple cu "
        "citate introduse corect. Limbajul e clar, concis, sobru, fără metafore, aprecieri superlative sau "
        "exclamații."))


def fisa_descriere_emotie(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Descrierea unei emoții personale", subtitlu, [
        {"t": "lines", "n": 1, "title": "Alege momentul", "weight": 3,
         "prompt": "Amintește-ți o situație în care ai simțit puternic o emoție (bucurie, teamă, rușine, mândrie…). Notează: când s-a produs, unde, cine era de față."},
        {"t": "lines", "n": 2, "title": "Ciorna", "weight": 4,
         "prompt": "Scrie prima variantă (10-12 rânduri) la persoana I, timpul trecut. Pornește de la impresia generală și mergi spre detalii: ce ai simțit în corp, ce gânduri ai avut, cum s-a schimbat starea."},
    ], [
        {"t": "lines", "n": 3, "title": "Verificare", "weight": 2,
         "prompt": "Bifează: e la persoana I, singular, timpul trecut? merge de la general la particular? se înțelege ce emoție descrii, fără să o numești tot timpul?"},
        {"t": "lines", "n": 4, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie descrierea emoției în formă finală, cu scris lizibil și normele de redactare respectate."},
    ], sursa)


# ---------- Unitatea IV ----------

def fisa_spatiu_timp_actiune(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Spațiul, timpul, acțiunea", subtitlu, [
        {"t": "table", "n": 1, "title": "Indici de timp și de spațiu în Două loturi", "rows": 4, "row_h": 32,
         "cols": ["Fragmentul din text", "Ce loc sau ce moment fixează"], "widths": [280, 230]},
        {"t": "table", "n": 2, "title": "Toponime cu tâlc", "rows": 3, "row_h": 34,
         "cols": ["Numele locului", "Ce ar putea sugera, față de întâmplări"], "widths": [180, 330],
         "data": [["Mahalaua Farfurigiilor", ""], ["Strada Emancipării", ""], ["Strada Pacienței, nr. 13", ""]]},
        {"t": "lines", "n": 3, "title": "Ordinea relatării", "weight": 3,
         "prompt": "Cu ce moment al subiectului începe textul? Unde s-ar afla el, de fapt, pe firul cronologic? De ce crezi că a ales naratorul să înceapă așa?"},
        {"t": "lines", "n": 4, "title": "Cât durează aventura", "weight": 2,
         "prompt": "Pe baza reperelor temporale din text, câte zile ține goana după bilete? Transcrie fragmentul care ți-o arată."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 130-131): În textele narative așezate în lumea oamenilor obișnuiți, bogăția "
        "detaliilor concrete dă cititorului iluzia că lumea imaginată există; de aici apar indici care fixează "
        "acțiunea în timp și spațiu. Ca să capteze interesul, autorul poate să nu respecte ordinea "
        "momentelor subiectului, să poarte un dialog cu cititorii, să propună mai multe finaluri sau să "
        "pretindă că nu știe ce s-a întâmplat mai departe cu personajele. Numele de locuri, reale sau "
        "inventate, pot avea o semnificație în raport cu întâmplările."))


def fisa_narator_personaje(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Naratorul și personajele", subtitlu, [
        {"t": "lines", "n": 1, "title": "Vocea care povestește", "weight": 3,
         "prompt": "La ce persoană sunt relatate întâmplările? Găsește două locuri în care naratorul se adresează direct cititorului. Ce rol au aceste adresări?"},
        {"t": "table", "n": 2, "title": "Rolurile personajelor", "rows": 5, "row_h": 30,
         "cols": ["Personajul", "Principal / secundar / episodic", "Ce aduce în acțiune"],
         "widths": [150, 170, 190],
         "data": [["Lefter Popescu", "", ""], ["madam Popescu", "", ""], ["căpitanul Pandele", "", ""],
                  ["comisarul Turtureanu", "", ""], ["Ița (chivuța)", "", ""]]},
        {"t": "table", "n": 3, "title": "Caracterizarea lui Lefter Popescu", "rows": 4, "row_h": 34,
         "cols": ["Trăsătura", "Mijlocul de caracterizare", "Secvența din text"], "widths": [140, 190, 180]},
        {"t": "lines", "n": 4, "title": "Numele personajului", "weight": 2,
         "prompt": "Lefter vine din Elefterie, care duce la grecescul eleutheros, „liber”. Ce contrast se creează între acest sens și situația personajului? Când apare în text și forma Elefterie?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 132-134): Autorul real nu vorbește direct cu cititorii; el construiește un "
        "emițător fictiv, naratorul, care se poate adresa unui destinatar fictiv. Când accentul cade pe "
        "personajul principal, acesta e construit cu atenție la datele biografice, mediu, relații, "
        "comportament, reacții emoționale, limbaj, vestimentație. Caracterizarea este directă (trăsături "
        "spuse de narator, de alte personaje sau de personaj însuși) sau indirectă (din fapte, vorbe, "
        "relații, nume)."))


def fisa_colectare_surse(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Colectarea informațiilor din surse diverse", subtitlu, [
        {"t": "lines", "n": 1, "title": "Subiectul ales", "weight": 1,
         "prompt": "Alege un obiect, un meșteșug sau un fenomen despre care vrei să afli mai multe. Scrie-l aici și formulează două întrebări la care cauți răspuns."},
        {"t": "table", "n": 2, "title": "Trei surse, trei informații", "rows": 3, "row_h": 40,
         "cols": ["Sursa (titlu, autor, adresă, data accesării)", "O informație aflată de acolo", "Pot avea încredere? De ce"],
         "widths": [190, 170, 150]},
        {"t": "lines", "n": 3, "title": "Text sau imagine", "weight": 3,
         "prompt": "Una dintre surse e multimodală (text plus imagini, hărți sau grafice)? Explică ce adaugă imaginea față de text."},
        {"t": "lines", "n": 4, "title": "Ce am aflat, pe scurt", "weight": 4,
         "prompt": "Scrie 5-6 rânduri care adună răspunsurile la întrebările tale, cu informații din cel puțin două surse. Notează în paranteză de unde vine fiecare dată."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 136-139): Enciclopedia este o lucrare de referință cu informații sistematizate, "
        "generală sau dintr-un singur domeniu. Textul enciclopedic e de regulă multimodal și cuprinde "
        "trimiteri la lucrările pe baza cărora s-a documentat. Wikipedia este o enciclopedie online la care "
        "poate contribui oricine, de aceea informațiile trebuie verificate și din alte surse."))


def fisa_secvente_recunoastere(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Secvențe narative, descriptive, dialogate, explicative", subtitlu, [
        {"t": "table", "n": 1, "title": "Recunoaște tipul de secvență", "rows": 4, "row_h": 34,
         "cols": ["Fragmentul (dintr-un text la alegere)", "Tipul de secvență", "Un indiciu care te ajută"],
         "widths": [240, 130, 140]},
        {"t": "lines", "n": 2, "title": "Rolul secvenței inserate", "weight": 3,
         "prompt": "Alege dintr-un text citit la clasă o secvență descriptivă sau explicativă dintr-o narațiune. Ce aduce ea în plus? Cum ar fi textul fără ea?"},
        {"t": "lines", "n": 3, "title": "Mărcile secvenței dialogate", "weight": 3,
         "prompt": "Transcrie trei replici dintr-un dialog și subliniază: verbul de declarație, linia de dialog, semnul de punctuație care marchează intonația."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 160-161): De-a lungul unui text dominant narativ pot apărea și alte tipuri de "
        "secvențe. Narativă: derularea unor întâmplări în ordine logică și temporală, cu narator și relatare "
        "la persoana I sau a III-a. Descriptivă: trăsături ale unor persoane, obiecte, peisaje; grupuri "
        "nominale, verbe la prezent sau imperfect. Dialogată: reproduce cuvintele personajelor; verb de "
        "declarație, linie de dialog, punctuație a intonației. Explicativă: răspunde la „De ce?” sau „Cum?”; "
        "conectori ca mai întâi, apoi, în consecință, pentru că, deoarece; definire, exemplificare, comparare."))


def fisa_compunere_secvente(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Compunere narativă cu secvențe inserate", subtitlu, [
        {"t": "lines", "n": 1, "title": "Planul narațiunii", "weight": 3,
         "prompt": "Notează, în 4-5 rânduri: ce se întâmplă, unde și când, cine ia parte, ce declanșează acțiunea, cum se termină."},
        {"t": "lines", "n": 2, "title": "Unde inserezi secvențele", "weight": 3,
         "prompt": "Marchează în plan locul fiecăreia: Ce descrii? Cine dialoghează și despre ce? Cine oferă explicația și la ce se referă?"},
        {"t": "lines", "n": 3, "title": "Ciorna", "weight": 5,
         "prompt": "Scrie prima variantă a compunerii (12-15 rânduri), cu o secvență descriptivă, una dialogată și una explicativă."},
    ], [
        {"t": "table", "n": 4, "title": "Verificare", "rows": 5, "row_h": 26,
         "cols": ["Criteriu", "Da / Nu"], "widths": [400, 110],
         "data": [["Respectă structura narativă (situație inițială, declanșator, relatare, deznodământ)", ""],
                  ["Are o secvență descriptivă despre cadru, personaje sau obiecte", ""],
                  ["Are o secvență dialogată între două sau mai multe personaje", ""],
                  ["Are o secvență explicativă convingătoare", ""],
                  ["Părțile se leagă armonios, iar titlul stârnește interesul", ""]]},
        {"t": "lines", "n": 5, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie compunerea în formă finală, cu titlu, legături clare între secvențe și normele de redactare respectate."},
    ], sursa)


# ---------- Unitatea V ----------

def fisa_personaj_dramatic(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Personajul dramatic", subtitlu, [
        {"t": "table", "n": 1, "title": "Fișă de identitate a unui personaj", "rows": 5, "row_h": 30,
         "cols": ["Rubrica", "Ce am aflat din text"], "widths": [200, 310],
         "data": [["Nume, vârstă, ocupație", ""], ["Ce spune despre sine", ""],
                  ["Ce spun alte personaje / indicațiile autorului", ""],
                  ["Cum se poartă, ce face", ""], ["O replică relevantă", ""]]},
        {"t": "lines", "n": 2, "title": "Direct sau indirect", "weight": 3,
         "prompt": "Alege o trăsătură a personajului. E dată direct (spusă de narator, de alt personaj, de el însuși) sau se deduce indirect (din fapte, limbaj, relații)? Susține cu un exemplu."},
        {"t": "lines", "n": 3, "title": "Dubla natură", "weight": 3,
         "prompt": "Personajul dramatic e o ființă ficțională căreia i se alătură o ființă reală, actorul. Dacă ai juca tu rolul, ce ton, ce gesturi, ce ținută ai alege? De ce?"},
        {"t": "lines", "n": 4, "title": "Cine mai lucrează la spectacol", "weight": 2,
         "prompt": "Numește trei persoane, în afară de actor, care contribuie la aducerea personajului pe scenă și spune cu ce anume (regizor, scenograf, costumier, machieur, coregraf, tehnician de lumini sau de sunet)."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 173-174): Personajul dramatic seamănă cu personajul dintr-un text narativ, "
        "fiind rodul imaginației autorului, dar are o dublă natură: ființei ficționale i se alătură o ființă "
        "reală, actorul. Personajele comunică prin dialog și monolog. Sunt construite direct (lista "
        "personajelor, indicațiile scenice, intervenția altor personaje) și indirect (din comportament, "
        "gesturi, limbaj, relații)."))


def fisa_dialog_dramatic(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Rolul dialogului în textul dramatic", subtitlu, [
        {"t": "table", "n": 1, "title": "Tipuri de replici", "rows": 4, "row_h": 32,
         "cols": ["Schimbul de replici (transcris din text)", "Ce face a doua replică (răspuns, confirmare, completare, continuare)"],
         "widths": [255, 255]},
        {"t": "lines", "n": 2, "title": "Ce aflăm din dialog", "weight": 3,
         "prompt": "Alege un fragment de dialog și arată ce transmite despre eveniment, despre timp sau despre spațiu și ce trăsătură a unui personaj se desprinde din felul lui de a vorbi."},
        {"t": "lines", "n": 3, "title": "Dialog și didascalii", "weight": 3,
         "prompt": "Ia o replică însoțită de o indicație a autorului. Cum se schimbă înțelesul replicii dacă citești și indicația? Ce s-ar pierde fără ea?"},
        {"t": "lines", "n": 4, "title": "Monolog sau adresare către public", "weight": 3,
         "prompt": "Găsește în text un monolog dramatic sau o replică adresată direct spectatorilor. Ce rol are în scenă?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 175-176): Dialogul este modalitatea predominantă de comunicare în textul "
        "dramatic și constă în schimbul de replici între două sau mai multe personaje. El conturează "
        "evenimentele, timpul și spațiul și e un mijloc de caracterizare. Contează atât informațiile din "
        "dialog, cât și cele din didascalii. Monologul dramatic e o intervenție amplă a unui personaj, în "
        "absența sau în prezența altuia, care nu își folosește dreptul la replică."))


def fisa_interviu(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Interviul", subtitlu, [
        {"t": "table", "n": 1, "title": "Deschisă sau închisă", "rows": 5, "row_h": 28,
         "cols": ["Întrebarea", "Deschisă / închisă", "Cum aș reformula-o ca să fie deschisă"],
         "widths": [200, 110, 200],
         "data": [["Ți-a plăcut spectacolul?", "", ""], ["Ce te-a impresionat la spectacol?", "", ""],
                  ["Ai citit multe cărți în copilărie?", "", ""], ["Cum a fost pentru tine copilăria la Rădăuți?", "", ""],
                  ["Vei mai scrie piese pentru copii?", "", ""]]},
        {"t": "lines", "n": 2, "title": "Etapele interviului", "weight": 3,
         "prompt": "Pune în ordine și explică pe scurt: transcrierea, alegerea temei și a persoanei, realizarea interviului, pregătirea întrebărilor pe baza unei documentări."},
        {"t": "lines", "n": 3, "title": "Pregătește un interviu", "weight": 4,
         "prompt": "Alege o persoană pe care ai vrea să o intervievezi. Scrie tema, apoi patru întrebări deschise, așezate într-o ordine logică."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 178-180): Interviul este un text nonliterar, jurnalistic, de tip informativ, "
        "construit ca dialog scris sau oral între un reporter și o persoană, pe o temă de interes public sau "
        "personal. Baza interviului este întrebarea: calitatea răspunsurilor depinde de calitatea "
        "întrebărilor. Întrebările deschise lasă intervievatul să își exprime punctul de vedere; cele închise "
        "permit doar „da” sau „nu”. Se recomandă întrebările deschise."))


def fisa_feedback_proiect(out, subtitlu, nume, criterii, sursa):
    sheet(out, f"Grilă de evaluare între grupe — {nume}", subtitlu, [
        {"t": "table", "n": 1, "title": "Grila (o completezi pentru grupa evaluată)", "rows": len(criterii),
         "cols": ["Criteriu", "Punctaj maxim", "Obținut"], "widths": [300, 110, 100],
         "data": [[c, p, ""] for c, p in criterii]},
        {"t": "lines", "n": 2, "title": "Feedback pe care îl oferim", "weight": 3,
         "prompt": "Scrieți grupei evaluate două lucruri reușite și o sugestie concretă de îmbunătățire. Formulați respectuos, la persoana a II-a plural."},
        {"t": "lines", "n": 3, "title": "Feedback pe care îl primim", "weight": 3,
         "prompt": "Notați două observații primite de la celelalte grupe. Sunteți de acord cu ele? Ce ați schimba la o reluare a spectacolului?"},
        {"t": "lines", "n": 4, "title": "Cum am lucrat în echipă", "weight": 3,
         "prompt": "Autoevaluare: fiecare membru scrie de ce a răspuns în proiect și cât de bine s-a descurcat grupa cu împărțirea sarcinilor."},
    ], sursa)


def fisa_tipare_textuale(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Tipare textuale de structurare a ideilor", subtitlu, [
        {"t": "table", "n": 1, "title": "Recunoaște tiparul", "rows": 4, "row_h": 34,
         "cols": ["Fragmentul (dintr-un text la alegere)", "Persuasiv / informativ / procedural / descriptiv", "Un indiciu din text"],
         "widths": [240, 140, 130]},
        {"t": "lines", "n": 2, "title": "Mărcile fiecărui tipar", "weight": 3,
         "prompt": "Notează câte un indiciu de limbaj pentru fiecare: persuasiv, informativ, procedural, descriptiv (semne de punctuație, timpuri verbale, tipuri de cuvinte)."},
        {"t": "lines", "n": 3, "title": "Scrii tu", "weight": 4,
         "prompt": "Alege un subiect legat de teatru și scrie despre el în două feluri: 4-5 rânduri de text informativ și 4-5 rânduri de text persuasiv. Marchează ce mijloace ai folosit la fiecare."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 194-195): După scopul comunicării, există patru tipare textuale. Persuasiv: "
        "argumente emoționale, repetarea unor cuvinte-cheie, majuscule, semne de exclamare, întrebări "
        "retorice. Informativ: realități observabile și măsurabile, prezentul indicativ, numerale, substantive "
        "proprii. Procedural: cum trebuie acționat; verbe ca trebuie, nu trebuie, imperativ sau prezent "
        "indicativ, uneori desene sau diagrame. Descriptiv: substantive pentru obiecte sau ființe și "
        "adjective pentru trăsături."))


def fisa_cerere(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Cererea", subtitlu, [
        {"t": "table", "n": 1, "title": "Componentele cererii", "rows": 4, "row_h": 34,
         "cols": ["Componenta", "Ce conține"], "widths": [170, 340],
         "data": [["Adresarea", "funcția persoanei căreia îi scrii; centrat, sus, cu spațiu pentru rezoluție"],
                  ["Cuprinsul, paragraful 1", "„Subsemnatul, prenume + nume, ...”, statutul, datele de identificare, ce soliciți"],
                  ["Cuprinsul, paragraful 2", "motivația cererii"],
                  ["Sub text", "data (stânga) și semnătura (dreapta), pe același rând; jos-stânga, destinatarul cu funcția"]]},
        {"t": "lines", "n": 2, "title": "Ciorna", "weight": 5,
         "prompt": "Scrie o cerere către directorul școlii prin care soliciți eliberarea unei adeverințe de elev, de care ai nevoie ca să te înscrii într-un club de teatru. Respectă cele patru componente."},
    ], [
        {"t": "table", "n": 3, "title": "Verificare", "rows": 5, "row_h": 26,
         "cols": ["Criteriu", "Da / Nu"], "widths": [400, 110],
         "data": [["Adresarea numește funcția destinatarului și e centrată", ""],
                  ["Primul paragraf are formula „Subsemnatul, ...” și scopul clar", ""],
                  ["Al doilea paragraf motivează cererea", ""],
                  ["Data și semnătura sunt pe același rând, sub text", ""],
                  ["Destinatarul e indicat jos-stânga, cu funcția", ""]]},
        {"t": "lines", "n": 4, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie cererea în formă finală, cu așezarea în pagină corectă și fără greșeli de ortografie sau de punctuație."},
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

    # ---------- Unitatea III ----------
    fisa_text_liric("unitatea-3/lectia-2/fisa.pdf",
                    "Unitatea III, Lecția 2 · Lacul de Mihai Eminescu", "Art 7, pp. 90-91")
    fisa_semnificatii("unitatea-3/lectia-4/fisa.pdf",
                      "Unitatea III, Lecția 4 · Lacul de Mihai Eminescu",
                      "De ce crezi că iubitei nu i se face un portret în poezie?",
                      "Art 7, p. 93")
    fisa_semnificatii("unitatea-3/lectia-7/fisa.pdf",
                      "Unitatea III, Lecția 7 · Am legat... de Marin Sorescu",
                      "Ce înseamnă, în poezie, „a lega” un lucru de altul? E o legătură reală sau imaginată?",
                      "Art 7, p. 99")
    fisa_text_auxiliar("unitatea-3/lectia-8/fisa.pdf", "Unitatea III, Lecția 8",
                       "Iarna de Mircea Cărtărescu",
                       "poeziile de bază ale unității (Lacul de Mihai Eminescu, Am legat... de Marin Sorescu)",
                       "Art 7, „Noi pagini, alte idei”, pp. 100-101")
    fisa_descriptiv_1("unitatea-3/lectia-12/fisa.pdf",
                      "Unitatea III, Lecția 12 (manual, partea 1/2)", "Art 7, pp. 106-107")
    fisa_descriere_pregatire("unitatea-3/lectia-19/fisa.pdf",
                             "Unitatea III, Lecția 19 (manual, partea 1/2)", "Art 7, p. 118")
    fisa_descriere_redactare("unitatea-3/lectia-20/fisa.pdf",
                             "Unitatea III, Lecția 20 (manual, partea 2/2)", "Art 7, p. 118")
    fisa_comentare_pasaje("unitatea-3/lectia-21/fisa.pdf",
                          "Unitatea III, Lecția 21 (manual, partea 1/2)", "Art 7, p. 119")
    fisa_descriere_emotie("unitatea-3/lectia-22/fisa.pdf",
                          "Unitatea III, Lecția 22 (manual, partea 2/2)", "Art 7, p. 119")

    # ---------- Unitatea IV ----------
    fisa_spatiu_timp_actiune("unitatea-4/lectia-2/fisa.pdf",
                             "Unitatea IV, Lecția 2 · Două loturi de I.L. Caragiale", "Art 7, pp. 130-131")
    fisa_narator_personaje("unitatea-4/lectia-3/fisa.pdf",
                           "Unitatea IV, Lecția 3 · Două loturi de I.L. Caragiale", "Art 7, pp. 132-134")
    fisa_semnificatii("unitatea-4/lectia-4/fisa.pdf",
                      "Unitatea IV, Lecția 4 · Două loturi de I.L. Caragiale",
                      "Crezi că Lefter Popescu e mânat de bani sau de altceva, atunci când caută frenetic biletele?",
                      "Art 7, p. 135")
    fisa_colectare_surse("unitatea-4/lectia-5/fisa.pdf",
                         "Unitatea IV, Lecția 5 · Textul multimodal. Enciclopedia (partea 1/2)", "Art 7, pp. 136-139")
    fisa_text_auxiliar("unitatea-4/lectia-7/fisa.pdf", "Unitatea IV, Lecția 7",
                       "Cerșetorul și regele (poveste populară indiană)",
                       "textul de bază al unității (Două loturi de I.L. Caragiale)",
                       "Art 7, „Noi pagini, alte idei”, pp. 140-141")
    fisa_secvente_recunoastere("unitatea-4/lectia-20/fisa.pdf",
                               "Unitatea IV, Lecția 20 (manual, partea 1/2)", "Art 7, pp. 160-161")
    fisa_compunere_secvente("unitatea-4/lectia-21/fisa.pdf",
                            "Unitatea IV, Lecția 21 (manual, partea 2/2)", "Art 7, pp. 160-161")

    # ---------- Unitatea V ----------
    spectacol_criterii = [
        ("Viziunea regizorului a fost originală", "2p"),
        ("Replicile au fost rostite clar și auzite de public", "2p"),
        ("Indicațiile scenice au fost respectate de actori", "2p"),
        ("Decorul, luminile și efectele sonore au urmat indicațiile autorului", "2p"),
        ("Interpretarea actorilor a fost nuanțată și convingătoare", "1p"),
        ("Afișul a fost relevant pentru spectacol", "1p"),
    ]
    fisa_proiect_cerinte(
        "unitatea-5/lectia-1/fisa.pdf", "Unitatea V, Lecția 1 · Proiect de grup",
        "De la text la spectacol",
        "În trei grupe, realizați o punere în scenă a textului dramatic Vrem să vă dăruim câte o fereastră de Matei Vișniec.",
        ["Rolurile în grupă: regizor, asistent de regie, trei actori (Radu, Doinița, Eliza), doi scenografi, unul-doi tehnicieni de lumină și de sunet",
         "Jurnalul proiectului, ținut de asistentul de regie (întâlniri, repetiții, cum lucrează echipa)",
         "Un afiș al spectacolului",
         "Repetiții pe scenă, apoi cu decor, recuzită, costume, lumini și sunet",
         "O melodie pentru versurile din finalul piesei"],
        "Timp de realizare: trei săptămâni, cu premieră la final.",
        spectacol_criterii,
        "Art 7, Proiect de grup, p. 183 (anunțare)")
    fisa_personaj_dramatic("unitatea-5/lectia-4/fisa.pdf",
                           "Unitatea V, Lecția 4 · Vrem să vă dăruim câte o fereastră de Matei Vișniec", "Art 7, pp. 173-174")
    fisa_dialog_dramatic("unitatea-5/lectia-5/fisa.pdf",
                         "Unitatea V, Lecția 5 · Vrem să vă dăruim câte o fereastră de Matei Vișniec", "Art 7, pp. 175-176")
    fisa_semnificatii("unitatea-5/lectia-6/fisa.pdf",
                      "Unitatea V, Lecția 6 · Vrem să vă dăruim câte o fereastră de Matei Vișniec",
                      "Ce înseamnă, în text, că prin cărți se deschid „ferestre”? E o metaforă a lecturii sau ceva mai mult?",
                      "Art 7, p. 177")
    fisa_interviu("unitatea-5/lectia-7/fisa.pdf",
                  "Unitatea V, Lecția 7 (manual, partea 1/2) · Interviu cu Matei Vișniec", "Art 7, pp. 178-180")
    fisa_text_auxiliar("unitatea-5/lectia-9/fisa.pdf", "Unitatea V, Lecția 9",
                       "Visul unei nopți de vară de William Shakespeare (fragment)",
                       "textul de bază al unității (Vrem să vă dăruim câte o fereastră de Matei Vișniec)",
                       "Art 7, „Noi pagini, alte idei”, pp. 181-182")
    fisa_proiect_grila("unitatea-5/lectia-10/fisa.pdf", "Unitatea V, Lecția 10 · Proiect de grup (prezentare)",
                       "De la text la spectacol", spectacol_criterii,
                       "Art 7, Proiect de grup, p. 183")
    fisa_feedback_proiect("unitatea-5/lectia-11/fisa.pdf", "Unitatea V, Lecția 11 · Proiect de grup (evaluare)",
                          "De la text la spectacol", spectacol_criterii,
                          "Art 7, Proiect de grup, p. 183")
    fisa_tipare_textuale("unitatea-5/lectia-17/fisa.pdf",
                         "Unitatea V, Lecția 17 (manual, partea 1/2)", "Art 7, pp. 194-195")
    fisa_cerere("unitatea-5/lectia-18/fisa.pdf",
                "Unitatea V, Lecția 18 (manual, partea 2/2)", "Art 7, pp. 194-195")

    print("\nFise clasa a VII-a: U1 (6) + U2 (12) + U3 (9) + U4 (7) + U5 (10) = 44")
