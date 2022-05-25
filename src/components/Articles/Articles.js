import React from 'react';
import './articles.css';

const Articles = () => {
	return (
		<section className='articles'>
			<div className='article-intro'>
				<h2>Latest Articles</h2>
			</div>
			<div className='article-layout'>
				<a className='article-item' href='#/'>
					<div className='article-img currency'></div>
					<div className='article-text'>
						<div className='article-author'>By Claire Robinson</div>
						<h3 className='article-title'>
							Receive money in any currency with no fees
						</h3>
						<p className='article-desc'>
							The world is getting smaller and we’re becoming more mobile. So
							why should you be forced to only receive money in a single …
						</p>
					</div>
				</a>
				<a className='article-item' href='#/'>
					<div className='article-img dining'></div>
					<div className='article-text'>
						<div className='article-author'>By Wilson Hutton</div>
						<h3 className='article-title'>
							Treat yourself without worrying about money
						</h3>
						<p className='article-desc'>
							Our simple budgeting feature allows you to separate out your
							spending and set realistic limits each month. That means you …
						</p>
					</div>
				</a>
				<a className='article-item' href='#/'>
					<div className='article-img plane'></div>
					<div className='article-text'>
						<div className='article-author'>By Wilson Hutton</div>
						<h3 className='article-title'>
							Take your Easybank card wherever you go
						</h3>
						<p className='article-desc'>
							We want you to enjoy your travels. This is why we don’t charge any
							fees on purchases while you’re abroad. We’ll even show you …
						</p>
					</div>
				</a>
				<a className='article-item' href='#/'>
					<div className='article-img confetti'></div>
					<div className='article-text'>
						<div className='article-author'>By Claire Robinson</div>
						<h3 className='article-title'>
							Our invite-only Beta accounts are now live!
						</h3>
						<p className='article-desc'>
							After a lot of hard work by the whole team, we’re excited to
							launch our closed beta. It’s easy to request an invite through the
							site ...
						</p>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Articles;
