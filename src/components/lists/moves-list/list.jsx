import React from 'react'

import styles from './style.less'

export default ({ moves }) => (
  <div className={styles.list}>
    {moves.map((move, key) => <div key={'move' + key}>{move.move.name}</div>)}
  </div>
) 