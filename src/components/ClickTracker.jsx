import React, { useState } from 'react'

const ClickTracker = () => {

    //Declaro un estado llamado count conun valor inicial de 0
    const [count, setCount] = useState(0)
    const [click, setClick] = useState()

    const handleClick = () => {
      setCount(count + 1)
      setClick(new Date().toLocaleString())
    }


  return (
    <div>
        <p>Haz clickeado: {count} veces</p>
        <p>Ultimo click: {click}</p>
        <button onClick={handleClick}>Aumentar el contador</button>

    </div>
  )
}

export default ClickTracker