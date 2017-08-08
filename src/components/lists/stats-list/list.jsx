import React from 'react'

import styles from './style.less'

export default ({ stats }) => (
  <div className={styles.list}>
    {stats.map((stat, key) => <div key={'stat' + key}>{stat.stat.name} - {stat.base_stat} </div>)}
  </div>
) 