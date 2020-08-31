export const Ship = (ship) => {
    const oneShip = document.createElement('div')
        const nazivBroda = document.createElement('p')
        nazivBroda.textContent = `Naziv broda: ${ship.ship_name}`
        const tipBroda = document.createElement('p')
        tipBroda.textContent = `Tip broda: ${ship.ship_type}`
        const aktivan = document.createElement('p')
        aktivan.textContent = `Aktivan: ${ship.active}`
        let a = document.createElement('a')
        a.href = ship.url
            if(ship.image != null){
                const slika = document.createElement('img')
                slika.src = ship.image
                slika.style.height = '300px'
                a.appendChild(slika)
            }
            else{
                const slika = document.createElement('img')
                slika.alt = 'Slika je nedostupna'
                a.appendChild(slika)
            }
        oneShip.append(nazivBroda, tipBroda, aktivan, a)
        
    return oneShip
}