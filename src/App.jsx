import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import Horarios from './pages/Horarios'
import Carta from './pages/Carta'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="menu">
          <ul>
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink></li>
            <li><NavLink to="/horarios" className={({isActive}) => isActive ? 'active' : ''}>Horarios</NavLink></li>
            <li><NavLink to="/carta" className={({isActive}) => isActive ? 'active' : ''}>Carta</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/carta" element={<Carta />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App