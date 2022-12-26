import React from 'react'

function UserGreeting({ greeting }) {

    return (
        <div className='d-flex col-3 text-bg-warning justify-content-center py-1'>
            <p className='text-center mb-0'>
                {greeting}
            </p>
        </div>
    );
}

export default UserGreeting