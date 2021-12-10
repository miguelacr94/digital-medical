import '../testimonios.css';
import pacientes from './testimonios.json'
const Card_Testimonio  =  ()  => {
    return (
        <>
            {pacientes.map((paciente)  => (
                <div className = "item-testimonio" >
                    <>
                        <div className = "contenedor-paciente">
                            <div className = "foto-paciente" >
                                <img src = {paciente.foto} />
                            </div>
                            <div className = "nombre-Paciente">
                                <p className = "nombre">{paciente.nombre_paciente}</p>
                                <p>{paciente.perfil}</p>
                            </div>
                        </div>

                        <div className = "contenedor-testimonio">
                            <p className = "informacion text-gris-os" >{paciente.testimonio}</p>
                        </div>
                    </>
                </div>
            ))}
        </>
    );
}

export default Card_Testimonio;