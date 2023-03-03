import React from 'react'
import './CartWidget.css'; 

const CartWidget = () => {
  return (
    <div>
        <img src="/carrito.png" alt='imagen' className='carrito' />
        <h5 className='numCarr'>4</h5>
    </div>
  )
}

export default CartWidget