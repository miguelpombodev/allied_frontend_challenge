import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import FormPlatformPlans from '../pages/FormPlatformPlans';
import UserForm from '../pages/UserForm';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route
        path="/FormPlatformPlans/:planName"
        component={FormPlatformPlans}
      />
      <Route path="/UserForm" component={UserForm} />
    </Switch>
  );
};

export default Router;
//
