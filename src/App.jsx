import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRouter from './routers/app_router';
import './styles/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
