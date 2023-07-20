```javascript
import axios from 'axios';

const BASE_URL = 'https://world.openfoodfacts.org/api/v0';

export const getFoodData = async (barcode) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${barcode}.json`);
    return response.data.product;
  } catch (error) {
    console.error(error);
  }
};

export const searchFood = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${query}`);
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};
```