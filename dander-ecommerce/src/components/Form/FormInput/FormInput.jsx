import React, { useState } from 'react'

function FormInput({ labelText, inputType, inputID, labelStyles, value, inputStyles, placeholder, blurHandler , pattern}) {

    const [secondMailVisible, setSecondMailVisible] = useState(false);

    const handleShowSecondMail = (event) => {
        if (event.target.value.length > 0) {
            setSecondMailVisible(true);
        }
    }

    if (!labelText) {
        return (
            <>
                <input
                    id={inputID}
                    name={inputID}
                    type={inputType ? inputType : "text"}
                    className={inputStyles ? inputStyles : null}
                    placeholder={placeholder}
                    value={value}
                    onBlur={blurHandler}
                    pattern={pattern}
                    required
                />
            </>)
    }

    if (inputType === "mail") {
        return (
            <>
                <div className='form-group'>
                    <span>
                        <label>
                            {labelText}
                            <input
                                id="mail"
                                type="mail"
                                className={inputStyles ? inputStyles : `form-control col-3`}
                                placeholder="ingresa tu e-mail"
                                value={value}
                                onBlur={handleShowSecondMail}
                                pattern={pattern}
                                required
                            />
                        </label>
                    </span>
                    {
                        secondMailVisible &&
                        <span className='my-4 mx-2'>
                            <label>
                                {labelText}
                                <input
                                    id="mail-2"
                                    type="mail"
                                    className={inputStyles ? inputStyles : "form-control col-3"}
                                    // onBlur={handleMailValidation}
                                    placeholder="vuelve a ingresar tu e-mail"
                                    value={value}
                                    onBlur={blurHandler}
                                    pattern={pattern}
                                    required
                                />
                            </label>
                        </span>
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <label
                className={labelStyles ? labelStyles : null}
            >
                {labelText}
                <input
                    id={inputID}
                    name={inputID}
                    type={inputType ? inputType : "text"}
                    value={value}
                    className={inputStyles ? inputStyles : null}
                    placeholder={placeholder}
                    onBlur={blurHandler}
                    pattern={pattern}
                    required
                />
            </label>
        </>
    )
}

export default FormInput