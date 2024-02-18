import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = (props) => {
	return <div {...props}>
		<Link to='/shop'>Shop</Link>
		<Link to='/cart'>Cart</Link>
		<Link to='/admin'>Admin</Link>
	</div>;
};
