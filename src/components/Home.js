import getProfile from "./data/profile"
// http://localhost:3000/callback#access_token=BQAIcf3dfSy9xnY_zSuzNB2bc8I2nLzr5nebARBEY2B21a-kSrEHph_csLObS54Z4fSeBfU43JKpt53TpnZnuXjoo0snj78WFgYywVySBRtsGQLLj-Jst8ATSdWW0CLSiJ2XaCP4FD_xtCPxLO-mBl_Z_dLfKlP4vhsv3fUQq7opnfdHSS-QttLKkcq6_g5HVabU6s9LdyOZf9SJWJiM6SoJrET8O_OMQQ&token_type=Bearer&expires_in=3600

const fullUrl = window.location.href
const important = fullUrl.split('=')
let token = important[1].split('&')
token = token[0]

const userData = await getProfile(token)

function HomeRender(){
    console.log(userData)
    return(
        <div className="home">
            <h2>Welcome, {userData.display_name}</h2>
        </div>
    )
}
export default HomeRender