import React from 'react';

function NavBarMenuListItem({ target, text, active, index }) {
    return (
        <li className='nav-item' key={index}>
            <a href={target} className={active ? "nav-link active text-warning border-bottom border-warning fw-semibold" : "nav-link"} >
                {text}
            </a>
        </li>
    );
}

export default NavBarMenuListItem;