const basicUrl = 'https://api.themoviedb.org/3';
const apiKey = '?api_key=06eca14f7dd67322a2d240ae5f7c358f';
const popularMovies = '/movie/popular';
const pageNum = '&page=1';

const popularTVs = '/tv/popular';
const genres = '/genre/movie/list';
const langEng = '&language=en-US';

export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

export const FETCH_POPULAR_MOVIES =
  basicUrl + popularMovies + apiKey + langEng + pageNum;

export const FETCH_POPULAR_TVS =
  basicUrl + popularTVs + apiKey + langEng + pageNum;

export const FETCH_GENRES = basicUrl + genres + apiKey + langEng;

