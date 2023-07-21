import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CalorieCalculator = () => {
    const [sex, setSex] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [weightLossGoal, setWeightLossGoal] = useState('');
    const [calories, setCalories] = useState('');

    useEffect(() => {
        if (sex && height && weight && age && activityLevel && weightLossGoal) {
            axios.post('/api/calorie_calculator', {
                sex,
                height,
                weight,
                age,
                activityLevel,
                weightLossGoal
            })
            .then(response => {
                setCalories(response.data.calories);
            })
            .catch(error => {
                console.error('Error calculating calories', error);
            });
        }
    }, [sex, height, weight, age, activityLevel, weightLossGoal]);

    return (
        <div className="calorieCalculator">
            <h2>Calorie Calculator</h2>
            <form>
                <label>
                    Sex:
                    <input type="text" value={sex} onChange={e => setSex(e.target.value)} />
                </label>
                <label>
                    Height (in cm):
                    <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
                </label>
                <label>
                    Weight (in kg):
                    <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
                </label>
                <label>
                    Age:
                    <input type="number" value={age} onChange={e => setAge(e.target.value)} />
                </label>
                <label>
                    Activity Level:
                    <select value={activityLevel} onChange={e => setActivityLevel(e.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="sedentary">Sedentary</option>
                        <option value="light">Light</option>
                        <option value="moderate">Moderate</option>
                        <option value="active">Active</option>
                        <option value="veryActive">Very Active</option>
                    </select>
                </label>
                <label>
                    Weight Loss Goal (in kg):
                    <input type="number" value={weightLossGoal} onChange={e => setWeightLossGoal(e.target.value)} />
                </label>
            </form>
            <div>
                <h3>Your daily calorie intake should be: {calories}</h3>
            </div>
        </div>
    );
};

export default CalorieCalculator;