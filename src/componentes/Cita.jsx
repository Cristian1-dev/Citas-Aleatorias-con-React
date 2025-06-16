import '../estilos/Cita.css';
// Importo el arreglo de citas de arregloCitas.jsx
import { citas } from '../arregloCitas.jsx';
import { useState } from 'react';
import { Boton } from "./Boton.jsx";


export const Cita = () => {  

    const [numero, setNumero] = useState(Math.floor(Math.random () * citas.length)); //inicializo con numero aleatorio

    return (
        <div className="contenido-centrado contenedor-interno">
            <p id="cita">{citas[numero].texto}</p>
            <p id="autor">{citas[numero].autor}</p>
            {/* Mando como parametro el setNumero para luego recibir el resultado y guardarlo en numero */}
            <Boton setNumero ={setNumero} />
        </div>
    )

}