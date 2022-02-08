import {combineReducers} from 'redux';
import {popularMoviesReducer} from './popularMovies/popularMoviesReducer';
import {popularTVsReducer} from './popularTVs/popularTVsReducer';

export const rootReducer = combineReducers({
  popularMoviesReducer: popularMoviesReducer,
  popularTVsReducer: popularTVsReducer,
});
