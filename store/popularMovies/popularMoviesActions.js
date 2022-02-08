import {GET_POPULAR, SET_POPULAR} from './popularMoviesConstants';
import axios from 'axios';
import {FETCH_POPULAR_MOVIES} from '../../constants/constants';

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
      .get(FETCH_POPULAR_MOVIES)
      .then(data => dispatch(setPopularAC(data.data.results)))
      .catch(error =>
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        ),
      );
  };
};
