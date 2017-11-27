import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPosts, loginUser } from './../../actions/axios'
import { withCookies } from 'react-cookie'
import './Home.css'

class Home extends Component {

  constructor() {
    super()

    this.user = {}
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)

  }

  componentWillMount() {
  }

  handleChange(e) {
    this.user[e.target.name] = e.target.value
  }

  submit(e) {
    e.preventDefault()
    this.props.loginUser(this.user)
    console.log(this.props.cookies.getAll())
  }

  render() {
    return (
      <div className="container" >

        <form className="container">
          <h2>Login</h2>
          <br />
          <div className='row justify-content-center'>
            <div className="col-6">
              <div className="form-group col-12">
                <label>E-mail</label>
                <input
                  name='email'
                  type="email"
                  onChange={this.handleChange}
                  value={this.user.email}
                  className="form-control form-control-sm"
                  placeholder="Enter your e-mail"
                />
              </div>

              <div className="form-group col-12">
                <label>Password</label>
                <input
                  name='password'
                  type="password"
                  onChange={this.handleChange}
                  value={this.user.password}
                  className="form-control form-control-sm"
                  placeholder="Enter Your Password"
                />
              </div>

              <br />

              <div className="col-12 form-group">
                <button type='submit' className="col-12 btn btn-primary" onClick={this.submit}>Login</button>
              </div>
            </div>
          </div>

        </form >

      </div >

    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPosts,
    loginUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Home))

