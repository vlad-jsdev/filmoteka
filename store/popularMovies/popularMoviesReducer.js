import {
  GET_POPULAR,
  SET_POPULAR,
  GET_POSTER_IMAGES,
  linkImg,
} from './popularMoviesConstants';

const initialState = {
  isLoading: false,
  data: [],
  posterImages: [],
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
          item => `${linkImg + item.poster_path}`,
        ),
      };
    default:
      return state;
  }
};
