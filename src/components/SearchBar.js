import React from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";
import { musicSearch } from "./data/music";

let musicData = {name:'Sokol'}

async function handleSearch(){
    let value = document.getElementById('searchField').value
    alert(`searching ${value}`)
    musicData =  await musicSearch(value)
    console.log(`musicData ${musicData}`)
    return musicData
}

export default function SearchBar(){
    return(
        <>
        <div className="searchBarDiv">
            <h2>Please Enter an Artist</h2>
            <input type="text" id="searchField" placeholder="Artist Name..."/>
            <input type="button" value="Search" onClick={ handleSearch }/>
        </div>
        <SearchResults data={musicData}/>
        </>
    )
}