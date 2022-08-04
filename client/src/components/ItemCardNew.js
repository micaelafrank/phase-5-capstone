import React, { useState } from 'react';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import { Button, Card, Alert, Modal } from 'react-bootstrap';

function ItemCardNew({ item, sold_by, setChange, items, setItems, handleCartClick, change, user, itemname, isForSale, id, color, price, description, images_url, material, condition, size }) {
    const [inCart, setInCart] = useState(false)
    const [details, setDetails] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [open, setOpen] = useState(false);

    // console.log(open)
    // const handleModalBtn = (e) => {
    //     console.log(e.target)
    //     setOpen(true)
    //     console.log(open)
    // }

    function handleCartClick() {
        setInCart(inCart => (!inCart))
        setWasClicked(wasClicked => (!wasClicked));
        <Alert key={'success'} variant={'success'}>Added to cart</Alert>
    }

    function handleDelete(id) {
        fetch(`items/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
            .then(data => setItems(items.filter((item) => item.id !== id)))        
    }


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

    return (
        <>
            <Card className="card-container" style={{ width: '25rem', maxHeight: "50rem" }}>
                <div style={{ height: "420px" }}>
                    <Card.Img variant="top" src={item.images_url} style={{ height: "auto", maxHeight: "400px" }} />
                </div>
                <Card.Body>
                    <Card.Title className="card-title">{item.itemname}</Card.Title>
                    <Card.Text className="card-description">{description}</Card.Text>
                    <Card.Text className="card-description">Seller: <span style={{ color: "blue" }}>{sold_by}</span></Card.Text>
                    <div className="item-card-flex-price-buybutton">
                        <div className="item-price">
                            <SellOutlinedIcon style={{ paddingRight: "4px" }} />
                            <p style={{ paddingRight: "14px" }}>${price}</p>
                        </div>
                    </div>
                    {user.id === item.user_id ?
                        <Button className="cardButtonDelete"
                            onClick={() => {
                                alert('Are you sure you want to delete this item?')
                                handleDelete(item.id);
                            }}>Delete</Button> :
                        (<Button className={!wasClicked ? "cardButtonAddCart" : "cardButtonInCart"}
                            onClick={renderUserCartItem}
                            variant="primary">
                            Add To Cart
                        </Button>)}
                    {wasClicked ? <Alert key={'success'} variant={'success'}>Added to cart</Alert> : null}
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCardNew;