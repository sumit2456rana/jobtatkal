import React from 'react'
import styles from './Button.module.css';
const Button = ({children, size, handleClick}) => {
  return (
    <button onClick={handleClick} style={{height : `${size}px`}} className={styles.btn}>{children}</button>
  )
}

export default Button