import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className={styles.checkBoxContainer}>
      <input id={id} type="checkbox" className={styles.ui_checkbox} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
