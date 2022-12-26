import React from 'react'
import UserGreeting from './UserGreeting/UserGreeting';

function ItemListContainer({ greeting }) {
    return (
        <>
            <div className='container-fluid d-flex justify-content-center'>
                <UserGreeting greeting={greeting} />
            </div>
        </>
    );
}

export default ItemListContainer;