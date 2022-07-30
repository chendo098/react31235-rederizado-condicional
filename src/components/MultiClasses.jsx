import React from 'react'

const MultiClasses = ({clase = false, otraClase = "clase3"}) => {
    return (
      <div>
          <h1 className={`${clase ? 'clase1' : 'clase2'} ${otraClase}`}>Componente Multiclase</h1>
      </div>
    )
}

export default MultiClasses