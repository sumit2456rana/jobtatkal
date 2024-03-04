import React, { useRef } from 'react'
import styles from './JobCard.module.css';
import Button from './Button'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
import JobTags from './JobTags';
const JobCard = ({ data }) => {
    const { companyLogo, companyName, jobRole, jobTags, skillsRequired, jobPosted, id } = data;
    const navigate = useNavigate();
    const skillRef = useRef();
    const handleNext = (e) => {
        e.stopPropagation();
        console.log("NEXT");
        let width = skillRef.current.clientWidth;
        skillRef.current.scrollLeft = skillRef.current.scrollLeft + width;
    }
    const handlePrev = (e) => {
        e.stopPropagation();
        console.log("PREV");
        let width = skillRef.current.clientWidth;
        skillRef.current.scrollLeft = skillRef.current.scrollLeft - width;
    }
    
    return (
        <div onClick={() => navigate(`/jobs/${id}`)} className={styles.jobCard} >
            <div className={styles.companyLogo}>
                <img src={companyLogo} />
                <Button size={32}>Apply</Button>
            </div>
            <p className={styles.companyName}>{companyName}</p>
            <h3 className={styles.jobTitle}>{jobRole}</h3>
            
            <JobTags tags={jobTags} />

            <div className={styles.skillsRequired}>
                <button onClick={handlePrev}><ChevronLeftIcon /></button>
                <ul ref={skillRef}>
                    {skillsRequired.map((e, i) => (
                        <li key={i}>
                            {e}
                        </li>
                    ))}
                </ul>
                <button onClick={handleNext}><ChevronRightIcon /></button>
            </div>

            <p className={styles.jobPosted}>Posted {jobPosted} days ago</p>
        </div>
    )
}

export default JobCard