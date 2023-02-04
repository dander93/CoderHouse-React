import React from 'react'

function Loader() {
    return (
        <>
          <div className='loading d-flex flex-column align-items-center my-2'>
            <div className="loader"></div>
            <p>Cargando ...</p>
          </div>
        </>
    )
}

export default Loader