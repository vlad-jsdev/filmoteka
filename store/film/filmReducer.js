import {GET_FILM, SET_FILM} from './filmConstants';

const initialState = {
  isLoading: false,
  film: {},
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM:
      return {...state, isLoading: true};
    case SET_FILM:
      return {
        film: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
