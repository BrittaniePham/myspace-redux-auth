import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import FetchPosts from './FetchPosts';
import styled from 'styled-components';
import Users from './Users'

const AppContainer = styled.div`
 background: linear-gradient(to bottom right, #fff0f8, #d7ecff);
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute path="/posts" component={FetchPosts} />
            <Route path="/users" component={Users} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </AppContainer>
    );
  }
}

export default App;
