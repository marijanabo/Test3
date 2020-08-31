import {getInfo} from '../service.js'

export const Header = () => {
    const headerContainer = document.createElement('header')
    getInfo().then(res => {
        const naziv = document.createElement('h1')
        naziv.textContent = res.data.name 
        const informacije = document.createElement('p')
        informacije.innerHTML = `Vlasnik: ${res.data.founder}<br>
                                 Godina osnivanja:${res.data.founded}`
        headerContainer.append(naziv, informacije)    
    })
    return headerContainer
}