import React, { useState, useEffect } from 'react';
import { getExerciseData } from '../services/fitnessAPI';
import '../styles/ExerciseTracker.css';

const ExerciseTracker = () => {
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const data = await getExerciseData();
      setExerciseData(data);
    };

    fetchExerciseData();
  }, []);

  return (
    <div className="exercise-tracker">
      <h2>Exercise Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Duration</th>
            <th>Calories Burned</th>
          </tr>
        </thead>
        <tbody>
          {exerciseData.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.name}</td>
              <td>{exercise.duration}</td>
              <td>{exercise.caloriesBurned}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseTracker;