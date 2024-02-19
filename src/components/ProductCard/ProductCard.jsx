import styles from './ProductCard.module.scss';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { STATIC_URL } from '../../constants';

export default function ProductCard({product}) {
	const {name, description, price, img} = product;
  return (
    <Card className={styles.card}>
		<div className={styles.imageWrapper}>
			<CardMedia
				component="img"
				alt={name}
				height="200"
				image={`${STATIC_URL}/${img}`}
				className={styles.image}
			/>
		</div>
		<CardContent className={styles.cardContent}>
			<Typography gutterBottom variant="h5" component="div" textAlign="center">
				{name}
			</Typography>
		</CardContent>
		<CardActions className={styles.actions}>
			<Button className={styles.cardAction} size="small">Заказать</Button>
			<Typography gutterBottom variant="h5" component="div" textAlign="center">
				{price} &#8381;
			</Typography>
		</CardActions>
    </Card>
  );
}