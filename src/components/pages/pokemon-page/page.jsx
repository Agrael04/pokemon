import React from 'react'

import styles from './style.less'

export default ({ pokemon, showCollection }) => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        {pokemon.name}
        <div>
          <div className={styles.skills}>
            <p>Skills</p>
            {
              pokemon.abilities.map(
                (ability, key) => <div key={'abil_' + key}>{ability.ability.name} </div>
              )
            }
          </div>
          <div className={styles.types}>
            <p>Attack Type</p>
            {
              pokemon.types.map(
                (type, key) => <div key={'type_' + key}>{type.type.name}</div>
              )
            }
          </div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerRightTop}>
          <div>
            <div>Weight <div>{pokemon.weight}</div></div>
            <div>Height <div>{pokemon.height}</div></div>
            <div>Expirience <div>{pokemon.base_experience}</div></div>
          </div>
          <img src={pokemon.sprites.front_default} className={styles.image}/>
        </div>
        <div className={styles.headerRightBottom}>
          {
            pokemon.stats.map(
              (stat, key) => <div key={key}>{stat.stat.name} <div>{stat.base_stat}</div></div>
            )
          }
        </div>
      </div>
    </div>

    <div className={styles.movements}>
      <div>Movements</div>
      {
        pokemon.moves.reduce((a, b) => a + ', ' + b.move.name, '').substring(2)
      }
    </div>
    <div className={styles.backToCollection}>
      <button onClick={showCollection}> Back to collection </button>
    </div>
  </div>
) 