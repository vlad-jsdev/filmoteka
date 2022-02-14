import {GET_POPULAR, SET_POPULAR} from './popularMoviesConstants';
import {URL_IMAGE} from '../../constants/constants';

const initialState = {
  isLoading: false,
  data: [],
  posterImages: [],
  posterImagesId: [],
};

export const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR:
      return {...state, isLoading: true};
    case SET_POPULAR:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        posterImages: action.payload.map(
          item => `${URL_IMAGE + item.poster_path}`,
        ),
        posterImagesId: action.payload.map(item => `${URL_IMAGE + item.id}`),
      };
    default:
      return state;
  }
};
