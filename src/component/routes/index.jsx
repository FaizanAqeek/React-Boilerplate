import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './wrapper';
import SignIn from '../modules/signin';
import Dashboard from '../modules/dashboard';
import Appbar from '../layout/appbarcontroller';
import ThemeContextProvider from '../common/themcontext';
import { Container } from '@material-ui/core';

const Routes = () => {
  return (
    <>
      <ThemeContextProvider>
        <Appbar />
        <Container maxWidth='lg'>
          <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/dashboard' component={Dashboard} isPrivate />
            <Route component={SignIn} />
          </Switch>
        </Container>
      </ThemeContextProvider>
    </>
  );
};

export default Routes;
