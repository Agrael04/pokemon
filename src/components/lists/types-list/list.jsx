import React from 'react'

import styles from './style.less'

export default ({ types }) => (
  <div className={styles.list}>
    {types.map((type, key) => <div key={'type' + key}>{type.type.name} </div>)}
  </div>
) 