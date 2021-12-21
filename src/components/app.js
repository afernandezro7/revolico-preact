import { h } from 'preact';
import { Router } from 'preact-router';


import Header from './header';

// Code-splitting is automated for `routes` directory
import ProductList from '../routes/productList';
import ProductDetails from '../routes/productDetails';
import { CarProvider } from '../hooks/carContext';

const App = () => (
	<CarProvider>
		<div id="app">
			<Header />
			<Router>
				<ProductList path="/" />
				<ProductDetails path="/products/:id" />
		
			</Router>
		</div>
	</CarProvider>
)

export default App;
