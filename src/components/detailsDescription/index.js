import { h } from 'preact';
import style from './style.css';


const DetailsDescription = ({items,product}) => (
    <div class={style.detailsWrapper}>
        <ul class={style.listGroup}>
            {
                items.map( item => (
                    <li key={item.name} class={style.listGroupItem}>
                        {item.title}
                        <span class={style.itemInfo}>{product[item.name] ? product[item.name]  : '-' }</span>
                    </li>
                ))
            }
            
        </ul>

    </div>
);

export default DetailsDescription;


