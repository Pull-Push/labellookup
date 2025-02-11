import { getPlaylist, playlistInit } from "./data/music";
import { useEffect, useState } from "react";

export default function Playlists(props){
    const [ playlists, setPlaylists ] = useState([])
    let listNames = []
    useEffect(() => {
        async function getLists() {
            const playlistInitData = await playlistInit();
            setPlaylists(playlistInitData)
        }
        getLists();
    }, []);

    if(playlists.length === 0){
        console.log('nothing yet.....')
        return
    }else{
        console.log('playlists found! total of: ', playlists.items.length)
        for(let x of playlists.items){
            listNames.push(x.name)
        }
    }

    if(playlists.length === 0 || !playlists ){
        return(
            <>
                <h4>No playlists</h4>
            </>
        )
    } else 
    return(
        <>
            <h4>Playlists:</h4>
            {listNames.map((item, index) => (
                <li key={index}> {item} </li>
            ))
            }
            <button>Prev Page</button>
            <button>Next Page</button>
        </>
    )
}