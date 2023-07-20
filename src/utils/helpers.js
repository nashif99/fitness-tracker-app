```javascript
export function calculateCalories(foodItems) {
  return foodItems.reduce((total, item) => total + item.calories, 0);
}

export function calculateMacros(foodItems) {
  return foodItems.reduce((total, item) => {
    total.protein += item.protein;
    total.carbs += item.carbs;
    total.fats += item.fats;
    return total;
  }, {protein: 0, carbs: 0, fats: 0});
}

export function calculateExerciseCalories(exercises) {
  return exercises.reduce((total, exercise) => total + exercise.caloriesBurned, 0);
}

export function formatFoodData(foodData) {
  return {
    name: foodData.product_name,
    calories: foodData.nutriments.energy_value,
    protein: foodData.nutriments.proteins,
    carbs: foodData.nutriments.carbohydrates,
    fats: foodData.nutriments.fat
  };
}

export function formatExerciseData(exerciseData) {
  return {
    name: exerciseData.name,
    duration: exerciseData.duration,
    caloriesBurned: exerciseData.calories
  };
}

export function formatErrorMessage(error) {
  return error.message;
}
```