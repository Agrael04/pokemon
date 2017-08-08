import React from 'react'

import styles from './style.less'

export default ({ abilities }) => (
    <div className={styles.list}>
      {abilities.map((ability, key) => <div key={'abil' + key}>{ability.ability.name} </div>)}
    </div>
) 