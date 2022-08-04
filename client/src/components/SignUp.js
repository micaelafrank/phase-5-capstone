import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';


function SignUp({ user, setUser }) {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [userCart, setCart] = useState(null);

    const [userFromSignup, setUserFromSignup] = useState({});
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
                r.json().then((user) => {
                    setUser(user)
                    console.log(user)
                    fetch("/create_cart", {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ user_id: user.id }),
                    }).then((res) => res.json())
                        .then(setCart(userCart))
                })
                .then(navigate("/profile"));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    // function createCart(user) {
    //         fetch("/create_cart", {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ user_id: user.id }),
    //         }).then((res) => res.json())
    //           .then(setCart(userCart))
    //         }

    return(
        <>
            <header style={{ float: "right", height: "10em" }}>
                <button style={{ padding: "3px 10px", marginRight: "10px" }} onClick={() => navigate("/home")}>Home</button>
                <button style={{ padding: "3px 10px" }} onClick={() => navigate("/login")}>Login</button>
            </header>
            <form onSubmit={handleSignUp}>
                <h1>Sign Up</h1>
                <Form.Group>
                    <Form.Label>First and last name:</Form.Label>
                    <Form.Control 
                    type="text" id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control
                    type="text" id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Pick a username:</Form.Label>
                    <Form.Control
                    type="text" id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                    type="password" id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                    type="password" id="passwordConfirmation"
                    value={password_confirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="checkbox"
                        label="I agree to the Terms and Conditions"
                    />
                </Form.Group>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;