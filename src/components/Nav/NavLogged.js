import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loggout } from './../../actions/axios'

class NavLogged extends Component {
  constructor() {
    super()

    this.loggout = this.loggout.bind(this)
  }

  loggout(e) {
    e.preventDefault()
    this.props.loggout()
  }

  render() {
    return (
      <ul className="nav justify-content-center">
        <li className='nav-item'>
          <a className='nav-link' href=''>
            {
              this.props.session.username.charAt(0).toUpperCase() +
              this.props.session.username.slice(1)
            }
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='' onClick={this.loggout}>
            Sair
          </a>
        </li>
      </ul>
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
    loggout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLogged)