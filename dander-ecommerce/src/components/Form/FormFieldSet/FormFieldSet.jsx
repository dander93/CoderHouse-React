import React from 'react'

function FormFieldSet({ children, style, text }) {


    if (text) {
        return (
            <>
                <fieldset
                    className={style ? style : "p-4 border border-1 border-warning rounded"}
                >
                    <legend>{text}</legend>
                    {children}
                </fieldset>
            </>
        )
    }

    return (
        <>
            <fieldset
                className={style ? style : "p-4 border border-1 border-warning rounded"}
            >
                {children}
            </fieldset>
        </>
    )
}

export default FormFieldSet