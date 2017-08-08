const initState = {
  pokemons: [],
  count: 0
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'ADD_POKEMON':
      if(state.pokemons.findIndex(item => item == payload) != -1) return state
      return { pokemons: [...state.pokemons, payload], count: state.count + 1 }
    case 'REMOVE_POKEMON':
      return { pokemons: state.pokemons.filter(item => item != payload), count: state.count - 1 }
    default:
      return state
  }
}