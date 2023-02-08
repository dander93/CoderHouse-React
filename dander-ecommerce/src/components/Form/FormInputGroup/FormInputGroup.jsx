import React from 'react'

function FormInputGroup({ children, text, styles }) {
    return (
        <>
            <div className={styles ? styles : 'input-group'}>
                <span className='input-group-text'>{text}</span>
                {children}
            </div>
        </>
    )
}

export default FormInputGroup