import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

export const BreadCrumb = () => {
    

    return (
        <div class={style.breadcrumb}>
			<ol>
				<li class={style.breadcrumbItem}><Link href="/"><span>Products</span> /</Link></li> 
				<li class={`${style.breadcrumbItem} ${style.active} `}>Liquid Z6</li>
			</ol>
		</div>
    );
}