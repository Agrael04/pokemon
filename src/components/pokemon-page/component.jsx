import React from 'react'

import styles from './style.less'

import BackButton from './back-button'
import Movements from './movements'
import Spot from './spot'
import Title from './title'

export default ({ pokemon }) => (
  <div className={styles.page}>
    <div className={styles.head}>
      <Title pokemon={pokemon}/>
      <Spot pokemon={pokemon}/>
    </div>
    <Movements pokemon={pokemon}/>
    <BackButton/>
  </div>
)