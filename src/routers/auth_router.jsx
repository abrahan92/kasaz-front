import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from '../components/main/home_screen';

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomeScreen} />

      <Redirect to='/' />
    </Switch>
  );
};

export default AuthRouter;
