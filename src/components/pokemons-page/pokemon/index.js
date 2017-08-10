import { compose, mapProps, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Component from './component'
import actions from 'store/actions'
import Loader from 'components/loader'

export default compose(
  withRouter,
  connect(state => ({ pokemons: state.pokemons.data }), actions),
  mapProps(
    ({ pokemons, item, history, removePokemon }) => ({
      pokemon: pokemons.find(pokemon => pokemon.name == item),
      showPokemon: () => history.push(`/pokemon/${item}`),
      removePokemon: e => {
        e.stopPropagation()
        removePokemon(item)
      }
    })
  ),
  branch(
    ({ pokemon }) => !pokemon.sprites,
    renderComponent(Loader)
  )
)(Component)
