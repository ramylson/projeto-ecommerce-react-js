import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite';
import db from "../Firebase";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function(){
      const productsCol = collection(db, "products");
      const productsSnapshot = await getDocs(productsCol);
      const products = productsSnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setProducts(products);
    })()
  },[]);

  return (
    <>
    {products.map(({id,cd_item,nm_item,image}) => (
      <div key={id} className="cart-item">
          <img src={image} alt="Nome do Produto" className="product-image" />
         <div className="product-info">
          <h3 className="product-name">{cd_item}</h3>
          <h3 className="product-description">{nm_item}</h3>
          <p className="product-price">R$ 99,99</p>
        </div>
      </div>

    ))}
    </>
  )
}
