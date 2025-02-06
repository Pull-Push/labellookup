import React, { useState, useEffect } from "react";
import { getProfile, logOut } from "./data/auth"

import SearchBar from "./SearchBar";

function handleClick(){
    logOut()
}

function HomeRender(){
    const [profile, setProfile ] = useState('test')
    const [profileImg, setProfileImg ] = useState(null)
    const [profFollowers, setProfFollowers ] = useState('0')

    useEffect(() => {
        async function fetchProfile() {
            const url = window.location.href; // Get the current URL
            const data = await getProfile(url);
            setProfileImg(data.images[1].url);
            setProfFollowers(data.followers.total);
            setProfile(data);
        }
        fetchProfile();

    }, []);
    
    // console.log('this is the state profile', profile);
    return(
        <div className="home">
            <div className="header">
            <button onClick={ handleClick }>Log Out</button>
            <h2>Welcome, {profile.display_name}</h2>
            <p>email: {profile.email}</p>
            <img src={profileImg} alt="profile image" />
            <p>followers:{profFollowers}</p>
            </div>
            <div className="searchDiv">
                <SearchBar />

            </div>
        </div>
    )
}
export default HomeRender