import React from 'react';
import { Link } from "react-router-dom";


function Home(){
    return(
        <section style={{ width:"100%", height:"700px", backgroundColor:"red"}}>
            <div style={{display:"flex", height:"500px", alignItems:"center", justifyContent:"center"}}>
                <h3 style={{width:"100%", fontFamily:"Rubik", color:"white", fontSize:"20px", textAlign:"center", justifyContent:"center", paddingTop:"30px", margin:"auto"}}>
                    A marketplace for rare and collectible cubing items
                    <h4>Shop, sell, solve!</h4>
                    <div style={{display:"flex", flexDirection:"column", width:"10em", alignItems:"center", justifyContent:"center", margin:"auto"}}>
                        <Link style={{ marginBottom: "20px", marginTop: "20px", borderRadius: "3px", border: "1px solid white", backgroundColor:"#ff5454", padding: "10px 20px", color:"white", fontSize:"15px", fontFamily:"Rubik", justifyContent:"center", alignItems:"center"}} to="/login">Login</Link>
                        <Link style={{ borderRadius: "3px", border: "1px solid white", backgroundColor: "#ff5454", padding:"10px 20px", color:"white", fontSize:"15px", fontFamily:"Rubik"}} to="/signup">Sign Up</Link>
                    </div>
                </h3>
                <h1 style={{ width: "100%" }}>
                    <img src="./cubelogo.png" width="400px"/>
                </h1>
            </div>
        </section>
    )
}

export default Home;