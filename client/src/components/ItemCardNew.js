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
        <React.Fragment>
            {/* <Card className="card-container" style={{ width: '18rem', maxHeight:"50rem" }}>
                <Card.Img variant="top" src={item.images_url} />
                <Card.Body>
                    <Card.Title className="card-title">{item.itemname}</Card.Title>
                    <Card.Text className="card-description">{description}</Card.Text>
                    <Card.Text className="card-description">Seller: {sold_by}</Card.Text>
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
                    <Button className="card-button"
                    onClick={renderUserCartItem}
                    variant="primary">
                        Add To Cart
                    </Button>
                </Card.Body>
            </Card> */}

            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                    <div className="bg-white rounded shadow-sm"><img src="https://bootstrapious.com/i/snippets/sn-gallery/img-1.jpg" alt="" class="img-fluid card-img-top" />
                        <div className="p-4">
                            <h5> <a href="#" className="text-dark">Red paint cup</a></h5>
                            <p className="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">JPG</span></p>
                                <div className="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
)}

export default ItemCardNew;