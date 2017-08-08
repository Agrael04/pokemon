const initState = {
  filter: ''
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_FILTER':
      return { filter: payload }
    default:
      return state
  }
}