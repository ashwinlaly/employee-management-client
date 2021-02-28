import React, {lazy, Suspense} from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import Sidebar from '../app/Containers/Sidebar';
import {history} from './history';

const Login = lazy(() => import("../app/Containers/Login"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Router history={history}>
          <Switch>
            <Route path="/home" component={Sidebar} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
    </Suspense>
  )
}

export default Routes;