import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { saveOrder } from '../../../services/orders.DBService';
import { textToCurrency } from '../../../services/textHelperService';
import { cartContext } from '../../Context/CartContext';
import Form from '../../Form/Form';
import FormFieldSet from '../../Form/FormFieldSet/FormFieldSet';
import FormInput from '../../Form/FormInput/FormInput';

function CheckoutCart() {

    let { handleGetItemsInCart, handleClearCart, handleTotalAmountInCart } = useContext(cartContext);

    const [itemsInCart, setItemsInCart] = useState([]);
    const [orderId, setOrderId] = useState();

    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userMail, setUserMail] = useState("");

    const [cartTotal, setCartTotal] = useState("")

    useEffect(() => {
        setItemsInCart(handleGetItemsInCart())
        setCartTotal(textToCurrency(handleTotalAmountInCart()))
    }, [itemsInCart]);

    const handleNameChange = event => setUserName(event.target.value);

    const handleLastNameChange = event => setUserLastName(event.target.value);

    const handleTelephoneChange = event => setUserPhone(event.target.value);

    const handleMailChange = event => setUserMail(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        saveOrder(userName, userLastName, userPhone, userMail, itemsInCart, cartTotal)
            .then(docRef => setOrderId(docRef.id))

        handleClearCart()
    }

    return (
        <>
            <div className='col-4 mx-auto my-2'>

                {orderId ?
                    <>
                        <section className='container-fluid mt-3'>
                            <h4 className='border border-dark rounded p-3 shadow text-center mx-auto bg-dark bg-opacity-50 text-warning'>
                                {`Su numero de orden es: ${orderId}`}
                            </h4>
                            <Link to="/" className='btn btn-warning d-flex justify-content-center'>Volver al menu principal</Link>
                        </section>
                    </>
                    :
                    <Form styles='d-flex flex-column border border-dark rounded p-3 bg-dark bg-opacity-50 text-light shadow'
                        onSubmit={handleSubmit}>

                        <FormFieldSet>
                            <div className='row my-2'>
                                <FormInput
                                    labelText="Nombre"
                                    inputID="checkout-nombre"
                                    inputType="text"
                                    labelStyles="form-label"
                                    inputStyles="form-control col"
                                    placeholder="Ingresa tu nombre"
                                    blurHandler={handleNameChange}
                                />

                                <FormInput
                                    labelText="Apellido"
                                    inputID="checkout-apellido"
                                    inputType="text"
                                    // labelStyles="form-label"
                                    inputStyles="form-control col-3"
                                    placeholder="Ingresa tu apellido"
                                    blurHandler={handleLastNameChange}
                                />
                            </div>

                            <div className='row my-2'>
                                <FormInput
                                    labelText="Teléfono"
                                    inputType="tel"
                                    placeholder="Ingresa tu teléfono: 1234-5678"
                                    blurHandler={handleTelephoneChange}
                                    inputStyles="form-control col-3"
                                    pattern="[0-9]{4}-[0-9]{4}"
                                // inputStyles="my-4"
                                />
                            </div>

                            <div className='mx-2'>
                                <FormInput
                                    inputType="mail"
                                    labelText="E-mail"
                                    blurHandler={handleMailChange}
                                />
                            </div>
                        </FormFieldSet>
                    </Form>
                }
            </div>
        </>
    )
}

export default CheckoutCart