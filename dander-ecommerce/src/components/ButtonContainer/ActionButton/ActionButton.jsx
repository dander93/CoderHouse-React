import React from 'react'

function ActionButton({ text, callback, className }) {
    return (
        <>
            <button onClick={callback} className={className ? className : "btn btn-warning border border-dark rounded-1 col-1"}>{text}</button>
        </>
    )
}

export default ActionButton