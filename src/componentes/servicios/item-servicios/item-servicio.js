
import React from 'react';
import { Button } from '../../boton';
function ItemServicios() {
    return (

        <div>
            <p className = "titulo text-azul al-lef">¡Ofrecemos todos los aspectos de la práctica médica para toda su familia!</p>
            <br></br>
            <div className = "item-services" >
                <ul>
                    <li><p className = "informacion text-gris-os">CT SCAN </p></li>
                    <li><p className = "informacion text-gris-os">MRI MAGNETIC RESONANCE</p></li>
                    <li><p className = "informacion text-gris-os">DIGITAL X-RAY</p></li>
                    <li><p className = "informacion text-gris-os">DIGITAL BILATERAL MAMMOGRAPHY</p></li>
                    <li><p className = "informacion text-gris-os">ELECTROCARDIOGRAM (EKG)</p></li>
                </ul>
                <p className = "informacion text-gris-os">Ecografia</p>
                <ul>
                    <li><p className = "informacion text-gris-os">ABDOMINAL GENERAL </p></li>
                    <li><p className = "informacion text-gris-os">GINECOLÓGICA O PÉLVICA</p></li>
                    <li><p className = "informacion text-gris-os">VASCULAR GENERAL DOPPLER, TRANSCRANEAL</p></li>
                    <li><p className = "informacion text-gris-os">ECOCARDIOGRAFÍA</p></li>
                    <li><p className = "informacion text-gris-os">MÚSCULO</p></li>
                    <li><p className = "informacion text-gris-os">ESQUELÉTICO</p></li>
                    <li><p className = "informacion text-gris-os">PARTES BLANDAS</p></li>
                    <li><p className = "informacion text-gris-os">ELASTOGRAFÍA: HEPÁTICA, TIROIDES, MAMAS, ETC.</p></li>
                </ul>
                <p className = "titulo">
                    <div className = 'hero-btns'>
                        <Button
                            className = 'btns'
                            buttonStyle = 'btn--primary'
                            buttonSize = 'btn--large'
                            onClick = {console.log('hey')}
                        >
                            CONOCE TODOS LOS SERVICIOS
                        </Button>
                    </div>
                </p>
            </div>
        </div>


    );
}

export default ItemServicios;