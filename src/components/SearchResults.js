import { useEffect, useState } from "react"

export default function SearchResults(props){
    // {data:{albums:{}, artists:{}}}
    let artistNames = []
    const [artistData, setArtistData ] = useState({data:null})
    
    useEffect(() => {
        setArtistData(props); 
    },[props])
    
    if(artistData.data !== null ){
        console.log('found data')
        for(let x of artistData.data.artists.items){
            artistNames.push(x.name)
            console.log(x.name)
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
            <h4>search results</h4>
            <ul>
            {artistNames.map((item, index) => (
                <li key={index}> {item} </li>
            ))
            }
            </ul>
            
        </>
    )
}