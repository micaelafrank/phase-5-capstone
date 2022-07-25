import React from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

function ItemCard({sold_by, itemname, item, id, color, price, description, material, condition, size}){

    return(
        <div className="one-item-card">
            {/* start of header for item card */}
            <div className="item-card-header">
                <div className="flex-item-icons-and-soldby">
                    <div className="item-header-icons">
                        <div className="item-card-button">
                            <BookmarkBorderOutlinedIcon />
                            {/* <p style={{ paddingLeft: "8px" }}>Save Item</p> */}
                        </div>
                        <div className="item-card-button">
                            <AddShoppingCartOutlinedIcon />
                            {/* <p style={{ paddingLeft: "8px" }}>Add To Cart</p> */}
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
                    <img className="item-card-image" alt="Placeholder" src="https://i.ibb.co/zsXXjLW/hanger-blank-white-t-shirt-wooden-background-hanger-blank-white-t-shirt-wooden-background-space-text.jpg" />
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
                    <p style={{ paddingLeft: "4px" }}>Posted by <a href="/profile/${user_id}">{item.sold_by}</a></p>
                </div>
                <div className="item-price">
                    <FavoriteBorderOutlinedIcon />
                    <p style={{ paddingLeft: "5px" }}>Num of likes</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;