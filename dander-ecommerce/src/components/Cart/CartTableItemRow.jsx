import React from 'react'
import { textToCurrency } from '../../services/textHelperService'

function CartTableItemRow({ title, price, quantity, children, discount }) {
    return (
        <>
            <tr>
                <td className='p-3'>
                    {title}
                </td>
                <td className="text-center p-3">
                    {quantity}
                </td>
                <td className="text-center p-3">
                    {
                        discount ?

                            <>
                                <p className="text-dark rounded-pill">
                                    {textToCurrency(price - (price * discount))}
                                    <span className="position-absolute translate-middle text-danger text-decoration-line-through badge fst-italic">
                                        {textToCurrency(price)}
                                    </span>
                                </p>
                            </>
                            :
                            <>
                                {textToCurrency(price)}
                            </>

                    }
                </td>
                <td className="text-end p-3">
                    {children}
                </td>
            </tr>
        </>
    )
}

export default CartTableItemRow