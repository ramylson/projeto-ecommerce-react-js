import React, { useContext, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite';

import ProductLink from '../components/ProductLink';
import {db} from "../Firebase";
import AuthContext from '../context/AuthContext';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

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
    Olá {currentUser.email}
    <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
      {products.length === 0 && <div>Carregando...</div>}
      {products && products.map(({id,cd_item,nm_item,preco,image}) => (
        <ProductLink key={id} id={id} cd_item={cd_item} nm_item={nm_item} preco={preco} image={image} />
      ))}

    </div>
    </>
  )
}

export { Home }