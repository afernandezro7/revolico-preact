import { h } from 'preact';
import style from './style.css';

// Note: `id` comes from the URL, courtesy of our router
const ProductDetails = ({ id }) => {

	return (
		<div class={style.profile}>
			<h1>Product: {id}</h1>
			
		</div>
	);
}

export default ProductDetails;
