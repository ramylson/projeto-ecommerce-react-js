import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from "../Firebase";
import CartContext from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity ] = useState(1);

  const { cart, dispatch } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    (async function(){
      const productCol = doc(db, "products", id);
      const productSnapshot = await getDoc(productCol);
      const product = productSnapshot.data();
      setLoading(false);
      setProduct(product);
    })()
  },[]);

  const handleChangeQuantity = (e) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity >= 1){
      setQuantity(newQuantity);
    }
  }

  const handleAddItem = () => {
    dispatch({
      type: 'addItem',
      item: {...product, quantity}
    });
    //setCart([...cart, {...product,quantity}])
  };

  return (
    <>
      {loading && <div>Carregando...</div>}
      {!loading &&
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
        <div><img src={product.image} alt="Nome do Produto" className="w-80 h-80 object-cover" /></div>
        <div>
            <h1>{product.nm_item}</h1>
            <p>R$ {product.preco}</p>
        </div>
        <div>
          <input
            value={quantity}
            type="number"
            name="price"
            onChange={handleChangeQuantity}
            className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" placeholder="0" />
          <hr className="m-2"/>
          <button
            type="button"
            className="focus:outline-none
            text-white
            bg-yellow-400
            hover:bg-yellow-500 focus:ring-4
            focus:ring-yellow-300
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
            dark:focus:ring-yellow-900"
            onClick={handleAddItem}>
              Adicionar carrinho
          </button>
        </div>
      </div>
      }
    </>
  )
}

export { ProductDetail }
