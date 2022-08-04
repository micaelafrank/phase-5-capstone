import React, {useEffect} from "react";

function PurchaseLandingPage({items, updateItems, total, cartItem, deleteBoughtItem}){

    //delete items from cart once checkout is successful 
    useEffect(() => {
        fetch("/emptycart", {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(data => console.log(data))
    }, [])

    useEffect(() => {
        const soldItemUpdate = {
            // ***************************
            // isForSale: !isForSale,
            // ***************************
        };

        //update item.isForSale to false, and then filter it out of items list in App 
        fetch(`/items`, {
            // ***************************
            // this should be the fetch URL vvv
            // `/items/${id}`
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                soldItemUpdate,
            )
        })
            .then((r) => r.json())
            .then(data => updateItems(data))
    }, [])        

    return(
        <div style={{alignItems:"center", textAlign:"center"}}>
            <iframe src="https://gifer.com/embed/Syi5" width="auto" height="300px" frameBorder="0" allowFullScreen></iframe>
            <h1>Order Confirmation</h1>
            <p>We've got your order! Sit tight...your new cubing item is on its way!</p>
        </div>
    )
}

export default PurchaseLandingPage;