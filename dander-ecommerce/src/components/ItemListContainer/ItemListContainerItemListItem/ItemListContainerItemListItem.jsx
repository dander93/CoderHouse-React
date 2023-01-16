import React from 'react'
import { Link } from 'react-router-dom'

function ItemListContainerItemListItem({ id, title, price, description, image ,category}) {
    return (
        <>
            <article className='card shadow border border-dark m-2 rounded'>
                <img className='card-img-top' src={image} alt={description} />
                <h4 className='card-title fw-semibold fs-6 p-2'>{title}</h4>
                <p className='card-text p-2'>{description}</p>
                <div className="d-block align-self-end p-2">
                    <p>{price}$</p>
                    <Link to={`/${category}/${id}/detail`} className="link-warning" z>Ver detalle</Link>
                </div>
            </article>
        </>
    )
}

export default ItemListContainerItemListItem