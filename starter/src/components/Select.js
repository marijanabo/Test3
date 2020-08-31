// import {getActiveShips} from '../service.js'

import { showShips } from "./Ships"
import { getShips } from "../service"
import {Ship} from './Ship.js'

export const Select = () => {
    const select = document.createElement('select')
        const optionEmpty = document.createElement('option')
        optionEmpty.textContent = '-'
        optionEmpty.value = ''
        const optionActive = document.createElement('option')
        optionActive.textContent = 'Aktivan'
        optionActive.value = 'true'
        const optionInactive = document.createElement('option')
        optionInactive.textContent = 'Neaktivan'
        optionActive.value = 'false'
    select.append(optionEmpty, optionActive, optionInactive)


    select.addEventListener('change', () => {
        showShips.innerHTML = ''
            getShips().then(res => {
                res.data.filter(ship => ship.active =='true').forEach(ship => {
                    showShips.appendChild(Ship(ship))
                })
            }) 
    })

    // select.addEventListener('change', () => {
    //     showShips.innerHTML = ''
    //     if(select.value === 'true'){
    //         getActiveShips(select.value).then(res => {
    //             res.data.forEach(ship => {
    //                 showShips.appendChild(Ship(ship))
    //             })
    //         }) 
    //     }
    //     else{
    //         return
    //     }
    // })

    return select
}