```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodDatabase = () => {
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        fetchFoodData();
    }, []);

    const fetchFoodData = async () => {
        try {
            const response = await axios.get('/api/food');
            setFoodData(response.data);
        } catch (error) {
            console.error('Error fetching food data:', error);
        }
    };

    return (
        <div className="food-database">
            <h2 className="text-2xl font-bold mb-4">Food Database</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Food Name</th>
                        <th className="px-4 py-2">Calories</th>
                        <th className="px-4 py-2">Protein</th>
                        <th className="px-4 py-2">Carbs</th>
                        <th className="px-4 py-2">Fat</th>
                    </tr>
                </thead>
                <tbody>
                    {foodData.map((food, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                            <td className="border px-4 py-2">{food.name}</td>
                            <td className="border px-4 py-2">{food.calories}</td>
                            <td className="border px-4 py-2">{food.protein}</td>
                            <td className="border px-4 py-2">{food.carbs}</td>
                            <td className="border px-4 py-2">{food.fat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FoodDatabase;
```