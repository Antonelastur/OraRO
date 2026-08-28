// Injectează câmpul planLectie într-un fișier de date OraRO, lecție cu lecție.
// Nu atinge nimic altceva: comentarii, formatare, materiale, quizuri rămân
// exact cum sunt. Rulează:
//   node scripts/inject-plan-lectie.mjs <fisier-date> <fisier-planuri>
// unde <fisier-planuri> exportă implicit un obiect { 'lectia-1': {...}, ... }
// cu forma tipului PlanLectie din src/types.ts.
import { readFileSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const [, , targetPath, plansPath] = process.argv
if (!targetPath || !plansPath) {
  console.error('Utilizare: node scripts/inject-plan-lectie.mjs <fisier-date> <fisier-planuri>')
  process.exit(1)
}

const plans = (await import(pathToFileURL(plansPath).href)).default

// Serializare în stilul casei: ghilimele simple, chei fără ghilimele,
// indentare cu doi spații, virgulă după fiecare element, inclusiv ultimul.
function ser(v, indent) {
  const pad = ' '.repeat(indent)
  const pad2 = ' '.repeat(indent + 2)
  if (v === null) return 'null'
  if (typeof v === 'number' || typeof v === 'boolean') return String(v)
  if (typeof v === 'string') return `'${v.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]'
    return `[\n${v.map((x) => pad2 + ser(x, indent + 2)).join(',\n')},\n${pad}]`
  }
  const keys = Object.keys(v)
  if (keys.length === 0) return '{}'
  return `{\n${keys.map((k) => `${pad2}${k}: ${ser(v[k], indent + 2)}`).join(',\n')},\n${pad}}`
}

let src = readFileSync(targetPath, 'utf8')
const ids = Object.keys(plans)
let injected = 0
const sari = []

for (const id of ids) {
  const marker = `id: '${id}',`
  const start = src.indexOf(marker)
  if (start === -1) { sari.push(`${id}: lipsește din fișier`); continue }
  // Sfârșitul blocului lecției: următorul `id: 'lectia` sau finalul fișierului.
  const nextId = src.indexOf("id: 'lectia", start + marker.length)
  const end = nextId === -1 ? src.length : nextId
  const block = src.slice(start, end)
  const rePlan = /( *)planLectie: null,/
  if (!rePlan.test(block)) { sari.push(`${id}: planLectie nu e null sau lipsește`); continue }
  const nouBlock = block.replace(rePlan, (m, pad) => `${pad}planLectie: ${ser(plans[id], pad.length)},`)
  src = src.slice(0, start) + nouBlock + src.slice(end)
  injected++
}

writeFileSync(targetPath, src)
console.log(`${targetPath}: ${injected}/${ids.length} planuri injectate`)
if (sari.length) console.log('Sărite:\n  ' + sari.join('\n  '))
