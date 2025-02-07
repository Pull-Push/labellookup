import { useEffect, useState } from "react"

export default function SearchResults(props){
    let artistNames = []
    let trackNames = []
    let albumNames = []
    const [artistData, setArtistData ] = useState({data:null})
    
    useEffect(() => {
        setArtistData(props); 
    },[props])
    
    if(artistData.data !== null ){
        console.log('found artist data')
        for(let x of artistData.data.artists.items){
            artistNames.push(x.name)
            // console.log(x.name)
        }
        for(let y of artistData.data.albums.items){
            albumNames.push(y.name)
            // console.log('albums', y.name)
        }
        for(let z of artistData.data.tracks.items){
            trackNames.push(z.name)
            // console.log('tracks', z.name)
        }
    }




    if(artistData.data == null ){
        return(
            <>
                <h4>Nothing Found</h4>
            </>
        )
    }else
    return(
        
        <>
            <h4>Search Results</h4>
            <h2>TOP RESULT:</h2>
                <h3>ARTIST: {artistNames[0]}</h3>
                <h4>ALBUM: {albumNames[0]}</h4>
                <h5>TRACK: {trackNames[0]}</h5>
            <h5>Artist Results:</h5>
            <ul>
            {artistNames.map((item, index) => (
                <li key={index}> {item} </li>
            ))
            }
            </ul>
            <h5>Album Results:</h5>
            <ul>
                {albumNames.map((item, index) =>(
                    <li key={index}> {item} </li>
                ))
                }
            </ul>
            <h5>Track Results</h5>
            <ul>
                {trackNames.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))
                }
            </ul>
        </>
    )
}