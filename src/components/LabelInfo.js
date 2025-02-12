import React from "react";


export default function LabelInfo(props){
    console.log('label component', props)
    // console.log('drilled down', props.labelData.results)
    
    if(props.labelData === null){
        console.log('no label info found')
    }else{
        for(let x of props.labelData.results){
            console.log(x)
        }
    }


    return (
        <>
            Label information from results goes in this space
        </>
    )
}