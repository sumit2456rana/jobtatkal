import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styles from './HomePage.module.css';
import Heading from '../components/Heading';
import Filter from '../components/Filter';
import Jobs from '../components/Jobs';
import TopCompanies from '../components/TopCompanies';
import Button from '../components/Button';
import FilterTab from '../components/FilterTab';
import SignupOptions from '../components/SignupOptions';
import BlogTab from '../components/BlogTab';
import Footer from '../components/Footer';
const HomePage = () => {
  const [openFiltersTab, setOpenFiltersTab] = useState(false);
  return (
    <>
      <Navbar />
      <div className={styles.homePage}>
        <div className={styles.mainContainer}>
          <div>
            <Heading>Jobs in India</Heading>
            <div style={{height: '1px', backgroundColor: '#E1E3E5'}} />
            <div className={styles.container}>
              <Filter />
              <Jobs />
              <TopCompanies />
            </div>
          </div>
        </div>
        <div className={styles.applyFilters}>
          <Button handleClick={() => setOpenFiltersTab(prev => !prev)} size={40}>Apply Filters</Button>
        </div>
        <FilterTab openFiltersTab={openFiltersTab} setOpenFiltersTab={setOpenFiltersTab} />
        <BlogTab />
        <SignupOptions />
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default HomePage