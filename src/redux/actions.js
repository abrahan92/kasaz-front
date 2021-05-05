import * as t from './actionTypes';

export const setLoadingState = (loadingState) => {
  return {
    type: t.SET_LOADING_STATE,
    payload: loadingState,
  };
};
