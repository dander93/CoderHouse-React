import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBarMenuListItem({ target, text, index }) {
    return (
        <li className='nav-item' key={index}>
            <NavLink
                to={target}
                className={({ isActive }) => isActive ? "nav-link active text-warning border-bottom border-warning fw-semibold" : "nav-link"}>
                {text}
            </NavLink>
        </li>
    );
}

export default NavBarMenuListItem;