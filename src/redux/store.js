import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { baseReducer, propertyReducer } from './reducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  baseReducer,
  propertyReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk)),
);
