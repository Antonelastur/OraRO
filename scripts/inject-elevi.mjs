// Injectează în planul unei lecții textul adresat elevilor (`elevi`) și materialele
// legate de pași (`materiale`), etapă cu etapă. Nu atinge nimic altceva.
//   node scripts/inject-elevi.mjs <fisier-date> <fisier-json>
// <fisier-json> are forma { "lectia-1": [ { etapa, elevi?, materiale? } | null, ... ] },
// câte un element pentru fiecare etapă, în ordine. `etapa` trebuie să fie titlul
// etapei din date (verificare); null lasă etapa neatinsă. Un `elevi` sau `materiale`
// existent la etapă se rescrie; un câmp lipsă din lot lasă neatins ce există.
//
// Lotul poate fi și un obiect cu indicii etapelor drept chei: { "lectia-8": { "3": { k, elevi, activitate,
// joc } } }, unde `k` e o parte din titlul etapei (verificare). Pe lângă `elevi` și `materiale`, o etapă
// poate primi `activitate` (vocea profesoarei, rescrisă) și `joc` (jocul interactiv de pe tablă, obiect).
import { readFileSync, writeFileSync } from 'node:fs'

const [, , targetPath, jsonPath] = process.argv
if (!targetPath || !jsonPath) {
  console.error('Utilizare: node scripts/inject-elevi.mjs <fisier-date> <fisier-json>')
  process.exit(1)
}

const lot = JSON.parse(readFileSync(jsonPath, 'utf8'))
const lit = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`
// Serializare în stilul casei: ghilimele simple, chei fără ghilimele, indentare cu doi spații.
function ser(v, indent) {
  const pad = ' '.repeat(indent)
  const pad2 = ' '.repeat(indent + 2)
  if (v === null) return 'null'
  if (typeof v === 'number' || typeof v === 'boolean') return String(v)
  if (typeof v === 'string') return lit(v)
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]'
    return `[\n${v.map((x) => pad2 + ser(x, indent + 2)).join(',\n')},\n${pad}]`
  }
  const keys = Object.keys(v)
  return `{\n${keys.map((k) => `${pad2}${k}: ${ser(v[k], indent + 2)}`).join(',\n')},\n${pad}}`
}

const TIPURI = ['prezentare', 'video', 'fisa', 'joc', 'infografic', 'schema']

let linii = readFileSync(targetPath, 'utf8').split('\n')
let lectii = 0
let etape = 0

for (const [id, pasiLot] of Object.entries(lot)) {
  const start = linii.findIndex((l) => l === `      id: '${id}',`)
  if (start < 0) throw new Error(`Nu găsesc ${id} în ${targetPath}`)
  const des = linii.findIndex((l, i) => i > start && l === '        desfasurare: [')
  const sfarsit = linii.findIndex((l, i) => i > des && l === '        ],')
  if (des < 0 || sfarsit < 0) throw new Error(`${id}: nu găsesc desfășurarea`)

  // Etapele, ca intervale de linii: de la `{` (indent 10) la `},` (indent 10).
  const intervale = []
  for (let i = des + 1; i < sfarsit; i++) {
    if (linii[i] === '          {') {
      const j = linii.findIndex((l, k) => k > i && l === '          },')
      intervale.push([i, j])
      i = j
    }
  }
  // Lotul e o listă (câte un element pe etapă) sau un obiect cu indicii etapelor drept chei.
  let pasi = pasiLot
  if (!Array.isArray(pasiLot)) {
    pasi = Array(intervale.length).fill(null)
    for (const [i, pas] of Object.entries(pasiLot)) {
      if (Number(i) >= intervale.length) throw new Error(`${id}: nu există etapa ${i}`)
      pasi[Number(i)] = pas
    }
  } else if (intervale.length !== pasiLot.length) {
    throw new Error(`${id}: ${intervale.length} etape în date, ${pasiLot.length} în lot`)
  }

  // De la ultima etapă spre prima, ca indicii rămași să nu se mute.
  for (let n = intervale.length - 1; n >= 0; n--) {
    const pas = pasi[n]
    if (!pas) continue
    const [a, b] = intervale[n]
    const titlu = linii.slice(a, b).find((l) => l.startsWith('            etapa: '))
    const cheie = pas.k ?? pas.etapa
    if (!titlu || !titlu.includes(cheie.includes("'") ? lit(cheie).slice(1, -1) : cheie)) {
      throw new Error(`${id}, etapa ${n + 1}: în date „${titlu?.trim()}", în lot „${cheie}"`)
    }
    const act = linii.findIndex((l, k) => k > a && k < b && l.startsWith('            activitate: '))
    if (act < 0) throw new Error(`${id}, etapa ${n + 1}: fără activitate`)

    // După `activitate` urmează doar proprietățile opționale: elevi, materiale, joc (joc pe mai multe linii).
    const existent = linii.slice(act + 1, b)
    const ia = (nume) => existent.findIndex((l) => l.startsWith(`            ${nume}: `))
    const linieUnica = (nume) => (ia(nume) >= 0 ? [existent[ia(nume)]] : [])
    const blocJoc = () => {
      const i = ia('joc')
      if (i < 0) return []
      const j = existent.findIndex((l, k) => k > i && l === '            },')
      return existent.slice(i, j + 1)
    }

    const noi = []
    if ('elevi' in pas) {
      if (pas.elevi) noi.push(`            elevi: ${lit(pas.elevi.trim())},`)
    } else noi.push(...linieUnica('elevi'))
    if ('materiale' in pas) {
      for (const t of pas.materiale) if (!TIPURI.includes(t)) throw new Error(`${id}, etapa ${n + 1}: material necunoscut „${t}"`)
      if (pas.materiale.length) noi.push(`            materiale: [${pas.materiale.map(lit).join(', ')}],`)
    } else noi.push(...linieUnica('materiale'))
    if ('joc' in pas) {
      if (pas.joc) noi.push(`            joc: ${ser(pas.joc, 12)},`)
    } else noi.push(...blocJoc())

    if ('activitate' in pas) linii[act] = `            activitate: ${lit(pas.activitate)},`
    linii.splice(act + 1, b - act - 1, ...noi)
    etape++
  }
  lectii++
}

writeFileSync(targetPath, linii.join('\n'))
console.log(`${lectii} lecții, ${etape} etape actualizate în ${targetPath}`)
