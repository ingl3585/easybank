import React from 'react';
import Banking from '../../images/icon-online.svg';
import Budgeting from '../../images/icon-budgeting.svg';
import Onboarding from '../../images/icon-onboarding.svg';
import API from '../../images/icon-api.svg';
import './main.css';

const Main = () => {
	return (
		<main className='features'>
			<h2>Why choose Easybank?</h2>
			<p>
				We leverage Open Banking to turn your bank account into your financial
				hub. <br />
				Control your finances like never before.
			</p>
			<div className='feature-grid'>
				<div className='feature-item'>
					<div className='feature-icon'>
						<img src={Banking} alt='feature-icon' />
					</div>
					<div className='feature-title'>Online Banking</div>
					<div className='feature-description'>
						Our modern web and mobile applications allow you to keep track of
						your finances wherever you are in the world.
					</div>
				</div>
				<div className='feature-item'>
					<div className='feature-icon'>
						<img src={Budgeting} alt='feature-icon' />
					</div>
					<div className='feature-title'>Simple Budgeting</div>
					<div className='feature-description'>
						See exactly where your money goes each month. Receive notifications
						when you’re close to hitting your limits.
					</div>
				</div>
				<div className='feature-item'>
					<div className='feature-icon'>
						<img src={Onboarding} alt='feature-icon' />
					</div>
					<div className='feature-title'>Fast Onboarding</div>
					<div className='feature-description'>
						We don’t do branches. Open your account in minutes online and start
						taking control of your finances right away.
					</div>
				</div>
				<div className='feature-item'>
					<div className='feature-icon'>
						<img src={API} alt='feature-icon' />
					</div>
					<div className='feature-title'>Open API</div>
					<div className='feature-description'>
						Manage your savings, investments, pension, and much more from one
						account. Tracking your money has never been easier.
					</div>
				</div>
			</div>
		</main>
	);
};

export default Main;
