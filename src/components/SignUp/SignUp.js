import React, { Component } from 'react'

export default class SignUp extends Component {

  constructor() {
    super()

    this.user = {}
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.user[e.target.name] = e.target.value;
  }

  submit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.user));
  }

  render() {
    return (
      <form className="container">
        <h2>Sign Up</h2>
        <br />
        <div className='row justify-content-center'>
          <div className="col-6">
            <div className="form-group col-12">
              <label>Name</label>
              <input
                name='name'
                type="text"
                onChange={this.handleChange}
                value={this.user.name}
                className="form-control form-control-sm"
                placeholder="Insert Your Name"
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
              <button type='submit' className="col-12 btn btn-primary" onClick={this.submit}>Enviar</button>
            </div>
          </div>
        </div>

      </form >

    )
  }
}
