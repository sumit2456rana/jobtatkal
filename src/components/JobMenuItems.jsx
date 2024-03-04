import React from 'react'
import styles from './JobMenuItems.module.css';
const JobMenuItems = ({job}) => {
  return (
    <li className={styles.item}>
      <a>{job}</a>
    </li>
  )
}

export default JobMenuItems 