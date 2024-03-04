import React from 'react'
import styles from './BlogList.module.css';
import Button from './Button';
import arrow from '../assets/rightArrow.svg';
import { useNavigate } from 'react-router-dom';
const blogList = [
    {
        class: 'big_blog',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FA_comprehensive_guide_on_how_to_negotiate_salary_increment_9d159c9d5b.png&w=640&q=75',
        title: 'A comprehensive guide on how to negotiate salary increment',
        caption: 'Discover the ins and outs of salary negotiation with this guide. Learn how to confidently ask for a raise or negotiate a better salary.'
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2F7_reasons_to_become_digital_marketer_in_2024_379d63a9ae.png&w=640&q=75',
        title: '7 reasons why you should become a digital marketer in 2024',
        caption: 'Uncover 7 reasons to dive into digital marketing in 2024! Navigate the evolving landscape, seize opportunities, and embark on a rewarding career journey.'
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FBanner_image_for_Rutvi_1_7416da376b.png&w=1200&q=75',
        title: 'Top career options after BBA in 2024',
        caption: 'Worried about your future after BBA? Learn about the abundant career prospects and job opportunities across diverse fields after earning your BBA degree.'
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2F10_reasons_to_become_a_software_developer_in_2024_121aab27ba.png&w=640&q=75',
        title: '10 reasons to be a software developer in India in 2024',
        caption: 'Want to know why you should pursue a career in software development? Check out the top reasons why becoming a software developer can be your gateway to success.'
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2F8_common_cv_mistakes_and_how_to_avoid_them_7919535d4c.png&w=640&q=75',
        title: '8 common CV mistakes and how to avoid them?',
        caption: 'Knocking on countless doors and still getting rejected? It is time to take a second look at your CV and rectify common mistakes your CV might have.'
    },
    {
        class: 'banner',
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FRemote_work_91e32e081c.png&w=1200&q=75',
        title: 'Remote work: Benefits, challenges, and how to excel in a virtual work environment',
        caption: 'Want to know if remote work is for you? Explore the pros and cons of remote work along with tips to overcome challenges to make an informed decision.',
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FSkill_GPT_now_Job_Tatkal_1_874dc651e6.png&w=1080&q=75',
        title: 'SkillGPT is now JobTatkal!',
        caption: "After more than a year of development, we have decided to rename SkillGPT. We are now JobTatkal! Here's what JobTatkal stands for.",
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2Fjd_vs_jp_1_27b76c609d.png&w=1200&q=75',
        title: 'Job descriptions vs job postings: What’s the difference?',
        caption: 'Confused between a job description and a job posting? Know the differences between the two and the importance of each.',
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2F9_traits_of_a_toxic_work_culture_and_how_to_overcome_it_2_e446921d5d.png&w=640&q=75',
        title: '9 traits of a toxic work culture and how to overcome it',
        caption: 'Discover the 9 key traits of a toxic work environment and learn effective strategies to overcome them.',
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FWaiting_to_hear_after_an_interview_7a620fc5bc.png&w=1200&q=75',
        title: '5 things to do after a job interview (and 3 big no-nos)',
        caption: "Discover the post-interview etiquette you need to follow! Our blog outlines the essential do's and don'ts for the nerve-wracking waiting period after your job interview. Maximize your chances of success with these tips.",
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FFrame_5451514_cc_952862f179.png&w=1920&q=75',
        title: 'How to successfully navigate a career change',
        caption: "Aiming for a career transition? Here's how you can successfully switch industries and stay relevant in your new job path.",
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FBlog_feature_image_final_634f968261.png&w=640&q=75',
        title: 'How candidate background checks can help you ensure authentic hires?',
        caption: "Discover the superpower of background checks in securing authentic hires. Learn how thorough screening can help you build a trustworthy talent pool.",
    },
    {
        class: 'blogs',
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FBlog_Feature_Image_Template_1_ae682afc9b.png&w=640&q=75',
        title: 'Interview anxiety? AI can calm your nerves',
        caption: 'Trouble getting shortlisted for an interview? Here’s how generative AI and cutting-edge AI tools can help with your interview preparation.'
    }
]
const BlogList = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.blog_main_list}>

            {blogList.map((eBlog, i) => (
                eBlog.class !== 'banner' ? (<div className={styles[eBlog.class]}>
                    <div className={styles.blog_img_wrapper}>
                        <img src={eBlog.coverImg} alt="" />
                    </div>
                    <div className={styles.role}>
                        <p>Job Seeker</p>
                    </div>
                    <div className={styles.blog_title}>
                        <p>{eBlog.title}</p>
                    </div>
                    <p className={styles.blog_caption}>{eBlog.caption}</p>
                </div>) : ( 
                    <div className={styles.blog_banner}>
                        <div className={styles.banner}>
                            <img width={102} src='https://skilldb-ai-cms.s3.ap-south-1.amazonaws.com/Job_Tatkal_Footer_Logo_e6ebb8857f.svg' />
                            <h3>India’s #1 ‘active-in-time’ AI-powered job site</h3>
                            <p>JobTatkal is an AI-powered match-making job site for job seekers and recruiters.</p>
                            <Button handleClick={() => navigate('/signup?role=job-seeker')} size={42}>UPLOAD CV AND 10X YOUR VISIBILITY</Button>
                        </div>
                    </div>
                )
            ))}

            <div className={styles.pagination}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#BABEC3" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </button>
                <p>1 OF 1</p>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#BABEC3" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default BlogList