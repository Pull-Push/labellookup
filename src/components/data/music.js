

export async function getArtist(artistName){
    let token = localStorage.getItem('token')

    const response  = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist%2Calbum%2Ctrack&limit=25`, {
        headers:{
            Authorization: 'Bearer '+ token
        }
    });
    const data = await response.json();
    return data
}

export async function musicSearch(searchTerm){
    const data  = await getArtist(searchTerm)
    console.log('music data', data)
    return data
}


export async function getPlaylist() {
    let token = localStorage.getItem('token')
    const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
        headers:{
            Authorization: 'Bearer ' + token 
        }
    });
    const playlistData = await response.json();
    return playlistData
}

export async function playlistInit() {
    const playlistData = await getPlaylist()
    return playlistData
}

