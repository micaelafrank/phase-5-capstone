import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import Alert from 'react-bootstrap/Alert';

function ShoppingCart({ change, user }){
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("/mycart")
            .then((r) => r.json())
            .then(data => setCartItems(data.items))
    }, [])

    const uniqueIds = [];

    const uniqueCartItems = cartItems.filter(cartItem => {
        const isDuplicate = uniqueIds.includes(cartItem.id);

        if (!isDuplicate) {
            uniqueIds.push(cartItem.id);

            return true;
        }

        return false;
    });
  
    return(
        <div className="summary">
            <Alert variant="success">You have {uniqueCartItems.length} items in your cart</Alert>
            {/* <div class="summary-total-items"><span class="total-items">{total_cart_items}</span> Items in your Cart</div> */}
            {/* {showCart} */}
            <div>
                <ul style={{ listStyleType:"none", fontWeight:"bold", display: "flex", margin:"50px"}}>
                    <li>Item Name</li>
                    <li style={{ position: "absolute", right: "340px" }}>Price</li>
                </ul>
            </div>
            <div style={{margin: "30px" }}>{uniqueCartItems.map((cartItem) => {
                return (
                    <CartItem 
                    cartItem={cartItem}
                    key={cartItem.id}>
                    </CartItem>
                )
            })}</div>
            <div>
                <ul style={{ listStyleType: "none", fontWeight: "bold", display: "flex", margin: "50px" }}>
                    <li style={{ position: "absolute", right: "340px" }}>Total: SUM</li>
                </ul>
            </div>
            <div className="summary-total">
                <div className="total-title">
                    {/* Total: {sum} */}
                </div>
                {/* <div class="total-value final-value" id="basket-total">{cart_total}</div> */}
            </div>
            <div style={{ padding: "40px", alignItems: "center", textAlign: "center" }}>
                <button style={{ position:"absolute", right:"340px", padding:"12px 17px", alignItems: "center", textAlign:"center", fontSize:"14px"}} className="checkout-cta">Go to Secure Checkout</button>
            </div>
        </div>
)}

export default ShoppingCart;