```javascript
import React, { Component } from 'react';
import { auth } from '../services/auth.js';
import '../styles/Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, loading: false });
      } else {
        this.setState({ user: null, loading: false });
      }
    });
  }

  render() {
    const { user, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return <div>Please log in.</div>;
    }

    return (
      <div className="Profile">
        <h1>Welcome, {user.displayName}</h1>
        <p>Email: {user.email}</p>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    );
  }
}

export default Profile;
```