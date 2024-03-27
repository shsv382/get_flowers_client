import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Container } from "@mui/material";

export const Header = (props) => {
	return <header {...props}>
		<Container>
			<div className={styles.container}>
				<div className={styles.logoContainer}>
					<Link to='/' className={styles.logoLink}>
						<img src='logo192.png' className={styles.logo} />
						<span className={styles.logoText}>
							Get Flowers
						</span>
					</Link>
				</div>
				<nav>
					<ul className={styles.optionsContainer}>
						<li className={styles.optionsLink}><Link className={styles.option} to='/admin'>Admin</Link></li>
						<li className={styles.optionsLink}><Link className={styles.option} to='/shop'>Shop</Link></li>
						<li className={styles.optionsLink}><Link className={styles.option} to='/cart'>Cart</Link></li>
					</ul>
				</nav>
			</div>
		</Container>
	</header>;
};
