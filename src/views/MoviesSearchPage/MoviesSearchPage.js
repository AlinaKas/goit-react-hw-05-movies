import React, { useState, useEffect } from 'react';
import s from './MoviesSearchPage.module.css';
import { requestMovieSearch } from '../../services/moviesApi';
import PreLoader from '../../components/Loader/Loader';
import defaultImage from '../../images/default-error.png';
import Searchbar from '../../components/Searchbar';
import MovieGallery from '../../components/MovieGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesSearchPage = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === '') {
      return;
    }

    requestMovieSearch(query)
      .then(results => {
        if (results.length === 0) {
          return setError(`No movies for your request ${query}`);
        }
        setMovies([...movies, ...results]);
        setPage(page);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const getSearchValue = query => {
    setQuery(query);
    setMovies([]);
    setPage(1);
    setError(null);
    setIsLoading(true);
  };

  return (
    <>
      <Searchbar onSubmitForm={getSearchValue} />
      {isLoading && <PreLoader />}
      {movies.length > 0 && !error && <MovieGallery movies={movies} />}
      {error && <p className={s.error}>{error}</p>}
      {error && (
        <div>
          <img src={defaultImage} alt="error" className={s.defaultImage} />
        </div>
      )}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default MoviesSearchPage;
