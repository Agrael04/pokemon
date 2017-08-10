import React from 'react'

import styles from './style.less'

import Pokemon from './pokemon'
import Filter from './filter'

export default ({ collection }) => (
  <div className={styles.page}>
    <Filter/>
    <div className={styles.list}>
    {
      collection.map((item, key) => (
        <Pokemon item={item} key={key}/>
      ))
    }
    </div>
  </div>
)