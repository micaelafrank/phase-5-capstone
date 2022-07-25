import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navigation({ user, setUser }) {
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
                <span id="userNavCartContainer">
                    <ShoppingCartOutlinedIcon />
                </span>
            </div>
        </header>
    )};

export default Navigation;