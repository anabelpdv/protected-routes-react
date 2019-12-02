import React from 'react';
import LandingPage from './LandingPage';
import AppLayout from './AppLayout'
import {Route, Switch} from 'react-router-dom';
import ProtectedRouter from './ProtectedRoute'


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Protected Route</h1>
      <Switch>
      <Route  exact path="/" component={LandingPage} />
      <ProtectedRouter  exact path="/app" component={AppLayout} />
      </Switch>
    </div>
  );
}

export default App;
