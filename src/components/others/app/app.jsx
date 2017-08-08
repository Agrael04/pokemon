import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import Loadable from 'react-loadable'
import createBrowserHistory from 'history/createBrowserHistory'

import styles from './style.less'

import loading from 'components/others/loader'

const Pokemon = Loadable({
  loader: () => import('components/pages/pokemon-page'),
  loading
})

const Pokemons = Loadable({
  loader: () => import('components/pages/pokemons-page'),
  loading
})

export default ({ store }) => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <div>
        <div className={styles.page}>
          <div className={styles.wrapper}>
            <Switch>
              <Route exact path='/' component={Pokemons}/>
              <Route exact path='/pokemon/:name' component={Pokemon}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </Provider>
)
