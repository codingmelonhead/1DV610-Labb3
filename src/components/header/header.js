import styles from '../../styles/header.module.css'
import Image from 'next/image'
import header from './img/header.png'

const Header = () => {
  return (
    <>
    <div className={styles.headerContainer}>
      <Image
        src={header}
        alt="Header image"
        className={styles.headerImage}
      />
    </div>
  </>
  )
}

export default Header