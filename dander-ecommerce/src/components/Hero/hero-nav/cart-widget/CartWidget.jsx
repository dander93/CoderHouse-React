import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { cartContext } from '../../../Context/CartContext';

function CartWidget({ iconName }) {

    let { handleTotalItemsInCart } = useContext(cartContext);

    let totalInCart = handleTotalItemsInCart();
    
    return (
        <li className='nav-item'>
            <Link to='cart' className='nav-link text-black-50'>

                <FontAwesomeIcon icon={iconName} />
                {
                    totalInCart ? 
                        <p className='position-absolute translate-middle badge rounded-pill text-bg-warning'>{totalInCart}</p> 
                    : null
                }

            </Link>
        </li>
    );
}

export default CartWidget;