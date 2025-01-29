import React from "react";
import { useNavigate } from "react-router-dom";

import authorizeSpotify from "./data/auth"

function LandingRender(){
    const url = authorizeSpotify()
    window.location.replace(url)
    return(
        <div className="landing">
            <h1>Loading</h1>
        </div>
    )
}
export default LandingRender