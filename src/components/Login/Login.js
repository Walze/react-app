import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getPosts, loginUser } from './../../actions/axios'
import './Login.css'

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleChange(e) {
    if (!e)
      for (let prop in this.state.user)
        this.setState({ user: { [prop]: '' } })
    else
      this.setState({
        user: {
          [e.target.name]: e.target.value
        }
      })
  }

  submit(e) {
    this.props.loginUser(this.state.user)
    this.handleChange(false)
    e.preventDefault()
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
                <h5>E-mail</h5>
                <input
                  name='email'
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.user.email || ''}
                  className="form-control form-control-lg"
                  placeholder="Enter your e-mail"
                />
              </div>

              <div className="form-group col-12">
                <h5>Password</h5>
                <input
                  name='password'
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.user.password || ''}
                  className="form-control form-control-lg"
                  placeholder="Enter Your Password"
                />
              </div>

              <br />

              <div className="col-12 form-group ">
                <button type='submit' className="col-12 btn btn-primary btn-lg" onClick={this.submit}>Login</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)

