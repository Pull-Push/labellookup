import { useState } from "react"

export default function SearchResults(props){
    console.log('results', props)

    if(!props.musicData){
        return(
            <>
                <h4>Nothing Found</h4>
            </>
        )
    }else
    return(
        <>
            <h4>search results</h4>
            <p>hello</p>
        </>
    )
}