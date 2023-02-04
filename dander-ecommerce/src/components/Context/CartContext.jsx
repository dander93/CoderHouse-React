import React, { createContext, useState } from 'react';

export const cartContext = createContext();

export default function CartContext({ children }) {

    let [cart, setCart] = useState([])

    const handleAddToCart = (element) => {
        let found = cart.findIndex(item => item.id === element.id)

        if (found > -1) {
            const newCart = [...cart]
            newCart[found].count += element.count
            setCart(newCart);
        } else {
            let newCart = [...cart];
            newCart.push(element);
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = (id) => {
        console.log(id)
        let found = cart.findIndex(item => item.id === id)

        if (found > -1) {
            let newCart = [...cart]
            newCart.splice(found, 1);
            setCart(newCart);

            return newCart;
        }
    }

    const handleClearCart = () => setCart([]);

    const handleTotalItemsInCart = () => cart.reduce((sum, item) => sum + item.count, 0);

    const handleTotalAmountInCart = () => cart.length ? cart.reduce((sum, item) => sum + (item.count * item.price), 0) : 0;

    const handleGetItemsInCart = () => cart;

    const exports = {
        handleAddToCart,
        handleClearCart,
        handleRemoveFromCart,
        handleTotalItemsInCart,
        handleTotalAmountInCart,
        handleGetItemsInCart
    }

    return (
        <>
            <cartContext.Provider value={{ ...exports }}>
                {children}
            </cartContext.Provider>
        </>
    );
}