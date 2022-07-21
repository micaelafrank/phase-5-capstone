import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ setUser }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    // When the user submits the username and password. The back end is checking if the username and 
    // password match. If it does, the user information will be set in ‘setUser’.
    function handleLogin(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    navigate("/profile");
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return(
        <>
            <h1>Log me in, coach!</h1>
            <form onSubmit={handleLogin}>
                <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default LogIn;