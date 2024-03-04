import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useJobs } from '../contexts/JobsContext';
import styles from './JobPreview.module.css';
import Heading from '../components/Heading';
import JobTags from '../components/JobTags';
import Button from '../components/Button';
import BlogTab from '../components/BlogTab';
import SignupOptions from '../components/SignupOptions';
import Footer from '../components/Footer';
const JobPreview = () => {
    const { id } = useParams();
    const { getJob, currentJob } = useJobs();
    const [isCopied, setIsCopied] = useState(false);
    useEffect(() => {
        getJob(id);
    }, [id]);

    useEffect(() => {
        if (currentJob && currentJob.companyName) {
            const words = currentJob.companyName.split(' ');
            const capitalizedCompanyName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
            document.title = `Join ${capitalizedCompanyName}: Exciting Job Opportunity for ${currentJob.jobRole}`;
        }
    }, [currentJob]);

    if (!currentJob) {
        return <div>Loading...</div>;
    }
    const handleCopyUrl = () => {
        const currentUrl = window.location.href;

        const el = document.createElement('input');
        el.value = currentUrl;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        setIsCopied(true);
        document.body.removeChild(el);
        setTimeout(() => {
            setIsCopied(false);
        },1500)
    };

    const shareViaWhatsApp = () => {
        const text = `Check out this job: ${currentJob.jobRole} at ${currentJob.companyName}. ${window.location.href}`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const shareViaLinkedIn = () => {
        const jobURL = encodeURIComponent(window.location.href);
        const linkedInShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${jobURL}&mini=true`;
        window.open(linkedInShareURL, '_blank');
    };

    const shareViaTwitter = () => {
        const text = `Check out this job: ${currentJob.jobRole} at ${currentJob.companyName}.`;
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };
    const { companyLogo, companyName, jobRole, jobTags, skillsRequired, noOfOpenings } = currentJob;

    return (
        <div style={{backgroundColor: '#FAFBFB'}}>
            <Navbar />
            <div className='pages' title='' style={{marginBottom: "50px"}}>
                <div className={styles.jobPreview}>
                    <div className={styles.jobData}>
                        <Heading>{jobRole}</Heading>
                        <div className={styles.companyData}>
                            <div>
                                <img src={companyLogo} alt={`${companyName} logo`} />
                                <span>{companyName}</span>
                            </div>
                            <div style={{ height: '20px', width: '1px', backgroundColor: '#E1E3E5' }} />
                            <div>{noOfOpenings} Applicants</div>
                        </div>
                        {jobTags && <JobTags tags={jobTags} />}
                        <div className={styles.hr} />
                        <div className={styles.skillsRequired}>
                            <h3>Required skills</h3>
                            <ul>
                                {skillsRequired?.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.applyingBtns}>
                            <Button size={42}>Apply to this job</Button>
                            <Button size={41}>Prepare for this job's interview</Button>
                        </div>
                    </div>
                    <div className={styles.share}>
                        <div>
                            <p>Share</p>
                            <img src='https://www.jobtatkal.com/_next/static/media/shareNew.552e55c2.svg' alt='share' />
                        </div>
                        <div>
                            <button onClick={shareViaLinkedIn}>
                                <img src='https://www.jobtatkal.com/_next/static/media/LinkedInShare.5bfce97d.svg' alt='LinkedIn' />
                            </button>
                            <button onClick={shareViaWhatsApp}><img src="https://www.jobtatkal.com/_next/static/media/Whatsapp.e0885a9f.svg" alt="whatsapp" /></button>
                            <button onClick={shareViaTwitter}><img src="https://www.jobtatkal.com/_next/static/media/TwitterShare.49ff2051.svg" alt="twitter" /></button>
                            <div className={styles.copyUrl}>
                                <button onClick={handleCopyUrl}><img src="https://www.jobtatkal.com/_next/static/media/copytoIcon.57e39038.svg" alt="copy" /></button>
                                {isCopied && <span>Copied</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BlogTab />
            <SignupOptions />
            <Footer />
        </div>
    );
};

export default JobPreview;
