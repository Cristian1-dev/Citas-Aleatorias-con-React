import '../estilos/Cita.css';
import { citas } from '../arregloCitas.jsx';
import { useState } from 'react';
import { Boton } from "./Boton.jsx";


export const Cita = () => {  
    const [numero, setNumero] = useState(Math.floor(Math.random () * citas.length));


    return (
        <div className="contenido-centrado contenedor-interno">
            <p id="cita">{citas[numero].texto}</p>
            <p id="autor">{citas[numero].autor}</p>
            <Boton setNumero ={setNumero} />
        </div>
    )

}