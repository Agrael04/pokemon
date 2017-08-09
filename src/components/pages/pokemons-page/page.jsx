import React from 'react'

import styles from './style.less'

import PokemonCard from 'components/cards/pokemon-card'

export default ({ filteredPokemons, collectedPokemons, setFilter, addPokemon, filter }) => (
  <div className={styles.page}>
    <input placeholder='Choose your favourite pokemons!' className={styles.search} onChange={e => setFilter(e.target.value)} value={filter}/>
    <div className={styles.filtered}>
    {
      filteredPokemons.map(pokemon => <div key={pokemon.name} className={styles.pokemon} onClick={() => addPokemon(pokemon.name)}>{pokemon.name}</div>)
    }
    </div>
    <div className={styles.collected}>
      { collectedPokemons.map(name => <PokemonCard name={name} key={name}/>) }
    </div>
  </div>
) 