import '../estilos/Boton.css';


import { citas } from '../arregloCitas.jsx';

export const Boton = ({setNumero}) => {
    
    
    const numeroAleatorio = () => {
        const indiceAleatorio = Math.floor(Math.random () * citas.length);
        setNumero(indiceAleatorio);
        return indiceAleatorio;
    }

    
    return (
        <button id="boton" onClick={numeroAleatorio}>Cambiar Cita</button>
    )
}