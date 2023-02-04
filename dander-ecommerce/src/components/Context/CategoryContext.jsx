import React, { createContext, useState } from 'react';
import getCategorys from '../../services/categoryServices';

export const categorysContext = createContext([])

export default function CategoryContext({ children }) {

    const [categorys, setCategorys] = useState([])
    const [isCategoryLoaded, setIsCategoryLoaded] = useState(false)


    const getLoadedCategorys = () => {
        return categorys;
    }

    const loadCategorys = async () => {
        let data = await getCategorys()
        setCategorys(data);
        setIsCategoryLoaded(true);
        return data
    }

    const categorysLoaded = () => isCategoryLoaded;

    const exports = {
        getLoadedCategorys,
        loadCategorys,
        categorysLoaded
    }

    return (
        <>
            <categorysContext.Provider value={{ ...exports }}>
                {children}
            </categorysContext.Provider>
        </>
    );
}