import React, {useContext, useState} from 'react';
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import StripeContainer from './StripeContainer';

function ItemCard({ item, sold_by, setChange, handleCartClick, change, user, itemname, isForSale, id, color, price, description, images_url, material, condition, size }){
    // handleDeleteMyItem, handleUpdateItem,
    const [inCart, setInCart] = useState(false)
    const [details, setDetails] = useState(false)

    function handleCartClick() {
        setInCart(inCart => (!inCart))
    }

    // function handleUpdateItem(){

    // }

    function renderUserCartItem(){
        console.log(user)

        const newItemToAdd = {
            user_cart_id: user.user_cart.id,
            item_id: item.id,
        }
        console.log(newItemToAdd)
        // const cartItem = item
        fetch("/addtocart", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
         },
            body: JSON.stringify(newItemToAdd),
        })
            .then(res => res.json())
            .then(setChange(!change))
            handleCartClick();
    }

    return(
        <div className="one-item-card card">
            {/* start of header for item card */}
            {/* one-item-card
            <div className="item-card-header">
                <div className="flex-item-icons-and-soldby">
                    <div className="item-header-icons"> */}
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
                                className={inCart ? "pointer-events" : null}
                            >
                                ADD TO CART
                             </button>
                        </div>
                    {/* </div>
                </div>
            </div> */}
            {/* //end of item card header */}

            {/* //start of item card middle component -- item name with item photos */}
            <div className="item-card-middle" style={{height:"25em"}}>
                <div className="item-middle-header">
                    
                    <h3>{itemname}</h3>
                    <>  
                        <button onClick={() => setDetails(true)} >
                            VIEW DETAILS
                        </button>
                    </>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                                className="item-card-image d-block w-100" 
                                alt="1st Slide Image" 
                                src={images_url} 
                            />
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <img
                                className="item-card-image d-block w-100"
                                alt="2nd Slide Image"
                                src={images_url}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="item-card-image d-block w-100"
                                alt="3rd Slide Image"
                                src={images_url}
                            />
                        </Carousel.Item> */}
                    </Carousel>
                </div>
            </div>
            

            {/* bottom part of item card component -- price, likes, comments, buy, and view more */}
            <div className="item-card-bottom">
                <div className="item-card-flex-price-buybutton">
                    <div className="item-price">
                        <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                        <p style={{ paddingRight: "14px" }}>${price}</p>
                    </div>
                </div>
                <div className="item-price item-card-user-button-name">
                    <AccountCircleOutlinedIcon />
                    <p style={{ paddingLeft: "4px" }}>Posted by {sold_by}</p>
                </div>
                {/* <div id="heartButton" className="item-price">
                    <FavoriteBorderOutlinedIcon />
                    <p style={{ paddingLeft: "5px", color:"black"}}>Num of likes</p>
                </div> */}
            </div>
            {/* <DetailModal /> */}
        </div>
    )
}

export default ItemCard;