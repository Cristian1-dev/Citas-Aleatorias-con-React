import { Titulo } from './componentes/Titulo.jsx'
import { Cita } from './componentes/Cita.jsx'

import './App.css'

function App() {
  let titulo = 'Citas Motivacionales';

  return (
    <div className="contenedor">
      {/* Lllamo a los componentes Titulo, Cita */}
      <Titulo titulo={titulo} />
      <Cita />
    </div>
  )
}

export default App
