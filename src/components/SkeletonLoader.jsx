import React from 'react'
import { Skeleton } from '@mui/material'
import styles from './SkeletonLoader.module.css'
const SkeletonLoader = () => {
    return (
        <div className={styles.skeletonLoader}>
            <div className={styles.skeletonHeader}>
                <Skeleton variant='rounded' width={120} height={30} />
                <Skeleton variant='rounded' width={75} height={30} />
            </div>
            <Skeleton variant='rounded' width={250} />
            <Skeleton variant='rounded' width={250} height={30} />
            <div className={styles.skeletonFlex}>
                <Skeleton variant='rounded' width={85} height={20} />
                <Skeleton variant='rounded' width={85} height={20} />
            </div>
            <div className={styles.skeletonFlex}>
                <Skeleton variant='rounded' width={110} height={25} />
                <Skeleton variant='rounded' width={110} height={25} />
                <Skeleton variant='rounded' width={110} height={25} />
            </div>
        </div>
    )
}

export default SkeletonLoader