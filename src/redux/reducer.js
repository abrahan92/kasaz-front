import { baseInitialState, propertyInitialState } from './states';
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

export const propertyReducer = (state = propertyInitialState, action) => {
  switch (action.type) {
    case t.SET_PROPERTIES_STATE:
      return {
        ...state,
        properties: action.payload,
      };
    case t.SET_PROPERTIES_FILTERED_STATE:
      return {
        ...state,
        properties_filtered: action.payload,
      };
    case t.SET_FILTER_STATE:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};
