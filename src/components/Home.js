import React, { useState, useEffect } from "react";
import { getProfile } from "./data/auth"


function handleClick(){
    alert('Logged out')
    window.location.replace('http://localhost:3000/')
}

function HomeRender(){
    const [profile, setProfile ] = useState('test')
    useEffect(() => {
        async function fetchProfile() {
            const url = window.location.href; // Get the current URL
            const data = await getProfile(url);
            setProfile(data);
        }
        fetchProfile();
    }, []);
    
    console.log('this is the state profile', profile);
    return(
        <div className="home">
            <button onClick={handleClick}>Log Out</button>
            <h2>Welcome, {profile.display_name}</h2>
        </div>
    )
}
export default HomeRender