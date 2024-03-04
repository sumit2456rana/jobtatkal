import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { NavLink, useSearchParams } from 'react-router-dom'
import styles from './SignUp.module.css';
import Jobseeker from '../components/JobSeeker';
import Recruiter from '../components/Recruiter';

const SignUp = () => {
  const [param, setParam] = useSearchParams();
  
  const [signupMode, setSignupMode] = useState(param.get('role'));
  
  const handleSignupMode = (mode) => {
    setSignupMode(mode);
  }
  useEffect(() => {
    setParam("");
  },[signupMode])
  return (
    <div className={styles.signup}>
      <div>
        <div className={styles.signUpContainer}>
          <div>
            <img src='https://app.jobtatkal.com/assets/skillgpt-logo-110e8d44.svg' />
            <h1>Welcome to JobTatkal!</h1>
            <p>JobTatkal personalization wizard: Let’s setup your JobTatkal, your way.</p>
            <div className={styles.btns}>
              <div>
                <div style={{width: `${signupMode === 'job-seeker' ? '54%' : `${signupMode === 'recruiter' ? '25%' : ''}`}`}} className={`${signupMode === 'job-seeker' ? styles.selected : ''}`}>
                  <Button handleClick={() => handleSignupMode('job-seeker')} size={36}>Job Seeker</Button>
                </div>
                <div style={{width: `${signupMode === 'recruiter' ? '54%' : `${signupMode === 'job-seeker' ? '25%' : ''}`}`}} className={`${signupMode === 'recruiter' ? styles.selected : ''}`}>
                  <Button handleClick={() => handleSignupMode('recruiter')} size={36}>Recruiter</Button>
                </div>
              </div>
            </div>
            {signupMode === 'job-seeker' && <Jobseeker />}
            {signupMode === 'recruiter' && <Recruiter />}
            <div className={styles.alreadyAcc}>
              <p>Already have an account? <NavLink to='/login'>Log in</NavLink></p>
              <p className={styles.termsPrivacy}>
                <span>Terms</span>
                <span>Privacy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img loading='lazy' src='https://skilldb-ai-cms.s3.ap-south-1.amazonaws.com/Job_Tatkal_Signup_69ef7e7ad5.svg' />
      </div>
    </div>
  )
}

export default SignUp