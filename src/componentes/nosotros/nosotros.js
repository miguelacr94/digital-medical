import './nosotros.css';
import { Button } from '../boton';
const Nosotros  =  ()  => {
  return (
    
  
    <div className = "contenedor" >
      <div className = "span1 cuadros"></div>
      <div className = "contenedorx80 top">
      <p className = "emcabezado" id = 'nosotros-selection'>Nosotros</p>
      <br></br>
      <p className = "titulo text-azul">Contamos con más de 10 años de experiencia</p>
      <br></br>
      <p className = "informacion text-gris-os">La salud y el bienestar de todos nuestros pacientes es nuestra prioridad, siempre mantenemos los estándares de seguridad y salubridad por el bienestar de nuestros pacientes.</p>
      <div className = 'hero-btns'>
        <Button
          className = 'btns'
          buttonStyle = 'btn--primary'
          buttonSize = 'btn--large'
          onClick = {console.log('hey')}
        >
       CONOCE MAS DE NOSOTROS
        </Button>
      </div>

      </div>
     
 
    </div>


  );
}

export default Nosotros;