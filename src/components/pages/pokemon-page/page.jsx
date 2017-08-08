import React from 'react'

import styles from './style.less'

import StatsList from 'components/lists/stats-list'
import AbilList from 'components/lists/abil-list'
import TypesList from 'components/lists/types-list'
import MovesList from 'components/lists/moves-list'

export default ({ pokemon, showCollection }) => (
  <div className={styles.page}>
    <div className={styles.left}>
      <div className={styles.name}>{pokemon.name}</div>
      <img src={pokemon.sprites.front_default} className={styles.image}/>
      <StatsList stats={pokemon.stats}/>
      <AbilList abilities={pokemon.abilities}/>
      <TypesList types={pokemon.types}/> 
    </div>
    <div className={styles.left}>
      <div className={styles.expirience}>Expirience {pokemon.base_experience}</div>
      <div className={styles.weight}>Weight {pokemon.weight}</div>
      <div className={styles.height}>Height {pokemon.height}</div> 
    </div>
    <div className={styles.right}>
      <MovesList moves={pokemon.moves.filter((move, key) => key < 30)}/>
    </div>
    <button onClick={showCollection}> Show Collection </button>
  </div>
) 