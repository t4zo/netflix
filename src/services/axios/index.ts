import axios from "axios";

export const baseURL = 'https://api.themoviedb.org/3'
export const baseImageURL = 'https://image.tmdb.org/t/p/w500'

export const axiosTmdb = axios.create({
  baseURL
});

export const axiosImagesTmdb = axios.create({
  baseURL: 'https://image.tmdb.org/t/p/3'
});