import * as t from './actionTypes';
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

export const getProperties = () => (dispatch) => {
  dispatch(setLoadingState(true));

  roomService
    .get_rooms()
    .then((res) => {
      dispatch(setLoadingState(false));
      dispatch(setPropertiesState(res.data));
    })
    .catch((err) => {
      dispatch(setPropertiesState([]));
    });
};
