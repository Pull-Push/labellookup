export default function SearchResults(props){
    console.log('default', props.data.name)
    console.log('after', props)
    return(
        <>
        <h4>search results</h4>
        <p>hello, {props.data.name}</p>
        </>
    )
}