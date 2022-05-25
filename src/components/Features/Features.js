import React from 'react';
import Banking from '../../images/icon-online.svg';
import Budgeting from '../../images/icon-budgeting.svg';
import Onboarding from '../../images/icon-onboarding.svg';
import API from '../../images/icon-api.svg';
import './features.css';

const Features = () => {
	return (
		<section className='features'>
			<div className='feature-intro'>
				<h2>Why choose Easybank?</h2>
				<p>
					We leverage Open Banking to turn your bank account into your financial
					hub. Control your finances like never before.
				</p>
			</div>
			<div className='feature-layout'>
				<div className='feature-item'>
					<div className='feature-img'>
						<img src={Banking} alt='feature-img' />
					</div>
					<div className='feature-title'>Online Banking</div>
					<div className='feature-desc'>
						Our modern web and mobile applications allow you to keep track of
						your finances wherever you are in the world.
					</div>
				</div>
				<div className='feature-item'>
					<div className='feature-img'>
						<img src={Budgeting} alt='feature-img' />
					</div>
					<div className='feature-title'>Simple Budgeting</div>
					<div className='feature-desc'>
						See exactly where your money goes each month. Receive notifications
						when you’re close to hitting your limits.
					</div>
				</div>
				<div className='feature-item'>
					<div className='feature-img'>
						<img src={Onboarding} alt='feature-img' />
					</div>
					<div className='feature-title'>Fast Onboarding</div>
					<div className='feature-desc'>
						We don’t do branches. Open your account in minutes online and start
						taking control of your finances right away.
					</div>
				</div>
				<div className='feature-item'>
					<div className='feature-img'>
						<img src={API} alt='feature-img' />
					</div>
					<div className='feature-title'>Open API</div>
					<div className='feature-desc'>
						Manage your savings, investments, pension, and much more from one
						account. Tracking your money has never been easier.
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
