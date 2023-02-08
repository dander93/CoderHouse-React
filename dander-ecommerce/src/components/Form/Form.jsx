import React from 'react'

function Form({ children, onSubmit, styles }) {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <form
                onSubmit={onSubmit ? onSubmit : handleSubmit}
                className={styles}
            >
                {children}

                <br />

                <div className='btn-group'>
                    <input type="reset" value="Reiniciar formulario" className='mt-5 btn btn-outline-warning center mx-1' />
                    <input type="submit" value="Proceder con la compra" className='mt-5 btn btn-success center' />
                </div>
            </form>
        </>
    )
}

export default Form