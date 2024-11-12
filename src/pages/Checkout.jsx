import React, { useContext } from 'react'
import { addDoc, collection } from "firebase/firestore/lite";

import CartContext from '../context/CartContext';
import ProductTable from '../components/ProductTable';
import AuthContext from '../context/AuthContext';
import { db } from '../Firebase';

const ProductRow = ({nm_item,quantity,total,onClick}) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black text-center">
        {quantity} X
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
        {nm_item}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-black text-center">
        ${total}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
        <span
          onClick={onClick}
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
        >
          Remove
        </span>
      </td>
    </tr>
  )
};

function Checkout() {
  const { cart, dispatch } = useContext(CartContext);
  const { currentUser }    = useContext(AuthContext);

  const total = cart
    .reduce((prevProduct, nextProduct) => {
      return prevProduct + nextProduct.quantity * nextProduct.preco;
    },0)
    .toFixed(2);

  const handleOrder = () => {
    (async function () {
      const newOrder = {
        buyer : {
          name: "Ramylson",
          email: "teste2@gmail.com",
          id: currentUser?.uid,
        },
        items: cart,
        total,
      };
      const ordersCollection = collection(db,"pedidos");
      const createdOrder     = await addDoc(ordersCollection, newOrder);
      dispatch({
        type: "resetCart"
      });
    })();
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
        Checkout
      </h2>
        <ProductTable>
          {cart?.map(({cd_item, nm_item, quantity, preco}) => (
            <ProductRow
              key={cd_item}
              nm_item={nm_item}
              quantity={quantity}
              total={(preco * quantity).toFixed(2)}
              onClick = {() => {
                dispatch({
                  type: "removeItem",
                  cd_item
                });
              }}
            />
          ))}
        </ProductTable>
        <div className="flex justify-end items-center">
          <span className="px-2 font-bold">Total: ${total}</span>
          <button
          onClick={handleOrder}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
          Comprar
          </button>
        </div>
    </div>
    )
}

export { Checkout }
