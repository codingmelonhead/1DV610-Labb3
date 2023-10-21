import styles from '../../styles/movieCard.module.css'
import Image from 'next/image'

const MovieCard = (movieTitle, movieDescription, movieImage) => {
  return (
    <>
    <div className={styles.container}>
      <h2 className={styles.titleStyle}>{movieTitle}</h2>
      <p className={styles.descriptionStyle}>{movieDescription}</p>
      <Image
        src={movieImage}
        alt="Movie cover"
        className={styles.imageStyle} 
      />
    </div>
    </>
  )
}

export default MovieCard