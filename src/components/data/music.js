

export async function getArtist(artistName){
    console.log('from search', artistName)
    let token = localStorage.getItem('token')
    console.log(`artist token ${token}`)

    const response  = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist%2Calbum&limit=25`, {
        headers:{
            Authorization: 'Bearer '+ token
        }
    });
    const data = await response.json();
    // console.log('artist data', data)
    return data
}

export async function musicSearch(searchTerm){
    const data  = await getArtist(searchTerm)

    return data
}