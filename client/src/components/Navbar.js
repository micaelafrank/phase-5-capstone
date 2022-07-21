import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar({ user, setUser }) {
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
        <header>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                {/* {user ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : ( */}
                    <>
                        <Link to="/profile">My Profile</Link>
                        <Link to="/login">Items For Sale</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                {/* )} */}
            </div>
        </header>
    );
}

export default Navbar;