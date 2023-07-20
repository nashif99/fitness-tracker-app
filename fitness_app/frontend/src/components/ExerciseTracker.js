import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { ExerciseCard } from './ExerciseCard';
import 'tailwindcss/tailwind.css';

function ExerciseTracker() {
  const [exercises, setExercises] = useState([]);
  const { authTokens } = useAuth();

  useEffect(() => {
    axios.get('/api/exercises', {
      headers: {
        'Authorization': `Bearer ${authTokens}`
      }
    }).then(result => {
      setExercises(result.data);
    }).catch(error => {
      console.error('Error fetching exercise data:', error);
    });
  }, [authTokens]);

  return (
    <div id="exerciseTracker" className="flex flex-wrap justify-center">
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
    </div>
  );
}

export default ExerciseTracker;