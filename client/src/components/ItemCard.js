import React, {useContext, useState} from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useRoutes } from 'react-router-dom';

function ItemCard({ item, sold_by, setChange, change, updateCartIcon, inUsersCart, user, updateUserCart, itemname, isForSale, id, color, price, description, images_url, material, condition, size}){

    function renderUserCartItem(){
        // console.log(item)
        // console.log(user)
        // console.log(user.cart_id_show)

        const newItemToAdd = {
            user_cart_id: user.cart_id_show,
            item_id: item.id,
        }
        console.log(newItemToAdd)
        // const cartItem = item
        fetch("/mycart", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
         },
            body: JSON.stringify(newItemToAdd),
        })
            .then(res => res.json())
            .then(setChange(!change))
    }

    return(
        <div className="one-item-card">
            {/* start of header for item card */}
            <div className="item-card-header">
                <div className="flex-item-icons-and-soldby">
                    <div className="item-header-icons">
                        <div className="item-card-button heartItemButton" style={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
                            <FavoriteBorderOutlinedIcon />
                            <button
                                style={{ padding: "5px", backgroundColor: "black", color: "white", fontWeight: "bold" }}
                                // onClick={addToSaveList}
                                >
                                SAVE
                            </button>
                        </div>
                        <div 
                        style={{display:"flex", alignItems:"center", paddingLeft:"15px", fontWeight:"bold"}} 
                        className="item-card-button"
                        >
                            <AddShoppingCartOutlinedIcon />
                            <button
                             style={{padding: "5px", backgroundColor:"black", color:"white", fontWeight:"bold"}}
                                onClick={renderUserCartItem}
                            >
                                ADD TO CART
                             </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* //end of item card header */}

            {/* //start of item card middle component -- item name with item photos */}
            <div className="item-card-middle">
                <div className="item-middle-header">
                    <h3>{itemname}</h3>
                    <button className="details-btn">VIEW DETAILS</button>
                    <img className="item-card-image" alt="Placeholder" src={images_url} />
                </div>
            </div>

            {/* bottom part of item card component -- price, likes, comments, buy, and view more */}
            <div className="item-card-bottom">
                <div className="item-card-flex-price-buybutton">
                    <div className="item-price">
                        <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                        <p style={{ paddingRight: "14px" }}>${price}</p>
                    </div>
                    <div className="item-card-buy-button">
                        <button className="buy-btn">BUY NOW</button>
                    </div>
                </div>
                <div className="item-price item-card-user-button-name">
                    <AccountCircleOutlinedIcon />
                    <p style={{ paddingLeft: "4px" }}>Posted by {item.sold_by}</p>
                </div>
                {/* <div id="heartButton" className="item-price">
                    <FavoriteBorderOutlinedIcon />
                    <p style={{ paddingLeft: "5px", color:"black"}}>Num of likes</p>
                </div> */}
            </div>
        </div>
    )
}

export default ItemCard;