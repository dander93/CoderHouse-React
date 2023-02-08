import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { textToCurrency } from '../../services/textHelperService'
import ActionButton from '../ButtonContainer/ActionButton/ActionButton'
import { cartContext } from '../Context/CartContext'

function CartTable({ children, handleClearCart }) {

    const { handleTotalAmountInCart,handleTotalAmountWithoutDiscountInCart } = useContext(cartContext);

    const handleRemoveAllItemsFromCartButton = () => handleClearCart();

    return (
        <>
            <table className='table table-sm table-striped border border-dark shadow'>
                <thead>
                    <tr className="text-center">
                        <th className="text-start">Titulo</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th className="text-end">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} className="text-end">
                            <p className='mx-2 my-0'>
                                Subtotal: {textToCurrency(handleTotalAmountWithoutDiscountInCart())}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="text-end">
                            <p className='mx-2 my-0'>
                                Total: {textToCurrency(handleTotalAmountInCart())}
                            </p>
                        </td>
                    </tr>
                </tfoot>
            </table>

            <br />

            <div className='fixed-bottom col-11 mx-auto mb-2 p-2 bg-opacity-75 bg-dark border border-dark shadow rounded'>
                <div className='d-flex flex-row justify-content-center'>
                    <ActionButton text="Limpiar carrito" callback={handleRemoveAllItemsFromCartButton} className="btn btn-danger col-2 mx-1 border border-dark" />
                    <Link to="/cart/checkout" className="btn btn-success col-2 border border-dark">Finalizar Compra</Link>
                </div>
            </div>
        </>
    )
}

export default CartTable