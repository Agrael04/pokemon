import { combineReducers } from 'redux'

import pokemons from './pokemons'
import filter from './filter'
import collection from './collection'

export default combineReducers({
  pokemons,
  filter,
  collection
})