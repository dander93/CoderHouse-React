import React from 'react'
import { textToCurrency } from '../../services/textHelperService'


function CartTableItemRow({ titulo, precio, cantidad, children }) {
    return (
        <>
            <tr>
                <td>{titulo}</td>
                <td className="text-center">{cantidad}</td>
                <td className="text-center">{textToCurrency(precio)}</td>
                <td className="text-end">{children}</td>
            </tr>
        </>
    )
}

export default CartTableItemRow