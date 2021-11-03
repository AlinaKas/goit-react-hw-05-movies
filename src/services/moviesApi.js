import axios from 'axios';

const API_KEY = '1d492e008148c42709362e98500fe1a3';
const BASE_URL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

export function popularMovieSearch(time = 'week', page = 1) {
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
