import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<NavLink exact activeClassName="active" to="/">Home</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/battle">Battle</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/popular">Popular</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav