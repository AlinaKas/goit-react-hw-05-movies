import axios from 'axios';

const API_KEY = '1d492e008148c42709362e98500fe1a3';
const BASE_URL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

export function popularMovieGet(time = 'week', page = 1) {
  return axios
    .get(`${BASE_URL}trending/movie/${time}?api_key=${API_KEY}&page=${page}`)
    .then(response => response.data.results)
    .catch(error => error);
}

export function requestMovieSearch(query, page = 1) {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}&include_adult=false`,
    )
    .then(response => response.data.results)
    .catch(error => error);
}

export function movieDetailsGet(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data)
    .catch(error => error);
}

export function movieReviewsGet(movieId) {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    .then(response => response.data.results)
    .catch(error => error);
}

export function movieCastGet(movieId) {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    .then(response => response.data.cast)
    .catch(error => error);
}
