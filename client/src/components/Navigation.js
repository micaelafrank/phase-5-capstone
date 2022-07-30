import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AddToCart from "./ShoppingCart";

function Navigation({ user, setUser, itemCount }) {
    // const [itemCount, setItemCount] = useState(0);
    const navigate = useNavigate();

    // function handleLogout() {
    //     fetch("/logout", {
    //         method: "DELETE",
    //     }).then((r) => {
    //         if (r.ok) {
    //             setUser({});
    //             navigate('/login')
    //         }
    //     })};

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate('/login')
            }
        });
    }

    function openShoppingCart(){
        navigate("/mycart")
    }

    return (
        <header className="navbarContainer">
            <div className="navbar-nav navbar-css">
                <Link className="nav-item" exact="true" to="/">Home</Link>
                {/* {user ? (
                <button onClick={handleLogout}>Logout</button>
                ) : (  */}
                <Link className="nav-item" to="/profile">Profile</Link>
                <Link className="nav-item" to="/buy">Buy</Link>
                <Link className="nav-item" to="/sell">Sell</Link>
                <div className="centered">
                    <button className="nav-button" onClick={handleLogout}>Logout</button>
                {/* )} */}
                </div>
            </div>
            <div id="userNav" style={{ paddingRight: "20px" }}>
                <p style={{paddingRight:"20px"}}>Signed in as: <span style={{ fontWeight: "bold" }}>{user.username}</span></p>
                <div style={{ display: "block", padding: 30 }}>
                    <div onClick={openShoppingCart}>
                        <Badge color="secondary" badgeContent={itemCount} alignItems="center">
                            View Cart< ShoppingCartIcon />{" "}
                        </Badge>
                    </div>
                </div>
                    {/* <span id="userNavCartContainer">
                    <ShoppingCartOutlinedIcon />
                </span> */}
            </div>
        </header>
    )};

export default Navigation;