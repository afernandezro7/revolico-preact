import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { BsSearch } from "react-icons/bs";
import style from './style.css';

export const SearchBar = ({onSearch}) => {

    const [criteria, setcriteria] = useState('')

    const handleInputChange = (e) => {
        setcriteria(e.target.value)
    }

    const handleSearch = async(e) => {
        e.preventDefault();
        onSearch(criteria)
        
    }

    useEffect(() => {
        onSearch(criteria)
    }, [criteria, onSearch])

    return (
        <div class={style.search}>
            <form onSubmit={handleSearch}>
                <input class={style.formControl} type="text" name='criteria' value={criteria} onInput={ handleInputChange } />
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
