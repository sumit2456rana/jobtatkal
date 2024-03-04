import React from 'react'
import JobMenuItems from './JobMenuItems'
import styles from './JobMenuLists.module.css';
export default function JobMenuLists({data}) {
    const {img, title, jobs} = data;
    return (
        <div className={styles.menuItems}>
            <img src={img} />
            <h1>{title}</h1>
            <ul>
                {jobs.map((eJob, i) => (
                    <JobMenuItems key={i} job={eJob} />
                ))}
            </ul>
        </div>
    )
}