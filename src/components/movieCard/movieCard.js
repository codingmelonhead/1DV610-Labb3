import styles from '../../styles/movieCard.module.css'
import Image from 'next/image'

const MovieCard = (movieTitle, movieDescription, movieImage) => {
  return (
    <>
    <div>
      <h1>{movieTitle}</h1>
      <p>{movieDescription}</p>
      <Image
        src={movieImage}
        alt="Movie cover" 
      />
    </div>
    </>
  )
}