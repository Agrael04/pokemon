import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import pokemons from './reducers/pokemons'
import filter from './reducers/filter'
import collection from './reducers/collection'

const store = createStore(
  combineReducers({
    pokemons,
    filter,
    collection
  }),
  applyMiddleware(thunk)
)

export default store