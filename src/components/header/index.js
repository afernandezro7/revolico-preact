import { h } from 'preact';
import { HeaderLogo } from './HeaderLogo';
import style from './style.css';
import logo from '../../assets/icons/android-chrome-192x192.png'
import { CarItems } from './CarItems';
import { BreadCrumb } from './BreadCrumb';

const Header = () => (
	<header class={style.header}>

		<HeaderLogo img={logo} />

		<BreadCrumb />
		<nav>
			<CarItems />
		</nav>

		{/* <nav>
			<Link href="/">Home</Link>
			<Link href="/products/laptop">Laptop</Link>
		</nav> */}

	</header>
);

export default Header;
