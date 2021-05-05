import { baseInitialState } from './states';
import * as t from './actionTypes';

export const baseReducer = (state = baseInitialState, action) => {
  switch (action.type) {
    case t.SET_LOADING_STATE:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
