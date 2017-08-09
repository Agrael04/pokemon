import { compose, mapProps, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Card from './card'
import actions from 'store/actions'
import Loader from 'components/others/loader'

export default compose(
  withRouter,
  // love such simplicity ^_^
  connect(state => ({ pokemons: state.pokemons.data }), actions),
  mapProps(
    ({ pokemons, name, history, removePokemon }) => ({
      pokemon: pokemons.find(item => item.name == name),
      showPokemon: () => history.push(`/pokemon/${name}`),
      removePokemon: e => {
        e.stopPropagation()
        removePokemon(name)
      }
    })
  ),
  branch(
    ({ pokemon }) => !pokemon.sprites,
    renderComponent(Loader)
  )
)(Card)
