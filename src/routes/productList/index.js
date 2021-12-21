import { h } from 'preact';
import { ProductsGrid } from '../../components/productsGrid';
import { ProductGroup } from '../../components/ProductsGroup';
import { SearchBar } from '../../components/searchBar';
import style from './style.css';
const products = [
	{
		id:"ZmGrkLR1PXOTpxsU4jjApcv",
		brand:"Acer",
		model:"Iconia Talk S",
		price:"170",
		imgUrl:"https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
	},
	{
		id:"ZmG2kLRPXOTpixsU4werwejAcv",
		brand:"Acer",
		model:"Liquid Z6",
		price:"170",
		imgUrl:"https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
	},
	{
		id:"ZmGrk3LRPXOuTpxsU4jjAcv",
		brand:"Acer",
		model:"Iconia Tab 10 A3-A40",
		price:"170",
		imgUrl:"https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
	},
	{
		id:"ZmGrkLRPX4OTpxsUy4werwejAcv",
		brand:"Acer",
		model:"Iconia Talk S",
		price:"170",
		imgUrl:"https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
	},
	{
		id:"ZmGrkLRPX5rOTpxsU4jjAcv",
		brand:"Acer",
		model:"Liquid X2",
		price:"170",
		imgUrl:"https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg"
	},
	{
		id:"ZmGrkLRP6XOTpxesU4werwejAcv",
		brand:"Acer",
		model:"Iconia Talk S",
		price:"170",
		imgUrl:"https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg"
	}
]

const ProductList = () => (
	<div class={style.home}>
		<h1>Nuestros Productos </h1>
		<ProductGroup>
			<div class={style.searchWrapper}>
				<SearchBar />
			</div>
			<ProductsGrid products={products} />
		</ProductGroup>
	</div>
);

export default ProductList;
