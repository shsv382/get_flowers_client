import styles from './Shop.module.scss';
import { fetchData } from '../../redux/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../../constants';
import Spinner from '../../components/spinner/spinner.component';

export function Shop(props) {
	const products = useSelector(state => state.products.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData(API_URL + "/product"));
	}, [dispatch]);

	return <div {...props}>
		<h1>Shop Page</h1>
		{
			(products && products.rows) ? 
			products.rows.map(product => <div>{product.name}</div>) :
			<Spinner />
		}
	</div>;
};
