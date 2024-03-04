import React, { useEffect, useState } from 'react';
import styles from './Filter.module.css';
import AllFilters from './AllFilters';

const filters = {
  "work Type": [
    { id: 'onSite', label: 'On-site' },
    { id: 'remote', label: 'Remote' },
    { id: 'hybrid', label: 'Hybrid' },
  ],
  "employment Type": [
    { id: 'fullTime', label: 'Full-time' },
    { id: 'partTime', label: 'Part-time' },
    { id: 'internship', label: 'Internship' },
  ],
  location: [
    { id: 'adalaj', label: 'Adalaj (Gujarat)' },
    { id: 'agra', label: 'Agra (Uttar Pradesh)' },
    { id: 'ahmedabad', label: 'Ahmedabad (Gujarat)' },
  ],
  industry: [
    { id: 'itServices', label: 'IT Services and IT Consulting' },
    { id: 'hrServices', label: 'Human Resources Services' },
    { id: 'education', label: 'Education' },
  ],
  department: [
    { id: 'adminFacilities', label: 'Administration & Facilities' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'contentJournalism', label: 'Content, Editorial & Journalism' },
  ],
  "salary Range": [
    { id: '0-3L', label: '0-3 Lakhs' },
    { id: '3-6L', label: '3-6 Lakhs' },
    { id: '6-10L', label: '6-10 Lakhs' },
  ],
  "preferred Gender": [
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
    { id: 'transgender', label: 'Transgender' },
  ],
  "company Type": [
    { id: 'govtPSU', label: 'Government/PSU' },
    { id: 'mnc', label: 'MNC' },
    { id: 'startup', label: 'Startup' },
  ],
  "job Freshness": [
    { id: 'last30', label: 'Last 30 days' },
    { id: 'last15', label: 'Last 15 days' },
    { id: 'last7', label: 'Last 7 days' },
    { id: 'last3', label: 'Last 3 days' },
    { id: 'last1', label: 'Last 1 day' },
  ],
};

const Filter = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isWideScreen) {
    return null;
  }
  return (
    <div id='filter' className={styles.filter}>
      <h4>All filters</h4>
      <AllFilters filters={filters} />
    </div>
  );
};

export default Filter;
