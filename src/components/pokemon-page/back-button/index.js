import { compose, mapProps } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Component from './component'
import actions from 'store/actions'

export default compose(
  withRouter,
  connect(() => ({}), actions),
  mapProps(
    ({ history, getPokemons }) => ({
      handleClick: () => {
        history.push('/')
        getPokemons()
      }
    })
  )
)(Component)