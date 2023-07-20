```python
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    # General Config
    SECRET_KEY = os.getenv('SECRET_KEY')
    DEBUG = False
    TESTING = False

    # Database Config
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # OAuth Config
    OAUTH2_PROVIDER_ERROR_URI = '/error'
    OAUTH2_REFRESH_TOKEN_GENERATOR = True
    OAUTH2_TOKEN_EXPIRES_IN = {
        'authorization_code': 864000,
        'implicit': 3600,
        'password': 864000,
        'client_credentials': 864000
    }

    # AWS Config
    AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
    AWS_REGION_NAME = os.getenv('AWS_REGION_NAME')

class DevelopmentConfig(Config):
    DEBUG = True

class TestingConfig(Config):
    TESTING = True

class ProductionConfig(Config):
    pass

config_dict = {
    'Development': DevelopmentConfig,
    'Testing': TestingConfig,
    'Production': ProductionConfig
}
```