import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavLogin extends Component {
	render() {
		return (
			<ul className="nav justify-content-center">
				<li className='nav-item'>
					<Link className='nav-link' to="/">Login</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to="/signup">Sign Up</Link>
				</li>
			</ul>
		)
	}
}

export default NavLogin