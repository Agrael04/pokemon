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
    ({ pokemons, match }) => ({
      pokemon: pokemons.find(item => item.name == match.params.name),
    })
  ),
  branch(
    props => !props.pokemon,
    renderComponent(Loader)
  )
)(Component)