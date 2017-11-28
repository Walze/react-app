import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeCookie } from './../actions/STORE_COOKIE'

import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

class Main extends Component {
  componentWillMount() {
    this.props.storeCookie()
  }

  render() {
    return (
      <Router>
        <div>
          <ul className="nav justify-content-center">
            <li className='nav-item'>
              <Link className='nav-link' to="/">Login</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/signup">Sign Up</Link>
            </li>
          </ul>

          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    )
  }
}


function mapStateToProps(state) {
  return {
    session: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    storeCookie
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)


