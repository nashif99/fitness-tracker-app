import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthData = () => {
    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
        fetchHealthData();
    }, []);

    const fetchHealthData = async () => {
        try {
            const response = await axios.get('/api/healthdata');
            setHealthData(response.data);
        } catch (error) {
            console.error('Error fetching health data:', error);
        }
    };

    return (
        <div className="health-data-container">
            <h2 className="text-xl font-bold mb-4">Your Health Data</h2>
            {healthData.length > 0 ? (
                <div className="health-data">
                    {healthData.map((data, index) => (
                        <div key={index} className="health-data-item">
                            <p><strong>Date:</strong> {new Date(data.date).toLocaleDateString()}</p>
                            <p><strong>Steps:</strong> {data.steps}</p>
                            <p><strong>Calories Burned:</strong> {data.caloriesBurned}</p>
                            <p><strong>Heart Rate:</strong> {data.heartRate}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No health data available. Please sync your Apple Health data.</p>
            )}
        </div>
    );
};

export default HealthData;