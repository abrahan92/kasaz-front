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

export const setNextPageState = (next_page) => {
  return {
    type: t.SET_NEXT_PAGE_STATE,
    payload: next_page,
  };
};

export const setCurrentPageState = (current_page) => {
  return {
    type: t.SET_CURRENT_PAGE_STATE,
    payload: current_page,
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

export const getProperties = (page) => (dispatch) => {
  dispatch(setLoadingState(true));

  roomService
    .get_rooms(page)
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
      dispatch(setLoadingState(false));
    })
    .catch((err) => {
      dispatch(setFilterState(propertyInitialState.filters));
    });
};
