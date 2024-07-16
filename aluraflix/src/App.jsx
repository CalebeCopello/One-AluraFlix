import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import AddVideo from './pages/AddVideo';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Index />}
					/>
					<Route
						path='/addVideo'
						element={<AddVideo />}
					/>
					<Route
						path='*'
						element={<div>404</div>}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
