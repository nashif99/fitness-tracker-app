```python
def calculate_bmr(weight, height, age, sex):
    if sex == 'male':
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    else:
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
    return bmr

def calculate_tdee(bmr, activity_level):
    if activity_level == 'sedentary':
        tdee = bmr * 1.2
    elif activity_level == 'light':
        tdee = bmr * 1.375
    elif activity_level == 'moderate':
        tdee = bmr * 1.55
    elif activity_level == 'active':
        tdee = bmr * 1.725
    else:
        tdee = bmr * 1.9
    return tdee

def calculate_calorie_goal(tdee, weight_goal):
    if weight_goal == 'lose':
        calorie_goal = tdee - 500
    elif weight_goal == 'gain':
        calorie_goal = tdee + 500
    else:
        calorie_goal = tdee
    return calorie_goal
```