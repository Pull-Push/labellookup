import React from "react";


export default function LabelInfo(props){
    console.log('label component', props)
    // console.log('drilled down', props.labelData.results)
    let mainList = new Set()
    if(props.labelData === null){
        console.log('no label info found')
    }else{
        for(let x of props.labelData.results){
            console.log('master id & Title', x.master_id, x.title)
            mainList.add(`${x.master_id} : [${x.title}, ${x.label}]`)
        }
        for(const y of mainList){
            console.log('mainList', y)
           }
    }

    return (
        <>
            Label information from results goes in this space
        </>
    )
}