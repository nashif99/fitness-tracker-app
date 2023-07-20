import React, { useState, useEffect } from 'react';
import { getFoodData } from '../services/foodAPI';
import '../styles/FoodTracker.css';

const FoodTracker = () => {
  const [foodData, setFoodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchFoodData();
  }, []);

  const fetchFoodData = async () => {
    const data = await getFoodData(searchTerm);
    setFoodData(data);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchFoodData();
  };

  return (
    <div className="food-tracker">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="food-data">
        {foodData.map((food, index) => (
          <div key={index} className="food-item">
            <h3>{food.name}</h3>
            <p>Calories: {food.calories}</p>
            <p>Protein: {food.protein}g</p>
            <p>Carbs: {food.carbs}g</p>
            <p>Fat: {food.fat}g</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTracker;