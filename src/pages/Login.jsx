import React from 'react'
import styles from './Login.module.css';
import InputBox from '../components/InputBox';
import { NavLink } from 'react-router-dom';
const Login = () => {
    return (
        <div className={styles.login}>
            <div>
                <div className={styles.loginContainer}>
                    <div>
                        <img src='https://app.jobtatkal.com/assets/skillgpt-logo-110e8d44.svg' />
                        <h1>Login to JobTatkal!</h1>
                        <p>Welcome to the India's #1 AI-powered job platform</p>
                        <form className={styles.loginForm}>
                            <div>
                                <InputBox type="email" label="Email" id="email" />
                            </div>
                            <div>
                                <InputBox type="password" label="Password" id="pass" />
                            </div>
                            <div className={styles.para}>
                                <p>Forgot password? <NavLink to="/forget-password">Reset Now.</NavLink></p>
                            </div>
                            <div>
                                <button className={styles.button}>Login</button>
                            </div>
                        </form>
                        <div className={styles.para}>
                            <p>New to the portal? <NavLink to="/signup">Sign Up</NavLink></p>
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

export default Login