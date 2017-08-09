import React from 'react'

import styles from './style.less'

import PokemonList from 'components/lists/pokemon-list'
import PokemonFilter from 'components/filters/pokemon-filter'

export default () => (
  <div className={styles.page}>
    <PokemonFilter/>
    <PokemonList/>
  </div>
) 