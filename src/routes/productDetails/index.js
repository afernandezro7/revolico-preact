import { h } from 'preact';
import { route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import DetailsActions from '../../components/detailsActions';
import DetailsDescription from '../../components/detailsDescription';
import { ProductCard } from '../../components/ProductCard';
import { ProductImage } from '../../components/ProductCard/ProductImage';
import { fetApiSrv } from '../../services';
import style from './style.css';

const items = [ 
    {name:'brand',title:'Marca'},
    {name:'model',title:'Modelo'},
    {name:'price',title:'Precio'},
    {name:'cpu',title:'CPU'},
    {name:'ram',title:'RAM'},
    {name:'os',title:'OS'},
    {name:'displayResolution',title:'Pantalla'},
    {name:'battery',title:'Batería'},
    {name:'primaryCamera' ,title:'Cámara Principal'},
    {name:'secondaryCamera',title:'Cámara Segundaria'},
    {name:'dimentions',title:'Dimensiones'},
    {name:'weight',title:'Peso'}
];

// Note: `id` comes from the URL, courtesy of our router
const ProductDetails = ({ id }) => {

	const [product, setproduct] = useState(null)

	useEffect(() => {
		fetApiSrv.getProductDetail(id)
			.then(res => {
				if (!res.id) route('/', true);
				console.log(res)
				setproduct(res)
			})
			.catch(error => {
				console.log(error)
				route('/', true);
			})
	}, [id])

	if (!product) {
		return (
			<div class={style.profile}>
				<span>loading</span>
			</div>
		)
	}

	return (
		<div class={style.details}>
			<h1>Producto: {product.model}</h1>

			<div class={style.detailsWrapper}>
				<ProductCard product={product} styles={{ minWidth: 400 }}>
					<ProductImage />
				</ProductCard>

				<div class={style.detailsInfo} >				
					<DetailsDescription 
						product={product} 
						items={items} 
					/>
					<DetailsActions product={product} />		
					
				</div>

			</div>





		</div>
	);
}

export default ProductDetails;
