import React from 'react'
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
const data = [
    {
        heading: 'Jobs - location',
        links: [
            {
                name: 'Jobs in Ahmedabad',
            },
            {
                name: 'Jobs in Delhi',
            },
            {
                name: 'Jobs in Banglore',
            },
            {
                name: 'Jobs in Mumbai',
            },
            {
                name: 'Jobs in Kolkata',
            }
        ]
    },
    {
        heading: 'Jobs - Preference',
        links: [
            {
                name: 'Jobs for Women',
            },
            {
                name: 'Full time Jobs',
            },
            {
                name: 'Part time Jobs',
            },
            {
                name: 'Work from home Jobs'
            }
        ]
    },
    {
        heading: 'Jobs - Industry',
        links: [
            {
                name: 'Financial Services',
            },
            {
                name: 'Telecomunications',
            },
            {
                name: 'Constructions',
            },
            {
                name: 'Business Consulting & Services',
            },
            {
                name: 'Architecture & Planning',
            },
            {
                name: 'Real Estate',
            }
        ]
    },
    {
        heading: 'Company',
        links: [
            {
                name: 'For Recruiters',
                href: '/signup?role=recruiter',
            },
            {
                name: 'Terms of Use',
            },
            {
                name: 'Privacy Policy',
            },
            {
                name: 'Blog',
                href: '/blog',
            },
            {
                name: 'Upload CV',
                href: '/signup?role=job-seeker'
            }
        ]
    }
]
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <div className={styles.logoContainer}>
                    <img src='https://skilldb-ai-cms.s3.ap-south-1.amazonaws.com/Job_Tatkal_Footer_Logo_e6ebb8857f.svg' />
                </div>
                <div className={styles.footerContent}>
                    {data.map((each, i) => (
                        <div key={i} className={styles.col}>
                            <h5>{each.heading}</h5>
                            <div className={styles.hr} />
                            <ul>
                                {each.links.map((link) => (
                                    <li><NavLink to={link.href}>{link.name}</NavLink></li>
                                ))}
                            </ul>
                        </div>))}
                </div>
            </div>
            <div style={{backgroundColor: 'var(--color-green-1)'}}>
                <div className={styles.copyright}>
                    <h3>Copyright © 2024 by Jobtatkal</h3>
                    <div>
                        <LinkedInIcon />
                        <InstagramIcon />
                        <FacebookIcon />
                        <XIcon />
                        <YouTubeIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer