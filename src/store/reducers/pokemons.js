const initState = {
  data: [],
  count: 0
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'CREATE_POKEMON':
      return { 
        data: [...state.data, payload], count: state.count + 1
      }
    case 'CREATE_POKEMONS':
      return { 
        data: [...state.data, ...payload], count: state.count + payload.count
      }
    case 'UPDATE_POKEMON':
      const index = state.data.findIndex(item => item.name == payload.name)
      return { 
        ...state,
        data: [
          ...state.data.filter((item, key) => key < index),
          { ...state.data[index], ...payload },
          ...state.data.filter((item, key) => key > index)
        ] 
      }
    default:
      return state
  }
}