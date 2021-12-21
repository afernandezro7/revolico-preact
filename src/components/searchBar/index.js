import { h } from 'preact';
import { BsSearch } from "react-icons/bs";
import style from './style.css';

export const SearchBar = () => {

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('search')
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
