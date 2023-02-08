import React, { createContext, useState } from 'react';
import { getCategorys } from '../../services/categorys.DBService';

const categorysContext = createContext([]);

function CategoryContext({ children }) {

    const [categorys, setCategorys] = useState([]);

    const loadCategorys = async () => {
        const categorys = await getCategorys();
        setCategorys(categorys);
        return categorys;
    };

    const isCategorysLoaded = () => categorys.length > 0;

    const getLoadedCategorys = () => categorys;

    const getCategoryIDByName = category => categorys.find(cat => cat.name = category).id


    const exports = {
        loadCategorys,
        isCategorysLoaded,
        getLoadedCategorys,
        getCategoryIDByName
    }

    return (
        <>
            <categorysContext.Provider value={{ ...exports }}>
                {children}
            </categorysContext.Provider>
        </>
    );
}

export {
    categorysContext,
    CategoryContext as default
}