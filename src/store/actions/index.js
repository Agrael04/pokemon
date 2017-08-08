import axios from 'axios'

const createPokemon = payload => ({ type: 'CREATE_POKEMON', payload })

const createPokemons = payload => ({ type: 'CREATE_POKEMONS', payload })

const updatePokemon = payload => ({ type: 'UPDATE_POKEMON', payload })

const getPokemons = offset => dispatch => axios.get(`http://pokeapi.co/api/v2/pokemon/?limit=811`).then(
  res => dispatch(createPokemons(res.data.results))
)

const getPokemon = name => dispatch => axios.get(`http://pokeapi.co/api/v2/pokemon/${name}/`).then(
  res => dispatch(updatePokemon(res.data))
)

const setFilter = payload => ({ type: 'SET_FILTER', payload })

const addPokemon = payload => ({ type: 'ADD_POKEMON', payload })

const removePokemon = payload => ({ type: 'REMOVE_POKEMON', payload })

export default {
  getPokemons,
  getPokemon,
  setFilter,
  addPokemon,
  removePokemon
}