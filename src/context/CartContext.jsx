import React, { createContext, useReducer, useState } from 'react'

const CartContext = createContext([]);

const cartReducer = (cart,action) => {
    switch (action.type) {
        case 'addItem':{
            let newCart = [...cart];
            const itemIndex = cart.findIndex((productItem) => productItem.cd_item === action.item.cd_item);
            if (itemIndex !== -1) {
              // Item já existe, atualiza a quantidade
              newCart[itemIndex] = {
                ...newCart[itemIndex], // Mantém as outras propriedades
                quantity: newCart[itemIndex].quantity + action.item.quantity, // Aumenta a quantidade
              };
            } else {
              // Item não existe, adiciona
              newCart.push(action.item);
            }
            localStorage.setItem('cart', JSON.stringify(newCart));
            return newCart;
        }
        case 'removeItem':{
            const filterCart = cart.filter((product) => product.cd_item !== action.cd_item);
            localStorage.setItem('cart', JSON.stringify(filterCart));
            return filterCart;
        }
        case 'changeItemQuantity': {
            const mapperCart = cart.map((product) => {
                if (product.cd_item !== action.product.cd_item){
                    return product;
                }
                if (product.cd_item === action.product.cd_item){
                    return {
                        ...product,
                        quantity: action.product.newQuantity
                    }
                }
            });
            localStorage.setItem('cart', JSON.stringify(mapperCart));
            return mapperCart;
        }

        case "resetCart": {
            localStorage.setItem("cart", JSON.stringify([]));
            return [];
        }
        default:
            break;
    }
}

const initiliazeState = () => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
};

export function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, initiliazeState());
    return (
        <CartContext.Provider
            value={{
                cart,
                dispatch,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
