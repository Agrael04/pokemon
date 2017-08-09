import { compose, mapProps, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'

import Filter from './filter'
import Loader from 'components/others/loader'
import actions from 'store/actions'

export default compose(
  connect(state => ({
    pokemons: state.pokemons.data,
    filter: state.filter.filter
  }), actions),
  branch(
    ({ pokemons }) => pokemons.length == 0,
    renderComponent(Loader)
  ),
  mapProps(props => ({
    ...props,
    pokemons: props.filter ? props.pokemons.filter(
      pokemon => pokemon.name.includes(props.filter)
    ).filter((item, key) => key < 5) : [],
    addPokemon: name => {
      props.getPokemon(name)
      props.addPokemon(name)
      props.setFilter('')
    }
  }))
)(Filter)
