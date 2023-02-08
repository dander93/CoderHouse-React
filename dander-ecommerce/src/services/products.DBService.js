import { addDoc, collection, doc, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore"
import { getDb } from "./dBService"
import products from "../data/products"
import { getCategoryIDByName, getCategoryNameByID } from "./categorys.DBService";

const PRODUCTS_COLLECTION_NAME = "products";


const getAllItems = async () => {
    try {
        let result = [];
        const productsSnap = await getDocs(collection(getDb(), PRODUCTS_COLLECTION_NAME));

        for (const product of productsSnap.docs) {
            let productResult = product.data()
            productResult.category = await getCategoryNameByID(productResult.categoryID);
            productResult.id = product.id;
            result.push(productResult)
        }
        return result;
    } catch (ex) {
        console.error(ex)
    }
}

const getItemByID = async itemID => {
    try {
        const result = await getDoc(doc(getDb(), PRODUCTS_COLLECTION_NAME, itemID))
        if (result.exists()) {
            return ({ ...result.data(), id: result.id });
        }

        throw new Error("categoria no encontrada");
    }
    catch (ex) {
        console.error(ex)
    }
}


const getItemsByCategory = async (categoryName) => {
    try {
        let result = [];
        const categoryID = await getCategoryIDByName(categoryName)

        if (categoryID) {

            const q = query(collection(getDb(), PRODUCTS_COLLECTION_NAME), where("categoryID", "==", categoryID));
            const productsSnap = await getDocs(q);

            for (const product of productsSnap.docs) {
                let productResult = product.data();
                productResult.category = await getCategoryNameByID(productResult.categoryID);
                productResult.id = product.id;
                result.push(productResult);
            }
        }

        return result;
    } catch (ex) {
        console.error(ex);
    }
}

const populateProductsCollection = async () => {
    try {
        const batch = writeBatch(getDb())

        for (const product of products) {

            // products.forEach(async product => {
            let productData = {
                title: product.title,
                price: product.price,
                description: product.description,
                categoryID: await getCategoryIDByName(product.category),
                image: product.image,
                discount: product.discount ? product.discount : 0
            }

            let doctRef = await addDoc(collection(getDb(), PRODUCTS_COLLECTION_NAME), productData)
            batch.set(doctRef, productData);
            // })
        }

        await batch.commit();
    } catch (ex) {
        console.error(ex);
    }
}

export {
    getAllItems,
    getItemByID,
    getItemsByCategory,
    populateProductsCollection
}