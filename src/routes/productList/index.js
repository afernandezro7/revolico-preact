import { h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { urlContext } from '../../hooks/urlContext';
import { ProductsGrid } from '../../components/productsGrid';
import { ProductGroup } from '../../components/ProductsGroup';
import { SearchBar } from '../../components/searchBar';
import { useProduct } from '../../hooks/useProduct/useProduct';
import style from './style.css';


const ProductList = ({url}) => {

	const {products, setcriteria} = useProduct()
	const {reset} = useContext(urlContext)

	useEffect(() => {
		reset()
	}, [url])


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
