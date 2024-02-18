import styles from './Product.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../../constants';

export function Product(props) {
	const params = useParams();
	const [product, setProduct] = useState({});

	const products = useSelector(state => state.products);

	useEffect(() => {
		if (products.products && products.products.rows) {
			const prod = products.products?.rows?.find(product => (
				product.id === Number(params.productId)
			))
			setProduct(prod);
		} else {
			fetch(API_URL + '/product/' + params.productId)
				.then(response => response.json())
				.then(setProduct)
		}
	}, [])

	return <div {...props}>
		<h1>{product.name}</h1>
	</div>;
};
