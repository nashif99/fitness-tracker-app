```python
import unittest
from models import User, Food, Exercise
from app import create_app
from db import db

class TestModels(unittest.TestCase):

    def setUp(self):
        self.app = create_app('testing')
        self.client = self.app.test_client
        self.db = db

    def test_user_model(self):
        user = User(username='testuser', password='testpassword')
        self.db.session.add(user)
        self.db.session.commit()

        found_user = User.query.filter_by(username='testuser').first()
        self.assertEqual(found_user.username, 'testuser')

    def test_food_model(self):
        food = Food(name='apple', calories=95)
        self.db.session.add(food)
        self.db.session.commit()

        found_food = Food.query.filter_by(name='apple').first()
        self.assertEqual(found_food.name, 'apple')

    def test_exercise_model(self):
        exercise = Exercise(name='running', calories_burned=100)
        self.db.session.add(exercise)
        self.db.session.commit()

        found_exercise = Exercise.query.filter_by(name='running').first()
        self.assertEqual(found_exercise.name, 'running')

    def tearDown(self):
        with self.app.app_context():
            self.db.session.remove()
            self.db.drop_all()

if __name__ == "__main__":
    unittest.main()
```