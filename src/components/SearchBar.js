import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";
import { musicSearch } from "./data/music";



export default function SearchBar(){
    const [music, setMusic] = useState(null)
    const musicData = async () => { 
        let value = document.getElementById('searchField').value
        alert(`searching ${value}`)
        const data =  await musicSearch(value)
        setMusic(data)
        console.log('musicSearch', music)
        return music

}
    return(
        <>
        <div className="searchBarDiv">
            <h2>Please Enter an Artist</h2>
            <input type="text" id="searchField" placeholder="Artist Name..."/>
            <input type="button" value="Search" onClick={ musicData }/>
        </div>
        <SearchResults data={music}/>
        </>
    )
}