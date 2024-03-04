import React, { useRef } from 'react'
import styles from './BlogTab.module.css'
import { NavLink } from 'react-router-dom'

const blogData = [
    {
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FA_comprehensive_guide_on_how_to_negotiate_salary_increment_9d159c9d5b.png&w=640&q=75',
        title: 'A comprehensive guide on how to negotiate salary increment',
        caption: 'Discover the ins and outs of salary negotiation with this guide. Learn how to confidently ask for a raise or negotiate a better salary.'
    },
    {
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2F10_reasons_to_become_a_software_developer_in_2024_121aab27ba.png&w=640&q=75',
        title: '10 reasons to be a software developer in India in 2024',
        caption: 'Want to know why you should pursue a career in software development? Check out the top reasons why becoming a software developer can be your gateway to success.'
    },
    {
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FFrame_5451481_28e8936e6c.jpg&w=256&q=75',
        title: 'Resume hacks: 5 tips to beat AI screening tools and get noticed',
        caption: 'AI resume scanners hindering your job search? Learn how to optimize your resume for AI screening to land interviews and unlock new career opportunities',
    },
    {
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2F9_traits_of_a_toxic_work_culture_and_how_to_overcome_it_2_e446921d5d.png&w=640&q=75',
        title: '9 traits of a toxic work culture and how to overcome it',
        caption: 'Discover the 9 key traits of a toxic work environment and learn effective strategies to overcome them.',
    },
    {
        coverImg: 'https://www.jobtatkal.com/_next/image?url=https%3A%2F%2Fskilldb-ai-cms.s3.ap-south-1.amazonaws.com%2FBanner_image_for_Rutvi_1_7416da376b.png&w=1200&q=75',
        title: 'Top career options after BBA in 2024',
        caption: 'Worried about your future after BBA? Learn about the abundant career prospects and job opportunities across diverse fields after earning your BBA degree.'
    },
]

const BlogTab = () => {
    const blogRef = useRef();
    const handleNext = () => {
        console.log("CLICKED NEXT");
        let width = blogRef.current.clientWidth;
        blogRef.current.scrollLeft = blogRef.current.scrollLeft + width/2;
    }
    const handlePrev = () => {
        console.log("CLICKED PREV");
        let width = blogRef.current.clientWidth;
        blogRef.current.scrollLeft = blogRef.current.scrollLeft - width/2;
    }
    return (
        <div className={styles.blogTab}>
            <div className={styles.header}>
                <p>KNOWLEDGE CENTER</p>
                <h1>JobTatkal blog</h1>
                <p>Browse content tailored to your talent needs, and all the ways that you can get more out of JobTatkal.</p>
            </div>
            <div ref={blogRef} className={styles.blogCarousel}>
                {blogData.map((blog) => (
                    <div>
                        <div className={styles.coverImg}><img src={blog.coverImg} /></div>
                        <div className={styles.blogContent}>
                            <p>Job Seeker</p>
                            <h1>{blog.title}</h1>
                            <p>{blog.caption}....</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.btns}>
                <NavLink to="/blog">View knowledge center</NavLink>
                <button onClick={handlePrev} style={{ transform: 'rotate(180deg)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5C5F62" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </button>
                <button onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#5C5F62" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default BlogTab