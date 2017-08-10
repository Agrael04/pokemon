import React from 'react'

import styles from './style.less'

export default ({ pokemon }) => (
  <div className={styles.title}>
    {pokemon.name}
    <div>
      <div className={styles.skills}>
        Skills
        {
          pokemon.abilities.map((item, key) => (
            <div key={key}>
              {item.ability.name}
            </div>
          ))
        }
      </div>
      <div className={styles.types}>
        Attack Types
        {
          pokemon.types.map((item, key) => (
            <div key={key}>
              {item.type.name}
            </div>
          ))
        }
      </div>
    </div>
  </div>
)