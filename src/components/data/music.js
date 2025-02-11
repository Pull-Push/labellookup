

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

export function details(value){
    const clicked = value;
    alert(`${clicked} was clicked`)
    return
} 

export async function getLabel(props) {
    console.log('get label', props)
    let key = 'ejzkmaEZPkIfWFdCVuHF'
    let secret = 'PJEBjPFGAkNUqBfzrpPwOwQdMYYAoXMH'
    const response  = await fetch(`https://api.discogs.com/database/search?q=${props}`, {
        headers:{
            Authorization: `Discogs key=${key}, secret=${secret}`
        }
    });
    const labelData = await response.json();
    console.log('labelData', labelData)
    return labelData

}

export async function fetchLabel(props) {
    console.log('fetch label', props)
    const labelData = await getLabel(props)
    return labelData
}