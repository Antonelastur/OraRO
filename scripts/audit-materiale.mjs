// Registrul de stare al materialelor, generat din cod. Înlocuiește listele
// scrise de mână `src/data/clasa-*/materiale-restante.md`, care rămâneau în
// urma codului. Rulează:
//   npm run audit:materiale
// Citește datele din src/data/clase.js, verifică fiecare fișier referit în
// public/materiale și scrie docs/stare-materiale.md. Nu modifică datele.
// Iese cu cod 1 dacă o lecție trimite la un fișier care nu există.
//
// „Cu material" înseamnă doar că există un fișier sau un quiz legat de lecție.
// Scriptul nu verifică corectitudinea, sursa din manual sau aspectul.
import { existsSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const radacina = fileURLToPath(new URL('..', import.meta.url))
const publicDir = join(radacina, 'public')
const iesire = join(radacina, 'docs', 'stare-materiale.md')

const { clase } = await import(pathToFileURL(join(radacina, 'src', 'data', 'clase.js')).href)

const TIPURI = ['prezentare', 'video', 'test', 'fisa', 'joc', 'infografic', 'schema']
const ETICHETE = {
  prezentare: 'Prezentare', video: 'Video', test: 'Test', fisa: 'Fișă',
  joc: 'Joc sau quiz', infografic: 'Infografic', schema: 'Schemă',
}

const referite = new Set()
const lipsa = []

function verificaFisier(cale, context) {
  if (!cale || /^https?:/.test(cale)) return
  const rel = cale.replace(/^\/(OraRO\/)?/, '')
  referite.add(rel)
  if (!existsSync(join(publicDir, rel))) lipsa.push(`${context}: ${cale}`)
}

// Toate căile de fișier dintr-un material, indiferent de tip.
function fisiereMaterial(tip, m) {
  if (tip === 'fisa') return [m.fisier, m.exercitii]
  if (tip === 'test') return [m.fisierPrintabil, m.rubrica]
  if (tip === 'joc') return m.pasi ? [] : [m.fisier]
  if (tip === 'video') return []
  return [m.fisier]
}

function areMaterial(m) {
  return TIPURI.some((t) => m[t]) || (m.altele?.length ?? 0) > 0
}

const sectiuni = []
const sumar = []
let quizuri = 0
let pasiQuiz = 0
const pasiFaraSursa = []
const pasiGresiti = []

for (const [clasaId, clasa] of Object.entries(clase)) {
  const randuri = []
  const faraMaterial = []
  const total = { lectii: 0, cuMaterial: 0, ...Object.fromEntries(TIPURI.map((t) => [t, 0])) }

  for (const unitate of clasa.unitati) {
    const u = { lectii: 0, cuMaterial: 0, ...Object.fromEntries(TIPURI.map((t) => [t, 0])) }
    for (const lectie of unitate.lectii) {
      const m = lectie.materiale ?? {}
      const context = `${clasaId}/${unitate.id}/${lectie.id}`
      u.lectii++
      if (areMaterial(m)) u.cuMaterial++
      else faraMaterial.push({ unitate: unitate.titlu, lectie, context })

      for (const tip of TIPURI) {
        if (!m[tip]) continue
        u[tip]++
        for (const f of fisiereMaterial(tip, m[tip])) verificaFisier(f, `${context} ${tip}`)
      }
      for (const a of m.altele ?? []) verificaFisier(a?.fisier, `${context} altele`)

      if (m.joc?.pasi) {
        quizuri++
        m.joc.pasi.forEach((pas, i) => {
          pasiQuiz++
          if (!pas.sursa?.trim()) pasiFaraSursa.push(`${context}, pasul ${i + 1}`)
          const corecte = (pas.variante ?? []).filter((v) => v.corect).length
          if ((pas.variante ?? []).length < 2 || corecte !== 1) pasiGresiti.push(`${context}, pasul ${i + 1}`)
        })
      }
    }
    for (const k of Object.keys(total)) total[k] += u[k]
    randuri.push(`| ${unitate.titlu} | ${u.lectii} | ${u.cuMaterial} | ${TIPURI.map((t) => u[t]).join(' | ')} |`)
  }

  randuri.push(`| **Total** | **${total.lectii}** | **${total.cuMaterial}** | ${TIPURI.map((t) => `**${total[t]}**`).join(' | ')} |`)
  sumar.push(`| ${clasa.titlu} | ${total.lectii} | ${total.cuMaterial} | ${total.lectii - total.cuMaterial} | ${total.prezentare} | ${total.test} | ${total.video} |`)

  const lista = faraMaterial.length
    ? faraMaterial.map(({ unitate, lectie, context }) =>
      `- \`${context}\`, ${unitate}: ${lectie.titlu}${lectie.planLectie?.tipOra ? ` (${lectie.planLectie.tipOra})` : ''}`).join('\n')
    : 'Niciuna.'

  sectiuni.push(`## ${clasa.titlu}

| Unitate | Lecții | Cu material | ${TIPURI.map((t) => ETICHETE[t]).join(' | ')} |
|---|---|---|${TIPURI.map(() => '---').join('|')}|
${randuri.join('\n')}

### Lecții fără niciun material

${lista}`)
}

const toate = []
;(function parcurge(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) parcurge(p)
    else toate.push(relative(publicDir, p).split('\\').join('/'))
  }
})(join(publicDir, 'materiale'))
const nereferite = toate.filter((f) => !referite.has(f)).sort()

const lista = (xs, gol) => (xs.length ? xs.map((x) => `- \`${x}\``).join('\n') : gol)

const md = `# Starea materialelor OraRO

Fișier generat de \`npm run audit:materiale\` (\`scripts/audit-materiale.mjs\`).
Nu îl edita de mână, rulează din nou scriptul după orice schimbare în
\`src/data/\` sau în \`public/materiale/\`.

**Ce înseamnă „cu material".** Lecția are cel puțin un fișier sau un quiz legat
în date, iar fișierul există. Nu înseamnă că materialul e verificat curricular,
corect sau finalizat. Scriptul nu deschide fișierele și nu compară nimic cu
manualul.

## Sumar

| Clasa | Lecții | Cu material | Fără material | Prezentări | Teste | Video |
|---|---|---|---|---|---|---|
${sumar.join('\n')}

${sectiuni.join('\n\n')}

## Verificări tehnice

- Fișiere referite care lipsesc din \`public/\`: ${lipsa.length}
- Fișiere din \`public/materiale/\`: ${toate.length}, dintre care nereferite: ${nereferite.length}
- Quizuri: ${quizuri}, cu ${pasiQuiz} întrebări; fără sursă: ${pasiFaraSursa.length}; cu mai puțin de două variante sau fără exact un răspuns corect: ${pasiGresiti.length}

### Fișiere referite care lipsesc

${lista(lipsa, 'Niciunul.')}

### Fișiere nereferite

${lista(nereferite, 'Niciunul.')}

### Întrebări de quiz fără sursă

${lista(pasiFaraSursa, 'Niciuna.')}

### Întrebări de quiz cu variante greșit construite

${lista(pasiGresiti, 'Niciuna.')}
`

writeFileSync(iesire, md)
console.log(`Scris ${relative(radacina, iesire)}`)
console.log(sumar.join('\n'))
console.log(`Referințe lipsă: ${lipsa.length}; fișiere nereferite: ${nereferite.length}`)
if (lipsa.length) process.exit(1)
