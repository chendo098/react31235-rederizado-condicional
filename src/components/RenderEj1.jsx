import React, { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';

const RenderEj1 = ({condicion = false}) => {

// Inicial

//     const [loading, setLoading] = useState(false)
//     console.log("🚀 ~ file: renderEj1.jsx ~ line 5 ~ RenderEj1 ~ loading", loading)

//     const cambiarCond = () => {
//         setLoading(!loading)
//     }


//   return (
//     <div>
//         <h1>Rendering Condicional 1</h1>
//         <p>Caso típico de un spinner</p>
//         <br/>
//         <button className="btn btn-primary" onClick={cambiarCond}>Activar</button>
//         <p>{loading ? "Es falso": "Es verdadero"}</p>

//     </div>
//   )


// Ejemplo 1

if(condicion) {
    return (
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
}
    return <h2>Componente</h2>


}

export default RenderEj1