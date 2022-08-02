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
                <form className="login-form" onSubmit={handleLogin}>
                <h1 className="login-header">Log In</h1>
                    <div style={{ padding: "20px", alignItems: "center", justifyContent: "center", margin: "auto" }}>   
                        <label style={{ color: "black", alignItems: "center", textAlign: "center", margin: "0" }}>Username: </label>
                        <input type="text"
                        style={{ alignItems: "center", padding:"10px", width:"300px", margin:"auto" }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        /><br></br>

                        <label style={{color:"black", paddingTop:"100px"}}>Password: </label>
                        <input type="password"
                        style={{ padding: "10px", marginTop: "20px", width: "300px", marginLeft:"0", marginRight:"0"}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>
                        <button className="login-btn" style={{alignItems:"center", textAlign:"center", justifyContent:"center" }} type="submit">Login</button>
                </form>
                <div style={{display:"flex", alignItems:"center", justifyContent: "center", margin:"20px"}}>
                <button style={{ padding: "10px 24px", fontSize: "15px", borderRadius: "5px", marginRight: "10px", alignItems:"center" }} onClick={() => navigate("/")}>Home</button>
                <button style={{ padding: "10px 24px", fontSize: "15px", borderRadius: "5px", alignItems: "center" }} onClick={() => navigate("/signup")}>Sign Up</button>
                </div>
        </div>
    );
}

export default LogIn;