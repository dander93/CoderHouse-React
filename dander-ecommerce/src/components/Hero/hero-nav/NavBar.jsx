import React from 'react';
import NavBarMenuList from './navbar-menu-list/NavBarMenuList';

function NavBar({cartCounter}) {
    return (
        <nav id='nav-main-menu' className='navbar navbar-expand'>
            <NavBarMenuList cartCounter={cartCounter} />
        </nav>
    );
}

export default NavBar;