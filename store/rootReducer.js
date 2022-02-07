import {combineReducers} from 'redux';
import {popularReducer} from './popular/popularReducer';

export const rootReducer = combineReducers({
  popularReducer,
});
