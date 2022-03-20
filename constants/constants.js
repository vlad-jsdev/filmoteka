export const basicUrl = 'https://api.themoviedb.org/3';
export const apiKey = '?api_key=06eca14f7dd67322a2d240ae5f7c358f';
export const popularMovies = '/movie/popular';
export const movie = '/movie/';
export const tv = '/tv/';

export const pageNum = '&page=1';
export const movies = 'movies';
export const tvs = 'tvs';

export const popularTVs = '/tv/popular';
export const search = '/search/multi';
export const genres = '/genre/movie/list';
export const langEng = '&language=en-US';

export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500';

export const FETCH_POPULAR_MOVIES =
  basicUrl + popularMovies + apiKey + langEng + pageNum;

export const FETCH_POPULAR_TVS =
  basicUrl + popularTVs + apiKey + langEng + pageNum;

export const FETCH_SEARCH = basicUrl + search + apiKey + langEng;

export const FETCH_GENRES = basicUrl + genres + apiKey + langEng;

export const FETCH_MOVIE = basicUrl + movie;

export const FETCH_TV = basicUrl + tv;
