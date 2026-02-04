// este es el primer componente, el que se usa para mostrar todos los datos en el HTML

import {useState} from 'react'// importo useState desde React para poder cambiar el estado
import data from './data' // importo los datos de los empleados desde el fichero data.js
import Trabajador from './Trabajador' //importo los datos del trabajador





// Este es el componente principal de la aplicación
export default function App() {

    // Trabajadores es el estado que almacena la lista de empleados , la primera vez usa los datos de data.
    // setTrabajadores sera lo que cambia el estado de trabajadores
    const[trabajadores, setTrabajadores] = useState(data)

    // funcion para eliminar al trabajador
    function despedirTrabajador(id){
        setTrabajadores(trabajadores.filter((t)=>t.id !== id))
    }


 return ( 
    <main>
        {/* Aqui es donde vamos a ir pintando el contenido de la aplicación */}
        <section className="container">
            {/* Se muestra el total de empleados usando trabajadores.lenght */}
            <h3>Trabajan actualmente {trabajadores.length} personas en la empresa</h3>

            {/* Recorro el array de trabajadores */}
           {trabajadores.map((trabajador)=>(
            
            // Muestro la información de cada trabajador
            <Trabajador 
            key={trabajador.id} // clave unica que ayuda a identificar cada elemento
            trabajador={trabajador} // datos del trabajador
            despedir={despedirTrabajador} // funcion para despedir al trabajador
            />
           ))}
        </section>
    </main>
 )
}