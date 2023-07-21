```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FoodDatabase from './components/FoodDatabase';
import ExerciseTracker from './components/ExerciseTracker';
import CalorieCalculator from './components/CalorieCalculator';
import Profile from './components/Profile';
import HealthData from './components/HealthData';
import './styles/tailwind.config.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/food-database" component={FoodDatabase} />
        <Route path="/exercise-tracker" component={ExerciseTracker} />
        <Route path="/calorie-calculator" component={CalorieCalculator} />
        <Route path="/profile" component={Profile} />
        <Route path="/health-data" component={HealthData} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
```