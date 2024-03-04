import React from 'react'
import styles from './Recruiter.module.css';
import InputBox from './InputBox';
const Recruiter = () => {
  return (
    <div className={styles.recruiter}>
      <div className={styles.hr} />
      <form>
        <InputBox type="text" label="Company name" id="companyName" />
        <div className={styles.formItem}>
          <label htmlFor='cmpnySlug'>Company slug <span style={{ color: 'red' }}>*</span></label>
          <div className={styles.companySlug}>
            <div>https://www.jobtatkal.com/org/</div>
            <input id='cmpnySlug' type='text' />
          </div>
          <p>Enter your company name to create a unique URL</p>
        </div>
        <div className={styles.hr} />
        <div className={styles.formItem}>
          <InputBox type="text" label="First name" id="firstName" />
        </div>
        <div className={styles.formItem}>
          <InputBox type="text" label="Last name" id="lastName" />
        </div>
        <div className={styles.formItem}>
          <InputBox type="email" label="Email" id="email" />
        </div>
        <div className={styles.formItem}>
          <InputBox type="password" label="Password" id="pass" />
        </div>
        <div className={styles.button}>
          <button>Create profile</button>
        </div>
      </form>
    </div>
  )
}

export default Recruiter