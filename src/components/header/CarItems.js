import { h } from 'preact';
import { BsCart3 } from "react-icons/bs";
import style from './style.css';

export const CarItems = () => {

    return (
        <button type="button" class={style.btn}>
            <BsCart3 /><span class={style.badge}>9</span>
        </button>
    );
}