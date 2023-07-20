```javascript
import axios from 'axios';
import { parseFitnessData } from '../utils/helpers';

const BASE_URL = 'https://apple-health-api.com'; // Replace with actual Apple Health API base URL

export const getFitnessData = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/fitness/${userId}`);
    return parseFitnessData(response.data);
  } catch (error) {
    console.error('Error fetching fitness data:', error);
    throw error;
  }
};

export const updateFitnessData = async (userId, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/fitness/${userId}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating fitness data:', error);
    throw error;
  }
};
```