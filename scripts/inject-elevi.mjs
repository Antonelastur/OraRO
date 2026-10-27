// Injectează în planul unei lecții textul adresat elevilor (`elevi`) și materialele
// legate de pași (`materiale`), etapă cu etapă. Nu atinge nimic altceva.
//   node scripts/inject-elevi.mjs <fisier-date> <fisier-json>
// <fisier-json> are forma { "lectia-1": [ { etapa, elevi?, materiale? } | null, ... ] },
// câte un element pentru fiecare etapă, în ordine. `etapa` trebuie să fie titlul
// etapei din date (verificare); null lasă etapa neatinsă. Un `elevi` sau `materiale`
// existent la etapă se rescrie; un câmp lipsă din lot lasă neatins ce există.
import { readFileSync, writeFileSync } from 'node:fs'

const [, , targetPath, jsonPath] = process.argv
if (!targetPath || !jsonPath) {
  console.error('Utilizare: node scripts/inject-elevi.mjs <fisier-date> <fisier-json>')
  process.exit(1)
}

const lot = JSON.parse(readFileSync(jsonPath, 'utf8'))
const lit = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')}'`
const TIPURI = ['prezentare', 'video', 'fisa', 'joc', 'infografic', 'schema']

let linii = readFileSync(targetPath, 'utf8').split('\n')
let lectii = 0
let etape = 0

for (const [id, pasi] of Object.entries(lot)) {
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
  if (intervale.length !== pasi.length) {
    throw new Error(`${id}: ${intervale.length} etape în date, ${pasi.length} în lot`)
  }

  // De la ultima etapă spre prima, ca indicii rămași să nu se mute.
  for (let n = intervale.length - 1; n >= 0; n--) {
    const pas = pasi[n]
    if (!pas) continue
    const [a, b] = intervale[n]
    const titlu = linii.slice(a, b).find((l) => l.startsWith('            etapa: '))
    if (!titlu || !titlu.includes(lit(pas.etapa))) {
      throw new Error(`${id}, etapa ${n + 1}: în date „${titlu?.trim()}", în lot „${pas.etapa}"`)
    }
    const act = linii.findIndex((l, k) => k > a && k < b && l.startsWith('            activitate: '))
    if (act < 0) throw new Error(`${id}, etapa ${n + 1}: fără activitate`)
    // Doar ce e în lot se atinge: `elevi` lipsă păstrează textul existent, `elevi: ''` îl scoate.
    const noi = []
    const tine = (nume) => {
      // Păstrează linia existentă a proprietății, dacă lotul nu o schimbă.
      const gasita = linii.slice(act + 1, b).find((l) => l.startsWith(`            ${nume}: `))
      return gasita ? [gasita] : []
    }
    if ('elevi' in pas) {
      if (pas.elevi) noi.push(`            elevi: ${lit(pas.elevi.trim())},`)
    } else noi.push(...tine('elevi'))
    if ('materiale' in pas) {
      for (const t of pas.materiale) if (!TIPURI.includes(t)) throw new Error(`${id}, etapa ${n + 1}: material necunoscut „${t}"`)
      if (pas.materiale.length) noi.push(`            materiale: [${pas.materiale.map(lit).join(', ')}],`)
    } else noi.push(...tine('materiale'))
    // Scoate ce era deja după activitate (elevi, materiale), apoi pune ce e nou.
    let fin = act + 1
    while (fin < b && /^ {12}(elevi|materiale): /.test(linii[fin])) fin++
    linii.splice(act + 1, fin - act - 1, ...noi)
    etape++
  }
  lectii++
}

writeFileSync(targetPath, linii.join('\n'))
console.log(`${lectii} lecții, ${etape} etape actualizate în ${targetPath}`)
