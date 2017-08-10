import { compose } from 'recompose'
import { connect } from 'react-redux'

import Component from './component'

export default compose(
  connect(state => ({ collection: state.collection.pokemons }))
)(Component)
