import React, {useState} from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DetailModal from './DetailModal';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ItemCardNew({ item, sold_by, setChange, handleCartClick, change, user, itemname, isForSale, id, color, price, description, images_url, material, condition, size }) {
    const [inCart, setInCart] = useState(false)
    const [details, setDetails] = useState(false)

    function handleCartClick() {
        setInCart(inCart => (!inCart))
    }

    // function handleUpdateItem(){

    // }

    function renderUserCartItem() {
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
        <Card className="card-container" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.images_url} />
            <Card.Body>
                <Card.Title>{item.itemname}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <div className="item-card-flex-price-buybutton">
                    <div className="item-price">
                        <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                        <p style={{ paddingRight: "14px" }}>${price}</p>
                    </div>
                </div>
                <Button 
                onClick={renderUserCartItem}
                variant="primary">
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCardNew;