import axios from 'axios'

export const getInfo = () => {
    return axios.get('https://api.spacexdata.com/v3/info')
}

export const getShips = () => {
    return axios.get('https://api.spacexdata.com/v3/ships')
}

// export const getActiveShips = (active) => {
//     return axios.get(`https://api.spacexdata.com/v3/ships?${active}`)
// }