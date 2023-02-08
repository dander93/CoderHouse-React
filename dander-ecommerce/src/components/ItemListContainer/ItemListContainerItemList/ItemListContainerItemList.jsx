import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getAllItems, getItemsByCategory } from '../../../services/products.DBService';
import Loader from '../../Loader/Loader';
import NotFound from '../../NotFound/NotFound';
import ItemListContainerItemListItem from '../ItemListContainerItemListItem/ItemListContainerItemListItem';

function ItemListContainerItemList() {
    const [items, setItems] = useState([])
    const [isItemsLoading, setIsItemsLoading] = useState(true);

    let { category } = useParams();

    const loadItems = () => {
        if (!category) {
            getAllItems()
                .then(result => {
                    setItems(result)
                    setIsItemsLoading(false)
                })
        } else {
            getItemsByCategory(category)
                .then(result => {
                    setItems(result);
                    setIsItemsLoading(false);
                })
        }
    }

    useEffect(() => {
        loadItems();
    }, [category, isItemsLoading])


    if (isItemsLoading) {
        return (
            <>
                <Loader />
            </>
        )
    }


    if (items.length === 0) {
        return (
            <>
                <NotFound />
            </>
        )
    }

    return (
        <>
            <div className='d-flex flex-wrap'>
                {
                    items.map(item =>
                        <ItemListContainerItemListItem
                            key={item.id}
                            id={item.id}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            category={item.category}
                            discount={item.discount}
                        />)
                }
            </div>
        </>
    )
}

export default ItemListContainerItemList