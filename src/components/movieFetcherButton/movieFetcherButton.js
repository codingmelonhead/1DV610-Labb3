import React, { useState } from 'react'
import axios from 'axios'
import styles from '../../styles/movieFetcherButton.module.css'

const MovieFetcherButton = ({ dataFetched }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferenceOption, setPreferenceOption] = useState('top_boxoffice_200')

  const preferenceOptions = [
    { value: 'top_boxoffice_200', label: 'top 200 boxoffice ranked movies' },
    { value: 'top_rated_english_250', label: 'top 250 top ranked english movies' },
    { value: 'top_rated_lowest_100', label: '100 lowest ranked movies' },
  ]

  const fetchData = async () => {
    setIsLoading(true)
    const apiKey = process.env.RAPID_KEY

    try {
      const response = await axios.get(
        'https://moviesdatabase.p.rapidapi.com/titles/random', {
          headers: {
            'X-RapidAPI-Key': 'a8ed24055fmsh2ed628d4577cf1bp1c0bfejsn083ecc17d6ac',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
          },
          params: {
            list: preferenceOption,
            info: 'base_info',
            titleType: 'movie'
          },
        })

      dataFetched(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log('Something went wrong when fetching movies')
      console.error(error)
    }
  }

  return (
    <>
    <div className={styles.movieButtonContainer}>
      <button onClick={fetchData} disabled={isLoading} className={styles.movieButton}>
        {isLoading ? 'Getting suggestions...' : 'Press for movie suggestions'}
      </button>
      <div className={styles.preferences} onClick={() => setShowPreferences(!showPreferences)}>
        Preferences -&gt;
      </div>
      {showPreferences && (
        <div className={styles.preferenceList}>
          <div className={styles.optionTitle}>Select preference:</div>
          {preferenceOptions.map(option => (
            <div key={option.value} onClick={() => {
              setPreferenceOption(option.value)
              setShowPreferences(false)
            }}>
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default MovieFetcherButton
