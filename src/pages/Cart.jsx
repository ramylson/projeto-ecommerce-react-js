import { useContext } from 'react'
import CartContext from '../context/CartContext';
import CartItem from '../components/CartItem';

function Cart() {
  const { cart } = useContext(CartContext);
  return (
  <ul>
    {cart.length === 0 && 'Carrinho vazio'}
    {cart.map(({cd_item, nm_item, quantity}) => (
      <CartItem key={cd_item} cd_item={cd_item} nm_item={nm_item} quantity={quantity} />
    ))}
  </ul>)
}

export { Cart }
