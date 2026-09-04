import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppShell from './components/AppShell.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import ClasePage from './pages/ClasePage.tsx'
import BibliotecaPage from './pages/BibliotecaPage.tsx'
import SetariPage from './pages/SetariPage.tsx'
import ClasaPage from './pages/ClasaPage.jsx'
import UnitatePage from './pages/UnitatePage.jsx'
import LectiePage from './pages/LectiePage.jsx'
import CockpitPage from './pages/CockpitPage.tsx'

function App() {
  return (
    <BrowserRouter basename="/OraRO">
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/clase" element={<ClasePage />} />
          <Route path="/biblioteca" element={<BibliotecaPage />} />
          <Route path="/setari" element={<SetariPage />} />
          <Route path="/:clasa" element={<ClasaPage />} />
          <Route path="/:clasa/:unitate" element={<UnitatePage />} />
          <Route path="/:clasa/:unitate/:lectie" element={<LectiePage />} />
        </Route>
        {/* Cockpitul stă în afara AppShell: fără sidebar, fără antet, se
            proiectează în clasă. */}
        <Route path="/:clasa/:unitate/:lectie/cockpit" element={<CockpitPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
