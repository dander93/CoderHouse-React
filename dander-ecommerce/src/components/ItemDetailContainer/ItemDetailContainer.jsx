import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getItemByCategoryAndID } from '../../services/itemServices';
import ActionButton from '../ButtonContainer/ActionButton/ActionButton';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function ItemDetailContainer({ setCartCounter }) {

    const [itemCounter, setItemCounter] = useState(0);

    const [item, setItem] = useState();

    let params = useParams();

    useEffect(() => {
        getItemByCategoryAndID(params.itemID, params.category)
            .then((itemFound) => {
                console.log(itemFound)
                setItem(itemFound)
            })
            .catch(err => {
                console.error(err)
            });
    },
        [item])


    function handleAddItem() {
        setItemCounter(itemCounter + 1);
    }

    function handleRemItem() {
        if (itemCounter > 1) {
            setItemCounter(itemCounter - 1);
        }
    }


    function handleCartSave() {
        if (itemCounter > 0) {
            setCartCounter((state) => {
                return state + itemCounter
            });
            toast.success(`Agregaste "${item.title}" x ${itemCounter} al carrito!`);
        }
    }

    return (
        <>
            {
                item ?
                    <>
                        <section className='item-detail-cotnainer container-fluid my-2 col-8 border border-dark bg-dark bg-opacity-25 rounded-1'>
                            <article className='mt-2 d-flex flex-column my-2'>
                                <header className='d-flex justify-content-between my-1'>
                                    <h4 className='text-warning'>{item.title}</h4>
                                    <Link to={`/${params.category}`} className="btn btn-close"></Link>
                                </header>
                                <img src={item.image} alt={item.description} className="border border-dark rounded-1 col-6 align-self-center" />
                                <p className='my-2 p-2 border border-dark rounded-1'>{item.description}</p>
                                <h4 className='text-end text-shadow-dark'>Precio: {item.price}$</h4>

                                <ButtonContainer
                                    addButtonText="Agregar"
                                    remButtonText="Quitar"
                                    counterState={itemCounter}
                                    addCallback={handleAddItem}
                                    remCallback={handleRemItem}>

                                    <ActionButton
                                        className='btn btn-warning align-self-center col-5 border border-dark'
                                        text="Agregar al carrito"
                                        callback={handleCartSave} />
                                </ButtonContainer>

                            </article>
                        </section>
                    </>
                    :
                    <h4>ITEM NO ENCONTRADO</h4>
            }
        </>
    )
}

export default ItemDetailContainer;