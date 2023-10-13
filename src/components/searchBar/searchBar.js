import React from 'react'
import Image from 'next/image'
import styles from '../../styles/searchBar.module.css'

const SearchBar = () => {

  return(
    <>
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search..."
        id="searchKey"
        className={styles.inputField}
      />
      <input
        type="submit"
        className={styles.submitIcon}
      />
      {/* <Image 
        src={searchIcon}
        alt="Search icon"
        width="200"
        height="200"
        className={styles.searchImage}
      /> */}
    </div>
    </>
  )
}

export default SearchBar