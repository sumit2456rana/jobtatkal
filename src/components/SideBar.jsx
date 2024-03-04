import React from 'react'
import styles from './SideBar.module.css';
import SearchBox from './SearchBox';
import Button from './Button';
import { NavLink, useNavigate } from 'react-router-dom';
const SideBar = ({ isSideBarOpen }) => {
  const navigate = useNavigate();
  return (
    <div style={{ right: `${isSideBarOpen ? '0px' : '-1000%'}` }} className={styles.sideBar}>
      <div className={styles.searchCont}>
        <SearchBox />
      </div>
      <ul>
        <li>
          <NavLink to="/">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/signup?role=recruiter">For Recruiters</NavLink>
        </li>
      </ul>
      <div className={styles.btnCont}>
        <Button handleClick={() => navigate('/signup')} size={48}>Sign Up</Button>
      </div>
      
    </div>
  )
}

export default SideBar