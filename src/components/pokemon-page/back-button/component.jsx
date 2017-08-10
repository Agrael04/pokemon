import React from 'react'

import styles from './style.less'

export default ({ handleClick }) => (
  <div className={styles.backButton}>
    <button onClick={handleClick}> Back to collection </button>
  </div>
)