import React, {useState} from 'react';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import {Button, Card, Alert, Modal} from 'react-bootstrap';

function ItemCardNew({ item, sold_by, setChange, items, setItems, handleCartClick, change, user, itemname, isForSale, id, color, price, description, images_url, material, condition, size }) {
    const [inCart, setInCart] = useState(false)
    const [details, setDetails] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [open, setOpen] = useState(false);


    console.log(open)
    const handleModalBtn = (e) => {
        console.log(e.target)
        setOpen(true)
        console.log(open)
    }

    function handleCartClick() {
        setInCart(inCart => (!inCart))
        setWasClicked(wasClicked => (!wasClicked));
        <Alert key={'success'} variant={'success'}>Added to cart</Alert>
    }

    function handleDelete(id) {
        fetch(`items`, {
            method: "DELETE",
        })
        const updatedItemsList = items.filter((item) => item.id !== id);
        setItems(updatedItemsList);
    }

    // function removeFromMarketplace(){
    //     console.log("I am a modal")
    //     return(
    //     <Modal>
    //         <Modal.Header>
    //             <Modal.Title>Are you sure?</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>If you delete this item, it will no longer be for sale and will be removed from buyers' carts.</Modal.Body>
    //         <Modal.Footer>
    //             <Button variant="secondary" onClick={() => setShow(false)}>
    //                 Cancel
    //             </Button>
    //             <Button variant="primary" onClick={handleDelete}>
    //                 Delete Item
    //             </Button>
    //         </Modal.Footer>
    //     </Modal>
    //     )
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
        <React.Fragment>
            <Card className="card-container" style={{ width: '25rem', maxHeight:"50rem" }}>
                <div style={{height:"420px"}}>
                    <Card.Img variant="top" src={item.images_url}/>
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
                    onClick={()=> setOpen(true)}>Delete</Button> : 
                    (<Button className={!wasClicked ? "cardButtonAddCart" : "cardButtonAdded"}
                    onClick={renderUserCartItem} 
                    style={{backgroundColor: !wasClicked ? "light gray" : "green"}}
                    variant="primary">
                        Add To Cart
                    </Button>)}
                    {wasClicked ? <Alert key={'success'} variant={'success'}>Added to cart</Alert> : null}
                </Card.Body>
            </Card>
            <>
        {open ? 
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            >
                <h1>Are you sure?</h1>
                <p>If you delete this item, it will no longer be for sale and will be removed from buyers' carts.</p>
                {/* <button variant="secondary" onClick={(e) => handleModalBtn(e)}>Cancel</button> */}
                <button variant="primary" onClick={handleDelete}>Delete Item</button>
            </Modal> : null}
                </>
        </React.Fragment>
)}

export default ItemCardNew;