import React from 'react'
import { Link } from 'react-router-dom'
import { textToCurrency, textToPercentual } from '../../../services/textHelperService'

function ItemListContainerItemListItem({ id, title, price, description, image, category, discount }) {


    if (discount) {

        return (
            <>
                <article className='card shadow border border-dark m-2 rounded'>
                    <img className='card-img-top' src={image} alt={description} />
                    <h4 className='card-title fw-semibold fs-6 p-2'>{title}</h4>
                    <p className='card-text p-2'>{description}</p>
                    <div className='d-block align-self-end p-2'>
                        <p className="text-success rounded-pill">
                            {textToCurrency(price - (price * discount))}
                            <span className="position-absolute translate-middle text-danger text-decoration-line-through badge fst-italic">
                                {textToCurrency(price)}
                            </span>
                        </p>
                        <Link to={`/${category}/${id}/detail`} className="link-warning">Ver detalle</Link>
                    </div>
                </article>
            </>
        )
    }
    return (
        <>
            <article className='card shadow border border-dark m-2 rounded'>
                <img className='card-img-top' src={image} alt={description} />
                <h4 className='card-title fw-semibold fs-6 p-2'>{title}</h4>
                <p className='card-text p-2'>{description}</p>
                <div className='d-block align-self-end p-2 text-black'>
                    <p>{textToCurrency(price)}</p>
                    <Link to={`/${category}/${id}/detail`} className="link-warning">Ver detalle</Link>
                </div>
            </article>
        </>
    )
}

export default ItemListContainerItemListItem