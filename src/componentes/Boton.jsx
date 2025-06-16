import '../estilos/Boton.css';
import { citas } from '../arregloCitas.jsx';

// aqui recibo el parametro setNumero que envie desde Cita.jsx
export const Boton = ({setNumero}) => {    
    // funcion que devuelve un numero aleatorio entre 0 y la longitud del arreglo de citas
    const numeroAleatorio = () => {
        const indiceAleatorio = Math.floor(Math.random () * citas.length);
        // mando el numero aleatorio a Cita.jsx para que lo guarde en numero usando setNumero
        setNumero(indiceAleatorio);
        return indiceAleatorio;
    };    
    return (
        // al hacer click en el boton, se ejecuta la funcion numeroAleatorio y se guarda el resultado en numero
        // en Cita.jsx se muestra la cita correspondiente al numero aleatorio
        <button id="boton" onClick={numeroAleatorio}>Cambiar Cita</button>
    )
}