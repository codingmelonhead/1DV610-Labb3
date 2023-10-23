import MovieFetcherButton from "../movieFetcherButton/movieFetcherButton"
import { ArrayUtils } from '1dv610-labb2/array-helper-library/src/ArrayUtils.js'
import GenreTitle from '../genreTitle/genreTitle'
import MovieCard from '../movieCard/movieCard'
import { useState } from 'react'
import styles from '../../styles/movieCardsContainer.module.css'

const MovieSuggestionsContainer = () => {
  const [movieCards, setMovieCards] = useState([])

  const handleFetchedData = (data) => {
    const extractGenreId = (item) => {
      if (Array.isArray(item.genres.genres) && item.genres.genres.length > 0) {
        return item.genres.genres[0].id
      }

      return 'Unknown'
    }

    const arrayUtils = new ArrayUtils(data.results)  
    const groupedResults = arrayUtils.groupByCallbackFunction(extractGenreId)

    const newMovieCards = groupedResults.map((group) => {
      const genre = group[0].genres.genres[0].text

      const movieCardComponents = group.map((movie) => (
        <MovieCard
          key={movie.id}
          movieTitle={movie.originalTitleText.text}
          movieDescription={movie.plot.plotText.plainText}
          movieImage={movie.primaryImage.url}
        />
      ))

      return (
        <div key={genre}>
          <GenreTitle title={genre} />
          <div className={styles.flex}>
            {movieCardComponents}
          </div>
        </div>
      )
    })

    setMovieCards(newMovieCards)
  }

  return (
    <>
      <div>
        <div className={styles.buttonDiv}>
          <MovieFetcherButton dataFetched={handleFetchedData} />
        </div>
        <div>
          {movieCards}
        </div>
      </div>
    </>
  )
}

export default MovieSuggestionsContainer
