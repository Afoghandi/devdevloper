import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to='/'>
					<a onClick={logout} href='!#'>
						{' '}
						<i className='fas fa-sign-out-alt'> </i>
						<span className='hide-sm'> logout</span>{' '}
					</a>{' '}
				</Link>{' '}
			</li>{' '}
		</ul>
	);
	const guestLinks = (
		<ul>
			<li>
				<Link to='/'>
					<a href='#!'> Developers </a>{' '}
				</Link>{' '}
			</li>{' '}
			<li>
				<Link to='/register'>
					<a href='register'> Register </a>{' '}
				</Link>{' '}
			</li>{' '}
			<li>
				<Link to='/login'>
					<a href='login'> Login </a>{' '}
				</Link>{' '}
			</li>{' '}
		</ul>
	);
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-code'> </i> DevConnector{' '}
				</Link>{' '}
			</h1>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks} </Fragment>
			)}
		</nav>
	);
};
Navbar.prototype = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};
const mapToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapToProps, { logout })(Navbar);
