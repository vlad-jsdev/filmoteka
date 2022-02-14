import {GET_FILM, SET_FILM} from './filmConstants';
import axios from 'axios';
import {apiKey, FETCH_MOVIE, langEng} from '../../constants/constants';

export const getFilmAC = () => ({
  type: GET_FILM,
});
export const setFilmAC = data => ({
  type: SET_FILM,
  payload: data,
});

export const getGenresAsync = id => {
  return dispatch => {
    dispatch(getFilmAC());
    return axios
      .get(FETCH_MOVIE + id + apiKey + langEng)
      .then(data => dispatch(setFilmAC(data.data)));
  };
};
