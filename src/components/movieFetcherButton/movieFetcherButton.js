import React, { useState } from 'react'
import axios from 'axios'
import styles from '../../styles/movieFetcherButton.module.css'

const MovieFetcherButton = ({ dataFetched }) => {
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.get(
        'https://moviesdatabase.p.rapidapi.com/titles/random', {
          headers: {
            'X-RapidAPI-Key': 'a8ed24055fmsh2ed628d4577cf1bp1c0bfejsn083ecc17d6ac',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
          },
        })

      dataFetched(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <div className={styles.movieButtonContainer}>
      <button onClick={fetchData} disabled={isLoading} className={styles.movieButton}>
        {isLoading ? 'Getting suggestions...' : 'Press for movie suggestions'}
      </button>
    </div>
    </>
  )
}
