import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { clase } from './data/clase.js'
import ClasaPage from './pages/ClasaPage.jsx'
import UnitatePage from './pages/UnitatePage.jsx'
import LectiePage from './pages/LectiePage.jsx'

function AcasaPage() {
  return (
    <section>
      <h1>OraRO</h1>
      <p>Curs online personal pentru limba și literatura română, gimnaziu.</p>
      <ul>
        {Object.entries(clase).map(([id, dateClasa]) => (
          <li key={id}>
            <Link to={`/${id}`}>{dateClasa.titlu}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AcasaPage />} />
        <Route path="/:clasa" element={<ClasaPage />} />
        <Route path="/:clasa/:unitate" element={<UnitatePage />} />
        <Route path="/:clasa/:unitate/:lectie" element={<LectiePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
