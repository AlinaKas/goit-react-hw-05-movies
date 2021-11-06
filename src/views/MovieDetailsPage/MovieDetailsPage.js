import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieDetailsPage.module.css';
import { getMovieDetails } from '../../services/moviesApi';
import PreLoader from '../../components/Loader/Loader';
import poster_default from '../../images/default_movie.png';

// import Reviews from '../../components/Reviews';
// import Cast from '../../components/Cast';

const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "reviews" */),
);
const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "cast" */),
);

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const { url, path } = useRouteMatch();
  const { title, genres, vote_average, overview, poster_path } = movie;
  let poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : poster_default;

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => error);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <div>
      <button type="submit" onClick={onGoBack} className={s.btn}>
        &#5130; BACK
      </button>
      {movie && (
        <div className={s.contentWrap}>
          <img src={poster} alt={title} width="300" className={s.image} />
          <div className={s.infoWrap}>
            <h2 className={s.movieTitle}>{title}</h2>
            <p className={s.info}>
              User score:
              <span className={s.rating}>{vote_average}</span>
            </p>
            <p className={s.info}>
              Overview:
              <span className={s.description}>{overview}</span>
            </p>
            <p className={s.info}>
              Genres:
              <span className={s.description}>
                {genres &&
                  genres.map(genre => {
                    return (
                      <span key={genre.id} className={s.genre}>
                        {genre.name}
                      </span>
                    );
                  })}
              </span>
            </p>
            <h3 className={s.title}>Additional Information</h3>
            <div className={s.linkWrap}>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from ?? '/' },
                }}
              >
                Cast
              </NavLink>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from ?? '/' },
                }}
              >
                Reviews
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <Suspense fallback={<PreLoader />}>
        <Switch>
          <Route path={`${path}/cast`}>{movie && <Cast />}</Route>
          <Route path={`${path}/reviews`}>{movie && <Reviews />}</Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
