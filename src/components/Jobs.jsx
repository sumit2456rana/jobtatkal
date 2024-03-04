import React, { useEffect } from 'react'
import styles from './Jobs.module.css';
import Pagination from './Pagination';
import SkeletonLoader from './SkeletonLoader';
import JobCard from './JobCard';
import { useJobs } from '../contexts/JobsContext';

const Jobs = () => {
  const { jobs, fetchJobs, isLoading, error } = useJobs();

  useEffect(() => {
    fetchJobs();
  }, [])
  if (error) {
    return (<div className={styles.job}>
      <h1 className={styles.noResultsFound}>{error}</h1>
    </div>)
  }
  if (jobs.length === 0) {
    return (
      <div className={styles.job}>
        <h1 className={styles.noResultsFound}>No result found.</h1>
      </div>
    )
  }
  return (
    <div className={styles.job}>
      <p className={styles.totalResults}>Total {jobs.length} results</p>
      <Pagination />
      {isLoading ? (Array.from({ length: 5 }, () => undefined).map((e, i) => (
        <SkeletonLoader key={i} />
      ))) :
        (jobs.map((eData, i) => (
          <JobCard data={eData} key={i} />
        )))}
      <Pagination />
    </div>
  )
}

export default Jobs