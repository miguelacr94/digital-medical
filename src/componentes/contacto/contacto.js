import './contacto.css';

import Card_enlaces from './card-enlaces/card-enlaces';
import Card_otros_enlaces from './card-otros-enlaces/card-otros-enlaces';
import Card_list_servicios from './card-list-servicios/card-list-servicios';
import Card_informacion from './card-informacion/card-informacion';
import Contenedor_contacto_su from './contenedor-superior/contenedor-sup';
const Contacto = () => {
    return (
        <div className="contenedor" >
            <div className="contenedorx100">
                <div className="flooter">

                    <div className="contenedor-contacto-sup" id="contacto-selection">
                        <Contenedor_contacto_su></Contenedor_contacto_su>
                    </div>

                    <div className="contenedor-contacto text-gris">
                        <hr></hr>
                        <div className='item-contacto'>
                            <Card_informacion></Card_informacion>
                        </div>

                        <div className='item-contacto'>
                            <Card_enlaces></Card_enlaces>
                        </div>

                        <div className='item-contacto'>
                            <Card_otros_enlaces></Card_otros_enlaces>
                        </div>

                        <div className='item-contacto'>
                            <Card_list_servicios></Card_list_servicios>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contacto;