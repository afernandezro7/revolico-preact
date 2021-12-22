import { h } from 'preact';
import { Router } from 'preact-router';


import Header from './header';

// Code-splitting is automated for `routes` directory
import ProductList from '../routes/productList';
import ProductDetails from '../routes/productDetails';
import { CarProvider } from '../hooks/carContext';
import { UrlProvider } from '../hooks/urlContext';

const App = () => (

	<CarProvider>
		<UrlProvider>
			<div id="app">
				<Header />
				<Router>
					<ProductList path="/" />
					<ProductDetails path="/products/:id" />
			
				</Router>
			</div>
		</UrlProvider>
	</CarProvider>
)

export default App;
