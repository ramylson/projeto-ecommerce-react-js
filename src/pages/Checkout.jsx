import React, { useContext } from 'react'
import CartContext from '../context/CartContext';

function Checkout() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <h1>Checkout</h1>
      <ul>
        {cart.map((product) => (
            <li key={product.cd_item}>{`${product.nm_item} X ${product.quantity} - Total: ${product.preco * product.quantity}`}</li>
        ))}
        Total ${cart.reduce((prevProductValue, currentProduct) => {
          return prevProductValue + currentProduct.quantity * currentProduct.preco
        },0)}
      </ul>
    </>
    )
}

export { Checkout }
