import React from 'react'

import styles from './style.less'

export default ({ setFilter, addPokemon, pokemons, filter }) => (
  <div className={styles.filter}>
    <input placeholder='Choose your favourite pokemons!' className={styles.search} onChange={setFilter} value={filter}/>
    <div className={styles.filtered}>
    {
      pokemons.map(pokemon => (
        <div key={pokemon.name} className={styles.pokemon} onClick={() => addPokemon(pokemon.name)}>
          {pokemon.name}
        </div>
      ))
    }
    </div>
  </div>
)