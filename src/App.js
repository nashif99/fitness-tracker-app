import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './services/auth.js';
import PrivateRoute from './utils/helpers.js';

import Login from './components/Login.js';
import Register from './components/Register.js';
import Dashboard from './components/Dashboard.js';
import FoodTracker from './components/FoodTracker.js';
import ExerciseTracker from './components/ExerciseTracker.js';
import Profile from './components/Profile.js';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <div>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/food-tracker" component={FoodTracker} />
              <PrivateRoute path="/exercise-tracker" component={ExerciseTracker} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;