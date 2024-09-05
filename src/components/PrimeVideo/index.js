import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = ({ moviesList = [] }) => {
  const actionMoviesList = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMoviesList = moviesList.filter(movie => movie.categoryId === 'COMEDY')
  const horrorMoviesList = moviesList.filter(movie => movie.categoryId === 'HORROR')

  return (
    <div className="prime-video-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="Prime Video logo"
      />
      <div className="movies-container">
        {actionMoviesList.length > 0 && (
          <>
            <h1 className="movies-heading">Action Movies</h1>
            <MoviesSlider moviesList={actionMoviesList} />
          </>
        )}
        {comedyMoviesList.length > 0 && (
          <>
            <h1 className="movies-heading">Comedy Movies</h1>
            <MoviesSlider moviesList={comedyMoviesList} />
          </>
        )}
        {horrorMoviesList.length > 0 && (
          <>
            <h1 className="movies-heading">Horror Movies</h1>
            <MoviesSlider moviesList={horrorMoviesList} />
          </>
        )}
      </div>
    </div>
  )
}

export default PrimeVideo
