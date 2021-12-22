import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useContext } from 'preact/hooks';
import { urlContext } from '../../hooks/urlContext';
import style from './style.css';

export const BreadCrumb = () => {
    
    const {state} = useContext(urlContext)

    return (
        <>
            {
                state.model &&
                    <div class={style.breadcrumb}>
                        <ol>
                            <li class={style.breadcrumbItem}><Link href="/"><span>Products</span> /</Link></li> 
                            <li class={`${style.breadcrumbItem} ${style.active} `}>{state.model}</li>
                        </ol>
                    </div>
            }
        </>
    );
}