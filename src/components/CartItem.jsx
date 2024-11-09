import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext';

export default function CartItem({ cd_item, nm_item, quantity}) {
    const [isEdit, setEdit] = useState(false);
    const { cart, dispatch } = useContext(CartContext);

    const handleRemoveItem = (cd_item) => {
      dispatch({
        type: "removeItem",
        cd_item
      });
    }

    const handleChangeQuantity = (e) => {
        const newQuantity = Number(e.target.value);
        dispatch({
            type: "changeItemQuantity",
            product: {
                cd_item,
                newQuantity
            },
        });
    }

    return (
      <li>
      {`${nm_item}`}
      {!isEdit && ` X ${quantity}`}
      {isEdit &&
            <input

            value={quantity}
            type="number"
            name="price"
            onChange={handleChangeQuantity}
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" placeholder="0" />}
      <button onClick={() => {
        handleRemoveItem(cd_item)
      }}>Remove</button>
      <button onClick={() => {
        setEdit(!isEdit);
      }}>{!isEdit ? 'Editar' : 'Confirmar'}</button>
      </li>
    )
  }