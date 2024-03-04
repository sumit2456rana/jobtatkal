import React from 'react'
import styles from './JobMenu.module.css';
import JobMenuLists from './JobMenuLists';

const jobData = [
    {
        img: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FFrame_5451411_96d15cd5cf.jpg&w=1920&q=75',
        title: 'IT Jobs',
        jobs: [
            'Web Developer',
            'DevOps Engineer',
            'Cloud Architect',
            'Data Scientist',
            'Blockchain engineer',
        ]
    },
    {
        img: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FFrame_5451496_bfc914d4be.jpg&w=1920&q=75',
        title: 'Non It jobs',
        jobs: [
            'Business Analyst',
            'Marketing Manager',
            'Social media Manager',
            'Business Development',
            'Market Research Analyst',
        ]
    },
    {
        img: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FFrame_5451495_0b0cf81ce8.jpg&w=1920&q=75',
        title: 'Jobs by Industry',
        jobs: [
            'Financial Services',
            'Telecommunication',
            'Construction',
            'Business Consulting & Services',
            'Architecture & Planning',
            'Real Estate'
        ]
    }
]
const JobMenu = ({ isMenuOpen }) => {
    return (
        <div className={`${styles.jobMenu} ${isMenuOpen ? styles.openMenu : ''}`}>
            <div className={styles.menuContainer}>
                <div className={styles.itemContainer}>
                    {jobData.map((eData, i) => (
                        <JobMenuLists key={i} data={eData} />
                    ))}
                </div>
                <button>View all jobs</button>
            </div>
        </div>
    )
}

export default JobMenu