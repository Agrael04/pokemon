import { compose, mapProps, branch, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Page from './page'
import actions from 'store/actions'
import Loader from 'components/others/loader'

export default compose(
  withRouter,
  connect(state => ({ pokemons: state.pokemons.data }), actions),
  mapProps(
    ({ pokemons, history, match, getPokemons }) => ({
      pokemon: pokemons.find(item => item.name == match.params.name),
      showCollection: () => {
        history.push('/')
        getPokemons()
      }
    })
  ),
  branch(
    props => !props.pokemon,
    renderComponent(Loader)
  )
)(Page)