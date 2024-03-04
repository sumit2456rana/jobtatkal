import React from 'react';
import styles from './JobTags.module.css';

const JobTags = ({tags}) => {
    const {exp, ctc, location, empType, workType} = tags;

    return (
        <div className={styles.jobTags}>
            <div>
                <span><svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fillRule="evenodd" d="M6.5 4.75v.75h-.5a3 3 0 0 0-3 3.018v5.482a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5.5a3 3 0 0 0-3-3h-.5v-.75a1.75 1.75 0 0 0-1.75-1.75h-3.5a1.75 1.75 0 0 0-1.75 1.75Zm1.75-.25a.25.25 0 0 0-.25.25v.75h4v-.75a.25.25 0 0 0-.25-.25h-3.5Zm5.75 2.5h-8a1.5 1.5 0 0 0-1.476 1.233c.044.045.096.095.154.151.247.232.617.546 1.104.861a7.707 7.707 0 0 0 4.218 1.255 7.707 7.707 0 0 0 4.217-1.255 7.783 7.783 0 0 0 1.26-1.012 1.5 1.5 0 0 0-1.477-1.233Zm-9.5 3.182a9.243 9.243 0 0 0 4.5 1.764v.054a1 1 0 1 0 2 0v-.054a9.241 9.241 0 0 0 4.5-1.764v3.818a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-3.818Z"></path></svg></span>
                <p>{exp}</p>
            </div>
            <div>
                <span><svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M11.889 13.893a.75.75 0 0 0-.246-1.032l-1.713-1.054a2.487 2.487 0 0 0 1.059-1.807h1.261a.75.75 0 0 0 0-1.5h-1.25v-.75h1.25a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 1 0 0 1.5h1.75v.75h-1.75a.75.75 0 0 0 0 1.5h1.721a.989.989 0 0 1-.96.75c-.902 0-1.237 1.184-.468 1.657l2.814 1.732a.75.75 0 0 0 1.032-.246Z"></path><path fillRule="evenodd" d="M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-5.5 7a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z"></path></svg></span>
                <p>{ctc === "" ? 'Not Disclosed' : ctc}</p>
            </div>
            <div>
                <span><svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fillRule="evenodd" d="M10 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path fillRule="evenodd" d="M4.25 8.227c0-3.166 2.578-5.727 5.75-5.727s5.75 2.56 5.75 5.727c0 2.699-1.128 4.985-2.34 6.581-.341.449-.692.848-1.033 1.192h1.873a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h1.873a11.997 11.997 0 0 1-1.033-1.192c-1.212-1.596-2.34-3.882-2.34-6.581Zm5.75-4.227c-2.35 0-4.25 1.896-4.25 4.227 0 2.277.955 4.253 2.035 5.674a9.605 9.605 0 0 0 1.554 1.634c.23.186.424.316.569.396.038.021.068.036.092.047.024-.01.054-.026.092-.047.145-.08.34-.21.57-.396a9.606 9.606 0 0 0 1.553-1.634c1.08-1.421 2.035-3.397 2.035-5.674 0-2.331-1.9-4.227-4.25-4.227Z"></path></svg></span>
                <p>{location}</p>
            </div>
            <div>
                <span><svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M16.746 3.104a.5.5 0 0 0 0-.707l-1.06-1.061a.5.5 0 0 0-.707 0l-.957.957 1.767 1.768.957-.957Z"></path><path d="m15.082 4.768-1.768-1.768-3.699 3.7a2 2 0 0 0-.585 1.406l-.003.698a.25.25 0 0 0 .251.251l.698-.002a2 2 0 0 0 1.407-.586l3.7-3.7Z"></path><path d="M5.5 4.75c0-.69.56-1.25 1.25-1.25h3.25a.75.75 0 0 0 0-1.5h-3.25a2.75 2.75 0 0 0-2.75 2.75v10.5a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-7.25a.75.75 0 0 0-1.5 0v7.25c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-10.5Z"></path><path d="M7.75 10.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"></path><path d="M7 14.25a.75.75 0 0 1 .75-.75h2.75a.75.75 0 0 1 0 1.5h-2.75a.75.75 0 0 1-.75-.75Z"></path></svg></span>
                <p>{empType}</p>
            </div>
            <div>
                <span><svg viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M4.75 10a5.25 5.25 0 0 1 10.5 0 .75.75 0 0 0 1.5 0 6.75 6.75 0 1 0-6.75 6.75.75.75 0 0 0 0-1.5 5.25 5.25 0 0 1-5.25-5.25Z"></path><path d="M11.537 9.805a.75.75 0 0 0 1.486-.208 3 3 0 1 0-3.492 3.372.75.75 0 1 0 .26-1.478 1.5 1.5 0 1 1 1.746-1.686Z"></path><path d="M11.61 10.973a.5.5 0 0 0-.637.638l2.121 6.01a.5.5 0 0 0 .871.135l1.172-1.558 1.038 1.037a.5.5 0 0 0 .707 0l.353-.353a.5.5 0 0 0 0-.707l-1.037-1.038 1.558-1.171a.5.5 0 0 0-.135-.872l-6.01-2.12Z"></path></svg></span>
                <p>{workType}</p>
            </div>
        </div>
    )
}

export default JobTags