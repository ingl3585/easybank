import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<Nav />
			<Hero />
			<Features />
			<Articles />
			<Footer />
		</div>
	);
};

export default App;
