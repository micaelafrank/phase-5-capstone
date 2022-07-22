import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


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
                <Link className="nav-item" to="/profile">Home</Link>
                {/* {user ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (  */}
                <Link className="nav-item" to="/profile">Profile</Link>
                <Link className="nav-item" to="/buy">Buy</Link>
                <Link className="nav-item" to="/sell">Sell</Link>
                <div class="centered">
                    <button className="nav-button" onClick={handleLogout}>Logout</button>
                {/* )} */}
                </div>
            </div>
            <div id="userNav">
                Signed in as: <Link to="/profile">{user.username}</Link>
            </div>
        </header>
    )};

export default Navigation;