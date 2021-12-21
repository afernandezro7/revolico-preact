import { h } from 'preact';
import { Router } from 'preact-router';


import Header from './header';

// Code-splitting is automated for `routes` directory
import ProductList from '../routes/productList';
import ProductDetails from '../routes/productDetails';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<ProductList path="/" />
			<ProductDetails path="/products/:id" />
	
		</Router>
	</div>
)

export default App;
