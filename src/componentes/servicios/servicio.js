import './servicios.css';
import { Button } from '../boton';
import ItemServicios from './item-servicios/item-servicio';
import Card_servicio from './card-servicio/card-servicio';

const Servicios = () => {
    return (
        <div class=" contenedor services " id="services-section">

            <p className=" emcabezado ">NUESTROS SERVICIOS</p>
            <div className=" contenedorx80 ">
                <div className=" Item top" >
                  < ItemServicios />

                </div>
                <div className=" Item flex ">
                   < Card_servicio />
                </div>
            </div>




        </div>
    );
}

export default Servicios;
    //   ECOGRAFÍA:  , .