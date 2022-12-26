import React from 'react';
import NavBarMenuList from './navbar-menu-list/NavBarMenuList';

function NavBar() {
    return (
        <nav id='nav-main-menu' className='navbar navbar-expand'>
            <NavBarMenuList />
        </nav>
    );
}

export default NavBar;