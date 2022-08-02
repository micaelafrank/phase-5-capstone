import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import StripeCheckout from 'react-stripe-checkout';
import StripeContainer from './StripeContainer';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function ShoppingCart({ deleteItem, items, total }){
    const [cartItems, setCartItems] = useState([]);
    const [addedCartItems, setAddedCartItems] = useState(0); 


function deleteItem(id) {
    const updatedCart = uniqueCartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(updatedCart);
}

const uniqueIds = [];

const uniqueCartItems = cartItems.filter(cartItem => {
    const isDuplicate = uniqueIds.includes(cartItem.id);

    if (!isDuplicate) {
        uniqueIds.push(cartItem.id);

        return true;
    }

    return false;
}
);

    useEffect(() => {
        fetch("/mycart")
            .then((r) => r.json())
            .then(data => setCartItems(data.items))
    }, [])

    useEffect(() => {
        let total = 0;
        uniqueCartItems.map((item) => {
         total += item.price
        })
        setAddedCartItems(total)
    }, [cartItems])

    // console.log(uniqueCartItems)
    return(
        <div className="summary">
            <div style={{backgroundColor:"lightgray", borderRadius:"5px", width:"70%", padding:"15px", textAlign:"center", border:"1px solid black", marginTop:"25px", alignItems:"center"}}variant="success">You have {uniqueCartItems.length} items in your cart</div>
            {/* <div class="summary-total-items"><span class="total-items">{total_cart_items}</span> Items in your Cart</div> */}
            {/* {showCart} */}
            <div>
                <ul style={{ listStyleType:"none", fontWeight:"bold", display: "flex", margin:"50px"}}>
                    <li style={{fontSize:"18px"}}>Item Name</li>
                    <li style={{ position: "absolute", fontSize: "18px", right: "340px" }}>Price</li>
                </ul>
            </div>
            <div style={{margin: "30px" }}>{uniqueCartItems.map((cartItem) => {
                return (
                    <CartItem 
                    cartItem={cartItem}
                    key={cartItem.id}
                    id={cartItem.id}
                    price={cartItem.price}
                    setCartItems={setCartItems}
                    cartItems={cartItems}
                    deleteItem={deleteItem}
                    >   
                    </CartItem>
                )
            })}</div>
            <div>
                <ul style={{ listStyleType: "none", fontWeight: "bold", display: "flex", margin: "50px" }}>
                    <li style={{ position: "absolute", right: "340px" }}>Total: {addedCartItems}</li>
                </ul>
            </div>
            <StripeContainer total={addedCartItems} />
        </div>
)};

export default ShoppingCart;