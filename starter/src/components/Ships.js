import {getShips} from '../service.js'
import {Ship} from './Ship.js'

export const showShips = () => {
    const ships = document.createElement('div')
    getShips().then(res =>{
        res.data.forEach(ship => {
            ships.appendChild(Ship(ship))
        })
    })
    return ships
}

// export const showShips = () => {
//     const ships = document.createElement('div')
//     getShips().then(res =>{
//         res.data.forEach(ship => {
//             const nazivBroda = document.createElement('p')
//             nazivBroda.textContent = ship.ship_name
//             const tipBroda = document.createElement('p')
//             tipBroda.textContent = ship.ship_type
//             const aktivan = document.createElement('p')
//             aktivan.textContent = ship.active
//             const a = document.createElement('a')
//             a.href = ship.url
//                 const slika = document.createElement('img')
//                 slika.src = ship.image
//             // slika.height = 300px;
//             a.appendChild(slika)
//             ships.append(nazivBroda, tipBroda, aktivan, a)
//         })
//     })
//     return ships
// }