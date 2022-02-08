import {combineReducers} from 'redux';
import {popularMoviesReducer} from './popularMovies/popularMoviesReducer';
import {popularTVsReducer} from './popularTVs/popularTVsReducer';
import {genresReducer} from './genres/genresReducer';

export const rootReducer = combineReducers({
  popularMoviesReducer: popularMoviesReducer,
  popularTVsReducer: popularTVsReducer,
  genresReducer: genresReducer,
});
