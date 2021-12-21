import { h } from 'preact';
// import { Link } from 'preact-router/match';
import { HeaderLogo } from './HeaderLogo';
import style from './style.css';
import logo from '../../assets/icons/android-chrome-192x192.png'
import { CarItems } from './CarItems';

const Header = () => (
	<header class={style.header}>
		
		<HeaderLogo img={logo} />
		
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
