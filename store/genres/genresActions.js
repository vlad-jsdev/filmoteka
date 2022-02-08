import {GET_GENRES, SET_GENRES} from './genresConstants';
import axios from 'axios';
import {FETCH_GENRES} from '../../constants/constants';

export const getGenresAC = () => ({
  type: GET_GENRES,
});
export const setGenresAC = data => ({
  type: SET_GENRES,
  payload: data,
});

export const getGenresAsync = () => {
  return dispatch => {
    dispatch(getGenresAC());
    return axios
      .get(FETCH_GENRES)
      .then(data => dispatch(setGenresAC(data.data.genres)));
  };
};
