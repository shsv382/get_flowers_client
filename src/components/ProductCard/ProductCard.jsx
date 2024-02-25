import styles from './ProductCard.module.scss';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { STATIC_URL } from '../../constants';
import { ProductCardMenu } from '../ProductCardMenu';

export default function ProductCard({product}) {
	const {name, description, price, img} = product;
	const view = () => {
		alert("Просмотрено")
	}
	const addToFavorites = () => {
		alert("Добавлено в избранное")
	}
	const addToCart = () => {
		alert("Добавлено в корзину")
	}
	const options = [
		{
			icon: 'eye',
			action: view
		},
		{
			icon: 'heart',
			action: addToFavorites
		},
		{
			icon: 'cart',
			action: addToCart
		}
	]

	return (
		<Card className={styles.card}>
			<div className={styles.imageWrapper}>
				<CardMedia
					component="img"
					alt={name}
					height="300"
					image={`${STATIC_URL}/${img}`}
					className={styles.image}
				/>
				<ProductCardMenu options={options} className={styles.options} />
			</div>
			<CardContent className={styles.cardContent}>
				<h6 className={styles.name}>
					{name}
				</h6>
			</CardContent>
			<CardActions className={styles.actions}>
				<Typography gutterBottom variant="p" component="div" textAlign="center">
					{price} &#8381;
				</Typography>
				<Button className={styles.cardAction} size="small">Заказать</Button>
			</CardActions>
		</Card>
	);
}