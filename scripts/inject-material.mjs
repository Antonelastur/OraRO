// Injectează un câmp din `materiale` într-un fișier de date OraRO, lecție cu
// lecție, fără să atingă restul fișierului. Varianta generală a lui
// inject-plan-lectie.mjs. Rulează:
//   node scripts/inject-material.mjs <fisier-date> <fisier-materiale>
// unde <fisier-materiale> exportă implicit un obiect de forma
//   { 'lectia-1': { joc: {...}, schema: {...} }, ... }
// Injectează doar câmpurile care sunt `null` în fișierul de date; pe cele deja
// completate le sare și le raportează, ca să nu suprascrie munca existentă.
import { readFileSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const [, , targetPath, materialsPath] = process.argv
if (!targetPath || !materialsPath) {
  console.error('Utilizare: node scripts/inject-material.mjs <fisier-date> <fisier-materiale>')
  process.exit(1)
}

const materiale = (await import(pathToFileURL(materialsPath).href)).default

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
let injectate = 0
const sarite = []

for (const [id, campuri] of Object.entries(materiale)) {
  const marker = `id: '${id}',`
  const start = src.indexOf(marker)
  if (start === -1) { sarite.push(`${id}: lipsește din fișier`); continue }
  const nextId = src.indexOf("id: 'lectia", start + marker.length)
  const end = nextId === -1 ? src.length : nextId
  let block = src.slice(start, end)

  for (const [camp, valoare] of Object.entries(campuri)) {
    const re = new RegExp(`( *)${camp}: null,`)
    if (!re.test(block)) { sarite.push(`${id}.${camp}: nu e null, nu suprascriu`); continue }
    block = block.replace(re, (m, pad) => `${pad}${camp}: ${ser(valoare, pad.length)},`)
    injectate++
  }

  src = src.slice(0, start) + block + src.slice(end)
}

writeFileSync(targetPath, src)
console.log(`${targetPath}: ${injectate} câmpuri injectate`)
if (sarite.length) console.log('Sărite:\n  ' + sarite.join('\n  '))
