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
            className="border border-gray-300 p-2 rounded" placeholder="0" />}
            <button
              onClick={() => {
                handleRemoveItem(cd_item)
            }}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-1 px-2 rounded me-2 ms-2"
            >Remove</button>
      <button
        onClick={() => {
          setEdit(!isEdit);
        }}
        className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-1 px-2 rounded me-2 ms-2"
        >{!isEdit ? 'Editar' : 'Confirmar'}</button>
      </li>
    )
  }