```python
import unittest
from fitness_app.backend.auth import authenticate_user, register_user

class TestAuth(unittest.TestCase):

    def setUp(self):
        self.valid_user = {
            "username": "testuser",
            "password": "testpassword"
        }
        self.invalid_user = {
            "username": "invaliduser",
            "password": "invalidpassword"
        }

    def test_authenticate_user_valid(self):
        result = authenticate_user(self.valid_user["username"], self.valid_user["password"])
        self.assertEqual(result["message"], "loginSuccess")

    def test_authenticate_user_invalid(self):
        result = authenticate_user(self.invalid_user["username"], self.invalid_user["password"])
        self.assertEqual(result["message"], "loginFailure")

    def test_register_user(self):
        result = register_user(self.valid_user["username"], self.valid_user["password"])
        self.assertEqual(result["message"], "registrationSuccess")

if __name__ == "__main__":
    unittest.main()
```