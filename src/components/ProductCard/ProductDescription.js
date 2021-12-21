import { h } from 'preact';
import { ProductContext } from '.';
import { useContext } from 'preact/hooks';
import style from './style.css';

export const ProductDescription = () => {
    const {product} = useContext(ProductContext)

    return (
        <div class={style.productDescription}>
            <span class={ style.productModel }>
                { product.model } 
            </span>
            <span class={ style.productBrand}>
                { product.brand }
            </span>
            <span class={ style.productPrice }>
                $ { product.price }
            </span>
        </div>
    );
}