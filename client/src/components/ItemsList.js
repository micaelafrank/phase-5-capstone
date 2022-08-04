import React, { useState, useEffect } from 'react';
import ItemCardNew from './ItemCardNew';
// import SearchBar from './SearchBar';

function ItemsList({ user, cartItem, change, setChange}){
    // handleDeleteMyItem, handleUpdateItems,
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/items")
            .then((r) => r.json())
            .then(data => { setItems(data) })
    }, [])

    // function renderNewItem(newItem){
    //     setItems(...items, newItem);
    // }

//     function handleDeleteMyItem() {
//         fetch(`/items/${id}`, {
//             method: 'DELETE',
//         });

//         const updatedItems = items.filter((item) => item.id !== id);
//         handleUpdateItems(updatedItems);
//     }
// }
    const itemsList = items.map((item) => {
        return (
            <ItemCardNew
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
                images_url={item.images_url}
                user={user}
                change={change} 
                setChange={setChange}
                // items={items}
                // setItems={setItems}
                // handleDeleteMyItem={handleDeleteMyItem}
                // handleUpdateItems={handleUpdateItems}
            />
        )
    })

    return(
        <div>
            {/* <SearchBar/> */}
            <div className="grid-container">
                <div className="items-grid">{itemsList}</div>
            </div>
        </div>
    )
}

export default ItemsList;