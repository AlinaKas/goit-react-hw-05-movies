import { Switch, Route } from 'react-router';
import './App.module.css';
// import Navigation from './components/Navigation';
import Container from './components/Container';
import AppBar from './components/AppBar';
// import MoviesPage from './components/views/MoviesPage';
import HomePage from './views/HomePage';
import MoviesSearchPage from './views/MoviesSearchPage';
import NoFoundView from './views/NoFoundView';

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesSearchPage />
          </Route>
          {/* <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route> */}
          {/* <Route>
            <NoFoundView />
          </Route> */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
