import {GET_GENRES, SET_GENRES} from './genresConstants';

const initialState = {
  isLoading: false,
  genres: [],
};

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return {...state, isLoading: true};
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
