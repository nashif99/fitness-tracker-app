```python
import unittest
from fitness_app.backend.utils import calculate_calories

class TestUtils(unittest.TestCase):

    def setUp(self):
        self.user_data = {
            'sex': 'male',
            'height': 180,
            'weight': 75,
            'age': 30,
            'weight_loss_goal': 0.5
        }

    def test_calculate_calories(self):
        calories = calculate_calories(self.user_data)
        self.assertIsInstance(calories, int)
        self.assertGreater(calories, 0)

    def test_calculate_calories_invalid_data(self):
        invalid_data = self.user_data.copy()
        invalid_data['sex'] = 'unknown'
        with self.assertRaises(ValueError):
            calculate_calories(invalid_data)

if __name__ == '__main__':
    unittest.main()
```