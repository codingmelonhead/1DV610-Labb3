import styles from '../../styles/movieCard.module.css'
import Image from 'next/image'
import { useState } from 'react'

const MovieCard = ({movieTitle, movieDescription, movieImage}) => {
  const [showDescription, setShowDescription] = useState(false)

  const toggleShowDescription = () => {
    setShowDescription(!showDescription)
  }

  return (
    <>
    <div className={styles.container}>
      <h2 className={styles.titleStyle}>{movieTitle}</h2>
      <div className={styles.descriptionContainer}>
        <p className={`${styles.descriptionStyle} ${showDescription ? styles.showDescription : styles.hideDescription}`}>{movieDescription}</p>
        <button onClick={toggleShowDescription} className={styles.toggleButton}>
          {showDescription ? 'Hide description' : 'Show description'}
        </button>
      </div>
      <Image
        src={movieImage}
        alt="Movie cover"
        height="450"
        width="300"
        className={styles.imageStyle} 
      />
    </div>
    </>
  )
}

export default MovieCard