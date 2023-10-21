import MovieFetcherButton from "../movieFetcherButton/movieFetcherButton"
import { ArrayOrganizer } from '1dv610-labb2/array-helper-library/src/ArrayOrganizer.js'

const MovieSuggestionsContainer = () => {
  const moviesArray = []
  const arrayOrganizer = new ArrayOrganizer()

  const handleFetchedData = (data) => {
    const extractGenreId = (item) => {
      console.log(item)
      if (Array.isArray(item.genres.genres) && item.genres.genres.length > 0) {
        return item.genres.genres[0].id
      }

      return 'Unknown'
    }
    try {
      const groupedResults = arrayOrganizer.groupByCallbackFunction(data.results, extractGenreId)
      console.log(groupedResults)
    } catch (error) {
      console.log(error)
      console.log('Entered error')
    }

    console.log(data.results)
  }

  return (
    <>
    <div>
      <MovieFetcherButton dataFetched={handleFetchedData}/>
    </div>
    </>
  )
}

export default MovieSuggestionsContainer