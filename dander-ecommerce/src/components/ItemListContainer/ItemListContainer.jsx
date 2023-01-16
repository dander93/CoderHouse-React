import React from 'react'
import ItemListContainerItemList from './ItemListContainerItemList/ItemListContainerItemList';
import UserGreeting from './UserGreeting/UserGreeting';

function ItemListContainer({ greeting }) {
    return (
        <>
            <section className='container-fluid d-flex flex-column justify-content-center align-items-center'>
                <UserGreeting greeting={greeting} />
                <ItemListContainerItemList />
            </section>
        </>
    );
}

export default ItemListContainer;