import React from "react";

function CartItem({cartItem}) {

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "50px", marginRight:"50px", marginTop:"50px"}}>
                <h4 style={{lineHeight:".7", justifyContent:"start" }}>{cartItem.itemname}</h4>
                <p style={{position:"absolute", right:"340px"}}>${cartItem.price}</p>
            </div>
            <h5 style={{ marginLeft: "50px" }}>{cartItem.size}, {cartItem.color}</h5>
            {/* <img src={cartItem.images_url} /> */}
            <div>
                <button style={{ marginLeft: "50px" }}>Remove From Cart</button>
            </div>
        </div>
    )}

export default CartItem;
