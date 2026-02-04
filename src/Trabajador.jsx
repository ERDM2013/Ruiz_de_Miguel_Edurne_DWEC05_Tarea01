// este es el segundo componente que representa a un empleado

export default function Trabajador({trabajador, despedir}){

    return(

        // cada article es un empleado 
        <article className="person" key={trabajador.id}>
            <img src={trabajador.image} alt={trabajador.name}/>
            <div>
                <h4>{trabajador.name}</h4> 
                <p>{trabajador.age} años</p>
            </div>
            {/* Boton para despedir al trabajador */}

            <button
                className="icon-btn delete" // lo saco del css
                title="Despedir al trabajador"
                onClick={() => despedir(trabajador.id)}
            >
            x
            </button>
        </article>
    )
}

