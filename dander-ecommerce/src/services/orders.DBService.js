import { addDoc, collection } from "firebase/firestore"
import { getDb } from "./dBService";

const ORDERS_COLLECTION_NAME = "orders";

const saveOrder = async (userName, userLastName, userPhone, userMail, itemsInCart, finalPrice) => {

    try {
        const order = {
            finalPrice: finalPrice,
            products: itemsInCart,
            client: {
                name: userName,
                lastName: userLastName,
                phone: userPhone,
                mail: userMail
            }
        }

        return await addDoc(collection(getDb(), ORDERS_COLLECTION_NAME), order)
    }
    catch (exception) {
        console.error(exception)
    }
}


export {
    saveOrder
}