import medicos from './medicos.json';
import React from 'react';
const Card_Medicos = () => {
    return (

     <div className="contenedor-item" >
                    {medicos.map((medico) =>(
                        <div className={medico.clase}>               
                           <div className="cuadrosmedicos" ><img src={medico.foto} /></div>
                             <p className="informacion negrita text-azul">{medico.nombre}</p>
                             <p className="informacion text-azul">Ver mas</p> 
                      
                         </div>
                    ))}
                </div>

    );
}


export default Card_Medicos;

