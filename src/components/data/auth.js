export function authorizeSpotify(){

    const client_id = 'b46da389980344068d6ec1df964b45a9';
    const redirect_uri = 'http://localhost:3000/callback';

    const scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&show_dialog=true'
    

    window.location.replace(url)
    return
}

export async function getProfile(url){
        console.log('from profile', url)
        const important = url.split('=')
        let token = important[1].split('&')
        token = token[0]
        localStorage.setItem('token', token)
        const response  = await fetch('https://api.spotify.com/v1/me', {
            headers:{
                Authorization: 'Bearer '+ token
            }
        });
    
        const data = await response.json();
        console.log('prof data', data)
    
        return data
    }

export function logOut(){
    alert('Successfully Logged Out')
    window.location.replace('/')
}
