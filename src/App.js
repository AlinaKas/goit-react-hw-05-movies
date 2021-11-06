import { Switch, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import './App.module.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PreLoader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);

const MoviesSearchPage = lazy(() =>
  import(
    './views/MoviesSearchPage' /* webpackChunkName: "movie-search-page" */
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const NotFoundPage = lazy(() =>
  import(
    './views/NotFoundPage/NotFoundPage' /* webpackChunkName: "not-found-page" */
  ),
);

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar />
        <Suspense fallback={<PreLoader />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesSearchPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
