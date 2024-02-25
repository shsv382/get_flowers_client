import styles from './ProductCardMenu.module.scss';


export const ProductCardMenu = ({ options, className }) => {
	return <div className={[styles.options, className].join(' ')}>
		{
			options.map(option => (
				<span 
				className={styles.option}
				onClick={option.action}
				>
					<i className={[`icon-${option.icon}`, styles.optionIcon].join(' ')} />
				</span>
			))
		}
	</div>;
};
