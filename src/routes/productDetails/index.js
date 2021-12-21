import { h } from 'preact';
import style from './style.css';
import { useContext } from 'preact/hooks';
import { CarContext } from '../../hooks/carContext';

// Note: `id` comes from the URL, courtesy of our router
const ProductDetails = ({ id }) => {
	const context = useContext(CarContext)

	return (
		<div class={style.profile}>
			<h1>Product: {id}</h1>
			<h1>Context: {context.casa}</h1>
			
		</div>
	);
}

export default ProductDetails;
