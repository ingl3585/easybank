import React, { useState } from 'react';
import './nav.css';
import Logo from '../../images/logo.svg';

const Nav = () => {
	const [activeNav, setActiveNav] = useState(false);
	const [activeNavLinksContainer, setActiveNavLinksContainer] = useState(false);
	const [activeNavLinks, setActiveNavLinks] = useState(false);
	const [activeNavBg, setActiveNavBg] = useState(false);
	const [activeNavBgAnimation, setActiveNavBgAnimation] = useState(false);
	const toggleMobileNavMenu = () => {
		setActiveNav(!activeNav);
		setActiveNavLinksContainer(!activeNavLinksContainer);
		setActiveNavLinks(!activeNavLinks);
		setActiveNavBg(!activeNavBg);
		setActiveNavBgAnimation(!activeNavBgAnimation);
	};
	return (
		<header className='header'>
			<div
				className={`${activeNavBg ? 'active-nav-bg' : 'nav-bg'} ${
					activeNavBgAnimation ? 'fade-in' : 'fade-out'
				}`}></div>
			<nav className='nav'>
				<a className='logo' href='/'>
					<img src={Logo} alt='logo' />
				</a>
				<div
					className={`hamburger-nav ${activeNav ? 'active-hamburger-nav' : ''}`}
					onClick={toggleMobileNavMenu}>
					<div className='hamburger-nav-bars bar-one'></div>
					<div className='hamburger-nav-bars bar-two'></div>
					<div className='hamburger-nav-bars bar-three'></div>
				</div>
				<div
					className={`${
						activeNav ? 'active-nav-links-container' : 'nav-links-container'
					} ${activeNavBgAnimation ? 'fade-in' : 'fade-out'}`}>
					<ul
						className={`nav-links ${activeNavLinks ? 'active-nav-links' : ''}`}>
						<li>
							<a className='single-nav-link' href='#/'>
								Home
							</a>
						</li>
						<li>
							<a className='single-nav-link' href='#/'>
								About
							</a>
						</li>
						<li>
							<a className='single-nav-link' href='#/'>
								Contact
							</a>
						</li>
						<li>
							<a className='single-nav-link' href='#/'>
								Blog
							</a>
						</li>
						<li>
							<a className='single-nav-link' href='#/'>
								Careers
							</a>
						</li>
					</ul>
				</div>
				<button className='nav-btn' type='button'>
					Request Invite
				</button>
			</nav>
		</header>
	);
};

export default Nav;
