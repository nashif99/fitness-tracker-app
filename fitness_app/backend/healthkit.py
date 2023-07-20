```python
import healthkit

class HealthKitData:
    def __init__(self, user_id):
        self.user_id = user_id
        self.healthkit = healthkit.HealthKit()

    def get_health_data(self):
        return self.healthkit.get_health_data(self.user_id)

    def get_exercise_data(self):
        return self.healthkit.get_exercise_data(self.user_id)

    def update_health_data(self, health_data):
        self.healthkit.update_health_data(self.user_id, health_data)

    def update_exercise_data(self, exercise_data):
        self.healthkit.update_exercise_data(self.user_id, exercise_data)
```