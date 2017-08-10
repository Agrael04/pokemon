import React from 'react'

import styles from './style.less'

export default ({ pokemon }) => (
  <div className={styles.movements}>
    <div>Movements</div>
    {
      pokemon.moves.reduce((a, b) => a + ', ' + b.move.name, '').substring(2)
    }
  </div>
)