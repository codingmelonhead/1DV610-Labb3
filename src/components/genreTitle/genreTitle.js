import styles from '../../styles/genreTitle.module.css'

const GenreTitle = ({ title }) => {
  return (
    <>
    <h1 className={styles.titleStyle}>{title}</h1>
    </>
  )
}

export default GenreTitle