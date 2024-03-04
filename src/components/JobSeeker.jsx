import React, { useState } from 'react'
import styles from './JobSeeker.module.css';
import ArticleIcon from '@mui/icons-material/Article';
import InputBox from './InputBox';
const JobSeeker = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div>
            <div className={styles.hr} />
            <form>
                <label style={{ marginBottom: '10px', display: 'block', fontSize: '14px' }}>Upload your CV <span style={{ color: 'red' }}>*</span></label>
                <div style={{ padding: `${selectedFile ? '0' : '20px'}` }} className={styles.cvInputBox}>
                    <input type="file" autoComplete='off' accept=".doc, .docx, .pdf" className={styles.fileInput} onChange={handleFileChange} />
                    {selectedFile ? (
                        <div className={styles.selectedFile}>
                            <div>
                                <ArticleIcon />
                            </div>
                            <div>{selectedFile.name}</div>
                        </div>
                    ) : (
                        <>
                            <div className={styles.uploadCV}>
                                Upload CV
                            </div>
                            <p className={styles.doc}>Accepts .doc, .docx, and .pdf file formats only</p>
                        </>
                    )}

                </div>
                <div className={styles.formItem}>
                    <InputBox type="email" label="Email" id="email" />
                </div>
                <div className={styles.formItem}>
                    <InputBox type="password" label="Password" id="pass" />
                </div>
                <div className={styles.button}>
                    <button>Save and continue to next step</button>
                </div>
            </form>
            <div style={{ marginTop: '50px' }}>
                <div className={styles.successRate}>
                    <svg fill='#b77e0b' width={20} height={20} viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M11 13a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0v6zm-4 0a1 1 0 1 0 2 0v-6a1 1 0 0 0-2 0v6zm3-11a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path></svg>
                    <span>Upload your CV, enter email and set password</span>
                </div>
                <div className={styles.successRate}>
                    <svg fill='#b77e0b' width={20} height={20} viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M11 13a1 1 0 1 0 2 0v-6a1 1 0 1 0-2 0v6zm-4 0a1 1 0 1 0 2 0v-6a1 1 0 0 0-2 0v6zm3-11a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path></svg>
                    <span>Phone verification successful</span>
                </div>
            </div>
        </div>
    );
}

export default JobSeeker