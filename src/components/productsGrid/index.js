import { h } from 'preact';
import { ProductCard } from '../ProductCard';
import { ProductImage } from '../ProductCard/ProductImage';
import { ProductDescription } from '../ProductCard/ProductDescription';
import style from './style.css';
import { Link } from 'preact-router';

export const ProductsGrid = ({ products = [] }) => {

    return (
        <div class={style.gridWrapper}>
            {
                products.map(product => (
                    <ProductCard key={product.id} product={product}>
                        <ProductImage />
                        <Link href={`/products/${product.id}`}>
                            <ProductDescription />
                        </Link>
                    </ProductCard>
                ))
            }
        </div>
    )
}
