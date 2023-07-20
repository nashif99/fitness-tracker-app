import React, { Component } from 'react';
import { auth } from '../services/auth';
import { getFitnessData } from '../services/fitnessAPI';
import { getFoodData } from '../services/foodAPI';
import '../styles/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      fitnessData: null,
      foodData: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        getFitnessData(user.uid).then(fitnessData => this.setState({ fitnessData }));
        getFoodData(user.uid).then(foodData => this.setState({ foodData }));
      } else {
        this.setState({ user: null, fitnessData: null, foodData: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { user, fitnessData, foodData } = this.state;
    if (!user) return <div>Please log in to view your dashboard.</div>;

    return (
      <div className="dashboard">
        <h1>Welcome, {user.displayName}</h1>
        <div className="fitness-data">
          <h2>Your Fitness Data</h2>
          {/* Render fitness data here */}
        </div>
        <div className="food-data">
          <h2>Your Food Data</h2>
          {/* Render food data here */}
        </div>
      </div>
    );
  }
}

export default Dashboard;