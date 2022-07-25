import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

function Home({ user }){
    const navigate = useNavigate();

    return(
        <>
            {/* {user.username?
                <Navigation/> : ( */}
                <header style={{ float:"right", height:"10em" }}>
                    <button style={{ padding: "3px 10px", marginRight:"10px"}} onClick={() => navigate("/login")}>Login</button>
                    <button style={{ padding:"3px 10px" }} onClick={() => navigate("/signup")}>Sign Up</button>
                </header>
            {/* )}  */}
            <h1>TITLE</h1>
            <h2>Subtitle</h2>
            <h3>About</h3>
            <h3>About</h3>
            <div style={{width:"300px", display:"block", height:"300px", border:"2px solid black", textAlign:"center", alignItems: "center", margin:"auto"}}>
                <p style={{justifyContent:"center", textAlign: "center", alignItems:"center", marginLeft:"0", marginRight:"0"}}>I'm a big image!</p>
            </div>
        </>
    )
}

export default Home;