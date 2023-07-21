```python
import unittest
from app import app
from db import db
from models import User, Food, Exercise
from views import get_user, get_food, get_exercise, calculate_calories

class TestViews(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.db = db

    def test_get_user(self):
        response = self.app.get('/user/1')
        self.assertEqual(response.status_code, 200)

    def test_get_food(self):
        response = self.app.get('/food/1')
        self.assertEqual(response.status_code, 200)

    def test_get_exercise(self):
        response = self.app.get('/exercise/1')
        self.assertEqual(response.status_code, 200)

    def test_calculate_calories(self):
        user = User(id=1, sex='male', height=180, weight=80, goal='weight loss')
        self.db.session.add(user)
        self.db.session.commit()

        response = self.app.get('/calculate_calories/1')
        self.assertEqual(response.status_code, 200)

    def tearDown(self):
        with self.app.app_context():
            self.db.session.remove()
            self.db.drop_all()

if __name__ == "__main__":
    unittest.main()
```