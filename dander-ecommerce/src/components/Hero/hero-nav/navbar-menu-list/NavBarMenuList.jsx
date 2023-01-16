import React, { useEffect, useState } from 'react';
import NavBarMenuListItem from '../navbar-menu-list-item/NavBarMenuListItem';
import CartWidget from '../cart-widget/CartWidget';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import getCategorys from '../../../../services/categoryServices';

function NavBarMenuList({cartCounter}) {

    const [menuItems, setmenuItems] = useState([]);

    useEffect(() => {
        getCategorys()
        .then(categorys => {
            setmenuItems( categorys.map(category => {
                return ({ "text": category, "target": category })
            }))
        })
    }, [menuItems])


    return (
        <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-end justify-content-between flex-wrap'>
            {
                menuItems.map(
                    (menuItem, index) =>
                        <NavBarMenuListItem target={menuItem.target} text={menuItem.text} index={`menu-${index.toString()}`} key={`menu-${index.toString()}`} />)
            }

            <CartWidget iconName={faCartShopping} target="cart" count={cartCounter} key={`menu-cart`} />
        </ul>
    );
}




export default NavBarMenuList;