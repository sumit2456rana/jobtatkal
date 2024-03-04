import React from 'react'
import styles from './ForgetPassword.module.css';
import InputBox from '../components/InputBox';
const ForgetPassword = () => {
    return (
        <div className={styles.forgetPassword}>
            <div className={styles.boxContainer}>
                <div>
                    <div className={styles.boxOuterDiv}>
                        <div className={styles.box}>
                            <img src='https://app.jobtatkal.com/assets/skillgpt-logo-110e8d44.svg' />
                            <h1>Forgot your password?</h1>
                            <p>Enter your registered email to receive a password reset link.</p>
                            <div style={{margin: '1rem 0'}}>
                                <InputBox type="email" label="Email" id="email" />
                            </div>
                            <button>Send reset link</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sideImage}>
                <img src='https://skilldb-ai-cms.s3.ap-south-1.amazonaws.com/NEW_New_Signup_1_53d233d309.svg' />
            </div>
        </div>
    )
}

export default ForgetPassword