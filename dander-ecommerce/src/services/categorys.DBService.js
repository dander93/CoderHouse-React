import { addDoc, collection, doc, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore"
import categorys from "../data/categorys";
import { getDb } from "./dBService"

const CATEGORYS_COLLECTION_NAME = "categorys";

const getCategorys = async () => {
    try {

        const categoryDocs = await getDocs(collection(getDb(), CATEGORYS_COLLECTION_NAME))

        return categoryDocs.docs.map(category => ({ ...category.data(), id: category.id }))

    } catch (ex) {
        console.error(ex)
    }
}

const populateCategoryCollection = async () => {
    try {

        const batch = writeBatch(getDb());

        categorys.forEach(async cat => {
            let docref = await addDoc(collection(getDb(), CATEGORYS_COLLECTION_NAME), { name: cat })
            batch.set(docref, null)
        });

        await batch.commit();

    } catch (ex) {
        console.error(ex);
    }
}

const getCategoryIDByName = async categoryName => {
    try {
        const q = query(collection(getDb(), CATEGORYS_COLLECTION_NAME), where("name", "==", categoryName));
        const snap = await getDocs(q);

        if (!snap.empty) {
            return snap.docs[0].id
        }

        throw new Error("categoria no encontrada");
    } catch (ex) {
        console.error(ex)
    }
}

const getCategoryNameByID = async categoryID => {
    try {
        const result = await getDoc(doc(getDb(), CATEGORYS_COLLECTION_NAME, categoryID))

        if (result.exists()) {
            return result.data().name
        }

        throw new Error("categoria no encontrada");
    }
    catch (ex) {
        console.error(ex)
    }
}

export {
    populateCategoryCollection,
    getCategorys,
    getCategoryIDByName,
    getCategoryNameByID
}