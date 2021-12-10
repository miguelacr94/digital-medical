import Card_Medicos from './card-medicos/card-medico';
import './medicos.css';
const Medicos  =  ()  => {

    return (
        <div className = "contenedor">
            <p className = "emcabezado">NUESTROS MEDICOS</p>
            <br></br>
            <p className = "titulo text-azul">Contamos con más de 10 años de experiencia</p>
            <div className = "contenedorx80">
               <Card_Medicos></Card_Medicos>
                <p className = "titulo text-azul">Mejorando la calidad de tu vida a través de una mejor salud.</p>
                <hr></hr>
                <p className = "informacion text-gris-os">La salud y el bienestar de todos nuestros pacientes es nuestra prioridad, siempre mantenemos los estándares de seguridad y salubridad por el bienestar de nuestros pacientes.</p>
            </div>
        </div>
    );
}

export default Medicos;