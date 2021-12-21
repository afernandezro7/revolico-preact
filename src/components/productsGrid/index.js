import { h } from 'preact';
import { ProductCard } from '../ProductCard';
import { ProductImage } from '../ProductCard/ProductImage';
import { ProductDescription } from '../ProductCard/ProductDescription';
import style from './style.css';

export const ProductsGrid = ({products= []}) => {

    return (
        <div class={style.gridWrapper}>
            {
              products.map( product => (
                    <ProductCard key={product.id} product={product}>
                        <ProductImage />
                        <ProductDescription />
                    </ProductCard>
                ))
            }
        </div>
    )
}
