```python
from flask import Blueprint, request, jsonify
from .auth import requires_auth
from .models import User, Food, Exercise
from .calorie_calculator import calculate_calories

views = Blueprint('views', __name__)

@views.route('/user', methods=['GET'])
@requires_auth
def get_user():
    user_id = request.args.get('user_id')
    user = User.query.get(user_id)
    if user:
        return jsonify(user.to_dict()), 200
    return jsonify({"message": "User not found"}), 404

@views.route('/food', methods=['GET'])
@requires_auth
def get_food():
    food_id = request.args.get('food_id')
    food = Food.query.get(food_id)
    if food:
        return jsonify(food.to_dict()), 200
    return jsonify({"message": "Food not found"}), 404

@views.route('/exercise', methods=['GET'])
@requires_auth
def get_exercise():
    exercise_id = request.args.get('exercise_id')
    exercise = Exercise.query.get(exercise_id)
    if exercise:
        return jsonify(exercise.to_dict()), 200
    return jsonify({"message": "Exercise not found"}), 404

@views.route('/calories', methods=['GET'])
@requires_auth
def get_calories():
    user_id = request.args.get('user_id')
    user = User.query.get(user_id)
    if user:
        calories = calculate_calories(user.sex, user.height, user.weight, user.goal)
        return jsonify({"calories": calories}), 200
    return jsonify({"message": "User not found"}), 404
```