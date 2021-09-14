import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddSession from '../containers/AddSession';
import SignUser from '../containers/SignUser';
import UserDetail from '../containers/UserDetail';
import SessionDetail from '../containers/SessionDetail';
import NavFooter from './NavFooter';
import TopBar from '../containers/TopBar';
import Progress from '../containers/Progress';

const Routes = () => (
  <>
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/" render={() => <SignUser buttonText="Log In" />} />
        <Route exact path="/signup" render={() => <SignUser buttonText="Sign Up" />} />
        <Route exact path="/checkSessions" component={UserDetail} />
        <Route exact path="/session" component={AddSession} />
        <Route exact path="/sessionDetail/:id" component={SessionDetail} />
        <Route exact path="/progress" component={Progress} />
      </Switch>
      <NavFooter />
    </BrowserRouter>
  </>
);

export default Routes;
