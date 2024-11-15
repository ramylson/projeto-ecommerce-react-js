import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function ProductLink({id, cd_item, nm_item, preco, image}) {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="shadow-md border border-r-slate-200 border-r-4 p-1 rounded">
        <Link to={currentUser ? `/product/${id}` : `signin`} key={id}>
            <img src={image} alt="Nome do Produto" className="w-24 h-24 object-cover" />
            <div className="">
                <p className='bg-slate-200 text-sm rounded'>{cd_item}</p>
                <h3 className="product-description">{nm_item}</h3>
            </div>
            <div className=''>
                <p className="product-price">R$ {preco}</p>
            </div>
        </Link>
    </div>
  )
}