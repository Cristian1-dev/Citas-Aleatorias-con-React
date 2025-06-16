import { Titulo } from './componentes/Titulo.jsx'
import { Cita } from './componentes/Cita.jsx'
import { citas } from './arregloCitas.jsx';
import './App.css'

function App() {
  let titulo = 'Citas Motivacionales';



  return (
    <div className="contenedor">
      <Titulo titulo={titulo} />
      <Cita />
    </div>
  )
}

export default App
