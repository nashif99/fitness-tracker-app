```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from .config import Config

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load configurations from config.py
app.config.from_object(Config)

# Initialize SQLAlchemy and Migrate
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Import views after initializing db to avoid circular imports
from . import views, auth, models, healthkit, calorie_calculator, aws

if __name__ == "__main__":
    app.run(debug=True)
```