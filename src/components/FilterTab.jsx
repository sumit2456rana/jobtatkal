import React, { useEffect } from 'react';
import styles from './FilterTab.module.css';
import CloseIcon from '@mui/icons-material/Close';
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
const FilterTab = ({ openFiltersTab, setOpenFiltersTab }) => {
    useEffect(() => {
        if (openFiltersTab) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [openFiltersTab])
    return (
        <div style={{ bottom: openFiltersTab ? '0' : '-100vh' }} className={styles.filterTab}>
            <div className={styles.header}>
                <p>Filters</p>
                <CloseIcon onClick={() => setOpenFiltersTab(false)} />
            </div>
            <div className={styles.allFilters}>
                <AllFilters filters={filters} />
            </div>
        </div>
    );
};

export default FilterTab;
