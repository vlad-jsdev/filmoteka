import {GET_POPULAR_TV, SET_POPULAR_TV} from './popularTVsConstants';
import axios from 'axios';
import {FETCH_POPULAR_TVS} from '../../constants/constants';

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
      .get(FETCH_POPULAR_TVS)
      .then(data => dispatch(setPopularAC(data.data.results)))
      .catch(error =>
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        ),
      );
  };
};
