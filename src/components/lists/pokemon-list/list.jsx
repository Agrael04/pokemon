import React from 'react'

import styles from './style.less'
import PokemonCard from 'components/cards/pokemon-card'

export default ({ items }) => (
  <div className={styles.list}>
    { items.map(name => <PokemonCard name={name} key={name}/>) }
  </div>
) 