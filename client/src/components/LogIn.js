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
        <div style={{alignItems: "center"}} className="LoginPage">
            <div style={{ alignItems: "center", justifyContent: "center" }} className="login-background">   
                <form className="login-form" onSubmit={handleLogin}>
                <h1 className="login-header">Log In</h1>
                    <div>
                        <label style={{ color: "black", alignItems: "center", textAlign: "center", padding:"10px"}}>Username: </label>
                        <input type="text"
                        style={{ alignItems: "center", padding: "10px", width: "300px", margin: "auto" }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label style={{ color: "black", padding: "10px", paddingTop:"100px"}}>Password: </label>
                        <input type="password"
                        style={{ padding: "10px", marginTop: "20px", width: "300px", marginLeft:"0", marginRight:"0"}}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="login-btn-container">
                    <button className="login100-form-btn" style={{alignItems:"center", backgroundColor:"lightpink", borderRadius:"5px", position:"absolute", margin:"auto", padding:"10px", marginTop:"15px", textAlign:"center", justifyContent:"center" }} type="submit">Login</button>
                    </div>
                </form>
            </div>

                <div style={{display:"flex", alignItems:"center", justifyContent: "center", margin:"20px"}}>
                    <button style={{ padding: "10px 24px", fontSize: "15px", borderRadius: "5px", marginRight: "10px", alignItems:"center" }} onClick={() => navigate("/")}>Home</button>
                    <button style={{ padding: "10px 24px", fontSize: "15px", borderRadius: "5px", alignItems: "center" }} onClick={() => navigate("/signup")}>Sign Up</button>
                </div> 
            </div>
    );
}

export default LogIn;