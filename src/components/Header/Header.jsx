import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = (props) => {
	return <header {...props}>
		<div className={styles.container}>
			<div className={styles.logoContainer}>
				<Link className={styles.option} to='/'>LOGO</Link>
			</div>
		</div>
		<nav>
			<ul className={styles.optionsContainer}>
				<li className={styles.optionsLink}><Link className={styles.option} to='/admin'>Admin</Link></li>
				<li className={styles.optionsLink}><Link className={styles.option} to='/shop'>Shop</Link></li>
				<li className={styles.optionsLink}><Link className={styles.option} to='/cart'>Cart</Link></li>
			</ul>
		</nav>
	</header>;
};
