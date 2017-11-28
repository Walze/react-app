import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeCookie } from './../actions/STORE_COOKIE'

import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import NavLogin from './Nav/NavLogin'
import NavLogged from './Nav/NavLogged'


class Main extends Component {
	componentWillMount() {
		this.props.storeCookie()
	}

	navDisplay() {
		if (!this.props.session.username)
			return <NavLogin />
		else
			return <NavLogged session={this.props.session} />
	}

	render() {
		return (
			<Router>
				<div>

					{this.navDisplay()}
					{JSON.stringify(this.props.session)}


					<Route path="/login" component={Login} />
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


