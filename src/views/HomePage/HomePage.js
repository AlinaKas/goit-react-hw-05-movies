import { useState, useEffect } from 'react';
import MovieGallery from '../../components/MovieGallery';
import { popularMovieSearch } from '../../services/moviesApi';
import PageHeading from '../../components/PageHeading';

const HomePage = () => {
  const [popularMovies, setMovies] = useState([]);
  useEffect(() => {
    popularMovieSearch().then(data => {
      setMovies(data);
      // console.log({ results });
    });
  }, []);

  return (
    <>
      <PageHeading text="Popular Movies" />
      {popularMovies && <MovieGallery movies={popularMovies} />}
    </>
  );
};

export default HomePage;
