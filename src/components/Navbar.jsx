import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css';
import Logo from './Logo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { NavLink, useNavigate } from 'react-router-dom';
import JobMenu from './JobMenu';
import SideBar from './SideBar';
import { Turn } from 'hamburger-react';
import Button from './Button';
import SearchBox from './SearchBox';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openJobMenu, setOpenJobMenu] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);
    const navigate = useNavigate();
    function handleOpenJobMenu() {
        setOpenJobMenu(prev => !prev);
    }
    function handleOpenSideBar(e) {
        e.stopPropagation();
        setOpenSideBar(prev => !prev);
    }
    function handleSignUp() {
        navigate('/signup')
    }
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    useEffect(() => {
        if(openSideBar){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    },[openSideBar])
    return (
        <nav className={styles.nav}>
            <div style={{ backgroundColor: `${openJobMenu || openSideBar ? '#fff' : ''}` }} className={`${scrolled ? styles.scrolled : ''} ${styles.scrollDiv}`}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <Logo />
                        <ul>
                            <li style={{ color: `${openJobMenu ? 'var(--color-green-1)' : ''}` }} onClick={handleOpenJobMenu}>
                                Jobs
                                <ArrowDropDownIcon style={{ transform: `${openJobMenu ? 'rotate(180deg)' : ''}`, transition: 'all .3s ease' }} />
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.rightContainer}>
                        <div className={styles.search}>
                            <SearchBox placeholder='Search jobs by keyword' />
                        </div>
                        <NavLink to="/signup?role=recruiter">For Recruiters</NavLink>
                        <Button handleClick={handleSignUp} size={45}>Sign Up</Button>
                    </div>
                    <div onClick={handleOpenSideBar} className={styles.hamburgerIcon}>
                        <Turn direction='right' size={26} />
                    </div>
                </div>
            </div>
            <JobMenu isMenuOpen={openJobMenu} />
            <SideBar isSideBarOpen={openSideBar} />
            <div onClick={handleOpenJobMenu} className={`${openJobMenu || openSideBar ? styles.backDropOpen : styles.backDropClose}`}></div>
        </nav>
    )
}

export default Navbar