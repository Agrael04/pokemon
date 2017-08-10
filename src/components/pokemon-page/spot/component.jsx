import React from 'react'

import styles from './style.less'

export default ({ pokemon }) => (
  <div className={styles.spot}>
    <div className={styles.spotTop}>
      <div>
        <div>Weight <div>{pokemon.weight}</div></div>
        <div>Height <div>{pokemon.height}</div></div>
        <div>Expirience <div>{pokemon.base_experience}</div></div>
      </div>
      <img src={pokemon.sprites.front_default} className={styles.image}/>
    </div>
    <div className={styles.spotBottom}>
      {
        pokemon.stats.map((item, key) => (
          <div key={key}>
            {item.stat.name}
            <div>
              {item.base_stat}
            </div>
          </div>
        ))
      }
    </div>
  </div>
)