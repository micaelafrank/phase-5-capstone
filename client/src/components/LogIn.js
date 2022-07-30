import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ setUser, user }){
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
        <div className="LoginPage">
            <h1 className="login-header">Log In</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <div style={{padding:"20px", alignItems: "center", justifyContent: "center", margin:"auto"}}>
                    <label style={{ color: "black", alignItems:"center", textAlign:"center", margin:"0" }}>Username: </label>
                    <input type="text"
                    style={{ alignItems: "center", padding:"10px", margin:"auto" }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    /><br></br>
                    <label style={{color:"black"}}>Password: </label>
                    <input type="password"
                        style={{ padding: "10px", marginTop: "20px" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    /><br></br>
                </div>
                <button style={{backgroundColor:"lightgreen", padding:"10px 20px", marginTop:"40px", marginLeft:"0", marginRight:"0", alignItems:"center", borderRadius:"5px", verticalAlign:"middle", justifyContent:"center"}} type="submit">Login</button>
            </form>
            <button onClick={() => navigate("/signup")}>Not a member yet? Sign up!</button>
            <button style={{ padding: "3px 10px", marginRight: "10px" }} onClick={() => navigate("/home")}>Home</button>
            <button style={{ padding: "3px 10px" }} onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
    );
}

export default LogIn;