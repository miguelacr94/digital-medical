import './galeria.css';
import galeria from './imagen.json'
const Galeria  =  ()  => {
    return (

        <div className = "contenedor" id = "galeria-selection">
            <p className = "emcabezado">Nuestros Trabajos</p>
            <br></br>

            <p className = "titulo text-azul">Nuestra galería</p>
            <div className = "contenedorx80">
                <div className = "contenedor-galeria">
                    {galeria.map((galeria)  => (
                        <div className = "foto"><img src = {galeria.foto}></img> </div>
                    ))}


                </div>
                <p className = "informacion text-azul">ver mas</p>
            </div>
        </div>

    );
}

export default Galeria;