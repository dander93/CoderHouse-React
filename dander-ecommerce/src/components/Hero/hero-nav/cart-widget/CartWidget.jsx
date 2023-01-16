import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';

function CartWidget({ iconName, count }) {
    return (
        <li className='nav-item'>
            <Link to='cart' className='nav-link text-black-50'>
                {count}
                <FontAwesomeIcon icon={iconName} />
            </Link>
        </li>
    );
}

export default CartWidget