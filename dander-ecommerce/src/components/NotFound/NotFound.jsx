import React from 'react'

function NotFound({ message }) {
    return (
        <>
            <section className='container-fluid mt-3'>
                <h4 className='col-5 border border-dark rounded p-3 shadow text-center mx-auto bg-dark bg-opacity-50 text-warning'>
                    {message ? message : "No se encontraron resultados"}
                </h4>
            </section>
        </>
    )
}

export default NotFound