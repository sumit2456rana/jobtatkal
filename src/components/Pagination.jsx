import React, { useEffect, useRef, useState } from 'react'
import styles from './Pagination.module.css';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
const Pagination = () => {
    const [dropdown, setDropDown] = useState(false);
    const [selectedPerPage, setSelectedPerPage] = useState(10);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDropDown(false);
            }
        };

        if (dropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdown]);
    return (
        <div className={styles.pagination}>
            <div>
                <div className={styles.arrow}>
                    <WestOutlinedIcon />
                </div>
                <span>Page 1 of 1</span>
                <div className={styles.arrow}>
                    <EastOutlinedIcon />
                </div>
            </div>
            <div>
                <div ref={menuRef} onClick={() => setDropDown(prev => !prev)} className={styles.resultsPerPage}>
                    <span>Showing {selectedPerPage} results per page</span>
                    <ArrowDropDownOutlinedIcon />
                </div>
                <div style={{ opacity: `${dropdown ? '1' : '0'}` }} className={styles.resultsPerPageDropdown}>
                    {Array.from({ length: 5 }, (_, index) => index + 1).map((e, i) => (
                        <p style={{color : `${selectedPerPage === e*10 ? '#8C9196' : ''}`, cursor: `${selectedPerPage === e*10 ? 'default' : ''}`, backgroundColor: `${selectedPerPage === e*10 ? 'transparent' : ''}`}} onClick={() => setSelectedPerPage(e*10)} key={i}>{e*10}</p>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Pagination