import React from 'react'
import ActionButton from './ActionButton/ActionButton'

function ButtonContainer({ remCallback, remButtonText, addCallback, addButtonText, counterState, children }) {

    return (
        <>
            <div className='d-flex flex-column my-2'>
                <div className='d-flex flex-row justify-content-center my-2'>
                    <ActionButton 
                        text={remButtonText} 
                        callback={remCallback} />
                    <div className='col-1 btn text-center'>
                        <h5>
                            {counterState ? counterState : 0}
                        </h5>
                    </div>
                    <ActionButton text={addButtonText} callback={addCallback} />
                </div>
                {children}
            </div>
        </>
    )
}

export default ButtonContainer