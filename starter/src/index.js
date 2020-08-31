import {Header} from './components/Header.js'
import {showShips} from './components/Ships.js'
import {Select} from './components/Select.js'

const app = document.querySelector('#app')

app.appendChild(Header())
app.appendChild(Select())
app.appendChild(showShips())