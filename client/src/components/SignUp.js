import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function SignUp({ user, setUser }) {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [userCart, setCart] = useState(null);
    // const [formData, setFormData] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullname, email, username, password, password_confirmation }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
                createCart(user);
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    function createCart(user) {
            fetch("/create_cart", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user_id: user.id }),
            }).then((data) => setCart(data));
            navigate("/profile");
    }

    return(
        <>
            <header style={{ float: "right", height: "10em" }}>
                <button style={{ padding: "3px 10px", marginRight: "10px" }} onClick={() => navigate("/home")}>Home</button>
                <button style={{ padding: "3px 10px" }} onClick={() => navigate("/login")}>Login</button>
            </header>
            <h1>I am signing up</h1>
            <form onSubmit={handleSignUp}>
                <label>First and last name:</label>
                <input 
                type="text" id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                />

                <label>Email Address:</label>
                <input
                type="text" id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label>Pick a username:</label>
                <input
                type="text" id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password:</label>
                <input
                type="password" id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <label>Password:</label>
                <input
                type="password" id="passwordConfirmation"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;