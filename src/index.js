import { render } from 'react-dom'

import store from 'store'
import actions from 'store/actions'
import app from 'components/others/app'

window.store = store
window.actions = actions

const route = window.location.pathname

if (route == '/') store.dispatch(actions.getPokemons())
else if(route.split('/')[1] == 'pokemon') store.dispatch(actions.getPokemon(route.split('/')[2]))

render(app({ store }), document.getElementById('Main'))
