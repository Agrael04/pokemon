import { compose, mapProps, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'

import Filter from './filter'
import Loader from 'components/others/loader'
import actions from 'store/actions'

export default compose(
  connect(state => ({
    pokemons: state.pokemons.data,
    /*
      imagine the situation when u have 20 filterable entities on the page.
      will the store be handy for managing if it would hold 20 reducers only for filters.
      maybe sometimes component's local state is more suitable for holding such entities? 
    */
    filter: state.filter.filter
  }), actions),
  branch(
    ({ pokemons }) => pokemons.length == 0,
    renderComponent(Loader)
  ),
  mapProps(props => ({
    ...props,
    pokemons: props.filter ? props.pokemons.filter(
      // case sensitive ?
      pokemon => pokemon.name.includes(props.filter)
    ).filter((item, key) => key < 5) : [],
    addPokemon: name => {
      props.getPokemon(name)
      props.addPokemon(name)
      props.setFilter('')
    }
  }))
)(Filter)
