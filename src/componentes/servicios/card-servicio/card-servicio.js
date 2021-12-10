import React from 'react';
import servicio from './card-servicio.json'
function Card_servicio() {
    return (

        <div>
            {servicio.map((servicio   =>
                <div className  =  "cuadro-servicio" >
                    <div className  =  "imagen-servicio" >
                        <img src  =  {servicio.imagen}></img>
                    </div>
                    <p className  =  "informacion">{servicio.servicio}</p>
                </div>

            ))}

        </div>


    );
}

export default Card_servicio;