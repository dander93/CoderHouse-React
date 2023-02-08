import React, { useContext, useState, useEffect } from 'react'
import ActionButton from '../ButtonContainer/ActionButton/ActionButton';
import { cartContext } from '../Context/CartContext'
import CartTable from './CartTable';
import CartTableItemRow from './CartTableItemRow';

function CartContainer() {

    let { handleGetItemsInCart, handleRemoveFromCart, handleClearCart } = useContext(cartContext);

    const [itemsInCart, setItemsInCart] = useState([]);

    useEffect(() => {
        setItemsInCart(handleGetItemsInCart())
    }, [itemsInCart]);

    const handleRemoveItemFromCartButton = (id) => setItemsInCart(handleRemoveFromCart(id));

    const handleCLearCartEvent = () => {
        setItemsInCart([]);
        handleClearCart();
    }

    if (!itemsInCart.length) {
        return (
            <>
                <section className='container-fluid mt-3'>
                    <h4 className='col-5 border border-dark rounded p-3 shadow text-center mx-auto bg-dark bg-opacity-50 text-warning'>
                        No se encontraron items en el carrito
                    </h4>
                </section>
            </>
        )
    }

    return (
        <>
            <section className='container-fluid mt-3 col-9'>
                <CartTable handleClearCart={handleCLearCartEvent} >
                    {
                        itemsInCart.map(item =>
                            <>
                                <CartTableItemRow title={item.title} price={item.price} quantity={item.count} discount={item.discount} key={item.id}>
                                    <ActionButton callback={() => handleRemoveItemFromCartButton(item.id)} text="Borrar" className="btn btn-sm btn-danger border border-dark" />
                                </CartTableItemRow>
                            </>
                        )
                    }
                </CartTable>
            </section>
        </>
    )
}

export default CartContainer