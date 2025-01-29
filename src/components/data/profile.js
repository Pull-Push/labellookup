

async function getProfile(token) {
    console.log('from profile', token)

    const response  = await fetch('https://api.spotify.com/v1/me', {
        headers:{
            Authorization: 'Bearer '+ token
        }
    });

    const data = await response.json();
    // console.log('prof data', data)

    return data
}

export default getProfile