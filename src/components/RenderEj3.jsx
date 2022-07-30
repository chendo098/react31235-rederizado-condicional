import React, { useEffect, useState } from 'react'

const RenderEj3 = ({condicion = true}) => {

    const [compras, setCompras] = useState(false)
    console.log("🚀 ~ file: RenderEj3.jsx ~ line 6 ~ RenderEj3 ~ compras", compras)

    const comprar = () => {
        console.log("click")
        setCompras(!compras)
    }

  return (
    <div>
        <h1>{!condicion ? "Aprendiendo React" : "React Developer"}</h1>
        <button className="btn btn-primary" onClick={comprar}>Click</button>
        <h2>{!compras ? "Aún no compras nada" : "Gracias por tu compra"} </h2>
    
    </div>
  )
}

export default RenderEj3