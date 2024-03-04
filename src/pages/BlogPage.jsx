import React from 'react'
import Navbar from '../components/Navbar'
import SearchBox from '../components/SearchBox'
import Heading from '../components/Heading'
import styles from './BlogPage.module.css';
import BlogList from '../components/BlogList';
import SignupOptions from '../components/SignupOptions';
import Footer from '../components/Footer';
const BlogPage = () => {
    return (
        <div>
            <div style={{backgroundColor: '#fafbfb'}}>
                <Navbar />
                <div className='pages'>
                    <div className={styles.blogPage}>
                        <Heading>At JobTatkal, we’re penning thoughts</Heading>
                        <p>Browse a treasure trove of resources crafted for your career aspirations, job growth, and talent acquisition needs.</p>
                        <div className={styles.searchContainer}>
                            <SearchBox placeholder="Search Blog" />
                        </div>
                        <div className={styles.blogTags}>
                            <div>Most recent</div>
                            <div>General</div>
                            <div>Recruitment</div>
                            <div>Job seeker</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{paddingTop: '0'}} className='pages'>
                <BlogList />
            </div>
            <div style={{marginTop: '50px', backgroundColor: '#F1F8F5'}}>
                <SignupOptions />
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage