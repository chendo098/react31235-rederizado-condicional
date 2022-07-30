import React, { useState } from 'react'
import batman from '../images/batman.png'
import superman from '../images/superman.png'
import {Image} from 'react-bootstrap'

const RenderEj2 = () => {

        const [condicion, setCondicion] = useState(false)

    const cambiarCond = () => {
        setCondicion(!condicion)
    }

//   return (
//     <div>
//         <h1>Rendering Condicional 2</h1>
//         <button className="btn btn-primary" onClick={cambiarCond}>Cambiar</button>
//         <br />
//         {condicion && <h1>Condición Verdadera</h1>}
//         {!condicion && <h1>Condición Falsa</h1>}
//     </div>

//   )

  return (
    <div>
        <h1>Elije un heroe</h1>
        <button className="btn btn-primary" onClick={cambiarCond}>Cambiar</button>
        <br />
        {condicion && <Image className="d-inline-block align-top" width={100} height={100} src={batman}/>}
        {!condicion && <Image className="d-inline-block align-top" width={100} height={100} src={superman}/>}
    </div>
  )


}

export default RenderEj2