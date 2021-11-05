import { useState, useEffect } from 'react';
import MovieGallery from '../../components/MovieGallery';
import { popularMovieGet } from '../../services/moviesApi';
import PageHeading from '../../components/PageHeading';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    popularMovieGet()
      .then(setMovies)
      .catch(error => error);
  }, []);

  return (
    <>
      <PageHeading text="Popular Movies" />
      {movies && <MovieGallery movies={movies} />}
    </>
  );
};

export default HomePage;
