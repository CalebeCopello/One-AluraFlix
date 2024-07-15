import Header from './components/Header';

import './App.css';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<main className='flex w-full my-5'>
				<h1 className='text-3xl font-bold underline '>Hello world!</h1>
			</main>
			<Footer />
		</>
	);
}

export default App;
