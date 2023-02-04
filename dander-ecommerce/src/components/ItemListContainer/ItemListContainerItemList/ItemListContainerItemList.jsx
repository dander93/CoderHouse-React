import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getAllItems, getItemsByCategory } from '../../../services/itemServices'
import Loader from '../../Loader/Loader';
import ItemListContainerItemListItem from '../ItemListContainerItemListItem/ItemListContainerItemListItem';

function ItemListContainerItemList() {
    const [items, setItems] = useState([])
    const [isItemsLoading, setIsItemsLoading] = useState(true);

    let { category } = useParams();

    useEffect(() => {
        if (!category) {
            getAllItems()
                .then(items => {
                    setItems(items)
                    setIsItemsLoading(false)
                });
        }
        else {
            getItemsByCategory(category)
                .then(items => {
                    setItems(items)
                    setIsItemsLoading(false)
                });
        }
    }, [category, isItemsLoading])


    if (isItemsLoading) {
        return (
            <>
                <Loader />
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
                        />)
                }
            </div>
        </>
    )
}

export default ItemListContainerItemList