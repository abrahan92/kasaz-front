import React, { useEffect } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import AuthRouter from './auth_router';
import PublicRoute from './routes/public_route';

const AppRouter = () => {
  useEffect(() => {}, []);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/' component={AuthRouter} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
