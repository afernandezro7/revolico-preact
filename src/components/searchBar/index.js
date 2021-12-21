import { h } from 'preact';
import { BsSearch } from "react-icons/bs";
import { fetApiSrv, storageSrv } from '../../services';
import style from './style.css';

export const SearchBar = () => {

    const handleSearch = async(e) => {
        e.preventDefault();

        const products = await fetApiSrv.getProducts()
        storageSrv.setProducts(products)
        console.log(storageSrv.getProducts())
    }

    return (
        <div class={style.search}>
            <form onSubmit={handleSearch}>
                <input class={style.formControl} type="text" />
                <BsSearch 
                    style={{
                        height: 15,
                        width: 15,
                        position: 'relative',
                        top: 2,
                        right: 20,
                }} />
            </form>
        </div>
    )
}
