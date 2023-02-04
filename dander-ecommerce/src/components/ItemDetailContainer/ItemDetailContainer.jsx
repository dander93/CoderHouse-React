import { React, useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getItemByCategoryAndID } from '../../services/itemServices';
import ActionButton from '../ButtonContainer/ActionButton/ActionButton';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import { toast } from 'react-toastify';
import { cartContext } from '../Context/CartContext';
import NotFound from '../NotFound/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader/Loader';

function ItemDetailContainer() {

    const { handleAddToCart } = useContext(cartContext);
    const params = useParams();
    const navigate = useNavigate();
    const [itemCounter, setItemCounter] = useState(1);
    const [item, setItem] = useState();
    const [isItemLoading, setIsItemLoading] = useState(true);

    useEffect(() => {
        getItemByCategoryAndID(params.itemID, params.category)
            .then((itemFound) => {
                setItem(itemFound)
                setIsItemLoading(false)
            })
            .catch(err => {
                console.error(err)
                setIsItemLoading(false)
            });
    },
        [item, params])

    const handleGoBack = () => navigate(-1)

    const handleAddItemButton = () => setItemCounter(itemCounter + 1);


    const handleRemItemButton = () => {
        if (itemCounter > 1) {
            setItemCounter(itemCounter - 1);
        }
    }

    const handleCartSaveButton = () => {
        if (itemCounter > 0) {

            item.count = itemCounter;
            handleAddToCart({ ...item })

            toast.success(`Agregaste "${item.title}" x ${itemCounter} al carrito!`);
            handleGoBack()
        }
    }

    if (isItemLoading) {
        return (
            <>
                <Loader />
            </>
        )
    }

    if (item)
        return (
            <>
                <section className='item-detail-container container-fluid my-2 col-8 border border-dark bg-dark bg-opacity-25 rounded-1'>
                    <article className='mt-2 d-flex flex-column my-2'>
                        <header className='d-flex justify-content-between my-1'>
                            <h4 className='text-warning'>{item.title}</h4>
                            {/* <Link to={`/${params.category}`} ></Link> */}
                            <ActionButton callback={handleGoBack} text="" className="btn btn-close" />
                        </header>
                        <img src={item.image} alt={item.description} className="border border-dark rounded-1 col-6 align-self-center" />
                        <p className='my-2 p-2 border border-dark rounded-1'>{item.description}</p>
                        <h4 className='text-end text-shadow-dark'>Precio: {item.price}$</h4>

                        <ButtonContainer
                            addButtonText="Agregar"
                            remButtonText="Quitar"
                            counterState={itemCounter}
                            addCallback={handleAddItemButton}
                            remCallback={handleRemItemButton}>

                            <ActionButton
                                className='btn btn-warning align-self-center col-5 border border-dark'
                                text="Agregar al carrito"
                                callback={handleCartSaveButton} />
                        </ButtonContainer>

                    </article>
                </section>
            </>
        );

    return (
        <>
            <NotFound />
        </>
    )
}

export default ItemDetailContainer;