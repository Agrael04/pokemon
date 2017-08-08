import React from 'react'

import styles from './style.less'

import StatsList from 'components/lists/stats-list'
import AbilList from 'components/lists/abil-list'

export default ({ pokemon, showPokemon, removePokemon }) => (
  <div className={styles.card} onClick={showPokemon}>
    <div className={styles.name}>{pokemon.name}</div>
    <img src={pokemon.sprites.front_default} className={styles.image}/>
    <StatsList stats={pokemon.stats}/>
    <AbilList abilities={pokemon.abilities}/>
    <button className={styles.destroy} onClick={removePokemon}>Remove</button>
  </div>
) 