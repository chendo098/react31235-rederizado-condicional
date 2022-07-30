import React, { useState } from 'react'

const Styling = () => {
const [color, setColor] = useState(false)
const [fondo, setFondo] = useState(false)
  return (
    <div>
        <button className="btn btn-primary" onClick={() => setColor(!color)}>Cambiar Color</button>
        <button className="btn btn-primary" onClick={() => setFondo(!fondo)}>Cambiar Fondo</button>
        <h1 style={{color: !color ? "red" : "green"}}>Color</h1>
        <h1  style={{backgroundColor: !fondo ? "black" : "orange"}}>Fondo</h1>
    </div>
  )
}

export default Styling