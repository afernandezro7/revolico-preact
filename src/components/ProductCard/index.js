import { h } from 'preact';
import style from './style.css';
import { createContext } from 'react';

export const ProductContext = createContext({});
const { Provider } = ProductContext;

export const ProductCard = ({ children, product } ) => {

    return (
        <Provider value={{product}}>
            <div className={ style.productCard }>
                { children }
            </div>
        </Provider>
    )
}