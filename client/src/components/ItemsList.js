import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import SearchBar from './SearchBar';

function ItemsList({ user, cartItem, change, setChange }){
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/items")
            .then((r) => r.json())
            .then(data => { setItems(data) })
    }, [])

    // function renderNewItem(newItem){
    //     setItems(...items, newItem);
    // }

    const itemsList = items.map((item) => {
        return (
            <ItemCard
                item={item}
                key={item.id}
                user_id={item.user_id}
                id={item.id}
                price={item.price}
                itemname={item.itemname}
                color={item.color}
                material={item.material}
                description={item.description}
                condition={item.condition}
                size={item.size}
                sold_by={item.sold_by}
                likes={item.likes}
                isForSale={item.isForSale}
                // show_cart_id={item.show_cart_id}
                images_url={item.images_url}
                user={user}
                change={change} 
                setChange={setChange} 
                // images={item.target.files[0]}
            />
        )
    })

    return(
        <div>
            <SearchBar/>
            <div className="grid-container">
                <div className="items-grid">{itemsList}</div>
            </div>
        </div>
    )
}

export default ItemsList;