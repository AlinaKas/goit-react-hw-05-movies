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
import { movieDetailsGet } from '../../services/moviesApi';
import PreLoader from '../../components/Loader/Loader';
import poster_default from '../../images/default_movie.png';

// import Reviews from '../../components/Reviews';
// import Cast from '../../components/Cast';

const Reviews = lazy(() => import('../../components/Reviews'));
const Cast = lazy(() => import('../../components/Cast'));

const MovieDetailsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const { url, path } = useRouteMatch();

  const { title, genres, vote_average, overview, poster_path } = movie;
  let poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : poster_default;

  useEffect(() => {
    movieDetailsGet(movieId)
      .then(setMovie)
      .catch(error => error);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? '/movies');
  };

  return (
    <div>
      <button type="submit" onClick={onGoBack} className={s.btn}>
        BACK
      </button>
      {movie && (
        <div className={s.contentWrap}>
          <img src={poster} alt={title} width="300" className={s.image} />
          <div className={s.infoWrap}>
            <h2 className={s.movieTitle}>{title}</h2>
            <p className={s.info}>
              User score:
              <span className={s.rating}>{vote_average}/10</span>
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
                    return <span key={genre.id}>{genre.name}/</span>;
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
                  state: {
                    state: {
                      from: {
                        location: location?.state?.from?.location ?? '/',
                        label: location?.state?.from?.label ?? 'Back to Home',
                      },
                    },
                  },
                }}
              >
                Cast
              </NavLink>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={{
                  pathname: `${url}/reviews`,
                  state: {
                    backUrl: `${location.state?.searchValue ? `/movies` : `/`}`,
                    searchValue: location.state?.searchValue ?? '',
                  },
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
