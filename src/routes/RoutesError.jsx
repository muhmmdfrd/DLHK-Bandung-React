import React from 'react';
import NotFound from '../pages/404';
import { Route } from 'react-router-dom';

const RoutesError = () => {
  return <Route path='/404' exact={true} render={NotFound}></Route>;
};

export default RoutesError;
