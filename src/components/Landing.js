import React from "react";
import { useNavigate } from "react-router-dom";
import { authorizeSpotify } from "./data/auth";

function handleClick(){
    authorizeSpotify()
}

console.log('landing')

function LandingRender(){
    return(
        <div className="landing">
            <h1>Welcome to LabelLookup</h1>
            <button onClick={handleClick}>Log In</button>
            </div>
    )
}
export default LandingRender