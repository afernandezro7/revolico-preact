import { h } from 'preact';
import { ProductContext } from '.';
import { useContext } from 'preact/hooks';
import style from './style.css';
import noImage from './assets/no-image.jpg'

export const ProductImage = () => {
    const {product} = useContext(ProductContext)
    let imgToShow = '';

    if ( product.imgUrl ) {
        imgToShow = product.imgUrl;

    } else {
        imgToShow = noImage ;
    }

    return (<img className={ style.productImg } src={ imgToShow } alt="Product" />)
}