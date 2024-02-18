import styles from './Shop.module.scss';
import { fetchData } from '../../redux/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../../constants';
import Spinner from '../../components/spinner/spinner.component';
import { Link } from 'react-router-dom';

export function Shop(props) {
	const products = useSelector(state => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData(API_URL + "/product"));
	}, [dispatch]);

	return <div {...props}>
		<h1>Shop Page</h1>
		{
			(products.pending) ? 
				<Spinner /> :
				products.error ?
					<div>Не удалось загрузить товары</div> :		
						products.products?.rows?.map(product => (
							<Link to={`/products/${product.id}`}>
								<div key={product.id}>{product.name}</div>
							</Link>
						)) 
		}
	</div>;
};
