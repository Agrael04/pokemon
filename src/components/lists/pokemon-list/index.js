import { compose } from 'recompose'
import { connect } from 'react-redux'

import List from './list'

export default compose(
  connect(state => ({ items: state.collection.pokemons }))
)(List)
