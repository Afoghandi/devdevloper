import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-code'></i> DevConnector
				</Link>
			</h1>
			<ul>
				<li>
					<Link to='/'>
						<a href='!#'>Developers</a>
					</Link>
				</li>
				<li>
					<Link to='/register'>
						<a href='register'>Register</a>
					</Link>
				</li>
				<li>
					<Link to='/login'>
						<a href='login'>Login</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
