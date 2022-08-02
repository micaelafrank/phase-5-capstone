import React from "react";
// import { useNavigate } from "react-router-dom";

function CartItem({cartItem, deleteItem, id}) {
// const navigate = useNavigate();

    function removeFromCart() {
        fetch(`/user_cart_items/${id}`, { 
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                deleteItem(id);
            }
        });
    }

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "50px", marginRight:"50px", marginTop:"50px"}}>
                <h4 style={{lineHeight:".7", justifyContent:"start",width:"250px" }}>{cartItem.itemname}</h4>
                <div>
                    <img style={{ marginLeft: "200px", float:"right", width: "100px", height: "auto" }} src={cartItem.images_url} />
                    <p style={{position:"absolute", right:"340px"}}>${cartItem.price}</p>
                </div>
            </div>
            <h5 style={{ marginLeft: "50px" }}>Size:{cartItem.size}, Color:{cartItem.color}</h5>
            <p style={{ marginLeft: "50px" }}>{cartItem.description}</p>
            <div style={{marginTop:"10px"}}>
                <button style={{ marginLeft: "50px",padding:"10px"}} onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )}

export default CartItem;
