import { h } from 'preact';
import { ProductsGrid } from '../../components/productsGrid';
import { ProductGroup } from '../../components/ProductsGroup';
import { SearchBar } from '../../components/searchBar';
import { useProduct } from '../../hooks/useProduct/useProduct';
import style from './style.css';


const ProductList = () => {

	const {products, setcriteria} = useProduct()

	return (
		<div class={style.home}>		
			<ProductGroup>
				<h1>Nuestros Productos </h1>
				<div class={style.searchWrapper}>
					<SearchBar onSearch={setcriteria} />
				</div>
				<ProductsGrid products={products} />
			</ProductGroup>			
		</div>
	)
};

export default ProductList;
