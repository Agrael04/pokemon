import React from 'react'

import styles from './style.less'

export default ({ pokemon, showPokemon, removePokemon }) => (
  <div className={styles.card} onClick={showPokemon}>
    <button className={styles.destroy} onClick={removePokemon}/>
    <div className={styles.name}>{pokemon.name}</div>
    <img src={pokemon.sprites.front_default} className={styles.image}/>
    <div className={styles.stats}>
      {
        pokemon.stats.map((stat, key) => (
          <div key={'stat' + key}>
            {stat.stat.name}: {stat.base_stat}
          </div>
        ))
      }
    </div>
    <div className={styles.abilities}>
      {
        pokemon.abilities.map((ability, key) => (
          <div key={'abil' + key}>
            {ability.ability.name}
          </div>
        ))
      }
    </div>
  </div>
)