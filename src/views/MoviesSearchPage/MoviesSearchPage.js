import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { searchRequestMovie } from '../../services/moviesApi';

import Searchbar from '../../components/Searchbar';
import MovieGallery from '../../components/MovieGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesSearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const history = useHistory();
  const location = useLocation();
  // const { url } = useRouteMatch();

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const newSearch = new URLSearchParams(location.search).get('query');
    setQuery(newSearch);
  }, [location.search]);

  useEffect(() => {
    query && getMovies();
  }, [query]);

  const getMovies = () => {
    searchRequestMovie(query)
      .then(results => {
        if (results.length === 0) {
          toast.error(`No movies for your request ${query}`);
          return;
        }
        setMovies(results);
      })
      .catch(error => error);
  };

  const getSearchValue = useCallback(
    query => {
      setQuery(query);
      // setMovies([]);
      history.push({ ...location, search: `query=${query}` });
    },
    [history, location],
  );

  return (
    <>
      <Searchbar onSubmitForm={getSearchValue} />
      {movies && <MovieGallery movies={movies} />}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default MoviesSearchPage;
