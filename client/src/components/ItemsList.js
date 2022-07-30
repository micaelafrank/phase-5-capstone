import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import SearchBar from './SearchBar';
import DetailModal from './DetailModal';

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
                // search={search}
                // handleSearch={setUserSearch}
                images_url={item.images_url}
                user={user}
                change={change} 
                setChange={setChange}
                // show={modalShow}
                // setModalShow={setModalShow}
                // images={item.target.files[0]}
            />
        )
    })

    return(
        <div style={{backgroundColor:"yellow"}}>
            <SearchBar/>
            <div className="grid-container">
                <div className="items-grid">{itemsList}</div>
            </div>
        </div>
    )
}

export default ItemsList;