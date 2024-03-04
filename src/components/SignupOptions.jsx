import React from 'react'
import Button from './Button'
import styles from './SignupOptions.module.css';
import { useNavigate } from 'react-router-dom';
const SignupOptions = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.signupOptions}>
            <p>EXCITED YET? EXPERIENCE US!</p>
            <h2>Made with
                <span>
                    <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.125 11.3906C41.125 23.9687 22.4752 34.1498 21.681 34.5703C21.4717 34.6829 21.2377 34.7419 21 34.7419C20.7623 34.7419 20.5283 34.6829 20.319 34.5703C19.5248 34.1498 0.875 23.9687 0.875 11.3906C0.878329 8.43697 2.05314 5.60524 4.14169 3.51669C6.23024 1.42814 9.06197 0.253329 12.0156 0.25C16.5 0.244946 18.9749 3.30289 21 6C23.0251 3.30289 25.5 0.244946 29.9844 0.25C32.938 0.253329 35.7698 1.42814 37.8583 3.51669C39.9469 5.60524 41.1217 8.43697 41.125 11.3906Z" fill="#FF496C"></path></svg>
                </span>
                in India</h2>
            <div>
                <Button handleClick={() => navigate('/signup?role=job-seeker')} size={60}>Sign up as job seeker</Button>
                <Button handleClick={() => navigate('/signup?role=recruiter')} size={59}>Sign up as recruiter</Button>
            </div>
        </div>
    )
}

export default SignupOptions