import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CartWidget({ iconName, count }) {
    return (
        <li className='nav-item'>
            <a href='#' className='nav-link text-black-50'>
                {count}
                <FontAwesomeIcon icon={iconName} />
            </a>
        </li>
    );
}

export default CartWidget