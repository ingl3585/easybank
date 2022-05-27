import React from 'react';
import './hero.css';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero-img'></div>
				<div className='hero-text'>
					<h1> Next generation digital banking</h1>
					<p>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<button className='hero-btn' type='button'>
						Request Invite
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
