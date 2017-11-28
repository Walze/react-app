import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { storeCookie } from './../actions/STORE_COOKIE'
import { loggout } from './../actions/axios'

import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Home from './Home/Home'


import NavLogin from './Nav/NavLogin'
import NavLogged from './Nav/NavLogged'


class Main extends Component {
	componentWillMount() {
		this.props.storeCookie()
	}

	displayNav() {
		if (!this.props.session.username)
			return <NavLogin />

		return <NavLogged loggout={this.props.loggout} session={this.props.session} />
	}

	render() {
		return (
			<Router>
				<div>

					{this.displayNav()}
					{JSON.stringify(this.props.session)}


					<Route exact path="/" component={Home} />
					<Route path="/login" render={(props) =>
						(<Login {...props} />)
					} />
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
		storeCookie,
		loggout
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)


