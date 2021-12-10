import { Button } from '../../boton';
const Contenedor_contacto_su  =  ()  => {
    return (

        <>
            <div class = "item-contacto-sup">
                <div className = 'contenedorx80'>
                    <p className = "informacion text-gris ">¿Necitas una cita?</p>
                    <p className = "titulo text-blanco ">PÍDELA YA MISMO</p>
                </div>
            </div>
            <div class = "item-contacto-sup">
                <div className = 'contenedorx80'>
                    <div className = 'btn-contacto'>
                        <Button
                            className = 'btns'
                            buttonStyle = 'btn--primary'
                            buttonSize = 'btn--large'
                            onClick = {console.log('hey')}
                        >
                            CONOCE TODOS LOS SERVICIOS
                        </Button>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Contenedor_contacto_su;