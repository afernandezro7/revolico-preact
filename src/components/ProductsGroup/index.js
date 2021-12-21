import { h } from 'preact';
import style from './style.css';

export const ProductGroup = ({children}) => {
    return (
        <div class={style.productWrapper}>
            {children}
        </div>
    )
}
