import React from 'react'

function authorizeSpotify(){

    const client_id = 'b46da389980344068d6ec1df964b45a9';
    const redirect_uri = 'http://localhost:3000';

    const scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    
    console.log(url)
}

export default authorizeSpotify