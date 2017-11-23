import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import SignUp from './SignUp/SignUp';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav justify-content-center">
            <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/signup">Sign Up</Link></li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}
