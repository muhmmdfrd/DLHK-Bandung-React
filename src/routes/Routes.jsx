import React from 'react';
import Dashboard from '../pages/Dashboard';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from '../pages/404';

const Routes = () => {
  const listOfRoute = [
    { path: '/dashboard', render: Dashboard },
    { path: '*', render: NotFound },
  ];

  return (
    <Switch>
      {listOfRoute.map((value, index) => {
        const { path, render } = value;
        return <Route key={index} path={path} component={render}></Route>;
      })}
      <Route
        path='/'
        render={() => {
          return <Redirect to='/dashboard' />;
        }}
      />
    </Switch>
  );
};

export default Routes;
