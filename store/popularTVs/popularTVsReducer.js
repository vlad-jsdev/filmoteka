import {GET_POPULAR_TV, SET_POPULAR_TV} from './popularTVsConstants';
import {URL_IMAGE} from '../../constants/constants';

const initialState = {
  isLoading: false,
  data: [],
  posterImages: [],
};

export const popularTVsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_TV:
      return {...state, isLoading: true};
    case SET_POPULAR_TV:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        posterImages: action.payload.map(
          item => `${URL_IMAGE + item.poster_path}`,
        ),
      };
    default:
      return state;
  }
};
