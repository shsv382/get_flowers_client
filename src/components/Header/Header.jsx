import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = (props) => {
	return <header {...props}>
		<Link to='/'>Home</Link>
		<Link to='/shop'>Shop</Link>
		<Link to='/cart'>Cart</Link>
		<Link to='/products/1'>1</Link>
		<Link to='/admin'>Admin</Link>
	</header>;
};
