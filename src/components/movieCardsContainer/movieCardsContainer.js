import MovieFetcherButton from "../movieFetcherButton/movieFetcherButton"
import { ArrayOrganizer } from '1dv610-labb2/array-helper-library/src/ArrayOrganizer.js'
import GenreTitle from '../genreTitle/genreTitle'
import MovieCard from '../movieCard/movieCard'

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
      
    const groupedResults = arrayOrganizer.groupByCallbackFunction(data.results, extractGenreId)

    // for (let i = 0; i < groupedResults.length; i++) {
    //   <GenreTitle title={groupedResults[i][0].genres.genres[0].text}/>

    //   for (let j = 0; j < groupedResults[i].length; j++) {
    //     <MovieCard movieTitle={groupedResults[i][j].originalTitleText.text} movieDescription={groupedResults[i][j].plot.plotText.plainText} movieImage={groupedResults[i][j].primaryImage.caption.url}/>
    //   }
    // }
    console.log(groupedResults)

    console.log(data.results)
  }

  return (
    <>
    <div>
      <MovieFetcherButton dataFetched={handleFetchedData}/>
      <MovieCard />
    </div>
    </>
  )
}

export default MovieSuggestionsContainer