import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createUser } from '../../actions/axios'

class SignUp extends Component {

  constructor() {
    super()

    this.user = {}
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(e) {
    this.user[e.target.name] = e.target.value
  }

  submit(e) {
    e.preventDefault()
    if (this.user.email.indexOf('@') > -1)
      this.props.createUser(this.user)
    else
      alert('Email Invalid')
  }

  render() {
    return (
      <form className="container">
        <h2>Sign Up</h2>
        <br />
        <div className='row justify-content-center'>
          <div className="col-6">
            <div className="form-group col-12">
              <label>Username</label>
              <input
                name='username'
                type="text"
                onChange={this.handleChange}
                value={this.user.username}
                className="form-control form-control-sm"
                placeholder="Insert Your Username"
              />
            </div>

            <div className="form-group col-12">
              <label>E-mail</label>
              <input
                name='email'
                type="email"
                onChange={this.handleChange}
                value={this.user.email}
                className="form-control form-control-sm"
                placeholder="example@any.com"
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
                placeholder="Insert Your Password"
              />
            </div>

            <br />

            <div className="col-12 form-group">
              <button type='submit' className="col-12 btn btn-primary" onClick={this.submit}>Sign Up</button>
            </div>
          </div>
        </div>

      </form >

    )
  }
}


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

