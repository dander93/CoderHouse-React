import React, { useContext } from 'react'
import { textToCurrency } from '../../services/textHelperService'
import ActionButton from '../ButtonContainer/ActionButton/ActionButton'
import { cartContext } from '../Context/CartContext'

function CartTable({ children, handleClearCart }) {


    const { handleTotalAmountInCart } = useContext(cartContext);

    const handleRemoveAllItemsFromCartButton = () => handleClearCart();

    const handleCreatePaymentOperationButton = () => {
        console.log("comprado papu")
    }

    return (
        <>
            <table className='table table-sm table-striped'>
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
                                Total: {textToCurrency(handleTotalAmountInCart())}
                            </p>
                        </td>
                    </tr>
                </tfoot>
            </table>

            <br />

            <div className='fixed-bottom col-11 mx-auto  mb-2 p-2 bg-opacity-75 bg-dark border border-dark shadow rounded'>
                <ActionButton text="Limpiar carrito" callback={handleRemoveAllItemsFromCartButton} className="btn btn-danger col-2 mx-1 border border-dark" />
                <ActionButton text="Finalizar compra" callback={handleCreatePaymentOperationButton} className="btn btn-success col-2 border border-dark" />
            </div>
        </>
    )
}

export default CartTable