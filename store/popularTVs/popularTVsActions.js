import {GET_POPULAR_TV, SET_POPULAR_TV, url} from './popularTVsConstants';
import axios from 'axios';

export const getPopularAC = () => ({
  type: GET_POPULAR_TV,
});
export const setPopularAC = data => ({
  type: SET_POPULAR_TV,
  payload: data,
});

export const getPopularTVsAsync = () => {
  return dispatch => {
    dispatch(getPopularAC());
    return axios
      .get(url)
      .then(data => dispatch(setPopularAC(data.data.results)));
  };
};
