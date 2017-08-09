import { compose, mapProps } from 'recompose'
import { connect } from 'react-redux'

import Page from './page'
import actions from 'store/actions'

export default compose(
  connect(state => ({
    filteredPokemons: state.filter.filter ? state.pokemons.data.filter(
      pokemon => pokemon.name.includes(state.filter.filter)
    ).filter((item, key) => key < 5) : [],
    collectedPokemons: state.collection.pokemons,
    filter: state.filter.filter
  }), actions),
  mapProps(props => ({
    ...props,
    addPokemon: name => {
      props.getPokemon(name)
      props.addPokemon(name)
      props.setFilter('')
    }
  }))
)(Page)