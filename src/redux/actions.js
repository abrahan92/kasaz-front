import * as t from './actionTypes';
import { propertyInitialState } from './states';
import { roomService } from '../services/room_service';

export const setLoadingState = (loadingState) => {
  return {
    type: t.SET_LOADING_STATE,
    payload: loadingState,
  };
};

export const setPropertiesState = (properties) => {
  return {
    type: t.SET_PROPERTIES_STATE,
    payload: properties,
  };
};

export const setPropertiesFilteredState = (properties_filtered) => {
  return {
    type: t.SET_PROPERTIES_FILTERED_STATE,
    payload: properties_filtered,
  };
};

export const setFilterState = (filters) => {
  return {
    type: t.SET_FILTER_STATE,
    payload: filters,
  };
};

export const getProperties = () => (dispatch) => {
  dispatch(setLoadingState(true));

  roomService
    .get_rooms()
    .then((res) => {
      dispatch(getFilters());
      dispatch(setLoadingState(false));
      dispatch(setPropertiesState(res.data));
      dispatch(setPropertiesFilteredState(res.data));
    })
    .catch((err) => {
      dispatch(setPropertiesState([]));
      dispatch(setPropertiesFilteredState([]));
    });
};

export const getFilters = () => (dispatch) => {
  dispatch(setLoadingState(true));

  roomService
    .get_filters()
    .then((res) => {
      dispatch(setFilterState(res.data));
    })
    .catch((err) => {
      dispatch(setFilterState(propertyInitialState.filters));
    });
};
