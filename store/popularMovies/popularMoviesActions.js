import {GET_POPULAR, SET_POPULAR, url} from './popularMoviesConstants';
import axios from 'axios';

export const getPopularAC = () => ({
  type: GET_POPULAR,
});
export const setPopularAC = data => ({
  type: SET_POPULAR,
  payload: data,
});

export const getPopularAsync = () => {
  return dispatch => {
    dispatch(getPopularAC());
    return axios
      .get(url)
      .then(data => dispatch(setPopularAC(data.data.results)));
  };
};
