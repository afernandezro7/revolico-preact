import { h } from 'preact';
import { Link } from 'preact-router/match';
import noImage from '../../assets/icons/no-logo.png'
import style from './style.css';

export const HeaderLogo = ({ img = '' }) => {
    let imgToShow =""

    if ( img ) {
        imgToShow = img;
    } else {
        imgToShow = noImage;
    }


    return (
        <Link class={style.logoWraper} href="/">
            <img class="logo" src={ imgToShow } alt="Logo" height="50" />
        </Link>
    );
}