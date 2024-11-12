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
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
        {products.length === 0 && <div>Carregando...</div>}
        {products && products.map((product) => (
          <ProductLink key={product?.id} {...product} />
        ))}
      </div>
    </>
  )
}

export { Home }