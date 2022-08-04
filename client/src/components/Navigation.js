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
import { red } from "@mui/material/colors";

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
        <header className="navbarContainer" >
            <div className="navbar-nav navbar-css">
                <a href="/"><img src="./rainbow-logo.png" width="100px" style={{ paddingLeft: "15px", paddingRight: "10px"}} /></a>
                {/* <Link className="nav-item" exact="true" to="/">Home</Link> */}
                {/* {user ? (
                <button onClick={handleLogout}>Logout</button>
                ) : (  */}
                <div className="centered">
                    <button className="nav-button" style={{ color: "black", border: "2px solid black" }}><Link to="/profile">Profile</Link></button>
                    <button className="nav-button" style={{ color: "black", border: "2px solid black" }}><Link to="/buy">Buy</Link></button>
                    <button className="nav-button" style={{ color: "black", border: "2px solid black" }}><Link to="/sell">Sell</Link></button>
                    <button className="nav-button" style={{ color: "black", border: "2px solid black" }} onClick={handleLogout}>Logout</button>
                {/* )} */}
                </div>
            </div>
            <div id="userNav" style={{ paddingRight: "20px" }}>
                <p style={{paddingRight:"20px"}}>Signed in as: <span style={{ fontWeight: "bold" }}>{user.username ?user.username : null}</span></p>
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