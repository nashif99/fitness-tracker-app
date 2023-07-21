```python
from flask import Flask, redirect, request, url_for, session
from flask_oauthlib.client import OAuth, OAuthException
from models import User
from db import db_session

app = Flask(__name__)
app.config['SECRET_KEY'] = 'development'
oauth = OAuth(app)

# Configure the OAuth 2.0 client
fitness_app = oauth.remote_app(
    'fitness_app',
    consumer_key='FITNESS_APP_CLIENT_ID',
    consumer_secret='FITNESS_APP_CLIENT_SECRET',
    request_token_params={'scope': 'email'},
    base_url='https://www.fitnessapp.com/api/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://www.fitnessapp.com/oauth/token',
    authorize_url='https://www.fitnessapp.com/oauth/authorize'
)

@app.route('/login')
def login():
    callback=url_for(
        'authorized',
        next=request.args.get('next') or request.referrer or None,
        _external=True
    )
    return fitness_app.authorize(callback=callback)

@app.route('/logout')
def logout():
    session.pop('fitness_app_token', None)
    return redirect(url_for('index'))

@app.route('/login/authorized')
@fitness_app.authorized_handler
def authorized(resp):
    if resp is None or isinstance(resp, OAuthException):
        return 'Access denied: reason=%s error=%s' % (
            request.args['error_reason'],
            request.args['error_description']
        )

    session['fitness_app_token'] = (resp['access_token'], '')
    user = User.query.filter_by(email=resp['email']).first()

    if user is None:
        user = User(resp['email'])
        db_session.add(user)
        db_session.commit()

    return redirect(url_for('index'))

@fitness_app.tokengetter
def get_fitness_app_oauth_token():
    return session.get('fitness_app_token')

if __name__ == '__main__':
    app.run()
```