import React from 'react'

function MainContainer({children}) {
    return (
        <div className='background-pattern min-vh-100'>
            {children}
        </div>
    );
}

export default MainContainer