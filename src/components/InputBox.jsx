import React from 'react'
import styles from './InputBox.module.css';
const InputBox = ({type, label, id, onChangeHandler, value}) => {
  return (
    <div className={styles.inputBox}>
        <label htmlFor={id}>{label} <span style={{color: 'red'}}>*</span></label>
        <input value={value} type={type} id={id} />
    </div>
  )
}

export default InputBox