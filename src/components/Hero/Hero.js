import React from 'react';
import './hero.css';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-img'></div>
			<div className='hero-text'>
				<h1> Next generation digital banking</h1>
				<p>
					Take your financial life online. Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing, and much
					more.
				</p>
				<button className='hero-btn'>Request Invite</button>
			</div>
		</section>
	);
};

export default Hero;
