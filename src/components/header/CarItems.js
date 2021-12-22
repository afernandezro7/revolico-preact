import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { BsCart3 } from "react-icons/bs";
import { CarContext } from '../../hooks/carContext';
import style from './style.css';

export const CarItems = () => {

    const { state } = useContext(CarContext)

    return (
        <button type="button" class={style.btn}>
            <BsCart3 /><span class={style.badge}>{state.count}</span>
        </button>
    );
}