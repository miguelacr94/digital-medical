import Card_Testimonio from './card-testimonio/card-testimonio';
import './testimonios.css';
const Testimonio  =  ()  => {
    return (

        <div className = "contenedor" id = "testimonials-section">
            <div className = "contenedorx100">
                <div className = "flooter-testimonio">
                    <div className = " item-40">
                        <p className = "emcabezado">TESTIMONIOS</p>
                        <br></br>
                        <p className = "titulo text-gris">Lo que nuestros clientes dicen</p>
                    </div>
                    <div className = "item-60">
                       <Card_Testimonio></Card_Testimonio>
                    </div>
                </div>
            </div>


        </div>


    );
}

export default Testimonio;