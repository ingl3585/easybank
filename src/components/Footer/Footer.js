import React from 'react';
import Logo from '../../images/logo-footer.svg';
import Facebook from '../../images/icon-facebook.svg';
import YouTube from '../../images/icon-youtube.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';
import './footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<a href='#/' className='footer-logo'>
				<img src={Logo} alt='logo' />
			</a>
			<div className='social-links'>
				<a href='#/'>
					<img src={Facebook} alt='facebook-logo' />
				</a>
				<a href='#/'>
					<img src={YouTube} alt='youtube-logo' />
				</a>
				<a href='#/'>
					<img src={Twitter} alt='twitter-logo' />
				</a>
				<a href='#/'>
					<img src={Pinterest} alt='pinterest-logo' />
				</a>
				<a href='#/'>
					<img src={Instagram} alt='instagram-logo' />
				</a>
			</div>
			<div className='footer-links column-one'>
				<a href='#/'>About Us</a>
				<a href='#/'>Contact</a>
				<a href='#/'>Blog</a>
			</div>
			<div className='footer-links column-two'>
				<a href='#/'>Careers</a>
				<a href='#/'>Support</a>
				<a href='#/'>Privacy Policy</a>
			</div>
			<div className='footer-bottom'>
				<button className='footer-btn'>Request Invite</button>
				<div className='footer-copyright'>
					&copy; Easybank. All Rights Reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;
