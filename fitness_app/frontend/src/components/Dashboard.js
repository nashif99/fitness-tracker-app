```javascript
import React, { useEffect, useState } from 'react';
import FoodDatabase from './FoodDatabase';
import ExerciseTracker from './ExerciseTracker';
import CalorieCalculator from './CalorieCalculator';
import HealthData from './HealthData';
import Profile from './Profile';
import { useAuth } from '../context/auth';

function Dashboard() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('/api/user/' + user.id)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [user]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <Profile user={userData} />
      <FoodDatabase user={userData} />
      <ExerciseTracker user={userData} />
      <CalorieCalculator user={userData} />
      <HealthData user={userData} />
    </div>
  );
}

export default Dashboard;
```