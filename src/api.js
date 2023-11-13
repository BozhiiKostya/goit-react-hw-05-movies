import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'fa42f2bd3305fcbb3d1b19c000cd2898';

export const fetchTrending = async () => {
  const { data } = await axios.get(`/3/trending/all/day?api_key=${API_KEY}`);
  return data.results;
};

export const fetchDetails = async movie_id => {
  const { data } = await axios.get(`/3/movie/${movie_id}?api_key=${API_KEY}`);
  return data;
};

export const fetchCast = async movie_id => {
  const { data } = await axios.get(
    `/3/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

export const fetchReviews = async movie_id => {
  const { data } = await axios.get(
    `/3/movie/${movie_id}/reviews?page=1&api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchSearchMovies = async query => {
  const { data } = await axios.get(
    `/3/search/movie?query=${query}&include_adult=false&page=1&api_key=${API_KEY}`
  );
  return data.results;
};
