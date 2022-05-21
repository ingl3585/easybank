import React from 'react';
import './nav.css';
import Logo from '../../images/logo.svg';

const Nav = () => {
	return (
		<header className='header'>
			<nav className='nav'>
				<a className='logo' href='/'>
					<img src={Logo} alt='logo' />
				</a>
				<a className='hamburger-nav' href='#'>
					<span className='hamburger-nav-bars bar-one'></span>
					<span className='hamburger-nav-bars bar-two'></span>
					<span className='hamburger-nav-bars bar-three'></span>
				</a>
				<ul className='nav-links'>
					<li>
						<a className='single-nav-link' href='/'>
							Home
						</a>
					</li>
					<li>
						<a className='single-nav-link' href='/'>
							About
						</a>
					</li>
					<li>
						<a className='single-nav-link' href='/'>
							Contact
						</a>
					</li>
					<li>
						<a className='single-nav-link' href='/'>
							Blog
						</a>
					</li>
					<li>
						<a className='single-nav-link' href='/'>
							Careers
						</a>
					</li>
				</ul>
				<button className='nav-btn' type='button'>
					Request Invite
				</button>
			</nav>
		</header>
	);
};

export default Nav;
