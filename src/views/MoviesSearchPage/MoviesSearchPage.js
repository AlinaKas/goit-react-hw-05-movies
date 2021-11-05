import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { requestMovieSearch } from '../../services/moviesApi';

import Searchbar from '../../components/Searchbar';
import MovieGallery from '../../components/MovieGallery';
import s from './MoviesSearchPage.module.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import default_avatar from '../../images/default_avatar.png';

const MoviesSearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const { url } = useRouteMatch();

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
    requestMovieSearch(query).then(results => {
      if (results.length === 0) {
        toast.error(`No movies for your request ${query}`);
        return;
      }
      setMovies(results);
    });
  };

  const getSearchValue = useCallback(
    query => {
      setQuery(query);
      setMovies([]);
      history.push({ ...location, search: `query=${query}` });
    },
    [history, location],
  );

  return (
    <>
      <Searchbar onSubmitForm={getSearchValue} />
      {movies && <MovieGallery movies={movies} />}
      {/* {error && <p className={s.error}>{error}</p>} */}
      {/* {error && (
        <div>
          <img src={defaultImage} alt="error" className={s.defaultImage} />
        </div>
      )} */}
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default MoviesSearchPage;
