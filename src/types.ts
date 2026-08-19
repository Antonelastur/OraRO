export type MaterialFisier = { fisier: string }
export type MaterialVideo = { link: string }
export type NivelTest = { nivel: string; linkGoogleForms: string }
export type MaterialTest = {
  linkGoogleForms?: string | null
  niveluri?: NivelTest[]
  rubrica?: string | null
  fisierPrintabil?: string | null
}
export type MaterialImagine = { fisier: string; titlu?: string | null }
export type MaterialJocFisier = { titlu: string; fisier: string }
export type JocVarianta = { text: string; corect: boolean; explicatie: string }
export type JocPas = { intrebare: string; variante: JocVarianta[]; indiciu: string | null; sursa: string }
export type MaterialJocQuiz = { tip: 'quiz' | 'escape-room'; titlu: string; pasi: JocPas[] }
export type MaterialJoc = MaterialJocFisier | MaterialJocQuiz

export type Materiale = {
  prezentare: MaterialFisier | null
  video: MaterialVideo | null
  test: MaterialTest | null
  fisa: MaterialFisier | null
  joc: MaterialJoc | null
  infografic: MaterialImagine | null
  schema: MaterialImagine | null
  altele: unknown[]
}

export type EtapaLectie = { etapa: string; timp: string; activitate: string }

export type PlanLectie = {
  titlu: string
  data: string | null
  tipOra: string
  durata: number
  obiective: string[]
  resurse: string[]
  desfasurare: EtapaLectie[]
  evaluare: string
} | null

export type Lectie = {
  id: string
  titlu: string
  obiective: string[]
  sursaManual: string
  rezolvareGhid: string | null
  planLectie: PlanLectie
  materiale: Materiale
}

export type Unitate = {
  id: string
  titlu: string
  lectii: Lectie[]
}

export type Clasa = {
  titlu: string
  unitati: Unitate[]
}

export type Clase = Record<string, Clasa>

export type LectieCuContext = {
  clasaId: string
  clasaTitlu: string
  unitateId: string
  unitateTitlu: string
  lectie: Lectie
}
