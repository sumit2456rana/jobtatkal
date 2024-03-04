import React from 'react'
import SearchIcon from '../assets/search.svg';
import rightArrow from '../assets/rightArrow.svg';
import styles from './SearchBox.module.css';
const SearchBox = ({placeholder}) => {
    return (
        <div className={styles.search}>
            <div>
                <img src={SearchIcon} />
                <input type='text' placeholder={placeholder} />
            </div>
            <button>
                <img src={rightArrow} />
            </button>
        </div>
    )
}

export default SearchBox