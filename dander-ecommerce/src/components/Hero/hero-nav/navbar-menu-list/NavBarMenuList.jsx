import React, { useEffect, useState, useContext } from 'react';
import NavBarMenuListItem from '../navbar-menu-list-item/NavBarMenuListItem';
import CartWidget from '../cart-widget/CartWidget';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { categorysContext } from '../../../Context/CategoryContext';

function NavBarMenuList() {

    const { getLoadedCategorys, isCategorysLoaded, getCategoryIDByName } = useContext(categorysContext);

    const [isCategoryLoaded, setIsCategoryLoaded] = useState(false);
    const [menuItems, setmenuItems] = useState(getLoadedCategorys());

    useEffect(() => {
        if (isCategoryLoaded) {
            setmenuItems(getLoadedCategorys())
        }
        setIsCategoryLoaded(isCategorysLoaded())
    });


    return (
        <ul className='navbar-nav me-auto mb-2 mb-lg-0 text-end justify-content-between flex-wrap'>
            {
                menuItems.map(
                    (menuItem, index) =>
                        <NavBarMenuListItem target={menuItem.name} text={menuItem.name} index={`menu-${index.toString()}`} key={`menu-${index.toString()}`} />)
            }

            <CartWidget iconName={faCartShopping} target="cart" key={`menu-cart`} />
        </ul>
    );
}




export default NavBarMenuList;