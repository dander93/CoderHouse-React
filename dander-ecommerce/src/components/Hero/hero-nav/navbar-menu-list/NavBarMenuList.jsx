import React, { useEffect, useState } from 'react';
import NavBarMenuListItem from '../navbar-menu-list-item/NavBarMenuListItem';
import CartWidget from '../cart-widget/CartWidget';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function NavBarMenuList() {

    const [menuItems, setmenuItems] = useState([]);

    useEffect(() => {
        setmenuItems(getMenuItems());
    }, [])

    const getMenuItems = () => {
        return [
            {
                active: false,
                target: '#',
                text: 'Servicios BackEnd'
            },
            {
                active: true,
                target: '#',
                text: 'Servicios FrontEnd'
            },
            {
                active: false,
                target: '#',
                text: 'Servicios DevOps'
            },
            {
                active: false,
                target: '#',
                text: 'Servicios Agile'
            },
            {
                active:false,
                target:'#',
                text: 'Servicios Arquitectura'
            }
        ];
    }

    return (
        <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-end justify-content-between flex-wrap'>
            {
                menuItems.map((menuItem, index) => <NavBarMenuListItem active={menuItem.active} target={menuItem.target} text={menuItem.text} index={`menu-${index.toString()}`} key={`menu-${index.toString()}`} />)
            }

            <CartWidget iconName={faCartShopping} target="#" count={3} key={`menu-cart`} />
        </ul>
    );
}




export default NavBarMenuList;