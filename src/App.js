import { Switch, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import './App.module.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PreLoader from './components/Loader/Loader';

// import HomePage from './views/HomePage';
// import MoviesSearchPage from './views/MoviesSearchPage';
// import MovieDetailsPage from './views/MovieDetailsPage';

const HomePage = lazy(() => import('./views/HomePage'));

const MoviesSearchPage = lazy(() => import('./views/MoviesSearchPage'));

const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

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
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
